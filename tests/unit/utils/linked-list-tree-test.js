import LinkedListTree from 'dummy/utils/linked-list-tree';
import { module, test } from 'qunit';
import { generateBasicRoot } from 'dummy/tests/helpers/tree-generator';

module('Unit | Utility | linked list tree');

/**
 * the values of the node, so that you can see where in the tree something went wrong.
 */
function nodePathStr(node) {
  let s = node.value;
  while (node.parent) {
    node = node.parent;
    s = `${node.value} > ${s}`;
  }
  return s;
}

/**
 * Ensure that the nodeCount, nodeCountDelta, and depth are correct for this node
 * and the whole subtree.
 *
 * @param {String} prefix Prefix to every assert message.
 */
function verifyNodeMetaData(assert, prefix, node, depth) {
  assert.equal(node.depth, depth, `${prefix}: node: ${nodePathStr(node)} has correct depth`);
  let count = 1;
  let delta = 0;
  for (let child of node.children) {
    verifyNodeMetaData(assert, prefix, child, depth + 1);
    count += child.nodeCount;
    delta += child.collapse ? -(child.nodeCount - 1) : child.nodeCountDelta;
  }
  assert.equal(
    node.nodeCountDelta,
    delta,
    `${prefix}: node: ${nodePathStr(node)} has correct node delta`
  );
  assert.equal(node.nodeCount, count, `${prefix}: node: ${nodePathStr(node)} has correct nodeCount`);
}

/**
 * Make sure all the counts and depths are correct.
 */
function verifyTreeMetadata(assert, prefix, lltree) {
  verifyNodeMetaData(assert, prefix, lltree.root, -1);
}

/**
 * Verify that the next, previous pointers operate in a chain.
 * Verify that the originalNext, original previous pointers operate in a chain.
 *
 * @param {String} prefix Prefix to every assert message.
 */
function verifyTreePointers(assert, prefix, lltree) {
  // next <-> prev
  let length = lltree.get('length');
  for (let i = 0; i < length - 1; i++) {
    let first = lltree.objectAt(i);
    let second = lltree.objectAt(i + 1);
    assert.equal(first.next.value, second.value, `${prefix}: node ${nodePathStr(first)} has well formed links`);
    assert.equal(first.value, second.previous.value, `${prefix}: node ${nodePathStr(first)} has well formed links`);
  }

  // original next <-> original prev
  let originalLength = lltree.root.nodeCount - 1;
  let count = 0;
  lltree.resetPointer();
  let node = lltree.pointerNode;
  while (node.originalNext) {
    count++;
    assert.equal(
      node.value,
      node.originalNext.originalPrevious().value,
      `${prefix}: node ${nodePathStr(node)} has well formed original links`
    );
    node = node.originalNext;
  }
  // we didn't visit the last one in the loop because the last one has no originalNext
  count++;
  assert.equal(count, originalLength, `${prefix}: trees nodeCount matches original (precollapse) linked list`);
}

/**
 * Split this node and its subtrees into the hidden and visible sets.
 */
function divideNodes(node, hidden, visible, subtreeIsHidden) {
  if (subtreeIsHidden) {
    hidden.add(node);
  } else {
    visible.add(node);
  }
  subtreeIsHidden |= node.collapse;
  for (let child of node.children) {
    divideNodes(child, hidden, visible, subtreeIsHidden);
  }
}

/**
 * Make sure none of the hidden nodes get traversed.
 */
function verifyTreeHiding(assert, prefix, lltree) {
  let hidden = new Set([]);
  let visible = new Set([]);
  divideNodes(lltree.root, hidden, visible, false);

  for (let i = 0; i < lltree.get('length'); i++) {
    let row = lltree.objectAt(i);
    assert.ok(visible.delete(row), `${prefix}: visible node ${nodePathStr(row)} is visited once`);
  }
  assert.ok(visible.delete(lltree.root), `${prefix}: root node was not visited`);
  assert.equal(visible.size, 0, `${prefix}: all visible nodes were visited`);
  assert.equal(hidden.size, -lltree.root.nodeCountDelta, `${prefix}: hidden nodes match count`);
}

function verifyTreeWellFormed(assert, prefix, lltree) {
  verifyTreeMetadata(assert, prefix, lltree);
  verifyTreePointers(assert, prefix, lltree);
  verifyTreeHiding(assert, prefix, lltree);
}

function verifyTreePath(assert, node, expectedTreePath) {
  for (let i = 0; i < expectedTreePath.length; i++) {
    assert.equal(node.value, expectedTreePath[i]);
    node = node.parent;
  }
}

// Replace this with your real tests.
test('Test objectAt', function(assert) {
  let tree = new LinkedListTree(generateBasicRoot());
  assert.equal(tree.get('length'), 1111, 'Tree has 1111 nodes');

  let node = tree.objectAt(359);
  assert.equal(tree.pointerIndex, 359);
  verifyTreePath(assert, node, ['Leaf 1', 'Group 2', 'Header 3', 'Top Row']);

  node = tree.objectAt(67);
  assert.equal(tree.pointerIndex, 67);
  verifyTreePath(assert, node, ['Leaf 9', 'Group 5', 'Header 0', 'Top Row']);
});

test('Test expanding and collapsing rows', function(assert) {
  let tree = new LinkedListTree(generateBasicRoot());

  let node = tree.objectAt(24); // Group 2
  tree.collapse(node);

  // Collapse a Group row
  assert.equal(tree.get('length'), 1101);
  assert.equal(node.next.value, 'Group 3');
  assert.equal(node.nodeCountDelta, 0);
  assert.equal(tree.objectAt(25).value, 'Group 3');

  // Collapse a Header row
  node = tree.objectAt(1); // Header 0
  tree.collapse(node);
  assert.equal(node.value, 'Header 0');
  assert.equal(node.nodeCountDelta, -10);
  assert.equal(tree.get('length'), 1001);

  // Expand Header
  tree.expand(node);
  assert.equal(node.value, 'Header 0');
  assert.equal(node.nodeCountDelta, -10);
  assert.equal(tree.get('length'), 1101);

  // Expand Group 2
  node = tree.objectAt(24);
  tree.expand(node);
  assert.equal(node.value, 'Group 2');
  assert.equal(tree.get('length'), 1111);
});

test('Previous node is correct after several rows collapse & expansion.', function(assert) {
  let tree = new LinkedListTree(generateBasicRoot(3));

  // Collapse Top Row -> Header 0 -> Group 2
  tree.collapse(tree.objectAt(10));

  // Collapse Top Row -> Header 0
  tree.collapse(tree.objectAt(1));

  // Expand Top Row -> Header 0
  tree.expand(tree.objectAt(1));

  // Move to pointer to the row 36
  tree.objectAt(0);
  tree.objectAt(36);

  assert.equal(tree.objectAt(0).value, 'Top Row');
  assert.equal(tree.objectAt(1).value, 'Header 0');
});

test('Tree is still well formed after removing rows', function(assert) {
  let tree = new LinkedListTree(generateBasicRoot(3, true));
  let originalLength = tree.get('length');

  // remove a bunch of leaf nodes
  verifyTreeWellFormed(assert, 'Initial', tree);
  tree.remove(tree.objectAt(5));
  tree.remove(tree.objectAt(6));
  tree.remove(tree.objectAt(7));
  tree.remove(tree.objectAt(8));
  verifyTreeWellFormed(assert, 'Remove leaves', tree);
  assert.equal(tree.get('length'), originalLength - 4, 'length is correct after removes');

  // remove node with children
  let headerNode = tree.objectAt(1);
  assert.equal(headerNode.value.substring(0, 6), 'Header', 'object is header node');
  tree.remove(headerNode);
  verifyTreeWellFormed(assert, 'Remove parent', tree);

  // remove node encapsulating a collapse
  let innerNode = tree.objectAt(10);
  let outerNode = tree.objectAt(1);
  assert.ok(
    innerNode.hasAncestor(outerNode),
    'test assumption is held (node to remove is in collapse region)'
  );
  tree.collapse(innerNode);
  tree.remove(outerNode);
  verifyTreeWellFormed(assert, 'Remove node with collapse inside', tree);

  // remove node encapsulated by a collapse
  innerNode = tree.objectAt(10);
  outerNode = tree.objectAt(1);
  assert.ok(
    innerNode.hasAncestor(outerNode),
    'test assumption is held (node to remove is in collapse region)'
  );
  tree.collapse(outerNode);
  tree.remove(innerNode);
  verifyTreeWellFormed(assert, 'Remove node inside collapse', tree);
});

test('Tree is still well formed after adding rows', function(assert) {
  let tree = new LinkedListTree(generateBasicRoot(3, true));
  let originalLength = tree.get('length');

  // add a bunch of leaf nodes
  verifyTreeWellFormed(assert, 'Initial', tree);
  tree.add('New Leaf 1', tree.objectAt(5));
  tree.add('New Leaf 2', tree.objectAt(6));
  tree.add('New Leaf 3', tree.objectAt(7));
  tree.add('New Leaf 4', tree.objectAt(8));
  verifyTreeWellFormed(assert, 'Add leaves', tree);
  assert.equal(tree.get('length'), originalLength + 4, 'length is correct after adds');

  // add leaf node to node with non leaf children
  let headerNode = tree.objectAt(1);
  assert.equal(headerNode.value.substring(0, 6), 'Header', 'object is header node');
  let justAdded = tree.add('New Leaf 5', headerNode);
  verifyTreeWellFormed(assert, 'Add to existing parent', tree);
  tree.remove(justAdded);

  // add node right after a collapse section
  let toCollapse = headerNode.lastChild();
  tree.collapse(toCollapse);
  tree.add('New Leaf 6', headerNode); // new leaf will be appended to headerNode's children
  verifyTreeWellFormed(assert, 'Add right after collapse section', tree);

  // add node right before a collapse section
  let header3 = tree.root.lastChild().lastChild();
  assert.equal(header3.value.substring(0, 6), 'Header', 'object is header node');
  let beforeCollapse = header3.previous.parent;
  tree.collapse(header3);
  tree.add('New Leaf 7', beforeCollapse);
  verifyTreeWellFormed(assert, 'Add right before collapse', tree);

  // add node inside collapse section
  tree.add('New Leaf 8', header3.lastChild());
  verifyTreeWellFormed(assert, 'Add inside collapse', tree);

  // now uncollapse the container
  tree.expand(header3);
  verifyTreeWellFormed(assert, 'Add inside collapse, then expand', tree);
});
