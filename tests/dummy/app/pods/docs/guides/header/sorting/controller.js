import Controller from '@ember/controller';
import { computed } from '@ember-decorators/object';
import faker from 'faker';

function getRandomInt(max, min) {
  return faker.random.number({ min, max });
}

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
}
