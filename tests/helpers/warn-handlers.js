import { registerWarnHandler } from '@ember/debug';

let _registeredHandler = null;

export function setup() {
  registerWarnHandler((message, options, next) => {
    if (_registeredHandler) {
      _registeredHandler(message, options);
    } else {
      next(message, options);
    }
  });
}

export function registerTestWarnHandler(callback) {
  _registeredHandler = callback;
}

export function teardown() {
  if (_registeredHandler) {
    _registeredHandler = null;
  }
}
