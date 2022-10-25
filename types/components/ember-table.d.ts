import Component from '@ember/component';
import EmberTbodyComponent from './ember-tbody';
import EmberTfootComponent from './ember-tfoot';
import EmberTheadComponent from './ember-thead';
import EmberTableLoadingMoreComponent from './ember-table-loading-more';

export interface Column {
  [key: string]: unknown;
  cellComponent?: string;
  footerComponent?: string;
  footerValuePath?: string;
  headerComponent?: string;
  isSortable?: boolean;
  maxWidth?: number;
  minWidth?: number;
  name?: string;
  subcolumns?: Column[];
  textAlign?: string;
  valuePath?: string;
  width?: number;
}

export interface EmberTableSignature {
  Element: HTMLDivElement;
  Blocks: {
    default: [
      {
        body: typeof EmberTbodyComponent;
        foot: typeof EmberTfootComponent;
        head: typeof EmberTheadComponent;
        loadingMore: typeof EmberTableLoadingMoreComponent;
      }
    ];
  };
}

export default class EmberTableComponent<T extends EmberTableSignature> extends Component<T> {}
