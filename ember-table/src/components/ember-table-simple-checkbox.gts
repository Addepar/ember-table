import Component from '@glimmer/component';
import { action } from '@ember/object';
import { didInsert, didUpdate } from '@ember/render-modifiers';
import { on } from '@ember/modifier';

export interface EmberTableSimpleCheckboxSignature {
  Args: {
    ariaLabel?: string;
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    type?: string;
    value?: string;
    dataTestSelectRow?: boolean;
    dataTestCollapseRow?: boolean;
    onClick?: (event: MouseEvent) => void;
    onChange?: (
      checked: boolean,
      details: { value: string | undefined; indeterminate: boolean },
      event: Event
    ) => void;
  };
}

export default class EmberTableSimpleCheckbox extends Component<EmberTableSimpleCheckboxSignature> {
  get type() {
    return this.args.type ?? 'checkbox';
  }

  // `indeterminate` is a DOM property with no attribute equivalent.
  @action
  syncIndeterminate(element: HTMLInputElement) {
    element.indeterminate = Boolean(this.args.indeterminate);
  }

  @action
  click(event: MouseEvent) {
    this.args.onClick?.(event);
  }

  @action
  change(event: Event) {
    let element = event.currentTarget as HTMLInputElement;
    let checked = element.checked;
    let indeterminate = element.indeterminate;

    // Keep the input controlled: report the change, then restore the argument
    // values until they are updated from above.
    element.checked = Boolean(this.args.checked);
    element.indeterminate = Boolean(this.args.indeterminate);

    this.args.onChange?.(checked, { value: this.args.value, indeterminate }, event);
  }

  <template>
    <input
      type={{this.type}}
      aria-label={{@ariaLabel}}
      checked={{@checked}}
      disabled={{@disabled}}
      value={{@value}}
      data-test-select-row={{@dataTestSelectRow}}
      data-test-collapse-row={{@dataTestCollapseRow}}
      {{didInsert this.syncIndeterminate}}
      {{didUpdate this.syncIndeterminate @indeterminate}}
      {{on "click" this.click}}
      {{on "change" this.change}}
    />
  </template>
}
