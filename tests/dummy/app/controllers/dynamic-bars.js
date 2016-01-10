// BEGIN-SNIPPET dynamic-bars-controller
import Ember from 'ember';
import ColumnDefinition from 'ember-table/models/column-definition';

export default Ember.Controller.extend({
  // TODO(azirbel): Don't use setInterval in an Ember application
  init: function() {
    // TODO(azirbel): Call this._super()
    var _this = this;
    setInterval(function() {
      _this.get('tableContent').forEach(function(item) {
        item.set('value1', _this.getNextValue(item.get('value1')));
        item.set('value2', _this.getNextValue(item.get('value2')));
        item.set('value3', _this.getNextValue(item.get('value3')));
        item.set('value4', _this.getNextValue(item.get('value4')));
        item.set('value5', _this.getNextValue(item.get('value5')));
      });
    }, 1500);
  },

  getNextValue: function(current) {
    current = current + (Math.random() * 10 - 5);
    current = Math.min(100, current);
    current = Math.max(0, current);
    return current;
  },

  tableColumns: Ember.computed(function() {
    var colors = ['blue', 'teal', 'green', 'yellow', 'orange'];
    var firstColumn = ColumnDefinition.create({
      savedWidth: 50,
      headerCellName: 'Name',
      contentPath: 'key'
    });
    var columns = colors.map(function(color, index) {
      return ColumnDefinition.create({
        color: color,
        headerCellName: 'Bar',
        tableCellViewClass: 'bar-table/bar-cell',
        contentPath: 'value' + (index + 1)
      });
    });
    columns.unshift(firstColumn);
    return columns;
  }),

  tableContent: Ember.computed(function() {
    var content = [];
    for (var i = 0; i < 100; i++) {
      content.pushObject(Ember.Object.create({
        key: i,
        value1: Math.random() * 80 + 10,
        value2: Math.random() * 80 + 10,
        value3: Math.random() * 80 + 10,
        value4: Math.random() * 80 + 10,
        value5: Math.random() * 80 + 10
      }));
    }
    return content;
  })
});
// END-SNIPPET
