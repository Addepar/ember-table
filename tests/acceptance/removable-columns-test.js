import Ember from 'ember';
import {
  module,
  test
  } from 'qunit';
import startApp from '../helpers/start-app';
import {setRandomSeed} from 'dummy/utils/random';

var application;

module('Acceptance: Removable Columns', {
  beforeEach: function() {
    application = startApp();
    setRandomSeed(6);
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('table renders', function(assert) {
  visit('/removable-columns');
  andThen(function() {
    assert.equal(currentPath(), 'removable-columns');
    const headers = ['Date', 'Open', 'High', 'Low', 'Close'];
    const firstRow = ['Thu Jul 14 2005', '22.49', '-18.01', '-47.10', '-0.30'];
    assert.deepEqual(rowText(0), headers, "headers");
    assert.deepEqual(rowText(1), firstRow, "values in first row");
  });
});

test('columns can be removed and readded', function(assert) {
  visit('/removable-columns');
  andThen(function() {
    assert.equal(currentPath(), 'removable-columns');
    const headers = ['Date', 'Open', 'High', 'Low', 'Close'];
    const firstRow = ['Thu Jul 14 2005', '22.49', '-18.01', '-47.10', '-0.30'];
    assert.deepEqual(rowText(0), headers, "headers");
    assert.deepEqual(rowText(1), firstRow, "values in first row");
  });
  // remove Date
  toggle('Date');
  andThen(function() {
    const headers = ['Open', 'High', 'Low', 'Close'];
    const firstRow = ['22.49', '-18.01', '-47.10', '-0.30'];
    assert.deepEqual(rowText(0), headers, "Date removed in headers columns");
    assert.deepEqual(rowText(1), firstRow, "date column removed in first row");
  });
  // remove Date
  toggle('Low');
  andThen(function(){
    const headers = ['Open', 'High', 'Close'];
    const firstRow = ['22.49', '-18.01', '-0.30'];
    assert.deepEqual(rowText(0), headers, "Low removed in headers columns");
    assert.deepEqual(rowText(1), firstRow, "Low column removed in first row");
  });
  // add Date
  toggle('Date');
  andThen(function(){
    const headers = ['Date', 'Open', 'High', 'Close'];
    const firstRow = ['Thu Jul 14 2005', '22.49', '-18.01', '-0.30'];
    assert.deepEqual(rowText(0), headers, "Date column readded to headers");
    assert.deepEqual(rowText(1), firstRow, "Date column value added to first row");
  });
});

function toggle(headerCellName) {
  click(`button:contains(${headerCellName})`);
}
