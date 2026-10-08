import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { generateColumns, generateRows } from '../../helpers/generate-table';
import { EmberTable, EmberTbody, EmberTd, EmberTh, EmberThead, EmberTr } from 'ember-table';
import type { TableTestContext } from '../../helpers/table-test-context';

module('Integration | attributes', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function (this: TableTestContext) {
    this.set('columns', generateColumns(2));
    this.set('rows', generateRows(1));
  });

  test('`class` and `@class` merge with the components own classes', async function (this: TableTestContext, assert) {
    const ctx = this;
    await render(<template>
      <EmberTable class="attr-table" @class="arg-table" as |t|>
        <EmberThead @api={{t}} @columns={{ctx.columns}} as |h|>
          <EmberTr @api={{h}} class="attr-head-row" @class="arg-head-row" as |r|>
            <EmberTh @api={{r}} class="attr-th" @class="arg-th" />
          </EmberTr>
        </EmberThead>
        <EmberTbody @api={{t}} @rows={{ctx.rows}} as |b|>
          <EmberTr @api={{b}} class="attr-row" @class="arg-row" as |r|>
            <EmberTd @api={{r}} class="attr-td" @class="arg-td" />
          </EmberTr>
        </EmberTbody>
      </EmberTable>
    </template>);

    assert.dom('.ember-table').hasClass('attr-table').hasClass('arg-table');
    assert.dom('thead tr').hasClass('et-tr').hasClass('attr-head-row').hasClass('arg-head-row');
    assert.dom('th').hasClass('is-first-column').hasClass('attr-th').hasClass('arg-th');
    assert.dom('tbody tr').hasClass('et-tr').hasClass('attr-row').hasClass('arg-row');
    assert.dom('td').hasClass('is-first-column').hasClass('attr-td').hasClass('arg-td');
  });
});
