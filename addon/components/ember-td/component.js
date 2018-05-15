import Component from '@ember/component';
import { htmlSafe } from '@ember/string';
import { get } from '@ember/object';

import { action, computed } from '@ember-decorators/object';
import { readOnly, equal } from '@ember-decorators/object/computed';
import { tagName, attribute, className } from '@ember-decorators/component';
import { argument } from '@ember-decorators/argument';
import { type, optional } from '@ember-decorators/argument/type';
import { Action } from '@ember-decorators/argument/types';

import layout from './template';

@tagName('td')
export default class EmberTd extends Component {
  layout = layout;

  @argument
  @type('object')
  api;

  @argument
  @type(optional(Action))
  onClick;

  @argument
  @type(optional(Action))
  onDoubleClick;

  @readOnly('api.cellValue') cellValue;
  @readOnly('api.cellMeta') cellMeta;

  @readOnly('api.columnValue') columnValue;
  @readOnly('api.columnMeta') columnMeta;

  @readOnly('api.rowValue') rowValue;
  @readOnly('api.rowMeta') rowMeta;

  @className
  @equal('columnMeta.isFixed', 'left')
  isFixedLeft;

  @className
  @equal('columnMeta.isFixed', 'right')
  isFixedRight;

  @attribute
  @computed('columnMeta.{width,offsetLeft,offsetRight}', 'isFixed')
  get style() {
    let width = this.get('columnMeta.width');

    let style = `width: ${width}px; min-width: ${width}px; max-width: ${width}px;`;

    if (this.get('isFixedLeft')) {
      style += `left: ${Math.round(this.get('columnMeta.offsetLeft'))}px;`;
    } else if (this.get('isFixedRight')) {
      style += `right: ${Math.round(this.get('columnMeta.offsetRight'))}px;`;
    }

    if (this.element) {
      // Keep any styling added by the Sticky polyfill
      style += `position: ${this.element.style.position};`;
      style += `top: ${this.element.style.top};`;
    }

    return htmlSafe(style);
  }

  @computed('columnMeta.index', '')
  get hasCheckbox() {
    return this.get('columnMeta.index') === 0 && this.get('api.selectMode') === 'multiple';
  }

  @action
  onCheckboxToggled() {
    let api = this.get('api');
    let rowIndex = this.get('rowMeta.index');

    api.selectRow(rowIndex, { toggle: true });

    this.sendAction('onChecked');
  }

  @action
  onCheckboxClicked(event) {
    // Prevent the row from triggering any click events since this means that
    // the checkbox was clicked and we want to toggle via that
    event.stopPropagation();
  }

  click(event) {
    let rowValue = this.get('rowValue');
    let rowIndex = this.get('rowMeta.index');
    let api = this.get('api');

    if (this.get('columnMeta.index') === 0 && Array.isArray(get(rowValue, 'children'))) {
      api.toggleRowCollapse(rowIndex);
    }

    this.sendEventAction('onClick', event);
  }

  doubleClick(event) {
    this.sendEventAction('onDoubleClick', event);
  }

  sendEventAction(action, event) {
    if (!this.get(action)) {
      return;
    }

    let cellValue = this.get('cellValue');
    let cellMeta = this.get('cellMeta');

    let columnValue = this.get('columnValue');
    let columnMeta = this.get('columnMeta');

    let rowValue = this.get('rowValue');
    let rowMeta = this.get('rowMeta');

    this.sendAction(action, {
      event,

      cellValue,
      cellMeta,

      columnValue,
      columnMeta,

      rowValue,
      rowMeta,
    });
  }
}
