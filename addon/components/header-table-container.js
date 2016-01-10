import Ember from 'ember';
import TableContainer from 'ember-table/mixins/table-container';
import ShowHorizontalScrollMixin from 'ember-table/mixins/show-horizontal-scroll';

export default Ember.Component.extend( TableContainer,
ShowHorizontalScrollMixin, {

  classNames: ['ember-table-table-container',
      'ember-table-fixed-table-container',
      'ember-table-header-container'],
  height: Ember.computed.alias('headerHeight'),
  width: Ember.computed.alias('tableContainerWidth'),

  numFixedColumns: null,
  fixedColumns: Ember.A,
  tableColumns: Ember.A,
  fixedBlockWidth: null,
  tableBlockWidth: null,
  headerHeight: null,
  tableContainerWidth: null,
  scrollLeft: null,

  actions: {
    toggleTableCollapse: function() {
      this.sendAction('toggleTableCollapse');
    },

    columnDidSort: function(fromIndex, toIndex) {
      this.sendAction('columnDidSort', fromIndex, toIndex);
    },
    
    sortByColumn: function(column) {
      this.sendAction('sortByColumn', column);
    },

  }
});
