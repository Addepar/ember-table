import { module, test } from 'qunit';

import { generateTable } from '../../../helpers/generate-table';
import { componentModule } from '../../../helpers/module';
import { toBase26 } from 'dummy/utils/base-26';

import TablePage from 'ember-table/test-support/pages/ember-table';

const table = new TablePage();

module('Integration | header | main', function() {
  componentModule('initial render', function() {
    test('min column widths respected', async function(assert) {
      await generateTable(this, {
        columnCount: 1,
        columnOptions: {
          width: 100,
          minWidth: 200,
        },
      });

      let header = table.headers.objectAt(0);
      assert.strictEqual(header.logicalWidth, 200, 'column has min width');
    });

    test('max column widths respected', async function(assert) {
      await generateTable(this, {
        columnCount: 1,
        columnOptions: {
          width: 200,
          maxWidth: 100,
        },
      });

      let header = table.headers.objectAt(0);
      assert.strictEqual(header.logicalWidth, 100, 'column has max width');
    });
  });

  componentModule('widthConstraint', function() {
    test('eq-container when smaller', async function(assert) {
      await generateTable(this, {
        widthConstraint: 'eq-container',
        columnCount: 2,
        columnOptions: {
          width: 50,
        },
      });

      let containerWidth = table.containerWidth;
      let tableWidth = table.logicalWidth;
      let slackHeader = table.slackHeaders.objectAt(0);

      assert.true(
        Math.abs(tableWidth - containerWidth) <= 5,
        'First column takes extra space in first column resize mode.'
      );

      assert.false(slackHeader.isPresent, 'slack column does not exist');
    });

    test('eq-container when larger', async function(assert) {
      await generateTable(this, {
        widthConstraint: 'eq-container',
        columnCount: 2,
        columnOptions: {
          width: 2000,
        },
      });

      let containerWidth = table.logicalContainerWidth;
      let tableWidth = table.logicalWidth;
      let slackHeader = table.slackHeaders.objectAt(0);

      assert.true(
        Math.abs(tableWidth - containerWidth) <= 5,
        'First column takes extra space in first column resize mode.'
      );

      assert.false(slackHeader.isPresent, 'slack column does not exist');
    });

    test('eq-container with containerWidthAdjustment', async function(assert) {
      let adjustmentValue = -10;
      await generateTable(this, {
        widthConstraint: 'eq-container',
        containerWidthAdjustment: adjustmentValue,
        columnCount: 2,
      });

      let containerWidth = table.logicalContainerWidth;
      let tableWidth = table.logicalWidth;
      let slackHeader = table.slackHeaders.objectAt(0);

      assert.strictEqual(
        tableWidth - containerWidth,
        adjustmentValue,
        'Table width is adjusted from container width by the specified amount.'
      );

      assert.false(slackHeader.isPresent, 'slack column does not exist');
    });

    test('gte-container', async function(assert) {
      await generateTable(this, {
        widthConstraint: 'gte-container',
        columnCount: 2,
        columnOptions: {
          width: 50,
        },
      });

      let containerWidth = table.logicalContainerWidth;
      let tableWidth = table.logicalWidth;
      let slackHeader = table.slackHeaders.objectAt(0);

      assert.true(
        Math.abs(tableWidth - containerWidth) <= 5,
        'First column takes extra space in first column resize mode.'
      );

      assert.false(slackHeader.isPresent, 'slack column does not exist');
    });

    test('lte-container', async function(assert) {
      await generateTable(this, {
        widthConstraint: 'lte-container',
        columnCount: 2,
        columnOptions: {
          width: 2000,
        },
      });

      let containerWidth = table.logicalContainerWidth;
      let tableWidth = table.logicalWidth;
      let slackHeader = table.slackHeaders.objectAt(0);

      assert.true(
        Math.abs(tableWidth - containerWidth) <= 5,
        'First column takes extra space in first column resize mode.'
      );

      assert.false(slackHeader.isPresent, 'slack column does not exist');
    });

    test('eq-container-slack', async function(assert) {
      await generateTable(this, {
        widthConstraint: 'eq-container-slack',
        columnCount: 1,
        columnOptions: {
          width: 100,
        },
      });

      let containerWidth = table.logicalContainerWidth;
      let header = table.headers.objectAt(0);
      let slackHeader = table.slackHeaders.objectAt(0);

      assert.strictEqual(table.logicalWidth, containerWidth, 'table fits container exactly');
      assert.true(slackHeader.isRendered, 'slack column is rendered');
      assert.strictEqual(
        slackHeader.logicalWidth,
        containerWidth - 100,
        'slack column fills whitespace'
      );

      // expand column a little bit
      await header.resize(200);
      assert.strictEqual(table.logicalWidth, containerWidth, 'table fits container exactly');
      assert.true(slackHeader.isRendered, 'slack column is rendered');
      assert.strictEqual(
        slackHeader.logicalWidth,
        containerWidth - 200,
        'slack column fills whitespace'
      );

      // expand column to fill container
      await header.resize(containerWidth);
      assert.strictEqual(table.logicalWidth, containerWidth, 'table fits container exactly');
      assert.false(slackHeader.isRendered, 'slack column is not rendered');

      // try to expand column beyond container
      await header.resize(containerWidth + 100);
      assert.strictEqual(table.logicalWidth, containerWidth, 'table fits container exactly');
      assert.false(slackHeader.isRendered, 'slack column is not rendered');
    });

    test('gte-container-slack', async function(assert) {
      await generateTable(this, {
        widthConstraint: 'gte-container-slack',
        columnCount: 1,
        columnOptions: {
          width: 100,
        },
      });

      let containerWidth = table.logicalContainerWidth;
      let header = table.headers.objectAt(0);
      let slackHeader = table.slackHeaders.objectAt(0);

      assert.strictEqual(table.logicalWidth, containerWidth, 'table fits container exactly');
      assert.true(slackHeader.isRendered, 'slack column is rendered');
      assert.strictEqual(
        slackHeader.logicalWidth,
        containerWidth - 100,
        'slack column fills whitespace'
      );

      // expand column a little bit
      await header.resize(200);
      assert.strictEqual(table.logicalWidth, containerWidth, 'table fits container exactly');
      assert.true(slackHeader.isRendered, 'slack column is rendered');
      assert.strictEqual(
        slackHeader.logicalWidth,
        containerWidth - 200,
        'slack column fills whitespace'
      );

      // expand column to fill container
      await header.resize(containerWidth);
      assert.strictEqual(table.logicalWidth, containerWidth, 'table fits container exactly');
      assert.false(slackHeader.isRendered, 'slack column is not rendered');

      // expand column beyond container
      await header.resize(containerWidth + 100);
      assert.strictEqual(
        table.logicalWidth,
        containerWidth + 100,
        'table extends beyond container'
      );
      assert.false(slackHeader.isRendered, 'slack column is not rendered');
    });
  });

  componentModule('fillMode', function() {
    test('equal column mode', async function(assert) {
      await generateTable(this, { widthConstraint: 'eq-container' });

      let expectedWidth = table.logicalWidth / table.headers.length;

      table.headers.forEach(header => {
        assert.true(
          Math.abs(header.logicalWidth - expectedWidth) <= 1,
          'Table header have same width in equal resize mode.'
        );
      });
    });

    test('first column mode', async function(assert) {
      let columnWidth = 30;

      await generateTable(this, {
        fillMode: 'first-column',
        widthConstraint: 'eq-container',
        columnCount: 2,
        columnOptions: {
          width: columnWidth,
          minWidth: columnWidth,
        },
      });

      let tableWidth = table.logicalWidth;
      let firstColumnWidth = table.headers.objectAt(0).logicalWidth;

      assert.true(
        Math.abs(tableWidth - firstColumnWidth - columnWidth) <= 1,
        'First column takes extra space in first column resize mode.'
      );

      assert.true(
        Math.abs(table.headers.objectAt(1).logicalWidth - columnWidth) <= 0,
        'Other columns keep same width in first column resize mode.'
      );
    });

    test('last column mode', async function(assert) {
      let columnWidth = 30;

      await generateTable(this, {
        fillMode: 'last-column',
        widthConstraint: 'eq-container',
        columnCount: 2,
        columnOptions: {
          width: columnWidth,
          minWidth: columnWidth,
        },
      });

      let tableWidth = table.logicalWidth;
      let lastColumnWidth = table.headers.objectAt(1).logicalWidth;

      assert.true(
        Math.abs(tableWidth - lastColumnWidth - columnWidth) <= 1,
        'Last column takes extra space in last column resize mode.'
      );

      assert.true(
        Math.abs(table.headers.objectAt(0).logicalWidth - columnWidth) <= 0,
        'Other columns keep same width in last column resize mode.'
      );
    });

    test('nth column mode for first column', async function(assert) {
      let columnWidth = 30;

      await generateTable(this, {
        fillMode: 'nth-column',
        fillColumnIndex: 0,
        widthConstraint: 'eq-container',
        columnCount: 3,
        columnOptions: {
          width: columnWidth,
          minWidth: columnWidth,
        },
      });

      let tableWidth = table.logicalWidth;
      let middleColumnWidth = table.headers.objectAt(0).logicalWidth;

      assert.true(
        Math.abs(tableWidth - middleColumnWidth - 2 * columnWidth) <= 1,
        'nth column takes extra space in nth column resize mode.'
      );
    });

    test('nth column mode', async function(assert) {
      let columnWidth = 30;

      await generateTable(this, {
        fillMode: 'nth-column',
        fillColumnIndex: 1,
        widthConstraint: 'eq-container',
        columnCount: 3,
        columnOptions: {
          width: columnWidth,
          minWidth: columnWidth,
        },
      });

      let tableWidth = table.logicalWidth;
      let middleColumnWidth = table.headers.objectAt(1).logicalWidth;

      assert.true(
        Math.abs(table.headers.objectAt(0).logicalWidth - columnWidth) <= 0,
        'First column keeps same width in nth column resize mode.'
      );

      assert.true(
        Math.abs(table.headers.objectAt(2).logicalWidth - columnWidth) <= 0,
        'Last column keeps same width in nth column resize mode.'
      );

      assert.true(
        Math.abs(tableWidth - middleColumnWidth - 2 * columnWidth) <= 1,
        'nth column takes extra space in nth column resize mode.'
      );
    });
  });

  componentModule('initialFillMode', function() {
    test('eq-container-slack with no initialFillMode', async function(assert) {
      await generateTable(this, {
        widthConstraint: 'eq-container-slack',
        fillMode: 'equal-column',
        columnCount: 2,
        columnOptions: {
          width: 100,
        },
      });

      let containerWidth = table.containerWidth;
      let header1 = table.headers.objectAt(0);
      let header2 = table.headers.objectAt(1);
      let slackHeader = table.slackHeaders.objectAt(0);

      // `fillMode` is ignored because we are in slack mode
      assert.strictEqual(header1.logicalWidth, 100, 'first column is default size');
      assert.strictEqual(header2.logicalWidth, 100, 'second column is default size');
      assert.strictEqual(
        slackHeader.logicalWidth,
        containerWidth - 200,
        'slack column fills remaining space'
      );

      // expand first column to eliminate slack
      await header1.resize(containerWidth - 100);
      assert.strictEqual(header1.logicalWidth, containerWidth - 100, 'first column is resized');
      assert.strictEqual(header2.logicalWidth, 100, 'second column remains default size');
      assert.false(slackHeader.isRendered, 'slack column is not rendered');

      // expand second column beyond container; `equal-column` fill mode is applied
      await header2.resize(200);
      assert.strictEqual(
        header1.logicalWidth,
        containerWidth - 150,
        'first column receives equal share'
      );
      assert.strictEqual(header2.logicalWidth, 150, 'second column receives equal share');
      assert.false(slackHeader.isRendered, 'slack column is not rendered');

      // shrink second column to original size; slack is applied
      await header2.resize(100);
      assert.strictEqual(header1.logicalWidth, containerWidth - 150, 'first column is unaffected');
      assert.true(slackHeader.isRendered, 'slack column is rendered');
      assert.strictEqual(slackHeader.logicalWidth, 50, 'slack column receives the balance');
    });

    test('eq-container-slack with initialFillMode', async function(assert) {
      await generateTable(this, {
        widthConstraint: 'eq-container-slack',
        initialFillMode: 'first-column',
        fillMode: 'equal-column',
        columnCount: 2,
        columnOptions: {
          width: 100,
        },
      });

      let containerWidth = table.containerWidth;
      let header1 = table.headers.objectAt(0);
      let header2 = table.headers.objectAt(1);
      let slackHeader = table.slackHeaders.objectAt(0);

      // `first-column` initial fill mode is applied
      assert.strictEqual(header1.logicalWidth, containerWidth - 100, 'first column receives fill');
      assert.strictEqual(header2.logicalWidth, 100, 'second column remains default size');
      assert.false(slackHeader.isRendered, 'slack column is not rendered');

      // expand second column beyond container; `equal-column` fill mode is applied
      await header2.resize(200);
      assert.strictEqual(
        header1.logicalWidth,
        containerWidth - 150,
        'first column receives equal share'
      );
      assert.strictEqual(header2.logicalWidth, 150, 'second column receives equal share');
      assert.false(slackHeader.isRendered, 'slack column is not rendered');

      // shrink second column to original size; slack is applied
      await header2.resize(100);
      assert.strictEqual(header1.logicalWidth, containerWidth - 150, 'first column is unaffected');
      assert.strictEqual(header2.logicalWidth, 100, 'second column is resized');
      assert.true(slackHeader.isRendered, 'slack column is rendered');
      assert.strictEqual(slackHeader.logicalWidth, 50, 'slack column receives the balance');
    });

    // eslint-disable-next-line qunit/no-identical-names
    test('gte-container-slack', async function(assert) {
      await generateTable(this, {
        widthConstraint: 'gte-container-slack',
        initialFillMode: 'equal-column',
        columnCount: 1,
        columnOptions: {
          width: 100,
        },
      });

      let containerWidth = table.containerWidth;
      let header = table.headers.objectAt(0);
      let slackHeader = table.slackHeaders.objectAt(0);

      assert.strictEqual(
        header.logicalWidth,
        containerWidth,
        'fill mode is applied on initial run'
      );
      assert.false(slackHeader.isRendered, 'slack column is not rendered');

      await header.resize(100);
      assert.strictEqual(header.logicalWidth, 100, 'header is resized');
      assert.strictEqual(
        slackHeader.logicalWidth,
        containerWidth - 100,
        'slack column is expanded'
      );
    });
  });

  componentModule('subcolumns', function() {
    test('they work', async function(assert) {
      await generateTable(this, {
        columnOptions: {
          columnCount: 4,
          subcolumnCount: 4,
        },
      });

      assert.strictEqual(table.header.rows.length, 2, 'There are 2 rows in the header.');

      for (let i = 0; i < 4; i++) {
        assert.ok(table.headers.findOne({ text: toBase26(i) }), 'group exists');

        for (let j = 0; j < 4; j++) {
          assert.ok(
            table.headers.findOne({ text: `${toBase26(i)} ${toBase26(j)}` }),
            'subcolumn exists'
          );
        }
      }
    });

    test('they do not render by default', async function(assert) {
      await generateTable(this);

      assert.strictEqual(table.header.rows.length, 1, 'There is only one row in the header.');
    });
  });
});
