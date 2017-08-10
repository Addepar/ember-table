import Ember from 'ember';

import TreeNode from '../utils/tree-node';
import LinkedListTree from '../utils/linked-list-tree';

export default Ember.Controller.extend({
  showTable: true,
  showPanel: false,

  getRow: function(title) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const row = Ember.Object.create({
      'id': title
    });
    for (let j = 0; j < 26; j++) {
      row.set(alphabet[j], alphabet[j]);
    }
    return row
  },

  rows: Ember.computed(function() {
    const topRow = new TreeNode(null, this.getRow("Top Row"));
    for (let i = 0; i < 10; i++) {
      const header = new TreeNode(topRow, this.getRow("Header " + i));
      for (let j = 0; j < 10; j++) {
        const group = new TreeNode(header, this.getRow("Group " + j));
        for (let k = 0; k < 10; k++) {
          group.addChild(new TreeNode(group, this.getRow("Leaf " + k)));
        }

        header.addChild(group);
      }

      topRow.addChild(header);
    }

    const root = new TreeNode(null, null);
    root.addChild(topRow);

    return new LinkedListTree(root);
  }),

  columns: Ember.computed(function() {
    const arr = Ember.A();
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const columnWidth = 180;

    arr.pushObject(Ember.Object.create({
      columnName: 'Column id',
      valuePath: 'id',
      isFixedColumn: true,
      width: columnWidth
    }));

    for (let j = 0; j < 26; j++) {
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
    onCheckboxClicked(value) {
      this.set('showTable', value);
    },

    onPanelClicked(value) {
      this.set('showPanel', value);
    },

    onCellClicked(row) {
      if (!row.collapse) {
        this.get('rows').collapseNode(row);
      } else {
        this.get('rows').expand(row);
      }
    }
  }
});
