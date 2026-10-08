import { module } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

export function scenarioModule<Scenario>(
  scenarios: Record<string, Scenario>,
  callback: (scenario: Scenario, hooks: NestedHooks) => void
) {
  for (let scenario in scenarios) {
    module(scenario, function(...moduleArgs) {
      callback(scenarios[scenario]!, ...moduleArgs);
    });
  }
}

export function componentModule(moduleName: string, callback: () => void) {
  module(moduleName, function(hooks) {
    setupRenderingTest(hooks);

    callback();
  });
}

interface ModuleParameter<Value> {
  values: Value[];
  hooks: {
    beforeEach?: (value: Value) => void;
    afterEach?: (value: Value) => void;
  };
}

export function parameterizedComponentModule<Value>(
  moduleName: string,
  parameters: Record<string, ModuleParameter<Value>>,
  callback: (hooks: NestedHooks) => void
) {
  Object.keys(parameters).forEach(key => {
    let { values, hooks } = parameters[key]!;

    for (let value of values) {
      module(`${moduleName} > params {${key}: ${String(value)}}`, function(qunitHooks) {
        setupRenderingTest(qunitHooks);
        qunitHooks.beforeEach(function() {
          hooks.beforeEach?.(value);
        });
        qunitHooks.afterEach(function() {
          hooks.afterEach?.(value);
        });
        callback(qunitHooks);
      });
    }
  });
}
