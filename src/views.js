/**
* Table Container
* @class
* @alias Ember.Table.TableContainer
* @mixes Ember.AddeparMixins.StyleBindingsMixin
 */
Ember.Table.TableContainer = Ember.View.extend(Ember.AddeparMixins.StyleBindingsMixin, {
  classNames: ['ember-table-table-container'],
  styleBindings: ['height', 'width']
});


/**
* Table Block
* @class
* @alias Ember.Table.TableBlock
* @mixes Ember.AddeparMixins.StyleBindingsMixin
* @todo This should be a mixin
 */

Ember.Table.TableBlock = Ember.CollectionView.extend(Ember.AddeparMixins.StyleBindingsMixin, {
  classNames: ['ember-table-table-block'],
  styleBindings: ['width', 'height'],
  itemViewClass: Ember.computed.alias('controller.tableRowViewClass'),
  columns: null,
  content: null,
  scrollLeft: null,

  /**
  * On scroll left did change callback
  * @memberof Ember.Table.TableBlock
  * @instance
   */
  onScrollLeftDidChange: function() {
    this.$().scrollLeft(this.get('scrollLeft'));
  }.observes('scrollLeft'),

  height: function() {
    return this.get('controller._headerHeight');
  }.property('controller._headerHeight')
});


/**
* Lazy Table Block
* @class
* @alias Ember.Table.LazyTableBlock
 */

Ember.Table.LazyTableBlock = Ember.LazyContainerView.extend({
  classNames: ['ember-table-table-block'],
  styleBindings: ['width'],
  itemViewClass: Ember.computed.alias('controller.tableRowViewClass'),
  rowHeight: Ember.computed.alias('controller.rowHeight'),
  columns: null,
  content: null,
  scrollLeft: null,
  scrollTop: null,

  /**
  * On scroll left did change callback
  * @memberof Ember.Table.LazyTableBlock
  * @instance
   */
  onScrollLeftDidChange: function() {
    this.$().scrollLeft(this.get('scrollLeft'));
  }.observes('scrollLeft')
});


/**
* Table Row
* @class
* @alias Ember.Table.TableRow
 */

Ember.Table.TableRow = Ember.LazyItemView.extend({
  templateName: 'table-row',
  classNames: 'ember-table-table-row',
  classNameBindings: ['row.isHovered:ember-table-hover', 'row.isSelected:ember-table-selected', 'row.rowStyle', 'isLastRow:ember-table-last-row'],
  styleBindings: ['width', 'height'],
  row: Ember.computed.alias('content'),
  columns: Ember.computed.alias('parentView.columns'),
  width: Ember.computed.alias('controller._rowWidth'),
  height: Ember.computed.alias('controller.rowHeight'),
  isLastRow: function() {
    return this.get('row') === this.get('controller.bodyContent.lastObject');
  }.property('controller.bodyContent.lastObject', 'row'),

  /**
  * Mouse enter callback
  * @memberof Ember.Table.TableRow
  * @instance
  * @param event jQuery event
   */
  mouseEnter: function(event) {
    var row = this.get('row');
    if (row) {
      row.set('isHovered', true);
    }
  },

  /**
  * Mouse leave callback
  * @memberof Ember.Table.TableRow
  * @instance
  * @param event jQuery event
   */
  mouseLeave: function(event) {
    var row = this.get('row');
    if (row) {
      row.set('isHovered', false);
    }
  },

  /**
  * Teardown content
  * @memberof Ember.Table.TableRow
  * @instance
   */
  teardownContent: function() {
    var row = this.get('row');
    if (row) {
      row.set('isHovered', false);
    }
  }
});


/**
* Table Cell
* @class
* @alias Ember.Table.TableCell
* @mixes Ember.AddeparMixins.StyleBindingsMixin
 */

Ember.Table.TableCell = Ember.View.extend(Ember.AddeparMixins.StyleBindingsMixin, {
  templateName: 'table-cell',
  classNames: ['ember-table-cell'],
  classNameBindings: 'column.textAlign',
  styleBindings: 'width',
  row: Ember.computed.alias('parentView.row'),
  column: Ember.computed.alias('content'),
  width: Ember.computed.alias('column.columnWidth'),
  contentDidChange: function() {
    this.notifyPropertyChange('cellContent');
  }.on('didInsertElement'),
  contentPathWillChange: function() {
    var contentPath = this.get('column.contentPath');
    if (contentPath) {
      this.removeObserver("row." + contentPath, this, this.contentDidChange);
    }
  }.observesBefore('column.contentPath'),
  contentPathDidChange: function() {
    var contentPath = this.get('column.contentPath');
    if (contentPath) {
      this.addObserver("row." + contentPath, this, this.contentDidChange);
    }
  }.observesBefore('column.contentPath').on('init'),

  /**
  * Computed Cell Content
  * @memberof Ember.Table.TableCell
  * @instance
   */
  cellContent: function(key, value) {
    var row = this.get('row');
    var column = this.get('column');
    if (!(row && column)) {
      return;
    }
    if (arguments.length === 1) {
      value = column.getCellContent(row);
    } else {
      column.setCellContent(row, value);
    }
    return value;
  }.property('row.isLoaded', 'column')
});


/**
* HeaderBlock
* @class
* @alias Ember.Table.HeaderBlock
* @augments Ember.Table.TableBlock
 */

Ember.Table.HeaderBlock = Ember.Table.TableBlock.extend({
  classNames: ['ember-table-header-block'],
  itemViewClass: 'Ember.Table.HeaderRow',

  /**
  * Computed Content
  * @memberof Ember.Table.HeaderBlock
  * @instance
   */
  content: function() {
    return [this.get('columns')];
  }.property('columns')
});


// We hacked this. There is an inconsistency at the level in which we are
// handling scroll event...

/**
* Header Row
* @class
* @alias Ember.Table.HeaderRow
* @mixes Ember.AddeparMixins.StyleBindingsMixin
 */

Ember.Table.HeaderRow = Ember.View.extend(Ember.AddeparMixins.StyleBindingsMixin, {
  templateName: 'header-row',
  classNames: ['ember-table-table-row', 'ember-table-header-row'],
  styleBindings: ['width'],
  columns: Ember.computed.alias('content'),
  width: Ember.computed.alias('controller._rowWidth'),
  scrollLeft: Ember.computed.alias('controller._tableScrollLeft'),

  /**
  * Options for jQuery UI sortable
  * @memberof Ember.Table.HeaderRow
  * @instance
   */
  sortableOption: function() {
    return {
      axis: 'x',
      containment: 'parent',
      cursor: 'move',
      helper: 'clone',
      items: ".ember-table-header-cell.sortable",
      opacity: 0.9,
      placeholder: 'ui-state-highlight',
      scroll: true,
      tolerance: 'intersect',
      update: jQuery.proxy(this.onColumnSortDone, this),
      stop: jQuery.proxy(this.onColumnSortStop, this),
      sort: jQuery.proxy(this.onColumnSortChange, this)
    };
  }.property(),
  onScrollLeftDidChange: function() {
    this.$().scrollLeft(this.get('scrollLeft'));
  }.observes('scrollLeft'),
  onDidInsertElement: function() {
    if (this.get('controller.enableColumnReorder')) {
      this.$('> div').sortable(this.get('sortableOption'));
    }
  }.on('didInsertElement'),
  onScroll: function(event) {
    this.set('scrollLeft', event.target.scrollLeft);
    event.preventDefault();
  },
  onColumnSortStop: function(event, ui) {
    this.set('controller._isShowingSortableIndicator', false);
  },
  onColumnSortChange: function(event, ui) {
    var left = this.$('.ui-state-highlight').offset().left - this.$().closest('.ember-table-tables-container').offset().left;
    this.set('controller._isShowingSortableIndicator', true);
    this.set('controller._sortableIndicatorLeft', left);
  },
  onColumnSortDone: function(event, ui) {
    var newIndex = ui.item.index();
    var view = Ember.View.views[ui.item.attr('id')];
    var column = view.get('column');
    this.get('controller').onColumnSort(column, newIndex);
    this.set('controller._isShowingSortableIndicator', false);
  }
});


/**
* Header Cell
* @class
* @alias Ember.Table.HeaderCell
* @mixes Ember.AddeparMixins.StyleBindingsMixin
 */

Ember.Table.HeaderCell = Ember.View.extend(Ember.AddeparMixins.StyleBindingsMixin, {
  templateName: 'header-cell',
  classNames: ['ember-table-cell', 'ember-table-header-cell'],
  classNameBindings: ['column.isSortable:sortable', 'column.textAlign'],
  styleBindings: ['width', 'height'],
  column: Ember.computed.alias('content'),
  width: Ember.computed.alias('column.columnWidth'),
  height: Ember.computed(function() {
    return this.get('controller._headerHeight');
  }).property('controller._headerHeight'),

  /**
  * jQuery UI resizable option
  * @memberof Ember.Table.HeaderCell
  * @instance
   */
  resizableOption: function() {
    return {
      handles: 'e',
      minHeight: 40,
      minWidth: this.get('column.minWidth') || 100,
      maxWidth: this.get('column.maxWidth') || 500,
      grid: this.get('column.snapGrid'),
      resize: jQuery.proxy(this.onColumnResize, this),
      stop: jQuery.proxy(this.onColumnResize, this)
    };
  }.property(),

  /**
  * Did insert element callback
  * @memberof Ember.Table.HeaderCell
  * @instance
   */
  onDidInsertElement: function() {
    this.elementSizeDidChange();
    if (this.get('column.isResizable')) {
      this.$().resizable(this.get('resizableOption'));
      this._resizableWidget = this.$().resizable('widget');
    }
  }.on('didInsertElement'),

  /**
  * On column resize callback
  * @memberof Ember.Table.HeaderCell
  * @instance
  * @argument event jQuery event
   */
  onColumnResize: function(event, ui) {
    this.elementSizeDidChange();
    if (this.get('controller.forceFillColumns') && this.get('controller.columns').filterProperty('canAutoResize').length > 1) {
      this.set('column.canAutoResize', false);
    }
    this.get("column").resize(ui.size.width);
  },
  elementSizeDidChange: function() {
    var maxHeight = 0;
    $('.ember-table-header-block .ember-table-content').each(function() {
      var thisHeight = $(this).outerHeight();
      if (thisHeight > maxHeight) {
        maxHeight = thisHeight;
      }
    });
    this.set('controller._contentHeaderHeight', maxHeight);
  }
});


Ember.Table.ColumnSortableIndicator = Ember.View.extend(Ember.AddeparMixins.StyleBindingsMixin, {
  classNames: 'ember-table-column-sortable-indicator',
  classNameBindings: 'controller._isShowingSortableIndicator:active',
  styleBindings: ['left', 'height'],
  left: Ember.computed.alias('controller._sortableIndicatorLeft'),
  height: Ember.computed.alias('controller._height')
});


/**
* Header Table Container
* @class
* @alias Ember.Table.HeaderTableContainer
* @augments Ember.Table.TableContainer
* @mixes Ember.MouseWheelHandlerMixin
* @mixes Ember.TouchMoveHandlerMixin
 */

Ember.Table.HeaderTableContainer = Ember.Table.TableContainer.extend(Ember.Table.ShowHorizontalScrollMixin, {
  templateName: 'header-container',
  classNames: ['ember-table-table-container', 'ember-table-fixed-table-container', 'ember-table-header-container'],
  height: Ember.computed.alias('controller._headerHeight'),
  width: Ember.computed.alias('controller._tableContainerWidth')
});


/**
* Body Table Container
* @class
* @alias Ember.Table.BodyTableContainer
* @mixes Ember.MouseWheelHandlerMixin
* @mixes Ember.TouchMoveHandlerMixin
* @mixes Ember.ScrollHandlerMixin
 */

Ember.Table.BodyTableContainer = Ember.Table.TableContainer.extend(Ember.MouseWheelHandlerMixin, Ember.TouchMoveHandlerMixin, Ember.ScrollHandlerMixin, Ember.Table.ShowHorizontalScrollMixin, {
  templateName: 'body-container',
  classNames: ['ember-table-table-container', 'ember-table-body-container', 'antiscroll-wrap'],
  height: Ember.computed.alias('controller._bodyHeight'),
  width: Ember.computed.alias('controller._width'),
  scrollTop: Ember.computed.alias('controller._tableScrollTop'),
  scrollLeft: Ember.computed.alias('controller._tableScrollLeft'),
  scrollElementSelector: '.antiscroll-inner',

  /**
  * On scroll callback
  * @memberof Ember.Table.BodyTableContainer
  * @instance
  * @argument event jQuery event
   */
  onScroll: function(event) {
    this.set('scrollTop', event.target.scrollTop);
    event.preventDefault();
  },

  /**
  * On mouse wheel callback callback
  * @memberof Ember.Table.BodyTableContainer
  * @instance
  * @argument event jQuery event
  * @argument delta
  * @argument deltaX {Integer}
  * @argument deltaY {Integer}
   */
  onMouseWheel: function(event, delta, deltaX, deltaY) {
    if (Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }
    var scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() + deltaX;
    this.set('scrollLeft', scrollLeft);
    event.preventDefault();
  },

  /**
  * On touch move callback
  * @memberof Ember.Table.BodyTableContainer
  * @instance
  * @argument event jQuery event
  * @argument deltaX {Integer}
  * @argument deltaY {Integer}
   */
  onTouchMove: function(event, deltaX, deltaY) {
    if (Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }
    var scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() + deltaX;
    this.set('scrollLeft', scrollLeft);
    event.preventDefault();
  }
});


/**
* Footer Table Container
* @class
* @alias Ember.Table.FooterTableContainer
* @mixes Ember.MouseWheelHandlerMixin
* @mixes Ember.TouchMoveHandlerMixin
 */

Ember.Table.FooterTableContainer = Ember.Table.TableContainer.extend(Ember.MouseWheelHandlerMixin, Ember.TouchMoveHandlerMixin, Ember.Table.ShowHorizontalScrollMixin, {
  templateName: 'footer-container',
  classNames: ['ember-table-table-container', 'ember-table-fixed-table-container', 'ember-table-footer-container'],
  styleBindings: 'top',
  height: Ember.computed.alias('controller.footerHeight'),
  width: Ember.computed.alias('controller._tableContainerWidth'),
  scrollLeft: Ember.computed.alias('controller._tableScrollLeft'),
  top: Ember.computed(function() {
    var headerHeight = this.get('controller._headerHeight');
    var contentHeight = this.get('controller._tableContentHeight') + headerHeight;
    var bodyHeight = this.get('controller._bodyHeight') + headerHeight;
    if (contentHeight < bodyHeight) {
      return contentHeight;
    } else {
      return bodyHeight;
    }
  }).property('controller._bodyHeight', 'controller._headerHeight', 'controller._tableContentHeight'),
  onMouseWheel: function(event, delta, deltaX, deltaY) {
    var scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() + deltaX;
    this.set('scrollLeft', scrollLeft);
    event.preventDefault();
  },
  onTouchMove: function(event, deltaX, deltaY) {
    var scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() + deltaX;
    this.set('scrollLeft', scrollLeft);
    event.preventDefault();
  }
});


/**
* Scroll Container
* @class
* @alias Ember.Table.ScrollContainer
* @mixes Ember.AddeparMixins.StyleBindingsMixin
* @mixes Ember.ScrollHandlerMixin
 */

Ember.Table.ScrollContainer = Ember.View.extend(Ember.AddeparMixins.StyleBindingsMixin, Ember.ScrollHandlerMixin, {
  templateName: 'scroll-container',
  classNames: ['ember-table-scroll-container'],
  styleBindings: ['left', 'width', 'height'],
  scrollElementSelector: '.antiscroll-inner',
  width: Ember.computed.alias('controller._scrollContainerWidth'),
  height: 10,
  left: Ember.computed.alias('controller._fixedColumnsWidth'),
  scrollTop: Ember.computed.alias('controller._tableScrollTop'),
  scrollLeft: Ember.computed.alias('controller._tableScrollLeft'),

  /**
  * On scroll callback
  * @memberof Ember.Table.ScrollContainer
  * @instance
  * @argument event jQuery event
   */
  onScroll: function(event) {
    this.set('scrollLeft', event.target.scrollLeft);
    event.preventDefault();
  },

  /**
  * On scroll left did change observer
  * @memberof Ember.Table.ScrollContainer
  * @instance
   */
  onScrollLeftDidChange: function() {
    var selector = this.get('scrollElementSelector');
    this.$(selector).scrollLeft(this.get('scrollLeft'));
  }.observes('scrollLeft', 'scrollElementSelector').on('didInsertElement')
});


/**
* ScrollPanel
* @class
* @alias Ember.Table.ScrollPanel
* @mixes Ember.AddeparMixins.StyleBindingsMixin
 */

Ember.Table.ScrollPanel = Ember.View.extend(Ember.AddeparMixins.StyleBindingsMixin, {
  classNames: ['ember-table-scroll-panel'],
  styleBindings: ['width', 'height'],
  width: Ember.computed.alias('controller._tableColumnsWidth'),
  height: Ember.computed.alias('controller._tableContentHeight')
});
