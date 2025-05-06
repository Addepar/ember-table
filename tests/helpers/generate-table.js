import hbs from 'htmlbars-inline-precompile';
import { render, settled } from '@ember/test-helpers';
import {
  configureTableGeneration,
  generateColumns,
  generateRows,
  resetTableGenerationConfig,
} from 'dummy/utils/generators';

// reexport for use in tests
export { configureTableGeneration, resetTableGenerationConfig, generateColumns, generateRows };

const fullTable = hbs`
  <div style="height: 500px;">
    <EmberTable data-test-main-table as |t|>
      <EmberThead
        @api={{t}}
        @columns={{this.columns}}
        @columnKeyPath={{this.columnKeyPath}}
        @containerWidthAdjustment={{this.containerWidthAdjustment}}
        @enableReorder={{this.enableReorder}}
        @enableResize={{this.enableResize}}
        @scrollIndicators={{this.scrollIndicators}}
        @fillColumnIndex={{this.fillColumnIndex}}
        @fillMode={{this.fillMode}}
        @initialFillMode={{this.initialFillMode}}
        @resizeMode={{this.resizeMode}}
        @sorts={{this.sorts}}
        @sortEmptyLast={{this.sortEmptyLast}}
        @widthConstraint={{this.widthConstraint}}
        @onUpdateSorts={{this.onUpdateSorts}}
        @onReorder={{this.onReorder}}
        @onResize={{this.onResize}}

        as |h|
      >
        <EmberTr @api={{h}} as |r|>
          <EmberTh
            @api={{r}}
            @onContextMenu={{this.onHeaderCellContextMenu}}
            @class={{if r.columnMeta.isResizing "is-resizing"}}
          />
        </EmberTr>
      </EmberThead>

      <EmberTbody
        @api={{t}}
        @rows={{this.rows}}
        @estimateRowHeight={{this.estimateRowHeight}}
        @staticHeight={{this.staticHeight}}
        @enableCollapse={{this.enableCollapse}}
        @enableTree={{this.enableTree}}
        @key={{this.key}}
        @bufferSize={{this.bufferSize}}
        @idForFirstItem={{this.idForFirstItem}}
        @onSelect={{this.onSelect}}
        @selectingChildrenSelectsParent={{this.selectingChildrenSelectsParent}}
        @checkboxSelectionMode={{this.checkboxSelectionMode}}
        @rowSelectionMode={{this.rowSelectionMode}}
        @rowToggleMode={{this.rowToggleMode}}
        @selection={{this.selection}}
        @selectionMatchFunction={{this.selectionMatchFunction}}
        as |b|
      >
        {{#component this.rowComponent
          api=b
          onClick=(fn this.onRowClick)
          onDoubleClick=(fn this.onRowDoubleClick)

          as |r|
        }}
          <EmberTd
            @api={{r}}
            @onClick={{this.onCellClick}}
            @onDoubleClick={{this.onCellDoubleClick}}
            @class={{if r.columnMeta.isResizing "is-resizing"}}
            as |value|
          >
            {{value}}
          </EmberTd>
        {{/component}}
      </EmberTbody>

      <EmberTfoot
        @api={{t}}
        @rows={{this.footerRows}}
        as |f|
      >
        <EmberTr @api={{f}} as |r|>
          <EmberTd @api={{r}} as |value|>
            {{value}}
          </EmberTd>
        </EmberTr>
      </EmberTfoot>
    </EmberTable>
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
    if (!testContext[action]) {
      testContext.set(action, defaultActions[action].bind(testContext));
    }
  }
}

export async function generateTable(testContext, ...args) {
  generateTableValues(testContext, ...args);

  await render(fullTable);

  await settled();
}
