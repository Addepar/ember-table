import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  // BEGIN-SNIPPET docs-example-row-selection.js
  columns: computed(function() {
    return [
      { name: 'A', valuePath: 'A', width: 180 },
      { name: 'B', valuePath: 'B', width: 180 },
      { name: 'C', valuePath: 'C', width: 180 },
      { name: 'D', valuePath: 'D', width: 180 },
    ];
  }),

  rows: computed(function() {
    return [
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
    ];
  }),
  // END-SNIPPET

  // BEGIN-SNIPPET docs-example-selected-rows.js
  init() {
    this._super(...arguments);

    let [rowWithChildren] = this.rowWithChildren;

    this.preselection = [rowWithChildren];
  },

  rowWithChildren: computed(function() {
    return [
      {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',

        children: [
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
        ],
      },
    ];
  }),
  // END-SNIPPET

  // BEGIN-SNIPPET docs-example-selection-modes.js
  rowSelectionMode: 'multiple',
  checkboxSelectionMode: 'multiple',
  selectingChildrenSelectsParent: true,

  rowsWithChildren: computed(function() {
    let makeRow = (id, { children } = { children: [] }) => {
      return {
        A: `A${id}`,
        B: 'B',
        C: 'C',
        D: 'D',
        children,
      };
    };
    return [
      makeRow(1, {
        children: [
          makeRow(2, {
            children: [makeRow(3), makeRow(4), makeRow(5)],
          }),
          makeRow(6),
          makeRow(7),
          makeRow(8, {
            children: [makeRow(9), makeRow(10), makeRow(11)],
          }),
        ],
      }),
    ];
  }),

  currentSelection: computed('demoSelection', function() {
    let selection = this.demoSelection;
    if (!selection || selection.length === 0) {
      return 'Nothing selected';
    } else {
      if (Array.isArray(selection)) {
        return `Array: [${selection.map(row => row.A).join(',')}]`;
      } else {
        let row = selection;
        return `Single: ${row.A}`;
      }
    }
  }),
  // END-SNIPPET
});
