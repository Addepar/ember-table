import Ember from 'ember';

export function getPath(params) {
  return Ember.get(params[0], params[1]);
}

export default Ember.Helper.helper(getPath);
