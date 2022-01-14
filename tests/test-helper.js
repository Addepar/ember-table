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
import { gte } from 'ember-compatibility-helpers';

/*
 * see tests/index.html
 */
if (gte('3.0.0')) {
  let fragment = document.createElement('div');
  fragment.innerHTML = `
    <div id="qunit"></div>
    <div id="qunit-fixture">
      <div id="ember-testing-container">
        <div id="ember-testing"></div>
      </div>
    </div>
  `;
  for (let child of Array.from(fragment.childNodes)) {
    document.body.appendChild(child);
  }
}

registerRAFWaiter();
setApplication(Application.create(config.APP));

QUnit.testStart(() => {
  setupWarnHandlers();
});

QUnit.testDone(() => {
  teardownWarnHandlers();
});

start();
