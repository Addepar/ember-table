## Quickstart.

To use `Ember Table`, you need to create `columns` and `rows` dataset.

`columns` is an array of objects which has multiple fields to define behavior of column.
Two required field in each object is `name` and `valuePath`.

```javascript
  columns: [
    {
      name: `Open time`,
      valuePath: `open`
    },
    {
      name: `Close time`,
      valuePath: `close`
    }
  ]
```

`rows` could be a javascript array, ember array or any data structure that implements `length` and
`objectAt(index)`. This flexibity gives application to avoid having all data at front but loads more
data as user scrolls. Each object in the `rows` data structure should contains all fields defined
by all `valuePath` in `columns` array.

```javascript
  rows: computed(function() {
    const rows = emberA();

    rows.pushObject({
      open: '8AM',
      close: '8PM'
    });

    rows.pushObject({
      open: '11AM',
      close: '9PM'
    });

    return rows;
  })
```

### Template

The following template renders a simple table.

```
  {{#ember-table as |t|}}
    {{ember-thead api=t columns=columns}}

    {{#ember-tbody api=t rows=rows as |b|}}
      {{#ember-tr api=b as |r|}}
        {{#ember-td api=r as |value column|}}
          {{component column.component value=value}}
        {{/ember-td}}
      {{/ember-tr}}
    {{/ember-table-row}}
  {{/ember-table}}
```

### Styling

The rendered table is a plain table without any styling. You can define styling for your own table.
If you want to use default table style, import the `ember-table/default` SASS file.

### Optional Footer
To use footer for your table, pass `footerRows` param to ember table. Each element in `footerRows`
represents a row in table footer. The footer row takes `valuePath` field in each column to render
data for each footer cell, similar to table body.

### Custom header and custom footer
By default Ember table header renders text defined by `name` or `footerValue` inside each
`column`. To customize table header or footer, you can pass in `headerComponent` and
`footerComponent` fields in each column data. When the `headerComponent`(or `footerComponent`) is
defined, the `name`(or `footerValue`) field is ignored.
