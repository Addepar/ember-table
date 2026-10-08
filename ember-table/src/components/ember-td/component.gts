import BaseTableCell from '../-private/base-table-cell.gts';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { didInsert, didUpdate } from '@ember/render-modifiers';
import { SELECT_MODE } from '../../-private/collapse-tree.ts';
import EmberTableSimpleCheckbox from '../ember-table-simple-checkbox.gts';
import type {
  CellValue,
  EmberTableColumn,
  EmberTableRow,
  TableCellMeta,
  TableColumnMeta,
  TableRowMeta,
} from '../../index.ts';
import type { CellApi } from '../../-private/types.ts';

let setupSimpleCheckboxForTest = false;
export function setSimpleCheckboxForTest(value: boolean) {
  setupSimpleCheckboxForTest = value;
}

const SELECTABLE_MODES: readonly string[] = [SELECT_MODE.MULTIPLE, SELECT_MODE.SINGLE];

/** Values sent to the cell's actions. */
export interface EmberTdActionValues<RowType, ColumnType> {
  event?: MouseEvent;
  cellValue: CellValue<RowType>;
  cellMeta: TableCellMeta;
  columnValue: ColumnType;
  columnMeta: TableColumnMeta;
  rowValue: RowType;
  rowMeta: TableRowMeta;
}

export interface EmberTdSignature<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn,
> {
  Element: HTMLTableCellElement;
  Args: {
    /** @internal Provided by the yielded `cell` component, or pass the row's yield. */
    api: CellApi<RowType, ColumnType> | { api: CellApi<RowType, ColumnType> };
    /** Classes to add to the element, alongside its own. */
    class?: string;
    /** Action sent when the user clicks this element. */
    onClick?: (values: EmberTdActionValues<RowType, ColumnType>) => void;
    /** Action sent when the user double clicks this element. */
    onDoubleClick?: (values: EmberTdActionValues<RowType, ColumnType>) => void;
    /** Action sent when the row's selection checkbox is toggled. */
    onSelect?: (values: EmberTdActionValues<RowType, ColumnType>) => void;
    /** Action sent when the row is collapsed or expanded. */
    onCollapse?: (values: EmberTdActionValues<RowType, ColumnType>) => void;
  };
  Blocks: {
    /** The cell's value, the column, the row, the cell, column and row meta objects, and the number of rows. */
    default: [
      cellValue: CellValue<RowType>,
      columnValue: ColumnType,
      rowValue: RowType,
      cellMeta: TableCellMeta,
      columnMeta: TableColumnMeta,
      rowMeta: TableRowMeta,
      rowsCount: number,
    ];
  };
}

/**
 * A body or footer cell. Without a block it renders the cell's value, plus the
 * selection checkbox and collapse toggle in the first column when they apply.
 */
export default class EmberTd<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn,
> extends BaseTableCell<EmberTdSignature<RowType, ColumnType>> {
  get api(): CellApi<RowType, ColumnType> {
    let api = this.args.api;
    return 'api' in api ? api.api : api;
  }

  get cellValue(): CellValue<RowType> {
    return this.api.cellValue as CellValue<RowType>;
  }

  // Lets the yielded `cellValue` act as an updatable reference (e.g. `<Input @value>`).
  set cellValue(value: CellValue<RowType>) {
    this.api.cellValue = value;
  }

  // Cells render arbitrary values; the template only needs them as text.
  get displayValue() {
    return this.cellValue as string | undefined;
  }

  get cellMeta() {
    return this.api.cellMeta;
  }

  get columnValue() {
    return this.api.columnValue;
  }

  get columnMeta() {
    return this.api.columnMeta;
  }

  get rowValue() {
    return this.api.rowValue;
  }

  get rowMeta() {
    return this.api.rowMeta;
  }

  get rowsCount() {
    return this.api.rowsCount;
  }

  get rowSelectionMode() {
    return this.api.rowSelectionMode;
  }

  get checkboxSelectionMode() {
    return this.api.checkboxSelectionMode;
  }

  get canCollapse() {
    return this.rowMeta.canCollapse;
  }

  get depthClass() {
    return `depth-${this.rowMeta.depth}`;
  }

  get isTesting() {
    return setupSimpleCheckboxForTest;
  }

  get shouldShowCheckbox() {
    return SELECTABLE_MODES.includes(this.checkboxSelectionMode);
  }

  get canSelect() {
    return this.shouldShowCheckbox || SELECTABLE_MODES.includes(this.rowSelectionMode);
  }

  @action
  onSelectionToggled(event: MouseEvent) {
    let mode = this.checkboxSelectionMode || this.rowSelectionMode;
    if (mode === SELECT_MODE.MULTIPLE) {
      this.rowMeta.select({ toggle: true, range: event.shiftKey });
    } else if (mode === SELECT_MODE.SINGLE) {
      this.rowMeta.select();
    }
    this.sendFullAction(this.args.onSelect);
  }

  @action
  onCollapseToggled() {
    this.rowMeta.toggleCollapse();
    this.sendFullAction(this.args.onCollapse);
  }

  @action
  click(event: MouseEvent) {
    this.sendFullAction(this.args.onClick, event);
  }

  @action
  doubleClick(event: MouseEvent) {
    this.sendFullAction(this.args.onDoubleClick, event);
  }

  sendFullAction(
    callback: ((values: EmberTdActionValues<RowType, ColumnType>) => void) | undefined,
    event?: MouseEvent
  ) {
    callback?.({
      ...(event ? { event } : {}),
      cellValue: this.cellValue,
      cellMeta: this.cellMeta,
      columnValue: this.columnValue,
      columnMeta: this.columnMeta,
      rowValue: this.rowValue,
      rowMeta: this.rowMeta,
    });
  }

  <template>
    <td
      ...attributes
      class={{this.cellClass}}
      data-test-ember-table-slack={{if this.isSlack true}}
      {{didInsert this.updateStyles}}
      {{didUpdate
        this.updateStyles
        this.columnMeta.width
        this.columnMeta.offsetLeft
        this.columnMeta.offsetRight
        this.columnMeta.isFixed
      }}
      {{on "click" this.click}}
      {{on "dblclick" this.doubleClick}}
    >
      {{#if this.isFirstColumn}}
        <div class="et-cell-container">
          {{#if this.canSelect}}
            <span
              class="et-toggle-select {{unless this.shouldShowCheckbox 'et-speech-only'}}"
              data-test-select-row-container
            >
              <EmberTableSimpleCheckbox
                @checked={{this.rowMeta.isGroupSelected}}
                @onClick={{this.onSelectionToggled}}
                @ariaLabel="Select row"
                @dataTestSelectRow={{this.isTesting}}
              />
              <span></span>
            </span>
          {{/if}}
          {{#if this.canCollapse}}
            <span class="et-toggle-collapse et-depth-indent {{this.depthClass}}">
              <EmberTableSimpleCheckbox
                @checked={{this.rowMeta.isCollapsed}}
                @onChange={{this.onCollapseToggled}}
                @ariaLabel="Collapse row"
                @dataTestCollapseRow={{this.isTesting}}
              />
              <span></span>
            </span>
          {{else}}
            <div class="et-depth-indent et-depth-placeholder {{this.depthClass}}"></div>
          {{/if}}
          <div class="et-cell-content">
            {{#if (has-block)}}
              {{yield
                this.cellValue
                this.columnValue
                this.rowValue
                this.cellMeta
                this.columnMeta
                this.rowMeta
                this.rowsCount
              }}
            {{else}}
              {{this.displayValue}}
            {{/if}}
          </div>
        </div>
      {{else if (has-block)}}
        {{yield
          this.cellValue
          this.columnValue
          this.rowValue
          this.cellMeta
          this.columnMeta
          this.rowMeta
          this.rowsCount
        }}
      {{else}}
        {{this.displayValue}}
      {{/if}}
    </td>
  </template>
}
