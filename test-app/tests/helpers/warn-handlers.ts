import { registerWarnHandler } from '@ember/debug';

type WarnHandler = (message: string, options: { id: string }) => void;

let _registeredHandler: WarnHandler | null = null;
let _didRegisterWarnHandler = false;

export function setup() {
  if (_didRegisterWarnHandler) {
    // We cannot unregister a warn handler, so make sure to only register the
    // handler one time during all tests.
    return;
  }
  _didRegisterWarnHandler = true;
  registerWarnHandler((message, options, next) => {
    if (_registeredHandler) {
      _registeredHandler(message, options!);
    } else {
      next(message, options);
    }
  });
}

export function registerTestWarnHandler(callback: WarnHandler) {
  _registeredHandler = callback;
}

export function teardown() {
  _registeredHandler = null;
}
