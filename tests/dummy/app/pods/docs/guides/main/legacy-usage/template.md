# Legacy Usage

Ember Table is compatible (and tested) with Ember 2.8 and up.

## Usage with Ember 2.8-2.11

You may have noticed that all of the examples for Ember Table on this docs site
are using angle bracket syntax (.e.g. `foo-bar`). This is an exciting new
feature of Ember that has been polyfilled for all versions of Ember 2.12+, and
is definitely recommended if you can use it.

If you are on a version of Ember that does not support angle bracket syntax, you
can still invoke Ember Table with the curly style. Angle brackets are an
alternative syntax for curly style component invocations, and do not add any
extra features. To see the differences, check out the
[angle bracket syntax polyfill](https://github.com/rwjblue/ember-angle-bracket-invocation-polyfill)
or the original [angle bracket invocation rfc](https://github.com/emberjs/rfcs/blob/master/text/0311-angle-bracket-invocation.md).

```hbs
{{#ember-table as |t|}}
  {{#t.head columns=this.columns as |h|}}
    {{#h.row as |r|}}
      {{r.cell}}
    {{/h.row}}
  {{/t.head}}

  {{#t.body rows=this.rows as |b|}}
    {{#b.row as |r|}}
      {{#r.cell as |cellValue|}}
        {{cellValue}}
      {{/r.cell}}
    {{/b.row}}
  {{/t.body}}

  {{#t.foot rows=this.footerRows as |f|}}
    {{#f.row as |r|}}
      {{#r.cell as |cellValue|}}
        {{cellValue}}
      {{/r.cell}}
    {{/f.row}}
  {{/t.foot}}
{{/ember-table}}
```
