App.FluidColumnDefinition = Ember.Table.ColumnDefinition.extend({
  isResizable: Ember.computed(function() {
    if (this.get('_nextColumn')) {
      return true;
    } else {
      return false;
    }
  }).property('_nextColumn'),
  resize: function(pxWidth, tableWidth) {
    var diff, newMaxWidth, newWidth, nextCol, oldWidth, percent;
    newMaxWidth = null;
    tableWidth = tableWidth || this.get("controller._tableContainerWidth");
    if (!tableWidth) {
      return;
    }
    percent = function(val) {
      if ("string" === typeof val) {
        return +(val.replace("%", ""));
      } else {
        return val * 100 / tableWidth;
      }
    };
    oldWidth = percent(this.get("columnWidth"));
    newWidth = 'number' === typeof pxWidth ? percent(pxWidth) : oldWidth;
    nextCol = this.get("_nextColumn");
    if (nextCol) {
      diff = oldWidth - newWidth + percent(nextCol.get("columnWidth"));
      nextCol.set("columnWidth", diff / 100 * tableWidth);
      newMaxWidth = (newWidth + diff) / 100 * tableWidth - 100;
    }
    this.set("columnWidth", newWidth / 100 * tableWidth);
    this.notifyPropertyChange("columnWidth");
    return newMaxWidth;
  },
  _convertColumnToWidth: Ember.beforeObserver(function() {
    var tableWidth;
    tableWidth = this.get("controller._tableContainerWidth");
    if (tableWidth) {
      return this.set("columnWidth", this.get("columnWidth") / tableWidth * 100 + "%");
    }
  }, "controller._tableContainerWidth"),
  _resizeToTable: Ember.observer(function() {
    return this.resize();
  }, "controller._tableContainerWidth")
});

App.FluidTable = Ember.Table.EmberTableComponent.extend({
  _tableColumnsWidth: "100%",
  prepareTableColumns: function(columns) {
    var col, i, _i, _len, _results;
    this._super(columns);
    _results = [];
    for (i = _i = 0, _len = columns.length; _i < _len; i = ++_i) {
      col = columns[i];
      _results.push(col.set("_nextColumn", columns.objectAt(i + 1)));
    }
    return _results;
  }
});

App.EmberTableFluidController = Ember.Controller.extend({
  numRows: 100,
  columns: Ember.computed(function() {
    var closeColumn, dateColumn, highColumn, lowColumn, openColumn;
    dateColumn = App.FluidColumnDefinition.create({
      columnWidth: "40",
      headerCellName: 'Date',
      getCellContent: function(row) {
        return row.get('date').toDateString();
      }
    });
    openColumn = App.FluidColumnDefinition.create({
      columnWidth: "15",
      headerCellName: 'Open',
      getCellContent: function(row) {
        return row.get('open').toFixed(2);
      }
    });
    highColumn = App.FluidColumnDefinition.create({
      columnWidth: "15",
      headerCellName: 'High',
      getCellContent: function(row) {
        return row.get('high').toFixed(2);
      }
    });
    lowColumn = App.FluidColumnDefinition.create({
      columnWidth: "15",
      headerCellName: 'Low',
      getCellContent: function(row) {
        return row.get('low').toFixed(2);
      }
    });
    closeColumn = App.FluidColumnDefinition.create({
      columnWidth: "15",
      headerCellName: 'Close',
      getCellContent: function(row) {
        return row.get('close').toFixed(2);
      }
    });
    return [dateColumn, openColumn, highColumn, lowColumn, closeColumn];
  }),
  content: Ember.computed(function() {
    var _i, _ref, _results;
    return (function() {
      _results = [];
      for (var _i = 0, _ref = this.get('numRows'); 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this).map(function(index) {
      var date;
      date = new Date();
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
  }).property('numRows')
});
