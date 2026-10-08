// Vendored from ember-classy-page-object 0.8.0 (no longer maintained); see the
// license notice in page-object.ts.
import { getter } from 'ember-cli-page-object/macros';

export type Definition = Record<string, unknown>;

function isObject(obj: unknown): obj is Definition {
  return typeof obj === 'object' && obj !== null;
}

function walkObject(
  obj: object,
  fn: (name: string, descriptor: PropertyDescriptor) => void,
): void {
  for (let name of Object.getOwnPropertyNames(obj)) {
    fn(name, Object.getOwnPropertyDescriptor(obj, name)!);
  }
}

/** Replaces nested page object classes with their definitions. */
export function extractPageObjects(definition: object): Definition {
  let finalizedDefinition: Definition = {};

  walkObject(definition, (name, descriptor) => {
    let value: unknown = descriptor.value;

    if (
      typeof value === 'function' &&
      '_definition' in value &&
      value._definition
    ) {
      descriptor.value = value._definition;
    }

    if (isObject(descriptor.value)) {
      descriptor.value = extractPageObjects(descriptor.value);
    }

    Object.defineProperty(finalizedDefinition, name, descriptor);
  });

  return finalizedDefinition;
}

/** Replaces native getters with `getter` macros, which page objects evaluate lazily. */
export function extractGetters(definition: object): Definition {
  let finalizedDefinition: Definition = {};

  walkObject(definition, (name, descriptor) => {
    if (typeof descriptor.get === 'function') {
      descriptor.value = getter(descriptor.get);

      descriptor.writable = true;
      delete descriptor.get;
      delete descriptor.set;
    } else if (isObject(descriptor.value)) {
      descriptor.value = extractGetters(descriptor.value);
    }

    Object.defineProperty(finalizedDefinition, name, descriptor);
  });

  return finalizedDefinition;
}

/** Deeply merges `src` into `dest`; properties already defined on `dest` win. */
export function deepMergeDescriptors(
  dest: Definition,
  src: Definition,
): Definition {
  walkObject(src, (name, descriptor) => {
    let srcValue: unknown = descriptor.value;

    if (Object.hasOwn(dest, name)) {
      let destValue: unknown = Object.getOwnPropertyDescriptor(
        dest,
        name,
      )!.value;

      if (isObject(destValue) && isObject(srcValue)) {
        descriptor.value = deepMergeDescriptors(destValue, srcValue);
      } else if (destValue === undefined) {
        descriptor.value = srcValue;
      } else {
        return;
      }
    } else if (isObject(srcValue)) {
      descriptor.value = deepMergeDescriptors({}, srcValue);
    }

    Object.defineProperty(dest, name, descriptor);
  });

  return dest;
}
