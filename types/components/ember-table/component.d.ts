import Component from '@ember/component';
import { EmberTableColumn, EmberTableRow } from 'ember-table';
import EmberTbodyComponent from 'ember-table/components/ember-tbody/component';
import EmberTfootComponent from 'ember-table/components/ember-tfoot/component';
import EmberTheadComponent from 'ember-table/components/ember-thead/component';
import EmberTableLoadingMoreComponent from 'ember-table/components/ember-table-loading-more/component';

export interface EmberTableSignature<
  RowType extends EmberTableRow,
  ColumnType extends EmberTableColumn
> {
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
