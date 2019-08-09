# Styling the Table [WIP]

Ember Table by default only ships with the minimum CSS necessary for it to
function. This includes the `sticky` positioning of the header, footer, and
fixed columns, along with a few other things.

You can style the table by directly styling the `.ember-table` class, and the
HTML structure beneath it. The examples in this documentation app use Addepar's
own [CSS framework](https://github.com/Addepar/addepar-style-toolbox), which is
tailored to our specific needs. You can check out the [table styles](https://github.com/Addepar/addepar-style-toolbox/blob/master/styles/onyx/components/table/_core.scss)
applied there for inspiration.

In the future, this page will contain a class list and outline of the base HTML
for Ember Table.

## Styling Examples

Here is an example of using CSS Flex properties to create a layout that has a fixed page header and footer and a content area that is split for a search input area on the left and a data table on the right: [CSS Flex](https://ember-twiddle.com/4cb616452e3316ddcec242192fc4a96c?openFiles=templates.application.hbs%2C). The same layout using Bootstrap classes: [Bootstrap Flex](https://ember-twiddle.com/d27c9f154050688518a7ca9a0b055a26?openFiles=templates.application.hbs%2C). This version is also somewhat responsive, so change your window sizes to see it respond.


