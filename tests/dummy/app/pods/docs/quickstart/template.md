# Quickstart.

## Installation

```sh
ember install ember-table
```

## Basic Usage

To use `Ember Table`, you'll need to create column definitions, and you'll need
to pass in an array of rows. Here is a component definition with some basic
column definitions and a rows array:

```javascript
import Component from '@ember/component';

class DemoComponent extends Component {
  columns = [
    {
      name: `First Name`,
      valuePath: `firstName`
    },
    {
      name: `Last Name`,
      valuePath: `lastName`
    }
  ];

  rows = [
    {
      firstName: 'Tony',
      lastName: 'Stark',
    },
    {
      firstName: 'Tom',
      lastName: 'Dale',
    }
  ];
}
```

Note how each item in the rows array has `firstName` and `lastName` properties,
which matches up with the `valuePath` properties from the column definitions.
This is how the table will get the values for each column.

Now let's setup the template for this component:

```hbs
  <EmberTable as |t|>
    <t.head @columns={{columns}} />
    <t.body @rows={{rows}} />
  </EmberTable>
```

And viola! You should have a basic table up and running!
