import Component from '@ember/component';
import { get } from '@ember/object';
import defaultTo from '../../-private/utils/default-to';

import { gte } from 'ember-compatibility-helpers';

export default Component.extend({
  tagName: 'input',

  attributeBindings: [
    'ariaLabel:aria-label',
    'checked',
    'disabled',
    'indeterminate',
    'type',
    'value',
  ],

  ariaLabel: undefined,
  checked: defaultTo(false),
  disabled: defaultTo(false),
  indeterminate: defaultTo(false),
  onChange: null,
  onClick: null,
  type: 'checkbox',
  value: null,

  click(event) {
    if (gte('1.13.0')) {
      if (get(this, 'onClick')) {
        get(this, 'onClick')(event);
      }
    } else {
      this.sendAction('onClick', event);
    }
  },

  change(event) {
    let checked = this.element.checked;
    let indeterminate = this.element.indeterminate;
    let value = this.get('value');

    // Checked and indeterminate state have been changed, but that's not DDAU!
    // Reset the change, send the action and wait for it to be changed manually
    this.element.checked = this.get('checked');
    this.element.indeterminate = this.get('indeterminate');

    if (gte('1.13.0')) {
      if (get(this, 'onChange')) {
        get(this, 'onChange')(checked, { value, indeterminate }, event);
      }
    } else {
      this.sendAction('onChange', checked, { value, indeterminate }, event);
    }
  },
});
