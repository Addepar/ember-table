import { module, test } from 'ember-qunit';
import { componentModule } from '../../helpers/module';

import TablePage from 'ember-table/test-support/pages/ember-table';

import { generateTable, generateRows } from '../../helpers/generate-table';
import wait from 'ember-test-helpers/wait';

let table = new TablePage();

module('Integration | Tree', () => {
  componentModule('basic', function() {
    test('trees render correctly', async function(assert) {
      await generateTable(this, { rowCount: 2, rowDepth: 2 });

      assert.equal(table.rows.length, 6, 'renders all rows');

      // regenerate all the rows
      let newRows = generateRows(3, 2);
      this.set('rows', newRows);

      await wait();
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
      await wait();

      assert.equal(table.getCell(0, 0).text, '0A', 'correct cell rendered');
      assert.equal(table.getCell(1, 0).text, '00A', 'correct cell rendered');

      assert.equal(table.rows.length, 6, 'renders all rows');
      assert.ok(table.rows.objectAt(0).collapse.isPresent, 'collapse toggle is back');
    });

    test('trees can be collapsed', async function(assert) {
      await generateTable(this, { rowCount: 2, rowDepth: 2 });

      assert.equal(table.rows.length, 6, 'renders all rows');
      assert.equal(table.getCell(0, 0).text, '0A', 'correct cell rendered');
      assert.equal(table.getCell(1, 0).text, '00A', 'correct cell rendered');

      // toggle a row
      await table.rows.objectAt(0).toggleCollapse();
      assert.equal(table.rows.length, 4, 'rows were removed');
      assert.equal(table.getCell(0, 0).text, '0A', 'correct cell rendered');
      assert.equal(table.getCell(1, 0).text, '1A', 'correct cell rendered');

      // uncollapse
      await table.rows.objectAt(0).toggleCollapse();
      assert.equal(table.rows.length, 6, 'rows were removed');
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
      await wait();

      assert.ok(table.rows.objectAt(0).collapse.isPresent, 'collapse toggle is back');
    });
  });
});
