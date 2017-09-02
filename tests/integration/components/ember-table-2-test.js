import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';
import {
  simpleTable,
  generateColumns,
  generateRows,
  setupFullTable,
  moveTableColumn,
  getHeaderElement,
  resizeColumn,
  DEFAULT_FULL_TABLE_COLUMN_OPTIONS
} from '../../helpers/test-scenarios';
import waitForRender from 'dummy/tests/helpers/wait-for-render';
import {
  find,
  findAll,
  scrollTo
} from 'ember-native-dom-helpers';

const {
  merge
} = Ember;

moduleForComponent('ember-table-2', 'Integration | Component | ember table 2', {
  integration: true
});

test('Ember table renders', async function(assert) {
  const rowCount = 20;
  const columnCount = 15;
  this.set('tableColumns', generateColumns(columnCount));
  this.set('tableRows', generateRows(rowCount, columnCount));

  this.render(simpleTable);

  await waitForRender();
  await scrollTo('.et2-body-outer-wrapper', 0, 600);

  // Check column header count
  assert.equal(findAll('thead tr th').length, columnCount, `Header has ${columnCount} columns`);
  const bodyRows = find('tbody').getElementsByTagName('tr');
  const lastRowName = bodyRows[bodyRows.length - 1].getElementsByTagName('td')[0].innerText.trim();
  // Check last row does appear
  assert.equal(lastRowName, `Row ${rowCount - 1}`, 'Last row name is correct');
});

// Tests with or without custom header.
const customHeaderTests = [null, 'custom-text-header'];
for (const customHeader of customHeaderTests) {
  const headerTest = customHeader ? 'custom header ' : '';

  // Test resizing column
  test(`Test ${headerTest}resizing column`, async function(assert) {
    const tableOptions = { headerComponent: customHeader };
    setupFullTable(this, merge(tableOptions, DEFAULT_FULL_TABLE_COLUMN_OPTIONS));

    let originalWidth = getHeaderElement(2).offsetWidth;
    await resizeColumn(2, 30);

    assert.equal(getHeaderElement(2).offsetWidth - originalWidth, 30, 'Column size is updated');

    // Fixed column can also be resized
    originalWidth = getHeaderElement(1).offsetWidth;
    await resizeColumn(1, 30);

    assert.equal(getHeaderElement(1).offsetWidth - originalWidth, 30, 'Fixed column size is updated');
  });

  // Test resizing fluid column
  test(`Test ${headerTest}resizing fluid column`, async function(assert) {
    const tableOptions = { headerComponent: customHeader, columnMode: 'fluid' };
    setupFullTable(this, merge(tableOptions, DEFAULT_FULL_TABLE_COLUMN_OPTIONS));

    let originalWidth = getHeaderElement(2).offsetWidth;
    await resizeColumn(2, 30);

    assert.equal(getHeaderElement(2).offsetWidth - originalWidth, 30, 'Column size is updated');
    assert.equal(getHeaderElement(3).offsetWidth - originalWidth, -30,
        'Next column shrinks in fluid mode');
  });

  // Reodering columns with fixed column
  test(`Test ${headerTest}reordering columns with fixed column`, async function(assert) {
    setupFullTable(this);

    // Case 1: Try to swap column A with fixed column. The table should prevent that action.
    await moveTableColumn(2, -1);

    assert.equal(getHeaderElement(2).innerText.trim(), 'Col A', 'Second column does not change');
    assert.equal(getHeaderElement(1).innerText.trim(), 'Column id', 'First column does not change');

    // Case 2: Move column A -> B
    await moveTableColumn(2, 1);

    assert.equal(find(getHeaderElement(2)).innerText.trim(), 'Col B',
      'Second column is swapped');
    assert.equal(find('.et2-thead tr th:nth-child(3)').innerText.trim(), 'Col A',
      'Third column is swapped');
  });

  // Reodering columns without fixed column
  test(`Test ${headerTest}reordering columns without fixed column`, async function(assert) {
    setupFullTable(this, {}, {
      isReorderable: true,
      headerComponent: customHeader
    });

    // With table without fixed column, you can swap first column.
    await moveTableColumn(2, -1);

    assert.equal(getHeaderElement(2).innerText.trim(),
      customHeader ? 'Custom header Column id' : 'Column id',
      'Second column does not change');
    assert.equal(getHeaderElement(1).innerText.trim(),
      customHeader ? 'Custom header Col A' : 'Col A',
      'First column does not change');
  });
}

test('Test custom row', async function(assert) {
  setupFullTable(this, {
    rowComponent: 'custom-row'
  });

  // TODO(Billy): Because of the slow table rendering, we need to scroll a bit for the table to
  // be fully rendered. Remove this scroll when table rendering issue is fixed.
  await scrollTo('.et2-body-outer-wrapper', 0, 10);

  assert.ok(find('tbody tr').className.indexOf('custom-row') >= 0, 'Table has custom row');
});
