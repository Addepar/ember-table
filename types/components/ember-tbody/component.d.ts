import Component from '@ember/component';
import { EmberTableColumn, EmberTableRow } from 'ember-table';
import EmberTrComponent from 'ember-table/components/ember-tr/component';

type SelectionMode =
  | 'multiple'
  | 'single'
  | 'none';

export interface EmberTbodyArgs<RowType extends EmberTableRow> {
  /**
   * The number of extra rows to render on either side of the table's viewport.
   */
  bufferSize?: number;

  /**
   * Sets which row selection behavior to follow.
   * Possible values are `none` (clicking on a row does nothing), `single` (clicking on a row selects it and deselects other rows), and `multiple` (multiple rows can be selected through ctrl/cmd-click or shift-click).
   */
  checkboxSelectionMode?: SelectionMode;

  /**
   * A selector string that will select the element from which to calculate the viewable height.
   */
  containerSelector?: string;

  /**
   * Boolean flag that enables collapsing tree nodes.
   */
  enableCollapse?: boolean;

  /**
   * Boolean flag that enables tree behavior if items have a `children` property.
   */
  enableTree?: boolean;

  /**
   * Estimated height for each row.
   * This number is used to decide how many rows will be rendered at initial rendering.
   */
  estimateRowHeight?: number;

  /**
   * Invokes an action when the first row in the table is reached/in view.
   */
  firstReached?: () => void;

  /**
   * An action that is triggered when the first visible row of the table changes.
   */
  firstVisibleChanged?: () => void;

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
   */
  key?: string;

  /**
   * An action that is triggered when the table reaches the last row.
   */
  lastReached?: () => void;

  /**
   * An action that is triggered when the last visible row of the table changes.
   */
  lastVisibleChanged?: () => void;

  /**
   * An action that is called when the row selection of the table changes.
   * Will be called with either an array or individual row, depending on the checkboxSelectionMode.
   */
  onSelect?: (rows: RowType[] | RowType) => void;

  /**
   * A flag that tells the table to render all of its rows at once.
   */
  renderAll?: boolean;

  /**
   * The row items that the table should display.
   */
  rows: RowType[];

  /**
   * Sets which row selection behavior to follow.
   * Possible values are `none` (clicking on a row does nothing), `single` (clicking on a row selects it and deselects other rows), and `multiple` (multiple rows can be selected through ctrl/cmd-click or shift-click).
   */
  rowSelectionMode?: SelectionMode;

  /**
   * When `true`, this option enables the toggling of rows without using the ctrlKey or metaKey.
   */
  rowToggleMode?: boolean;

  /**
   * When `true`, this option causes selecting all of a node's children to also select the node itself.
   */
  selectingChildrenSelectsParents?: boolean;

  /**
   * The currently selected rows.
   * Can either be an array or an individual row.
   */
  selection?: RowType[] | RowType | null;

  /**
   * A function that will override how selection is compared to row value.
   */
  selectionMatchFunction?: (selection: RowType[] | RowType, row: RowType) => void;

  /**
   * A flag that controls if all rows have same static height or not.
   * By default it is set to `false` and row height is dependent on its internal content.
   * If it is set to `true`, all rows have the same height equivalent to `estimateRowHeight`.
   */
  staticHeight?: boolean;
}

export interface EmberTbodySignature<
  RowType extends EmberTableRow,
  ColumnType extends EmberTableColumn
> {
  Element: HTMLDivElement;
  Args: EmberTbodyArgs<RowType>;
  Blocks: {
    default: [
      {
        row: typeof EmberTrComponent<RowType, ColumnType>;
        rowMeta: unknown;
        rowValue: RowType;
      }
    ];
  };
}

export default class EmberTbodyComponent<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn
> extends Component<EmberTbodySignature<RowType, ColumnType>> {}
