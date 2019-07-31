import { collection } from 'ember-classy-page-object';
import EmberTableBody from './ember-table-body';

export default EmberTableBody.extend({
  scope: 'tfoot',

  footers: collection({
    scope: 'td',
  }),
});
