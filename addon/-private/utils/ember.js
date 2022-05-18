import { gte } from 'ember-compatibility-helpers';
import Ember from 'ember';
import { notifyPropertyChange as _notifyPropertyChange } from '@ember/object';

export const notifyPropertyChange = gte('3.1.0') ? _notifyPropertyChange : Ember.propertyDidChange;
