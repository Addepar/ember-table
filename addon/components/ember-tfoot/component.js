import EmberTBody from '../ember-tbody/component';
import { A as emberA } from '@ember/array';

import { computed } from '@ember-decorators/object';
import { tagName } from '@ember-decorators/component';

import layout from './template';

@tagName('tfoot')
export default class EmberTFoot extends EmberTBody {
  layout = layout;

  @computed('wrappedRows.[]')
  get wrappedRowArray() {
    let wrappedRows = this.get('wrappedRows');
    let wrappedRowsLength = wrappedRows.get('length');

    let arr = [];

    for (let i = 0; i < wrappedRowsLength; i++) {
      arr.push(wrappedRows.objectAt(i));
    }

    return emberA(arr);
  }
}
