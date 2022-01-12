import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { click } from '@ember/test-helpers';
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
  return table.headers.map(h => h.width).reduce((sum, w) => sum + w, 0);
}

async function renderTable(context) {
  await context.render(hbs`
    <button id="add-column" {{action 'addColumn'}}>Add Column</button>
    <button id="remove-column" {{action 'removeColumn'}}>Remove Column</button>
    {{#ember-table data-test-ember-table=true as |t|}}
      {{#ember-thead
        api=t
        widthConstraint='eq-container'
        columns=columns
        columnKeyPath=columnKeyPath as |h|}}
        {{#ember-tr api=h as |r|}}
          {{ember-th api=r}}
        {{/ember-tr}}
      {{/ember-thead}}

      {{#ember-tbody api=t rows=rows as |b|}}
        {{#ember-tr api=b as |r|}}
          {{#ember-td api=r as |cellValue|}}
            {{cellValue}}
          {{/ember-td}}
        {{/ember-tr}}
      {{/ember-tbody}}
    {{/ember-table}}
    `);

  await rafFinished();
}

async function testColumnRemovals(assert, table) {
  let originalWidth = table.width;
  let originalContainerWidth = table.containerWidth;

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
      table.width,
      originalWidth,
      `table width is same after removal of column #${currentColumnCount}.`
    );
    assert.equal(
      table.containerWidth,
      originalContainerWidth,
      `new table container is same size as original container after removal of column #${currentColumnCount}.`
    );
    assert.equal(
      sumHeaderWidths(table),
      originalWidth,
      `headers sum to table width after removal of column #${currentColumnCount}`
    );
    assert.equal(
      table.width,
      table.containerWidth,
      `new table width is as wide as its container after removal of column #${currentColumnCount}.`
    );
  }
}

async function testColumnAddition(assert, table) {
  let originalWidth = table.width;
  let originalContainerWidth = table.containerWidth;

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
  assert.equal(table.width, originalWidth, 'table width is unchanged');
  assert.equal(table.containerWidth, originalContainerWidth, 'table container width is unchanged');
}

module('[Unit] ember-thead', function(hooks) {
  setupRenderingTest(hooks);

  test('table resizes when columns are removed', async function(assert) {
    let data = tableData();
    this.set('rows', data.rows);
    this.set('columns', data.columns);
    this.on('removeColumn', function() {
      this.set('columns', this.get('columns').slice(0, -1));
    });

    await renderTable(this);
    await testColumnRemovals(assert, new TablePage());
  });

  test('table resizes when columns are removed via mutation', async function(assert) {
    let data = tableData();
    this.set('rows', data.rows);
    this.set('columns', A(data.columns));
    this.on('removeColumn', function() {
      this.get('columns').popObject();
    });

    await renderTable(this);
    await testColumnRemovals(assert, new TablePage());
  });

  test('table resizes when columns are added', async function(assert) {
    let data = tableData();
    this.set('rows', data.rows);
    this.set('columns', data.columns);
    this.on('addColumn', function() {
      this.set('columns', [...data.columns, data.newColumn]);
    });

    await renderTable(this);
    await testColumnAddition(assert, new TablePage());
  });

  test('table resizes when columns are added via mutation', async function(assert) {
    let data = tableData();
    this.set('rows', data.rows);
    this.set('columns', A(data.columns));
    this.on('addColumn', function() {
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
    let initialHeaderWidth = header.width;
    await header.resize(500);
    let expectedHeaderWidth = header.width; // might not be exactly 500

    // sanity check
    assert.notEqual(initialHeaderWidth, expectedHeaderWidth, 'header width has changed');

    // substitute deeply equal, but non-identical columns
    let newColumns = data.columns.map(column => Object.assign({}, column));
    this.set('columns', newColumns);
    await rafFinished();

    // without `columnKeyPath`, header would snap back to default width
    assert.equal(header.width, expectedHeaderWidth, 'meta data is preserved');
  });
});
