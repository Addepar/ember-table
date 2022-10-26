import Component from '@ember/component';
import { EmberTableColumn } from '../index';
import EmberTdComponent from './ember-td';

export interface EmberTrSignature<RowType, ColumnType, CellComponentType> {
  Element: HTMLTableRowElement;
  Args: {
    /**
     * An action that is called when a row is clicked. Will be called with the row and the event.
     */
    onClick?: ((row: RowType, event: Event) => void);

    /**
     * An action that is called when a row is double clicked. Will be called with the row and the event.
     */
    onDoubleClick?: ((row: RowType, event: Event) => void);
  };
  Blocks: {
    default: [
      {
        cell: CellComponentType;
        cellValue: RowType[keyof RowType];
        columnValue: ColumnType;
        rowValue: RowType;
      }
    ];
  };
}

export default class EmberTrComponent<
  RowType,
  ColumnType,
  CellComponentType = typeof EmberTdComponent<RowType, ColumnType>
> extends Component<EmberTrSignature<RowType, ColumnType, CellComponentType>> {}
