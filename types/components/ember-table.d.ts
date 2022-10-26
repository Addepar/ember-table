import Component from '@ember/component';
import { EmberTableRow } from '../index';
import EmberTbodyComponent from './ember-tbody';
import EmberTfootComponent from './ember-tfoot';
import EmberTheadComponent from './ember-thead';
import EmberTableLoadingMoreComponent from './ember-table-loading-more';

export interface EmberTableSignature<RowType> {
  Element: HTMLDivElement;
  Blocks: {
    default: [
      {
        body: typeof EmberTbodyComponent<RowType>;
        foot: typeof EmberTfootComponent;
        head: typeof EmberTheadComponent;
        loadingMore: typeof EmberTableLoadingMoreComponent;
      }
    ];
  };
}

export default class EmberTableComponent<RowType extends EmberTableRow> extends Component<EmberTableSignature<RowType>> {}
