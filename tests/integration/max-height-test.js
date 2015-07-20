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

  var $table = this.$('.ember-table-tables-container');
  assert.equal(this.$().outerHeight(), 600, "container height is 600px");
  assert.equal($table.outerHeight(), 600, "table height is 600px");
});

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
