import { set } from '@ember/object';
import { run } from '@ember/runloop';
import ColumnTree from 'ember-table/-private/column-tree';
import MetaCache from 'ember-table/-private/meta-cache';
import { module, test } from 'qunit';

// ColumnTree is a classic EmberObject model, so `create()` only knows
// EmberObject's own properties.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createTree(properties: object): any {
  return ColumnTree.create(properties as never);
}

let columnMetaCache: MetaCache<unknown, { destroy(): void }>, tree: ReturnType<typeof createTree>;

module('Unit | Private | ColumnTree', function(hooks) {
  hooks.beforeEach(function () {
    columnMetaCache = new MetaCache<unknown, { destroy(): void }>();
  });

  hooks.afterEach(function () {
    // Clean up so we can look for memory leaks more easily
    run(() => {
      for (let [key, value] of columnMetaCache.entries()) {
        value.destroy();
        columnMetaCache.delete(key);
      }

      tree.destroy();
    });
  });

  test('Setting the column width to its current value works', function (assert) {
    let columns = [
      { name: 'A', valuePath: 'A', width: 180 },
      { name: 'B', valuePath: 'B', width: 200 },
      { name: 'C', valuePath: 'C', width: 100 },
      { name: 'D', valuePath: 'D', width: 150 },
    ];
    tree = createTree({
      columns,
      columnMetaCache,
      enableTree: true,
    });

    let root = tree.root;
    let subcolumns = root.subcolumnNodes;
    let firstSubcolumns = subcolumns[0];
    let initialWidth = firstSubcolumns.width;
    set(firstSubcolumns, 'width', initialWidth);
    let width = firstSubcolumns.width;

    assert.strictEqual(width, 180, 'The width is unchanged');
  });
});
