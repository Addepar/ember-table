import hbs from 'htmlbars-inline-precompile';
import { A as emberA } from '@ember/array';
import waitForRender from 'dummy/tests/helpers/wait-for-render';
import ColumnDefinition from 'ember-table/models/column-definition';

export const DEFAULT_TABLE_OPTIONS = {
  numFixedColumns: 1,
  columnMode: 'standard',
  tableFillupMode: 'none'
};

export const DEFAULT_FULL_TABLE_COLUMN_OPTIONS = {
  isResizable: true,
  isReorderable: true
};

export const DEFAULT_ROW_COLUMN_COUNT = {
  rowCount: 20,
  columnCount: 10
};

export const DEFAULT_COLUMN_WIDTH = 180;

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
  const columnWidth = DEFAULT_COLUMN_WIDTH;

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
    {{#ember-table
      columns=tableColumns
      rows=tableRows
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
      columns=tableColumns
      rows=tableRows
      numFixedColumns=numFixedColumns
      columnMode=columnMode
      tableFillupMode=tableFillupMode

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
    tableOptions = DEFAULT_TABLE_OPTIONS,
    columnOptions = DEFAULT_FULL_TABLE_COLUMN_OPTIONS,
    rowColumnCount = DEFAULT_ROW_COLUMN_COUNT,
    rowComponent = 'ember-table-row'
  ) {
  for (const property in tableOptions) {
    if (tableOptions.hasOwnProperty(property)) {
      testContext.set(property, tableOptions[property]);
    }
  }

  const { rowCount, columnCount } = rowColumnCount;
  testContext.set('tableColumns', generateColumns(columnCount, columnOptions));
  testContext.set('tableRows', generateRows(rowCount, columnCount));
  testContext.set('rowComponent', rowComponent);
  testContext.render(fullTable);
  return waitForRender();
}
