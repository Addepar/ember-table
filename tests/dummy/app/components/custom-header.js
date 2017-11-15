import { classNames } from 'ember-decorators/component';
import Component from '@ember/component';
import { property } from '../utils/class';

@classNames('custom-header')
export default class CustomHeader extends Component {
  @property tagName = 'thead';
}
