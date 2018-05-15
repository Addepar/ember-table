import { module, test } from 'ember-qunit';

import { generateTable } from '../../helpers/generate-table';
import { componentModule } from '../../helpers/module';

import TablePage from 'ember-table/test-support/pages/ember-table';

let table = TablePage.create();

module('Integration | cell', function() {
  componentModule('basic', function() {
    test('sends onClick action', async function(assert) {
      this.on(
        'onCellClick',
        ({ event, cellValue, cellMeta, columnValue, columnMeta, rowValue, rowMeta }) => {
          assert.ok(event, 'event sent');

          assert.equal(cellValue, '0A', 'cellValue sent');
          assert.ok(cellMeta, 'cellMeta sent');

          assert.equal(columnValue.name, 'A', 'columnValue sent');
          assert.ok(columnMeta, 'columnMeta sent');

          assert.ok(rowValue, 'rowValue sent');
          assert.ok(rowMeta, 'rowMeta sent');
        }
      );

      await generateTable(this);
      await table.getCell(0, 0).click();
    });

    test('sends onDoubleClick action', async function(assert) {
      this.on(
        'onCellDoubleClick',
        ({ event, cellValue, cellMeta, columnValue, columnMeta, rowValue, rowMeta }) => {
          assert.ok(event, 'event sent');

          assert.equal(cellValue, '0A', 'cellValue sent');
          assert.ok(cellMeta, 'cellMeta sent');

          assert.equal(columnValue.name, 'A', 'columnValue sent');
          assert.ok(columnMeta, 'columnMeta sent');

          assert.ok(rowValue, 'rowValue sent');
          assert.ok(rowMeta, 'rowMeta sent');
        }
      );

      await generateTable(this);
      await table.getCell(0, 0).doubleClick();
    });
  });
});
