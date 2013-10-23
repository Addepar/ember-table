module("Basic Tests");

test("Component", function() {
    notEqual(null, Ember.Table.EmberTableComponent, "Ember.Table.EmberTableComponent exists");
});

test("Views", function() {
    notEqual(null, Ember.Table.TableContainer, "Ember.Table.TableContainer exists");
    notEqual(null, Ember.Table.TableCell, "Ember.Table.TableCell exists");
    notEqual(null, Ember.Table.HeaderRow, "Ember.Table.HeaderRow exists");
    notEqual(null, Ember.Table.HeaderCell, "Ember.Table.HeaderCell exists");
    notEqual(null, Ember.Table.ScrollContainer, "Ember.Table.ScrollContainer exists");
    notEqual(null, Ember.Table.ScrollPanel, "Ember.Table.ScrollPanel exists");
});

test("Templates", function() {
    notEqual(null, Ember.TEMPLATES['body-container'], "Ember.TEMPLATES['body-container'] exists");
    notEqual(null, Ember.TEMPLATES['footer-container'], " Ember.TEMPLATES['footer-container'] exists");
    notEqual(null, Ember.TEMPLATES['header-cell'], "Ember.TEMPLATES['header-cell'] exists");
    notEqual(null, Ember.TEMPLATES['header-container'], "Ember.TEMPLATES['header-container'] exists");
    notEqual(null, Ember.TEMPLATES['header-row'], "Ember.TEMPLATES['header-row'] exists");
    notEqual(null, Ember.TEMPLATES['table-row'], " Ember.TEMPLATES['table-row'] exists");
    notEqual(null, Ember.TEMPLATES['components/ember-table'], "Ember.TEMPLATES['components/ember-table'] exists");
});