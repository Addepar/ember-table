import { helper } from '@ember/component/helper';
import Ember from 'ember';

let helper = null;

if (Ember.VERSION < '1.13') {
  helper = Ember.Handlebars.makeBoundHelper(function(args) {
    return args.hash;
  });
} else {
  helper = helper(function(_, obj) {
    return obj;
  });
}

export default helper;

