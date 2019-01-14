import Component from '@ember/component';
import { tagName, attribute } from '@ember-decorators/component';
import { defaultTo } from '../../-private/default-to';

@tagName('input')
export default class SimpleCheckbox extends Component {
  value = null;

  @attribute
  type = 'checkbox';

  @defaultTo({ defaultIfUndefined: true })
  @attribute
  checked = false;

  @defaultTo({ defaultIfUndefined: true })
  @attribute
  disabled = false;

  @defaultTo({ defaultIfUndefined: true })
  @attribute
  indeterminate = false;

  @defaultTo
  @attribute
  value = null;

  @defaultTo
  onClick = null;

  @defaultTo
  onChange = null;

  @defaultTo
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
