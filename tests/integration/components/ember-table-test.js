import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import ColumnDefinition from 'ember-table/models/column-definition';

moduleForComponent('ember-table', 'Integration | Component | ember table', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.render(hbs`{{ember-table}}`);

  assert.equal(this.$('.ember-table-tables-container').length, 1, 'The table is present');
});

test('Columns can be defined', function(assert) {
  const columnsDefinitions = [
    ColumnDefinition.create({
      headerCellName: 'column 1'
    }),
    ColumnDefinition.create({
      headerCellName: 'column 2'
    })
  ];

  this.set('columns', columnsDefinitions);

  this.render(hbs`{{ember-table
    columns=columns
  }}`);

  assert.equal(this.$('.ember-table-header-cell').length, 2, 'The columns are added');
});

test('The content is displayed', function(assert) {
  const columnsDefinitions = [
    ColumnDefinition.create({
      contentPath: 'value'
    })
  ];

  this.set('columns', columnsDefinitions);
  this.set('content', [{
    value: 'a value'
  }]);

  this.render(hbs`{{ember-table
    columns=columns
    content=content
  }}`);

  // We insert invisible rows if the height of the body of the table allows it.
  // Not sure if it's a good idea.
  assert.equal(this.$('.ember-table-body-container .ember-table-table-row:visible').length,
               1,
               'One row is inserted');
});

test('Fixed columns are rendered', function(assert) {
  const columnsDefinitions = [
    ColumnDefinition.create({
      headerCellName: 'column 1'
    }),
    ColumnDefinition.create({
      headerCellName: 'column 2'
    })
  ];

  this.set('columns', columnsDefinitions);
  this.set('numFixedColumns', 0);

  this.render(hbs`{{ember-table
    columns=columns
    numFixedColumns=numFixedColumns
  }}`);

  assert.equal(this.$('.ember-table-header-cell').length, 2, 'The columns are added');

  this.set('numFixedColumns', 1);
  assert.equal(this.$('.ember-table-header-cell').length, 2, 'The columns are added');
});
