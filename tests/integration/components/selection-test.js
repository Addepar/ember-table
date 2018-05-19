import { module, test } from 'ember-qunit';
import { componentModule } from '../../helpers/module';

import TablePage from 'ember-table/test-support/pages/ember-table';

import { generateTable } from '../../helpers/generate-table';

let table = TablePage.extend({
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
}).create();

module('Integration | selection', () => {
  for (let scenario of ['grouping', 'multiple']) {
    let selectMode = scenario;

    componentModule(scenario, function() {
      test('Can select a row by clicking on it', async function(assert) {
        await generateTable(this, { selectMode });

        assert.ok(table.validateSelected(), 'the row is not marked as selected on initialization');

        await table.selectRow(0);

        assert.ok(table.validateSelected(0), 'the row is selected after being clicked');
      });

      test('Can toggle a row with meta and control', async function(assert) {
        await generateTable(this, { selectMode });

        let row = table.body.rows.eq(0);

        for (let key of ['ctrlKey', 'metaKey']) {
          assert.ok(table.validateSelected(), 'the row is not toggled on');

          await row.clickWith({ [key]: true });

          assert.ok(table.validateSelected(0), 'the row is toggled on');

          await row.clickWith({ [key]: true });

          assert.ok(table.validateSelected(), 'the row is toggled back off');
        }
      });

      test('Can toggle a row with checkbox', async function(assert) {
        await generateTable(this, { selectMode });

        let row = table.body.rows.eq(0);

        assert.ok(table.validateSelected(), 'the row is not toggled on');

        await row.checkbox.click();

        assert.ok(table.validateSelected(0), 'the row is toggled on');

        await row.checkbox.click();

        assert.ok(table.validateSelected(), 'the row is toggled back off');
      });

      test('Checkbox state matches selection state', async function(assert) {
        await generateTable(this, { selectMode });

        let row = table.body.rows.eq(0);

        assert.ok(!row.isSelected, 'the row is not selected');
        assert.ok(!row.checkbox.isChecked, 'the row checkbox is not checked');

        await row.click();

        assert.ok(row.isSelected, 'the row is selected');
        assert.ok(row.checkbox.isChecked, 'the row checkbox is checked');
      });

      test('Can toggle multiple rows with meta and control', async function(assert) {
        await generateTable(this, { selectMode });

        let rowOne = table.rows.eq(0);
        let rowTwo = table.rows.eq(1);

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

      test('Can toggle multiple rows with checkbox', async function(assert) {
        await generateTable(this, { selectMode });

        let rowOne = table.rows.eq(0);
        let rowTwo = table.rows.eq(1);

        assert.ok(table.validateSelected(), 'the rows are not selected');

        await rowOne.checkbox.click();
        await rowTwo.checkbox.click();

        assert.ok(table.validateSelected(0, 1), 'the rows are selected');

        await rowOne.checkbox.click();
        await rowTwo.checkbox.click();

        assert.ok(table.validateSelected(), 'the rows are toggled back off');
      });

      test('Can toggle multiple rows with checkbox and keys', async function(assert) {
        await generateTable(this, { selectMode });

        let rowOne = table.rows.eq(0);
        let rowTwo = table.rows.eq(1);

        assert.ok(table.validateSelected(), 'the rows are not selected');

        await rowOne.checkbox.click();
        await rowTwo.clickWith({ metaKey: true });

        assert.ok(table.validateSelected(0, 1), 'the rows are selected');

        await rowOne.clickWith({ metaKey: true });
        await rowTwo.checkbox.click();

        assert.ok(table.validateSelected(), 'the rows are toggled back off');
      });

      test('Can select a range with shift', async function(assert) {
        await generateTable(this, { selectMode });

        assert.ok(table.validateSelected(), 'rows are not selected');

        await table.selectRange(0, 2);

        assert.ok(table.validateSelected(0, 1, 2), 'rows are selected');
      });

      test('Selecting a range selects based on last selection', async function(assert) {
        await generateTable(this, { selectMode });

        assert.ok(table.validateSelected(), 'rows are not selected');

        await table.selectRange(3, 5);

        assert.ok(table.validateSelected(3, 4, 5), 'rows are selected');
      });

      test('Selecting a range does not deselect previously selected rows', async function(assert) {
        await generateTable(this, { selectMode });

        assert.ok(table.validateSelected(), 'rows are not selected');

        await table.selectRow(4);

        assert.ok(table.validateSelected(4), 'middle row selected');

        await table.selectRange(3, 5);

        assert.ok(table.validateSelected(3, 4, 5), 'all rows are selected');
      });

      test('selecting a parent selects its children', async function(assert) {
        await generateTable(this, { selectMode, rowCount: 3, rowDepth: 2 });

        assert.ok(table.validateSelected(), 'rows are not selected');

        await table.selectRow(0);

        assert.ok(table.validateSelected(0, 1, 2, 3), 'row and its children are selected');
      });

      test('deselecting a child deselects its parents', async function(assert) {
        await generateTable(this, { selectMode, rowCount: 3, rowDepth: 2 });

        assert.ok(table.validateSelected(), 'rows are not selected');

        await table.selectRow(0);

        assert.ok(table.validateSelected(0, 1, 2, 3), 'row and its children are selected');

        await table.rows.eq(1).checkbox.click();

        assert.ok(table.validateSelected(2, 3), 'parent and child deselected');
      });

      test('selecting a child and then a parent dedupes selected rows correctly', async function(assert) {
        this.on('onSelect', selectedRows => {
          assert.equal(selectedRows.length, 1, 'correct number of rows selected');

          this.set('selectedRows', selectedRows);
        });

        await generateTable(this, { selectMode, rowCount: 3, rowDepth: 2 });

        assert.ok(table.validateSelected(), 'rows are not selected');

        await table.selectRow(1);

        assert.ok(table.validateSelected(1), 'child selected');

        await table.selectRow(0);

        assert.ok(table.validateSelected(0, 1, 2, 3), 'row and its children are selected');
      });

      if (scenario === 'grouping') {
        test('selecting all children selects the parent', async function(assert) {
          await generateTable(this, { selectMode, rowCount: 3, rowDepth: 2 });

          assert.ok(table.validateSelected(), 'rows are not selected');

          await table.selectRange(1, 3);

          assert.ok(table.validateSelected(0, 1, 2, 3), 'row and its children are selected');
        });
      } else {
        test('selecting all children does not select the parent', async function(assert) {
          await generateTable(this, { selectMode, rowCount: 3, rowDepth: 2 });

          assert.ok(table.validateSelected(), 'rows are not selected');

          await table.selectRange(1, 3);

          assert.ok(table.validateSelected(1, 2, 3), 'only children are selected');
        });
      }
    });
  }

  componentModule('single', function() {
    test('Can select a row by clicking on it', async function(assert) {
      await generateTable(this, { selectMode: 'single' });

      assert.ok(table.validateSelected(), 'the row is not marked as selected on initialization');

      await table.selectRow(0);

      assert.ok(table.validateSelected(0), 'the row is selected after being clicked');
    });

    test('Cannot toggle a row with meta and control', async function(assert) {
      await generateTable(this, { selectMode: 'single' });

      await table.selectRow(0);

      assert.ok(table.validateSelected(0), 'the row is toggled on');

      let row = table.rows.eq(0);

      for (let key of ['ctrlKey', 'metaKey']) {
        await row.clickWith({ [key]: true });

        assert.ok(table.validateSelected(0), 'the row is still on');
      }
    });

    test('Cannot toggle multiple rows with meta and control', async function(assert) {
      await generateTable(this, { selectMode: 'single' });

      assert.ok(table.validateSelected(), 'no rows are selected');

      let rowOne = table.rows.eq(0);
      let rowTwo = table.rows.eq(1);

      for (let key of ['ctrlKey', 'metaKey']) {
        await rowOne.clickWith({ [key]: true });

        assert.ok(table.validateSelected(0), 'the first row is selected');

        await rowTwo.clickWith({ [key]: true });

        assert.ok(table.validateSelected(1), 'the second row is selected');
      }
    });

    test('Cannot select a range with shift', async function(assert) {
      await generateTable(this, { selectMode: 'single' });

      assert.ok(table.validateSelected(), 'no rows are not selected');

      await table.selectRange(0, 3);

      assert.ok(table.validateSelected(3), 'last row only is selected');
    });

    test('selecting a parent only selects the parent', async function(assert) {
      await generateTable(this, { selectMode: 'single', rowCount: 3, rowDepth: 2 });

      assert.ok(table.validateSelected(), 'rows are not selected');

      await table.selectRow(0);

      assert.ok(table.validateSelected(0), 'row and its children are selected');
    });
  });

  componentModule('none', function() {
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
  });
});
