import Ember from 'ember';
import {
  module,
  test,
  skip
  } from 'qunit';
import startApp from '../helpers/start-app';
import {setRandomSeed} from 'dummy/utils/random';

var application;

module('Acceptance: Resize Container', {
  beforeEach: function() {
    application = startApp();
    setRandomSeed(6);
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

skip("columnsFillTable=true and canAutoResize=true fills up the table", function(assert) {
  visit('/resize-container-test?rowCount=12');
  andThen(function(){
    showScrollbarsWhenNecessary();
    assert.ok(!verticalScrollShown(), "12 rows don't fill up the table, therefore vertical scollbar is not show");
    assert.ok(!horizontalScrollShown(), "columnsFillTable with canAutoResize fills up the table without showing horizontal scroll");
  });
});

skip("columnsFillTable=false does not fill up the table", function(assert){
  visit('/resize-container-test?rowCount=12&columnsFillTable=false');
  showHalf();
  andThen(function(){
    showScrollbarsWhenNecessary();
    assert.ok(horizontalScrollShown());
    const antiscrollInner = getAntiscrollInner();
    const scrollLeft = antiscrollInner.scrollLeft();
    antiscrollInner.scrollLeft(20);
    assert.equal(antiscrollInner.scrollLeft(), 20, "antiscroll inner should have scroll position of 20");
  });
});

function getAntiscrollInner() {
  return $('.antiscroll-inner');
}

function showScrollbarsWhenNecessary() {
  // enter mouse into table to cause scrollbars to show
  $('.antiscroll-wrap').mouseenter();
}

function horizontalScrollShown() {
  return $('.antiscroll-scrollbar-horizontal.antiscroll-scrollbar-shown:visible').length > 0;
}

function verticalScrollShown() {
  return $('.antiscroll-scrollbar-vertical.antiscroll-scrollbar-shown:visible').length > 0;
}

function showHalf() {
  click('button:contains(Show Half)');
}

function showFull() {
  click('button:contains(Show Full)');
}
