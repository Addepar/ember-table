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

export interface EmberTableRow {}

export interface EmberTableSort {
  isAscending: boolean;
  valuePath: string;
}

export interface TableRowMeta {
  isCollapsed: boolean;
  isSelected: boolean;
  isGroupSelected: boolean;
  isGroupIndeterminate: boolean;
  canCollapse: boolean;
  depth: number;
  first: unknown | null;
  last: unknown | null;
  next: unknown | null;
  prev: unknown | null;
}

export interface TableColumnMeta {
  isLeaf: boolean;
  isFixed: 'left' | 'right' | undefined;
  isSortable: boolean;
  isResizable: boolean;
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
