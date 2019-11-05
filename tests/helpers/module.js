import { module, moduleForComponent } from 'ember-qunit';

export function scenarioModule(scenarios, callback) {
  for (let scenario in scenarios) {
    module(scenario, function(...moduleArgs) {
      callback(scenarios[scenario], ...moduleArgs);
    });
  }
}

export function componentModule(moduleName, callback) {
  moduleForComponent('ember-table', moduleName, { integration: true });

  callback();
}

export function parameterizedComponentModule(moduleName, parameters, callback) {
  Object.keys(parameters).forEach(key => {
    let { values, hooks } = parameters[key];

    for (let value of values) {
      moduleForComponent('ember-table', `${moduleName} > params {${key}: ${value}}`, {
        integration: true,
        beforeEach() {
          hooks.beforeEach && hooks.beforeEach(value);
        },
        afterEach() {
          hooks.afterEach && hooks.afterEach(value);
        },
      });
      callback();
    }
  });
}
