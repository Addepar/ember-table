import { module, test } from 'qunit';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';
import { set } from '@ember/object';

import { generateTable, generateColumns, generateRows } from '../../helpers/generate-table';
import { componentModule } from '../../helpers/module';

import { scrollTo } from '@ember/test-helpers';

import TablePage from 'ember-table/test-support/pages/ember-table';
import { collection, hasClass } from 'ember-classy-page-object';
import { find, findAll, render, settled } from '@ember/test-helpers';

let table = new TablePage({
  body: {
    rows: collection({
      isCustomRow: hasClass('custom-row'),
    }),
  },
});

module('Integration | basic', function() {
  componentModule('rendering', function() {
    test('it renders', async function(assert) {
      let rowCount = 10;
      let columnCount = 10;

      await generateTable(this, { columnCount, rowCount });

      // Check column header count
      assert.strictEqual(
        table.headers.length,
        columnCount,
        'renders the correct number of columns'
      );
      assert.strictEqual(
        table.header.rowCount,
        1,
        'The total number of rows in the header is available through the page object'
      );
      assert.strictEqual(table.rows.length, rowCount, 'renders the correct number of rows');
      assert.strictEqual(
        table.body.rowCount,
        rowCount,
        'The total number of rows in the body is available through the page object'
      );
      assert.strictEqual(
        table.footer.rowCount,
        0,
        'The total number of rows in the footer is available through the page object'
      );
    });

    test('it renders without any valuePaths', async function(assert) {
      let columns = [{}];
      let rows = [{}, {}, {}];

      await generateTable(this, { columns, rows });

      assert.strictEqual(
        table.headers.length,
        columns.length,
        'renders the correct number of columns'
      );
      assert.strictEqual(table.rows.length, rows.length, 'renders the correct number of rows');
    });

    test('occlusion works', async function(assert) {
      let rowCount = 100;
      let columnCount = 10;

      await generateTable(this, { columnCount, rowCount });

      assert.true(table.rows.length < rowCount, 'not all rows have been rendered');
      assert.strictEqual(
        table.body.rowCount,
        rowCount,
        'The total number of rows in the body is available through the page object'
      );
      assert.strictEqual(table.getCell(0, 0).text.trim(), '0A', 'correct first row rendered');
      assert.notEqual(
        table.getCell(table.rows.length - 1, 0).text.trim(),
        '99A',
        'last rendered row is not last data row'
      );

      // scroll all the way down
      await scrollTo('[data-test-ember-table-overflow]', 0, 10000);

      assert.notEqual(
        table.getCell(0, 0).text.trim(),
        '0A',
        'first rendered row is not first data row'
      );
      assert.strictEqual(
        table.getCell(table.rows.length - 1, 0).text.trim(),
        '99A',
        'correct last row rendered'
      );
    });

    test('idForFirstItem works, so scroll position can be restored', async function(assert) {
      let rowCount = 100;
      let columnCount = 10;

      await generateTable(this, {
        columnCount,
        rowCount,
        key: 'id',
        idForFirstItem: '60',
        bufferSize: 0,
      });

      assert.true(table.rows.length < rowCount, 'not all rows have been rendered');
      assert.strictEqual(table.getCell(0, 0).text.trim(), '60A', 'correct first row rendered');
      assert.notEqual(
        table.getCell(table.rows.length - 1, 0).text.trim(),
        '99A',
        'last rendered row is not last data row'
      );
    });

    test('fixed cells work', async function(assert) {
      function validateElements(container, elements, measurement) {
        for (let element of elements) {
          let rect = element.getBoundingClientRect();
          let diff = Math.abs(container[measurement] - rect[measurement]);

          assert.true(diff < 10, `${diff} is with tolerance`);
        }
      }

      await generateTable(this, {
        rowCount: 100,
        columnCount: 30,
        footerRowCount: 1,
        columnOptions: {
          fixedLeftCount: 1,
          fixedRightCount: 1,
        },
      });

      let tableContainerRect = find('.ember-table').getBoundingClientRect();

      /**
       * No scroll.
       *
       * Assert the special cases:
       *
       *   - Horizontally, the last column is stuck at the edge of the
       *     container.
       *   - Vertically, the footer is stuck at the edge of the container.
       */
      validateElements(tableContainerRect, findAll('thead th'), 'top');
      validateElements(tableContainerRect, findAll('tr > *:first-child'), 'left');
      validateElements(tableContainerRect, findAll('tr > *:last-child'), 'right');
      validateElements(tableContainerRect, findAll('tfoot td'), 'bottom');

      await scrollTo('[data-test-ember-table-overflow]', 10000, 0);

      /**
       * Scrolled to the far right.
       *
       * Assert the special cases:
       *
       *   - Horizontally, the first column is stuck at the edge of the
       *     container.
       *   - Vertically, the footer is stuck at the edge of the container.
       */
      validateElements(tableContainerRect, findAll('thead th'), 'top');
      validateElements(tableContainerRect, findAll('tr > *:first-child'), 'left');
      validateElements(tableContainerRect, findAll('tr > *:last-child'), 'right');
      validateElements(tableContainerRect, findAll('tfoot td'), 'bottom');

      await scrollTo('[data-test-ember-table-overflow]', 10000, 10000);

      /**
       * Scrolled to the far bottom and far right.
       *
       * Assert the special cases:
       *
       *   - Horizontally, the first column is stuck at the edge of the
       *     container.
       *   - Vertically, the header is stuck at the edge of the container.
       */
      validateElements(tableContainerRect, findAll('thead th'), 'top');
      validateElements(tableContainerRect, findAll('tr > *:first-child'), 'left');
      validateElements(tableContainerRect, findAll('tr > *:last-child'), 'right');
      validateElements(tableContainerRect, findAll('tfoot td'), 'bottom');

      await scrollTo('[data-test-ember-table-overflow]', 0, 10000);

      /**
       * Scrolled to the far bottom.
       *
       * Assert the special cases:
       *
       *   - Horizontally, the last column is stuck at the edge of the
       *     container.
       *   - Vertically, the header is stuck at the edge of the container.
       */
      validateElements(tableContainerRect, findAll('thead th'), 'top');
      validateElements(tableContainerRect, findAll('tr > *:first-child'), 'left');
      validateElements(tableContainerRect, findAll('tr > *:last-child'), 'right');
      validateElements(tableContainerRect, findAll('tfoot td'), 'bottom');
    });

    test('mutating fixed cells work', async function(assert) {
      await generateTable(this, {
        rowCount: 100,
        columnCount: 30,
        footerRowCount: 1,
        columnOptions: {
          fixedLeftCount: 1,
          fixedRightCount: 1,
        },
      });

      let tableContainerRect = find('.ember-table').getBoundingClientRect();

      /**
       * Just scroll around. See the prior test for assertions that the
       * behaviors after these actions are performed are correct.
       */
      await scrollTo('[data-test-ember-table-overflow]', 10000, 10000);
      await scrollTo('[data-test-ember-table-overflow]', 0, 0);

      /**
       * Mutate the fixed state of the first and last column
       */
      set(this.columns[0], 'isFixed', null);
      set(this.columns[this.columns.length - 1], 'isFixed', null);

      await settled();

      /**
       * No scroll.
       *
       * Assert the special cases:
       *
       *   - Horizontally, the last column is no longer stuck at the edge of
       *     the container.
       */
      let lastColumnRight = this.element.querySelector('tr > *:last-child').getBoundingClientRect()
        .right;
      let tableContainerRight = tableContainerRect.right;
      assert.true(
        lastColumnRight > tableContainerRight + 20,
        `last column right (${lastColumnRight}) is safely greater than the container's right (${tableContainerRight} + 20)`
      );

      await scrollTo('[data-test-ember-table-overflow]', 10000, 0);

      /**
       * Scrolled to far right.
       *
       * Assert the special cases:
       *
       *   - Horizontally, the first column is no longer stuck at the edge of
       *     the container.
       */
      let firstColumnLeft = this.element.querySelector('tr > *:first-child').getBoundingClientRect()
        .left;
      let tableContainerLeft = tableContainerRect.left;
      assert.true(
        firstColumnLeft < tableContainerLeft - 20,
        `first column left (${firstColumnLeft}) is safely less than the container's left (${tableContainerLeft} - 20)`
      );
    });

    test('Accessibility test', async function(assert) {
      await generateTable(this, { hasFixedColumn: true });

      await a11yAudit();
      assert.true(true, 'No accessibility error found');
    });

    test('custom container selector', async function(assert) {
      let rowCount = 100;
      let columnCount = 15;
      let rowHeight = 20;
      let containerHeight = 200;
      let itemsCount = Math.ceil(containerHeight / rowHeight);
      this.set('columns', generateColumns(columnCount));
      this.set('rows', generateRows(rowCount));
      this.set('estimateRowHeight', rowHeight);
      this.set('containerHeight', containerHeight);

      await render(hbs`
        <style>
          .ember-table {
            max-height: initial;
          }
        </style>
        <div id="container" style="height: {{this.containerHeight}}px; overflow: auto;">
          <EmberTable as |t|>
            <EmberThead @api={{t}} @columns={{this.columns}} />
            <EmberTbody
              @api={{t}}
              @containerSelector="#container"
              @rows={{this.rows}}
              @estimateRowHeight={{this.estimateRowHeight}}
              @renderAll=false
              @bufferSize=0
            />
          </EmberTable>
        </div>
      `);

      // eslint-disable-next-line ember/no-settled-after-test-helper
      await settled();
      assert.strictEqual(table.rows.length, itemsCount, 'renders the correct number of rows');
    });

    test('it yields to inverse when tbody rows are empty', async function(assert) {
      this.set('columns', generateColumns(4));
      this.set('rows', []);
      // Cannot change to angle-bracket since `{{else}}` is not supported
      // Can rewrite this using named blocks (via polyfill):
      // https://github.com/ember-polyfills/ember-named-blocks-polyfill
      await render(hbs`
        <div style="height: 500px;">
          {{#ember-table as |t|}}
            {{ember-thead api=t columns=this.columns}}

            {{#ember-tbody api=t rows=this.rows as |b|}}
            {{else}}
              <div data-test-inverse-yield>inverse yield</div>
            {{/ember-tbody}}
          {{/ember-table}}
        </div>
      `);

      // eslint-disable-next-line ember/no-settled-after-test-helper
      await settled();
      assert
        .dom('[data-test-inverse-yield]')
        .exists('expected the inverse yield content to be displayed');
    });

    test('Text can be aligned left, center or right', async function(assert) {
      let classList;
      let rowCount = 1;
      let columns = generateColumns(4);
      columns[1].textAlign = 'right';
      columns[2].textAlign = 'center';
      columns[3].textAlign = 'left';

      await generateTable(this, { columns, columnCount: columns.length, rowCount });

      for (let tagName of ['th', 'td']) {
        classList = find(`${tagName}:nth-of-type(1)`).classList;
        assert.false(
          // eslint-disable-next-line qunit/no-assert-logical-expression
          classList.contains('ember-table__text-align-left') ||
            classList.contains('ember-table__text-align-center') ||
            classList.contains('ember-table__text-align-right'),
          `No class is applied by default on ${tagName} cells for text alignment`
        );

        classList = find(`${tagName}:nth-of-type(2)`).classList;
        assert.true(
          classList.contains('ember-table__text-align-right'),
          `${tagName} cells can be right aligned`
        );

        classList = find(`${tagName}:nth-of-type(3)`).classList;
        assert.true(
          classList.contains('ember-table__text-align-center'),
          `${tagName} cells can be centered`
        );

        classList = find(`${tagName}:nth-of-type(4)`).classList;
        assert.true(
          classList.contains('ember-table__text-align-left'),
          `${tagName} cells can be left aligned`
        );
      }
    });

    test('it can be rendered with no columns', async function(assert) {
      await generateTable(this, { rows: [], columns: [] });
      assert.true(true, 'The empty table rendered without incident');
    });
  });

  componentModule('lifecycle', function() {
    test('Destroying table ignores resize event and does not trigger error', async function(assert) {
      assert.expect(0);

      let rowCount = 20;
      let columnCount = 15;
      this.set('columns', generateColumns(columnCount));
      this.set('rows', generateRows(rowCount));
      this.set('showComponent', true);

      await render(hbs`
        {{#if this.showComponent}}
          <div id="container" style="height: 500px;">
            <EmberTable as |t|>
              <EmberThead @api={{t}} @columns={{this.columns}} />
              <EmberTbody @api={{t}} @rows={{this.rows}} @estimateHeigh={{13}} />
            </EmberTable>
          </div>
        {{/if}}
      `);

      document.querySelector('#ember-testing-container').style.height = '600px';
      this.set('showComponent', false);
    });

    test('Destroying table with footerRows after initial render does not trigger error', async function(assert) {
      assert.expect(0);

      this.set('columns', generateColumns(4));
      this.set('rows', generateRows(10));

      this.set('showComponent', true);

      await render(hbs`
        {{#if this.showComponent}}
          <div id="container" style="height: 500px;">
            <EmberTable as |t|>
              <EmberThead @api={{t}} @columns={{this.columns}} />
              <EmberTbody @api={{t}} @rows={{this.rows}} @estimateHeigh={{13}} />
              {{#if this.footerRows}}
                <EmberTfoot @api={{t}} @rows={{this.footerRows}} />
              {{/if}}
            </EmberTable>
          </div>
        {{/if}}
      `);

      this.set('footerRows', generateRows(1));

      this.set('showComponent', false);
    });
  });
});
