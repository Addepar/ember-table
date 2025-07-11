import { module, test } from 'qunit';
import { A as emberA } from '@ember/array';
import { set } from '@ember/object';
import { run } from '@ember/runloop';
import { settled } from '@ember/test-helpers';

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
    assert.strictEqual(tree.objectAt(-1), undefined);
    assert.strictEqual(tree.objectAt(0), undefined);
    assert.strictEqual(tree.objectAt(1), undefined);
  });

  test('basic tree works', function(assert) {
    tree = CollapseTree.create({
      rows: generateTree([0, [1, [2, 3], 4, [5, 6]]]),
      enableTree: true,
      rowMetaCache,
    });

    let expectedDepth = [0, 1, 2, 2, 1, 2, 2];
    let length = tree.length;

    assert.strictEqual(length, 7);

    for (let i = 0; i < 7; i++) {
      assert.strictEqual(tree.objectAt(i).value, i);
      assert.strictEqual(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }

    assert.strictEqual(tree.objectAt(length + 1), undefined);
    assert.strictEqual(tree.objectAt(-1), undefined);
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

    assert.strictEqual(tree.length, 7);

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

    assert.strictEqual(tree.length, 7);

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

    assert.strictEqual(tree.length, 1);

    for (let i = 0; i < 1; i++) {
      assert.strictEqual(tree.objectAt(i).value, i);
      assert.strictEqual(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }

    tree.set('enableTree', true);

    expectedDepth = [0, 1, 1];

    assert.strictEqual(tree.length, 3);

    for (let i = 0; i < 3; i++) {
      assert.strictEqual(tree.objectAt(i).value, i);
      assert.strictEqual(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }
  });

  test('works with multiroot tree', function(assert) {
    tree = CollapseTree.create({
      rows: generateTree([0, [1, [2, 3], 4, [5, 6]], 7, [8, 9]]),
      enableTree: true,
      rowMetaCache,
    });

    let expectedDepth = [0, 1, 2, 2, 1, 2, 2, 0, 1, 1];

    assert.strictEqual(tree.length, 10);

    for (let i = 0; i < 10; i++) {
      assert.strictEqual(tree.objectAt(i).value, i);
      assert.strictEqual(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }
  });

  test('intermediate leaf nodes work', function(assert) {
    tree = CollapseTree.create({
      rows: generateTree([0, [1, 2, [3, 4], 5, 6, [7, 8]]]),
      enableTree: true,
      rowMetaCache,
    });

    let expectedDepth = [0, 1, 1, 2, 2, 1, 1, 2, 2];

    assert.strictEqual(tree.length, 9);

    for (let i = 0; i < 9; i++) {
      assert.strictEqual(tree.objectAt(i).value, i);
      assert.strictEqual(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }
  });

  test('can collapse nodes', async function(assert) {
    let rows = generateTree([0, [1, [2, 3], 4, [5, 6]]]);
    tree = CollapseTree.create({
      rows,
      rowMetaCache,
      enableTree: true,
      enableCollapse: true,
    });

    set(rows[0].children[0], 'isCollapsed', true);
    await settled();

    let expectedValue = [0, 1, 4, 5, 6];
    let expectedDepth = [0, 1, 1, 2, 2];

    assert.strictEqual(tree.length, 5);

    for (let i = 0; i < expectedValue.length; i++) {
      assert.strictEqual(
        tree.objectAt(i).value,
        expectedValue[i],
        `after collapsing rows[0].children[0], correct tree value at ${i}`
      );
      assert.strictEqual(
        metaFor(tree.objectAt(i)).get('depth'),
        expectedDepth[i],
        `after collapsing rows[0].chilrden[0], correct depth at ${i}`
      );
    }

    set(rows[0].children[0], 'isCollapsed', false);
    await settled();

    expectedValue = [0, 1, 2, 3, 4, 5, 6];
    expectedDepth = [0, 1, 2, 2, 1, 2, 2];

    assert.strictEqual(
      tree.length,
      7,
      'after un-collapsing rows[0].children[0], tree length is correct'
    );

    for (let i = 0; i < expectedValue.length; i++) {
      assert.strictEqual(
        tree.objectAt(i).value,
        expectedValue[i],
        `after un-collapsing rows[0].children[0], correct value at ${i}`
      );
      assert.strictEqual(
        metaFor(tree.objectAt(i)).get('depth'),
        expectedDepth[i],
        `after un-collapsing rows[0].children[0], correct depth at ${i}`
      );
    }
  });

  test('can collapse nodes without modifying underlying data structure', async function(assert) {
    let rows = generateTree([0, [1, [2, 3], 4, [5, 6]]]);
    tree = CollapseTree.create({
      rows,
      rowMetaCache,
      enableTree: true,
      enableCollapse: true,
    });

    metaFor(tree.objectAt(1)).toggleCollapse();
    await settled();

    assert.strictEqual(rows[0].children[0].isCollapsed, undefined);

    let expectedValue = [0, 1, 4, 5, 6];
    let expectedDepth = [0, 1, 1, 2, 2];

    assert.strictEqual(tree.length, 5);

    for (let i = 0; i < expectedValue.length; i++) {
      assert.strictEqual(tree.objectAt(i).value, expectedValue[i]);
      assert.strictEqual(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }

    metaFor(tree.objectAt(1)).toggleCollapse();
    await settled();

    assert.strictEqual(rows[0].children[0].isCollapsed, undefined);

    expectedValue = [0, 1, 2, 3, 4, 5, 6];
    expectedDepth = [0, 1, 2, 2, 1, 2, 2];

    assert.strictEqual(tree.length, 7);

    for (let i = 0; i < expectedValue.length; i++) {
      assert.strictEqual(tree.objectAt(i).value, expectedValue[i]);
      assert.strictEqual(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }
  });

  test('can disable collapse', async function(assert) {
    let rows = generateTree([0, [1, [2, 3], 4, [5, 6]]]);
    tree = CollapseTree.create({ rows, rowMetaCache, enableTree: true });

    assert.false(metaFor(tree.objectAt(1)).get('canCollapse'), 'collapse is disabled');

    metaFor(tree.objectAt(1)).toggleCollapse();
    await settled();

    let expectedValue = [0, 1, 2, 3, 4, 5, 6];
    let expectedDepth = [0, 1, 2, 2, 1, 2, 2];

    assert.strictEqual(tree.length, 7);

    for (let i = 0; i < expectedValue.length; i++) {
      assert.strictEqual(tree.objectAt(i).value, expectedValue[i]);
      assert.strictEqual(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }

    tree.set('enableCollapse', true);
    metaFor(tree.objectAt(1)).toggleCollapse();
    await settled();

    expectedValue = [0, 1, 4, 5, 6];
    expectedDepth = [0, 1, 1, 2, 2];

    assert.strictEqual(tree.length, 5);

    for (let i = 0; i < expectedValue.length; i++) {
      assert.strictEqual(tree.objectAt(i).value, expectedValue[i]);
      assert.strictEqual(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }
  });

  test('can disable collapse at a row level', async function(assert) {
    let rows = generateTree([0, [1, [2, 3], 4, [5, 6]]]);
    tree = CollapseTree.create({ rows, rowMetaCache, enableTree: true });
    let row4Meta = metaFor(tree.objectAt(4));
    assert.notStrictEqual(
      row4Meta.get('_rowValue.disableCollapse'),
      true,
      'collapse is not yet disabled'
    );

    let expectedValue = [0, 1, 2, 3, 4, 5, 6];
    let expectedDepth = [0, 1, 2, 2, 1, 2, 2];

    assert.strictEqual(tree.length, 7);

    for (let i = 0; i < expectedValue.length; i++) {
      assert.strictEqual(tree.objectAt(i).value, expectedValue[i]);
      assert.strictEqual(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }

    row4Meta.set('_rowValue.disableCollapse', true);
    await settled();

    // we can no longer collapse the tree at this row
    assert.false(row4Meta.canCollapse);
    // but the tree remains unchanged other than the ability to collapse
    assert.strictEqual(tree.length, 7);
    for (let i = 0; i < expectedValue.length; i++) {
      assert.strictEqual(tree.objectAt(i).value, expectedValue[i]);
      assert.strictEqual(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }
  });

  test('can update nodes', function(assert) {
    let rows = generateTree([0, [1, [2, 3], 6, [7, 8]]]);
    let subrows = generateTree([4, 5]);
    tree = CollapseTree.create({ rows, rowMetaCache, enableTree: true });

    rows[0].children[0].children.pushObjects(subrows);
    rows[0].children[1].children.popObject();

    let expectedDepth = [0, 1, 2, 2, 2, 2, 1, 2];

    assert.strictEqual(tree.length, 8);

    for (let i = 0; i < expectedDepth.length; i++) {
      assert.strictEqual(tree.objectAt(i).value, i);
      assert.strictEqual(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }
  });

  test('can add and remove children', function(assert) {
    let rows = generateTree([0, [1, [2, 3], 6, [7, 8]]]);
    let subrows = generateTree([4, 5]);
    tree = CollapseTree.create({ rows, rowMetaCache, enableTree: true });

    set(rows[0].children[0].children[1], 'children', subrows);
    set(rows[0].children[1], 'children', null);

    let expectedDepth = [0, 1, 2, 2, 3, 3, 1];

    assert.strictEqual(tree.length, 7);

    for (let i = 0; i < expectedDepth.length; i++) {
      assert.strictEqual(tree.objectAt(i).value, i);
      assert.strictEqual(metaFor(tree.objectAt(i)).get('depth'), expectedDepth[i]);
    }
  });

  test('works with single level tree', function(assert) {
    let rows = [{ label: 'A', children: [] }, { label: 'B', children: [] }];
    tree = CollapseTree.create({ rows, rowMetaCache });

    run(() => {
      tree.get('length');
      tree.destroy();
      assert.true(true, 'exception not thrown');
    });
  });

  test('can add child to leaf node', async function(assert) {
    let rows = [{ label: 'A', children: emberA([]) }, { label: 'B', children: emberA([]) }];
    tree = CollapseTree.create({ rows, rowMetaCache, enableTree: true });

    assert.strictEqual(tree.get('length'), 2, 'tree starts out with length 2');

    rows[0].children.pushObject({ label: 'C', children: [] });
    await settled();

    assert.strictEqual(tree.get('length'), 3, 'adding a child to a leaf node increases length');
  });
});
