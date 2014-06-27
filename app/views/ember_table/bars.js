App.BarTableCell = Ember.Table.TableCell.extend({
  templateName: 'ember_table/bar_table/bar',
  classNameBindings: ['column.color'],
  barWidth: function() {
    var props = this.getProperties('column', 'row');

    if (!(props.column && props.row)) {
      return 0;
    }
    return Math.round(+this.get('cellContent'));
  }.property('column', 'row', 'cellContent'),
  histogramStyle: function() {
    return "width: " + (this.get('barWidth')) + "%;";
  }.property('barWidth')
});
