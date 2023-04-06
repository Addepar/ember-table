import Component from '@ember/component';
import { computed } from '@ember/object';
import { generateRows } from 'dummy/utils/generators';

export default Component.extend({
  rows: computed(function() {
    return generateRows(100);
  }),

  columns: computed(function() {
    return [
      { name: 'A', valuePath: 'A' },
      { name: 'B', valuePath: 'B' },
      { name: 'C', valuePath: 'C' },
      { name: 'D', valuePath: 'D' },
      { name: 'E', valuePath: 'E' },
      { name: 'F', valuePath: 'F' },
      { name: 'G', valuePath: 'G' },
    ];
  }),

  // BEGIN-SNIPPET table-meta-data-cell-selection.js
  actions: {
    setSelected(cellMeta, columnMeta, rowMeta) {
      // If we have selected before, unselect the previous selection
      if (this._hasSelection) {
        this._lastSelectedCellMeta.set('selected', false);
        this._lastSelectedColumnMeta.set('selected', false);
        this._lastSelectedRowMeta.set('selected', false);
      }

      // Set selection on the meta objects
      cellMeta.set('selected', true);
      columnMeta.set('selected', true);
      rowMeta.set('selected', true);

      // Store the meta objects to unset in the future
      this._lastSelectedCellMeta = cellMeta;
      this._lastSelectedColumnMeta = columnMeta;
      this._lastSelectedRowMeta = rowMeta;
      this._hasSelection = true;
    },
  },
  // END-SNIPPET
});
