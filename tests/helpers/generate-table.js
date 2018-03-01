import hbs from 'htmlbars-inline-precompile';
import { A as emberA } from '@ember/array';
import wait from 'ember-test-helpers/wait';
import { toBase26 } from './base-26';

const fullTable = hbs`
  <div style="height: 500px;">
    {{#ember-table
      columns=columns
      rows=rows
      footerRows=footerRows
      selectedRows=selectedRows

      columnMode=columnMode
      selectionMode=selectionMode
      estimateRowHeight=estimateRowHeight
      numFixedColumns=numFixedColumns
      staticHeight=staticHeight
      tableResizeMode=tableResizeMode

      onSelect="onSelect"
      onFooterEvent="onFooterEvent"
      onColumnReordered="onColumnReordered"
      onColumnResized="onColumnResized"

      as |row|
    }}

      {{#component rowComponent
        row=row

        as |cell|
      }}
        {{cell.value}}
      {{/component}}
    {{/ember-table}}
  </div>
`;

export function generateRows(rowCount, columnCount, prefix = '') {
  let arr = [];

  for (let i = 0; i < rowCount; i++) {
    let row = { 'id': `Row ${i}` };

    for (let j = 0; j < columnCount; j++) {
      row[toBase26(j)] = `${prefix}${i}${toBase26(j)}`;
    }

    arr.push(row);
  }

  return emberA(arr);
}

export function generateColumns(columnCount, {
  subcolumnCount = 0,
  columnOffset = 0,

  ...columnOptions
} = {}) {
  let arr = [];

  for (let i = 0; i < columnCount; i++) {
    let columnDefinition = {
      columnName: toBase26(i),
      valuePath: toBase26(columnOffset + i),
      width: 100,
      isResizable: true,
      isReorderable: true
    };

    for (let property in columnOptions) {
      columnDefinition[property] = columnOptions[property];
    }

    if (subcolumnCount) {
      columnDefinition.subcolumns = generateColumns(subcolumnCount, {
        columnOffset: i,
        ...columnOptions
      });
    }

    arr.push(columnDefinition);
  }

  return emberA(arr);
}

const defaultActions = {
  onSelect(newRows) {
    this.set('selectedRows', newRows);
  },

  onColumnReordered() {},

  onColumnResized() {}
};

export default async function generateTable(testContext, {
  rows,
  footerRows,
  columns,
  rowCount = 10,
  footerRowCount = 0,
  columnCount = 10,
  columnOptions,
  hasCheckbox = false,

  rowComponent = 'ember-table-row',

  ...options
} = {}) {
  for (let property in options) {
    testContext.set(property, options[property]);
  }

  testContext.set('rowComponent', rowComponent);

  columns = columns || generateColumns(columnCount, columnOptions);

  // Total column length is columns + subcolumns
  let totalColumns = columns.length + columns.reduce((v, c) => {
    return c.subcolumns ? v + c.subcolumns.length : v;
  }, 0);

  rows = rows || generateRows(rowCount, totalColumns);
  footerRows = footerRows || generateRows(footerRowCount, totalColumns);

  // Set the checkbox value if it exists
  columns[0].hasCheckbox = hasCheckbox;

  testContext.set('columns', columns);
  testContext.set('rows', rows);
  testContext.set('footerRows', footerRows);

  for (let action in defaultActions) {
    let actions = testContext.actions || testContext._actions;

    if (actions && !actions[action]) {
      testContext.on(action, defaultActions[action].bind(testContext));
    }
  }

  testContext.render(fullTable);

  await wait();
}
