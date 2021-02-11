import { module, test } from 'ember-qunit';

import {
  generateTable,
  configureTableGeneration,
  resetTableGenerationConfig,
} from '../../helpers/generate-table';
import { parameterizedComponentModule } from '../../helpers/module';

import TablePage from 'ember-table/test-support/pages/ember-table';
import { collection, hasClass } from 'ember-classy-page-object';

let table = new TablePage({
  body: {
    rows: collection({
      isCustomRow: hasClass('custom-row'),
    }),
  },
});

const USE_EMBER_ARRAY_PARAMETERS = {
  useEmberArray: {
    values: [true, false],
    hooks: {
      beforeEach(value) {
        configureTableGeneration({ useEmberArray: value });
      },
      afterEach() {
        resetTableGenerationConfig();
      },
    },
  },
};

module('Integration | row', function() {
  parameterizedComponentModule('basic', USE_EMBER_ARRAY_PARAMETERS, function() {
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
});
