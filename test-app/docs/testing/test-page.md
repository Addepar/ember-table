---
title: Table Test Page
---

# Testing Ember Table

## Table Page Object

Ember Table includes a test helper that you can import in your app's acceptance tests and use to interact with a table on the page. The Page helper is built on [`ember-cli-page-object`](https://github.com/san650/ember-cli-page-object), using the class-based API of `ember-classy-page-object` (now included in Ember Table).

To import it:

```js
import { TablePage } from 'ember-table/test-support';
```

Usage:

```js
// ... in an acceptance test:
const table = new TablePage();

assert.strictEqual(table.body.rowCount, 5, 'the table has 5 body rows');
assert.strictEqual(table.header.rows.length, 1, 'the table has 1 row of headers');
assert.strictEqual(table.footer.rows.length, 1, 'the table has 1 row of footers');

await table.selectRow(0); // The first body row is selected
assert.true(table.body.rows.objectAt(0).isSelected, 'first row is selected');
assert.false(table.body.rows.objectAt(1).isSelected, 'second row is not selected');
```

To learn more about the properties that are present on the table page object, refer to [its source](https://github.com/Addepar/ember-table/blob/master/ember-table/src/test-support/pages/ember-table.ts) or
to [its usage in the ember-table tests](https://github.com/Addepar/ember-table/blob/master/test-app/tests/integration/components/basic-test.gts).

To add properties for your own cells, extend it. `ember-table/test-support`
also exports the page object helpers (`PageObject`, `collection`, `hasClass`,
`findElement`, and the other `ember-cli-page-object` properties):

```js
import { TablePage, collection, hasClass } from 'ember-table/test-support';

const table = new TablePage({
  body: {
    rows: collection({
      scope: 'tr',
      isHighlighted: hasClass('is-highlighted'),
    }),
  },
});
```
