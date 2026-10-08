// Vendored from ember-classy-page-object 0.8.0 (no longer maintained); see the
// license notice in page-object.ts.
import { assert, inspect } from '@ember/debug';
import { collection as ecpoCollection, create } from 'ember-cli-page-object';

import type { Definition } from './descriptors.ts';
import type { PageObjectInstance } from './page-object.ts';

type Item = PageObjectInstance;
type Predicate = (item: Item, index: number) => boolean;
type Query = Record<string, unknown> | Predicate;

// The parts of an `ember-cli-page-object` collection that the proxy uses.
interface EcpoCollection {
  key: string;
  parent: unknown;
  length: number;
  objectAt(index: number): Item;
  toArray(): Item[];
  filter(predicate: (item: Item, index: number) => boolean): Item[];
  filterBy(key: string, value?: unknown): Item[];
  map<T>(callback: (item: Item, index: number) => T): T[];
  mapBy(key: string): unknown[];
}

const createWithParent = create as unknown as (
  definition: Definition,
  options: { parent: unknown },
) => Record<string, EcpoCollection>;

/**
 * A collection of page objects, scoped to the page object that defines it
 * rather than to the page root.
 */
export class CollectionProxy {
  private _key: string;
  private _page: Record<string, EcpoCollection>;

  constructor(
    scope: string,
    definition: Definition,
    key: string,
    parent: unknown,
  ) {
    this._key = key;
    this._page = createWithParent(
      { [key]: ecpoCollection(scope, definition) },
      { parent },
    );

    // Make the collection resolve its scope relative to the defining page object.
    this._collection.parent = parent;
  }

  private get _collection(): EcpoCollection {
    return this._page[this._key]!;
  }

  objectAt(index: number): Item {
    return this._collection.objectAt(index);
  }

  get length(): number {
    return this._collection.length;
  }

  toArray(): Item[] {
    return this._collection.toArray();
  }

  filter(predicate: (item: Item, index: number) => boolean): Item[] {
    return this._collection.filter(predicate);
  }

  filterBy(key: string, value?: unknown): Item[] {
    return this._collection.filterBy(key, value);
  }

  map<T>(callback: (item: Item, index: number) => T): T[] {
    return this._collection.map(callback);
  }

  mapBy(key: string): unknown[] {
    return this._collection.mapBy(key);
  }

  forEach(callback: (item: Item, index: number) => void): void {
    this.toArray().forEach(callback);
  }

  findOne(query: Query): Item {
    let result = this.findAll(query);

    assert(
      `Expected at most one result from 'findOne' query in '${
        this._collection.key
      }' collection, but found ${result.length} using query ${inspect(query)}`,
      result.length === 1,
    );

    return result[0]!;
  }

  findAll(query: Query): Item[] {
    let predicate: Predicate;

    if (typeof query === 'function') {
      predicate = query;
    } else if (typeof query === 'object' && query !== null) {
      predicate = (item) =>
        Object.keys(query).every((key) => item[key] === query[key]);
    } else {
      throw new Error(
        `Expected query for findAll to be either an object or function, received: ${inspect(query)}`,
      );
    }

    return this.filter(predicate);
  }
}

export interface CollectionDescriptor {
  isDescriptor: true;
  setup(this: CollectionDescriptor, node: object, key: string): void;
  get(this: object): CollectionProxy | undefined;
  _scope: string;
  _definition: Definition;
}

/**
 * Defines a collection of page objects matching `scope`. Accepts a definition
 * (whose `scope` is used), or a scope and a definition or page object class.
 */
export function collection(
  scopeOrDefinition: string | object,
  definitionOrNull?: object,
): CollectionDescriptor {
  // A page object may be used in many places; each use gets its own proxy.
  let collectionProxyMap = new WeakMap<object, CollectionProxy>();

  // Without a separate definition, the first argument is the definition.
  let source = (definitionOrNull ?? scopeOrDefinition) as object;
  if (typeof source === 'function' && '_definition' in source) {
    source = source._definition as Definition;
  }

  // The collection applies the scope; leave it out of the item definition.
  // Copy descriptors rather than values, so getters are not evaluated here.
  let definition = Object.defineProperties(
    {},
    Object.getOwnPropertyDescriptors(source),
  ) as Definition;
  let scope = (
    definitionOrNull ? scopeOrDefinition : definition.scope
  ) as string;
  delete definition.scope;

  return {
    isDescriptor: true,

    setup(node, key) {
      collectionProxyMap.set(
        node,
        new CollectionProxy(this._scope, this._definition, key, node),
      );
    },

    get() {
      return collectionProxyMap.get(this);
    },

    _scope: scope,
    _definition: definition,
  };
}
