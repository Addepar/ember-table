---
order: 6
---

# Scroll Indicators

Set the `scrollIndicators` argument to `all`, `horizontal`, `vertical`, or `none` to
shade the edges of the table where the user can scroll to see more data.
These indicators will show/hide when there is content overflowing in their
respective direction.

```gjs preview
import { EmberTable } from 'ember-table';
import { generateRows } from 'test-app/utils/generators';

const rows = generateRows(100);

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'].map(name => ({
  name,
  valuePath: name,
}));

<template>
  <div class="demo-container">
    <EmberTable as |t|>
      <t.head @columns={{columns}} @scrollIndicators="all" />
      <t.body @rows={{rows}} />
    </EmberTable>
  </div>
</template>
```

## Horizontal Scroll Indicators with Fixed Columns

Horizontal indicators will respect fixed columns, appearing inside of
them when they are present, or at the edges of the table when they are not.

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
  <div class="demo-container">
    <EmberTable as |t|>
      <t.head @columns={{columns}} @scrollIndicators="horizontal" />
      <t.body @rows={{rows}} />
    </EmberTable>
  </div>
</template>
```

## Vertical Scroll Indicators with a Header & Footer

Vertical scroll indicators respect both headers and footers, appearing just
inside any sticky rows at the top or bottom of the table.

```gjs preview
import { EmberTable } from 'ember-table';
import { generateRows } from 'test-app/utils/generators';

const rows = generateRows(100);

const footerRows = generateRows(100, 1, (row, key) =>
  String.fromCharCode(key.charCodeAt(0) + 7)
);

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'].map(name => ({
  name,
  valuePath: name,
}));

<template>
  <div class="demo-container">
    <EmberTable as |t|>
      <t.head @columns={{columns}} @scrollIndicators="vertical" />
      <t.body @rows={{rows}} />
      <t.foot @rows={{footerRows}} as |f|>
        <f.row />
      </t.foot>
    </EmberTable>
  </div>
</template>
```
