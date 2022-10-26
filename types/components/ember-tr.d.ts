import Component from '@ember/component';
import { EmberTableColumn } from '../index';
import EmberTdComponent from './ember-td';

export interface EmberTrSignature<RowType> {
  Element: HTMLTableRowElement;
  Args: {
    /**
     * An action that is called when a row is clicked. Will be called with the row and the event.
     */
    onClick?: ((row: RowType, event: Event) => void) | undefined;

    /**
     * An action that is called when a row is double clicked. Will be called with the row and the event.
     */
    onDoubleClick?: ((row: RowType, event: Event) => void) | undefined;
  };
  Blocks: {
    default: [
      {
        cell: typeof EmberTdComponent<RowType>;
        cellValue: unknown;
        columnValue: EmberTableColumn;
        rowValue: RowType;
      }
    ];
  };
}

export default class EmberTrComponent<RowType> extends Component<EmberTrSignature<RowType>> {}
