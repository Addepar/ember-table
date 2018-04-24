import { module, moduleForComponent, test } from 'ember-qunit';

import TablePage from 'ember-table/test-support/pages/ember-table';

import generateTable, { generateRows } from '../../helpers/generate-table';
import wait from 'ember-test-helpers/wait';

let table = TablePage.create();

module('Integration | Tree', () => {
  moduleForComponent('ember-table', 'multiple', { integration: true });

  test('Tree attribute is observed', async function(assert) {
    // render the table
    let rowCount = 10;
    await generateTable(this, { rowCount, useTree: true });
    assert.equal(table.rows.length, rowCount, 'renders all rows');

    // regenerate all the rows
    let newRowCount = rowCount + 2;
    let newRows = generateRows(newRowCount, 10);
    this.set('tree', newRows);

    await wait();
    assert.equal(table.rows.length, newRowCount, 'renders new tree');
  });
});
