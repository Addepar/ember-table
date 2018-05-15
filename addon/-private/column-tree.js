/* global Ember */
import EmberObject, { get, set } from '@ember/object';
import ObjectProxy from '@ember/object/proxy';
import { addObserver, removeObserver } from '@ember/object/observers';
import { A as emberA } from '@ember/array';

import { computed } from '@ember-decorators/object';
import { readOnly } from '@ember-decorators/object/computed';

import { scheduler, Token } from 'ember-raf-scheduler';

import { getOrCreate } from './meta-cache';
import { move, splice, mergeSort } from './utils/array';
import { getScale, getOuterClientRect, getInnerClientRect } from './utils/element';
import { MainIndicator, DropIndicator } from './utils/reorder-indicators';

const SCROLL_THRESHOLD = 50;

const DEFAULT_COLUMN_WIDTH = 100;
const DEFAULT_MIN_WIDTH = 50;
const DEFAULT_MAX_WIDTH = Infinity;

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

class TableColumnMeta extends EmberObject {
  @readOnly('_node.isLeaf') isLeaf;
  @readOnly('_node.isFixed') isFixed;
  @readOnly('_node.width') width;
  @readOnly('_node.offsetLeft') offsetLeft;
  @readOnly('_node.offsetRight') offsetRight;
}

class TableColumnProxy extends ObjectProxy {
  @computed('content')
  get meta() {
    return getOrCreate(get(this, 'content'), get(this, '_cache'), TableColumnMeta);
  }
}

/**
  Single node of a ColumnTree
*/
class ColumnTreeNode {
  constructor(column, tree, parent) {
    this.tree = tree;

    if (!parent) {
      this.column = column;
      this.isRoot = true;
    } else {
      this.parent = parent;
      this.column = TableColumnProxy.create({ content: column, _cache: get(tree, 'metaCache') });

      let meta = get(this, 'column.meta');

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
      this._notifyMaxChildDepth = () => Ember.propertyDidChange(parent, 'maxChildDepth');
      this._notifyLeaves = () => Ember.propertyDidChange(parent, 'leaves');
      addObserver(this, 'maxChildDepth', this._notifyMaxChildDepth);
      addObserver(this, 'leaves.[]', this._notifyLeaves);
    }
  }

  destroy() {
    removeObserver(this, 'maxChildDepth', this._notifyMaxChildDepth);
    removeObserver(this, 'maxChildDepth', this._notifyLeaves);

    if (!get(this, 'isLeaf')) {
      get(this, 'subcolumnNodes').forEach(n => n.destroy());
    }
  }

  @computed('column.subcolumns.[]')
  get subcolumnNodes() {
    if (get(this, 'isLeaf')) {
      return;
    }

    return emberA(
      get(this, 'column.subcolumns').map(s => new ColumnTreeNode(s, get(this, 'tree'), this))
    );
  }

  @computed('column.subcolumns.[]')
  get isLeaf() {
    let subcolumns = get(this, 'column.subcolumns');

    return !subcolumns || get(subcolumns, 'length') === 0;
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
      let columnWidth = get(this, 'column.width');
      let tempWidth = get(this, '_tempWidth');

      if (typeof columnWidth === 'number') {
        return columnWidth;
      } else if (typeof tempWidth === 'number') {
        return tempWidth;
      } else {
        return DEFAULT_COLUMN_WIDTH;
      }
    }

    return get(this, 'subcolumnNodes').reduce((sum, subcolumn) => {
      let subcolumnWidth = get(subcolumn, 'width');

      return sum + subcolumnWidth;
    }, 0);
  }

  set width(newWidth) {
    let oldWidth = get(this, 'width');
    let delta = newWidth - oldWidth;

    let minWidth = get(this, 'minWidth');
    let maxWidth = get(this, 'maxWidth');

    delta = Math.max(Math.min(oldWidth + delta, maxWidth), minWidth) - oldWidth;

    if (delta === 0) {
      return;
    }

    if (get(this, 'isLeaf')) {
      let columnWidth = get(this, 'column.width');

      if (typeof columnWidth === 'number') {
        return set(this, 'column.width', oldWidth + delta);
      } else {
        return set(this, '_tempWidth', oldWidth + delta);
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
      let sortedSubcolumns = subcolumns.sortBy('width').reverse();

      while (delta !== 0) {
        let deltaChunk = delta / get(subcolumns, 'length');
        deltaChunk = delta > 0 ? Math.floor(deltaChunk) : Math.ceil(deltaChunk);

        if (deltaChunk === 0) {
          deltaChunk = delta > 0 ? 1 : -1;
        }

        for (let subcolumn of sortedSubcolumns) {
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
      }

      return get(this, 'width');
    }
  }

  @computed('parent.{offsetLeft,subcolumnNodes.@each.width}')
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

  @computed('parent.{offsetRight,subcolumnNodes.@each.width}')
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
  constructor() {
    super(...arguments);

    this.token = new Token();

    scheduler.schedule('sync', this.ensureWidthConstraint, this.token);

    this.sortColumnsByFixed();
    addObserver(this, 'columns.@each.isFixed', this.sortColumnsByFixed);
    addObserver(this, 'widthConstraint', this.ensureWidthConstraint);
  }

  destroy() {
    super.destroy();
    this.token.cancel();
    get(this, 'root').destroy();
    removeObserver(this, 'columns.@each.isFixed', this.sortColumnsByFixed);
    removeObserver(this, 'widthConstraint', this.ensureWidthConstraint);
  }

  @readOnly('component.columns') columns;
  @readOnly('component.fillMode') fillMode;
  @readOnly('component.resizeMode') resizeMode;
  @readOnly('component.widthConstraint') widthConstraint;

  @computed('columns')
  get root() {
    let columns = get(this, 'columns');

    return new ColumnTreeNode({ subcolumns: columns }, this);
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

      let columns = currentLevel.map(node => {
        let column = get(node, 'column');
        let isLeaf = get(node, 'isLeaf');
        let meta = get(column, 'meta');

        if (isLeaf) {
          let depth = get(node, 'depth');

          set(meta, 'rowSpan', maxDepth - depth + 1);
          set(meta, 'columnSpan', 1);
        } else {
          let numLeaves = get(node, 'leaves.length');

          set(meta, 'rowSpan', 1);
          set(meta, 'columnSpan', numLeaves);
        }

        return column;
      });

      rows.pushObject(emberA(columns));

      previousLevel = currentLevel;
    }

    return rows;
  }

  @computed('root.leaves.[]')
  get leaves() {
    return get(this, 'root.leaves.[]').map((n, i) => {
      let column = get(n, 'column');

      set(column, 'meta.index', i);

      return column;
    });
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

    splice(columns, 0, sorted.length, ...sorted);

    this._isSorting = false;
  };

  ensureWidthConstraint = () => {
    let containerWidth = getInnerClientRect(this.container).width * this.scale;
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

    let leftBound, rightBound;

    if (get(parent, 'isRoot')) {
      let isFixed = get(node, 'isFixed');
      let nodes;

      if (isFixed === 'left') {
        nodes = get(this, 'leftFixedNodes');
      } else if (isFixed === 'right') {
        nodes = get(this, 'rightFixedNodes');
      } else {
        nodes = get(this, 'unfixedNodes');
      }

      let left = getOuterClientRect(nodes[0].element).left;
      let right = getOuterClientRect(nodes[nodes.length - 1].element).right;

      leftBound = (left - containerLeft) * scale + scrollLeft;
      rightBound = (right - containerLeft) * scale + scrollLeft;
    } else {
      let { left, right } = getOuterClientRect(parent.element);

      leftBound = (left - containerLeft) * scale + scrollLeft;
      rightBound = (right - containerLeft) * scale + scrollLeft;
    }

    return { leftBound, rightBound };
  }

  registerContainer(container) {
    this.container = container;
    this.scale = getScale(container);

    get(this, 'root').registerElement(container);
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
      let width = get(column, 'width');

      if (left < offset + width / 2) {
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
    let afterColumn = get(after, 'column.content');
    let insertColumn = get(insert, 'column.content');

    let afterIndex = subcolumns.indexOf(afterColumn);
    let insertIndex = subcolumns.indexOf(insertColumn);

    move(subcolumns, insertIndex, afterIndex);

    Ember.propertyDidChange(parent, 'column.subcolumns.[]');
  }

  startReorder(node, clientX) {
    this.clientX = clientX;

    let bounds = this.getReorderBounds(node);

    this._reorderMainIndicator = new MainIndicator(this.container, node.element, bounds);
    this._reorderDropIndicator = new DropIndicator(this.container, node.element, bounds);

    this.container.classList.add('et-unselectable');
  }

  updateReorder(node, clientX) {
    let delta = Math.floor((clientX - this.clientX) * this.scale);

    this.clientX = clientX;

    if (Math.abs(delta) < 1) {
      return;
    }

    this._updateReorder(node, delta);

    if (!get(node, 'isFixed')) {
      this.updateScroll(node, true, true, this._updateReorder.bind(this));
    }
  }

  _updateReorder(node, delta) {
    this._reorderMainIndicator.left += delta;
    this._reorderDropIndicator.left = this.getClosestColumnOffset(
      node,
      this._reorderMainIndicator.left,
      get(node, 'isFixed')
    );
  }

  endReorder(node) {
    let closestColumn = this.getClosestColumn(
      node,
      this._reorderMainIndicator.left,
      get(node, 'isFixed')
    );

    this.insertAfterColumn(node.parent, closestColumn, node);

    this._reorderMainIndicator.destroy();
    this._reorderDropIndicator.destroy();

    this._reorderMainIndicator = null;
    this._reorderDropIndicator = null;

    if (this._nextUpdateScroll) {
      this._nextUpdateScroll.cancel();
      this._nextUpdateScroll = null;
    }

    this.container.classList.remove('et-unselectable');

    this.component.sendAction(
      'onReorder',
      get(node, 'column.content'),
      get(closestColumn, 'column.content')
    );
  }

  startResize(node, clientX) {
    this.clientX = clientX;

    this.container.classList.add('et-unselectable');
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

    this._updateResize(node, delta);

    if (!get(node, 'isFixed')) {
      this.updateScroll(node, true, false, this._updateResize.bind(this));
    }
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

    this.container.classList.remove('et-unselectable');

    this.component.sendAction('onResize', get(node, 'column.content'));
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

        let containerWidth = getInnerClientRect(this.container).width * this.scale;

        let distanceToLeft = Math.max(clientX - containerLeft, 2);
        let distanceToRight = Math.max(containerRight - clientX, 2);

        let canScrollLeft = !stopAtLeft || scrollLeft !== 0;
        let canScrollRight = !stopAtRight || scrollLeft !== scrollWidth - containerWidth;

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
