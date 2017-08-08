import { module, test } from 'qunit';
import { generateBasicRoot } from 'dummy/tests/helpers/tree-generator';

module('Unit | Utility | tree node');

// Replace this with your real tests.
test('Test next and preivous nodes', function(assert) {
  const root = generateBasicRoot();
  assert.equal(root.nodeCount, 1111, 'Root has 1111 nodes including self');

  let node = root.next.next; // Group 0
  assert.equal(node.value, 'Group 0', 'Next node is correct');

  // Test next nodes of the 10 leaf
  for (let i = 0; i < 10; i++) {
    node = node.next;
    assert.equal(node.value, `Leaf ${i}`, `Leaf ${i} of Group 0 is correct`);
  }

  // Test previous nodes of the 10 leaf
  for (let i = 9; i >= 0; i--) {
    assert.equal(node.value, `Leaf ${i}`, `Leaf ${i} of Group 0 is correct`);
    node = node.previous;
  }

  assert.equal(node.value, 'Group 0', 'Previous node of leaf 0 is correct');

  // Test next node on collapse of Header 0.
  const header0 = root.next;
  assert.equal(header0.nextOnCollapse.value, 'Header 1',
    'Next node on collapse of Header 0 is Header 1');

  assert.equal(header0.nextWithDirection(-1).value, 'Root',
    'Next node with negative direction of header 0 is Root');

  assert.equal(header0.nextWithDirection(1).value, 'Group 0',
    'Next node with positive direction of header 0 is Group 0');
});
