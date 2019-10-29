import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { generateRows, getRandomInt } from '../../../../../utils/generators';
import faker from 'faker';

export default Controller.extend({
  rows: computed(function() {
    return generateRows(100);
  }),

  // BEGIN-SNIPPET table-customization-rows-with-components.js
  rowsWithComponents: computed(function() {
    return [
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'navy' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'blue' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'aqua' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'teal' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'orange' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'red' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'maroon' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'navy' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'blue' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'aqua' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'teal' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'orange' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'red' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'maroon' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'navy' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'blue' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'aqua' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'teal' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'orange' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'red' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'maroon' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'navy' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'blue' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'aqua' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'teal' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'orange' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'red' },
      { A: 'A', B: 'B', C: 'C', D: 'D', cellComponent: 'custom-cell', color: 'maroon' },
    ];
  }),

  columnsForRowsWithComponents: computed(function() {
    return [
      { name: 'Column A', valuePath: 'A' },
      { name: 'Column B', valuePath: 'B' },
      { name: 'Column C', valuePath: 'C' },
      { name: 'Column D', valuePath: 'D' },
    ];
  }),
  // END-SNIPPET

  // BEGIN-SNIPPET table-customization-example-sorting.js
  showSortIndicator: true,
  showResizeHandle: true,

  columnsForSorting: computed(function() {
    return [
      { name: 'Company ▸ Department ▸ Product', valuePath: 'name' },
      { name: 'Price', valuePath: 'price' },
      { name: 'Sold', valuePath: 'sold' },
      { name: 'Unsold', valuePath: 'unsold' },
      { name: 'Total Revenue', valuePath: 'totalRevenue' },
    ];
  }),

  rowsForSorting: computed(function() {
    let rows = [];

    for (let i = 0; i < 5; i++) {
      let companyRow = {
        name: faker.company.companyName(),
        price: 'N/A',
        sold: 0,
        unsold: 0,
        totalRevenue: 0,
        children: [],
      };

      for (let j = 0; j < getRandomInt(5, 2); j++) {
        let departmentRow = {
          name: faker.commerce.department(),
          price: 'N/A',
          sold: 0,
          unsold: 0,
          totalRevenue: 0,
          children: [],
        };

        for (let k = 0; k < getRandomInt(100, 10); k++) {
          let sold = getRandomInt(100, 10);
          let unsold = getRandomInt(100, 10);
          let price = getRandomInt(50, 10);
          let totalRevenue = price * sold;

          let product = {
            name: faker.commerce.productName(),
            price: `$${price}`,
            sold,
            unsold,
            totalRevenue: `$${totalRevenue}`,
          };

          departmentRow.sold += sold;
          departmentRow.unsold += unsold;
          departmentRow.totalRevenue += totalRevenue;
          departmentRow.children.push(product);
        }

        companyRow.sold += departmentRow.sold;
        companyRow.unsold += departmentRow.unsold;
        companyRow.totalRevenue += departmentRow.totalRevenue;

        departmentRow.totalRevenue = `$${departmentRow.totalRevenue}`;

        companyRow.children.push(departmentRow);
      }

      companyRow.totalRevenue = `$${companyRow.totalRevenue}`;

      rows.push(companyRow);
    }

    return rows;
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
        color: 'blue',
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
        color: 'aqua',
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
        color: 'orange',
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
        color: 'maroon',
      },
    ];
  }),
  // END-SNIPPET
});
