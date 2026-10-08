import Application from '../app/app.ts';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start as qunitStart, setupEmberOnerrorValidation } from 'ember-qunit';
import { setTesting } from '@embroider/macros';
import { setupForTest as setupEmberTableForTest } from 'ember-table/test-support';
import {
  setup as setupWarnHandlers,
  teardown as teardownWarnHandlers,
} from './helpers/warn-handlers';

export function start() {
  setTesting(true);
  setApplication(Application.create({ autoboot: false, rootElement: '#ember-testing' }));

  setup(QUnit.assert);
  setupEmberOnerrorValidation();

  QUnit.testStart(() => {
    setupEmberTableForTest();
    setupWarnHandlers();
  });

  QUnit.testDone(() => {
    teardownWarnHandlers();
  });

  qunitStart();
}
