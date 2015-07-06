import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(array, value){
  return (array || []).contains(value);
});
