import hbs from 'htmlbars-inline-precompile';
import { A as emberA } from '@ember/array';
import waitForRender from 'dummy/tests/helpers/wait-for-render';
import ColumnDefinition from 'ember-table-2/models/column-definition';

import {
  find
} from 'ember-native-dom-helpers';
import {
  pressElement,
  moveMouse,
  releasePress
} from './drag-helper';

export const DEFAULT_TABLE_OPTIONS = {
  numFixedColumns: 1,
  columnMode: 'standard'
};

export const DEFAULT_FULL_TABLE_COLUMN_OPTIONS = {
  isResizable: true,
  isReorderable: true
};

export function generateRows(rowCount, columnCount) {
  const arr = emberA();
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < rowCount; i++) {
    const row = ColumnDefinition.create({
      'id': `Row ${i}`
    });
    for (let j = 0; j < columnCount - 1; j++) {
      row.set(alphabet[j % 26], alphabet[j % 26]);
    }
    arr.pushObject(row);
  }

  return arr;
}

export function generateColumns(columnCount, columnOptions) {
  const arr = emberA();
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const columnWidth = 180;

  arr.pushObject(ColumnDefinition.create({
    columnName: 'Column id',
    valuePath: 'id',
    width: columnWidth
  }));

  for (let j = 0; j < columnCount - 1; j++) {
    const columnDefinition = ColumnDefinition.create({
      columnName: `Col ${alphabet[j % 26]}`,
      valuePath: alphabet[j % 26],
      width: columnWidth
    });

    arr.pushObject(columnDefinition);
  }

  for (const columnDefinition of arr) {
    for (const property in columnOptions) {
      if (columnOptions.hasOwnProperty(property)) {
        columnDefinition.set(property, columnOptions[property]);
      }
    }
  }

  return arr;
}

export const simpleTable = hbs`
  <div style="height: 500px;">
    {{#ember-table-2
      columns=tableColumns
      rows=tableRows
      as |cell|
    }}
      {{cell.value}}
    {{/ember-table-2}}
  </div>
`;

// Table with fixed column, column resizing, column grouping enabled
export const fullTable = hbs`
  <div style="height: 500px;">
    {{#ember-table-2
      columns=tableColumns
      rows=tableRows
      rowComponent=rowComponent
      numFixedColumns=numFixedColumns
      columnMode=columnMode
      as |cell|
    }}
      {{cell.value}}
    {{/ember-table-2}}
  </div>
`;

export async function setupFullTable(testContext, tableOptions = DEFAULT_TABLE_OPTIONS,
  columnOptions = DEFAULT_FULL_TABLE_COLUMN_OPTIONS) {
  const rowCount = 20;
  const columnCount = 10;

  for (const property in tableOptions) {
    if (tableOptions.hasOwnProperty(property)) {
      testContext.set(property, tableOptions[property]);
    }
  }

  testContext.set('tableColumns', generateColumns(columnCount, columnOptions));
  testContext.set('tableRows', generateRows(rowCount, columnCount));
  testContext.render(fullTable);
  await waitForRender();
}

export async function moveTableColumn(columnIndex, deltaPosition) {
  const header = find(`.et2-thead tr th:nth-child(${columnIndex})`);
  const box = header.getBoundingClientRect();
  const width = header.offsetLeft;
  const startX = (box.right + box.left) / 2;
  const deltaX = deltaPosition * width;

  await pressElement(header, startX, header.clientHeight / 2);
  await moveMouse(header, startX + deltaX / 2, header.clientHeight / 2);
  await moveMouse(header, startX + deltaX, header.clientHeight / 2);
  await releasePress(header, startX + deltaX, header.clientHeight / 2);
}

export async function resizeColumn(columnIndex, deltaX) {
  const header = getHeaderElement(columnIndex);
  const box = header.getBoundingClientRect();
  const startX = box.right - 5;
  await pressElement(header, startX, header.clientHeight / 2);
  await moveMouse(header, startX + deltaX / 2, header.clientHeight / 2);
  await moveMouse(header, startX + deltaX, header.clientHeight / 2);
}

export function getHeaderElement(headerIndex) {
  return find(`.et2-thead tr th:nth-child(${headerIndex})`);
}
