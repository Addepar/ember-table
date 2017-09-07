import Ember from 'ember';

let helper = null;

if (Ember.VERSION < '1.13') {
  helper = Ember.Handlebars.makeBoundHelper(function(args) {
    return args.hash;
  });
} else {
  helper = Ember.Helper.helper(function(_, obj) {
    return obj;
  });
}

export default helper;

