import Controller from '@ember/controller';

import { computed } from '@ember-decorators/object';
import { gte } from 'ember-compatibility-helpers';

export default class ApplicationController extends Controller {
  @computed
  get canShowAddonDocs() {
    return gte('2.8.0');
  }
}
