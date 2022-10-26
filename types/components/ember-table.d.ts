import Component from '@ember/component';
import { EmberTableColumn, EmberTableRow } from '../index';
import EmberTbodyComponent from './ember-tbody';
import EmberTfootComponent from './ember-tfoot';
import EmberTheadComponent from './ember-thead';
import EmberTableLoadingMoreComponent from './ember-table-loading-more';
import { WithBoundArgs } from '@glint/template';

export interface EmberTableSignature<RowType, ColumnType> {
  Element: HTMLDivElement;
  Blocks: {
    default: [
      {
        body: typeof EmberTbodyComponent<RowType, ColumnType>;
        foot: typeof EmberTfootComponent<RowType, ColumnType>;
        head: typeof EmberTheadComponent<RowType, ColumnType>;
        loadingMore: typeof EmberTableLoadingMoreComponent;
      }
    ];
  };
}

export default class EmberTableComponent<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn
> extends Component<EmberTableSignature<RowType, ColumnType>> {}
