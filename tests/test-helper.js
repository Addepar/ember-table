import Application from '../app';
import config from '../config/environment';
import registerRAFWaiter from 'ember-raf-scheduler/test-support/register-waiter';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

registerRAFWaiter();
setApplication(Application.create(config.APP));

start();
