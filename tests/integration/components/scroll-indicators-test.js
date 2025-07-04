import { module, test } from 'qunit';

import { generateTable } from '../../helpers/generate-table';
import { componentModule } from '../../helpers/module';

import { findElement } from 'ember-classy-page-object/extend';
import { scrollTo } from '@ember/test-helpers';

import TablePage from 'ember-table/test-support/pages/ember-table';

const SCROLL_MAX = 999999;

let table = new TablePage();

let isOffset = (side, distance) => {
  if (side === 'right') {
    distance += table.verticalScrollbarWidth();
  }

  if (side === 'bottom') {
    distance += table.horizontalScrollbarHeight();
  }

  let element = table.scrollIndicator(side);
  return getComputedStyle(element)[side] === `${distance}px`;
};

module('Integration | scroll indicators', function() {
  componentModule('rendering', function() {
    test('it renders horizontal indicators appropriately', async function(assert) {
      this.set('scrollIndicators', 'horizontal');

      await generateTable(this, {
        columnCount: 30,
      });

      assert.true(
        table.isScrollIndicatorRendered('right'),
        'right scroll indicator is initially shown'
      );
      assert.false(
        table.isScrollIndicatorRendered('left'),
        'left scroll indicator is not initially shown'
      );

      // scroll horizontally just a little bit
      await scrollTo('[data-test-ember-table-overflow]', 1, 0);

      assert.true(
        table.isScrollIndicatorRendered('right'),
        'right scroll indicator is shown during partial scroll'
      );
      assert.true(
        table.isScrollIndicatorRendered('left'),
        'left scroll indicator is shown during partial scroll'
      );

      // scroll horizontally to the end
      await scrollTo('[data-test-ember-table-overflow]', SCROLL_MAX, 0);

      assert.false(
        table.isScrollIndicatorRendered('right'),
        'right scroll indicator is not shown at end of scroll'
      );
      assert.true(
        table.isScrollIndicatorRendered('left'),
        'left scroll indicator is still shown at end of scroll'
      );
    });

    test('it renders vertical scroll indicators appropriately', async function(assert) {
      this.set('scrollIndicators', 'vertical');

      await generateTable(this, {
        rowCount: 100,
      });

      assert.true(
        table.isScrollIndicatorRendered('bottom'),
        'bottom scroll indicator is initially shown'
      );
      assert.false(
        table.isScrollIndicatorRendered('top'),
        'top scroll indicator is not initially shown'
      );

      // scroll vertically just a little bit
      await scrollTo('[data-test-ember-table-overflow]', 0, 1);

      assert.true(
        table.isScrollIndicatorRendered('top'),
        'top scroll indicator is shown during partial scroll'
      );
      assert.true(
        table.isScrollIndicatorRendered('bottom'),
        'bottom scroll indicator is shown during partial scroll'
      );

      // scroll vertically to the end
      await scrollTo('[data-test-ember-table-overflow]', 0, SCROLL_MAX);

      assert.false(
        table.isScrollIndicatorRendered('bottom'),
        'bottom scroll indicator is not shown at end of scroll'
      );
      assert.true(
        table.isScrollIndicatorRendered('top'),
        'top scroll indicator is still shown at end of scroll'
      );
    });

    test('horizontal scroll indicators respect fixed columns', async function(assert) {
      this.set('scrollIndicators', 'horizontal');

      await generateTable(this, {
        columnCount: 30,
        rowCount: 100,
        columnOptions: {
          fixedLeftCount: 1,
          fixedRightCount: 1,
          width: 100,
        },
      });

      assert.true(
        table.isScrollIndicatorRendered('right'),
        'right scroll indicator is initially shown'
      );
      assert.true(isOffset('right', 100), 'right scroll indicator is offset');
      assert.false(
        table.isScrollIndicatorRendered('left'),
        'left scroll indicator is not initially shown'
      );

      // scroll horizontally just a little bit
      await scrollTo('[data-test-ember-table-overflow]', 1, 0);

      assert.true(
        table.isScrollIndicatorRendered('right'),
        'right scroll indicator is shown during partial scroll'
      );
      assert.true(isOffset('right', 100), 'right scroll indicator is offset');
      assert.true(
        table.isScrollIndicatorRendered('left'),
        'left scroll indicator is shown during partial scroll'
      );
      assert.true(isOffset('left', 100), 'left scroll indicator is offset');

      // scroll horizontally to the end
      await scrollTo('[data-test-ember-table-overflow]', SCROLL_MAX, 0);

      assert.false(
        table.isScrollIndicatorRendered('right'),
        'right scroll indicator is not shown at end of scroll'
      );
      assert.true(
        table.isScrollIndicatorRendered('left'),
        'left scroll indicator is still shown at end of scroll'
      );
      assert.true(isOffset('left', 100), 'left scroll indicator is offset');
    });

    test('top scroll indicator positioned below header', async function(assert) {
      this.set('scrollIndicators', 'vertical');

      await generateTable(this, {
        rowCount: 100,
        columnOptions: {
          subcolumnCount: 1,
        },
      });

      // scroll down a little bit
      await scrollTo('[data-test-ember-table-overflow]', 0, 1);

      assert.true(isOffset('top', table.header.height), 'top indicator is below header');
    });

    test('bottom scroll indicator positioned above non-scrollable footer', async function(assert) {
      this.set('scrollIndicators', 'vertical');

      await generateTable(this, {
        rowCount: 100,
        footerRowCount: 2,
      });

      assert.true(
        isOffset('bottom', table.footer.height),
        'bottom indicator is above footer initially'
      );

      // scroll almost to bottom
      let overflow = await table.overflow();
      let maxScroll = overflow.scrollHeight - overflow.clientHeight;
      await scrollTo('[data-test-ember-table-overflow]', 0, maxScroll * 0.9);

      assert.true(
        isOffset('bottom', table.footer.height),
        'bottom indicator is above footer after scrolling'
      );
    });

    test('bottom scroll indicator positioned above scrollable footer', async function(assert) {
      this.set('scrollIndicators', 'vertical');

      await generateTable(this, {
        rowCount: 100,
        footerRowCount: 100,
      });

      let visibleFooterHeight = table.visibleFooterHeight();

      assert.true(
        isOffset('bottom', visibleFooterHeight),
        'bottom indicator is positioned above footer initially'
      );

      // scroll more than half way, but not all the way; because there are an
      // equal number of rows in body and footer, this guarantees that more
      // footer will be visible
      let overflow = await table.overflow();
      let maxScroll = overflow.scrollHeight - overflow.clientHeight;
      await scrollTo('[data-test-ember-table-overflow]', 0, maxScroll * 0.75);

      assert.true(
        isOffset('bottom', 0),
        'bottom indicator is positioned at bottom of table when footer scrolls'
      );
    });

    test('negative table margins do not break scroll indicators', async function(assert) {
      this.set('scrollIndicators', 'all');

      await generateTable(this, {
        columnCount: 30,
        rowCount: 100,
      });

      let tableElement = await findElement(table, 'table');

      // negative margins push the edges of table outside of overflow
      tableElement.style.margin = '-1px';

      // scroll just a little bit and back to upper-left to reset indicators
      await scrollTo('[data-test-ember-table-overflow]', 1, 1);
      await scrollTo('[data-test-ember-table-overflow]', 0, 0);

      assert.false(table.isScrollIndicatorRendered('left'), 'left scroll indicator is not shown');

      assert.false(table.isScrollIndicatorRendered('top'), 'top scroll indicator is not shown');

      // scroll all the way to bottom-right
      await scrollTo('[data-test-ember-table-overflow]', SCROLL_MAX, SCROLL_MAX);

      assert.false(table.isScrollIndicatorRendered('right'), 'right scroll indicator is not shown');

      assert.false(
        table.isScrollIndicatorRendered('bottom'),
        'bottom scroll indicator is not shown'
      );
    });
  });
});
