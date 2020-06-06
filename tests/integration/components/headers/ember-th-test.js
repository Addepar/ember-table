import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import { generateTableValues } from '../../../helpers/generate-table';
import TablePage from 'ember-table/test-support/pages/ember-table';

import { gte } from 'ember-compatibility-helpers';

let table = new TablePage();

moduleForComponent('ember-th', '[Unit] ember-th', { integration: true });

test('A header cell accepts a block', async function(assert) {
  assert.expect(4);

  let columns = [
    {
      name: 'Name',
      valuePath: 'name',
      isAscending: false,
      isSortable: true,
    },
    {
      name: 'Age',
      valuePath: 'age',
    },
  ];

  let rows = [{ name: 'Zoe', age: 34 }, { name: 'Alex', age: 43 }, { name: 'Liz', age: 25 }];
  generateTableValues(this, { columns, rows });

  let firstHeader = table.headers.objectAt(0);

  if (gte('1.13.0')) {
    await this.render(hbs`
      {{#ember-table data-test-ember-table=true as |t|}}
        {{#ember-thead
          api=t
          columns=columns
          sorts=sorts

          onUpdateSorts=(action onUpdateSorts)

          as |h|}}
          {{#ember-tr api=h as |r|}}
            {{#ember-th api=r as |column|}}
              <div data-test-block>
                {{column.name}}
              </div>
            {{/ember-th}}
          {{/ember-tr}}
        {{/ember-thead}}

        {{ember-tbody api=t rows=rows}}
      {{/ember-table}}
    `);
  } else {
    await this.render(hbs`
      {{#ember-table data-test-ember-table=true as |t|}}
        {{#ember-thead
          api=t
          columns=columns
          sorts=sorts

          onUpdateSorts="onUpdateSorts"

          as |h|}}
          {{#ember-tr api=h as |r|}}
            {{#ember-th api=r as |column|}}
              <div data-test-block>
                {{column.name}}
              </div>
            {{/ember-th}}
          {{/ember-tr}}
        {{/ember-thead}}

        {{ember-tbody api=t rows=rows}}
      {{/ember-table}}
    `);
  }
  await firstHeader.click();

  assert.equal(this.$('[data-test-block]').length, 2, 'Header cells render passed block');
  assert.ok(!firstHeader.sortIndicator.isPresent, 'No sort indicator is rendered');
  assert.notOk(firstHeader.sortToggle.isPresent, 'No sort toggle is rendered');
  assert.notOk(firstHeader.resizeHandle.isPresent, 'No resize area is rendered');
});
