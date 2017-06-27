import Ember from 'ember';
import layout from '../templates/components/ember-table-cell';
import { getHeaderCellStyle } from '../utils/fixed-column';

export default Ember.Component.extend({
  layout,
  tagName: 'td',
  attributeBindings: ['style:style'],

  style: Ember.computed('width', 'columnIndex', 'fixedColumnWidth', function() {
    return getHeaderCellStyle(this.get('width'), this.get('columnIndex'),
      this.get('fixedColumnWidth'));
  })
});
