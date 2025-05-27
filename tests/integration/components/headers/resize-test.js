import { module, test } from 'qunit';
import { waitUntil } from '@ember/test-helpers';

import {
  configureTableGeneration,
  resetTableGenerationConfig,
  generateTable,
  generateColumns,
} from '../../../helpers/generate-table';
import { componentModule, parameterizedComponentModule } from '../../../helpers/module';

import TablePage from 'ember-table/test-support/pages/ember-table';

const table = new TablePage();

const USE_EMBER_ARRAY_PARAMETERS = {
  useEmberArray: {
    values: [true, false],
    hooks: {
      beforeEach(value) {
        configureTableGeneration({ useEmberArray: value });
      },
      afterEach() {
        resetTableGenerationConfig();
      },
    },
  },
};

module('Integration | header | resize', function() {
  parameterizedComponentModule('basic', USE_EMBER_ARRAY_PARAMETERS, function() {
    test('basic', async function(assert) {
      await generateTable(this);

      let originalWidth = table.headers.objectAt(1).logicalWidth;

      await table.headers.objectAt(1).resize(originalWidth + 30);
      assert.strictEqual(
        table.headers.objectAt(1).logicalWidth,
        originalWidth + 30,
        'Can be resized larger'
      );

      await table.headers.objectAt(1).resize(originalWidth - 30);
      assert.strictEqual(
        table.headers.objectAt(1).logicalWidth,
        originalWidth - 30,
        'Can be resized smaller'
      );
    });

    test('respects minWidth', async function(assert) {
      await generateTable(this, { columnOptions: { minWidth: 100, width: 100 } });

      await table.headers.objectAt(1).resize(30);
      assert.strictEqual(table.headers.objectAt(1).logicalWidth, 100, 'Column size is updated');
    });

    test('respects maxWidth', async function(assert) {
      await generateTable(this, { columnOptions: { maxWidth: 100, width: 100 } });

      await table.headers.objectAt(1).resize(200);
      assert.strictEqual(table.headers.objectAt(1).logicalWidth, 100, 'Column size is updated');
    });

    test('fluid mode', async function(assert) {
      await generateTable(this, { resizeMode: 'fluid' });

      let originalWidth = table.headers.objectAt(1).logicalWidth;
      await table.headers.objectAt(1).resize(originalWidth + 30);

      assert.strictEqual(
        table.headers.objectAt(1).logicalWidth,
        originalWidth + 30,
        'Column size is updated'
      );
      assert.strictEqual(
        table.headers.objectAt(2).logicalWidth - originalWidth,
        -30,
        'Next column shrinks in fluid mode'
      );
    });

    test('column resize action is sent up to controller', async function(assert) {
      let calls = [];
      this.set('onResize', (...args) => {
        calls.push(args);
      });

      await generateTable(this, { widthConstraint: 'eq-container' });

      let originalWidth = table.headers.objectAt(1).logicalWidth;
      await table.headers.objectAt(1).resize(originalWidth + 30);
      assert.strictEqual(calls.length, 1, 'resize called once');
      assert.strictEqual(calls[0][0].name, 'B', 'The correct resized column ("B") is passed');
    });

    test('can disable resize per column', async function(assert) {
      let columns = generateColumns(2);

      columns[0].isResizable = false;

      await generateTable(this, { columns });

      let originalWidth = table.headers.objectAt(0).logicalWidth;

      await table.headers.objectAt(0).resize(originalWidth + 30);
      assert.strictEqual(
        table.headers.objectAt(0).logicalWidth,
        originalWidth,
        'disabled column is not resized'
      );

      await table.headers.objectAt(1).resize(originalWidth + 30);
      assert.strictEqual(
        table.headers.objectAt(1).logicalWidth,
        originalWidth + 30,
        'not disabled column can be resized'
      );
    });

    test('resizing sets isResizing property on column meta', async function(assert) {
      await generateTable(this);

      let firstHeader = table.headers.toArray()[0];
      let firstCell = table.getCell(0, 0);

      assert.false(firstHeader.isResizing, 'isResizing is false by default on column header');
      assert.false(firstCell.isResizing, 'isResizing is false by default on column cells');

      let originalWidth = firstHeader.logicalWidth;
      let resume = firstHeader.resize(originalWidth + 100);

      await waitUntil(() => firstHeader.isResizing);
      assert.true(
        firstHeader.isResizing,
        'isResizing property is set on corresponding column header when resizing'
      );
      assert.true(
        firstCell.isResizing,
        'isResizing property is set on corresponding column cells when resizing'
      );

      await resume;

      assert.false(
        firstHeader.isResizing,
        'isResizing is reset to false on column header after resizing'
      );
      assert.false(
        firstCell.isResizing,
        'isResizing is  reset to false on column cells after resizing'
      );
    });
  });

  componentModule('fixed column', function() {
    test('fixed left column', async function(assert) {
      await generateTable(this, { columnOptions: { fixedLeftCount: 1 } });

      let firstHeader = table.headers.objectAt(0);

      let originalWidth = firstHeader.logicalWidth;
      await firstHeader.resize(originalWidth + 30);
      assert.strictEqual(
        firstHeader.logicalWidth,
        originalWidth + 30,
        'Fixed column size is updated'
      );
    });

    test('fixed right column', async function(assert) {
      let columnCount = 20;
      await generateTable(this, { columnCount, columnOptions: { fixedRightCount: 1 } });

      let lastHeader = table.headers.objectAt(columnCount - 1);

      let originalWidth = lastHeader.logicalWidth;
      await lastHeader.resize(130);
      assert.strictEqual(
        lastHeader.logicalWidth,
        originalWidth + 30,
        'Fixed column size is updated'
      );
    });
  });

  componentModule('subheaders', function() {
    test('subheaders can be resized directly', async function(assert) {
      await generateTable(this, { columnOptions: { subcolumnCount: 2 } });

      let firstHeader = table.headers.findOne({ text: 'A' });
      let firstSubheader = table.headers.findOne({ text: 'A A' });

      let originalHeaderWidth = firstHeader.logicalWidth;
      let originalSubheaderWidth = firstSubheader.logicalWidth;

      await firstSubheader.resize(originalSubheaderWidth + 30);

      assert.strictEqual(
        firstSubheader.logicalWidth,
        originalSubheaderWidth + 30,
        'subheader can be resized larger'
      );

      assert.strictEqual(
        firstHeader.logicalWidth,
        originalHeaderWidth + 30,
        'header is resized with subheader'
      );

      await firstSubheader.resize(originalSubheaderWidth - 30);

      assert.strictEqual(
        firstSubheader.logicalWidth,
        originalSubheaderWidth - 30,
        'subheader can be resized smaller'
      );

      assert.strictEqual(
        firstHeader.logicalWidth,
        originalHeaderWidth - 30,
        'header is resized with subheader'
      );
    });

    test('headers with subheaders can be resized', async function(assert) {
      await generateTable(this, { columnOptions: { subcolumnCount: 2 } });

      let firstHeader = table.headers.findOne({ text: 'A' });
      let firstSubheader = table.headers.findOne({ text: 'A A' });
      let secondSubheader = table.headers.findOne({ text: 'A B' });

      let originalHeaderWidth = firstHeader.logicalWidth;

      await firstHeader.resize(originalHeaderWidth + 30);

      assert.strictEqual(
        firstHeader.logicalWidth,
        originalHeaderWidth + 30,
        'header can be resized larger'
      );

      assert.strictEqual(
        firstSubheader.logicalWidth + secondSubheader.logicalWidth,
        firstHeader.logicalWidth,
        'resize is distributed among subheaders'
      );

      await firstHeader.resize(originalHeaderWidth - 30);

      assert.strictEqual(
        firstHeader.logicalWidth,
        originalHeaderWidth - 30,
        'subheader can be resized larger'
      );

      assert.strictEqual(
        firstSubheader.logicalWidth + secondSubheader.logicalWidth,
        firstHeader.logicalWidth,
        'resize is distributed among subheaders'
      );
    });

    test('resizing header with subheaders respects minWidth', async function(assert) {
      await generateTable(this, {
        columnOptions: { subcolumnCount: 2, minWidth: 100, width: 100 },
      });

      let firstHeader = table.headers.findOne({ text: 'A' });
      let originalHeaderWidth = firstHeader.logicalWidth;

      await firstHeader.resize(originalHeaderWidth - 100);

      assert.strictEqual(
        firstHeader.logicalWidth,
        originalHeaderWidth,
        'minWidth constraint is respected'
      );
    });

    test('resizing headers with subheaders respects maxWidth', async function(assert) {
      await generateTable(this, {
        columnOptions: { subcolumnCount: 2, maxWidth: 100, width: 100 },
      });

      let firstHeader = table.headers.findOne({ text: 'A' });
      let originalHeaderWidth = firstHeader.logicalWidth;

      await firstHeader.resize(originalHeaderWidth + 100);

      assert.strictEqual(
        firstHeader.logicalWidth,
        originalHeaderWidth,
        'maxWidth constraint is respected'
      );
    });
  });
});
