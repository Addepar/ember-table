App.EmberTableHorizonController = Ember.Controller.extend({
  numRows: 100,
  columns: function() {
    var name = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Name',
      getCellContent: function(row) {
        return 'Horizon ' + row.get('name');
      }
    });
    var horizon = Ember.Table.ColumnDefinition.create({
      columnWidth: 600,
      headerCellName: 'Horizon',
      tableCellViewClass: 'App.HorizonTableCellView',
      getCellContent: Ember.K
    });
    return [name, horizon];
  }.property(),
  content: function() {
    var normal = d3.random.normal(1.5, 3);
    var numRows = this.get('numRows');
    return App.utils.range(0, numRows).map(function(i) {
      var data = App.utils.range(0, 100).map(function(n) {
        return [n, normal()];
      });
      return {
        name: i,
        data: data
      };
    });
  }.property('numRows')
});
