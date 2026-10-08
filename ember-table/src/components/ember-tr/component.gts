import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { hash } from '@ember/helper';
import type { WithBoundArgs } from '@glint/template';
import { closest } from '../../-private/utils/element.ts';
import { SELECT_MODE } from '../../-private/collapse-tree.ts';
import EmberTh from '../ember-th/component.gts';
import EmberTd from '../ember-td/component.gts';
import type {
  CellValue,
  EmberTableColumn,
  EmberTableRow,
  EmberTableSort,
  TableCellMeta,
  TableColumnMeta,
  TableRowMeta,
} from '../../index.ts';
import type {
  CellApi,
  HeaderCellApi,
  HeaderRowApi,
  HeaderRowMeta,
  RowApi,
} from '../../-private/types.ts';

const SELECTABLE_MODES: readonly string[] = [SELECT_MODE.MULTIPLE, SELECT_MODE.SINGLE];

/**
  What `<EmberTr @api>` accepts: a body or footer row (or the hash its section
  yields, which carries it as `api`), or a header row.
*/
export type EmberTrApi<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn,
> = RowApi<RowType, ColumnType> | { api: RowApi<RowType, ColumnType> } | HeaderRowApi<ColumnType>;

/** What a body or footer row yields for each cell. */
export interface EmberTrBodyCell<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn,
> {
  /** The cell API. Pass it as `@api` to `<EmberTd>`/`<EmberTh>` when invoking them directly. */
  api: CellApi<RowType, ColumnType>;
  /** The cell component (`<EmberTd>` or `<EmberTh>`) with `@api` set. */
  cell: WithBoundArgs<typeof EmberTd<RowType, ColumnType>, 'api'>;
  /** The meta object of the cell, for the app's own per-cell state. */
  cellMeta: TableCellMeta;
  /** The cell's value: the row's value at the column's `valuePath`. */
  cellValue: CellValue<RowType>;
  /** The meta object of the column. */
  columnMeta: TableColumnMeta;
  /** The column. */
  columnValue: ColumnType;
  /** The meta object of the row. */
  rowMeta: TableRowMeta;
  /** The row. */
  rowValue: RowType;
  /** The number of rows in the section. */
  rowsCount: number;
}

/** What a header row yields for each cell. */
export interface EmberTrHeaderCell<ColumnType extends EmberTableColumn = EmberTableColumn> {
  /** The cell API. Pass it as `@api` to `<EmberTd>`/`<EmberTh>` when invoking them directly. */
  api: HeaderCellApi<ColumnType>;
  /** The cell component (`<EmberTd>` or `<EmberTh>`) with `@api` set. */
  cell: WithBoundArgs<typeof EmberTh<ColumnType>, 'api'>;
  /** The meta object of the column. */
  columnMeta: TableColumnMeta;
  /** The column. */
  columnValue: ColumnType;
  /** The meta object of the header row. */
  rowMeta: HeaderRowMeta;
  /** The number of rows in the section. */
  rowsCount: number;
  /** The table's current sorts. */
  sorts: readonly EmberTableSort[];
  /** Requests new sorts (calls the header's `@onUpdateSorts`). */
  sendUpdateSort(sorts: EmberTableSort[]): void;
}

/** The cell an `<EmberTr>` with the given `@api` yields. */
export type EmberTrCell<Api> =
  Api extends HeaderRowApi<infer ColumnType>
    ? EmberTrHeaderCell<ColumnType>
    : Api extends RowApi<infer RowType, infer ColumnType> | { api: RowApi<infer RowType, infer ColumnType> }
      ? EmberTrBodyCell<RowType, ColumnType>
      : never;

type RowValueOf<Api> =
  Api extends RowApi<infer RowType> | { api: RowApi<infer RowType> } ? RowType : never;

export interface EmberTrEvent<RowType> {
  event: MouseEvent;
  rowValue: RowType | undefined;
  rowMeta: TableRowMeta | undefined;
}

export interface EmberTrSignature<Api extends EmberTrApi = EmberTrApi> {
  Element: HTMLTableRowElement;
  Args: {
    /** @internal Provided by the yielded `row` component, or pass the section's yield. */
    api: Api;
    /** Classes to add to the element, alongside its own. */
    class?: string;
    /** Called when the row is clicked. */
    onClick?: (event: EmberTrEvent<RowValueOf<Api>>) => void;
    /** Called when the row is double clicked. */
    onDoubleClick?: (event: EmberTrEvent<RowValueOf<Api>>) => void;
  };
  Blocks: {
    default: [EmberTrCell<Api>];
  };
}

/**
 * A table row. Inside a header it yields header cells; inside a body or footer
 * it yields body cells, and clicking it selects the row. It yields once per
 * cell; without a block it renders default cells.
 */
export default class EmberTr<Api extends EmberTrApi = EmberTrApi> extends Component<
  EmberTrSignature<Api>
> {
  // The template builds the cell hash for whichever kind of row it renders;
  // this is the one place it is asserted to match the signature.
  asCellYield = (cell: object) => cell as EmberTrCell<Api>;

  get api(): RowApi | HeaderRowApi {
    let api: EmberTrApi = this.args.api;
    return 'api' in api ? api.api : api;
  }

  get headerApi(): HeaderRowApi | undefined {
    let api = this.api;
    return api.isHeader ? api : undefined;
  }

  get bodyApi(): RowApi | undefined {
    let api = this.api;
    return api.isHeader ? undefined : api;
  }

  get customClass() {
    return this.args.class ?? '';
  }

  get rowMeta() {
    return this.api.rowMeta;
  }

  get isSelected() {
    return this.bodyApi?.rowMeta.isSelected;
  }

  get isGroupSelected() {
    return this.bodyApi?.rowMeta.isGroupSelected;
  }

  get isEven() {
    return (this.rowMeta?.index ?? 0) % 2 === 0;
  }

  get isSelectable() {
    return SELECTABLE_MODES.includes(this.bodyApi?.rowSelectionMode ?? '');
  }

  @action
  click(event: MouseEvent) {
    let row = this.bodyApi;
    let inputParent = closest(event.target, 'input, button, label, a, select');

    if (row && !inputParent) {
      if (row.rowSelectionMode === SELECT_MODE.MULTIPLE) {
        row.rowMeta.select({
          toggle: event.ctrlKey || event.metaKey || row.rowToggleMode,
          range: event.shiftKey,
        });
      } else if (row.rowSelectionMode === SELECT_MODE.SINGLE) {
        row.rowMeta.select({ single: true });
      }
    }

    this.sendEventAction(this.args.onClick, event);
  }

  @action
  doubleClick(event: MouseEvent) {
    this.sendEventAction(this.args.onDoubleClick, event);
  }

  sendEventAction(
    callback: ((event: EmberTrEvent<RowValueOf<Api>>) => void) | undefined,
    event: MouseEvent
  ) {
    let row = this.bodyApi;
    callback?.({
      event,
      rowValue: row?.rowValue as RowValueOf<Api> | undefined,
      rowMeta: row?.rowMeta,
    });
  }

  <template>
    <tr
      ...attributes
      class="et-tr {{this.customClass}}
        {{if this.isEven 'is-even' 'is-odd'}}
        {{if this.isGroupSelected 'is-group-selected'}}
        {{if this.isSelectable 'is-selectable'}}
        {{if this.isSelected 'is-selected'}}"
      {{on "click" this.click}}
      {{on "dblclick" this.doubleClick}}
    >
      {{#if this.headerApi}}
        {{#each this.headerApi.cells as |api|}}
          {{#if (has-block)}}
            {{yield
              (this.asCellYield
                (hash
                  api=api
                  columnValue=api.columnValue
                  columnMeta=api.columnMeta
                  sorts=api.sorts
                  sendUpdateSort=api.sendUpdateSort
                  rowMeta=api.rowMeta
                  rowsCount=this.headerApi.rowsCount
                  cell=(component EmberTh api=api)
                )
              )
            }}
          {{else}}
            <EmberTh @api={{api}} />
          {{/if}}
        {{/each}}
      {{else if this.bodyApi}}
        {{#each this.bodyApi.cells as |api|}}
          {{#if (has-block)}}
            {{yield
              (this.asCellYield
                (hash
                  api=api
                  cellValue=api.cellValue
                  cellMeta=api.cellMeta
                  columnValue=api.columnValue
                  columnMeta=api.columnMeta
                  rowValue=api.rowValue
                  rowMeta=api.rowMeta
                  rowsCount=api.rowsCount
                  cell=(component EmberTd api=api)
                )
              )
            }}
          {{else}}
            <EmberTd @api={{api}} />
          {{/if}}
        {{/each}}
      {{/if}}
    </tr>
  </template>
}
