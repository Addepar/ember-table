import Controller from '@ember/controller';
import { action, computed } from '@ember-decorators/object';
import faker from 'faker';
import { getRandomInt } from '../../../../../utils/generators';

export default class SimpleController extends Controller {
  // BEGIN-SNIPPET docs-example-sortings.js
  @computed
  get columns() {
    return [
      { name: 'Company ▸ Department ▸ Product', valuePath: 'name' },
      { name: 'Price', valuePath: 'price' },
      { name: 'Sold', valuePath: 'sold' },
      { name: 'Unsold', valuePath: 'unsold' },
      { name: 'Total Revenue', valuePath: 'totalRevenue' },
    ];
  }
  // END-SNIPPET

  @computed
  get rows() {
    let rows = [];

    for (let i = 0; i < getRandomInt(5, 2); i++) {
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

  // BEGIN-SNIPPET docs-example-2-state-sortings.js
  @action
  twoStateSorting(sorts) {
    if (sorts.length > 1) {
      // multi-column sort, default behavior
      this.set('sorts', sorts);
      return;
    }

    let hasExistingSort = this.sorts && this.sorts.length;
    let isDefaultSort = !sorts.length;

    if (hasExistingSort && isDefaultSort) {
      // override empty sorts with reversed previous sort
      let newSorts = [
        {
          valuePath: this.sorts[0].valuePath,
          isAscending: !this.sorts[0].isAscending,
        },
      ];
      this.set('sorts', newSorts);
      return;
    }

    this.set('sorts', sorts);
  }
  // BEGIN-SNIPPET docs-example-2-state-sortings.js
}
