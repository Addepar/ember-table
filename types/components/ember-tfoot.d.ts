import Component from '@ember/component';
import { WithBoundArgs } from '@glint/template';
import EmberTdComponent from './ember-td';
import EmberTrComponent from './ember-tr';

export interface EmberTfootSignature {
  Element: HTMLDivElement;
  Args: {
    api: any;
    rows: any[];
    tableClasses?: string;
  };
  Blocks: {
    default: [
      {
        cells: EmberTdComponent[];
        isHeader: boolean;
        row: WithBoundArgs<typeof EmberTrComponent, 'api'>;
        rowsCount: number;
      }
    ];
  };
}

export default class EmberTfootComponent<T extends EmberTfootSignature> extends Component<T> {}
