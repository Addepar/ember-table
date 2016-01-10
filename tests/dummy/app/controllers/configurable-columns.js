import Ember from 'ember';
import ConfigurableColumnDefinition from
  '../components/configurable-column-definition';
import {randomNumber, randomDate} from '../utils/random';

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

  tableContent: Ember.computed(function() {
    var content = [];
    var date;
    for (var i = 0; i < 100; i++) {
      date = randomDate(new Date(2000, 1, 5), new Date(2012, 2, 2));
      content.pushObject({
        date: date,
        open: randomNumber(100) - 50,
        high: randomNumber(100) - 50,
        low: randomNumber(100) - 50,
        close: randomNumber(100) - 50,
        volume: randomNumber(100) * 1000000
      });
    }
    return content;
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
