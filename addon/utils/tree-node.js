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

  /**
   * Where in the linked list this node lives.
   */
  index = null;

  /**
   * Whether this node has been collapsed (does not indicate whether or not an ancestor
   * has been collapsed).
   */
  collapse = false;

  depth = 0;

  /**
   * Creates a new tree node. To set its parent, call `addChild` on the parent node.
   */
  constructor(value) {
    this.children = [];
    this.value = value;
  }

  /**
   * Add a child to this node. Will not update any pointers.
   */
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

  originalPrevious() {
    return this.previousStack ? this.previousStack[0] : this.previous;
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
   * Pop a previous pointer off the stack and set the previous to that; using during
   * an expand operation.
   *
   * NOT to be used for adding / removing nodes.
   *
   * See jsdoc for the `previousStack` attribute.
   */
  popPrevious() {
    this.previous = this.previousStack.pop();
    if (this.previousStack.length === 0) {
      this.previousStack = null;
    }
  }

  /**
   * Recursively initialize the next/prev pointers
   */
  initializePointers(nextNode) {
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
      children[i].initializePointers(nextNode);
      nextNode = children[i];

      if (i === children.length - 1) {
        children[i].nextOnCollapse = originalNextNode;
      } else {
        children[i].nextOnCollapse = children[i + 1];
      }
    }
  }

  /**
   * initializes depth, node counts, and index
   */
  initializeMetadata(depth, nextIndex) {
    this.depth = depth;
    this.nodeCount = 1;
    this.index = nextIndex;
    nextIndex++;

    for (let child of this.children) {
      child.initializeMetadata(depth + 1, nextIndex);
      nextIndex += child.nodeCount;
      this.nodeCount += child.nodeCount;
    }
  }

  nextWithDirection(direction) {
    return direction < 0 ? this.previous : this.next;
  }
}
