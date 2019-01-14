import { tagName } from '@ember-decorators/component';
import { defaultTo } from 'ember-table/-private/default-to';
import Component from '@ember/component';

@tagName('')
export default class CustomHeader extends Component {
  @defaultTo
  color;
}
