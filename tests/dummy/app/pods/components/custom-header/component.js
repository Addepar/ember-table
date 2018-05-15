import { className, classNames } from '@ember-decorators/component';
import { argument } from '@ember-decorators/argument';
import Component from '@ember/component';

// BEGIN-SNIPPET docs-example-custom-header.js
@classNames('custom-header')
export default class CustomHeader extends Component {
  @argument
  @className
  color;
}
// END-SNIPPET
