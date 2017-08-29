/* global ResizeSensor */
import Ember from 'ember';
import { action, computed } from 'ember-decorators/object';
import { property } from '../utils/class';
import CellProxy from '../utils/cell-proxy';
import $ from 'jquery';
import layout from '../templates/components/ember-table-2';
import { htmlSafe } from '@ember/string';
import { run } from '@ember/runloop';
import { isNone } from '@ember/utils';
import { get, set } from '@ember/object';

const { Component } = Ember;

const HEAD_ALIGN_BAR_WIDTH = 5;

export default class EmberTable2 extends Component {
  @property attributeBindings = ['style:style'];
  @property classNames = ['et2-outer-wrapper'];
  @property tagName = 'table';

  @property layout = layout;

  @computed('columns.firstObject.isFixed')
  get hasFixedColumn() {
    return this.get('columns.firstObject.isFixed');
  }

  /**
   * Defines if this table has a footer or not.
   * // TODO(Billy): replace this with an option to pass in footer component.
   */
  @property hasFooter = true;

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
   * is resized, table width & height are updated and other computed properties depending on them
   * also get updated.
   */
  @property _tableResizeSensor = null;

  /**
   * A variable to store table width. This is updated when table is created or resized. We need to
   * store the table width because there are several computed property dependent on the table width.
   */
  @property _width = 0;

  /**
   * Estimated height for each row.
   */
  @property estimateRowHeight = 20;

  /**
   * A string value that defines table row component. By default, this is using ember table row
   * component but outer application can override this value to use their custom row. This is
   * useful when user wants to have custom action on entire row instead of cell (e.g. highlight row
   * when mouse hovers, select & unselect rows). However, the custom row component must extend the
   * EmberTableRow class and should not override handlebar template.
   */
  @property rowComponent = 'ember-table-row';

  init() {
    super.init(...arguments);

    this.cellCache = new WeakMap();

    // Create a unique CellProxy class for this table instance, that way transient data won't
    // pollute the prototype of the main proxy class.
    this.cellProxyClass = class extends CellProxy {};

    const columns = this.get('columns');
    for (const column of columns) {
      if (isNone(get(column, 'headerComponent'))) {
        set(column, '_headerComponent', 'ember-table-header');
      } else {
        set(column, '_headerComponent', get(column, 'headerComponent'));
      }
    }
  }

  didInsertElement() {
    super.didInsertElement(...arguments);

    requestAnimationFrame(() => {
      run(() => {
        this.set('_width', this.element.offsetWidth);
        this.fillupColumn();

        // Sync between table & the horizontal div scroller.
        const bodyScrollContainer = $(this.element).find('.et2-body-inner-wrapper');
        const headerScrollContainer = $(this.element).find('.et2-thead');
        const footerScrollContainer = $(this.element).find('.et2-tfooter');
        const horizontalScrollContainer = $(this.element).find('.et2-horizontal-scroll-wrapper');

        this.syncScroll([bodyScrollContainer, headerScrollContainer, horizontalScrollContainer,
          footerScrollContainer]);
      });
    });

    this._tableResizeSensor = new ResizeSensor(this.element, () => {
      this.set('_width', this.element.offsetWidth);
      this.fillupColumn();
    });
  }

  willDestroyElement() {
    this.get('_tableResizeSensor').detach(this.element);

    super.willDestroyElement(...arguments);
  }

  /**
   * Syncs horizontal scrolling between table, header, body & footer.
   */
  syncScroll(scrollElements) {
    for (let i = 0; i < scrollElements.length; i++) {
      scrollElements[i].scroll(function() {
        const scrollPosition = scrollElements[i].scrollLeft();
        for (let j = 0; j < scrollElements.length; j++) {
          if (scrollElements[i] !== scrollElements[j]) {
            scrollElements[j].scrollLeft(scrollPosition);
          }
        }
      });
    }
  }

  /**
   * There are cases where the sum of all column width is smaller than the container width. In this
   * case, we want to auto increase width of some column. This function handles that logic.
   * TODO(Billy): rewrite this function's logic to take into account min & max width.
   */
  fillupColumn() {
    const columns = this.get('columns');
    const tableWidth = this.get('_width');
    const sum = this.get('allColumnWidths');

    if (sum < tableWidth - 1) {
      let delta = tableWidth - sum - 1;
      // If the table has fixed column, add all width difference to the fixed column. Otherwise,
      // split the diff among all columns.
      if (this.get('hasFixedColumn')) {
        const [column] = columns;
        column.set('width', column.get('width') + delta);
      } else {
        // Split delta equally among columns.
        let columnDelta = delta / columns.length;
        if (columnDelta < 1) {
          columnDelta = 1;
        }
        for (let i = 0; i < columns.length; i++) {
          const [column] = columns;
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
    '_width'
  ) horizontalScrollWrapperStyle() {
    const columns = this.get('columns');
    const visibility = this.get('_width') < this.get('allColumnWidths') ? 'visibility' : 'hidden';

    return htmlSafe(`visibility: ${visibility}; left: ${columns[0].width}px; right: 0px;`);
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
    return htmlSafe(style);
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
    const maxWidth = column.get('maxWidth');
    if (width + delta < column.get('minWidth')) {
      return;
    }
    if (maxWidth !== undefined && maxWidth < width + delta) {
      return;
    }

    column.set('width', width + delta);

    if (!this.element.classList.contains('et2-unselectable')) {
      this.element.classList.add('et2-unselectable');
    }
  }

  @action
  onColumnResizeEnded() {
    this.element.classList.remove('et2-unselectable');
    this.fillupColumn();
  }

  /**
   * Creates header ghost element and the header aligned bar. Attached these element to the DOM.
   * They will be removed when column reordering completes.
   */
  createGhostElement(containerElement, width, height) {
    this._headerGhostElement = document.createElement('div');

    this._headerGhostElement.style.width = `${width}px`;
    this._headerGhostElement.style.height = `${height}px`;
    this._headerGhostElement.style.top = '0px';
    this._headerGhostElement.classList.add('et2-header-ghost-element');

    this._headerAlignBar = document.createElement('div');
    this._headerAlignBar.style.width = `${HEAD_ALIGN_BAR_WIDTH}px`;
    this._headerAlignBar.style.height = `${height}px`;
    this._headerAlignBar.style.top = '0px';
    this._headerAlignBar.classList.add('et2-header-align-bar');

    containerElement.appendChild(this._headerGhostElement);
    containerElement.appendChild(this._headerAlignBar);
  }

  @action
  onColumnReorder(columnIndex, header, deltaX) {
    const containerElement = this.element;
    const tableBoundingBox = containerElement.getBoundingClientRect();
    const columns = this.get('columns');

    if (this._headerGhostElement == null) {
      this.createGhostElement(containerElement, header.width, containerElement.offsetHeight);

      containerElement.appendChild(this._headerGhostElement);

      this.currentColumnIndex = columnIndex;
      this._currentColumnX = header.left - tableBoundingBox.left;
      this.element.classList.add('et2-unselectable');
    }

    // Do not allow this ghost element to move out of table.
    let ghostLeftX = header.left - tableBoundingBox.left + deltaX;
    // 1) Do not allow the ghost element to move out of left boundary.
    if (this.get('hasFixedColumn')) {
      const { scrollLeft } = containerElement;

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
        this._headerAlignBar.style.left
          =  `${this._currentColumnX + columns[this.currentColumnIndex].width - HEAD_ALIGN_BAR_WIDTH}px`;
      }
    }
  }

  @action
  onColumnReorderEnds(columnIndex) {
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
    this.element.removeChild(this._headerGhostElement);
    this.element.removeChild(this._headerAlignBar);
    this._headerGhostElement = null;
    this._headerAlignBar = null;
    this.element.classList.remove('et2-unselectable');
  }

  @action
  onHeaderClicked() {

  }

  @action
  toggleRow(rowValue) {
    // TODO(Billy): move this out of the table. This might belong to ember tree table.
    const tree = this.get('rows');
    const row = tree.getTreeNodeFromRowValue(rowValue);

    if (!row.collapse) {
      this.get('rows').collapseNode(row);
    } else {
      this.get('rows').expand(row);
    }
  }
}
