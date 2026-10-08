---
order: 4
---

# Size Constraints

You can set the `widthConstraint` property on your table to ensure that it never
grows too big or too small. There are six possible settings:

1. `eq-container`: Ensures that the table is always exactly the width the of its
   container.

2. `eq-container-slack`: Similar to `eq-container`, but allocates excess whitespace to an empty "slack" column on the right side of the table.

3. `gte-container`: Ensures that the table is always the same width or larger than its container.

4. `gte-container-slack`: Similar to `gte-container`, but allocates excess whitespace to an empty "slack" column on the right side of the table.

5. `lte-container`: Ensures that the table is never larger than its container.

6. `none`: The default, does not enforce any size constraint.

The table will react to resizing its container automatically. Sizing will _not_
override the min/max widths provided by columns.

> `eq-container` mode should generally be paired with `resizeMode='fluid'` to
> get a more natural resize effect. This is useful for tables that must fit
> a constrained space, like tables in a powerpoint.
>
> Most other modes should be paired with `resizeMode='standard'` to achieve an effect similar to most spreadsheet applications, where resizing one column does not typically change the size of the others.
>
> If you need to make a small adjustment to the container width (such as to
> account for a customized scrollbar that would cover some portion of the
> container width), set `containerWidthAdjustment` to a numerical value equal to
> the amount you need the measured container width to be adjusted.

```gjs preview
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { EmberTable } from 'ember-table';
import { generateRows } from 'test-app/utils/generators';

const WIDTH_CONSTRAINTS = [
  'eq-container',
  'eq-container-slack',
  'gte-container',
  'gte-container-slack',
  'lte-container',
  'none',
];

const RESIZE_MODES = ['standard', 'fluid'];

// Pair each width constraint with the resize mode that feels most natural.
const DEFAULT_RESIZE_MODE = {
  'eq-container': 'fluid',
  'eq-container-slack': 'standard',
  'gte-container': 'standard',
  'gte-container-slack': 'standard',
  'lte-container': 'standard',
};

const eq = (a, b) => a === b;

export default class SizeConstraintsDemo extends Component {
  @tracked widthConstraint = 'eq-container';
  @tracked resizeMode = 'fluid';

  rows = generateRows(100);

  columns = [
    { name: 'A', valuePath: 'A' },
    { name: 'B', valuePath: 'B' },
    { name: 'C', valuePath: 'C' },
    { name: 'D', valuePath: 'D' },
  ];

  setWidthConstraint = value => {
    this.widthConstraint = value;
    this.resizeMode = DEFAULT_RESIZE_MODE[value] ?? this.resizeMode;
  };

  setResizeMode = value => {
    this.resizeMode = value;
  };

  <template>
    <h6 class="demo-options-heading">Width Constraint</h6>
    <div class="demo-options">
      {{#each WIDTH_CONSTRAINTS as |value|}}
        <label>
          {{value}}
          <input
            type="radio"
            name="width-constraint"
            value={{value}}
            checked={{eq value this.widthConstraint}}
            {{on "change" (fn this.setWidthConstraint value)}}
          />
        </label>
      {{/each}}
    </div>

    <h6 class="demo-options-heading">Resize Mode</h6>
    <div class="demo-options">
      {{#each RESIZE_MODES as |value|}}
        <label>
          {{value}}
          <input
            type="radio"
            name="resize-mode"
            value={{value}}
            checked={{eq value this.resizeMode}}
            {{on "change" (fn this.setResizeMode value)}}
          />
        </label>
      {{/each}}
    </div>

    <div class="resize-container">
      <EmberTable class="vertical-borders" as |t|>
        <t.head
          @columns={{this.columns}}
          @widthConstraint={{this.widthConstraint}}
          @resizeMode={{this.resizeMode}}
          @scrollIndicators="horizontal"
        />

        <t.body @rows={{this.rows}} />
      </EmberTable>
    </div>
  </template>
}
```

## Fill Mode

You can also set the fill mode for when a table is resizing to fit the width
constraint. The options are:

- `equal-column`: The default, spreads delta across all columns equally

- `first-column`: Puts the delta in the first column

- `last-column`: Puts the delta in the last column

- `nth-column`: Puts the delta in the nth column as defined by `fillColumnIndex`

```gjs preview
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { EmberTable } from 'ember-table';
import { generateRows } from 'test-app/utils/generators';

const FILL_MODES = ['equal-column', 'first-column', 'last-column', 'nth-column'];

const eq = (a, b) => a === b;

export default class FillModeDemo extends Component {
  @tracked fillMode = 'equal-column';

  rows = generateRows(100);

  columns = [
    { name: 'A', valuePath: 'A' },
    { name: 'B', valuePath: 'B' },
    { name: 'C', valuePath: 'C' },
    { name: 'D', valuePath: 'D' },
  ];

  setFillMode = value => {
    this.fillMode = value;
  };

  <template>
    <div class="demo-options">
      {{#each FILL_MODES as |value|}}
        <label>
          {{value}}
          <input
            type="radio"
            name="fill-mode"
            value={{value}}
            checked={{eq value this.fillMode}}
            {{on "change" (fn this.setFillMode value)}}
          />
        </label>
      {{/each}}
    </div>

    <div class="resize-container">
      <EmberTable class="vertical-borders" as |t|>
        <t.head
          @columns={{this.columns}}
          @widthConstraint="eq-container"
          @resizeMode="fluid"
          @fillMode={{this.fillMode}}
          @fillColumnIndex={{1}}
          @scrollIndicators="horizontal"
        />

        <t.body @rows={{this.rows}} />
      </EmberTable>
    </div>
  </template>
}
```

## Initial Fill Mode

When the width constraint is set to `eq-container-slack` or `gte-container-slack`, you may also set an _initial_ fill mode that is used to size the columns when the table is first rendered. This setting has no effect when combined with other width constraints.

The `initialFillMode` property can be set to any of the allowed values for `fillMode`, but it defaults to `none`.

This table summarizes which fill mode properties are used by each width constraint:

| widthConstraint       | fillMode | initialFillMode |
| --------------------- | :------: | :-------------: |
| `eq-container`        |    Y     |        N        |
| `eq-container-slack`  |    Y     |        Y        |
| `gte-container`       |    Y     |        N        |
| `gte-container-slack` |    N     |        Y        |
| `lte-container`       |    Y     |        N        |
| `none`                |    N     |        N        |

Note that `eq-container-slack` uses both `fillMode` _and_ `initialFillMode`. The former is used to enforce the width constraint when the columns are resized beyond the width of the container, while the latter is used only to size the columns at initial render.

In this example, `eq-container-slack` is combined with `equal-column` fill mode and `first-column` initial fill mode. At render, excess whitespace is allocated to the first column. When any column is resized such that the total width of the columns exceeds the container, each column is shrunk equally to satisfy the width constraint.

```gjs preview
import { EmberTable } from 'ember-table';
import { generateRows } from 'test-app/utils/generators';

const rows = generateRows(100);

const columns = [
  { name: 'A', valuePath: 'A' },
  { name: 'B', valuePath: 'B' },
  { name: 'C', valuePath: 'C' },
  { name: 'D', valuePath: 'D' },
];

<template>
  <div class="resize-container w-100">
    <EmberTable class="vertical-borders" as |t|>
      <t.head
        @columns={{columns}}
        @widthConstraint="eq-container-slack"
        @fillMode="equal-column"
        @initialFillMode="first-column"
      />

      <t.body @rows={{rows}} />
    </EmberTable>
  </div>
</template>
```
