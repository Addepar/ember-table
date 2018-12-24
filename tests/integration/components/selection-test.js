import { module, test } from 'ember-qunit';
import { componentModule } from '../../helpers/module';

import TablePage from 'ember-table/test-support/pages/ember-table';

import { generateTable } from '../../helpers/generate-table';
import { A as emberA } from '@ember/array';
import { run } from '@ember/runloop';

let table = new TablePage({
  validateSelected(...selectedIndexes) {
    let valid = true;

    this.rows.forEach((row, index) => {
      if (selectedIndexes.includes(index)) {
        valid = valid && row.isSelected;
      } else {
        valid = valid && !row.isSelected;
      }
    });

    return valid;
  },
});

module('Integration | selection', () => {
  module('rowSelectionMode', function() {
    componentModule('multiple', function() {
      test('Can select a row by clicking on it', async function(assert) {
        await generateTable(this);

        assert.ok(table.validateSelected(), 'the row is not marked as selected on initialization');

        await table.selectRow(0);

        assert.ok(table.validateSelected(0), 'the row is selected after being clicked');
      });

      test('Can toggle a row with meta and control', async function(assert) {
        await generateTable(this);

        let row = table.body.rows.objectAt(0);

        for (let key of ['ctrlKey', 'metaKey']) {
          assert.ok(table.validateSelected(), 'the row is not toggled on');

          await row.clickWith({ [key]: true });

          assert.ok(table.validateSelected(0), 'the row is toggled on');

          await row.clickWith({ [key]: true });

          assert.ok(table.validateSelected(), 'the row is toggled back off');
        }
      });

      test('Can toggle multiple rows with meta and control', async function(assert) {
        await generateTable(this);

        let rowOne = table.rows.objectAt(0);
        let rowTwo = table.rows.objectAt(1);

        for (let key of ['ctrlKey', 'metaKey']) {
          assert.ok(table.validateSelected(), 'the rows are not selected');

          await rowOne.clickWith({ [key]: true });
          await rowTwo.clickWith({ [key]: true });

          assert.ok(table.validateSelected(0, 1), 'the rows are selected');

          await rowOne.clickWith({ [key]: true });
          await rowTwo.clickWith({ [key]: true });

          assert.ok(table.validateSelected(), 'the rows are toggled back off');
        }
      });

      test('Can toggle multiple rows with checkbox and keys', async function(assert) {
        await generateTable(this);

        let rowOne = table.rows.objectAt(0);
        let rowTwo = table.rows.objectAt(1);

        assert.ok(table.validateSelected(), 'the rows are not selected');

        await rowOne.checkbox.click();
        await rowTwo.clickWith({ metaKey: true });

        assert.ok(table.validateSelected(0, 1), 'the rows are selected');

        await rowOne.clickWith({ metaKey: true });
        await rowTwo.checkbox.click();

        assert.ok(table.validateSelected(), 'the rows are toggled back off');
      });

      test('Can select a range with shift', async function(assert) {
        await generateTable(this);

        assert.ok(table.validateSelected(), 'rows are not selected');

        await table.selectRange(0, 2);

        assert.ok(table.validateSelected(0, 1, 2), 'rows are selected');
      });

      test('Selecting a range selects based on last selection', async function(assert) {
        await generateTable(this);

        assert.ok(table.validateSelected(), 'rows are not selected');

        await table.selectRange(3, 5);

        assert.ok(table.validateSelected(3, 4, 5), 'rows are selected');
      });

      test('Selecting a range does not deselect previously selected rows', async function(assert) {
        await generateTable(this);

        assert.ok(table.validateSelected(), 'rows are not selected');

        await table.selectRow(4);

        assert.ok(table.validateSelected(4), 'middle row selected');

        await table.selectRange(3, 5);

        assert.ok(table.validateSelected(3, 4, 5), 'all rows are selected');
      });

      test('selecting a parent selects its children', async function(assert) {
        await generateTable(this, { rowCount: 3, rowDepth: 2 });

        assert.ok(table.validateSelected(), 'rows are not selected');

        await table.selectRow(0);

        assert.ok(table.validateSelected(0, 1, 2, 3), 'row and its children are selected');
      });

      test('deselecting a child deselects its parents', async function(assert) {
        await generateTable(this, { rowCount: 3, rowDepth: 2 });

        assert.ok(table.validateSelected(), 'rows are not selected');

        await table.selectRow(0);

        assert.ok(table.validateSelected(0, 1, 2, 3), 'row and its children are selected');

        await table.rows.objectAt(1).checkbox.click();

        assert.ok(table.validateSelected(2, 3), 'parent and child deselected');
      });

      test('selecting a child and then a parent dedupes selected rows correctly', async function(assert) {
        this.on('onSelect', selection => {
          assert.equal(selection.length, 1, 'correct number of rows selected');

          this.set('selection', selection);
        });

        await generateTable(this, { rowCount: 3, rowDepth: 2 });

        assert.ok(table.validateSelected(), 'rows are not selected');

        await table.selectRow(1);

        assert.ok(table.validateSelected(1), 'child selected');

        await table.selectRow(0);

        assert.ok(table.validateSelected(0, 1, 2, 3), 'row and its children are selected');
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

        assert.ok(table.validateSelected(), 'the row is not marked as selected on initialization');

        await table.selectRow(0);

        assert.ok(table.validateSelected(0), 'Zoe is selected after being clicked');

        this.set('rows', rows.slice());

        assert.ok(table.validateSelected(0), 'Zoe is still selected rows update');

        await table.selectRow(1);
        assert.ok(table.validateSelected(1), 'Liz is selected after being clicked');
      });

      test('Rows are selected when selection is changed externally', async function(assert) {
        let selection = emberA();
        let rows = [{ name: 'Zoe', age: 34 }, { name: 'Alex', age: 43 }, { name: 'Liz', age: 25 }];

        await generateTable(this, { rows, selection });

        assert.ok(table.validateSelected(), 'rows are not selected');

        run(() => selection.pushObject(rows[0]));

        assert.ok(table.validateSelected(0), 'Zoe is selected after external change');
      });
    });

    componentModule('single', function() {
      test('Can select a row by clicking on it', async function(assert) {
        await generateTable(this, { rowSelectionMode: 'single' });

        assert.ok(table.validateSelected(), 'the row is not marked as selected on initialization');

        await table.selectRow(0);

        assert.ok(table.validateSelected(0), 'the row is selected after being clicked');
      });

      test('Cannot toggle a row with meta and control', async function(assert) {
        await generateTable(this, { rowSelectionMode: 'single' });

        await table.selectRow(0);

        assert.ok(table.validateSelected(0), 'the row is toggled on');

        let row = table.rows.objectAt(0);

        for (let key of ['ctrlKey', 'metaKey']) {
          await row.clickWith({ [key]: true });

          assert.ok(table.validateSelected(0), 'the row is still on');
        }
      });

      test('Cannot toggle multiple rows with meta and control', async function(assert) {
        await generateTable(this, { rowSelectionMode: 'single' });

        assert.ok(table.validateSelected(), 'no rows are selected');

        let rowOne = table.rows.objectAt(0);
        let rowTwo = table.rows.objectAt(1);

        for (let key of ['ctrlKey', 'metaKey']) {
          await rowOne.clickWith({ [key]: true });

          assert.ok(table.validateSelected(0), 'the first row is selected');

          await rowTwo.clickWith({ [key]: true });

          assert.ok(table.validateSelected(1), 'the second row is selected');
        }
      });

      test('Cannot select a range with shift', async function(assert) {
        await generateTable(this, { rowSelectionMode: 'single' });

        assert.ok(table.validateSelected(), 'no rows are not selected');

        await table.selectRange(0, 3);

        assert.ok(table.validateSelected(3), 'last row only is selected');
      });

      test('selection is a single row', async function(assert) {
        assert.expect(1);

        this.on('onSelect', selection => {
          assert.ok(!Array.isArray(selection), 'selection is not an array');
        });

        await generateTable(this, { rowSelectionMode: 'single' });

        await table.selectRow(0);
      });
    });

    componentModule('none', function() {
      test('Can disable row selection', async function(assert) {
        await generateTable(this, { rowSelectionMode: 'none' });

        assert.ok(table.validateSelected(), 'rows are not selected');

        await table.selectRow(0);

        assert.ok(table.validateSelected(), 'rows are not selected');

        await table.body.rows.objectAt(0).checkbox.click();

        assert.ok(table.validateSelected(0), 'rows are selected');
      });
    });
  });

  module('checkboxSelectionMode', function() {
    componentModule('multiple', function() {
      test('Can toggle multiple rows with checkbox', async function(assert) {
        await generateTable(this);

        let rowOne = table.rows.objectAt(0);
        let rowTwo = table.rows.objectAt(1);

        assert.ok(table.validateSelected(), 'the rows are not selected');

        await rowOne.checkbox.click();
        await rowTwo.checkbox.click();

        assert.ok(table.validateSelected(0, 1), 'the rows are selected');

        await rowOne.checkbox.click();
        await rowTwo.checkbox.click();

        assert.ok(table.validateSelected(), 'the rows are toggled back off');
      });

      test('Can select range by clicking on checkboxes', async function(assert) {
        await generateTable(this);

        assert.ok(table.validateSelected(), 'rows are not selected');

        await table.rows.objectAt(3).checkbox.click();
        await table.rows.objectAt(5).checkbox.clickWith({ shiftKey: true });

        assert.ok(table.validateSelected(3, 4, 5), 'rows are selected');
      });

      test('Checkbox state matches selection state (rowSelectionMode multiple)', async function(assert) {
        await generateTable(this);

        let row = table.body.rows.objectAt(0);

        assert.ok(!row.isSelected, 'the row is not selected');
        assert.ok(!row.checkbox.isChecked, 'the row checkbox is not checked');

        await row.click();

        assert.ok(row.isSelected, 'the row is selected');
        assert.ok(row.checkbox.isChecked, 'the row checkbox is checked');
      });

      test('Checkbox state does not match selection state (rowSelectionMode single)', async function(assert) {
        await generateTable(this, { rowSelectionMode: 'single' });

        let row = table.body.rows.objectAt(0);

        assert.ok(!row.isSelected, 'the row is not selected');
        assert.ok(!row.checkbox.isChecked, 'the row checkbox is not checked');

        await row.click();

        assert.ok(row.isSelected, 'the row is selected');
        assert.ok(!row.checkbox.isChecked, 'the row checkbox is checked');
      });
    });

    componentModule('single', function() {
      test('Can select a row by clicking on checkbox', async function(assert) {
        await generateTable(this, { checkboxSelectionMode: 'single' });

        assert.ok(table.validateSelected(), 'the row is not marked as selected on initialization');

        await table.rows.objectAt(0).checkbox.click();

        assert.ok(table.validateSelected(0), 'the row is selected after being clicked');
      });

      test('Cannot toggle multiple rows with meta and control', async function(assert) {
        await generateTable(this, { checkboxSelectionMode: 'single' });

        assert.ok(table.validateSelected(), 'no rows are selected');

        await table.rows.objectAt(0).checkbox.click();

        assert.ok(table.validateSelected(0), 'the first row is selected');

        await table.rows.objectAt(1).checkbox.click();

        assert.ok(table.validateSelected(1), 'the second row is selected');
      });

      test('Cannot select a range with shift', async function(assert) {
        await generateTable(this, { checkboxSelectionMode: 'single' });

        assert.ok(table.validateSelected(), 'no rows are not selected');

        await table.rows.objectAt(0).checkbox.click();
        await table.rows.objectAt(3).checkbox.clickWith({ shiftKey: true });

        assert.ok(table.validateSelected(3), 'last row only is selected');
      });

      test('selection is an array', async function(assert) {
        assert.expect(1);

        this.on('onSelect', selection => {
          assert.ok(Array.isArray(selection), 'selection is not an array');
        });

        await generateTable(this, { checkboxSelectionMode: 'single' });

        await table.selectRow(0);
      });
    });

    componentModule('none', function() {
      test('Can disable checkbox selection', async function(assert) {
        await generateTable(this, { checkboxSelectionMode: 'none' });

        assert.ok(table.validateSelected(), 'rows are not selected');

        await table.selectRow(0);

        assert.ok(table.validateSelected(0), 'rows are selected');
        assert.ok(table.body.rows.objectAt(0).checkboxContainer.isHidden, 'checkbox is hidden');
      });
    });
  });

  componentModule('misc', function() {
    test('Can disable selection by not using an action', async function(assert) {
      assert.expect(3);

      this.on('onSelect', () => {
        assert.ok(true, 'select called');
      });

      await generateTable(this);

      assert.ok(table.validateSelected(), 'rows are not selected');

      await table.selectRow(0);

      assert.ok(table.validateSelected(), 'rows are not selected');
    });

    test('selecting all children selects the parent when enabled', async function(assert) {
      await generateTable(this, {
        selectingChildrenSelectsParent: true,
        rowCount: 3,
        rowDepth: 2,
      });

      assert.ok(table.validateSelected(), 'rows are not selected');

      await table.selectRange(1, 3);

      assert.ok(table.validateSelected(0, 1, 2, 3), 'row and its children are selected');
    });

    test('selecting all children does not select the parent', async function(assert) {
      await generateTable(this, {
        selectingChildrenSelectsParent: false,
        rowCount: 3,
        rowDepth: 2,
      });

      assert.ok(table.validateSelected(), 'rows are not selected');

      await table.selectRange(1, 3);

      assert.ok(table.validateSelected(1, 2, 3), 'only children are selected');
    });
  });
});
