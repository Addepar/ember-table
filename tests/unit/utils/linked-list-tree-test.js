import LinkedListTree from 'dummy/utils/linked-list-tree';
import { module, test } from 'qunit';
import { generateBasicRoot } from 'dummy/tests/helpers/tree-generator';

module('Unit | Utility | linked list tree');

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
