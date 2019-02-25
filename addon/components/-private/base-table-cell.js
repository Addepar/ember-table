import { className } from "@ember-decorators/component";
import Component from '@ember/component';
import { equal } from "@ember-decorators/object/computed";
import { observes } from "@ember-decorators/object";
import { scheduleOnce } from '@ember/runloop';

export default class BaseTableCell extends Component {
  // Provided by subclasses
  columnMeta = null;

  @equal('columnMeta.index', 0)
  @className
  isFirstColumn;

  @equal('columnMeta.isFixed', 'left')
  @className
  isFixedLeft;

  @equal('columnMeta.isFixed', 'right')
  @className
  isFixedRight;

  // eslint-disable-next-line
  @observes('columnMeta.{width,offsetLeft,offsetRight}', 'isFixedLeft', 'isFixedRight')
  scheduleUpdateStyles() {
    scheduleOnce('actions', this, 'updateStyles');
  }

  updateStyles() {
    if (typeof FastBoot === 'undefined' && this.element) {
      let width = `${this.get('columnMeta.width')}px`;

      this.element.style.width = width;
      this.element.style.minWidth = width;
      this.element.style.maxWidth = width;

      if (this.get('isFixedLeft')) {
        this.element.style.left = `${Math.round(this.get('columnMeta.offsetLeft'))}px`;
      } else if (this.get('isFixedRight')) {
        this.element.style.right = `${Math.round(this.get('columnMeta.offsetRight'))}px`;
      }
    }
  }

  didInsertElement() {
    super.didInsertElement(...arguments);
    this.updateStyles();
  }
}
