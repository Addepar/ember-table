import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { generateRows } from '../../../../../utils/generators';

export default Controller.extend({
  rows: computed(function() {
    return generateRows(100);
  }),

  // BEGIN-SNIPPET table-customization-rows-with-components.js
  rowsWithComponents: computed(function() {
    return [
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-navy' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-blue' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-aqua' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-teal' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-orange' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-red' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-maroon' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-navy' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-blue' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-aqua' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-teal' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-orange' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-red' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-maroon' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-navy' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-blue' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-aqua' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-teal' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-orange' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-red' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-maroon' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-navy' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-blue' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-aqua' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-teal' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-orange' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-red' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'text-maroon' },
    ];
  }),
  // END-SNIPPET

  // BEGIN-SNIPPET table-customization-custom-table-components.js
  columnsWithSelection: computed(function() {
    return [
      { name: 'A', valuePath: 'A', width: 180 },
      { name: 'B', valuePath: 'B', width: 180, isSelected: true },
      { name: 'C', valuePath: 'C', width: 180 },
      { name: 'D', valuePath: 'D', width: 180 },
    ];
  }),

  rowsWithChildren: computed(function() {
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
        ],
      },
      {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',

        children: [
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
        ],
      },
      {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',

        children: [
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
        ],
      },
    ];
  }),

  fewerColumns: computed(function() {
    return [
      { name: 'A', valuePath: 'A', width: 180 },
      { name: 'B', valuePath: 'B', width: 180 },
      { name: 'C', valuePath: 'C', width: 180 },
      { name: 'D', valuePath: 'D', width: 180 },
    ];
  }),
  // END-SNIPPET

  // BEGIN-SNIPPET table-customization-custom-cell-template.js
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

  // BEGIN-SNIPPET table-customization-custom-cell-component.js
  columnsWithComponents: computed(function() {
    return [
      {
        heading: 'A',
        valuePath: 'A',
        headerComponent: 'custom-header',
        cellComponent: 'custom-cell',
        color: 'text-blue',
      },
      {
        heading: 'B',
        valuePath: 'B',
      },
      {
        heading: 'C',
        valuePath: 'C',
        headerComponent: 'custom-header',
        cellComponent: 'custom-cell',
        color: 'text-aqua',
      },
      {
        heading: 'D',
        valuePath: 'D',
      },
      {
        heading: 'E',
        valuePath: 'E',
        headerComponent: 'custom-header',
        cellComponent: 'custom-cell',
        color: 'text-orange',
      },
      {
        heading: 'F',
        valuePath: 'F',
      },
      {
        heading: 'G',
        valuePath: 'G',
        headerComponent: 'custom-header',
        cellComponent: 'custom-cell',
        color: 'text-maroon',
      },
    ];
  }),
  // END-SNIPPET
});
