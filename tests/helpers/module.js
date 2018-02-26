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
