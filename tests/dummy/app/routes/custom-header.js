import Route from '@ember/routing/route';
import { property } from '../utils/class';

export default class CustomHeader extends Route {
  @property controller = null;

  setupController(controller) {
    const simpleController = this.controllerFor('simple');
    controller.set('rows', simpleController.get('rows'));

    const columns = simpleController.get('columns');
    controller.set('columns', columns);
  }
}
