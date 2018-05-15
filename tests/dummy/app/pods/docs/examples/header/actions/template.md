# Header Actions

Headers send the `onResize` and `onReorder` actions whenever a resize or a
reorder has occured.

{{#docs-demo as |demo|}}
  {{#demo.example}}
    {{! BEGIN-SNIPPET docs-example-header-action.hbs }}
    <p>Resized {{resizeCount}} times</p>
    <p>Reorder {{reorderCount}} times</p>

    <div class="demo-container small">
      {{#ember-table as |t|}}
        {{ember-thead
          api=t
          columns=columns
          onResize=(action (mut resizeCount) (add resizeCount 1))
          onReorder=(action (mut reorderCount) (add reorderCount 1))
        }}

        {{ember-tbody api=t rows=rows}}
      {{/ember-table}}
    </div>
    {{! END-SNIPPET }}
  {{/demo.example}}

  {{demo.snippet name='docs-example-header-action.hbs'}}
{{/docs-demo}}
