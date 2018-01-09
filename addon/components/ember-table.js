/* global ResizeSensor */
import { action, computed } from 'ember-decorators/object';
import { tagName, classNames } from 'ember-decorators/component';

import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type, optional } from '@ember-decorators/argument/type';
import { Action } from '@ember-decorators/argument/types';

import layout from '../templates/components/ember-table';
import { htmlSafe } from '@ember/string';
import { run } from '@ember/runloop';
import Component from '@ember/component';
import CellProxy from '../utils/cell-proxy';
import { move } from '../utils/array';
import { get, set } from '@ember/object';
import { isNone } from '@ember/utils';
import { A as emberA } from '@ember/array';
import { scheduler, Token } from 'ember-raf-scheduler';

const HEAD_ALIGN_BAR_WIDTH = 5;

const COLUMN_MODE_STANDARD = 'standard';
const COLUMN_MODE_FLUID = 'fluid';

const TABLE_RESIZE_MODE_NONE = 'none';
const TABLE_RESIZE_MODE_EQUAL_COLUMN = 'equal_column';
const TABLE_RESIZE_MODE_FIRST_COLUMN = 'first_column';
const TABLE_RESIZE_MODE_LAST_COLUMN = 'last_column';

const SELECTION_MODE_NONE = 'none';
const SELECTION_MODE_SINGLE = 'single';
const SELECTION_MODE_MULTIPLE = 'multiple';

@tagName('table')
@classNames('et-table')
export default class EmberTable extends Component {
  layout = layout;

  /**
   * Indicates how many left columns will be fixed. With current implementation, only 1 single
   * left most column can be a fixed column. Later version of Ember table could change
   * implementation to support multiple fixed columns.
   */
  @argument({ defaultIfUndefined: true })
  @type('number')
  numFixedColumns = 0;

  /**
   *Sets which column resizing behavior to use. Possible values are <code>'standard'</code>
   * (resizing a column pushes or pulls all other columns) and <code>'fluid'</code> (resizing a
   * column steals width from neighboring columns).
   */
  @argument({ defaultIfUndefined: true })
  @type('string')
  columnMode = COLUMN_MODE_STANDARD;

  /**
   * Sets which row selection behavior to follow. Possible values are 'none' (clicking on a row
   * does nothing), 'single' (clicking on a row selects it and deselects other rows), and 'multiple'
   * (multiple rows can be selected through ctrl/cmd-click or shift-click).
   */
  @argument({ defaultIfUndefined: true })
  @type('string')
  selectionMode = SELECTION_MODE_SINGLE;

  /**
   * A configuration that controls how columns shrink (or extend) when total column width does not
   * match table width. Behavior of column modification is as follow:
   * 1) "none": nothing changed to the column
   * 2) "equal_column": extra space is distributed equally among all columns
   * 3) "first_column": extra space is added into the first column.
   * 4) "last_column": extra space is added into the last column.
   */
  @argument({ defaultIfUndefined: true })
  @type('string')
  tableResizeMode = TABLE_RESIZE_MODE_NONE;

  /**
   * Estimated height for each row. This number is used to decide how many rows will be rendered at
   * initial rendering.
   */
  @argument({ defaultIfUndefined: true })
  @type('number')
  estimateRowHeight = 20;

  /**
   * A flag that controls if all rows have same static height or not. By default it is set to false
   * and row height is dependent on its internal content. If it is set to true, all rows have the
   * same height equivalent to estimateRowHeight.
   */
  @argument({ defaultIfUndefined: true })
  @type('boolean')
  staticHeight = false;

  /**
   * The row items that the table should display
   */
  @argument
  @required
  @type('object')
  rows;

  /**
   * The column definitions for the table
   */
  @argument
  @required
  @type(Array)
  columns;

  /**
   * Optional footer content displayed in the footer area.
   */
  @argument
  @type(optional('object'))
  footerRows = null;

  /**
   * An action passed in for header events
   */
  @argument
  @type(optional(Action))
  onHeaderEvent = null;

  /**
   * An action passed in for footer events
   */
  @argument
  @type(optional(Action))
  onFooterEvent = null;

  /**
   * An action passed in the column reordering event
   */
  @argument
  @type(optional(Action))
  onColumnReordered = null;

  /**
   * A temporary element created when moving column. This element represents the current position
   * of the moving column. It has the same width and height with the moving column. Once moving
   * completes, this element vanishes.
   */
  _headerGhostElement = null;

  /**
   * A temporary vertical bar that show the column that user is about to move to. This bar aligns
   * with the right (or left) boundary of next column, depending on whether user is moving the
   * column right (or left).
   */
  _headerAlignBar = null;

  /**
   * A variable used when moving column. This variables indicates the current column index that user
   * is about to move to.
   */
  _currentColumnIndex = -1;

  /**
   * A variable used when moving column. It indicates the horizontal distance from current moving
   * column to table left boundary or fixed column (if fixed column is enabled).
   */
  _currentColumnX = -1;

  /**
   * A sensor object that sends events to this table component when table size changes. When table
   * is resized, table width & height are updated and other computed properties depending on them
   * also get updated.
   */
  _tableResizeSensor = null;

  /**
   * Handlers used for synchronizing scroll positions across the scroll containers
   */
  _scrollHandler = null;
  _wheelHandler = null;
  _touchstartHandler = null;
  _touchmoveHandler = null;

  /**
   * A variable to store table width. This is updated when table is created or resized. We need to
   * store the table width because there are several computed property dependent on the table width.
   */
  _width = 0;

  lastSelectedIndex = -1;

  @computed('numFixedColumns')
  get hasFixedColumn() {
    let numFixedColumns = this.get('numFixedColumns');
    return Number.isInteger(numFixedColumns) && numFixedColumns !== 0;
  }

  constructor() {
    super(...arguments);

    this.cellCache = new WeakMap();

    // Create a unique CellProxy class for this table instance, that way transient data won't
    // pollute the prototype of the main proxy class.
    this.cellProxyClass = class extends CellProxy {};

    this.set('selectedRows', []);

    this.token = new Token();
  }

  didInsertElement() {
    super.didInsertElement(...arguments);

    this.setupScrollSync();
    this.setupColumnFillup();
  }

  willDestroyElement() {
    this.teardownColumnFillup();
    this.teardownScrollSync();
    this.token.cancel();

    super.willDestroyElement(...arguments);
  }

  /**
   * Sets up handlers to fillup the table container to its full width
   */
  setupColumnFillup() {
    scheduler.schedule('sync', () => {
      this.set('_width', this.element.offsetWidth);
      this.fillupColumn();
    }, this.token);

    this._tableResizeSensor = new ResizeSensor(this.element, () => {
      run(() => {
        if (this.get('isDestroying')) {
          return;
        }

        this.set('_width', this.element.offsetWidth);
        this.fillupColumn();
      });
    });
  }

  /**
   * Syncs horizontal scrolling between table, header, body & footer.
   */
  setupScrollSync() {
    let scrollBar = this.element.querySelector('.et-horizontal-scroll-wrapper');

    let bodyScrollContainer = this.element.querySelector('tbody');
    let headerScrollContainer = this.element.querySelector('thead');
    let footerScrollContainer = this.element.querySelector('tfoot');

    let scrollElements = [
      bodyScrollContainer,
      headerScrollContainer,
      footerScrollContainer
    ].filter((item) => {
      return item;
    });

    let prevClientX, prevClientY;

    this._wheelHandler = (event) => {
      if (Math.abs(event.deltaX) < Math.abs(event.deltaY)) {
        return;
      }

      event.preventDefault();

      scrollBar.scrollLeft += event.deltaX;

      for (let scrollElement of scrollElements) {
        scrollElement.scrollLeft = scrollBar.scrollLeft;
      }
    };

    this._scrollHandler = () => {
      for (let scrollElement of scrollElements) {
        scrollElement.scrollLeft = scrollBar.scrollLeft;
      }
    };

    this._touchstartHandler = (event) => {
      let [{ clientX, clientY }] = event.touches;

      prevClientX = clientX;
      prevClientY = clientY;
    };

    this._touchmoveHandler = (event) => {
      let [{ clientX, clientY }] = event.touches;

      let deltaX = clientX - prevClientX;
      let deltaY = clientY - prevClientY;

      if (Math.abs(deltaX) < Math.abs(deltaY)) {
        return;
      }

      event.preventDefault();

      scrollBar.scrollLeft -= deltaX;

      for (let scrollElement of scrollElements) {
        scrollElement.scrollLeft = scrollBar.scrollLeft;
      }

      prevClientX = clientX;
      prevClientY = clientY;
    };

    this.element.addEventListener('wheel', this._wheelHandler);
    scrollBar.addEventListener('scroll', this._scrollHandler);

    bodyScrollContainer.addEventListener('touchstart', this._touchstartHandler);
    bodyScrollContainer.addEventListener('touchmove', this._touchmoveHandler);
  }

  /**
   * Teardown the column fillup listeners
   */
  teardownColumnFillup() {
    this.get('_tableResizeSensor').detach(this.element);
  }

  /**
   * Teardown the scroll syncing
   */
  teardownScrollSync() {
    let scrollBar = this.element.querySelector('.et-horizontal-scroll-wrapper');
    let bodyScrollContainer = this.element.querySelector('tbody');

    this.element.removeEventListener('wheel', this._wheelHandler);
    scrollBar.removeEventListener('scroll', this._scrollHandler);

    bodyScrollContainer.removeEventListener('touchstart', this._touchstartHandler);
    bodyScrollContainer.removeEventListener('touchmove', this._touchmoveHandler);
  }

  /**
   * Sets column width with newWidth. If the newWidth is smaller than column's minWidth, use the
   * minWidth value instead.
   */
  setColumnWidth(column, newWidth) {
    let minWidth = get(column, 'minWidth') || 0;
    set(column, 'width', Math.max(newWidth, minWidth));
  }

  /**
   * There are cases where the sum of all column width is smaller or bigger than the container
   * width. In this case, we might want to adjust width of every single column.
   */
  fillupColumn() {
    let columns = this.get('columns');
    let tableWidth = this.get('_width');
    let sum = this.get('allColumnWidths');
    let tableResizeMode = this.get('tableResizeMode');

    if (sum !== tableWidth) {
      let delta = tableWidth - sum - 1;
      // Distribute the delta in pixel among columns according to the table fill up mode.
      if (tableResizeMode === TABLE_RESIZE_MODE_FIRST_COLUMN) {
        let [column] = columns;
        this.setColumnWidth(column, get(column, 'width') + delta);
      } else if (tableResizeMode === TABLE_RESIZE_MODE_EQUAL_COLUMN) {
        // Split delta by their proportion.
        let columnDelta = delta / columns.length;
        for (let i = 0; i < columns.length; i++) {
          let column = columns[i];
          this.setColumnWidth(column, get(column, 'width') + columnDelta);
        }
      } else if (tableResizeMode === TABLE_RESIZE_MODE_LAST_COLUMN) {
        // Add all delta to last column
        let lastColumn = columns[columns.length - 1];
        set(lastColumn, 'width', get(lastColumn, 'width') + delta);
      }
    }

    if (this.get('hasSubcolumns')) {
      columns.forEach((groupColumn) => {
        let subcolumns = get(groupColumn, 'subcolumns');
        if (subcolumns) {
          // Each subcolumn has equal width.
          let subcolumnWidth = get(groupColumn, 'width') / get(subcolumns, 'length');
          subcolumns.forEach((subcolumn) => {
            set(subcolumn, 'width', subcolumnWidth);
          });
        }
      });
    }
  }

  @computed('hasFixedColumn', 'bodyColumns.firstObject.width')
  get fixedColumnWidth() {
    return this.get('hasFixedColumn') === true ? this.get('bodyColumns.firstObject.width') : 0;
  }

  @computed('columns.@each.subcolumns')
  get hasSubcolumns() {
    let columns = this.get('columns');

    for (let i = 0; i < get(columns, 'length'); i++) {
      let subcolumns = get(columns[i], 'subcolumns');
      if (subcolumns !== undefined && subcolumns.length > 0) {
        return true;
      }
    }
    return false;
  }

  /**
   * Columns that are be used in table body. In normal use case, the body columns are the same with
   * table header columns. However, if header columns have subcolumns, this body columns are the
   * concatentation of all subcolumns.
   */
  @computed('hasSubcolumns', 'columns.@each.subcolumns')
  get bodyColumns() {
    if (this.get('hasSubcolumns') !== true) {
      return this.get('columns');
    }

    let bodyColumns = emberA();
    this.get('columns').forEach((column) => {
      let subcolumns = get(column, 'subcolumns');
      if (isNone(subcolumns) || get(subcolumns, 'length') === 0) {
        bodyColumns.pushObject(column);
      } else {
        subcolumns.forEach((subcolumn) => bodyColumns.pushObject(subcolumn));
      }
    });
    return bodyColumns;
  }

  /**
   * Computed style of horizontal scrolling wrapper. This computed property adds some left margin
   * the wrapper that matches fixed column width.
   */
  @computed(
    'hasFixedColumn',
    'bodyColumns.firstObject.width',
    'allColumnWidths',
    '_width'
  ) get horizontalScrollWrapperStyle() {
    let columns = this.get('bodyColumns');
    let visibility = this.get('_width') < this.get('allColumnWidths') ? 'visibility' : 'hidden';
    let left;
    if (get(columns, 'length') > 0 && this.get('hasFixedColumn')) {
      left = get(columns[0], 'width');
    } else {
      left = 0;
    }

    return htmlSafe(`visibility: ${visibility}; left: ${left}px; right: 0px;`);
  }

  /**
   * Computed style for horizontal scroll element. This is computed so that its width matches
   * table's width and the table and the element can share same scrolling.
   */
  @computed('hasFixedColumn', 'bodyColumns.@each.width')
  get horizontalScrollStyle() {
    let style = '';
    let hasFixedColumn = this.get('hasFixedColumn');
    let columns = this.get('bodyColumns');
    let width = 0;

    for (let i = hasFixedColumn ? 1 : 0; i < columns.length; i++) {
      width += get(columns[i], 'width');
    }

    style = `width: ${width}px;`;
    return htmlSafe(style);
  }

  @computed('columns.@each.width')
  get allColumnWidths() {
    let columns = this.get('columns');
    let sum = 0;
    for (let i = 0; i < columns.length; i++) {
      sum += get(columns[i], 'width');
    }
    return sum;
  }

  @computed(
    'cellCache',
    'cellProxyClass',
    'numFixedColumns',
    'targetObject',
    'bodyColumns',
    'selectedRows',
    'estimateRowHeight',
    'staticHeight'
  )
  get api() {
    let staticHeight = this.get('staticHeight');
    let staticRowHeight = null;
    if (staticHeight === true) {
      staticRowHeight = this.get('estimateRowHeight');
    }

    return {
      rowHeight: this.get('rowHeight'),
      cellCache: this.cellCache,
      cellProxyClass: this.cellProxyClass,
      numFixedColumns: this.numFixedColumns,
      targetObject: this,
      columns: this.get('bodyColumns'),
      selectedRows: this.selectedRows,
      staticRowHeight
    };
  }

  @action
  onColumnResized(columnIndex, delta) {
    if (this.get('hasSubcolumns')) {
      // Disable column reordering when table has subcolumn.
      return;
    }

    let columns = this.get('bodyColumns');
    let column = columns[columnIndex];
    let width = get(column, 'width');
    if (width + delta < get(column, 'minWidth')) {
      return;
    }

    let columnMode = this.get('columnMode');
    if (
      columnMode === COLUMN_MODE_FLUID && columnIndex < columns.length - 1
      && get(columns[columnIndex + 1], 'width') - delta < get(columns[columnIndex + 1], 'minWidth')
    ) {
      // Resizing this column makes the next column smaller than its min width.
      return;
    }

    this.setColumnWidth(column, width + delta);
    if (columnMode === COLUMN_MODE_FLUID && columnIndex < columns.length - 1) {
      let oldWidth = get(columns[columnIndex + 1], 'width');
      this.setColumnWidth(columns[columnIndex + 1], oldWidth - delta);
    }

    if (!this.element.classList.contains('et-unselectable')) {
      this.element.classList.add('et-unselectable');
    }
  }

  @action
  onColumnResizeEnded() {
    if (this.get('hasSubcolumns')) {
      // Disable column reordering when table has subcolumn.
      return;
    }

    this.element.classList.remove('et-unselectable');
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
    this._headerGhostElement.classList.add('et-header-ghost-element');

    this._headerAlignBar = document.createElement('div');
    this._headerAlignBar.style.width = `${HEAD_ALIGN_BAR_WIDTH}px`;
    this._headerAlignBar.style.height = `${height}px`;
    this._headerAlignBar.style.top = '0px';
    this._headerAlignBar.classList.add('et-header-align-bar');

    containerElement.appendChild(this._headerGhostElement);
    containerElement.appendChild(this._headerAlignBar);
  }

  @action
  onColumnReorder(columnIndex, header, deltaX) {
    if (this.get('hasSubcolumns')) {
      // Disable column reordering when table has subcolumn.
      return;
    }

    let containerElement = this.element;
    let tableBoundingBox = containerElement.getBoundingClientRect();
    let columns = this.get('bodyColumns');

    if (this._headerGhostElement === null) {
      this.createGhostElement(containerElement, header.width, containerElement.offsetHeight);

      containerElement.appendChild(this._headerGhostElement);

      this._currentColumnIndex = columnIndex;
      this._currentColumnX = header.left - tableBoundingBox.left;
      this.element.classList.add('et-unselectable');
    }

    // Do not allow this ghost element to move out of table.
    let ghostLeftX = header.left - tableBoundingBox.left + deltaX;
    // 1) Do not allow the ghost element to move out of left boundary.
    if (this.get('hasFixedColumn')) {
      let { scrollLeft } = containerElement;

      if (ghostLeftX < get(columns[0], 'width') - scrollLeft) {
        ghostLeftX = get(columns[0], 'width') - scrollLeft;
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
    if (this._headerAlignBar.style.left === '') {
      this._headerAlignBar.style.left = `${this._currentColumnX}px`;
    }

    // 3) Update the index of column that the ghost header might be replacing.
    let ghostCenterX = ghostLeftX + header.width / 2;
    if (ghostCenterX < this._currentColumnX) {
      if (this._currentColumnIndex > 0) {
        // Current column is now the previous column
        this._currentColumnIndex--;
        this._currentColumnX -= get(columns[this._currentColumnIndex], 'width');
        this._headerAlignBar.style.left = `${this._currentColumnX}px`;
      }
    } else if (ghostCenterX >= this._currentColumnX + get(columns[this._currentColumnIndex], 'width')) {
      if (this._currentColumnIndex < columns.length - 1) {
        // Current column is now the next column
        this._currentColumnX = this._currentColumnX + get(columns[this._currentColumnIndex], 'width');
        this._currentColumnIndex++;
        this._headerAlignBar.style.left
          =  `${this._currentColumnX + get(columns[this._currentColumnIndex], 'width') - HEAD_ALIGN_BAR_WIDTH}px`;
      }
    }
  }

  @action
  onColumnReorderEnded(columnIndex) {
    if (this.get('hasSubcolumns')) {
      // Disable column reordering when table has subcolumn.
      return;
    }

    let newIndex = this._currentColumnIndex;
    let oldIndex = columnIndex;

    if (this._currentColumnIndex !== columnIndex) {
      move(this, 'bodyColumns', columnIndex, this._currentColumnIndex);
    }

    this._currentColumnIndex = -1;
    this._currentColumnX = -1;

    // Remove the header ghost element & aligned bar.
    this.element.removeChild(this._headerGhostElement);
    this.element.removeChild(this._headerAlignBar);
    this._headerGhostElement = null;
    this._headerAlignBar = null;
    this.element.classList.remove('et-unselectable');

    // Send action up to controller
    this.sendAction('onColumnReordered', oldIndex, newIndex);
  }

  @action
  onRowClicked(event, rowIndex) {
    let rows = this.get('rows');
    let item = rows.objectAt(rowIndex);

    let selectedRows = this.get('selectedRows').slice();

    switch (this.get('selectionMode')) {
      case SELECTION_MODE_NONE:
        return;
      case SELECTION_MODE_SINGLE:
        this.lastSelectedIndex = rowIndex;
        selectedRows = [item];
        break;
      case SELECTION_MODE_MULTIPLE:
        if (event.shiftKey) {
          let { lastSelectedIndex } = this;
          if (lastSelectedIndex === -1) {
            lastSelectedIndex = 0;
          }

          let minIndex = Math.min(lastSelectedIndex, rowIndex);
          let maxIndex = Math.max(lastSelectedIndex, rowIndex);

          // Use a set to avoid item duplication
          let rowsSet = new Set(selectedRows);
          for (let i = minIndex; i <= maxIndex; i++) {
            let obj = rows.objectAt(i);
            if (!rowsSet.has(obj)) {
              selectedRows.push(rows.objectAt(i));
            }
          }
        } else {
          if (!event.ctrlKey && !event.metaKey) {
            selectedRows = [];
          }

          if (selectedRows.indexOf(item) < 0) {
            selectedRows.push(item);
          }
          this.lastSelectedIndex = rowIndex;
        }
        break;
    }

    this.set('selectedRows', selectedRows);
  }

  @action
  onHeaderEvent() {
    this.sendAction('onHeaderEvent', ...arguments);
  }

  @action
  onFooterEvent() {
    this.sendAction('onFooterEvent', ...arguments);
  }
}
