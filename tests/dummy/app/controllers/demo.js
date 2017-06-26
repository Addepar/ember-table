import Ember from 'ember';

export default Ember.Controller.extend({
  rows: Ember.computed(function() {
    const arr = Ember.A();
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < 50; i++) {
      const row = Ember.Object.create({
        'id': i
      });
      for (let j = 0; j < 26; j++) {
        row.set(alphabet[j], alphabet[j]);
      }
      arr.pushObject(row);
    }

    return arr;
  }),

  columns: Ember.computed(function() {
    const arr = Ember.A();
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const columnWidth = 120;

    arr.pushObject(Ember.Object.create({
      columnName: 'Column id',
      valuePath: 'id',
      isFixedColumn: true,
      width: columnWidth
    }));

    for (let j = 0; j < 78; j++) {
      const obj = {};
      arr.pushObject(Ember.Object.create({
        columnName: 'Col ' + alphabet[j % 26],
        valuePath: alphabet[j % 26],
        width: columnWidth
      }));
    }

    return arr;
  }),

  actions: {
    onCellClicked(rowIndex, columnIndex) {
      console.log(rowIndex, columnIndex)
    }
  }
});
