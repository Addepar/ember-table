# Ember Table

An addon to support large data set and a number of features around table. `Ember Table` can
handle over 100,000 rows without and rendering or performance issue.

## Install

```bash
ember install ember-table
```

## Features
- Column resizing, column reordering.
- Table resizing.
- Fixed first column.
- Custom row and custom header.
- Handles transient state at cell level.
- Single, multiple row selection.
- Table grouping.

## Usage.

To use `Ember Table`, you need to create `columns` and `rows` dataset.

`columns` is an array of objects which has multiple fields to define behavior of column.
Two required field in each object is `columnName` and `valuePath`.

```javascript
  columns: [
    {
      columnName: `Open time`,
      valuePath: `open`
    },
    {
      columnName: `Close time`,
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
  {{#ember-table
    rows=rows
    columns=columns
    as |row|
  }}
    {{#ember-table-row
      row=row
      as |cell|
    }}
      {{cell.value}}
    {{/ember-table-row}}
  {{/ember-table}}
```

To have your own custom cell, pass in the cell component name in each element of `columns` array and
specify it in the template.

```
  {{#ember-table
    rows=rows
    columns=columns
    as |row|
  }}
    {{#ember-table-row
      row=row
      as |cell|
    }}
      {{#component cell.column.cellComponent
        cell=cell
      }}
    {{/ember-table-row}}
  {{/ember-table}}
```

The rendered table is a plain table without any styling. You can define styling for your own table.
If you want to use default table style, import the `ember-table/default` SASS file.
