import { module, test } from 'qunit';
import hbs from 'htmlbars-inline-precompile';

import { generateTable, generateColumns } from '../../helpers/generate-table';
import { componentModule } from '../../helpers/module';
import { set, get } from '@ember/object';

import { fillIn, render, settled } from '@ember/test-helpers';

import TablePage from 'ember-table/test-support/pages/ember-table';
import { run } from '@ember/runloop';

let table = new TablePage();

module('Integration | cell', function() {
  componentModule('basic', function() {
    test('sends onClick action', async function(assert) {
      this.set(
        'onCellClick',
        ({ event, cellValue, cellMeta, columnValue, columnMeta, rowValue, rowMeta }) => {
          assert.ok(event, 'event sent');

          assert.equal(cellValue, '0A', 'cellValue sent');
          assert.ok(cellMeta, 'cellMeta sent');

          assert.equal(columnValue.name, 'A', 'columnValue sent');
          assert.ok(columnMeta, 'columnMeta sent');

          assert.ok(rowValue, 'rowValue sent');
          assert.ok(rowMeta, 'rowMeta sent');
        }
      );

      await generateTable(this);
      await table.getCell(0, 0).click();
    });

    test('sends onDoubleClick action', async function(assert) {
      this.set(
        'onCellDoubleClick',
        ({ event, cellValue, cellMeta, columnValue, columnMeta, rowValue, rowMeta }) => {
          assert.ok(event, 'event sent');

          assert.equal(cellValue, '0A', 'cellValue sent');
          assert.ok(cellMeta, 'cellMeta sent');

          assert.equal(columnValue.name, 'A', 'columnValue sent');
          assert.ok(columnMeta, 'columnMeta sent');

          assert.ok(rowValue, 'rowValue sent');
          assert.ok(rowMeta, 'rowMeta sent');
        }
      );

      await generateTable(this);
      await table.getCell(0, 0).doubleClick();
    });
  });

  componentModule('mutation', function() {
    test('it updates cell values when changed externally', async function(assert) {
      let columnCount = 2;
      let rows = [
        {
          A: 'A',
          B: 'B',
        },
      ];

      await generateTable(this, { rows, columnCount });

      assert.equal(table.getCell(0, 0).text, 'A', 'renders correct initial value');
      assert.equal(table.getCell(0, 1).text, 'B', 'renders correct initial value');

      run(() => {
        set(rows[0], 'A', 'Y');
        set(rows[0], 'B', 'Z');
      });

      await settled();

      assert.equal(table.getCell(0, 0).text, 'Y', 'renders correct updated value');
      assert.equal(table.getCell(0, 1).text, 'Z', 'renders correct updated value');
    });

    test('Can update cell values directly', async function(assert) {
      let columnCount = 1;
      let rows = [
        {
          A: 'A',
        },
      ];

      this.set('columns', generateColumns(columnCount));
      this.set('rows', rows);

      await render(hbs`
        <div id="container" style="height: 500px;">
          <EmberTable as |t|>
            <EmberThead @api={{t}} @columns={{this.columns}} />
            <EmberTbody @api={{t}} @rows={{this.rows}} as |b|>
              <EmberTr @api={{b}} as |r|>
                <EmberTd @api={{r}} as |cellValue|>
                  <Input @value={{cellValue}} />
                </EmberTd>
              </EmberTr>
            </EmberTbody>
          </EmberTable>
        </div>
      `);

      await settled();

      await fillIn('input', 'Z');

      assert.equal(get(rows[0], 'A'), 'Z', 'value updated successfully');
    });
  });

  componentModule('positional css classes', function() {
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

      await settled();

      let row = table.rows.objectAt(0);
      let cells = row.cells.toArray();

      // `is-first-column` class only appears on first cell
      assert.ok(cells[0].isFirstColumn, 'is-first-column applied to first column cell');
      assert.notOk(cells[1].isFirstColumn, 'is-first-column not applied to middle column cell');
      assert.notOk(cells[2].isFirstColumn, 'is-first-column not applied to last column cell');

      // `is-last-column` class only appears on last cell
      assert.notOk(cells[0].isLastColumn, 'is-last-column not applied to first column cell');
      assert.notOk(cells[1].isLastColumn, 'is-last-column not applied to middle column cell');
      assert.ok(cells[2].isLastColumn, 'is-last-column applied to last column cell');
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
          <EmberThead
            @api={{t}}
            @columns={{this.columns}}
            @widthConstraint="eq-container-slack"
            @initialFillMode="equal-column"
          />
          <EmberTbody @api={{t}} @rows={{this.rows}} />
        </EmberTable>
      `);

      await settled();

      let header = table.headers.objectAt(0);
      let row = table.rows.objectAt(0);
      let cell = row.cells.objectAt(0);
      let slackCell = row.slackCell;

      // slack header should be marked accordingly
      assert.notOk(cell.isSlack, 'is-slack not applied to normal cell');
      assert.ok(slackCell.isSlack, 'is-slack applied to slack cell');

      // initially, slack column has zero width, so "A" gets `is-last-column` class
      assert.ok(cell.isLastColumn, 'is-last-column applied to normal cell');
      assert.notOk(slackCell.isLastColumn, 'is-last-column not applied to slack cell');

      /**
       * shrink cell "A"; now slack column gets the `is-last-column`
       * class.
       *
       * The number 27 here for the resize is fairly arbitrary, it may be
       * tied to the size of the resize handle or another drag/drop
       * threshold.
       */
      await header.logicalResize(header.logicalWidth - 27);

      assert.notOk(cell.isLastColumn, 'is-last-column not applied to normal cell');
      assert.ok(slackCell.isLastColumn, 'is-last-column applied to slack cell');
    });
  });
});
