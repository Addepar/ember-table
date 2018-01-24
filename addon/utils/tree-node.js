
export default class TreeNode {
  parent = null;
  children = null;
  value = null;

  /**
   * Current next node (apply for both case expand & collapse).
   */
  next = null;

  /**
   * The next node when this tree collapse. This next node is usually the next sibling in the tree
   * or next sibling of one of its ancestor.
   */
  nextOnCollapse = null;

  /**
   * Original next node when tree is fully expanded.
   */
  originalNext = null;

  /**
   * Current previous node (apply for both case expand & collapse).
   */
  previous = null;

  /**
   * Total number of node in this subtree (including this node).
   */
  nodeCount = null;
  /**
   * The number of nodes that has been collapsed by this node's children & grand-children. This
   * value is negative for easy computation.
   */
  nodeCountDelta = 0;

  index = null;

  collapse = false;

  constructor(parent, value) {
    this.children = [];
    this.parent = parent;
    this.value = value;
  }

  addChild(child) {
    this.children.push(child);
  }

  setNext(node) {
    this.next = node;
  }

  _setNextNode(node) {
    this.next = node;
    this.originalNext = node;

    if (node !== null) {
      node.previous = this;
    }
  }

  updateNext(nextNode) {
    let { children } = this;

    if (children.length > 0) {
      this._setNextNode(children[0]);
    } else {
      this._setNextNode(nextNode);
      return;
    }

    let originalNextNode = nextNode;

    // iterate from the last to first child of this node.
    for (let i = children.length - 1; i >= 0; i--) {
      children[i].updateNext(nextNode);
      nextNode = children[i];

      if (i === children.length - 1) {
        children[i].nextOnCollapse = originalNextNode;
      } else {
        children[i].nextOnCollapse = children[i + 1];
      }
    }
  }

  updateDepth(depth) {
    this.depth = depth;
    for (let child of this.children) {
      child.updateDepth(depth + 1);
    }
  }

  updateNodeCountAndIndex(currentIndex) {
    this.nodeCount = 1;
    this.index = currentIndex;
    currentIndex += 1;

    for (let i = 0; i < this.children.length; i++) {
      this.nodeCount += this.children[i].updateNodeCountAndIndex(currentIndex);
      currentIndex += this.children[i].nodeCount;
    }

    return this.nodeCount;
  }

  nextWithDirection(direction) {
    if (direction < 0) {
      return this.previous;
    }
    return this.next;
  }
}
