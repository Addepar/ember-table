![npm version](https://img.shields.io/npm/v/ember-table)

# Ember Table

An addon to support large data set and a number of features around table. Ember Table can
handle over 100,000 rows without any rendering or performance issues.

Ember Table versions each support a range of browsers and framework versions:

| Ember Table Version | Ember Versions Supported     | Browser Support |
| ------------------- | ---------------------------- | --------------- |
| 6.x (prerelease)    | 5.12 - 7.x                   | Last two versions of Chrome, Safari, Edge, Firefox on desktop and mobile. |
| 5.x                 | 3.12 - 4.x (possibly 5.x?)   | Last two versions of Chrome, Safari, Edge, Firefox on desktop and mobile. |
| 4.x                 | 2.18 - 4.x                   | Last two versions of Chrome, Safari, Edge, Firefox on desktop and mobile. |
| 3.x                 | 2.8 - 3.28 (last 3.x version | Last two versions of Chrome, Safari, Edge, Firefox on desktop and mobile. |
| 2.x                 | 1.11 - 3.8 (or around 3.8)   | IE11+ and newer browsers |

## Install

```bash
pnpm add ember-table
```

Ember Table is a [v2 addon](https://rfcs.emberjs.com/id/0507-embroider-v2-package-format/).
It works in Vite apps and, through `ember-auto-import`, in classic ember-cli apps. In `.gjs`/`.gts`
templates, import the components from the package:

```gjs
import { EmberTable, EmberThead, EmberTbody } from 'ember-table';
```

Classic apps can also invoke them by name (`<EmberTable>`) from loose-mode templates.

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

The documentation site deploys to [Vercel](https://vercel.com) from the repository root
(`vercel.json`): it installs the workspace, builds the addon, and serves the test app's
production build. It is built with [Docfy](https://docfy.dev) from the Markdown in
[`test-app/docs`](./test-app/docs). Every example is a live `gjs` component whose source is shown
alongside it, highlighted with Shiki's Glimmer grammars. The API reference pages are generated
from the addon's type declarations (`test-app/scripts/api-docs.mjs`), so argument tables, defaults
and descriptions come from the doc comments in `ember-table/src`. To run the docs locally, clone the repo, run `pnpm install && pnpm start`, and open
the URL Vite prints (`/docs`).

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
If you want to use the default table style, import the `ember-table/default.scss` Sass file:

```scss
@use 'ember-table/default.scss';
```

Vite resolves this through the package's `exports`. With the classic `ember-cli-sass`
pipeline, add `node_modules` to its `includePaths` and import `ember-table/dist/styles/default`.

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

### Stripping test selectors from production builds

Ember Table's templates carry `data-test-*` attributes for its page objects. They are compiled by
your app, so your app decides whether to strip them. In a Vite app, add
[`strip-test-selectors`](https://github.com/mainmatter/ember-test-selectors/tree/master/strip-test-selectors)
to the template transforms for production builds; it strips your own templates' selectors too:

```js
// babel.config.mjs
export default function (api) {
  return {
    plugins: [
      [
        'babel-plugin-ember-template-compilation',
        {
          transforms: [
            ...macros.templateMacros,
            ...(api.env('production') ? ['strip-test-selectors'] : []),
          ],
        },
      ],
      // ...
    ],
  };
}
```

Build your tests in a non-production mode (e.g. `vite build --mode development`) so the
selectors stay.

## Using Ember Table with TypeScript and Glint

Ember Table is written in TypeScript, and its type declarations are generated from the
source. Components, their signatures (`EmberTableSignature`, `EmberTheadArgs`,
`EmberTbodyArgs`, ...) and the shared interfaces (`EmberTableColumn`, `EmberTableRow`,
`EmberTableSort`, `TableColumnMeta`, `TableRowMeta`) are importable from the package.

### Template-tag components (`.gts`)

Import the components and type your rows by specializing `EmberTable` with an
instantiation expression. Rows passed to the body and values yielded by rows are then
checked against your interface:

```gts
import EmberTable from 'ember-table/components/ember-table/component';
import type { EmberTableColumn, EmberTableRow } from 'ember-table';

interface Person extends EmberTableRow {
  firstName: string;
  age: number;
}

const PeopleTable = EmberTable<Person>;

const columns: EmberTableColumn[] = [{ name: 'First Name', valuePath: 'firstName' }];

<template>
  <PeopleTable as |t|>
    <t.head @columns={{columns}} />
    <t.body @rows={{@people}} as |b|>
      <b.row as |r|>
        <r.cell>{{r.rowValue.firstName}} ({{r.rowValue.age}})</r.cell>
      </b.row>
    </t.body>
  </PeopleTable>
</template>
```

Without a row type, yielded cell values are untyped.

### Loose-mode templates (`.hbs`)

Apps type-checking loose-mode templates can merge Ember Table's template registry into
their own:

```ts
// types/global.d.ts
import '@glint/environment-ember-loose';
import type EmberTableRegistry from 'ember-table/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry extends EmberTableRegistry /* other addon registries */ {}
}
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

We use [`release-it`](https://github.com/release-it/release-it) from the `ember-table` package
directory. To create a new release, run `pnpm release` there. To do a dry-run: `pnpm release --dry-run`.
The tool will prompt you to select the new release version.

**You must be a member of the @Addepar/web-core team on GitHub to bypass master
branch protection.**

### Development

This repository is a pnpm workspace:

- `ember-table/` is the published v2 addon (`pnpm --filter ember-table build`).
- `test-app/` is a Vite app that hosts both the test suite and the documentation site.

In VS Code, install the recommended extensions (`.vscode/extensions.json`), notably
[Glint](https://marketplace.visualstudio.com/items?itemName=typed-ember.glint2-vscode), for types and
go-to-definition in `.gts` files, and use the workspace TypeScript version when prompted. Run
`pnpm build` once so the test app's project reference can follow imports into the addon's source.

Run `pnpm test` from the root to build the addon and run the test suite. Where no local Chrome is
available, point Testem at a containerized Chromium:
`CHROME_BIN=$PWD/test-app/scripts/docker-chrome pnpm test`.

Compatibility scenarios use [`@embroider/try`](https://github.com/embroider-build/embroider/tree/main/packages/try).
Apply a scenario to both packages (see `.github/workflows/ci.yml`), reinstall, and test:

```bash
(cd test-app && pnpm dlx @embroider/try apply ember-lts-6.4)
(cd ember-table && pnpm dlx @embroider/try apply ember-lts-6.4)
pnpm install --no-frozen-lockfile && pnpm test
```
