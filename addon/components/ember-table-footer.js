import EmberTableBaseCell from './ember-table-base-cell';
import { property } from '../utils/class';
import { computed } from 'ember-decorators/object';
import { get } from '@ember/object';

import layout from '../templates/components/ember-table-footer';

export default class EmberTableFooter extends EmberTableBaseCell {
  @property layout = layout;
  @property classNameBindings = ['isFixed::et-tf'];

  @computed('column.valuePath', 'rowValue')
  get footerValue() {
    let valuePath = this.get('column.valuePath');
    let rowValue = this.get('rowValue');

    return get(rowValue, valuePath);
  }
}
