import Component from '@ember/component';
import defaultTo from '../-private/utils/default-to';

export default Component.extend({
  tagName: 'input',

  attributeBindings: [
    'ariaLabel:aria-label',
    'checked',
    'disabled',
    'indeterminate',
    'type',
    'value',
    'dataTestSelectRow:data-test-select-row',
    'dataTestCollapseRow:data-test-collapse-row',
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
    this.onClick?.(event);
  },

  change(event) {
    let checked = this.element.checked;
    let indeterminate = this.element.indeterminate;
    let value = this.get('value');

    // Checked and indeterminate state have been changed, but that's not DDAU!
    // Reset the change, send the action and wait for it to be changed manually
    this.element.checked = this.get('checked');
    this.element.indeterminate = this.get('indeterminate');

    this.onChange?.(checked, { value, indeterminate }, event);
  },
});
