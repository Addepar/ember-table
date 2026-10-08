---
order: 3
---

# Fixed Columns

Columns can be fixed to the left or the right side of a table by setting the
`isFixed` property on the column to `'left'` or `'right'`. Only root columns
may be fixed, subcolumns will ignore their own `isFixed` property and use their
parent's value instead.

```gjs preview
import { EmberTable } from 'ember-table';
import { generateRows } from 'test-app/utils/generators';

const rows = generateRows(100);

const columns = [
  { name: 'A', valuePath: 'A', isFixed: 'left' },
  { name: 'B', valuePath: 'B' },
  { name: 'C', valuePath: 'C' },
  { name: 'D', valuePath: 'D' },
  { name: 'E', valuePath: 'E' },
  { name: 'F', valuePath: 'F' },
  { name: 'G', valuePath: 'G' },
  { name: 'H', valuePath: 'H' },
  { name: 'I', valuePath: 'I' },
  { name: 'J', valuePath: 'J' },
  { name: 'K', valuePath: 'K', isFixed: 'right' },
];

<template>
  <div class="demo-container small">
    <EmberTable as |t|>
      <t.head @columns={{columns}} />

      <t.body @rows={{rows}} />
    </EmberTable>
  </div>
</template>
```

## Multiple Fixed Columns and Ordering

Multiple columns may be fixed to either side of the table. Fixed columns _must_
be placed contiguously at the start or end of the `columns` array. If columns
are marked as fixed and are out of order, Ember Table will sort the columns
array directly to fix the ordering.

```gjs preview
import { EmberTable } from 'ember-table';
import { generateRows } from 'test-app/utils/generators';

const rows = generateRows(100);

const columns = [
  { name: 'A', valuePath: 'A', isFixed: 'right' },
  { name: 'B', valuePath: 'B' },
  { name: 'C', valuePath: 'C' },
  { name: 'D', valuePath: 'D', isFixed: 'left' },
  { name: 'E', valuePath: 'E' },
  { name: 'F', valuePath: 'F' },
  { name: 'G', valuePath: 'G' },
  { name: 'H', valuePath: 'H', isFixed: 'right' },
  { name: 'I', valuePath: 'I' },
  { name: 'J', valuePath: 'J' },
  { name: 'K', valuePath: 'K', isFixed: 'left' },
];

<template>
  <div class="demo-container small">
    <EmberTable as |t|>
      <t.head @columns={{columns}} />

      <t.body @rows={{rows}} />
    </EmberTable>
  </div>
</template>
```

## Dynamic Fixed Columns

Fixed positioning can be changed at any time, the below example demonstrates how
you can make fixed columns toggleable for your users. Update `isFixed` with
Ember's `set` so the table observes the change.

```gjs preview
import { A } from '@ember/array';
import { set } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { EmberTable } from 'ember-table';
import { generateRows } from 'test-app/utils/generators';

const rows = generateRows(100);

const columns = A([
  { name: 'A', valuePath: 'A' },
  { name: 'B', valuePath: 'B' },
  { name: 'C', valuePath: 'C' },
  { name: 'D', valuePath: 'D' },
  { name: 'E', valuePath: 'E' },
  { name: 'F', valuePath: 'F' },
  { name: 'G', valuePath: 'G' },
  { name: 'H', valuePath: 'H' },
  { name: 'I', valuePath: 'I' },
  { name: 'J', valuePath: 'J' },
  { name: 'K', valuePath: 'K' },
]);

function toggleFixed(column) {
  set(column, 'isFixed', column.isFixed ? false : 'left');
}

function isFixedLeft(column) {
  return column.isFixed === 'left';
}

<template>
  <div class="demo-container small">
    <EmberTable as |t|>
      <t.head @columns={{columns}} as |h|>
        <h.row as |r|>
          <r.cell as |column|>
            <input
              type="checkbox"
              aria-label="Fix column {{column.name}}"
              checked={{isFixedLeft column}}
              {{on "click" (fn toggleFixed column)}}
            />

            {{column.name}}
          </r.cell>
        </h.row>
      </t.head>

      <t.body @rows={{rows}} />
    </EmberTable>
  </div>
</template>
```
