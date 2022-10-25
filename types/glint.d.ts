import EmberTableComponent from './components/ember-table';
import ResizeHandleComponent from './components/ember-th/resize-handle';
import SortIndicatorComponent from './components/ember-th/sort-indicator';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    EmberTable: typeof EmberTableComponent;
    'ember-table': typeof EmberTableComponent;
    'EmberTh::ResizeHandle': typeof ResizeHandleComponent;
    'ember-th/resize-handle': typeof ResizeHandleComponent;
    'EmberTh::SortIndicator': typeof SortIndicatorComponent;
    'ember-th/sort-indicator': typeof SortIndicatorComponent;
  }
}