import Controller from '@ember/controller';
import { computed } from '@ember/object';
import EmberObject from '@ember/object';

export default Controller.extend({
  rows: computed(function() {
    let arr = [];
    let names = ['Tom', 'Cyril'];

    for (let i = 0; i < 2; i++) {
      let row = EmberObject.create({
        'name': names[i],
        'url': 'images/tomster.png'
      });
      arr.push(row);
    }
    return arr;
  }),

  columns: computed(function() {
    let arr = [];
    arr.push(EmberObject.create({
      columnName: 'Name',
      valuePath: 'name',
      width: 180
    }));
    arr.push(EmberObject.create({
      headerComponent: 'custom-text-header',
      cellComponent: 'image-cell',
      valuePath: 'url',
      width: 180
    }));

    return arr;
  })
});
