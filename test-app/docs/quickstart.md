---
order: 1
---

# Quickstart

## Installation

```sh
pnpm add ember-table
```

## Basic Usage

To use `Ember Table`, you'll need to create column definitions, and you'll need
to pass in an array of rows. Here is a component with some basic column
definitions and a rows array:

```gjs preview
import { EmberTable } from 'ember-table';

const columns = [
  { name: 'First Name', valuePath: 'firstName' },
  { name: 'Last Name', valuePath: 'lastName' },
];

const rows = [
  { firstName: 'Tony', lastName: 'Stark' },
  { firstName: 'Tom', lastName: 'Dale' },
];

<template>
  <div class="demo-container">
    <EmberTable as |t|>
      <t.head @columns={{columns}} />
      <t.body @rows={{rows}} />
    </EmberTable>
  </div>
</template>
```

Note how each item in the rows array has `firstName` and `lastName` properties,
which matches up with the `valuePath` properties from the column definitions.
This is how the table will get the values for each column.

In a classic (loose mode) template, the components are available by name
without importing them:

```hbs
<EmberTable as |t|>
  <t.head @columns={{this.columns}} />
  <t.body @rows={{this.rows}} />
</EmberTable>
```

And voila! You should have a basic table up and running!
