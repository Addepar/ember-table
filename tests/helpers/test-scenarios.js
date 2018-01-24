import hbs from 'htmlbars-inline-precompile';
import { A as emberA } from '@ember/array';
import wait from 'ember-test-helpers/wait';
import { isNone } from '@ember/utils';

export const DEFAULT_TABLE_OPTIONS = {
  numFixedColumns: 1,
  columnMode: 'standard',
  tableResizeMode: 'none',
  estimateRowHeight: 20
};

export const DEFAULT_ROW_COLUMN_COUNT = {
  rowCount: 20,
  columnCount: 10
};

export const DEFAULT_COLUMN_WIDTH = 180;

export function generateRows(rowCount, columnCount) {
  let arr = emberA();
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < rowCount; i++) {
    let row = {
      'id': `Row ${i}`
    };
    for (let j = 0; j < columnCount - 1; j++) {
      row[alphabet[j % 26]] = alphabet[j % 26];
    }
    arr.pushObject(row);
  }

  return arr;
}

export function generateColumns(columnCount, columnOptions) {
  let arr = emberA();
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let columnWidth = DEFAULT_COLUMN_WIDTH;

  arr.pushObject({
    columnName: 'Column id',
    valuePath: 'id',
    width: columnWidth,
    isResizable: true
  });

  for (let j = 0; j < columnCount - 1; j++) {
    let columnDefinition = {
      columnName: `Col ${alphabet[j % 26]}`,
      valuePath: alphabet[j % 26],
      width: columnWidth,
      isResizable: true,
      isReorderable: true
    };

    arr.pushObject(columnDefinition);
  }

  for (let columnDefinition of arr) {
    for (let property in columnOptions) {
      if (columnOptions.hasOwnProperty(property)) {
        columnDefinition[property] = columnOptions[property];
      }
    }
  }

  return arr;
}

export const simpleTable = hbs`
  <div style="height: 500px;">
    {{#ember-table
      columns=columns
      rows=rows
      estimateRowHeight=13
      as |r|
    }}

      {{#ember-table-row
        row=r

        as |cell|
      }}
        {{cell.value}}
      {{/ember-table-row}}
    {{/ember-table}}
  </div>
`;

// Table with fixed column, column resizing, column grouping enabled
export const fullTable = hbs`
  <div style="height: 500px;">
    {{#ember-table
      columns=columns
      rows=rows
      numFixedColumns=numFixedColumns
      columnMode=columnMode
      tableResizeMode=tableResizeMode
      staticHeight=staticHeight
      estimateRowHeight=estimateRowHeight
      footerRows=footerRows
      as |r|
    }}

      {{#component rowComponent
        row=r

        as |cell|
      }}
        {{cell.value}}
      {{/component}}
    {{/ember-table}}
  </div>
`;

export function setupFullTable(
  testContext,
  tableOptions = {},
  columnOptions = {},
  rowColumnCount = DEFAULT_ROW_COLUMN_COUNT,
  rowComponent = 'ember-table-row'
) {

  for (let property in DEFAULT_TABLE_OPTIONS) {
    if (DEFAULT_TABLE_OPTIONS.hasOwnProperty(property)) {
      testContext.set(property, DEFAULT_TABLE_OPTIONS[property]);
    }
  }

  for (let property in tableOptions) {
    if (tableOptions.hasOwnProperty(property)) {
      testContext.set(property, tableOptions[property]);
    }
  }

  let { rowCount, columnCount } = rowColumnCount;
  if (isNone(tableOptions.columns)) {
    testContext.set('columns', generateColumns(columnCount, columnOptions));
  }
  if (isNone(tableOptions.rows)) {
    testContext.set('rows', generateRows(rowCount, columnCount));
  }

  testContext.set('rowComponent', rowComponent);
  testContext.render(fullTable);
  return wait();
}
