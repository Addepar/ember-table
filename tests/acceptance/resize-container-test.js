import Ember from 'ember';
import {
  module,
  test,
  skip
  } from 'qunit';
import startApp from '../helpers/start-app';
import {setRandomSeed} from 'dummy/utils/random';
import {
  inner,
  rightBlock,
  showScrollbarsWhenNecessary,
  horizontalScrollShown,
  verticalScrollShown
} from '../helpers/ember-table';

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

test("columnsFillTable=false does not fill up the table", function(assert){
  visit('/resize-container-test?rowCount=12&columnsFillTable=false');
  showHalf();
  andThen(function(){
    showScrollbarsWhenNecessary();
    assert.ok(horizontalScrollShown());
    const $rightBlock = rightBlock();
    assert.equal($rightBlock.scrollLeft(), 0, "left scroll is 0 before scrolling");
    // scroll right block by 50 px
    $rightBlock.scrollLeft(50);
    assert.equal($rightBlock.scrollLeft(), 50, "antiscroll inner should have scroll position of 50");
  });
});

function showHalf() {
  click('button:contains(Show Half)');
}

function showFull() {
  click('button:contains(Show Full)');
}
