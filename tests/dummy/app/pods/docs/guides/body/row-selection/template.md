# Row Selection

Tables provide row selection out of the box. Adding an `onSelect` action to the
table body will activate selection, and you can pass in the `selection` property
to control the selection using DDAU:

{{#docs-demo as |demo|}}
  {{#demo.example name="docs-example-row-selection"}}
    {{docs/guides/body/row-selection/examples/row-selection
      rows=rows
      columns=columns}}
  {{/demo.example}}

  {{demo.snippet name='docs-example-row-selection.hbs'}}
  {{demo.snippet label='component.js' name='docs-example-row-selection.js'}}
{{/docs-demo}}

## Selected Rows

`selection` can either be a single row, or a group of rows. Selecting a row also
marks all of its children as selected.

In order to keep the selection state as minimal as possible, when `selection` is
a group it will also deduplicate selections by removing all children when a
parent node is selected. Ember Table can infer that because the parent node is
selected, all of its children _must_ be selected:

{{#docs-demo as |demo|}}
  {{#demo.example name="selected-rows"}}
    {{docs/guides/body/row-selection/examples/selected-rows
      rowWithChildren=rowWithChildren
      columns=columns}}
  {{/demo.example}}

  {{demo.snippet label='component.js' name='docs-example-selected-rows.js'}}
  {{demo.snippet name='docs-example-selected-rows.hbs'}}
{{/docs-demo}}

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

{{#docs-demo as |demo|}}
  {{#demo.example name='selection-modes'}}
    {{docs/guides/body/row-selection/examples/selection-modes
      rowsWithChildren=rowsWithChildren
      columns=columns
      rowSelectionMode=rowSelectionMode
      checkboxSelectionMode=checkboxSelectionMode
      selectingChildrenSelectsParent=selectingChildrenSelectsParent
      demoSelection=demoSelection
      currentSelection=currentSelection}}
  {{/demo.example}}

  {{demo.snippet name='docs-example-selection-modes.hbs'}}
  {{demo.snippet label='component.js' name='docs-example-selection-modes.js'}}
{{/docs-demo}}

## Aborting a Selection

Row selection follows a <a href="https://embermap.com/topics/component-side-effects/data-down-actions-up">DDAU</a> pattern, whereby the `onSelect` action handler supplied to Ember Table has control over which rows become selected. To ignore a user selection, it suffices to simply do nothing in the action handler.

There is, however, some internal state that needs to be reset to fully abort a user selection. For example, Ember Table tracks the _last selected_ row in order to determine the range of rows affected in a user multi-selection. If the intent is to completely prevent a user selection, this value must not change when the action is aborted. Otherwise, a subsequent user multi-selection may target the wrong rows.

To reset all internal state relating to an attempted user selection, call the `abort` function in the options object passed to the `onChange` action handler:

{{#docs-demo as |demo|}}
  {{demo.snippet name='docs-example-aborting-a-selection.hbs'}}
  {{demo.snippet label='component.js' name='docs-example-aborting-a-selection.js'}}
{{/docs-demo}}
