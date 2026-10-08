---
order: 2
---

# Row Selection

Tables provide row selection out of the box. Adding an `onSelect` action to the
table body will activate selection, and you can pass in the `selection` property
to control the selection using DDAU:

```gjs preview
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { EmberTable } from 'ember-table';

const columns = [
  { name: 'A', valuePath: 'A', width: 180 },
  { name: 'B', valuePath: 'B', width: 180 },
  { name: 'C', valuePath: 'C', width: 180 },
  { name: 'D', valuePath: 'D', width: 180 },
];

const rows = Array.from({ length: 11 }, () => ({ A: 'A', B: 'B', C: 'C', D: 'D' }));

export default class RowSelectionExample extends Component {
  @tracked selection;

  @action
  select(selection) {
    this.selection = selection;
  }

  <template>
    <div class="demo-container small">
      <EmberTable as |t|>
        <t.head @columns={{columns}} />

        <t.body @rows={{rows}} @onSelect={{this.select}} @selection={{this.selection}} />
      </EmberTable>
    </div>
  </template>
}
```

## Selected Rows

`selection` can either be a single row, or a group of rows. Selecting a row also
marks all of its children as selected.

In order to keep the selection state as minimal as possible, when `selection` is
a group it will also deduplicate selections by removing all children when a
parent node is selected. Ember Table can infer that because the parent node is
selected, all of its children _must_ be selected:

```gjs preview
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { EmberTable } from 'ember-table';

const columns = [
  { name: 'A', valuePath: 'A', width: 180 },
  { name: 'B', valuePath: 'B', width: 180 },
  { name: 'C', valuePath: 'C', width: 180 },
  { name: 'D', valuePath: 'D', width: 180 },
];

const rowWithChildren = [
  {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D',
    children: Array.from({ length: 12 }, () => ({ A: 'A', B: 'B', C: 'C', D: 'D' })),
  },
];

export default class SelectedRowsExample extends Component {
  @tracked selection = [rowWithChildren[0]];

  @action
  select(selection) {
    this.selection = selection;
  }

  <template>
    <div class="demo-container small">
      <EmberTable as |t|>
        <t.head @columns={{columns}} />

        <t.body
          @rows={{rowWithChildren}}
          @onSelect={{this.select}}
          @selection={{this.selection}}
        />
      </EmberTable>
    </div>
  </template>
}
```

This can make some tasks more difficult - performing an action on all rows that
are logically selected may mean that you have to traverse through the `children`
in the `selection` group. It makes other tasks much easier though, like finding
all of the groups that are selected, and selecting a group manually, external to
the table.

## Selection Modes

There are three different properties you can use to control the behavior of
row selection:

1. `checkboxSelectionMode`: This controls the behavior of the checkbox that
appears in the first cell of a row. It can be either `multiple`, `single`, or
`none`. Checkbox selection is always a group selection - it will always pass an
array to `onSelect`. In `multiple` mode it allows more than one checkbox to be
checked at a time, and in the `single` mode it only allows one checkbox to be
checked.

2. `rowSelectionMode`: This controls the behavior of clicking the row itself.
It can be either `multiple`, `single`, or `none`. If it is either `multiple` or
`single`, then the `is-selectable` class will be applied to the row. When using
`single` mode, clicking on a row will pass the row directly to `onSelect`. This
marks the row as selected, but is not considered a group selection, so the
checkbox will _not_ be checked.

3. `selectingChildrenSelectsParent`: This is a boolean flag that determines
whether selecting all of the children of a given row also selects the row
itself.

```gjs preview
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { EmberTable } from 'ember-table';

const columns = [
  { name: 'A', valuePath: 'A', width: 180 },
  { name: 'B', valuePath: 'B', width: 180 },
  { name: 'C', valuePath: 'C', width: 180 },
  { name: 'D', valuePath: 'D', width: 180 },
];

const makeRow = (id, children = []) => ({ A: `A${id}`, B: 'B', C: 'C', D: 'D', children });

const rowsWithChildren = [
  makeRow(1, [
    makeRow(2, [makeRow(3), makeRow(4), makeRow(5)]),
    makeRow(6),
    makeRow(7),
    makeRow(8, [makeRow(9), makeRow(10), makeRow(11)]),
  ]),
];

const MODES = ['multiple', 'single', 'none'];
const eq = (a, b) => a === b;

export default class SelectionModesExample extends Component {
  @tracked rowSelectionMode = 'multiple';
  @tracked checkboxSelectionMode = 'multiple';
  @tracked selectingChildrenSelectsParent = true;
  @tracked selection;

  get currentSelection() {
    let selection = this.selection;
    if (!selection || selection.length === 0) {
      return 'Nothing selected';
    } else if (Array.isArray(selection)) {
      return `Array: [${selection.map(row => row.A).join(',')}]`;
    } else {
      return `Single: ${selection.A}`;
    }
  }

  @action
  select(selection) {
    this.selection = selection;
  }

  @action
  setMode(property, mode) {
    this[property] = mode;
  }

  @action
  toggleSelectingChildrenSelectsParent(event) {
    this.selectingChildrenSelectsParent = event.target.checked;
  }

  <template>
    <div class="demo-container">
      <EmberTable as |t|>
        <t.head @columns={{columns}} />

        <t.body
          @rows={{rowsWithChildren}}
          @rowSelectionMode={{this.rowSelectionMode}}
          @checkboxSelectionMode={{this.checkboxSelectionMode}}
          @selectingChildrenSelectsParent={{this.selectingChildrenSelectsParent}}
          @onSelect={{this.select}}
          @selection={{this.selection}}
        />
      </EmberTable>
    </div>
    <div class="demo-options-group">
      <h4>Current selection</h4>
      <div class="demo-current-selection">{{this.currentSelection}}</div>
    </div>
    <div class="demo-options-group">
      <h4>rowSelectionMode</h4>
      {{#each MODES as |mode|}}
        <label>
          <input
            type="radio"
            name="row-selection-mode"
            value={{mode}}
            checked={{eq this.rowSelectionMode mode}}
            {{on "change" (fn this.setMode "rowSelectionMode" mode)}}
          />
          {{mode}}
        </label>
      {{/each}}
    </div>
    <div class="demo-options-group">
      <h4>checkboxSelectionMode</h4>
      {{#each MODES as |mode|}}
        <label>
          <input
            type="radio"
            name="checkbox-selection-mode"
            value={{mode}}
            checked={{eq this.checkboxSelectionMode mode}}
            {{on "change" (fn this.setMode "checkboxSelectionMode" mode)}}
          />
          {{mode}}
        </label>
      {{/each}}
    </div>
    <div class="demo-options-group">
      <h4>selectingChildrenSelectsParent</h4>
      <label>
        <input
          type="checkbox"
          aria-label="selectingChildrenSelectsParent"
          checked={{this.selectingChildrenSelectsParent}}
          {{on "change" this.toggleSelectingChildrenSelectsParent}}
        />
      </label>
    </div>
  </template>
}
```

## Aborting a Selection

Row selection follows a [DDAU](https://embermap.com/topics/component-side-effects/data-down-actions-up) pattern, whereby the `onSelect` action handler supplied to Ember Table has control over which rows become selected. To ignore a user selection, it suffices to simply do nothing in the action handler.

There is, however, some internal state that needs to be reset to fully abort a user selection. For example, Ember Table tracks the _last selected_ row in order to determine the range of rows affected in a user multi-selection. If the intent is to completely prevent a user selection, this value must not change when the action is aborted. Otherwise, a subsequent user multi-selection may target the wrong rows.

To reset all internal state relating to an attempted user selection, call the `abort` function in the options object passed to the `onSelect` action handler:

```gjs
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { EmberTable } from 'ember-table';

export default class AbortingASelectionExample extends Component {
  @tracked selection;

  @action
  selectRows(selection, { abort }) {
    if (shouldAbortSelection(selection)) {
      abort();
      return;
    }

    this.selection = selection;
  }

  <template>
    <EmberTable as |t|>
      <t.head @columns={{@columns}} />

      <t.body @rows={{@rows}} @onSelect={{this.selectRows}} @selection={{this.selection}} />
    </EmberTable>
  </template>
}
```
