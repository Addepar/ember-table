/* globals Ember */
import { gte } from 'ember-compatibility-helpers';

export const notifyPropertyChange = gte('3.0.0')
  ? Ember.notifyPropertyChange
  : Ember.propertyDidChange;
