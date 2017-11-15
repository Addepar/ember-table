import Route from '@ember/routing/route';
import { action } from 'ember-decorators/object';
import { property } from '../utils/class';

export default class CustomHeaderCell extends Route {
  @property clickedColumn = null;
  @property controller = null;

  setupController(controller) {
    const simpleController = this.controllerFor('simple');
    controller.set('rows', simpleController.get('rows'));

    const columns = simpleController.get('columns');
    for (const column of columns) {
      column.set('headerComponent', 'custom-header-cell');
    }
    controller.set('columns', columns);
    this.set('controller', controller);
  }

  @action
  onHeaderEvent(data) {
    this.get('controller').set('clickedColumn', data.column.get('columnName'));
  }
}
