import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import { generateTable } from '../../helpers/generate-table';

import TablePage from 'ember-table/test-support/pages/ember-table';
import { collection, hasClass } from 'ember-classy-page-object';

let table = new TablePage({
  body: {
    rows: collection({
      isCustomRow: hasClass('custom-row'),
    }),
  },
});

module('Integration | row', function(hooks) {
  setupRenderingTest(hooks);
  test('can use a custom row component', async function(assert) {
    await generateTable(this, {
      rowComponent: 'custom-row',
    });

    assert.ok(table.rows.objectAt(0).isCustomRow, 'Table has custom row');
  });

  test('sends onClick action', async function(assert) {
    this.set('onRowClick', ({ event, rowValue, rowMeta }) => {
      assert.ok(event, 'event sent');
      assert.ok(rowValue, 'rowValue sent');
      assert.ok(rowMeta, 'rowMeta sent');
    });

    await generateTable(this);
    await table.rows.objectAt(0).click();
  });

  test('sends onDoubleClick action', async function(assert) {
    this.set('onRowDoubleClick', ({ event, rowValue, rowMeta }) => {
      assert.ok(event, 'event sent');
      assert.ok(rowValue, 'rowValue sent');
      assert.ok(rowMeta, 'rowMeta sent');
    });

    await generateTable(this);
    await table.rows.objectAt(0).doubleClick();
  });
});
