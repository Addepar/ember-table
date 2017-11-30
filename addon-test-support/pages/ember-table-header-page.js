import PageObject, { collection } from 'ember-classy-page-object';
import { findElement } from 'ember-classy-page-object/extend';
import { getter } from 'ember-cli-page-object/macros';

export default PageObject.extend({
  scope: 'thead',

  row: {
    scope: 'tr',

    height: getter(function() {
      return findElement(this, '').offsetHeight;
    })
  }
});
