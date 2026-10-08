---
order: 3
---

# Table Meta Data

So far you've seen how Ember Table revolves around three central concepts:

1. The `rowValue`, which is one of the rows that are provided to the body
2. The `columnValue`, which is one of the columns that are provided to the
   header
3. The `cellValue`, which is produced by using the `columnValue` to lookup a
   value on the `rowValue`

These are the fundamental building blocks of any table, so it makes sense that
they would be what is given to you when using the table API.

You'll also find that Ember Table provides a meta object that is associated
with each of these. These meta objects are yielded after the main
cell/column/row values at the cell level, and are generally accessible wherever
their corresponding values are:

```hbs
<t.cell as |cell column row cellMeta columnMeta rowMeta rowsCount|>
```

## What are meta objects?

The meta objects are unique objects that are associated with a corresponding
value. That is to say, for every `cell`, `column`, and `row` in the table, there
are corresponding `cellMeta`, `columnMeta`, and `rowMeta` objects.

`columnMeta` and `rowMeta` objects are used by the table to accomplish some
internal bookkeeping such as collapse and selection state, but you are free to
use these objects to store whatever meta information you would like in the
table.

`rowsCount` is also yielded by the cell component. This count is a reflection
of how many rows the user can currently see by scrolling through the table. It
is typically smaller than the total number of rows passed into, say, the
`ember-tbody` component, because it excludes rows that have been hidden by
collapsing a parent.

## What are they used for?

Complex data tables have lots of functionality that requires some amount of
state to be tracked. This state is generally unique to the table, and oftentimes
related to a particular cell, column, or row. A good example of this is cell
selection, like in Excel.

When you click a cell in Excel, the row, column, and cell are all marked as
active to show the user where they are in the table. Ember Table does _not_ have
this functionality out of the box - let's see how we would implement it with
meta objects:

```gjs preview
import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { EmberTable } from 'ember-table';
import { generateRows } from 'test-app/utils/generators';

export default class CellSelection extends Component {
  columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((name) => ({
    name,
    valuePath: name,
  }));

  rows = generateRows(100);

  _lastSelection = null;

  @action setSelected(cellMeta, columnMeta, rowMeta) {
    // If we have selected before, unselect the previous selection
    if (this._lastSelection) {
      for (let meta of this._lastSelection) {
        set(meta, 'selected', false);
      }
    }

    // Set selection on the meta objects
    for (let meta of [cellMeta, columnMeta, rowMeta]) {
      set(meta, 'selected', true);
    }

    // Store the meta objects to unset in the future
    this._lastSelection = [cellMeta, columnMeta, rowMeta];
  }

  <template>
    <div class="demo-container small">
      <EmberTable as |t|>
        <t.head @columns={{this.columns}} as |h|>
          <h.row as |r|>
            <r.cell @class={{if r.columnMeta.selected "is-column-selected"}} as |column|>
              {{column.name}}
            </r.cell>
          </h.row>
        </t.head>

        <t.body @rows={{this.rows}} as |b|>
          <b.row @class={{if b.rowMeta.selected "is-row-selected"}} as |r|>
            <r.cell
              @class="{{if r.cellMeta.selected 'is-cell-selected'}} {{if r.columnMeta.selected 'is-column-selected'}}"
              as |cell column row cellMeta columnMeta rowMeta|
            >
              {{! template-lint-disable no-invalid-interactive }}
              <div
                class="cell-content"
                {{on "click" (fn this.setSelected cellMeta columnMeta rowMeta)}}
              >
                {{cell}}
              </div>
            </r.cell>
          </b.row>
        </t.body>
      </EmberTable>
    </div>
  </template>
}
```

## Accessing row indices in templates

Meta objects can be used in templates to render conditional markup based on
the index of the current row.

```gjs preview
import { EmberTable } from 'ember-table';
import { generateRows } from 'test-app/utils/generators';

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((name) => ({
  name,
  valuePath: name,
}));

const rows = generateRows(100);

const isFirst = (index) => index === 0;
const isLast = (index, rowsCount) => index === rowsCount - 1;

<template>
  <style>
    .first-row-cell {
      font-weight: bold;
    }

    .last-row-cell {
      font-style: italic;
    }
  </style>

  <div class="demo-container small">
    <EmberTable as |t|>
      <t.head @columns={{columns}} />
      <t.body @rows={{rows}} as |b|>
        <b.row as |r|>
          <r.cell as |cell column row cellMeta columnMeta rowMeta rowsCount|>
            {{#if (isFirst rowMeta.index)}}
              <span class="first-row-cell">{{cell}}</span>
            {{else if (isLast rowMeta.index rowsCount)}}
              <span class="last-row-cell">{{cell}}</span>
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
