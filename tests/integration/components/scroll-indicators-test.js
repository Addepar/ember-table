import { module, test } from 'ember-qunit';

import { generateTable } from '../../helpers/generate-table';
import { componentModule } from '../../helpers/module';

import { scrollTo } from 'ember-native-dom-helpers';

import TablePage from 'ember-table/test-support/pages/ember-table';

let table = new TablePage();

module('Integration | scroll indicators', function() {
  componentModule('rendering', function() {
    test('it renders scroll indicators appropriately', async function(assert) {
      this.set('enableScrollIndicators', true);

      await generateTable(this, {
        columnCount: 30,
      });

      assert.equal(
        table.isScrollIndicatorRendered('right'),
        true,
        'right scroll indicator is initially shown'
      );
      assert.equal(
        table.isScrollIndicatorRendered('left'),
        false,
        'left scroll indicator is not initially shown'
      );

      // scroll horizontally just a little bit
      await scrollTo('[data-test-ember-table-overflow]', 100, 0);

      assert.equal(
        table.isScrollIndicatorRendered('right'),
        true,
        'right scroll indicator is shown during partial scroll'
      );
      assert.equal(
        table.isScrollIndicatorRendered('left'),
        true,
        'left scroll indicator is shown during partial scroll'
      );

      // scroll horizontally to the end
      await scrollTo('[data-test-ember-table-overflow]', 999999, 0);

      assert.equal(
        table.isScrollIndicatorRendered('right'),
        false,
        'right scroll indicator is not shown at end of scroll'
      );
      assert.equal(
        table.isScrollIndicatorRendered('left'),
        true,
        'left scroll indicator is still shown at end of scroll'
      );
    });

    test('scroll indicators respect fixed columns', async function(assert) {
      this.set('enableScrollIndicators', true);

      await generateTable(this, {
        columnCount: 30,
        columnOptions: {
          fixedLeftCount: 1,
          fixedRightCount: 1,
          width: 100,
        },
      });

      function isOffset(side, distance) {
        let element = table.scrollIndicator(side);
        return getComputedStyle(element)[side] === `${distance}px`;
      }

      assert.equal(
        table.isScrollIndicatorRendered('right'),
        true,
        'right scroll indicator is initially shown'
      );
      assert.ok(isOffset('right', 100), 'right scroll indicator is offset');
      assert.equal(
        table.isScrollIndicatorRendered('left'),
        false,
        'left scroll indicator is not initially shown'
      );

      // scroll horizontally just a little bit
      await scrollTo('[data-test-ember-table-overflow]', 100, 0);

      assert.equal(
        table.isScrollIndicatorRendered('right'),
        true,
        'right scroll indicator is shown during partial scroll'
      );
      assert.ok(isOffset('right', 100), 'right scroll indicator is offset');
      assert.equal(
        table.isScrollIndicatorRendered('left'),
        true,
        'left scroll indicator is shown during partial scroll'
      );
      assert.ok(isOffset('left', 100), 'left scroll indicator is offset');

      // scroll horizontally to the end
      await scrollTo('[data-test-ember-table-overflow]', 999999, 0);

      assert.equal(
        table.isScrollIndicatorRendered('right'),
        false,
        'right scroll indicator is not shown at end of scroll'
      );
      assert.equal(
        table.isScrollIndicatorRendered('left'),
        true,
        'left scroll indicator is still shown at end of scroll'
      );
      assert.ok(isOffset('left', 100), 'left scroll indicator is offset');
    });

    test('right scroll indicators accounts for scrollbar when determining positioning', async function(assert) {
      this.set('enableScrollIndicators', true);
      await generateTable(this, {
        columnCount: 30,
        rowCount: 100, // add rows to get overflow-y
        columnOptions: {
          width: 100,
        },
      });

      /**
       * Use a threshold instead of direct equality
       * based on the test environment the window scrollbar size will vary due to scale/zoom
       */
      function isOffsetAbove(side, minDistance) {
        let element = table.scrollIndicator(side);
        let calculatedDistance = Number(getComputedStyle(element)[side].replace('px', ''));
        return calculatedDistance > minDistance;
      }

      assert.equal(
        table.isScrollIndicatorRendered('right'),
        true,
        'right scroll indicator is initially shown'
      );

      assert.equal(
        table.isScrollIndicatorRendered('left'),
        false,
        'left scroll indicator is not initially shown'
      );

      // a little scroll
      await scrollTo('[data-test-ember-table-overflow]', 150, 0);

      assert.equal(
        table.isScrollIndicatorRendered('left'),
        true,
        'left scroll indicator is shown after scrolling'
      );

      assert.ok(
        isOffsetAbove('right', 0),
        'right scrollbar is offset by the width of the scrollbar'
      );

      // scroll to the end
      await scrollTo('[data-test-ember-table-overflow]', 9999999, 0);

      assert.equal(
        table.isScrollIndicatorRendered('right'),
        false,
        'right scroll indicator is not shown at end of scroll'
      );

      assert.equal(
        table.isScrollIndicatorRendered('left'),
        true,
        'left scroll indicator is shown at end of scroll'
      );
    });

    test('right scroll indicator account for scrollbar in conjunction with frozen rows', async function(assert) {
      this.set('enableScrollIndicators', true);
      await generateTable(this, {
        columnCount: 30,
        rowCount: 357,
        columnOptions: {
          fixedLeftCount: 1,
          fixedRightCount: 1,
          width: 100,
        },
      });

      /**
       * Use a threshold instead of direct equality
       * based on the test environment the window scrollbar size will vary due to scale/zoom
       */
      function isOffsetAbove(side, minDistance) {
        let element = table.scrollIndicator(side);
        let calculatedDistance = Number(getComputedStyle(element)[side].replace('px', ''));
        return calculatedDistance > minDistance;
      }

      assert.equal(
        table.isScrollIndicatorRendered('right'),
        true,
        'right scroll indicator is initially shown'
      );

      assert.equal(
        table.isScrollIndicatorRendered('left'),
        false,
        'left scroll indicator is not initially shown'
      );

      // a little scroll
      await scrollTo('[data-test-ember-table-overflow]', 150, 0);

      assert.equal(
        table.isScrollIndicatorRendered('left'),
        true,
        'left scroll indicator is shown after scrolling'
      );

      assert.ok(
        isOffsetAbove('right', 100),
        'right scrollbar is offset by the width of the scrollbar'
      );

      // scroll to the end
      await scrollTo('[data-test-ember-table-overflow]', 9999999, 0);

      assert.equal(
        table.isScrollIndicatorRendered('right'),
        false,
        'right scroll indicator is not shown at end of scroll'
      );
      assert.equal(
        table.isScrollIndicatorRendered('left'),
        true,
        'left scroll indicator is shown at end of scroll'
      );
    });
  });
});
