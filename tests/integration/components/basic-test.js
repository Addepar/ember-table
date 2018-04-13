import { module, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

import generateTable, { generateColumns, generateRows } from '../../helpers/generate-table';
import { componentModule } from '../../helpers/module';

import { find, findAll, scrollTo } from 'ember-native-dom-helpers';

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
      await scrollTo('[data-test-ember-table]', 0, 10000);

      assert.notEqual(table.getCell(0, 0).text.trim(), '0A', 'first rendered row is not first data row');
      assert.equal(
        table.getCell(table.rows.length - 1, 0).text.trim(), '99A', 'correct last row rendered'
      );
    });

    test('fixed cells work', async function(assert) {
      function validateElements(container, elements, measurement) {
        for (let element of elements) {
          let rect = element.getBoundingClientRect();
          let diff = Math.abs(container[measurement] - rect[measurement]);

          // Travis reports pretty wide differences for some reason, possibly
          // their Chrome version. It does validate that the elements are moving
          // and that should be enough to know if we messed something up majorly.
          //
          // TODO(sticky): Try to lower the tolerance as sticky becomes more prevalent
          assert.ok(diff < 10, `${diff} is with tolerance`);
        }
      }

      await generateTable(this, {
        rowCount: 100,
        columnCount: 30,
        footerRowCount: 1,
        hasFixedColumn: true
      });

      let tableContainerRect = find('.ember-table').getBoundingClientRect();

      validateElements(tableContainerRect, findAll('thead th'), 'top');
      validateElements(tableContainerRect, findAll('tr > *:first-child'), 'left');
      validateElements(tableContainerRect, findAll('tfoot td'), 'bottom');

      await scrollTo('[data-test-ember-table]', 10000, 0);

      validateElements(tableContainerRect, findAll('thead th'), 'top');
      validateElements(tableContainerRect, findAll('tr > *:first-child'), 'left');
      validateElements(tableContainerRect, findAll('tfoot td'), 'bottom');

      await scrollTo('[data-test-ember-table]', 10000, 10000);

      validateElements(tableContainerRect, findAll('thead th'), 'top');
      validateElements(tableContainerRect, findAll('tr > *:first-child'), 'left');
      validateElements(tableContainerRect, findAll('tfoot td'), 'bottom');

      await scrollTo('[data-test-ember-table]', 0, 10000);

      validateElements(tableContainerRect, findAll('thead th'), 'top');
      validateElements(tableContainerRect, findAll('tr > *:first-child'), 'left');
      validateElements(tableContainerRect, findAll('tfoot td'), 'bottom');
    });

    test('Accessibility test', async function(assert) {
      await generateTable(this, { hasFixedColumn: true });

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
            {{#ember-table as |t|}}
              {{ember-thead api=t columns=columns}}

              {{ember-tbody api=t rows=rows estimateRowHeight=13}}
            {{/ember-table}}
          </div>
        {{/if}}
      `);

      find('#container').style.height = '600px';
      this.set('showComponent', false);
    });
  });
});
