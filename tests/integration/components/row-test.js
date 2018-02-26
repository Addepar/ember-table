import { module, test } from 'ember-qunit';

import generateTable from '../../helpers/generate-table';
import { componentModule } from '../../helpers/module';

import TablePage from 'ember-table/test-support/pages/ember-table';
import { collection, hasClass } from 'ember-classy-page-object';

let table = TablePage.extend({
  body: {
    rows: collection({
      isCustomRow: hasClass('custom-row')
    })
  }
}).create();

module('Integration | row', function() {

  componentModule('row customization', function() {

    test('can use a custom row component', async function(assert) {
      await generateTable(this, {
        rowComponent: 'custom-row'
      });

      assert.ok(table.rows.eq(0).isCustomRow, 'Table has custom row');
    });

    test('can set a custom row height', async function(assert) {
      await generateTable(this, { staticHeight: true, estimateRowHeight: 100 });

      assert.equal(table.rows.eq(0).height, 100, 'Row height is set to custom height.');
    });
  });
});
