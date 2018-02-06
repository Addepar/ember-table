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

export function generateRows(rowCount, columnCount) {
  let arr = [];

  for (let i = 0; i < rowCount; i++) {
    let row = { 'id': `Row ${i}` };

    for (let j = 0; j < columnCount; j++) {
      row[toBase26(j)] = `${i}${toBase26(j)}`;
    }

    arr.push(row);
  }

  return emberA(arr);
}

export function generateColumns(columnCount, columnOptions = {}) {
  let arr = [];

  for (let i = 0; i < columnCount; i++) {
    let columnDefinition = {
      columnName: toBase26(i),
      valuePath: toBase26(i),
      width: 100,
      isResizable: true,
      isReorderable: true
    };

    for (let property in columnOptions) {
      columnDefinition[property] = columnOptions[property];
    }

    arr.push(columnDefinition);
  }

  return emberA(arr);
}

function defaultOnSelect(newRows) {
  this.set('selectedRows', newRows);
}

export default async function generateTable(testContext, {
  columns,
  rows,
  rowCount = 10,
  columnCount = 10,
  hasCheckbox = false,

  rowComponent = 'ember-table-row',
  onSelect = defaultOnSelect,

  ...options
} = {}) {
  for (let property in options) {
    testContext.set(property, options[property]);
  }

  testContext.set('rowComponent', rowComponent);

  columns = columns || generateColumns(columnCount);
  rows = rows || generateRows(rowCount, columns.length);

  // Set the checkbox value if it exists
  columns[0].hasCheckbox = hasCheckbox;

  testContext.set('columns', columns);
  testContext.set('rows', rows);

  testContext.on('onSelect', onSelect.bind(testContext));

  testContext.render(fullTable);

  await wait();
}
