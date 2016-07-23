import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
// import ColumnDefinition from 'ember-table/models/column-definition';

moduleForComponent('ember-table', 'Integration | Component | ember table footer', {
  integration: true
});

test('it renders by default', function(assert) {
  this.render(hbs`{{ember-table}}`);

  const $footer = this.$('.ember-table-footer-container');
  assert.equal($footer.length, 1, 'The footer is present');
  assert.equal($footer.outerHeight(),
               30,
               'The default footer height is 30');
});

test('it can be hidden', function(assert) {
  this.render(hbs`{{ember-table
    hasFooter=false
  }}`);

  assert.equal(this.$('.ember-table-footer-container').length, 0, 'The footer is not present');
});

//numFooterRow doesn't seem to do anything

//Why a difference between minHeaderHeight and footerHeight?
test('its size can be set', function(assert) {
  this.render(hbs`{{ember-table
    footerHeight=100
  }}`);

  const $footer = this.$('.ember-table-footer-container');
  assert.equal($footer.outerHeight(),
               100,
               'The footer size is configurable');
});
