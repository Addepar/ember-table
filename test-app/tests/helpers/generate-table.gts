// @ts-expect-error -- Glint compiles `fn` as Ember 7.1's built-in keyword and
// reports this import unused; Ember 6.4 still needs it.
import { fn } from '@ember/helper';
import { render, settled } from '@ember/test-helpers';
import { EmberTable, EmberTbody, EmberTd, EmberTfoot, EmberTh, EmberThead, EmberTr } from 'ember-table';
import {
  configureTableGeneration,
  generateColumns,
  generateRows,
  resetTableGenerationConfig,
  type DummyRow,
  type GeneratedColumn,
} from 'test-app/utils/generators';
import type { TableTestContext } from './table-test-context';

// reexport for use in tests
export { configureTableGeneration, resetTableGenerationConfig, generateColumns, generateRows };

// Renders a full table whose arguments are the test context's properties. The
// template reads them from the context object, so `this.set(...)` in a test
// re-renders as before.
function fullTable(ctx: TableTestContext) {
  return <template>
  <div style="height: 500px;">
    <EmberTable data-test-main-table as |t|>
      <EmberThead
        @api={{t}}
        @columns={{ctx.columns}}
        @columnKeyPath={{ctx.columnKeyPath}}
        @containerWidthAdjustment={{ctx.containerWidthAdjustment}}
        @enableReorder={{ctx.enableReorder}}
        @enableResize={{ctx.enableResize}}
        @scrollIndicators={{ctx.scrollIndicators}}
        @fillColumnIndex={{ctx.fillColumnIndex}}
        @fillMode={{ctx.fillMode}}
        @initialFillMode={{ctx.initialFillMode}}
        @resizeMode={{ctx.resizeMode}}
        @sorts={{ctx.sorts}}
        @sortEmptyLast={{ctx.sortEmptyLast}}
        @sortFunction={{ctx.sortFunction}}
        @widthConstraint={{ctx.widthConstraint}}
        @onUpdateSorts={{ctx.onUpdateSorts}}
        @onReorder={{ctx.onReorder}}
        @onResize={{ctx.onResize}}

        as |h|
      >
        <EmberTr @api={{h}} as |r|>
          <EmberTh
            @api={{r}}
            @onContextMenu={{ctx.onHeaderCellContextMenu}}
            @class={{if r.columnMeta.isResizing "is-resizing"}}
          />
        </EmberTr>
      </EmberThead>

      <EmberTbody
        @api={{t}}
        @rows={{ctx.rows}}
        @estimateRowHeight={{ctx.estimateRowHeight}}
        @staticHeight={{ctx.staticHeight}}
        @enableCollapse={{ctx.enableCollapse}}
        @enableTree={{ctx.enableTree}}
        @key={{ctx.key}}
        @bufferSize={{ctx.bufferSize}}
        @idForFirstItem={{ctx.idForFirstItem}}
        @onSelect={{ctx.onSelect}}
        @selectingChildrenSelectsParent={{ctx.selectingChildrenSelectsParent}}
        @checkboxSelectionMode={{ctx.checkboxSelectionMode}}
        @rowSelectionMode={{ctx.rowSelectionMode}}
        @rowToggleMode={{ctx.rowToggleMode}}
        @selection={{ctx.selection}}
        @selectionMatchFunction={{ctx.selectionMatchFunction}}
        as |b|
      >
        <ctx.rowComponent
          @api={{b}}
          @onClick={{fn ctx.onRowClick}}
          @onDoubleClick={{fn ctx.onRowDoubleClick}}
          as |r|
        >
          <EmberTd
            @api={{r}}
            @onClick={{ctx.onCellClick}}
            @onDoubleClick={{ctx.onCellDoubleClick}}
            @class={{if r.columnMeta.isResizing "is-resizing"}}
            as |value|
          >
            {{value}}
          </EmberTd>
        </ctx.rowComponent>
      </EmberTbody>

      <EmberTfoot
        @api={{t}}
        @rows={{ctx.footerRows}}
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
</template>;
}

const defaultActions: Record<string, (this: TableTestContext, ...args: never[]) => void> = {
  onSelect(this: TableTestContext, newRows: unknown) {
    this.set('selection', newRows);
  },

  onUpdateSorts(this: TableTestContext, sorts: unknown) {
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

export interface TableGenerationOptions {
  rows?: DummyRow[] | unknown[];
  footerRows?: DummyRow[] | unknown[];
  columns?: GeneratedColumn[] | unknown[];
  rowCount?: number;
  rowDepth?: number;
  footerRowCount?: number;
  columnCount?: number;
  columnOptions?: Parameters<typeof generateColumns>[1];
  rowComponent?: unknown;
  // Any other option is set on the test context as a table argument.
  [option: string]: unknown;
}

export function generateTableValues(
  testContext: TableTestContext,
  {
    rows,
    footerRows,
    columns,
    rowCount = 10,
    rowDepth = 1,
    footerRowCount = 0,
    columnCount = 10,
    columnOptions,

    rowComponent = EmberTr,

    ...options
  }: TableGenerationOptions = {}
) {
  for (let property in options) {
    testContext.set(property, options[property]);
  }
  testContext.set('rowComponent', rowComponent);

  columns = columns || generateColumns(columnCount, columnOptions);

  rows = rows || generateRows(rowCount, rowDepth, (row, key) => `${row.id}${key}`);
  // The format lands in the `depth` slot here, so footer rows use the default
  // format; kept as it was.
  footerRows =
    footerRows ||
    generateRows(
      footerRowCount,
      ((row: DummyRow, key: string) => `${row.id}${key}`) as unknown as number
    );

  testContext.set('columns', columns);
  testContext.set('rows', rows);
  testContext.set('footerRows', footerRows);

  for (let action in defaultActions) {
    if (!testContext[action]) {
      testContext.set(action, defaultActions[action]!.bind(testContext));
    }
  }
}

export async function generateTable(
  testContext: TableTestContext,
  options?: TableGenerationOptions
) {
  generateTableValues(testContext, options);

  await render(fullTable(testContext));

  // eslint-disable-next-line ember/no-settled-after-test-helper
  await settled();
}
