# Sorting

Ember Table ships with sorting built in to the table. Default sorting is a
standard merge sort which does not affect the original ordering of the rows
passed into the table. Users can sort by a column and toggle sort direction by
clicking on its header, and can sort by multiple columns by clicking with `cmd`
or `ctrl`:

{{#docs-demo as |demo|}}
  {{#demo.example}}
    {{! BEGIN-SNIPPET docs-example-sortings.hbs }}
    <div class="demo-container">
      {{#ember-table as |t|}}
        {{t.head
          columns=columns
          sorts=sorts

          onUpdateSorts=(action (mut sorts))

          widthConstraint='gte-container'
          fillMode='first-column'
        }}

        {{t.body rows=rows}}
      {{/ember-table}}
    </div>
    {{! END-SNIPPET }}
  {{/demo.example}}

  {{demo.snippet name='docs-example-sortings.hbs'}}
  {{demo.snippet label='component.js' name='docs-example-sortings.js'}}
{{/docs-demo}}

Tables headers are passed an array of `sorts` to control the sort order. These
sort objects should correspond to any of the `valuePaths` in the columns for the
table. When multiple sort objects are passed, columns are sorted by each sort
in order:

```js
let sorts = [
  {
    valuePath: 'name',
    isAscending: false,
  },
  {
    valuePath: 'price',
    isAscending: true,
  },
]
```

Table headers can be passed a `sortFunction` and `compareFunction` as well. If
you want to sort the content of the table asynchronously, you can unset the
`sortFunction` and handle the async request yourself.

```hbs
{{ember-thead sortFunction=null}}
```
