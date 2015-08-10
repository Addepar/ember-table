// BEGIN-SNIPPET sg-treetable-controller
import Ember from 'ember';
import sampledata from '../models/sampledata';
import ColumnDefinition from 'ember-table/models/column-definition';
import AggregateColumnDefinition from '../models/aggregate-column-definition';
import NumberFormatHelpers from '../utils/number-format';

export default Ember.Controller.extend({

  data: Ember.computed(function() {
    return sampledata;
  }),

  // dimention definition: dimentionOrder is important for tree constructing
  dimentionDef: {
        dimentionOrder: ['physician', 'patient', 'unit'],
        'physician': { displayName: 'Specialist' },
        'patient':   { displayName: 'Patient' },
        'unit':      { displayName: 'Unit' }
  },

  // treeColumn is computed by dimentionsOrder and dimentionDefs
  // aggregateColumns should bee set manually
  aggregateColumns: Ember.computed(function() {

    var ageColumn = AggregateColumnDefinition.create({
      headerCellName: 'Avg Age',
      savedWidth: 60,
      getCellContent: function(row) {
        var value = row.get('content').aggregate(_.mean, 'patientAge');
        return Math.floor( value );
      }
    });

    var visitsColumn = AggregateColumnDefinition.create({
      headerCellName: 'Visits',
      savedWidth: 60,
      getCellContent: function(row) {
        var value = row.get('content').aggregate(_.sum, 'visits');
        return value;
      }
    });

    var chargeColumn = AggregateColumnDefinition.create({
      headerCellName: 'Sum Charge',
      getCellContent: function(row) {
        var value = row.get('content').aggregate(_.sum, 'charge');
        return NumberFormatHelpers.toCurrency( value );
      }
    });

    return [ageColumn, visitsColumn, chargeColumn];
  }),

  treetableIsCollapsed: true,
  // END-SNIPPET

  actions: {
    treeByPatient: function() {
      this.set('dimentionDef.dimentionOrder', ['patient', 'unit', 'physician']);
      this.set('treetableIsCollapsed', true);
    },

    treeByPhysician: function() {
      this.set('dimentionDef.dimentionOrder', ['physician', 'unit', 'patient']);
      this.set('treetableIsCollapsed', true);
    },

    treeByUnit: function() {
      this.set('dimentionDef.dimentionOrder', ['unit', 'physician', 'patient']);
      this.set('treetableIsCollapsed', true);
    }
  },



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
