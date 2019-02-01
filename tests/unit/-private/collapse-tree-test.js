import { module, test } from 'qunit';
import { A as emberA } from '@ember/array';
import { get, set } from '@ember/object';
import { run } from '@ember/runloop';

import CollapseTree from 'ember-table/-private/collapse-tree';

// Cache is required for the row metas
let rowMetaCache, tree;

function metaFor(value) {
  return rowMetaCache.get(value);
}

function generateTree(seq) {
  let children = emberA();

  seq.forEach(item => {
    if (Array.isArray(item)) {
      let lastNode = children[children.length - 1];

      lastNode.children = generateTree(item);
    } else {
      children.pushObject({ value: item });
    }
  });

  return children;
}

module('Unit | Private | CollapseTree', function(hooks) {
  hooks.beforeEach(function() {
    rowMetaCache = new Map();
  });

  hooks.afterEach(function() {
    // Clean up so we can look for memory leaks more easily
    run(() => {
      for (let [key, value] of rowMetaCache.entries()) {
        value.destroy();
        rowMetaCache.delete(key);
      }

      tree.destroy();
    });
  });

  test('empty tree works', function(assert) {
    tree = CollapseTree.create({ rows: [] });
    assert.equal(tree.objectAt(-1), undefined);
    assert.equal(tree.objectAt(0), undefined);
    assert.equal(tree.objectAt(1), undefined);
  });

  test('basic tree works', function(assert) {
    tree = CollapseTree.create({
      rows: generateTree([0, [1, [2, 3], 4, [5, 6]]]),
      enableTree: true,
      rowMetaCache,
    });

    let expectedDepth = [0, 1, 2, 2, 1, 2, 2];
    let length = get(tree, 'length');

    assert.equal(length, 7);

    for (let i = 0; i < 7; i++) {
      assert.equal(tree.objectAt(i).value, i);
      assert.equal(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }

    assert.equal(tree.objectAt(length + 1), undefined);
    assert.equal(tree.objectAt(-1), undefined);
  });

  test('rowMeta next works', function(assert) {
    tree = CollapseTree.create({
      rows: generateTree([0, [1, [2, 3], 4, [5, 6]]]),
      enableTree: true,
      rowMetaCache,
    });

    let expectedNext = [
      {
        children: [{ value: 2 }, { value: 3 }],
        value: 1,
      },
      { value: 2 },
      { value: 3 },
      {
        children: [{ value: 5 }, { value: 6 }],
        value: 4,
      },
      { value: 5 },
      { value: 6 },
      null,
    ];

    assert.equal(get(tree, 'length'), 7);

    for (let i = 0; i < 7; i++) {
      assert.deepEqual(metaFor(tree.objectAt(i)).get('next'), expectedNext[i]);
    }
  });

  test('rowMeta prev works', function(assert) {
    tree = CollapseTree.create({
      rows: generateTree([0, [1, [2, 3], 4, [5, 6]]]),
      enableTree: true,
      rowMetaCache,
    });

    let expectedPrev = [
      null,
      {
        children: [
          {
            children: [{ value: 2 }, { value: 3 }],
            value: 1,
          },
          {
            children: [{ value: 5 }, { value: 6 }],
            value: 4,
          },
        ],
        value: 0,
      },
      {
        children: [{ value: 2 }, { value: 3 }],
        value: 1,
      },
      { value: 2 },
      { value: 3 },
      {
        children: [{ value: 5 }, { value: 6 }],
        value: 4,
      },
      { value: 5 },
    ];

    assert.equal(get(tree, 'length'), 7);

    for (let i = 0; i < 7; i++) {
      assert.deepEqual(metaFor(tree.objectAt(i)).get('prev'), expectedPrev[i]);
    }
  });

  test('rowMeta first works with at least 1 row', function(assert) {
    tree = CollapseTree.create({
      rows: generateTree([0, 1]),
      enableTree: true,
      rowMetaCache,
    });

    let expectedFirst = { value: 0 };

    for (let i = 0; i < 2; i++) {
      assert.deepEqual(metaFor(tree.objectAt(i)).get('first'), expectedFirst);
    }
  });

  test('rowMeta last works with at least 1 row', function(assert) {
    tree = CollapseTree.create({
      rows: generateTree([0, 1, [2, 3]]),
      enableTree: true,
      rowMetaCache,
    });

    let expectedLast = { value: 3 };

    for (let i = 0; i < 4; i++) {
      assert.deepEqual(metaFor(tree.objectAt(i)).get('last'), expectedLast);
    }
  });

  test('can disable tree', function(assert) {
    tree = CollapseTree.create({
      rows: generateTree([0, [1, 2]]),
      enableTree: false,
      rowMetaCache,
    });

    let expectedDepth = [0];

    assert.equal(get(tree, 'length'), 1);

    for (let i = 0; i < 1; i++) {
      assert.equal(tree.objectAt(i).value, i);
      assert.equal(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }

    tree.set('enableTree', true);

    expectedDepth = [0, 1, 1];

    assert.equal(get(tree, 'length'), 3);

    for (let i = 0; i < 3; i++) {
      assert.equal(tree.objectAt(i).value, i);
      assert.equal(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }
  });

  test('works with multiroot tree', function(assert) {
    tree = CollapseTree.create({
      rows: generateTree([0, [1, [2, 3], 4, [5, 6]], 7, [8, 9]]),
      enableTree: true,
      rowMetaCache,
    });

    let expectedDepth = [0, 1, 2, 2, 1, 2, 2, 0, 1, 1];

    assert.equal(get(tree, 'length'), 10);

    for (let i = 0; i < 10; i++) {
      assert.equal(tree.objectAt(i).value, i);
      assert.equal(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }
  });

  test('intermediate leaf nodes work', function(assert) {
    tree = CollapseTree.create({
      rows: generateTree([0, [1, 2, [3, 4], 5, 6, [7, 8]]]),
      enableTree: true,
      rowMetaCache,
    });

    let expectedDepth = [0, 1, 1, 2, 2, 1, 1, 2, 2];

    assert.equal(get(tree, 'length'), 9);

    for (let i = 0; i < 9; i++) {
      assert.equal(tree.objectAt(i).value, i);
      assert.equal(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }
  });

  test('can collapse nodes', function(assert) {
    let rows = generateTree([0, [1, [2, 3], 4, [5, 6]]]);
    tree = CollapseTree.create({
      rows,
      rowMetaCache,
      enableTree: true,
      enableCollapse: true,
    });

    set(rows[0].children[0], 'isCollapsed', true);

    let expectedValue = [0, 1, 4, 5, 6];
    let expectedDepth = [0, 1, 1, 2, 2];

    assert.equal(get(tree, 'length'), 5);

    for (let i = 0; i < 5; i++) {
      assert.equal(tree.objectAt(i).value, expectedValue[i]);
      assert.equal(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }

    set(rows[0].children[0], 'isCollapsed', false);

    expectedValue = [0, 1, 2, 3, 4, 5, 6];
    expectedDepth = [0, 1, 2, 2, 1, 2, 2];

    assert.equal(get(tree, 'length'), 7);

    for (let i = 0; i < 5; i++) {
      assert.equal(tree.objectAt(i).value, expectedValue[i]);
      assert.equal(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }
  });

  test('can collapse nodes without modifying underlying data structure', function(assert) {
    let rows = generateTree([0, [1, [2, 3], 4, [5, 6]]]);
    tree = CollapseTree.create({
      rows,
      rowMetaCache,
      enableTree: true,
      enableCollapse: true,
    });

    metaFor(tree.objectAt(1)).toggleCollapse();

    assert.equal(rows[0].children[0].isCollapsed, undefined);

    let expectedValue = [0, 1, 4, 5, 6];
    let expectedDepth = [0, 1, 1, 2, 2];

    assert.equal(get(tree, 'length'), 5);

    for (let i = 0; i < 5; i++) {
      assert.equal(tree.objectAt(i).value, expectedValue[i]);
      assert.equal(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }

    metaFor(tree.objectAt(1)).toggleCollapse();

    assert.equal(rows[0].children[0].isCollapsed, undefined);

    expectedValue = [0, 1, 2, 3, 4, 5, 6];
    expectedDepth = [0, 1, 2, 2, 1, 2, 2];

    assert.equal(get(tree, 'length'), 7);

    for (let i = 0; i < 5; i++) {
      assert.equal(tree.objectAt(i).value, expectedValue[i]);
      assert.equal(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }
  });

  test('can disable collapse', function(assert) {
    let rows = generateTree([0, [1, [2, 3], 4, [5, 6]]]);
    tree = CollapseTree.create({ rows, rowMetaCache, enableTree: true });

    assert.equal(metaFor(tree.objectAt(1)).get('canCollapse'), false, 'collapse is disabled');

    metaFor(tree.objectAt(1)).toggleCollapse();

    let expectedValue = [0, 1, 2, 3, 4, 5, 6];
    let expectedDepth = [0, 1, 2, 2, 1, 2, 2];

    assert.equal(get(tree, 'length'), 7);

    for (let i = 0; i < 7; i++) {
      assert.equal(tree.objectAt(i).value, expectedValue[i]);
      assert.equal(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }

    tree.set('enableCollapse', true);
    metaFor(tree.objectAt(1)).toggleCollapse();

    expectedValue = [0, 1, 4, 5, 6];
    expectedDepth = [0, 1, 1, 2, 2];

    assert.equal(get(tree, 'length'), 5);

    for (let i = 0; i < 5; i++) {
      assert.equal(tree.objectAt(i).value, expectedValue[i]);
      assert.equal(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }
  });

  test('can disable collapse at a row level', function(assert) {
    let rows = generateTree([0, [1, [2, 3], 4, [5, 6]]]);
    tree = CollapseTree.create({ rows, rowMetaCache, enableTree: true });
    let row4Meta = metaFor(tree.objectAt(4));
    assert.equal(
      row4Meta.get('_rowValue.disableCollapse') === true,
      false,
      'collapse is not yet disabled'
    );

    let expectedValue = [0, 1, 2, 3, 4, 5, 6];
    let expectedDepth = [0, 1, 2, 2, 1, 2, 2];

    assert.equal(get(tree, 'length'), 7);

    for (let i = 0; i < 7; i++) {
      assert.equal(tree.objectAt(i).value, expectedValue[i]);
      assert.equal(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }

    row4Meta.set('_rowValue.disableCollapse', true);

    // we can no longer collapse the tree at this row
    assert.equal(get(row4Meta, 'canCollapse'), false);
    // but the tree remains unchanged other than the ability to collapse
    assert.equal(get(tree, 'length'), 7);
    for (let i = 0; i < 7; i++) {
      assert.equal(tree.objectAt(i).value, expectedValue[i]);
      assert.equal(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }
  });

  test('can update nodes', function(assert) {
    let rows = generateTree([0, [1, [2, 3], 6, [7, 8]]]);
    let subrows = generateTree([4, 5]);
    tree = CollapseTree.create({ rows, rowMetaCache, enableTree: true });

    rows[0].children[0].children.pushObjects(subrows);
    rows[0].children[1].children.popObject();

    let expectedDepth = [0, 1, 2, 2, 2, 2, 1, 2];

    assert.equal(get(tree, 'length'), 8);

    for (let i = 0; i < 8; i++) {
      assert.equal(tree.objectAt(i).value, i);
      assert.equal(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }
  });

  test('can add and remove children', function(assert) {
    let rows = generateTree([0, [1, [2, 3], 6, [7, 8]]]);
    let subrows = generateTree([4, 5]);
    tree = CollapseTree.create({ rows, rowMetaCache, enableTree: true });

    set(rows[0].children[0].children[1], 'children', subrows);
    set(rows[0].children[1], 'children', null);

    let expectedDepth = [0, 1, 2, 2, 3, 3, 1];

    assert.equal(get(tree, 'length'), 7);

    for (let i = 0; i < 7; i++) {
      assert.equal(tree.objectAt(i).value, i);
      assert.equal(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }
  });

  test('works with single level tree', function(assert) {
    let rows = [{ label: 'A', children: [] }, { label: 'B', children: [] }];
    tree = CollapseTree.create({ rows, rowMetaCache });

    run(() => {
      tree.get('length');
      tree.destroy();
      assert.ok(true, 'exception not thrown');
    });
  });

  test('can add child to leaf node', function(assert) {
    let rows = [{ label: 'A', children: emberA([]) }, { label: 'B', children: emberA([]) }];
    tree = CollapseTree.create({ rows, rowMetaCache, enableTree: true });

    run(() => {
      assert.equal(tree.get('length'), 2, 'tree starts out with length 2');
      rows[0].children.pushObject({ label: 'C', children: [] });
      assert.equal(tree.get('length'), 3, 'adding a child to a leaf node increases length');
    });
  });
});
