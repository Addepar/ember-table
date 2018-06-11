import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import { module, test } from 'ember-qunit';
import { set } from '@ember/object';
import { scrollTo } from 'ember-native-dom-helpers';

import { generateTableValues } from '../../helpers/generate-table';
import { componentModule } from '../../helpers/module';

import TablePage from 'ember-table/test-support/pages/ember-table';

let table = TablePage.scope('[data-test-ember-table]').create();
let otherTable = TablePage.scope('[data-test-other-table]').create();

module('Integration | meta', function() {
  componentModule('basic', function() {
    test('meta caches work', async function(assert) {
      this.on('onClick', ({ cellMeta, rowMeta, columnMeta }) => {
        set(cellMeta, 'wasClicked', true);
        set(columnMeta, 'wasClicked', true);
        set(rowMeta, 'wasClicked', true);
      });

      generateTableValues(this, { rowCount: 100, footerRowCount: 1 });

      this.render(hbs`
        <div style="height: 500px;">
          {{#ember-table data-test-ember-table=true as |t|}}
            {{#ember-thead api=t columns=columns as |h|}}
              {{#ember-tr api=h as |r|}}
                {{#ember-th api=r as |column columnMeta|}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  clicked
                {{/ember-th}}
              {{/ember-tr}}
            {{/ember-thead}}

            {{#ember-tbody api=t rows=rows as |b|}}
              {{#ember-tr api=b as |r|}}
                {{#ember-td
                  api=r
                  onClick="onClick"

                  as |value column row cellMeta columnMeta rowMeta|
                }}
                  {{#if cellMeta.wasClicked}}cell{{/if}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  {{#if rowMeta.wasClicked}}row{{/if}}
                  clicked
                {{/ember-td}}
              {{/ember-tr}}
            {{/ember-tbody}}

            {{#ember-tfoot api=t rows=footerRows as |f|}}
              {{#ember-tr api=f as |r|}}
                {{#ember-td api=r as |value column row cellMeta columnMeta rowMeta|}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  clicked
                {{/ember-td}}
              {{/ember-tr}}
            {{/ember-tfoot}}
          {{/ember-table}}
        </div>
      `);

      await wait();
      await table.getCell(0, 0).click();

      assert.ok(table.getCell(0, 0).text.includes('cell'), 'meta property set correctly');

      table.rows.eq(0).cells.forEach(cell => {
        assert.ok(cell.text.includes('row'), 'row meta correct');
      });

      table.rows.forEach(row => {
        assert.ok(row.cells.eq(0).text.includes('column'), 'column meta correct');
      });

      assert.ok(table.headers.eq(0).text.match(/column/i), 'header meta correct');
      assert.ok(table.footers.eq(0).text.includes('column'), 'footer meta correct');

      await scrollTo('[data-test-ember-table]', 0, 100000);

      assert.notOk(table.getCell(0, 0).text.includes('cell'), 'meta updated on scroll');

      table.rows.eq(0).cells.forEach(cell => {
        assert.notOk(cell.text.includes('row'), 'row meta correct');
      });

      table.rows.forEach(row => {
        assert.ok(row.cells.eq(0).text.includes('column'), 'column meta correct');
      });

      assert.ok(table.headers.eq(0).text.match(/column/i), 'header meta correct');
      assert.ok(table.footers.eq(0).text.includes('column'), 'footer meta correct');

      await scrollTo('[data-test-ember-table]', 0, 0);

      assert.ok(table.getCell(0, 0).text.includes('cell'), 'meta updated when scrolling back');

      table.rows.eq(0).cells.forEach(cell => {
        assert.ok(cell.text.includes('row'), 'row meta correct');
      });

      table.rows.forEach(row => {
        assert.ok(row.cells.eq(0).text.includes('column'), 'column meta correct');
      });

      assert.ok(table.headers.eq(0).text.match(/column/i), 'header meta correct');
      assert.ok(table.footers.eq(0).text.includes('column'), 'footer meta correct');
    });

    test('meta caches are unique per table instance', async function(assert) {
      this.on('onClick', ({ cellMeta, rowMeta, columnMeta }) => {
        set(cellMeta, 'wasClicked', true);
        set(columnMeta, 'wasClicked', true);
        set(rowMeta, 'wasClicked', true);
      });

      generateTableValues(this, { rowCount: 100, footerRowCount: 1 });

      this.render(hbs`
        <div style="height: 500px;">
          {{#ember-table data-test-ember-table=true as |t|}}
            {{#ember-thead api=t columns=columns as |h|}}
              {{#ember-tr api=h as |r|}}
                {{#ember-th api=r as |column columnMeta|}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  clicked
                {{/ember-th}}
              {{/ember-tr}}
            {{/ember-thead}}

            {{#ember-tbody api=t rows=rows as |b|}}
              {{#ember-tr api=b as |r|}}
                {{#ember-td
                  api=r
                  onClick="onClick"

                  as |value column row cellMeta columnMeta rowMeta|
                }}
                  {{#if cellMeta.wasClicked}}cell{{/if}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  {{#if rowMeta.wasClicked}}row{{/if}}
                  clicked
                {{/ember-td}}
              {{/ember-tr}}
            {{/ember-tbody}}

            {{#ember-tfoot api=t rows=footerRows as |f|}}
              {{#ember-tr api=f as |r|}}
                {{#ember-td api=r as |value column row cellMeta columnMeta rowMeta|}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  clicked
                {{/ember-td}}
              {{/ember-tr}}
            {{/ember-tfoot}}
          {{/ember-table}}
        </div>

        <div style="height: 500px;">
          {{#ember-table data-test-other-table=true as |t|}}
            {{#ember-thead api=t columns=columns as |h|}}
              {{#ember-tr api=h as |r|}}
                {{#ember-th api=r as |column columnMeta|}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  clicked
                {{/ember-th}}
              {{/ember-tr}}
            {{/ember-thead}}

            {{#ember-tbody api=t rows=rows as |b|}}
              {{#ember-tr api=b as |r|}}
                {{#ember-td
                  api=r
                  onClick="onClick"

                  as |value column row cellMeta columnMeta rowMeta|
                }}
                  {{#if cellMeta.wasClicked}}cell{{/if}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  {{#if rowMeta.wasClicked}}row{{/if}}
                  clicked
                {{/ember-td}}
              {{/ember-tr}}
            {{/ember-tbody}}

            {{#ember-tfoot api=t rows=footerRows as |f|}}
              {{#ember-tr api=f as |r|}}
                {{#ember-td api=r as |value column row cellMeta columnMeta rowMeta|}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  clicked
                {{/ember-td}}
              {{/ember-tr}}
            {{/ember-tfoot}}
          {{/ember-table}}
        </div>
      `);

      await wait();
      await table.getCell(0, 0).click();

      // ensure we trigger property updates by scrolling around a bit
      await scrollTo('[data-test-other-table]', 0, 10000);
      await scrollTo('[data-test-other-table]', 0, 1000);
      await scrollTo('[data-test-other-table]', 0, 100);
      await scrollTo('[data-test-other-table]', 0, 0);

      // Main table was affected
      assert.ok(table.getCell(0, 0).text.includes('cell'), 'meta property set correctly');

      table.rows.eq(0).cells.forEach(cell => {
        assert.ok(cell.text.includes('row'), 'row meta correct');
      });

      table.rows.forEach(row => {
        assert.ok(row.cells.eq(0).text.includes('column'), 'column meta correct');
      });

      assert.ok(table.headers.eq(0).text.match(/column/i), 'header meta correct');
      assert.ok(table.footers.eq(0).text.includes('column'), 'footer meta correct');

      // Other table was not affected
      assert.notOk(otherTable.getCell(0, 0).text.includes('cell'), 'meta property set correctly');

      otherTable.rows.eq(0).cells.forEach(cell => {
        assert.notOk(cell.text.includes('row'), 'row meta correct');
      });

      otherTable.rows.forEach(row => {
        assert.notOk(row.cells.eq(0).text.includes('column'), 'column meta correct');
      });

      assert.notOk(otherTable.headers.eq(0).text.includes('column'), 'header meta correct');
      assert.notOk(otherTable.footers.eq(0).text.includes('column'), 'footer meta correct');
    });
  });
});
