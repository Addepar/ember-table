/* globals Ember */
import { gte } from 'ember-compatibility-helpers';

/* eslint-disable ember/new-module-imports */
export const notifyPropertyChange = gte('3.1.0')
  ? Ember.notifyPropertyChange
  : Ember.propertyDidChange;
