# A Basic Table

Tables can get very complicated, and it's not easy to have a table API that is
powerful, flexible, and succinct. Ember Table makes this tradeoff by providing a
very flexible API, but at the cost of being fairly verbose. Because this table
is meant for power users who need a lot of functionality and flexibility, this
tradeoff generally makes sense.

The table has a set of sane defaults. If you don't need much customization,
setting up a minimal instance of Ember Table will only require you to define a
header and a body, with columns and rows passed to it.

{{#docs-demo as |demo|}}
  {{#demo.example}}
    <div class="demo-container">
      {{! BEGIN-SNIPPET docs-example-basic-table.hbs }}
      <EmberTable as |t|>
        <t.head @columns={{this.columns}} />

        <t.body @rows={{this.rows}} />
      </EmberTable>
      {{! END-SNIPPET }}
    </div>
  {{/demo.example}}

  {{demo.snippet name='docs-example-basic-table.hbs'}}
  {{demo.snippet label='component.js' name='docs-example-basic-table.js'}}
{{/docs-demo}}

## High Level Structure

At a high level, the structure of Ember Table is meant to mimic the structure of
HTML tables directly. This allows you to customize each element in the table;
you can add class names, setup actions, and handle events anywhere.

This example demonstrates the same table as above, but with each level yielded.

{{#docs-demo as |demo|}}
  {{#demo.example name='expanded'}}
    <div class="demo-container">
      {{! BEGIN-SNIPPET docs-example-basic-expanded-table.hbs }}
      <EmberTable as |t|>
        <t.head @columns={{this.columns}} as |h|>
          <h.row as |r|>
            <r.cell as |column|>
              {{column.name}}
            </r.cell>
          </h.row>
        </t.head>

        <t.body @rows={{this.rows}} as |b|>
          <b.row as |r|>
            <r.cell as |value|>
              {{value}}
            </r.cell>
          </b.row>
        </t.body>
      </EmberTable>
      {{! END-SNIPPET }}
    </div>
  {{/demo.example}}

  {{demo.snippet name='docs-example-basic-expanded-table.hbs'}}
{{/docs-demo}}
