import ObjectProxy from '@ember/object/proxy';
import EmberObject from '@ember/object';

const META_CACHE_MAP = new WeakMap();

export function metaCacheFor(obj, Class) {
  if (META_CACHE_MAP.has(obj) === false) {
    META_CACHE_MAP.set(obj, Class.create ? Class.create() : new Class());
  }

  return META_CACHE_MAP.get(obj);
}

export default class MetaProxy extends ObjectProxy {
  meta = metaCacheFor(this.content, EmberObject);
}
