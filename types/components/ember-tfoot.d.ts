import Component from '@ember/component';
import { EmberTableColumn,  EmberTableRow } from '../index';
import EmberTrComponent from './ember-tr';

export interface EmberTfootSignature<
  RowType extends EmberTableRow,
  ColumnType extends EmberTableColumn
> {
  Element: HTMLDivElement;
  Args: {
    rows: RowType[];
  };
  Blocks: {
    default: [
      {
        row: typeof EmberTrComponent<RowType, ColumnType>;
        rowMeta: unknown;
        rowValue: RowType;
      }
    ];
  };
}

export default class EmberTfootComponent<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn
> extends Component<EmberTfootSignature<RowType, ColumnType>> {}
