// The classic models (`ColumnTree`, `CollapseTree` and their meta objects) as
// the components see them. The models are typed in their own modules; these
// interfaces are the narrower, generic view the components and yields use.
import type {
  EmberTableColumn,
  EmberTableRow,
  EmberTableSort,
  TableCellMeta,
  TableColumnMeta,
  TableRowMeta,
} from '../index.ts';

export interface Destroyable {
  destroy(): void;
}

export interface ColumnMeta extends TableColumnMeta, Destroyable {
  registerElement(element: HTMLElement): void;
  startResize(clientX: number): void;
  updateResize(clientX: number): void;
  endResize(): void;
  startReorder(clientX: number): void;
  updateReorder(clientX: number): void;
  endReorder(): void;
}

export interface RowMeta extends TableRowMeta, Destroyable {
  _cellMetaCache: Map<unknown, TableCellMeta>;
  set(key: string, value: unknown): void;
}

export interface ColumnMetaCache {
  keyPath: string | undefined;
  get(column: EmberTableColumn): ColumnMeta;
  entries(): IterableIterator<[unknown, Destroyable]>;
  delete(key: unknown): unknown;
}

export interface ColumnTreeNode {
  width: number;
}

export interface ColumnTree extends Destroyable {
  container: HTMLElement | null;
  columnMetaCache: ColumnMetaCache;
  leaves: EmberTableColumn[];
  rows: EmberTableColumn[][];
  leftFixedNodes: ColumnTreeNode[];
  rightFixedNodes: ColumnTreeNode[];
  registerContainer(container: HTMLElement): void;
  performInitialLayout(): void;
  ensureWidthConstraint(): void;
}

export interface CollapseTree extends Destroyable {
  length: number;
  objectAt(index: number): EmberTableRow | undefined;
}

export type SortFunction = (
  itemA: unknown,
  itemB: unknown,
  sorts: readonly EmberTableSort[],
  compare: CompareFunction,
  sortEmptyLast: boolean
) => number;

export type CompareFunction = (valueA: unknown, valueB: unknown, sortEmptyLast: boolean) => number;

export type SelectionMode = 'multiple' | 'single' | 'none';

/** Row metadata of a header row. */
export interface HeaderRowMeta extends Destroyable {
  index: number;
}

/** The API `<EmberTh>` receives (a header cell, or the hash `<EmberTr>` yields for it). */
export interface HeaderCellApi<ColumnType extends EmberTableColumn = EmberTableColumn> {
  columnValue: ColumnType;
  columnMeta: ColumnMeta;
  rowMeta: HeaderRowMeta;
  readonly sorts: readonly EmberTableSort[];
  sendUpdateSort(sorts: EmberTableSort[]): void;
}

/** The API `<EmberTd>` receives. */
export interface CellApi<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn,
> {
  readonly rowValue: RowType;
  readonly rowMeta: TableRowMeta;
  readonly rowsCount: number;
  readonly columnValue: ColumnType;
  readonly columnMeta: ColumnMeta;
  readonly rowSelectionMode: SelectionMode;
  readonly checkboxSelectionMode: SelectionMode;
  readonly cellMeta: TableCellMeta;
  cellValue: unknown;
}

/** The API `<EmberTr>` receives for a body or footer row. */
export interface RowApi<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn,
> {
  readonly rowValue: RowType;
  readonly rowMeta: TableRowMeta;
  readonly cells: CellApi<RowType, ColumnType>[];
  readonly rowSelectionMode: SelectionMode;
  readonly rowToggleMode?: boolean;
  readonly rowsCount: number;
  readonly isHeader?: false;
}

/** The API `<EmberTr>` receives for a header row. */
export interface HeaderRowApi<ColumnType extends EmberTableColumn = EmberTableColumn> {
  readonly cells: HeaderCellApi<ColumnType>[];
  readonly rowMeta?: HeaderRowMeta;
  readonly rowsCount: number;
  readonly isHeader: true;
}
