import Ceibo from 'ceibo';

import PageObject from 'ember-classy-page-object';
import EmberTableBodyPage from './ember-table-body-page';
import EmberTableHeaderPage from './ember-table-header-page';

/**
 * Ember Table page object. Use this page object and its nested header/body object to retrieve table
 * data and  manipulate table in test.
 */
export default PageObject.extend({
  /**
   * Page object for table header.
   */
  header: EmberTableHeaderPage,

  /**
   * Page object for table body.
   */
  body: EmberTableBodyPage
});
