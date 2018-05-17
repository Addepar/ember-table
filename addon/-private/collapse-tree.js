import EmberObject, { get, set } from '@ember/object';
import EmberArray, { isArray } from '@ember/array';
import { assert } from '@ember/debug';

import { computed } from '@ember-decorators/object';
import { addObserver } from '@ember/object/observers';

import { notifyPropertyChange } from './utils/ember';

/**
  Genericizes `objectAt` so it can be run against a normal array or an Ember array

  @param {object|Array} arr
  @param {number} index
  @return {any}
*/
function objectAt(arr, index) {
  assert(
    'arr must be an instance of a Javascript Array or implement `objectAt`',
    isArray(arr) || typeof arr.objectAt === 'function'
  );

  if (typeof arr.objectAt === 'function') {
    return arr.objectAt(index);
  }

  return arr[index];
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
class CollapseTreeNode {
  constructor(value, parent) {
    assert('value must have an array of children', isArray(get(value, 'children')));

    set(this, 'value', value);

    if (parent) {
      // Changes to the value directly should properly update all computeds on this
      // node, but we need to manually propogate changes upwards to notify any other
      // watchers
      addObserver(this, 'length', () => notifyPropertyChange(parent, 'length'));
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
  @computed('value.children.@each.children.[]')
  get isLeaf() {
    return !get(this, 'value.children').some(child => {
      let children = get(child, 'children');

      return isArray(children) && get(children, 'length') > 0;
    });
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
    if (get(this, 'isLeaf')) {
      return null;
    }

    let valueChildren = get(this, 'value.children');
    let children = [];
    let sliceStart = false;

    valueChildren.forEach((child, index) => {
      let grandchildren = get(child, 'children');

      if (isArray(grandchildren) && get(grandchildren, 'length') > 0) {
        if (sliceStart !== false) {
          children.push(valueChildren.slice(sliceStart, index));
          sliceStart = false;
        }

        children.push(new CollapseTreeNode(child, this));
      } else if (sliceStart === false) {
        sliceStart = index;
      }
    });

    if (sliceStart !== false) {
      children.push(valueChildren.slice(sliceStart));
    }

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
  @computed('collapsed', 'value.{collapsed,children.[]}', 'isLeaf')
  get length() {
    if (get(this, 'value.collapsed') === true || get(this, 'collapsed') === true) {
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
  objectAt(index, parents) {
    assert(
      'index must be gte than 0 and less than the length of the node',
      index >= 0 && index < get(this, 'length')
    );

    let value = get(this, 'value');

    // The first index in a node is the node itself, since nodes are addressable
    if (index === 0) {
      return {
        value,
        parents,
        isCollapsed: get(this, 'collapsed'),
        toggleCollapse: this.toggleCollapse,
      };
    }

    // Passed this node, remove it from the index and go one level deeper
    index = index - 1;
    parents.push(value);

    if (get(this, 'isLeaf')) {
      let value = objectAt(get(this, 'value.children'), index);

      return { value, parents, isCollapsed: false };
    }

    let children = get(this, 'children');
    let offsetList = get(this, 'offsetList');
    let offsetIndex = closestLessThan(offsetList, index);

    index = index - offsetList[offsetIndex];

    let child = children[offsetIndex];

    if (Array.isArray(child)) {
      return { value: child[index], parents };
    }

    return child.objectAt(index, parents);
  }

  toggleCollapse = () => {
    let value = get(this, 'value');

    if (value.hasOwnProperty('collapsed')) {
      set(value, 'collapsed', !get(value, 'collapsed'));
    } else {
      set(this, 'collapsed', !get(this, 'collapsed'));
    }
  };
}

/**
  The goal of the collapse tree is provide a data structure that:

  1. Given an index n, can find the n-th node visited in a depth-first-walk
      of the tree
  2. Can "hide" or "collapse" nodes, so that their children are not walked

  So given a tree like this, where the (c) annotation means "collapsed":

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
    collapsed: false,
    children: [{
      collapsed: true,
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

    let tree = this.get('tree');
    // This allows the tree to handle a root of a single node, or a root of an array
    // of nodes. If the given root was an array of nodes it "hides" the first node
    // by wrapping it in a fake root, and then skipping the root in `objectAt` calls.
    this.rootIsArray = isArray(tree);

    if (this.rootIsArray === true) {
      this.root = new CollapseTreeNode({ children: tree });
    } else {
      this.root = new CollapseTreeNode(tree);
    }

    // Whenever the root node's length changes we need to propogate the change to
    // users of the tree, and since the tree is meant to work like an array we should
    // trigger a change on the `[]` key as well.
    addObserver(this, 'root.length', () => {
      notifyPropertyChange(this, 'length');
      notifyPropertyChange(this, '[]');
    });
  }

  /**

    @param {number} index - the index to find
    @return {{ value: object, parents: Array<object> }}
  */
  objectAt(index) {
    if (index >= get(this, 'length') || index < 0) {
      return undefined;
    }
    if (this.rootIsArray) {
      // If the root was an array, we added a "fake" top level node. Skip this node
      // by adding one to the index, and shifting the first parent off the parent list.
      let result = this.root.objectAt(index + 1, []);
      result.parents.shift();

      return result;
    }

    return this.root.objectAt(index, []);
  }

  forEach(fn) {
    for (let i = 0; i < this.length; i++) {
      fn(this.objectAt(i), i);
    }
  }

  /**
    Normalized length of the tree

    @type {number}
  */
  get length() {
    // If the root was an array, remove its fake wrapper node from the length count
    return this.rootIsArray ? get(this, 'root.length') - 1 : get(this, 'root.length');
  }
}
