(function() {

Ember.TEMPLATES["body-container"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"ember-table-table-scrollable-wrapper\">\n  ");
  hashContexts = {'classNames': depth0,'contentBinding': depth0,'columnsBinding': depth0,'widthBinding': depth0,'numItemsShowingBinding': depth0,'scrollTopBinding': depth0,'startIndexBinding': depth0};
  hashTypes = {'classNames': "STRING",'contentBinding': "STRING",'columnsBinding': "STRING",'widthBinding': "STRING",'numItemsShowingBinding': "STRING",'scrollTopBinding': "STRING",'startIndexBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.LazyTableBlock", {hash:{
    'classNames': ("ember-table-left-table-block"),
    'contentBinding': ("controller.bodyContent"),
    'columnsBinding': ("controller.fixedColumns"),
    'widthBinding': ("controller._fixedBlockWidth"),
    'numItemsShowingBinding': ("controller._numItemsShowing"),
    'scrollTopBinding': ("controller._scrollTop"),
    'startIndexBinding': ("controller._startIndex")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  ");
  hashContexts = {'classNames': depth0,'contentBinding': depth0,'columnsBinding': depth0,'scrollLeftBinding': depth0,'widthBinding': depth0,'numItemsShowingBinding': depth0,'scrollTopBinding': depth0,'startIndexBinding': depth0};
  hashTypes = {'classNames': "STRING",'contentBinding': "STRING",'columnsBinding': "STRING",'scrollLeftBinding': "STRING",'widthBinding': "STRING",'numItemsShowingBinding': "STRING",'scrollTopBinding': "STRING",'startIndexBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.LazyTableBlock", {hash:{
    'classNames': ("ember-table-right-table-block"),
    'contentBinding': ("controller.bodyContent"),
    'columnsBinding': ("controller.tableColumns"),
    'scrollLeftBinding': ("controller._tableScrollLeft"),
    'widthBinding': ("controller._tableBlockWidth"),
    'numItemsShowingBinding': ("controller._numItemsShowing"),
    'scrollTopBinding': ("controller._scrollTop"),
    'startIndexBinding': ("controller._startIndex")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["footer-container"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"ember-table-table-fixed-wrapper\">\n  ");
  hashContexts = {'classNames': depth0,'contentBinding': depth0,'columnsBinding': depth0,'widthBinding': depth0,'heightBinding': depth0};
  hashTypes = {'classNames': "STRING",'contentBinding': "STRING",'columnsBinding': "STRING",'widthBinding': "STRING",'heightBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.TableBlock", {hash:{
    'classNames': ("ember-table-left-table-block"),
    'contentBinding': ("controller.footerContent"),
    'columnsBinding': ("controller.fixedColumns"),
    'widthBinding': ("controller._fixedBlockWidth"),
    'heightBinding': ("controller.footerHeight")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  ");
  hashContexts = {'classNames': depth0,'contentBinding': depth0,'columnsBinding': depth0,'scrollLeftBinding': depth0,'widthBinding': depth0,'heightBinding': depth0};
  hashTypes = {'classNames': "STRING",'contentBinding': "STRING",'columnsBinding': "STRING",'scrollLeftBinding': "STRING",'widthBinding': "STRING",'heightBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.TableBlock", {hash:{
    'classNames': ("ember-table-right-table-block"),
    'contentBinding': ("controller.footerContent"),
    'columnsBinding': ("controller.tableColumns"),
    'scrollLeftBinding': ("controller._tableScrollLeft"),
    'widthBinding': ("controller._tableBlockWidth"),
    'heightBinding': ("controller.footerHeight")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["header-cell"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<span ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortByColumn", "view.content", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.content.headerCellName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</span>\n");
  return buffer;
  
});

Ember.TEMPLATES["header-container"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"ember-table-table-fixed-wrapper\">\n  ");
  hashContexts = {'classNames': depth0,'columnsBinding': depth0,'widthBinding': depth0,'heightBinding': depth0};
  hashTypes = {'classNames': "STRING",'columnsBinding': "STRING",'widthBinding': "STRING",'heightBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.HeaderBlock", {hash:{
    'classNames': ("ember-table-left-table-block"),
    'columnsBinding': ("controller.fixedColumns"),
    'widthBinding': ("controller._fixedBlockWidth"),
    'heightBinding': ("controller.headerHeight")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  ");
  hashContexts = {'classNames': depth0,'columnsBinding': depth0,'scrollLeftBinding': depth0,'widthBinding': depth0,'heightBinding': depth0};
  hashTypes = {'classNames': "STRING",'columnsBinding': "STRING",'scrollLeftBinding': "STRING",'widthBinding': "STRING",'heightBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.HeaderBlock", {hash:{
    'classNames': ("ember-table-right-table-block"),
    'columnsBinding': ("controller.tableColumns"),
    'scrollLeftBinding': ("controller._tableScrollLeft"),
    'widthBinding': ("controller._tableBlockWidth"),
    'heightBinding': ("controller.headerHeight")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["header-row"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  hashContexts = {'contentBinding': depth0,'itemViewClassField': depth0,'widthBinding': depth0};
  hashTypes = {'contentBinding': "STRING",'itemViewClassField': "STRING",'widthBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.MultiItemViewCollectionView", {hash:{
    'contentBinding': ("view.content"),
    'itemViewClassField': ("headerCellViewClass"),
    'widthBinding': ("controller._tableColumnsWidth")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["table-row"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  hashContexts = {'rowBinding': depth0,'contentBinding': depth0,'itemViewClassField': depth0,'widthBinding': depth0};
  hashTypes = {'rowBinding': "STRING",'contentBinding': "STRING",'itemViewClassField': "STRING",'widthBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.MultiItemViewCollectionView", {hash:{
    'rowBinding': ("view.row"),
    'contentBinding': ("view.columns"),
    'itemViewClassField': ("tableCellViewClass"),
    'widthBinding': ("controller._tableColumnsWidth")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["tables-container"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.HeaderTableContainer", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.FooterTableContainer", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.hasHeader", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.BodyTableContainer", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.hasFooter", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.ScrollContainer", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.ColumnSortableIndicator", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.AddColumnButton", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

})();

(function() {

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


})();

(function() {


(function($) {
  return $.getScrollbarWidth = function() {
    var $inner, $outer, inner, outer, scrollbarWidth, width1, width2;
    scrollbarWidth = 0;
    if (!scrollbarWidth) {
      $inner = jQuery('<div style="width: 100%; height:200px;">test</div>');
      $outer = jQuery('<div style="width:200px;height:150px; position: absolute; top: 0; left: 0; visibility: hidden; overflow:hidden;"></div>').append($inner);
      inner = $inner[0];
      outer = $outer[0];
      jQuery('body').append(outer);
      width1 = inner.offsetWidth;
      $outer.css('overflow', 'scroll');
      width2 = outer.clientWidth;
      $outer.remove();
      scrollbarWidth = width1 - width2;
    }
    return scrollbarWidth;
  };
})(jQuery);


})();

(function() {

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
  didInsertElement: function() {
    var _this = this;
    this._super();
    if (this._resizeHandler) {
      return;
    }
    this._resizeHandler = function(event) {
      if (!_this.get('resizing')) {
        _this.set('resizing', true);
        if (typeof _this.onResizeStart === "function") {
          _this.onResizeStart(event);
        }
      }
      if (typeof _this.onResize === "function") {
        _this.onResize(event);
      }
      return _this.get('debounceResizeEnd')(event);
    };
    return $(window).resize(this._resizeHandler);
  },
  willDestroyElement: function() {
    $(window).unbind('resize', this._resizeHandler);
    delete this._resizeHandler;
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


})();

(function() {


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


})();

(function() {


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


})();

(function() {


Ember.MultiItemViewCollectionView = Ember.CollectionView.extend(Ember.StyleBindingsMixin, {
  styleBindings: 'width',
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
  willDestroyElement: function() {
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
  willDestroyElement: function() {
    var _ref;
    if ((_ref = this.$()) != null) {
      _ref.unbind('scroll');
    }
    return this._super();
  }
});


})();

(function() {


Ember.Table = Ember.Namespace.create();

Ember.Table.ColumnDefinition = Ember.Object.extend({
  headerCellName: void 0,
  contentPath: void 0,
  minWidth: void 0,
  maxWidth: void 0,
  columnWidth: 150,
  isResizable: true,
  isSortable: true,
  textAlign: 'text-align-right',
  headerCellViewClass: 'Ember.Table.HeaderCell',
  tableCellViewClass: 'Ember.Table.TableCell',
  resize: function(width) {
    return this.set('columnWidth', width);
  },
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
    if (!((0 <= idx && idx < this.get('content.length')))) {
      return;
    }
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
  minHeaderHeight: 30,
  footerHeight: 30,
  hasHeader: true,
  hasFooter: true,
  tableRowViewClass: 'Ember.Table.TableRow',
  prepareTableColumns: Ember.K,
  sortByColumn: Ember.K,
  addColumn: Ember.K,
  onColumnSort: function(column, newIndex) {
    var columns;
    columns = this.get('tableColumns');
    columns.removeObject(column);
    return columns.insertAt(newIndex, column);
  },
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
  _tableScrollTop: 0,
  _tableScrollLeft: 0,
  _width: null,
  _height: null,
  _contentHeaderHeight: null,
  _scrollbarSize: null,
  _hasVerticalScrollbar: Ember.computed(function() {
    var contentHeight, height;
    height = this.get('_height');
    contentHeight = this.get('_tableContentHeight') + this.get('_headerHeight') + this.get('footerHeight');
    if (height < contentHeight) {
      return true;
    } else {
      return false;
    }
  }).property('_height', '_tableContentHeight', '_headerHeight', 'footerHeight'),
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
    var contentHeight, height, scrollbarSize;
    scrollbarSize = this.get('_scrollbarSize');
    height = this.get('_height');
    contentHeight = this.get('_tableContentHeight') + this.get('_headerHeight') + this.get('footerHeight');
    if (this.get('_hasHorizontalScrollbar')) {
      contentHeight += this.get('_scrollbarSize');
    }
    if (contentHeight < height) {
      return contentHeight;
    } else {
      return height;
    }
  }).property('_height', '_tableContentHeight', '_headerHeight', 'footerHeight', '_hasHorizontalScrollbar', '_scrollbarSize'),
  _fixedColumnsWidth: Ember.computed(function() {
    return this._getTotalWidth(this.get('fixedColumns'));
  }).property('fixedColumns.@each.columnWidth'),
  _tableColumnsWidth: Ember.computed(function() {
    return (this._getTotalWidth(this.get('tableColumns'))) + 60;
  }).property('tableColumns.@each.columnWidth'),
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
  _bodyHeight: Ember.computed(function() {
    var bodyHeight;
    bodyHeight = this.get('_tablesContainerHeight');
    if (this.get('_hasHorizontalScrollbar')) {
      bodyHeight -= this.get('_scrollbarSize');
    }
    if (this.get('hasHeader')) {
      bodyHeight -= this.get('_headerHeight');
    }
    if (this.get('hasFooter')) {
      bodyHeight -= this.get('footerHeight');
    }
    return bodyHeight;
  }).property('_tablesContainerHeight', '_hasHorizontalScrollbar', '_headerHeight', 'footerHeight', 'hasHeader', 'hasFooter', '_scrollbarSize'),
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
    return containerHeight = this.get('_tablesContainerHeight') - this.get('_headerHeight');
  }).property('_tablesContainerHeight', '_headerHeight'),
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


})();

(function() {

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
      indices = indices.filter(function(idx) {
        return idx > 0;
      });
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


})();

(function() {


Ember.Table.TablesContainer = Ember.View.extend(Ember.StyleBindingsMixin, Ember.ResizeHandler, {
  templateName: 'tables-container',
  classNames: 'ember-table-tables-container',
  styleBindings: ['height'],
  height: Ember.computed.alias('controller._tablesContainerHeight'),
  didInsertElement: function() {
    var scrollBarWidth;
    this._super();
    this.elementSizeDidChange();
    scrollBarWidth = $.getScrollbarWidth();
    this.set('controller._scrollbarSize', scrollBarWidth);
    return this.set('controller._tableScrollTop', 0);
  },
  onResize: function() {
    return this.elementSizeDidChange();
  },
  elementSizeDidChange: function() {
    this.set('controller._width', this.$().parent().outerWidth());
    return this.set('controller._height', this.$().parent().outerHeight());
  }
});

Ember.Table.TableContainer = Ember.View.extend(Ember.StyleBindingsMixin, {
  classNames: ['ember-table-table-container'],
  styleBindings: ['height', 'width']
});

Ember.Table.TableBlock = Ember.CollectionView.extend(Ember.StyleBindingsMixin, {
  classNames: ['ember-table-table-block'],
  styleBindings: ['width', 'height'],
  itemViewClass: Ember.computed.alias('controller.tableRowViewClass'),
  columns: null,
  content: null,
  scrollLeft: null,
  onScrollLeftDidChange: Ember.observer(function() {
    return this.$().scrollLeft(this.get('scrollLeft'));
  }, 'scrollLeft'),
  height: Ember.computed(function() {
    return this.get('controller._headerHeight');
  }).property('controller._headerHeight')
});

Ember.Table.LazyTableBlock = Ember.LazyContainerView.extend({
  classNames: ['ember-table-table-block'],
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
  classNames: 'ember-table-table-row',
  classNameBindings: ['row.isActive:active', 'row.isSelected:ember-table-selected', 'row.rowStyle', 'isLastRow:ember-table-last-row'],
  styleBindings: ['width', 'height'],
  row: Ember.computed.alias('content'),
  columns: Ember.computed.alias('parentView.columns'),
  width: Ember.computed.alias('controller._rowWidth'),
  height: Ember.computed.alias('controller.rowHeight'),
  isLastRow: Ember.computed(function() {
    return this.get('row') === this.get('controller.bodyContent.lastObject');
  }).property('controller.bodyContent.lastObject', 'row'),
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
  defaultTemplate: Ember.Handlebars.compile("<span class='ember-table-content'>{{view.cellContent}}</span>"),
  classNames: ['ember-table-table-cell'],
  classNameBindings: 'column.textAlign',
  styleBindings: 'width',
  row: Ember.computed.alias('parentView.row'),
  column: Ember.computed.alias('content'),
  rowContent: Ember.computed.alias('row.content'),
  width: Ember.computed.alias('column.columnWidth'),
  init: function() {
    this._super.apply(this, arguments);
    return this.contentPathDidChange();
  },
  contentDidChange: function() {
    return this.notifyPropertyChange('cellContent');
  },
  contentPathWillChange: (function() {
    var contentPath;
    contentPath = this.get('column.contentPath');
    if (contentPath) {
      return this.removeObserver("rowContent." + contentPath, this, this.contentDidChange);
    }
  }).observesBefore('column.contentPath'),
  contentPathDidChange: (function() {
    var contentPath;
    contentPath = this.get('column.contentPath');
    if (contentPath) {
      return this.addObserver("rowContent." + contentPath, this, this.contentDidChange);
    }
  }).observesBefore('column.contentPath'),
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
  classNames: ['ember-table-header-block'],
  itemViewClass: 'Ember.Table.HeaderRow',
  content: Ember.computed(function() {
    return [this.get('columns')];
  }).property('columns')
});

Ember.Table.HeaderRow = Ember.View.extend(Ember.ScrollHandlerMixin, {
  templateName: 'header-row',
  classNames: ['ember-table-table-row', 'ember-table-header-row'],
  columns: Ember.computed.alias('content'),
  scrollLeft: Ember.computed.alias('controller._tableScrollLeft'),
  sortableOption: Ember.computed(function() {
    return {
      axis: 'x',
      containment: 'parent',
      cursor: 'pointer',
      cursorAt: {
        left: 20,
        top: 20
      },
      helper: 'clone',
      items: ".header-cell.sortable",
      opacity: 0.9,
      placeholder: 'ui-state-highlight',
      scroll: true,
      tolerance: 'intersect',
      update: jQuery.proxy(this.onColumnSortDone, this),
      stop: jQuery.proxy(this.onColumnSortStop, this),
      sort: jQuery.proxy(this.onColumnSortChange, this)
    };
  }).property(),
  onScrollLeftDidChange: Ember.observer(function() {
    return this.$().scrollLeft(this.get('scrollLeft'));
  }, 'scrollLeft'),
  didInsertElement: function() {
    this._super();
    return this.$('> div').sortable(this.get('sortableOption'));
  },
  onScroll: function(event) {
    this.set('scrollLeft', event.target.scrollLeft);
    return event.preventDefault();
  },
  onColumnSortStop: function(event, ui) {
    return this.set('controller._isShowingSortableIndicator', false);
  },
  onColumnSortChange: function(event, ui) {
    var left;
    left = this.$('.ui-state-highlight').offset().left - this.$().closest('.ember-table-tables-container').offset().left;
    this.set('controller._isShowingSortableIndicator', true);
    return this.set('controller._sortableIndicatorLeft', left);
  },
  onColumnSortDone: function(event, ui) {
    var column, newIndex, view;
    newIndex = ui.item.index();
    view = Ember.View.views[ui.item.attr('id')];
    column = view.get('column');
    this.get('controller').send('onColumnSort', column, newIndex);
    return this.set('controller._isShowingSortableIndicator', false);
  }
});

Ember.Table.HeaderCell = Ember.View.extend(Ember.StyleBindingsMixin, {
  templateName: 'header-cell',
  classNames: ['ember-table-table-cell', 'ember-table-header-cell'],
  classNameBindings: ['column.isSortable:sortable', 'column.textAlign'],
  styleBindings: ['width', 'height'],
  column: Ember.computed.alias('content'),
  width: Ember.computed.alias('column.columnWidth'),
  height: Ember.computed(function() {
    return this.get('controller._headerHeight');
  }).property('controller._headerHeight'),
  resizableOption: Ember.computed(function() {
    return {
      handles: 'e',
      minHeight: 40,
      minWidth: this.get('column.minWidth') || 100,
      maxWidth: this.get('column.maxWidth') || 500,
      grid: this.get('column.snapGrid'),
      resize: jQuery.proxy(this.onColumnResize, this),
      stop: jQuery.proxy(this.onColumnResize, this)
    };
  }).property(),
  didInsertElement: function() {
    this.elementSizeDidChange();
    if (this.get('column.isResizable')) {
      this.$().resizable(this.get('resizableOption'));
      return this._resizableWidget = this.$().resizable('widget');
    }
  },
  onColumnResize: function(event, ui) {
    this.elementSizeDidChange();
    return this.get("column").resize(ui.size.width);
  },
  elementSizeDidChange: function() {
    var maxHeight;
    maxHeight = 0;
    $('.ember-table-header-block .ember-table-content').each(function() {
      var thisHeight;
      thisHeight = $(this).outerHeight();
      if (thisHeight > maxHeight) {
        return maxHeight = thisHeight;
      }
    });
    return this.set('controller._contentHeaderHeight', maxHeight);
  }
});

Ember.Table.AddColumnButton = Ember.View.extend(Ember.StyleBindingsMixin, {
  tagName: 'span',
  template: Ember.Handlebars.compile('<span>+</span>'),
  styleBindings: ['height', 'width'],
  classNames: 'ember-table-add-column-button',
  height: Ember.computed(function() {
    return this.get('controller._headerHeight') + 1;
  }).property('controller._headerHeight'),
  width: Ember.computed(function() {
    var scrollbarWidth;
    scrollbarWidth = $.getScrollbarWidth();
    if (scrollbarWidth < 26) {
      return 26;
    } else {
      return scrollbarWidth;
    }
  }),
  click: function(event) {
    return this.get('controller').send('addColumn');
  }
});

Ember.Table.ColumnSortableIndicator = Ember.View.extend(Ember.StyleBindingsMixin, {
  classNames: 'ember-table-column-sortable-indicator',
  classNameBindings: 'controller._isShowingSortableIndicator:active',
  styleBindings: ['left', 'height'],
  left: Ember.computed.alias('controller._sortableIndicatorLeft'),
  height: Ember.computed.alias('controller._height')
});

Ember.Table.HeaderTableContainer = Ember.Table.TableContainer.extend({
  templateName: 'header-container',
  classNames: ['ember-table-table-container', 'ember-table-fixed-table-container', 'ember-table-header-container'],
  height: Ember.computed.alias('controller._headerHeight'),
  width: Ember.computed.alias('controller._tableContainerWidth')
});

Ember.Table.BodyTableContainer = Ember.Table.TableContainer.extend(Ember.MouseWheelHandlerMixin, Ember.ScrollHandlerMixin, {
  templateName: 'body-container',
  classNames: ['ember-table-table-container', 'ember-table-body-container'],
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
    scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() + deltaX * 50;
    this.set('scrollLeft', scrollLeft);
    return event.preventDefault();
  }
});

Ember.Table.FooterTableContainer = Ember.Table.TableContainer.extend(Ember.MouseWheelHandlerMixin, {
  templateName: 'footer-container',
  classNames: ['ember-table-table-container', 'ember-table-fixed-table-container', 'ember-table-footer-container'],
  styleBindings: 'top',
  height: Ember.computed.alias('controller.footerHeight'),
  width: Ember.computed.alias('controller._tableContainerWidth'),
  scrollLeft: Ember.computed.alias('controller._tableScrollLeft'),
  top: Ember.computed(function() {
    var bodyHeight, contentHeight, headerHeight;
    headerHeight = this.get('controller._headerHeight');
    contentHeight = this.get('controller._tableContentHeight') + headerHeight;
    bodyHeight = this.get('controller._bodyHeight') + headerHeight;
    if (contentHeight < bodyHeight) {
      return contentHeight;
    } else {
      return bodyHeight;
    }
  }).property('controller._bodyHeight', 'controller._headerHeight', 'controller._tableContentHeight'),
  onMouseWheel: function(event, delta, deltaX, deltaY) {
    var scrollLeft;
    scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() + deltaX * 50;
    this.set('scrollLeft', scrollLeft);
    return event.preventDefault();
  }
});

Ember.Table.ScrollContainer = Ember.View.extend(Ember.StyleBindingsMixin, Ember.ScrollHandlerMixin, {
  template: Ember.Handlebars.compile("{{view Ember.Table.ScrollPanel}}"),
  classNames: ['ember-table-scroll-container'],
  styleBindings: ['top', 'left', 'width', 'height'],
  width: Ember.computed.alias('controller._scrollContainerWidth'),
  height: Ember.computed.alias('controller._scrollContainerHeight'),
  top: Ember.computed.alias('controller._headerHeight'),
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
  classNames: ['ember-table-scroll-panel'],
  styleBindings: ['width', 'height'],
  width: Ember.computed.alias('controller._tableColumnsWidth'),
  height: Ember.computed.alias('controller._tableContentHeight')
});


})();

(function() {


Ember.Table.FluidColumnMixin = Ember.Mixin.create({
  isResizable: Ember.computed(function() {
    if (this.get('_nextColumn')) {
      return true;
    } else {
      return false;
    }
  }).property('_nextColumn'),
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
  }, "controller._tableContainerWidth")
});

Ember.Table.FluidTableControllerMixin = Ember.Mixin.create({
  _tableColumnsWidth: Ember.computed(function() {
    if (this.get("fluidTable")) {
      return "100%";
    }
    return this._getTotalWidth(this.get('tableColumns'));
  }).property('tableColumns.@each.columnWidth', "fluidTable"),
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
  }, "tableColumns.@each", "tableColumns")
});


})();