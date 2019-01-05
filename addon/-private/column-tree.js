import EmberObject, { get, set } from '@ember/object';
import { addObserver, removeObserver } from '@ember/object/observers';
import { A as emberA } from '@ember/array';
import { DEBUG } from '@glimmer/env';

import { computed } from '@ember-decorators/object';
import { reads, gt } from '@ember-decorators/object/computed';

import { scheduler, Token } from 'ember-raf-scheduler';

import { getOrCreate } from './meta-cache';
import { objectAt, move, splice } from './utils/array';
import { mergeSort } from './utils/sort';
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
};

export const WIDTH_CONSTRAINT = {
  NONE: 'none',
  EQ_CONTAINER: 'eq-container',
  GTE_CONTAINER: 'gte-container',
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

class TableColumnMeta extends EmberObject {
  // If no width is set on the column itself, we cache a temporary width on the
  // meta object. This is set to the default width.
  _width = DEFAULT_COLUMN_WIDTH;

  @reads('_node.isLeaf')
  isLeaf;

  @reads('_node.isFixed')
  isFixed;

  @reads('_node.isSortable')
  isSortable;

  @reads('_node.isResizable')
  isResizable;

  @reads('_node.isReorderable')
  isReorderable;

  @reads('_node.width')
  width;

  @reads('_node.offsetLeft')
  offsetLeft;

  @reads('_node.offsetRight')
  offsetRight;

  @computed('isLeaf', '_node.{depth,tree.root.maxChildDepth}')
  get rowSpan() {
    if (!this.get('isLeaf')) {
      return 1;
    }

    let maxDepth = this.get('_node.tree.root.maxChildDepth');
    let depth = this.get('_node.depth');

    return maxDepth - (depth - 1);
  }

  @computed('isLeaf', '_node.leaves.length')
  get columnSpan() {
    if (this.get('isLeaf')) {
      return 1;
    }

    return this.get('_node.leaves.length');
  }

  @computed('isLeaf', '_node.offsetIndex')
  get index() {
    if (this.get('isLeaf')) {
      return this.get('_node.offsetIndex');
    }
  }

  @computed('_node.{tree.sorts.[],column.valuePath}')
  get sortIndex() {
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
  }

  @gt('sortIndex', 0)
  isSorted;

  @gt('_node.tree.sorts.length', 1)
  isMultiSorted;

  @computed('_node.tree.sorts.[]', 'sortIndex')
  get isSortedAsc() {
    let sortIndex = this.get('sortIndex');
    let sorts = this.get('_node.tree.sorts');

    return get(objectAt(sorts, sortIndex - 1), 'isAscending');
  }
}

/**
  Single node of a ColumnTree
*/
class ColumnTreeNode extends EmberObject {
  _subcolumnNodes = null;

  init() {
    super.init(...arguments);

    let tree = get(this, 'tree');
    let parent = get(this, 'parent');
    let column = get(this, 'column');

    if (!parent) {
      this.isRoot = true;
    } else {
      let meta = getOrCreate(column, get(tree, 'columnMetaCache'), TableColumnMeta);

      set(meta, '_node', this);
      meta.registerElement = (...args) => this.registerElement(...args);

      meta.startResize = (...args) => tree.startResize(this, ...args);
      meta.updateResize = (...args) => tree.updateResize(this, ...args);
      meta.endResize = (...args) => tree.endResize(this, ...args);

      meta.startReorder = (...args) => tree.startReorder(this, ...args);
      meta.updateReorder = (...args) => tree.updateReorder(this, ...args);
      meta.endReorder = (...args) => tree.endReorder(this, ...args);

      // Changes to the value directly should properly update all computeds on this
      // node, but we need to manually propogate changes upwards to notify any other
      // watchers
      this._notifyMaxChildDepth = () => notifyPropertyChange(parent, 'maxChildDepth');
      this._notifyLeaves = () => notifyPropertyChange(parent, 'leaves');
      this._notifyCollection = () => notifyPropertyChange(parent, '[]');

      addObserver(this, 'maxChildDepth', this._notifyMaxChildDepth);
      addObserver(this, 'leaves.[]', this._notifyLeaves);
    }
  }

  destroy() {
    this.cleanSubcolumnNodes();

    super.destroy(...arguments);
  }

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
  }

  @computed('column.subcolumns.[]')
  get subcolumnNodes() {
    this.cleanSubcolumnNodes();

    if (get(this, 'isLeaf')) {
      return;
    }

    let tree = get(this, 'tree');
    let parent = this;

    this._subcolumnNodes = emberA(
      get(this, 'column.subcolumns').map(column => ColumnTreeNode.create({ column, tree, parent }))
    );

    return this._subcolumnNodes;
  }

  @computed('column.subcolumns.[]')
  get isLeaf() {
    let subcolumns = get(this, 'column.subcolumns');

    return !subcolumns || get(subcolumns, 'length') === 0;
  }

  @computed('column.isSortable', 'tree.enableSort')
  get isSortable() {
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
  }

  @computed('column.isReorderable', 'tree.enableReorder')
  get isReorderable() {
    let enableReorder = get(this, 'tree.enableReorder');
    let isReorderable = get(this, 'column.isReorderable');

    return enableReorder !== false && isReorderable !== false;
  }

  @computed('column.isResizable', 'tree.enableResize')
  get isResizable() {
    let isLeaf = get(this, 'isLeaf');

    if (isLeaf) {
      let enableResize = get(this, 'tree.enableResize');
      let isResizable = get(this, 'column.isResizable');

      return enableResize !== false && isResizable !== false;
    } else {
      let subcolumns = get(this, 'subcolumnNodes');

      return subcolumns.some(s => get(s, 'isResizable'));
    }
  }

  @computed('parent.{isFixed,isRoot}', 'column.isFixed')
  get isFixed() {
    if (get(this, 'parent.isRoot')) {
      return get(this, 'column.isFixed');
    }

    return get(this, 'parent.isFixed');
  }

  @computed('parent.depth')
  get depth() {
    if (get(this, 'parent')) {
      return get(this, 'parent.depth') + 1;
    }

    return 0;
  }

  @computed('isLeaf', 'subcolumns.@each.depth')
  get maxChildDepth() {
    if (get(this, 'isLeaf')) {
      return get(this, 'depth');
    }

    return Math.max(...get(this, 'subcolumnNodes').map(s => get(s, 'maxChildDepth')));
  }

  @computed('isLeaf', 'subcolumnNodes.{[],@each.leaves}')
  get leaves() {
    if (get(this, 'isLeaf')) {
      return [this];
    }

    return get(this, 'subcolumnNodes').reduce((leaves, subcolumn) => {
      leaves.push(...get(subcolumn, 'leaves'));

      return leaves;
    }, emberA());
  }

  @computed('column.minWidth')
  get minWidth() {
    if (get(this, 'isLeaf')) {
      let columnMinWidth = get(this, 'column.minWidth');

      return typeof columnMinWidth === 'number' ? columnMinWidth : DEFAULT_MIN_WIDTH;
    }

    return get(this, 'subcolumnNodes').reduce((sum, subcolumn) => {
      let subcolumnMinWidth = get(subcolumn, 'minWidth');

      return sum + subcolumnMinWidth;
    }, 0);
  }

  @computed('column.minWidth')
  get maxWidth() {
    if (get(this, 'isLeaf')) {
      let columnMaxWidth = get(this, 'column.maxWidth');

      return typeof columnMaxWidth === 'number' ? columnMaxWidth : DEFAULT_MAX_WIDTH;
    }

    return get(this, 'subcolumnNodes').reduce((sum, subcolumn) => {
      let subcolumnMaxWidth = get(subcolumn, 'maxWidth');

      return sum + subcolumnMaxWidth;
    }, 0);
  }

  @computed('isLeaf', 'subcolumnNodes.@each.width', 'column.width')
  get width() {
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
  }

  set width(newWidth) {
    let oldWidth = get(this, 'width');
    let isResizable = get(this, 'isResizable');

    if (!isResizable) {
      return oldWidth;
    }

    let delta = newWidth - oldWidth;

    let minWidth = get(this, 'minWidth');
    let maxWidth = get(this, 'maxWidth');

    delta = Math.max(Math.min(oldWidth + delta, maxWidth), minWidth) - oldWidth;

    if (delta === 0) {
      return;
    }

    if (get(this, 'isLeaf')) {
      let column = get(this, 'column');
      let columnWidth = get(column, 'width');

      if (typeof columnWidth === 'number') {
        return set(column, 'width', oldWidth + delta);
      } else {
        let meta = get(this, 'tree.columnMetaCache').get(column);
        return set(meta, '_width', oldWidth + delta);
      }
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
  }

  @computed('parent.{offsetIndex,subcolumnNodes.[]}')
  get offsetIndex() {
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
  }

  @computed('parent.{offsetLeft,width}')
  get offsetLeft() {
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
  }

  @computed('parent.{offsetRight,width}')
  get offsetRight() {
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
  }

  registerElement(element) {
    this.element = element;
  }
}

export default class ColumnTree extends EmberObject {
  init() {
    super.init(...arguments);

    this.token = new Token();

    addObserver(this, 'columns.@each.isFixed', this.sortColumnsByFixed);
    addObserver(this, 'widthConstraint', this.ensureWidthConstraint);
  }

  destroy() {
    this.token.cancel();
    get(this, 'root').destroy();

    removeObserver(this, 'columns.@each.isFixed', this.sortColumnsByFixed);
    removeObserver(this, 'widthConstraint', this.ensureWidthConstraint);

    super.destroy(...arguments);
  }

  @computed('columns')
  get root() {
    let columns = get(this, 'columns');

    return ColumnTreeNode.create({ column: { subcolumns: columns }, tree: this });
  }

  @computed('root.{maxChildDepth,leaves.[]}')
  get rows() {
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
  }

  @computed('root.leaves.[]')
  get leaves() {
    return emberA(get(this, 'root.leaves').map(n => n.column));
  }

  @computed('root.subcolumnNodes.@each.isFixed')
  get leftFixedNodes() {
    return get(this, 'root.subcolumnNodes').filterBy('isFixed', 'left');
  }

  @computed('root.subcolumnNodes.@each.isFixed')
  get rightFixedNodes() {
    return get(this, 'root.subcolumnNodes').filterBy('isFixed', 'right');
  }

  @computed('root.subcolumnNodes.@each.isFixed')
  get unfixedNodes() {
    return get(this, 'root.subcolumnNodes').filter(s => !get(s, 'isFixed'));
  }

  @computed('leftFixedNodes.@each.width', 'rightFixedNodes.@each.width')
  get scrollBounds() {
    let { left: containerLeft, right: containerRight } = getInnerClientRect(this.container);

    containerLeft += get(this, 'leftFixedNodes').reduce((sum, n) => sum + get(n, 'width'), 0);
    containerRight -= get(this, 'rightFixedNodes').reduce((sum, n) => sum + get(n, 'width'), 0);

    return { containerLeft, containerRight };
  }

  sortColumnsByFixed = () => {
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
  };

  ensureWidthConstraint = () => {
    if (!this.container) {
      return;
    }

    let containerWidthAdjustment = get(this, 'containerWidthAdjustment') || 0;
    let containerWidth =
      getInnerClientRect(this.container).width * this.scale + containerWidthAdjustment;
    let treeWidth = get(this, 'root.width');
    let columns = get(this, 'root.subcolumnNodes');

    let widthConstraint = get(this, 'widthConstraint');
    let fillMode = get(this, 'fillMode');

    if (
      (widthConstraint === WIDTH_CONSTRAINT.EQ_CONTAINER && treeWidth !== containerWidth) ||
      (widthConstraint === WIDTH_CONSTRAINT.LTE_CONTAINER && treeWidth > containerWidth) ||
      (widthConstraint === WIDTH_CONSTRAINT.GTE_CONTAINER && treeWidth < containerWidth)
    ) {
      let delta = containerWidth - treeWidth;

      if (fillMode === FILL_MODE.EQUAL_COLUMN) {
        set(this, 'root.width', containerWidth);
      } else if (fillMode === FILL_MODE.FIRST_COLUMN) {
        let oldWidth = get(columns, 'firstObject.width');

        set(columns, 'firstObject.width', oldWidth + delta);
      } else if (fillMode === FILL_MODE.LAST_COLUMN) {
        let oldWidth = get(columns, 'lastObject.width');

        set(columns, 'lastObject.width', oldWidth + delta);
      }
    }
  };

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
  }

  registerContainer(container) {
    this.container = container;
    this.scale = getScale(container);

    get(this, 'root').registerElement(container);

    scheduler.schedule('sync', this.ensureWidthConstraint, this.token);
  }

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
  }

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
  }

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

    notifyPropertyChange(parent, 'column.subcolumns.[]');
  }

  startReorder(node, clientX) {
    this.clientX = clientX;

    let bounds = this.getReorderBounds(node);

    this._reorderMainIndicator = new MainIndicator(this.container, node.element, bounds);
    this._reorderDropIndicator = new DropIndicator(this.container, node.element, bounds);

    this.container.classList.add('is-reordering');
  }

  updateReorder(node, clientX) {
    this.clientX = clientX;

    this._updateReorder(node);

    if (!get(node, 'isFixed')) {
      this.updateScroll(node, true, true, this._updateReorder.bind(this));
    }
  }

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
  }

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

    this.sendAction('onReorder', get(node, 'column'), get(closestColumn, 'column'));
  }

  startResize(node, clientX) {
    this.clientX = clientX;
  }

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
  }

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

    this.ensureWidthConstraint();
  }

  endResize(node) {
    if (this._nextUpdateScroll) {
      this._nextUpdateScroll.cancel();
      this._nextUpdateScroll = null;
    }

    this.container.classList.remove('is-resizing');

    this.sendAction('onResize', get(node, 'column'));
  }

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
  }
}
