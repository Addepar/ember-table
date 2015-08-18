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
  scrollTop: null,
  startIndex: null,
  blockWidth: null,

  height: Ember.computed(function() {
    return this.get('content.length') * this.get('rowHeight');
  }).property('content.length', 'rowHeight'),

  width: Ember.computed.alias('blockWidth'),

  numChildViews: Ember.computed(function() {
    return this.get('numItemsShowing') + 2;
  }).property('numItemsShowing'),

  onScrollLeftDidChange: Ember.observer('scrollLeft', function() {
    this.$().scrollLeft(this.get('scrollLeft'));
  }),

  lazyContent: Ember.computed('numChildViews', 'startIndex', 'content.length', function(){
    var content = this.get('content') || Ember.A([]);
    var startIndex = this.get('startIndex') || 0;
    var numChildViews = this.get('numChildViews') || 0;
    var endIndex = startIndex + numChildViews;
    return content.slice(startIndex, endIndex).map(function(row) { 
      row.set('isHovered', false);
      return row;
    });
  }),

  actions: {
    rowDidClick: function(row, event) {
      this.sendAction('rowDidClick', row, event);
    },

    toggleRowCollapse: function(row) {
      this.sendAction('toggleRowCollapse', row);
    }
  }

});
