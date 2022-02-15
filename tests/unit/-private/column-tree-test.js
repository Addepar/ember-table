import { get, set } from '@ember/object';
import { run } from '@ember/runloop';
import ColumnTree from 'ember-table/-private/column-tree';
import MetaCache from 'ember-table/-private/meta-cache';
import { module, test } from 'qunit';

let columnMetaCache, tree;

module('Unit | Private | ColumnTree', function(hooks) {
  hooks.beforeEach(function() {
    columnMetaCache = new MetaCache();
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
