import Ember from 'ember';

export function getPath(params) {
  return Ember.get(params[0], params[1]);
}

export default Ember.Helper.helper(getPath);

// const helper = Ember.Handlebars.makeBoundHelper(function(object, path) {
//   return Ember.get(object, path);
// });

// export default helper;
