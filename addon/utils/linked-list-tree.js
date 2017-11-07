import { property } from '../utils/class';
import EmberObject from '@ember/object';

export default class LinkedListTree extends EmberObject {
  @property pointerNode = null;
  @property pointerIndex = -1;

  /**
   * When a node is collapsed, this map stores list of previous nodes for the node next to the
   * collapsed node. This is used to retrieve correct previous node upon node expansion.
   */
  @property _previousNodes = null;

  constructor(root) {
    super();

    root.updateNext(null);
    root.updateNodeCountAndIndex(-1);
    root.updateDepth(-1);

    this.pointerIndex = 0;
    // Root is a virtual node and will not be used for display
    if (root.children.length > 0) {
      this.pointerNode = root.children[0];
    }

    this.set('length', root.nodeCount - 1);

    this._previousNodes = new WeakMap();
  }

  objectAt(index) {
    const direction = this.pointerIndex < index ? 1 : -1;
    while (index != this.pointerIndex) {
      this.pointerNode = this.pointerNode.nextWithDirection(direction);
      this.pointerIndex += direction;
    }

    return this.pointerNode;
  }

  updateParentNodeCount(node, delta) {
    node = node.parent;
    while (node != null) {
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
  movePointerToRow(row) {
    const direction = this.pointerNode.index < row.index ? 1 : -1;
    while (row.index != this.pointerNode.index) {
      this.pointerNode = this.pointerNode.nextWithDirection(direction);
      this.pointerIndex += direction;
    }
  }

  collapseNode(row) {
    // Now update pointerNode to the selected node.
    this.movePointerToRow(row);

    // Update next & previous link.
    const newNextNode = row.nextOnCollapse;
    row.next = newNextNode;
    if (newNextNode != null) {
      // The newNextNode could have some previous nodes before. Push the collapsed row to the
      // previous node list.
      let previousNodes = this._previousNodes.get(newNextNode);
      if (previousNodes === undefined) {
        previousNodes = [];
      }
      previousNodes.push(newNextNode.previous);
      this._previousNodes.set(newNextNode, previousNodes);

      newNextNode.previous = row;
    }

    row.collapse = true;
    this.updateParentNodeCount(row, 1 - (row.nodeCount + row.nodeCountDelta));
    this.notifyPropertyChange('[]');
  }

  expand(row) {
    // Now update pointerNode to the selected node.
    this.movePointerToRow(row);

    // Update next & previous link.
    const newNextNode = row.next;
    if (newNextNode != null) {
      const previousNodes = this._previousNodes.get(newNextNode);
      newNextNode.previous = previousNodes[previousNodes.length - 1];

      previousNodes.pop();
      if (previousNodes.length === 0) {
        this._previousNodes.delete(newNextNode);
      }
    }
    row.next = row.originalNext;

    row.collapse = false;
    this.updateParentNodeCount(row, (row.nodeCount + row.nodeCountDelta) - 1);
    this.notifyPropertyChange('[]');
  }
}
