import { module, test } from 'ember-qunit';

import { generateTable } from '../../helpers/generate-table';
import { componentModule } from '../../helpers/module';

import { findAll } from 'ember-native-dom-helpers';

import TablePage from 'ember-table/test-support/pages/ember-table';

let table = new TablePage();

function checkRowOrder(table, expectedRowOrder) {
  let rowOrderCorrect = true;

  table.rows.forEach((r, i) => {
    rowOrderCorrect = rowOrderCorrect && r.text === expectedRowOrder[i];
  });

  return rowOrderCorrect;
}

module('Integration | sort', function() {
  componentModule('basic', function() {
    test('can sort a column', async function(assert) {
      let columns = [
        {
          name: 'Name',
          valuePath: 'name',
        },
      ];

      let rows = [{ name: 'Zoe' }, { name: 'Alex' }, { name: 'Liz' }];

      await generateTable(this, { columns, rows });

      let firstHeader = table.headers.objectAt(0);

      assert.ok(firstHeader.isSortable, 'sort class applied correctly');
      assert.ok(checkRowOrder(table, ['Zoe', 'Alex', 'Liz']));

      await firstHeader.click();
      assert.ok(checkRowOrder(table, ['Zoe', 'Liz', 'Alex']));

      await firstHeader.click();
      assert.ok(checkRowOrder(table, ['Alex', 'Liz', 'Zoe']));

      await firstHeader.click();
      assert.ok(checkRowOrder(table, ['Zoe', 'Alex', 'Liz']));
    });

    test('can sort a second column', async function(assert) {
      let columns = [
        {
          name: 'Name',
          valuePath: 'name',
        },
        {
          name: 'Age',
          valuePath: 'age',
        },
      ];

      let rows = [{ name: 'Zoe', age: 34 }, { name: 'Alex', age: 43 }, { name: 'Liz', age: 25 }];

      await generateTable(this, { columns, rows });

      let firstHeader = table.headers.objectAt(0);
      let secondHeader = table.headers.objectAt(1);

      assert.ok(checkRowOrder(table, ['Zoe 34', 'Alex 43', 'Liz 25']));

      await firstHeader.click();
      assert.ok(checkRowOrder(table, ['Zoe 34', 'Liz 25', 'Alex 43']));

      await secondHeader.click();
      assert.ok(checkRowOrder(table, ['Alex 43', 'Zoe 34', 'Liz 25']));
    });

    test('can sort empty values', async function(assert) {
      let columns = [
        {
          name: 'Name',
          valuePath: 'name',
        },
      ];

      let rows = [{ name: 'Zoe' }, { name: '' }, { name: 'Alex' }];

      await generateTable(this, { columns, rows });

      let firstHeader = table.headers.objectAt(0);

      assert.ok(firstHeader.isSortable, 'sort class applied correctly');
      assert.ok(checkRowOrder(table, ['Zoe', '', 'Alex']), 'initial render is ok');

      await firstHeader.click();
      assert.ok(checkRowOrder(table, ['Zoe', 'Alex', '']), 'descending sort works');

      await firstHeader.click();
      assert.ok(checkRowOrder(table, ['', 'Alex', 'Zoe']), 'ascending sort works');

      await firstHeader.click();
      assert.ok(checkRowOrder(table, ['Zoe', '', 'Alex']), '3rd state / initial state works');
    });

    test('can sort empty values last', async function(assert) {
      let columns = [
        {
          name: 'Name',
          valuePath: 'name',
        },
      ];

      let rows = [{ name: 'Zoe' }, { name: '' }, { name: 'Alex' }];

      await generateTable(this, { columns, rows, sortEmptyLast: true });

      let firstHeader = table.headers.objectAt(0);

      assert.ok(firstHeader.isSortable, 'sort class applied correctly');
      assert.ok(checkRowOrder(table, ['Zoe', '', 'Alex']), 'initial render is ok');

      await firstHeader.click();
      assert.ok(checkRowOrder(table, ['Zoe', 'Alex', '']), 'descending sort works');

      await firstHeader.click();
      assert.ok(checkRowOrder(table, ['Alex', 'Zoe', '']), 'ascending sort works');

      await firstHeader.click();
      assert.ok(checkRowOrder(table, ['Zoe', '', 'Alex']), '3rd state / initial state works');
    });

    test('sends the onUpdateSorts action', async function(assert) {
      this.on('onUpdateSorts', sorts => {
        assert.equal(sorts.length, 1);
        assert.equal(sorts[0].valuePath, 'name');
        assert.equal(sorts[0].isAscending, false);
      });

      let columns = [
        {
          name: 'Name',
          valuePath: 'name',
        },
      ];

      let rows = [{ name: 'Zoe' }, { name: 'Alex' }, { name: 'Liz' }];

      await generateTable(this, { columns, rows });

      let firstHeader = table.headers.objectAt(0);

      await firstHeader.click();
    });

    test('sort indicator works', async function(assert) {
      await generateTable(this);

      let firstHeader = table.headers.objectAt(0);

      assert.ok(!firstHeader.sortIndicator.isPresent);

      await firstHeader.click();

      assert.ok(firstHeader.sortIndicator.isPresent);
      assert.ok(firstHeader.sortIndicator.isDescending);

      await firstHeader.click();

      assert.ok(firstHeader.sortIndicator.isPresent);
      assert.ok(firstHeader.sortIndicator.isAscending);

      await firstHeader.click();

      assert.ok(!firstHeader.sortIndicator.isPresent);
    });

    test('sort indicator works on second column', async function(assert) {
      await generateTable(this);

      let firstHeader = table.headers.objectAt(0);
      let secondHeader = table.headers.objectAt(1);

      assert.ok(!firstHeader.sortIndicator.isPresent);
      assert.ok(!secondHeader.sortIndicator.isPresent);

      await firstHeader.click();

      assert.ok(firstHeader.sortIndicator.isPresent);
      assert.ok(firstHeader.sortIndicator.isDescending);

      await secondHeader.click();

      assert.ok(!firstHeader.sortIndicator.isPresent);
      assert.ok(secondHeader.sortIndicator.isPresent);
      assert.ok(secondHeader.sortIndicator.isDescending);
    });

    test('can sort multiple columns', async function(assert) {
      let columns = [
        {
          name: 'Name',
          valuePath: 'name',
        },
        {
          name: 'Age',
          valuePath: 'age',
        },
      ];

      let rows = [
        { name: 'Zoe', age: 34 },
        { name: 'Alex', age: 34 },
        { name: 'Zoe', age: 25 },
        { name: 'Zoe', age: 27 },
      ];

      await generateTable(this, { columns, rows });

      let firstHeader = table.headers.objectAt(0);
      let secondHeader = table.headers.objectAt(1);

      assert.ok(
        checkRowOrder(table, ['Zoe 34', 'Alex 34', 'Zoe 25', 'Zoe 27']),
        'initial order is correct'
      );

      await firstHeader.click();
      assert.ok(
        checkRowOrder(table, ['Zoe 34', 'Zoe 25', 'Zoe 27', 'Alex 34']),
        'sorting by one column is correct'
      );
      assert.equal(
        firstHeader.sortIndicator.text,
        '',
        'sort indicators do not show number well sorted by a single column'
      );

      await secondHeader.clickWith({ metaKey: true });
      assert.ok(
        checkRowOrder(table, ['Zoe 34', 'Zoe 27', 'Zoe 25', 'Alex 34']),
        'sorting by second column is correct'
      );
      assert.equal(firstHeader.sortIndicator.text, '1', 'sort indicators show correct number');
      assert.equal(secondHeader.sortIndicator.text, '2', 'sort indicators show correct number');
      assert.ok(firstHeader.sortIndicator.isDescending, 'sort indicators show correct direction');
      assert.ok(secondHeader.sortIndicator.isDescending, 'sort indicators show correct direction');

      await secondHeader.clickWith({ metaKey: true });
      assert.ok(
        checkRowOrder(table, ['Zoe 25', 'Zoe 27', 'Zoe 34', 'Alex 34']),
        'can reverse the order of a secondary column'
      );
      assert.equal(firstHeader.sortIndicator.text, '1', 'sort indicators show correct number');
      assert.equal(secondHeader.sortIndicator.text, '2', 'sort indicators show correct number');
      assert.ok(firstHeader.sortIndicator.isDescending, 'sort indicators show correct direction');
      assert.ok(secondHeader.sortIndicator.isAscending, 'sort indicators show correct direction');

      await firstHeader.clickWith({ metaKey: true });
      assert.ok(
        checkRowOrder(table, ['Zoe 25', 'Zoe 27', 'Alex 34', 'Zoe 34']),
        'can reverse the order of the inital column and push it onto the end of sorts'
      );
      assert.equal(firstHeader.sortIndicator.text, '2', 'sort indicators show correct number');
      assert.equal(secondHeader.sortIndicator.text, '1', 'sort indicators show correct number');
      assert.ok(firstHeader.sortIndicator.isAscending, 'sort indicators show correct direction');
      assert.ok(secondHeader.sortIndicator.isAscending, 'sort indicators show correct direction');

      await secondHeader.clickWith({ metaKey: true });
      assert.ok(
        checkRowOrder(table, ['Alex 34', 'Zoe 34', 'Zoe 25', 'Zoe 27']),
        'can disable a column withot removing all sorts'
      );
      assert.equal(firstHeader.sortIndicator.text, '', 'no sort number shown');
      assert.ok(!secondHeader.sortIndicator.isPresent, 'second sort indicator is gone');
      assert.ok(firstHeader.sortIndicator.isAscending, 'sort indicators show correct direction');
    });

    test('can sort trees', async function(assert) {
      let columns = [
        {
          name: 'Name',
          valuePath: 'name',
        },
      ];

      let rows = [
        {
          name: 'Zoe',
          children: [{ name: 'Zoe' }, { name: 'Alex' }, { name: 'Liz' }],
        },
        {
          name: 'Alex',
          children: [{ name: 'Zoe' }, { name: 'Alex' }, { name: 'Liz' }],
        },
        {
          name: 'Liz',
          children: [{ name: 'Zoe' }, { name: 'Alex' }, { name: 'Liz' }],
        },
      ];

      await generateTable(this, { columns, rows });

      let firstHeader = table.headers.objectAt(0);

      assert.ok(
        checkRowOrder(table, [
          'Zoe',
          'Zoe',
          'Alex',
          'Liz',
          'Alex',
          'Zoe',
          'Alex',
          'Liz',
          'Liz',
          'Zoe',
          'Alex',
          'Liz',
        ])
      );

      await firstHeader.click();
      assert.ok(
        checkRowOrder(table, [
          'Zoe',
          'Zoe',
          'Liz',
          'Alex',
          'Liz',
          'Zoe',
          'Liz',
          'Alex',
          'Alex',
          'Zoe',
          'Liz',
          'Alex',
        ])
      );

      await firstHeader.click();
      assert.ok(
        checkRowOrder(table, [
          'Alex',
          'Alex',
          'Liz',
          'Zoe',
          'Liz',
          'Alex',
          'Liz',
          'Zoe',
          'Zoe',
          'Alex',
          'Liz',
          'Zoe',
        ])
      );

      await firstHeader.click();
      assert.ok(
        checkRowOrder(table, [
          'Zoe',
          'Zoe',
          'Alex',
          'Liz',
          'Alex',
          'Zoe',
          'Alex',
          'Liz',
          'Liz',
          'Zoe',
          'Alex',
          'Liz',
        ])
      );
    });

    test('can disable sorting per column', async function(assert) {
      let columns = [
        {
          name: 'Name',
          valuePath: 'name',
          isSortable: false,
        },
        {
          name: 'Age',
          valuePath: 'age',
        },
      ];

      let rows = [{ name: 'Zoe', age: 34 }, { name: 'Alex', age: 43 }, { name: 'Liz', age: 25 }];

      await generateTable(this, { columns, rows });

      let firstHeader = table.headers.objectAt(0);
      let secondHeader = table.headers.objectAt(1);

      assert.ok(checkRowOrder(table, ['Zoe 34', 'Alex 43', 'Liz 25']));

      await firstHeader.click();
      assert.ok(checkRowOrder(table, ['Zoe 34', 'Alex 43', 'Liz 25']));

      await secondHeader.click();
      assert.ok(checkRowOrder(table, ['Alex 43', 'Zoe 34', 'Liz 25']));
    });

    test('can disable sorting per column by leaving out value path', async function(assert) {
      let columns = [
        {
          name: 'Empty',
        },
        {
          name: 'Name',
          valuePath: 'name',
        },
      ];

      let rows = [{ name: 'Zoe' }, { name: 'Alex' }, { name: 'Liz' }];

      await generateTable(this, { columns, rows });

      assert.equal(findAll('.is-sortable').length, 1, 'only one column is sortable');
    });
  });
});
