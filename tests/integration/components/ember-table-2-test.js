import { moduleForComponent, test } from 'ember-qunit';
import {
  simpleTable,
  generateColumns,
  generateRows,
  setupFullTable,
  setupCustomComponentTable,
  moveTableColumn,
  getHeaderElement,
  resizeColumn
} from '../../helpers/test-scenarios';
import waitForRender from 'dummy/tests/helpers/wait-for-render';
import {
  find,
  findAll,
  scrollTo
} from 'ember-native-dom-helpers';

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
  const lastRowName = bodyRows[bodyRows.length - 1].getElementsByTagName('td')[0].innerText;
  // Check last row does appear
  assert.equal(lastRowName, `Row ${rowCount - 1}`, 'Last row name is correct');
});

test('Test resizing column', async function(assert) {
  setupFullTable(this);

  let originalWidth = getHeaderElement(2).offsetWidth;
  await resizeColumn(2, 30);

  assert.equal(getHeaderElement(2).offsetWidth - originalWidth, 30, 'Column size is updated');

  // Fixed column can also be resized
  originalWidth = getHeaderElement(1).offsetWidth;
  await resizeColumn(1, 30);
  assert.equal(getHeaderElement(1).offsetWidth - originalWidth, 30, 'Column size is updated');
});

test('Test reodering columns', async function(assert) {
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

test('Test custom header', async function(assert) {
  setupCustomComponentTable(this, 'custom-text-header', 'custom-row');
  assert.equal(getHeaderElement(1).innerText.trim(), 'Custom header Column id',
    'Custom header is correct');

  // Veritfy that you can reorder custom header.
  await moveTableColumn(2, 1);

  assert.equal(getHeaderElement(2).innerText.trim(), 'Custom header Col B',
    'Custom column can be swapped');
});

test('Test custom row', async function(assert) {
  setupCustomComponentTable(this, null, 'custom-row');

  // TODO(Billy): Because of the slow table rendering, we need to scroll a bit for the table to
  // be fully rendered. Remove this scroll when table rendering issue is fixed.
  await scrollTo('.et2-body-outer-wrapper', 0, 10);

  assert.ok(find('tbody tr').className.indexOf('custom-row') >= 0, 'Table has custom row');
});
