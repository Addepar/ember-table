import { get } from '@ember/object';

export function getOrCreate(obj, cache, Class) {
  if (cache.has(obj) === false) {
    cache.set(obj, Class.create ? Class.create() : new Class());
  }

  return cache.get(obj);
}
export default class MetaCache {
  constructor({ metaKey } = {}) {
    this.metaKey = metaKey;
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
    if (!obj || !this.metaKey) {
      return obj;
    }

    let key = get(obj, this.metaKey);
    return key ? key : obj;
  }
}
