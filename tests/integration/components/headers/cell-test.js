import { module, test } from 'qunit';
import { componentModule } from '../../../helpers/module';

import { generateTable } from '../../../helpers/generate-table';
import TablePage from 'ember-table/test-support/pages/ember-table';

let table = new TablePage();

module('Integration | header | th', function() {
  componentModule('basic', function() {
    test('sends onContextMenu action', async function(assert) {
      this.set('onHeaderCellContextMenu', event => {
        assert.ok(event, 'event sent');
      });

      await generateTable(this);
      await table.headers.objectAt(0).contextMenu();
    });
  });
});
