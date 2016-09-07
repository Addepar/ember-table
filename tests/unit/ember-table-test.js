import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';
import ColumnDefinition from '../../models/column-definition';
import BodyTableContainer from '../../views/body-table-container';
import HeaderTableContainer from '../../views/header-table-container';
import FooterTableContainer from '../../views/footer-table-container';


moduleForComponent('ember-table', 'Unit: Ember Table', {
  unit: true,
  needs: [
    'template:header-cell',
    'template:header-table-container',
    'template:header-row',
    'template:body-table-container',
    'template:footer-table-container',
    'template:scroll-container',
    'view:body-table-container',
    'view:scroll-container',
    'view:column-sortable-indicator',
    'view:header-table-container',
    'view:header-block',
    'view:header-row',
    'view:multi-item-collection',
    'view:header-cell',
    'view:lazy-table-block',
    'view:footer-table-container',
    'view:table-block',
    'view:scroll-panel'
  ]
});

test('Overriding the bodyTableContainerView property results in the specified being rendered', function(assert) {
  assert.expect(1);

  this.container.register('view:test-body-table-container', BodyTableContainer.extend({
    classNames: ['test-body-table-container']
  }));

  const emberTable = this.subject({
    bodyTableContainerView: 'test-body-table-container',
    columns: [
      ColumnDefinition.create({
        getCellContent: function(row) {
          return "";
        }
      })
    ],
    content: []
  });

  Ember.run(() => emberTable.append());


  assert.ok(Ember.isPresent(emberTable.$('.test-body-table-container')),
   'Can find class added by extended table body');

  Ember.run(function() {
    emberTable.destroy();
  });

});

test('Overriding the headerTableContainerView property results in the specified being rendered', function(assert) {
  assert.expect(1);

  this.container.register('view:test-header-table-container', HeaderTableContainer.extend({
    classNames: ['test-header-table-container']
  }));

  const emberTable = this.subject({
    headerTableContainerView: 'test-header-table-container',
    columns: [
      ColumnDefinition.create({
        getCellContent: function(row) {
          return "";
        }
      })
    ],
    content: []
  });

  Ember.run(() => emberTable.append());

  assert.ok(Ember.isPresent(emberTable.$('.test-header-table-container')),
   'Can find class added by extended table header');

  Ember.run(function() {
    emberTable.destroy();
  });

});

test('Overriding the footerTableContainerView property results in the specified view being rendered', function(assert) {
  assert.expect(1);

  this.container.register('view:test-footer-table-container', FooterTableContainer.extend({
    classNames: ['test-footer-table-container']
  }));

  const emberTable = this.subject({
    footerTableContainerView: 'test-footer-table-container',
    columns: [
      ColumnDefinition.create({
        getCellContent: function(row) {
          return "";
        }
      })
    ],
    content: []
  });

  Ember.run(() => emberTable.append());

  assert.ok(Ember.isPresent(emberTable.$('.test-footer-table-container')),
   'Can find class added by extended table footer');

  Ember.run(function() {
    emberTable.destroy();
  });

});
