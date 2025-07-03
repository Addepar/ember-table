# Testing Ember Table

## Table Page Object

Ember Table includes a test helper that you can import in your app's acceptance tests and use to interact with a table on the page. The Page helper is based on [`ember-classy-page-object`](https://github.com/pzuraq/ember-classy-page-object).

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

To learn more about the properties that are present on the table page object, refer to [its source](https://github.com/Addepar/ember-table/blob/master/addon-test-support/pages/ember-table.js) or
to [its usage in the ember-table tests](https://github.com/Addepar/ember-table/blob/master/tests/integration/components/basic-test.js).
