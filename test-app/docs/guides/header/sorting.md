---
order: 5
---

# Sorting

Ember Table ships with sorting built in to the table. Default sorting is a
standard merge sort which does not affect the original ordering of the rows
passed into the table. Users can sort by a column and toggle sort direction by
clicking on its header, and can sort by multiple columns by clicking with `cmd`
or `ctrl`.

```gjs preview
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { EmberTable } from 'ember-table';
import { getRandomInt } from 'test-app/utils/generators';

const DEPARTMENTS = ['Books', 'Garden', 'Music', 'Sports', 'Toys'];

function generateProductTree() {
  let rows = [];

  for (let i = 0; i < getRandomInt(5, 2); i++) {
    let companyRow = {
      name: `Company ${i + 1}`,
      price: 'N/A',
      sold: 0,
      unsold: 0,
      totalRevenue: 0,
      children: [],
    };

    for (let j = 0; j < getRandomInt(5, 2); j++) {
      let departmentRow = {
        name: DEPARTMENTS[j % DEPARTMENTS.length],
        price: 'N/A',
        sold: 0,
        unsold: 0,
        totalRevenue: 0,
        children: [],
      };

      for (let k = 0; k < getRandomInt(100, 10); k++) {
        let sold = getRandomInt(100, 10);
        let unsold = getRandomInt(100, 10);
        let price = getRandomInt(50, 10);
        let totalRevenue = price * sold;

        departmentRow.sold += sold;
        departmentRow.unsold += unsold;
        departmentRow.totalRevenue += totalRevenue;
        departmentRow.children.push({
          name: `Product ${k + 1}`,
          price: `$${price}`,
          sold,
          unsold,
          totalRevenue: `$${totalRevenue}`,
        });
      }

      companyRow.sold += departmentRow.sold;
      companyRow.unsold += departmentRow.unsold;
      companyRow.totalRevenue += departmentRow.totalRevenue;
      departmentRow.totalRevenue = `$${departmentRow.totalRevenue}`;
      companyRow.children.push(departmentRow);
    }

    companyRow.totalRevenue = `$${companyRow.totalRevenue}`;
    rows.push(companyRow);
  }

  return rows;
}

export default class SortingDemo extends Component {
  @tracked sorts = [];

  rows = generateProductTree();

  columns = [
    { name: 'Company ▸ Department ▸ Product', valuePath: 'name' },
    { name: 'Price', valuePath: 'price' },
    { name: 'Sold', valuePath: 'sold' },
    { name: 'Unsold', valuePath: 'unsold' },
    { name: 'Total Revenue', valuePath: 'totalRevenue' },
  ];

  updateSorts = sorts => {
    this.sorts = sorts;
  };

  <template>
    <div class="demo-container">
      <EmberTable as |t|>
        <t.head
          @columns={{this.columns}}
          @sorts={{this.sorts}}
          @onUpdateSorts={{this.updateSorts}}
          @widthConstraint="gte-container"
          @fillMode="first-column"
        />

        <t.body @rows={{this.rows}} />
      </EmberTable>
    </div>
  </template>
}
```

## Activating Sorting

Sorting in tables is a DDAU process - a new sort order is passed to
`onUpdateSorts` and can then be passed back into the table, updating the sort
order. Because sorting cannot occur without the `onUpdateSorts` action, it will
effectively be disabled unless the action is set - headers will not be
clickable, and nothing will change when users select them.

The sort order is passed into the table via the `sorts` argument. This should be
an array of sort objects should correspond to any of the `valuePaths` in the
columns for the table. When multiple sort objects are passed, columns are sorted
by each sort in order:

```js
let sorts = [
  {
    valuePath: 'name',
    isAscending: false,
  },
  {
    valuePath: 'price',
    isAscending: true,
  },
];
```

Note that you can control the sort order externally this way as well, for
instance if you have a different UX than clicking on headers to control the sort
order.

Table headers can be passed a `sortFunction` and `compareFunction` as well. If
you want to sort the content of the table asynchronously, you can unset the
`sortFunction` and handle the async request yourself.

```hbs
<EmberTable as |t|>
  <t.head @sortFunction={{null}} />
</EmberTable>
```

## Disabling Sorting

As mentioned before, sorting is disabled by default unless the table is given an
`onUpdateSorts` action. Sorting can also be disabled by setting the `isSortable`
option on a particular column to `false`:

```js
let columns = [
  {
    valuePath: 'name',
    isSortable: false,
  },
];
```

## Sorting States

By default, when a user repeatedly clicks on a column header to change sorting, ember-table
cycles through these states:

- Unsorted (rows are in the same order as provided to the table)
- Sort Descending
- Sort Ascending

You can use the `onUpdateSorts` action to change this behavior. For example, to cycle through 2 states
(Ascending, Descending) rather than the default 3, you can modify the `onUpdateSorts` action as follows:

- If it is passed an empty `sorts` array, get the current sort array and toggle the `isAscending` property
- If it is passed anything else, set `this.sorts` to the passed-in `sorts` array (default behavior).

This demo shows that in action:

```gjs preview
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { EmberTable } from 'ember-table';
import { getRandomInt } from 'test-app/utils/generators';

function generateProducts() {
  return Array.from({ length: 20 }, (_, i) => {
    let sold = getRandomInt(100, 10);
    let price = getRandomInt(50, 10);
    return {
      name: `Product ${i + 1}`,
      price: `$${price}`,
      sold,
      unsold: getRandomInt(100, 10),
      totalRevenue: `$${price * sold}`,
    };
  });
}

export default class TwoStateSortingDemo extends Component {
  @tracked sorts = [];

  rows = generateProducts();

  columns = [
    { name: 'Product', valuePath: 'name' },
    { name: 'Price', valuePath: 'price' },
    { name: 'Sold', valuePath: 'sold' },
    { name: 'Unsold', valuePath: 'unsold' },
    { name: 'Total Revenue', valuePath: 'totalRevenue' },
  ];

  twoStateSorting = sorts => {
    if (sorts.length > 1) {
      // multi-column sort, default behavior
      this.sorts = sorts;
      return;
    }

    let hasExistingSort = this.sorts.length > 0;
    let isDefaultSort = sorts.length === 0;

    if (hasExistingSort && isDefaultSort) {
      // override empty sorts with reversed previous sort
      let [previous] = this.sorts;
      this.sorts = [{ valuePath: previous.valuePath, isAscending: !previous.isAscending }];
      return;
    }

    this.sorts = sorts;
  };

  <template>
    <div class="demo-container" data-test-demo="docs-example-2-state-sortings">
      <EmberTable as |t|>
        <t.head
          @columns={{this.columns}}
          @sorts={{this.sorts}}
          @onUpdateSorts={{this.twoStateSorting}}
          @widthConstraint="gte-container"
          @fillMode="first-column"
        />

        <t.body @rows={{this.rows}} />
      </EmberTable>
    </div>
  </template>
}
```

## Sorting empty values

Empty values can be treated differently depending on the needs by using the `sortEmptyLast` option.
To see its effect, try sorting the "Material" column in ascending order with and without "sortEmptyLast" checked.

```gjs preview
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { on } from '@ember/modifier';
import { EmberTable } from 'ember-table';
import { getRandomInt } from 'test-app/utils/generators';

const MATERIALS = ['Cotton', 'Granite', 'Plastic', 'Steel', 'Wooden'];

function generateProduct(index, material) {
  let sold = getRandomInt(100, 10);
  let price = getRandomInt(50, 10);
  return {
    name: `Product ${index + 1}`,
    material,
    price: `$${price}`,
    sold,
    unsold: getRandomInt(100, 10),
    totalRevenue: `$${price * sold}`,
  };
}

export default class SortingEmptyValuesDemo extends Component {
  @tracked sorts = [];
  @tracked sortEmptyLast = true;

  rows = [
    ...Array.from({ length: 10 }, (_, i) => generateProduct(i, MATERIALS[i % MATERIALS.length])),
    ...Array.from({ length: 5 }, (_, i) => generateProduct(10 + i, '')),
  ];

  columns = [
    { name: 'Product', valuePath: 'name' },
    { name: 'Material', valuePath: 'material' },
    { name: 'Price', valuePath: 'price' },
    { name: 'Sold', valuePath: 'sold' },
    { name: 'Unsold', valuePath: 'unsold' },
    { name: 'Total Revenue', valuePath: 'totalRevenue' },
  ];

  updateSorts = sorts => {
    this.sorts = sorts;
  };

  toggleSortEmptyLast = event => {
    this.sortEmptyLast = event.target.checked;
  };

  <template>
    <div class="demo-options">
      <label>
        <input
          type="checkbox"
          checked={{this.sortEmptyLast}}
          {{on "change" this.toggleSortEmptyLast}}
        />
        Sort Empty Last
      </label>
    </div>
    <div class="demo-container">
      <EmberTable as |t|>
        <t.head
          @columns={{this.columns}}
          @sorts={{this.sorts}}
          @sortEmptyLast={{this.sortEmptyLast}}
          @onUpdateSorts={{this.updateSorts}}
          @widthConstraint="gte-container"
          @fillMode="first-column"
        />

        <t.body @rows={{this.rows}} />
      </EmberTable>
    </div>
  </template>
}
```
