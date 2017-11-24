import Route from '@ember/routing/route';

export default class CustomFooter extends Route {
  setupController(controller) {
    let simpleController = this.controllerFor('simple');
    controller.set('rows', simpleController.get('rows'));

    let columns = simpleController.get('columns');
    for (let column of columns) {
      column.set('footerComponent', 'custom-footer');
    }
    controller.set('columns', columns);
  }
}
