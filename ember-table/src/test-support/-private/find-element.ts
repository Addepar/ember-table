// Vendored from ember-classy-page-object 0.8.0 (no longer maintained); see the
// license notice in page-object.ts.
import {
  findElement as ecpoFindElement,
  findElementWithAssert as ecpoFindElementWithAssert,
} from 'ember-cli-page-object/extend';

import type { PageObjectInstance } from './page-object.ts';

interface FindElementOptions {
  multiple?: boolean;
  [option: string]: unknown;
}

type Finder = typeof ecpoFindElement;

function unwrap(
  finder: Finder,
  pageObject: PageObjectInstance,
  selector?: string,
  options: FindElementOptions = {},
) {
  let result = finder(pageObject as Parameters<Finder>[0], selector, options);
  return options.multiple ? result.toArray() : result[0];
}

/**
 * Finds the DOM element of a page object, or of `selector` within it. Returns
 * an array of elements when `options.multiple` is set.
 */
export function findElement(
  pageObject: PageObjectInstance,
  selector?: string,
  options?: FindElementOptions & { multiple?: false },
): HTMLElement;
export function findElement(
  pageObject: PageObjectInstance,
  selector: string | undefined,
  options: FindElementOptions & { multiple: true },
): HTMLElement[];
export function findElement(
  pageObject: PageObjectInstance,
  selector?: string,
  options?: FindElementOptions,
): HTMLElement | HTMLElement[] {
  return unwrap(ecpoFindElement, pageObject, selector, options) as
    HTMLElement | HTMLElement[];
}

/** Like `findElement`, but asserts that the element exists. */
export function findElementWithAssert(
  pageObject: PageObjectInstance,
  selector?: string,
  options?: FindElementOptions & { multiple?: false },
): HTMLElement;
export function findElementWithAssert(
  pageObject: PageObjectInstance,
  selector: string | undefined,
  options: FindElementOptions & { multiple: true },
): HTMLElement[];
export function findElementWithAssert(
  pageObject: PageObjectInstance,
  selector?: string,
  options?: FindElementOptions,
): HTMLElement | HTMLElement[] {
  return unwrap(ecpoFindElementWithAssert, pageObject, selector, options) as
    HTMLElement | HTMLElement[];
}
