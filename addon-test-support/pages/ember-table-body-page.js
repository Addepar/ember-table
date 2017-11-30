import PageObject, { collection } from 'ember-classy-page-object';
import { findAll } from 'ember-native-dom-helpers';
import { findElement } from 'ember-classy-page-object/extend';
import { getter } from 'ember-cli-page-object/macros';

export default PageObject.extend({
  scope: 'tbody',

  rows: collection({
    scope: 'tr',

    cells: collection({
      scope: 'td'
    }),

    height: getter(function() {
      return findElement(this, '').offsetHeight;
    })
  }),

  getCell(rowIndex, columnIndex) {
    return this.rows.eq(rowIndex).cells.eq(columnIndex);
  }
});
