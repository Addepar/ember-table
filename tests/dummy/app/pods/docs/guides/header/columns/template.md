# Columns

Table headers must receive an array of columns objects. The objects can be
simple POJOs, and the only hard requirement is that each column has a
`valuePath`. This path will be used to get the value from each row for that
column. If you only want to use the default template, you can also specify a
`name` on the column which will be rendered in the template.

{{#docs-demo as |demo|}}
  {{#demo.example}}
    <div class="demo-container small">
      {{! BEGIN-SNIPPET docs-example-columns.hbs }}
      <EmberTable as |t|>
        <t.head @columns={{columns}} />

        <t.body @rows={{rows}} />
      </EmberTable>
      {{! END-SNIPPET }}
    </div>
  {{/demo.example}}

  {{demo.snippet name='docs-example-columns.hbs'}}
  {{demo.snippet name='docs-example-columns.js' label='component.js'}}
{{/docs-demo}}

## Customizing Headers

You can also customize the template for columns by using the block form of the
header. The `column` object you defined is yielded to you directly, meaning you
can provide whatever information you want to the template. You can use custom
header components by passing the name of the component through this way.

{{#docs-demo as |demo|}}
  {{#demo.example name="columns-with-components"}}
    <div class="demo-container small">
      {{! BEGIN-SNIPPET docs-example-columns-with-components.hbs }}
      <EmberTable as |t|>
        <t.head @columns={{columnsWithComponents}} as |h|>
          <h.row as |r|>
            <r.cell as |column|>
              {{#component column.component color=column.color}}
                {{column.heading}}
              {{/component}}
            </r.cell>
          </h.row>
        </t.head>

        <t.body @rows={{rows}} />
      </EmberTable>
      {{! END-SNIPPET }}
    </div>
  {{/demo.example}}

  {{demo.snippet name='docs-example-columns-with-components.hbs'}}
  {{demo.snippet name='docs-example-columns-with-components.js' label='component.js'}}
  {{demo.snippet name='custom-header.hbs' label='custom-header.hbs'}}
{{/docs-demo}}

## Column Width

You can use the `width`, `minWidth`, and `maxWidth` properties to set the widths
of each individual column and constraints for the widths. Widths are controlled
by the component, and if you don't provide one they'll use automatic defaults.
If you don't want to provide widths, but want your table to grow or shrink to
a suitable size in its container, you should take a look at
{{link-to 'width constraints' 'docs.guides.header.size-constraints'}}.

If you do provide a width, changes to width via resizing will be reflected onto
your column object. This allows you to share, save, and reuse the widths that
your users set on their tables. Below are two tables which share the same column
definitions, so their widths are tied together.

{{#docs-demo as |demo|}}
  {{#demo.example name="column-with-widths"}}

    {{! BEGIN-SNIPPET docs-example-columns-with-widths.hbs }}
    <div class="demo-container small">
      <EmberTable as |t|>
        <t.head @columns={{columnsWithWidths}} />

        <t.body @rows={{rows}} />
      </EmberTable>
    </div>

    <div class="demo-container small mt-4">
      <EmberTable as |t|>
        <t.head @columns={{columnsWithWidths}} />

        <t.body @rows={{rows}} />
      </EmberTable>
    </div>
    {{! END-SNIPPET }}

  {{/demo.example}}

  {{demo.snippet name='docs-example-columns-with-widths.hbs'}}
  {{demo.snippet name='docs-example-columns-with-widths.js' label='component.js'}}
{{/docs-demo}}


## Resize and Reorder

Columns are resizeable and reorderable by default. You can disable these by
using the `enableResize` and `enableReorder` flags. You can also change the
`resizeMode` to `'fluid'` to have columns subtract width from their neighbors.

{{#docs-demo as |demo|}}
  {{#demo.example name="column-resize-reorder"}}
    {{! BEGIN-SNIPPET docs-example-column-resize-reorder.hbs }}
    <div class="py-2">
      <label>
        {{input type="checkbox" checked=resizeEnabled}}
        Enable Resizing
      </label>

      <label>
        {{input type="checkbox" checked=reorderEnabled}}
        Enable Reordering
      </label>

      <label>
        {{input type="checkbox" checked=resizeModeFluid}}
        Resize Mode Fluid
      </label>
    </div>

    <div class="demo-container small">
      <EmberTable as |t|>
        <t.head
          @columns={{columns}}
          @enableResize={{resizeEnabled}}
          @enableReorder={{reorderEnabled}}
          @resizeMode={{if resizeModeFluid 'fluid' 'standard'}}
        />

        <t.body @rows={{rows}} />
      </EmberTable>
    </div>
    {{! END-SNIPPET }}

  {{/demo.example}}

  {{demo.snippet name='docs-example-column-resize-reorder.hbs'}}
  {{demo.snippet name='docs-example-column-resize-reorder.js' label='component.js'}}
{{/docs-demo}}

Headers send the `onResize` and `onReorder` actions whenever a resize or a
reorder has occured.

{{#docs-demo as |demo|}}
  {{#demo.example name="resize-reorder-actions"}}
    {{! BEGIN-SNIPPET docs-example-resize-reorder-actions.hbs }}
    <p>Resized {{resizeCount}} times</p>
    <p>Reorder {{reorderCount}} times</p>

    <div class="demo-container small">
      <EmberTable as |t|>
        <t.head
          @columns={{columns}}
          @onResize={{action (mut resizeCount) (add resizeCount 1)}}
          @onReorder={{action (mut reorderCount) (add reorderCount 1)}}
        />

        <t.body @rows={{rows}} />
      </EmberTable>
    </div>
    {{! END-SNIPPET }}
  {{/demo.example}}

  {{demo.snippet name='docs-example-resize-reorder-actions.hbs'}}
{{/docs-demo}}
