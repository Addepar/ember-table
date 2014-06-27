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
  checkDependencies: function() {
    if (!$.ui) {
      throw 'Missing dependency: jquery-ui';
    }
    if (!$().mousewheel) {
      throw 'Missing dependency: jquery-mousewheel';
    }
    if (!$().antiscroll) {
      throw 'Missing dependency: antiscroll.js';
    }
  }.on('init'),
  actions: {
    addColumn: Ember.K,
    sortByColumn: Ember.K
  },
  onColumnSort: function(column, newIndex) {
    var columns = this.get('tableColumns');
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
      return [];
    }
  }).property(),

  /**
  * Table Fixed Columns
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @todo Much more doc needed
   */
  fixedColumns: function() {
    var columns = this.get('columns');
    if (!columns) {
      return [];
    }
    var numFixedColumns = this.get('numFixedColumns') || 0;
    columns = columns.slice(0, numFixedColumns) || [];
    this.prepareTableColumns(columns);
    return columns;
  }.property('columns.@each', 'numFixedColumns'),

  /**
  * Table Columns
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @todo Much more doc needed
   */
  tableColumns: function() {
    var columns = this.get('columns');
    if (!columns) {
      return [];
    }
    var numFixedColumns = this.get('numFixedColumns') || 0;
    columns = columns.slice(numFixedColumns, columns.get('length')) || [];
    this.prepareTableColumns(columns);
    return columns;
  }.property('columns.@each', 'numFixedColumns'),
  prepareTableColumns: function(columns) {
    columns.setEach('controller', this);
  },
  didInsertElement: function() {
    this._super();
    this.set('_tableScrollTop', 0);
    this.elementSizeDidChange();
  },

  /**
  * On resize end callback
  * @memberof Ember.Table.EmberTableComponent
  * @instance
   */
  onResizeEnd: function() {
    Ember.run(this, this.elementSizeDidChange);
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
    Ember.run.next(this, this.updateLayout);
  },
  updateLayout: function() {
    if (this.get('state') !== 'inDOM') {
      return;
    }
    this.$('.antiscroll-wrap').antiscroll().data('antiscroll').rebuild();
    if (this.get('forceFillColumns')) {
      this.doForceFillColumns();
    }
  },
  doForceFillColumns: function() {
    var totalWidth = this.get('_width');
    var fixedColumnsWidth = this.get('_fixedColumnsWidth');
    var tableColumns = this.get('tableColumns');
    var contentWidth = this._getTotalWidth(tableColumns);
    var availableContentWidth = totalWidth - fixedColumnsWidth;
    var remainingWidth = availableContentWidth - contentWidth;
    var columnsToResize = tableColumns.filterProperty('canAutoResize');
    var additionWidthPerColumn = Math.floor(remainingWidth / columnsToResize.length);
    columnsToResize.forEach(function(column) {
      var columnWidth = column.get('columnWidth') + additionWidthPerColumn;
      column.set('columnWidth', columnWidth);
    });
  },
  onBodyContentLengthDidChange: function() {
    Ember.run.next(this, function() {
      Ember.run.once(this, this.updateLayout);
    });
  }.observes('bodyContent.length'),
  _tableScrollTop: 0,
  _tableScrollLeft: 0,
  _width: null,
  _height: null,
  _contentHeaderHeight: null,
  _hasVerticalScrollbar: function() {
    var height = this.get('_height');
    var contentHeight = this.get('_tableContentHeight') + this.get('_headerHeight') + this.get('_footerHeight');
    if (height < contentHeight) {
      return true;
    } else {
      return false;
    }
  }.property('_height', '_tableContentHeight', '_headerHeight', '_footerHeight'),
  _hasHorizontalScrollbar: function() {
    var contentWidth = this.get('_tableColumnsWidth');
    var tableWidth = this.get('_width') - this.get('_fixedColumnsWidth');
    if (contentWidth > tableWidth) {
      return true;
    } else {
      return false;
    }
  }.property('_tableColumnsWidth', '_width', '_fixedColumnsWidth'),
  _tablesContainerHeight: function() {
    var height = this.get('_height');
    var contentHeight = this.get('_tableContentHeight') + this.get('_headerHeight') + this.get('_footerHeight');
    if (contentHeight < height) {
      return contentHeight;
    } else {
      return height;
    }
  }.property('_height', '_tableContentHeight', '_headerHeight', '_footerHeight'),

  /**
  * Actual width of the fixed columns (frozen columns)
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
   */
  _fixedColumnsWidth: function() {
    return this._getTotalWidth(this.get('fixedColumns'));
  }.property('fixedColumns.@each.columnWidth'),

  /**
  * Actual width of the table columns (non-frozen columns)
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
   */
  _tableColumnsWidth: function() {
    var contentWidth = this._getTotalWidth(this.get('tableColumns'));
    var availableWidth = this.get('_width') - this.get('_fixedColumnsWidth');
    if (contentWidth > availableWidth) {
      return contentWidth;
    } else {
      return availableWidth;
    }
  }.property('tableColumns.@each.columnWidth', '_width', '_fixedColumnsWidth'),

  /**
  * Computed Row Width
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
   */
  _rowWidth: function() {
    var columnsWidth = this.get('_tableColumnsWidth');
    var nonFixedTableWidth = this.get('_tableContainerWidth') - this.get('_fixedColumnsWidth');
    if (columnsWidth < nonFixedTableWidth) {
      return nonFixedTableWidth;
    }
    return columnsWidth;
  }.property('_fixedColumnsWidth', '_tableColumnsWidth', '_tableContainerWidth'),
  _headerHeight: function() {
    var minHeight = this.get('minHeaderHeight');
    var contentHeaderHeight = this.get('_contentHeaderHeight');
    if (contentHeaderHeight < minHeight) {
      return minHeight;
    } else {
      return contentHeaderHeight;
    }
  }.property('_contentHeaderHeight', 'minHeaderHeight'),
  _footerHeight: function() {
    if (this.get('hasFooter')) {
      return this.get('footerHeight');
    } else {
      return 0;
    }
  }.property('footerHeight', 'hasFooter'),

  /**
  * Computed Body Height
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
   */
  _bodyHeight: function() {
    var bodyHeight = this.get('_tablesContainerHeight');
    if (this.get('hasHeader')) {
      bodyHeight -= this.get('_headerHeight');
    }
    if (this.get('hasFooter')) {
      bodyHeight -= this.get('footerHeight');
    }
    return bodyHeight;
  }.property('_tablesContainerHeight', '_hasHorizontalScrollbar', '_headerHeight', 'footerHeight', 'hasHeader', 'hasFooter'),

  /**
  * Computed Table Block Width
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
   */
  _tableBlockWidth: function() {
    return this.get('_width') - this.get('_fixedColumnsWidth');
  }.property('_width', '_fixedColumnsWidth'),
  _fixedBlockWidthBinding: '_fixedColumnsWidth',

  /**
  * Computed Table Content Height
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
   */
  _tableContentHeight: function() {
    return this.get('rowHeight') * this.get('bodyContent.length');
  }.property('rowHeight', 'bodyContent.length'),

  /**
  * Table Container Width
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
   */
  _tableContainerWidth: function() {
    return this.get('_width');
  }.property('_width'),

  /**
  * Computed Scroll Container Width
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
   */
  _scrollContainerWidth: function() {
    return this.get('_width') - this.get('_fixedColumnsWidth');
  }.property('_width', '_fixedColumnsWidth'),

  /**
  * Computed number of items showing
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
   */
  _numItemsShowing: function() {
    return Math.floor(this.get('_bodyHeight') / this.get('rowHeight'));
  }.property('_bodyHeight', 'rowHeight'),

  /**
  * Computed Start Index
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @raw
   */
  _startIndex: function() {
    var numContent = this.get('bodyContent.length');
    var numViews = this.get('_numItemsShowing');
    var rowHeight = this.get('rowHeight');
    var scrollTop = this.get('_tableScrollTop');
    var index = Math.floor(scrollTop / rowHeight);
    if (index + numViews >= numContent) {
      index = numContent - numViews;
    }
    if (index < 0) {
      return 0;
    } else {
      return index;
    }
  }.property('bodyContent.length', '_numItemsShowing', 'rowHeight', '_tableScrollTop'),

  /**
  * Get Total Width
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
  * @argument columns Columns to calculate width for
   */
  _getTotalWidth: function(columns, columnWidthPath) {
    if (columnWidthPath == null) {
      columnWidthPath = 'columnWidth';
    }
    if (!columns) {
      return 0;
    }
    var widths = columns.getEach(columnWidthPath) || [];
    return widths.reduce((function(total, w) {
      return total + w;
    }), 0);
  },
  click: function(event) {
    var row = this.getRowForEvent(event);
    if (!row) {
      return;
    }
    this.set('selection', row.get('content'));
  },
  getRowForEvent: function(event) {
    var $rowView = $(event.target).parents('.ember-table-table-row');
    var view = Ember.View.views[$rowView.attr('id')];
    if (view) {
      return view.get('row');
    }
  }
});

Ember.Handlebars.helper('table-component', Ember.Table.EmberTableComponent);
