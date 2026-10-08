import { isArray } from '@ember/array';
import { assert } from '@ember/debug';

/** An array, or an Ember array-like that implements `objectAt`. */
export type ArrayLike<T> = readonly T[] | { readonly length: number; objectAt(index: number): T | undefined };

interface MutableEmberArray<T> {
  objectAt(index: number): T | undefined;
  replace(start: number, deleteCount: number, items: T[]): void;
}

/**
  Genericizes `objectAt` so it can be run against a normal array or an Ember array
*/
export function objectAt<T>(arr: ArrayLike<T>, index: number): T | undefined {
  assert(
    'arr must be an instance of a Javascript Array or implement `objectAt`',
    isArray(arr) || typeof (arr as { objectAt?: unknown }).objectAt === 'function'
  );

  if ('objectAt' in arr && typeof arr.objectAt === 'function') {
    return arr.objectAt(index);
  }

  return (arr as readonly T[])[index];
}

export function splice<T>(
  items: T[] | MutableEmberArray<T>,
  start: number,
  count: number,
  ...add: T[]
): void {
  if ('replace' in items && typeof items.replace === 'function' && typeof items.objectAt === 'function') {
    items.replace(start, count, add);
  } else {
    (items as T[]).splice(start, count, ...add);
  }
}

/**
 * Cycle shift an internal [start..end] to [start + 1...end, start].
 */
export function move<T>(items: T[] | MutableEmberArray<T>, start: number, end: number): void {
  let sourceItem = objectAt(items as ArrayLike<T>, start) as T;

  splice(items, start, 1);
  splice(items, end, 0, sourceItem);
}
