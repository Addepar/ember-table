import Component from '@ember/component';
import { htmlSafe } from '@ember/string';

import { action, computed } from '@ember-decorators/object';
import { readOnly, equal } from '@ember-decorators/object/computed';
import { tagName, attribute, className } from '@ember-decorators/component';
import { argument } from '@ember-decorators/argument';
import { type, optional } from '@ember-decorators/argument/type';
import { Action } from '@ember-decorators/argument/types';

import layout from './template';
import { SELECT_MODE } from '../../-private/collapse-tree';

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

  @computed('api.api')
  get unwrappedApi() {
    return this.get('api.api') || this.get('api');
  }

  @readOnly('unwrappedApi.cellValue') cellValue;
  @readOnly('unwrappedApi.cellMeta') cellMeta;

  @readOnly('unwrappedApi.columnValue') columnValue;
  @readOnly('unwrappedApi.columnMeta') columnMeta;

  @readOnly('unwrappedApi.rowValue') rowValue;
  @readOnly('unwrappedApi.rowMeta') rowMeta;

  @readOnly('unwrappedApi.rowSelectionMode') rowSelectionMode;
  @readOnly('unwrappedApi.checkboxSelectionMode') checkboxSelectionMode;

  @className
  @equal('columnMeta.index', 0)
  isFirstColumn;

  @className
  @equal('columnMeta.isFixed', 'left')
  isFixedLeft;

  @className
  @equal('columnMeta.isFixed', 'right')
  isFixedRight;

  @readOnly('rowMeta.canCollapse') canCollapse;

  @computed('rowMeta.depth')
  get depthClass() {
    return `depth-${this.get('rowMeta.depth')}`;
  }

  @computed('shouldShowCheckbox', 'rowSelectionMode')
  get canSelect() {
    let rowSelectionMode = this.get('rowSelectionMode');
    let shouldShowCheckbox = this.get('shouldShowCheckbox');

    return (
      shouldShowCheckbox ||
      rowSelectionMode === SELECT_MODE.MULTIPLE ||
      rowSelectionMode === SELECT_MODE.SINGLE
    );
  }

  @computed('checkboxSelectionMode')
  get shouldShowCheckbox() {
    let checkboxSelectionMode = this.get('checkboxSelectionMode');

    return (
      checkboxSelectionMode === SELECT_MODE.MULTIPLE || checkboxSelectionMode === SELECT_MODE.SINGLE
    );
  }

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

  @action
  onSelectionToggled(event) {
    let rowMeta = this.get('rowMeta');
    let checkboxSelectionMode = this.get('checkboxSelectionMode') || this.get('rowSelectionMode');

    if (rowMeta && checkboxSelectionMode === SELECT_MODE.MULTIPLE) {
      let toggle = true;
      let range = event.shiftKey;

      rowMeta.select({ toggle, range });
    } else if (rowMeta && checkboxSelectionMode === SELECT_MODE.SINGLE) {
      rowMeta.select();
    }

    this.sendFullAction('onSelect');
  }

  @action
  onCollapseToggled() {
    let rowMeta = this.get('rowMeta');

    rowMeta.toggleCollapse();

    this.sendFullAction('onCollapse');
  }

  click(event) {
    this.sendFullAction('onClick', { event });
  }

  doubleClick(event) {
    this.sendFullAction('onDoubleClick', { event });
  }

  sendFullAction(action, values = {}) {
    // If the action doesn't exist, it's not being used. Do nothing
    if (!this.get(action)) {
      return;
    }

    let cellValue = this.get('cellValue');
    let cellMeta = this.get('cellMeta');

    let columnValue = this.get('columnValue');
    let columnMeta = this.get('columnMeta');

    let rowValue = this.get('rowValue');
    let rowMeta = this.get('rowMeta');

    Object.assign(values, {
      cellValue,
      cellMeta,

      columnValue,
      columnMeta,

      rowValue,
      rowMeta,
    });

    this.sendAction(action, values);
  }
}
