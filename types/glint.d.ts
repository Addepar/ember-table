import EmberTableComponent from './components/ember-table';
import EmberTableLoadingMoreComponent from './components/ember-table-loading-more';
import EmberTbodyComponent from './components/ember-tbody';
import EmberTdComponent from './components/ember-td';
import EmberTfootComponent from './components/ember-tfoot';
import ResizeHandleComponent from './components/ember-th/resize-handle';
import SortIndicatorComponent from './components/ember-th/sort-indicator';
import EmberTheadComponent from './components/ember-thead';
import EmberTrComponent from './components/ember-tr'

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    EmberTable: typeof EmberTableComponent;
    'ember-table': typeof EmberTableComponent;
    EmberTableLoadingMore: typeof EmberTableLoadingMoreComponent;
    'ember-table-loading-more': typeof EmberTableLoadingMoreComponent;
    EmberTbody: typeof EmberTbodyComponent;
    'ember-tbody': typeof EmberTbodyComponent;
    EmberTd: typeof EmberTdComponent;
    'ember-td': typeof EmberTdComponent;
    EmberTfoot: typeof EmberTfootComponent;
    'ember-tfoot': typeof EmberTfootComponent;
    'EmberTh::ResizeHandle': typeof ResizeHandleComponent;
    'ember-th/resize-handle': typeof ResizeHandleComponent;
    'EmberTh::SortIndicator': typeof SortIndicatorComponent;
    'ember-th/sort-indicator': typeof SortIndicatorComponent;
    EmberThead: typeof EmberTheadComponent;
    'ember-thead': typeof EmberTheadComponent;
    EmberTr: typeof EmberTrComponent;
    'ember-tr': typeof EmberTrComponent;
  }
}