import { module, test } from 'qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { SortPage } from 'ember-table/test-support/pages/-private/ember-table-header';

import { componentModule } from '../../../helpers/module';

let sort = new SortPage();

module('Integration | Component | ember-th/sort-indicator', function() {
  componentModule('basic', function() {
    test('it renders', async function(assert) {
      this.set('columnMeta', {
        isSorted: true,
      });

      await render(hbs`<EmberTh::SortIndicator @columnMeta={{this.columnMeta}} />`);

      assert.ok(sort.indicator.isPresent);

      // Template block usage:
      await render(hbs`
        <EmberTh::SortIndicator @columnMeta={{this.columnMeta}}>
          template block text
        </EmberTh::SortIndicator>
      `);

      assert.equal(sort.indicator.text, 'template block text');
    });

    test('it is hidden when not sorted', async function(assert) {
      this.set('columnMeta', {
        isSorted: false,
      });

      await render(hbs`<EmberTh::SortIndicator @columnMeta={{this.columnMeta}} />`);

      assert.notOk(sort.indicator.isPresent);

      // Template block usage:
      await render(hbs`
        <EmberTh::SortIndicator @columnMeta={{this.columnMeta}}>
          template block text
        </EmberTh::SortIndicator>
      `);

      assert.notOk(sort.indicator.isPresent);
    });

    test('it displays the sort order', async function(assert) {
      this.set('columnMeta', {
        isSorted: true,
        isSortedAsc: true,
      });

      await render(hbs`<EmberTh::SortIndicator @columnMeta={{this.columnMeta}} />`);
      // asc sort
      assert.ok(sort.indicator.isAscending);
      assert.notOk(sort.indicator.isDescending);

      // desc sort
      this.set('columnMeta.isSortedAsc', false);
      assert.notOk(sort.indicator.isAscending);
      assert.ok(sort.indicator.isDescending);
    });

    test('it displays the sort index when using multiple sorts', async function(assert) {
      this.set('columnMeta', {
        isSorted: true,
        isMultiSorted: true,
        sortIndex: 2,
      });

      await render(hbs`<EmberTh::SortIndicator @columnMeta={{this.columnMeta}} />`);

      assert.equal(sort.indicator.text, '2');

      // desc sort
      this.set('columnMeta.isMultiSorted', false);
      assert.equal(sort.indicator.text, '');
    });

    test('the sort option supports accessibility', async function(assert) {
      this.set('columnMeta', {
        isSortable: true,
      });

      await render(hbs`<EmberTh::SortIndicator @columnMeta={{this.columnMeta}} />`);

      assert.ok(sort.toggle.isPresent);
      assert.equal(sort.toggle.text, 'Toggle Sort');
    });
  });
});
