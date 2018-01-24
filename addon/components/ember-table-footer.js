import EmberTableBaseCell from './ember-table-base-cell';
import { get } from '@ember/object';

import { action, computed, readOnly } from 'ember-decorators/object';
import { alias } from 'ember-decorators/object/computed';
import { className } from 'ember-decorators/component';
import { argument } from '@ember-decorators/argument';
import { type } from '@ember-decorators/argument/type';
import { Action } from '@ember-decorators/argument/types';

import layout from '../templates/components/ember-table-footer';

export default class EmberTableFooter extends EmberTableBaseCell {
  layout = layout;

  // We have to alias because the class name changes per base cell type
  @className('', 'et-tf')
  @readOnly @alias('isFixed') _isFixed;

  @argument
  @type(Action)
  onFooterEvent;

  @computed('column.valuePath', 'rowValue')
  get footerValue() {
    let valuePath = this.get('column.valuePath');
    let rowValue = this.get('rowValue');

    return get(rowValue, valuePath);
  }

  @action
  onFooterEvent() {
    this.sendAction('onFooterEvent', ...arguments);
  }
}
