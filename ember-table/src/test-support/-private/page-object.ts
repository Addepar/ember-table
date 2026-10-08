/*
 * Vendored from ember-classy-page-object 0.8.0
 * (https://github.com/Addepar/ember-classy-page-object), which is no longer
 * maintained. Applies to the files in this directory.
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2017
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import { assert } from '@ember/debug';
import { create } from 'ember-cli-page-object';

import {
  deepMergeDescriptors,
  extractGetters,
  extractPageObjects,
  type Definition,
} from './descriptors.ts';

/**
 * A page object instance. Its properties come from a definition merged across
 * `extend` calls, so they are not statically known.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PageObjectInstance = Record<string, any>;

/** A definition, or a selector used as the `scope` of one. */
export type Extension = string | object;

function extendDefinition(
  definition: Definition,
  extension: Extension,
): Definition {
  assert(
    'must provide a string or an object to extend',
    extension !== null &&
      (typeof extension === 'string' || typeof extension === 'object'),
  );
  assert(
    'must provide a definition with atleast one key when extending a PageObject',
    extension && Object.keys(extension).length > 0,
  );

  let finalizedDefinition: Definition =
    typeof extension === 'string'
      ? { scope: extension }
      : extractPageObjects(extension);

  finalizedDefinition = extractGetters(finalizedDefinition);

  return deepMergeDescriptors(finalizedDefinition, definition);
}

/**
 * A page object class. `extend` returns a subclass with a merged definition;
 * `new` creates an `ember-cli-page-object` component from it, optionally
 * extended once more.
 */
export default class PageObject {
  static _definition: Definition = {};

  // Instances are page object components, with the definition's properties.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [property: string]: any;

  constructor(extension?: Extension) {
    let definition = (this.constructor as typeof PageObject)._definition;

    if (extension) {
      definition = extendDefinition(definition, extension);
    }

    // Constructors may return an object other than `this`; page objects are
    // plain `ember-cli-page-object` components.
    return create(definition);
  }

  static extend<T extends typeof PageObject>(this: T, extension: Extension): T {
    let Page = class extends (this as typeof PageObject) {};

    Page._definition = extendDefinition(this._definition, extension);

    return Page as T;
  }
}
