---
order: 2
---

# Table Customization

There are two main ways to customize tables:

1. Customizing the cell templates
2. Customizing the table elements (`thead`, `tbody`, `tr`, `td`, etc)

Ember Table provides ways to customize both of these.

## Cell Templates

Tables yield down to the cell level, meaning you can customize the template of
each cell through yielding alone. No need to pass in components or specify
lookup paths:

```gjs preview
import { EmberTable } from 'ember-table';
import { generateRows } from 'test-app/utils/generators';

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((name) => ({
  name,
  valuePath: name,
}));

const rows = generateRows(100);

<template>
  <div class="demo-container">
    <EmberTable as |t|>
      <t.head @columns={{columns}} as |h|>
        <h.row as |r|>
          <r.cell as |column|>
            Custom Header {{column.name}}
          </r.cell>
        </h.row>
      </t.head>

      <t.body @rows={{rows}} as |b|>
        <b.row as |r|>
          <r.cell as |value|>
            Custom Cell {{value}}
          </r.cell>
        </b.row>
      </t.body>
    </EmberTable>
  </div>
</template>
```

If you want to customize a header cell but still want to include the elements to sort and
to resize a column, use the `EmberThSortIndicator` and `EmberThResizeHandle`
components:

```gjs preview
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { EmberTable, EmberThResizeHandle, EmberThSortIndicator } from 'ember-table';
import { getRandomInt } from 'test-app/utils/generators';

const DEPARTMENTS = ['Books', 'Garden', 'Grocery', 'Music', 'Outdoors', 'Toys'];

function generateSalesRows() {
  let rows = [];

  for (let i = 0; i < 5; i++) {
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

export default class SortableHeaders extends Component {
  @tracked showSortIndicator = true;
  @tracked showResizeHandle = true;
  @tracked sorts = [];

  columns = [
    { name: 'Company ▸ Department ▸ Product', valuePath: 'name' },
    { name: 'Price', valuePath: 'price' },
    { name: 'Sold', valuePath: 'sold' },
    { name: 'Unsold', valuePath: 'unsold' },
    { name: 'Total Revenue', valuePath: 'totalRevenue' },
  ];

  rows = generateSalesRows();

  @action toggleSortIndicator() {
    this.showSortIndicator = !this.showSortIndicator;
  }

  @action toggleResizeHandle() {
    this.showResizeHandle = !this.showResizeHandle;
  }

  @action updateSorts(sorts) {
    this.sorts = sorts;
  }

  <template>
    <div class="demo-options">
      <label>
        <input
          type="checkbox"
          checked={{this.showSortIndicator}}
          {{on "click" this.toggleSortIndicator}}
        />
        Show Sort Indicator
        <span class="small">(Click header to sort)</span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={{this.showResizeHandle}}
          {{on "click" this.toggleResizeHandle}}
        />
        Show Resize Handle <span class="small">(Only appears on hover)</span>
      </label>
    </div>
    <div class="demo-container">
      <EmberTable as |t|>
        <t.head
          @columns={{this.columns}}
          @sorts={{this.sorts}}
          @onUpdateSorts={{this.updateSorts}}
          @widthConstraint="gte-container"
          @fillMode="first-column"
          as |h|
        >
          <h.row as |r|>
            <r.cell as |columnValue columnMeta|>
              {{#if this.showSortIndicator}}
                <EmberThSortIndicator @columnMeta={{columnMeta}} />
              {{/if}}
              {{columnValue.name}}
              {{#if this.showResizeHandle}}
                <EmberThResizeHandle @columnMeta={{columnMeta}} />
              {{/if}}
            </r.cell>
          </h.row>
        </t.head>

        <t.body @rows={{this.rows}} />
      </EmberTable>
    </div>
  </template>
}
```

Oftentimes you'll want to provide custom components for use in table headers,
cells, and footers. It's also pretty common to want different types of
components used in each column. Ember Table solves this by passing the
unadulterated column definition to each cell, which gives you a place to put
information about the cell, including the component it should use.

Because column definitions can hold component references directly, you can
invoke a different component per cell:

```gjs preview
import { EmberTable } from 'ember-table';
import { generateRows } from 'test-app/utils/generators';

const CustomHeader = <template>
  <div class="custom-header bg-{{@color}}">
    Column {{yield}}
  </div>
</template>;

const CustomCell = <template>
  <div class="custom-header text-{{@color}}">
    Cell {{yield}}
  </div>
</template>;

const columns = [
  { heading: 'A', valuePath: 'A', headerComponent: CustomHeader, cellComponent: CustomCell, color: 'blue' },
  { heading: 'B', valuePath: 'B' },
  { heading: 'C', valuePath: 'C', headerComponent: CustomHeader, cellComponent: CustomCell, color: 'aqua' },
  { heading: 'D', valuePath: 'D' },
  { heading: 'E', valuePath: 'E', headerComponent: CustomHeader, cellComponent: CustomCell, color: 'orange' },
  { heading: 'F', valuePath: 'F' },
  { heading: 'G', valuePath: 'G', headerComponent: CustomHeader, cellComponent: CustomCell, color: 'maroon' },
];

const rows = generateRows(100);

<template>
  <div class="demo-container small">
    <EmberTable as |t|>
      <t.head @columns={{columns}} as |h|>
        <h.row as |r|>
          <r.cell as |column|>
            {{#if column.headerComponent}}
              <column.headerComponent @color={{column.color}}>
                {{column.heading}}
              </column.headerComponent>
            {{else}}
              {{column.heading}}
            {{/if}}
          </r.cell>
        </h.row>
      </t.head>

      <t.body @rows={{rows}} as |b|>
        <b.row as |r|>
          <r.cell as |cell column|>
            {{#if column.cellComponent}}
              <column.cellComponent @color={{column.color}}>
                {{cell}}
              </column.cellComponent>
            {{else}}
              {{cell}}
            {{/if}}
          </r.cell>
        </b.row>
      </t.body>
    </EmberTable>
  </div>
</template>
```

It is also possible to customize the cell templates based on details of the row
itself. The row is also passed to cells (but not headers, which don't have
rows), allowing us to customize the template in the same way as columns:

```gjs preview
import { EmberTable } from 'ember-table';

const CustomCell = <template>
  <div class="custom-header text-{{@color}}">
    Cell {{yield}}
  </div>
</template>;

const COLORS = ['navy', 'blue', 'aqua', 'teal', 'orange', 'red', 'maroon'];

const columns = [
  { name: 'Column A', valuePath: 'A' },
  { name: 'Column B', valuePath: 'B' },
  { name: 'Column C', valuePath: 'C' },
  { name: 'Column D', valuePath: 'D' },
];

const rows = Array.from({ length: 28 }, (_, i) => ({
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  cellComponent: CustomCell,
  color: COLORS[i % COLORS.length],
}));

<template>
  <div class="demo-container small">
    <EmberTable as |t|>
      <t.head @columns={{columns}} />

      <t.body @rows={{rows}} as |b|>
        <b.row as |r|>
          <r.cell as |cell column row|>
            <row.cellComponent @color={{row.color}}>
              {{cell}}
            </row.cellComponent>
          </r.cell>
        </b.row>
      </t.body>
    </EmberTable>
  </div>
</template>
```

## Table Components

Usually customizing table cells is all the flexibility you need. Sometimes
however it makes more sense to customize the actual table elements themselves.
Each level of the table can access the API object passed to it to do this,
so for instance row components can be customized using the row value, and
cell components can be customized using the cell value, column value, or row
value. Pass extra CSS classes to table elements with the `@class` argument:

```gjs preview
import { EmberTable } from 'ember-table';

const columns = [
  { name: 'A', valuePath: 'A', width: 180 },
  { name: 'B', valuePath: 'B', width: 180, isSelected: true },
  { name: 'C', valuePath: 'C', width: 180 },
  { name: 'D', valuePath: 'D', width: 180 },
];

const leaf = () => ({ A: 'A', B: 'B', C: 'C', D: 'D' });

const rows = Array.from({ length: 3 }, () => ({
  ...leaf(),
  children: [leaf(), leaf(), leaf()],
}));

<template>
  <div class="demo-container small">
    <EmberTable as |t|>
      <t.head @columns={{columns}} as |h|>
        <h.row as |r|>
          <r.cell @class={{if r.columnValue.isSelected "is-column-selected"}} as |column|>
            {{column.name}}
          </r.cell>
        </h.row>
      </t.head>

      <t.body @rows={{rows}} as |b|>
        <b.row @class={{if b.rowValue.children "has-children"}} as |r|>
          <r.cell @class={{if r.columnValue.isSelected "is-column-selected"}} as |cell|>
            {{cell}}
          </r.cell>
        </b.row>
      </t.body>
    </EmberTable>
  </div>
</template>
```

Table components also implement typical event handlers, such as `onClick` and
`onDoubleClick`. In general, it's not recommended that you extend table
components and is not considered public API to do so. If you would like extra
functionality added to table components, open an issue on Github!
