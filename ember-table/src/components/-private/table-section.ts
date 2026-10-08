import Component from '@glimmer/component';
import { readOnly } from '@ember/object/computed';
import { dependentKeyCompat } from '@ember/object/compat';
import { assert } from '@ember/debug';
import { registerDestructor } from '@ember/destroyable';
import type Owner from '@ember/owner';
import CollapseTree from '../../-private/collapse-tree.ts';
import { unwrapApi, type TableApiArg } from '../../-private/unwrap-api.ts';
import { defaultTo } from '../../-private/utils/default-to.ts';
import type {
  CollapseTree as CollapseTreeShape,
  RowMeta,
  SelectionMode,
} from '../../-private/types.ts';
import type { EmberTableColumn, EmberTableRow, EmberTableSort } from '../../index.ts';

let setupRowCountForTest = false;
export function setSetupRowCountForTest(value: boolean) {
  setupRowCountForTest = value;
}

const EMPTY: readonly never[] = Object.freeze([]);

/** Passed to `onSelect`; `abort()` keeps the next range selection anchored. */
export interface SelectionDetails {
  abort(): void;
}

/** Arguments shared by the table's row sections (`<EmberTbody>`, `<EmberTfoot>`). */
export interface TableSectionArgs<RowType extends EmberTableRow> {
  /** @internal The table's API, or the hash `<EmberTable>` yields. */
  api: TableApiArg;
  /**
   * The rows to display.
   * @default []
   */
  rows?: RowType[];
  /**
   * Lets tree rows collapse and expand.
   * @default true
   */
  enableCollapse?: boolean;
  /**
   * Renders rows with a `children` array as expandable tree nodes.
   * @default true
   */
  enableTree?: boolean;
  /** The selected rows: an array, or a single row. */
  selection?: RowType[] | RowType | null;
  /** Decides whether a row is selected, instead of comparing it to `@selection` by identity. */
  selectionMatchFunction?: (selection: RowType, row: RowType) => boolean;
  /**
   * Whether selecting all of a row's children also selects the row.
   * @default true
   */
  selectingChildrenSelectsParent?: boolean;
  /**
   * Called when the selection changes, with the new selection (an array, or a single row in `single` mode) and `{ abort }`. Calling `abort()` keeps the anchor of the next shift-click range unchanged.
   */
  onSelect?: (rows: RowType[] | RowType, details: SelectionDetails) => void;
  /**
   * How each row's selection checkbox behaves: `none` hides the checkboxes, `single` selects only the checked row, and `multiple` adds the row to the selection.
   * @default 'multiple'
   */
  checkboxSelectionMode?: SelectionMode;
  /**
   * How clicking a row selects it: `none` does nothing, `single` selects only that row, and `multiple` adds rows through ctrl/cmd-click and ranges through shift-click.
   * @default 'multiple'
   */
  rowSelectionMode?: SelectionMode;
}

// See `HeadColumnTree` in `ember-thead`: the collapse tree derives its inputs
// from the body's getters instead of having them pushed in on every change.
class BodyCollapseTree extends CollapseTree {
  declare _body: object;

  @readOnly('_body.rows') declare rows: CollapseTree['rows'];
  @readOnly('_body.sorts') declare sorts: CollapseTree['sorts'];
  @readOnly('_body.sortFunction') declare sortFunction: CollapseTree['sortFunction'];
  @readOnly('_body.compareFunction') declare compareFunction: CollapseTree['compareFunction'];
  @readOnly('_body.sortEmptyLast') declare sortEmptyLast: CollapseTree['sortEmptyLast'];
  @readOnly('_body.enableCollapse') declare enableCollapse: CollapseTree['enableCollapse'];
  @readOnly('_body.enableTree') declare enableTree: CollapseTree['enableTree'];
  @readOnly('_body.selection') declare selection: CollapseTree['selection'];
  @readOnly('_body.selectionMatchFunction')
  declare selectionMatchFunction: CollapseTree['selectionMatchFunction'];
  @readOnly('_body.selectingChildrenSelectsParent')
  declare selectingChildrenSelectsParent: CollapseTree['selectingChildrenSelectsParent'];
}

/**
  A row section of the table. Its collapse tree derives rows, sorting and
  selection from the section's arguments and the header.
*/
export default abstract class TableSection<
  RowType extends EmberTableRow,
  ColumnType extends EmberTableColumn,
  Signature extends { Args: TableSectionArgs<RowType> },
> extends Component<Signature> {
  rowMetaCache = new Map<RowType, RowMeta>();
  collapseTree: CollapseTreeShape;

  constructor(owner: Owner, args: Signature['Args']) {
    super(owner, args);

    assert(
      'You must create an <EmberThead /> with columns before creating a table body or footer',
      Boolean(this.unwrappedApi.columnTree)
    );

    let collapseTree = BodyCollapseTree.create({
      _body: this,
      rowMetaCache: this.rowMetaCache as unknown as CollapseTree['rowMetaCache'],
      onSelect: (selection, details) =>
        this.args.onSelect?.(selection as RowType[] | RowType, details),
    });
    this.collapseTree = collapseTree;

    registerDestructor(this, () => this.teardown());
  }

  get unwrappedApi() {
    return unwrapApi(this.args.api)!;
  }

  @dependentKeyCompat get rows(): readonly RowType[] {
    return defaultTo(this.args.rows, EMPTY);
  }

  @dependentKeyCompat get sorts(): readonly EmberTableSort[] {
    return this.unwrappedApi.sorts ?? EMPTY;
  }

  @dependentKeyCompat get sortFunction() {
    return this.unwrappedApi.sortFunction;
  }

  @dependentKeyCompat get compareFunction() {
    return this.unwrappedApi.compareFunction;
  }

  @dependentKeyCompat get sortEmptyLast() {
    return this.unwrappedApi.sortEmptyLast;
  }

  @dependentKeyCompat get enableCollapse(): boolean {
    return defaultTo(this.args.enableCollapse, true);
  }

  @dependentKeyCompat get enableTree(): boolean {
    return defaultTo(this.args.enableTree, true);
  }

  @dependentKeyCompat get selection(): RowType[] | RowType | null | undefined {
    return this.args.selection;
  }

  @dependentKeyCompat get selectionMatchFunction(): TableSectionArgs<RowType>['selectionMatchFunction'] {
    return this.args.selectionMatchFunction;
  }

  @dependentKeyCompat get selectingChildrenSelectsParent(): boolean {
    return defaultTo(this.args.selectingChildrenSelectsParent, true);
  }

  get columns() {
    return this.unwrappedApi.columnTree!.leaves as ColumnType[];
  }

  get columnMetaCache() {
    return this.unwrappedApi.columnTree!.columnMetaCache;
  }

  get checkboxSelectionMode(): SelectionMode {
    return defaultTo(this.args.checkboxSelectionMode, 'multiple');
  }

  get rowSelectionMode(): SelectionMode {
    return defaultTo(this.args.rowSelectionMode, 'multiple');
  }

  get canSelect() {
    return Boolean(this.args.onSelect);
  }

  get dataTestRowCount() {
    return setupRowCountForTest ? this.collapseTree.length : null;
  }

  teardown() {
    for (let [row, meta] of this.rowMetaCache) {
      meta.destroy();
      this.rowMetaCache.delete(row);
    }
    this.collapseTree.destroy();
  }
}
