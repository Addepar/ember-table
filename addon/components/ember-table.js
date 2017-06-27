import Ember from 'ember';
import layout from '../templates/components/ember-table';

const COLUMN_WIDTH_MIN = 25;

export default Ember.Component.extend({
  layout,

  hasFixedColumn: false,

  fixedColumnWidth: Ember.computed('hasFixedColumn', 'columns.firstObject.width',
      function() {
    const hasFixedColumn = this.get('hasFixedColumn');
    if (hasFixedColumn !== true) {
      return 0;
    }

    return this.get('columns.firstObject.width');
  }),

  /**
   * Indicates if this table allows column resizing or not. It's false by default.
   */
  enableColumnResize: false,

  enableColumnReorder: false,

  /**
   */
  headerGhostElement: null,

  /**
   * @private
   */
  currentColumnIndex: -1,
  currentColumnX: -1,

  resizeSensor: null,

  tableWidth: false,

  didInsertElement() {
    this._super(...arguments);

    const resizeSensor = new ResizeSensor(this.element, () => {
      this.set('tableWidth', this.element.offsetWidth);
      this.fillupColumn();
    });
    this.set('resizeSensor', resizeSensor);
    this.set('tableWidth', this.element.offsetWidth);
    this.fillupColumn();

    // Sync between table & the horizontal div scroller.
    const tableContainer = $(this.element).find('table');
    const horizontalScrollContainer = $(this.element).find('.horizontal-scroll-wrapper');
    horizontalScrollContainer.scroll(function () {
      tableContainer.scrollLeft(horizontalScrollContainer.scrollLeft());
    });
    tableContainer.scroll(function () {
        horizontalScrollContainer.scrollLeft(tableContainer.scrollLeft());
    });
  },

  willDestroyElement() {
    this.get('resizeSensor').detach(this.element);

    this._super(...arguments);
  },

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
  },

  /**
   * Computed style of horizontal scrolling wrapper. This computed property adds some left margin
   * the wrapper that matches fixed column width.
   */
  horizontalScrollWrapperStyle: Ember.computed('hasFixedColumn', 'columns.firstObject.width',
      'allColumnWidths', 'tableWidth', function() {
    const columns = this.get('columns');
    const left = this.get('hasFixedColumn') ? columns[0].width : 0;
    const visibility = this.get('tableWidth') < this.get('allColumnWidths') ? 'visibility' : 'hidden';

    return Ember.String.htmlSafe(`visibility: ${visibility}; left: ${columns[0].width}px; right: 0px;`);
  }),

  /**
   * Computed style for horizontal scroll element. This is computed so that its width matches
   * table's width and the table and the element can share same scrolling.
   */
  horizontalScrollStyle: Ember.computed('hasFixedColumn', 'columns.@each.width', function() {
    let style = '';
    const hasFixedColumn = this.get('hasFixedColumn');
    const columns = this.get('columns');
    let width = 0;

    for (let i = hasFixedColumn ? 1 : 0; i < columns.length; i++) {
      width += columns[i].width;
    }

    style = `width: ${width}px;`;
    return Ember.String.htmlSafe(style);
  }),

  allColumnWidths: Ember.computed('columns.@each.width', function() {
    const columns = this.get('columns');
    let sum = 0;
    for (let i = 0; i < columns.length; i++) {
      sum += columns[i].width;
    }
    return sum;
  }),

  actions: {
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
    },

    onColumnResizeEnded(columnIndex, delta) {
      this.element.classList.remove('unselectable');
      this.fillupColumn();
    },

    onColumnReorder(columnIndex, header, deltaX) {
      const containerElement = this.element.getElementsByClassName('table-container')[0];
      const tableBoundingBox = containerElement.getBoundingClientRect();
      const columns = this.get('columns');

      if (this.headerGhostElement == null) {
        this.headerGhostElement = document.createElement("div");

        this.headerGhostElement.style.width = `${header.width}px`;
        this.headerGhostElement.style.height = `${tableBoundingBox.bottom - tableBoundingBox.top}px`;
        this.headerGhostElement.style.top = '0px';
        this.headerGhostElement.classList.add('header-ghost-element');

        containerElement.appendChild(this.headerGhostElement);

        this.currentColumnIndex = columnIndex;
        this.currentColumnX = header.left - tableBoundingBox.left;
        this.element.classList.add('unselectable');
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
      this.headerGhostElement.style.left = `${ghostLeftX}px`;

      // Update the index of column that the ghost header might be replacing.
      const ghostCenterX = ghostLeftX + header.width / 2;
      if (ghostCenterX < this.currentColumnX) {
        if (this.currentColumnIndex > 0) {
          this.currentColumnIndex--;
          this.currentColumnX -= columns[this.currentColumnIndex].width;
        }
      } else if (ghostCenterX >= this.currentColumnX + columns[this.currentColumnIndex].width) {
        if (this.currentColumnIndex < columns.length - 1) {
          this.currentColumnX = this.currentColumnX + columns[this.currentColumnIndex].width;
          this.currentColumnIndex++;
        }
      }
    },

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
      this.currentColumnX = -1;

      // Update the column orders
      this.element.getElementsByClassName('table-container')[0].removeChild(this.headerGhostElement);
      this.headerGhostElement = null;
      this.element.classList.remove('unselectable');
    },

    onHeaderClicked() {

    }
  }
});
