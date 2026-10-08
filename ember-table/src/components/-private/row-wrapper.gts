import Component from '@glimmer/component';
import { cached } from '@glimmer/tracking';
import EmberObject, { get, set } from '@ember/object';
import { objectAt } from '../../-private/utils/array.ts';
import type { EmberTableColumn, EmberTableRow, TableCellMeta } from '../../index.ts';
import type {
  CellApi as CellApiShape,
  ColumnMeta,
  ColumnMetaCache,
  RowApi as RowApiShape,
  RowMeta,
  SelectionMode,
} from '../../-private/types.ts';

interface RowWrapperSignature<RowType extends EmberTableRow, ColumnType extends EmberTableColumn> {
  Args: {
    rowValue: RowType;
    columns: ColumnType[];
    columnMetaCache: ColumnMetaCache;
    rowMetaCache: Map<RowType, RowMeta>;
    canSelect: boolean;
    checkboxSelectionMode?: SelectionMode;
    rowSelectionMode?: SelectionMode;
    rowToggleMode?: boolean;
    rowsCount: number;
  };
  Blocks: {
    default: [api: RowApiShape<RowType, ColumnType>];
  };
}

// Cell and row APIs are stable objects whose getters derive everything from
// the owning `RowWrapper`'s arguments. Rows recycled by the virtual collection
// therefore update through autotracking alone, and `cellValue` tracks the
// row's value at the column's `valuePath` via `get`.
class CellApi<RowType extends EmberTableRow, ColumnType extends EmberTableColumn>
  implements CellApiShape<RowType, ColumnType>
{
  private row: RowWrapper<RowType, ColumnType>;
  private index: number;

  constructor(row: RowWrapper<RowType, ColumnType>, index: number) {
    this.row = row;
    this.index = index;
  }

  get rowValue() {
    return this.row.args.rowValue;
  }

  get rowMeta() {
    return this.row.rowMeta;
  }

  get rowsCount() {
    return this.row.args.rowsCount;
  }

  get columnValue(): ColumnType {
    return objectAt(this.row.args.columns, this.index) as ColumnType;
  }

  get columnMeta(): ColumnMeta {
    return this.row.args.columnMetaCache.get(this.columnValue);
  }

  get rowSelectionMode() {
    return this.row.rowSelectionMode;
  }

  get checkboxSelectionMode(): SelectionMode {
    return this.row.args.canSelect ? (this.row.args.checkboxSelectionMode ?? 'none') : 'none';
  }

  get valuePath(): string | undefined {
    let columnValue = this.columnValue;
    return columnValue ? get(columnValue, 'valuePath') : undefined;
  }

  get cellValue(): unknown {
    let { rowValue, valuePath } = this;
    return rowValue != null && valuePath ? get(rowValue, valuePath) : undefined;
  }

  set cellValue(value: unknown) {
    let { rowValue, valuePath } = this;
    if (rowValue != null && valuePath) {
      set(rowValue, valuePath, value);
    }
  }

  get cellMeta(): TableCellMeta {
    let cache = this.rowMeta._cellMetaCache;
    let columnValue = this.columnValue;
    let meta = cache.get(columnValue);
    if (!meta) {
      // An EmberObject, so apps' `set()` calls on it are tracked.
      meta = EmberObject.create() as unknown as TableCellMeta;
      cache.set(columnValue, meta);
    }
    return meta;
  }
}

class RowApi<RowType extends EmberTableRow, ColumnType extends EmberTableColumn>
  implements RowApiShape<RowType, ColumnType>
{
  private row: RowWrapper<RowType, ColumnType>;

  constructor(row: RowWrapper<RowType, ColumnType>) {
    this.row = row;
  }

  get rowValue() {
    return this.row.args.rowValue;
  }

  get rowMeta() {
    return this.row.rowMeta;
  }

  get cells() {
    return this.row.cells;
  }

  get rowSelectionMode() {
    return this.row.rowSelectionMode;
  }

  get rowToggleMode() {
    return this.row.args.rowToggleMode;
  }

  get rowsCount() {
    return this.row.args.rowsCount;
  }
}

export default class RowWrapper<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn,
> extends Component<RowWrapperSignature<RowType, ColumnType>> {
  api = new RowApi<RowType, ColumnType>(this);
  private cellApis: CellApi<RowType, ColumnType>[] = [];

  get rowMeta(): RowMeta {
    // The collapse tree creates a row's meta before the row is rendered.
    return this.args.rowMetaCache.get(this.args.rowValue)!;
  }

  get rowSelectionMode(): SelectionMode {
    return this.args.canSelect ? (this.args.rowSelectionMode ?? 'none') : 'none';
  }

  @cached
  get cells() {
    let count: number = get(this.args.columns, 'length');
    while (this.cellApis.length < count) {
      this.cellApis.push(new CellApi(this, this.cellApis.length));
    }
    this.cellApis.length = count;
    return this.cellApis.slice();
  }

  <template>{{yield this.api}}</template>
}
