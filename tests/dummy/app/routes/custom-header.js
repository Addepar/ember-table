import Route from '@ember/routing/route';
import { action } from 'ember-decorators/object';

export default class CustomHeader extends Route {
  setupController(controller, model) {
    const simpleController = this.controllerFor('simple');
    controller.set('rows', simpleController.get('rows'));

    const columns = simpleController.get('columns');
    for (const column of columns) {
      column.set('headerComponent', 'custom-header');
    }
    controller.set('columns', columns);
  }

  @action
  onHeaderEvent(data) {
    console.log(data.eventName);
  }
}
