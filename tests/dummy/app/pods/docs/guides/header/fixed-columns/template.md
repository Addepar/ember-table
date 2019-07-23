# Fixed Columns

Columns can be fixed to the left or the right side of a table by setting the
`isFixed` property on the column to `'left'` or `'right'`. Only root columns
may be fixed, subcolumns will ignore their own `isFixed` property and use their
parent's value instead.

{{#docs-demo as |demo|}}
  {{#demo.example name='fixed-columns'}}
    <div class="demo-container small">
      {{! BEGIN-SNIPPET docs-example-fixed-columns.hbs }}
        <EmberTable as |t|>
          <t.head @columns={{columns}} />

          <t.body @rows={{rows}} />
        </EmberTable>
      {{! END-SNIPPET }}
    </div>
  {{/demo.example}}

  {{demo.snippet name='docs-example-fixed-columns.hbs'}}
  {{demo.snippet name='docs-example-fixed-columns.js' label='component.js'}}
{{/docs-demo}}

## Multiple Fixed Columns and Ordering

Multiple columns may be fixed to either side of the table. Fixed columns _must_
be placed contiguously at the start or end of the `columns` array. If columns
are marked as fixed and are out of order, Ember Table will sort the columns
array directly to fix the ordering.

{{#docs-demo as |demo|}}
  {{#demo.example name='out-of-order-fixed-columns'}}
    <div class="demo-container small">
      {{! BEGIN-SNIPPET docs-example-out-of-order-fixed-columns.hbs }}
        <EmberTable as |t|>
          <t.head @columns={{outOfOrderFixedColumns}} />

          <t.body @rows={{rows}} />
        </EmberTable>
      {{! END-SNIPPET }}
    </div>
  {{/demo.example}}

  {{demo.snippet name='docs-example-out-of-order-fixed-columns.hbs'}}
  {{demo.snippet name='docs-example-out-of-order-fixed-columns.js' label='component.js'}}
{{/docs-demo}}

## Dynamic Fixed Columns

Fixed positioning can be changed at any time, the below example demonstrates how
you can make fixed columns toggleable for your users.

{{#docs-demo as |demo|}}
  {{#demo.example name='dynamic-fixed-columns'}}
    {{docs/guides/header/fixed-columns/dynamic-example
      rows=rows
      columns=dynamicFixedColumns
      toggleFixed=(action toggleFixed)
    }}
  {{/demo.example}}

  {{demo.snippet name='docs-example-dynamic-fixed-columns.hbs'}}
  {{demo.snippet name='docs-example-dynamic-fixed-columns.js' label='component.js'}}
{{/docs-demo}}
