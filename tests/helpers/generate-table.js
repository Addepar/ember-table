import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import {
  configureTableGeneration,
  generateColumns,
  generateRows,
  resetTableGenerationConfig,
} from 'dummy/utils/generators';

import { gte } from 'ember-compatibility-helpers';

// reexport for use in tests
export { configureTableGeneration, resetTableGenerationConfig, generateColumns, generateRows };

const fullTable = hbs`
  <div style="height: 500px;">
    {{#ember-table data-test-ember-table=true as |t|}}
      {{#ember-thead
        api=t

        columns=columns
        containerWidthAdjustment=containerWidthAdjustment
        sorts=sorts
        sortEmptyLast=sortEmptyLast
        resizeMode=resizeMode
        fillMode=fillMode
        enableResize=enableResize
        enableReorder=enableReorder
        widthConstraint=widthConstraint
        fillColumnIndex=fillColumnIndex


        onUpdateSorts=(action onUpdateSorts)
        onReorder=(action onReorder)
        onResize=(action onResize)

        as |h|
      }}
        {{#ember-tr api=h as |r|}}
          {{ember-th
            api=r

            onContextMenu=(action onHeaderCellContextMenu)
          }}
        {{/ember-tr}}
      {{/ember-thead}}

      {{#ember-tbody
        api=t

        rows=rows
        estimateRowHeight=estimateRowHeight
        staticHeight=staticHeight
        enableCollapse=enableCollapse
        enableTree=enableTree
        key=key
        bufferSize=bufferSize
        idForFirstItem=idForFirstItem


        onSelect=(action onSelect)
        selectingChildrenSelectsParent=selectingChildrenSelectsParent
        checkboxSelectionMode=checkboxSelectionMode
        rowSelectionMode=rowSelectionMode
        selection=selection

        as |b|
      }}
        {{#component rowComponent
          api=b

          onClick=(action onRowClick)
          onDoubleClick=(action onRowDoubleClick)

          as |r|
        }}
          {{#ember-td
            api=r

            onClick=(action onCellClick)
            onDoubleClick=(action onCellDoubleClick)

            as |value|
          }}
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

const fullTableOld = hbs`
  <div style="height: 500px;">
    {{#ember-table data-test-ember-table=true as |t|}}
      {{#ember-thead
        api=t

        columns=columns
        containerWidthAdjustment=containerWidthAdjustment
        sorts=sorts
        sortEmptyLast=sortEmptyLast
        resizeMode=resizeMode
        fillMode=fillMode
        enableResize=enableResize
        enableReorder=enableReorder
        widthConstraint=widthConstraint
        fillColumnIndex=fillColumnIndex


        onUpdateSorts="onUpdateSorts"
        onReorder="onReorder"
        onResize="onResize"

        as |h|
      }}
        {{#ember-tr api=h as |r|}}
          {{ember-th
            api=r

            onContextMenu="onHeaderCellContextMenu"
          }}
        {{/ember-tr}}
      {{/ember-thead}}

      {{#ember-tbody
        api=t

        rows=rows
        estimateRowHeight=estimateRowHeight
        staticHeight=staticHeight
        enableCollapse=enableCollapse
        enableTree=enableTree
        key=key
        bufferSize=bufferSize
        idForFirstItem=idForFirstItem


        onSelect="onSelect"
        selectingChildrenSelectsParent=selectingChildrenSelectsParent
        checkboxSelectionMode=checkboxSelectionMode
        rowSelectionMode=rowSelectionMode
        selection=selection

        as |b|
      }}
        {{#component rowComponent
          api=b

          onClick="onRowClick"
          onDoubleClick="onRowDoubleClick"

          as |r|
        }}
          {{#ember-td
            api=r

            onClick="onCellClick"
            onDoubleClick="onCellDoubleClick"

            as |value|
          }}
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
    this.set('selection', newRows);
  },

  onUpdateSorts(sorts) {
    this.set('sorts', sorts);
  },

  onDropdownAction() {},
  onColumnHeaderAction() {},
  onHeaderCellContextMenu() {},
  onReorder() {},
  onResize() {},

  onCellClick() {},
  onCellDoubleClick() {},

  onRowClick() {},
  onRowDoubleClick() {},
};

export function generateTableValues(
  testContext,
  {
    rows,
    footerRows,
    columns,
    rowCount = 10,
    rowDepth = 1,
    footerRowCount = 0,
    columnCount = 10,
    columnOptions,

    rowComponent = 'ember-tr',

    ...options
  } = {}
) {
  for (let property in options) {
    testContext.set(property, options[property]);
  }

  testContext.set('rowComponent', rowComponent);

  columns = columns || generateColumns(columnCount, columnOptions);

  rows = rows || generateRows(rowCount, rowDepth, (row, key) => `${row.id}${key}`);
  footerRows = footerRows || generateRows(footerRowCount, (row, key) => `${row.id}${key}`);

  testContext.set('columns', columns);
  testContext.set('rows', rows);
  testContext.set('footerRows', footerRows);

  for (let action in defaultActions) {
    let actions = testContext.actions || testContext._actions;

    if (!testContext[action] && actions && !actions[action]) {
      if (gte('1.13.0')) {
        testContext.set(action, defaultActions[action].bind(testContext));
      } else {
        testContext.on(action, defaultActions[action].bind(testContext));
      }
    }
  }
}

export async function generateTable(testContext, ...args) {
  generateTableValues(testContext, ...args);

  if (gte('1.13.0')) {
    testContext.render(fullTable);
  } else {
    testContext.render(fullTableOld);
  }

  await wait();
}
