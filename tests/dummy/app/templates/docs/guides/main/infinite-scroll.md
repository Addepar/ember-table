# Infinite Scroll

Infinite scroll is a common UI pattern where additional table rows are loaded as the user scrolls toward the bottom of the table. Ember Table does not provide infinite scrolling out of the box, but it has all the parts required to build an infinite scrolling table.

{{#docs-demo as |demo|}}
  {{#demo.example}}
    {{examples/infinite-scroll}}
  {{/demo.example}}

  {{demo.snippet name='docs-example-infinite-scroll.hbs'}}
  {{demo.snippet label='component.js' name='docs-example-infinite-scroll.js'}}
{{/docs-demo}}

Ember Table does not provide a built-in spinner. You must specify your own by passing a block to `<t.loadingMore>` like in the example above. See the {{#link-to route='docs.api.item' model='components/ember-table-loading-more'}}`EmberTableLoadingMore`{{/link-to}} component docs for more information.
