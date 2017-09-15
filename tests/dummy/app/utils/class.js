/**
 * Decorator to create a property with a default value on a class.
 *
 * ```js
 * export default MyComponent extends Component {
 *   @property foo = 'bar'
 * }
 * ```
 */
export function property(target, key, desc) {
  desc.value = desc.initializer();
  desc.initializer = undefined; // unset the initializer
  return desc;
}
