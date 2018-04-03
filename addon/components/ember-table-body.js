import Component from '@ember/component';
import layout from '../templates/components/ember-table-body';

import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type } from '@ember-decorators/argument/type';

export default class EmberTableBody extends Component {
  layout = layout;

  @argument
  @required
  @type('object')
  api;

  @argument
  @required
  @type('object')
  rows;

  @argument
  @required
  @type('number')
  estimateRowHeight;

  @argument
  @required
  @type('boolean')
  staticHeight;
}
