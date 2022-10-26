import Component from '@ember/component';
import EmberTdComponent from './ember-td';
import EmberTrComponent from './ember-tr';

export interface EmberTfootSignature {
  Element: HTMLDivElement;
  Args: {
    rows: any[];
    tableClasses?: string;
  };
  Blocks: {
    default: [
      {
        isHeader: boolean;
        row: typeof EmberTrComponent;
        rowsCount: number;
      }
    ];
  };
}

export default class EmberTfootComponent<T extends EmberTfootSignature> extends Component<T> {}
