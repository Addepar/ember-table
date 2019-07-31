import Application from '../app';
import config from '../config/environment';
import registerRAFWaiter from 'ember-raf-scheduler/test-support/register-waiter';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import QUnit from 'qunit';
import {
  setup as setupWarnHandlers,
  teardown as teardownWarnHandlers,
} from './helpers/warn-handlers';

registerRAFWaiter();
setApplication(Application.create(config.APP));

QUnit.testStart(() => {
  setupWarnHandlers();
});

QUnit.testDone(() => {
  teardownWarnHandlers();
});

start();
