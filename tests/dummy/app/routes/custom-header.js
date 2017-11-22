import Route from '@ember/routing/route';
import { action } from 'ember-decorators/object';
import { property } from '../utils/class';

export default class CustomHeader extends Route {
  @property clickedColumn = null;
  @property controller = null;

  setupController(controller) {
    let simpleController = this.controllerFor('simple');
    controller.set('rows', simpleController.get('rows'));

    let columns = simpleController.get('columns');
    for (let column of columns) {
      column.set('headerComponent', 'custom-header');
    }
    controller.set('columns', columns);
    this.set('controller', controller);
  }

  @action
  onHeaderEvent(data) {
    this.get('controller').set('clickedColumn', data.column.get('columnName'));
  }
}
