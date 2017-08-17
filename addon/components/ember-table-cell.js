import Ember from 'ember';
import { htmlSafe } from '@ember/string';
import { computed } from 'ember-decorators/object';
import { property } from '../utils/class';

import layout from '../templates/components/ember-table-cell';

const { Component } = Ember;

export default class EmberTableCell extends Component {
  @property layout = layout;
  @property tagName = 'td';
  @property attributeBindings = ['style:style'];

  @computed('columnIndex', 'hasfixedColumn')
  get isFixed() {
    return this.get('columnIndex') === 0 && this.get('hasFixedColumn');
  }

  @computed('width')
  get style() {
    return htmlSafe(`min-width: ${this.get('width')}px; max-width: ${this.get('width')}px;`);
  }
}
