import Component from '@ember/component';
import { Column, TableMeta } from './ember-table';
import { RowClickEvent } from './ember-tr';

export interface CellMeta {
  selected: boolean;
}

export interface EmberTdSignature {
  Element: HTMLTableCellElement;
  Args: {
    api: string;
    /**
     * An action that is called when a row is clicked. Will be called with the row and the event.
     *
     * @memberof TBodyArgs
     */
    onClick?: ((rowClickEvent: RowClickEvent<unknown, unknown>) => void) | undefined;
    onDoubleClick?: ((rowClickEvent: RowClickEvent<unknown, unknown>) => void) | undefined;
    tableMeta?: TableMeta<unknown>;
  };
  Blocks: {
    default: [
      cellMeta: CellMeta,
      cellValue: any,
      columnMeta: any,
      columnValue: Column,
      rowMeta: any,
      rowValue: any,
      rowsCount: number
    ];
  };
}

export default class EmberTdComponent extends Component<EmberTdSignature> {}
