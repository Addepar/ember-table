![npm version](https://img.shields.io/npm/v/ember-table)

# Ember Table

An addon to support large data set and a number of features around table. Ember Table can
handle over 100,000 rows without any rendering or performance issues.

Ember Table versions each support a range of browsers and framework versions:

| Ember Table Version | Ember Versions Supported     | Browser Support |
| ------------------- | ---------------------------- | --------------- |
| 5.x                 | 3.12 - 4.x                   | Last two versions of Chrome, Safari, Edge, Firefox on desktop and mobile. |
| 4.x                 | 2.18 - 4.x                   | Last two versions of Chrome, Safari, Edge, Firefox on desktop and mobile. |
| 3.x                 | 2.8 - 3.28 (last 3.x version | Last two versions of Chrome, Safari, Edge, Firefox on desktop and mobile. |
| 2.x                 | 1.11 - 3.8 (or around 3.8)   | IE11+ and newer browsers |

## Install

```bash
ember install ember-table
```
### Using ember-table with Ember <= 3.24
Use resolutions in your package.json to pin down `ember-classy-page-object` to version `0.7.0`.
Newer versions are used to support Ember >= 3.28

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
`objectAt(index)`. This flexibility gives application to avoid having all data at front but loads more
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
  <EmberTable as |t|>
    <t.head @columns={{this.columns}} />

    <t.body @rows={{this.rows}} />
  </EmberTable>
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
  <EmberTable as |t|>
    <t.head @columns={{this.columns}} />

    <t.body @rows={{this.rows}} as |b|>
      <b.row as |r|>
        <r.cell as |value column row|>
          {{component column.component value=value}}
        </r.cell>
      </b.row>
    </t.body>
  </EmberTable>
```

The rendered table is a plain table without any styling. You can define styling for your own table.
If you want to use default table style, import the `ember-table/default` SASS file.

### Optional Footer

You can also use the `ember-tfoot` component, which has the same API as
`ember-tbody`:

```
  <EmberTable as |t|>
    <t.head @columns={{this.columns}} />

    <t.body @rows={{this.rows}} />

    <t.foot @rows={{this.footerRows}} />
  </EmberTable>
```

## Writing tests for Ember Table in your application

Ember Table comes with test helpers, for example:

To use these helpers, you should setup Ember Table for testing in your application's `tests/test-helper.js` file. For example:

```js
import { setupForTest as setupEmberTableForTest } from 'ember-table/test-support';

setupEmberTableForTest();
```

## EXPERIMENTAL: Using Ember Table with Glint

Ember Table provides **experimental** Glint types defined in the `/types/` directory.
These types may change at any time and are **NOT** covered by Ember Table's semantic versioning.
They are intended to support standard documented usage of Ember Table and do not attempt to type the internals of the Ember Table addon.
If you are using Ember Table in a more advanced way (such as extending Ember Table components), you will still need to define your own types for those use cases.

### Glint Types Installation

Assuming you have the Ember Table addon installed, you can import and register Ember Table's Glint types in the manner [recommended by the Glint docs](https://typed-ember.gitbook.io/glint/using-glint/ember/using-addons#using-glint-enabled-addons):

```ts
// types/global.d.ts
import '@glint/environment-ember-loose';
import EmberTableRegistry from 'ember-table/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry extends EmberTableRegistry, /* other addon registries */ {
    // local entries
  }
}
```

### Glint Types Usage

1. Define a type interface for your row contents. If your columns contain additional custom attributes, you can type those as well. Ember Table provides default interfaces that can be extended for this purpose.
1. Extend the base Ember Table component passing in your row and (optional) column interfaces as generics.
1. Use this extended version of the Ember Table component in your template.

```ts
// my-table-component.ts
import type { EmberTableColumn, EmberTableRow } from 'ember-table';
import EmberTableComponent from 'ember-table/components/ember-table/component';

interface MyTableColumn extends EmberTableColumn {
  // Add any custom column attribute types here (optional)
}

interface MyTableRow extends EmberTableRow {
  // Add the attributes and types for your table rows here
}

class MyEmberTableComponent extends EmberTableComponent<MyTableRow, MyTableColumn> {}

export default class MyTableComponent extends Component<MyTableComponentSignature> {
  emberTableComponent = MyEmberTableComponent;
}
```

```hbs
{{! my-table-component.hbs }}
<this.emberTableComponent as |t|>
  {{! Use Ember Table as usual. Row and column arguments will be enforced to match the appropriate types. }}
  {{! Yielded items (rows, columns) will be typed according to the specified interfaces. }}
  {{! Cell values will be typed as a union of all defined row attribute types. }}
</this.emberTableComponent>
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

# Notes for maintainers

### Releasing new versions (for maintainers)

We use [`release-it`](https://github.com/release-it/release-it).
To create a new release, run `yarn run release`. To do a dry-run: `yarn run release --dry-run`.
The tool will prompt you to select the new release version.

### Generating documentation.

This library is documented using Ember Addon Docs. v0.6.3+ of that library
bring a CSS reset files into the test suite of Ember Table, meaning many
tests would be corrupted away from the useragent styles they were written
against.

Because of this, building the docs requires going through Ember Try. For
example to run tests asserting the docs build:

```
ember try:one ember-default-docs
```

You might also want to run a command with the addon docs libraries installed,
for example to create a production build, and you can do so like this:

```
ember try:one ember-default-docs --- ember build -e production
```
