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
