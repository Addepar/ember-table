import Component from '@ember/component';
import { addObserver, removeObserver } from "@ember/object/observers";
import { htmlSafe } from '@ember/string';
import { action, computed } from 'ember-decorators/object';
import { get } from '@ember/object';
import { property } from '../utils/class';

export default class EmberTableCell extends Component {
  @property tagName = 'td';
  @property attributeBindings = ['style:style'];

  didInsertElement() {
    requestAnimationFrame(() => this.syncChildSize());
    addObserver(this, 'row.value', this, this.syncChildSize);
  }

  willDestroyElement() {
    removeObserver(this, 'row.value', this, this.syncChildSize);
  }

  syncChildSize() {
    if (this.get('isFixed')) {
      const { width, height } = this.element.getBoundingClientRect();
      this.element.firstElementChild.style.width = `${width}px`;
      this.element.firstElementChild.style.height = `${height}px`;
    }
  }

  @computed('columnIndex', 'numFixedColumns')
  get isFixed() {
    const numFixedColumns = this.get('numFixedColumns');
    return this.get('columnIndex') === 0 && Number.isInteger(numFixedColumns)
      && numFixedColumns !== 0;
  }

  @computed('row', 'column.valuePath')
  get value() {
    const row = this.get('row');
    const valuePath = this.get('column.valuePath');

    return get(row, valuePath);
  }

  @computed('column.width')
  get style() {
    return htmlSafe(`width: ${this.get('column.width')}px;`);
  }

  @action
  onCellEvent(args) {
    this.sendAction('onCellEvent', args);
  }
}
