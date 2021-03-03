import { collection } from 'ember-classy-page-object';
import EmberTableBody, { BodyCell } from './ember-table-body';

export default EmberTableBody.extend({
  scope: 'tfoot',

  footers: collection('td:not([data-test-ember-table-slack])', BodyCell),
  slackFooters: collection('td[data-test-ember-table-slack]', BodyCell),
});
