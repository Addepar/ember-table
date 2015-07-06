import Ember from 'ember';
import {
  module,
  test
  } from 'qunit';
import startApp from '../helpers/start-app';
import {setRandomSeed} from 'dummy/utils/random';

var application;

module('Acceptance: Configurable Columns', {
  beforeEach: function() {
    application = startApp();
    setRandomSeed(6);
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('table renders', function(assert) {
  visit('/configurable-columns');
  andThen(function() {
    assert.equal(currentPath(), 'configurable-columns');
    const headers = ['Date', 'Open', 'High', 'Low', 'Close'];
    const firstRow = ['Thu Jul 14 2005', '22.49', '-18.01', '-47.10', '-0.30'];
    assert.deepEqual(rowText(0), headers, "headers");
    assert.deepEqual(rowText(1), firstRow, "values in first row");
  });
});
