---
order: 2
---

# Subcolumns

Columns can have an array of `subcolumns`, which should be objects that are
exactly the same as any other column. Subcolumns can have their own subcolumns,
and when rendering the rows of the table, cells will be matched up with the
lowest level of subcolumns (the leaves of the column tree). This means that
`valuePath` is optional for columns that have subcolumns.

```gjs preview
import { EmberTable } from 'ember-table';
import { generateRows } from 'test-app/utils/generators';

const rows = generateRows(100);

const columns = [
  {
    name: 'A',
    subcolumns: [
      { name: 'A A', valuePath: 'A A' },
      { name: 'A B', valuePath: 'A B' },
      { name: 'A C', valuePath: 'A C' },
    ],
  },
  {
    name: 'B',
    subcolumns: [
      { name: 'B A', valuePath: 'B A' },
      { name: 'B B', valuePath: 'B B' },
      { name: 'B C', valuePath: 'B C' },
    ],
  },
  {
    name: 'C',
    subcolumns: [
      { name: 'C A', valuePath: 'C A' },
      { name: 'C B', valuePath: 'C B' },
      { name: 'C C', valuePath: 'C C' },
    ],
  },
];

<template>
  <div class="demo-container small" data-test-demo="docs-example-subcolumns">
    <EmberTable as |t|>
      <t.head @columns={{columns}} />

      <t.body @rows={{rows}} />
    </EmberTable>
  </div>
</template>
```

## Resizing and Reordering

Subcolumns can be resized like any other column. When resizing a column with
subcolumns, changes in width will be spread throughout the subcolumns.
Subcolumns can only be reordered within their group - it is not currently
possible to reorder move columns around arbitrarily.

Columns do not need to have the same numbers of subcolumns, they can mix and
match as much as you would like. This table's columns have generated completely
randomly, demonstrating the flexibility of subcolumns.

```gjs preview
import { A } from '@ember/array';
import { EmberTable } from 'ember-table';
import { generateRows, generateColumn } from 'test-app/utils/generators';

const COLUMN_COUNT = 4;

function generateComplexColumns() {
  let columns = A();

  for (let i = 0; i < COLUMN_COUNT; i++) {
    let column = generateColumn(i, { subcolumns: [] });

    if (Math.random() > 0.5) {
      for (let j = 0; j < COLUMN_COUNT - 1; j++) {
        let subcolumn = generateColumn([i, j], { subcolumns: [] });

        if (Math.random() > 0.5) {
          for (let k = 0; k < COLUMN_COUNT - 2; k++) {
            subcolumn.subcolumns.push(generateColumn([i, j, k]));
          }
        }

        column.subcolumns.push(subcolumn);
      }
    }

    columns.pushObject(column);
  }

  return columns;
}

const rows = generateRows(100);
const columns = generateComplexColumns();

<template>
  <div class="demo-container">
    <EmberTable as |t|>
      <t.head @columns={{columns}} />

      <t.body @rows={{rows}} />
    </EmberTable>
  </div>
</template>
```
