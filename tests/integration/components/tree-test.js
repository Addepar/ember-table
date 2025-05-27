import { module, test } from 'qunit';
import { componentModule } from '../../helpers/module';
import hbs from 'htmlbars-inline-precompile';

import TablePage from 'ember-table/test-support/pages/ember-table';

import { generateTable, generateColumns, generateRows } from '../../helpers/generate-table';

import { find, render, settled } from '@ember/test-helpers';

let table = new TablePage();

module('Integration | Tree', () => {
  componentModule('basic', function() {
    test('trees render correctly', async function(assert) {
      await generateTable(this, { rowCount: 2, rowDepth: 2 });

      assert.strictEqual(table.rows.length, 6, 'renders all rows');

      // regenerate all the rows
      let newRows = generateRows(3, 2);
      this.set('rows', newRows);

      await settled();
      assert.strictEqual(table.rows.length, 12, 'renders new tree');
    });

    test('trees can be disabled', async function(assert) {
      await generateTable(this, { rowCount: 2, rowDepth: 2, enableTree: false });

      assert.strictEqual(table.getCell(0, 0).text, '0A', 'correct cell rendered');
      assert.strictEqual(table.getCell(1, 0).text, '1A', 'correct cell rendered');

      assert.strictEqual(table.rows.length, 2, 'renders root rows only');
      assert.false(table.rows.objectAt(0).collapse.isPresent, 'collapse toggle is not present');

      // can be reenabled
      this.set('enableTree', true);
      await settled();

      assert.strictEqual(table.getCell(0, 0).text, '0A', 'correct cell rendered');
      assert.strictEqual(table.getCell(1, 0).text, '00A', 'correct cell rendered');

      assert.strictEqual(table.rows.length, 6, 'renders all rows');
      assert.true(table.rows.objectAt(0).collapse.isPresent, 'collapse toggle is back');
    });

    test('trees autoresize when scrollbar appears', async function(assert) {
      this.set('widthConstraint', 'eq-container');

      await generateTable(this, { rowCount: 1, rowDepth: 1 });

      let table = find('[data-test-ember-table]');

      let initialScrollWidth = table.scrollWidth;
      assert.strictEqual(initialScrollWidth, table.clientWidth);

      let newRows = generateRows(999, 1);
      this.set('rows', newRows);

      await settled();

      assert.strictEqual(table.scrollWidth, table.clientWidth);

      // Borders aren't present in tests
      let scrollbarWidth = table.offsetWidth - table.clientWidth;

      assert.strictEqual(table.scrollWidth, initialScrollWidth - scrollbarWidth);

      newRows = generateRows(1, 1);
      this.set('rows', newRows);

      await settled();

      assert.strictEqual(table.scrollWidth, table.clientWidth);
    });

    test('trees can be collapsed', async function(assert) {
      await generateTable(this, { rowCount: 2, rowDepth: 2 });

      assert.strictEqual(table.rows.length, 6, 'renders all rows');
      assert.strictEqual(table.body.rowCount, 6, 'total number of rows');
      assert.strictEqual(table.getCell(0, 0).text, '0A', 'correct cell rendered');
      assert.strictEqual(table.getCell(1, 0).text, '00A', 'correct cell rendered');

      // toggle a row
      await table.rows.objectAt(0).toggleCollapse();
      assert.strictEqual(table.rows.length, 4, 'rows were removed');
      assert.strictEqual(table.body.rowCount, 4, 'total number of rows removed');
      assert.strictEqual(table.getCell(0, 0).text, '0A', 'correct cell rendered');
      assert.strictEqual(table.getCell(1, 0).text, '1A', 'correct cell rendered');

      // uncollapse
      await table.rows.objectAt(0).toggleCollapse();
      assert.strictEqual(table.rows.length, 6, 'rows were removed');
      assert.strictEqual(table.body.rowCount, 6, 'total number of rows removed');
      assert.strictEqual(table.getCell(0, 0).text, '0A', 'correct cell rendered');
      assert.strictEqual(table.getCell(1, 0).text, '00A', 'correct cell rendered');
    });

    test('trees collapsing can be disabled', async function(assert) {
      await generateTable(this, { rowCount: 2, rowDepth: 2, enableCollapse: false });

      assert.strictEqual(table.rows.length, 6, 'renders all rows');
      assert.strictEqual(table.getCell(0, 0).text, '0A', 'correct cell rendered');
      assert.strictEqual(table.getCell(1, 0).text, '00A', 'correct cell rendered');

      assert.false(table.rows.objectAt(0).collapse.isPresent, 'collapse toggle is not present');

      // can be reenabled
      this.set('enableCollapse', true);
      await settled();

      assert.true(table.rows.objectAt(0).collapse.isPresent, 'collapse toggle is back');
    });
  });

  componentModule('row counting', function() {
    test('rowsCount excludes collapsed rows', async function(assert) {
      let columnCount = 1;
      let rowCount = 1;
      let rowDepth = 2;

      this.set('columns', generateColumns(columnCount));
      this.set('rows', generateRows(rowCount, rowDepth));

      await render(hbs`
        <EmberTable as |t|>
          <EmberThead @api={{t}} @columns={{this.columns}} />
          <EmberTbody @api={{t}} @rows={{this.rows}} as |b|>
            <EmberTr @api={{b}} as |r|>
              <EmberTd @api={{r}} as |c|>
                {{b.rowsCount}}
              </EmberTd>
            </EmberTr>
          </EmberTbody>
        </EmberTable>
      `);

      // eslint-disable-next-line ember/no-settled-after-test-helper
      await settled();

      assert.strictEqual(table.getCell(0, 0).text, '2', 'rowsCount is correct before collapse');

      await table.rows.objectAt(0).toggleCollapse();
      assert.strictEqual(table.getCell(0, 0).text, '1', 'rowsCount is correct after collapse');
    });
  });
});
