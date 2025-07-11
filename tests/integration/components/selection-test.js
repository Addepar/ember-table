import { module, test } from 'qunit';
import { componentModule } from '../../helpers/module';

import TablePage from 'ember-table/test-support/pages/ember-table';

import { generateTable } from '../../helpers/generate-table';
import { generateRows } from 'dummy/utils/generators';
import { A as emberA } from '@ember/array';
import { run } from '@ember/runloop';
import { scrollTo } from '@ember/test-helpers';
import { registerTestWarnHandler } from '../../helpers/warn-handlers';

import { runInDebug } from '@ember/debug';

let table = new TablePage({
  validateSelected(...selectedIndexes) {
    let valid = true;

    let indexesSeen = [];
    this.rows.forEach((row, index) => {
      indexesSeen.push(index);
      if (selectedIndexes.includes(index)) {
        valid = valid && row.isSelected;
      } else {
        valid = valid && !row.isSelected;
      }
    });

    let unseenIndexes = selectedIndexes.filter(i => !indexesSeen.includes(i));
    if (unseenIndexes.length) {
      throw new Error(
        `could not validateSelected because these indexes were not checked: ${unseenIndexes.join(
          ','
        )}`
      );
    }

    return valid;
  },
});

// Return an array filled with the indices for all the rendered rows of the table
function allRenderedRowIndexes(table) {
  return Array(table.rows.length)
    .fill()
    .map((_, index) => index);
}

module('Integration | selection', () => {
  module('rowSelectionMode', function() {
    componentModule('multiple', function() {
      test('Can select a row by clicking on it', async function(assert) {
        await generateTable(this);

        assert.true(
          table.validateSelected(),
          'the row is not marked as selected on initialization'
        );

        await table.selectRow(0);

        assert.true(table.validateSelected(0), 'the row is selected after being clicked');
      });

      test('Can toggle a row with meta and control', async function(assert) {
        await generateTable(this);

        let row = table.body.rows.objectAt(0);

        for (let key of ['ctrlKey', 'metaKey']) {
          assert.true(table.validateSelected(), 'the row is not toggled on');

          await row.clickWith({ [key]: true });

          assert.true(table.validateSelected(0), 'the row is toggled on');

          await row.clickWith({ [key]: true });

          assert.true(table.validateSelected(), 'the row is toggled back off');
        }
      });

      test('Can toggle multiple rows with meta and control', async function(assert) {
        await generateTable(this);

        let rowOne = table.rows.objectAt(0);
        let rowTwo = table.rows.objectAt(1);

        for (let key of ['ctrlKey', 'metaKey']) {
          assert.true(table.validateSelected(), 'the rows are not selected');

          await rowOne.clickWith({ [key]: true });
          await rowTwo.clickWith({ [key]: true });

          assert.true(table.validateSelected(0, 1), 'the rows are selected');

          await rowOne.clickWith({ [key]: true });
          await rowTwo.clickWith({ [key]: true });

          assert.true(table.validateSelected(), 'the rows are toggled back off');
        }
      });

      test('Can toggle multiple rows with checkbox and keys', async function(assert) {
        await generateTable(this);

        let rowOne = table.rows.objectAt(0);
        let rowTwo = table.rows.objectAt(1);

        assert.true(table.validateSelected(), 'the rows are not selected');

        await rowOne.checkbox.click();
        await rowTwo.clickWith({ metaKey: true });

        assert.true(table.validateSelected(0, 1), 'the rows are selected');

        await rowOne.clickWith({ metaKey: true });
        await rowTwo.checkbox.click();

        assert.true(table.validateSelected(), 'the rows are toggled back off');
      });

      test('Can select a range with shift from click', async function(assert) {
        await generateTable(this);

        assert.true(table.validateSelected(), 'rows are not selected');

        await table.selectRangeFromClick(0, 2);

        assert.true(table.validateSelected(0, 1, 2), 'rows are selected');
      });

      test('Can select a range with shift from shift-click', async function(assert) {
        await generateTable(this);

        assert.true(table.validateSelected(), 'rows are not selected');

        await table.selectRangeFromShiftClick(0, 2);

        assert.true(table.validateSelected(0, 1, 2), 'rows are selected');
      });

      test('Selecting a range selects based on last selection', async function(assert) {
        await generateTable(this);

        assert.true(table.validateSelected(), 'rows are not selected');

        await table.selectRangeFromClick(3, 5);

        assert.true(table.validateSelected(3, 4, 5), 'rows are selected');
      });

      test('Selecting a range does not deselect previously selected rows', async function(assert) {
        await generateTable(this);

        assert.true(table.validateSelected(), 'rows are not selected');

        await table.selectRow(4);

        assert.true(table.validateSelected(4), 'middle row selected');

        await table.selectRangeFromClick(3, 5);

        assert.true(table.validateSelected(3, 4, 5), 'all rows are selected');
      });

      test('selecting a parent selects its children', async function(assert) {
        await generateTable(this, { rowCount: 3, rowDepth: 2 });

        assert.true(table.validateSelected(), 'rows are not selected');

        await table.selectRow(0);

        assert.true(table.validateSelected(0, 1, 2, 3), 'row and its children are selected');
      });

      test('deselecting a child deselects its parents', async function(assert) {
        await generateTable(this, { rowCount: 3, rowDepth: 2 });

        assert.true(table.validateSelected(), 'rows are not selected');

        await table.selectRow(0);

        assert.true(table.validateSelected(0, 1, 2, 3), 'row and its children are selected');

        await table.rows.objectAt(1).checkbox.click();

        assert.true(table.validateSelected(2, 3), 'parent and child deselected');
      });

      test('selecting a child and then a parent dedupes selected rows correctly', async function(assert) {
        this.set('onSelect', selection => {
          assert.strictEqual(selection.length, 1, 'correct number of rows selected');

          this.set('selection', selection);
        });

        await generateTable(this, { rowCount: 3, rowDepth: 2 });

        assert.true(table.validateSelected(), 'rows are not selected');

        await table.selectRow(1);

        assert.true(table.validateSelected(1), 'child selected');

        await table.selectRow(0);

        assert.true(table.validateSelected(0, 1, 2, 3), 'row and its children are selected');
      });

      test('selection continues to work after rows are updated', async function(assert) {
        let columns = [
          {
            name: 'Name',
            valuePath: 'name',
          },
          {
            name: 'Age',
            valuePath: 'age',
          },
        ];

        let rows = [{ name: 'Zoe', age: 34 }, { name: 'Alex', age: 43 }, { name: 'Liz', age: 25 }];

        await generateTable(this, { columns, rows });

        assert.true(
          table.validateSelected(),
          'the row is not marked as selected on initialization'
        );

        await table.selectRow(0);

        assert.true(table.validateSelected(0), 'Zoe is selected after being clicked');

        this.set('rows', rows.slice());

        assert.true(table.validateSelected(0), 'Zoe is still selected rows update');

        await table.selectRow(1);
        assert.true(table.validateSelected(1), 'Liz is selected after being clicked');
      });

      test('Rows are selected when selection is changed externally', async function(assert) {
        let selection = emberA();
        let rows = [{ name: 'Zoe', age: 34 }, { name: 'Alex', age: 43 }, { name: 'Liz', age: 25 }];

        await generateTable(this, { rows, selection });

        assert.true(table.validateSelected(), 'rows are not selected');

        run(() => selection.pushObject(rows[0]));

        assert.true(table.validateSelected(0), 'Zoe is selected after external change');
      });

      test('Rows are selected when selection is changed externally with selectionMatchFunction', async function(assert) {
        let selection = emberA();
        let selectionMatchFunction = function(a, b) {
          if (!a || !b) {
            return false;
          }
          return a.id === b.id;
        };
        let rows = [
          { id: 1, name: 'Zoe', age: 34 },
          { id: 2, name: 'Alex', age: 43 },
          { id: 3, name: 'Liz', age: 25 },
        ];

        await generateTable(this, { rows, selection, selectionMatchFunction });

        assert.true(table.validateSelected(), 'rows are not selected');

        run(() => selection.pushObject({ id: rows[0].id }));

        assert.true(table.validateSelected(0), 'Zoe is selected after external change');
      });

      test('Can abort multi-select so that next multi-select starts from the same row', async function(assert) {
        let successHandler = selection => this.set('selection', selection);
        let abortHandler = (selection, { abort }) => abort();
        let selectHandler;

        this.set('onSelect', (selection, hash) => {
          selectHandler(selection, hash);
        });

        await generateTable(this);

        assert.true(table.validateSelected(), 'rows are not selected');

        selectHandler = successHandler;
        await table.selectRow(0);

        selectHandler = abortHandler;
        await table.selectRowWithShiftClick(2);

        selectHandler = successHandler;
        await table.selectRowWithShiftClick(3);

        // without abort, row 1 would not be selected
        assert.true(table.validateSelected(0, 1, 2, 3), 'correct rows are selected');
      });
    });

    componentModule('single', function() {
      // eslint-disable-next-line qunit/no-identical-names
      test('Can select a row by clicking on it', async function(assert) {
        await generateTable(this, { rowSelectionMode: 'single' });

        assert.true(
          table.validateSelected(),
          'the row is not marked as selected on initialization'
        );

        await table.selectRow(0);

        assert.true(table.validateSelected(0), 'the row is selected after being clicked');
      });

      test('Cannot toggle a row with meta and control', async function(assert) {
        await generateTable(this, { rowSelectionMode: 'single' });

        await table.selectRow(0);

        assert.true(table.validateSelected(0), 'the row is toggled on');

        let row = table.rows.objectAt(0);

        for (let key of ['ctrlKey', 'metaKey']) {
          await row.clickWith({ [key]: true });

          assert.true(table.validateSelected(0), 'the row is still on');
        }
      });

      test('Cannot toggle multiple rows with meta and control', async function(assert) {
        await generateTable(this, { rowSelectionMode: 'single' });

        assert.true(table.validateSelected(), 'no rows are selected');

        let rowOne = table.rows.objectAt(0);
        let rowTwo = table.rows.objectAt(1);

        for (let key of ['ctrlKey', 'metaKey']) {
          await rowOne.clickWith({ [key]: true });

          assert.true(table.validateSelected(0), 'the first row is selected');

          await rowTwo.clickWith({ [key]: true });

          assert.true(table.validateSelected(1), 'the second row is selected');
        }
      });

      test('Cannot select a range with shift', async function(assert) {
        await generateTable(this, { rowSelectionMode: 'single' });

        assert.true(table.validateSelected(), 'no rows are not selected');

        await table.selectRangeFromClick(0, 3);

        assert.true(table.validateSelected(3), 'last row only is selected');
      });

      // eslint-disable-next-line qunit/require-expect
      test('selection is a single row', async function(assert) {
        assert.expect(1);

        this.set('onSelect', selection => {
          assert.false(Array.isArray(selection), 'selection is not an array');
        });

        await generateTable(this, { rowSelectionMode: 'single' });

        await table.selectRow(0);
      });

      test('Row is selected when selection is changed externally', async function(assert) {
        this.set('selection', null);
        let rows = [{ name: 'Zoe', age: 34 }, { name: 'Alex', age: 43 }, { name: 'Liz', age: 25 }];

        await generateTable(this, { rows, rowSelectionMode: 'single' });

        assert.true(table.validateSelected(), 'rows are not selected');

        run(() => this.set('selection', rows[0]));

        assert.true(table.validateSelected(0), 'Zoe is selected after external change');
      });

      test('Row is selected when selection is changed externally with selectionMatchFunction', async function(assert) {
        this.set('selection', null);
        let selectionMatchFunction = function(a, b) {
          if (!a || !b) {
            return false;
          }
          return a.id === b.id;
        };
        let rows = [
          { id: 1, name: 'Zoe', age: 34 },
          { id: 2, name: 'Alex', age: 43 },
          { id: 3, name: 'Liz', age: 25 },
        ];

        await generateTable(this, {
          rows,
          rowSelectionMode: 'single',
          selectionMatchFunction,
        });

        assert.true(table.validateSelected(), 'rows are not selected');

        run(() => this.set('selection', { id: rows[0].id }));

        assert.true(table.validateSelected(0), 'Zoe is selected after external change');
      });
    });

    componentModule('none', function() {
      test('Can disable row selection', async function(assert) {
        await generateTable(this, { rowSelectionMode: 'none' });

        assert.true(table.validateSelected(), 'rows are not selected');

        await table.selectRow(0);

        assert.true(table.validateSelected(), 'rows are not selected');

        await table.body.rows.objectAt(0).checkbox.click();

        assert.true(table.validateSelected(0), 'rows are selected');
      });
    });
  });

  module('checkboxSelectionMode', function() {
    componentModule('multiple', function() {
      test('Can toggle multiple rows with checkbox', async function(assert) {
        await generateTable(this);

        let rowOne = table.rows.objectAt(0);
        let rowTwo = table.rows.objectAt(1);

        assert.true(table.validateSelected(), 'the rows are not selected');

        await rowOne.checkbox.click();
        await rowTwo.checkbox.click();

        assert.true(table.validateSelected(0, 1), 'the rows are selected');

        await rowOne.checkbox.click();
        await rowTwo.checkbox.click();

        assert.true(table.validateSelected(), 'the rows are toggled back off');
      });

      test('Can select range by clicking on checkboxes', async function(assert) {
        await generateTable(this);

        assert.true(table.validateSelected(), 'rows are not selected');

        await table.rows.objectAt(3).checkbox.click();
        await table.rows.objectAt(5).checkbox.clickWith({ shiftKey: true });

        assert.true(table.validateSelected(3, 4, 5), 'rows are selected');
      });

      test('Checkbox state matches selection state (rowSelectionMode multiple)', async function(assert) {
        await generateTable(this);

        let row = table.body.rows.objectAt(0);

        assert.false(row.isSelected, 'the row is not selected');
        assert.false(row.checkbox.isChecked, 'the row checkbox is not checked');

        await row.click();

        assert.true(row.isSelected, 'the row is selected');
        assert.true(row.checkbox.isChecked, 'the row checkbox is checked');
      });

      test('Checkbox state does not match selection state (rowSelectionMode single)', async function(assert) {
        await generateTable(this, { rowSelectionMode: 'single' });

        let row = table.body.rows.objectAt(0);

        assert.false(row.isSelected, 'the row is not selected');
        assert.false(row.checkbox.isChecked, 'the row checkbox is not checked');

        await row.click();

        assert.true(row.isSelected, 'the row is selected');
        assert.false(row.checkbox.isChecked, 'the row checkbox is checked');
      });
    });

    componentModule('single', function() {
      test('Can select a row by clicking on checkbox', async function(assert) {
        await generateTable(this, { checkboxSelectionMode: 'single' });

        assert.true(
          table.validateSelected(),
          'the row is not marked as selected on initialization'
        );

        await table.rows.objectAt(0).checkbox.click();

        assert.true(table.validateSelected(0), 'the row is selected after being clicked');
      });

      test('Cannot toggle multiple rows with meta and control', async function(assert) {
        await generateTable(this, { checkboxSelectionMode: 'single' });

        assert.true(table.validateSelected(), 'no rows are selected');

        await table.rows.objectAt(0).checkbox.click();

        assert.true(table.validateSelected(0), 'the first row is selected');

        await table.rows.objectAt(1).checkbox.click();

        assert.true(table.validateSelected(1), 'the second row is selected');
      });

      test('Cannot select a range with shift', async function(assert) {
        await generateTable(this, { checkboxSelectionMode: 'single' });

        assert.true(table.validateSelected(), 'no rows are not selected');

        await table.rows.objectAt(0).checkbox.click();
        await table.rows.objectAt(3).checkbox.clickWith({ shiftKey: true });

        assert.true(table.validateSelected(3), 'last row only is selected');
      });

      // eslint-disable-next-line qunit/require-expect
      test('selection is an array', async function(assert) {
        assert.expect(1);

        this.set('onSelect', selection => {
          assert.true(Array.isArray(selection), 'selection is an array');
        });

        await generateTable(this, { checkboxSelectionMode: 'single' });

        await table.selectRow(0);
      });
    });

    componentModule('none', function() {
      test('Can disable checkbox selection', async function(assert) {
        await generateTable(this, { checkboxSelectionMode: 'none' });

        assert.true(table.validateSelected(), 'rows are not selected');

        await table.selectRow(0);

        assert.true(table.validateSelected(0), 'rows are selected');
        assert.true(table.body.rows.objectAt(0).checkboxContainer.isHidden, 'checkbox is hidden');
      });
    });
  });

  module('rowToggleMode', function() {
    componentModule('true', function() {
      test('Can select a row by clicking on it', async function(assert) {
        await generateTable(this, { rowToggleMode: true });

        assert.true(
          table.validateSelected(),
          'the row is not marked as selected on initialization'
        );

        await table.selectRow(0);

        assert.true(table.validateSelected(0), 'the row is selected after being clicked');
      });

      test('Can toggle a row', async function(assert) {
        await generateTable(this, { rowToggleMode: true });

        let row = table.body.rows.objectAt(0);

        assert.true(table.validateSelected(), 'the row is not toggled on');

        await row.clickWith();

        assert.true(table.validateSelected(0), 'the row is toggled on');

        await row.clickWith();

        assert.true(table.validateSelected(), 'the row is toggled back off');
      });

      test('Can toggle multiple rows', async function(assert) {
        await generateTable(this, { rowToggleMode: true });

        let rowOne = table.rows.objectAt(0);
        let rowTwo = table.rows.objectAt(1);

        assert.true(table.validateSelected(), 'the rows are not selected');

        await rowOne.clickWith();
        await rowTwo.clickWith();

        assert.true(table.validateSelected(0, 1), 'the rows are selected');

        await rowOne.clickWith();
        await rowTwo.clickWith();

        assert.true(table.validateSelected(), 'the rows are toggled back off');
      });
    });

    componentModule('false', function() {
      test('Cannot toggle a row', async function(assert) {
        await generateTable(this, { rowToggleMode: false });

        await table.selectRow(0);

        assert.true(table.validateSelected(0), 'the row is toggled on');

        let row = table.rows.objectAt(0);

        await row.clickWith();

        assert.true(table.validateSelected(0), 'the row is still on');
      });

      test('Cannot toggle multiple rows', async function(assert) {
        await generateTable(this, { rowToggleMode: false });

        assert.true(table.validateSelected(), 'no rows are selected');

        let rowOne = table.rows.objectAt(0);
        let rowTwo = table.rows.objectAt(1);

        await rowOne.clickWith();

        assert.true(table.validateSelected(0), 'the first row is selected');

        await rowTwo.clickWith();

        assert.true(table.validateSelected(1), 'the second row is selected');
      });

      test('Can toggle a row with meta and control', async function(assert) {
        await generateTable(this, { rowToggleMode: false });

        let row = table.body.rows.objectAt(0);

        for (let key of ['ctrlKey', 'metaKey']) {
          assert.true(table.validateSelected(), 'the row is not toggled on');

          await row.clickWith({ [key]: true });

          assert.true(table.validateSelected(0), 'the row is toggled on');

          await row.clickWith({ [key]: true });

          assert.true(table.validateSelected(), 'the row is toggled back off');
        }
      });

      test('Can toggle multiple rows with meta and control', async function(assert) {
        await generateTable(this, { rowToggleMode: false });

        let rowOne = table.rows.objectAt(0);
        let rowTwo = table.rows.objectAt(1);

        for (let key of ['ctrlKey', 'metaKey']) {
          assert.true(table.validateSelected(), 'the rows are not selected');

          await rowOne.clickWith({ [key]: true });
          await rowTwo.clickWith({ [key]: true });

          assert.true(table.validateSelected(0, 1), 'the rows are selected');

          await rowOne.clickWith({ [key]: true });
          await rowTwo.clickWith({ [key]: true });

          assert.true(table.validateSelected(), 'the rows are toggled back off');
        }
      });
    });
  });

  componentModule('misc', function() {
    // eslint-disable-next-line qunit/require-expect
    test('Can disable selection by not using an action', async function(assert) {
      assert.expect(3);

      this.set('onSelect', () => {
        assert.true(true, 'select called');
      });

      await generateTable(this);

      assert.true(table.validateSelected(), 'rows are not selected');

      await table.selectRow(0);

      assert.true(table.validateSelected(), 'rows are not selected');
    });

    test('selecting all children selects the parent when enabled', async function(assert) {
      await generateTable(this, {
        selectingChildrenSelectsParent: true,
        rowCount: 3,
        rowDepth: 2,
      });

      assert.true(table.validateSelected(), 'rows are not selected');

      await table.selectRangeFromClick(1, 3);

      assert.true(table.validateSelected(0, 1, 2, 3), 'row and its children are selected');
    });

    test('selecting all children does not select the parent', async function(assert) {
      await generateTable(this, {
        selectingChildrenSelectsParent: false,
        rowCount: 3,
        rowDepth: 2,
      });

      assert.true(table.validateSelected(), 'rows are not selected');

      await table.selectRangeFromClick(1, 3);

      assert.true(table.validateSelected(1, 2, 3), 'only children are selected');
    });

    test('rows can be selected using selectionMatchFunction', async function(assert) {
      let selection = emberA();
      let rows = [
        { id: '1', name: 'Zoe', age: 34 },
        { id: '2', name: 'Alex', age: 43 },
        { id: '3', name: 'Liz', age: 25 },
      ];
      let selectionMatchFunction = function(a, b) {
        if (!a || !b) {
          return false;
        }
        return a.id === b.id;
      };

      await generateTable(this, { rows, selection, selectionMatchFunction });

      assert.true(table.validateSelected(), 'rows are not selected');

      run(() => selection.pushObject({ id: rows[1].id }));

      assert.true(table.validateSelected(1), 'Alex is selected after selection change');
    });
  });

  module('occluded selection', function() {
    componentModule('basic', function() {
      test('Issue 726: changing selection state of unrendered rows', async function(assert) {
        // Generate a table with 1 parent row that has 500 child rows
        let rows = generateRows(1, 1, (row, key) => `${row.id}${key}`);
        let childRows = generateRows(500, 1, (row, key) => `child${row.id}${key}`);
        rows[0].children = childRows;
        await generateTable(this, { rows });

        let renderedRowCount = table.rows.length;
        assert.true(renderedRowCount < 500, 'some rows are occluded');

        // Selecting the parent row will cause all child rows (ie the entire table)
        // to also be selected
        await table.selectRow(0);

        assert.true(
          table.validateSelected(...allRenderedRowIndexes(table)),
          `All ${renderedRowCount} rendered rows are selected`
        );

        // Deselect the first child row
        await table.rows.objectAt(1).checkbox.click();

        let expectedIndexes = allRenderedRowIndexes(table).filter(i => ![0, 1].includes(i));
        assert.true(
          table.validateSelected(...expectedIndexes),
          'All rendered rows other than row 0 (parent) and 1 (1st child) are selected'
        );

        // Toggle the parent row's checkbox on (selecting all rows) and then off (deselecting all rows)
        await table.rows.objectAt(0).checkbox.click();
        await table.rows.objectAt(0).checkbox.click();

        assert.true(table.validateSelected(), 'No rows are selected');

        // scroll all the way down
        await scrollTo('[data-test-ember-table-overflow]', 0, 10000);

        assert.true(
          table.validateSelected(),
          'After scrolling to bottom, there are still no rows selected'
        );
      });

      test('Issue 747: Programmatically select an un-rendered row', async function(assert) {
        let rows = generateRows(200, 1);
        await generateTable(this, { rows, bufferSize: 1 });

        let renderedRowCount = table.rows.length;
        assert.true(renderedRowCount < 200, 'some rows are occluded');

        // Select rows at the end that will not all have been rendered yet
        run(() => {
          this.set('selection', rows.slice(-5));
        });

        await table.rows.objectAt(0).checkbox.click();
        assert.true(table.rows.objectAt(0).isSelected, 'first row is selected');
        assert.true(true, 'no error');
      });

      test('Issue 747: Programmatic selection of unrendered children plus manual selection -> selects parent', async function(assert) {
        // 1 Parent row with 200 children
        let children = generateRows(200, 1);
        let rows = generateRows(1, 1);
        rows[0].children = children;

        await generateTable(this, { rows, selectingChildrenSelectsParent: true, bufferSize: 1 });

        let renderedRowCount = table.rows.length;
        assert.true(renderedRowCount < 200, 'some rows are occluded');

        // Select all the children but the first. Most have not yet been rendered.
        run(() => {
          this.set('selection', children.slice(1));
        });

        // Select the last un-selected child
        await table.rows.objectAt(1).checkbox.click();

        assert.true(true, 'no error');
        assert.true(
          table.validateSelected(...allRenderedRowIndexes(table)),
          'All rendered rows are selected'
        );
        assert.true(table.rows.objectAt(0).isSelected, 'Parent row is selected');
      });

      runInDebug(() => {
        test('Issue 747: Programmatic selection that includes a row not part of `rows`', async function(assert) {
          let capturedWarningIds = [];
          registerTestWarnHandler((_message, { id }) => capturedWarningIds.push(id));

          let rows = generateRows(1, 1);
          await generateTable(this, { rows });

          run(() => {
            this.set('selection', [...rows, { fakeRow: true }]);
          });
          assert.true(true, 'after setting bad selection, no error');
          assert.true(table.validateSelected(0), 'First row is selected');

          // De-select selected row
          await table.rows.objectAt(0).checkbox.click();
          assert.true(true, 'after un-checking, no error');
          assert.true(table.validateSelected(), 'No rows remain selected');

          assert.true(
            capturedWarningIds.includes('ember-table.selection-invalid'),
            'ember-table warns about invalid selection'
          );
        });
      });
    });
  });
});
