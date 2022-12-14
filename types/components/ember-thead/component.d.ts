import Component from '@ember/component';
import { EmberTableColumn, EmberTableRow, EmberTableSort } from 'ember-table';
import EmberThComponent from 'ember-table/components/ember-th/component';
import EmberTrComponent from 'ember-table/components/ember-tr/component';

type FillMode =
  | 'equal-column'
  | 'first-column'
  | 'last-column'
  | 'nth-column';

export interface EmberTheadArgs<RowType, ColumnType> {
  /**
   * Specifies the name of the property on the column objects that should be used as the key for caching column metadata.
   * For example, if columns have a unique `id` property, the value could be set to `id`.
   * If unspecified, the column object itself is used as a key.
   */
  columnKeyPath?: string;


  /**
   * The column definitions for the table.
   */
  columns: ColumnType[];

  compareFunction?: <T = RowType[keyof RowType]>(valueA: T, valueB: T, sortEmptyLast: boolean) => number;

  /**
   * A numeric adjustment to be applied to the constraint on the table's size.
   */
  containerWidthAdjustment?: number;

  /**
   * Flag that toggles reordering in the table.
   */
  enableReorder?: boolean;

  /**
   * Flag that toggles resizing in the table.
   */
  enableResize?: boolean;

  /**
   * A configuration that controls which column shrinks (or extends) when `fillMode` is `nth-column`.
   * This is zero indexed.
   */
  fillColumnIndex?: number;

  /**
   * A configuration that controls how columns shrink (or extend) when total column width does not match table width.
   * Behavior of column modification is as follows:
      - `equal-column`: extra space is distributed equally among all columns.
      - `first-column`: extra space is added into the first column.
      - `last-column`: extra space is added into the last column.
      - `nth-column`: extra space is added into the column defined by `fillColumnIndex`.
    */
  fillMode?: FillMode;

  /**
   * Specifies how columns should be sized when the table is initialized.
   * This only affects `eq-container-slack` and `gte-container-slack` width constraint modes.
   * Permitted values are the same as `fillMode`.
   */
  initialFillMode?: FillMode;

  /**
   * An action that is sent when columns are reordered.
   *
   * @memberof THeadArgs
   */
  onReorder?: (columnA: ColumnType, columnB: ColumnType) => void;

  /**
   * An action that is sent when columns are resized.
   */
  onResize?: (column: ColumnType) => void;

  /**
   * An action that is sent when sorts is updated.
   */
  onUpdateSorts?: (sorts: EmberTableSort[]) => void;

  /**
   * Sets which column resizing behavior to use.
   * Possible values are `standard` (resizing a column pushes or pulls all other columns) and `fluid` (resizing a column subtracts width from neighboring columns).
   */
  resizeMode?: 'standard' | 'fluid';

  /**
   * Enables shadows at the edges of the table to show that the user can scroll to view more content.
   * Possible string values are `all`, `horizontal`, `vertical`, and `none`.
   * The boolean values `true` and `false` are aliased to `all` and `none`, respectively.
   */
  scrollIndicators?: 'none' | 'all' | 'horizontal' | 'vertical' | boolean;

  /**
   * Flag that allows to sort empty values after non empty ones.
   */
  sortEmptyLast?: boolean;

  /**
   * An optional sort.
   * If not specified, defaults to `<sortMultiple>`, which sorts by each `sort` in `sorts`, in order.
   */
  sortFunction?: <T = RowType[keyof RowType]>(
    itemA: T,
    itemB: T,
    sorts: EmberTableSort[],
    compare: (valueA: T, valueB: T, sortEmptyLast: boolean) => number,
    sortEmptyLast: boolean
  ) => number;

  /**
   * An ordered array of the sorts applied to the table.
   */
  sorts?: EmberTableSort[];

  /**
   * Sets a constraint on the table's size, such that it must be greater than, less than, or equal to the size of the containing element.
   */
  widthConstraint?: 'none' | 'eq-container' | 'gte-container' | 'lte-container';
}

export interface EmberTheadSignature<
  RowType extends EmberTableRow,
  ColumnType extends EmberTableColumn
> {
  Args: EmberTheadArgs<RowType, ColumnType>;
  Blocks: {
    default: [
      {
        row: typeof EmberTrComponent<RowType, ColumnType, typeof EmberThComponent<ColumnType>>;
      }
    ];
  };
  Element: HTMLDivElement;
}

export default class EmberTheadComponent<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn
> extends Component<EmberTheadSignature<RowType, ColumnType>> {}
