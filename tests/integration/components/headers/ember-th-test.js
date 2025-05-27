import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { render, settled } from '@ember/test-helpers';

import { generateTableValues, generateColumns } from '../../../helpers/generate-table';
import TablePage from 'ember-table/test-support/pages/ember-table';

let table = new TablePage();

module('[Unit] ember-th', function(hooks) {
  setupRenderingTest(hooks);

  // eslint-disable-next-line qunit/require-expect
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

    await render(hbs`
    <EmberTable @data-test-ember-table={{true}} as |t|>
      <EmberThead @api={{t}}
        @columns={{this.columns}}
        @sorts={{this.sorts}}
        @onUpdateSorts={{this.onUpdateSorts}} as |h|
      >
        <EmberTr @api={{h}} as |r|>
          <EmberTh @api={{r}} as |column|>
            <div data-test-block>
              {{column.name}}
            </div>
          </EmberTh>
        </EmberTr>
      </EmberThead>

      <EmberTbody @api={{t}} @rows={{this.rows}} />
    </EmberTable>
    `);
    await firstHeader.click();

    assert.strictEqual(
      this.element.querySelectorAll('[data-test-block]').length,
      2,
      'Header cells render passed block'
    );
    assert.false(firstHeader.sortIndicator.isPresent, 'No sort indicator is rendered');
    assert.false(firstHeader.sortToggle.isPresent, 'No sort toggle is rendered');
    assert.false(firstHeader.resizeHandle.isPresent, 'No resize area is rendered');
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

    await render(hbs`
      <EmberTable as |t|>
        <EmberThead @api={{t}} @columns={{this.columns}} />
        <EmberTbody @api={{t}} @rows={{this.rows}} />
      </EmberTable>
    `);

    // eslint-disable-next-line ember/no-settled-after-test-helper
    await settled();

    let headers = table.headers.toArray();

    // `is-first-column` class only appears on first header
    assert.true(headers[0].isFirstColumn, 'is-first-column applied to first header');
    assert.false(headers[1].isFirstColumn, 'is-first-column not applied to middle header');
    assert.false(headers[2].isFirstColumn, 'is-first-column not applied to last header');

    // `is-last-column` class only appears on last header
    assert.false(headers[0].isLastColumn, 'is-last-column not applied to first header');
    assert.false(headers[1].isLastColumn, 'is-last-column not applied to middle header');
    assert.true(headers[2].isLastColumn, 'is-last-column applied to last header');
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

    await render(hbs`
      <EmberTable as |t|>
        <EmberThead @api={{t}} @columns={{this.columns}} @widthConstraint="eq-container-slack" @initialFillMode="equal-column" />

        <EmberTbody @api={{t}} @rows={{this.rows}} />
      </EmberTable>
    `);

    // eslint-disable-next-line ember/no-settled-after-test-helper
    await settled();

    let header = table.headers.objectAt(0);
    let slackHeader = table.slackHeaders.objectAt(0);

    // slack header should be marked accordingly
    assert.false(header.isSlack, 'is-slack not applied to normal header');
    assert.true(slackHeader.isSlack, 'is-slack applied to slack header');

    // initially, slack column has zero width, so "A" gets `is-last-column` class
    assert.true(header.isLastColumn, 'is-last-column applied to normal header');
    assert.false(slackHeader.isLastColumn, 'is-last-column not applied to slack header');

    /**
     * shrink header "A"; now slack column gets the `is-last-column`
     * class.
     *
     * The number 27 here for the resize is fairly arbitrary, it may be
     * tied to the size of the resize handle or another drag/drop
     * threshold.
     */
    await header.logicalResize(header.logicalWidth - 27);

    assert.false(header.isLastColumn, 'is-last-column not applied to normal header');
    assert.true(slackHeader.isLastColumn, 'is-last-column applied to slack header');
  });
});
