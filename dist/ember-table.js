/*!
* ember-table v0.5.1
* Copyright 2012-2015 Addepar Inc.
* See LICENSE.md
*/
(function(){;
var define, requireModule, require, requirejs;

(function() {

  var _isArray;
  if (!Array.isArray) {
    _isArray = function (x) {
      return Object.prototype.toString.call(x) === "[object Array]";
    };
  } else {
    _isArray = Array.isArray;
  }
  
  var registry = {}, seen = {}, state = {};
  var FAILED = false;

  define = function(name, deps, callback) {
  
    if (!_isArray(deps)) {
      callback = deps;
      deps     =  [];
    }
  
    registry[name] = {
      deps: deps,
      callback: callback
    };
  };

  function reify(deps, name, seen) {
    var length = deps.length;
    var reified = new Array(length);
    var dep;
    var exports;

    for (var i = 0, l = length; i < l; i++) {
      dep = deps[i];
      if (dep === 'exports') {
        exports = reified[i] = seen;
      } else {
        reified[i] = require(resolve(dep, name));
      }
    }

    return {
      deps: reified,
      exports: exports
    };
  }

  requirejs = require = requireModule = function(name) {
    if (state[name] !== FAILED &&
        seen.hasOwnProperty(name)) {
      return seen[name];
    }

    if (!registry[name]) {
      throw new Error('Could not find module ' + name);
    }

    var mod = registry[name];
    var reified;
    var module;
    var loaded = false;

    seen[name] = { }; // placeholder for run-time cycles

    try {
      reified = reify(mod.deps, name, seen[name]);
      module = mod.callback.apply(this, reified.deps);
      loaded = true;
    } finally {
      if (!loaded) {
        state[name] = FAILED;
      }
    }

    return reified.exports ? seen[name] : (seen[name] = module);
  };

  function resolve(child, name) {
    if (child.charAt(0) !== '.') { return child; }

    var parts = child.split('/');
    var nameParts = name.split('/');
    var parentBase;

    if (nameParts.length === 1) {
      parentBase = nameParts;
    } else {
      parentBase = nameParts.slice(0, -1);
    }

    for (var i = 0, l = parts.length; i < l; i++) {
      var part = parts[i];

      if (part === '..') { parentBase.pop(); }
      else if (part === '.') { continue; }
      else { parentBase.push(part); }
    }

    return parentBase.join('/');
  }

  requirejs.entries = requirejs._eak_seen = registry;
  requirejs.clear = function(){
    requirejs.entries = requirejs._eak_seen = registry = {};
    seen = state = {};
  };
})();

;define("ember-table/components/ember-table", 
  ["ember","ember-table/mixins/style-bindings","ember-table/mixins/resize-handler","ember-table/controllers/row-array","ember-table/controllers/row","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var StyleBindingsMixin = __dependency2__["default"];
    var ResizeHandlerMixin = __dependency3__["default"];
    var RowArrayController = __dependency4__["default"];
    var Row = __dependency5__["default"];

    __exports__["default"] = Ember.Component.extend(
    StyleBindingsMixin, ResizeHandlerMixin, {
      classNames: ['ember-table-tables-container'],
      classNameBindings: ['enableContentSelection:ember-table-content-selectable'],

      // ---------------------------------------------------------------------------
      // API - Inputs
      // ---------------------------------------------------------------------------

      // Values which are bound to the table's style attr. See
      // `Ember.StyleBindingsMixin` documentation for more details.
      styleBindings: ['height'],

      // An array of row objects. Usually a hash where the keys are column names
      // and the values are the rows's values. However, could be any object, since
      // each column can define a function to return the column value given the row
      // object. See `Ember.Table.ColumnDefinition.getCellContent`.
      content: [],

      // An array of column definitions: see `Ember.Table.ColumnDefinition`. Allows
      // each column to have its own configuration.
      // TODO(new-api): Rename to `data`
      columns: null,

      // The number of fixed columns on the left side of the table. Fixed columns
      // are always visible, even when the table is scrolled horizontally.
      numFixedColumns: 0,

      // The number of footer rows in the table. Footer rows appear at the bottom of
      // the table and are always visible.
      // TODO(new-api): Rename to `numFooterRows`
      numFooterRow: 0,

      // The row height in pixels. A consistent row height is necessary to calculate
      // which rows are being shown, to enable lazy rendering.
      // TODO: Currently must be kept in sync with the LESS file.
      rowHeight: 30,

      // The minimum header height in pixels. Headers will grow in height if given
      // more content than they can display.
      // TODO: Currently must be kept in sync with the LESS file.
      minHeaderHeight: 30,

      // The footer height in pixels.
      // TODO: Currently must be kept in sync with the LESS file.
      footerHeight: 30,

      // Enables or disables the header block.
      hasHeader: true,

      // Enables or disables the footer block.
      // TODO(new-api): Control this via `numFooterRows` and remove from API
      hasFooter: true,

      enableColumnReorder: true,

      // Allow users to select the content of table cells.
      enableContentSelection: false,

      // Sets which column resizing behavior to use. Possible values are
      // <code>'standard'</code> (resizing a column pushes or pulls all other
      // columns) and <code>'fluid'</code> (resizing a column steals width from
      // neighboring columns).
      columnMode: 'standard',

      // Sets which row selection behavior to follow. Possible values are 'none'
      // (clicking on a row does nothing), 'single' (clicking on a row selects it
      // and deselects other rows), and 'multiple' (multiple rows can be selected
      // through ctrl/cmd-click or shift-click).
      selectionMode: 'single',

      // ---------------------------------------------------------------------------
      // API - Outputs
      // ---------------------------------------------------------------------------

      // An array of the rows currently selected. If `selectionMode` is set to
      // 'single', the array will contain either one or zero elements.
      selection: Ember.computed(function(key, val) {
        var selectionMode = this.get('selectionMode');
        if (arguments.length > 1 && val) {
          this.get('persistedSelection').clear();
          this.get('rangeSelection').clear();
          switch (selectionMode) {
            case 'single':
              this.get('persistedSelection').addObject(val);
              break;
            case 'multiple':
              this.get('persistedSelection').addObjects(val);
          }
        }
        var selection = this.get('persistedSelection').copy().addObjects(this.get('rangeSelection'));
        switch (selectionMode) {
          case 'none':
            return null;
          case 'single':
            return selection[0] || null;
          case 'multiple':
            return selection;
        }
      }).property('persistedSelection.[]', 'rangeSelection.[]', 'selectionMode'),

      // ---------------------------------------------------------------------------
      // Internal properties
      // ---------------------------------------------------------------------------

      // Special flag used by child views to look up this component using
      // nearestWithProperty()
      isEmberTable: true,

      columnsFillTable: true,

      // _resolvedContent is an intermediate property between content and rows
      // This allows content to be a plain array or a promise resolving to an array
      _resolvedContent: function(key, value) {
        if (arguments.length > 1) {
          return value;
        } else {
          var _this = this;
          value = [];

          var content = this.get('content');
          if (content.then)
          {
            // content is a promise
            content.then(function(resolvedContent) {
              // when the promise resolves, set this property so it gets cached
              _this.set('_resolvedContent', resolvedContent);

              // if the promise resolves immediately, set `value` so we return
              // the resolved value and not []
              value = resolvedContent;
            });

            // returns [] if the promise doesn't resolve immediately, or 
            // the resolved value if it's ready
            return value;
          }
          else
          {
            // content is not a promise
            return content;
          }
        }
      }.property('content'),

      init: function() {
        this._super();
        if (!Ember.$.ui) {
          throw 'Missing dependency: jquery-ui';
        }
        if (!Ember.$().mousewheel) {
          throw 'Missing dependency: jquery-mousewheel';
        }
        if (!Ember.$().antiscroll) {
          throw 'Missing dependency: antiscroll.js';
        }
        this.prepareTableColumns();
      },

      height: Ember.computed.alias('_tablesContainerHeight'),

      // TODO(new-api): eliminate view alias
      // specify the view class to use for rendering the table rows
      tableRowView: 'table-row',
      tableRowViewClass: Ember.computed.alias('tableRowView'),

      onColumnSort: function(column, newIndex) {
        // Fixed columns are not affected by column reordering
        var numFixedColumns = this.get('fixedColumns.length');
        var columns = this.get('columns');
        columns.removeObject(column);
        columns.insertAt(numFixedColumns + newIndex, column);
        this.prepareTableColumns();
      },

      // An array of Ember.Table.Row computed based on `content`
      bodyContent: Ember.computed(function() {
        return RowArrayController.create({
          target: this,
          parentController: this,
          container: this.get('container'),
          itemController: Row,
          content: this.get('_resolvedContent')
        });
      }).property('_resolvedContent.[]'),

      // An array of Ember.Table.Row
      footerContent: Ember.computed(function(key, value) {
        if (value) {
          return value;
        } else {
          return Ember.A();
        }
      }).property(),

      fixedColumns: Ember.computed(function() {
        var columns = this.get('columns');
        if (!columns) {
          return Ember.A();
        }
        var numFixedColumns = this.get('numFixedColumns') || 0;
        return columns.slice(0, numFixedColumns) || [];
      }).property('columns.[]', 'numFixedColumns'),

      tableColumns: Ember.computed(function() {
        var columns = this.get('columns');
        if (!columns) {
          return Ember.A();
        }
        var numFixedColumns = this.get('numFixedColumns') || 0;
        return columns.slice(numFixedColumns, columns.get('length')) || [];
      }).property('columns.[]', 'numFixedColumns'),

      prepareTableColumns: function() {
        var _this = this;
        var columns = this.get('columns') || Ember.A();
        columns.setEach('controller', this);
        columns.forEach(function(col, i) {
          col.set('nextResizableColumn', _this.getNextResizableColumn(columns, i));
        });
      },

      getNextResizableColumn: function(columns, index) {
        var column;
        while (index < columns.length) {
          index += 1;
          column = columns.objectAt(index);
          if (column != null && column.get('isResizable')) {
            return column;
          }
        }
        return null;
      },

      // ---------------------------------------------------------------------------
      // View concerns
      // ---------------------------------------------------------------------------

      didInsertElement: function() {
        this._super();
        this.set('_tableScrollTop', 0);
        this.elementSizeDidChange();
        this.doForceFillColumns();
      },

      willDestroyElement: function() {
        var antiscrollElements = this.$('.antiscroll-wrap');
        var antiscroll;
        antiscrollElements.each(function(i, antiscrollElement) {
          antiscroll = Ember.$(antiscrollElement).data('antiscroll');
          if (antiscroll) {
            antiscroll.destroy();
            Ember.$(antiscrollElement).removeData('antiscroll');
          }
        });
        this._super();
      },

      onResizeEnd: function() {
        // We need to put this on the run loop, because resize event came from
        // window. Otherwise, we get this warning when used in tests. You have
        // turned on testing mode, which disabled the run-loop's autorun. You
        // will need to wrap any code with asynchronous side-effects in an
        // Ember.run
        if (this.tableWidthNowTooSmall()) {
          this.set('columnsFillTable', true);
        }
        Ember.run(this, this.elementSizeDidChange);
      },

      elementSizeDidChange: function() {
        if ((this.get('_state') || this.get('state')) !== 'inDOM') {
          return;
        }
        this.set('_width', this.$().parent().width());
        this.set('_height', this.$().parent().height());
        // we need to wait for the table to be fully rendered before antiscroll can
        // be used
        Ember.run.next(this, this.updateLayout);
      },

      tableWidthNowTooSmall: function() {
        if ((this.get('_state') || this.get('state')) !== 'inDOM') {
          return false;
        }
        var oldTableWidth = this.get('_width');
        var newTableWidth = this.$().parent().width();
        // TODO(azirbel): This should be 'columns', I believe. Fix separately.
        var totalColumnWidth = this._getTotalWidth(this.get('tableColumns'));
        return (oldTableWidth > totalColumnWidth) && (newTableWidth < totalColumnWidth);
      },

      updateLayout: function() {
        if ((this.get('_state') || this.get('state')) !== 'inDOM') {
          return;
        }
        // updating antiscroll
        this.$('.antiscroll-wrap').antiscroll().data('antiscroll').rebuild();
        if (this.get('columnsFillTable')) {
          this.doForceFillColumns();
        }
      },

      // Iteratively adjusts column widths to adjust to a changed table width.
      // Attempts to scale columns proportionally. However, if a column hits a min
      // or max width after scaling proportionally, we need to respect that setting.
      // In that case, keep iterating until all column widths are set to the best
      // they can be. Note that this may fail to arrive at the table width if the
      // resizable columns are all restricted by min/max widths.
      doForceFillColumns: function() {
        var allColumns = this.get('columns');
        var columnsToResize = allColumns.filterProperty('canAutoResize');
        var unresizableColumns = allColumns.filterProperty('canAutoResize', false);
        var availableWidth = this.get('_width') - this._getTotalWidth(unresizableColumns);
        var doNextLoop = true;
        var nextColumnsToResize = [];
        var totalResizableWidth;
        var newWidth;

        while (doNextLoop) {
          doNextLoop = false;
          nextColumnsToResize = [];
          totalResizableWidth = this._getTotalWidth(columnsToResize);
          /*jshint loopfunc:true */
          // TODO(azirbel): Revisit JSHint error above
          columnsToResize.forEach(function(column) {
            newWidth = Math.floor((column.get('width') / totalResizableWidth) * availableWidth);
            if (newWidth < column.get('minWidth')) {
              doNextLoop = true;
              column.set('width', column.get('minWidth'));
              availableWidth -= column.get('width');
            } else if (newWidth > column.get('maxWidth')) {
              doNextLoop = true;
              column.set('width', column.get('maxWidth'));
              availableWidth -= column.get('width');
            } else {
              column.set('width', newWidth);
              nextColumnsToResize.pushObject(column);
            }
            columnsToResize = nextColumnsToResize;
          });
        }
      },

      onBodyContentLengthDidChange: Ember.observer(function() {
        Ember.run.next(this, function() {
          Ember.run.once(this, this.updateLayout);
        });
      }, 'bodyContent.length'),

      // ---------------------------------------------------------------------------
      // Private variables
      // ---------------------------------------------------------------------------

      _tableScrollTop: 0,
      _tableScrollLeft: 0,

      _width: null,
      _height: null,
      _contentHeaderHeight: null,

      _hasVerticalScrollbar: Ember.computed(function() {
        var height = this.get('_height');
        var contentHeight = this.get('_tableContentHeight') +
            this.get('_headerHeight') + this.get('_footerHeight');
        return height < contentHeight;
      }).property('_height', '_tableContentHeight', '_headerHeight',
          '_footerHeight'),

      _hasHorizontalScrollbar: Ember.computed(function() {
        var contentWidth = this.get('_tableColumnsWidth');
        var tableWidth = this.get('_width') - this.get('_fixedColumnsWidth');
        return contentWidth > tableWidth;
      }).property('_tableColumnsWidth', '_width', '_fixedColumnsWidth'),

      // tables-container height adjusts to the content height
      _tablesContainerHeight: Ember.computed(function() {
        var height = this.get('_height');
        var contentHeight = this.get('_tableContentHeight') +
            this.get('_headerHeight') + this.get('_footerHeight');
        return Math.min(contentHeight, height);
      }).property('_height', '_tableContentHeight', '_headerHeight',
          '_footerHeight'),

      // Actual width of the fixed columns
      _fixedColumnsWidth: Ember.computed(function() {
        return this._getTotalWidth(this.get('fixedColumns'));
      }).property('fixedColumns.@each.width'),

      // Actual width of the (non-fixed) columns
      _tableColumnsWidth: Ember.computed(function() {
        // Hack: We add 3px padding to the right of the table content so that we can
        // reorder into the last column.
        var contentWidth = this._getTotalWidth(this.get('tableColumns')) + 3;
        var availableWidth = this.get('_width') - this.get('_fixedColumnsWidth');
        return Math.max(contentWidth, availableWidth);
      }).property('tableColumns.@each.width', '_width', '_fixedColumnsWidth'),

      _rowWidth: Ember.computed(function() {
        var columnsWidth = this.get('_tableColumnsWidth');
        var nonFixedTableWidth = this.get('_tableContainerWidth') -
            this.get('_fixedColumnsWidth');
        return Math.max(columnsWidth, nonFixedTableWidth);
      }).property('_fixedColumnsWidth', '_tableColumnsWidth',
          '_tableContainerWidth'),

      // Dynamic header height that adjusts according to the header content height
      _headerHeight: Ember.computed(function() {
        var minHeight = this.get('minHeaderHeight');
        var contentHeaderHeight = this.get('_contentHeaderHeight');
        return Math.max(contentHeaderHeight, minHeight);
      }).property('_contentHeaderHeight', 'minHeaderHeight'),

      // Dynamic footer height that adjusts according to the footer content height
      _footerHeight: Ember.computed(function() {
        return this.get('hasFooter') ? this.get('footerHeight') : 0;
      }).property('footerHeight', 'hasFooter'),

      _bodyHeight: Ember.computed(function() {
        var bodyHeight = this.get('_tablesContainerHeight');
        if (this.get('hasHeader')) {
          bodyHeight -= this.get('_headerHeight');
        }
        if (this.get('hasFooter')) {
          bodyHeight -= this.get('footerHeight');
        }
        return bodyHeight;
      }).property('_tablesContainerHeight', '_hasHorizontalScrollbar',
          '_headerHeight', 'footerHeight', 'hasHeader', 'hasFooter'),

      _tableBlockWidth: Ember.computed(function() {
        return this.get('_width') - this.get('_fixedColumnsWidth');
      }).property('_width', '_fixedColumnsWidth'),

      _fixedBlockWidthBinding: '_fixedColumnsWidth',

      _tableContentHeight: Ember.computed(function() {
        return this.get('rowHeight') * this.get('bodyContent.length');
      }).property('rowHeight', 'bodyContent.length'),

      _tableContainerWidth: Ember.computed(function() {
        return this.get('_width');
      }).property('_width'),

      _scrollContainerWidth: Ember.computed(function() {
        return this.get('_width') - this.get('_fixedColumnsWidth');
      }).property('_width', '_fixedColumnsWidth'),

      _numItemsShowing: Ember.computed(function() {
        return Math.floor(this.get('_bodyHeight') / this.get('rowHeight'));
      }).property('_bodyHeight', 'rowHeight'),

      _startIndex: Ember.computed(function() {
        var numContent = this.get('bodyContent.length');
        var numViews = this.get('_numItemsShowing');
        var rowHeight = this.get('rowHeight');
        var scrollTop = this.get('_tableScrollTop');
        var index = Math.floor(scrollTop / rowHeight);
        // Adjust start index so that end index doesn't exceed content length
        if (index + numViews >= numContent) {
          index = numContent - numViews;
        }
        return Math.max(index, 0);
      }).property('bodyContent.length', '_numItemsShowing', 'rowHeight',
          '_tableScrollTop'),

      _getTotalWidth: function(columns, columnWidthPath) {
        if (columnWidthPath == null) {
          columnWidthPath = 'width';
        }
        if (!columns) {
          return 0;
        }
        var widths = columns.getEach(columnWidthPath) || [];
        return widths.reduce((function(total, w) {
          return total + w;
        }), 0);
      },

      // ---------------------------------------------------------------------------
      // Selection
      // TODO: Make private or reorganize into a new section
      // ---------------------------------------------------------------------------

      lastSelected: null,

      isSelected: function(row) {
        switch (this.get('selectionMode')) {
          case 'none':
            return false;
          case 'single':
            return this.get('selection') === row.get('content');
          case 'multiple':
            return this.get('selection').contains(row.get('content'));
        }
      },

      setSelected: function(row, val) {
        this.persistSelection();
        var item = row.get('content');
        if (val) {
          return this.get('persistedSelection').addObject(item);
        } else {
          return this.get('persistedSelection').removeObject(item);
        }
      },

      // items that were selected directly or as part of a previous
      // range selection (shift-click)
      persistedSelection: Ember.computed(function() {
        return Ember.A();
      }),

      // items that are part of the currently editable range selection
      rangeSelection: Ember.computed(function() {
        return Ember.A();
      }),

      // TODO: Handle click event in the row view
      click: function(event) {
        var row = this.getRowForEvent(event);
        if (!row || !row.get('content')) {
          return;
        }
        var item = row.get('content');
        switch (this.get('selectionMode')) {
          case 'none':
            break;
          case 'single':
            this.get('persistedSelection').clear();
            this.get('persistedSelection').addObject(item);
            break;
          case 'multiple':
            if (event.shiftKey) {
              this.get('rangeSelection').clear();

              var lastIndex = this.rowIndex(this.get('lastSelected'));
              // If the last selected row is no longer in the table, use the
              // first row in the table
              if (lastIndex === -1) {
                lastIndex = 0;
              }

              var curIndex = this.rowIndex(this.getRowForEvent(event));
              var minIndex = Math.min(lastIndex, curIndex);
              var maxIndex = Math.max(lastIndex, curIndex);

              this.get('rangeSelection').addObjects(
                this.get('bodyContent').slice(minIndex, maxIndex + 1)
                .mapBy('content')
              );
            } else {
              if (!event.ctrlKey && !event.metaKey) {
                this.get('persistedSelection').clear();
                this.get('rangeSelection').clear();
              } else {
                this.persistSelection();
              }
              if (this.get('persistedSelection').contains(item)) {
                this.get('persistedSelection').removeObject(item);
              } else {
                this.get('persistedSelection').addObject(item);
              }
              this.set('lastSelected', row);
            }
            break;
        }
      },

      findRow: function(content) {
        // TODO(azirbel): Replace with filter
        this.get('bodyContent').forEach(function(row) {
          if (row.get('content') === content) {
            return row;
          }
        });
        return null;
      },

      rowIndex: function(row) {
        if (!this.get('bodyContent')) {
          return null;
        }
        return this.get('bodyContent').indexOf(row);
      },

      persistSelection: function() {
        this.get('persistedSelection').addObjects(this.get('rangeSelection'));
        this.get('rangeSelection').clear();
      },

      getRowForEvent: function(event) {
        var $rowView = Ember.$(event.target).parents('.ember-table-table-row');
        var view = Ember.View.views[$rowView.attr('id')];
        if (view) {
          return view.get('row');
        }
        return null;
      },

      // TODO(azirbel): Document
      actions: {
        addColumn: Ember.K,
        sortByColumn: Ember.K
      }
    });
  });
;define("ember-table/mixins/style-bindings", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    // TODO(azirbel): This needs to be an external dependency.
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Mixin.create({
      concatenatedProperties: ['styleBindings'],
      attributeBindings: ['style'],
      unitType: 'px',
      createStyleString: function(styleName, property) {
        var value;
        value = this.get(property);
        if (Ember.isNone(value)) {
          return;
        }
        if (Ember.typeOf(value) === 'number') {
          value = value + this.get('unitType');
        }
        return Ember.String.dasherize("" + styleName) + ":" + value + ";";
      },
      applyStyleBindings: Ember.on('init',
        Ember.observer('styleBindings', function() {
        var lookup, properties, styleBindings, styleComputed, styles,
          _this = this;
        styleBindings = this.get('styleBindings');
        if (!styleBindings) {
          return;
        }
        lookup = {};
        styleBindings.forEach(function(binding) {
          var property, style, tmp;
          tmp = binding.split(':');
          property = tmp[0];
          style = tmp[1];
          lookup[style || property] = property;
        });
        styles = Ember.keys(lookup);
        properties = styles.map(function(style) {
          return lookup[style];
        });
        styleComputed = Ember.computed(function() {
          var styleString, styleTokens;
          styleTokens = styles.map(function(style) {
            return _this.createStyleString(style, lookup[style]);
          });
          styleString = styleTokens.join('');
          if (styleString.length !== 0) {
            return styleString.htmlSafe().toString();
          }
        });
        styleComputed.property.apply(styleComputed, properties);
        return Ember.defineProperty(this, 'style', styleComputed);
      }))
    });
  });
;define("ember-table/mixins/resize-handler", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    // TODO(azirbel): This needs to be an external dependency.
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Mixin.create({
      resizeEndDelay: 200,
      resizing: false,
      onResizeStart: Ember.K,
      onResizeEnd: Ember.K,
      onResize: Ember.K,

      endResize: Ember.computed(function() {
        return function(event) {
          if (this.isDestroyed) {
            return;
          }
          this.set('resizing', false);
          return typeof this.onResizeEnd === "function" ? this.onResizeEnd(event) : void 0;
        };
      }),

      handleWindowResize: function(event) {
        if ((typeof event.target.id !== "undefined" && event.target.id !== null) &&
            (event.target.id !== this.elementId)) {
          return;
        }
        if (!this.get('resizing')) {
          this.set('resizing', true);
          if (typeof this.onResizeStart === "function") {
            this.onResizeStart(event);
          }
        }
        if (typeof this.onResize === "function") {
          this.onResize(event);
        }
        return Ember.run.debounce(this, this.get('endResize'), event, this.get('resizeEndDelay'));
      },

      didInsertElement: function() {
        this._super();
        return this._setupDocumentHandlers();
      },

      willDestroyElement: function() {
        this._removeDocumentHandlers();
        return this._super();
      },

      _setupDocumentHandlers: function() {
        if (this._resizeHandler) {
          return;
        }
        this._resizeHandler = Ember.$.proxy(this.get('handleWindowResize'), this);
        return Ember.$(window).on("resize." + this.elementId, this._resizeHandler);
      },

      _removeDocumentHandlers: function() {
        Ember.$(window).off("resize." + this.elementId, this._resizeHandler);
        return this._resizeHandler = null;
      }
    });
  });
;define("ember-table/controllers/row-array", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.ArrayController.extend({
      itemController: null,
      content: null,
      lastItem: null,

      rowContent: Ember.computed(function() {
        return [];
      }).property(),

      controllerAt: function(idx, object) {
        var subControllers = this.get('_subControllers');
        var subController = subControllers[idx];
        if (subController) {
          return subController;
        }
        subController = this.get('itemController').create({
          target: this,
          parentController: this.get('parentController') || this,
          content: object
        });
        subControllers[idx] = subController;

        // Keep track of the last row. Because we only use last row status to apply
        // CSS styles, we only need to know which row is the last row when the row
        // is loaded/scrolled into view. At that time, we update the `lastItem`
        // property. This avoids the problem where the last row's data is always
        // loaded (e.g. in the AJAX table). See issue #165.
        if (this._isLastItem(idx)) {
          this.set('lastItem', subController);
        }
        return subController;
      },

      _isLastItem: function(idx) {
        return this.get('content').length - 1 === idx;
      }
    });
  });
;define("ember-table/controllers/row", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.ObjectProxy.extend({
      content: null,

      isShowing: true,
      isHovered: false,

      isSelected: Ember.computed(function(key, val) {
        if (arguments.length > 1) {
          this.get('parentController').setSelected(this, val);
        }
        return this.get('parentController').isSelected(this);
      }).property('parentController.selection.[]')
    });
  });
;define("ember-table/mixins/mouse-wheel-handler", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Mixin.create({
      onMouseWheel: Ember.K,

      didInsertElement: function() {
        var _this = this;
        this._super();
        this.$().bind('mousewheel', function(event, delta, deltaX, deltaY) {
          Ember.run(_this, _this.onMouseWheel, event, delta, deltaX, deltaY);
        });
      },

      willDestroyElement: function() {
        var $elem = this.$();
        if ($elem) {
          $elem.unbind('mousewheel');
        }
        this._super();
      }
    });
  });
;define("ember-table/mixins/register-table-component", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    // Gives views access to the table component. With the current architecture,
    // this is necessary because views need access to the component's properties
    // (like height and columnMode) and may even need to call component functions
    // (trigger refresh layout).
    //
    // It is possible to override this behavior by passing your own tableComponent
    // to the views instead.
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Mixin.create({
      tableComponent: null,

      init: function() {
        if (!this.get('tableComponent')) {
          this.set('tableComponent', this.nearestWithProperty('isEmberTable'));
        }
        return this._super();
      }
    });
  });
;define("ember-table/mixins/scroll-handler", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Mixin.create({
      onScroll: Ember.K,
      scrollElementSelector: '',

      didInsertElement: function() {
        var _this = this;
        this._super();
        this.$(this.get('scrollElementSelector')).bind('scroll', function(event) {
          Ember.run(_this, _this.onScroll, event);
        });
      },

      willDestroyElement: function() {
        var $scrollElementSelector = this.$(this.get('scrollElementSelector'));
        if ($scrollElementSelector) {
          $scrollElementSelector.unbind('scroll');
        }
        this._super();
      }
    });
  });
;define("ember-table/mixins/show-horizontal-scroll", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    // HACK: We want the horizontal scroll to show on mouse enter and leave.
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Mixin.create({
      mouseEnter: function(event) {
        var $tablesContainer =
            Ember.$(event.target).parents('.ember-table-tables-container');
        var $horizontalScroll =
            $tablesContainer.find('.antiscroll-scrollbar-horizontal');
        $horizontalScroll.addClass('antiscroll-scrollbar-shown');
      },

      mouseLeave: function(event) {
        var $tablesContainer =
            Ember.$(event.target).parents('.ember-table-tables-container');
        var $horizontalScroll =
            $tablesContainer.find('.antiscroll-scrollbar-horizontal');
        $horizontalScroll.removeClass('antiscroll-scrollbar-shown');
      }
    });
  });
;define("ember-table/mixins/touch-move-handler", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Mixin.create({
      onTouchMove: Ember.K,

      didInsertElement: function() {
        var _this = this;
        var startX = 0;
        var startY = 0;

        this._super();

        this.$().bind('touchstart', function(event) {
          startX = event.originalEvent.targetTouches[0].pageX;
          startY = event.originalEvent.targetTouches[0].pageY;
        });

        this.$().bind('touchmove', function(event) {
          var newX = event.originalEvent.targetTouches[0].pageX;
          var newY = event.originalEvent.targetTouches[0].pageY;
          var deltaX = -(newX - startX);
          var deltaY = -(newY - startY);
          Ember.run(_this, _this.onTouchMove, event, deltaX, deltaY);
          startX = newX;
          startY = newY;
        });
      },

      willDestroyElement: function() {
        this.$().unbind('touchstart');
        this.$().unbind('touchmove');
        this._super();
      }
    });
  });
;define("ember-table/models/column-definition", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Object.extend({
      // ---------------------------------------------------------------------------
      // API - Inputs
      // ---------------------------------------------------------------------------

      // Name of the column, to be displayed in the header.
      // TODO(new-api): Change to `columnName`
      headerCellName: undefined,

      // Path of the content for this cell. If the row object is a hash of keys
      // and values to specify data for each column, `contentPath` corresponds to
      // the key.
      contentPath: undefined,

      // Minimum column width. Affects both manual resizing and automatic resizing.
      minWidth: 25,

      // Maximum column width. Affects both manual resizing and automatic resizing.
      maxWidth: undefined,

      // The initial column width in pixels. Updated whenever the column (not
      // window) is resized. Can be persisted.
      savedWidth: 150,

      // Whether the column can be manually resized.
      isResizable: true,

      // Whether the column can be rearranged with other columns. Only matters if
      // the table's `enableColumnReorder` property is set to true (the default).
      // TODO(new-api): Rename to `isReorderable`
      isSortable: true,

      // Alignment of the text in the cell. Possible values are "left", "center",
      // and "right".
      textAlign: 'text-align-right',

      // Whether the column can automatically resize to fill space in the table.
      canAutoResize: false,

      // TODO(new-api): Remove `headerCellViewClass`
      // Override to specify a custom view to use for the header cell.
      headerCellView: 'header-cell',
      headerCellViewClass: Ember.computed.alias('headerCellView'),

      // TODO(new-api): Remove `tableCellViewClass`
      // Override to specify a custom view to use for table cells.
      tableCellView: 'table-cell',
      tableCellViewClass: Ember.computed.alias('tableCellView'),

      // Override to customize how the column gets data from each row object.
      // Given a row, should return a formatted cell value, e.g. $20,000,000.
      getCellContent: function(row) {
        var path = this.get('contentPath');
        Ember.assert("You must either provide a contentPath or override " +
                     "getCellContent in your column definition", path != null);
        return Ember.get(row, path);
      },

      // Override to maintain a consistent path to update cell values.
      // Recommended to make this a function which takes (row, value) and updates
      // the row value.
      setCellContent: Ember.K,

      // ---------------------------------------------------------------------------
      // Internal properties
      // ---------------------------------------------------------------------------

      // In most cases, should be set by the table and not overridden externally.
      // Instead, use savedWidth and minWidth/maxWidth along with resize behavior.
      width: Ember.computed.oneWay('savedWidth'),

      // Not part of the official API, but can be overridden if you need custom
      // behavior (e.g. persistence) when the column is resized, and `savedWidth`
      // doesn't solve your problem.
      resize: function(width) {
        this.set('savedWidth', width);
        this.set('width', width);
      },

      // Set when the table is initialized. Used to resize columns by stealing
      // width from the next column to the right.
      nextColumn: null,
      prevColumn: null,

      isAtMinWidth: Ember.computed(function() {
        return this.get('width') === this.get('minWidth');
      }).property('width', 'minWidth'),

      isAtMaxWidth: Ember.computed(function() {
        return this.get('width') === this.get('maxWidth');
      }).property('width', 'maxWidth')
    });
  });
;define("ember-table/templates/body-table-container", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n        ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "lazy-table-block", {hash:{
        'classNames': ("ember-table-left-table-block"),
        'content': ("bodyContent"),
        'columns': ("fixedColumns"),
        'width': ("_fixedBlockWidth"),
        'numItemsShowing': ("_numItemsShowing"),
        'scrollTop': ("_scrollTop"),
        'startIndex': ("_startIndex")
      },hashTypes:{'classNames': "STRING",'content': "ID",'columns': "ID",'width': "ID",'numItemsShowing': "ID",'scrollTop': "ID",'startIndex': "ID"},hashContexts:{'classNames': depth0,'content': depth0,'columns': depth0,'width': depth0,'numItemsShowing': depth0,'scrollTop': depth0,'startIndex': depth0},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push("\n      ");
      return buffer;
      }

      data.buffer.push("<div class=\"antiscroll-box\">\n  <div class=\"antiscroll-inner\">\n    <div class=\"ember-table-table-scrollable-wrapper\">\n      ");
      stack1 = helpers['if'].call(depth0, "numFixedColumns", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "lazy-table-block", {hash:{
        'classNames': ("ember-table-right-table-block"),
        'content': ("bodyContent"),
        'columns': ("tableColumns"),
        'scrollLeft': ("_tableScrollLeft"),
        'width': ("_tableBlockWidth"),
        'numItemsShowing': ("_numItemsShowing"),
        'scrollTop': ("_scrollTop"),
        'startIndex': ("_startIndex")
      },hashTypes:{'classNames': "STRING",'content': "ID",'columns': "ID",'scrollLeft': "ID",'width': "ID",'numItemsShowing': "ID",'scrollTop': "ID",'startIndex': "ID"},hashContexts:{'classNames': depth0,'content': depth0,'columns': depth0,'scrollLeft': depth0,'width': depth0,'numItemsShowing': depth0,'scrollTop': depth0,'startIndex': depth0},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push("\n    </div>\n  </div>\n</div>\n");
      return buffer;
      
    });
  });
;define("ember-table/templates/components/ember-table", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n  ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "header-table-container", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push("\n");
      return buffer;
      }

    function program3(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n  ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "footer-table-container", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push("\n");
      return buffer;
      }

      stack1 = helpers['if'].call(depth0, "hasHeader", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "body-table-container", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push("\n");
      stack1 = helpers['if'].call(depth0, "hasFooter", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "scroll-container", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push("\n");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "column-sortable-indicator", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push("\n");
      return buffer;
      
    });
  });
;define("ember-table/templates/footer-table-container", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n    ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "table-block", {hash:{
        'classNames': ("ember-table-left-table-block"),
        'content': ("footerContent"),
        'columns': ("fixedColumns"),
        'width': ("_fixedBlockWidth"),
        'height': ("footerHeight")
      },hashTypes:{'classNames': "STRING",'content': "ID",'columns': "ID",'width': "ID",'height': "ID"},hashContexts:{'classNames': depth0,'content': depth0,'columns': depth0,'width': depth0,'height': depth0},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push("\n  ");
      return buffer;
      }

      data.buffer.push("<div class=\"ember-table-table-fixed-wrapper\">\n  ");
      stack1 = helpers['if'].call(depth0, "numFixedColumns", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "table-block", {hash:{
        'classNames': ("ember-table-right-table-block"),
        'content': ("footerContent"),
        'columns': ("tableColumns"),
        'scrollLeft': ("_tableScrollLeft"),
        'width': ("_tableBlockWidth"),
        'height': ("footerHeight")
      },hashTypes:{'classNames': "STRING",'content': "ID",'columns': "ID",'scrollLeft': "ID",'width': "ID",'height': "ID"},hashContexts:{'classNames': depth0,'content': depth0,'columns': depth0,'scrollLeft': depth0,'width': depth0,'height': depth0},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push("\n</div>\n");
      return buffer;
      
    });
  });
;define("ember-table/templates/header-cell", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression;


      data.buffer.push("<div class=\"ember-table-content-container\" ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortByColumn", "view.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(">\n  <span class=\"ember-table-content\">\n    ");
      stack1 = helpers._triageMustache.call(depth0, "view.content.headerCellName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  </span>\n</div>");
      return buffer;
      
    });
  });
;define("ember-table/templates/header-row", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', escapeExpression=this.escapeExpression;


      data.buffer.push(escapeExpression(helpers.view.call(depth0, "multi-item-collection", {hash:{
        'content': ("view.content"),
        'itemViewClassField': ("headerCellViewClass"),
        'width': ("controller._tableColumnsWidth")
      },hashTypes:{'content': "ID",'itemViewClassField': "STRING",'width': "ID"},hashContexts:{'content': depth0,'itemViewClassField': depth0,'width': depth0},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push("\n");
      return buffer;
      
    });
  });
;define("ember-table/templates/header-table-container", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n    ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "header-block", {hash:{
        'classNames': ("ember-table-left-table-block"),
        'columns': ("fixedColumns"),
        'width': ("_fixedBlockWidth"),
        'height': ("headerHeight")
      },hashTypes:{'classNames': "STRING",'columns': "ID",'width': "ID",'height': "ID"},hashContexts:{'classNames': depth0,'columns': depth0,'width': depth0,'height': depth0},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push("\n  ");
      return buffer;
      }

      data.buffer.push("<div class=\"ember-table-table-fixed-wrapper\">\n  ");
      stack1 = helpers['if'].call(depth0, "controller.numFixedColumns", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "header-block", {hash:{
        'classNames': ("ember-table-right-table-block"),
        'columns': ("tableColumns"),
        'scrollLeft': ("_tableScrollLeft"),
        'width': ("_tableBlockWidth"),
        'height': ("headerHeight")
      },hashTypes:{'classNames': "STRING",'columns': "ID",'scrollLeft': "ID",'width': "ID",'height': "ID"},hashContexts:{'classNames': depth0,'columns': depth0,'scrollLeft': depth0,'width': depth0,'height': depth0},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push("\n</div>\n");
      return buffer;
      
    });
  });
;define("ember-table/templates/scroll-container", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', escapeExpression=this.escapeExpression;


      data.buffer.push("<div class=\"antiscroll-wrap\">\n  <div class=\"antiscroll-inner\">\n    ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "scroll-panel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push("\n  </div>\n</div>\n");
      return buffer;
      
    });
  });
;define("ember-table/templates/table-cell", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      data.buffer.push("<span class=\"ember-table-content\">\n  ");
      stack1 = helpers._triageMustache.call(depth0, "view.cellContent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</span>");
      return buffer;
      
    });
  });
;define("ember-table/templates/table-row", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', escapeExpression=this.escapeExpression;


      data.buffer.push(escapeExpression(helpers.view.call(depth0, "multi-item-collection", {hash:{
        'row': ("view.row"),
        'content': ("view.columns"),
        'itemViewClassField': ("tableCellViewClass"),
        'width': ("controller._tableColumnsWidth")
      },hashTypes:{'row': "ID",'content': "ID",'itemViewClassField': "STRING",'width': "ID"},hashContexts:{'row': depth0,'content': depth0,'itemViewClassField': depth0,'width': depth0},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push("\n");
      return buffer;
      
    });
  });
;define("ember-table/views/body-table-container", 
  ["ember","ember-table/views/table-container","ember-table/mixins/show-horizontal-scroll","ember-table/mixins/register-table-component","ember-table/mixins/mouse-wheel-handler","ember-table/mixins/touch-move-handler","ember-table/mixins/scroll-handler","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var TableContainer = __dependency2__["default"];
    var ShowHorizontalScrollMixin = __dependency3__["default"];
    var RegisterTableComponentMixin = __dependency4__["default"];
    var MouseWheelHandlerMixin = __dependency5__["default"];
    var TouchMoveHandlerMixin = __dependency6__["default"];
    var ScrollHandlerMixin = __dependency7__["default"];

    __exports__["default"] = TableContainer.extend(
    MouseWheelHandlerMixin, TouchMoveHandlerMixin, ScrollHandlerMixin,
    ShowHorizontalScrollMixin, RegisterTableComponentMixin, {
      templateName: 'body-table-container',
      classNames: ['ember-table-table-container',
          'ember-table-body-container',
          'antiscroll-wrap'],

      height: Ember.computed.alias('tableComponent._bodyHeight'),
      width: Ember.computed.alias('tableComponent._width'),
      scrollTop: Ember.computed.alias('tableComponent._tableScrollTop'),
      scrollLeft: Ember.computed.alias('tableComponent._tableScrollLeft'),
      scrollElementSelector: '.antiscroll-inner',

      onScroll: function(event) {
        this.set('scrollTop', event.target.scrollTop);
        return event.preventDefault();
      },

      // `event` here is a jQuery event
      onMouseWheel: function(event, delta, deltaX, deltaY) {
        if (Math.abs(deltaX) <= Math.abs(deltaY)) {
          return;
        }
        var scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() + deltaX;
        this.set('scrollLeft', scrollLeft);
        event.preventDefault();
      },

      // `event` here is a jQuery event
      onTouchMove: function(event, deltaX, deltaY) {
        if (Math.abs(deltaX) <= Math.abs(deltaY)) {
          return;
        }
        var scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() + deltaX;
        this.set('scrollLeft', scrollLeft);
        event.preventDefault();
      }
    });
  });
;define("ember-table/views/table-container", 
  ["ember","ember-table/mixins/style-bindings","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var StyleBindingsMixin = __dependency2__["default"];

    __exports__["default"] = Ember.View.extend(
    StyleBindingsMixin, {
      classNames: ['ember-table-table-container'],
      styleBindings: ['height', 'width']
    });
  });
;define("ember-table/views/column-sortable-indicator", 
  ["ember","ember-table/mixins/style-bindings","ember-table/mixins/register-table-component","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var StyleBindingsMixin = __dependency2__["default"];
    var RegisterTableComponentMixin = __dependency3__["default"];

    __exports__["default"] = Ember.View.extend(
    StyleBindingsMixin, RegisterTableComponentMixin, {
      classNames: 'ember-table-column-sortable-indicator',
      classNameBindings: 'tableComponent._isShowingSortableIndicator:active',
      styleBindings: ['left', 'height'],
      left: Ember.computed.alias('tableComponent._sortableIndicatorLeft'),
      height: Ember.computed.alias('tableComponent._height')
    });
  });
;define("ember-table/views/footer-table-container", 
  ["ember","ember-table/views/table-container","ember-table/mixins/show-horizontal-scroll","ember-table/mixins/register-table-component","ember-table/mixins/mouse-wheel-handler","ember-table/mixins/touch-move-handler","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var TableContainer = __dependency2__["default"];
    var ShowHorizontalScrollMixin = __dependency3__["default"];
    var RegisterTableComponentMixin = __dependency4__["default"];
    var MouseWheelHandlerMixin = __dependency5__["default"];
    var TouchMoveHandlerMixin = __dependency6__["default"];

    __exports__["default"] = TableContainer.extend(
    MouseWheelHandlerMixin, TouchMoveHandlerMixin, ShowHorizontalScrollMixin,
    RegisterTableComponentMixin, {
      templateName: 'footer-table-container',
      classNames: ['ember-table-table-container',
        'ember-table-fixed-table-container',
        'ember-table-footer-container'],
      styleBindings: 'top',
      height: Ember.computed.alias('tableComponent.footerHeight'),
      width: Ember.computed.alias('tableComponent._tableContainerWidth'),
      scrollLeft: Ember.computed.alias('tableComponent._tableScrollLeft'),

      top: Ember.computed(function() {
        var headerHeight = this.get('tableComponent._headerHeight');
        var contentHeight = this.get('tableComponent._tableContentHeight') +
            headerHeight;
        var bodyHeight = this.get('tableComponent._bodyHeight') + headerHeight;
        if (contentHeight < bodyHeight) {
          return contentHeight;
        } else {
          return bodyHeight;
        }
      }).property('tableComponent._bodyHeight', 'tableComponent._headerHeight',
          'tableComponent._tableContentHeight'),

      onMouseWheel: function(event, delta, deltaX) {
        var scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() +
            deltaX;
        this.set('scrollLeft', scrollLeft);
        event.preventDefault();
      },

      onTouchMove: function(event, deltaX) {
        var scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() +
            deltaX;
        this.set('scrollLeft', scrollLeft);
        event.preventDefault();
      }
    });
  });
;define("ember-table/views/header-block", 
  ["ember","ember-table/views/table-block","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var TableBlock = __dependency2__["default"];

    __exports__["default"] = TableBlock.extend({
      classNames: ['ember-table-header-block'],
      // TODO(new-api): Eliminate view alias
      itemView: 'header-row',
      itemViewClass: Ember.computed.alias('itemView'),

      content: Ember.computed(function() {
        return [this.get('columns')];
      }).property('columns'),

      onColumnsDidChange: Ember.observer(function() {
        var _this = this;
        Ember.run.schedule('afterRender', function() {
          _this.$().scrollLeft(_this.get('scrollLeft'));
        });
      }, 'content')
    });
  });
;define("ember-table/views/table-block", 
  ["ember","ember-table/mixins/style-bindings","ember-table/mixins/register-table-component","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var StyleBindingsMixin = __dependency2__["default"];
    var RegisterTableComponentMixin = __dependency3__["default"];

    // TODO: This should be a mixin
    __exports__["default"] = Ember.CollectionView.extend(
    StyleBindingsMixin, RegisterTableComponentMixin, {
      classNames: ['ember-table-table-block'],
      styleBindings: ['width', 'height'],
      itemViewClass: Ember.computed.alias('tableComponent.tableRowViewClass'),
      columns: null,
      content: null,
      scrollLeft: null,

      onScrollLeftDidChange: Ember.observer(function() {
        this.$().scrollLeft(this.get('scrollLeft'));
      }, 'scrollLeft'),

      height: Ember.computed(function() {
        return this.get('tableComponent._headerHeight');
      }).property('tableComponent._headerHeight')
    });
  });
;define("ember-table/views/header-cell", 
  ["ember","ember-table/mixins/style-bindings","ember-table/mixins/register-table-component","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var StyleBindingsMixin = __dependency2__["default"];
    var RegisterTableComponentMixin = __dependency3__["default"];

    __exports__["default"] = Ember.View.extend(
    StyleBindingsMixin, RegisterTableComponentMixin, {
      // ---------------------------------------------------------------------------
      // API - Inputs
      // ---------------------------------------------------------------------------

      // TODO: Doc
      templateName: 'header-cell',
      classNames: ['ember-table-cell', 'ember-table-header-cell'],
      classNameBindings: ['column.isSortable:sortable', 'column.textAlign'],
      styleBindings: ['width', 'height'],

      // ---------------------------------------------------------------------------
      // Internal properties
      // ---------------------------------------------------------------------------

      column: Ember.computed.alias('content'),
      width: Ember.computed.alias('column.width'),
      minWidth: Ember.computed.alias('column.minWidth'),
      maxWidth: Ember.computed.alias('column.maxWidth'),
      nextResizableColumn: Ember.computed.alias('column.nextResizableColumn'),
      height: Ember.computed.alias('tableComponent._headerHeight'),

      effectiveMinWidth: Ember.computed(function() {
        if (this.get('tableComponent.columnMode') === 'standard') {
          return this.get('minWidth');
        }
        var nextColumnMaxDiff = this.get('nextResizableColumn.maxWidth') -
            this.get('nextResizableColumn.width');
        if (this.get('minWidth') && nextColumnMaxDiff) {
          return Math.min(this.get('minWidth'), this.get('width') -
              nextColumnMaxDiff);
        } else if (this.get('minWidth')) {
          return this.get('minWidth');
        } else {
          return this.get('width') - nextColumnMaxDiff;
        }
      }).property('width', 'minWidth', 'tableComponent.columnMode',
          'nextResizableColumn.{width,maxWidth}'),

      effectiveMaxWidth: Ember.computed(function() {
        if (this.get('tableComponent.columnMode') === 'standard') {
          return this.get('maxWidth');
        }
        var nextColumnMaxDiff = this.get('nextResizableColumn.width') -
            this.get('nextResizableColumn.minWidth');
        if (this.get('maxWidth') && !Ember.isNone(nextColumnMaxDiff)) {
          return Math.min(this.get('maxWidth'), this.get('width') +
              nextColumnMaxDiff);
        } else if (this.get('maxWidth')) {
          return this.get('maxWidth');
        } else {
          return this.get('width') + nextColumnMaxDiff;
        }
      }).property('width', 'minWidth', 'tableComponent.columnMode',
          'nextResizableColumn.{width,minWidth}'),

      // jQuery UI resizable option
      resizableOption: Ember.computed(function() {
        return {
          handles: 'e', // Show the "east"/"right" handle
          // We need about 10px as absolute minimums for the columns
          minWidth: Math.max(this.get('effectiveMinWidth') || 0, 10),
          maxWidth: this.get('effectiveMaxWidth'),
          // TODO(azirbel): This is unexpected and needs documentation or removal
          grid: this.get('column.snapGrid'),
          resize: Ember.$.proxy(this.onColumnResize, this),
          stop: Ember.$.proxy(this.onColumnResize, this)
        };
      }).property('effectiveMinWidth', 'effectiveMaxWidth'),

      didInsertElement: function() {
        // TODO(azirbel): Call this._super()
        this.elementSizeDidChange();
        this.recomputeResizableHandle();
      },

      willDestroyElement: function() {
        if (this.$().is('.ui-resizable')) {
          this.$().resizable('destroy');
        }
        this._super();
      },

      _isResizable: Ember.computed(function() {
        if (this.get('tableComponent.columnMode') === 'standard') {
          return this.get('column.isResizable');
        } else {
          return this.get('column.isResizable') && this.get('nextResizableColumn');
        }
      }).property('column.isResizable', 'tableComponent.columnMode',
          'nextResizableColumn'),

      // `event` here is a jQuery event
      onColumnResize: function(event, ui) {
        var newWidth = Math.round(ui.size.width);
        if (this.get('tableComponent.columnMode') === 'standard') {
          this.get('column').resize(newWidth);
          this.set('tableComponent.columnsFillTable', false);
        } else {
          var diff = this.get('width') - newWidth;
          this.get('column').resize(newWidth);
          this.get('nextResizableColumn').resize(
              this.get('nextResizableColumn.width') + diff);
        }

        this.elementSizeDidChange();

        // Trigger the table resize (and redraw of layout) when resizing is done
        if (event.type === 'resizestop') {
          this.get('tableComponent').elementSizeDidChange();
        }
      },

      elementSizeDidChange: function() {
        var maxHeight = 0;
        // TODO(Louis): This seems bad...
        Ember.$('.ember-table-header-block .ember-table-content').each(function() {
          var thisHeight = Ember.$(this).outerHeight();
          if (thisHeight > maxHeight) {
            maxHeight = thisHeight;
          }
        });
        this.set('tableComponent._contentHeaderHeight', maxHeight);
      },

      cellWidthDidChange: Ember.observer(function() {
        Ember.run.schedule('afterRender', this, this.elementSizeDidChange);
      }, 'width'),

      resizableObserver: Ember.observer(function() {
        this.recomputeResizableHandle();
      }, 'resizableOption', 'column.isResizable', 'tableComponent.columnMode',
          'nextResizableColumn'),

      recomputeResizableHandle: function() {
        if (this.get('_isResizable')) {
          this.$().resizable(this.get('resizableOption'));
        } else {
          if (this.$().is('.ui-resizable')) {
            this.$().resizable('destroy');
          }
        }
      }
    });
  });
;define("ember-table/views/header-row", 
  ["ember","ember-table/mixins/style-bindings","ember-table/mixins/register-table-component","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var StyleBindingsMixin = __dependency2__["default"];
    var RegisterTableComponentMixin = __dependency3__["default"];

    // We hacked this. There is an inconsistency at the level in which we are
    // handling scroll event...
    __exports__["default"] = Ember.View.extend(
    StyleBindingsMixin, RegisterTableComponentMixin, {
      templateName: 'header-row',
      classNames: ['ember-table-table-row', 'ember-table-header-row'],
      styleBindings: ['width'],
      columns: Ember.computed.alias('content'),
      width: Ember.computed.alias('tableComponent._rowWidth'),

      // Options for jQuery UI sortable
      sortableOption: Ember.computed(function() {
        return {
          axis: 'x',
          containment: 'parent',
          cursor: 'move',
          helper: 'clone',
          items: ".ember-table-header-cell.sortable",
          opacity: 0.9,
          placeholder: 'ui-state-highlight',
          scroll: true,
          tolerance: 'pointer',
          update: Ember.$.proxy(this.onColumnSortDone, this),
          stop: Ember.$.proxy(this.onColumnSortStop, this),
          sort: Ember.$.proxy(this.onColumnSortChange, this)
        };
      }),

      didInsertElement: function() {
        this._super();
        if (this.get('tableComponent.enableColumnReorder')) {
          this.$('> div').sortable(this.get('sortableOption'));
        }
      },

      willDestroyElement: function() {
        if (this.get('tableComponent.enableColumnReorder')) {
          // TODO(azirbel): Get rid of this check, as in onColumnSortDone?
          var $divs = this.$('> div');
          if ($divs) {
            $divs.sortable('destroy');
          }
        }
        this._super();
      },

      onColumnSortStop: function() {
        this.set('tableComponent._isShowingSortableIndicator', false);
      },

      onColumnSortChange: function() {
        var left = this.$('.ui-state-highlight').offset().left -
            this.$().closest('.ember-table-tables-container').offset().left;
        this.set('tableComponent._isShowingSortableIndicator', true);
        this.set('tableComponent._sortableIndicatorLeft', left);
      },

      onColumnSortDone: function(event, ui) {
        var newIndex = ui.item.index();
        this.$('> div').sortable('cancel');
        var view = Ember.View.views[ui.item.attr('id')];
        var column = view.get('column');
        this.get('tableComponent').onColumnSort(column, newIndex);
        this.set('tableComponent._isShowingSortableIndicator', false);
      }
    });
  });
;define("ember-table/views/header-table-container", 
  ["ember","ember-table/views/table-container","ember-table/mixins/show-horizontal-scroll","ember-table/mixins/register-table-component","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var TableContainer = __dependency2__["default"];
    var ShowHorizontalScrollMixin = __dependency3__["default"];
    var RegisterTableComponentMixin = __dependency4__["default"];

    __exports__["default"] = TableContainer.extend(
    ShowHorizontalScrollMixin, RegisterTableComponentMixin, {
      templateName: 'header-table-container',
      classNames: ['ember-table-table-container',
          'ember-table-fixed-table-container',
          'ember-table-header-container'],
      height: Ember.computed.alias('tableComponent._headerHeight'),
      width: Ember.computed.alias('tableComponent._tableContainerWidth')
    });
  });
;define("ember-table/views/lazy-container", 
  ["ember","ember-table/mixins/style-bindings","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var StyleBindingsMixin = __dependency2__["default"];

    __exports__["default"] = Ember.ContainerView.extend(
    StyleBindingsMixin, {
      classNames: 'lazy-list-container',
      styleBindings: ['height'],
      content: null,
      itemViewClass: null,
      rowHeight: null,
      scrollTop: null,
      startIndex: null,

      init: function() {
        this._super();
        return this.onNumChildViewsDidChange();
      },

      height: Ember.computed(function() {
        return this.get('content.length') * this.get('rowHeight');
      }).property('content.length', 'rowHeight'),

      numChildViews: Ember.computed(function() {
        return this.get('numItemsShowing') + 2;
      }).property('numItemsShowing'),

      onNumChildViewsDidChange: Ember.observer(function() {
        var view = this;
        // We are getting the class from a string e.g. "Ember.Table.Row"
        var itemViewClass = this.get('itemViewClass');
        if (typeof itemViewClass === 'string') {
          if (/[A-Z]+/.exec(itemViewClass)) {
            // Global var lookup - 'App.MessagePreviewView'
            itemViewClass = Ember.get(Ember.lookup, itemViewClass);
          } else {
            // Ember CLI Style lookup - 'message/preview'
            itemViewClass = this.container.lookupFactory("view:" + itemViewClass);
          }
        }
        var newNumViews = this.get('numChildViews');
        if (!itemViewClass || !newNumViews) {
          return;
        }
        var oldNumViews = this.get('length');
        var numViewsToInsert = newNumViews - oldNumViews;
        // if newNumViews < oldNumViews we need to remove some views
        if (numViewsToInsert < 0) {
          var viewsToRemove = this.slice(newNumViews, oldNumViews);
          this.removeObjects(viewsToRemove);
        // if oldNumViews < newNumViews we need to add more views
        } else if (numViewsToInsert > 0) {
          for (var i = 0; i < numViewsToInsert; ++i) {
            this.pushObject(view.createChildView(itemViewClass));
          }
        }
        this.viewportDidChange();
      }, 'numChildViews', 'itemViewClass'),

      // TODO(Peter): Consider making this a computed... binding logic will go
      // into the LazyItemMixin
      viewportDidChange: Ember.observer(function() {
        var childViews = this.get('childViews');
        var content = this.get('content') || [];
        var clength = content.get('length');
        var numShownViews = Math.min(this.get('length'), clength);
        var startIndex = this.get('startIndex');
        // this is a necessary check otherwise we are trying to access an object
        // that doesn't exist
        if (startIndex + numShownViews >= clength) {
          startIndex = clength - numShownViews;
        }
        if (startIndex < 0) {
          startIndex = 0;
        }
        // for all views that we are not using... just remove content
        // this makes them invisble
        childViews.forEach(function(childView, i) {
          if (i >= numShownViews) {
            childView.set('content', null);
            return;
          }
          var itemIndex = startIndex + i;
          childView = childViews.objectAt(itemIndex % numShownViews);
          var item = content.objectAt(itemIndex);
          if (childView && item !== childView.get('content')) {
            childView.teardownContent();
            childView.set('itemIndex', itemIndex);
            childView.set('content', item);
            childView.prepareContent();
          }
        });
      }, 'content.length', 'length', 'startIndex')
    });
  });
;define("ember-table/views/lazy-item", 
  ["ember","ember-table/mixins/style-bindings","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var StyleBindingsMixin = __dependency2__["default"];

    __exports__["default"] = Ember.View.extend(StyleBindingsMixin, {
      itemIndex: null,
      prepareContent: Ember.K,
      teardownContent: Ember.K,
      rowHeightBinding: 'parentView.rowHeight',
      styleBindings: ['width', 'top', 'display'],

      top: Ember.computed(function() {
        return this.get('itemIndex') * this.get('rowHeight');
      }).property('itemIndex', 'rowHeight'),

      // TODO(azirbel): Add explicit else case
      display: Ember.computed(function() {
        if (!this.get('content')) {
          return 'none';
        }
      }).property('content')
    });
  });
;define("ember-table/views/lazy-table-block", 
  ["ember","ember-table/mixins/register-table-component","ember-table/views/lazy-container","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var RegisterTableComponentMixin = __dependency2__["default"];
    var LazyContainerView = __dependency3__["default"];

    __exports__["default"] = LazyContainerView.extend(
    RegisterTableComponentMixin, {
      classNames: ['ember-table-table-block'],
      styleBindings: ['width'],
      itemViewClass: Ember.computed.alias('tableComponent.tableRowViewClass'),
      rowHeight: Ember.computed.alias('tableComponent.rowHeight'),
      columns: null,
      content: null,
      scrollLeft: null,
      scrollTop: null,

      onScrollLeftDidChange: Ember.observer(function() {
        this.$().scrollLeft(this.get('scrollLeft'));
      }, 'scrollLeft')
    });
  });
;define("ember-table/views/multi-item-collection", 
  ["ember","ember-table/mixins/style-bindings","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var StyleBindingsMixin = __dependency2__["default"];

    __exports__["default"] = Ember.CollectionView.extend(
    StyleBindingsMixin, {
      styleBindings: 'width',
      itemViewClassField: null,

      createChildView: function(view, attrs) {
        var itemViewClassField = this.get('itemViewClassField');
        var itemViewClass = attrs.content.get(itemViewClassField);
        if (typeof itemViewClass === 'string') {
          if (/[A-Z]+/.exec(itemViewClass)) {
            // Global var lookup - 'App.MessagePreviewView'
            itemViewClass = Ember.get(Ember.lookup, itemViewClass);
          } else {
            // Ember CLI Style lookup - 'message/preview'
            itemViewClass = this.container.lookupFactory("view:" + itemViewClass);
          }
        }
        return this._super(itemViewClass, attrs);
      }
    });
  });
;define("ember-table/views/scroll-container", 
  ["ember","ember-table/mixins/style-bindings","ember-table/mixins/register-table-component","ember-table/mixins/scroll-handler","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var StyleBindingsMixin = __dependency2__["default"];
    var RegisterTableComponentMixin = __dependency3__["default"];
    var ScrollHandlerMixin = __dependency4__["default"];

    __exports__["default"] = Ember.View.extend(
    StyleBindingsMixin, ScrollHandlerMixin, RegisterTableComponentMixin, {
      templateName: 'scroll-container',
      classNames: ['ember-table-scroll-container'],
      styleBindings: ['left', 'width', 'height'],
      scrollElementSelector: '.antiscroll-inner',
      width: Ember.computed.alias('tableComponent._scrollContainerWidth'),
      // 10 is the height of the horizontal scrollbar
      height: 10,
      left: Ember.computed.alias('tableComponent._fixedColumnsWidth'),
      scrollTop: Ember.computed.alias('tableComponent._tableScrollTop'),
      scrollLeft: Ember.computed.alias('tableComponent._tableScrollLeft'),

      // HACK: onScrollLeftDidChange will not fire unless scrollLeft has been get
      // at least once. Therefore, we want to call onScrollLeftDidChange in
      // didInsertElement
      didInsertElement: function() {
        this._super();
        this.onScrollLeftDidChange();
      },

      // `event` here is a jQuery event
      onScroll: function(event) {
        this.set('scrollLeft', event.target.scrollLeft);
        event.preventDefault();
      },

      onScrollLeftDidChange: Ember.observer(function() {
        var selector = this.get('scrollElementSelector');
        this.$(selector).scrollLeft(this.get('scrollLeft'));
      }, 'scrollLeft', 'scrollElementSelector')
    });
  });
;define("ember-table/views/scroll-panel", 
  ["ember","ember-table/mixins/style-bindings","ember-table/mixins/register-table-component","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var StyleBindingsMixin = __dependency2__["default"];
    var RegisterTableComponentMixin = __dependency3__["default"];

    __exports__["default"] = Ember.View.extend(
    StyleBindingsMixin, RegisterTableComponentMixin, {
      classNames: ['ember-table-scroll-panel'],
      styleBindings: ['width', 'height'],
      width: Ember.computed.alias('tableComponent._tableColumnsWidth'),
      height: Ember.computed.alias('tableComponent._tableContentHeight')
    });
  });
;define("ember-table/views/table-cell", 
  ["ember","ember-table/mixins/style-bindings","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var StyleBindingsMixin = __dependency2__["default"];

    __exports__["default"] = Ember.View.extend(
    StyleBindingsMixin, {
      // ---------------------------------------------------------------------------
      // API - Inputs
      // ---------------------------------------------------------------------------

      // TODO: Doc
      templateName: 'table-cell',
      classNames: ['ember-table-cell'],
      classNameBindings: 'column.textAlign',
      styleBindings: 'width',

      // ---------------------------------------------------------------------------
      // Internal properties
      // ---------------------------------------------------------------------------

      init: function() {
        this._super();
        this.contentPathDidChange();
        this.contentDidChange();
      },

      row: Ember.computed.alias('parentView.row'),
      column: Ember.computed.alias('content'),
      width: Ember.computed.alias('column.width'),

      contentDidChange: function() {
        this.notifyPropertyChange('cellContent');
      },

      contentPathWillChange: Ember.beforeObserver(function() {
        var contentPath = this.get('column.contentPath');
        if (contentPath) {
          this.removeObserver("row." + contentPath, this,
              this.contentDidChange);
        }
      }, 'column.contentPath'),

      contentPathDidChange: Ember.beforeObserver(function() {
        var contentPath = this.get('column.contentPath');
        if (contentPath) {
          this.addObserver("row." + contentPath, this,
              this.contentDidChange);
        }
      }, 'column.contentPath'),

      cellContent: Ember.computed(function(key, value) {
        var row = this.get('row');
        var column = this.get('column');
        if (!row || !column) {
          return;
        }
        if (arguments.length === 1) {
          value = column.getCellContent(row);
        } else {
          column.setCellContent(row, value);
        }
        return value;
      }).property('row.isLoaded', 'column')
    });
  });
;define("ember-table/views/table-row", 
  ["ember","ember-table/mixins/register-table-component","ember-table/views/lazy-item","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var RegisterTableComponentMixin = __dependency2__["default"];
    var LazyItemView = __dependency3__["default"];

    __exports__["default"] = LazyItemView.extend(
    RegisterTableComponentMixin, {
      templateName: 'table-row',
      classNames: 'ember-table-table-row',
      classNameBindings: ['row.isHovered:ember-table-hover',
          'row.isSelected:ember-table-selected',
          'row.rowStyle',
          'isLastRow:ember-table-last-row'],
      styleBindings: ['width', 'height'],
      row: Ember.computed.alias('content'),
      columns: Ember.computed.alias('parentView.columns'),
      width: Ember.computed.alias('tableComponent._rowWidth'),
      height: Ember.computed.alias('tableComponent.rowHeight'),

      // Use `lastItem` (set manually) instead of the array's built-in `lastObject`
      // to avoid creating a controller for last row on table initialization.  If
      // this TableRow is the last row, then the row controller should have been
      // created and set to `lastItem` in RowArrayController, otherwise `lastItem`
      // is null.
      isLastRow: Ember.computed(function() {
        return this.get('row') ===
            this.get('tableComponent.bodyContent.lastItem');
      }).property('tableComponent.bodyContent.lastItem', 'row'),

      // TODO(azirbel): Could simplify slightly via
      // this.set('row.isHovered', true) and remove the temp variable.
      // Also applies below/elsewhere.
      mouseEnter: function() {
        var row = this.get('row');
        if (row) {
          row.set('isHovered', true);
        }
      },

      mouseLeave: function() {
        var row = this.get('row');
        if (row) {
          row.set('isHovered', false);
        }
      },

      teardownContent: function() {
        var row = this.get('row');
        if (row) {
          row.set('isHovered', false);
        }
      }
    });
  });
;define('ember', ['exports'], function(__exports__) {
  __exports__['default'] = window.Ember;
});

window.Ember.Table = Ember.Namespace.create();
window.Ember.AddeparMixins = {};
window.Ember.TEMPLATES['body-table-container'] = require('ember-table/templates/body-table-container')['default'];
window.Ember.TEMPLATES['components/ember-table'] = require('ember-table/templates/components/ember-table')['default'];
window.Ember.TEMPLATES['footer-table-container'] = require('ember-table/templates/footer-table-container')['default'];
window.Ember.TEMPLATES['header-cell'] = require('ember-table/templates/header-cell')['default'];
window.Ember.TEMPLATES['header-row'] = require('ember-table/templates/header-row')['default'];
window.Ember.TEMPLATES['header-table-container'] = require('ember-table/templates/header-table-container')['default'];
window.Ember.TEMPLATES['scroll-container'] = require('ember-table/templates/scroll-container')['default'];
window.Ember.TEMPLATES['table-cell'] = require('ember-table/templates/table-cell')['default'];
window.Ember.TEMPLATES['table-row'] = require('ember-table/templates/table-row')['default'];
window.Ember.Table.EmberTableComponent = require('ember-table/components/ember-table')['default'];
window.Ember.Table.RowArrayController = require('ember-table/controllers/row-array')['default'];
window.Ember.Table.Row = require('ember-table/controllers/row')['default'];
window.Ember.MouseWheelHandlerMixin = require('ember-table/mixins/mouse-wheel-handler')['default'];
window.Ember.Table.RegisterTableComponentMixin = require('ember-table/mixins/register-table-component')['default'];
window.Ember.AddeparMixins.ResizeHandlerMixin = require('ember-table/mixins/resize-handler')['default'];
window.Ember.ScrollHandlerMixin = require('ember-table/mixins/scroll-handler')['default'];
window.Ember.Table.ShowHorizontalScrollMixin = require('ember-table/mixins/show-horizontal-scroll')['default'];
window.Ember.AddeparMixins.StyleBindingsMixin = require('ember-table/mixins/style-bindings')['default'];
window.Ember.TouchMoveHandlerMixin = require('ember-table/mixins/touch-move-handler')['default'];
window.Ember.Table.ColumnDefinition = require('ember-table/models/column-definition')['default'];
window.Ember.Table.BodyTableContainer = require('ember-table/views/body-table-container')['default'];
window.Ember.Table.ColumnSortableIndicator = require('ember-table/views/column-sortable-indicator')['default'];
window.Ember.Table.FooterTableContainer = require('ember-table/views/footer-table-container')['default'];
window.Ember.Table.HeaderBlock = require('ember-table/views/header-block')['default'];
window.Ember.Table.HeaderCell = require('ember-table/views/header-cell')['default'];
window.Ember.Table.HeaderRow = require('ember-table/views/header-row')['default'];
window.Ember.Table.HeaderTableContainer = require('ember-table/views/header-table-container')['default'];
window.Ember.LazyContainerView = require('ember-table/views/lazy-container')['default'];
window.Ember.LazyItemView = require('ember-table/views/lazy-item')['default'];
window.Ember.Table.LazyTableBlock = require('ember-table/views/lazy-table-block')['default'];
window.Ember.MultiItemViewCollectionView = require('ember-table/views/multi-item-collection')['default'];
window.Ember.Table.ScrollContainer = require('ember-table/views/scroll-container')['default'];
window.Ember.Table.ScrollPanel = require('ember-table/views/scroll-panel')['default'];
window.Ember.Table.TableBlock = require('ember-table/views/table-block')['default'];
window.Ember.Table.TableCell = require('ember-table/views/table-cell')['default'];
window.Ember.Table.TableContainer = require('ember-table/views/table-container')['default'];
window.Ember.Table.TableRow = require('ember-table/views/table-row')['default'];
Ember.onLoad('Ember.Application', function(Application) {
Application.initializer({
name: 'ember-table',
initialize: function(container) {
container.register('component:ember-table', require('ember-table/components/ember-table')['default']);
container.register('view:body-table-container', require('ember-table/views/body-table-container')['default']);
container.register('view:column-sortable-indicator', require('ember-table/views/column-sortable-indicator')['default']);
container.register('view:footer-table-container', require('ember-table/views/footer-table-container')['default']);
container.register('view:header-block', require('ember-table/views/header-block')['default']);
container.register('view:header-cell', require('ember-table/views/header-cell')['default']);
container.register('view:header-row', require('ember-table/views/header-row')['default']);
container.register('view:header-table-container', require('ember-table/views/header-table-container')['default']);
container.register('view:lazy-container', require('ember-table/views/lazy-container')['default']);
container.register('view:lazy-item', require('ember-table/views/lazy-item')['default']);
container.register('view:lazy-table-block', require('ember-table/views/lazy-table-block')['default']);
container.register('view:multi-item-collection', require('ember-table/views/multi-item-collection')['default']);
container.register('view:scroll-container', require('ember-table/views/scroll-container')['default']);
container.register('view:scroll-panel', require('ember-table/views/scroll-panel')['default']);
container.register('view:table-block', require('ember-table/views/table-block')['default']);
container.register('view:table-cell', require('ember-table/views/table-cell')['default']);
container.register('view:table-container', require('ember-table/views/table-container')['default']);
container.register('view:table-row', require('ember-table/views/table-row')['default']);
}
});
});
Ember.Table.EmberTableComponent.reopen({
layoutName: 'components/ember-table'
});
Ember.Handlebars.helper('table-component', Ember.Table.EmberTableComponent);})();