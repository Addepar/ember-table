import { module, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

import generateTable, { generateColumns, generateRows } from '../../helpers/generate-table';
import { componentModule } from '../../helpers/module';

import { find, scrollTo } from 'ember-native-dom-helpers';

import TablePage from 'ember-table/test-support/pages/ember-table';
import { collection, hasClass } from 'ember-classy-page-object';

let table = TablePage.extend({
  body: {
    rows: collection({
      isCustomRow: hasClass('custom-row')
    })
  }
}).create();

module('Integration | basic', function() {

  componentModule('rendering', function() {

    test('it renders', async function(assert) {
      let rowCount = 10;
      let columnCount = 10;

      await generateTable(this, { columnCount, rowCount });

      // Check column header count
      assert.equal(table.headers.length, columnCount, 'renders the correct number of columns');
      assert.equal(table.rows.length, rowCount, 'renders the correct number of rows');
    });

    test('occlusion works', async function(assert) {
      let rowCount = 100;
      let columnCount = 10;

      await generateTable(this, { columnCount, rowCount });

      assert.ok(table.rows.length < rowCount, 'not all rows have been rendered');
      assert.equal(table.getCell(0, 0).text.trim(), '0A', 'correct first row rendered');
      assert.notEqual(
        table.getCell(table.rows.length - 1, 0).text.trim(), '99A', 'last rendered row is not last data row'
      );

      // scroll all the way down
      await scrollTo('[data-test-body-container]', 0, 10000);

      assert.notEqual(table.getCell(0, 0).text.trim(), '0A', 'first rendered row is not first data row');
      assert.equal(
        table.getCell(table.rows.length - 1, 0).text.trim(), '99A', 'correct last row rendered'
      );
    });

    test('Accessibility test', async function(assert) {
      await generateTable(this, { numFixedColumns: 1 });

      await a11yAudit();
      assert.ok(true, 'No accessibility error found');
    });

  });

  componentModule('lifecycle', function() {

    test('Destroying table ignores resize event and does not trigger error', async function(assert) {
      assert.expect(0);

      let rowCount = 20;
      let columnCount = 15;
      this.set('columns', generateColumns(columnCount));
      this.set('rows', generateRows(rowCount, columnCount));
      this.set('showComponent', true);

      this.render(hbs`
        {{#if showComponent}}
          <div id="container" style="height: 500px;">
            {{#ember-table
              columns=columns
              rows=rows
              estimateRowHeight=13
              as |r|
            }}

              {{#ember-table-row
                row=r

                as |cell|
              }}
                {{cell.value}}
              {{/ember-table-row}}
            {{/ember-table}}
          </div>
        {{/if}}
      `);

      find('#container').style.height = '600px';
      this.set('showComponent', false);
    });
  });
});
