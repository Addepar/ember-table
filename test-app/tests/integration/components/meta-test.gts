import { render, settled } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { set } from '@ember/object';
import { scrollTo } from '@ember/test-helpers';

import { generateTableValues } from '../../helpers/generate-table';
import { componentModule } from '../../helpers/module';

import TablePage from 'ember-table/test-support/pages/ember-table';
import { EmberTable, EmberTbody, EmberTd, EmberTfoot, EmberTh, EmberThead, EmberTr } from 'ember-table';
import type { PageObject, TableTestContext } from '../../helpers/table-test-context';
import type { EmberTableColumn, EmberTableRow } from 'ember-table';
import type { EmberTdActionValues } from 'ember-table/components/ember-td/component';

let table = new TablePage('[data-test-main-table]');
let otherTable = new TablePage('[data-test-other-table]');

module('Integration | meta', function() {
  componentModule('basic', function() {
    test('meta caches work', async function (this: TableTestContext, assert) {
      this.set('onClick', ({ cellMeta, rowMeta, columnMeta }: EmberTdActionValues<EmberTableRow, EmberTableColumn>) => {
        set(cellMeta as object, 'wasClicked', true);
        set(columnMeta, 'wasClicked', true);
        set(rowMeta, 'wasClicked', true);
      });

      generateTableValues(this, { rowCount: 100, footerRowCount: 1 });

      const ctx = this;
      await render(<template>
        <div style="height: 500px;">
          <EmberTable data-test-main-table as |t| >
            <EmberThead @api={{t}} @columns={{ctx.columns}} as |h|>
              <EmberTr @api={{h}} as |r|>
                <EmberTh @api={{r}} as |_column columnMeta|>
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  clicked
                </EmberTh>
              </EmberTr>
            </EmberThead>
            <EmberTbody @api={{t}} @rows={{ctx.rows}} as |b|>
              <EmberTr @api={{b}} as |r|>
                <EmberTd @api={{r}} @onClick={{ctx.onClick}} as |_value _column _row cellMeta columnMeta rowMeta|>
                  {{#if cellMeta.wasClicked}}cell{{/if}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  {{#if rowMeta.wasClicked}}row{{/if}}
                  clicked
                </EmberTd>
              </EmberTr>
            </EmberTbody>

            <EmberTfoot @api={{t}} @rows={{ctx.footerRows}} as |f|>
              <EmberTr @api={{f}} as |r|>
                <EmberTd @api={{r}} as |_value _column _row _cellMeta columnMeta _rowMeta|>
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  clicked
                </EmberTd>
              </EmberTr>
            </EmberTfoot>
          </EmberTable>
        </div>
      </template>);

      // eslint-disable-next-line ember/no-settled-after-test-helper
      await settled();
      await table.getCell(0, 0).click();

      assert.true(table.getCell(0, 0).text.includes('cell'), 'meta property set correctly');

      table.rows.objectAt(0).cells.forEach((cell: PageObject) => {
        assert.true(cell.text.includes('row'), 'row meta correct');
      });

      table.rows.forEach((row: PageObject) => {
        assert.true(row.cells.objectAt(0).text.includes('column'), 'column meta correct');
      });

      assert.ok(table.headers.objectAt(0).text.match(/column/i), 'header meta correct');
      assert.true(table.footers.objectAt(0).text.includes('column'), 'footer meta correct');

      await scrollTo('[data-test-ember-table-overflow]', 0, 100000);

      assert.false(table.getCell(0, 0).text.includes('cell'), 'meta updated on scroll');

      table.rows.objectAt(0).cells.forEach((cell: PageObject) => {
        assert.false(cell.text.includes('row'), 'row meta correct');
      });

      table.rows.forEach((row: PageObject) => {
        assert.true(row.cells.objectAt(0).text.includes('column'), 'column meta correct');
      });

      assert.ok(table.headers.objectAt(0).text.match(/column/i), 'header meta correct');
      assert.true(table.footers.objectAt(0).text.includes('column'), 'footer meta correct');

      await scrollTo('[data-test-ember-table-overflow]', 0, 0);

      assert.true(table.getCell(0, 0).text.includes('cell'), 'meta updated when scrolling back');

      table.rows.objectAt(0).cells.forEach((cell: PageObject) => {
        assert.true(cell.text.includes('row'), 'row meta correct');
      });

      table.rows.forEach((row: PageObject) => {
        assert.true(row.cells.objectAt(0).text.includes('column'), 'column meta correct');
      });

      assert.ok(table.headers.objectAt(0).text.match(/column/i), 'header meta correct');
      assert.true(table.footers.objectAt(0).text.includes('column'), 'footer meta correct');
    });

    test('meta caches are unique per table instance', async function (this: TableTestContext, assert) {
      this.set('onClick', ({ cellMeta, rowMeta, columnMeta }: EmberTdActionValues<EmberTableRow, EmberTableColumn>) => {
        set(cellMeta as object, 'wasClicked', true);
        set(columnMeta, 'wasClicked', true);
        set(rowMeta, 'wasClicked', true);
      });

      generateTableValues(this, { rowCount: 100, footerRowCount: 1 });

      const ctx = this;
      await render(<template>
        <div style="height: 500px;">
          <EmberTable data-test-main-table as |t| >
            <EmberThead @api={{t}} @columns={{ctx.columns}} as |h|>
              <EmberTr @api={{h}} as |r|>
                <EmberTh @api={{r}} as |_column columnMeta|>
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  clicked
                </EmberTh>
              </EmberTr>
            </EmberThead>

            <EmberTbody @api={{t}} @rows={{ctx.rows}} as |b|>
              <EmberTr @api={{b}} as |r|>
                <EmberTd @api={{r}} @onClick={{ctx.onClick}} as |_value _column _row cellMeta columnMeta rowMeta|>
                  {{#if cellMeta.wasClicked}}cell{{/if}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  {{#if rowMeta.wasClicked}}row{{/if}}
                  clicked
                </EmberTd>
              </EmberTr>
            </EmberTbody>

            <EmberTfoot @api={{t}} @rows={{ctx.footerRows}} as |f|>
              <EmberTr @api={{f}} as |r|>
                <EmberTd @api={{r}} as |_value _column _row _cellMeta columnMeta _rowMeta|>
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  clicked
                </EmberTd>
              </EmberTr>
            </EmberTfoot>
          </EmberTable>
        </div>
        <div style="height: 500px;">
          <EmberTable data-test-other-table as |t| >
            <EmberThead @api={{t}} @columns={{ctx.columns}} as |h|>
              <EmberTr @api={{h}} as |r|>
                <EmberTh @api={{r}} as |_column columnMeta|>
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  clicked
                </EmberTh>
              </EmberTr>
            </EmberThead>

            <EmberTbody @api={{t}} @rows={{ctx.rows}} as |b|>
              <EmberTr @api={{b}} as |r|>
                <EmberTd @api={{r}} @onClick={{ctx.onClick}} as |_value _column _row cellMeta columnMeta rowMeta|>
                  {{#if cellMeta.wasClicked}}cell{{/if}}
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  {{#if rowMeta.wasClicked}}row{{/if}}
                  clicked
                </EmberTd>
              </EmberTr>
            </EmberTbody>

            <EmberTfoot @api={{t}} @rows={{ctx.footerRows}} as |f|>
              <EmberTr @api={{f}} as |r|>
                <EmberTd @api={{r}} as |_value _column _row _cellMeta columnMeta _rowMeta|>
                  {{#if columnMeta.wasClicked}}column{{/if}}
                  clicked
                </EmberTd>
              </EmberTr>
            </EmberTfoot>
          </EmberTable>
        </div>
      </template>);

      // eslint-disable-next-line ember/no-settled-after-test-helper
      await settled();
      await table.getCell(0, 0).click();

      // ensure we trigger property updates by scrolling around a bit
      let scrollSelector = '[data-test-other-table] [data-test-ember-table-overflow]';
      await scrollTo(scrollSelector, 0, 10000);
      await scrollTo(scrollSelector, 0, 1000);
      await scrollTo(scrollSelector, 0, 100);
      await scrollTo(scrollSelector, 0, 0);

      // Main table was affected
      assert.true(table.getCell(0, 0).text.includes('cell'), 'meta property set correctly');

      table.rows.objectAt(0).cells.forEach((cell: PageObject) => {
        assert.true(cell.text.includes('row'), 'row meta correct');
      });

      table.rows.forEach((row: PageObject) => {
        assert.true(row.cells.objectAt(0).text.includes('column'), 'column meta correct');
      });

      assert.ok(table.headers.objectAt(0).text.match(/column/i), 'header meta correct');
      assert.true(table.footers.objectAt(0).text.includes('column'), 'footer meta correct');

      // Other table was not affected
      assert.false(otherTable.getCell(0, 0).text.includes('cell'), 'meta property set correctly');

      otherTable.rows.objectAt(0).cells.forEach((cell: PageObject) => {
        assert.false(cell.text.includes('row'), 'row meta correct');
      });

      otherTable.rows.forEach((row: PageObject) => {
        assert.false(row.cells.objectAt(0).text.includes('column'), 'column meta correct');
      });

      assert.notOk(otherTable.headers.objectAt(0).text.includes('column'), 'header meta correct');
      assert.false(otherTable.footers.objectAt(0).text.includes('column'), 'footer meta correct');
    });

    test('header rowMeta includes index', async function (this: TableTestContext, assert) {
      let columnCount = 1;
      let subcolumnCount = 2;

      generateTableValues(this, { columnCount, columnOptions: { subcolumnCount } });

      const ctx = this;
      await render(<template>
        <EmberTable data-test-main-table as |t| >
          <EmberThead @api={{t}} @columns={{ctx.columns}} as |h|>
            <EmberTr @api={{h}} as |r|>
              <EmberTh @api={{r}} as |_column _columnMeta rowMeta|>
                {{rowMeta.index}}
              </EmberTh>
            </EmberTr>
          </EmberThead>
          <EmberTbody @api={{t}} @rows={{ctx.rows}} />
        </EmberTable>
      </template>);

      // eslint-disable-next-line ember/no-settled-after-test-helper
      await settled();

      // single cell in first header row
      assert.true(table.headers.objectAt(0).text.includes('0'));

      // first cell from sub-header row
      assert.true(table.headers.objectAt(1).text.includes('1'));
    });
  });
});
