module("Basic Tests");

test("Controllers", function() {
    notEqual(null, Ember.Table.TableController, "Ember.Table.TableController exists");
});

test("Views", function() {
    notEqual(null, Ember.Table.TablesContainer, "Ember.Table.TablesContainer exists");
    notEqual(null, Ember.Table.TableContainer, "Ember.Table.TableContainer exists");
    notEqual(null, Ember.Table.TableCell, "Ember.Table.TableCell exists");
    notEqual(null, Ember.Table.HeaderRow, "Ember.Table.HeaderRow exists");
    notEqual(null, Ember.Table.HeaderCell, "Ember.Table.HeaderCell exists");
    notEqual(null, Ember.Table.ScrollContainer, "Ember.Table.ScrollContainer exists");
    notEqual(null, Ember.Table.ScrollPanel, "Ember.Table.ScrollPanel exists");
})