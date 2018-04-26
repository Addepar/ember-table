import hbs from 'htmlbars-inline-precompile';
import { A as emberA } from '@ember/array';
import wait from 'ember-test-helpers/wait';
import { toBase26 } from './base-26';

const fullTable = hbs`
  <div style="height: 500px;">
    {{#ember-table data-test-ember-table=true as |t|}}
      {{ember-thead
        api=t

        columns=columns
        resizeMode=resizeMode
        fillMode=fillMode
        hasFixedColumn=hasFixedColumn

        onReorder="onReorder"
        onResize="onResize"
      }}

      {{#ember-tbody
        api=t

        tree=tree
        rows=rows
        estimateRowHeight=estimateRowHeight
        staticHeight=staticHeight

        onSelect="onSelect"
        selectMode=selectMode
        selectedRows=selectedRows

        as |b|
      }}
        {{#component rowComponent
          api=b

          as |r|
        }}
          {{#ember-td api=r as |value|}}
            {{value}}
          {{/ember-td}}
        {{/component}}
      {{/ember-tbody}}

      {{#ember-tfoot
        api=t
        rows=footerRows

        as |f|
      }}
        {{#ember-tr api=f as |r|}}
          {{#ember-td api=r as |value|}}
            {{value}}
          {{/ember-td}}
        {{/ember-tr}}
      {{/ember-tfoot}}
    {{/ember-table}}
  </div>
`;

export function generateRows(rowCount, columnCount, prefix = '') {
  let arr = [];

  for (let i = 0; i < rowCount; i++) {
    let row = { id: `Row ${i}` };

    for (let j = 0; j < columnCount; j++) {
      row[toBase26(j)] = `${prefix}${i}${toBase26(j)}`;
    }

    arr.push(row);
  }

  return emberA(arr);
}

export function generateColumns(
  columnCount,
  {
    subcolumnCount = 0,
    columnOffset = 0,

    ...columnOptions
  } = {}
) {
  let arr = [];

  for (let i = 0; i < columnCount; i++) {
    let columnDefinition = {
      name: toBase26(i),
      valuePath: toBase26(columnOffset + i),
      width: 100,
      isResizable: true,
      isReorderable: true,
    };

    for (let property in columnOptions) {
      columnDefinition[property] = columnOptions[property];
    }

    if (subcolumnCount) {
      columnDefinition.subcolumns = generateColumns(subcolumnCount, {
        columnOffset: i,
        ...columnOptions,
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

  onReorder() {},

  onResize() {},
};

export default async function generateTable(
  testContext,
  {
    rows,
    footerRows,
    columns,
    rowCount = 10,
    footerRowCount = 0,
    columnCount = 10,
    columnOptions,
    hasCheckbox = false,
    useTree = false,

    rowComponent = 'ember-tr',

    ...options
  } = {}
) {
  for (let property in options) {
    testContext.set(property, options[property]);
  }

  testContext.set('rowComponent', rowComponent);

  columns = columns || generateColumns(columnCount, columnOptions);

  // Total column length is columns + subcolumns
  let totalColumns =
    columns.length +
    columns.reduce((v, c) => {
      return c.subcolumns ? v + c.subcolumns.length : v;
    }, 0);

  rows = rows || generateRows(rowCount, totalColumns);
  footerRows = footerRows || generateRows(footerRowCount, totalColumns);

  // Set the checkbox value if it exists
  columns[0].hasCheckbox = hasCheckbox;

  testContext.set('columns', columns);
  testContext.set(useTree ? 'tree' : 'rows', rows);
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
