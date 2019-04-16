import { computed } from '@ember/object';

let VALUES = new WeakMap();

function valuesFor(obj) {
  if (!VALUES.has(obj)) {
    VALUES.set(obj, Object.create(null));
  }

  return VALUES.get(obj);
}

export default function defaultTo(defaultValue) {
  return computed({
    get(key) {
      let values = valuesFor(this);

      if (!(key in values)) {
        values[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      }

      return values[key];
    },

    set(key, value) {
      let values = valuesFor(this);

      if (value === undefined) {
        values[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      } else {
        values[key] = value;
      }

      return values[key];
    },
  });
}
