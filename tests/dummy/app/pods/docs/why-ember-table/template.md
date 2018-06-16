# Why Ember Table?

## Tables are Hard

They've been with us, for better or for worse, since the early
days of computing, helping us sort through mounds of data and generate TPS
reports. Excel macros are practically Turing complete at this point, and just
about every UX pattern imaginable has been explored and implemented in a table
in some application somewhere.

Building that functionality into your Single Page App is a long, tiresome
process, and as the datasets scale it just gets harder. There are a lot of
different off the shelf tables out there, but customizing them is difficult and
time consuming, and if they don't implement the feature you need there's no easy
way to add it.

## What makes Ember Table different?

Most table components try to abstract the complexity of the table away from
users. They provide a few top components that are meant to make declaring a
table simple, avoiding the nested HTML structure of traditional tables. After
all, who wants to deal with figuring out the right ordering of `tbody`, `th`,
and `td` tags to get everything working?

The truth, however, is that tables _are_ complicated, and most attempts to
reduce that complexity through abstraction actually make the problem worse. You
end up having to pass tens or hundreds of configuration options to your table
component to get it to work the way you want.

Ember Table has decided to do the opposite. The structure of a table component
mirrors the structure of an actual HTML table, giving you the ability to
customize every level of your table using standard Ember templates, components,
and actions:

```hbs
<!-- An HTML Table -->

<table>
  <thead>
    <tr>
      <th>
        Header
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Cell
      </td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td>
        Footer
      </td>
    </tr>
  </tfoot>
</table>

<!-- Ember Table -->

<EmberTable as |t|>
  <t.head @columns={{columns}} as |h|>
    <h.row as |r|>
      <r.cell>
        Header
      </r.cell>
    </h.row>
  </t.head>

  <t.body @rows={{rows}} as |b|>
    <b.row>
      <r.cell>
        Cell
      </r.cell>
    </b.row>
  </t.body>

  <t.foot @rows={{rows}} as |f|>
    <f.row as |r|>
      <r.cell>
        Footer
      </r.cell>
    </f.row>
  </t.foot>
</EmberTable>
```

Our stance is that rather than attempting to hide this complexity from you, we
would rather give you full flexibility. It's very likely that you will want to
customize the behavior of your table, and conversely, it's very _unlikely_ that
you will have hundreds or thousands of data tables sprinkled throughout your
app. Data tables tend to be used in a few central locations, so having a
flexible API that allows you to easily flesh out those (relatively) few use
cases is very valuable.

## Feature Complete OOTB

Ember Table doesn't stop at giving you a solid API to build on, it also provides
many features that you would expect a modern data table to have, including:

- Fixed headers and footers
- Fixed columns
- Row selection
- Row sorting
- Tree tables (with group collapsing)
- Column resizing and reordering
- Nested subcolumns (e.g. to create pivot tables)
- Scalability - Can render thousands of rows performantly

By default, Ember Table is a feature complete data table solution that you can
drop in to your app. We aim to support most standard data table features, and
provide escape hatches where possible.

## Lightweight

Ember Table is also a relatively lightweight table solution, currently weighing
in at `22kb` (minified and gzipped) with plenty of extra weight to shed. Compare
that to standalone table solutions like ag-grid (`152kb`) or HandsOnTable
(`196kb`) and you can see how a table solution that integrates with the
framework directly can save quite a few bytes.

