# Legacy Usage

Ember Table is backwards compatible and tested back to Ember 1.11! It's meant to
be a fully replacement for Ember Table 1, and we intend to provide a path
forward for all of our original users, and any other applications that may be
stuck in the days of `ListView` et. al.

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
