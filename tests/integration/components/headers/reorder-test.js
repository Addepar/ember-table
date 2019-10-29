import { module, test, skip } from 'ember-qunit';

import { generateTable, generateColumns } from '../../../helpers/generate-table';
import { componentModule } from '../../../helpers/module';

import { find, findAll, scrollTo } from 'ember-native-dom-helpers';
import { mouseDown, mouseMove, mouseUp } from 'ember-table/test-support/helpers/mouse';
import { getScale } from 'ember-table/test-support/helpers/element';

import TablePage from 'ember-table/test-support/pages/ember-table';
import { toBase26 } from 'dummy/utils/base-26';
import config from 'dummy/config/environment';

const table = new TablePage();

export async function scrollToEdge(targetElement, edgeOffset, direction) {
  let targetElementRight = targetElement.getBoundingClientRect().right;
  let container = find('.ember-table');
  let scale = getScale(container);
  let edge;

  if (direction === 'right') {
    await mouseDown(targetElement, targetElementRight - 30, 0);
    await mouseMove(targetElement, targetElementRight - 20, 0);
    await mouseMove(targetElement, targetElementRight - 10, 0);

    edge = container.getBoundingClientRect().right - edgeOffset / scale;
  } else {
    await mouseDown(targetElement, targetElementRight - 10, 0);
    await mouseMove(targetElement, targetElementRight - 20, 0);
    await mouseMove(targetElement, targetElementRight - 30, 0);

    edge = container.getBoundingClientRect().left + edgeOffset / scale;
  }

  await mouseMove(targetElement, edge, 0);
  await mouseUp(targetElement);
}

async function reorderToLeftEdge(column, edgeOffset = 0) {
  await scrollToEdge(column, edgeOffset, 'left', true);
}

async function reorderToRightEdge(column, edgeOffset = 0) {
  await scrollToEdge(column, edgeOffset, 'right', true);
}

module('Integration | headers | reorder', function() {
  if (config.skipReorderingTests) {
    skip('Skipping column reordering tests, see https://github.com/Addepar/ember-table/issues/775', async function(assert) {
      assert.ok(true, 'Skipping column reordering tests');
    });
    return;
  }

  componentModule('reordering', function() {
    test('standard columns', async function(assert) {
      await generateTable(this);

      await table.headers.objectAt(0).reorderBy(1);
      assert.equal(table.headers.objectAt(0).text.trim(), 'B', 'First column is swapped forward');
      assert.equal(table.headers.objectAt(1).text.trim(), 'A', 'Second column is swapped backward');

      await table.headers.objectAt(1).reorderBy(-1);
      assert.equal(table.headers.objectAt(1).text.trim(), 'B', 'Second column is swapped backward');
      assert.equal(table.headers.objectAt(0).text.trim(), 'A', 'First column is swapped forward');
    });

    test('column reorder action is sent up to controller', async function(assert) {
      this.on('onReorder', function(insertedColumn, insertedAfter) {
        assert.equal(insertedColumn.name, 'A', 'old column index is correct');
        assert.equal(insertedAfter.name, 'B', 'new column index is correct');
      });

      await generateTable(this);
      await table.headers.objectAt(0).reorderBy(1);
    });

    test('scroll container scrolls reordering at right edge', async function(assert) {
      let columnCount = 20;
      await generateTable(this, { columnCount });

      let tableContainer = find('.ember-table');
      let header = findAll('th')[0];

      await reorderToRightEdge(header);

      assert.ok(tableContainer.scrollLeft > 0, 'table scrolled');
      assert.equal(table.headers.objectAt(columnCount - 1).text, toBase26(0), 'table scrolled');
    });

    test('scroll container scrolls reordering at left edge', async function(assert) {
      let columnCount = 20;
      await generateTable(this, { columnCount });

      let tableContainer = find('.ember-table');
      let header = findAll('th')[columnCount - 1];

      await scrollTo(tableContainer, 10000, 0);
      await reorderToLeftEdge(header);

      assert.equal(tableContainer.scrollLeft, 0, 'table scrolled back to the left');
      assert.equal(table.headers.objectAt(0).text, toBase26(columnCount - 1), 'table scrolled');
    });

    test('reordering does not reset widths', async function(assert) {
      await generateTable(this, { columnCount: 2 });

      let firstHeader = table.headers.objectAt(0);
      let secondHeader = table.headers.objectAt(1);

      let originalHeaderWidth = firstHeader.width;

      await firstHeader.resize(originalHeaderWidth + 30);

      assert.equal(firstHeader.width, originalHeaderWidth + 30, 'header can be resized larger');

      await table.headers.objectAt(0).reorderBy(1);
      assert.equal(table.headers.objectAt(0).text.trim(), 'B', 'First column is swapped forward');
      assert.equal(table.headers.objectAt(1).text.trim(), 'A', 'Second column is swapped backward');

      assert.equal(secondHeader.width, originalHeaderWidth + 30, 'width was not reset');
    });

    test('reordering can be disabled per column', async function(assert) {
      let columns = generateColumns(4);

      columns[0].isReorderable = false;
      columns[3].isReorderable = false;

      await generateTable(this, { columns });

      assert.equal(
        findAll('.is-reorderable').length,
        2,
        'only two columns are marked as reorderable'
      );

      await table.headers.objectAt(0).reorderBy(1);
      assert.equal(table.headers.objectAt(0).text.trim(), 'A', 'First column not swapped');
      assert.equal(table.headers.objectAt(1).text.trim(), 'B', 'Second column not swapped');

      await table.headers.objectAt(3).reorderBy(-1);
      assert.equal(table.headers.objectAt(2).text.trim(), 'C', 'Third column not swapped');
      assert.equal(table.headers.objectAt(3).text.trim(), 'D', 'Fourth column not swapped');

      await table.headers.objectAt(2).reorderBy(-1);
      assert.equal(table.headers.objectAt(1).text.trim(), 'C', 'Second column swapped');
      assert.equal(table.headers.objectAt(2).text.trim(), 'B', 'Third column swapped');
    });

    test('multiple columns can be disabled on either edge', async function(assert) {
      let columns = generateColumns(6);

      columns[0].isReorderable = false;
      columns[1].isReorderable = false;
      columns[4].isReorderable = false;
      columns[5].isReorderable = false;

      await generateTable(this, { columns });

      await table.headers.objectAt(0).reorderBy(1);
      assert.equal(table.headers.objectAt(0).text.trim(), 'A', 'First column not swapped');
      assert.equal(table.headers.objectAt(1).text.trim(), 'B', 'Second column not swapped');

      await table.headers.objectAt(1).reorderBy(1);
      assert.equal(table.headers.objectAt(1).text.trim(), 'B', 'Second column not swapped');
      assert.equal(table.headers.objectAt(2).text.trim(), 'C', 'Third column not swapped');

      await table.headers.objectAt(4).reorderBy(-1);
      assert.equal(table.headers.objectAt(3).text.trim(), 'D', 'Fourth column not swapped');
      assert.equal(table.headers.objectAt(4).text.trim(), 'E', 'Fifth column not swapped');

      await table.headers.objectAt(5).reorderBy(-1);
      assert.equal(table.headers.objectAt(4).text.trim(), 'E', 'Fifth column not swapped');
      assert.equal(table.headers.objectAt(5).text.trim(), 'F', 'Sixth column not swapped');
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

  componentModule('fixed columns', function() {
    test('left fixed column can be reordered with other left fixed columns', async function(assert) {
      await generateTable(this, { columnOptions: { fixedLeftCount: 2 } });

      await table.headers.objectAt(0).reorderBy(1);
      assert.equal(table.headers.objectAt(0).text.trim(), 'B', 'First column is swapped forward');
      assert.equal(table.headers.objectAt(1).text.trim(), 'A', 'Second column is swapped backward');
    });

    test('left fixed column cannot be reordered with normal columns', async function(assert) {
      await generateTable(this, { columnOptions: { fixedLeftCount: 1 } });

      await table.headers.objectAt(0).reorderBy(1);
      assert.equal(table.headers.objectAt(0).text.trim(), 'A', 'First column is not swapped');
      assert.equal(table.headers.objectAt(1).text.trim(), 'B', 'Second column is not swapped');
    });

    test('right fixed column can be reordered with other right fixed columns', async function(assert) {
      let columnCount = 10;
      await generateTable(this, { columnCount: 10, columnOptions: { fixedRightCount: 2 } });

      await table.headers.objectAt(columnCount - 2).reorderBy(1);
      assert.equal(
        table.headers.objectAt(columnCount - 1).text.trim(),
        'I',
        'First column is swapped forward'
      );
      assert.equal(
        table.headers.objectAt(columnCount - 2).text.trim(),
        'J',
        'Second column is swapped backward'
      );
    });

    test('right fixed column cannot be reordered with normal columns', async function(assert) {
      let columnCount = 10;
      await generateTable(this, { columnCount: 10, columnOptions: { fixedRightCount: 1 } });

      await table.headers.objectAt(columnCount - 2).reorderBy(1);
      assert.equal(
        table.headers.objectAt(columnCount - 1).text.trim(),
        'J',
        'First column is not swapped'
      );
      assert.equal(
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
      assert.equal(table.headers.objectAt(0).text.trim(), 'A', 'First column is not swapped');
      assert.equal(table.headers.objectAt(1).text.trim(), 'B', 'Second column is not swapped');

      await table.headers.objectAt(1).reorderBy(-1);
      assert.equal(table.headers.objectAt(0).text.trim(), 'A', 'First column is not swapped');
      assert.equal(table.headers.objectAt(1).text.trim(), 'B', 'Second column is not swapped');
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

      let tableContainer = find('.ember-table');
      let header = findAll('th')[0];

      await reorderToRightEdge(header, columnWidth);

      assert.ok(tableContainer.scrollLeft > 0, 'table scrolled');
      assert.equal(table.headers.objectAt(columnCount - 2).text, toBase26(0), 'table scrolled');
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

      let tableContainer = find('.ember-table');
      let header = findAll('th')[columnCount - 1];

      await scrollTo(tableContainer, 10000, 0);
      await reorderToLeftEdge(header, columnWidth);

      assert.equal(tableContainer.scrollLeft, 0, 'table scrolled back to the left');
      assert.equal(table.headers.objectAt(1).text, toBase26(columnCount - 1), 'table scrolled');
    });
  });

  componentModule('subheaders', function() {
    test('subheaders can be reordered', async function(assert) {
      await generateTable(this, { columnCount: 1, columnOptions: { subcolumnCount: 2 } });

      let firstSubheader = table.headers.findOne({ text: 'A A' });
      let secondSubheader = table.headers.findOne({ text: 'A B' });

      await firstSubheader.reorderBy(1);

      assert.equal(firstSubheader.text, 'A B', 'subheader swapped correctly');
      assert.equal(secondSubheader.text, 'A A', 'subheader swapped correctly');
    });

    test('headers with subheaders can be reordered', async function(assert) {
      await generateTable(this, { columnCount: 2, columnOptions: { subcolumnCount: 2 } });

      let firstHeader = table.headers.findOne({ text: 'A' });
      let secondHeader = table.headers.findOne({ text: 'B' });

      await firstHeader.reorderBy(1);

      assert.equal(firstHeader.text, 'B', 'header swapped correctly');
      assert.equal(secondHeader.text, 'A', 'header swapped correctly');
    });

    test('Can only reorder subheaders within header group', async function(assert) {
      await generateTable(this, { columnCount: 2, columnOptions: { subcolumnCount: 1 } });

      let firstSubheader = table.headers.findOne({ text: 'A A' });
      let secondSubheader = table.headers.findOne({ text: 'B A' });

      await firstSubheader.reorderBy(10);

      assert.equal(firstSubheader.text, 'A A', 'subheader swapped correctly');
      assert.equal(secondSubheader.text, 'B A', 'subheader swapped correctly');
    });
  });
});
