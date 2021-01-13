import { module, test } from 'ember-qunit';

import { generateTable } from '../../helpers/generate-table';
import { componentModule } from '../../helpers/module';

import { findElement } from 'ember-classy-page-object/extend';
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

    test('does not show left scroll indicator when table has negative left margin and user scrolls all the way to the left', async function(assert) {
      this.set('enableScrollIndicators', true);

      await generateTable(this, {
        columnCount: 30,
      });

      let tableElement = await findElement(table, 'table');

      // negative margin pushes the left edge of the table outside of overflow
      tableElement.style.marginLeft = '-1px';

      // scroll horizontally just a little bit and back to reset indicators
      await scrollTo('[data-test-ember-table-overflow]', 1, 0);
      await scrollTo('[data-test-ember-table-overflow]', 0, 0);

      assert.equal(
        table.isScrollIndicatorRendered('left'),
        false,
        'left scroll indicator is not shown'
      );
    });
  });
});
