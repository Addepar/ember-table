import Controller from '@ember/controller';

import { computed } from '@ember-decorators/object';
import { generateRows, generateColumns } from '../../../utils/generators';

export default class SimpleController extends Controller {
  @computed
  get rows() {
    return generateRows(100);
  }

  @computed
  get columns() {
    return generateColumns(7);
  }
}
