[![Build Status](https://travis-ci.org/Addepar/ember-table.svg?branch=master)](https://travis-ci.org/Addepar/ember-table)
![npm version](https://img.shields.io/npm/v/ember-table)

# Ember Table

An addon to support large data set and a number of features around table. `Ember Table` can
handle over 100,000 rows without any rendering or performance issue. This version of `Ember Table`
supports Ember 1.11 to latest version of Ember.

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

## Documentation

Documentation is available at: https://opensource.addepar.com/ember-table/docs

Ember Table uses [ember-cli-addon-docs](https://github.com/ember-learn/ember-cli-addon-docs) for its documentation.
To run the docs locally, clone the repo, run `yarn && yarn start` and then navigate to `http://localhost:4200/docs`.

## Usage

To use `Ember Table`, you need to create `columns` and `rows` dataset.

`columns` is an array of objects which has multiple fields to define behavior of the column.
The objects can be simple POJOs, and there are no hard requirements about their shape.
They _may_ have a `valuePath`, and if they do this path will be used to get the value from
each row for that column. If you only want to use the default template, you can also
specify a `name` on the column which will be rendered in the template.

```javascript
columns: [
  {
    name: `Open time`,
    valuePath: `open`,
  },
  {
    name: `Close time`,
    valuePath: `close`,
  },
];
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
    close: '8PM',
  });

  rows.pushObject({
    open: '11AM',
    close: '9PM',
  });

  return rows;
});
```

### Template

The following template renders a simple table.

```
  {{#ember-table as |t|}}
    {{t.head columns=columns}}

    {{t.body rows=rows}}
  {{/ember-table}}
```

You can use the block form of the table to customize its template. The component
structure matches that of actual HTML tables, and allows you to customize it at
any level. At the cell level, you get access to these four values:

- `value` - The value of the cell
- `cell` - A unique cell cache. You can use this to track cell state without
  dirtying the underlying model.
- `column` - The column itself.
- `row` - The row itself.

You can use these values to customize cell in many ways. For instance, if you
want to have every cell in a particular column use a component, you can add a
`component` field to your column (or feel free to use any other property name
you like):

```
  {{#ember-table as |t|}}
    {{t.head columns=columns}}

    {{#t.body rows=rows as |b|}}
      {{#b.row as |r|}}
        {{#r.cell as |value column row|}}
          {{component column.component value=value}}
        {{/r.cell}}
      {{/b.row}}
    {{/t.body}}
  {{/ember-table}}
```

The rendered table is a plain table without any styling. You can define styling for your own table.
If you want to use default table style, import the `ember-table/default` SASS file.

### Optional Footer

You can also use the `ember-tfoot` component, which has the same API as
`ember-tbody`:

```
  {{#ember-table as |t|}}
    {{t.head columns=columns}}

    {{t.body rows=rows}}

    {{t.foot rows=footerRows}}
  {{/ember-table}}
```

## Browser compatibility

This project is written using an EcmaScript 6 javascript syntax.
Babel doesn't include polyfill by default, so if you want to target legacy browsers (eg. IE11),
you need to add this to your `ember-cli-build.js`:

```js
var app = new EmberApp({
  'ember-cli-babel': {
    includePolyfill: true,
  },
});
```

## Migrating from old Ember table

To support smooth migration from old version of Ember table (support only till ember 1.11), we have
move the old source code to separate package [ember-table-legacy](https://github.com/Addepar/ember-table-legacy).
It's a separate package from this Ember table package and you can install it using yarn or npm.
This allows you to have 2 versions of ember table in your code base and you can start your migrating
one table at at time. The recommended migration steps are as follows (if you are using ember 1.11):

1. Rename all your ember-table import to ember-table-legacy. (for example:
   `import EmberTable from 'ember-table/components/ember-table'` becomes
   `import EmberTableLegacy from 'ember-table-legacy/components/ember-table-legacy'`. Remove reference
   of `ember-table` in `package.json`.
2. Install `ember-table-legacy` using `yarn add ember-table-legacy` or `npm install ember-table-legacy`
3. Run your app to make sure that it works without issue.
4. Reinstall the latest version of this `ember-table` repo.
5. You can start using new version of Ember table from now or replacing the old ones.

# Releasing new versions (for maintainers)

We use [`release-it`](https://github.com/release-it/release-it).
To create a new release, run `yarn run release`. To do a dry-run: `yarn run release --dry-run`.
The tool will prompt you to select the new release version.
