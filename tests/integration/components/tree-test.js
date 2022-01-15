import { module, test } from 'qunit';
import { componentModule } from '../../helpers/module';
import hbs from 'htmlbars-inline-precompile';
import { find } from '@ember/test-helpers';

import TablePage from 'ember-table/test-support/pages/ember-table';

import { generateTable, generateColumns, generateRows } from '../../helpers/generate-table';

import { settled } from '@ember/test-helpers';

let table = new TablePage();

module('Integration | Tree', () => {
  componentModule('basic', function() {
    test('trees render correctly', async function(assert) {
      await generateTable(this, { rowCount: 2, rowDepth: 2 });

      assert.equal(table.rows.length, 6, 'renders all rows');

      // regenerate all the rows
      let newRows = generateRows(3, 2);
      this.set('rows', newRows);

      await settled();
      assert.equal(table.rows.length, 12, 'renders new tree');
    });

    test('trees can be disabled', async function(assert) {
      await generateTable(this, { rowCount: 2, rowDepth: 2, enableTree: false });

      assert.equal(table.getCell(0, 0).text, '0A', 'correct cell rendered');
      assert.equal(table.getCell(1, 0).text, '1A', 'correct cell rendered');

      assert.equal(table.rows.length, 2, 'renders root rows only');
      assert.ok(!table.rows.objectAt(0).collapse.isPresent, 'collapse toggle is not present');

      // can be reenabled
      this.set('enableTree', true);
      await settled();

      assert.equal(table.getCell(0, 0).text, '0A', 'correct cell rendered');
      assert.equal(table.getCell(1, 0).text, '00A', 'correct cell rendered');

      assert.equal(table.rows.length, 6, 'renders all rows');
      assert.ok(table.rows.objectAt(0).collapse.isPresent, 'collapse toggle is back');
    });

    test('trees autoresize when scrollbar appears', async function(assert) {
      this.set('widthConstraint', 'eq-container');

      await generateTable(this, { rowCount: 1, rowDepth: 1 });

      let table = find('[data-test-ember-table]');

      let initialScrollWidth = table.scrollWidth;
      assert.equal(initialScrollWidth, table.clientWidth);

      let newRows = generateRows(999, 1);
      this.set('rows', newRows);

      await settled();

      assert.equal(table.scrollWidth, table.clientWidth);

      // Borders aren't present in tests
      let scrollbarWidth = table.offsetWidth - table.clientWidth;

      assert.equal(table.scrollWidth, initialScrollWidth - scrollbarWidth);

      newRows = generateRows(1, 1);
      this.set('rows', newRows);

      await settled();

      assert.equal(table.scrollWidth, table.clientWidth);
    });

    test('trees can be collapsed', async function(assert) {
      await generateTable(this, { rowCount: 2, rowDepth: 2 });

      assert.equal(table.rows.length, 6, 'renders all rows');
      assert.equal(table.body.rowCount, 6, 'total number of rows');
      assert.equal(table.getCell(0, 0).text, '0A', 'correct cell rendered');
      assert.equal(table.getCell(1, 0).text, '00A', 'correct cell rendered');

      // toggle a row
      await table.rows.objectAt(0).toggleCollapse();
      assert.equal(table.rows.length, 4, 'rows were removed');
      assert.equal(table.body.rowCount, 4, 'total number of rows removed');
      assert.equal(table.getCell(0, 0).text, '0A', 'correct cell rendered');
      assert.equal(table.getCell(1, 0).text, '1A', 'correct cell rendered');

      // uncollapse
      await table.rows.objectAt(0).toggleCollapse();
      assert.equal(table.rows.length, 6, 'rows were removed');
      assert.equal(table.body.rowCount, 6, 'total number of rows removed');
      assert.equal(table.getCell(0, 0).text, '0A', 'correct cell rendered');
      assert.equal(table.getCell(1, 0).text, '00A', 'correct cell rendered');
    });

    test('trees collapsing can be disabled', async function(assert) {
      await generateTable(this, { rowCount: 2, rowDepth: 2, enableCollapse: false });

      assert.equal(table.rows.length, 6, 'renders all rows');
      assert.equal(table.getCell(0, 0).text, '0A', 'correct cell rendered');
      assert.equal(table.getCell(1, 0).text, '00A', 'correct cell rendered');

      assert.ok(!table.rows.objectAt(0).collapse.isPresent, 'collapse toggle is not present');

      // can be reenabled
      this.set('enableCollapse', true);
      await settled();

      assert.ok(table.rows.objectAt(0).collapse.isPresent, 'collapse toggle is back');
    });
  });

  componentModule('row counting', function() {
    test('rowsCount excludes collapsed rows', async function(assert) {
      let columnCount = 1;
      let rowCount = 1;
      let rowDepth = 2;

      this.set('columns', generateColumns(columnCount));
      this.set('rows', generateRows(rowCount, rowDepth));

      this.render(hbs`
        {{#ember-table as |t|}}
          {{ember-thead api=t columns=columns}}
          {{#ember-tbody api=t rows=rows as |b|}}
            {{#ember-tr api=b as |r|}}
              {{#ember-td api=r as |c|}}
                {{b.rowsCount}}
              {{/ember-td}}
            {{/ember-tr}}
          {{/ember-tbody}}
        {{/ember-table}}
      `);

      await settled();

      assert.equal(table.getCell(0, 0).text, '2', 'rowsCount is correct before collapse');

      await table.rows.objectAt(0).toggleCollapse();
      assert.equal(table.getCell(0, 0).text, '1', 'rowsCount is correct after collapse');
    });
  });
});
