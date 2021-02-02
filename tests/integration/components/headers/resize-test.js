import { module, test } from 'ember-qunit';

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

      let originalWidth = table.headers.objectAt(1).width;

      await table.headers.objectAt(1).resize(originalWidth + 30);
      assert.equal(table.headers.objectAt(1).width, originalWidth + 30, 'Can be resized larger');

      await table.headers.objectAt(1).resize(originalWidth - 30);
      assert.equal(table.headers.objectAt(1).width, originalWidth - 30, 'Can be resized smaller');
    });

    test('respects minWidth', async function(assert) {
      await generateTable(this, { columnOptions: { minWidth: 100, width: 100 } });

      await table.headers.objectAt(1).resize(30);
      assert.equal(table.headers.objectAt(1).width, 100, 'Column size is updated');
    });

    test('respects maxWidth', async function(assert) {
      await generateTable(this, { columnOptions: { maxWidth: 100, width: 100 } });

      await table.headers.objectAt(1).resize(200);
      assert.equal(table.headers.objectAt(1).width, 100, 'Column size is updated');
    });

    test('fluid mode', async function(assert) {
      await generateTable(this, { resizeMode: 'fluid' });

      let originalWidth = table.headers.objectAt(1).width;
      await table.headers.objectAt(1).resize(originalWidth + 30);

      assert.equal(table.headers.objectAt(1).width, originalWidth + 30, 'Column size is updated');
      assert.equal(
        table.headers.objectAt(2).width - originalWidth,
        -30,
        'Next column shrinks in fluid mode'
      );
    });

    test('column resize action is sent up to controller', async function(assert) {
      this.set('onResize', function(column) {
        assert.equal(column.name, 'B', 'action is sent to controller after resizing');
      });

      await generateTable(this, { widthConstraint: 'eq-container' });

      let originalWidth = table.headers.objectAt(1).width;
      await table.headers.objectAt(1).resize(originalWidth + 20);
    });

    test('can disable resize per column', async function(assert) {
      let columns = generateColumns(2);

      columns[0].isResizable = false;

      await generateTable(this, { columns });

      let originalWidth = table.headers.objectAt(0).width;

      await table.headers.objectAt(0).resize(originalWidth + 30);
      assert.equal(
        table.headers.objectAt(0).width,
        originalWidth,
        'disabled column is not resized'
      );

      await table.headers.objectAt(1).resize(originalWidth + 30);
      assert.equal(
        table.headers.objectAt(1).width,
        originalWidth + 30,
        'not disabled column can be resized'
      );
    });
  });

  componentModule('fixed column', function() {
    test('fixed left column', async function(assert) {
      await generateTable(this, { columnOptions: { fixedLeftCount: 1 } });

      let firstHeader = table.headers.objectAt(0);

      let originalWidth = firstHeader.width;
      await firstHeader.resize(originalWidth + 30);
      assert.equal(firstHeader.width, originalWidth + 30, 'Fixed column size is updated');
    });

    test('fixed right column', async function(assert) {
      let columnCount = 20;
      await generateTable(this, { columnCount, columnOptions: { fixedRightCount: 1 } });

      let lastHeader = table.headers.objectAt(columnCount - 1);

      let originalWidth = lastHeader.width;
      await lastHeader.resize(130);
      assert.equal(lastHeader.width, originalWidth + 30, 'Fixed column size is updated');
    });
  });

  componentModule('subheaders', function() {
    test('subheaders can be resized directly', async function(assert) {
      await generateTable(this, { columnOptions: { subcolumnCount: 2 } });

      let firstHeader = table.headers.findOne({ text: 'A' });
      let firstSubheader = table.headers.findOne({ text: 'A A' });

      let originalHeaderWidth = firstHeader.width;
      let originalSubheaderWidth = firstSubheader.width;

      await firstSubheader.resize(originalSubheaderWidth + 30);

      assert.equal(
        firstSubheader.width,
        originalSubheaderWidth + 30,
        'subheader can be resized larger'
      );

      assert.equal(firstHeader.width, originalHeaderWidth + 30, 'header is resized with subheader');

      await firstSubheader.resize(originalSubheaderWidth - 30);

      assert.equal(
        firstSubheader.width,
        originalSubheaderWidth - 30,
        'subheader can be resized smaller'
      );

      assert.equal(firstHeader.width, originalHeaderWidth - 30, 'header is resized with subheader');
    });

    test('headers with subheaders can be resized', async function(assert) {
      await generateTable(this, { columnOptions: { subcolumnCount: 2 } });

      let firstHeader = table.headers.findOne({ text: 'A' });
      let firstSubheader = table.headers.findOne({ text: 'A A' });
      let secondSubheader = table.headers.findOne({ text: 'A B' });

      let originalHeaderWidth = firstHeader.width;

      await firstHeader.resize(originalHeaderWidth + 30);

      assert.equal(firstHeader.width, originalHeaderWidth + 30, 'header can be resized larger');

      assert.equal(
        firstSubheader.width + secondSubheader.width,
        firstHeader.width,
        'resize is distributed among subheaders'
      );

      await firstHeader.resize(originalHeaderWidth - 30);

      assert.equal(firstHeader.width, originalHeaderWidth - 30, 'subheader can be resized larger');

      assert.equal(
        firstSubheader.width + secondSubheader.width,
        firstHeader.width,
        'resize is distributed among subheaders'
      );
    });

    test('resizing header with subheaders respects minWidth', async function(assert) {
      await generateTable(this, {
        columnOptions: { subcolumnCount: 2, minWidth: 100, width: 100 },
      });

      let firstHeader = table.headers.findOne({ text: 'A' });
      let originalHeaderWidth = firstHeader.width;

      await firstHeader.resize(originalHeaderWidth - 100);

      assert.equal(firstHeader.width, originalHeaderWidth, 'minWidth constraint is respected');
    });

    test('resizing headers with subheaders respects maxWidth', async function(assert) {
      await generateTable(this, {
        columnOptions: { subcolumnCount: 2, maxWidth: 100, width: 100 },
      });

      let firstHeader = table.headers.findOne({ text: 'A' });
      let originalHeaderWidth = firstHeader.width;

      await firstHeader.resize(originalHeaderWidth + 100);

      assert.equal(firstHeader.width, originalHeaderWidth, 'maxWidth constraint is respected');
    });
  });
});
