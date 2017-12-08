import { moduleForComponent, test } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';
import { get, set } from '@ember/object';
import { A as emberA } from '@ember/array';

import {
  simpleTable,
  generateColumns,
  generateRows,
  setupFullTable,
  DEFAULT_ROW_COLUMN_COUNT,
  DEFAULT_COLUMN_WIDTH
} from '../../helpers/test-scenarios';

import {
  find,
  findAll,
  scrollTo
} from 'ember-native-dom-helpers';

import TablePage from 'ember-table/test-support/pages/ember-table-page';
import { collection, hasClass } from 'ember-classy-page-object';

moduleForComponent('ember-table', 'Integration | Component | ember table', {
  integration: true
});

test('Ember table renders', async function(assert) {
  let rowCount = 20;
  let columnCount = 15;
  this.set('columns', generateColumns(columnCount));
  this.set('rows', generateRows(rowCount, columnCount));

  this.render(simpleTable);

  await wait();
  await scrollTo(find('[data-test-body-container]'), 0, 600);

  // Check column header count
  assert.equal(findAll('thead tr th').length, columnCount, `Header has ${columnCount} columns`);
  let bodyRows = find('tbody').getElementsByTagName('tr');
  let lastRowName = bodyRows[bodyRows.length - 1].getElementsByTagName('td')[0].innerText.trim();
  // Check last row does appear
  assert.equal(lastRowName, `Row ${rowCount - 1}`, 'Last row name is correct');
});

// Tests with or without custom header.
let customHeaderTests = [null, 'custom-header'];
for (let customHeader of customHeaderTests) {
  let headerTest = customHeader ? 'custom header ' : '';

  // Test resizing column
  test(`Test ${headerTest}resizing column`, async function(assert) {
    await setupFullTable(this, {}, { headerComponent: customHeader });

    let tablePage = TablePage.create();

    let originalWidth = tablePage.header.columns.eq(1).width;
    await tablePage.header.columns.eq(1).resize(30);
    assert.equal(tablePage.header.columns.eq(1).width - originalWidth, 30, 'Column size is updated');

    // Fixed column can also be resized
    originalWidth = tablePage.header.columns.eq(0).width;
    await tablePage.header.columns.eq(0).resize(30);
    assert.equal(
      tablePage.header.columns.eq(0).width - originalWidth,
      30,
      'Fixed column size is updated'
    );
  });

  // Test resizing fluid column
  test(`Test ${headerTest}resizing fluid column`, async function(assert) {
    await setupFullTable(this, { headerComponent: customHeader, columnMode: 'fluid' });

    let tablePage = TablePage.create();

    let originalWidth = tablePage.header.columns.eq(1).width;
    await tablePage.header.columns.eq(1).resize(30);

    assert.equal(tablePage.header.columns.eq(1).width - originalWidth, 30, 'Column size is updated');
    assert.equal(
      tablePage.header.columns.eq(2).width - originalWidth,
      -30,
      'Next column shrinks in fluid mode'
    );
  });

  // Reodering columns with fixed column
  test(`Test ${headerTest}reordering columns with fixed column`, async function(assert) {
    await setupFullTable(this);

    let tablePage = TablePage.create();

    // Case 1: Try to swap column A with fixed column. The table should prevent that action.
    await tablePage.header.columns.eq(1).move(-1);

    assert.equal(
      tablePage.header.columns.eq(1).text.trim(),
      'Col A',
      'Second column does not change'
    );
    assert.equal(
      tablePage.header.columns.eq(0).text.trim(),
      'Column id',
      'First column does not change'
    );

    // Case 2: Move column A -> B
    await tablePage.header.columns.eq(1).move(1);
    assert.equal(
      tablePage.header.columns.eq(1).text.trim(),
      'Col B',
      'Second column is swapped'
    );
    assert.equal(
      tablePage.header.columns.eq(2).text.trim(),
      'Col A',
      'Third column is swapped'
    );
  });

  // Reodering columns without fixed column
  test(`Test ${headerTest}reordering columns without fixed column`, async function(assert) {
    await setupFullTable(this, { numFixedColumns: 0 }, {
      isReorderable: true,
      headerComponent: customHeader
    });

    let tablePage = TablePage.create();

    // With table without fixed column, you can swap first column.
    await tablePage.header.columns.eq(1).move(-1);
    assert.equal(
      tablePage.header.columns.eq(1).text.trim(),
      'Column id',
      'Second column is swapped'
    );
    assert.equal(tablePage.header.columns.eq(0).text.trim(), 'Col A', 'First column is swapped');
  });

  test(`Test ${headerTest}column resize - equal column mode`, async function(assert) {
    await setupFullTable(this, { tableResizeMode: 'equal_column' }, { headerComponent: customHeader });

    let tablePage = TablePage.create();

    let headerCount = tablePage.header.columnCount;
    let expectedWidth = tablePage.header.width / headerCount;
    for (let i = 0; i < headerCount; i++) {
      assert.ok(
        Math.abs(tablePage.header.columns.eq(i).width - expectedWidth) <= 1,
        'Table header have same width in equal resize mode.'
      );
    }
  });

  test(`Test ${headerTest}column resize - none mode`, async function(assert) {
    await setupFullTable(this, { tableResizeMode: 'none' }, { headerComponent: customHeader });

    let tablePage = TablePage.create();

    let headerCount = tablePage.header.columnCount;
    for (let i = 0; i < headerCount; i++) {
      assert.equal(
        tablePage.header.columns.eq(i).width,
        DEFAULT_COLUMN_WIDTH,
        'Table header keeps origial width in none resize mode.'
      );
    }
  });

  test(`Test ${headerTest}column resize - first column mode`, async function(assert) {
    await setupFullTable(
      this,
      { tableResizeMode: 'first_column' },
      { headerComponent: customHeader },
      { rowCount: 20, columnCount: 3 }
    );

    let tablePage = TablePage.create();

    let headerCount = tablePage.header.columnCount;
    let tableWidth = tablePage.header.width;
    let firstColumnWidth = tablePage.header.columns.eq(0).width;

    assert.ok(
      Math.abs(tableWidth - firstColumnWidth - DEFAULT_COLUMN_WIDTH * (headerCount - 1)) <= 1,
      'First column takes extra space in first column resize mode.'
    );
    for (let i = 1; i < headerCount; i++) {
      assert.equal(
        tablePage.header.columns.eq(i).width,
        DEFAULT_COLUMN_WIDTH,
        'Other columns keep same width in first column resize mode.'
      );
    }
  });

  test(`Test ${headerTest}column resize - last column mode`, async function(assert) {
    await setupFullTable(
      this,
      { tableResizeMode: 'last_column' },
      { headerComponent: customHeader },
      { rowCount: 20, columnCount: 3 }
    );

    let tablePage = TablePage.create();

    let headerCount = tablePage.header.columnCount;
    let tableWidth = tablePage.header.width;
    let lastColumnWidth = tablePage.header.columns.eq(headerCount - 1).width;

    assert.ok(
      Math.abs(tableWidth - lastColumnWidth - DEFAULT_COLUMN_WIDTH * (headerCount - 1)) <= 1,
      'Last column takes extra space in last column resize mode.'
    );
    for (let i = 0; i < headerCount - 1; i++) {
      assert.equal(
        tablePage.header.columns.eq(i).width,
        DEFAULT_COLUMN_WIDTH,
        'Other columns keep same width in last column resize mode.'
      );
    }
  });
}

test('Test custom row', async function(assert) {
  await setupFullTable(this, {}, {}, DEFAULT_ROW_COLUMN_COUNT, 'custom-row');

  let tablePage = TablePage.extend({
    body: {
      rows: collection({
        isCustomRow: hasClass('custom-row')
      })
    }
  }).create();

  assert.ok(tablePage.body.rows.eq(0).isCustomRow, 'Table has custom row');
});

test('Custom row height', async function(assert) {
  await setupFullTable(this, { staticHeight: true, estimateRowHeight: 100 }, {});

  let tablePage = TablePage.create();

  assert.equal(tablePage.body.rows.eq(0).height, 100, 'Row height is set to custom height.');
});

test('Table with subcolumns', async function(assert) {
  let columnCount = 10;
  let columns = generateColumns(columnCount);
  // Add subcolumns

  for (let i = 0; i < columns.length; i++) {
    let column = columns[i];
    set(column, 'columnName', `Group ${i}`);
    let subcolumns = emberA();

    subcolumns.pushObject({
      columnName: 'Col 1',
      valuePath: get(column, 'valuePath')
    });
    subcolumns.pushObject({
      columnName: 'Col 2',
      valuePath: get(column, 'valuePath')
    });

    if (i > 0) {
      set(column, 'subcolumns', subcolumns);
    }
  }

  let rows = generateRows(30, columnCount * 2);
  await setupFullTable(this, { columns, rows });

  assert.equal(findAll('thead tr').length, 2, 'There are 2 rows in the header.');
  let firstRow = findAll('thead tr')[0];
  let children = firstRow.getElementsByTagName('th');
  for (let i = 0; i < children.length; i++) {
    assert.equal(children[i].textContent.trim(), `Group ${i}`, `Group ${i} name is correct`);
  }

  // Sub columns
  let secondRow = findAll('thead tr')[1];
  children = secondRow.getElementsByTagName('th');
  for (let i = 0; i < children.length; i++) {
    let expectColumnName = (i % 2 === 0) ? 'Col 1' : 'Col 2';
    assert.equal(children[i].textContent.trim(), expectColumnName, 'Subcolumn name is correct');
  }
});

test('Custom footer', async function(assert) {
  let columnCount = 10;
  let columns = generateColumns(columnCount);
  let footerRows = emberA();
  let row = {};
  for (let i = 0; i < columns.length; i++) {
    let column = columns[i];
    column.footerComponent = 'custom-footer';
    row[get(column, 'valuePath')] = `Footer ${i}`;
  }
  footerRows.pushObject(row);

  await setupFullTable(this, { columns, footerRows });

  assert.equal(findAll('table tfoot').length, 1, 'Footer is present in the table');
  let footer = find('table tfoot tr');
  let children = footer.getElementsByTagName('td');
  for (let i = 0; i < children.length; i++) {
    assert.equal(
      children[i].getElementsByClassName('custom-footer').length,
      1,
      'Custom footer class is present.'
    );
  }
});
