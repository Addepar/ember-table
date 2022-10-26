import Component from '@ember/component';
import { EmberTableColumn } from '../index';

export interface EmberTdSignature<RowType> {
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
      columnValue: EmberTableColumn,
      rowValue: RowType,
    ];
  };
}

// FIXME: Make RowType more strict without fallback to {}
export default class EmberTdComponent<RowType> extends Component<EmberTdSignature<RowType>> {}
