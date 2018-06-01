# Row Selection

Tables provide row selection out of the box. Adding an `onSelect` action to the
table body will activate selection, and you can pass in `selectedRows` to
control the selection using DDAU:

{{#docs-demo as |demo|}}
  {{#demo.example}}
    <div class="demo-container small">
      {{! BEGIN-SNIPPET docs-example-row-selection.hbs }}
      {{#ember-table as |t|}}
        {{t.head columns=columns}}

        {{t.body
          rows=rows
          onSelect=(action (mut selectedRows))
          selectedRows=selectedRows
        }}
      {{/ember-table}}
      {{! END-SNIPPET }}
    </div>
  {{/demo.example}}

  {{demo.snippet name='docs-example-row-selection.hbs'}}
  {{demo.snippet label='component.js' name='docs-example-row-selection.js'}}
{{/docs-demo}}

# Selected Rows

`selectedRows` is meant to be an array with the rows that are selected in it.
In order to keep the selection state as minimal as possible, `selectedRows` will
also deduplicate selections by removing all children when a parent node is
selected. Ember Table can infer that because the parent node is selected, all of
its children _must_ be selected:

{{#docs-demo as |demo|}}
  {{#demo.example name="selected-rows"}}
    <div class="demo-container small">
      {{! BEGIN-SNIPPET docs-example-selected-rows.hbs }}
      {{#ember-table as |t|}}
        {{t.head columns=columns}}

        {{t.body
          rows=rowWithChildren
          onSelect=(action (mut preselectedRows))
          selectedRows=preselectedRows
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
in the list of `selectedRows`. It makes other tasks much easier though, like
finding all of the groups that are selected, and selecting a group manually,
external to the table.

# Selection Modes

There are three selection modes available:

1. `multiple`: The default mode, allows users to select multiple rows. `ctrl`
  and `meta` can be used to add or toggle rows in the selection, and `shift` can
  be used to select ranges of rows. Selecting a parent row will select all of
  its children. However, selecting all of the children will _not_ select the
  parent.

2. `grouping`: This mode is the same as multiple, except that parent's are
  considered groups. This means that when you select all of the children of a
  node, the node will also be selected.

3. `single`: This mode only allows you to select one row at a time, and uses the
  first item of the `selectedRows` array only. It disables the checkbox as well.

You can pass one of these into the table body as the `selectMode` argument.

{{#docs-demo as |demo|}}
  {{#demo.example name='selection-modes'}}
    {{! BEGIN-SNIPPET docs-example-selection-modes.hbs }}
    <label class="pr-4">
      multiple
      {{radio-button name='select-mode' value='multiple' groupValue=selectMode}}
    </label>

    <label class="pr-4">
      grouping
      {{radio-button name='select-mode' value='grouping' groupValue=selectMode}}
    </label>

    <label>
      single
      {{radio-button name='select-mode' value='single' groupValue=selectMode}}
    </label>

    <div class="demo-container small">
      {{#ember-table as |t|}}
        {{t.head columns=columns}}

        {{t.body
          rows=rowsWithChildren
          selectMode=selectMode
          onSelect=(action (mut selectedRows))
          selectedRows=selectedRows
        }}
      {{/ember-table}}
    </div>
    {{! END-SNIPPET }}
  {{/demo.example}}

  {{demo.snippet name='docs-example-selection-modes.hbs'}}
  {{demo.snippet label='component.js' name='docs-example-selection-modes.js'}}
{{/docs-demo}}
