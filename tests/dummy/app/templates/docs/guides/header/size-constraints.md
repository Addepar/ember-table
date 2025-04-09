# Size Constraints

You can set the `widthConstraint` property on your table to ensure that it never
grows too big or too small. There are six possible settings:

1. `eq-container`: Ensures that the table is always exactly the width the of its
container.

2. `eq-container-slack`: Similar to `eq-container`, but allocates excess whitespace to an empty "slack" column on the right side of the table.

3. `gte-container`: Ensures that the table is always the same width or larger than its container.

4. `gte-container-slack`: Similar to `gte-container`, but allocates excess whitespace to an empty "slack" column on the right side of the table.

5. `lte-container`: Ensures that the table is never larger than its container.

6. `none`: The default, does not enforce any size constraint.

The table will react to resizing its container automatically. Sizing will _not_
override the min/max widths provided by columns.

<aside>
  `eq-container` mode should generally be paired with `resizeMode='fluid'` to
  get a more natural resize effect. This is useful for tables that must fit
  a constrained space, like tables in a powerpoint.
  <br><br>
  Most other modes should be paired with `resizeMode='standard'` to achieve an effect similar to most spreadsheet applications, where resizing one column does not typically change the size of the others.
  <br><br>
  If you need to make a small adjustment to the container width (such as to
  account for a customized scrollbar that would cover some portion of the
  container width), set `containerWidthAdjustment` to a numerical value equal to
  the amount you need the measured container width to be adjusted.
</aside>

{{#docs-demo as |demo|}}
  {{#demo.example}}
    {{! BEGIN-SNIPPET docs-example-header-size-constraint.hbs }}
    <h6 class="demo-options-heading">Width Constraint</h6>
    <div class="demo-options">
      <label>
        eq-container
        {{radio-button name='width-constraint' value='eq-container' groupValue=this.widthConstraint}}
      </label>

      <label>
        eq-container-slack
        {{radio-button name='width-constraint' value='eq-container-slack' groupValue=this.widthConstraint}}
      </label>

      <label>
        gte-container
        {{radio-button name='width-constraint' value='gte-container' groupValue=this.widthConstraint}}
      </label>

      <label>
        gte-container-slack
        {{radio-button name='width-constraint' value='gte-container-slack' groupValue=this.widthConstraint}}
      </label>

      <label>
        lte-container
        {{radio-button name='width-constraint' value='lte-container' groupValue=this.widthConstraint}}
      </label>

      <label>
        none
        {{radio-button name='width-constraint' value='none' groupValue=this.widthConstraint}}
      </label>
    </div>

    <h6 class="demo-options-heading">Resize Mode</h6>
    <div class="demo-options">
      <label>
        standard
        {{radio-button name='resize-mode' value='standard' groupValue=this.resizeMode}}
      </label>

      <label>
        fluid
        {{radio-button name='resize-mode' value='fluid' groupValue=this.resizeMode}}
      </label>
    </div>

    <div class="resize-container">
      <EmberTable class="vertical-borders" as |t|>
        <t.head
          @columns={{this.columns}}
          @widthConstraint={{this.widthConstraint}}
          @resizeMode={{this.resizeMode}}
          @scrollIndicators="horizontal"
        />

        <t.body @rows={{this.rows}} />
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
        {{radio-button name='fill-mode' value='equal-column' groupValue=this.fillMode}}
      </label>

      <label>
        first-column
        {{radio-button name='fill-mode' value='first-column' groupValue=this.fillMode}}
      </label>

      <label>
        last-column
        {{radio-button name='fill-mode' value='last-column' groupValue=this.fillMode}}
      </label>

      <label>
        nth-column
        {{radio-button name='fill-mode' value='nth-column' groupValue=this.fillMode}}
      </label>
    </div>

    <div class="resize-container">
      <EmberTable class="vertical-borders" as |t|>
        <t.head
          @columns={{this.columns}}
          @widthConstraint='eq-container'
          @resizeMode='fluid'
          @fillMode={{this.fillMode}}
          @fillColumnIndex=1
          @scrollIndicators='horizontal'
        />

        <t.body @rows={{this.rows}} />
      </EmberTable>
    </div>
    {{! END-SNIPPET }}
  {{/demo.example}}

  {{demo.snippet name='docs-example-header-fill-mode.hbs'}}
{{/docs-demo}}

## Initial Fill Mode

When the width constraint is set to `eq-container-slack` or `gte-container-slack`, you may also set an _initial_ fill mode that is used to size the columns when the table is first rendered. This setting has no effect when combined with other width constraints.

The `initialFillMode` property can be set to any of the allowed values for `fillMode`, but it defaults to `none`.

This table summarizes which fill mode properties are used by each width constraint:

<table class="info-table">
  <thead>
    <th>widthContraint</th>
    <th>fillMode</th>
    <th>initialFillMode</th>
  </thead>
  <tbody>
    <tr>
      <td>eq-container</td>
      <td class="center highlight">Y</td>
      <td class="center">N</td>
    </tr>
    <tr>
      <td>eq-container-slack</td>
      <td class="center highlight">Y</td>
      <td class="center highlight">Y</td>
    </tr>
    <tr>
      <td>gte-container</td>
      <td class="center highlight">Y</td>
      <td class="center">N</td>
    </tr>
    <tr>
      <td>gte-container-slack</td>
      <td class="center">N</td>
      <td class="center highlight">Y</td>
    </tr>
    <tr>
      <td>lte-container</td>
      <td class="center highlight">Y</td>
      <td class="center">N</td>
    </tr>
    <tr>
      <td>none</td>
      <td class="center">N</td>
      <td class="center">N</td>
    </tr>
  </tbody>
</table>

Note that `eq-container-slack` uses both `fillMode` _and_ `initialFillMode`. The former is used to enforce the width constraint when the columns are resized beyond the width of the container, while the latter is used only to size the columns at initial render.

In this example, `eq-container-slack` is combined with `equal-column` fill mode and `first-column` initial fill mode. At render, excess whitespace is allocated to the first column. When any column is resized such that the total width of the columns exceeds the container, each column is shrunk equally to satisfy the width constraint.

{{#docs-demo as |demo|}}
  {{#demo.example name='docs-example-header-initial-fill-mode'}}
    {{! BEGIN-SNIPPET docs-example-header-initial-fill-mode.hbs }}
    <div class="resize-container w-100">
      <EmberTable class="vertical-borders" as |t|>
        <t.head
          @columns={{this.columns}}
          @widthConstraint='eq-container-slack'
          @fillMode='equal-column'
          @initialFillMode='first-column'
        />

        <t.body @rows={{this.rows}} />
      </EmberTable>
    </div>
    {{! END-SNIPPET }}
  {{/demo.example}}

  {{demo.snippet name='docs-example-header-initial-fill-mode.hbs'}}
{{/docs-demo}}