# Size Constraints

You can set the `widthConstraint` property on your table to ensure that it never
grows too big or too small. There are 4 possible settings:

1. `eq-container`: Ensures that the table is always exactly the width the of its
container.

2. `gte-container`: Ensures that the table is always the same width or larger than its container.

3. `gte-container-slack`: Similar to `gte-container`, but when columns don't fill the container, a blank "slack" column is added to fill available whitespace.

4. `lte-container`: Ensures that the table is never larger than its container.

5. `none`: The default, does not enforce any size constraint.

The table will react to resizing its container automatically. Sizing will _not_
override the min/max widths provided by columns.

<aside>
  `eq-container` mode should generally be paired with `resizeMode='fluid'` to
  get a more natural resize effect. This is useful for tables that must fit
  a constrained space, like tables in a powerpoint.
  <br><br>
  If you need to make a small adjustment to the container width (such as to
  account for a customized scrollbar that would cover some portion of the
  container width), set `containerWidthAdjustment` to a numerical value equal to
  the amount you need the measured container width to be adjusted.
</aside>

{{#docs-demo as |demo|}}
  {{#demo.example}}
    {{! BEGIN-SNIPPET docs-example-header-size-constraint.hbs }}
    <div class="demo-options">
      <label>
        eq-container
        {{radio-button name='width-constraint' value='eq-container' groupValue=widthConstraint}}
      </label>

      <label>
        gte-container
        {{radio-button name='width-constraint' value='gte-container' groupValue=widthConstraint}}
      </label>

      <label>
        gte-container-slack
        {{radio-button name='width-constraint' value='gte-container-slack' groupValue=widthConstraint}}
      </label>

      <label>
        lte-container
        {{radio-button name='width-constraint' value='lte-container' groupValue=widthConstraint}}
      </label>

      <label>
        none
        {{radio-button name='width-constraint' value='none' groupValue=widthConstraint}}
      </label>
    </div>

    <div class="resize-container">
      <EmberTable class="vertical-borders" as |t|>
        <t.head
          @columns={{columns}}
          @widthConstraint={{widthConstraint}}
          @scrollIndicators="horizontal"
        />

        <t.body @rows={{rows}} />
      </EmberTable>
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

* `nth-column`: Puts the delta in the nth column as defined by `fillColumnIndex`

{{#docs-demo as |demo|}}
  {{#demo.example name='docs-example-header-fill-mode'}}
    {{! BEGIN-SNIPPET docs-example-header-fill-mode.hbs }}
    <div class="demo-options">
      <label>
        equal-column
        {{radio-button name='fill-mode' value='equal-column' groupValue=fillMode}}
      </label>

      <label>
        first-column
        {{radio-button name='fill-mode' value='first-column' groupValue=fillMode}}
      </label>

      <label>
        last-column
        {{radio-button name='fill-mode' value='last-column' groupValue=fillMode}}
      </label>
    </div>

    <label>
      nth-column
      {{radio-button name='fill-mode' value='nth-column' groupValue=fillMode}}
    </label>

    <div class="resize-container">
      <EmberTable as |t|>
        <t.head
          @columns={{columns}}
          @widthConstraint='eq-container'
          @resizeMode='fluid'
          @fillMode={{fillMode}}
          @fillColumnIndex=1
        />

        <t.body @rows={{rows}} />
      </EmberTable>
    </div>
    {{! END-SNIPPET }}
  {{/demo.example}}

  {{demo.snippet name='docs-example-header-fill-mode.hbs'}}
{{/docs-demo}}
