import EmberObject, { computed, get, notifyPropertyChange, set } from '@ember/object';
import EmberArray, { A as emberA, isArray, type NativeArray } from '@ember/array';
import { assert, warn } from '@ember/debug';

import type { EmberTableSort } from '../index.ts';
import type { CompareFunction, SortFunction } from './types.ts';
import { addObserver } from './utils/observer.ts';
import { objectAt } from './utils/array.ts';
import { getOrCreate } from './meta-cache.ts';
import { mergeSort } from './utils/sort.ts';

export const SELECT_MODE = {
  NONE: 'none',
  SINGLE: 'single',
  MULTIPLE: 'multiple',
} as const;

/** A row as the tree sees it. Rows with a `children` array are groups. */
interface TreeRow {
  children?: TreeRow[];
  isCollapsed?: boolean;
  disableCollapse?: boolean;
}

type Selection = TreeRow | TreeRow[] | null | undefined;
type SelectionMatchFunction = (selected: unknown, row: unknown) => boolean;

export interface SelectionDetails {
  abort(): void;
}

export class TableRowMeta extends EmberObject {
  _rowValue: TreeRow | null = null;
  _isCollapsed = false;

  declare _tree: CollapseTree;
  declare _parentMeta: TableRowMeta | null;
  declare index: number;

  /**
   The map that contains cell meta information for this row. Is meant to be
   unique to this row, which is why it is created here. In order to prevent
   memory leaks, we need to be able to clean the cache manually when the row
   is destroyed or updated, which is why we use a Map instead of WeakMap
   */
  declare _cellMetaCache: Map<unknown, unknown>;

  @computed('_rowValue.isCollapsed')
  get isCollapsed(): boolean {
    let rowValue = get(this, '_rowValue')!;

    if (Object.prototype.hasOwnProperty.call(rowValue, 'isCollapsed')) {
      return get(rowValue, 'isCollapsed')!;
    } else {
      return this._isCollapsed;
    }
  }

  // Ember caches the getter's result after the setter runs, which is the
  // value the classic setter returned.
  set isCollapsed(isCollapsed: boolean) {
    let rowValue = get(this, '_rowValue')!;

    if (Object.prototype.hasOwnProperty.call(rowValue, 'isCollapsed')) {
      set(rowValue, 'isCollapsed', isCollapsed);
    } else {
      this._isCollapsed = isCollapsed;
    }
  }

  @computed('_tree.{selection.[],selectionMatchFunction}', '_parentMeta.isSelected')
  get isSelected(): boolean {
    let rowValue = get(this, '_rowValue');
    let selection = get(this, '_tree.selection') as Selection;
    let selectionMatchFunction = get(this, '_tree.selectionMatchFunction') as
      | SelectionMatchFunction
      | undefined;

    if (isArray(selection)) {
      return this.get('isGroupSelected');
    }

    let isRowSelection = selectionMatchFunction
      ? selectionMatchFunction(selection, rowValue)
      : selection === rowValue;
    return isRowSelection || (get(this, '_parentMeta.isSelected') as boolean);
  }

  @computed('_tree.{selection.[],selectionMatchFunction}', '_parentMeta.isSelected')
  get isGroupSelected(): boolean {
    let rowValue = get(this, '_rowValue')!;
    let selection = get(this, '_tree.selection') as Selection;
    let selectionMatchFunction = get(this, '_tree.selectionMatchFunction') as
      | SelectionMatchFunction
      | undefined;

    if (!selection || !isArray(selection)) {
      return false;
    }

    let isSelectionMatch = selectionMatchFunction
      ? selection.filter((item) => selectionMatchFunction(item, rowValue)).length > 0
      : selection.includes(rowValue);
    return isSelectionMatch || (get(this, '_parentMeta.isGroupSelected') as boolean);
  }

  @computed('_tree.{enableTree,enableCollapse}', '_rowValue.{children.[],disableCollapse}')
  get canCollapse(): boolean {
    if (!get(this, '_tree.enableTree') || !get(this, '_tree.enableCollapse')) {
      return false;
    }

    let children = get(this, '_rowValue.children') as TreeRow[] | undefined;

    return (
      !get(this, '_rowValue.disableCollapse') && isArray(children) && get(children, 'length') > 0
    );
  }

  @computed('_parentMeta.depth')
  get depth(): number {
    let parentMeta = get(this, '_parentMeta');

    return parentMeta ? get(parentMeta, 'depth') + 1 : 0;
  }

  @computed('_tree.length')
  get first(): TreeRow | null | undefined {
    if (get(this, '_tree.length') === 0) {
      return null;
    }
    return get(this, '_tree').objectAt(0);
  }

  @computed('_tree.length')
  get last(): TreeRow | undefined {
    let tree = get(this, '_tree');
    return tree.objectAt(get(tree, 'length') - 1);
  }

  @computed('_tree.length')
  get next(): TreeRow | null | undefined {
    let tree = get(this, '_tree');
    if (get(this, 'index') + 1 >= get(tree, 'length')) {
      return null;
    }
    return tree.objectAt(get(this, 'index') + 1);
  }

  @computed('_tree.length')
  get prev(): TreeRow | null | undefined {
    if (get(this, 'index') === 0) {
      return null;
    }
    return get(this, '_tree').objectAt(get(this, 'index') - 1);
  }

  init(properties?: object): void {
    super.init(properties);

    this._cellMetaCache = new Map();
  }

  toggleCollapse(): void {
    let canCollapse = get(this, 'canCollapse');

    if (canCollapse) {
      set(this, 'isCollapsed', !get(this, 'isCollapsed'));
    }
  }

  select({
    single,
    toggle,
    range,
  }: { single?: boolean; toggle?: boolean; range?: boolean } = {}): void {
    if (get(this, 'isDestroying') || get(this, 'isDestroyed')) {
      return;
    }
    let tree = get(this, '_tree');
    let rowValue = get(this, '_rowValue')!;
    let rowIndex = get(this, 'index');
    let isGroupSelected = get(this, 'isGroupSelected');
    let selectingChildrenSelectsParent = get(tree, 'selectingChildrenSelectsParent');

    let rowMetaCache = get(tree, 'rowMetaCache');

    // create an abort function that the action handler can call to roll back
    // internal state (e.g. last selected index)
    let didAbort = false;
    let abort = function abort() {
      didAbort = true;
    };

    if (single) {
      tree._lastSelectedIndex = null;
      tree.onSelect?.(rowValue, { abort });
      return;
    }

    let oldSelection = get(tree, 'selection');

    // If the old selection is an array, then we add to it. If not, we restart
    // the selection as a group.
    let selection = isArray(oldSelection) ? new Set(oldSelection) : new Set<TreeRow>();

    if (range) {
      // Use a set to avoid item duplication
      let { _lastSelectedIndex } = tree;

      let isFirstIndexDefined = typeof _lastSelectedIndex === 'number';

      let minIndex = isFirstIndexDefined ? Math.min(_lastSelectedIndex!, rowIndex) : rowIndex;
      let maxIndex = isFirstIndexDefined ? Math.max(_lastSelectedIndex!, rowIndex) : rowIndex;

      for (let i = minIndex; i <= maxIndex; i++) {
        selection.add(tree.objectAt(i)!);
      }
    } else if (toggle) {
      if (isGroupSelected) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias -- walks up to the parent metas
        let meta: TableRowMeta = this;
        let currentValue = rowValue;

        // If the parent is selected all of its children are selected. Since
        // the current row is going to be removed from the selection, add all
        // the sibling rows at each level of its grouping to be explicitly
        // selected so their state remains stable.
        while (get(meta, '_parentMeta.isSelected')) {
          meta = get(meta, '_parentMeta')!;

          // Iterate from the parent meta to the "next" tree node. Since this
          // is a group it will have at least one child, so there should be at
          // least one next row to iterate over.
          let expectedChildDepth = get(meta, 'depth') + 1;
          let childIndex = get(meta, 'index'); // will be incremented by 1 before use
          let child;
          while ((child = tree.objectAt(++childIndex))) {
            // The currentValue is being toggled, don't add it to the selection
            if (child === currentValue) {
              continue;
            }

            // If the depth of the row is lower than the expectedChildDepth a
            // non-child meta has been found (a sibling or something higher.
            // That means iterating children is complete, so break.
            //
            // If the depth is higher than expected then children of a child
            // group are being iterated. Skip over them, but don't break since
            // there may be a leaf child after a group child.
            let childMeta = rowMetaCache.get(child)!;
            let childDepth = get(childMeta, 'depth');
            if (childDepth < expectedChildDepth) {
              break;
            }
            if (childDepth > expectedChildDepth) {
              continue;
            }

            // Else, this is a child node which must be explictly selected.
            // Add it to the list.
            selection.add(child);
          }

          selection.delete(currentValue);
          currentValue = get(meta, '_rowValue')!;
        }

        selection.delete(currentValue);
      } else {
        selection.add(rowValue);
      }
    } else {
      selection.clear();
      selection.add(rowValue);
    }

    let rowMetas = mapSelectionToMeta(this.get('_tree'), selection);

    if (selectingChildrenSelectsParent) {
      let groupingCounts = new Map<TreeRow, number>();

      for (let rowMeta of rowMetas) {
        let parentRow = get(rowMeta, '_parentMeta._rowValue') as TreeRow | undefined;

        if (parentRow) {
          let count = groupingCounts.has(parentRow) ? groupingCounts.get(parentRow)! : 0;
          groupingCounts.set(parentRow, count + 1);
        }
      }

      reduceSelectedRows(selection, groupingCounts, rowMetaCache);
    }

    for (let rowMeta of rowMetas) {
      let rowValue = get(rowMeta, '_rowValue')!;
      let parentMeta = get(rowMeta, '_parentMeta');

      while (parentMeta) {
        if (selection.has(get(parentMeta, '_rowValue')!)) {
          selection.delete(rowValue);
          break;
        }

        parentMeta = get(parentMeta, '_parentMeta');
      }
    }

    let newSelection = emberA(Array.from(selection));

    tree.onSelect?.(newSelection, { abort });

    // if the action handler calls `abort`, do not update the starting point
    // for a subsequent multi-select
    if (!didAbort) {
      tree._lastSelectedIndex = rowIndex;
    }
  }

  destroy(): this {
    let result = super.destroy();

    this._cellMetaCache.clear();

    return result;
  }
}

type RowMetaCache = Map<TreeRow, TableRowMeta>;

function reduceSelectedRows(
  selection: Set<TreeRow>,
  groupingCounts: Map<TreeRow, number>,
  rowMetaCache: RowMetaCache
): void {
  let reducedGroupingCounts = new Map<TreeRow, number>();

  for (let [group, count] of groupingCounts.entries()) {
    if (get(group, 'children.length') === count) {
      selection.add(group);

      let parentRow = rowMetaCache.get(group)!.get('_parentMeta._rowValue') as TreeRow | undefined;

      if (parentRow) {
        let currentCount =
          reducedGroupingCounts.get(parentRow) || groupingCounts.get(parentRow) || 0;

        reducedGroupingCounts.set(parentRow, currentCount + 1);
      }
    }
  }

  if (reducedGroupingCounts.size > 0) {
    reduceSelectedRows(selection, reducedGroupingCounts, rowMetaCache);
  }
}

function setupRowMeta(
  tree: CollapseTree,
  row: TreeRow,
  parentRow: TreeRow | null | undefined,
  node?: CollapseTreeNode
): void {
  let rowMetaCache = get(tree, 'rowMetaCache');
  let rowMeta = getOrCreate(row, rowMetaCache, TableRowMeta);
  let parentRowMeta = parentRow ? rowMetaCache.get(parentRow) : null;

  set(rowMeta, '_tree', tree);
  set(rowMeta, '_rowValue', row);
  set(rowMeta, '_parentMeta', parentRowMeta);

  if (node) {
    set(node, 'rowMeta', rowMeta);
  }
}

/**
 * Traverses the tree to set up row meta for every row in the tree.
 * Usually row metas are lazily created as needed, but it's possible to end up in a state
 * where a table's `selection` contains rows that do not have a rowMeta (for instance, if they
 * have not yet been rendered due to occlusion rendering). In this state, there may not be a
 * rowMeta for every row in the `selection`, so we need to explicitly set them all up at that
 * time.
 * This has adverse performance impact, so we lazily call this function only when we find that
 * the `selection` has some rows with no corresponding rowMeta.
 *
 * @param tree The collapse tree for this section (body|footer) of the table
 * @param parentRow The parent row. Only present when called recursively
 */
function setupAllRowMeta(tree: CollapseTree, rows: TreeRow[], parentRow: TreeRow | null = null) {
  for (let row of rows) {
    setupRowMeta(tree, row, parentRow);
    if (row.children && row.children.length) {
      setupAllRowMeta(tree, row.children, row);
    }
  }
}

/**
 * Maps the selection to an array of rowMetas.
 *
 * If any row in the selection does not have a rowMeta, calls `setupAllRowMeta`
 * to materialize all rowMetas, then tries again to get the rowMeta for that
 * row. This happens in rare cases where, due to occlusion rendering, a row may
 * be part of the selection but not in view (and thus have no rowMeta; the
 * rowMeta is lazily created when the row is rendered).
 *
 * If after calling `setupAllRowMeta` the row still does not have a
 * corresponding rowMeta, it is likely an invalid selection, which can happen when a user
 * sets the table's selection programmatically and includes a row that is not
 * actually part of the table. If this happens we `warn` because of the adverse
 * performance impact (the forced call to `setupAllRowMeta`) that is caused by
 * spurious rows in the selection.
 * @param tree The collapse tree for this section (body|footer) of the table
 * @param selection The selected rows
 * @return rowMeta for each of the rows in the selection
 */
function mapSelectionToMeta(tree: CollapseTree, selection: Iterable<TreeRow>): TableRowMeta[] {
  let rowMetaCache = tree.get('rowMetaCache');
  let rowMetas: TableRowMeta[] = [];
  let didSetupAllRowMeta = false;

  for (let item of Array.from(selection)) {
    let rowMeta = rowMetaCache.get(item);
    if (!rowMeta && !didSetupAllRowMeta) {
      setupAllRowMeta(tree, tree.get('rows'));
      didSetupAllRowMeta = true;
      rowMeta = rowMetaCache.get(item);
    }

    if (!rowMeta && didSetupAllRowMeta) {
      warn(
        "[ember-table] The selection included a row that was not found in the table's rows. This should be avoided as it causes performance issues.",
        false,
        {
          id: 'ember-table.selection-invalid',
        }
      );
    } else {
      rowMetas.push(rowMeta!);
    }
  }

  return rowMetas;
}

/**
 Given a list of ordered values and a target value, finds the index of
 the closest value which does not exceed the target value

 @param values - the list of values
 @param target - the index to find the closest value to
 @return the index of the value closest to the target
 */
function closestLessThan(values: number[], target: number): number {
  let low = 0;
  let high = values.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (target < values[mid]!) {
      high = mid - 1;
    } else if (target > values[mid]!) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  // low === high + 1, we always want the lower value
  return high;
}

type ChildNode = CollapseTreeNode | TreeRow[];

/**
 Single node of a CollapseTree
 */
class CollapseTreeNode extends EmberObject {
  _childNodes: ChildNode[] | null = null;

  declare value: TreeRow;
  declare parent: CollapseTreeNode | undefined;
  declare tree: CollapseTree;
  declare isRoot: boolean | undefined;
  declare rowMeta: TableRowMeta | undefined;

  init(properties?: object): void {
    super.init(properties);

    let value = get(this, 'value');
    let parentValue = get(this, 'parent.value') as TreeRow | undefined;

    let parent = get(this, 'parent');
    let tree = get(this, 'tree');

    if (!parent) {
      set(this, 'isRoot', true);
    } else {
      setupRowMeta(tree, value, parentValue, this);
    }

    assert('value must have an array of children', isArray(get(value, 'children')));

    if (parent) {
      // Changes to the value directly should properly update all computeds on this
      // node, but we need to manually propagate changes upwards to notify any other
      // watchers
      addObserver(this, 'length', () => {
        notifyPropertyChange(parent, 'length');
      });
    }
  }

  destroy(): this {
    this.cleanChildNodes();

    return super.destroy();
  }

  /**
   Fully destroys the child nodes in the event that they change or that this
   node is destroyed. If children are not destroyed, they will leak memory due
   to dangling references in Ember Meta.
   */
  cleanChildNodes(): void {
    if (this._childNodes) {
      for (let child of this._childNodes) {
        if (child instanceof CollapseTreeNode) {
          child.destroy();
        }
      }
      this._childNodes = null;
    }
  }

  /**
   Whether or not the node is leaf of the CollapseTree. A node is a leaf if
   the wrapped value's children have no children. If so, there is no need to
   create another level of nodes in the tree - true leaves of the passed in
   value tree don't require any custom logic, so we can index directly into
   the array of children in `objectAt`.
   */
  @computed('value.children.@each.children', 'isRoot', 'tree.enableTree')
  get isLeaf(): boolean {
    if (get(this, 'isRoot') && !get(this, 'tree.enableTree')) {
      return true;
    }

    return !(get(this, 'value.children') as TreeRow[]).some((child) =>
      isArray(get(child, 'children'))
    );
  }

  @computed('value.children.[]', 'tree.{sorts.[],sortFunction,compareFunction,sortEmptyLast}')
  get sortedChildren(): TreeRow[] {
    let valueChildren = get(this, 'value.children') as TreeRow[];

    let sorts = get(this, 'tree.sorts') as readonly EmberTableSort[] | undefined;
    let sortFunction = get(this, 'tree.sortFunction') as SortFunction | undefined;
    let compareFunction = get(this, 'tree.compareFunction') as CompareFunction | undefined;
    let sortEmptyLast = get(this, 'tree.sortEmptyLast') as boolean;

    if (sortFunction && compareFunction && sorts && get(sorts, 'length') > 0) {
      valueChildren = mergeSort(valueChildren, (itemA, itemB) => {
        return sortFunction(itemA, itemB, sorts, compareFunction, sortEmptyLast);
      });
    }

    return valueChildren;
  }

  /**
   The children of this node, if they exist. Children can be other nodes, or
   spans (arrays) of leaf value-nodes. For instance:

   ```
   A
   └── B
   ├── C
   └── D
   └── E
   ```

   In this example, A would have the following children:

   ```
   children = [
   [B, C],
   Node(D)
   ];
   ```

   This allows us to do a binary search on the list of children without
   creating a node for each span, arrays simply represent x-children in
   a segment before a given node.
   */
  @computed('sortedChildren.[]', 'isLeaf')
  get childNodes(): ChildNode[] | null {
    this.cleanChildNodes();

    if (get(this, 'isLeaf')) {
      return null;
    }

    let sortedChildren = get(this, 'sortedChildren');
    let tree = get(this, 'tree');
    let children: ChildNode[] = [];
    let sliceStart: number | false = false;

    sortedChildren.forEach((child, index) => {
      let grandchildren = get(child, 'children');

      if (isArray(grandchildren)) {
        if (sliceStart !== false) {
          children.push(sortedChildren.slice(sliceStart, index));
          sliceStart = false;
        }

        children.push(CollapseTreeNode.create({ value: child, parent: this, tree }));
      } else if (sliceStart === false) {
        sliceStart = index;
      }
    });

    if (sliceStart !== false) {
      children.push(sortedChildren.slice(sliceStart));
    }

    this._childNodes = children;

    return children;
  }

  /**
   The length of the node. Branches in three directions:

   1. If the node is collapsed, then the length of the node is 1, the
   node itself. This means that the parent node will only index into
   this child if it is trying to get exactly the child node,
   effectively hiding its children.
   2. If the node is a leaf, then the length is the node itself plus the
   length of its value-children.
   3. Otherwise, the length is the sum of the lengths of its children.
   */
  @computed('childNodes.[]', 'sortedChildren.[]', 'isLeaf', 'rowMeta.isCollapsed', 'tree.enableTree')
  get length(): number {
    if (get(this, 'rowMeta.isCollapsed') === true) {
      return 1;
    } else if (get(this, 'isLeaf')) {
      return 1 + (get(this, 'sortedChildren.length') as number);
    } else {
      return (
        1 + get(this, 'childNodes')!.reduce((sum, child) => sum + get(child, 'length'), 0)
      );
    }
  }

  /**
   Calculates a list of the summation of offsets of children to run a binary
   search against. Given:

   ```
   A
   ├── B
   │   ├── C
   │   └── D
   ├── E(c)
   │   ├── F
   │   └── G
   └── H
   │   ├── I
   │   └── J
   │       └── K
   └── L
   └── M
   ```

   The offsetList for A would be: `[0, 3, 6, 10, 11]`. Each item in this
   list is the offset of the corresponding child, or the summation of the
   lengths of all children preceding it. It is effectively the starting
   index of that child.

   So, if I'm trying to find index 9 in A, which is item K (not counting A
   itself), then I'm going to want to traverse down H, which is the 3rd child.
   I run a binary search against these offsets, which are ordered, and find
   the closest starting index which is strictly less than 9, which is the 3rd
   index. I know I can then recurse down that node and I should eventually
   find the item I'm after.
   */
  @computed('length', 'isLeaf')
  get offsetList(): number[] | null {
    if (get(this, 'isLeaf')) {
      return null;
    }

    let offset = 0;
    let offsetList: number[] = [];

    for (let child of get(this, 'childNodes')!) {
      offsetList.push(offset);
      offset += get(child, 'length');
    }

    return offsetList;
  }

  /**
   Finds the object at the given index, where an index n is defined as the n-th
   item visited during a depth first traversal of the tree. To do this, we either

   1. Return the current node at index 0
   2. If the node is a leaf, return the value child at the corresponding index
   3. Otherwise, find the correct child to walk down to and call `objectAt` on it
   with a normalized index

   `objectAt` also tracks the depth to pass back as meta information, something
   that is useful for displaying the tree as a list. `index` and `depth` are
   normalized as we traverse the tree, every time you "pass" a node you subtract
   it from the index for the next `objectAt` call, and you add 1 to depth for
   every `objectAt` call.

   @param index - the index to find
   */
  objectAt(index: number): TreeRow {
    assert(
      'index must be gte than 0 and less than the length of the node',
      index >= 0 && index < get(this, 'length')
    );

    // The first index in a node is the node itself, since nodes are addressable
    if (index === 0) {
      return get(this, 'value');
    }

    // Passed this node, remove it from the index and go one level deeper
    let normalizedIndex = index - 1;
    let tree = get(this, 'tree');

    if (get(this, 'isLeaf')) {
      let value = objectAt(get(this, 'sortedChildren'), normalizedIndex)!;
      setupRowMeta(tree, value, get(this, 'value'));

      return value;
    }

    let childNodes = get(this, 'childNodes')!;
    let offsetList = get(this, 'offsetList')!;
    let offsetIndex = closestLessThan(offsetList, normalizedIndex);

    normalizedIndex = normalizedIndex - offsetList[offsetIndex]!;

    let child = childNodes[offsetIndex]!;

    if (Array.isArray(child)) {
      let value = child[normalizedIndex]!;
      setupRowMeta(tree, value, get(this, 'value'));

      return value;
    }

    return child.objectAt(normalizedIndex);
  }
}

/**
 The goal of the collapse tree is provide a data structure that:

 1. Given an index n, can find the n-th node visited in a depth-first-walk
 of the tree
 2. Can "hide" or "collapse" nodes, so that their children are not walked

 So given a tree like this, where the (c) annotation means "isCollapsed":

 ```
 A
 ├── B
 │   ├── C
 │   └── D
 ├── E(c)
 │   ├── F
 │   └── G
 └── H
 │   ├── I
 │   └── J
 │       └── K
 └── L
 ```

 `objectAt(0) === A`, `objectAt(2) === C`, `objectAt(4) === E`, and
 `objectAt(5) === H`

 We also want to wrap this structure around a pre-existing tree that is a much
 simpler POJO with the shape:

 ```json
 {
    isCollapsed: false,
    children: [{
      isCollapsed: true,
      children: []
    }]
  }
 ```

 This allows us to provide a simple API to users while being able to index into
 their tree quickly and turn it into a list/table representation, without exposing
 any internal implementation details.

 To do this, each node in the tree has a `length` equal to the lengths of its
 children, and we do a binary search of each layer of the tree to find the closest
 node to the index. We traverse downward until we have the correct node, getting
 there in O(log(n)) time at worst (where n is the average number of nodes in a layer).

 Whenever a level of the tree changes (e.g. a node is added or removed) we must
 rebuild the subtree for that level. In order to keep tree construction and
 allocation costs low, we also do not create nodes for leaf children, since there is
 no need - they are length 1 and have no children, so no custom. Our tree saves an
 order of magnitude of space and allocation costs this way.
 */
export default class CollapseTree extends EmberObject.extend(EmberArray) {
  // Inputs
  declare rows: TreeRow[];
  declare sorts: readonly EmberTableSort[] | undefined;
  declare sortFunction: SortFunction | undefined;
  declare compareFunction: CompareFunction | undefined;
  declare sortEmptyLast: boolean | undefined;
  declare enableCollapse: boolean | undefined;
  declare enableTree: boolean | undefined;
  declare selection: Selection;
  declare selectionMatchFunction: SelectionMatchFunction | undefined;
  declare selectingChildrenSelectsParent: boolean | undefined;
  declare rowMetaCache: RowMetaCache;
  declare onSelect:
    | ((selection: TreeRow | NativeArray<TreeRow>, details: SelectionDetails) => void)
    | undefined;

  declare _root: CollapseTreeNode | null | undefined;
  declare _lastSelectedIndex: number | null | undefined;

  init(properties?: object): void {
    super.init(properties);

    // Whenever the root node's length changes we need to propagate the change to
    // users of the tree, and since the tree is meant to work like an array we should
    // trigger a change on the `[]` key as well.
    addObserver(this, 'root.length', () => notifyPropertyChange(this, '[]'));
  }

  destroy(): this {
    if (this._root) {
      this._root.destroy();
    }

    return super.destroy();
  }

  /*
    The root node of the tree. Either wraps a true root, or a fake one created
    if the root is an array.
  */
  @computed('rows')
  get root(): CollapseTreeNode {
    if (this._root) {
      this._root.destroy();
    }

    let rows = get(this, 'rows');

    this._root = CollapseTreeNode.create({ value: { children: rows }, tree: this });

    return this._root;
  }

  objectAt(index: number): TreeRow | undefined {
    if (index >= get(this, 'length') || index < 0) {
      return undefined;
    }

    // We add a "fake" top level node to account for the root node
    let normalizedIndex = index + 1;
    let result = get(this, 'root').objectAt(normalizedIndex);
    let meta = this.get('rowMetaCache').get(result)!;

    // Set the perceived index on the meta. It should be safe to do this here, since
    // the row will always be retrieved via `objectAt` before being used.
    set(meta, 'index', index);

    return result;
  }

  forEach(fn: (item: TreeRow | undefined, index: number) => void): this {
    let length = get(this, 'length');

    for (let i = 0; i < length; i++) {
      fn(this.objectAt(i), i);
    }

    return this;
  }

  /**
   Normalized length of the tree
   */
  @computed('root.length')
  get length(): number {
    // Remove the root level node from the length count
    return (get(this, 'root.length') as number) - 1;
  }
}
