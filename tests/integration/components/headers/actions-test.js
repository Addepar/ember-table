import { module, test } from 'ember-qunit';
import { find } from 'ember-native-dom-helpers';
import { A as emberA } from '@ember/array';

import { generateTable } from '../../../helpers/generate-table';
import { componentModule } from '../../../helpers/module';

import TablePage from 'ember-table/test-support/pages/ember-table';

const table = TablePage.create();

module('Integration | header | actions', function() {
  componentModule('basic', function() {
    test('header actions work', async function(assert) {
      assert.expect(4);

      this.on('onDropdownAction', (name, args) => {
        assert.equal(name, 'foo');
        assert.equal(args, 123);
      });

      await generateTable(this, {
        dropdownActions: emberA([
          {
            name: 'foo',
            text: 'Foo',
            args: 123,
          },
        ]),
      });

      let firstHeader = table.headers.eq(0);

      assert.ok(firstHeader.actionDropdown.isPresent);

      await firstHeader.actionDropdown.open();

      let firstAction = firstHeader.actionDropdown.items.eq(0);

      assert.equal(firstAction.text, 'Foo');

      await firstAction.click();
    });

    test('header dividers work', async function(assert) {
      await generateTable(this, {
        dropdownActions: emberA([
          {
            isDivider: true,
          },
        ]),
      });

      let firstHeader = table.headers.eq(0);

      assert.ok(firstHeader.actionDropdown.isPresent);

      await firstHeader.actionDropdown.open();

      let dividerElement = find('.adde-dropdown-menu .list-divider');

      assert.ok(dividerElement, 'divider exists');
    });
  });

  test('sub actions work', async function(assert) {
    assert.expect(5);

    this.on('onDropdownAction', (name, args) => {
      assert.equal(name, 'bar');
      assert.equal(args, 123);
    });

    await generateTable(this, {
      dropdownActions: emberA([
        {
          name: 'foo',
          text: 'Foo',
          subActions: emberA([
            {
              name: 'bar',
              text: 'Bar',
              args: 123,
            },
          ]),
        },
      ]),
    });

    let firstHeader = table.headers.eq(0);

    assert.ok(firstHeader.actionDropdown.isPresent);

    await firstHeader.actionDropdown.open();

    let firstAction = firstHeader.actionDropdown.items.eq(0);
    assert.equal(firstAction.text, 'Foo');

    await firstAction.subDropdown.open();

    let firstSubAction = firstAction.subActions.eq(0);
    assert.equal(firstSubAction.text, 'Bar');

    await firstSubAction.click();
  });
});
