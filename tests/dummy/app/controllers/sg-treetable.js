// BEGIN-SNIPPET sg-treetable-controller
import Ember from 'ember';
import sampledata from '../models/sampledata';
import ColumnDefinition from 'ember-table/models/column-definition';
import AggregateColumnDefinition from '../models/aggregate-column-definition';
import TreeColumnDefinition from '../models/tree-column-definition';
import NumberFormatHelpers from '../utils/number-format';

//TODO find proper place for this
_.avg = function (array) {
  if (array.length > 0) {
      return _.reduce( array, function(sum, x) {
        return sum + x;
      }, 0) / array.length;
  }
};

export default Ember.Controller.extend({

  data: Ember.computed(function() {
    return sampledata;
  }),

  // supergroup doesn't aggregate root as node see https://github.com/Sigfried/supergroup/issues/6
  totalCharge: Ember.computed('data', function() {
    return _.sum( this.get('data').mapBy('charge'));
  }),

  totalVisits: Ember.computed('data', function() {
    return _.sum( this.get('data').mapBy('visits'));
  }),

  avgAge: Ember.computed('data', function() {
    console.log(this.get('data').mapBy('patientAge'));
    return _.avg( this.get('data').mapBy('patientAge') );
  }),  

  // dimentions properties for grouping into tree column
  // list of properties could be extended if needed
  dimentionDefs: Ember.computed(function() {
    return {
        'physician': {
          displayName: 'Specialist',
        },
        'patient': { 
          displayName: 'Patient'
        },
        'unit': { 
          displayName: 'Unit'
        }
      };
  }),

  // dimentions order for tree constructiong
  dimentionsOrder: Ember.computed(function() {
    return ['physician', 'unit', 'patient'];
  }),

  // treetable columns: one treecolumn and many aggregationColumns
  treetableColumns: Ember.computed('dimentionDefs', 'dimentionsOrder.[]', 'totalCharge', function() {
    var self = this;
    var name = this.get('dimentionsOrder').map(function(dim) {
      return self.get('dimentionDefs')[dim]['displayName']; 
    }).join(' ▸ ');

    var nameDimColumn = TreeColumnDefinition.create({
      headerCellName: name,
    });

    var ageColumn = AggregateColumnDefinition.create({
      // supergroup doesn't aggregate root as node, see https://github.com/Sigfried/supergroup/issues/6
      headerCellName: 'Avg Age',
      getCellContent: function(row) {
        var value = (row.get('content.depth') === 0) ?
                      self.get('avgAge')
                      :
                      row.get('content').aggregate(_.avg, 'patientAge');
        return ( Math.floor(value) );
      }
    });

    var visitsColumn = AggregateColumnDefinition.create({
      // supergroup doesn't aggregate root as node, see https://github.com/Sigfried/supergroup/issues/6
      headerCellName: 'Visits',
      getCellContent: function(row) {
        var value = (row.get('content.depth') === 0) ?
                      self.get('totalVisits')
                      :
                      row.get('content').aggregate(_.sum, 'visits');
        return value;
      }
    });


    var chargeColumn = AggregateColumnDefinition.create({
      // supergroup doesn't aggregate root as node, see https://github.com/Sigfried/supergroup/issues/6
      headerCellName: 'Sum Charge',
      getCellContent: function(row) {
        var value = (row.get('content.depth') === 0) ?
                      self.get('totalCharge')
                      :
                      row.get('content').aggregate(_.sum, 'charge');
        return NumberFormatHelpers.toCurrency( value );
      }
    });

    return [nameDimColumn, ageColumn, visitsColumn, chargeColumn];
  }),

  // tabletree state management
  treetableIsCollapsed: true,

  actions: {
    treeByPatient: function() {
      this.set('dimentionsOrder', ['patient', 'unit', 'physician']);
      this.set('treetableIsCollapsed', true);
    },

    treeByPhysician: function() {
      this.set('dimentionsOrder', ['physician', 'unit', 'patient']);
      this.set('treetableIsCollapsed', true);
    }
  },

// END-SNIPPET

  // columns for simple table to represent raw data 
  dataColumns: Ember.computed(function() {

    var patientColumn = ColumnDefinition.create({
      savedWidth: 80,
      textAlign: 'text-align-left',
      headerCellName: 'Patient',
      getCellContent: function(row) {
        return row.get('patient');
      }
    });
    var unitColumn = ColumnDefinition.create({
      savedWidth: 80,
      textAlign: 'text-align-left',
      headerCellName: 'Unit',
      getCellContent: function(row) {
        return row.get('unit');
      }
    });
    var physicianColumn = ColumnDefinition.create({
      savedWidth: 80,
      headerCellName: 'Physician',
      textAlign: 'text-align-left',
      getCellContent: function(row) {
        return row.get('physician');
      }
    });
    var chargeColumn = ColumnDefinition.create({
      savedWidth: 50,
      headerCellName: 'Charge',
      getCellContent: function(row) {
        return row.get('charge');
      }
    });
    var ageColumn = ColumnDefinition.create({
      savedWidth: 40,
      headerCellName: 'Age',
      getCellContent: function(row) {
        return row.get('patientAge');
      }
    });
    var visitsColumn = ColumnDefinition.create({
      savedWidth: 40,
      headerCellName: 'Visits',
      getCellContent: function(row) {
        return row.get('visits');
      }
    });
    var dateColumn = ColumnDefinition.create({
      savedWidth: 50,
      headerCellName: 'Date',
      getCellContent: function(row) {
        return row.get('date');
      }
    });
    return [physicianColumn, patientColumn, ageColumn, unitColumn, visitsColumn, chargeColumn, dateColumn];
  }),

  selection: null,
  
  filteredData: Ember.computed('selection', 'data', function() {
    if (this.get('selection') && (this.get('selection.depth') > 0)) {
      return this.get('selection.records');
    } else {
      return this.get('data');
    }
  })

});
