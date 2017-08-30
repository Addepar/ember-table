import Ember from 'ember';
import { htmlSafe } from '@ember/string';
import { computed } from 'ember-decorators/object';
import { get } from '@ember/object';
import { property } from '../utils/class';

import layout from '../templates/components/ember-table-cell';

const { Component } = Ember;

export default class EmberTableCell extends Component {
  @property layout = layout;
  @property tagName = 'td';
  @property attributeBindings = ['style:style'];

  @computed('columnIndex', 'numFixedColumns')
  get isFixed() {
    const numFixedColumns = this.get('numFixedColumns');
    return this.get('columnIndex') === 0 && Number.isInteger(numFixedColumns) &&
    numFixedColumns !== 0;
  }

  @computed('row', 'column.valuePath')
  get value() {
    const row = this.get('row');
    const valuePath = this.get('column.valuePath');

    return get(row, valuePath);
  }

  @computed('column.width')
  get style() {
    return htmlSafe(`min-width: ${this.get('column.width')}px; max-width: ${this.get('column.width')}px;`);
  }

  @computed('isFixed')
  get fixedCellClass() {
    return this.get('isFixed') === true ? 'et2-fixed-table-cell' : '';
  }

  click() {
    if (this.get('columnIndex') === 0) {
      this.sendAction('toggleRow', this.get('row'));
    }
  }
}
