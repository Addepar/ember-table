import { collection } from 'ember-classy-page-object';

export default {
  scope: 'tfoot',

  rows: collection({
    scope: 'tr',

    cells: collection({
      scope: 'td'
    })
  })
};
