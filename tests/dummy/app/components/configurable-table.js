import Ember from 'ember';
import TableComponent from 'ember-table/components/ember-table';

// TODO(azirbel): We extend this to create a very hacky way of calling
// `@onResizeEnd` in the table, triggered by resizing the table's container. We
// only need to do this because the table currently does a bad job detecting
// when its width has changed.
export default TableComponent.extend({
  layoutName: 'components/ember-table',
  parentWidthObserver: Ember.observer('parentWidth', function() {
    return this.onResizeEnd();
  })
});
