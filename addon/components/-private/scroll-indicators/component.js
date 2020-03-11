import Component from '@ember/component';
import { readOnly } from '@ember/object/computed';
import layout from './template';

export default Component.extend({
  layout,

  tagName: '',

  /**
    The API object passed in by the table

    @argument api
    @required
    @type object
  */
  api: null,

  enableScrollIndicators: readOnly('api.enableScrollIndicators'),
});
