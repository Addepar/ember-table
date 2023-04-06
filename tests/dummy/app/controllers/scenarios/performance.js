import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { generateRows, generateColumns } from 'dummy/utils/generators';

export default Controller.extend({
  rows: computed(function() {
    let rows = generateRows(10, 3, (row, key) => `${row.id}${key}`);

    rows[0].children[0].children[0].children = generateRows(10, 1, (row, key) => `${row.id}${key}`);

    return rows;
  }),

  columns: computed(function() {
    let columns = generateColumns(20);

    columns[0].width = 300;
    columns[0].isResizable = false;
    columns[0].isReorderable = false;

    columns[1].subcolumns = generateColumns(3);
    columns[1].subcolumns[0].isReorderable = false;
    columns[1].subcolumns[1].isResizable = false;
    columns[1].subcolumns[2].isSortable = false;

    return columns;
  }),

  actions: {
    onSelect(selection) {
      this.set('selection', selection);
    },
    onUpdateSorts(sorts) {
      this.set('sorts', sorts);
    },
  },
});
