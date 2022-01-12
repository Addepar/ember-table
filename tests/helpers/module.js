import { module } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

export function scenarioModule(scenarios, callback) {
  for (let scenario in scenarios) {
    module(scenario, function(...moduleArgs) {
      callback(scenarios[scenario], ...moduleArgs);
    });
  }
}

export function componentModule(moduleName, callback) {
  module(moduleName, function(hooks) {
    setupRenderingTest(hooks);

    callback();
  });
}

export function parameterizedComponentModule(moduleName, parameters, callback) {
  Object.keys(parameters).forEach(key => {
    let { values, hooks } = parameters[key];

    for (let value of values) {
      module(`${moduleName} > params {${key}: ${value}}`, function(qunitHooks) {
        setupRenderingTest(qunitHooks);
        qunitHooks.beforeEach(function() {
          hooks.beforeEach && hooks.beforeEach(value);
        });
        qunitHooks.afterEach(function() {
          hooks.afterEach && hooks.afterEach(value);
        });
      });
      callback();
    }
  });
}
