import Component from '@ember/component';
import { computed } from '@ember-decorators/object';
import faker from 'faker';

function getRandomInt(max, min) {
  return faker.random.number({ min, max });
}

export default class EmptyValues extends Component {
  // BEGIN-SNIPPET docs-example-sorting-empty-values.js
  @computed
  get columns() {
    return [
      { name: 'Product', valuePath: 'name' },
      { name: 'Material', valuePath: 'material' },
      { name: 'Price', valuePath: 'price' },
      { name: 'Sold', valuePath: 'sold' },
      { name: 'Unsold', valuePath: 'unsold' },
      { name: 'Total Revenue', valuePath: 'totalRevenue' },
    ];
  }

  sortEmptyLast = true;
  // END-SNIPPET

  @computed
  get rows() {
    let rows = [];

    for (let k = 0; k < 10; k++) {
      let sold = getRandomInt(100, 10);
      let unsold = getRandomInt(100, 10);
      let price = getRandomInt(50, 10);
      let totalRevenue = price * sold;

      let product = {
        name: faker.commerce.productName(k),
        material: faker.commerce.productMaterial(),
        price: `$${price}`,
        sold,
        unsold,
        totalRevenue: `$${totalRevenue}`,
      };

      rows.push(product);
    }

    for (let k = 0; k < 5; k++) {
      let sold = getRandomInt(100, 10);
      let unsold = getRandomInt(100, 10);
      let price = getRandomInt(50, 10);
      let totalRevenue = price * sold;

      let product = {
        name: faker.commerce.productName(k),
        material: '',
        price: `$${price}`,
        sold,
        unsold,
        totalRevenue: `$${totalRevenue}`,
      };

      rows.push(product);
    }

    return rows;
  }
}
