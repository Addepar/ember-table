import Ember from 'ember';

export default Ember.Controller.extend({
  isTestRoute: Ember.computed.match('currentRouteName', /-test$/)
});
