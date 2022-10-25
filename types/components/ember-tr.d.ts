import Component from '@ember/component';
import { Column } from './ember-table';
import EmberTdComponent, { CellMeta } from './ember-td';

export interface RowClickEvent<R> {
  event: MouseEvent;
  rowValue: R;
  rowMeta: RowMeta<R>;
}

interface RowMetaSelect {
  toggle?: boolean;
  range?: boolean;
  single?: boolean;
}

export interface RowMeta<T> {
  //attributes
  readonly index: number;
  readonly canCollapse: boolean;
  readonly depth: number;
  readonly isCollapsed: boolean;
  readonly isGroupSelected: boolean;
  readonly isSelected: boolean;
  readonly first: T;
  readonly last: T;
  readonly next?: T | null;
  readonly prev?: T | null;

  //methods
  select(arg0: RowMetaSelect): void;
}

export interface EmberTrSignature {
  Element: HTMLTableRowElement;
  Args: {
    tableClasses?: string;
    /**
     * An action that is called when a row is clicked. Will be called with the row and the event.
     */
    onClick?: ((rowClickEvent: RowClickEvent<unknown>) => void) | undefined;

    /**
     * An action that is called when a row is double clicked. Will be called with the row and the event.
     *
     */
    onDoubleClick?: ((rowClickEvent: RowClickEvent<unknown>) => void) | undefined;
  };
  Blocks: {
    default: [
      {
        cell: typeof EmberTdComponent;
        cellMeta: CellMeta;
        cellValue: unknown;
        columnMeta: unknown;
        columnValue: Column;
        rowMeta: RowMeta<unknown>;
        rowValue: unknown;
        rowsCount: number;
      }
    ];
  };
}

export default class EmberTrComponent extends Component<EmberTrSignature> {}
