import Component from '@ember/component';
import { Column } from './ember-table';

export interface CellMeta {
  selected: boolean;
}

export interface EmberTdSignature<RowType> {
  Element: HTMLTableCellElement;
  Args: {
    /**
     * An action that is called when a row is clicked. Will be called with the row and the event.
     *
     * @memberof TBodyArgs
     */
    onClick?: ((row: RowType, event: Event) => void) | undefined;
    onDoubleClick?: ((row: RowType, event: Event) => void) | undefined;
  };
  Blocks: {
    default: [
      cellMeta: CellMeta,
      cellValue: any,
      columnMeta: any,
      columnValue: Column,
      rowMeta: any,
      rowValue: RowType,
      rowsCount: number
    ];
  };
}

// FIXME: Make RowType more strict without fallback to {}
export default class EmberTdComponent<RowType = {}> extends Component<EmberTdSignature<RowType>> {}
