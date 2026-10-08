import type { RenderingTestContext } from '@ember/test-helpers';

/**
 * The test context of a table test. Tests put the table's arguments on it with
 * `this.set(...)` and templates read them from it, so any property may be
 * present; their types depend on the test.
 */
export interface TableTestContext extends RenderingTestContext {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [property: string]: any;
}

/**
 * A value from an `ember-table/test-support` page object. Page objects build
 * their properties at runtime, so they are untyped.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PageObject = any;
