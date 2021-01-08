# Scroll Indicators

Set the `enableScrollIndicators` argument to `true` to
enable visual indicators that the table content can be scrolled left-to-right.
These indicators will show/hide when there is content overflowing in their
respective direction.

{{#docs-demo as |demo|}}
  {{#demo.example name='scroll-indicators'}}
    <div class="demo-container">
      {{! BEGIN-SNIPPET docs-example-scroll-indicators.hbs }}
        <EmberTable as |t|>
          <t.head
            @columns={{columns}}
            @enableScrollIndicators={{true}}
          />
          <t.body @rows={{rows}} />
        </EmberTable>
      {{! END-SNIPPET }}
    </div>
  {{/demo.example}}

  {{demo.snippet name='docs-example-scroll-indicators.hbs'}}
  {{demo.snippet name='docs-example-scroll-indicators.js' label='component.js'}}
{{/docs-demo}}

## Scroll Indicators with Fixed Columns

Scroll indicators will respect fixed columns, appearing inside of
them when they are present or at the edges of the table when they are not.

{{#docs-demo as |demo|}}
  {{#demo.example name='scroll-indicators-with-fixed'}}
    <div class="demo-container">
      {{! BEGIN-SNIPPET docs-example-scroll-indicators-with-fixed.hbs }}
        <EmberTable as |t|>
          <t.head
            @columns={{columnsWithFixed}}
            @enableScrollIndicators={{true}}
          />
          <t.body @rows={{rows}} />
        </EmberTable>
      {{! END-SNIPPET }}
    </div>
  {{/demo.example}}

  {{demo.snippet name='docs-example-scroll-indicators-with-fixed.hbs'}}
  {{demo.snippet name='docs-example-scroll-indicators-with-fixed.js' label='component.js'}}
{{/docs-demo}}
