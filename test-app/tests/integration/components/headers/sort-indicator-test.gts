import { module, test } from 'qunit';
import { render } from '@ember/test-helpers';

import { SortPage } from 'ember-table/test-support/pages/-private/ember-table-header';

import { componentModule } from '../../../helpers/module';
import { EmberThSortIndicator } from 'ember-table';
import type { TableTestContext } from '../../../helpers/table-test-context';

let sort = new SortPage();

module('Integration | Component | ember-th/sort-indicator', function() {
  componentModule('basic', function() {
    test('it renders', async function (this: TableTestContext, assert) {
      this.set('columnMeta', {
        isSorted: true,
      });

      const ctx = this;
      await render(<template><EmberThSortIndicator @columnMeta={{ctx.columnMeta}} /></template>);

      assert.true(sort.indicator.isPresent);

      // Template block usage:
      await render(<template>
        <EmberThSortIndicator @columnMeta={{ctx.columnMeta}}>
          template block text
        </EmberThSortIndicator>
      </template>);

      assert.strictEqual(sort.indicator.text, 'template block text');
    });

    test('it is hidden when not sorted', async function (this: TableTestContext, assert) {
      this.set('columnMeta', {
        isSorted: false,
      });

      const ctx = this;
      await render(<template><EmberThSortIndicator @columnMeta={{ctx.columnMeta}} /></template>);

      assert.false(sort.indicator.isPresent);

      // Template block usage:
      await render(<template>
        <EmberThSortIndicator @columnMeta={{ctx.columnMeta}}>
          template block text
        </EmberThSortIndicator>
      </template>);

      assert.false(sort.indicator.isPresent);
    });

    test('it displays the sort order', async function (this: TableTestContext, assert) {
      this.set('columnMeta', {
        isSorted: true,
        isSortedAsc: true,
      });

      const ctx = this;
      await render(<template><EmberThSortIndicator @columnMeta={{ctx.columnMeta}} /></template>);
      // asc sort
      assert.true(sort.indicator.isAscending);
      assert.false(sort.indicator.isDescending);

      // desc sort
      this.set('columnMeta.isSortedAsc', false);
      assert.false(sort.indicator.isAscending);
      assert.true(sort.indicator.isDescending);
    });

    test('it displays the sort index when using multiple sorts', async function (this: TableTestContext, assert) {
      this.set('columnMeta', {
        isSorted: true,
        isMultiSorted: true,
        sortIndex: 2,
      });

      const ctx = this;
      await render(<template><EmberThSortIndicator @columnMeta={{ctx.columnMeta}} /></template>);

      assert.strictEqual(sort.indicator.text, '2');

      // desc sort
      this.set('columnMeta.isMultiSorted', false);
      assert.strictEqual(sort.indicator.text, '');
    });

    test('the sort option supports accessibility', async function (this: TableTestContext, assert) {
      this.set('columnMeta', {
        isSortable: true,
      });

      const ctx = this;
      await render(<template><EmberThSortIndicator @columnMeta={{ctx.columnMeta}} /></template>);

      assert.true(sort.toggle.isPresent);
      assert.strictEqual(sort.toggle.text, 'Toggle Sort');
    });
  });
});
