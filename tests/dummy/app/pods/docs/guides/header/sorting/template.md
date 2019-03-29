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
      <EmberTable as |t|>
        <t.head
          @columns={{columns}}
          @sorts={{sorts}}

          @onUpdateSorts={{action (mut sorts)}}

          @widthConstraint='gte-container'
          @fillMode='first-column'
        />

        <t.body @rows={{rows}} />
      </EmberTable>
    </div>
    {{! END-SNIPPET }}
  {{/demo.example}}

  {{demo.snippet name='docs-example-sortings.hbs'}}
  {{demo.snippet label='component.js' name='docs-example-sortings.js'}}
{{/docs-demo}}

## Activating Sorting

Sorting in tables is a DDAU process - a new sort order is passed to
`onUpdateSorts` and can then be passed back into the table, updating the sort
order. Because sorting cannot occur without the `onUpdateSorts` action, it will
effectively be disabled unless the action is set - headers will not be
clickable, and nothing will change when users select them.

The sort order is passed into the table via the `sorts` argument. This should be
an array of sort objects should correspond to any of the `valuePaths` in the
columns for the table. When multiple sort objects are passed, columns are sorted
by each sort in order:

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

Note that you can control the sort order externally this way as well, for
instance if you have a different UX than clicking on headers to control the sort
order.

Table headers can be passed a `sortFunction` and `compareFunction` as well. If
you want to sort the content of the table asynchronously, you can unset the
`sortFunction` and handle the async request yourself.

```hbs
{{ember-thead sortFunction=null}}
```

## Disabling Sorting

As mentioned before, sorting is disabled by default unless the table is given an
`onUpdateSorts` action. Sorting can also be disabled by setting the `isSortable`
option on a particular column to `false`:

```js
let columns = [
  {
    valuePath: 'name',
    isSortable: false,
  }
];
```

## Sorting empty values

Empty values can be treated differently depending on the needs by using the `sortEmptyLast` option.

{{docs/guides/header/sorting/empty-values}}
