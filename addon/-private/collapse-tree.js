import EmberObject, { get, set } from '@ember/object';
import EmberArray, { A as emberA, isArray } from '@ember/array';
import { assert } from '@ember/debug';

import { computed } from '@ember-decorators/object';
import { readOnly } from '@ember-decorators/object/computed';
import { addObserver } from '@ember/object/observers';

import { objectAt } from './utils/array';
import { notifyPropertyChange } from './utils/ember';
import { getOrCreate } from './meta-cache';

export const SELECT_MODE = {
  SINGLE: 'single',
  MULTIPLE: 'multiple',
  GROUPING: 'grouping',
};

class TableRowMeta extends EmberObject {
  _rowValue = null;
  _isCollapsed = false;

  @computed('_rowValue.isCollapsed')
  get isCollapsed() {
    let rowValue = get(this, '_rowValue');

    if (rowValue.hasOwnProperty('isCollapsed')) {
      return get(rowValue, 'isCollapsed');
    } else {
      return this._isCollapsed;
    }
  }

  set isCollapsed(isCollapsed) {
    let rowValue = get(this, '_rowValue');

    if (rowValue.hasOwnProperty('isCollapsed')) {
      set(rowValue, 'isCollapsed', isCollapsed);
    } else {
      this._isCollapsed = isCollapsed;
    }

    return isCollapsed;
  }

  @readOnly('_tree.selectMode') selectMode;

  @computed('selectMode')
  get canMultiSelect() {
    let selectMode = this.get('selectMode');

    return selectMode === SELECT_MODE.MULTIPLE || selectMode === SELECT_MODE.GROUPING;
  }

  @computed('selectMode', '_tree.selectedRows.[]', '_parentMeta.isSelected')
  get isSelected() {
    let rowValue = get(this, '_rowValue');
    let selectMode = get(this, '_tree.selectMode');
    let selectedRows = get(this, '_tree.selectedRows');

    if (!selectedRows) {
      return false;
    }

    if (selectMode === SELECT_MODE.SINGLE) {
      return objectAt(selectedRows, 0) === rowValue;
    }

    return selectedRows.includes(rowValue) || get(this, '_parentMeta.isSelected');
  }

  @computed('_tree.{enableTree,enableCollapse}', 'value.children.[]')
  get canCollapse() {
    if (!get(this, '_tree.enableTree') || !get(this, '_tree.enableCollapse')) {
      return false;
    }

    let children = get(this, '_rowValue.children');

    return isArray(children) && get(children, 'length') > 0;
  }

  @computed('_parentMeta')
  get depth() {
    let parentMeta = get(this, '_parentMeta');

    return parentMeta ? get(parentMeta, 'depth') + 1 : 0;
  }

  toggleCollapse() {
    let canCollapse = get(this, 'canCollapse');

    if (canCollapse) {
      set(this, 'isCollapsed', !get(this, 'isCollapsed'));
    }
  }

  select({ toggle, range }) {
    let tree = get(this, '_tree');
    let rowValue = get(this, '_rowValue');
    let rowIndex = get(this, 'index');
    let isSelected = get(this, 'isSelected');
    let selectMode = get(this, 'selectMode');

    let rowMetaCache = get(tree, 'rowMetaCache');

    if (selectMode === SELECT_MODE.SINGLE) {
      tree.sendAction('onSelect', [rowValue]);
      return;
    }

    let selectedRows = new Set(get(tree, 'selectedRows'));

    if (toggle) {
      if (isSelected) {
        let meta = this;
        let currentValue = rowValue;

        while (get(meta, '_parentMeta.isSelected')) {
          meta = get(meta, '_parentMeta');

          for (let child of get(meta, '_rowValue.children')) {
            if (child !== currentValue) {
              selectedRows.add(child);
            }
          }

          selectedRows.delete(currentValue);
          currentValue = get(meta, '_rowValue');
        }

        selectedRows.delete(currentValue);
      } else {
        selectedRows.add(rowValue);
      }
    } else if (range) {
      // Use a set to avoid item duplication
      let { _lastSelectedIndex } = tree;

      let minIndex = Math.min(_lastSelectedIndex, rowIndex);
      let maxIndex = Math.max(_lastSelectedIndex, rowIndex);

      for (let i = minIndex; i <= maxIndex; i++) {
        selectedRows.add(tree.objectAt(i));
      }
    } else {
      selectedRows.clear();
      selectedRows.add(rowValue);
    }

    let rowMetas = Array.from(selectedRows).map(r => rowMetaCache.get(r));

    if (selectMode === SELECT_MODE.GROUPING) {
      let groupingCounts = new Map();

      for (let rowMeta of rowMetas) {
        let parentRow = get(rowMeta, '_parentMeta._rowValue');

        if (parentRow) {
          let count = groupingCounts.has(parentRow) ? groupingCounts.get(parentRow) : 0;
          groupingCounts.set(parentRow, count + 1);
        }
      }

      reduceSelectedRows(selectedRows, groupingCounts, rowMetaCache);
    }

    for (let rowMeta of rowMetas) {
      let rowValue = get(rowMeta, '_rowValue');
      let parentMeta = get(rowMeta, '_parentMeta');

      while (parentMeta) {
        if (selectedRows.has(get(parentMeta, '_rowValue'))) {
          selectedRows.delete(rowValue);
          break;
        }

        parentMeta = get(parentMeta, '_parentMeta');
      }
    }

    selectedRows = emberA(Array.from(selectedRows));

    tree.sendAction('onSelect', selectedRows);

    tree._lastSelectedIndex = rowIndex;
  }
}

function reduceSelectedRows(selectedRows, groupingCounts, rowMetaCache) {
  let reducedGroupingCounts = new Map();

  for (let [group, count] of groupingCounts.entries()) {
    if (get(group, 'children.length') === count) {
      selectedRows.add(group);

      let parentRow = rowMetaCache.get(group).get('_parentMeta._rowValue');

      if (parentRow) {
        let currentCount =
          reducedGroupingCounts.get(parentRow) || groupingCounts.get(parentRow) || 0;

        reducedGroupingCounts.set(parentRow, currentCount + 1);
      }
    }
  }

  if (reducedGroupingCounts.size > 0) {
    reduceSelectedRows(selectedRows, reducedGroupingCounts, rowMetaCache);
  }
}

function setupRowMeta(tree, row, parentRow, node) {
  let rowMetaCache = get(tree, 'rowMetaCache');
  let rowMeta = getOrCreate(row, rowMetaCache, TableRowMeta);
  let parentRowMeta = parentRow ? rowMetaCache.get(parentRow) : null;

  set(rowMeta, '_tree', tree);
  set(rowMeta, '_rowValue', row);
  set(rowMeta, '_parentMeta', parentRowMeta);

  if (node) {
    set(node, 'rowMeta', rowMeta);
  }
}

/**
  Given a list of ordered values and a target value, finds the index of
  the closest value which does not exceed the target value

  @param {Array<number>} values - the list of values
  @param {number} target - the index to find the closest value to
  @return {number} - the index of the value closest to the target
*/
function closestLessThan(values, target) {
  let low = 0;
  let high = values.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (target < values[mid]) {
      high = mid - 1;
    } else if (target > values[mid]) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  // low === high + 1, we always want the lower value
  return high;
}

/**
  Single node of a CollapseTree
*/
class CollapseTreeNode extends EmberObject {
  _children = null;

  constructor() {
    super(...arguments);

    let value = get(this, 'value');
    let parentValue = get(this, 'parent.value');

    let parent = get(this, 'parent');
    let tree = get(this, 'tree');

    if (!parent) {
      set(this, 'isRoot', true);
    } else {
      setupRowMeta(tree, value, parentValue, this);
    }

    assert('value must have an array of children', isArray(get(value, 'children')));

    if (parent) {
      // Changes to the value directly should properly update all computeds on this
      // node, but we need to manually propogate changes upwards to notify any other
      // watchers
      addObserver(this, 'length', () => {
        notifyPropertyChange(parent, 'length');
      });
    }
  }

  destroy() {
    super.destroy(...arguments);

    this.cleanChildren();
  }

  /**
    Fully destroys the child nodes in the event that they change or that this
    node is destroyed. If children are not destroyed, they will leak memory due
    to dangling references in Ember Meta.
  */
  cleanChildren() {
    if (this._children) {
      for (let child of this._children) {
        if (child instanceof CollapseTreeNode) {
          child.destroy();
        }
      }
      this._children = null;
    }
  }

  /**
    Whether or not the node is leaf of the CollapseTree. A node is a leaf if
    the wrapped value's children have no children. If so, there is no need to
    create another level of nodes in the tree - true leaves of the passed in
    value tree don't require any custom logic, so we can index directly into
    the array of children in `objectAt`.

    @type boolean
  */
  @computed('value.children.@each.children', 'isRoot', 'tree.enableTree')
  get isLeaf() {
    if (get(this, 'isRoot') && !get(this, 'tree.enableTree')) {
      return true;
    }

    return !get(this, 'value.children').some(child => isArray(get(child, 'children')));
  }

  /**
    The children of this node, if they exist. Children can be other nodes, or
    spans (arrays) of leaf value-nodes. For instance:

    ```
    A
    └── B
    ├── C
    └── D
        └── E
    ```

    In this example, A would have the following children:

    ```
    children = [
      [B, C],
      Node(D)
    ];
    ```

    This allows us to do a binary search on the list of children without
    creating a node for each span, arrays simply represent x-children in
    a segment before a given node.

    @type Array<Node|Array<object>>
  */
  @computed('value.children.[]', 'isLeaf')
  get children() {
    this.cleanChildren();

    if (get(this, 'isLeaf')) {
      return null;
    }

    let valueChildren = get(this, 'value.children');
    let tree = get(this, 'tree');
    let children = [];
    let sliceStart = false;

    valueChildren.forEach((child, index) => {
      let grandchildren = get(child, 'children');

      if (isArray(grandchildren) && get(grandchildren, 'length') > 0) {
        if (sliceStart !== false) {
          children.push(valueChildren.slice(sliceStart, index));
          sliceStart = false;
        }

        children.push(CollapseTreeNode.create({ value: child, parent: this, tree }));
      } else if (sliceStart === false) {
        sliceStart = index;
      }
    });

    if (sliceStart !== false) {
      children.push(valueChildren.slice(sliceStart));
    }

    this._children = children;

    return children;
  }

  /**
    The length of the node. Branches in three directions:

    1. If the node is collapsed, then the length of the node is 1, the
        node itself. This means that the parent node will only index into
        this child if it is trying to get exactly the child node,
        effectively hiding its children.
    2. If the node is a leaf, then the length is the node itself plus the
        length of its value-children.
    3. Otherwise, the length is the sum of the lengths of its children.
  */
  @computed('rowMeta.isCollapsed', 'value.children.[]', 'tree.enableTree', 'isLeaf')
  get length() {
    if (get(this, 'rowMeta.isCollapsed') === true) {
      return 1;
    } else if (get(this, 'isLeaf')) {
      return 1 + get(this, 'value.children.length');
    } else {
      return 1 + get(this, 'children').reduce((sum, child) => sum + get(child, 'length'), 0);
    }
  }

  /**
    Calculates a list of the summation of offsets of children to run a binary
    search against. Given:

    ```
    A
    ├── B
    │   ├── C
    │   └── D
    ├── E(c)
    │   ├── F
    │   └── G
    └── H
    │   ├── I
    │   └── J
    │       └── K
    └── L
    └── M
    ```

    The offsetList for A would be: `[0, 3, 6, 10, 11]`. Each item in this
    list is the offset of the corresponding child, or the summation of the
    lengths of all children preceding it. It is effectively the starting
    index of that child.

    So, if I'm trying to find index 9 in A, which is item K (not counting A
    itself), then I'm going to want to traverse down H, which is the 3rd child.
    I run a binary search against these offsets, which are ordered, and find
    the closest starting index which is strictly less than 9, which is the 3rd
    index. I know I can then recurse down that node and I should eventually
    find the item I'm after.
  */
  @computed('length', 'isLeaf')
  get offsetList() {
    if (get(this, 'isLeaf')) {
      return null;
    }

    let offset = 0;
    let offsetList = [];

    for (let child of get(this, 'children')) {
      offsetList.push(offset);
      offset += get(child, 'length');
    }

    return offsetList;
  }

  /**
    Finds the object at the given index, where an index n is defined as the n-th
    item visited during a depth first traversal of the tree. To do this, we either

    1. Return the current node at index 0
    2. If the node is a leaf, return the value child at the corresponding index
    3. Otherwise, find the correct child to walk down to and call `objectAt` on it
        with a normalized index

    `objectAt` also tracks the depth to pass back as meta information, something
    that is useful for displaying the tree as a list. `index` and `depth` are
    normalized as we traverse the tree, every time you "pass" a node you subtract
    it from the index for the next `objectAt` call, and you add 1 to depth for
    every `objectAt` call.

    @param {number} index - the index to find
    @param {Array<object>} parents - the parents of the current node in the traversal
    @return {{ value: object, parents: Array<object> }}
  */
  objectAt(index) {
    assert(
      'index must be gte than 0 and less than the length of the node',
      index >= 0 && index < get(this, 'length')
    );

    // The first index in a node is the node itself, since nodes are addressable
    if (index === 0) {
      return get(this, 'value');
    }

    // Passed this node, remove it from the index and go one level deeper
    let normalizedIndex = index - 1;
    let tree = get(this, 'tree');

    if (get(this, 'isLeaf')) {
      let value = objectAt(get(this, 'value.children'), normalizedIndex);
      setupRowMeta(tree, value, get(this, 'value'));

      return value;
    }

    let children = get(this, 'children');
    let offsetList = get(this, 'offsetList');
    let offsetIndex = closestLessThan(offsetList, normalizedIndex);

    normalizedIndex = normalizedIndex - offsetList[offsetIndex];

    let child = children[offsetIndex];

    if (Array.isArray(child)) {
      let value = child[normalizedIndex];
      setupRowMeta(tree, value, get(this, 'value'));

      return value;
    }

    return child.objectAt(normalizedIndex);
  }
}

/**
  The goal of the collapse tree is provide a data structure that:

  1. Given an index n, can find the n-th node visited in a depth-first-walk
      of the tree
  2. Can "hide" or "collapse" nodes, so that their children are not walked

  So given a tree like this, where the (c) annotation means "isCollapsed":

  ```
  A
  ├── B
  │   ├── C
  │   └── D
  ├── E(c)
  │   ├── F
  │   └── G
  └── H
  │   ├── I
  │   └── J
  │       └── K
  └── L
  ```

  `objectAt(0) === A`, `objectAt(2) === C`, `objectAt(4) === E`, and
  `objectAt(5) === H`

  We also want to wrap this structure around a pre-existing tree that is a much
  simpler POJO with the shape:

  ```json
  {
    isCollapsed: false,
    children: [{
      isCollapsed: true,
      children: []
    }]
  }
  ```

  This allows us to provide a simple API to users while being able to index into
  their tree quickly and turn it into a list/table representation, without exposing
  any internal implementation details.

  To do this, each node in the tree has a `length` equal to the lengths of its
  children, and we do a binary search of each layer of the tree to find the closest
  node to the index. We traverse downward until we have the correct node, getting
  there in O(log(n)) time at worst (where n is the average number of nodes in a layer).

  Whenever a level of the tree changes (e.g. a node is added or removed) we must
  rebuild the subtree for that level. In order to keep tree construction and
  allocation costs low, we also do not create nodes for leaf children, since there is
  no need - they are length 1 and have no children, so no custom. Our tree saves an
  order of magnitude of space and allocation costs this way.
*/
export default class CollapseTree extends EmberObject.extend(EmberArray) {
  constructor() {
    super(...arguments);

    // Whenever the root node's length changes we need to propogate the change to
    // users of the tree, and since the tree is meant to work like an array we should
    // trigger a change on the `[]` key as well.
    addObserver(this, 'root.length', () => notifyPropertyChange(this, '[]'));
  }

  destroy() {
    super.destroy(...arguments);

    if (this._root) {
      this._root.destroy();
    }
  }

  /*
    The root node of the tree. Either wraps a true root, or a fake one created
    if the root is an array.
  */
  @computed('rows')
  get root() {
    if (this._root) {
      this._root.destroy();
    }

    let rows = get(this, 'rows');

    this._root = CollapseTreeNode.create({ value: { children: rows }, tree: this });

    return this._root;
  }

  /**

    @param {number} index - the index to find
    @return {{ value: object, parents: Array<object> }}
  */
  objectAt(index) {
    if (index >= get(this, 'length') || index < 0) {
      return undefined;
    }

    // We add a "fake" top level node to account for the root node
    let normalizedIndex = index + 1;
    let result = get(this, 'root').objectAt(normalizedIndex);
    let meta = this.get('rowMetaCache').get(result);

    // Set the perceived index on the meta. It should be safe to do this here, since
    // the row will always be retrieved via `objectAt` before being used.
    set(meta, 'index', index);

    return result;
  }

  forEach(fn) {
    let length = get(this, 'length');

    for (let i = 0; i < length; i++) {
      fn(this.objectAt(i), i);
    }
  }

  /**
    Normalized length of the tree

    @type {number}
  */
  @computed('root.length')
  get length() {
    // Remove the root level node from the length count
    return get(this, 'root.length') - 1;
  }
}
