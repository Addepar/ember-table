import { cached } from '@glimmer/tracking';
import { hash } from '@ember/helper';
import type { WithBoundArgs } from '@glint/template';
import TableSection, { type TableSectionArgs } from '../-private/table-section.ts';
import RowWrapper from '../-private/row-wrapper.gts';
import EmberTr from '../ember-tr/component.gts';
import type { CellApi, RowApi, SelectionMode } from '../../-private/types.ts';
import type { EmberTableColumn, EmberTableRow, TableRowMeta } from '../../index.ts';

export interface EmberTfootSignature<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn,
> {
  Element: HTMLTableSectionElement;
  Args: TableSectionArgs<RowType> & {
    /** Classes to add to the element, alongside its own. */
    class?: string;
  };
  Blocks: {
    default: [
      {
        /** The row API. Pass it as `@api` to `<EmberTr>` when invoking it directly. */
        api: RowApi<RowType, ColumnType>;
        /** The cells of this row. */
        cells: CellApi<RowType, ColumnType>[];
        /** `<EmberTr>` for this row, with `@api` set. */
        row: WithBoundArgs<typeof EmberTr<RowApi<RowType, ColumnType>>, 'api'>;
        /** The meta object of this row. */
        rowMeta: TableRowMeta;
        /** The row. */
        rowValue: RowType;
        /** The number of rows in the section. */
        rowsCount: number;
        /** The section's `@rowSelectionMode`. */
        rowSelectionMode: SelectionMode;
      },
    ];
  };
}

/**
 * The table footer, for summary rows. It takes the same arguments as
 * `<EmberTbody>` except occlusion: every footer row is rendered, and the footer
 * stays visible while the body scrolls.
 */
export default class EmberTfoot<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn,
> extends TableSection<RowType, ColumnType, EmberTfootSignature<RowType, ColumnType>> {
  // Footers render every row, so the collapse tree is flattened directly
  // instead of going through the virtualized collection.
  @cached
  get wrappedRowArray() {
    let tree = this.collapseTree;
    let rows: RowType[] = [];
    for (let i = 0; i < tree.length; i++) {
      rows.push(tree.objectAt(i) as RowType);
    }
    return rows;
  }

  // See `asRow` in `ember-tbody`.
  asRow = (row: object) => row as WithBoundArgs<typeof EmberTr<RowApi<RowType, ColumnType>>, 'api'>;

  <template>
    <tfoot ...attributes data-test-row-count={{this.dataTestRowCount}}>
      {{#each this.wrappedRowArray as |rowValue|}}
        <RowWrapper
          @rowValue={{rowValue}}
          @columns={{this.columns}}
          @columnMetaCache={{this.columnMetaCache}}
          @rowMetaCache={{this.rowMetaCache}}
          @canSelect={{this.canSelect}}
          @rowSelectionMode={{this.rowSelectionMode}}
          @checkboxSelectionMode={{this.checkboxSelectionMode}}
          @rowsCount={{this.wrappedRowArray.length}}
          as |api|
        >
          {{#if (has-block)}}
            {{yield
              (hash
                api=api
                rowValue=api.rowValue
                rowMeta=api.rowMeta
                cells=api.cells
                rowSelectionMode=api.rowSelectionMode
                rowsCount=api.rowsCount
                row=(this.asRow (component EmberTr api=api))
              )
            }}
          {{else}}
            <EmberTr @api={{api}} />
          {{/if}}
        </RowWrapper>
      {{/each}}
    </tfoot>
  </template>
}
