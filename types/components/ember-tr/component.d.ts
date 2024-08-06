import Component from '@ember/component';
import { EmberTableColumn, EmberTableRow, TableColumnMeta, TableRowMeta } from 'ember-table';
import EmberTdComponent from 'ember-table/components/ember-td/component';

export interface EmberTrSignature<
  RowType extends EmberTableRow,
  ColumnType extends EmberTableColumn,
  CellComponentType
> {
  Element: HTMLTableRowElement;
  Args: {
    /**
     * An action that is called when a row is clicked. Will be called with the row and the event.
     */
    onClick?: (event: { event: Event, rowValue: RowType, rowMeta: TableRowMeta }) => void;

    /**
     * An action that is called when a row is double clicked. Will be called with the row and the event.
     */
    onDoubleClick?: (event: { event: Event, rowValue: RowType, rowMeta: TableRowMeta }) => void;
  };
  Blocks: {
    default: [
      {
        cell: CellComponentType;
        cellMeta: unknown;
        cellValue: RowType[keyof RowType];
        columnMeta: TableColumnMeta;
        columnValue: ColumnType;
        rowMeta: TableRowMeta;
        rowValue: RowType;
      }
    ];
  };
}

export default class EmberTrComponent<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn,
  CellComponentType = typeof EmberTdComponent<RowType, ColumnType>
> extends Component<EmberTrSignature<RowType, ColumnType, CellComponentType>> {}
