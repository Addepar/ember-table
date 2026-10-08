import { module, test } from 'qunit';
import { render } from '@ember/test-helpers';

import { ResizePage } from 'ember-table/test-support/pages/-private/ember-table-header';

import { componentModule } from '../../../helpers/module';
import { EmberThResizeHandle } from 'ember-table';
import type { TableTestContext } from '../../../helpers/table-test-context';

let resize = new ResizePage();

module('Integration | Component | ember-th/resize-handle', function() {
  componentModule('basic', function() {
    test('it renders', async function (this: TableTestContext, assert) {
      this.set('columnMeta', {
        isResizable: true,
      });

      const ctx = this;
      await render(<template><EmberThResizeHandle @columnMeta={{ctx.columnMeta}} /></template>);

      assert.true(resize.isPresent);

      this.set('columnMeta.isResizable', false);
      assert.false(resize.isPresent);
    });
  });
});
