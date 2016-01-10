import Ember from 'ember';
import TableBlock from 'ember-table/mixins/table-block';

export default Ember.Component.extend(TableBlock, {
  classNames: ['ember-table-header-block'],
  // TODO(new-api): Eliminate view alias
  itemView: 'header-row',
  itemViewClass: Ember.computed.alias('itemView'),

  content: Ember.computed(function() {
    return [this.get('columns')];
  }).property('columns'),

  onColumnsDidChange: Ember.observer('content', function() {
    var _this = this;
    Ember.run.schedule('afterRender', function() {
      if ((_this.get('_state') || _this.get('state')) !== 'inDOM') {
        return;
      }
      _this.$().scrollLeft(_this.get('scrollLeft'));
    });
  }),

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
