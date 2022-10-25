import Component from '@ember/component';
import { WithBoundArgs } from '@glint/template';
import { Column, TableMeta } from './ember-table';
import EmberTdComponent from './ember-td';
import EmberTrComponent from './ember-tr';

type FillMode =
  | 'equal-column'
  | 'first-column'
  | 'last-column'
  | 'nth-column';

type ResizeMode =
  | 'fluid'
  | 'standard';

type WidthConstraint =
  | 'eq-container'
  | 'gte-container'
  | 'lte-container'
  | 'none';

export interface TableSort {
  valuePath: string;
  isAscending: boolean;
}

export interface EmberTheadArgs<TM> {
  api: any;
  /**
   * The column definitions for the table
   *
   * @type {NativeArray<ColumnValue>}
   * @memberof THeadArgs
   */
  columns: Column[];

  /**
   * An ordered array of the sorts applied to the table
   *
   * @memberof THeadArgs
   */
  compareFunction?: <T>(valueA: T, valueB: T, sortEmptyLast: boolean) => number;

  /**
   * A numeric adjustment to be applied to the constraint on the table's size.
   *
   * @type {number}
   * @memberof THeadArgs
   */
  containerWidthAdjustment?: number;

  /**
   * Flag that toggles reordering in the table
   *
   * @type {boolean}
   * @memberof THeadArgs
   */
  enableReorder?: boolean;

  /**
   * ember-table's resizing must be enabled in order for fill-mode auto column
   * resizing to work, even if you don't want to allow user-invoked resizing
   *
   * @type {boolean}
   * @memberof THeadArgs
   */
  readonly enableResize?: boolean;

  /**
   * A configuration that controls which column shrinks (or extends) when fillMode is 'nth-column'. This is zero indexed.
   *
   * @type {number}
   * @memberof THeadArgs
   */
  fillColumnIndex?: number;

  /**
       * A configuration that controls how columns shrink (or extend) when total column width does not match table width. Behavior of column modification is as follows:

          "equal-column": extra space is distributed equally among all columns

          "first-column": extra space is added into the first column.

          "last-column": extra space is added into the last column.

          "nth-column": extra space is added into the column defined by fillColumnIndex.
        *
        * @type {FillMode}
        * @memberof THeadArgs
        */
  fillMode?: FillMode;

  /**
   * Specifies how columns should be sized when the table is initialized.
   * This only affects eq-container-slack and gte-container-slack width constraint modes. Permitted values are the same as fillMode.
   *
   * @type {FillMode}
   * @memberof THeadArgs
   */
  initialFillMode?: FillMode;

  /**
   * An action that is sent when sorts is updated
   *
   * @memberof THeadArgs
   */
  onHeaderAction?: () => void;

  /**
   * An action that is sent when columns are reordered
   *
   * @memberof THeadArgs
   */
  onReorder?: () => void;

  /**
   * An action that is sent when columns are resized
   *
   * @memberof THeadArgs
   */
  onResize?: () => void;

  /**
   * An action that is sent when sorts is updated
   *
   * @memberof THeadArgs
   */
  onUpdateSorts?: (sorts: TableSort[]) => void;

  /**
   * Sets which column resizing behavior to use.
   * Possible values are standard (resizing a column pushes or pulls all other columns) and fluid (resizing a column subtracts width from neighboring columns).
   *
   * @type {ResizeMode}
   * @memberof THeadArgs
   */
  resizeMode?: ResizeMode;

  /**
   * Enables shadows at the edges of the table to show that the user can scroll to view more content.
   * Possible string values are all, horizontal, vertical, and none. The boolean values true and false are aliased to all and none, respectively.
   *
   * @type {(boolean | string)}
   * @memberof THeadArgs
   */
  scrollIndicators?: boolean | string;

  /**
   * Flag that allows to sort empty values after non empty ones
   *
   * @type {boolean}
   * @memberof THeadArgs
   */
  sortEmptyLast?: boolean;

  /**
   * An optional sort. If not specified, defaults to , which sorts by each sort in sorts, in order.
   *
   * @memberof THeadArgs
   */
  sortFunction?: (
    itemA: Column,
    itemB: Column,
    sorts: TableSort[],
    compare: <T>(valueA: T, valueB: T, sortEmptyLast: boolean) => number,
    sortEmptyLast: boolean
  ) => number;

  /**
   * An ordered array of the sorts applied to the table
   *
   * @type {TableSort[]}
   * @memberof THeadArgs
   */
  sorts?: TableSort[];

  /**
   * Table meta object - this is used to pass actions and data to any part of the table from outside
   *
   * @type {TableMeta}
   * @memberof TBodyArgs
   */
  tableMeta?: TableMeta<TM>;

  /**
   * Sets a constraint on the table's size, such that it must be greater than, less than, or equal to the size of the containing element.
   *
   * @type {WidthConstraint}
   * @memberof THeadArgs
   */
  widthConstraint?: WidthConstraint;
}

export interface EmberTheadSignature {
  Args: EmberTheadArgs<any>;
  Blocks: {
    default: [
      {
        cells: EmberTdComponent[];
        isHeader: boolean;
        row: WithBoundArgs<typeof EmberTrComponent, 'api'>;
        rowsCount: number;
      }
    ];
  };
  Element: HTMLDivElement;
}

export default class EmberTheadComponent extends Component<EmberTheadSignature> {}
