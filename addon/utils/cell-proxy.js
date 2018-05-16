/* globals Ember */
import EmberObject, { get } from '@ember/object';
import { addObserver } from '@ember/object/observers';

export default class CellProxy extends EmberObject {
  constructor() {
    super(...arguments);

    this._watchedProperties = [];

    this.row = null;
    this.valuePath = null;
    this.cellMetaCache = null;

    addObserver(this, 'row', this.notifyPropertyChanges);
    addObserver(this, 'valuePath', this.notifyPropertyChanges);
  }

  notifyPropertyChanges = () => {
    for (let property of this._watchedProperties) {
      Ember.propertyDidChange(this, property);
    }
  };

  willWatchProperty(key) {
    if (!(key in this)) {
      this._watchedProperties.push(key);
    }
  }

  didUnwatchProperty(key) {
    let i = this._watchedProperties.indexOf(key);

    if (i !== -1) {
      this._watchedProperties.splice(i, 1);
    }
  }

  unknownProperty(key) {
    let row = get(this, 'row');
    let valuePath = get(this, 'valuePath');
    let cellMetaCache = get(this, 'cellMetaCache');

    if (cellMetaCache.has(row)) {
      return cellMetaCache.get(row)[`${valuePath}:${key}`];
    }

    return undefined;
  }

  setUnknownProperty(key, value) {
    let row = get(this, 'row');
    let valuePath = get(this, 'valuePath');
    let cellMetaCache = get(this, 'cellMetaCache');

    if (!cellMetaCache.has(row)) {
      cellMetaCache.set(row, Object.create(null));
    }

    cellMetaCache.get(row)[`${valuePath}:${key}`] = value;

    Ember.propertyDidChange(this, key);

    return value;
  }
}
