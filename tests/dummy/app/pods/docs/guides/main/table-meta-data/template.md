# Table Meta Data

So far you've seen how Ember Table revolves around three central concepts:

1. The `rowValue`, which is one of the rows that are provided to the body
2. The `columnValue`, which is one of the columns that are provided to the
  header
3. The `cellValue`, which is produced by using the `columnValue` to lookup a
  value on the `rowValue`

These are the fundamental building blocks of any table, so it makes sense that
they would be what is given to you when using the table API.

You'll also find that Ember Table provides a meta object that is associated
with each of these. These meta objects are yielded after the main
cell/column/row values at the cell level, and are generally accessible wherever
their corresponding values are:

```hbs
<t.cell as |cell column row cellMeta columnMeta rowMeta|>
```

## What are meta objects?

The meta objects are unique POJOs that are associated with a corresponding
value. That is to say, for every `cell`, `column`, and `row` in the table, there
are corresponding `cellMeta`, `columnMeta`, and `rowMeta` objects.

`columnMeta` and `rowMeta` objects are used by the table to accomplish some
internal bookkeeping such as collapse and selection state, but you are free to
use these objects to store whatever meta information you would like in the
table.

## What are they used for?

Complex data tables have lots of functionality that requires some amount of
state to be tracked. This state is generally unique to the table, and oftentimes
related to a particular cell, column, or row. A good example of this is cell
selection, like in Excel.

When you click a cell in excel, the row, column, and cell are all marked as
active to show the user where they are in the table. Ember Table does _not_ have
this functionality out of the box - let's see how we would implement it with
meta objects:

{{#docs-demo as |demo|}}
  {{#demo.example name="cell-selection"}}
    <div class="demo-container small">
      {{! BEGIN-SNIPPET table-meta-data-cell-selection.hbs }}
      <EmberTable as |t|>
        <t.head @columns={{columns}} as |h|>
          <h.row as |r|>
            <r.cell
              class="{{if r.columnMeta.selected 'is-column-selected'}}"

              as |column|
            >
              {{column.name}}
            </r.cell>
          </h.row>
        </t.head>

        <t.body @rows={{rows}} as |b|>
          <b.row
            class="{{if b.rowMeta.selected 'is-row-selected'}}"

            as |r|
          >
            <r.cell
              class="{{if r.cellMeta.selected 'is-cell-selected'}} {{if r.columnMeta.selected 'is-column-selected'}}"

              as |cell column row cellMeta columnMeta rowMeta|
            >
              <div onclick={{action setSelected cellMeta columnMeta rowMeta}} class="cell-content">
                {{cell}}
              </div>
            </r.cell>
          </b.row>
        </t.body>
      </EmberTable>
      {{! END-SNIPPET }}
    </div>
  {{/demo.example}}

  {{demo.snippet name='table-meta-data-cell-selection.hbs'}}
  {{demo.snippet name='table-meta-data-cell-selection.js' label='component.js'}}
{{/docs-demo}}
