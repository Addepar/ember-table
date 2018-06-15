# Legacy Usage

Ember Table is backwards compatible and tested back to Ember 1.11! It's meant to
be a fully replacement for Ember Table 1, and we intend to provide a path
forward for all of our original users, and any other applications that may be
stuck in the days of `ListView` et. al.

## Usage with Ember 2.3-2.11

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
{{#ember-table data-test-ember-table=true as |t|}}
  {{#t.head columns=columns as |h|}}
    {{#h.row as |r|}}
      {{r.cell}}
    {{/h.row}}
  {{/t.head}}

  {{#t.body rows=rows as |b|}}
    {{#b.row as |r|}}
      {{#r.cell as |cellValue|}}
        {{cellValue}}
      {{/r.cell}}
    {{/b.row}}
  {{/t.body}}

  {{#t.foot rows=footerRows as |f|}}
    {{#f.row as |r|}}
      {{#r.cell as |cellValue|}}
        {{cellValue}}
      {{/r.cell}}
    {{/f.row}}
  {{/t.foot}}
{{/ember-table}}
```

## Usage with Ember 1.11-2.2

When using Ember Table with versions of Ember that do not yet support contextual
components, you can invoke its' component directly and manually pass the `api`
object forward:

```hbs
{{#ember-table data-test-ember-table=true as |t|}}
  {{#ember-thead api=t columns=columns as |h|}}
    {{#ember-tr api=h as |r|}}
      {{ember-th api=r}}
    {{/ember-tr}}
  {{/ember-thead}}

  {{#ember-tbody api=t rows=rows as |b|}}
    {{#ember-tr api=b as |r|}}
      {{#ember-td api=r as |cellValue|}}
        {{cellValue}}
      {{/ember-td}}
    {{/ember-tr}}
  {{/ember-tbody}}

  {{#ember-tfoot api=t rows=footerRows as |f|}}
    {{#ember-tr api=f as |r|}}
      {{#ember-td api=r as |cellValue|}}
        {{cellValue}}
      {{/ember-td}}
    {{/ember-tr}}
  {{/ember-tfoot}}
{{/ember-table}}
```
