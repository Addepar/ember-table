import Component from '@ember/component';
import EmberTrComponent from './ember-tr';

export interface EmberTfootSignature<RowType, ColumnType> {
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

export default class EmberTfootComponent<RowType, ColumnType> extends Component<EmberTfootSignature<RowType, ColumnType>> {}
