import { collection } from 'ember-classy-page-object';

export default {
  scope: 'tfoot',

  footers: collection({
    scope: 'td',
  }),

  rows: collection({
    scope: 'tr',

    cells: collection({
      scope: 'td',
    }),
  }),
};
