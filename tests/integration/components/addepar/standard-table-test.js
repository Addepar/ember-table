import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('addepar/standard-table', 'Integration | Component | addepar/standard table', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{addepar/standard-table}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#addepar/standard-table}}
      template block text
    {{/addepar/standard-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
