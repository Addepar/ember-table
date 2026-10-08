import { get } from '@ember/object';

/** A meta class: a classic `EmberObject` subclass, or a native class. */
export type MetaClass<Meta> = { create(): Meta } | (new () => Meta);

interface Cache<Key, Meta> {
  has(key: Key): boolean;
  get(key: Key): Meta | undefined;
  set(key: Key, meta: Meta): unknown;
}

export function getOrCreate<Key, Meta>(
  obj: Key,
  cache: Cache<Key, Meta>,
  Class: MetaClass<Meta>
): Meta {
  if (cache.has(obj) === false) {
    cache.set(obj, 'create' in Class ? Class.create() : new Class());
  }

  return cache.get(obj)!;
}

/**
 * Substitute for `Map` that allows non-identical object keys to share
 * identical values by specifying a key path for the associating keys.
 *
 * If no key path is specified, it behaves like a `Map`.
 */
export default class MetaCache<Key = unknown, Meta = unknown> {
  keyPath: string | undefined;

  // in order to prevent memory leaks, we need to be able to clean the cache
  // manually when the table is destroyed or updated; this is why we use a
  // Map instead of WeakMap
  private _map = new Map<unknown, [Key, Meta]>();

  constructor({ keyPath }: { keyPath?: string } = {}) {
    this.keyPath = keyPath;
  }

  get(obj: Key): Meta | undefined {
    let key = this._keyFor(obj);
    let entry = this._map.get(key);
    return entry ? entry[1] : undefined;
  }

  getOrCreate(obj: Key, Class: MetaClass<Meta>): Meta {
    return getOrCreate(obj, this, Class);
  }

  set(obj: Key, meta: Meta): void {
    let key = this._keyFor(obj);
    this._map.set(key, [obj, meta]);
  }

  has(obj: Key): boolean {
    let key = this._keyFor(obj);
    return this._map.has(key);
  }

  delete(obj: Key): void {
    let key = this._keyFor(obj);
    this._map.delete(key);
  }

  entries(): IterableIterator<[Key, Meta]> {
    return this._map.values();
  }

  private _keyFor(obj: Key): unknown {
    // falls back to `obj` as key if a legitimate key cannot be produced
    if (!obj || !this.keyPath) {
      return obj;
    }

    let key: unknown = get(obj, this.keyPath);
    return key ? key : obj;
  }
}
