import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { settled } from '@ember/test-helpers';

import { generateTableValues, generateColumns } from '../../../helpers/generate-table';
import TablePage from 'ember-table/test-support/pages/ember-table';

let table = new TablePage();

module('[Unit] ember-th', function(hooks) {
  setupRenderingTest(hooks);

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

    await this.render(hbs`
    {{#ember-table data-test-ember-table=true as |t|}}
      {{#ember-thead
        api=t
        columns=this.columns
        sorts=this.sorts

        onUpdateSorts=(action this.onUpdateSorts)

        as |h|}}
        {{#ember-tr api=h as |r|}}
          {{#ember-th api=r as |column|}}
            <div data-test-block>
              {{column.name}}
            </div>
          {{/ember-th}}
        {{/ember-tr}}
      {{/ember-thead}}

      {{ember-tbody api=t rows=this.rows}}
    {{/ember-table}}
    `);
    await firstHeader.click();

    assert.equal(
      this.element.querySelectorAll('[data-test-block]').length,
      2,
      'Header cells render passed block'
    );
    assert.ok(!firstHeader.sortIndicator.isPresent, 'No sort indicator is rendered');
    assert.notOk(firstHeader.sortToggle.isPresent, 'No sort toggle is rendered');
    assert.notOk(firstHeader.resizeHandle.isPresent, 'No resize area is rendered');
  });

  test('applies is-first-column, is-last-column classes', async function(assert) {
    let columnCount = 3;
    let rows = [
      {
        A: 'A',
        B: 'B',
        C: 'C',
      },
    ];

    this.set('columns', generateColumns(columnCount));
    this.set('rows', rows);

    this.render(hbs`
      {{#ember-table as |t|}}
        {{ember-thead api=t columns=this.columns}}
        {{ember-tbody api=t rows=this.rows}}
      {{/ember-table}}
    `);

    await settled();

    let headers = table.headers.toArray();

    // `is-first-column` class only appears on first header
    assert.ok(headers[0].isFirstColumn, 'is-first-column applied to first header');
    assert.notOk(headers[1].isFirstColumn, 'is-first-column not applied to middle header');
    assert.notOk(headers[2].isFirstColumn, 'is-first-column not applied to last header');

    // `is-last-column` class only appears on last header
    assert.notOk(headers[0].isLastColumn, 'is-last-column not applied to first header');
    assert.notOk(headers[1].isLastColumn, 'is-last-column not applied to middle header');
    assert.ok(headers[2].isLastColumn, 'is-last-column applied to last header');
  });

  test('applies positional classes correctly in slack mode', async function(assert) {
    let columnCount = 1;
    let rows = [
      {
        A: 'A',
      },
    ];

    this.set('columns', generateColumns(columnCount));
    this.set('rows', rows);

    this.render(hbs`
      {{#ember-table as |t|}}
        {{ember-thead
          api=t
          columns=this.columns
          widthConstraint="eq-container-slack"
          initialFillMode="equal-column"}}

        {{ember-tbody api=t rows=this.rows}}
      {{/ember-table}}
    `);

    await settled();

    let header = table.headers.objectAt(0);
    let slackHeader = table.slackHeaders.objectAt(0);

    // slack header should be marked accordingly
    assert.notOk(header.isSlack, 'is-slack not applied to normal header');
    assert.ok(slackHeader.isSlack, 'is-slack applied to slack header');

    // initially, slack column has zero width, so "A" gets `is-last-column` class
    assert.ok(header.isLastColumn, 'is-last-column applied to normal header');
    assert.notOk(slackHeader.isLastColumn, 'is-last-column not applied to slack header');

    // shrink header "A"; now slack column gets the `is-last-column` class
    await header.resize(header.width - 1);
    assert.notOk(header.isLastColumn, 'is-last-column not applied to normal header');
    assert.ok(slackHeader.isLastColumn, 'is-last-column applied to slack header');
  });
});
