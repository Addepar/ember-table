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

export type EmberTableRow = Record<string, unknown>;