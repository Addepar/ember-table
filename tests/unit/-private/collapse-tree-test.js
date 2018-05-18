import { module, test } from 'qunit';
import { A as emberA } from '@ember/array';
import { get, set } from '@ember/object';
import { run } from '@ember/runloop';

import CollapseTree from 'ember-table/-private/collapse-tree';

function generateNode(seq) {
  let children = emberA();

  seq.forEach(item => {
    if (Array.isArray(item)) {
      let lastNode = children[children.length - 1];

      lastNode.children = generateNode(item);
    } else {
      children.pushObject({ value: item });
    }
  });

  return children;
}

function generateTree(firstNode, values) {
  if (Array.isArray(firstNode)) {
    return generateNode(firstNode);
  }

  return {
    value: firstNode,
    children: generateNode(values),
  };
}

module('Unit | Private | CollapseTree', function() {
  test('empty tree works', function(assert) {
    let tree = CollapseTree.create({ tree: [] });
    assert.equal(tree.objectAt(-1), undefined);
    assert.equal(tree.objectAt(0), undefined);
    assert.equal(tree.objectAt(1), undefined);
  });

  test('basic tree works', function(assert) {
    let tree = CollapseTree.create({ tree: generateTree(0, [1, [2, 3], 4, [5, 6]]) });

    let expectedDepth = [0, 1, 2, 2, 1, 2, 2];
    let length = get(tree, 'length');

    assert.equal(length, 7);

    for (let i = 0; i < 7; i++) {
      assert.equal(tree.objectAt(i).value.value, i);
      assert.equal(tree.objectAt(i).parents.length, expectedDepth[i]);
    }

    assert.equal(tree.objectAt(length + 1), undefined);
    assert.equal(tree.objectAt(-1), undefined);
  });

  test('works with multiroot tree', function(assert) {
    let tree = CollapseTree.create({ tree: generateTree([0, [1, [2, 3], 4, [5, 6]], 7, [8, 9]]) });

    let expectedDepth = [0, 1, 2, 2, 1, 2, 2, 0, 1, 1];

    assert.equal(get(tree, 'length'), 10);

    for (let i = 0; i < 10; i++) {
      assert.equal(tree.objectAt(i).value.value, i);
      assert.equal(tree.objectAt(i).parents.length, expectedDepth[i]);
    }
  });

  test('intermediate leaf nodes work', function(assert) {
    let tree = CollapseTree.create({ tree: generateTree(0, [1, 2, [3, 4], 5, 6, [7, 8]]) });

    let expectedDepth = [0, 1, 1, 2, 2, 1, 1, 2, 2];

    assert.equal(get(tree, 'length'), 9);

    for (let i = 0; i < 9; i++) {
      assert.equal(tree.objectAt(i).value.value, i);
      assert.equal(tree.objectAt(i).parents.length, expectedDepth[i]);
    }
  });

  test('can collapse nodes', function(assert) {
    let tree = generateTree(0, [1, [2, 3], 4, [5, 6]]);
    let collapseTree = CollapseTree.create({ tree });

    set(tree.children[0], 'collapsed', true);

    let expectedValue = [0, 1, 4, 5, 6];
    let expectedDepth = [0, 1, 1, 2, 2];

    assert.equal(get(collapseTree, 'length'), 5);

    for (let i = 0; i < 5; i++) {
      assert.equal(collapseTree.objectAt(i).value.value, expectedValue[i]);
      assert.equal(collapseTree.objectAt(i).parents.length, expectedDepth[i]);
    }

    set(tree.children[0], 'collapsed', false);

    expectedValue = [0, 1, 2, 3, 4, 5, 6];
    expectedDepth = [0, 1, 2, 2, 1, 2, 2];

    assert.equal(get(collapseTree, 'length'), 7);

    for (let i = 0; i < 5; i++) {
      assert.equal(collapseTree.objectAt(i).value.value, expectedValue[i]);
      assert.equal(collapseTree.objectAt(i).parents.length, expectedDepth[i]);
    }
  });

  test('can collapse nodes without modifying underlying data structure', function(assert) {
    let tree = generateTree(0, [1, [2, 3], 4, [5, 6]]);
    let collapseTree = CollapseTree.create({ tree });

    collapseTree.objectAt(1).toggleCollapse();

    assert.equal(tree.children[0].collapsed, undefined);

    let expectedValue = [0, 1, 4, 5, 6];
    let expectedDepth = [0, 1, 1, 2, 2];

    assert.equal(get(collapseTree, 'length'), 5);

    for (let i = 0; i < 5; i++) {
      assert.equal(collapseTree.objectAt(i).value.value, expectedValue[i]);
      assert.equal(collapseTree.objectAt(i).parents.length, expectedDepth[i]);
    }

    collapseTree.objectAt(1).toggleCollapse();

    assert.equal(tree.children[0].collapsed, undefined);

    expectedValue = [0, 1, 2, 3, 4, 5, 6];
    expectedDepth = [0, 1, 2, 2, 1, 2, 2];

    assert.equal(get(collapseTree, 'length'), 7);

    for (let i = 0; i < 5; i++) {
      assert.equal(collapseTree.objectAt(i).value.value, expectedValue[i]);
      assert.equal(collapseTree.objectAt(i).parents.length, expectedDepth[i]);
    }
  });

  test('can update nodes', function(assert) {
    let tree = generateTree(0, [1, [2, 3], 6, [7, 8]]);
    let subtree = generateTree([4, 5]);
    let collapseTree = CollapseTree.create({ tree });

    tree.children[0].children.pushObjects(subtree);
    tree.children[1].children.popObject();

    let expectedDepth = [0, 1, 2, 2, 2, 2, 1, 2];

    assert.equal(get(collapseTree, 'length'), 8);

    for (let i = 0; i < 8; i++) {
      assert.equal(collapseTree.objectAt(i).value.value, i);
      assert.equal(collapseTree.objectAt(i).parents.length, expectedDepth[i]);
    }
  });

  test('can add and remove children', function(assert) {
    let tree = generateTree(0, [1, [2, 3], 6, [7, 8]]);
    let subtree = generateTree([4, 5]);
    let collapseTree = CollapseTree.create({ tree });

    set(tree.children[0].children[1], 'children', subtree);
    set(tree.children[1], 'children', null);

    let expectedDepth = [0, 1, 2, 2, 3, 3, 1];

    assert.equal(get(collapseTree, 'length'), 7);

    for (let i = 0; i < 7; i++) {
      assert.equal(collapseTree.objectAt(i).value.value, i);
      assert.equal(collapseTree.objectAt(i).parents.length, expectedDepth[i]);
    }
  });

  test('works with single level tree', function(assert) {
    let rows = [{ label: 'A', children: [] }, { label: 'B', children: [] }];
    let tree = CollapseTree.create({ tree: rows });
    run(() => {
      tree.get('length');
      tree.destroy();
      assert.ok(true, 'exception not thrown');
    });
  });
});
