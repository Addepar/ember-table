---
order: 4
---

# Styling the Table

Ember Table by default only ships with the minimum CSS necessary for it to
function. This includes the `sticky` positioning of the header, footer, and
fixed columns, along with a few other things. That CSS is included
automatically whenever `<EmberTable>` is used.

You can style the table by directly styling the `.ember-table` class, and the
HTML structure beneath it. The examples in this documentation app use Addepar's
own [CSS framework](https://github.com/Addepar/addepar-style-toolbox), which is
tailored to our specific needs. You can check out the [table styles](https://github.com/Addepar/addepar-style-toolbox/blob/master/styles/onyx/components/table/_core.scss)
applied there for inspiration.

If you want a starting point, Ember Table ships an optional default theme as a
Sass file. With Vite (or any Sass setup that resolves package `exports`), use:

```scss
@use 'ember-table/default.scss';
```

With the classic `ember-cli-sass` pipeline, add `node_modules` to its
`includePaths` and import `ember-table/dist/styles/default` instead.

In the future, this page will contain a class list and outline of the base HTML
for Ember Table.

## Reorder indicators

When reordering the columns, two elements are created to be customized and allow the user to understand what they are doing.

A first `.et-reorder-main-indicator` element is created, which basically is a ghost copy of the header cell currently grabbed. By default, it has no CSS property, giving a `position: absolute;` so this element is positioned on the `<thead>` is recommended.

A second `.et-reorder-drop-indicator` element is created, which is the target header cell. It has two CSS classes `.et-reorder-direction-left` and `.et-reorder-direction-right` depending on the current drop position to show whether the drop will be directed on the left or on the right. Styling these will give the user a more intuitive experience of how they are reordering their table.

## Styling Examples

Here is an example of using CSS Flex properties to create a layout that has a fixed page header and footer and a content area that is split for a search input area on the left and a data table on the right: [CSS Flex](https://ember-twiddle.com/4cb616452e3316ddcec242192fc4a96c?openFiles=templates.application.hbs%2C). The same layout using Bootstrap classes: [Bootstrap Flex](https://ember-twiddle.com/d27c9f154050688518a7ca9a0b055a26?openFiles=templates.application.hbs%2C). This version is also somewhat responsive, so change your window sizes to see it respond.
