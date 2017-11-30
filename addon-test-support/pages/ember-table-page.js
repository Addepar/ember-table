import Ceibo from 'ceibo';

import PageObject from 'ember-classy-page-object';
import EmberTableBodyPage from './ember-table-body-page';
import EmberTableHeaderPage from './ember-table-header-page';

export default PageObject.extend({
  header: EmberTableHeaderPage,
  body: EmberTableBodyPage
});
