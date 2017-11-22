import EmberObject, {
  computed as emberComputed,
  get,
  set
} from '@ember/object';

import { SUPPORTS_NEW_COMPUTED } from 'ember-compatibility-helpers';

import { computed, readOnly } from 'ember-decorators/object';
import { alias } from 'ember-decorators/object/computed';
import { property } from '../utils/class';

export default class CellProxy extends EmberObject {
  @property column = null;

  @property _cache = null;
  @property _rowComponent = null;

  @readOnly @alias('_rowComponent.rowValue') rowValue;
  @readOnly @alias('_rowComponent.rowIndex') rowIndex;

  init() {
    this.setProperties = Object.create(null);
  }

  @computed('rowValue', 'column.valuePath')
  get value() {
    let rowValue = this.get('rowValue');
    let valuePath = this.get('column.valuePath');

    return get(rowValue, valuePath);
  }

  set value(value) {
    let rowValue = this.get('rowValue');
    let valuePath = this.get('column.valuePath');

    set(rowValue, valuePath, value);
  }

  unknownProperty(key) {
    let prototype = Object.getPrototypeOf(this);

    let setValueFunc = (context, k, value) => {
      let cache = context.get('_cache');
      let rowValue = context.get('rowValue');
      let valuePath = context.get('column.valuePath');

      if (!cache.has(rowValue)) {
        cache.set(rowValue, Object.create(null));
      }

      return cache.get(rowValue)[`${valuePath}:${k}`] = value;
    };

    let getValueFunc = (context, key) => {
      let cache = context.get('_cache');
      let rowValue = context.get('rowValue');
      let valuePath = context.get('column.valuePath');

      if (cache.has(rowValue)) {
        return cache.get(rowValue)[`${valuePath}:${key}`];
      }

      return undefined;
    };

    if (SUPPORTS_NEW_COMPUTED) {
      prototype[key] = emberComputed('rowValue', 'column.valuePath', {
        get(key) {
          return getValueFunc(this, key);
        },

        set(key, value) {
          return setValueFunc(this, key, value);
        }
      });
    } else {
      prototype[key] = emberComputed('rowValue', 'column.valuePath', function(key, value) {
        if (arguments.length > 1) {
          return setValueFunc(this, key, value);
        }

        return getValueFunc(this, key);
      });
    }
  }
}
