import { gte } from 'ember-compatibility-helpers';
import { assert } from '@ember/debug';

// eslint-disable-next-line no-restricted-imports
import { observer as emberObserver } from '@ember/object';

// eslint-disable-next-line no-restricted-imports
import {
  addObserver as emberAddObserver,
  removeObserver as emberRemoveObserver,
} from '@ember/object/observers';

const USE_ASYNC_OBSERVERS = gte('3.13.0');

function asyncObserver(...args) {
  let fn = args.pop();
  let dependentKeys = args;
  let sync = false;

  return emberObserver({ dependentKeys, fn, sync });
}

function asyncAddObserver(...args) {
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

  return emberAddObserver(obj, path, target, method, sync);
}

function asyncRemoveObserver(...args) {
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

export const observer = USE_ASYNC_OBSERVERS ? asyncObserver : emberObserver;
export const addObserver = USE_ASYNC_OBSERVERS ? asyncAddObserver : emberAddObserver;
export const removeObserver = emberRemoveObserver ? asyncRemoveObserver : emberRemoveObserver;
