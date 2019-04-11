import EmberObject, { defineProperty, computed, observer } from '@ember/object';
import { alias } from '@ember/object/computed';

const PROPERTIES = new WeakMap();

function findOrCreatePropertyInstance(propertyClass, context, key) {
  if (!PROPERTIES.has(context)) {
    PROPERTIES.set(context, {});
  }

  let propertiesForContext = PROPERTIES.get(context);

  let property = propertiesForContext[key];
  if (property) {
    return property;
  }

  property = propertyClass.create({
    _key: key,
    _context: context,
  });

  let originalWillDestroy = context.willDestroy;

  // HACK: wrap around the original willDestroy to destroy our property as well
  context.willDestroy = () => {
    property.destroy();
    originalWillDestroy.apply(context, arguments);
  };

  propertiesForContext[key] = property;
  return property;
}

const ClassBasedComputedProperty = EmberObject.extend({
  _context: null,
  _key: null,
  _computedFunction: null,
  _dependencies: null,

  init() {
    this._super(...arguments);
    this._redefineProperty();
  },

  // eslint-disable-next-line
  _contentDidChange: observer('_content', function() {
    if (!this._isUpdating && !this._context.isDestroyed && !this._context.isDestroying) {
      this._context.notifyPropertyChange(this._key);
    }
  }),

  _redefineProperty() {
    let dependencies = this.get('_dependencies');
    let isDynamicList = this.get('_isDynamicList');

    let computed = this._computedFunction(
      ...dependencies.map((d, i) =>
        isDynamicList[i] ? this.get(`_context.${d}`) : `_context.${d}`
      )
    );

    defineProperty(this, '_content', computed);
  },

  _get() {
    return this.get('_content');
  },

  _set(key, value) {
    this._isUpdating = true;
    this.set('_content', value);
    this._isUpdating = false;

    return this._get();
  },
});

function classComputedProperty(isDynamicList, computedFunction) {
  return function(...dependencies) {
    let extension = {
      _computedFunction: computedFunction,
      _isDynamicList: isDynamicList,
      _dependencies: dependencies,
    };

    dependencies.forEach((dep, index) => {
      if (isDynamicList[index] === true) {
        // eslint-disable-next-line
        extension[`${dep}DidChange`] = observer(`_context.${dep}`, function() {
          this._redefineProperty();
        });
      }
    });

    let klass = ClassBasedComputedProperty.extend(extension);

    return computed(...dependencies, {
      get(key) {
        let property = findOrCreatePropertyInstance(klass, this, key);

        return property._get();
      },
      set(key, value) {
        let property = findOrCreatePropertyInstance(klass, this, key);

        return property._set(key, value);
      },
    });
  };
}

export const dynamicAlias = classComputedProperty([false, true], function(...segments) {
  if (segments.every(s => typeof s === 'string')) {
    return alias(segments.join('.'));
  } else {
    return null;
  }
});
