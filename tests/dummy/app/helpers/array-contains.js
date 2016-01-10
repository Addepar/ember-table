import Ember from 'ember';

export default Ember.Helper.helper(function(params) {
  let array = params[0];
  let value = params[1];
  return (array || []).contains(value);
});
