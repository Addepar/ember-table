import Ember from 'ember';
import StyleBindingsMixin from 'ember-table/mixins/style-bindings';

export default Ember.Component.extend( StyleBindingsMixin, {
  classNames: ['lazy-list-container', 'ember-table-table-block'],
  styleBindings: ['width', 'height'],
  columns: null,
  scrollLeft: null,
  content: null,
  itemViewClass: null,
  rowHeight: null,
  scrollTop: 0,
  startIndex: null,
  blockWidth: null,

  height: Ember.computed(function() {
    return this.get('content.length') * this.get('rowHeight');
  }).property('content.length', 'rowHeight'),

  width: Ember.computed.alias('blockWidth'),

  lazyContent: Ember.computed('content.length', function(){
    var content = this.get('content') || Ember.A([]);
    return content.map(function(row) {
      row.set('isHovered', false);
      return row;
    });
  }),

  actions: {
    rowDidClick: function(row, event) {
      this.sendAction('rowDidClick', row, event);
    },

    scrollChange: function(scrollLeft, scrollTop) {
      this.sendAction('scrollChange', scrollLeft, scrollTop);
    },

    toggleRowCollapse: function(row) {
      this.sendAction('toggleRowCollapse', row);
    }
  }

});
