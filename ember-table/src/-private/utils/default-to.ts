/**
  Returns `defaultValue` only when `value` is `undefined`. Unlike `??`, an
  explicit `null` is kept, which matches the v1 addon's `defaultTo` and lets
  consumers pass `null` to turn a feature off (e.g. `@sortFunction={{null}}`).
*/
export function defaultTo<T, D>(
  value: T,
  defaultValue: D,
): Exclude<T, undefined> | D {
  return value === undefined ? defaultValue : (value as Exclude<T, undefined>);
}
