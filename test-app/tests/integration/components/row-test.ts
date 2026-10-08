import { module, test } from 'qunit';

import {
  generateTable,
  configureTableGeneration,
  resetTableGenerationConfig,
} from '../../helpers/generate-table';
import { parameterizedComponentModule } from '../../helpers/module';

import TablePage from 'ember-table/test-support/pages/ember-table';
import { collection, hasClass } from 'ember-table/test-support';
import CustomRow from 'test-app/components/custom-row/component';
import type { TableTestContext } from '../../helpers/table-test-context';
import type { EmberTableRow } from 'ember-table';
import type { EmberTrEvent } from 'ember-table/components/ember-tr/component';

let table = new TablePage({
  body: {
    rows: collection({
      isCustomRow: hasClass('custom-row'),
      isEven: hasClass('is-even'),
      isOdd: hasClass('is-odd'),
    }),
  },
});

const USE_EMBER_ARRAY_PARAMETERS = {
  useEmberArray: {
    values: [true, false],
    hooks: {
      beforeEach(value: boolean) {
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
    test('marks rows as even or odd', async function (this: TableTestContext, assert) {
      await generateTable(this);

      assert.true(table.rows.objectAt(0).isEven, 'First row is even');
      assert.true(table.rows.objectAt(1).isOdd, 'Second row is odd');
      assert.true(table.rows.objectAt(2).isEven, 'Third row is even');
      assert.true(table.rows.objectAt(3).isOdd, 'Fourth row is odd');
      assert.true(table.rows.objectAt(4).isEven, 'Fifth row is even');
      assert.true(table.rows.objectAt(5).isOdd, 'Sixth row is odd');
    });

    test('can use a custom row component', async function (this: TableTestContext, assert) {
      await generateTable(this, {
        rowComponent: CustomRow,
      });

      assert.true(table.rows.objectAt(0).isCustomRow, 'Table has custom row');
    });

    test('sends onClick action', async function (this: TableTestContext, assert) {
      this.set('onRowClick', ({ event, rowValue, rowMeta }: EmberTrEvent<EmberTableRow>) => {
        assert.ok(event, 'event sent');
        assert.ok(rowValue, 'rowValue sent');
        assert.ok(rowMeta, 'rowMeta sent');
      });

      await generateTable(this);
      await table.rows.objectAt(0).click();
    });

    test('sends onDoubleClick action', async function (this: TableTestContext, assert) {
      this.set('onRowDoubleClick', ({ event, rowValue, rowMeta }: EmberTrEvent<EmberTableRow>) => {
        assert.ok(event, 'event sent');
        assert.ok(rowValue, 'rowValue sent');
        assert.ok(rowMeta, 'rowMeta sent');
      });

      await generateTable(this);
      await table.rows.objectAt(0).doubleClick();
    });
  });
});
