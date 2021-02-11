# Scroll Indicators

Set the `scrollIndicators` argument to `all`, `horizontal`, `vertical`, or `none` to
shade the edges of the table where the user can scroll to see more data.
These indicators will show/hide when there is content overflowing in their
respective direction.

{{#docs-demo as |demo|}}
  {{#demo.example name='scroll-indicators'}}
    <div class="demo-container">
      {{! BEGIN-SNIPPET docs-example-scroll-indicators.hbs }}

        <EmberTable as |t|>
          <t.head
            @columns={{columns}}
            @scrollIndicators="all"
          />
          <t.body @rows={{rows}} />
        </EmberTable>
      {{! END-SNIPPET }}
    </div>
  {{/demo.example}}

  {{demo.snippet name='docs-example-scroll-indicators.hbs'}}
  {{demo.snippet name='docs-example-scroll-indicators.js' label='component.js'}}
{{/docs-demo}}

## Horizontal Scroll Indicators with Fixed Columns

Horizontal indicators will respect fixed columns, appearing inside of
them when they are present, or at the edges of the table when they are not.

{{#docs-demo as |demo|}}
  {{#demo.example name='scroll-indicators-with-fixed'}}
    <div class="demo-container">
      {{! BEGIN-SNIPPET docs-example-scroll-indicators-with-fixed.hbs }}

        <EmberTable as |t|>
          <t.head
            @columns={{columnsWithFixed}}
            @scrollIndicators="horizontal"
          />
          <t.body @rows={{rows}} />
        </EmberTable>
      {{! END-SNIPPET }}
    </div>
  {{/demo.example}}

  {{demo.snippet name='docs-example-scroll-indicators-with-fixed.hbs'}}
  {{demo.snippet name='docs-example-scroll-indicators-with-fixed.js' label='component.js'}}
{{/docs-demo}}

## Vertical Scroll Indicators with a Header & Footer

Vertical scroll indicators respect both headers and footers, appearing just
inside any sticky rows at the top or bottom of the table.

{{#docs-demo as |demo|}}
  {{#demo.example name='scroll-indicators-with-footer'}}
    <div class="demo-container">
      {{! BEGIN-SNIPPET docs-example-scroll-indicators-with-footer.hbs }}

        <EmberTable as |t|>
          <t.head
            @columns={{columnsWithFooter}}
            @scrollIndicators="vertical"
          />
          <t.body @rows={{rows}} />
          <t.foot @rows={{footerRows}} as |f|>
            <f.row />
          </t.foot>
        </EmberTable>
      {{! END-SNIPPET }}
    </div>
  {{/demo.example}}

  {{demo.snippet name='docs-example-scroll-indicators-with-footer.hbs'}}
  {{demo.snippet name='docs-example-scroll-indicators-with-footer.js' label='component.js'}}
{{/docs-demo}}
