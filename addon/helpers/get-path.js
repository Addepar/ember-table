import { get } from '@ember/object';
import { helper } from '@ember/component/helper';

export function getPath(params) {
  return get(params[0], params[1]);
}

export default helper(getPath);

// const helper = Ember.Handlebars.makeBoundHelper(function(object, path) {
//   return Ember.get(object, path);
// });

// export default helper;
