import Ember from 'ember';
import { action, computed } from 'ember-decorators/object';
import { property } from '../utils/class';

import layout from '../templates/components/ember-table-2';

const { Component } = Ember;

const COLUMN_WIDTH_MIN = 25;
const HEAD_ALIGN_BAR_WIDTH = 5;

export default class EmberTable2 extends Component {
  @property attributeBindings = ['style:style'];
  @property classNames = ['et2-outer-wrapper'];

  @property layout = layout;

  /**
   * A variable to indicate if this table has fixed column or not. Current version of ember table
   * only supports first column as fixed column.
   */
  @property hasFixedColumn = false;

  /**
   * Indicates if this table allows column resizing or not. It's false by default.
   */
  @property enableColumnResize = false;

  /**
   * Indicates if this table allows column reordering or not. It's false by default.
   */
  @property enableColumnReorder = false;

  /**
   * A temporary element created when moving column. This element represents the current position
   * of the moving column. It has the same width and height with the moving column. Once moving
   * completes, this element vanishes.
   */
  @property _headerGhostElement = null;

  /**
   * A temporary vertical bar that show the column that user is about to move to. This bar aligns
   * with the right (or left) boundary of next column, depending on whether user is moving the
   * column right (or left).
   */
  @property _headerAlignBar = null;

  /**
   * A variable used when moving column. This variables indicates the current column index that user
   * is about to move to.
   */
  @property currentColumnIndex = -1;

  /**
   * A variable used when moving column. It indicates the horizontal distance from current moving
   * column to table left boundary or fixed column (if fixed column is enabled).
   */
  @property _currentColumnX = -1;

  /**
   * A sensor object that sends events to this table component when table size changes. When table
   * is resized, we update the table width variable and all other properties dependent on table
   * width is updated automatically.
   */
  @property _resizeSensor = null;

  /**
   * A variable to store table width. This is updated when table is created or resized. We need to
   * store the table width because there are several computed property dependent on the table width.
   */
  @property tableWidth = 0;

  /**
   * Table height. This value is also equivalent to container height.
   */
  @property _height = 0;

  didInsertElement() {
    super.didInsertElement(...arguments);

    requestAnimationFrame(() => {
      this.set('_height', this.getHeightFromParent(this.element.parentElement));

      this.set('tableWidth', this.element.offsetWidth);
      this.fillupColumn();

      // Sync between table & the horizontal div scroller.
      const tableContainer = $(this.element).find('table');
      const horizontalScrollContainer = $(this.element).find('.et2-horizontal-scroll-wrapper');
      horizontalScrollContainer.scroll(function () {
        tableContainer.scrollLeft(horizontalScrollContainer.scrollLeft());
      });
      tableContainer.scroll(function () {
          horizontalScrollContainer.scrollLeft(tableContainer.scrollLeft());
      });
    });

    this._resizeSensor = new ResizeSensor(this.element, () => {
      this.set('_height', this.getHeightFromParent(this.element.parentElement));
      this.set('tableWidth', this.element.offsetWidth);
      this.fillupColumn();
    });
  }

  willDestroyElement() {
    this.get('resizeSensor').detach(this.element);

    super.willDestroyElement(...arguments);
  }

  /**
   * Gets height of this table container. This is equivalent to the parent's heignt minus top and
   * bottom paddings.
   */
  getHeightFromParent(parentElement) {
    let paddingBottom = 0;
    let paddingTop = 0;
    const style = window.getComputedStyle(parentElement);
    const paddingBottomString = style['padding-bottom'];
    if (paddingBottomString && paddingBottomString.length > 0) {
      paddingBottom = paddingBottomString.substr(0, paddingBottomString.length - 2);
    }

    const paddingTopString = style['padding-top'];
    if (paddingTopString && paddingTopString.length > 0) {
      paddingTop = paddingTopString.substr(0, paddingTopString.length - 2);
    }

    return parentElement.offsetHeight - paddingTop - paddingBottom;
  }

  @computed('_height')
  style() {
    const height = this.get('_height');
    if (height == 0) {
      return "";
    }

    return Ember.String.htmlSafe(`height: ${height}px;`);
  }

  /**
   * There are cases where the sum of all column width is smaller than the container width. In this
   * case, we want to auto increase width of some column. This function handles that logic.
   */
  fillupColumn() {
    const columns = this.get('columns');
    const tableWidth = this.get('tableWidth');
    let sum = this.get('allColumnWidths');

    if (sum < tableWidth - 1) {
      let delta = tableWidth - sum - 1;
      // If the table has fixed column, add all width difference to the fixed column. Otherwise,
      // split the diff among all columns.
      if (this.get('hasFixedColumn')) {
        const column = columns[0];
        column.set('width', column.get('width') + delta);
      } else {
        // Split delta equally among columns.
        let columnDelta = delta / columns.length;
        if (columnDelta < 1) {
          columnDelta = 1;
        }
        for (let i = 0; i < columns.length; i++) {
          const column = columns[0];
          column.set('width', column.get('width') + Math.min(delta, columnDelta));
          delta -= columnDelta;
          if (delta <= 0) {
            break;
          }
        }

        if (delta > 0) {
          const column = columns.get('lastObject');
          column.set('width', column.get('width') + delta);
        }
      }
    }
  }

  @computed('hasFixedColumn', 'columns.firstObject.width')
  fixedColumnWidth() {
    return this.get('hasFixedColumn') === true ? this.get('columns.firstObject.width') : 0;
  }

  /**
   * Computed style of horizontal scrolling wrapper. This computed property adds some left margin
   * the wrapper that matches fixed column width.
   */
  @computed(
    'hasFixedColumn',
    'columns.firstObject.width',
    'allColumnWidths',
    'tableWidth'
  ) horizontalScrollWrapperStyle() {
    const columns = this.get('columns');
    const left = this.get('hasFixedColumn') ? columns[0].width : 0;
    const visibility = this.get('tableWidth') < this.get('allColumnWidths') ? 'visibility' : 'hidden';

    return Ember.String.htmlSafe(`visibility: ${visibility}; left: ${columns[0].width}px; right: 0px;`);
  }

  /**
   * Computed style for horizontal scroll element. This is computed so that its width matches
   * table's width and the table and the element can share same scrolling.
   */
  @computed('hasFixedColumn', 'columns.@each.width')
  horizontalScrollStyle() {
    let style = '';
    const hasFixedColumn = this.get('hasFixedColumn');
    const columns = this.get('columns');
    let width = 0;

    for (let i = hasFixedColumn ? 1 : 0; i < columns.length; i++) {
      width += columns[i].width;
    }

    style = `width: ${width}px;`;
    return Ember.String.htmlSafe(style);
  }

  @computed('columns.@each.width')
  allColumnWidths() {
    const columns = this.get('columns');
    let sum = 0;
    for (let i = 0; i < columns.length; i++) {
      sum += columns[i].width;
    }
    return sum;
  }

  @action
  onColumnResized(columnIndex, delta) {
    const columns = this.get('columns');
    const column = columns[columnIndex];
    const width = column.get('width');
    if (width + delta < COLUMN_WIDTH_MIN) {
      return;
    }
    column.set('width', width + delta);

    if (!this.element.classList.contains('unselectable')) {
      this.element.classList.add('unselectable');
    }
  }

  @action
  onColumnResizeEnded(columnIndex, delta) {
    this.element.classList.remove('unselectable');
    this.fillupColumn();
  }

  /**
   * Creates header ghost element and the header aligned bar. Attached these element to the DOM.
   * They will be removed when column reordering completes.
   */
  createGhostElement(containerElement, width, height) {
    this._headerGhostElement = document.createElement("div");

    this._headerGhostElement.style.width = `${width}px`;
    this._headerGhostElement.style.height = `${height}px`;
    this._headerGhostElement.style.top = '0px';
    this._headerGhostElement.classList.add('et2-header-ghost-element');

    this._headerAlignBar = document.createElement("div");
    this._headerAlignBar.style.width = `${HEAD_ALIGN_BAR_WIDTH}px`;
    this._headerAlignBar.style.height = `${height}px`;
    this._headerAlignBar.style.top = '0px';
    this._headerAlignBar.classList.add('et2-header-align-bar');

    containerElement.appendChild(this._headerGhostElement);
    containerElement.appendChild(this._headerAlignBar);
  }

  @action
  onColumnReorder(columnIndex, header, deltaX) {
    const containerElement = this.element.getElementsByClassName('et2-table-container')[0];
    const tableBoundingBox = containerElement.getBoundingClientRect();
    const columns = this.get('columns');

    if (this._headerGhostElement == null) {
      this.createGhostElement(containerElement, header.width,
        tableBoundingBox.bottom - tableBoundingBox.top);

      containerElement.appendChild(this._headerGhostElement);

      this.currentColumnIndex = columnIndex;
      this._currentColumnX = header.left - tableBoundingBox.left;
      this.element.classList.add('et2-unselectable');
    }

    // Do not allow this ghost element to move out of table.
    let ghostLeftX = header.left - tableBoundingBox.left + deltaX;
    // 1) Do not allow the ghost element to move out of left boundary.
    if (this.get('hasFixedColumn')) {
      const scrollLeft = containerElement.getElementsByTagName('table')[0].scrollLeft;

      if (ghostLeftX < columns[0].width - scrollLeft) {
        ghostLeftX = columns[0].width - scrollLeft;
      }
    }
    if (ghostLeftX < 0) {
      ghostLeftX = 0;
    }
    // 2) Do not allow the ghost element to move out of right boundary.
    if (ghostLeftX + header.width >= tableBoundingBox.right) {
      ghostLeftX = tableBoundingBox.right - header.width;
    }
    this._headerGhostElement.style.left = `${ghostLeftX}px`;

    // 3) Update the index of column that the ghost header might be replacing.
    const ghostCenterX = ghostLeftX + header.width / 2;
    if (ghostCenterX < this._currentColumnX) {
      if (this.currentColumnIndex > 0) {
        // Current column is now the previous column
        this.currentColumnIndex--;
        this._currentColumnX -= columns[this.currentColumnIndex].width;
        this._headerAlignBar.style.left = `${this._currentColumnX}px`;
      }
    } else if (ghostCenterX >= this._currentColumnX + columns[this.currentColumnIndex].width) {
      if (this.currentColumnIndex < columns.length - 1) {
        // Current column is now the next column
        this._currentColumnX = this._currentColumnX + columns[this.currentColumnIndex].width;
        this.currentColumnIndex++;
        this._headerAlignBar.style.left =
          `${this._currentColumnX + columns[this.currentColumnIndex].width - HEAD_ALIGN_BAR_WIDTH}px`;
      }
    }
  }

  @action
  onColumnReorderEnds(columnIndex, deltaX) {
    if (this.currentColumnIndex != columnIndex) {
      const direction = this.currentColumnIndex > columnIndex ? 1 : -1;

      const columns = this.get('columns');
      const temp = columns[columnIndex];

      for (let i = columnIndex; i !== this.currentColumnIndex; i += direction) {
        columns.replace(i, 1, columns[i + direction]);
      }
      columns.replace(this.currentColumnIndex, 1, temp);
    }

    this.currentColumnIndex = -1;
    this._currentColumnX = -1;

    // Remove the header ghost element & aligned bar.
    this.element.getElementsByClassName('et2-table-container')[0].removeChild(this._headerGhostElement);
    this.element.getElementsByClassName('et2-table-container')[0].removeChild(this._headerAlignBar);
    this._headerGhostElement = null;
    this._headerAlignBar = null;
    this.element.classList.remove('et2-unselectable');
  }

  @action
  onHeaderClicked() {

  }
}
