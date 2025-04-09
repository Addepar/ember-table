import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { click, render } from '@ember/test-helpers';
import TablePage from 'ember-table/test-support/pages/ember-table';
import { A } from '@ember/array';
import RSVP from 'rsvp';

// This is a "waiter"-style helper to use to ensure that
// the interior of the ember-table has finished all of its
// layout-related logic has finished. If we don't use this to
// wait after `render`, the column widths will not have been
// set yet and the tests in this module are moot.
async function rafFinished() {
  return new RSVP.Promise(resolve => {
    requestAnimationFrame(() => requestAnimationFrame(resolve));
  });
}

function tableData() {
  return {
    rows: [
      { A: 'A', B: 'B', C: 'C', D: 'D', E: 'E' },
      { A: 'A', B: 'B', C: 'C', D: 'D', E: 'E' },
      { A: 'A', B: 'B', C: 'C', D: 'D', E: 'E' },
    ],
    columns: [
      { name: 'A', valuePath: 'A', width: 180 },
      { name: 'B', valuePath: 'B', width: 180 },
      { name: 'C', valuePath: 'C', width: 180 },
      { name: 'D', valuePath: 'D', width: 180 },
    ],
    newColumn: { name: 'E', valuePath: 'E', width: 180 },
  };
}

function sumHeaderWidths(table) {
  return table.headers.map(h => h.logicalWidth).reduce((sum, w) => sum + w, 0);
}

async function renderTable() {
  await render(hbs`
    <button id="add-column" {{on "click" this.addColumn}}>Add Column</button>
    <button id="remove-column" {{on "click" this.removeColumn}}>Remove Column</button>
    <EmberTable @data-test-ember-table={{true}} as |t|>
      <EmberThead
        @api={{t}}
        @widthConstraint="eq-container"
        @columns={{this.columns}}
        @columnKeyPath={{this.columnKeyPath}} as |h|
      >
        <EmberTr @api={{h}} as |r|>
          <EmberTh @api={{r}} />
        </EmberTr>
      </EmberThead>

      <EmberTbody @api={{t}} @rows={{this.rows}} as |b|>
        <EmberTr @api={{b}} as |r|>
          <EmberTd @api={{r}} as |cellValue|>
            {{cellValue}}
          </EmberTd>
        </EmberTr>
      </EmberTbody>
    </EmberTable>
    `);

  await rafFinished();
}

async function testColumnRemovals(assert, table) {
  let originalWidth = table.logicalWidth;
  let originalContainerWidth = table.logicalContainerWidth;

  let currentColumnCount = table.headers.length;
  assert.equal(currentColumnCount, 4, 'precond - 4 columns');
  assert.equal(sumHeaderWidths(table), originalWidth, 'precond - headers sum to table width');
  assert.equal(
    originalWidth,
    originalContainerWidth,
    'precond - table is as wide as its container'
  );

  while (currentColumnCount > 1) {
    await click('button#remove-column');
    assert.equal(
      table.headers.length,
      currentColumnCount - 1,
      `column count changes from ${currentColumnCount} -> ${currentColumnCount - 1}`
    );
    currentColumnCount -= 1;

    assert.equal(
      table.logicalWidth,
      originalWidth,
      `table width is same after removal of column #${currentColumnCount}.`
    );
    assert.equal(
      table.logicalContainerWidth,
      originalContainerWidth,
      `new table container is same size as original container after removal of column #${currentColumnCount}.`
    );
    assert.equal(
      sumHeaderWidths(table),
      originalWidth,
      `headers sum to table width after removal of column #${currentColumnCount}`
    );
    assert.equal(
      table.logicalWidth,
      table.logicalContainerWidth,
      `new table width is as wide as its container after removal of column #${currentColumnCount}.`
    );
  }
}

async function testColumnAddition(assert, table) {
  let originalWidth = table.logicalWidth;
  let originalContainerWidth = table.logicalContainerWidth;

  let currentColumnCount = table.headers.length;
  assert.equal(currentColumnCount, 4, 'precond - 4 columns');
  assert.equal(sumHeaderWidths(table), originalWidth, 'precond - headers sum to table width');
  assert.equal(
    originalWidth,
    originalContainerWidth,
    'precond - table is as wide as its container'
  );

  await click('#add-column');
  assert.equal(table.headers.length, 5, 'column is added');
  assert.equal(sumHeaderWidths(table), originalWidth, 'headers sum to table width after adding');
  assert.equal(table.logicalWidth, originalWidth, 'table width is unchanged');
  assert.equal(
    table.logicalContainerWidth,
    originalContainerWidth,
    'table container width is unchanged'
  );
}

module('[Unit] ember-thead', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.set('addColumn', () => {});
    this.set('removeColumn', () => {});
  });

  test('table resizes when columns are removed', async function(assert) {
    let data = tableData();
    this.set('rows', data.rows);
    this.set('columns', data.columns);
    this.set('removeColumn', () => {
      this.set('columns', this.get('columns').slice(0, -1));
    });

    await renderTable(this);
    await testColumnRemovals(assert, new TablePage());
  });

  test('table resizes when columns are removed via mutation', async function(assert) {
    let data = tableData();
    this.set('rows', data.rows);
    this.set('columns', A(data.columns));
    this.set('removeColumn', () => {
      this.get('columns').popObject();
    });

    await renderTable(this);
    await testColumnRemovals(assert, new TablePage());
  });

  test('table resizes when columns are added', async function(assert) {
    let data = tableData();
    this.set('rows', data.rows);
    this.set('columns', data.columns);
    this.set('addColumn', () => {
      this.set('columns', [...data.columns, data.newColumn]);
    });

    await renderTable(this);
    await testColumnAddition(assert, new TablePage());
  });

  test('table resizes when columns are added via mutation', async function(assert) {
    let data = tableData();
    this.set('rows', data.rows);
    this.set('columns', A(data.columns));
    this.set('addColumn', () => {
      this.get('columns').pushObject(data.newColumn);
    });

    await renderTable(this);
    await testColumnAddition(assert, new TablePage());
  });

  test('if columnKeyPath is set, meta data is preserved when columns are replaced', async function(assert) {
    let data = tableData();

    data.columns.forEach((column, i) => {
      // column width is only stored as meta data when it is not specified
      delete column.width;

      // add a unique key for `columnKeyPath`
      column.key = `${i}`;
    });

    this.set('rows', data.rows);
    this.set('columns', data.columns);
    this.set('columnKeyPath', 'key');

    await renderTable(this);

    let table = new TablePage();
    let header = table.headers.objectAt(0);
    let initialHeaderWidth = header.logicalWidth;
    await header.resize(500);
    let expectedHeaderWidth = header.logicalWidth; // might not be exactly 500

    // sanity check
    assert.notEqual(initialHeaderWidth, expectedHeaderWidth, 'header width has changed');

    // substitute deeply equal, but non-identical columns
    let newColumns = data.columns.map(column => Object.assign({}, column));
    this.set('columns', newColumns);
    await rafFinished();

    // without `columnKeyPath`, header would snap back to default width
    assert.equal(header.logicalWidth, expectedHeaderWidth, 'meta data is preserved');
  });
});
