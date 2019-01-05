import { tagName } from '@ember-decorators/component';
import { argument } from '@ember-decorators/argument';
import Component from '@ember/component';

@tagName('')
export default class CustomCell extends Component {
  @argument('string')
  color;
}
