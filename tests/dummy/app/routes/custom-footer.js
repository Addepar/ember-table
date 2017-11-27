import Route from '@ember/routing/route';
import { A as emberA } from '@ember/array';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default class CustomFooter extends Route {
  setupController(controller) {
    let simpleController = this.controllerFor('simple');
    controller.set('rows', simpleController.get('rows'));

    let footerRows = emberA();
    let row = {};
    let columns = simpleController.get('columns');
    for (let j = 0; j < columns.length; j++) {
      let column = columns[j];
      column.set('footerComponent', 'custom-footer');
      row[ALPHABET[j]] = ALPHABET[j];
    }
    footerRows.pushObject(row);

    controller.set('columns', columns);
    controller.set('footerRows', footerRows);
  }
}
