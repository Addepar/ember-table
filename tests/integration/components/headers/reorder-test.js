import { module, test, skip } from 'qunit';

import {
  configureTableGeneration,
  generateTable,
  generateColumns,
  resetTableGenerationConfig,
} from '../../../helpers/generate-table';
import { parameterizedComponentModule } from '../../../helpers/module';

import { find, findAll } from '@ember/test-helpers';
import { scrollTo } from '@ember/test-helpers';
import { mouseDown, mouseMove, mouseUp } from 'ember-table/test-support/helpers/mouse';

import TablePage from 'ember-table/test-support/pages/ember-table';
import { toBase26 } from 'dummy/utils/base-26';

const table = new TablePage();

/**
 *
 * Scroll to a given edge, accepting an offset for how many rendered
 * pixels to stay from the edge.
 *
 */
export async function scrollToEdge(targetElement, edgeOffset, direction) {
  let targetElementRight = targetElement.getBoundingClientRect().right;
  let container = find('.ember-table');

  let initialTargetX, finalTargetX;
  if (direction === 'right') {
    initialTargetX = targetElementRight - 5;
    finalTargetX = container.getBoundingClientRect().right - edgeOffset;
    if (initialTargetX >= finalTargetX) {
      throw new Error(
        'When dragging right, the starting position X must be smaller than the ending position'
      );
    }
  } else {
    initialTargetX = targetElementRight - 5;
    finalTargetX = container.getBoundingClientRect().left + edgeOffset;
    if (initialTargetX <= finalTargetX) {
      throw new Error(
        'When dragging left, the starting position X must be greater than the ending position'
      );
    }
  }

  await mouseDown(targetElement, initialTargetX, 0);

  /*
   * Below a certain number of steps, Hammer (the gesture library
   * which recognizes panning) will not pick up the pointermove
   * events emitted by `mouseMove` before the gesture completes.
   *
   * 5 seems a reasonable number.
   */
  let current = initialTargetX;
  for (let steps = 5; steps > 0; steps--) {
    await mouseMove(targetElement, current, 0);
    current = current + (finalTargetX - current) / steps;
  }
  await mouseMove(targetElement, finalTargetX, 0);
  await mouseUp(targetElement);
}

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

async function reorderToLeftEdge(column, edgeOffset = 0) {
  await scrollToEdge(column, edgeOffset, 'left');
}

async function reorderToRightEdge(column, edgeOffset = 0) {
  await scrollToEdge(column, edgeOffset, 'right');
}

module('Integration | headers | reorder', function() {
  parameterizedComponentModule('reordering', USE_EMBER_ARRAY_PARAMETERS, function() {
    test('standard columns', async function(assert) {
      await generateTable(this);

      await table.headers.objectAt(0).reorderBy(1);
      assert.strictEqual(
        table.headers.objectAt(0).text.trim(),
        'B',
        'First column header is swapped forward'
      );
      assert.strictEqual(
        table.getCell(0, 0).text.trim(),
        '0B',
        'First column cells are swapped forward'
      );
      assert.strictEqual(
        table.headers.objectAt(1).text.trim(),
        'A',
        'Second column header is swapped backward'
      );
      assert.strictEqual(
        table.getCell(0, 1).text.trim(),
        '0A',
        'Second column cells are swapped forward'
      );

      await table.headers.objectAt(1).reorderBy(-1);
      assert.strictEqual(
        table.headers.objectAt(1).text.trim(),
        'B',
        'Second column header is swapped backward'
      );
      assert.strictEqual(
        table.getCell(0, 1).text.trim(),
        '0B',
        'Second column cells are swapped forward'
      );
      assert.strictEqual(
        table.headers.objectAt(0).text.trim(),
        'A',
        'First column header is swapped forward'
      );
      assert.strictEqual(
        table.getCell(0, 0).text.trim(),
        '0A',
        'First column cells are swapped forward'
      );
    });

    test('column reorder action is sent up to controller', async function(assert) {
      this.set('onReorder', function(insertedColumn, insertedAfter) {
        assert.strictEqual(insertedColumn.name, 'A', 'old column index is correct');
        assert.strictEqual(insertedAfter.name, 'B', 'new column index is correct');
      });

      await generateTable(this);
      await table.headers.objectAt(0).reorderBy(1);
    });

    test('scroll container scrolls reordering at right edge', async function(assert) {
      let columnCount = 20;
      await generateTable(this, { columnCount });

      let tableOverflowContainer = find('[data-test-ember-table-overflow]');
      let header = findAll('th')[0];

      await reorderToRightEdge(header);

      assert.true(tableOverflowContainer.scrollLeft > 0, 'table scrolled');
      assert.strictEqual(
        table.headers.objectAt(columnCount - 1).text,
        toBase26(0),
        'table scrolled'
      );
    });

    test('scroll container scrolls reordering at left edge', async function(assert) {
      let columnCount = 20;
      await generateTable(this, { columnCount });

      let tableOverflowContainer = find('[data-test-ember-table-overflow]');
      let header = findAll('th')[columnCount - 1];

      await scrollTo(tableOverflowContainer, 10000, 0);
      await reorderToLeftEdge(header);

      assert.strictEqual(tableOverflowContainer.scrollLeft, 0, 'table scrolled back to the left');
      assert.strictEqual(
        table.headers.objectAt(0).text,
        toBase26(columnCount - 1),
        'table scrolled'
      );
    });

    test('reordering does not reset widths', async function(assert) {
      await generateTable(this, { columnCount: 2 });

      let firstHeader = table.headers.objectAt(0);
      let secondHeader = table.headers.objectAt(1);

      let originalHeaderWidth = firstHeader.logicalWidth;

      await firstHeader.resize(originalHeaderWidth + 30);

      assert.strictEqual(
        firstHeader.logicalWidth,
        originalHeaderWidth + 30,
        'header can be resized larger'
      );

      await table.headers.objectAt(0).reorderBy(1);
      assert.strictEqual(
        table.headers.objectAt(0).text.trim(),
        'B',
        'First column is swapped forward'
      );
      assert.strictEqual(
        table.headers.objectAt(1).text.trim(),
        'A',
        'Second column is swapped backward'
      );

      assert.strictEqual(
        secondHeader.logicalWidth,
        originalHeaderWidth + 30,
        'width was not reset'
      );
    });

    test('reordering can be disabled per column', async function(assert) {
      let columns = generateColumns(4);

      columns[0].isReorderable = false;
      columns[3].isReorderable = false;

      await generateTable(this, { columns });

      assert.strictEqual(
        findAll('.is-reorderable').length,
        2,
        'only two columns are marked as reorderable'
      );

      await table.headers.objectAt(0).reorderBy(1);
      assert.strictEqual(table.headers.objectAt(0).text.trim(), 'A', 'First column not swapped');
      assert.strictEqual(table.headers.objectAt(1).text.trim(), 'B', 'Second column not swapped');

      await table.headers.objectAt(3).reorderBy(-1);
      assert.strictEqual(table.headers.objectAt(2).text.trim(), 'C', 'Third column not swapped');
      assert.strictEqual(table.headers.objectAt(3).text.trim(), 'D', 'Fourth column not swapped');

      await table.headers.objectAt(2).reorderBy(-1);
      assert.strictEqual(table.headers.objectAt(1).text.trim(), 'C', 'Second column swapped');
      assert.strictEqual(table.headers.objectAt(2).text.trim(), 'B', 'Third column swapped');
    });

    test('multiple columns can be disabled on either edge', async function(assert) {
      let columns = generateColumns(6);

      columns[0].isReorderable = false;
      columns[1].isReorderable = false;
      columns[4].isReorderable = false;
      columns[5].isReorderable = false;

      await generateTable(this, { columns });

      await table.headers.objectAt(0).reorderBy(1);
      assert.strictEqual(table.headers.objectAt(0).text.trim(), 'A', 'First column not swapped');
      assert.strictEqual(table.headers.objectAt(1).text.trim(), 'B', 'Second column not swapped');

      await table.headers.objectAt(1).reorderBy(1);
      assert.strictEqual(table.headers.objectAt(1).text.trim(), 'B', 'Second column not swapped');
      assert.strictEqual(table.headers.objectAt(2).text.trim(), 'C', 'Third column not swapped');

      await table.headers.objectAt(4).reorderBy(-1);
      assert.strictEqual(table.headers.objectAt(3).text.trim(), 'D', 'Fourth column not swapped');
      assert.strictEqual(table.headers.objectAt(4).text.trim(), 'E', 'Fifth column not swapped');

      await table.headers.objectAt(5).reorderBy(-1);
      assert.strictEqual(table.headers.objectAt(4).text.trim(), 'E', 'Fifth column not swapped');
      assert.strictEqual(table.headers.objectAt(5).text.trim(), 'F', 'Sixth column not swapped');
    });

    skip('disabling reordering in columns that are not edge columns throws an error', async function(assert) {
      let columns = generateColumns(6);

      columns[3].isReorderable = false;

      await generateTable(this, { columns });

      await assert.throws(async () => {
        await table.headers.objectAt(0).reorderBy(1);
      });
    });
  });

  parameterizedComponentModule('fixed columns', USE_EMBER_ARRAY_PARAMETERS, function() {
    test('left fixed column can be reordered with other left fixed columns', async function(assert) {
      await generateTable(this, { columnOptions: { fixedLeftCount: 2 } });

      await table.headers.objectAt(0).reorderBy(1);
      assert.strictEqual(
        table.headers.objectAt(0).text.trim(),
        'B',
        'First column is swapped forward'
      );
      assert.strictEqual(
        table.headers.objectAt(1).text.trim(),
        'A',
        'Second column is swapped backward'
      );
    });

    test('left fixed column cannot be reordered with normal columns', async function(assert) {
      await generateTable(this, { columnOptions: { fixedLeftCount: 1 } });

      await table.headers.objectAt(0).reorderBy(1);
      assert.strictEqual(table.headers.objectAt(0).text.trim(), 'A', 'First column is not swapped');
      assert.strictEqual(
        table.headers.objectAt(1).text.trim(),
        'B',
        'Second column is not swapped'
      );
    });

    test('right fixed column can be reordered with other right fixed columns', async function(assert) {
      let columnCount = 10;
      await generateTable(this, { columnCount: 10, columnOptions: { fixedRightCount: 2 } });

      await table.headers.objectAt(columnCount - 2).reorderBy(1);
      assert.strictEqual(
        table.headers.objectAt(columnCount - 1).text.trim(),
        'I',
        'First column is swapped forward'
      );
      assert.strictEqual(
        table.headers.objectAt(columnCount - 2).text.trim(),
        'J',
        'Second column is swapped backward'
      );
    });

    test('right fixed column cannot be reordered with normal columns', async function(assert) {
      let columnCount = 10;
      await generateTable(this, { columnCount: 10, columnOptions: { fixedRightCount: 1 } });

      await table.headers.objectAt(columnCount - 2).reorderBy(1);
      assert.strictEqual(
        table.headers.objectAt(columnCount - 1).text.trim(),
        'J',
        'First column is not swapped'
      );
      assert.strictEqual(
        table.headers.objectAt(columnCount - 2).text.trim(),
        'I',
        'Second column is not swapped'
      );
    });

    test('left fixed column cannot be reordered with right fixed column', async function(assert) {
      await generateTable(this, {
        columnOptions: { columnCount: 2, fixedLeftCount: 1, fixedRightCount: 1 },
      });

      await table.headers.objectAt(0).reorderBy(1);
      assert.strictEqual(table.headers.objectAt(0).text.trim(), 'A', 'First column is not swapped');
      assert.strictEqual(
        table.headers.objectAt(1).text.trim(),
        'B',
        'Second column is not swapped'
      );

      await table.headers.objectAt(1).reorderBy(-1);
      assert.strictEqual(table.headers.objectAt(0).text.trim(), 'A', 'First column is not swapped');
      assert.strictEqual(
        table.headers.objectAt(1).text.trim(),
        'B',
        'Second column is not swapped'
      );
    });

    test('scroll container scrolls reordering at right edge', async function(assert) {
      let columnCount = 20;
      let columnWidth = 100;

      await generateTable(this, {
        columnCount,
        columnOptions: {
          fixedRightCount: 1,
          width: columnWidth,
        },
      });

      let tableOverflowContainer = find('[data-test-ember-table-overflow]');
      let header = findAll('th')[0];

      let headerBoundingRect = header.getBoundingClientRect();
      let headerWidth = headerBoundingRect.right - headerBoundingRect.left;
      await reorderToRightEdge(header, headerWidth);

      assert.true(tableOverflowContainer.scrollLeft > 0, 'table scrolled');
      assert.strictEqual(
        table.headers.objectAt(columnCount - 2).text,
        toBase26(0),
        'table scrolled'
      );
    });

    test('scroll container scrolls reordering at left edge', async function(assert) {
      let columnCount = 20;
      let columnWidth = 100;

      await generateTable(this, {
        columnCount,
        columnOptions: {
          fixedLeftCount: 1,
          width: columnWidth,
        },
      });

      let tableOverflowContainer = find('[data-test-ember-table-overflow]');
      let header = findAll('th')[columnCount - 1];

      await scrollTo(tableOverflowContainer, 10000, 0);
      let headerBoundingRect = header.getBoundingClientRect();
      let headerWidth = headerBoundingRect.right - headerBoundingRect.left;
      await reorderToLeftEdge(header, headerWidth);

      assert.strictEqual(tableOverflowContainer.scrollLeft, 0, 'table scrolled back to the left');
      assert.strictEqual(
        table.headers.objectAt(1).text,
        toBase26(columnCount - 1),
        'table scrolled'
      );
    });
  });

  parameterizedComponentModule('subheaders', USE_EMBER_ARRAY_PARAMETERS, function() {
    test('subheaders can be reordered', async function(assert) {
      await generateTable(this, { columnCount: 1, columnOptions: { subcolumnCount: 2 } });

      let firstSubheader = table.headers.findOne({ text: 'A A' });
      let secondSubheader = table.headers.findOne({ text: 'A B' });

      await firstSubheader.reorderBy(1);

      assert.strictEqual(firstSubheader.text, 'A B', 'subheader swapped correctly');
      assert.strictEqual(secondSubheader.text, 'A A', 'subheader swapped correctly');
    });

    test('headers with subheaders can be reordered', async function(assert) {
      await generateTable(this, { columnCount: 2, columnOptions: { subcolumnCount: 2 } });

      let firstHeader = table.headers.findOne({ text: 'A' });
      let secondHeader = table.headers.findOne({ text: 'B' });

      await firstHeader.reorderBy(1);

      assert.strictEqual(firstHeader.text, 'B', 'header swapped correctly');
      assert.strictEqual(secondHeader.text, 'A', 'header swapped correctly');
    });

    test('Can only reorder subheaders within header group', async function(assert) {
      await generateTable(this, { columnCount: 2, columnOptions: { subcolumnCount: 1 } });

      let firstSubheader = table.headers.findOne({ text: 'A A' });
      let secondSubheader = table.headers.findOne({ text: 'B A' });

      await firstSubheader.reorderBy(10);

      assert.strictEqual(firstSubheader.text, 'A A', 'subheader swapped correctly');
      assert.strictEqual(secondSubheader.text, 'B A', 'subheader swapped correctly');
    });
  });
});
