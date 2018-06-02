# Size Constraints

You can set the `widthConstraint` property on your table to ensure that it never
grows too big or too small. There are 4 possible settings:

1. `eq-container`: Ensures that the table is always exactly the width the of its
container.

2. `gte-container`: Ensures that the table is always larger than the width of
its container.

3. `lte-container`: Ensures that the table is never larger than its container.

4. `none`: The default, does not enforce any size constraint.

The table will react to resizing its container automatically. Sizing will _not_
override the min/max widths provided by columns.

<aside>
  `eq-container` mode should generally be paired with `resizeMode='fluid'` to
  get a more natural resize effect. This is useful for tables that must fit
  a constrained space, like tables in a powerpoint
</aside>

{{#docs-demo as |demo|}}
  {{#demo.example}}
    {{! BEGIN-SNIPPET docs-example-header-size-constraint.hbs }}
    <label class="pr-4">
      eq-container
      {{radio-button name='width-constraint' value='eq-container' groupValue=widthConstraint}}
    </label>

    <label class="pr-4">
      gte-container
      {{radio-button name='width-constraint' value='gte-container' groupValue=widthConstraint}}
    </label>

    <label class="pr-4">
      lte-container
      {{radio-button name='width-constraint' value='lte-container' groupValue=widthConstraint}}
    </label>

    <label>
      none
      {{radio-button name='width-constraint' value='none' groupValue=widthConstraint}}
    </label>

    <div class="resize-container">
      {{#ember-table as |t|}}
        {{t.head
          columns=columns
          widthConstraint=widthConstraint
          resizeMode=(if (eq widthConstraint 'eq-container') 'fluid' 'standard')
        }}

        {{t.body rows=rows}}
      {{/ember-table}}
    </div>
    {{! END-SNIPPET }}
  {{/demo.example}}

  {{demo.snippet name='docs-example-header-size-constraint.hbs'}}
{{/docs-demo}}

## Fill Mode

You can also set the fill mode for when a table is resizing to fit the width
constraint. The options are:

* `equal-column`: The default, spreads delta across all columns equally

* `first-column`: Puts the delta in the first column

* `last-column`: Puts the delta in the first column

{{#docs-demo as |demo|}}
  {{#demo.example name='docs-example-header-fill-mode'}}
    {{! BEGIN-SNIPPET docs-example-header-fill-mode.hbs }}
    <label class="pr-4">
      equal-column
      {{radio-button name='fill-mode' value='equal-column' groupValue=fillMode}}
    </label>

    <label class="pr-4">
      first-column
      {{radio-button name='fill-mode' value='first-column' groupValue=fillMode}}
    </label>

    <label>
      last-column
      {{radio-button name='fill-mode' value='last-column' groupValue=fillMode}}
    </label>


    <div class="resize-container">
      {{#ember-table as |t|}}
        {{t.head
          columns=columns
          widthConstraint='eq-container'
          resizeMode='fluid'
          fillMode=fillMode
        }}

        {{t.body rows=rows}}
      {{/ember-table}}
    </div>
    {{! END-SNIPPET }}
  {{/demo.example}}

  {{demo.snippet name='docs-example-header-fill-mode.hbs'}}
{{/docs-demo}}
