import Component from '@ember/component';
import { addObserver, removeObserver } from '@ember/object/observers';
import { htmlSafe } from '@ember/string';
import { action, computed } from 'ember-decorators/object';
import { get } from '@ember/object';
import { property } from '../utils/class';
import { scheduler, Token } from 'ember-raf-scheduler';
import { isNone } from '@ember/utils';

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

      // TODO: For now we are just watching rows for changes in height, but
      // theoretically anything can change the height of a row. We need
      // to come up with a better solution.
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
      let { height } = this.element.getBoundingClientRect();
      if (this.get('isFixed')) {
        // Get the max height of the div element height and other cells height in case other cells
        // are empty.
        const fixedDivElement = this.element.getElementsByClassName('is-fixed')[0];
        height = Math.max(height, fixedDivElement.getBoundingClientRect().height);
      }

      this.set('cellHeight', height || 0);
    }, this.token);
  }

  @computed('columnIndex', 'numFixedColumns')
  get isFixed() {
    let numFixedColumns = this.get('numFixedColumns');
    return this.get('columnIndex') === 0 && Number.isInteger(numFixedColumns)
    && numFixedColumns !== 0;
  }

  @computed('row', 'column.valuePath')
  get value() {
    let row = this.get('row');
    let valuePath = this.get('column.valuePath');

    return get(row, valuePath);
  }

  @computed('column.width', 'cellHeight', 'isFixed')
  get style() {
    let style = `width: ${this.get('column.width')}px; min-width: ${this.get('column.width')}px`;
    const cellHeight = this.get('cellHeight');
    if (!isNone(cellHeight) && this.get('isFixed')) {
      style = `${style}; height: ${cellHeight}px;`;
    }

    return htmlSafe(style);
  }

  @computed('column.width', 'cellHeight')
  get fixedCellStyle() {
    return htmlSafe(`width: ${this.get('column.width')}px; min-width: ${this.get('column.width')}px; \
height: ${this.get('cellHeight')}px;`);
  }

  @action
  onCellEvent(args) {
    this.sendAction('onCellEvent', args);
  }
}
