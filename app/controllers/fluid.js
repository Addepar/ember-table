App.FluidColumnDefinition = Ember.Table.ColumnDefinition.extend({
  isResizable: function() {
    if (this.get('_nextColumn')) {
      return true;
    } else {
      return false;
    }
  }.property('_nextColumn'),
  resize: function(pxWidth, tableWidth) {
    tableWidth = tableWidth || this.get("controller._tableContainerWidth");
    if (!tableWidth) {
      return;
    }
    var percent = function(val) {
      if ("string" === typeof val) {
        return +(val.replace("%", ""));
      } else {
        return val * 100 / tableWidth;
      }
    };
    var newMaxWidth;
    var oldWidth = percent(this.get("columnWidth"));
    var newWidth = 'number' === typeof pxWidth ? percent(pxWidth) : oldWidth;
    var nextCol = this.get("_nextColumn");
    if (nextCol) {
      var diff = oldWidth - newWidth + percent(nextCol.get("columnWidth"));
      nextCol.set("columnWidth", diff / 100 * tableWidth);
      newMaxWidth = (newWidth + diff) / 100 * tableWidth - 100;
    }
    this.set("columnWidth", newWidth / 100 * tableWidth);
    this.notifyPropertyChange("columnWidth");
    return newMaxWidth;
  },
  _convertColumnToWidth: Ember.beforeObserver(function() {
    var tableWidth = this.get("controller._tableContainerWidth");
    if (tableWidth) {
      this.set("columnWidth", this.get("columnWidth") / tableWidth * 100 + "%");
    }
  }, "controller._tableContainerWidth"),
  _resizeToTable: function() {
    this.resize();
  }.observes("controller._tableContainerWidth")
});

App.FluidTable = Ember.Table.EmberTableComponent.extend({
  _tableColumnsWidth: "100%",
  prepareTableColumns: function(columns) {
    this._super(columns);
    columns.forEach(function(column, index) {
      column.set('_nextColumn', columns.objectAt(index+1));
    });
  }
});

App.EmberTableFluidController = Ember.Controller.extend({
  numRows: 100,
  columns: function() {
    var dateColumn = App.FluidColumnDefinition.create({
      columnWidth: "40",
      headerCellName: 'Date',
      getCellContent: function(row) {
        return row.get('date').toDateString();
      }
    });
    var openColumn = App.FluidColumnDefinition.create({
      columnWidth: "15",
      headerCellName: 'Open',
      getCellContent: function(row) {
        return row.get('open').toFixed(2);
      }
    });
    var highColumn = App.FluidColumnDefinition.create({
      columnWidth: "15",
      headerCellName: 'High',
      getCellContent: function(row) {
        return row.get('high').toFixed(2);
      }
    });
    var lowColumn = App.FluidColumnDefinition.create({
      columnWidth: "15",
      headerCellName: 'Low',
      getCellContent: function(row) {
        return row.get('low').toFixed(2);
      }
    });
    var closeColumn = App.FluidColumnDefinition.create({
      columnWidth: "15",
      headerCellName: 'Close',
      getCellContent: function(row) {
        return row.get('close').toFixed(2);
      }
    });
    return [dateColumn, openColumn, highColumn, lowColumn, closeColumn];
  }.property(),
  content: function() {
    var numRows = this.get('numRows');
    return App.utils.range(0, numRows).map(function(index) {
      var date = new Date();
      date.setDate(date.getDate() + index);
      return {
        date: date,
        open: Math.random() * 100 - 50,
        high: Math.random() * 100 - 50,
        low: Math.random() * 100 - 50,
        close: Math.random() * 100 - 50,
        volume: Math.random() * 1000000
      };
    });
  }.property('numRows')
});
