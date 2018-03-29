import EmberObject, { set } from '@ember/object';
import TreeNode from './tree-node';
import { isEmpty } from '@ember/utils';

/**
 * A tree that supports traversing the tree in DFS order (either forward or backwards)
 * efficiently. Additionally, this tree supports collapsing (hiding) and uncollapsing
 * (unhiding) subtrees efficiently without affecting the speed of tree traversal (tree
 * traversal efficiency for hidden subtrees and empty subtrees should be the same).
 */
export default class LinkedListTree extends EmberObject {
  pointerNode = null;
  pointerIndex = -1;

  /**
   * Make sure that you only call this AFTER you've constructed the entire tree!
   */
  constructor(root) {
    super();

    root.initializePointers(null);
    root.initializeMetadata(-1, -1);

    this.pointerIndex = 0;
    // Root is a virtual node and will not be used for display
    if (root.children.length > 0) {
      this.pointerNode = root.children[0];
    }

    this.set('length', root.nodeCount - 1);
  }

  objectAt(index) {
    let direction = this.pointerIndex < index ? 1 : -1;
    while (index !== this.pointerIndex) {
      this.pointerNode = this.pointerNode.nextWithDirection(direction);
      this.pointerIndex += direction;
    }

    return this.pointerNode;
  }

  _updateAncestorNodeCount(node, delta) {
    node = node.parent;
    while (node !== null) {
      node.nodeCountDelta += delta;
      node = node.parent;
    }
    this.set('length', this.get('length') + delta);
  }

  /**
   * Moves pointer to a particular row. We know which direction to move to by comparing absolute
   * index of pointerNode and the row node. Note that these indexes are indexes of rows when the
   * tree is fully expanded and it always show the correct relative position between 2 rows.
   */
  _movePointerToRow(row) {
    let direction = this.pointerNode.index < row.index ? 1 : -1;
    while (row.index !== this.pointerNode.index) {
      this.pointerNode = this.pointerNode.nextWithDirection(direction);
      this.pointerIndex += direction;
    }
  }

  collapse(row) {
    // Now update pointerNode to the selected node.
    this._movePointerToRow(row);

    // Update next & previous link.
    let newNextNode = row.nextOnCollapse;
    row.next = newNextNode;
    if (newNextNode !== null) {
      newNextNode.pushPrevious(row);
    }

    set(row, 'collapse', true);
    this._updateAncestorNodeCount(row, 1 - (row.nodeCount + row.nodeCountDelta));
    this.notifyPropertyChange('[]');
  }

  expand(row) {
    // Now update pointerNode to the selected node.
    this._movePointerToRow(row);

    // Update next & previous link.
    let newNextNode = row.next;
    if (newNextNode !== null) {
      newNextNode.popPrevious();
    }
    row.next = row.originalNext;

    set(row, 'collapse', false);
    this._updateAncestorNodeCount(row, (row.nodeCount + row.nodeCountDelta) - 1);
    this.notifyPropertyChange('[]');
  }

  /**
   * Create a new TreeNode with rowValue as its value and append it to the children of parent
   */
  add(rowValue, parent) {
    this._movePointerToRow(parent);
    let node = new TreeNode(rowValue);

    if (isEmpty(parent.children)) {
      node.previous = parent;
      // my parent's nextOnCollapse doesn't change if i add children.
    } else {
      node.previous = parent.children[parent.children.length - 1];
      node.previous.nextOnCollapse = node;
    }
    let originalNext = node.previous.originalNext;
    node.previous.originalNext = node;
    // if my previous is a collapsed parent, then don't change the
    // next on my previous
    if (parent !== node.previous || !parent.collapse) {
      node.previous.next = node;
    }

    // since i'm a leaf node, i can't be collapsed
    node.originalNext = originalNext;
    node.nextOnCollapse = originalNext;
    node.next = originalNext;

    parent.addChild(node);

    node.depth = node.parent.depth + 1;

    this._recountAfterUpdate(node.parent, 1);
    this._resetIndices(node, node.originalNext.index);
    this.notifyPropertyChange('[]');
  }

  /**
   * Remove a leaf node from the tree.
   */
  remove(node) {
    if (node.nodeCount > 1) {
      throw Error('can only remove leaf nodes');
    }

    let parent = node.parent;
    let previous = node.previous;
    let next = node.next;
    // i have no previous siblings
    if (node.previous === parent) {
      parent.originalNext = next;
      if (!parent.collapse) {
        parent.next = parent.originalNext;
      }
    // i have a previous sibling
    } else {
      previous.originalNext = node.originalNext;
      previous.nextOnCollapse = node.nextOnCollapse;
      previous.next = previous.collapse ? node.nextOnCollapse : node.originalNext;
    }
  }

  /**
   * Readjust all the indices starting from `node`. This will start
   * by setting the index on `node` to `index`;
   */
  _resetIndices(node, index) {
    while (node) {
      node.index = index;
      index++;
      node = node.originalNext;
    }
  }

  /**
   * Recount after a leaf node was inserted or deleted. Goes up
   * the ancestor tree, adjusting all the nodeCount and nodeCountDelta.
   *
   * @param startNode the node to start the updates
   * @param direction either +1 if added or -1 if removed
   */
  _recountAfterUpdate(startNode, direction) {
    let node = startNode;
    let anyCollapsed = false;
    while (node) {
      node.nodeCount += direction;
      if (node.nodeCountDelta < 0) {
        node.nodeCountDelta -= direction;
        anyCollapsed = true;
      }
      node = node.parent;
    }
    if (!anyCollapsed) {
      // if i'm not in a collapsed part of the tree, i need to adjust length
      this.set('length', this.get('length') + direction);
    }
  }
}
