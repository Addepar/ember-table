# Row Selection

Tables provide row selection out of the box. Adding an `onSelect` action to the
table body will activate selection, and you can pass in the `selection` property
to control the selection using DDAU:

{{#docs-demo as |demo|}}
  {{#demo.example}}
    <div class="demo-container small">
      {{! BEGIN-SNIPPET docs-example-row-selection.hbs }}
      {{#ember-table as |t|}}
        {{t.head columns=columns}}

        {{t.body
          rows=rows
          onSelect=(action (mut selection))
          selection=selection
        }}
      {{/ember-table}}
      {{! END-SNIPPET }}
    </div>
  {{/demo.example}}

  {{demo.snippet name='docs-example-row-selection.hbs'}}
  {{demo.snippet label='component.js' name='docs-example-row-selection.js'}}
{{/docs-demo}}

# Selected Rows

`selection` can either be a single row, or a group of rows. Selecting a row also
marks all of its children as selected.

In order to keep the selection state as minimal as possible, when `selection` is
a group it will also deduplicate selections by removing all children when a
parent node is selected. Ember Table can infer that because the parent node is
selected, all of its children _must_ be selected:

{{#docs-demo as |demo|}}
  {{#demo.example name="selected-rows"}}
    <div class="demo-container small">
      {{! BEGIN-SNIPPET docs-example-selected-rows.hbs }}
      {{#ember-table as |t|}}
        {{t.head columns=columns}}

        {{t.body
          rows=rowWithChildren
          onSelect=(action (mut preselection))
          selection=preselection
        }}
      {{/ember-table}}
      {{! END-SNIPPET }}
    </div>
  {{/demo.example}}

  {{demo.snippet label='component.js' name='docs-example-selected-rows.js'}}
  {{demo.snippet name='docs-example-selected-rows.hbs'}}
{{/docs-demo}}

This can make some tasks more difficult - performing an action on all rows that
are logically selected may mean that you have to traverse through the `children`
in the `selection` group. It makes other tasks much easier though, like finding
all of the groups that are selected, and selecting a group manually, external to
the table.

# Selection Modes

There are three different properties you can use to control the behavior of
row selection:

1. `checkboxSelectionMode`: This controls the behavior of the checkbox which
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

3. `selectingChildrenSelectsParent`: This is a boolean flag which tells toggles
whether or not selecting all of the children of a given row also selects the row
itself.

{{#docs-demo as |demo|}}
  {{#demo.example name='selection-modes'}}
    {{! BEGIN-SNIPPET docs-example-selection-modes.hbs }}
    <div class="demo-container small">
      {{#ember-table as |t|}}
        {{t.head columns=columns}}

        {{t.body
          rows=rowsWithChildren

          rowSelectionMode=rowSelectionMode
          checkboxSelectionMode=checkboxSelectionMode
          selectingChildrenSelectsParent=selectingChildrenSelectsParent

          onSelect=(action (mut selection))
          selection=selection
        }}
      {{/ember-table}}
    </div>

    <div class="options-container">
      <h4 class="label">rowSelectionMode</h4>

      <div class="options">
        <label class="pr-4">
          multiple
          {{radio-button name='row-selection-mode' value='multiple' groupValue=rowSelectionMode}}
        </label>

        <label class="pr-4">
          single
          {{radio-button name='row-selection-mode' value='single' groupValue=rowSelectionMode}}
        </label>

        <label>
          none
          {{radio-button name='row-selection-mode' value='none' groupValue=rowSelectionMode}}
        </label>
      </div>

      <h4 class="label">checkboxSelectionMode</h4>

      <div class="options">
        <label class="pr-4">
          multiple
          {{radio-button name='checkbox-selection-mode' value='multiple' groupValue=checkboxSelectionMode}}
        </label>

        <label class="pr-4">
          single
          {{radio-button name='checkbox-selection-mode' value='single' groupValue=checkboxSelectionMode}}
        </label>

        <label>
          none
          {{radio-button name='checkbox-selection-mode' value='none' groupValue=checkboxSelectionMode}}
        </label>
      </div>

      <h4 class="label">selectingChildrenSelectsParent</h4>

      <div class="options">
        <label class="pr-4">
          true
          {{radio-button name='selecting-children-selects-parent' value=true groupValue=selectingChildrenSelectsParent}}
        </label>

        <label class="pr-4">
          false
          {{radio-button name='selecting-children-selects-parent' value=false groupValue=selectingChildrenSelectsParent}}
        </label>
      </div>
    </div>
    {{! END-SNIPPET }}
  {{/demo.example}}

  {{demo.snippet name='docs-example-selection-modes.hbs'}}
  {{demo.snippet label='component.js' name='docs-example-selection-modes.js'}}
{{/docs-demo}}
