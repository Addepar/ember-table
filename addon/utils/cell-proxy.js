import EmberObject, {
  computed as emberComputed,
  get,
  set
} from '@ember/object';

import { SUPPORTS_NEW_COMPUTED } from 'ember-compatibility-helpers';

import { computed } from '@ember-decorators/object';
import { readOnly } from '@ember-decorators/object/computed';

export default class CellProxy extends EmberObject {
  column = null;
  columnIndex = null;

  row = null;
  targetTable = null;

  @readOnly('_rowComponent.rowValue') rowValue;
  @readOnly('_rowComponent.rowIndex') rowIndex;

  @computed('rowValue', 'column.valuePath')
  get value() {
    let rowValue = get(this, 'rowValue');
    let valuePath = get(this, 'column.valuePath');

    return get(rowValue, valuePath);
  }

  set value(value) {
    let rowValue = get(this, 'rowValue');
    let valuePath = get(this, 'column.valuePath');

    set(rowValue, valuePath, value);
  }

  unknownProperty(key) {
    let prototype = Object.getPrototypeOf(this);

    let setValueFunc = (context, k, value) => {
      let cache = get(context, '_cache');
      let rowValue = get(context, 'rowValue');
      let valuePath = get(context, 'column.valuePath');

      if (!cache.has(rowValue)) {
        cache.set(rowValue, Object.create(null));
      }

      return cache.get(rowValue)[`${valuePath}:${k}`] = value;
    };

    let getValueFunc = (context, key) => {
      let cache = get(context, '_cache');
      let rowValue = get(context, 'rowValue');
      let valuePath = get(context, 'column.valuePath');

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
