import Route from '@ember/routing/route';
import { generateAlphabetColumns, generateAlphabetRows } from '../utils/data-generator';

export default class CustomHeader extends Route {
  setupController(controller) {
    const simpleController = this.controllerFor('simple');
    controller.set('rows', generateAlphabetRows(4, 100));

    const groupColumns = [];
    const allSubcolumns = generateAlphabetColumns(4);

    groupColumns.push({
      columnName: 'Group 0',
      subcolumns: allSubcolumns.slice(0, 2)
    });
    groupColumns.push({
      columnName: 'Group 1',
      subcolumns: allSubcolumns.slice(2, 4)
    });

    controller.set('columns', groupColumns);
  }
}
