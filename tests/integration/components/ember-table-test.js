import { moduleForComponent, test } from 'ember-qunit';
import {
  simpleTable,
  generateColumns,
  generateRows,
  setupFullTable,
  DEFAULT_ROW_COLUMN_COUNT,
  DEFAULT_COLUMN_WIDTH
} from '../../helpers/test-scenarios';
import waitForRender from 'dummy/tests/helpers/wait-for-render';
import {
  find,
  findAll,
  scrollTo
} from 'ember-native-dom-helpers';
import tableHelpers from '../../helpers/table-helper';

moduleForComponent('ember-table', 'Integration | Component | ember table', {
  integration: true
});

test('Ember table renders', async function(assert) {
  const rowCount = 20;
  const columnCount = 15;
  this.set('tableColumns', generateColumns(columnCount));
  this.set('tableRows', generateRows(rowCount, columnCount));

  this.render(simpleTable);

  await waitForRender();
  await scrollTo(find('[data-test-body-container]'), 0, 600);

  // Check column header count
  assert.equal(findAll('thead tr th').length, columnCount, `Header has ${columnCount} columns`);
  const bodyRows = find('tbody').getElementsByTagName('tr');
  const lastRowName = bodyRows[bodyRows.length - 1].getElementsByTagName('td')[0].innerText.trim();
  // Check last row does appear
  assert.equal(lastRowName, `Row ${rowCount - 1}`, 'Last row name is correct');
});

// Tests with or without custom header.
const customHeaderTests = [null, 'custom-header'];
for (const customHeader of customHeaderTests) {
  const headerTest = customHeader ? 'custom header ' : '';

  // Test resizing column
  test(`Test ${headerTest}resizing column`, async function(assert) {
    await setupFullTable(this, {}, { headerComponent: customHeader });

    let originalWidth = tableHelpers.getHeaderElement(2).offsetWidth;
    await tableHelpers.resizeColumn(2, 30);

    assert.equal(tableHelpers.getHeaderElement(2).offsetWidth - originalWidth, 30, 'Column size is updated');

    // Fixed column can also be resized
    originalWidth = tableHelpers.getHeaderElement(1).offsetWidth;
    await tableHelpers.resizeColumn(1, 30);

    assert.equal(tableHelpers.getHeaderElement(1).offsetWidth - originalWidth, 30, 'Fixed column size is updated');
  });

  // Test resizing fluid column
  test(`Test ${headerTest}resizing fluid column`, async function(assert) {
    await setupFullTable(this, { headerComponent: customHeader, columnMode: 'fluid' });

    const originalWidth = tableHelpers.getHeaderElement(2).offsetWidth;
    await tableHelpers.resizeColumn(2, 30);

    assert.equal(tableHelpers.getHeaderElement(2).offsetWidth - originalWidth, 30, 'Column size is updated');
    assert.equal(
      tableHelpers.getHeaderElement(3).offsetWidth - originalWidth,
      -30,
      'Next column shrinks in fluid mode'
    );
  });

  // Reodering columns with fixed column
  test(`Test ${headerTest}reordering columns with fixed column`, async function(assert) {
    await setupFullTable(this);

    // Case 1: Try to swap column A with fixed column. The table should prevent that action.
    await tableHelpers.moveTableColumn(2, -1);

    assert.equal(tableHelpers.getHeaderElement(2).innerText.trim(), 'Col A', 'Second column does not change');
    assert.equal(tableHelpers.getHeaderElement(1).innerText.trim(), 'Column id', 'First column does not change');

    // Case 2: Move column A -> B
    await tableHelpers.moveTableColumn(2, 1);

    assert.equal(
      find(tableHelpers.getHeaderElement(2)).innerText.trim(),
      'Col B',
      'Second column is swapped'
    );
    assert.equal(
      find('.et-thead tr th:nth-child(3)').innerText.trim(),
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

    // With table without fixed column, you can swap first column.
    await tableHelpers.moveTableColumn(2, -1);

    assert.equal(
      tableHelpers.getHeaderElement(2).innerText.trim(),
      'Column id',
      'Second column is swapped'
    );
    assert.equal(
      tableHelpers.getHeaderElement(1).innerText.trim(),
      'Col A',
      'First column is swapped'
    );
  });

  test(`Test ${headerTest}column resize - equal column mode`, async function(assert) {
    await setupFullTable(this, { tableResizeMode: 'equal_column' }, { headerComponent: customHeader });

    const headerCount = findAll('.et-thead tr th').length;
    const expectedWidth = find('.et-thead tr').offsetWidth / headerCount;
    for (let i = 1; i <= headerCount; i++) {
      assert.ok(
        Math.abs(tableHelpers.getHeaderElement(i).offsetWidth - expectedWidth) <= 1,
        'Table header have same width in equal resize mode.'
      );
    }
  });

  test(`Test ${headerTest}column resize - none mode`, async function(assert) {
    await setupFullTable(this, { tableResizeMode: 'none' }, { headerComponent: customHeader });

    const headerCount = findAll('.et-thead tr th').length;
    for (let i = 1; i <= headerCount; i++) {
      assert.equal(
        tableHelpers.getHeaderElement(i).offsetWidth,
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

    const headerCount = findAll('.et-thead tr th').length;
    const tableWidth = find('.et-thead').offsetWidth;
    const firstColumnWidth = tableHelpers.getHeaderElement(1).offsetWidth;

    assert.ok(
      Math.abs(tableWidth - firstColumnWidth - DEFAULT_COLUMN_WIDTH * (headerCount - 1)) <= 1,
      'First column takes extra space in first column resize mode.'
    );
    for (let i = 2; i <= headerCount; i++) {
      assert.equal(
        tableHelpers.getHeaderElement(i).offsetWidth,
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

    const headerCount = findAll('.et-thead tr th').length;
    const tableWidth = find('.et-thead').offsetWidth;
    const lastColumnWidth = tableHelpers.getHeaderElement(headerCount).offsetWidth;

    assert.ok(
      Math.abs(tableWidth - lastColumnWidth - DEFAULT_COLUMN_WIDTH * (headerCount - 1)) <= 1,
      'Last column takes extra space in last column resize mode.'
    );
    for (let i = 1; i < headerCount; i++) {
      assert.equal(
        tableHelpers.getHeaderElement(i).offsetWidth,
        DEFAULT_COLUMN_WIDTH,
        'Other columns keep same width in last column resize mode.'
      );
    }
  });
}

test('Test custom row', async function(assert) {
  await setupFullTable(this, {}, {}, DEFAULT_ROW_COLUMN_COUNT, 'custom-row');
  assert.ok(find('tbody tr').className.indexOf('custom-row') >= 0, 'Table has custom row');
});
