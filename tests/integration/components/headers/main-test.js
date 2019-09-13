import { module, test } from 'ember-qunit';

import { generateTable } from '../../../helpers/generate-table';
import { componentModule } from '../../../helpers/module';
import { toBase26 } from 'dummy/utils/base-26';

import TablePage from 'ember-table/test-support/pages/ember-table';

const table = new TablePage();

module('Integration | header | main', function() {
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
      let tableWidth = table.width;

      assert.ok(
        Math.abs(tableWidth - containerWidth) <= 5,
        'First column takes extra space in first column resize mode.'
      );
    });

    test('eq-container when larger', async function(assert) {
      await generateTable(this, {
        widthConstraint: 'eq-container',
        columnCount: 2,
        columnOptions: {
          width: 2000,
        },
      });

      let containerWidth = table.containerWidth;
      let tableWidth = table.width;

      assert.ok(
        Math.abs(tableWidth - containerWidth) <= 5,
        'First column takes extra space in first column resize mode.'
      );
    });

    test('eq-container with containerWidthAdjustment', async function(assert) {
      let adjustmentValue = -10;
      await generateTable(this, {
        widthConstraint: 'eq-container',
        containerWidthAdjustment: adjustmentValue,
        columnCount: 2,
      });

      let containerWidth = table.containerWidth;
      let tableWidth = table.width;

      assert.equal(
        tableWidth - containerWidth,
        adjustmentValue,
        'Table width is adjusted from container width by the specified amount.'
      );
    });

    test('gte-container', async function(assert) {
      await generateTable(this, {
        widthConstraint: 'gte-container',
        columnCount: 2,
        columnOptions: {
          width: 50,
        },
      });

      let containerWidth = table.containerWidth;
      let tableWidth = table.width;

      assert.ok(
        Math.abs(tableWidth - containerWidth) <= 5,
        'First column takes extra space in first column resize mode.'
      );
    });

    test('lte-container', async function(assert) {
      await generateTable(this, {
        widthConstraint: 'lte-container',
        columnCount: 2,
        columnOptions: {
          width: 2000,
        },
      });

      let containerWidth = table.containerWidth;
      let tableWidth = table.width;

      assert.ok(
        Math.abs(tableWidth - containerWidth) <= 5,
        'First column takes extra space in first column resize mode.'
      );
    });
  });

  componentModule('fillMode', function() {
    test('equal column mode', async function(assert) {
      await generateTable(this, { widthConstraint: 'eq-container' });

      let expectedWidth = table.width / table.headers.length;

      table.headers.forEach(header => {
        assert.ok(
          Math.abs(header.width - expectedWidth) <= 1,
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
        },
      });

      let tableWidth = table.width;
      let firstColumnWidth = table.headers.objectAt(0).width;

      assert.ok(
        Math.abs(tableWidth - firstColumnWidth - columnWidth) <= 1,
        'First column takes extra space in first column resize mode.'
      );

      assert.ok(
        Math.abs(table.headers.objectAt(1).width - columnWidth) <= 0,
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
        },
      });

      let tableWidth = table.width;
      let lastColumnWidth = table.headers.objectAt(1).width;

      assert.ok(
        Math.abs(tableWidth - lastColumnWidth - columnWidth) <= 1,
        'Last column takes extra space in last column resize mode.'
      );

      assert.ok(
        Math.abs(table.headers.objectAt(0).width - columnWidth) <= 0,
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
        },
      });

      let tableWidth = table.width;
      let middleColumnWidth = table.headers.objectAt(0).width;

      assert.ok(
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
        },
      });

      let tableWidth = table.width;
      let middleColumnWidth = table.headers.objectAt(1).width;

      assert.ok(
        Math.abs(table.headers.objectAt(0).width - columnWidth) <= 0,
        'First column keeps same width in nth column resize mode.'
      );

      assert.ok(
        Math.abs(table.headers.objectAt(2).width - columnWidth) <= 0,
        'Last column keeps same width in nth column resize mode.'
      );

      assert.ok(
        Math.abs(tableWidth - middleColumnWidth - 2 * columnWidth) <= 1,
        'nth column takes extra space in nth column resize mode.'
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

      assert.equal(table.header.rows.length, 2, 'There are 2 rows in the header.');

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

      assert.equal(table.header.rows.length, 1, 'There is only one row in the header.');
    });
  });
});
