import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';
import {randomNumber, randomDate, setRandomSeed} from 'dummy/utils/random';
import ColumnDefinition from 'ember-table/models/column-definition';

moduleForComponent('ember-table', {
  integration: true,
  beforeEach: function() {
    setRandomSeed(6);
  }
});

test('table height adjusts to number of rows available up to maxHeight', function(assert) {
  this.set('tableColumns', createColumns());
  this.set('tableContent', createContent(20));
  this.render(hbs`
    <div class="table-container">
      {{ember-table
        columns=tableColumns
        content=tableContent
        hasHeader=false
        hasFooter=false
        rowHeight=30
        maxHeight=700
      }}
    </div>
  `);
  const $table = this.$('.ember-table-tables-container');
  const component = getComponent($table);

  assert.equal(component.get('maxHeight'), 700, "max height is set to 700");
  assert.equal(component.get('_height'), null, "_height is not set");
  assert.equal(component.get('_tableContentHeight'), 600,
    "content height is 20(rows) * 30px per row = 600px");
  assert.equal(component.get('hasHeader') && component.get('hasFooter'), false);
  assert.equal(component.get('_bodyHeight'), component.get('_tableContentHeight'));

  assert.equal(this.$().outerHeight(), 600, "container height is 600px");
  assert.equal($table.outerHeight(), 600, "table height is 600px");

  this.set('tableContent', createContent(10));

  assert.equal(this.$().outerHeight(), 300, "container height is 300px with fewer rows");
  assert.equal($table.outerHeight(), 300, "table height is 300px with fewer rows");

  this.set('tableContent', createContent(30));
  assert.equal(this.$().outerHeight(), 700, "container height is 700px with fewer rows");
  assert.equal($table.outerHeight(), 700, "table height is 700px with fewer rows");
});

function pauseTest() {
  return new Ember.RSVP.Promise(function(){});
}

function createContent(rowCount) {
  var content = [];
  var date;
  for (var i = 0; i < rowCount; i++) {
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
}

function getComponent($el) {
  const id = $el.attr('id');
  return Ember.View.views[id];
}

function createColumns() {
  var dateColumn = ColumnDefinition.create({
    savedWidth: 150,
    textAlign: 'text-align-left',
    headerCellName: 'Date',
    getCellContent: function(row) {
      return row.get('date').toDateString();
    }
  });
  var openColumn = ColumnDefinition.create({
    savedWidth: 100,
    headerCellName: 'Open',
    getCellContent: function(row) {
      return row.get('open').toFixed(2);
    }
  });
  var highColumn = ColumnDefinition.create({
    savedWidth: 100,
    headerCellName: 'High',
    getCellContent: function(row) {
      return row.get('high').toFixed(2);
    }
  });
  var lowColumn = ColumnDefinition.create({
    savedWidth: 100,
    headerCellName: 'Low',
    getCellContent: function(row) {
      return row.get('low').toFixed(2);
    }
  });
  var closeColumn = ColumnDefinition.create({
    savedWidth: 100,
    headerCellName: 'Close',
    getCellContent: function(row) {
      return row.get('close').toFixed(2);
    }
  });
  return [dateColumn, openColumn, highColumn, lowColumn, closeColumn];
}
