App.EmberTableDynamicBarsController = Ember.Controller.extend({
  numRows: 100,
  getNextValue: function(current) {
    current = current + (Math.random() * 10 - 5);
    current = Math.min(100, current);
    current = Math.max(0, current);
    return current;
  },
  scheduleUpdate: function() {
   setInterval(Ember.run.bind(this, this.update), 1500);
  }.on('init'),
  update: function() {
    this.get('content').forEach(function(item) {
      item.set('value1', this.getNextValue(item.get('value1')));
      item.set('value2', this.getNextValue(item.get('value2')));
      item.set('value3', this.getNextValue(item.get('value3')));
      item.set('value4', this.getNextValue(item.get('value4')));
      item.set('value5', this.getNextValue(item.get('value5')));
    }, this);
  },
  columns: Ember.computed(function() {
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
  }),
  content: Ember.computed(function() {
    var numRows = this.get('numRows');
    return App.utils.range(0, numRows).map(function(num, index) {
      return Ember.Object.create({
        key: index,
        value1: Math.random() * 80 + 10,
        value2: Math.random() * 80 + 10,
        value3: Math.random() * 80 + 10,
        value4: Math.random() * 80 + 10,
        value5: Math.random() * 80 + 10
      });
    });
  }).property('numRows')
});
