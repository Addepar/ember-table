export function getOrCreate(obj, cache, Class) {
  if (cache.has(obj) === false) {
    cache.set(obj, Class.create ? Class.create() : new Class());
  }

  return cache.get(obj);
}
