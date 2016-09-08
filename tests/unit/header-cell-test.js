import Ember from 'ember';
import {
  moduleFor,
  test
} from 'ember-qunit';

import ColumnDefinition from '../../models/column-definition';

moduleFor('view:headerCell', 'Unit: Header Cell', {
  unit: true,
  needs: [
    'template:header-cell'
  ]
});

test('The elementSizeDidChange scheduled task is canceled when the element is destroyed', function(assert) {
  assert.expect(2);

  const headerCell = this.subject({
    content: ColumnDefinition.create({}),
    tableComponent: {
      columnMode: 'standard'
    }
  });

  let callCount = 0;

  const oldElementSizeDidChange = headerCell.elementSizeDidChange;
  headerCell.elementSizeDidChange = function() {
    ++callCount;
    oldElementSizeDidChange.apply(this, arguments);
  };

  Ember.run(() => headerCell.append());

  assert.equal(callCount, 1,
    'elementSizeDidChange is called for when initializing elements');

  Ember.run(function() {
    headerCell.set('width', 100);
    headerCell.destroy();
  });

  assert.equal(callCount, 1,
    'elementSizeDidChange is not called for destroyed elements');
});

test('The elementSizeDidChange scheduled task is only called once when the task is done', function(assert) {
  assert.expect(2);

  const headerCell = this.subject({
    content: ColumnDefinition.create({}),
    tableComponent: {
      columnMode: 'standard'
    }
  });

  let callCount = 0;

  const oldElementSizeDidChange = headerCell.elementSizeDidChange;
  headerCell.elementSizeDidChange = function() {
    ++callCount;
    oldElementSizeDidChange.apply(this, arguments);
  };

  Ember.run(() => headerCell.append());

  assert.equal(callCount, 1,
    'elementSizeDidChange is called for when initializing elements');

  Ember.run(function() {
    // Explicitly setting twice to ensure that `elementSizeDidChange` is only
    // scheduled once
    headerCell.set('width', 100);
    headerCell.set('width', 500);
  });

  assert.equal(callCount, 2,
    'elementSizeDidChange is called when resizing elements');

  Ember.run(function() {
    headerCell.destroy();
  });
});
