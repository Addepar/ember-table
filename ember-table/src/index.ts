export interface EmberTableColumn {
  name?: string;
  valuePath?: string;

  isFixed?: 'left' | 'right';
  isResizable?: boolean;
  isSortable?: boolean;
  maxWidth?: number;
  minWidth?: number;
  subcolumns?: EmberTableColumn[];
  textAlign?: 'left' | 'center' | 'right';
  width?: number;
}

// Extension point: applications describe their rows by extending this.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface EmberTableRow {}

export interface EmberTableSort {
  isAscending: boolean;
  valuePath: string;
}

/**
  Per-row state. Apps may store their own properties on it (see the Table Meta
  Data guide), which is why it accepts unknown keys.
*/
export interface TableRowMeta {
  [property: string]: unknown;
  index: number;
  isCollapsed: boolean;
  isSelected: boolean;
  isGroupSelected: boolean;
  canCollapse: boolean;
  depth: number;
  first: unknown;
  last: unknown;
  next: unknown;
  prev: unknown;
  /** Selects the row, as clicking it would. */
  select(options?: { toggle?: boolean; range?: boolean; single?: boolean }): void;
  /** Collapses or expands the row's children, if it can collapse. */
  toggleCollapse(): void;
}

/** Per-column state. Apps may store their own properties on it. */
export interface TableColumnMeta {
  [property: string]: unknown;
  isLeaf: boolean;
  isFixed: 'left' | 'right' | undefined;
  isSortable: boolean;
  isResizable: boolean;
  isResizing: boolean;
  isReorderable: boolean;
  isSlack: boolean;
  width: number;
  offsetLeft: number;
  offsetRight: number;
  rowSpan: number;
  columnSpan: number;
  index: number | undefined;
  isLastRendered: boolean;
  sortIndex: number;
  isSorted: boolean;
  isMultiSorted: boolean;
  isSortedAsc: boolean;
}

/** Per-cell state, for apps to store their own properties on. */
export type TableCellMeta = Record<string, unknown>;

/**
  The value of a cell in a row of `RowType`. Templates usually cannot infer the
  row type (rows are passed to the body, not the table), so rows without known
  keys yield an untyped value instead of `never`.
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CellValue<RowType> = [keyof RowType] extends [never] ? any : RowType[keyof RowType];

// Components, for templates in strict mode (`.gjs`/`.gts`).
export { default as EmberTable } from './components/ember-table/component.gts';
export { default as EmberThead } from './components/ember-thead/component.gts';
export { default as EmberTbody } from './components/ember-tbody/component.gts';
export { default as EmberTfoot } from './components/ember-tfoot/component.gts';
export { default as EmberTr } from './components/ember-tr/component.gts';
export { default as EmberTh } from './components/ember-th/component.gts';
export { default as EmberTd } from './components/ember-td/component.gts';
export { default as EmberThResizeHandle } from './components/ember-th/resize-handle/component.gts';
export { default as EmberThSortIndicator } from './components/ember-th/sort-indicator/component.gts';
export { default as EmberTableLoadingMore } from './components/ember-table-loading-more/component.gts';
export { default as EmberTableSimpleCheckbox } from './components/ember-table-simple-checkbox.gts';
