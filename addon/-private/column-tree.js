/* eslint-disable getter-return */
import EmberObject, { get, set } from '@ember/object';
import { addObserver, removeObserver } from './utils/observer';
import { A as emberA } from '@ember/array';
import { DEBUG } from '@glimmer/env';

import { computed } from '@ember/object';
import { gt, readOnly } from '@ember/object/computed';

import { scheduler, Token } from 'ember-raf-scheduler';

import { objectAt, move, splice } from './utils/array';
import { mergeSort } from './utils/sort';
import { isEmpty } from '@ember/utils';
import { getScale, getOuterClientRect, getInnerClientRect } from './utils/element';
import { MainIndicator, DropIndicator } from './utils/reorder-indicators';
import { notifyPropertyChange } from './utils/ember';
import { assert } from '@ember/debug';

const SCROLL_THRESHOLD = 50;

const DEFAULT_COLUMN_WIDTH = 100;
const DEFAULT_MIN_WIDTH = 50;
const DEFAULT_MAX_WIDTH = Infinity;

const LOOP_COUNT_GUARD = 500;

export const RESIZE_MODE = {
  STANDARD: 'standard',
  FLUID: 'fluid',
};

export const FILL_MODE = {
  EQUAL_COLUMN: 'equal-column',
  FIRST_COLUMN: 'first-column',
  LAST_COLUMN: 'last-column',
  NTH_COLUMN: 'nth-column',
};

export const WIDTH_CONSTRAINT = {
  NONE: 'none',
  EQ_CONTAINER: 'eq-container',
  EQ_CONTAINER_SLACK: 'eq-container-slack',
  GTE_CONTAINER: 'gte-container',
  GTE_CONTAINER_SLACK: 'gte-container-slack',
  LTE_CONTAINER: 'lte-container',
};

/**
 * Divides x into y pieces where all y pieces are rounded
 * and sum to x. Assumes x is already rounded.
 * Returns a list of the pieces.
 *
 * For example:
 * 10 / 3 => [4, 3, 3]
 * -11 / 2 => [-6, -5]
 */
function divideRounded(x, n) {
  let neg = x < 0 === n < 0 ? 1 : -1;
  n = Math.abs(n);
  x = Math.abs(x);
  let z = Math.floor(x / n);
  let err = x - n * z;
  let result = Array(n);
  result.fill(neg * (z + 1), 0, err);
  result.fill(neg * z, err);
  return result;
}

const TableColumnMeta = EmberObject.extend({
  // If no width is set on the column itself, we cache a temporary width on the
  // meta object. This is set to the default width.
  _width: DEFAULT_COLUMN_WIDTH,

  isLeaf: readOnly('_node.isLeaf'),

  isFixed: readOnly('_node.isFixed'),

  isSortable: readOnly('_node.isSortable'),

  isResizable: readOnly('_node.isResizable'),

  isReorderable: readOnly('_node.isReorderable'),

  isSlack: readOnly('_node.isSlack'),

  width: readOnly('_node.width'),

  offsetLeft: readOnly('_node.offsetLeft'),

  offsetRight: readOnly('_node.offsetRight'),

  rowSpan: computed('isLeaf', '_node.{depth,tree.root.maxChildDepth}', function() {
    if (!this.get('isLeaf')) {
      return 1;
    }

    let maxDepth = this.get('_node.tree.root.maxChildDepth');
    let depth = this.get('_node.depth');

    return maxDepth - (depth - 1);
  }),

  columnSpan: computed('isLeaf', '_node.leaves.length', function() {
    if (this.get('isLeaf')) {
      return 1;
    }

    return this.get('_node.leaves.length');
  }),

  index: computed('isLeaf', '_node.offsetIndex', function() {
    if (this.get('isLeaf')) {
      return this.get('_node.offsetIndex');
    }
  }),

  isLastRendered: readOnly('_node.isLastRendered'),

  sortIndex: computed('_node.{tree.sorts.[],column.valuePath}', function() {
    let valuePath = this.get('_node.column.valuePath');
    let sorts = this.get('_node.tree.sorts');

    let sortIndex = 0;

    for (let i = 0; i < get(sorts, 'length'); i++) {
      let sorting = objectAt(sorts, i);

      if (get(sorting, 'valuePath') === valuePath) {
        sortIndex = i + 1;
        break;
      }
    }

    return sortIndex;
  }),

  isSorted: gt('sortIndex', 0),

  isMultiSorted: gt('_node.tree.sorts.length', 1),

  isSortedAsc: computed('_node.tree.sorts.[]', 'sortIndex', function() {
    let sortIndex = this.get('sortIndex');
    let sorts = this.get('_node.tree.sorts');

    return get(objectAt(sorts, sortIndex - 1), 'isAscending');
  }),
});

/**
  Single node of a ColumnTree
*/
const ColumnTreeNode = EmberObject.extend({
  _subcolumnNodes: null,

  isSlack: false,

  init() {
    this._super(...arguments);

    let tree = get(this, 'tree');
    let parent = get(this, 'parent');
    let column = get(this, 'column');

    if (!parent) {
      this.isRoot = true;
    } else {
      let columnMetaCache = get(tree, 'columnMetaCache');
      let meta = columnMetaCache.getOrCreate(column, TableColumnMeta);

      set(meta, '_node', this);
      meta.registerElement = (...args) => this.registerElement(...args);

      meta.startResize = (...args) => tree.startResize(this, ...args);
      meta.updateResize = (...args) => tree.updateResize(this, ...args);
      meta.endResize = (...args) => tree.endResize(this, ...args);

      meta.startReorder = (...args) => tree.startReorder(this, ...args);
      meta.updateReorder = (...args) => tree.updateReorder(this, ...args);
      meta.endReorder = (...args) => tree.endReorder(this, ...args);

      // Changes to the value directly should properly update all computeds on this
      // node, but we need to manually propagate changes upwards to notify any other
      // watchers
      this._notifyMaxChildDepth = () => notifyPropertyChange(parent, 'maxChildDepth');
      this._notifyLeaves = () => notifyPropertyChange(parent, 'leaves');

      addObserver(this, 'maxChildDepth', this._notifyMaxChildDepth);
      addObserver(this, 'leaves.[]', this._notifyLeaves);
    }
  },

  destroy() {
    this.cleanSubcolumnNodes();

    this._super(...arguments);
  },

  /**
    Fully destroys the child nodes in the event that they change or that this
    node is destroyed. If children are not destroyed, they will leak memory due
    to dangling references in Ember Meta.
  */
  cleanSubcolumnNodes() {
    if (this._subcolumnNodes !== null) {
      this._subcolumnNodes.forEach(n => n.destroy());
      this._subcolumnNodes = null;
    }
  },

  subcolumnNodes: computed('column.subcolumns.[]', 'tree.widthConstraint', function() {
    this.cleanSubcolumnNodes();

    if (get(this, 'isLeaf')) {
      return;
    }

    let tree = get(this, 'tree');
    let parent = this;

    this._subcolumnNodes = emberA(
      get(this, 'column.subcolumns').map(column => ColumnTreeNode.create({ column, tree, parent }))
    );

    let isRoot = get(this, 'isRoot');
    let isSlackModeEnabled = get(tree, 'isSlackModeEnabled');

    if (isRoot && isSlackModeEnabled) {
      let slackColumnNode = ColumnTreeNode.create({
        column: {
          isResizable: false,
          isReorderable: false,
          minWidth: 0,
          width: 0,
        },
        tree,
        parent,
        isSlack: true,
      });

      this._subcolumnNodes.push(slackColumnNode);
    }

    return this._subcolumnNodes;
  }),

  isLeaf: computed('column.subcolumns.[]', 'isRoot', function() {
    let subcolumns = get(this, 'column.subcolumns');
    if (get(this, 'isRoot')) {
      return false;
    }

    return !subcolumns || get(subcolumns, 'length') === 0;
  }),

  isSortable: computed('column.isSortable', 'tree.enableSort', function() {
    let enableSort = get(this, 'tree.enableSort');
    let valuePath = get(this, 'column.valuePath');
    let isSortable = get(this, 'column.isSortable');
    let isLeaf = get(this, 'isLeaf');

    return (
      isLeaf === true &&
      enableSort !== false &&
      isSortable !== false &&
      typeof valuePath === 'string'
    );
  }),

  isReorderable: computed('column.isReorderable', 'tree.enableReorder', function() {
    let enableReorder = get(this, 'tree.enableReorder');
    let isReorderable = get(this, 'column.isReorderable');

    return enableReorder !== false && isReorderable !== false;
  }),

  isResizable: computed('column.isResizable', 'tree.enableResize', function() {
    let isLeaf = get(this, 'isLeaf');

    if (isLeaf) {
      let enableResize = get(this, 'tree.enableResize');
      let isResizable = get(this, 'column.isResizable');

      return enableResize !== false && isResizable !== false;
    } else {
      let subcolumns = get(this, 'subcolumnNodes');

      return subcolumns.some(s => get(s, 'isResizable'));
    }
  }),

  isFixed: computed('parent.{isFixed,isRoot}', 'column.isFixed', function() {
    if (get(this, 'parent.isRoot')) {
      return get(this, 'column.isFixed');
    }

    return get(this, 'parent.isFixed');
  }),

  depth: computed('parent.depth', function() {
    if (get(this, 'parent')) {
      return get(this, 'parent.depth') + 1;
    }

    return 0;
  }),

  maxChildDepth: computed('isLeaf', 'subcolumns.@each.depth', function() {
    if (get(this, 'isLeaf')) {
      return get(this, 'depth');
    }

    return Math.max(...get(this, 'subcolumnNodes').map(s => get(s, 'maxChildDepth')));
  }),

  leaves: computed('isLeaf', 'subcolumnNodes.{[],@each.leaves}', function() {
    if (get(this, 'isLeaf')) {
      return [this];
    }

    return get(this, 'subcolumnNodes').reduce((leaves, subcolumn) => {
      leaves.push(...get(subcolumn, 'leaves'));

      return leaves;
    }, emberA());
  }),

  minWidth: computed('column.minWidth', function() {
    if (get(this, 'isLeaf')) {
      let columnMinWidth = get(this, 'column.minWidth');

      return typeof columnMinWidth === 'number' ? columnMinWidth : DEFAULT_MIN_WIDTH;
    }

    return get(this, 'subcolumnNodes').reduce((sum, subcolumn) => {
      let subcolumnMinWidth = get(subcolumn, 'minWidth');

      return sum + subcolumnMinWidth;
    }, 0);
  }),

  maxWidth: computed('column.maxWidth', function() {
    if (get(this, 'isLeaf')) {
      let columnMaxWidth = get(this, 'column.maxWidth');

      return typeof columnMaxWidth === 'number' ? columnMaxWidth : DEFAULT_MAX_WIDTH;
    }

    return get(this, 'subcolumnNodes').reduce((sum, subcolumn) => {
      let subcolumnMaxWidth = get(subcolumn, 'maxWidth');

      return sum + subcolumnMaxWidth;
    }, 0);
  }),

  width: computed('isLeaf', 'subcolumnNodes.@each.width', 'column.width', {
    get() {
      if (get(this, 'isLeaf')) {
        let column = get(this, 'column');
        let columnWidth = get(column, 'width');

        if (typeof columnWidth === 'number') {
          return columnWidth;
        } else {
          let meta = get(this, 'tree.columnMetaCache').get(column);
          return get(meta, '_width');
        }
      }

      return get(this, 'subcolumnNodes').reduce((sum, subcolumn) => {
        let subcolumnWidth = get(subcolumn, 'width');

        return sum + subcolumnWidth;
      }, 0);
    },

    set(key, newWidth) {
      let oldWidth = get(this, 'width');
      let isResizable = get(this, 'isResizable');
      let isSlack = get(this, 'isSlack');

      if (!isResizable && !isSlack) {
        return oldWidth;
      }

      let delta = newWidth - oldWidth;

      let minWidth = get(this, 'minWidth');
      let maxWidth = get(this, 'maxWidth');

      delta = Math.max(Math.min(oldWidth + delta, maxWidth), minWidth) - oldWidth;

      if (delta === 0) {
        return oldWidth;
      }

      if (get(this, 'isLeaf')) {
        let column = get(this, 'column');
        let columnWidth = get(column, 'width');
        let width = oldWidth + delta;

        if (typeof columnWidth === 'number') {
          set(column, 'width', width);
        } else {
          let meta = get(this, 'tree.columnMetaCache').get(column);
          set(meta, '_width', width);
        }
        return width;
      } else {
        let subcolumns = get(this, 'subcolumnNodes');

        // Delta can only be rendered at a pixel level of precision in tables in
        // some browsers, so we round and distribute the remainder as well. We also
        // don't know when we may hit a constraint (e.g. minWidth) so we have to do
        // this repeatedly. We take the largest chunk we can and try to fit it into
        // each piece in a loop.

        // We distribute chunks to the columns starting from the column with the
        // smallest width to the column with the largest width.
        let sortedSubcolumns = subcolumns
          .sortBy('width')
          .filter(n => get(n, 'isResizable'))
          .reverse();

        let loopCount = 0;
        let prevDelta = 0;
        delta = delta > 0 ? Math.floor(delta) : Math.ceil(delta);
        while (delta !== 0) {
          let deltaChunks = divideRounded(delta, sortedSubcolumns.length);
          for (let i = 0; i < deltaChunks.length; i++) {
            let subcolumn = sortedSubcolumns[i];
            let deltaChunk = deltaChunks[i];
            let oldWidth = get(subcolumn, 'width');
            let targetWidth = oldWidth + deltaChunk;

            set(subcolumn, 'width', targetWidth);

            let newWidth = get(subcolumn, 'width');

            // subtract the amount that changed, if any
            delta -= newWidth - oldWidth;

            if (delta === 0) {
              break;
            }
          }
          delta = delta > 0 ? Math.floor(delta) : Math.ceil(delta);

          // If we weren't able to change the delta at all, then we hit a hard
          // barrier. This can happen when a table has too many columns to size
          // down, for instance.
          if (prevDelta === delta) {
            break;
          }

          prevDelta = delta;

          loopCount++;
          if (loopCount > LOOP_COUNT_GUARD) {
            throw new Error('loop count exceeded guard while distributing width');
          }
        }

        return get(this, 'width');
      }
    },
  }),

  contentWidth: computed('subcolumnNodes.@each.{isSlack,width}', function() {
    return this.get('subcolumnNodes').reduce((sum, column) => {
      return column.get('isSlack') ? sum : sum + column.get('width');
    }, 0);
  }),

  offsetIndex: computed('parent.{offsetIndex,subcolumnNodes.[]}', function() {
    let parent = get(this, 'parent');

    if (!parent) {
      return 0;
    }

    let subcolumns = get(parent, 'subcolumnNodes');
    let offsetIndex = get(parent, 'offsetIndex');

    for (let column of subcolumns) {
      if (column === this) {
        break;
      }

      offsetIndex += 1;
    }

    return offsetIndex;
  }),

  offsetLeft: computed('parent.{offsetLeft,width}', function() {
    let parent = get(this, 'parent');

    if (!parent) {
      return 0;
    }

    let subcolumns = get(parent, 'subcolumnNodes');
    let offsetLeft = get(parent, 'offsetLeft');

    for (let column of subcolumns) {
      if (column === this) {
        break;
      }

      offsetLeft += get(column, 'width');
    }

    return offsetLeft;
  }),

  offsetRight: computed('parent.{offsetRight,width}', function() {
    let parent = get(this, 'parent');

    if (!parent) {
      return 0;
    }

    let subcolumns = get(parent, 'subcolumnNodes')
      .slice()
      .reverse();
    let offsetRight = get(parent, 'offsetRight');

    for (let column of subcolumns) {
      if (column === this) {
        break;
      }

      offsetRight += get(column, 'width');
    }

    return offsetRight;
  }),

  /**
   * Value is `true` if any of the following are true:
   *
   * 1) this is the slack leaf and has non-zero width
   * 2) this is the rightmost leaf and there is no slack leaf
   * 3) this is the rightmost leaf and the slack leaf has zero width
   *
   * Use this to style the rightmost column.
   */
  isLastRendered: computed(
    'tree.root.leaves.length',
    'tree.root.leaves.lastObject.{isSlack,width}',
    'offsetIndex',
    'isLeaf',
    'isSlack',
    'width',
    function() {
      let isLeaf = get(this, 'isLeaf');
      if (!isLeaf) {
        return false;
      }

      let tree = get(this, 'tree');
      let leaves = get(tree, 'root.leaves');
      let lastLeaf = get(leaves, 'lastObject');

      // calculate index from the right
      let offsetIndex = get(this, 'offsetIndex');
      let rightOffsetIndex = leaves.length - offsetIndex - 1;

      if (rightOffsetIndex === 0) {
        let isSlack = get(this, 'isSlack');
        let width = get(this, 'width');
        return !isSlack || width > 0;
      } else if (rightOffsetIndex === 1 && get(lastLeaf, 'isSlack')) {
        return get(lastLeaf, 'width') === 0;
      }

      return false;
    }
  ),

  registerElement(element) {
    this.element = element;
  },
});

export default EmberObject.extend({
  init() {
    this._super(...arguments);

    this.token = new Token();
    this._root = null;

    this._sortColumnsByFixed = this.sortColumnsByFixed.bind(this);
    this._ensureWidthConstraint = this.ensureWidthConstraint.bind(this);

    addObserver(this, 'columns.@each.isFixed', this._sortColumnsByFixed);
    addObserver(this, 'widthConstraint', this._ensureWidthConstraint);
  },

  destroy() {
    this.token.cancel();

    if (this._root) {
      this._root.destroy();
    }

    removeObserver(this, 'columns.@each.isFixed', this._sortColumnsByFixed);
    removeObserver(this, 'widthConstraint', this._ensureWidthConstraint);

    this._super(...arguments);
  },

  root: computed('columns', function() {
    if (this._root) {
      this._root.destroy();
    }

    let columns = get(this, 'columns');

    this._root = ColumnTreeNode.create({ column: { subcolumns: columns }, tree: this });
    return this._root;
  }),

  rows: computed('root.{maxChildDepth,leaves.[]}', function() {
    let rows = emberA();
    let root = get(this, 'root');
    let maxDepth = get(root, 'maxChildDepth');

    let previousLevel = [root];

    for (let i = 0; i < maxDepth; i++) {
      let currentLevel = previousLevel.reduce((children, node) => {
        if (!get(node, 'isLeaf')) {
          children.push(...get(node, 'subcolumnNodes'));
        }

        return children;
      }, []);

      let columns = currentLevel.map(node => get(node, 'column'));

      rows.pushObject(emberA(columns));

      previousLevel = currentLevel;
    }

    return rows;
  }),

  leaves: computed('root.leaves.[]', function() {
    return emberA(get(this, 'root.leaves').map(n => n.column));
  }),

  leftFixedNodes: computed('root.subcolumnNodes.@each.isFixed', function() {
    return get(this, 'root.subcolumnNodes').filterBy('isFixed', 'left');
  }),

  rightFixedNodes: computed('root.subcolumnNodes.@each.isFixed', function() {
    return get(this, 'root.subcolumnNodes').filterBy('isFixed', 'right');
  }),

  unfixedNodes: computed('root.subcolumnNodes.@each.isFixed', function() {
    return get(this, 'root.subcolumnNodes').filter(s => !get(s, 'isFixed'));
  }),

  scrollBounds: computed('leftFixedNodes.@each.width', 'rightFixedNodes.@each.width', function() {
    let { left: containerLeft, right: containerRight } = getInnerClientRect(this.container);

    containerLeft += get(this, 'leftFixedNodes').reduce((sum, n) => sum + get(n, 'width'), 0);
    containerRight -= get(this, 'rightFixedNodes').reduce((sum, n) => sum + get(n, 'width'), 0);

    return { containerLeft, containerRight };
  }),

  isSlackModeEnabled: computed('widthConstraint', function() {
    let widthConstraint = get(this, 'widthConstraint');
    return (
      widthConstraint === WIDTH_CONSTRAINT.EQ_CONTAINER_SLACK ||
      widthConstraint === WIDTH_CONSTRAINT.GTE_CONTAINER_SLACK
    );
  }),

  sortColumnsByFixed() {
    // disable observer
    if (this._isSorting) {
      return;
    }

    this._isSorting = true;

    let columns = get(this, 'columns');

    let sorted = mergeSort(columns, (a, b) => {
      let aIsFixed = get(a, 'isFixed');
      let bIsFixed = get(b, 'isFixed');

      let aValue = aIsFixed === 'left' ? -1 : aIsFixed === 'right' ? 1 : 0;
      let bValue = bIsFixed === 'left' ? -1 : bIsFixed === 'right' ? 1 : 0;

      return aValue - bValue;
    });

    let alreadySorted = true;

    for (let i = 0; i < columns.length; i++) {
      if (sorted[i] !== columns[i]) {
        alreadySorted = false;
        break;
      }
    }

    if (!alreadySorted) {
      splice(columns, 0, sorted.length, ...sorted);
    }

    this._isSorting = false;
  },

  /**
    Performs initial sizing of the table columns according to tree's
    `initialFillMode` property, then attempts to satisfy width constraint.

    In `eq-container-slack` and `gte-container-slack` width contraint modes,
    this allows a default layout to be applied before slack is allocated.
  */
  performInitialLayout() {
    if (!this.container) {
      return;
    }

    let leaves = get(this, 'root.leaves');

    // ensures that min and max widths are respected _before_ `applyFillMode()`
    // decides if the width constraint has been violated
    leaves.forEach(leaf => {
      let width = get(leaf, 'width');
      let minWidth = get(leaf, 'minWidth');
      let maxWidth = get(leaf, 'maxWidth');
      let newWidth = Math.min(Math.max(width, minWidth), maxWidth);
      set(leaf, 'width', newWidth);
    });

    let isSlackModeEnabled = get(this, 'isSlackModeEnabled');
    let initialFillMode = get(this, 'initialFillMode');

    if (isSlackModeEnabled && initialFillMode) {
      this.applyFillMode(initialFillMode);
    }

    this.ensureWidthConstraint();
  },

  /**
    Allocates excess whitespace to slack column (if present), then applies
    tree's `fillMode` in attempt to satisfy its `widthConstraint`.
   */
  ensureWidthConstraint() {
    if (!this.container) {
      return;
    }

    let isSlackModeEnabled = get(this, 'isSlackModeEnabled');

    if (isSlackModeEnabled) {
      this.updateSlackColumn();
    }

    this.applyFillMode();
  },

  /**
    Resizes the slack column to fill excess whitespace in the container. If
    table columns exceed the width of the container, the slack column is set to
    a width of zero.

    The slack column is only present when the `widthConstraint` property is set
    to `eq-container-slack` or `gte-container-slack`.
  */
  updateSlackColumn() {
    let slackColumn = get(this, 'root.subcolumnNodes').findBy('isSlack');

    if (slackColumn) {
      let containerWidth = this.getContainerWidth();
      let contentWidth = get(this, 'root.contentWidth');
      let width = Math.max(containerWidth - contentWidth, 0);
      slackColumn.set('width', width);
    }
  },

  /**
    Attempts to satisfy tree's width constraint by resizing columns according
    to the specifid `fillMode`. If no `fillMode` is specified, the tree's
    own `fillMode` property will be used.

    @param {String} fillMode
   */
  applyFillMode(fillMode) {
    fillMode = fillMode || get(this, 'fillMode');

    let widthConstraint = get(this, 'widthConstraint');
    let containerWidth = this.getContainerWidth();
    let contentWidth = get(this, 'root.contentWidth');
    let delta = containerWidth - contentWidth;

    if (
      (widthConstraint === WIDTH_CONSTRAINT.EQ_CONTAINER && delta !== 0) ||
      (widthConstraint === WIDTH_CONSTRAINT.EQ_CONTAINER_SLACK && delta !== 0) ||
      (widthConstraint === WIDTH_CONSTRAINT.LTE_CONTAINER && delta < 0) ||
      (widthConstraint === WIDTH_CONSTRAINT.GTE_CONTAINER && delta > 0) ||
      (widthConstraint === WIDTH_CONSTRAINT.GTE_CONTAINER_SLACK && delta > 0)
    ) {
      if (fillMode === FILL_MODE.EQUAL_COLUMN) {
        set(this, 'root.width', containerWidth);
      } else if (fillMode === FILL_MODE.FIRST_COLUMN) {
        this.resizeColumn(0, delta);
      } else if (fillMode === FILL_MODE.LAST_COLUMN) {
        let isSlackModeEnabled = get(this, 'isSlackModeEnabled');
        let columns = get(this, 'root.subcolumnNodes');
        let lastColumnIndex = isSlackModeEnabled ? columns.length - 2 : columns.length - 1;
        this.resizeColumn(lastColumnIndex, delta);
      } else if (fillMode === FILL_MODE.NTH_COLUMN) {
        let fillColumnIndex = get(this, 'fillColumnIndex');

        assert(
          "fillMode 'nth-column' must have a fillColumnIndex defined",
          !isEmpty(fillColumnIndex)
        );

        this.resizeColumn(fillColumnIndex, delta);
      }
    }
  },

  resizeColumn(index, delta) {
    let columns = get(this, 'root.subcolumnNodes');

    let fillColumn = columns[index];
    assert(
      `Invalid column index, ${index}, for a table with ${columns.length} columns`,
      fillColumn
    );

    let oldWidth = get(fillColumn, 'width');
    set(fillColumn, 'width', oldWidth + delta);
  },

  getContainerWidth() {
    let containerWidthAdjustment = get(this, 'containerWidthAdjustment') || 0;
    return getInnerClientRect(this.container).width * this.scale + containerWidthAdjustment;
  },

  getReorderBounds(node) {
    let parent = get(node, 'parent');
    let { scale } = this;
    let { scrollLeft } = this.container;
    let { left: containerLeft } = getInnerClientRect(this.container);

    let leftBound, rightBound, nodes;

    if (get(parent, 'isRoot')) {
      let isFixed = get(node, 'isFixed');

      if (isFixed === 'left') {
        nodes = get(this, 'leftFixedNodes');
      } else if (isFixed === 'right') {
        nodes = get(this, 'rightFixedNodes');
      } else {
        nodes = get(this, 'unfixedNodes');
      }
    } else {
      nodes = get(node, 'parent.subcolumnNodes');
    }

    if (DEBUG) {
      let firstReorderableFound = false;
      let lastReorderableFound = false;

      for (let node of nodes) {
        if (lastReorderableFound && get(node, 'isReorderable')) {
          assert(
            'Non-reorderable columns may only be contiguous segments at the beginning or end of their section (i.e. node middle columns in a list).',
            false
          );
        } else if (!firstReorderableFound && get(node, 'isReorderable')) {
          firstReorderableFound = true;
        } else if (firstReorderableFound && !lastReorderableFound && !get(node, 'isReorderable')) {
          lastReorderableFound = true;
        }
      }
    }

    let reorderableNodes = nodes.filter(n => get(n, 'isReorderable'));

    let left = getOuterClientRect(reorderableNodes[0].element).left;
    let right = getOuterClientRect(reorderableNodes[reorderableNodes.length - 1].element).right;

    leftBound = (left - containerLeft) * scale + scrollLeft;
    rightBound = (right - containerLeft) * scale + scrollLeft;

    return { leftBound, rightBound };
  },

  registerContainer(container) {
    this.container = container;
    this.scale = getScale(container);

    get(this, 'root').registerElement(container);

    scheduler.schedule('sync', this.ensureWidthConstraint.bind(this), this.token);
  },

  getClosestColumn(column, left, isFixed) {
    // If the column is fixed, adjust finder method and offset by the scroll
    // position since the column will appear stationary
    if (isFixed === 'left') {
      left -= this.container.scrollLeft;
    } else if (isFixed === 'right') {
      left += this.container.scrollWidth;
      left -= this.container.scrollLeft;
      left -= getInnerClientRect(this.container).width * this.scale;
    }

    let subcolumns = get(column.parent, 'subcolumnNodes');

    for (let column of subcolumns) {
      let offset = get(column, 'offsetLeft');

      if (left < offset + get(column, 'width')) {
        return column;
      }
    }

    return subcolumns[subcolumns.length - 1];
  },

  getClosestColumnOffset(column, left, isFixed) {
    let closestColumn = this.getClosestColumn(column, left, isFixed);
    let offsetLeft = get(closestColumn, 'offsetLeft');

    // If the column is fixed, readjust the offset so that it's correct within
    // the container
    if (isFixed === 'left') {
      offsetLeft += this.container.scrollLeft;
    } else if (isFixed === 'right') {
      offsetLeft -= this.container.scrollWidth;
      offsetLeft += this.container.scrollLeft;
      offsetLeft += getInnerClientRect(this.container).width * this.scale;
    }

    return offsetLeft;
  },

  insertAfterColumn(parent, after, insert) {
    if (insert === after) {
      return;
    }

    let subcolumns = get(parent, 'column.subcolumns');
    let afterColumn = get(after, 'column');
    let insertColumn = get(insert, 'column');

    let afterIndex = subcolumns.indexOf(afterColumn);
    let insertIndex = subcolumns.indexOf(insertColumn);

    move(subcolumns, insertIndex, afterIndex);

    notifyPropertyChange(subcolumns, '[]');
  },

  startReorder(node, clientX) {
    this.clientX = clientX;

    let bounds = this.getReorderBounds(node);

    this._reorderMainIndicator = new MainIndicator(this.container, node.element, bounds);
    this._reorderDropIndicator = new DropIndicator(this.container, node.element, bounds);

    this.container.classList.add('is-reordering');
  },

  updateReorder(node, clientX) {
    this.clientX = clientX;

    this._updateReorder(node);

    if (!get(node, 'isFixed')) {
      this.updateScroll(node, true, true, this._updateReorder.bind(this));
    }
  },

  _updateReorder(node) {
    let { scrollLeft } = this.container;
    let realContainerLeft = getInnerClientRect(this.container).left * this.scale;
    let offset = this.clientX * this.scale - realContainerLeft + scrollLeft;

    let width = get(node, 'width');
    let newLeft = offset - width / 2;

    this._reorderMainIndicator.left = newLeft;

    this._reorderDropIndicator.left = this.getClosestColumnOffset(
      node,
      offset,
      get(node, 'isFixed')
    );

    this._reorderDropIndicator.width = get(
      this.getClosestColumn(node, this._reorderDropIndicator.left, get(node, 'isFixed')),
      'width'
    );
  },

  endReorder(node) {
    let { scrollLeft } = this.container;
    let realContainerLeft = getInnerClientRect(this.container).left * this.scale;
    let offset = this.clientX * this.scale - realContainerLeft + scrollLeft;

    let { leftBound, rightBound } = this.getReorderBounds(node);

    offset = Math.max(leftBound, offset);
    offset = Math.min(rightBound - 1, offset);

    let closestColumn = this.getClosestColumn(node, offset, get(node, 'isFixed'));

    this.insertAfterColumn(node.parent, closestColumn, node);

    this._reorderMainIndicator.destroy();
    this._reorderDropIndicator.destroy();

    this._reorderMainIndicator = null;
    this._reorderDropIndicator = null;

    if (this._nextUpdateScroll) {
      this._nextUpdateScroll.cancel();
      this._nextUpdateScroll = null;
    }

    this.container.classList.remove('is-reordering');

    this.onReorder?.(get(node, 'column'), get(closestColumn, 'column'));
  },

  startResize(node, clientX) {
    this.clientX = clientX;
  },

  updateResize(node, clientX) {
    let delta = Math.floor(
      get(node, 'isFixed') === 'right'
        ? (this.clientX - clientX) * this.scale
        : (clientX - this.clientX) * this.scale
    );

    this.clientX = clientX;

    if (Math.abs(delta) < 1) {
      return;
    }

    // Add the class after at least one update has occured
    this.container.classList.add('is-resizing');

    this._updateResize(node, delta);
  },

  _updateResize(node, delta) {
    let resizeMode = get(this, 'resizeMode');

    let oldWidth = get(node, 'width');
    let minWidth = get(node, 'minWidth');

    delta = Math.max(oldWidth + delta, minWidth) - oldWidth;

    if (resizeMode === RESIZE_MODE.FLUID) {
      let parent = get(node, 'parent');
      let child = node;

      let sibling;

      while (parent && !sibling) {
        let siblings = get(parent, 'subcolumnNodes');
        sibling = siblings[siblings.indexOf(child) + 1];

        child = parent;
        parent = get(child, 'parent');
      }

      if (sibling) {
        let siblingOldWidth = get(sibling, 'width');
        let siblingMinWidth = get(sibling, 'minWidth');

        delta = -(Math.max(siblingOldWidth - delta, siblingMinWidth) - siblingOldWidth);

        set(sibling, 'width', siblingOldWidth - delta);
      } else {
        delta = 0;
      }
    }

    let newWidth = oldWidth + delta;

    set(node, 'width', newWidth);

    this.ensureWidthConstraint.call(this);
  },

  endResize(node) {
    if (this._nextUpdateScroll) {
      this._nextUpdateScroll.cancel();
      this._nextUpdateScroll = null;
    }

    this.container.classList.remove('is-resizing');

    this.onResize?.(get(node, 'column'));
  },

  updateScroll(node, stopAtLeft, stopAtRight, callback) {
    if (this._nextUpdateScroll) {
      return;
    }

    this._nextUpdateScroll = scheduler.schedule(
      'sync',
      () => {
        this._nextUpdateScroll = null;

        let container = this.container;
        let clientX = this.clientX;

        let { scrollLeft, scrollWidth } = this.container;
        let { containerLeft, containerRight } = get(this, 'scrollBounds');

        let containerWidth = getOuterClientRect(this.container).width * this.scale;

        let distanceToLeft = Math.max(clientX - containerLeft, 2);
        let distanceToRight = Math.max(containerRight - clientX, 2);

        let canScrollLeft = !stopAtLeft || scrollLeft !== 0;
        let canScrollRight = !stopAtRight || scrollLeft < scrollWidth - containerWidth;

        if (
          (distanceToLeft <= SCROLL_THRESHOLD && canScrollLeft) ||
          (distanceToRight <= SCROLL_THRESHOLD && canScrollRight)
        ) {
          let delta;

          if (distanceToLeft <= SCROLL_THRESHOLD) {
            delta = -SCROLL_THRESHOLD / distanceToLeft;
          } else {
            delta = SCROLL_THRESHOLD / distanceToRight;
          }

          delta = Math.round(delta);

          container.scrollLeft += delta;
          this.updateScroll(node, stopAtLeft, stopAtRight, callback);
          callback(node, delta);
        }
      },
      this.token
    );
  },
});
