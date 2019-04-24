import { A as emberA } from '@ember/array';
import { get, set } from '@ember/object';
import { run } from '@ember/runloop';
import ColumnTree from 'ember-table/-private/column-tree';
import { module, test } from 'qunit';

let columnMetaCache, tree;

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

module('Unit | Private | ColumnTree', function(hooks) {
  hooks.beforeEach(function() {
    columnMetaCache = new Map();
  });

  hooks.afterEach(function() {
    // Clean up so we can look for memory leaks more easily
    run(() => {
      for (let [key, value] of columnMetaCache.entries()) {
        value.destroy();
        columnMetaCache.delete(key);
      }

      tree.destroy();
    });
  });

  test('Setting the column width to its current value works', function(assert) {
    let columns = [
      { name: 'A', valuePath: 'A', width: 180 },
      { name: 'B', valuePath: 'B', width: 200 },
      { name: 'C', valuePath: 'C', width: 100 },
      { name: 'D', valuePath: 'D', width: 150 },
    ];
    tree = ColumnTree.create({
      columns,
      columnMetaCache,
      rows: generateTree([0, [1, [2, 3], 4, [5, 6]]]),
      enableTree: true,
    });

    let root = get(tree, 'root');
    let subcolumns = get(root, 'subcolumnNodes');
    let firstSubcolumns = subcolumns[0];
    let initialWidth = get(firstSubcolumns, 'width');
    set(firstSubcolumns, 'width', initialWidth);
    let width = get(firstSubcolumns, 'width');

    assert.equal(width, 180, 'The width is unchanged');
  });
});
