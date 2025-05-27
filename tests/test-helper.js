import Application from '../app';
import config from '../config/environment';
import registerRAFWaiter from 'ember-raf-scheduler/test-support/register-waiter';
import { setApplication } from '@ember/test-helpers';
import { setupEmberOnerrorValidation, start } from 'ember-qunit';
import { loadTests } from 'ember-qunit/test-loader';
import QUnit from 'qunit';
import { setup } from 'qunit-dom';
import {
  setup as setupWarnHandlers,
  teardown as teardownWarnHandlers,
} from './helpers/warn-handlers';
import { setupForTest as setupEmberTableForTest } from 'ember-table/test-support';

registerRAFWaiter();
setApplication(Application.create(config.APP));

setup(QUnit.assert);
setupEmberOnerrorValidation();
loadTests();

QUnit.testStart(() => {
  setupEmberTableForTest();
  setupWarnHandlers();
});

QUnit.testDone(() => {
  teardownWarnHandlers();
});

start();
