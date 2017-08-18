import EmberObject, { computed as emberComputed, get, set } from '@ember/object';

import { computed, readOnly } from 'ember-decorators/object';
import { alias } from 'ember-decorators/object/computed';
import { property } from '../utils/class';

export default class CellProxy extends EmberObject {
  @property column = null;

  @property _cache = null;
  @property _rowComponent = null;

  @readOnly @alias('_rowComponent.row') row;

  init() {
    this.setProperties = Object.create(null);
  }

  @computed('row', 'column.valuePath')
  get value() {
    const row = this.get('row');
    const valuePath = this.get('column.valuePath');

    return get(row, valuePath);
  }

  set value(value) {
    const row = this.get('row');
    const valuePath = this.get('column.valuePath');

    set(row, valuePath, value);
  }

  unknownProperty(key) {
    const prototype = Object.getPrototypeOf(this);

    prototype[key] = emberComputed('row', 'column.valuePath', {
      get() {
        const cache = this.get('_cache');
        const row = this.get('row');
        const valuePath = this.get('column.valuePath');

        if (cache.has(row)) {
          return cache.get(row)[`${valuePath}:${key}`];
        }
      },

      set(value) {
        const cache = this.get('_cache');
        const row = this.get('row');
        const valuePath = this.get('column.valuePath');

        if (!cache.has(row)) {
          cache.set(row, Object.create(null));
        }

        return cache.get(row)[`${valuePath}:${key}`] = value;
      }
    });
  }
}
