import Controller from '@ember/controller';
import { computed } from '@ember-decorators/object';
import { generateRows, getRandomInt } from '../../../../../utils/generators';
import faker from 'faker';

export default class SimpleController extends Controller {
  @computed
  get rows() {
    return generateRows(100);
  }

  // BEGIN-SNIPPET table-customization-rows-with-components.js
  @computed
  get rowsWithComponents() {
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
  }

  @computed
  get columnsForRowsWithComponents() {
    return [
      { name: 'Column A', valuePath: 'A' },
      { name: 'Column B', valuePath: 'B' },
      { name: 'Column C', valuePath: 'C' },
      { name: 'Column D', valuePath: 'D' },
    ];
  }
  // END-SNIPPET

  // BEGIN-SNIPPET table-customization-example-sorting.js
  showSortIndicator = true;
  showResizeHandle = true;

  @computed
  get columnsForSorting() {
    return [
      { name: 'Company ▸ Department ▸ Product', valuePath: 'name' },
      { name: 'Price', valuePath: 'price' },
      { name: 'Sold', valuePath: 'sold' },
      { name: 'Unsold', valuePath: 'unsold' },
      { name: 'Total Revenue', valuePath: 'totalRevenue' },
    ];
  }

  @computed
  get rowsForSorting() {
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
  }
  // END-SNIPPET

  // BEGIN-SNIPPET table-customization-custom-table-components.js
  @computed
  get columnsWithSelection() {
    return [
      { name: 'A', valuePath: 'A', width: 180 },
      { name: 'B', valuePath: 'B', width: 180, isSelected: true },
      { name: 'C', valuePath: 'C', width: 180 },
      { name: 'D', valuePath: 'D', width: 180 },
    ];
  }

  @computed
  get rowsWithChildren() {
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
  }
  // END-SNIPPET

  // BEGIN-SNIPPET table-customization-custom-cell-template.js
  @computed
  get columns() {
    return [
      { name: 'A', valuePath: 'A' },
      { name: 'B', valuePath: 'B' },
      { name: 'C', valuePath: 'C' },
      { name: 'D', valuePath: 'D' },
      { name: 'E', valuePath: 'E' },
      { name: 'F', valuePath: 'F' },
      { name: 'G', valuePath: 'G' },
    ];
  }
  // END-SNIPPET

  // BEGIN-SNIPPET table-customization-custom-cell-component.js
  @computed
  get columnsWithComponents() {
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
  }
  // END-SNIPPET
}
