---
order: 1
---

# Rows and Trees

Table body components must receive an `rows` array. The items in this array must
all be objects, but beyond that there are no specific requirements for the
objects themselves - they can be anything.

```gjs preview
import { EmberTable } from 'ember-table';

const columns = [
  { name: 'A', valuePath: 'A', width: 180 },
  { name: 'B', valuePath: 'B', width: 180 },
  { name: 'C', valuePath: 'C', width: 180 },
  { name: 'D', valuePath: 'D', width: 180 },
];

const rows = Array.from({ length: 11 }, () => ({ A: 'A', B: 'B', C: 'C', D: 'D' }));

<template>
  <div class="demo-container small">
    <EmberTable as |t|>
      <t.head @columns={{columns}} />
      <t.body @rows={{rows}} />
    </EmberTable>
  </div>
</template>
```

The value passed to each cell in the table is determined by the `valuePath` of
the `column` object. A simplified version of this in handlebars would look like
this:

```hbs
{{#each this.rows as |row|}}
  <tr>
    {{#each columns as |column|}}
      <td>
        {{yield (get row column.valuePath)}}
      </td>
    {{/each}}
  </tr>
{{/each}}
```

## Trees and Children

By default, Ember Table handles trees of rows. Each row can have a `children`
property which is another array of rows. Children are treated the same way as
parents - cells will attempt to find a value by getting the value at the value
path on the child.

If you want to disable the tree behavior, you can pass `@enableTree={{false}}`
to the table body.

```gjs preview
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { EmberTable } from 'ember-table';

const columns = [
  { name: 'A', valuePath: 'A', width: 180 },
  { name: 'B', valuePath: 'B', width: 180 },
  { name: 'C', valuePath: 'C', width: 180 },
  { name: 'D', valuePath: 'D', width: 180 },
];

const row = () => ({ A: 'A', B: 'B', C: 'C', D: 'D' });

const rowsWithChildren = Array.from({ length: 3 }, () => ({
  ...row(),
  children: [row(), row(), row()],
}));

export default class TreeRowsExample extends Component {
  @tracked treeEnabled = true;

  @action
  toggleTree(event) {
    this.treeEnabled = event.target.checked;
  }

  <template>
    <div class="demo-options">
      <label>
        <input type="checkbox" checked={{this.treeEnabled}} {{on "change" this.toggleTree}} />
        Enable Tree
      </label>
    </div>
    <div class="demo-container small">
      <EmberTable as |t|>
        <t.head @columns={{columns}} />

        <t.body @rows={{rowsWithChildren}} @enableTree={{this.treeEnabled}} />
      </EmberTable>
    </div>
  </template>
}
```

## Collapsing Rows

Trees with children are collapsible by default. You can set the `isCollapsed`
property directly on rows to control the collapse state of rows externally. If
you set `isCollapsed`, the table will update it when the user collapses or
uncollapses a row. Otherwise, it will keep the state internally only.

If you want to disable collapsing, you can pass `@enableCollapse={{false}}` to
the table body.

If you want to disable collapsing at a row level, you can set
`disableCollapse: true` on the row.

```gjs preview
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { EmberTable } from 'ember-table';

const columns = [
  { name: 'A', valuePath: 'A', width: 180 },
  { name: 'B', valuePath: 'B', width: 180 },
  { name: 'C', valuePath: 'C', width: 180 },
  { name: 'D', valuePath: 'D', width: 180 },
];

const row = () => ({ A: 'A', B: 'B', C: 'C', D: 'D' });

const rowsWithCollapse = Array.from({ length: 3 }, () => ({
  ...row(),
  isCollapsed: true,
  children: [row(), row(), row()],
}));

export default class CollapsibleRowsExample extends Component {
  @tracked collapseEnabled = true;

  @action
  toggleCollapse(event) {
    this.collapseEnabled = event.target.checked;
  }

  <template>
    <div class="demo-options">
      <label>
        <input
          type="checkbox"
          checked={{this.collapseEnabled}}
          {{on "change" this.toggleCollapse}}
        />
        Enable Collapse
      </label>
    </div>
    <div class="demo-container small">
      <EmberTable as |t|>
        <t.head @columns={{columns}} />

        <t.body @rows={{rowsWithCollapse}} @enableCollapse={{this.collapseEnabled}} />
      </EmberTable>
    </div>
  </template>
}
```
