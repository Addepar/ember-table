import { module, test } from 'qunit';
import hbs from 'htmlbars-inline-precompile';

import { ResizePage } from 'ember-table/test-support/pages/-private/ember-table-header';

import { componentModule } from '../../../helpers/module';

let resize = new ResizePage();

module('Integration | Component | ember-th/resize-handle', function() {
  componentModule('basic', function() {
    test('it renders', async function(assert) {
      this.set('columnMeta', {
        isResizable: true,
      });

      await this.render(hbs`{{ember-th/resize-handle columnMeta=columnMeta}}`);

      assert.ok(resize.isPresent);

      this.set('columnMeta.isResizable', false);
      assert.notOk(resize.isPresent);
    });
  });
});
