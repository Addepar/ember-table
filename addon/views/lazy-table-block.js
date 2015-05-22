import Ember from 'ember';
import RegisterTableComponentMixin from 'ember-table/mixins/register-table-component';
import LazyContainerView from 'ember-table/views/lazy-container';

export default LazyContainerView.extend(
RegisterTableComponentMixin, {
  classNames: ['ember-table-table-block'],
  styleBindings: ['width'],
  itemViewClass: Ember.computed.alias('tableComponent.tableRowViewClass'),
  rowHeight: Ember.computed.alias('tableComponent.rowHeight'),
  columns: null,
  content: null,
  scrollLeft: null,
  scrollTop: null,

  onScrollLeftDidChange: Ember.observer(function() {
    this.$().scrollLeft(this.get('scrollLeft'));
  }, 'scrollLeft')
});
