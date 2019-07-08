import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import { generateTable } from '../../../helpers/generate-table';
import TablePage from 'ember-table/test-support/pages/ember-table';

let table = new TablePage();

module('Integration | header | th', function(hooks) {
  setupRenderingTest(hooks);
  test('sends onContextMenu action', async function(assert) {
    this.set('onHeaderCellContextMenu', event => {
      assert.ok(event, 'event sent');
    });

    await generateTable(this);
    await table.headers.objectAt(0).contextMenu();
  });
});
