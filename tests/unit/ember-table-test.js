import { test, moduleForComponent } from 'ember-qunit';
import Ember from "ember";

moduleForComponent('ember-table', '[Unit] TableComponent', {
  needs: ['template:components/ember-table']
});

test("findRow returns the row containing the content", function(assert){
  var rowA = Ember.Object.create({content: 'A'}),
      rowB = Ember.Object.create({content: 'B'}),
      rowC = Ember.Object.create({content: 'C'});
  var table = this.subject({
    bodyContent: [
      rowA,
      rowB,
      rowC
    ]
  });

  assert.equal(table.findRow('B'), rowB, 'The row was found');
});
