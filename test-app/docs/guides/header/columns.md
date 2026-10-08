---
order: 1
---

# Columns

Table headers must receive an array of columns objects. The objects can be
simple POJOs, and there are no hard requirements about their shape. They _may_
have a `valuePath`, and if they do this path will be used to get the value from
each row for that column. If you only want to use the default template, you can
also specify a `name` on the column which will be rendered in the template.

```gjs preview
import { EmberTable } from 'ember-table';
import { generateRows } from 'test-app/utils/generators';

const rows = generateRows(100);

const columns = [
  { name: 'A', valuePath: 'A' },
  { name: 'B', valuePath: 'B' },
  { name: 'C', valuePath: 'C' },
  { name: 'D', valuePath: 'D' },
  { name: 'E', valuePath: 'E' },
  { name: 'F', valuePath: 'F' },
  { name: 'G', valuePath: 'G' },
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

## Customizing Headers

You can also customize the template for columns by using the block form of the
header. The `column` object you defined is yielded to you directly, meaning you
can provide whatever information you want to the template. You can use custom
header components by putting the component itself on the column and invoking
it from the block.

```gjs preview
import { EmberTable } from 'ember-table';
import { generateRows } from 'test-app/utils/generators';

const CustomHeader = <template>
  <div class="custom-header bg-{{@color}}">
    Column {{yield}}
  </div>
</template>;

const rows = generateRows(100);

const columns = [
  { heading: 'A', valuePath: 'A', component: CustomHeader, color: 'navy' },
  { heading: 'B', valuePath: 'B', component: CustomHeader, color: 'blue' },
  { heading: 'C', valuePath: 'C', component: CustomHeader, color: 'aqua' },
  { heading: 'D', valuePath: 'D', component: CustomHeader, color: 'teal' },
  { heading: 'E', valuePath: 'E', component: CustomHeader, color: 'orange' },
  { heading: 'F', valuePath: 'F', component: CustomHeader, color: 'red' },
  { heading: 'G', valuePath: 'G', component: CustomHeader, color: 'maroon' },
];

<template>
  <div class="demo-container small">
    <EmberTable as |t|>
      <t.head @columns={{columns}} as |h|>
        <h.row as |r|>
          <r.cell as |column|>
            <column.component @color={{column.color}}>
              {{column.heading}}
            </column.component>
          </r.cell>
        </h.row>
      </t.head>

      <t.body @rows={{rows}} />
    </EmberTable>
  </div>
</template>
```

## Column Width

You can use the `width`, `minWidth`, and `maxWidth` properties to set the widths
of each individual column and constraints for the widths. Widths are controlled
by the component, and if you don't provide one they'll use automatic defaults.
If you don't want to provide widths, but want your table to grow or shrink to
a suitable size in its container, you should take a look at
[width constraints](/docs/guides/header/size-constraints).

If you do provide a width, changes to width via resizing will be reflected onto
your column object. This allows you to share, save, and reuse the widths that
your users set on their tables. Below are two tables which share the same column
definitions, so their widths are tied together.

```gjs preview
import { EmberTable } from 'ember-table';
import { generateRows } from 'test-app/utils/generators';

const rows = generateRows(100);

const columns = [
  { name: 'A', valuePath: 'A', width: 100 },
  { name: 'B', valuePath: 'B', width: 100 },
  { name: 'C', valuePath: 'C', width: 100 },
  { name: 'D', valuePath: 'D', width: 100 },
  { name: 'E', valuePath: 'E', width: 100 },
  { name: 'F', valuePath: 'F', width: 100 },
  { name: 'G', valuePath: 'G', width: 100 },
];

<template>
  <div class="demo-container small">
    <EmberTable as |t|>
      <t.head @columns={{columns}} />

      <t.body @rows={{rows}} />
    </EmberTable>
  </div>

  <div class="demo-container small mt-4">
    <EmberTable as |t|>
      <t.head @columns={{columns}} />

      <t.body @rows={{rows}} />
    </EmberTable>
  </div>
</template>
```

## Resize and Reorder

Columns are resizeable and reorderable by default. You can disable these by
using the `enableResize` and `enableReorder` flags. You can also change the
`resizeMode` to `'fluid'` to have columns subtract width from their neighbors.

Column definitions that are reordered should be an Ember Array (for example
created with `A()` from `@ember/array`), so that reordering can update them in
place. See the Ember Table [issue #776](https://github.com/Addepar/ember-table/issues/776).

```gjs preview
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import { A } from '@ember/array';
import { EmberTable } from 'ember-table';
import { generateRows } from 'test-app/utils/generators';

export default class ResizeReorderDemo extends Component {
  @tracked resizeEnabled = false;
  @tracked reorderEnabled = false;
  @tracked resizeModeFluid = false;

  rows = generateRows(100);

  columns = A([
    { name: 'A', valuePath: 'A' },
    { name: 'B', valuePath: 'B' },
    { name: 'C', valuePath: 'C' },
    { name: 'D', valuePath: 'D' },
    { name: 'E', valuePath: 'E' },
    { name: 'F', valuePath: 'F' },
    { name: 'G', valuePath: 'G' },
  ]);

  get resizeMode() {
    return this.resizeModeFluid ? 'fluid' : 'standard';
  }

  toggle = (property, event) => {
    this[property] = event.target.checked;
  };

  <template>
    <div class="demo-options">
      <label>
        <input
          type="checkbox"
          checked={{this.resizeEnabled}}
          {{on "change" (fn this.toggle "resizeEnabled")}}
        />
        Enable Resizing
      </label>
      <label>
        <input
          type="checkbox"
          checked={{this.reorderEnabled}}
          {{on "change" (fn this.toggle "reorderEnabled")}}
        />
        Enable Reordering
      </label>
      <label>
        <input
          type="checkbox"
          checked={{this.resizeModeFluid}}
          {{on "change" (fn this.toggle "resizeModeFluid")}}
        />
        Resize Mode Fluid
      </label>
    </div>

    <div class="demo-container small">
      <EmberTable as |t|>
        <t.head
          @columns={{this.columns}}
          @enableResize={{this.resizeEnabled}}
          @enableReorder={{this.reorderEnabled}}
          @resizeMode={{this.resizeMode}}
        />

        <t.body @rows={{this.rows}} />
      </EmberTable>
    </div>
  </template>
}
```

Resizing and reordering can also be disabled on a per column basis by setting
`isResizable` and `isReorderable` to false. Note that only columns that are on
the edge of a table can be marked as non-reorderable. This is because allowing
columns on either side of a unmovable column effectively makes the column
movable, and that UX is generally not desired.

```js
let columns = [
  {
    valuePath: 'name',
    isResizable: false,
    isReorderable: false,
  },
];
```

Headers send the `onResize` and `onReorder` actions whenever a resize or a
reorder has occured.

```gjs preview
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';
import { EmberTable } from 'ember-table';
import { generateRows } from 'test-app/utils/generators';

export default class ResizeReorderActionsDemo extends Component {
  @tracked resizeCount = 0;
  @tracked reorderCount = 0;

  rows = generateRows(100);

  columns = A([
    { name: 'A', valuePath: 'A' },
    { name: 'B', valuePath: 'B' },
    { name: 'C', valuePath: 'C' },
    { name: 'D', valuePath: 'D' },
    { name: 'E', valuePath: 'E' },
    { name: 'F', valuePath: 'F' },
    { name: 'G', valuePath: 'G' },
  ]);

  onResize = () => this.resizeCount++;
  onReorder = () => this.reorderCount++;

  <template>
    <p>Resized {{this.resizeCount}} times</p>
    <p>Reordered {{this.reorderCount}} times</p>

    <div class="demo-container small">
      <EmberTable as |t|>
        <t.head
          @columns={{this.columns}}
          @onResize={{this.onResize}}
          @onReorder={{this.onReorder}}
        />

        <t.body @rows={{this.rows}} />
      </EmberTable>
    </div>
  </template>
}
```

## Text alignment

A column can have its text aligned left, center or right by setting the `textAlign` property on the column definition.

When the property is set, the cell will have the matching class (`ember-table__text-align-left`, `ember-table__text-align-center` or `ember-table__text-align-right`).

```gjs preview
import { EmberTable } from 'ember-table';
import { generateRows } from 'test-app/utils/generators';

const rows = generateRows(100);

const columns = [
  { name: 'No alignment', valuePath: 'A' },
  { name: 'Left alignment', valuePath: 'B', textAlign: 'left' },
  { name: 'Center alignment', valuePath: 'C', textAlign: 'center' },
  { name: 'Right alignment', valuePath: 'D', textAlign: 'right' },
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
