/* global ResizeSensor */
import Component from '@ember/component';
import EmberObject, { get, set } from '@ember/object';
import { run } from '@ember/runloop';
import ObjectProxy from '@ember/object/proxy';
import { addObserver } from '@ember/object/observers';
import { A as emberA } from '@ember/array';
import { isNone } from '@ember/utils';

import { scheduler, Token } from 'ember-raf-scheduler';

import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type, optional } from '@ember-decorators/argument/type';
import { Action } from '@ember-decorators/argument/types';
import { action, computed } from '@ember-decorators/object';
import { tagName } from '@ember-decorators/component';

import { move } from '../../utils/array';
import layout from './template';

import { metaCacheFor } from '../../-private/meta-cache';

class TableColumnMeta extends EmberObject {}

class TableColumnProxy extends ObjectProxy {
  @computed('content.subcolumns.[]')
  get subcolumns() {
    return emberA(
      (this.get('content.subcolumns') || []).map((s) => TableColumnProxy.create({ content: s }))
    );
  }

  @computed('content')
  get meta() {
    return metaCacheFor(this.get('content'), TableColumnMeta);
  }
}

const HEAD_ALIGN_BAR_WIDTH = 5;

const RESIZE_MODE = {
  STANDARD: 'standard',
  FLUID: 'fluid'
};

const FILL_MODE = {
  NONE: 'none',
  EQUAL_COLUMN: 'equal_column',
  FIRST_COLUMN: 'first_column',
  LAST_COLUMN: 'last_column'
};

/**
  Sets column width with newWidth. If the newWidth is smaller than column's minWidth, use the
  minWidth value instead.
*/
function setColumnWidth(column, newWidth) {
  let minWidth = get(column, 'minWidth') || 0;
  set(column, 'width', Math.max(newWidth, minWidth));
}

/**
  There are cases where the sum of all column width is smaller or bigger than the container
  width. In this case, we might want to adjust width of every single column.
*/
function fillupColumns(columns, totalWidth, fillMode, hasSubcolumns) {
  let oldTotalWidth = columns.reduce((s, c) => s + get(c, 'width'), 0);

  if (oldTotalWidth !== totalWidth) {
    let delta = totalWidth - oldTotalWidth - 1;
    // Distribute the delta in pixel among columns according to the table fill up mode.
    if (fillMode === FILL_MODE.FIRST_COLUMN) {
      let [column] = columns;

      setColumnWidth(column, get(column, 'width') + delta);

    } else if (fillMode === FILL_MODE.EQUAL_COLUMN) {
      // Split delta by their proportion.
      let columnDelta = delta / columns.length;

      for (let i = 0; i < columns.length; i++) {
        let column = columns[i];
        setColumnWidth(column, get(column, 'width') + columnDelta);
      }

    } else if (fillMode === FILL_MODE.LAST_COLUMN) {
      // Add all delta to last column
      let lastColumn = columns[columns.length - 1];

      set(lastColumn, 'width', get(lastColumn, 'width') + delta);
    }
  }

  if (hasSubcolumns) {
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

@tagName('thead')
export default class EmberTHead extends Component {
  layout = layout;

  /**
    The API object passed in by the table
  */
  @argument
  @required
  @type('object')
  api;

  /**
    The column definitions for the table
  */
  @argument
  @required
  @type(Array)
  columns;

  @argument({ defaultIfUndefined: true })
  @type('boolean')
  hasFixedColumn = false;

  /**
    Sets which column resizing behavior to use. Possible values are <code>'standard'</code>
    (resizing a column pushes or pulls all other columns) and <code>'fluid'</code> (resizing a
    column steals width from neighboring columns).
  */
  @argument({ defaultIfUndefined: true })
  @type('string')
  resizeMode = RESIZE_MODE.STANDARD;

  /**
    A configuration that controls how columns shrink (or extend) when total column width does not
    match table width. Behavior of column modification is as follow:
    1) "none": nothing changed to the column
    2) "equal_column": extra space is distributed equally among all columns
    3) "first_column": extra space is added into the first column.
    4) "last_column": extra space is added into the last column.
  */
  @argument({ defaultIfUndefined: true })
  @type('string')
  fillMode = FILL_MODE.NONE;

  /**
    An action passed in the column reordering event
  */
  @argument
  @type(optional(Action))
  onReorder = null;

  /**
    An action passed in the column resizing event
  */
  @argument
  @type(optional(Action))
  onResize = null;

  token = new Token();

  /**
   * A sensor object that sends events to this table component when table size changes. When table
   * is resized, table width & height are updated and other computed properties depending on them
   * also get updated.
   */
  _tableResizeSensor = null;

  /**
    A temporary element created when moving column. This element represents the current position
    of the moving column. It has the same width and height with the moving column. Once moving
    completes, this element vanishes.
  */
  _headerGhostElement = null;

  /**
    A temporary vertical bar that show the column that user is about to move to. This bar aligns
    with the right (or left) boundary of next column, depending on whether user is moving the
    column right (or left).
  */
  _headerAlignBar = null;

  /**
    A variable used when moving column. This variables indicates the current column index that user
    is about to move to.
  */
  _currentColumnIndex = -1;

  /**
    A variable used when moving column. It indicates the horizontal distance from current moving
    column to table left boundary or fixed column (if fixed column is enabled).
  */
  _currentColumnX = -1;

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

  @computed('columns.[]')
  get wrappedColumns() {
    let wrappedColumns = this.get('columns').map((column) => TableColumnProxy.create({ content: column }));

    wrappedColumns[0].set('meta.isFixed', this.get('hasFixedColumn'));

    return emberA(wrappedColumns);
  }

  /**
   * Columns that are be used in table body. In normal use case, the body columns are the same with
   * table header columns. However, if header columns have subcolumns, this body columns are the
   * concatentation of all subcolumns.
   */
  @computed('wrappedColumns.[]')
  get leafColumns() {
    let leafColumns = emberA();

    this.get('wrappedColumns').forEach((column) => {
      let subcolumns = get(column, 'subcolumns');

      if (isNone(subcolumns) || get(subcolumns, 'length') === 0) {
        leafColumns.pushObject(column);
      } else {
        leafColumns.pushObjects(subcolumns);
      }
    });

    leafColumns.forEach((column, index) => {
      column.set('meta.index', index);
    });

    return leafColumns;
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

  constructor() {
    super(...arguments);

    this.get('api').registerColumns(this.get('leafColumns'));

    addObserver(this, 'leafColumns.[]', () => {
      this.get('api').registerColumns(this.get('leafColumns'));
    });
  }

  didInsertElement() {
    super.didInsertElement(...arguments);

    this._container = this.element.closest('.ember-table');

    this.setupColumnFillup();
  }

  willDestroyElement() {
    this.teardownColumnFillup();
    this.token.cancel();

    super.willDestroyElement(...arguments);
  }

  /**
    Sets up handlers to fillup the table container to its full width
  */
  setupColumnFillup() {
    scheduler.schedule('sync', this.fillupHandler, this.token);

    this._tableResizeSensor = new ResizeSensor(this._container, run.bind(this.fillupHandler));
  }

  /**
    Teardown the column fillup listeners
  */
  teardownColumnFillup() {
    this._tableResizeSensor.detach(this._container);
  }

  fillupHandler = () => {
    if (!this.get('isDestroying')) {
      fillupColumns(this.get('columns'), this._container.offsetWidth, this.get('fillMode'), this.get('hasSubcolumns'));
    }
  };

  @action
  onColumnResizing(columnIndex, delta) {
    if (this.get('hasSubcolumns')) {
      // Disable column reordering when table has subcolumn.
      return;
    }

    let columns = this.get('leafColumns');
    let column = columns[columnIndex];
    let width = get(column, 'width');
    if (width + delta < get(column, 'minWidth')) {
      return;
    }

    let resizeMode = this.get('resizeMode');
    if (
      resizeMode === RESIZE_MODE.FLUID && columnIndex < columns.length - 1
      && get(columns[columnIndex + 1], 'width') - delta < get(columns[columnIndex + 1], 'minWidth')
    ) {
      // Resizing this column makes the next column smaller than its min width.
      return;
    }

    setColumnWidth(column, width + delta);
    if (resizeMode === RESIZE_MODE.FLUID && columnIndex < columns.length - 1) {
      let oldWidth = get(columns[columnIndex + 1], 'width');
      setColumnWidth(columns[columnIndex + 1], oldWidth - delta);
    }

    if (!this._container.classList.contains('et-unselectable')) {
      this._container.classList.add('et-unselectable');
    }
  }

  @action
  onColumnResizeEnded(columnIndex) {
    if (this.get('hasSubcolumns')) {
      // Disable column reordering when table has subcolumn.
      return;
    }

    this._container.classList.remove('et-unselectable');
    this.fillupHandler();
    this.sendAction('onResize', columnIndex);
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
  onColumnReordering(columnIndex, header, deltaX) {
    if (this.get('hasSubcolumns')) {
      // Disable column reordering when table has subcolumn.
      return;
    }

    let containerElement = this._container;
    let tableBoundingBox = containerElement.getBoundingClientRect();
    let columns = this.get('leafColumns');

    if (this._headerGhostElement === null) {
      this.createGhostElement(containerElement, header.width, containerElement.offsetHeight);

      containerElement.appendChild(this._headerGhostElement);

      this._currentColumnIndex = columnIndex;
      this._currentColumnX = header.left - tableBoundingBox.left;
      this._container.classList.add('et-unselectable');
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
      move(this, 'columns', columnIndex, this._currentColumnIndex);
    }

    this._currentColumnIndex = -1;
    this._currentColumnX = -1;

    // Remove the header ghost element & aligned bar.
    this._container.removeChild(this._headerGhostElement);
    this._container.removeChild(this._headerAlignBar);
    this._headerGhostElement = null;
    this._headerAlignBar = null;
    this._container.classList.remove('et-unselectable');

    // Send action up to controller
    this.sendAction('onReorder', oldIndex, newIndex);
  }
}
