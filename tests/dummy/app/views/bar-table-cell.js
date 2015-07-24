// BEGIN-SNIPPET bar-table-cell
import Ember from 'ember';
import TableCell from 'ember-table/views/table-cell';

export default TableCell.extend({
  templateName: 'bar_table/bar-cell',
  classNameBindings: ['column.color'],

  barWidth: Ember.computed(function() {
    var properties = this.getProperties('column', 'row');
    var column = properties.column;
    var row = properties.row;
    if (!(column && row)) {
      return 0;
    }
    return Math.round(+this.get('cellContent'));
  }).property('column', 'row', 'cellContent'),

  histogramStyle: Ember.computed(function() {
    return new Ember.Handlebars.SafeString('width: ' + (this.get('barWidth')) + '%;');
  }).property('barWidth')
});
// END-SNIPPET
