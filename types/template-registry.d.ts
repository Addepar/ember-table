import EmberTableComponent from 'ember-table/components/ember-table/component';
import ResizeHandleComponent from 'ember-table/components/ember-th/resize-handle/component';
import SortIndicatorComponent from 'ember-table/components/ember-th/sort-indicator/component';

export default interface Registry {
  EmberTable: typeof EmberTableComponent;
  'ember-table': typeof EmberTableComponent;
  'EmberTh::ResizeHandle': typeof ResizeHandleComponent;
  'ember-th/resize-handle': typeof ResizeHandleComponent;
  'EmberTh::SortIndicator': typeof SortIndicatorComponent;
  'ember-th/sort-indicator': typeof SortIndicatorComponent;
}
