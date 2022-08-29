import hbs from 'htmlbars-inline-precompile';
import { render, settled } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { set } from '@ember/object';
import { scrollTo } from '@ember/test-helpers';

import { generateTableValues } from '../../helpers/generate-table';
import { componentModule } from '../../helpers/module';

import TablePage from 'ember-table/test-support/pages/ember-table';

let table = new TablePage('[data-test-main-table]');
let otherTable = new TablePage('[data-test-other-table]');

module('Integration | meta', function() {
  componentModule('basic', function() {
    test('meta caches work', async function(assert) {
      this.set('onClick', ({ cellMeta, rowMeta, columnMeta }) => {
        set(cellMeta, 'wasClicked', true);
        set(columnMeta, 'wasClicked', true);
        set(rowMeta, 'wasClicked', true);
      });

      generateTableValues(this, { rowCount: 100, footerRowCount: 1 });

      await render(hbs`
        <div style="height: 500px;">
          <EmberTable data-test-main-table as |t| >
            {{#ember-thead api=t columns=this.columns as |h|}}
              {{#ember-tr api=h as |r|}}
                {{#ember-th api=r as |column columnMeta|}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  clicked
                {{/ember-th}}
              {{/ember-tr}}
            {{/ember-thead}}
            {{#ember-tbody api=t rows=this.rows as |b|}}
              {{#ember-tr api=b as |r|}}
                {{#ember-td
                  api=r
                  onClick=(action this.onClick)
                  as |value column row cellMeta columnMeta rowMeta|
                }}
                  {{#if cellMeta.wasClicked}}cell{{/if}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  {{#if rowMeta.wasClicked}}row{{/if}}
                  clicked
                {{/ember-td}}
              {{/ember-tr}}
            {{/ember-tbody}}

            {{#ember-tfoot api=t rows=this.footerRows as |f|}}
              {{#ember-tr api=f as |r|}}
                {{#ember-td api=r as |value column row cellMeta columnMeta rowMeta|}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  clicked
                {{/ember-td}}
              {{/ember-tr}}
            {{/ember-tfoot}}
          </EmberTable>
        </div>
      `);

      await settled();
      await table.getCell(0, 0).click();

      assert.ok(table.getCell(0, 0).text.includes('cell'), 'meta property set correctly');

      table.rows.objectAt(0).cells.forEach(cell => {
        assert.ok(cell.text.includes('row'), 'row meta correct');
      });

      table.rows.forEach(row => {
        assert.ok(row.cells.objectAt(0).text.includes('column'), 'column meta correct');
      });

      assert.ok(table.headers.objectAt(0).text.match(/column/i), 'header meta correct');
      assert.ok(table.footers.objectAt(0).text.includes('column'), 'footer meta correct');

      await scrollTo('[data-test-ember-table-overflow]', 0, 100000);

      assert.notOk(table.getCell(0, 0).text.includes('cell'), 'meta updated on scroll');

      table.rows.objectAt(0).cells.forEach(cell => {
        assert.notOk(cell.text.includes('row'), 'row meta correct');
      });

      table.rows.forEach(row => {
        assert.ok(row.cells.objectAt(0).text.includes('column'), 'column meta correct');
      });

      assert.ok(table.headers.objectAt(0).text.match(/column/i), 'header meta correct');
      assert.ok(table.footers.objectAt(0).text.includes('column'), 'footer meta correct');

      await scrollTo('[data-test-ember-table-overflow]', 0, 0);

      assert.ok(table.getCell(0, 0).text.includes('cell'), 'meta updated when scrolling back');

      table.rows.objectAt(0).cells.forEach(cell => {
        assert.ok(cell.text.includes('row'), 'row meta correct');
      });

      table.rows.forEach(row => {
        assert.ok(row.cells.objectAt(0).text.includes('column'), 'column meta correct');
      });

      assert.ok(table.headers.objectAt(0).text.match(/column/i), 'header meta correct');
      assert.ok(table.footers.objectAt(0).text.includes('column'), 'footer meta correct');
    });

    test('meta caches are unique per table instance', async function(assert) {
      this.set('onClick', ({ cellMeta, rowMeta, columnMeta }) => {
        set(cellMeta, 'wasClicked', true);
        set(columnMeta, 'wasClicked', true);
        set(rowMeta, 'wasClicked', true);
      });

      generateTableValues(this, { rowCount: 100, footerRowCount: 1 });

      await render(hbs`
        <div style="height: 500px;">
          <EmberTable data-test-main-table as |t| >
            {{#ember-thead api=t columns=this.columns as |h|}}
              {{#ember-tr api=h as |r|}}
                {{#ember-th api=r as |column columnMeta|}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  clicked
                {{/ember-th}}
              {{/ember-tr}}
            {{/ember-thead}}

            {{#ember-tbody api=t rows=this.rows as |b|}}
              {{#ember-tr api=b as |r|}}
                {{#ember-td
                  api=r
                  onClick=(action this.onClick)

                  as |value column row cellMeta columnMeta rowMeta|
                }}
                  {{#if cellMeta.wasClicked}}cell{{/if}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  {{#if rowMeta.wasClicked}}row{{/if}}
                  clicked
                {{/ember-td}}
              {{/ember-tr}}
            {{/ember-tbody}}

            {{#ember-tfoot api=t rows=this.footerRows as |f|}}
              {{#ember-tr api=f as |r|}}
                {{#ember-td api=r as |value column row cellMeta columnMeta rowMeta|}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  clicked
                {{/ember-td}}
              {{/ember-tr}}
            {{/ember-tfoot}}
          </EmberTable>
        </div>
        <div style="height: 500px;">
          <EmberTable data-test-other-table as |t| >
            {{#ember-thead api=t columns=this.columns as |h|}}
              {{#ember-tr api=h as |r|}}
                {{#ember-th api=r as |column columnMeta|}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  clicked
                {{/ember-th}}
              {{/ember-tr}}
            {{/ember-thead}}

            {{#ember-tbody api=t rows=this.rows as |b|}}
              {{#ember-tr api=b as |r|}}
                {{#ember-td
                  api=r
                  onClick=(action this.onClick)

                  as |value column row cellMeta columnMeta rowMeta|
                }}
                  {{#if cellMeta.wasClicked}}cell{{/if}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  {{#if rowMeta.wasClicked}}row{{/if}}
                  clicked
                {{/ember-td}}
              {{/ember-tr}}
            {{/ember-tbody}}

            {{#ember-tfoot api=t rows=this.footerRows as |f|}}
              {{#ember-tr api=f as |r|}}
                {{#ember-td api=r as |value column row cellMeta columnMeta rowMeta|}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  clicked
                {{/ember-td}}
              {{/ember-tr}}
            {{/ember-tfoot}}
          </EmberTable>
        </div>
      `);

      await settled();
      await table.getCell(0, 0).click();

      // ensure we trigger property updates by scrolling around a bit
      let scrollSelector = '[data-test-other-table] [data-test-ember-table-overflow]';
      await scrollTo(scrollSelector, 0, 10000);
      await scrollTo(scrollSelector, 0, 1000);
      await scrollTo(scrollSelector, 0, 100);
      await scrollTo(scrollSelector, 0, 0);

      // Main table was affected
      assert.ok(table.getCell(0, 0).text.includes('cell'), 'meta property set correctly');

      table.rows.objectAt(0).cells.forEach(cell => {
        assert.ok(cell.text.includes('row'), 'row meta correct');
      });

      table.rows.forEach(row => {
        assert.ok(row.cells.objectAt(0).text.includes('column'), 'column meta correct');
      });

      assert.ok(table.headers.objectAt(0).text.match(/column/i), 'header meta correct');
      assert.ok(table.footers.objectAt(0).text.includes('column'), 'footer meta correct');

      // Other table was not affected
      assert.notOk(otherTable.getCell(0, 0).text.includes('cell'), 'meta property set correctly');

      otherTable.rows.objectAt(0).cells.forEach(cell => {
        assert.notOk(cell.text.includes('row'), 'row meta correct');
      });

      otherTable.rows.forEach(row => {
        assert.notOk(row.cells.objectAt(0).text.includes('column'), 'column meta correct');
      });

      assert.notOk(otherTable.headers.objectAt(0).text.includes('column'), 'header meta correct');
      assert.notOk(otherTable.footers.objectAt(0).text.includes('column'), 'footer meta correct');
    });

    test('header rowMeta includes index', async function(assert) {
      let columnCount = 1;
      let subcolumnCount = 2;

      generateTableValues(this, { columnCount, columnOptions: { subcolumnCount } });

      await render(hbs`
        <EmberTable data-test-main-table as |t| >
          {{#ember-thead api=t columns=this.columns as |h|}}
            {{#ember-tr api=h as |r|}}
              {{#ember-th api=r as |column columnMeta rowMeta|}}
                {{rowMeta.index}}
              {{/ember-th}}
            {{/ember-tr}}
          {{/ember-thead}}
          {{ember-tbody api=t rows=this.rows}}
        </EmberTable>
      `);

      await settled();

      // single cell in first header row
      assert.ok(table.headers.objectAt(0).text.includes('0'));

      // first cell from sub-header row
      assert.ok(table.headers.objectAt(1).text.includes('1'));
    });
  });
});
