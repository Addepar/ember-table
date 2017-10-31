/* global ResizeSensor */
import { action, computed } from 'ember-decorators/object';
import { classNames } from 'ember-decorators/component';
import { property } from '../utils/class';
import layout from '../templates/components/ember-table';
import { htmlSafe } from '@ember/string';
import { run } from '@ember/runloop';
import Component from '@ember/component';
import CellProxy from '../utils/cell-proxy';
import { move } from '../utils/array';
import { get, set } from '@ember/object';

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

@classNames('et-table')
export default class EmberTable2 extends Component {
  @property attributeBindings = ['style:style'];
  @property tagName = 'table';

  @property layout = layout;

  /**
   * Defines if this table has a footer or not.
   * // TODO(Billy): replace this with an option to pass in footer component.
   */
  @property hasFooter = false;

  /**
   * Estimated height for each row.
   */
  @property estimateRowHeight = 20;

  /**
   * Indicates how many left columns will be fixed. With current implementation, only 1 single
   * left most column can be a fixed column. Later version of Ember table could change
   * implementation to support multiple fixed columns.
   */
  @property numFixedColumns = 0;

  /**
   *Sets which column resizing behavior to use. Possible values are <code>'standard'</code>
   * (resizing a column pushes or pulls all other columns) and <code>'fluid'</code> (resizing a
   * column steals width from neighboring columns).
   */
  @property columnMode = COLUMN_MODE_STANDARD;

  /**
   * Sets which row selection behavior to follow. Possible values are 'none' (clicking on a row
   * does nothing), 'single' (clicking on a row selects it and deselects other rows), and 'multiple'
   * (multiple rows can be selected through ctrl/cmd-click or shift-click).
   */
  @property selectionMode = SELECTION_MODE_SINGLE;

  /**
   * A configuration that controls how columns shrink (or extend) when total column width does not
   * match table width. Behavior of column modification is as follow:
   * 1) "none": nothing changed to the column
   * 2) "equal_column": extra space is distributed equally among all columns
   * 3) "first_column": extra space is added into the first column.
   * 4) "last_column": extra space is added into the last column.
   */
  @property tableResizeMode = TABLE_RESIZE_MODE_NONE;

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
  @property _currentColumnIndex = -1;

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
   * Handlers used for synchronizing scroll positions across the scroll containers
   */
  @property _scrollHandler = null;
  @property _wheelHandler = null;
  @property _touchstartHandler = null;
  @property _touchmoveHandler = null;

  /**
   * A variable to store table width. This is updated when table is created or resized. We need to
   * store the table width because there are several computed property dependent on the table width.
   */
  @property _width = 0;

  @property lastSelectedIndex = -1;

  @computed('numFixedColumns')
  get hasFixedColumn() {
    const numFixedColumns = this.get('numFixedColumns');
    return Number.isInteger(numFixedColumns) && numFixedColumns !== 0;
  }

  init() {
    super.init(...arguments);

    this.cellCache = new WeakMap();

    // Create a unique CellProxy class for this table instance, that way transient data won't
    // pollute the prototype of the main proxy class.
    this.cellProxyClass = class extends CellProxy {};

    this.set('selectedRows', []);
  }

  didInsertElement() {
    super.didInsertElement(...arguments);

    this.setupScrollSync();
    this.setupColumnFillup();
  }

  willDestroyElement() {
    this.teardownColumnFillup();
    this.teardownScrollSync();

    super.willDestroyElement(...arguments);
  }

  /**
   * Sets up handlers to fillup the table container to its full width
   */
  setupColumnFillup() {
    requestAnimationFrame(() => {
      run(() => {
        this.set('_width', this.element.offsetWidth);
        this.fillupColumn();
      });
    });

    this._tableResizeSensor = new ResizeSensor(this.element, () => {
      this.set('_width', this.element.offsetWidth);
      this.fillupColumn();
    });
  }

  /**
   * Syncs horizontal scrolling between table, header, body & footer.
   */
  setupScrollSync() {
    const scrollBar = this.element.querySelector('.et-horizontal-scroll-wrapper');

    const bodyScrollContainer = this.element.querySelector('tbody');
    const headerScrollContainer = this.element.querySelector('thead');
    const footerScrollContainer = this.element.querySelector('tfoot');

    const scrollElements = [
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

      for (const scrollElement of scrollElements) {
        scrollElement.scrollLeft = scrollBar.scrollLeft;
      }
    };

    this._scrollHandler = () => {
      for (const scrollElement of scrollElements) {
        scrollElement.scrollLeft = scrollBar.scrollLeft;
      }
    };

    this._touchstartHandler = (event) => {
      const [{ clientX, clientY }] = event.touches;

      prevClientX = clientX;
      prevClientY = clientY;
    };

    this._touchmoveHandler = (event) => {
      const [{ clientX, clientY }] = event.touches;

      const deltaX = clientX - prevClientX;
      const deltaY = clientY - prevClientY;

      if (Math.abs(deltaX) < Math.abs(deltaY)) {
        return;
      }

      event.preventDefault();

      scrollBar.scrollLeft -= deltaX;

      for (const scrollElement of scrollElements) {
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
    const scrollBar = this.element.querySelector('.et-horizontal-scroll-wrapper');
    const bodyScrollContainer = this.element.querySelector('tbody');

    this.element.removeEventListener('wheel', this._wheelHandler);
    scrollBar.removeEventListener('scroll', this._scrollHandler);

    bodyScrollContainer.removeEventListener('touchstart', this._touchstartHandler);
    bodyScrollContainer.removeEventListener('touchmove', this._touchmoveHandler);
  }

  /**
   * There are cases where the sum of all column width is smaller or bigger than the container
   * width. In this case, we might want to adjust width of every single column.
   */
  fillupColumn() {
    const columns = this.get('columns');
    const tableWidth = this.get('_width');
    const sum = this.get('allColumnWidths');
    const tableResizeMode = this.get('tableResizeMode');

    if (sum !== tableWidth) {
      const delta = tableWidth - sum - 1;
      // Distribute the delta in pixel among columns according to the table fill up mode.
      if (tableResizeMode === TABLE_RESIZE_MODE_FIRST_COLUMN) {
        const [column] = columns;
        set(column, 'width', get(column, 'width') + delta);
      } else if (tableResizeMode === TABLE_RESIZE_MODE_EQUAL_COLUMN) {
        // Split delta by their proportion.
        const columnDelta = delta / columns.length;
        for (let i = 0; i < columns.length; i++) {
          const column = columns[i];
          set(column, 'width', Math.min(get(column, 'width')  + columnDelta), get(column, 'minWidth'));
        }
      } else if (tableResizeMode === TABLE_RESIZE_MODE_LAST_COLUMN) {
        // Add all delta to last column
        const lastColumn = columns[columns.length - 1];
        set(lastColumn, 'width', get(lastColumn, 'width') + delta);
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
    const left = this.get('hasFixedColumn') ? get(columns[0], 'width') : 0;

    return htmlSafe(`visibility: ${visibility}; left: ${left}px; right: 0px;`);
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
      width += get(columns[i], 'width');
    }

    style = `width: ${width}px;`;
    return htmlSafe(style);
  }

  @computed('columns.@each.width')
  allColumnWidths() {
    const columns = this.get('columns');
    let sum = 0;
    for (let i = 0; i < columns.length; i++) {
      sum += get(columns[i], 'width');
    }
    return sum;
  }

  @computed('cellCache', 'cellProxyClass', 'numFixedColumns', 'targetObject', 'columns', 'selectedRows')
  api() {
    return {
      cellCache: this.cellCache,
      cellProxyClass: this.cellProxyClass,
      numFixedColumns: this.numFixedColumns,
      targetObject: this,
      columns: this.columns,
      selectedRows: this.selectedRows
    };
  }

  @action
  onColumnResized(columnIndex, delta) {
    const columns = this.get('columns');
    const column = columns[columnIndex];
    const width = get(column, 'width');
    if (width + delta < get(column, 'minWidth')) {
      return;
    }

    const columnMode = this.get('columnMode');
    if (columnMode === COLUMN_MODE_FLUID && columnIndex < columns.length - 1
      && get(columns[columnIndex + 1], 'width') - delta < get(columns[columnIndex + 1], 'minWidth')) {
      // Resizing this column makes the next column smaller than its min width.
      return;
    }

    set(column, 'width', width + delta);
    if (columnMode === COLUMN_MODE_FLUID && columnIndex < columns.length - 1) {
      const oldWidth = get(columns[columnIndex + 1], 'width');
      set(columns[columnIndex + 1], 'width', oldWidth - delta);
    }

    if (!this.element.classList.contains('et-unselectable')) {
      this.element.classList.add('et-unselectable');
    }
  }

  @action
  onColumnResizeEnded() {
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
    const containerElement = this.element;
    const tableBoundingBox = containerElement.getBoundingClientRect();
    const columns = this.get('columns');

    if (this._headerGhostElement == null) {
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
      const { scrollLeft } = containerElement;

      if (ghostLeftX < get(columns[0], 'width') - scrollLeft) {
        ghostLeftX = get(columns[0], 'width'); - scrollLeft;
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
    const ghostCenterX = ghostLeftX + header.width / 2;
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
  onColumnReorderEnds(columnIndex) {
    if (this._currentColumnIndex != columnIndex) {
      move(this, 'columns', columnIndex, this._currentColumnIndex);
    }

    this._currentColumnIndex = -1;
    this._currentColumnX = -1;

    // Remove the header ghost element & aligned bar.
    this.element.removeChild(this._headerGhostElement);
    this.element.removeChild(this._headerAlignBar);
    this._headerGhostElement = null;
    this._headerAlignBar = null;
    this.element.classList.remove('et-unselectable');
  }

  @action
  onRowClicked(event, rowIndex) {
    const rows = this.get('rows');
    const item = rows.objectAt(rowIndex);

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

          const minIndex = Math.min(lastSelectedIndex, rowIndex);
          const maxIndex = Math.max(lastSelectedIndex, rowIndex);

          // Use a set to avoid item duplication
          const rowsSet = new Set(selectedRows);
          for (let i = minIndex; i <= maxIndex; i++) {
            const obj = rows.objectAt(i);
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
  onHeaderEvent(data) {
    this.sendAction('onHeaderEvent', data);
  }
}
