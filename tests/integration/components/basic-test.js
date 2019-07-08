import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

import { generateTable, generateColumns, generateRows } from '../../helpers/generate-table';

import { find, findAll, scrollTo } from 'ember-native-dom-helpers';

import { SUPPORTS_INVERSE_BLOCK } from 'ember-compatibility-helpers';

import TablePage from 'ember-table/test-support/pages/ember-table';
import { collection, hasClass } from 'ember-classy-page-object';
import wait from 'ember-test-helpers/wait';

let table = new TablePage({
  body: {
    rows: collection({
      isCustomRow: hasClass('custom-row'),
    }),
  },
});

module('Integration | basic', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    let rowCount = 10;
    let columnCount = 10;

    await generateTable(this, { columnCount, rowCount });

    // Check column header count
    assert.equal(table.headers.length, columnCount, 'renders the correct number of columns');
    assert.equal(
      table.header.rowCount,
      1,
      'The total number of rows in the header is available through the page object'
    );
    assert.equal(table.rows.length, rowCount, 'renders the correct number of rows');
    assert.equal(
      table.body.rowCount,
      rowCount,
      'The total number of rows in the body is available through the page object'
    );
    assert.equal(
      table.footer.rowCount,
      0,
      'The total number of rows in the footer is available through the page object'
    );
  });

  test('it renders without any valuePaths', async function(assert) {
    let columns = [{}];
    let rows = [{}, {}, {}];

    await generateTable(this, { columns, rows });

    assert.equal(table.headers.length, columns.length, 'renders the correct number of columns');
    assert.equal(table.rows.length, rows.length, 'renders the correct number of rows');
  });

  test('occlusion works', async function(assert) {
    let rowCount = 100;
    let columnCount = 10;

    await generateTable(this, { columnCount, rowCount });

    assert.ok(table.rows.length < rowCount, 'not all rows have been rendered');
    assert.equal(
      table.body.rowCount,
      rowCount,
      'The total number of rows in the body is available through the page object'
    );
    assert.equal(table.getCell(0, 0).text.trim(), '0A', 'correct first row rendered');
    assert.notEqual(
      table.getCell(table.rows.length - 1, 0).text.trim(),
      '99A',
      'last rendered row is not last data row'
    );

    // scroll all the way down
    await scrollTo('[data-test-ember-table]', 0, 10000);

    assert.notEqual(
      table.getCell(0, 0).text.trim(),
      '0A',
      'first rendered row is not first data row'
    );
    assert.equal(
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

    assert.ok(table.rows.length < rowCount, 'not all rows have been rendered');
    assert.equal(table.getCell(0, 0).text.trim(), '60A', 'correct first row rendered');
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
      columnOptions: {
        fixedLeftCount: 1,
        fixedRightCount: 1,
      },
    });

    let tableContainerRect = find('.ember-table').getBoundingClientRect();

    validateElements(tableContainerRect, findAll('thead th'), 'top');
    validateElements(tableContainerRect, findAll('tr > *:first-child'), 'left');
    validateElements(tableContainerRect, findAll('tr > *:last-child'), 'right');
    validateElements(tableContainerRect, findAll('tfoot td'), 'bottom');

    await scrollTo('[data-test-ember-table]', 10000, 0);

    validateElements(tableContainerRect, findAll('thead th'), 'top');
    validateElements(tableContainerRect, findAll('tr > *:first-child'), 'left');
    validateElements(tableContainerRect, findAll('tr > *:last-child'), 'right');
    validateElements(tableContainerRect, findAll('tfoot td'), 'bottom');

    await scrollTo('[data-test-ember-table]', 10000, 10000);

    validateElements(tableContainerRect, findAll('thead th'), 'top');
    validateElements(tableContainerRect, findAll('tr > *:first-child'), 'left');
    validateElements(tableContainerRect, findAll('tr > *:last-child'), 'right');
    validateElements(tableContainerRect, findAll('tfoot td'), 'bottom');

    await scrollTo('[data-test-ember-table]', 0, 10000);

    validateElements(tableContainerRect, findAll('thead th'), 'top');
    validateElements(tableContainerRect, findAll('tr > *:first-child'), 'left');
    validateElements(tableContainerRect, findAll('tr > *:last-child'), 'right');
    validateElements(tableContainerRect, findAll('tfoot td'), 'bottom');
  });

  test('Accessibility test', async function(assert) {
    await generateTable(this, { hasFixedColumn: true });

    await a11yAudit();
    assert.ok(true, 'No accessibility error found');
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

    await this.render(hbs`
        <style>
          .ember-table {
            max-height: initial;
          }
        </style>
        <div id="container" style="height: {{containerHeight}}px; overflow: auto;">
          {{#ember-table as |t|}}
            {{ember-thead api=t columns=columns}}

            {{ember-tbody
              api=t
              containerSelector="#container"
              rows=rows
              estimateRowHeight=estimateRowHeight
              renderAll=false
              bufferSize=0
            }}
          {{/ember-table}}
        </div>
      `);

    await wait();
    assert.equal(table.rows.length, itemsCount, 'renders the correct number of rows');
  });

  test('it yields to inverse when tbody rows are empty', async function(assert) {
    if (!SUPPORTS_INVERSE_BLOCK) {
      assert.ok(true, 'Does not support yield-to-inverse');
    } else {
      this.set('columns', generateColumns(4));
      this.set('rows', []);
      this.render(hbs`
          <div style="height: 500px;">
            {{#ember-table as |t|}}
              {{ember-thead api=t columns=columns}}

              {{#ember-tbody api=t rows=rows as |b|}}
              {{else}}
                <div data-test-inverse-yield>inverse yield</div>
              {{/ember-tbody}}
            {{/ember-table}}
          </div>
        `);

      await wait();
      assert.ok(
        find('[data-test-inverse-yield]'),
        'expected the inverse yield content to be displayed'
      );
    }
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
      assert.notOk(
        classList.contains('ember-table__text-align-left') ||
          classList.contains('ember-table__text-align-center') ||
          classList.contains('ember-table__text-align-right'),
        `No class is applied by default on ${tagName} cells for text alignment`
      );

      classList = find(`${tagName}:nth-of-type(2)`).classList;
      assert.ok(
        classList.contains('ember-table__text-align-right'),
        `${tagName} cells can be right aligned`
      );

      classList = find(`${tagName}:nth-of-type(3)`).classList;
      assert.ok(
        classList.contains('ember-table__text-align-center'),
        `${tagName} cells can be centered`
      );

      classList = find(`${tagName}:nth-of-type(4)`).classList;
      assert.ok(
        classList.contains('ember-table__text-align-left'),
        `${tagName} cells can be left aligned`
      );
    }
  });

  test('Destroying table ignores resize event and does not trigger error', async function(assert) {
    assert.expect(0);

    let rowCount = 20;
    let columnCount = 15;
    this.set('columns', generateColumns(columnCount));
    this.set('rows', generateRows(rowCount));
    this.set('showComponent', true);

    await this.render(hbs`
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
