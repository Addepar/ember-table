;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
/*
jQuery.browser shim that makes HT working with jQuery 1.8+
*/

if (!jQuery.browser) {
  (function() {
    var browser, matched;
    matched = void 0;
    browser = void 0;
    jQuery.uaMatch = function(ua) {
      var match;
      ua = ua.toLowerCase();
      match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
      return {
        browser: match[1] || "",
        version: match[2] || "0"
      };
    };
    matched = jQuery.uaMatch(navigator.userAgent);
    browser = {};
    if (matched.browser) {
      browser[matched.browser] = true;
      browser.version = matched.version;
    }
    if (browser.chrome) {
      browser.webkit = true;
    } else {
      if (browser.webkit) {
        browser.safari = true;
      }
    }
    return jQuery.browser = browser;
  })();
}

},{}],2:[function(require,module,exports){
(function($) {
  return $.getScrollbarWidth = function() {
    var $div, $textarea1, $textarea2, scrollbarWidth;
    scrollbarWidth = 0;
    if (!scrollbarWidth) {
      if ($.browser.msie) {
        $textarea1 = $("<textarea cols=\"10\" rows=\"2\"></textarea>").css({
          position: "absolute",
          top: -1000,
          left: -1000
        }).appendTo("body");
        $textarea2 = $("<textarea cols=\"10\" rows=\"2\" style=\"overflow: hidden;\"></textarea>").css({
          position: "absolute",
          top: -1000,
          left: -1000
        }).appendTo("body");
        scrollbarWidth = $textarea1.width() - $textarea2.width();
        $textarea1.add($textarea2).remove();
      } else {
        $div = $("<div />").css({
          width: 100,
          height: 100,
          overflow: "auto",
          position: "absolute",
          top: -1000,
          left: -1000
        }).prependTo("body").append("<div />").find("div").css({
          width: "100%",
          height: 200
        });
        scrollbarWidth = 100 - $div.width();
        $div.parent().remove();
      }
    }
    return scrollbarWidth;
  };
})(jQuery);

},{}],3:[function(require,module,exports){
var debounce;

Ember.ResizeHandler = Ember.Mixin.create({
  resizeEndDelay: 200,
  resizing: false,
  onResizeStart: Ember.K,
  onResizeEnd: Ember.K,
  onResize: Ember.K,
  debounceResizeEnd: Ember.computed(function() {
    var _this = this;
    return debounce(function(event) {
      if (_this.isDestroyed) {
        return;
      }
      _this.set('resizing', false);
      return typeof _this.onResizeEnd === "function" ? _this.onResizeEnd(event) : void 0;
    }, this.get('resizeEndDelay'));
  }).property('resizeEndDelay'),
  resizeHandler: Ember.computed(function() {
    return jQuery.proxy(this.handleWindowResize, this);
  }).property(),
  handleWindowResize: function(event) {
    if (!this.get('resizing')) {
      this.set('resizing', true);
      if (typeof this.onResizeStart === "function") {
        this.onResizeStart(event);
      }
    }
    if (typeof this.onResize === "function") {
      this.onResize(event);
    }
    return this.get('debounceResizeEnd')(event);
  },
  didInsertElement: function() {
    this._super();
    return $(window).bind('resize', this.get("resizeHandler"));
  },
  willDestroy: function() {
    $(window).unbind('resize', this.get("resizeHandler"));
    return this._super();
  }
});

debounce = function(func, wait, immediate) {
  var result, timeout;
  timeout = result = null;
  return function() {
    var args, callNow, context, later;
    context = this;
    args = arguments;
    later = function() {
      timeout = null;
      if (!immediate) {
        return result = func.apply(context, args);
      }
    };
    callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};

},{}],4:[function(require,module,exports){
Ember.StyleBindingsMixin = Ember.Mixin.create({
  concatenatedProperties: ['styleBindings'],
  attributeBindings: ['style'],
  unitType: 'px',
  createStyleString: function(styleName, property) {
    var value;
    value = this.get(property);
    if (value === void 0) {
      return;
    }
    if (Ember.typeOf(value) === 'number') {
      value = value + this.get('unitType');
    }
    return "" + styleName + ":" + value + ";";
  },
  applyStyleBindings: function() {
    var lookup, properties, styleBindings, styleComputed, styles,
      _this = this;
    styleBindings = this.styleBindings;
    if (!styleBindings) {
      return;
    }
    lookup = {};
    styleBindings.forEach(function(binding) {
      var property, style, _ref;
      _ref = binding.split(':'), property = _ref[0], style = _ref[1];
      return lookup[style || property] = property;
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
        return styleString;
      }
    });
    styleComputed.property.apply(styleComputed, properties);
    return Ember.defineProperty(this, 'style', styleComputed);
  },
  init: function() {
    this.applyStyleBindings();
    return this._super();
  }
});

},{}],5:[function(require,module,exports){
Ember.LazyContainerView = Ember.ContainerView.extend(Ember.StyleBindingsMixin, {
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
    var itemViewClass, newNumViews, numViewsToInsert, oldNumViews, view, viewsToAdd, viewsToRemove, _i, _results;
    view = this;
    itemViewClass = Ember.get(this.get('itemViewClass'));
    newNumViews = this.get('numChildViews');
    if (!(itemViewClass && newNumViews)) {
      return;
    }
    oldNumViews = this.get('length');
    numViewsToInsert = newNumViews - oldNumViews;
    if (numViewsToInsert < 0) {
      viewsToRemove = this.slice(newNumViews, oldNumViews);
      return this.removeObjects(viewsToRemove);
    } else if (numViewsToInsert > 0) {
      viewsToAdd = (function() {
        _results = [];
        for (var _i = 0; 0 <= numViewsToInsert ? _i < numViewsToInsert : _i > numViewsToInsert; 0 <= numViewsToInsert ? _i++ : _i--){ _results.push(_i); }
        return _results;
      }).apply(this).map(function() {
        return view.createChildView(itemViewClass);
      });
      return this.pushObjects(viewsToAdd);
    }
  }, 'numChildViews', 'itemViewClass'),
  viewportDidChange: Ember.observer(function() {
    var clength, content, numShownViews, startIndex;
    content = this.get('content') || [];
    clength = content.get('length');
    numShownViews = Math.min(this.get('length'), clength);
    startIndex = this.get('startIndex');
    if (startIndex + numShownViews >= clength) {
      startIndex = clength - numShownViews;
    }
    if (startIndex < 0) {
      0;
    } else {
      startIndex;
    }
    return this.forEach(function(childView, i) {
      var item, itemIndex;
      if (i >= numShownViews) {
        childView = this.objectAt(i);
        childView.set('content', null);
        return;
      }
      itemIndex = startIndex + i;
      childView = this.objectAt(itemIndex % numShownViews);
      item = content.objectAt(itemIndex);
      if (item !== childView.get('content')) {
        childView.teardownContent();
        childView.set('itemIndex', itemIndex);
        childView.set('content', item);
        return childView.prepareContent();
      }
    }, this);
  }, 'content.length', 'length', 'startIndex')
});

Ember.LazyItemView = Ember.View.extend(Ember.StyleBindingsMixin, {
  itemIndex: null,
  prepareContent: Ember.K,
  teardownContent: Ember.K,
  rowHeightBinding: 'parentView.rowHeight',
  styleBindings: ['width', 'top', 'display'],
  top: Ember.computed(function() {
    return this.get('itemIndex') * this.get('rowHeight');
  }).property('itemIndex', 'rowHeight'),
  display: Ember.computed(function() {
    if (!this.get('content')) {
      return 'none';
    }
  }).property('content')
});

},{}],6:[function(require,module,exports){
Ember.MultiItemViewCollectionView = Ember.CollectionView.extend({
  itemViewClassField: null,
  createChildView: function(view, attrs) {
    var itemViewClass, itemViewClassField;
    itemViewClassField = this.get('itemViewClassField');
    itemViewClass = attrs.content.get(itemViewClassField);
    if (typeof itemViewClass === 'string') {
      itemViewClass = Ember.get(Ember.lookup, itemViewClass);
    }
    return this._super(itemViewClass, attrs);
  }
});

Ember.MouseWheelHandlerMixin = Ember.Mixin.create({
  onMouseWheel: Ember.K,
  didInsertElement: function() {
    var _this = this;
    this._super();
    return this.$().bind('mousewheel', function(event, delta, deltaX, deltaY) {
      return Ember.run(_this, _this.onMouseWheel, event, delta, deltaX, deltaY);
    });
  },
  willDestroy: function() {
    var _ref;
    if ((_ref = this.$()) != null) {
      _ref.unbind('mousewheel');
    }
    return this._super();
  }
});

Ember.ScrollHandlerMixin = Ember.Mixin.create({
  onScroll: Ember.K,
  didInsertElement: function() {
    var _this = this;
    this._super();
    return this.$().bind('scroll', function(event) {
      return Ember.run(_this, _this.onScroll, event);
    });
  },
  willDestroy: function() {
    var _ref;
    if ((_ref = this.$()) != null) {
      _ref.unbind('scroll');
    }
    return this._super();
  }
});

},{}],7:[function(require,module,exports){
Ember.Table = Ember.Namespace.create();

Ember.Table.ColumnDefinition = Ember.Object.extend({
  headerCellName: null,
  resize: function(pxWidth, tableWidth) {
    var diff, newMaxWidth, newWidth, nextCol, oldWidth, percent;
    newMaxWidth = null;
    tableWidth = tableWidth || this.get("controller._tableContainerWidth");
    if (!this.get("controller.fluidTable")) {
      if (pxWidth) {
        this.set("columnWidth", pxWidth);
      }
      return null;
    }
    if (!tableWidth) {
      return;
    }
    percent = function(val) {
      if ("string" === typeof val) {
        return +(val.replace("%", ""));
      } else {
        return val * 100 / tableWidth;
      }
    };
    oldWidth = percent(this.get("columnWidth"));
    newWidth = 'number' === typeof pxWidth ? percent(pxWidth) : oldWidth;
    nextCol = this.get("_nextColumn");
    if (nextCol) {
      diff = oldWidth - newWidth + percent(nextCol.get("columnWidth"));
      nextCol.set("columnWidth", diff / 100 * tableWidth);
      newMaxWidth = (newWidth + diff) / 100 * tableWidth - 100;
    }
    this.set("columnWidth", newWidth / 100 * tableWidth);
    this.notifyPropertyChange("columnWidth");
    return newMaxWidth;
  },
  _convertColumnToWidth: Ember.beforeObserver(function() {
    var tableWidth;
    if (!this.get("controller.fluidTable")) {
      return;
    }
    tableWidth = this.get("controller._tableContainerWidth");
    if (tableWidth) {
      return this.set("columnWidth", this.get("columnWidth") / tableWidth * 100 + "%");
    }
  }, "controller._tableContainerWidth"),
  _resizeToTable: Ember.observer(function() {
    return this.resize();
  }, "controller._tableContainerWidth"),
  columnWidth: 150,
  headerCellViewClass: 'Ember.Table.HeaderCell',
  tableCellViewClass: 'Ember.Table.TableCell',
  getCellContent: function(row) {
    var path;
    path = this.get('contentPath');
    Ember.assert("You must either provide a contentPath or override " + "getCellContent in your column definition", path != null);
    return Ember.get(row, path);
  },
  setCellContent: Ember.K
});

Ember.Table.Row = Ember.ObjectProxy.extend({
  content: null,
  isHovering: false,
  isSelected: false,
  isShowing: true,
  isActive: false
});

Ember.Table.RowArrayProxy = Ember.ArrayProxy.extend({
  tableRowClass: null,
  content: null,
  rowContent: Ember.computed(function() {
    return [];
  }).property(),
  objectAt: function(idx) {
    var item, row, tableRowClass;
    row = this.get('rowContent')[idx];
    if (row) {
      return row;
    }
    tableRowClass = this.get('tableRowClass');
    item = this.get('content').objectAt(idx);
    row = tableRowClass.create({
      content: item
    });
    this.get('rowContent')[idx] = row;
    return row;
  }
});

Ember.Table.TableController = Ember.Controller.extend({
  columns: null,
  numFixedColumns: 0,
  numFooterRow: 0,
  rowHeight: 30,
  headerHeight: 50,
  footerHeight: 30,
  hasHeader: true,
  hasFooter: true,
  tableRowViewClass: 'Ember.Table.TableRow',
  fluidTable: false,
  bodyContent: Ember.computed(function() {
    return Ember.Table.RowArrayProxy.create({
      tableRowClass: Ember.Table.Row,
      content: this.get('content')
    });
  }).property('content'),
  footerContent: Ember.computed(function(key, value) {
    if (value) {
      return value;
    } else {
      return Ember.A();
    }
  }).property(),
  fixedColumns: Ember.computed(function() {
    var columns, numFixedColumns;
    columns = this.get('columns');
    if (!columns) {
      return Ember.A();
    }
    numFixedColumns = this.get('numFixedColumns') || 0;
    return columns.slice(0, numFixedColumns);
  }).property('columns.@each', 'numFixedColumns'),
  tableColumns: Ember.computed(function() {
    var columns, numFixedColumns;
    columns = this.get('columns');
    if (!columns) {
      return Ember.A();
    }
    numFixedColumns = this.get('numFixedColumns') || 0;
    columns = columns.slice(numFixedColumns, columns.get('length'));
    this.prepareTableColumns(columns);
    return columns;
  }).property('columns.@each', 'numFixedColumns'),
  prepareTableColumns: Ember.observer(function(tableColumns) {
    var col, columns, i, _i, _len, _results;
    columns = Ember.isArray(tableColumns) ? tableColumns : this.get("tableColumns");
    _results = [];
    for (i = _i = 0, _len = columns.length; _i < _len; i = ++_i) {
      col = columns[i];
      col.set("_nextColumn", columns.objectAt(i + 1));
      _results.push(col.set("controller", this));
    }
    return _results;
  }, "tableColumns.@each", "tableColumns"),
  sortByColumn: Ember.K,
  _tableScrollTop: 0,
  _tableScrollLeft: 0,
  _width: null,
  _height: null,
  _scrollbarSize: null,
  _fixedColumnsWidth: Ember.computed(function() {
    return this._getTotalWidth(this.get('fixedColumns'));
  }).property('fixedColumns.@each.columnWidth'),
  _tableColumnsWidth: Ember.computed(function() {
    if (this.get("fluidTable")) {
      return "100%";
    }
    return this._getTotalWidth(this.get('tableColumns'));
  }).property('tableColumns.@each.columnWidth', "fluidTable"),
  _rowWidth: Ember.computed(function() {
    var columnsWidth, nonFixedTableWidth;
    columnsWidth = this.get('_tableColumnsWidth');
    nonFixedTableWidth = this.get('_tableContainerWidth') - this.get('_fixedColumnsWidth');
    if (columnsWidth < nonFixedTableWidth) {
      return nonFixedTableWidth;
    }
    return columnsWidth;
  }).property('_fixedColumnsWidth', '_tableColumnsWidth', '_tableContainerWidth'),
  _bodyHeight: Ember.computed(function() {
    var bodyHeight, footerHeight, headerHeight, scrollbarSize;
    bodyHeight = this.get('_height');
    headerHeight = this.get('headerHeight');
    footerHeight = this.get('footerHeight');
    scrollbarSize = this.get('_scrollbarSize');
    if (this.get('_tableColumnsWidth') > this.get('_width') - this.get('_fixedColumnsWidth')) {
      bodyHeight -= scrollbarSize;
    }
    if (this.get('hasHeader')) {
      bodyHeight -= headerHeight;
    }
    if (this.get('hasFooter')) {
      bodyHeight -= footerHeight;
    }
    return bodyHeight;
  }).property('_height', 'headerHeight', 'footerHeight', '_scrollbarSize', 'hasHeader', 'hasFooter', '_tableColumnsWidth', '_width', '_fixedColumnsWidth'),
  _tableBlockWidth: Ember.computed(function() {
    return this.get('_width') - this.get('_fixedColumnsWidth') - this.get('_scrollbarSize');
  }).property('_width', '_fixedColumnsWidth', '_scrollbarSize'),
  _fixedBlockWidthBinding: '_fixedColumnsWidth',
  _tableContentHeight: Ember.computed(function() {
    return this.get('rowHeight') * this.get('bodyContent.length');
  }).property('rowHeight', 'bodyContent.length'),
  _tableContainerWidth: Ember.computed(function() {
    return this.get('_width') - this.get('_scrollbarSize');
  }).property('_width', '_scrollbarSize'),
  _scrollContainerWidth: Ember.computed(function() {
    return this.get('_width') - this.get('_fixedColumnsWidth') - this.get('_scrollbarSize');
  }).property('_width', '_fixedColumnsWidth', '_scrollbarSize'),
  _scrollContainerHeight: Ember.computed(function() {
    var containerHeight;
    return containerHeight = this.get('_height') - this.get('headerHeight');
  }).property('_height', 'headerHeight'),
  _numItemsShowing: Ember.computed(function() {
    return Math.floor(this.get('_bodyHeight') / this.get('rowHeight'));
  }).property('_bodyHeight', 'rowHeight'),
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
  _getTotalWidth: function(columns) {
    var widths;
    if (!columns) {
      return 0;
    }
    widths = columns.getEach('columnWidth') || [];
    return widths.reduce((function(total, w) {
      return total + w;
    }), 0);
  }
});

},{}],8:[function(require,module,exports){
var indexesOf;

indexesOf = Ember.EnumerableUtils.indexesOf;

Ember.Table.RowSelectionMixin = Ember.Mixin.create({
  attributeBindings: 'tabindex',
  content: Ember.computed.alias('controller.bodyContent'),
  rowHeight: Ember.computed.alias('controller.rowHeight'),
  numItemsShowing: Ember.computed.alias('controller._numItemsShowing'),
  startIndex: Ember.computed.alias('controller._startIndex'),
  scrollTop: Ember.computed.alias('controller._tableScrollTop'),
  tabindex: -1,
  KEY_EVENTS: {
    37: 'leftArrowPressed',
    38: 'upArrowPressed',
    39: 'rightArrowPressed',
    40: 'downArrowPressed'
  },
  _calculateSelectionIndices: function(value) {
    var content, indices, rows, selection;
    selection = this.get('selectionIndices');
    selection.clear();
    rows = this.get('content');
    if (rows) {
      content = rows.mapProperty('content');
      indices = indexesOf(content, value);
      return selection.addObjects(indices);
    }
  },
  contentDidChange: Ember.observer(function() {
    return this._calculateSelectionIndices(this.get('selection'));
  }, 'content.@each.content'),
  selection: Ember.computed(function(key, value) {
    var rows, selection;
    rows = this.get('content') || [];
    selection = this.get('selectionIndices');
    value = value || [];
    if (arguments.length === 1) {
      value = selection.map(function(index) {
        return rows.objectAt(index).get('content');
      });
    } else {
      this._calculateSelectionIndices(value);
    }
    return value;
  }).property('selectionIndices.[]'),
  selectionIndices: Ember.computed(function() {
    var set;
    set = new Ember.Set();
    set.addEnumerableObserver(this);
    return set;
  }).property(),
  enumerableDidChange: Ember.K,
  enumerableWillChange: function(set, removing, adding) {
    var content;
    content = this.get('content');
    if (!content) {
      return;
    }
    if ('number' === typeof removing) {
      set.forEach(function(index) {
        var row;
        row = content.objectAt(index);
        if (row) {
          return row.set('isSelected', false);
        }
      });
    } else if (removing) {
      removing.forEach(function(index) {
        var row;
        row = content.objectAt(index);
        if (row) {
          return row.set('isSelected', false);
        }
      });
    }
    if (adding && 'number' !== typeof adding) {
      return adding.forEach(function(index) {
        var row;
        row = content.objectAt(index);
        if (row) {
          return row.set('isSelected', true);
        }
      });
    }
  },
  mouseDown: function(event) {
    var index, sel;
    index = this.getIndexForEvent(event);
    sel = this.get('selectionIndices');
    if (sel.contains(index) && sel.length === 1) {
      return sel.clear();
    }
    return this.setSelectionIndex(index);
  },
  keyDown: function(event) {
    var map, method, _ref;
    map = this.get('KEY_EVENTS');
    method = map[event.keyCode];
    if (method) {
      return (_ref = this.get(method)) != null ? _ref.apply(this, arguments) : void 0;
    }
  },
  upArrowPressed: function(event) {
    var index, sel;
    event.preventDefault();
    sel = this.get('selectionIndices.lastObject');
    index = event.ctrlKey || event.metaKey ? 0 : sel - 1;
    return this.setSelectionIndex(index);
  },
  downArrowPressed: function(event) {
    var clen, index, sel;
    event.preventDefault();
    sel = this.get('selectionIndices.lastObject');
    clen = this.get('content.length');
    index = event.ctrlKey || event.metaKey ? clen - 1 : sel + 1;
    return this.setSelectionIndex(index);
  },
  getIndexForEvent: function(event) {
    return this.getRowIndexFast(this.getRowForEvent(event));
  },
  getRowForEvent: function(event) {
    var $rowView, view;
    $rowView = $(event.target).parents('.table-row');
    view = Ember.View.views[$rowView.attr('id')];
    if (view) {
      return view.get('row');
    }
  },
  getRowIndexFast: function(row) {
    var index, numRows, startIndex, sublist;
    startIndex = this.get('startIndex');
    numRows = this.get('numItemsShowing') + 1;
    sublist = this.get('content').slice(startIndex, startIndex + numRows);
    index = sublist.indexOf(row);
    if (index < 0) {
      return index;
    } else {
      return index + startIndex;
    }
  },
  setSelectionIndex: function(index) {
    var sel;
    if (!this.ensureIndex(index)) {
      return;
    }
    sel = this.get('selectionIndices');
    this.get('selectionIndices').clear();
    return this.toggleSelectionIndex(index);
  },
  toggleSelectionIndex: function(index) {
    var sel;
    if (!this.ensureIndex(index)) {
      return;
    }
    sel = this.get('selectionIndices');
    if (sel.contains(index)) {
      sel.remove(index);
    } else {
      sel.add(index);
    }
    return this.ensureVisible(index);
  },
  ensureIndex: function(index) {
    var clen;
    clen = this.get('content.length');
    return index >= 0 && index < clen;
  },
  ensureVisible: function(index) {
    var endIndex, numRows, startIndex;
    startIndex = this.get('startIndex');
    numRows = this.get('numItemsShowing');
    endIndex = startIndex + numRows;
    if (index < startIndex) {
      return this.scrollToRowIndex(index);
    } else if (index >= endIndex) {
      return this.scrollToRowIndex(index - numRows + 1);
    }
  },
  scrollToRowIndex: function(index) {
    var rowHeight, scrollTop;
    rowHeight = this.get('rowHeight');
    scrollTop = index * rowHeight;
    return this.set('scrollTop', scrollTop);
  }
});

Ember.Table.RowMultiSelectionMixin = Ember.Mixin.create(Ember.Table.RowSelectionMixin, {
  selectionRange: void 0,
  enumerableDidChange: function(set, removing, adding) {
    if ('number' === typeof removing) {
      this.set('selectionRange', void 0);
    } else if (removing) {
      this.reduceSelectionRange(removing);
    }
    if (adding && 'number' !== typeof adding) {
      return this.expandSelectionRange(adding);
    }
  },
  expandSelectionRange: function(indices) {
    var max, min, range, _ref;
    range = this.get('selectionRange');
    _ref = [Math.min.apply(null, indices), Math.max.apply(null, indices)], min = _ref[0], max = _ref[1];
    if (!range) {
      range = {
        min: min,
        max: max
      };
    }
    range = {
      min: Math.min(range.min, min),
      max: Math.max(range.max, max)
    };
    return this.set('selectionRange', range);
  },
  reduceSelectionRange: function(indices) {
    var max, min, range, _ref;
    indices = this.get('selectionIndices');
    _ref = [Math.min.apply(null, indices), Math.max.apply(null, indices)], min = _ref[0], max = _ref[1];
    range = {
      min: min,
      max: max
    };
    return this.set('selectionRange', range);
  },
  mouseDown: function(event) {
    var index, range, row;
    row = this.getRowForEvent(event);
    index = this.getRowIndexFast(row);
    if (event.ctrlKey || event.metaKey) {
      return this.toggleSelectionIndex(index);
    } else if (event.shiftKey) {
      range = this.get('selectionRange');
      if (range) {
        return this.setSelectionRange(range.min, index, index);
      }
    } else {
      return this._super(event);
    }
  },
  upArrowPressed: function(event) {
    var index, range;
    event.preventDefault();
    if (event.shiftKey) {
      range = this.get('selectionRange');
      index = range.min - 1;
      if (range) {
        return this.setSelectionRange(index, range.max, index);
      }
    } else {
      return this._super(event);
    }
  },
  downArrowPressed: function(event) {
    var index, range;
    event.preventDefault();
    if (event.shiftKey) {
      range = this.get('selectionRange');
      index = range.max + 1;
      if (range) {
        return this.setSelectionRange(range.min, index, index);
      }
    } else {
      return this._super(event);
    }
  },
  setSelectionRange: function(start, end, visibleIndex) {
    var beg, sel, _i, _results;
    if (!(this.ensureIndex(start) && this.ensureIndex(end))) {
      return;
    }
    beg = start < end ? start : end;
    end = start < end ? end : start;
    sel = this.get('selectionIndices');
    sel.clear();
    sel.addObjects((function() {
      _results = [];
      for (var _i = beg; beg <= end ? _i <= end : _i >= end; beg <= end ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this));
    return this.ensureVisible(visibleIndex);
  }
});

},{}],9:[function(require,module,exports){
Ember.Table.TablesContainer = Ember.View.extend(Ember.ResizeHandler, {
  templateName: 'tables-container',
  classNames: 'tables-container',
  didInsertElement: function() {
    var isLion, scrollBarWidth;
    this._super();
    this.elementSizeDidChange();
    scrollBarWidth = $.getScrollbarWidth();
    isLion = (typeof navigator !== "undefined" && navigator !== null ? navigator.appVersion['10_7'] : void 0) !== -1 && scrollBarWidth === 0;
    if (isLion) {
      scrollBarWidth = 8;
    }
    this.set('controller._scrollbarSize', scrollBarWidth);
    return this.set('controller._tableScrollTop', 0);
  },
  onResize: function() {
    return this.elementSizeDidChange();
  },
  elementSizeDidChange: function() {
    this.set('controller._width', this.$().width());
    return this.set('controller._height', this.$().height());
  }
});

Ember.Table.TableContainer = Ember.View.extend(Ember.StyleBindingsMixin, {
  classNames: ['table-container'],
  styleBindings: ['height', 'width']
});

Ember.Table.TableBlock = Ember.CollectionView.extend(Ember.StyleBindingsMixin, {
  classNames: ['table-block'],
  styleBindings: ['width', 'height'],
  itemViewClass: Ember.computed.alias('controller.tableRowViewClass'),
  columns: null,
  content: null,
  scrollLeft: null,
  onScrollLeftDidChange: Ember.observer(function() {
    return this.$().scrollLeft(this.get('scrollLeft'));
  }, 'scrollLeft')
});

Ember.Table.LazyTableBlock = Ember.LazyContainerView.extend({
  classNames: ['table-block'],
  styleBindings: ['width'],
  itemViewClass: Ember.computed.alias('controller.tableRowViewClass'),
  rowHeight: Ember.computed.alias('controller.rowHeight'),
  columns: null,
  content: null,
  scrollLeft: null,
  scrollTop: null,
  onScrollLeftDidChange: Ember.observer(function() {
    return this.$().scrollLeft(this.get('scrollLeft'));
  }, 'scrollLeft')
});

Ember.Table.TableRow = Ember.LazyItemView.extend({
  templateName: 'table-row',
  classNames: 'table-row',
  classNameBindings: ['row.isActive:active', 'row.isSelected:selected'],
  styleBindings: ['width', 'height'],
  row: Ember.computed.alias('content'),
  columns: Ember.computed.alias('parentView.columns'),
  width: Ember.computed.alias('controller._rowWidth'),
  height: Ember.computed.alias('controller.rowHeight'),
  mouseEnter: function(event) {
    var row;
    row = this.get('row');
    if (row) {
      return row.set('isActive', true);
    }
  },
  mouseLeave: function(event) {
    var row;
    row = this.get('row');
    if (row) {
      return row.set('isActive', false);
    }
  },
  teardownContent: function() {
    var row;
    row = this.get('row');
    if (row) {
      return row.set('isActive', false);
    }
  }
});

Ember.Table.TableCell = Ember.View.extend(Ember.StyleBindingsMixin, {
  defaultTemplate: Ember.Handlebars.compile("<span class='content'>{{view.cellContent}}</span>"),
  classNames: ['table-cell'],
  styleBindings: ['width'],
  row: Ember.computed.alias('parentView.row'),
  column: Ember.computed.alias('content'),
  rowContent: Ember.computed.alias('row.content'),
  width: Ember.computed.alias('column.columnWidth'),
  cellContent: Ember.computed(function(key, value) {
    var column, row;
    row = this.get('rowContent');
    column = this.get('column');
    if (!(row && column)) {
      return;
    }
    if (arguments.length === 1) {
      value = column.getCellContent(row);
    } else {
      column.setCellContent(row, value);
    }
    return value;
  }).property('rowContent.isLoaded', 'column')
});

Ember.Table.HeaderBlock = Ember.Table.TableBlock.extend({
  classNames: ['header-block'],
  itemViewClass: 'Ember.Table.HeaderRow',
  content: Ember.computed(function() {
    return [this.get('columns')];
  }).property('columns')
});

Ember.Table.HeaderRow = Ember.View.extend(Ember.StyleBindingsMixin, {
  templateName: 'header-row',
  classNames: ['table-row', 'header-row'],
  styleBindings: ['height', 'width'],
  columns: Ember.computed.alias('content'),
  height: Ember.computed.alias('controller.headerHeight'),
  width: Ember.computed.alias('controller._tableColumnsWidth'),
  sortableOption: Ember.computed(function() {
    return {
      axis: 'x',
      cursor: 'pointer',
      helper: 'clone',
      containment: 'parent',
      placeholder: 'ui-state-highlight',
      scroll: true,
      tolerance: 'pointer',
      update: jQuery.proxy(this.onColumnSort, this)
    };
  }).property(),
  didInsertElement: function() {
    this._super();
    return this.$('> div').sortable(this.get('sortableOption'));
  },
  onColumnSort: function(event, ui) {
    var column, columns, newIndex, view;
    newIndex = ui.item.index();
    view = Ember.View.views[ui.item.attr('id')];
    columns = this.get('columns');
    column = view.get('column');
    columns.removeObject(column);
    return columns.insertAt(newIndex, column);
  }
});

Ember.Table.HeaderCell = Ember.View.extend(Ember.StyleBindingsMixin, {
  templateName: 'header-cell',
  classNames: ['table-cell', 'header-cell'],
  styleBindings: ['width', 'height'],
  column: Ember.computed.alias('content'),
  width: Ember.computed.alias('column.columnWidth'),
  height: Ember.computed.alias('controller.headerHeight'),
  resizableOption: Ember.computed(function() {
    return {
      handles: 'e',
      minHeight: 40,
      minWidth: this.get("column.minWidth") || 100,
      maxWidth: this.get("column.maxWidth") || 500,
      resize: jQuery.proxy(this.onColumnResize, this),
      stop: jQuery.proxy(this.onColumnResize, this)
    };
  }).property(),
  didInsertElement: function() {
    var fluid;
    fluid = this.get("controller.fluidTable");
    if (!fluid || (fluid && this.get("column._nextColumn"))) {
      this.$().resizable(this.get('resizableOption'));
      return this._resizableWidget = this.$().resizable('widget');
    }
  },
  onColumnResize: function(event, ui) {
    var max;
    max = this.get("column").resize(ui.size.width);
    if (max) {
      return this.$().resizable("option", "maxWidth", max);
    }
  }
});

Ember.Table.HeaderTableContainer = Ember.Table.TableContainer.extend(Ember.MouseWheelHandlerMixin, {
  templateName: 'header-container',
  classNames: ['table-container', 'fixed-table-container', 'header-container'],
  height: Ember.computed.alias('controller.headerHeight'),
  width: Ember.computed.alias('controller._tableContainerWidth'),
  scrollLeft: Ember.computed.alias('controller._tableScrollLeft'),
  onMouseWheel: function(event, delta, deltaX, deltaY) {
    var scrollLeft;
    scrollLeft = this.$('.right-table-block').scrollLeft() + deltaX * 50;
    this.set('scrollLeft', scrollLeft);
    return event.preventDefault();
  }
});

Ember.Table.BodyTableContainer = Ember.Table.TableContainer.extend(Ember.MouseWheelHandlerMixin, Ember.ScrollHandlerMixin, {
  templateName: 'body-container',
  classNames: ['table-container', 'body-container'],
  height: Ember.computed.alias('controller._bodyHeight'),
  width: Ember.computed.alias('controller._width'),
  scrollTop: Ember.computed.alias('controller._tableScrollTop'),
  scrollLeft: Ember.computed.alias('controller._tableScrollLeft'),
  onScrollTopDidChange: Ember.observer(function() {
    return this.$().scrollTop(this.get('scrollTop'));
  }, 'scrollTop'),
  onScroll: function(event) {
    this.set('scrollTop', event.target.scrollTop);
    return event.preventDefault();
  },
  onMouseWheel: function(event, delta, deltaX, deltaY) {
    var scrollLeft;
    if (!(Math.abs(deltaX) > Math.abs(deltaY))) {
      return;
    }
    scrollLeft = this.$('.right-table-block').scrollLeft() + deltaX * 50;
    this.set('scrollLeft', scrollLeft);
    return event.preventDefault();
  }
});

Ember.Table.FooterTableContainer = Ember.Table.TableContainer.extend(Ember.MouseWheelHandlerMixin, {
  templateName: 'footer-container',
  classNames: ['table-container', 'fixed-table-container', 'footer-container'],
  styleBindings: ['top'],
  height: Ember.computed.alias('controller.footerHeight'),
  width: Ember.computed.alias('controller._tableContainerWidth'),
  scrollLeft: Ember.computed.alias('controller._tableScrollLeft'),
  top: Ember.computed(function() {
    var bodyHeight, contentHeight, headerHeight;
    headerHeight = this.get('controller.headerHeight');
    contentHeight = this.get('controller._tableContentHeight') + headerHeight;
    bodyHeight = this.get('controller._bodyHeight') + headerHeight;
    if (contentHeight < bodyHeight) {
      return contentHeight;
    } else {
      return bodyHeight;
    }
  }).property('controller._bodyHeight', 'controller.headerHeight', 'controller._tableContentHeight'),
  onMouseWheel: function(event, delta, deltaX, deltaY) {
    var scrollLeft;
    scrollLeft = this.$('.right-table-block').scrollLeft() + deltaX * 50;
    this.set('scrollLeft', scrollLeft);
    return event.preventDefault();
  }
});

Ember.Table.ScrollContainer = Ember.View.extend(Ember.StyleBindingsMixin, Ember.ScrollHandlerMixin, {
  template: Ember.Handlebars.compile("{{view Ember.Table.ScrollPanel}}"),
  classNames: 'scroll-container',
  styleBindings: ['top', 'left', 'width', 'height'],
  width: Ember.computed.alias('controller._scrollContainerWidth'),
  height: Ember.computed.alias('controller._scrollContainerHeight'),
  top: Ember.computed.alias('controller.headerHeight'),
  left: Ember.computed.alias('controller._fixedColumnsWidth'),
  scrollTop: Ember.computed.alias('controller._tableScrollTop'),
  scrollLeft: Ember.computed.alias('controller._tableScrollLeft'),
  onScroll: function(event) {
    this.set('scrollLeft', event.target.scrollLeft);
    return event.preventDefault();
  },
  onScrollLeftDidChange: Ember.observer(function() {
    return this.$().scrollLeft(this.get('scrollLeft'));
  }, 'scrollLeft')
});

Ember.Table.ScrollPanel = Ember.View.extend(Ember.StyleBindingsMixin, {
  classNames: ['scroll-panel'],
  styleBindings: ['width', 'height'],
  width: Ember.computed.alias('controller._tableColumnsWidth'),
  height: Ember.computed.alias('controller._tableContentHeight')
});

},{}]},{},[1,2,3,4,5,6,7,8,9])
;