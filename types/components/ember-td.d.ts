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
    tableMeta?: TableMeta<unknown>;
    /**
     * An action that is called when a row is clicked. Will be called with the row and the event.
     *
     * @memberof TBodyArgs
     */
    onClick?: ((rowClickEvent: RowClickEvent<unknown, unknown>) => void) | undefined;
    onDoubleClick?: ((rowClickEvent: RowClickEvent<unknown, unknown>) => void) | undefined;
  };
  Blocks: {
    default: [
      cellValue: any,
      columnValue: Column,
      rowValue: any,
      cellMeta: CellMeta,
      columnMeta: any,
      rowMeta: any,
      rowsCount: number
    ];
  };
}

type EmberTdArgs = EmberTdSignature['Args'];
export default interface EmberTdComponent extends EmberTdArgs {}

export default class EmberTdComponent extends Component<EmberTdSignature> {}
