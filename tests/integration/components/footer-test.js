import { module, test } from 'qunit';

import { generateTable } from '../../helpers/generate-table';
import { componentModule } from '../../helpers/module';

import TablePage from 'ember-table/test-support/pages/ember-table';

const table = new TablePage();

module('Integration | footer', function() {
  componentModule('basic', function() {
    test('renders if footerRows are set', async function(assert) {
      await generateTable(this, { footerRowCount: 3 });

      assert.ok(table.footer.isPresent, 'Footer is present in the table');
      assert.equal(table.footer.rows.length, 3, 'correct number of footer rows rendered');
      assert.equal(
        table.footer.rowCount,
        3,
        'The total number of rows in the footer is available through the page object'
      );

      this.set('footerRows', []);

      assert.ok(table.footer.isPresent, 'Footer is present in the table');
      assert.equal(table.footer.rows.length, 0, 'Footer rows are removed');
    });
  });
});
