import Controller from '@ember/controller';
import { gte } from 'ember-compatibility-helpers';
import { computed } from '@ember/object';

export default Controller.extend({
  canShowAddonDocs: computed(function() {
    return gte('2.8.0');
  }),
});
