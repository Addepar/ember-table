import { get } from '@ember/object';

export function getOrCreate(obj, cache, Class) {
  if (cache.has(obj) === false) {
    cache.set(obj, Class.create ? Class.create() : new Class());
  }

  return cache.get(obj);
}

/**
 * Substitute for `Map` that allows non-identical object keys to share
 * identical values by specifying a key path for the associating keys.
 *
 * If no key path is specified, it behaves like a `Map`.
 *
 * @class MetaCache
 * @constructor
 * @param {Object} options
 */
export default class MetaCache {
  constructor({ keyPath } = {}) {
    this.keyPath = keyPath;

    // in order to prevent memory leaks, we need to be able to clean the cache
    // manually when the table is destroyed or updated; this is why we use a
    // Map instead of WeakMap
    this._map = new Map();
  }

  get(obj) {
    let key = this._keyFor(obj);
    let entry = this._map.get(key);
    return entry ? entry[1] : entry;
  }

  getOrCreate(obj, Class) {
    return getOrCreate(obj, this, Class);
  }

  set(obj, meta) {
    let key = this._keyFor(obj);
    this._map.set(key, [obj, meta]);
  }

  has(obj) {
    let key = this._keyFor(obj);
    return this._map.has(key);
  }

  delete(obj) {
    let key = this._keyFor(obj);
    this._map.delete(key);
  }

  entries() {
    return this._map.values();
  }

  _keyFor(obj) {
    // falls back to `obj` as key if a legitimate key cannot be produced
    if (!obj || !this.keyPath) {
      return obj;
    }

    let key = get(obj, this.keyPath);
    return key ? key : obj;
  }
}
