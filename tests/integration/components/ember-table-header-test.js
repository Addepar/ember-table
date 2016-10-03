import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
// import ColumnDefinition from 'ember-table/models/column-definition';

moduleForComponent('ember-table', 'Integration | Component | ember table header', {
  integration: true
});

test('it renders by default', function(assert) {
  this.render(hbs`{{ember-table}}`);

  const $header = this.$('.ember-table-header-container');
  assert.equal($header.length, 1, 'The header is present');
  assert.equal($header.outerHeight(),
               30,
               'The default header height is 30');
});

test('it can be hidden', function(assert) {
  this.render(hbs`{{ember-table
    hasHeader=false
  }}`);

  assert.equal(this.$('.ember-table-header-container').length, 0, 'The header is not present');
});

test('its minimium size can be set', function(assert) {
  this.render(hbs`{{ember-table
    minHeaderHeight=100
  }}`);

  const $header = this.$('.ember-table-header-container');
  assert.equal($header.outerHeight(),
               100,
               'The header size is configurable');
});
