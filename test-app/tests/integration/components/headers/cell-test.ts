import { module, test } from 'qunit';
import { componentModule } from '../../../helpers/module';

import { generateTable } from '../../../helpers/generate-table';
import TablePage from 'ember-table/test-support/pages/ember-table';
import type { TableTestContext } from '../../../helpers/table-test-context';

let table = new TablePage();

module('Integration | header | th', function() {
  componentModule('basic', function() {
    test('sends onContextMenu action', async function (this: TableTestContext, assert) {
      this.set('onHeaderCellContextMenu', (event: MouseEvent) => {
        assert.ok(event, 'event sent');
      });

      await generateTable(this);
      await table.headers.objectAt(0).contextMenu();
    });
  });
});
