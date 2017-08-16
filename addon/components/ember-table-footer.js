import Ember from 'ember';
import { computed } from 'ember-decorators/object';
import { property } from '../utils/class';

import { getHeaderCellStyle } from '../utils/fixed-column';
import layout from '../templates/components/ember-table-footer';

const { Component } = Ember;

export default class EmberTableFooter extends Component {
  @property layout = layout;
  @property tagName = 'th';
  @property attributeBindings = ['style:style'];

  @computed('width', 'columnIndex', 'fixedColumnWidth')
  style() {
    return getHeaderCellStyle(
      this.get('width'),
      this.get('columnIndex'),
      this.get('fixedColumnWidth')
    );
  }
}
