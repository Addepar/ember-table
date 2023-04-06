import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { generateRows } from 'dummy/utils/generators';

export default Controller.extend({
  rows: computed(function() {
    return generateRows(100);
  }),

  // BEGIN-SNIPPET docs-example-columns.js
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
  // END-SNIPPET

  // BEGIN-SNIPPET docs-example-columns-with-components.js
  columnsWithComponents: computed(function() {
    return [
      { heading: 'A', valuePath: 'A', component: 'custom-header', color: 'navy' },
      { heading: 'B', valuePath: 'B', component: 'custom-header', color: 'blue' },
      { heading: 'C', valuePath: 'C', component: 'custom-header', color: 'aqua' },
      { heading: 'D', valuePath: 'D', component: 'custom-header', color: 'teal' },
      { heading: 'E', valuePath: 'E', component: 'custom-header', color: 'orange' },
      { heading: 'F', valuePath: 'F', component: 'custom-header', color: 'red' },
      { heading: 'G', valuePath: 'G', component: 'custom-header', color: 'maroon' },
    ];
  }),
  // END-SNIPPET

  // BEGIN-SNIPPET docs-example-columns-with-widths.js
  columnsWithWidths: computed(function() {
    return [
      { name: 'A', valuePath: 'A', width: 100 },
      { name: 'B', valuePath: 'B', width: 100 },
      { name: 'C', valuePath: 'C', width: 100 },
      { name: 'D', valuePath: 'D', width: 100 },
      { name: 'E', valuePath: 'E', width: 100 },
      { name: 'F', valuePath: 'F', width: 100 },
      { name: 'G', valuePath: 'G', width: 100 },
    ];
  }),
  // END-SNIPPET

  // BEGIN-SNIPPET docs-example-column-resize-reorder.js
  resizeEnabled: false,
  reorderEnabled: false,
  resizeModeFluid: false,
  // END-SNIPPET

  resizeCount: 0,
  reorderCount: 0,

  // BEGIN-SNIPPET docs-example-text-align.js
  columnsWithTextAlign: computed(function() {
    return [
      { name: 'No alignment', valuePath: 'A' },
      { name: 'Left alignment', valuePath: 'B', textAlign: 'left' },
      { name: 'Center alignment', valuePath: 'C', textAlign: 'center' },
      { name: 'Right alignment', valuePath: 'D', textAlign: 'right' },
    ];
  }),
  // END-SNIPPET
});
