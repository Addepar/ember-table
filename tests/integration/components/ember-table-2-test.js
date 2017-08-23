import { moduleForComponent, test } from 'ember-qunit';
import {
  fullTable,
  simpleTable,
  generateColumns,
  generateRows
} from '../../helpers/test-scenarios';
import {
  pressElement,
  moveMouse
} from '../../helpers/drag-helper';

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
  const lastRowName = bodyRows[bodyRows.length - 1].getElementsByTagName('td')[0].innerHTML.trim();
  // Check last row does appear
  assert.equal(lastRowName, `Row ${rowCount - 1}`, 'Last row name is correct');
});

test('Test resizing column', async function(assert) {
  const rowCount = 20;
  const columnCount = 56;
  this.set('tableColumns', generateColumns(columnCount));
  this.set('tableRows', generateRows(rowCount, columnCount));

  this.render(fullTable);

  await waitForRender();

  let header = find('.et2-thead tr th:nth-child(2)');
  const originalWidth = header.offsetWidth;
  const box = header.getBoundingClientRect();
  const deltaX = 30;
  const startX = box.right - 5;
  await pressElement(header, startX, header.clientHeight / 2);
  await moveMouse(header, startX + deltaX / 2, header.clientHeight / 2);
  await moveMouse(header, startX + deltaX, header.clientHeight / 2);

  assert.equal(header.offsetWidth - originalWidth, 30, 'Column size is updated');

  // Fixed column can also be resized
  header = find('.et2-thead tr th:nth-child(1)');
  await pressElement(header, startX, header.clientHeight / 2);
  await moveMouse(header, startX + deltaX / 2, header.clientHeight / 2);
  await moveMouse(header, startX + deltaX, header.clientHeight / 2);

  assert.equal(header.offsetWidth - originalWidth, 30, 'Column size is updated');
});

