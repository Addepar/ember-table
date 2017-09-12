import Component from '@ember/component';

import { addObserver, removeObserver } from '@ember/object/observers';
import { htmlSafe } from '@ember/string';
import { action, computed } from 'ember-decorators/object';
import { get } from '@ember/object';
import { property } from '../utils/class';
import { scheduler, Token } from '../-private';

export default class EmberTableCell extends Component {
  @property tagName = 'td';
  @property attributeBindings = ['style:style'];

  init() {
    super.init(...arguments);

    this.token = new Token();
  }

  willDestroy() {
    this.token.cancel();
  }

  didInsertElement() {
    if (this.get('isFixed')) {
      this.scheduleSync();
      addObserver(this, 'rowValue', this, this.scheduleSync);
    }
  }

  willDestroyElement() {
    if (this.get('isFixed')) {
      removeObserver(this, 'rowValue', this, this.scheduleSync);
    }
  }

  scheduleSync() {
    scheduler.schedule('sync', () => {
      const { height } = this.element.getBoundingClientRect();

      this.set('cellHeight', height || 0);
    }, this.token);
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

  @computed('column.width', 'cellHeight')
  get fixedCellStyle() {
    return htmlSafe(`width: ${this.get('column.width')}px; height: ${this.get('cellHeight')}px;`);
  }

  @action
  onCellEvent(args) {
    this.sendAction('onCellEvent', args);
  }
}
