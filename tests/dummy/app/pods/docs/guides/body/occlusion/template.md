# Occlusion

Rendering lots and lots of HTML is really expensive for the browser, much more
expensive than tracking those things in Javascript. Occlusion is a technique
where we only render the HTML that is visible to the user at a given time. This
allows us to load and present much more data than would otherwise be possible.

Ember Table uses [vertical-collection](https://github.com/html-next/vertical-collection)
by default to occlude rows of the table. This allows the table to render tens of
thousands of rows without any performance hiccups.

The occlusion also accounts for variable row heights automatically - no need to
have static row heights, or to know the row heights in advance.

## Configuring Occlusion

You can pass some parameters to the table body to fine tune the occlusion
settings. The current options are:

* `estimateRowHeight`: Vertical-collection figures out what your row heights
  are by measuring them after they have rendered. The first time each row is
  rendered, it assumes the row's height will be whatever value is provided by
  the `estimateRowHeight` in pixels (defaults to `30`). A more accurate estimate
  is always better, as it means vertical-collection will have less work to do
  if the "guess" was incorrect.

* `staticHeight`: This field is a boolean flag that defaults to `false`. If you
  enable this field, vertical-collection will assume that all of the rows'
  heights are _exactly_ the value of `estimateRowHeight`. This will mean less
  work for vertical-collection and will be slightly more performant.

  Vertical-collection will **not** apply style changes to your rows if you
  pass `staticHeight=true`. You are responsible for ensuring that your rows are
  styled to always be the same as `estimateRowHeight`.

* `key`: This key is the property used by the vertical-collection to determine
  whether an array mutation is an append, prepend, or complete replacement. It
  defaults to the object identity `"@identity"`.

{{#docs-demo as |demo|}}
  {{#demo.example}}
    {{! BEGIN-SNIPPET docs-example-occlusion.hbs }}
    <div class="demo-container">
      <EmberTable as |t|>
        <t.head @columns={{this.columns}} />

        <t.body
          @rows={{this.rows}}
          @staticHeight={{true}}
          @estimateRowHeight={{41}}
          @key="A"
        />
      </EmberTable>
    </div>
    {{! END-SNIPPET }}
  {{/demo.example}}

  {{demo.snippet name='docs-example-occlusion.hbs'}}
  {{demo.snippet label='component.js' name='docs-example-occlusion.js'}}
{{/docs-demo}}
