import Ember from 'ember';

export default Ember.Component.extend({
  source: Ember.computed('columns.@each.documentation', function(){
    let documentation = this.get('columns').mapBy('documentation').join("\n");
    return `import Ember from 'ember';
import ColumnDefinition from 'ember-table/models/column-definition';

export default Ember.Controller.extend({
  tableColumns: Ember.computed(function() {
${documentation}
    return [dateColumn, openColumn, highColumn, lowColumn, closeColumn];
  }),

  tableContent: Ember.computed(function() {
    var content = [];
    var date;
    for (var i = 0; i < 100; i++) {
      date = new Date();
      date.setDate(date.getDate() + i);
      content.pushObject({
        date: date,
        open: Math.random() * 100 - 50,
        high: Math.random() * 100 - 50,
        low: Math.random() * 100 - 50,
        close: Math.random() * 100 - 50,
        volume: Math.random() * 1000000
      });
    }
    return content;
  })
});`;
  })
});
