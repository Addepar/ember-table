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
