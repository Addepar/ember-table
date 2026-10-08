// Loose-mode (non-strict template) Glint registry. Apps using `.hbs` templates
// can merge this into their own registry; see the README.
import type EmberTableComponent from './components/ember-table/component.gts';
import type EmberTableLoadingMoreComponent from './components/ember-table-loading-more/component.gts';
import type EmberTbodyComponent from './components/ember-tbody/component.gts';
import type EmberTdComponent from './components/ember-td/component.gts';
import type EmberTfootComponent from './components/ember-tfoot/component.gts';
import type EmberThComponent from './components/ember-th/component.gts';
import type ResizeHandleComponent from './components/ember-th/resize-handle/component.gts';
import type SortIndicatorComponent from './components/ember-th/sort-indicator/component.gts';
import type EmberTheadComponent from './components/ember-thead/component.gts';
import type EmberTrComponent from './components/ember-tr/component.gts';

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
  EmberTh: typeof EmberThComponent;
  'ember-th': typeof EmberThComponent;
  'EmberTh::ResizeHandle': typeof ResizeHandleComponent;
  'ember-th/resize-handle': typeof ResizeHandleComponent;
  'EmberTh::SortIndicator': typeof SortIndicatorComponent;
  'ember-th/sort-indicator': typeof SortIndicatorComponent;
  EmberThead: typeof EmberTheadComponent;
  'ember-thead': typeof EmberTheadComponent;
  EmberTr: typeof EmberTrComponent;
  'ember-tr': typeof EmberTrComponent;
}
