import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  @service router;

  redirect() {
    this.router.transitionTo('docs');
  }
}
