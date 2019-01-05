import Component from '@ember/component';
import { tagName, attribute } from '@ember-decorators/component';
import { argument } from '@ember-decorators/argument';
import { optional, Action } from '@ember-decorators/argument/types';

@tagName('input')
export default class SimpleCheckbox extends Component {
  value = null;

  @attribute
  type = 'checkbox';

  @argument(optional('boolean'))
  @attribute
  checked = false;

  @argument(optional('boolean'))
  @attribute
  disabled = false;

  @argument(optional('boolean'))
  @attribute
  indeterminate = false;

  @argument('any')
  @attribute
  value = null;

  @argument(optional(Action))
  onClick = null;

  @argument(optional(Action))
  onChange = null;

  @argument('string')
  @attribute('aria-label')
  ariaLabel;

  click(event) {
    this.sendAction('onClick', event);
  }

  change(event) {
    let checked = this.element.checked;
    let indeterminate = this.element.indeterminate;
    let value = this.get('value');

    // Checked and indeterminate state have been changed, but that's not DDAU!
    // Reset the change, send the action and wait for it to be changed manually
    this.element.checked = this.get('checked');
    this.element.indeterminate = this.get('indeterminate');

    this.sendAction('onChange', checked, { value, indeterminate }, event);
  }
}
