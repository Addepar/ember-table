# Rows and Trees

Table body components must receive an `rows` array. The items in this array must
all be objects, but beyond that there are no specific requirements for the
objects themselves - they can be anything.

{{#docs-demo as |demo|}}
  {{#demo.example}}
    <div class="demo-container small">
      {{! BEGIN-SNIPPET docs-example-rows.hbs }}
      <EmberTable as |t|>
        <t.head @columns={{columns}} />
        <t.body @rows={{rows}} />
      </EmberTable>
      {{! END-SNIPPET }}
    </div>
  {{/demo.example}}

  {{demo.snippet name='docs-example-rows.hbs'}}
  {{demo.snippet label='component.js' name='docs-example-rows.js'}}
{{/docs-demo}}

The value passed to each cell in the table is determined by the `valuePath` of
the `column` object. A simplified version of this in handlebars would look like
this:

```hbs
{{#each rows as |row|}}
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

If you want to disable the tree behavior, you can pass `enableTree=false` to
the table body.

{{#docs-demo as |demo|}}
  {{#demo.example name="trees"}}
    {{! BEGIN-SNIPPET docs-example-tree-rows.hbs }}
    <div class="demo-options">
      <label>
        {{input type="checkbox" checked=treeEnabled}}
        Enable Tree
      </label>
    </div>
    <div class="demo-container small">
      <EmberTable as |t|>
        <t.head @columns={{columns}} />

        <t.body
          @rows={{rowsWithChildren}}
          @enableTree={{treeEnabled}}
        />
      </EmberTable>
    </div>
    {{! END-SNIPPET }}
  {{/demo.example}}

  {{demo.snippet label='component.js' name='docs-example-tree-rows.js'}}
  {{demo.snippet name='docs-example-tree-rows.hbs'}}
{{/docs-demo}}

## Collapsing Rows

Trees with children are collapsible by default. You can set the `isCollapsed`
property directly on rows to control the collapse state of rows externally. If
you set `isCollapsed`, the table will update it when the user collapses or
uncollapses a row. Otherwise, it will keep the state internally only.

If you want to disable collapsing, you can pass `enableCollapse=false` to the
table body.

If you want to disable collapsing at a row level, you can pass
`disableCollapse=true` to the row.

{{#docs-demo as |demo|}}
  {{#demo.example name="collapse"}}
    {{! BEGIN-SNIPPET docs-example-rows-with-collapse.hbs }}
    <div class="demo-options">
      <label>
        {{input type="checkbox" checked=collapseEnabled}}
        Enable Collapse
      </label>
    </div>
    <div class="demo-container small">
      <EmberTable as |t|>
        <t.head @columns={{columns}} />

        <t.body
          @rows={{rowsWithCollapse}}
          @enableCollapse={{collapseEnabled}}
        />
      </EmberTable>
    </div>
    {{! END-SNIPPET }}
  {{/demo.example}}

  {{demo.snippet label='component.js' name='docs-example-rows-with-collapse.js'}}
  {{demo.snippet name='docs-example-rows-with-collapse.hbs'}}
{{/docs-demo}}
