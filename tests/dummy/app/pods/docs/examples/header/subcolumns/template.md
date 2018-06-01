# Subcolumns

Columns can have an array of `subcolumns`, which should be objects that are
exactly the same as any other column. Subcolumns can have their own subcolumns,
and when rendering the rows of the table, cells will be matched up with the
lowest level of subcolumns (the leaves of the column tree). This means that
`valuePath` is optional for columns that have subcolumns.

{{#docs-demo as |demo|}}
  {{#demo.example}}
    <div class="demo-container small">
      {{! BEGIN-SNIPPET docs-example-subcolumns.hbs }}
        {{#ember-table as |t|}}
          {{t.head columns=simpleColumns}}

          {{t.body rows=rows}}
        {{/ember-table}}
      {{! END-SNIPPET }}
    </div>
  {{/demo.example}}

  {{demo.snippet name='docs-example-subcolumns.hbs'}}
  {{demo.snippet name='docs-example-subcolumns.js' label='component.js'}}
{{/docs-demo}}

## Resizing and Reordering

Subcolumns can be resized like any other column. When resizing a column with
subcolumns, changes in width will be spread throughout the subcolumns.
Subcolumns can only be reordered within their group - it is not currently
possible to reorder move columns around arbitrarily.

Columns do not need to have the same numbers of subcolumns, they can mix and
match as much as you would like. This table's columns have generated completely
randomly, demonstrating the flexibility of subcolumns.

<div class="demo-container">
  {{#ember-table as |t|}}
    {{t.head columns=complexColumns}}

    {{t.body rows=rows}}

  {{/ember-table}}

</div>
