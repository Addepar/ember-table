import { module, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import { generateTable, generateColumns } from '../../helpers/generate-table';
import { componentModule } from '../../helpers/module';
import { set, get } from '@ember/object';

import { fillIn } from 'ember-native-dom-helpers';
import wait from 'ember-test-helpers/wait';

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

      await wait();

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

      this.render(hbs`
        <div id="container" style="height: 500px;">
          {{#ember-table as |t|}}
            {{ember-thead api=t columns=columns}}

            {{#ember-tbody api=t rows=rows as |b|}}
              {{#ember-tr api=b as |r|}}
                {{#ember-td api=r as |cellValue|}}
                  {{input value=cellValue}}
                {{/ember-td}}
              {{/ember-tr}}
            {{/ember-tbody}}
          {{/ember-table}}
        </div>
      `);

      await wait();

      fillIn('input', 'Z');

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

      this.render(hbs`
        {{#ember-table as |t|}}
          {{ember-thead api=t columns=columns}}
          {{ember-tbody api=t rows=rows}}
        {{/ember-table}}
      `);

      await wait();

      let cells = document.querySelectorAll('.ember-table td');

      assert.ok(
        cells[0].classList.contains('is-first-column'),
        'is-first-column class is applied to first column cell'
      );

      assert.notOk(
        cells[1].classList.contains('is-first-column'),
        'is-first-column class is not applied to middle column cell'
      );

      assert.notOk(
        cells[2].classList.contains('is-first-column'),
        'is-first-column class is not applied to last column cell'
      );

      assert.notOk(
        cells[0].classList.contains('is-last-column'),
        'is-last-column class is not applied to first column cell'
      );

      assert.notOk(
        cells[1].classList.contains('is-last-column'),
        'is-last-column class is not applied to middle column cell'
      );

      assert.ok(
        cells[2].classList.contains('is-last-column'),
        'is-last-column class is applied to last column cell'
      );
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
            columns=columns
            widthConstraint="eq-container-slack"
            initialFillMode="equal-column"}}

          {{ember-tbody api=t rows=rows}}
        {{/ember-table}}
      `);

      await wait();

      let cells = document.querySelectorAll('.ember-table td');

      // slack column should be marked
      assert.notOk(
        cells[0].classList.contains('is-slack'),
        'is-slack class is not applied supplied column cell'
      );

      assert.ok(
        cells[1].classList.contains('is-slack'),
        'is-slack class is applied to slack column cell'
      );

      // initially, slack column has zero width, so "A" is the last column
      assert.ok(
        cells[0].classList.contains('is-last-column'),
        'is-last-column class is applied to last supplied column cell'
      );

      assert.notOk(
        cells[1].classList.contains('is-last-column'),
        'is-last-column class is not applied to slack column cell'
      );

      // shrink header, giving slack column non-zero width
      let firstHeader = table.headers.objectAt(0);
      await firstHeader.resize(firstHeader.width - 1);

      assert.notOk(
        cells[0].classList.contains('is-last-column'),
        'is-last-column class is not applied to last supplied column cell'
      );

      assert.ok(
        cells[1].classList.contains('is-last-column'),
        'is-last-column class is applied to slack column cell'
      );
    });
  });
});
