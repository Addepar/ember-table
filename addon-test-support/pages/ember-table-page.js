import PageObject from 'ember-classy-page-object';
import EmberTableBodyPage from './-private/ember-table-body-page';
import EmberTableFooterPage from './-private/ember-table-footer-page';
import EmberTableHeaderPage from './-private/ember-table-header-page';

/**
 * Ember Table page object. Use this page object and its nested header/body object to retrieve table
 * data and manipulate table in test.
 */
export default PageObject.extend({
  /**
   * Page object for table header.
   */
  header: EmberTableHeaderPage,

  /**
   * Page object for table body.
   */
  body: EmberTableBodyPage,

  /**
   * Page object for table footer.
   */
  footer: EmberTableFooterPage
});
