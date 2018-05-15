import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import { generateColumns, generateRows } from 'dummy/utils/generators';

// reexport for use in tests
export { generateColumns, generateRows };

const fullTable = hbs`
  <div style="height: 500px;">
    {{#ember-table data-test-ember-table=true as |t|}}
      {{ember-thead
        api=t

        columns=columns
        resizeMode=resizeMode
        fillMode=fillMode
        enableResize=enableResize
        enableReorder=enableReorder
        widthConstraint=widthConstraint

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

  rows = rows || generateRows(rowCount, (row, key) => `${row.id}${key}`);
  footerRows = footerRows || generateRows(footerRowCount, (row, key) => `${row.id}${key}`);

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
