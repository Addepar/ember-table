import EmberTBody from '../ember-tbody/component';

import { tagName } from '@ember-decorators/component';

import layout from './template';

@tagName('tfoot')
export default class EmberTFoot extends EmberTBody {
  layout = layout;
}
