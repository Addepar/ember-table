import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';
import {
  simpleTable,
  generateColumns,
  generateRows,
  setupFullTable,
  DEFAULT_FULL_TABLE_COLUMN_OPTIONS
} from '../../helpers/test-scenarios';
import waitForRender from 'dummy/tests/helpers/wait-for-render';
import {
  find,
  findAll,
  scrollTo
} from 'ember-native-dom-helpers';
import tableHelpers from '../../helpers/table-helper';

const {
  merge
} = Ember;

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
const customHeaderTests = [null, 'custom-text-header'];
for (const customHeader of customHeaderTests) {
  const headerTest = customHeader ? 'custom header ' : '';

  // Test resizing column
  test(`Test ${headerTest}resizing column`, async function(assert) {
    const tableOptions = { headerComponent: customHeader };
    await setupFullTable(this, merge(tableOptions, DEFAULT_FULL_TABLE_COLUMN_OPTIONS));

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
    const tableOptions = { headerComponent: customHeader, columnMode: 'fluid' };
    await setupFullTable(this, merge(tableOptions, DEFAULT_FULL_TABLE_COLUMN_OPTIONS));

    const originalWidth = tableHelpers.getHeaderElement(2).offsetWidth;
    await tableHelpers.resizeColumn(2, 30);

    assert.equal(tableHelpers.getHeaderElement(2).offsetWidth - originalWidth, 30, 'Column size is updated');
    assert.equal(tableHelpers.getHeaderElement(3).offsetWidth - originalWidth, -30,
        'Next column shrinks in fluid mode');
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

    assert.equal(find(tableHelpers.getHeaderElement(2)).innerText.trim(), 'Col B',
      'Second column is swapped');
    assert.equal(find('.et-thead tr th:nth-child(3)').innerText.trim(), 'Col A',
      'Third column is swapped');
  });

  // Reodering columns without fixed column
  test(`Test ${headerTest}reordering columns without fixed column`, async function(assert) {
    await setupFullTable(this, {}, {
      isReorderable: true,
      headerComponent: customHeader
    });

    // With table without fixed column, you can swap first column.
    await tableHelpers.moveTableColumn(2, -1);

    assert.equal(tableHelpers.getHeaderElement(2).innerText.trim(),
      customHeader ? 'Custom header Column id' : 'Column id',
      'Second column does not change');
    assert.equal(tableHelpers.getHeaderElement(1).innerText.trim(),
      customHeader ? 'Custom header Col A' : 'Col A',
      'First column does not change');
  });

  test(`Test ${headerTest}column fill up - proportional mode`, async function(assert) {
    await setupFullTable(this, { columnsFillupMode: 'proportional' }, { headerComponent: customHeader });

    for (let i = 1; i <= 10; i++) {
      assert.ok(Math.abs(tableHelpers.getHeaderElement(i).offsetWidth - 128) <= 2,
        'Table header have same width in proportional fill up mode.');
    }
  });

  test(`Test ${headerTest}column fill up - none mode`, async function(assert) {
    await setupFullTable(this, {}, { headerComponent: customHeader });

    for (let i = 1; i <= 10; i++) {
      assert.equal(tableHelpers.getHeaderElement(i).offsetWidth, 180,
        'Table header have same width in proportional fill up mode.');
    }
  });
}

test('Test custom row', async function(assert) {
  await setupFullTable(this, {}, {}, 'custom-row');
  assert.ok(find('tbody tr').className.indexOf('custom-row') >= 0, 'Table has custom row');
});
