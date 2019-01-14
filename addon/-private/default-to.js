// import { computed } from '@ember/object';
// import { gte, SUPPORTS_NEW_COMPUTED } from 'ember-compatibility-helpers';
import { decoratorWithParams } from '@ember-decorators/utils/decorator';

export const defaultTo = decoratorWithParams((desc, defaultTo = []) => {
  // let [options] = defaultTo;

  return desc;
}, 'defaultTo');
