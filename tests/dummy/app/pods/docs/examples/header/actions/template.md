# Header Actions

It's a common use case in tables to have dropdown menus in their headers. You
can pass a `dropdownActions` array to the header cells directly to get a
dropdown that contains actions.

{{#docs-demo as |demo|}}
  {{#demo.example}}
    {{! BEGIN-SNIPPET docs-example-header-action.hbs }}
    <div class="demo-container small">
      {{#ember-table as |t|}}
        {{#ember-thead
          api=t
          columns=columns

          as |h|
        }}
          {{#ember-tr api=h as |r|}}
            {{ember-th
              api=r

              onDropdownAction=(action logActionName)
              dropdownActions=dropdownActions
            }}
          {{/ember-tr}}
        {{/ember-thead}}

        {{ember-tbody api=t rows=rows}}
      {{/ember-table}}
    </div>
    {{! END-SNIPPET }}
  {{/demo.example}}

  {{demo.snippet name='docs-example-header-action.hbs'}}
{{/docs-demo}}
