import { assert } from '@ember/debug';

// eslint-disable-next-line no-restricted-imports
import { observer as emberObserver } from '@ember/object';

import {
  // eslint-disable-next-line no-restricted-imports
  addObserver as emberAddObserver,
  // eslint-disable-next-line no-restricted-imports
  removeObserver as emberRemoveObserver,
} from '@ember/object/observers';

export function observer(...args) {
  let fn = args.pop();
  let dependentKeys = args;
  let sync = false;

  // eslint-disable-next-line ember/no-observers
  return emberObserver({ dependentKeys, fn, sync });
}

export function addObserver(...args) {
  let obj, path, target, method;
  let sync = false;
  obj = args[0];
  path = args[1];
  assert(
    `Expected 3 or 4 args for addObserver, got ${args.length}`,
    args.length === 3 || args.length === 4
  );
  if (args.length === 3) {
    target = null;
    method = args[2];
  } else if (args.length === 4) {
    target = args[2];
    method = args[3];
  }

  // eslint-disable-next-line ember/no-observers
  return emberAddObserver(obj, path, target, method, sync);
}

export function removeObserver(...args) {
  let obj, path, target, method;
  let sync = false;
  obj = args[0];
  path = args[1];
  assert(
    `Expected 3 or 4 args for addObserver, got ${args.length}`,
    args.length === 3 || args.length === 4
  );
  if (args.length === 3) {
    target = null;
    method = args[2];
  } else {
    target = args[2];
    method = args[3];
  }
  return emberRemoveObserver(obj, path, target, method, sync);
}
