import { module, test } from 'ember-qunit';

import generateTable from '../../../helpers/generate-table';
import { componentModule } from '../../../helpers/module';

import { find, findAll, scrollTo } from 'ember-native-dom-helpers';
import { resizeToLeftEdge, resizeToRightEdge } from './-helpers';

import TablePage from 'ember-table/test-support/pages/ember-table';

const table = TablePage.create();

module('Integration | header | resize', function() {
  componentModule('basic', function() {
    test('basic', async function(assert) {
      await generateTable(this);

      let originalWidth = table.headers.eq(1).width;

      await table.headers.eq(1).resize(originalWidth + 30);
      assert.equal(table.headers.eq(1).width, originalWidth + 30, 'Can be resized larger');

      await table.headers.eq(1).resize(originalWidth - 30);
      assert.equal(table.headers.eq(1).width, originalWidth - 30, 'Can be resized smaller');
    });

    test('respects minWidth', async function(assert) {
      await generateTable(this, { columnOptions: { minWidth: 100, width: 100 } });

      await table.headers.eq(1).resize(30);
      assert.equal(table.headers.eq(1).width, 100, 'Column size is updated');
    });

    test('respects maxWidth', async function(assert) {
      await generateTable(this, { columnOptions: { maxWidth: 100, width: 100 } });

      await table.headers.eq(1).resize(200);
      assert.equal(table.headers.eq(1).width, 100, 'Column size is updated');
    });

    test('scroll container gets larger when resizing right', async function(assert) {
      let columnCount = 10;
      await generateTable(this, { columnCount });

      let tableContainer = find('.ember-table');
      let header = findAll('th')[columnCount - 1];

      await resizeToRightEdge(header);

      assert.ok(table.width > table.containerWidth, 'table width is larger');
      assert.ok(tableContainer.scrollLeft > 0, 'table scrolled');
    });

    test('scroll container scrolls at left edge', async function(assert) {
      let columnCount = 20;
      await generateTable(this, { columnCount, rightFixedCount: 1 });

      let tableContainer = find('.ember-table');
      let header = findAll('th')[columnCount - 1];

      let originalWidth = table.headers.eq(0).width;

      await scrollTo(tableContainer, 10000, 0);
      await resizeToLeftEdge(header);

      assert.ok(table.headers.eq(columnCount - 1).width < originalWidth, 'column shrunk');
      assert.equal(tableContainer.scrollLeft, 0, 'table scrolled back to the left');
    });

    test('fluid mode', async function(assert) {
      await generateTable(this, { resizeMode: 'fluid' });

      let originalWidth = table.headers.eq(1).width;
      await table.headers.eq(1).resize(originalWidth + 30);

      assert.equal(table.headers.eq(1).width, originalWidth + 30, 'Column size is updated');
      assert.equal(
        table.headers.eq(2).width - originalWidth,
        -30,
        'Next column shrinks in fluid mode'
      );
    });

    test('column resize action is sent up to controller', async function(assert) {
      this.on('onResize', function(column) {
        assert.equal(column.name, 'B', 'action is sent to controller after resizing');
      });

      await generateTable(this, { widthConstraint: 'eq-container' });

      let originalWidth = table.headers.eq(1).width;
      await table.headers.eq(1).resize(originalWidth + 20);
    });
  });

  componentModule('fixed column', function() {
    test('fixed left column', async function(assert) {
      await generateTable(this, { columnOptions: { fixedLeftCount: 1 } });

      let firstHeader = table.headers.eq(0);

      let originalWidth = firstHeader.width;
      await firstHeader.resize(originalWidth + 30);
      assert.equal(firstHeader.width, originalWidth + 30, 'Fixed column size is updated');
    });

    test('fixed right column', async function(assert) {
      let columnCount = 20;
      await generateTable(this, { columnCount, columnOptions: { fixedRightCount: 1 } });

      let lastHeader = table.headers.eq(columnCount - 1);

      let originalWidth = lastHeader.width;
      await lastHeader.resize(130);
      assert.equal(lastHeader.width, originalWidth + 30, 'Fixed column size is updated');
    });

    test('scroll container gets larger when resizing right with fixed column', async function(assert) {
      let columnCount = 10;
      let columnWidth = 100;

      await generateTable(this, {
        columnCount,
        columnOptions: {
          fixedRightCount: 1,
          width: columnWidth,
        },
      });

      let tableContainer = find('.ember-table');
      let header = findAll('th')[columnCount - 2];

      await resizeToRightEdge(header, columnWidth);

      assert.ok(table.width > table.containerWidth, 'table width is larger');
      assert.ok(tableContainer.scrollLeft > 0, 'table scrolled');
    });

    test('scroll container at scrolls left fixed colummn', async function(assert) {
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
      let header = findAll('th')[1];

      let originalWidth = table.headers.eq(1).width;

      await scrollTo(tableContainer, 10000, 0);
      await resizeToLeftEdge(header, columnWidth);

      assert.ok(table.headers.eq(1).width < originalWidth, 'column shrunk');
      assert.equal(tableContainer.scrollLeft, 0, 'table scrolled back to the left');
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
