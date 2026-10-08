import { tracked } from '@glimmer/tracking';
import type { EmberTableSort } from '../index.ts';
import type { ColumnTree, CompareFunction, SortFunction } from './types.ts';

/** What `<EmberThead>` exposes to the rest of the table. */
export interface TableHead {
  columnTree: ColumnTree;
  sorts: readonly EmberTableSort[];
  sortFunction: SortFunction | null;
  compareFunction: CompareFunction;
  sortEmptyLast: boolean;
  scrollIndicators: boolean | string;
}

/**
  The object shared between `<EmberTable>` and its sections. The header
  registers itself, and every header-owned value is derived from it, so
  readers are autotracked without the header having to push values in.
*/
export default class TableApi {
  @tracked head: TableHead | null = null;

  columns = null;

  readonly tableId: string;

  constructor(tableId: string) {
    this.tableId = tableId;
  }

  get columnTree() {
    return this.head?.columnTree;
  }

  get sorts() {
    return this.head?.sorts;
  }

  get sortFunction() {
    return this.head?.sortFunction;
  }

  get compareFunction() {
    return this.head?.compareFunction;
  }

  get sortEmptyLast() {
    return this.head?.sortEmptyLast;
  }

  get scrollIndicators() {
    return this.head?.scrollIndicators;
  }

  registerHead(head: TableHead) {
    this.head = head;
  }

  unregisterHead(head: TableHead) {
    if (this.head === head) {
      this.head = null;
    }
  }
}
