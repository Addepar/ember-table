import EmberObject, { set } from '@ember/object';

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
}
