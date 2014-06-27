App.EmberTableBarsController = Ember.Controller.extend({
  numRows: 100,
  columns: function() {
    var colors = ['blue', 'teal', 'green', 'yellow', 'orange'];
    var column1 = Ember.Table.ColumnDefinition.create({
      columnWidth: 50,
      headerCellName: 'Name',
      contentPath: 'key'
    });
    var columns = colors.map(function(color, index) {
      return Ember.Table.ColumnDefinition.create({
        color: color,
        headerCellName: 'Bar',
        tableCellViewClass: 'App.BarTableCell',
        contentPath: "value" + (index + 1)
      });
    });
    columns.unshift(column1);
    return columns;
  }.property(),
  content: Ember.computed(function() {
    var numRows = this.get('numRows');
    return App.utils.range(0, numRows).map(function(num, index) {
      return {
        key: index,
        value1: Math.random() * 80 + 10,
        value2: Math.random() * 80 + 10,
        value3: Math.random() * 80 + 10,
        value4: Math.random() * 80 + 10,
        value5: Math.random() * 80 + 10
      };
    });
  }).property('numRows')
});
