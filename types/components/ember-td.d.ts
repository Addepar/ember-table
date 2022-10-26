import Component from '@ember/component';
import { EmberTableColumn } from '../index';

export interface EmberTdSignature<RowType, ColumnType> {
  Element: HTMLTableCellElement;
  Args: {
    /**
     * Action sent when the user clicks this element.
     */
    onClick?: ((row: RowType, event: Event) => void) | undefined;

    /**
     * Action sent when the user double clicks this element.
     */
    onDoubleClick?: ((row: RowType, event: Event) => void) | undefined;
  };
  Blocks: {
    default: [
      cellValue: any,
      columnValue: ColumnType,
      rowValue: RowType,
    ];
  };
}

// FIXME: Make RowType more strict without fallback to {}
export default class EmberTdComponent<RowType, ColumnType> extends Component<EmberTdSignature<RowType, ColumnType>> {}
