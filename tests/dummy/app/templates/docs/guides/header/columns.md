# Columns

Table headers must receive an array of columns objects. The objects can be
simple POJOs, and there are no hard requirements about their shape. They _may_
have a `valuePath`, and if they do this path will be used to get the value from
each row for that column. If you only want to use the default template, you can
also specify a `name` on the column which will be rendered in the template.

{{#docs-demo as |demo|}}
  {{#demo.example}}
    <div class="demo-container small">
      {{! BEGIN-SNIPPET docs-example-columns.hbs }}
      <EmberTable as |t|>
        <t.head @columns={{this.columns}} />
        <t.body @rows={{this.rows}} />
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
        <t.head @columns={{this.columnsWithComponents}} as |h|>
          <h.row as |r|>
            <r.cell as |column|>
              {{#component column.component color=column.color}}
                {{column.heading}}
              {{/component}}
            </r.cell>
          </h.row>
        </t.head>

        <t.body @rows={{this.rows}} />
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
{{#link-to route='docs.guides.header.size-constraints'}}width
constraints{{/link-to}}.

If you do provide a width, changes to width via resizing will be reflected onto
your column object. This allows you to share, save, and reuse the widths that
your users set on their tables. Below are two tables which share the same column
definitions, so their widths are tied together.

{{#docs-demo as |demo|}}
  {{#demo.example name="column-with-widths"}}

    {{! BEGIN-SNIPPET docs-example-columns-with-widths.hbs }}
    <div class="demo-container small">
      <EmberTable as |t|>
        <t.head @columns={{this.columnsWithWidths}} />

        <t.body @rows={{this.rows}} />
      </EmberTable>
    </div>

    <div class="demo-container small mt-4">
      <EmberTable as |t|>
        <t.head @columns={{this.columnsWithWidths}} />

        <t.body @rows={{this.rows}} />
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

**Note**: Ember 3.13 has changed the way property changes propagate. Due to these
changes, column reordering with Ember 3.13 is very slow *unless you turn on async observers*.
For more details, see the Ember Table [issue #775](https://github.com/Addepar/ember-table/issues/775)
or the related Ember.js issue [#18225](https://github.com/emberjs/ember.js/issues/18225).

In addition, in Ember 3.13+ there's also an issue that columns do not reorder on drag-drop properly
when the column definitions are plain JavaScript arrays. The solution (for now) is to make sure your
`columns` property is an Ember Array. See the Ember Table [issue #776](https://github.com/Addepar/ember-table/issues/776).

{{#docs-demo as |demo|}}
  {{#demo.example name="column-resize-reorder"}}
    {{! BEGIN-SNIPPET docs-example-column-resize-reorder.hbs }}
    <div class='demo-options'>
      <label>
        {{input type="checkbox" checked=this.resizeEnabled}}
        Enable Resizing
      </label>
      <label>
        {{input type="checkbox" checked=this.reorderEnabled}}
        Enable Reordering
      </label>
      <label>
        {{input type="checkbox" checked=this.resizeModeFluid}}
        Resize Mode Fluid
      </label>
    </div>

    <div class="demo-container small">
      <EmberTable as |t|>
        <t.head
          @columns={{this.columns}}
          @enableResize={{this.resizeEnabled}}
          @enableReorder={{this.reorderEnabled}}
          @resizeMode={{if this.resizeModeFluid 'fluid' 'standard'}}
        />

        <t.body @rows={{this.rows}} />
      </EmberTable>
    </div>
    {{! END-SNIPPET }}

  {{/demo.example}}

  {{demo.snippet name='docs-example-column-resize-reorder.hbs'}}
  {{demo.snippet name='docs-example-column-resize-reorder.js' label='component.js'}}
{{/docs-demo}}

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
  }
];
```

Headers send the `onResize` and `onReorder` actions whenever a resize or a
reorder has occured.

{{#docs-demo as |demo|}}
  {{#demo.example name="resize-reorder-actions"}}
    {{! BEGIN-SNIPPET docs-example-resize-reorder-actions.hbs }}
    <p>Resized {{this.resizeCount}} times</p>
    <p>Reordered {{this.reorderCount}} times</p>

    <div class="demo-container small">
      <EmberTable as |t|>
        <t.head
          @columns={{this.columns}}
          @onResize={{fn (mut this.resizeCount) (add this.resizeCount 1)}}
          @onReorder={{fn (mut this.reorderCount) (add this.reorderCount 1)}}
        />

        <t.body @rows={{this.rows}} />
      </EmberTable>
    </div>
    {{! END-SNIPPET }}
  {{/demo.example}}

  {{demo.snippet name='docs-example-resize-reorder-actions.hbs'}}
{{/docs-demo}}

## Text alignment

A column can have its text aligned left, center or right by setting the `textAlign` property on the column definition.

When the property is set, the cell will have the matching class (`ember-table__text-align-left`, `ember-table__text-align-center` or `ember-table__text-align-center`).

{{#docs-demo as |demo|}}
  {{#demo.example name="text-align"}}
    <div class="demo-container small">
      {{! BEGIN-SNIPPET docs-example-text-align.hbs }}
      <EmberTable as |t|>
        <t.head @columns={{this.columnsWithTextAlign}} />

        <t.body @rows={{this.rows}} />
      </EmberTable>
      {{! END-SNIPPET }}
    </div>
  {{/demo.example}}

  {{demo.snippet name='docs-example-text-align.js' label='component.js'}}
  {{demo.snippet name='docs-example-text-align.hbs'}}
{{/docs-demo}}
