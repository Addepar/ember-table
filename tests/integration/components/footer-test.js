import { module, test } from 'ember-qunit';

import generateTable from '../../helpers/generate-table';
import { scenarioModule, componentModule } from '../../helpers/module';

import TablePage from 'ember-table/test-support/pages/ember-table';
import { collection } from 'ember-classy-page-object';

const table = TablePage.extend({
  footer: {
    rows: collection({
      cells: collection({
        customFooter: { scope: '.custom-footer' }
      })
    })
  }
}).create();

const scenarios = {
  'standard': {
    columnOptions: {}
  },
  'custom component': {
    columnOptions: {
      footerComponent: 'custom-footer'
    }
  }
};

module('Integration | footer', function() {

  componentModule('custom component', function() {

    test('it works', async function(assert) {
      await generateTable(this, {
        footerRowCount: 3,
        columnOptions: {
          footerComponent: 'custom-footer'
        }
      });

      assert.ok(
        table.footer.rows.eq(0).cells.eq(0).customFooter.isPresent,
        'custom footer component exists'
      );
    });

    test('can send event', async function(assert) {
      assert.expect(1);

      this.on('onFooterEvent', () => {
        assert.ok(true, 'Footer event is sent to outer controller');
      });

      await generateTable(this, {
        footerRowCount: 3,
        columnOptions: {
          footerComponent: 'custom-footer'
        }
      });

      table.footer.rows.eq(0).cells.eq(1).customFooter.click();
    });

  });

  scenarioModule(scenarios, function({ columnOptions }) {

    componentModule('basic', function() {

      test('renders if footerRows are set', async function(assert) {
        await generateTable(this, { footerRowCount: 3, columnOptions });

        assert.ok(table.footer.isPresent, 'Footer is present in the table');
        assert.equal(table.footer.rows.length, 3, 'correct number of footer rows rendered');
      });
    });
  });
});



