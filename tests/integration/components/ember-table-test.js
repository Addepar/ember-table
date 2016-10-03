import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import ColumnDefinition from 'ember-table/models/column-definition';
import HeaderCellView from 'ember-table/views/header-cell';
import TableCellView from 'ember-table/views/table-cell';

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
    value: 12
  }]);

  this.render(hbs`{{ember-table
    columns=columns
    content=content
  }}`);

  // We insert invisible rows if the height of the body of the table allows it.
  // Not sure if it's a good idea.
  assert.equal(this.$('.ember-table-body-container .ember-table-table-row .ember-table-cell:contains(12)').length,
               1,
               'The data is displayed');

  // Default values
  const bottomBorderSize = 2;
  assert.equal(this.$('.ember-table-body-container .ember-table-table-row:contains(12)').height(),
               30,
               'The default row height is 30');
  assert.equal(this.$('.ember-table-footer-container').height(),
               30 - bottomBorderSize,
               'The default footer height is 30');
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

// This is documented but not implemented..
// test('numFooterRow', function(assert) {
  // const columnsDefinitions = [
    // ColumnDefinition.create({
      // headerCellName: 'column 1'
    // })
  // ];

  // this.set('columns', columnsDefinitions);

  // this.render(hbs`{{ember-table
    // columns=columns
    // numFooterRow=numFooterRow
  // }}`);

  // assert.equal(this.$('.ember-table-footer-container .ember-table-table-row').length,
               // 0,
               // 'No footer rows are displayed by default');
  // this.set('numFooterRow', 1);
  // assert.equal(this.$('.ember-table-footer-container .ember-table-table-row').length,
               // 1,
               // 'The number of footer rows can be customized with numFooterRow');
// });

test('rowHeight', function(assert) {
  const columnsDefinitions = [
    ColumnDefinition.create({
      contentPath: 'value'
    })
  ];

  this.set('columns', columnsDefinitions);
  this.set('content', [{
    value: 12
  }]);
  this.set('rowHeight', 50);

  this.render(hbs`{{ember-table
    columns=columns
    content=content
    rowHeight=rowHeight
  }}`);

  // We insert invisible rows if the height of the body of the table allows it.
  // Not sure if it's a good idea.
  assert.equal(this.$('.ember-table-body-container .ember-table-table-row:contains(12)').height(),
               50,
               'The row height can be adjusted');
});

test('minHeaderHeight', function(assert) {
  const bottomBorderSize = 2;
  const columnsDefinitions = [
    ColumnDefinition.create({
      contentPath: 'value'
    })
  ];

  this.set('columns', columnsDefinitions);
  this.set('content', [{
    value: 12
  }]);
  this.set('minHeaderHeight', 50);

  this.render(hbs`{{ember-table
    columns=columns
    content=content
    minHeaderHeight=minHeaderHeight
  }}`);

  assert.equal(this.$('.ember-table-header-container').height(),
               50 - bottomBorderSize,
               'The minimum header height can be adjusted');
});

test('footerHeight', function(assert) {
  const bottomBorderSize = 2;
  const columnsDefinitions = [
    ColumnDefinition.create({
      contentPath: 'value'
    })
  ];

  this.set('columns', columnsDefinitions);
  this.set('content', [{
    value: 12
  }]);
  this.set('footerHeight', 50);

  this.render(hbs`{{ember-table
    columns=columns
    content=content
    footerHeight=footerHeight
  }}`);

  assert.equal(this.$('.ember-table-footer-container').height(),
               50 - bottomBorderSize,
               'The footer height can be adjusted');
});

test('hasHeader', function(assert) {
  const columnsDefinitions = [
    ColumnDefinition.create({
      contentPath: 'value'
    })
  ];

  this.set('columns', columnsDefinitions);
  this.set('content', [{
    value: 12
  }]);
  this.set('hasHeader', true);

  this.render(hbs`{{ember-table
    columns=columns
    content=content
    hasHeader=hasHeader
  }}`);

  assert.equal(this.$('.ember-table-header-container').length,
               1,
               'The header is visible');

  this.set('hasHeader', false);
  assert.equal(this.$('.ember-table-header-container').length,
               0,
               'The header is not visible');
});

test('hasFooter', function(assert) {
  const columnsDefinitions = [
    ColumnDefinition.create({
      contentPath: 'value'
    })
  ];

  this.set('columns', columnsDefinitions);
  this.set('content', [{
    value: 12
  }]);
  this.set('hasFooter', true);

  this.render(hbs`{{ember-table
    columns=columns
    content=content
    hasFooter=hasFooter
  }}`);

  assert.equal(this.$('.ember-table-footer-container').length,
               1,
               'The footer is visible');

  this.set('hasFooter', false);
  assert.equal(this.$('.ember-table-footer-container').length,
               0,
               'The footer is not visible');
});

// test('enableColumReorder', function(assert) {
  // const columnsDefinitions = [
    // ColumnDefinition.create({
      // headerCellName: 'column 1',
      // contentPath: 'value'
    // }),
    // ColumnDefinition.create({
      // headerCellName: 'column 2',
      // contentPath: 'value'
    // })
  // ];

  // this.set('columns', columnsDefinitions);
  // this.set('content', [{
    // value: 12
  // }]);

  // this.render(hbs`{{ember-table
    // columns=columns
    // content=content
  // }}`);

  // const columnOrder = this.$('.ember-table-header-container .ember-table-header-cell').map(function(index, elmt) {
    // return elmt.innerText;
  // }).toArray();
  // assert.equal(columnOrder,
               // ['column 1', 'column 2'],
               // 'The column are initially properly inserted');

  // assert.ok(false, 'Need to do allow drag & drop in test');
// });

// test('enableContentSelection', function(assert) {
// });

// test('styleBindings', function(assert) {
  // const columnsDefinitions = [
    // ColumnDefinition.create({
      // contentPath: 'value'
    // })
  // ];

  // this.set('columns', columnsDefinitions);
  // this.set('content', [{
    // value: 12
  // }]);
  // this.set('styleBindings', ['height', 'color']);
  // this.set('color', '#000')

  // this.render(hbs`{{ember-table
    // columns=columns
    // content=content
    // styleBindings=styleBindings
    // color=color
  // }}`);

  // // debugger
  // // assert.equal(this.$('.ember-table-body-container .ember-table-table-row .ember-table-cell').length,
// });

// test('columnMode', function(assert) {
// });

// test('selectionMode', function(assert) {
// });

// test('selectionOutput', function(assert) {
// });

test('headerCellName', function(assert) {
  const columnsDefinitions = [
    ColumnDefinition.create({
      headerCellName: 'column 1',
      contentPath: 'value'
    })
  ];

  this.set('columns', columnsDefinitions);
  this.set('content', [{
    value: 12
  }]);

  this.render(hbs`{{ember-table
    columns=columns
    content=content
  }}`);

  assert.equal(this.$('.ember-table-header-container .ember-table-header-cell').text().trim(),
    'column 1',
    'The column title can be set'
  );
});

test ('contentPath', function(assert) {
  const columnsDefinitions = [
    ColumnDefinition.create({
      headerCellName: 'column 1',
      contentPath: 'anything'
    })
  ];

  this.set('columns', columnsDefinitions);
  this.set('content', [{
    anything: 12
  }]);

  this.render(hbs`{{ember-table
    columns=columns
    content=content
  }}`);

  assert.equal(this.$('.ember-table-body-container .ember-table-cell:nth-of-type(1)').text().trim(),
    '12',
    'A column definition declares the path to the content'
  );
});

test ('textAlign', function(assert) {
  const columnDefinition = ColumnDefinition.create({
    contentPath: 'value'
  });

  this.set('columns', [columnDefinition]);
  this.set('content', [{
    value: 12
  }]);

  this.render(hbs`{{ember-table
    columns=columns
    content=content
  }}`);

  assert.equal(this.$('.ember-table-body-container .ember-table-table-row:nth-of-type(1) .ember-table-cell').css('text-align'),
    'right',
    'The default text alignment is right'
  );

  // TODO: the documentation is wrong about the possible options (`right` instead of `text-align-right`)
  Ember.run( function() {
    columnDefinition.set('textAlign', 'text-align-left');
  });
  assert.equal(this.$('.ember-table-body-container .ember-table-table-row:nth-of-type(1) .ember-table-cell').css('text-align'),
    'left',
    'The text alignment is left'
  );

  Ember.run( function() {
    columnDefinition.set('textAlign', 'text-align-center');
  });
  assert.equal(this.$('.ember-table-body-container .ember-table-table-row:nth-of-type(1) .ember-table-cell').css('text-align'),
    'center',
    'The text alignment is center'
  );
});

test('headerCellView', function(assert) {
  const columnDefinition = ColumnDefinition.create({
    contentPath: 'value',
    headerCellView: 'my-custom-header'
  });

  const CustomHeaderView = HeaderCellView.extend({
    classNames: ['my-custom-header-class']
  });

  this.container.register('view:my-custom-header', CustomHeaderView);

  this.set('columns', [columnDefinition]);
  this.set('content', [{
    value: 12
  }]);

  this.render(hbs`{{ember-table
    columns=columns
    content=content
  }}`);

  assert.equal(this.$('.ember-table-cell.my-custom-header-class').length,
    1,
    'The header cell class can be specified'
  );
});

test('tableCellView', function(assert) {
  const columnDefinition = ColumnDefinition.create({
    contentPath: 'value',
    tableCellView: 'my-custom-cell'
  });

  const CustomCellView = TableCellView.extend({
    classNames: ['my-custom-cell-class']
  });

  this.container.register('view:my-custom-cell', CustomCellView);

  this.set('columns', [columnDefinition]);
  this.set('content', [{
    value: 12
  }]);

  this.render(hbs`{{ember-table
    columns=columns
    content=content
  }}`);

  assert.equal(this.$('.ember-table-cell.my-custom-cell-class:contains(12)').length,
    1,
    'The content cell class can be specified'
  );
});
