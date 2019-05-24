import Controller from '@ember/controller';

import { gte } from '@ember/object/computed';

export default Controller.extend({
  canShowAddonDocs: gte('2.8.0'),
});
