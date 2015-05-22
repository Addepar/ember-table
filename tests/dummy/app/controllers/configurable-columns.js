import Ember from 'ember';
import ConfigurableColumnDefinition from
  '../views/configurable-column-definition';

export default Ember.Controller.extend({
  isFluid: false,
  showTable: true,

  // We bind the container width to a `parentWidth` property on the
  // `ConfigurableTableComponent`. Then we extend the table to force it to
  // handle resizes whenever the `parentWidth` changes. This is a hack - the
  // table should take care of resizing to available width on its own, but for
  // now we need this to make the demo work.
  demoTableWidth: null,

  columnMode: function() {
    if (this.get('isFluid')) {
      return 'fluid';
    } else {
      return 'standard';
    }
  }.property('isFluid'),

  updateDemoTableWidth: function(newWidth) {
    this.set('demoTableWidth', newWidth);
  },

  columns: Ember.computed(function() {
    var dateColumn = ConfigurableColumnDefinition.create({
      textAlign: 'text-align-left',
      headerCellName: 'Date',
      minWidth: 150,
      getCellContent: function(row) {
        return row.get('date').toDateString();
      }
    });
    var openColumn = ConfigurableColumnDefinition.create({
      headerCellName: 'Open',
      getCellContent: function(row) {
        return row.get('open').toFixed(2);
      }
    });
    var highColumn = ConfigurableColumnDefinition.create({
      headerCellName: 'High',
      getCellContent: function(row) {
        return row.get('high').toFixed(2);
      }
    });
    var lowColumn = ConfigurableColumnDefinition.create({
      headerCellName: 'Low',
      getCellContent: function(row) {
        return row.get('low').toFixed(2);
      }
    });
    var closeColumn = ConfigurableColumnDefinition.create({
      headerCellName: 'Close',
      getCellContent: function(row) {
        return row.get('close').toFixed(2);
      }
    });
    return [dateColumn, openColumn, highColumn, lowColumn, closeColumn];
  }),

  content: Ember.computed(function() {
    return _.range(100).map(function(index) {
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
  }),

  actions: {
    // Pulls the table out of and back into the DOM
    refreshTable: function() {
      var _this = this;
      this.set('showTable', false);
      Ember.run.next(function() {
        _this.set('showTable', true);
      });
    }
  }
});
