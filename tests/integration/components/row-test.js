import { module, test } from 'ember-qunit';

import { generateTable } from '../../helpers/generate-table';
import { componentModule } from '../../helpers/module';

import TablePage from 'ember-table/test-support/pages/ember-table';
import { collection, hasClass } from 'ember-classy-page-object';

let table = TablePage.extend({
  body: {
    rows: collection({
      isCustomRow: hasClass('custom-row'),
    }),
  },
}).create();

module('Integration | row', function() {
  componentModule('basic', function() {
    test('can use a custom row component', async function(assert) {
      await generateTable(this, {
        rowComponent: 'custom-row',
      });

      assert.ok(table.rows.eq(0).isCustomRow, 'Table has custom row');
    });

    test('sends onClick action', async function(assert) {
      this.on('onRowClick', ({ event, rowValue, rowMeta }) => {
        assert.ok(event, 'event sent');
        assert.ok(rowValue, 'rowValue sent');
        assert.ok(rowMeta, 'rowMeta sent');
      });

      await generateTable(this);
      await table.rows.eq(0).click();
    });

    test('sends onDoubleClick action', async function(assert) {
      this.on('onRowDoubleClick', ({ event, rowValue, rowMeta }) => {
        assert.ok(event, 'event sent');
        assert.ok(rowValue, 'rowValue sent');
        assert.ok(rowMeta, 'rowMeta sent');
      });

      await generateTable(this);
      await table.rows.eq(0).doubleClick();
    });
  });
});
