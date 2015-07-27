import Ember from 'ember';
import Treedata from '../models/treedata';

export default Ember.Controller.extend({
  data: Ember.computed(function() {
    return Treedata;
  })
});
