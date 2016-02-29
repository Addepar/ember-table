import Ember from 'ember';
import {
  module,
  test
  } from 'qunit';
import startApp from '../helpers/start-app';
import {setRandomSeed} from 'dummy/utils/random';

var application;

module('Acceptance: Table Height', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

/**
 * Gets the height of an element set by CSS (instead of the rendered height)
 * and strips the 'px'.  This alternative to using .height() is needed because
 * the literal rendered height will be slightly off from the height we set
 * through inline CSS, which can cause inaccurate calculations.
 * @param  {string} element: The class of the DOM element we want to target
 * @return {number} The height of the element
 */
function getCSSHeight(element) {
  return parseInt(find(element).css('height'), 10);
}

test('Table height renders properly without a container height set', function(assert) {
  visit('/table-height');
  andThen(function() {
    var tableBodyHeight = getCSSHeight('.ember-table-body-container');
    var tableHeaderHeight = getCSSHeight('.ember-table-header-container');
    // Current table height
    var tableHeight = getCSSHeight('.ember-table-tables-container');
    // What the table height should be
    var computedTableHeight = tableBodyHeight + tableHeaderHeight;
    assert.equal(tableHeight, computedTableHeight,
      'Table has the height of its content');
  });
});
