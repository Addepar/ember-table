import ResizeSensor from 'css-element-queries/src/ResizeSensor';
import Component from '@glimmer/component';
import { cached } from '@glimmer/tracking';
import EmberObject, { action, get } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import { dependentKeyCompat } from '@ember/object/compat';
import { A as emberA } from '@ember/array';
import { assert } from '@ember/debug';
import { isPresent } from '@ember/utils';
import { registerDestructor } from '@ember/destroyable';
import { hash } from '@ember/helper';
import { didInsert, didUpdate } from '@ember/render-modifiers';
import type Owner from '@ember/owner';
import type { WithBoundArgs } from '@glint/template';
import { closest } from '../../-private/utils/element.ts';
import MetaCache from '../../-private/meta-cache.ts';
import { sortMultiple, compareValues } from '../../-private/utils/sort.ts';
import { defaultTo } from '../../-private/utils/default-to.ts';
import ColumnTree, {
  type TableColumnMeta,
  type TreeColumn,
} from '../../-private/column-tree.ts';
import EmberTr from '../ember-tr/component.gts';
import { unwrapApi, type TableApiArg } from '../../-private/unwrap-api.ts';
import type { TableHead } from '../../-private/table-api.ts';
import type {
  ColumnMetaCache,
  ColumnTree as ColumnTreeShape,
  HeaderCellApi,
  HeaderRowApi,
  HeaderRowMeta,
  SortFunction,
} from '../../-private/types.ts';
import type {
  EmberTableColumn,
  EmberTableRow,
  EmberTableSort,
} from '../../index.ts';

let isTestingThead = false;
export function setupTHeadForTest(value: boolean) {
  isTestingThead = value;
}

const EMPTY: readonly never[] = Object.freeze([]);

type FillMode = 'equal-column' | 'first-column' | 'last-column' | 'nth-column';

export interface EmberTheadArgs<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn,
> {
  /** @internal The table's API, or the hash `<EmberTable>` yields. */
  api: TableApiArg;

  /** Classes to add to the element, alongside its own. */
  class?: string;

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

  /**
   * Compares two cell values when sorting. The default orders empty values (`null`, `undefined`, `NaN` and `''`) first, or last with `@sortEmptyLast`.
   * @default compareValues
   */
  compareFunction?: <T = RowType[keyof RowType]>(
    valueA: T,
    valueB: T,
    sortEmptyLast: boolean,
  ) => number;

  /**
   * A numeric adjustment to be applied to the constraint on the table's size.
   */
  containerWidthAdjustment?: number;

  /**
   * Flag that toggles reordering in the table.
   * @default true
   */
  enableReorder?: boolean;

  /**
   * Flag that toggles resizing in the table.
   * @default true
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
    * @default 'equal-column'
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
   */
  onReorder?: (columnA: ColumnType, columnB: ColumnType) => void;

  /**
   * An action that is sent when columns are resized.
   */
  onResize?: (column: ColumnType) => void;

  /**
   * An action that is sent when sorts is updated. Sorting is enabled only when
   * this is passed; update `@sorts` with the value it receives.
   */
  onUpdateSorts?: (sorts: EmberTableSort[]) => void;

  /**
   * Sets which column resizing behavior to use.
   * Possible values are `standard` (resizing a column pushes or pulls all other columns) and `fluid` (resizing a column subtracts width from neighboring columns).
   * @default 'standard'
   */
  resizeMode?: 'standard' | 'fluid';

  /**
   * Enables shadows at the edges of the table to show that the user can scroll to view more content.
   * Possible string values are `all`, `horizontal`, `vertical`, and `none`.
   * The boolean values `true` and `false` are aliased to `all` and `none`, respectively.
   * @default false
   */
  scrollIndicators?: 'none' | 'all' | 'horizontal' | 'vertical' | boolean;

  /**
   * Flag that allows to sort empty values after non empty ones.
   * @default false
   */
  sortEmptyLast?: boolean;

  /**
   * An optional sort.
   * If not specified, defaults to `<sortMultiple>`, which sorts by each `sort` in `sorts`, in order.
   * Pass `null` to turn off client-side sorting (e.g. when rows are sorted by the server).
   * @default sortMultiple
   */
  sortFunction?:
    | (<T = RowType[keyof RowType]>(
        itemA: T,
        itemB: T,
        /** @default [] */
        sorts: EmberTableSort[],
        compare: (valueA: T, valueB: T, sortEmptyLast: boolean) => number,
        sortEmptyLast: boolean,
      ) => number)
    | null;

  /**
   * An ordered array of the sorts applied to the table.
   */
  sorts?: EmberTableSort[];

  /**
   * Sets a constraint on the table's size, such that it must be greater than, less than, or equal to the size of the containing element.
   * @default 'none'
   */
  widthConstraint?:
    | 'none'
    | 'eq-container'
    | 'eq-container-slack'
    | 'gte-container'
    | 'gte-container-slack'
    | 'lte-container';
}

export interface EmberTheadSignature<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn,
> {
  Element: HTMLTableSectionElement;
  Args: EmberTheadArgs<RowType, ColumnType>;
  Blocks: {
    default: [
      {
        /** The header cells of this row. */
        cells: HeaderCellApi<ColumnType>[];
        /** Always `true`: this is a header row. */
        isHeader: true;
        /** The number of header rows (more than one with subcolumns). */
        rowsCount: number;
        /** The row API, to pass as `@api` to a custom row component. */
        api: HeaderRowApi<ColumnType>;
        /** `<EmberTr>` for this header row, with `@api` set. */
        row: WithBoundArgs<typeof EmberTr<HeaderRowApi<ColumnType>>, 'api'>;
      },
    ];
  };
}

// The column tree is a classic model. Rather than pushing Glimmer args into it
// whenever they change, its inputs are aliases of the header's getters, so the
// model's computed properties and observers stay in sync through autotracking.
class HeadColumnTree extends ColumnTree {
  declare _head: object;

  @readOnly('_head.columns') declare columns: ColumnTree['columns'];
  @readOnly('_head.sorts') declare sorts: ColumnTree['sorts'];
  @readOnly('_head.fillMode') declare fillMode: ColumnTree['fillMode'];
  @readOnly('_head.initialFillMode')
  declare initialFillMode: ColumnTree['initialFillMode'];
  @readOnly('_head.fillColumnIndex')
  declare fillColumnIndex: ColumnTree['fillColumnIndex'];
  @readOnly('_head.resizeMode') declare resizeMode: ColumnTree['resizeMode'];
  @readOnly('_head.widthConstraint')
  declare widthConstraint: ColumnTree['widthConstraint'];
  @readOnly('_head.containerWidthAdjustment')
  declare containerWidthAdjustment: ColumnTree['containerWidthAdjustment'];
  @readOnly('_head.enableSort') declare enableSort: ColumnTree['enableSort'];
  @readOnly('_head.enableResize')
  declare enableResize: ColumnTree['enableResize'];
  @readOnly('_head.enableReorder')
  declare enableReorder: ColumnTree['enableReorder'];
}

/**
 * The table header. It lays out `@columns`, including nested subcolumns, and
 * handles sorting, resizing and reordering. It yields once per header row (more
 * than one with subcolumns); without a block it renders default header cells.
 */
export default class EmberThead<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn,
>
  extends Component<EmberTheadSignature<RowType, ColumnType>>
  implements TableHead
{
  columnMetaCache: ColumnMetaCache;
  columnTree: ColumnTreeShape;
  private rowMetaCache = new Map<unknown, HeaderRowMeta & EmberObject>();
  private container: HTMLElement | null = null;
  private tableResizeSensor: ResizeSensor | null = null;

  constructor(owner: Owner, args: EmberTheadArgs<RowType, ColumnType>) {
    super(owner, args);

    let columnMetaCache = new MetaCache<TreeColumn, TableColumnMeta>({
      keyPath: this.args.columnKeyPath,
    });
    let columnTree = HeadColumnTree.create({
      _head: this,
      columnMetaCache,
      onReorder: (column, closestColumn) =>
        this.args.onReorder?.(
          column as ColumnType,
          closestColumn as ColumnType,
        ),
      onResize: (column) => this.args.onResize?.(column as ColumnType),
    });
    // The components see the models through the interfaces in `types.ts`.
    this.columnMetaCache = columnMetaCache as unknown as ColumnMetaCache;
    this.columnTree = columnTree as unknown as ColumnTreeShape;

    this.validateUniqueColumnKeys();
    this.unwrappedApi.registerHead(this);

    registerDestructor(this, () => this.teardown());
  }
  // The yielded row is typed as a header row (`EmberTr<HeaderRowApi>`), so it
  // yields header cells; this is the one place that is asserted.
  asHeaderRow = (row: object) =>
    row as EmberTheadSignature<
      RowType,
      ColumnType
    >['Blocks']['default'][0]['row'];

  get unwrappedApi() {
    return unwrapApi(this.args.api)!;
  }

  @dependentKeyCompat get columns(): readonly ColumnType[] {
    return defaultTo(this.args.columns, EMPTY);
  }

  @dependentKeyCompat get sorts(): readonly EmberTableSort[] {
    return defaultTo(this.args.sorts, EMPTY);
  }

  @dependentKeyCompat get fillMode(): FillMode {
    return defaultTo(this.args.fillMode, 'equal-column');
  }

  @dependentKeyCompat get initialFillMode(): FillMode | undefined {
    return this.args.initialFillMode;
  }

  @dependentKeyCompat get fillColumnIndex() {
    return this.args.fillColumnIndex;
  }

  @dependentKeyCompat get resizeMode() {
    return defaultTo(this.args.resizeMode, 'standard');
  }

  @dependentKeyCompat get widthConstraint() {
    return defaultTo(this.args.widthConstraint, 'none');
  }

  @dependentKeyCompat get containerWidthAdjustment() {
    return this.args.containerWidthAdjustment;
  }

  @dependentKeyCompat get enableSort() {
    return Boolean(this.args.onUpdateSorts);
  }

  @dependentKeyCompat get enableResize() {
    return defaultTo(this.args.enableResize, true);
  }

  @dependentKeyCompat get enableReorder() {
    return defaultTo(this.args.enableReorder, true);
  }

  get sortFunction() {
    return defaultTo(this.args.sortFunction, sortMultiple) as SortFunction | null;
  }

  get compareFunction() {
    return defaultTo(this.args.compareFunction, compareValues);
  }

  get sortEmptyLast() {
    return defaultTo(this.args.sortEmptyLast, false);
  }

  get scrollIndicators() {
    return defaultTo(this.args.scrollIndicators, false);
  }

  get wrappedRowsCount() {
    return isTestingThead ? this.wrappedRows.length : null;
  }

  @cached
  get wrappedRows(): HeaderRowApi<ColumnType>[] {
    let rows = this.columnTree.rows as ColumnType[][];
    let getSorts = () => this.sorts;

    return emberA(
      rows.map((row, index) => {
        let rowMeta = this.rowMetaCache.get(row);
        if (!rowMeta) {
          rowMeta = EmberObject.create() as HeaderRowMeta & EmberObject;
          this.rowMetaCache.set(row, rowMeta);
        }
        rowMeta.set('index', index);
        let meta = rowMeta;

        let cells: HeaderCellApi<ColumnType>[] = emberA(
          row.map((columnValue) => ({
            columnValue,
            columnMeta: this.columnMetaCache.get(columnValue),
            rowMeta: meta,
            get sorts() {
              return getSorts();
            },
            sendUpdateSort: this.sendUpdateSort,
          })),
        );

        return {
          cells,
          rowMeta,
          rowsCount: rows.length,
          isHeader: true as const,
        };
      }),
    );
  }

  validateUniqueColumnKeys() {
    let keyPath = this.args.columnKeyPath;
    if (!keyPath) return;

    let keys: unknown[] = [];
    let queue: EmberTableColumn[] = [...this.columns];
    while (queue.length) {
      let column = queue.shift()!;
      keys.push(get(column, keyPath));
      if (column.subcolumns) queue.push(...column.subcolumns);
    }

    let present = emberA(keys.filter(isPresent));
    assert(
      'if columnKeyPath is specified, every column must have a key',
      present.length === keys.length,
    );
    assert(
      'if columnKeyPath is specified, no two columns can share the same key',
      present.uniq().length === present.length,
    );
  }

  @action
  setup(element: HTMLElement) {
    let container = closest(element, '.ember-table-overflow') as HTMLElement;
    this.container = container;
    this.columnTree.registerContainer(container);
    this.columnTree.performInitialLayout();
    this.tableResizeSensor = new ResizeSensor(container, this.fillupHandler);
  }

  @action
  columnsDidChange() {
    this.validateUniqueColumnKeys();
    this.columnMetaCache.keyPath = this.args.columnKeyPath;

    if (this.columns.length > 0) {
      this.fillupHandler();
    }
  }

  @action
  sendUpdateSort(sorts: EmberTableSort[]) {
    this.args.onUpdateSorts?.(sorts);
  }

  @action
  fillupHandler() {
    if (!this.isDestroying) {
      this.columnTree.ensureWidthConstraint();
    }
  }

  teardown() {
    this.unwrappedApi.unregisterHead(this);
    this.tableResizeSensor?.detach();
    this.columnTree.destroy();

    for (let cache of [this.columnMetaCache, this.rowMetaCache]) {
      for (let [key, meta] of cache.entries()) {
        meta.destroy();
        cache.delete(key);
      }
    }
  }

  <template>
    <thead
      ...attributes
      data-test-row-count={{this.wrappedRowsCount}}
      {{didInsert this.setup}}
      {{didUpdate this.columnsDidChange this.columnTree.leaves @columnKeyPath}}
    >
      {{#each this.wrappedRows as |api|}}
        {{#if (has-block)}}
          {{yield
            (hash
              cells=api.cells
              isHeader=api.isHeader
              rowsCount=api.rowsCount
              api=api
              row=(this.asHeaderRow (component EmberTr api=api))
            )
          }}
        {{else}}
          <EmberTr @api={{api}} />
        {{/if}}
      {{/each}}
    </thead>
  </template>
}
