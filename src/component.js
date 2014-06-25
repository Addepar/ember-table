
/**
* Table Component
* @class
* @alias Ember.Table.EmberTableComponent
 */
Ember.Table.EmberTableComponent = Ember.Component.extend(Ember.AddeparMixins.StyleBindingsMixin, Ember.AddeparMixins.ResizeHandlerMixin, {
  layoutName: 'components/ember-table',
  classNames: ['ember-table-tables-container'],
  classNameBindings: ['enableContentSelection:ember-table-content-selectable'],
  styleBindings: ['height'],
  height: Ember.computed.alias('_tablesContainerHeight'),
  columns: null,
  numFixedColumns: 0,
  numFooterRow: 0,
  rowHeight: 30,
  minHeaderHeight: 30,
  footerHeight: 30,
  hasHeader: true,
  hasFooter: true,
  forceFillColumns: false,
  enableColumnReorder: true,
  enableContentSelection: false,
  selection: null,
  tableRowViewClass: 'Ember.Table.TableRow',
  init: function() {
    this._super();
    if (!$.ui) {
      throw 'Missing dependency: jquery-ui';
    }
    if (!$().mousewheel) {
      throw 'Missing dependency: jquery-mousewheel';
    }
    if (!$().antiscroll) {
      throw 'Missing dependency: antiscroll.js';
    }
  },
  actions: {
    addColumn: Ember.K,
    sortByColumn: Ember.K
  },
  onColumnSort: function(column, newIndex) {
    var columns;
    columns = this.get('tableColumns');
    columns.removeObject(column);
    return columns.insertAt(newIndex, column);
  },

  /**
  * Table Body Content - Array of Ember.Table.Row
  * @memberof Ember.Table.EmberTableComponent
  * @instance
   */
  bodyContent: Ember.computed(function() {
    return Ember.Table.RowArrayController.create({
      target: this,
      parentController: this,
      container: this.get('container'),
      itemController: Ember.Table.Row,
      content: this.get('content')
    });
  }).property('content'),

  /**
  * Table Footer Content - Array of Ember.Table.Row
  * @memberof Ember.Table.EmberTableComponent
  * @instance
   */
  footerContent: Ember.computed(function(key, value) {
    if (value) {
      return value;
    } else {
      return Ember.A();
    }
  }).property(),

  /**
  * Table Fixed Columns
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @todo Much more doc needed
   */
  fixedColumns: Ember.computed(function() {
    var columns, numFixedColumns;
    columns = this.get('columns');
    if (!columns) {
      return Ember.A();
    }
    numFixedColumns = this.get('numFixedColumns') || 0;
    columns = columns.slice(0, numFixedColumns) || [];
    this.prepareTableColumns(columns);
    return columns;
  }).property('columns.@each', 'numFixedColumns'),

  /**
  * Table Columns
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @todo Much more doc needed
   */
  tableColumns: Ember.computed(function() {
    var columns, numFixedColumns;
    columns = this.get('columns');
    if (!columns) {
      return Ember.A();
    }
    numFixedColumns = this.get('numFixedColumns') || 0;
    columns = columns.slice(numFixedColumns, columns.get('length')) || [];
    this.prepareTableColumns(columns);
    return columns;
  }).property('columns.@each', 'numFixedColumns'),
  prepareTableColumns: function(columns) {
    return columns.setEach('controller', this);
  },
  didInsertElement: function() {
    this._super();
    this.set('_tableScrollTop', 0);
    return this.elementSizeDidChange();
  },

  /**
  * On resize end callback
  * @memberof Ember.Table.EmberTableComponent
  * @instance
   */
  onResizeEnd: function() {
    return Ember.run(this, this.elementSizeDidChange);
  },

  /**
  * Element size did change callback
  * @memberof Ember.Table.EmberTableComponent
  * @instance
   */
  elementSizeDidChange: function() {
    if (this.get('state') !== 'inDOM') {
      return;
    }
    this.set('_width', this.$().innerWidth());
    this.set('_height', this.$().innerHeight());
    return Ember.run.next(this, this.updateLayout);
  },
  updateLayout: function() {
    if (this.get('state') !== 'inDOM') {
      return;
    }
    this.$('.antiscroll-wrap').antiscroll().data('antiscroll').rebuild();
    if (this.get('forceFillColumns')) {
      return this.doForceFillColumns();
    }
  },
  doForceFillColumns: function() {
    var additionWidthPerColumn, availableContentWidth, columnsToResize, contentWidth, fixedColumnsWidth, remainingWidth, tableColumns, totalWidth;
    totalWidth = this.get('_width');
    fixedColumnsWidth = this.get('_fixedColumnsWidth');
    tableColumns = this.get('tableColumns');
    contentWidth = this._getTotalWidth(tableColumns);
    availableContentWidth = totalWidth - fixedColumnsWidth;
    remainingWidth = availableContentWidth - contentWidth;
    columnsToResize = tableColumns.filterProperty('canAutoResize');
    additionWidthPerColumn = Math.floor(remainingWidth / columnsToResize.length);
    return columnsToResize.forEach(function(column) {
      var columnWidth;
      columnWidth = column.get('columnWidth') + additionWidthPerColumn;
      return column.set('columnWidth', columnWidth);
    });
  },
  onBodyContentLengthDidChange: Ember.observer(function() {
    return Ember.run.next(this, function() {
      return Ember.run.once(this, this.updateLayout);
    });
  }, 'bodyContent.length'),
  _tableScrollTop: 0,
  _tableScrollLeft: 0,
  _width: null,
  _height: null,
  _contentHeaderHeight: null,
  _hasVerticalScrollbar: Ember.computed(function() {
    var contentHeight, height;
    height = this.get('_height');
    contentHeight = this.get('_tableContentHeight') + this.get('_headerHeight') + this.get('_footerHeight');
    if (height < contentHeight) {
      return true;
    } else {
      return false;
    }
  }).property('_height', '_tableContentHeight', '_headerHeight', '_footerHeight'),
  _hasHorizontalScrollbar: Ember.computed(function() {
    var contentWidth, tableWidth;
    contentWidth = this.get('_tableColumnsWidth');
    tableWidth = this.get('_width') - this.get('_fixedColumnsWidth');
    if (contentWidth > tableWidth) {
      return true;
    } else {
      return false;
    }
  }).property('_tableColumnsWidth', '_width', '_fixedColumnsWidth'),
  _tablesContainerHeight: Ember.computed(function() {
    var contentHeight, height;
    height = this.get('_height');
    contentHeight = this.get('_tableContentHeight') + this.get('_headerHeight') + this.get('_footerHeight');
    if (contentHeight < height) {
      return contentHeight;
    } else {
      return height;
    }
  }).property('_height', '_tableContentHeight', '_headerHeight', '_footerHeight'),

  /**
  * Actual width of the fixed columns (frozen columns)
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
   */
  _fixedColumnsWidth: Ember.computed(function() {
    return this._getTotalWidth(this.get('fixedColumns'));
  }).property('fixedColumns.@each.columnWidth'),

  /**
  * Actual width of the table columns (non-frozen columns)
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
   */
  _tableColumnsWidth: Ember.computed(function() {
    var availableWidth, contentWidth;
    contentWidth = this._getTotalWidth(this.get('tableColumns'));
    availableWidth = this.get('_width') - this.get('_fixedColumnsWidth');
    if (contentWidth > availableWidth) {
      return contentWidth;
    } else {
      return availableWidth;
    }
  }).property('tableColumns.@each.columnWidth', '_width', '_fixedColumnsWidth'),

  /**
  * Computed Row Width
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
   */
  _rowWidth: Ember.computed(function() {
    var columnsWidth, nonFixedTableWidth;
    columnsWidth = this.get('_tableColumnsWidth');
    nonFixedTableWidth = this.get('_tableContainerWidth') - this.get('_fixedColumnsWidth');
    if (columnsWidth < nonFixedTableWidth) {
      return nonFixedTableWidth;
    }
    return columnsWidth;
  }).property('_fixedColumnsWidth', '_tableColumnsWidth', '_tableContainerWidth'),
  _headerHeight: Ember.computed(function() {
    var contentHeaderHeight, minHeight;
    minHeight = this.get('minHeaderHeight');
    contentHeaderHeight = this.get('_contentHeaderHeight');
    if (contentHeaderHeight < minHeight) {
      return minHeight;
    } else {
      return contentHeaderHeight;
    }
  }).property('_contentHeaderHeight', 'minHeaderHeight'),
  _footerHeight: Ember.computed(function() {
    if (this.get('hasFooter')) {
      return this.get('footerHeight');
    } else {
      return 0;
    }
  }).property('footerHeight', 'hasFooter'),

  /**
  * Computed Body Height
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
   */
  _bodyHeight: Ember.computed(function() {
    var bodyHeight;
    bodyHeight = this.get('_tablesContainerHeight');
    if (this.get('hasHeader')) {
      bodyHeight -= this.get('_headerHeight');
    }
    if (this.get('hasFooter')) {
      bodyHeight -= this.get('footerHeight');
    }
    return bodyHeight;
  }).property('_tablesContainerHeight', '_hasHorizontalScrollbar', '_headerHeight', 'footerHeight', 'hasHeader', 'hasFooter'),

  /**
  * Computed Table Block Width
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
   */
  _tableBlockWidth: Ember.computed(function() {
    return this.get('_width') - this.get('_fixedColumnsWidth');
  }).property('_width', '_fixedColumnsWidth'),
  _fixedBlockWidthBinding: '_fixedColumnsWidth',

  /**
  * Computed Table Content Height
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
   */
  _tableContentHeight: Ember.computed(function() {
    return this.get('rowHeight') * this.get('bodyContent.length');
  }).property('rowHeight', 'bodyContent.length'),

  /**
  * Table Container Width
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
   */
  _tableContainerWidth: Ember.computed(function() {
    return this.get('_width');
  }).property('_width'),

  /**
  * Computed Scroll Container Width
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
   */
  _scrollContainerWidth: Ember.computed(function() {
    return this.get('_width') - this.get('_fixedColumnsWidth');
  }).property('_width', '_fixedColumnsWidth'),

  /**
  * Computed number of items showing
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
   */
  _numItemsShowing: Ember.computed(function() {
    return Math.floor(this.get('_bodyHeight') / this.get('rowHeight'));
  }).property('_bodyHeight', 'rowHeight'),

  /**
  * Computed Start Index
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @raw
   */
  _startIndex: Ember.computed(function() {
    var index, numContent, numViews, rowHeight, scrollTop;
    numContent = this.get('bodyContent.length');
    numViews = this.get('_numItemsShowing');
    rowHeight = this.get('rowHeight');
    scrollTop = this.get('_tableScrollTop');
    index = Math.floor(scrollTop / rowHeight);
    if (index + numViews >= numContent) {
      index = numContent - numViews;
    }
    if (index < 0) {
      return 0;
    } else {
      return index;
    }
  }).property('bodyContent.length', '_numItemsShowing', 'rowHeight', '_tableScrollTop'),

  /**
  * Get Total Width
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
  * @argument columns Columns to calculate width for
   */
  _getTotalWidth: function(columns, columnWidthPath) {
    var widths;
    if (columnWidthPath == null) {
      columnWidthPath = 'columnWidth';
    }
    if (!columns) {
      return 0;
    }
    widths = columns.getEach(columnWidthPath) || [];
    return widths.reduce((function(total, w) {
      return total + w;
    }), 0);
  },
  click: function(event) {
    var row;
    row = this.getRowForEvent(event);
    if (!row) {
      return;
    }
    return this.set('selection', row.get('content'));
  },
  getRowForEvent: function(event) {
    var $rowView, view;
    $rowView = $(event.target).parents('.ember-table-table-row');
    view = Ember.View.views[$rowView.attr('id')];
    if (view) {
      return view.get('row');
    }
  }
});

Ember.Handlebars.helper('table-component', Ember.Table.EmberTableComponent);
