// BEGIN-SNIPPET sg-treetable-tree-row
import Ember from 'ember';
import Row from 'ember-table/controllers/row';

export default Row.extend({
  content: null,
  parent: null,
  isCollapsed: false,
  level: 0,
  isRoot: false,

  depth: Ember.computed({
    get: function() {
      return this.get('level');
    },
    set: function(key, value) {
      this.setProperties({
        level: value,
        indentation: value * 10,
        rowStyle: 'ember-table-row-style-' + Math.min(value, 5)
      });
      return value;
    }
  }),

  isShowing: Ember.computed('parent.isShowing', 'parent.isCollapsed', function() {
    var parent = this.get('parent');
    return !parent || parent && parent.get('isShowing') && !parent.get('isCollapsed');
  }),

});
// END-SNIPPET