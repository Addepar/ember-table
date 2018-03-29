/**
 * A node in a LinkedListTree. To traverse the tree, use the next and previous pointers.
 *
 * The other pointers (nextOnCollapse, originalNext, previousStack) are used to manipulate
 * linked list pointers during collapse / expand operations.
 */
export default class TreeNode {
  parent = null;
  children = null;
  value = null;

  /**
   * Current next node in linked list.
   */
  next = null;

  /**
   * The next node when this tree is collapsed. This next node is usually the next sibling
   * in the tree or next sibling of one of its ancestor.
   */
  nextOnCollapse = null;

  /**
   * Next node when tree is fully expanded.
   */
  originalNext = null;

  /**
   * Current previous node in linked list.
   */
  previous = null;

  /**
   * A stack of previous nodes. Imagine a tree like this:
   *
   * A
   * |-B
   * | |-C
   * |   |-D
   * |-E
   *
   * When expanded, the previous of E is D.  If C collapses, then E's previous is
   * now C. If B then collapses, then E's previous is now B. Tree now looks like this:
   *
   * A
   * |-B*
   * |-E
   *
   * When we expand B, we want to know E's previous without traversing the whole
   * B subtree. Thus, we need to store the stack of previous nodes for E, and we can
   * determine the new previous node for E by popping off of this stack. (it's C)
   */
  previousStack = null;

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

  /**
   * Creates a new tree node. To set its parent, call `addChild` on the parent node.
   */
  constructor(value) {
    this.children = [];
    this.value = value;
  }

  addChild(child) {
    child.parent = this;
    this.children.push(child);
  }

  _setOriginalNext(node) {
    this.next = node;
    this.originalNext = node;

    if (node !== null) {
      node.previous = this;
    }
  }

  /**
   * Push a new previous pointer for this node during a collapse operation.
   *
   * NOT to be used for adding / removing nodes.
   *
   * See jsdoc for the `previousStack` attribute.
   */
  pushPrevious(newPrevious) {
    if (this.previousStack === null) {
      this.previousStack = [this.previous];
    } else {
      this.previousStack.push(this.previous);
    }
    this.previous = newPrevious;
  }

  /**
   * Pop a previous pointer off the stack and set the previous to that.
   *
   * Used during an expand operation
   *
   * See jsdoc for the `previousStack` attribute.
   */
  popPrevious() {
    this.previous = this.previousStack.pop();
    if (this.previousStack.length === 0) {
      this.previousStack = null;
    }
  }

  updateNext(nextNode) {
    let { children } = this;

    if (children.length > 0) {
      this._setOriginalNext(children[0]);
    } else {
      this._setOriginalNext(nextNode);
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
    return direction < 0 ? this.previous : this.next;
  }
}
