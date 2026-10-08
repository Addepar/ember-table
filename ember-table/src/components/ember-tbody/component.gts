import { hash } from '@ember/helper';
import type { WithBoundArgs } from '@glint/template';
import { VerticalCollection } from '@html-next/vertical-collection';
import RowWrapper from '../-private/row-wrapper.gts';
import TableSection, { type SelectionDetails } from '../-private/table-section.ts';
import EmberTr from '../ember-tr/component.gts';
import type { TableApiArg } from '../../-private/unwrap-api.ts';
import { defaultTo } from '../../-private/utils/default-to.ts';
import type { CellApi, RowApi, SelectionMode } from '../../-private/types.ts';
import type { EmberTableColumn, EmberTableRow, TableRowMeta } from '../../index.ts';

export { setSetupRowCountForTest } from '../-private/table-section.ts';

export interface EmberTbodyArgs<RowType extends EmberTableRow = EmberTableRow> {
  /** @internal The table's API, or the hash `<EmberTable>` yields. */
  api: TableApiArg;

  /** Classes to add to the element, alongside its own. */
  class?: string;

  /**
   * The number of extra rows to render on either side of the table's viewport.
   * @default 1
   */
  bufferSize?: number;

  /**
   * How each row's selection checkbox behaves: `none` hides the checkboxes, `single` selects only the checked row, and `multiple` adds the row to the selection.
   * @default 'multiple'
   */
  checkboxSelectionMode?: SelectionMode;

  /**
   * A selector string that will select the element from which to calculate the viewable height.
   * @default the table's scroll container
   */
  containerSelector?: string;

  /**
   * Boolean flag that enables collapsing tree nodes.
   * @default true
   */
  enableCollapse?: boolean;

  /**
   * Boolean flag that enables tree behavior if items have a `children` property.
   * @default true
   */
  enableTree?: boolean;

  /**
   * Estimated height for each row.
   * This number is used to decide how many rows will be rendered at initial rendering.
   * @default 30
   */
  estimateRowHeight?: number;

  /**
   * Invokes an action when the first row in the table is reached/in view.
   */
  firstReached?: (...args: unknown[]) => void;

  /**
   * An action that is triggered when the first visible row of the table changes.
   */
  firstVisibleChanged?: (...args: unknown[]) => void;

  /**
   * The property is passed through to the vertical-collection.
   * If set, upon initialization the scroll position will be set such that the item with the provided id is at the top left on screen.
   * If the item with id cannot be found, `scrollTop` is set to 0.
   */
  idForFirstItem?: string;

  /**
   * This key is the property used by the collection to determine whether an array mutation is an append, prepend, or complete replacement.
   * It is also the key that is passed to the actions, and can be used to restore scroll position with `idForFirstItem`.
   * This is passed through to the vertical-collection.
   * @default '@identity'
   */
  key?: string;

  /**
   * An action that is triggered when the table reaches the last row.
   */
  lastReached?: (...args: unknown[]) => void;

  /**
   * An action that is triggered when the last visible row of the table changes.
   */
  lastVisibleChanged?: (...args: unknown[]) => void;

  /**
   * Called when the selection changes, with the new selection (an array, or a single row in `single` mode) and `{ abort }`. Calling `abort()` keeps the anchor of the next shift-click range unchanged.
   */
  onSelect?: (rows: RowType[] | RowType, details: SelectionDetails) => void;

  /**
   * A flag that tells the table to render all of its rows at once.
   * @default false
   */
  renderAll?: boolean;

  /**
   * The row items that the table should display.
   * @default []
   */
  rows?: RowType[];

  /**
   * Sets which row selection behavior to follow.
   * Possible values are `none` (clicking on a row does nothing), `single` (clicking on a row selects it and deselects other rows), and `multiple` (multiple rows can be selected through ctrl/cmd-click or shift-click).
   * @default 'multiple'
   */
  rowSelectionMode?: SelectionMode;

  /**
   * When `true`, this option enables the toggling of rows without using the ctrlKey or metaKey.
   * @default false
   */
  rowToggleMode?: boolean;

  /**
   * When `true`, this option causes selecting all of a node's children to also select the node itself.
   * @default true
   */
  selectingChildrenSelectsParent?: boolean;

  /**
   * The currently selected rows.
   * Can either be an array or an individual row.
   */
  selection?: RowType[] | RowType | null;

  /**
   * A function that will override how selection is compared to row value.
   */
  selectionMatchFunction?: (selection: RowType, row: RowType) => boolean;

  /**
   * A flag that controls if all rows have same static height or not.
   * By default it is set to `false` and row height is dependent on its internal content.
   * If it is set to `true`, all rows have the same height equivalent to `estimateRowHeight`.
   * @default false
   */
  staticHeight?: boolean;
}

export interface EmberTbodySignature<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn,
> {
  Element: HTMLTableSectionElement;
  Args: EmberTbodyArgs<RowType>;
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
        /** The section's `@rowToggleMode`. */
        rowToggleMode: boolean | undefined;
      },
    ];
    /** Rendered when there are no rows. */
    else: [];
  };
}

/**
 * The table body. It renders only the rows in view (occlusion, through
 * vertical-collection) and handles row selection and tree rows. It yields once
 * per rendered row; without a block it renders default rows.
 */
export default class EmberTbody<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn,
> extends TableSection<RowType, ColumnType, EmberTbodySignature<RowType, ColumnType>> {
  get rowToggleMode() {
    return defaultTo(this.args.rowToggleMode, false);
  }

  get estimateRowHeight() {
    return defaultTo(this.args.estimateRowHeight, 30);
  }

  get staticHeight() {
    return defaultTo(this.args.staticHeight, false);
  }

  get bufferSize() {
    return defaultTo(this.args.bufferSize, 1);
  }

  get renderAll() {
    return defaultTo(this.args.renderAll, false);
  }

  get key() {
    return defaultTo(this.args.key, '@identity');
  }

  get containerSelector() {
    return this.args.containerSelector || `#${this.unwrappedApi.tableId}`;
  }

  // `EmberTr`'s generic parameters describe the rows to consumers; this is
  // the one place the yielded row component is asserted to match.
  asRow = (row: object) => row as WithBoundArgs<typeof EmberTr<RowApi<RowType, ColumnType>>, 'api'>;

  // The virtual collection yields untyped items; they are this body's rows.
  asRowValue = (item: unknown) => item as RowType;

  <template>
    <tbody ...attributes data-test-row-count={{this.dataTestRowCount}}>
      <VerticalCollection
        @items={{this.collapseTree}}
        @containerSelector={{this.containerSelector}}
        @estimateHeight={{this.estimateRowHeight}}
        @key={{this.key}}
        @staticHeight={{this.staticHeight}}
        @bufferSize={{this.bufferSize}}
        @renderAll={{this.renderAll}}
        @firstReached={{@firstReached}}
        @lastReached={{@lastReached}}
        @firstVisibleChanged={{@firstVisibleChanged}}
        @lastVisibleChanged={{@lastVisibleChanged}}
        @idForFirstItem={{@idForFirstItem}}
      >
        <:default as |rowValue|>
          <RowWrapper
            @rowValue={{this.asRowValue rowValue}}
            @columns={{this.columns}}
            @columnMetaCache={{this.columnMetaCache}}
            @rowMetaCache={{this.rowMetaCache}}
            @canSelect={{this.canSelect}}
            @checkboxSelectionMode={{this.checkboxSelectionMode}}
            @rowSelectionMode={{this.rowSelectionMode}}
            @rowToggleMode={{this.rowToggleMode}}
            @rowsCount={{this.collapseTree.length}}
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
                  rowToggleMode=api.rowToggleMode
                  rowsCount=api.rowsCount
                  row=(this.asRow (component EmberTr api=api))
                )
              }}
            {{else}}
              <EmberTr @api={{api}} />
            {{/if}}
          </RowWrapper>
        </:default>
        <:inverse>{{yield to="inverse"}}</:inverse>
      </VerticalCollection>
    </tbody>
  </template>
}
