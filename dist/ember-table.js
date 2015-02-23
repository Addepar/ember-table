/*!
* ember-table v0.4.0
* Copyright 2012-2015 Addepar Inc.
* See LICENSE.
*/
(function() {

var _ref;


})();
(function() {

Ember.TEMPLATES["body-container"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.LazyTableBlock", {hash:{
    'classNames': ("ember-table-left-table-block"),
    'contentBinding': ("controller.bodyContent"),
    'columnsBinding': ("controller.fixedColumns"),
    'widthBinding': ("controller._fixedBlockWidth"),
    'numItemsShowingBinding': ("controller._numItemsShowing"),
    'scrollTopBinding': ("controller._scrollTop"),
    'startIndexBinding': ("controller._startIndex")
  },hashTypes:{'classNames': "STRING",'contentBinding': "STRING",'columnsBinding': "STRING",'widthBinding': "STRING",'numItemsShowingBinding': "STRING",'scrollTopBinding': "STRING",'startIndexBinding': "STRING"},hashContexts:{'classNames': depth0,'contentBinding': depth0,'columnsBinding': depth0,'widthBinding': depth0,'numItemsShowingBinding': depth0,'scrollTopBinding': depth0,'startIndexBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      ");
  return buffer;
  }

  data.buffer.push("<div class=\"antiscroll-box\">\n  <div class=\"antiscroll-inner\">\n    <div class=\"ember-table-table-scrollable-wrapper\">\n      ");
  stack1 = helpers['if'].call(depth0, "controller.numFixedColumns", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.LazyTableBlock", {hash:{
    'classNames': ("ember-table-right-table-block"),
    'contentBinding': ("controller.bodyContent"),
    'columnsBinding': ("controller.tableColumns"),
    'scrollLeftBinding': ("controller._tableScrollLeft"),
    'widthBinding': ("controller._tableBlockWidth"),
    'numItemsShowingBinding': ("controller._numItemsShowing"),
    'scrollTopBinding': ("controller._scrollTop"),
    'startIndexBinding': ("controller._startIndex")
  },hashTypes:{'classNames': "STRING",'contentBinding': "STRING",'columnsBinding': "STRING",'scrollLeftBinding': "STRING",'widthBinding': "STRING",'numItemsShowingBinding': "STRING",'scrollTopBinding': "STRING",'startIndexBinding': "STRING"},hashContexts:{'classNames': depth0,'contentBinding': depth0,'columnsBinding': depth0,'scrollLeftBinding': depth0,'widthBinding': depth0,'numItemsShowingBinding': depth0,'scrollTopBinding': depth0,'startIndexBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/ember-table"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.HeaderTableContainer", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.FooterTableContainer", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "controller.hasHeader", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.BodyTableContainer", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "controller.hasFooter", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.ScrollContainer", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.ColumnSortableIndicator", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["footer-container"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.TableBlock", {hash:{
    'classNames': ("ember-table-left-table-block"),
    'contentBinding': ("controller.footerContent"),
    'columnsBinding': ("controller.fixedColumns"),
    'widthBinding': ("controller._fixedBlockWidth"),
    'heightBinding': ("controller.footerHeight")
  },hashTypes:{'classNames': "STRING",'contentBinding': "STRING",'columnsBinding': "STRING",'widthBinding': "STRING",'heightBinding': "STRING"},hashContexts:{'classNames': depth0,'contentBinding': depth0,'columnsBinding': depth0,'widthBinding': depth0,'heightBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"ember-table-table-fixed-wrapper\">\n  ");
  stack1 = helpers['if'].call(depth0, "controller.numFixedColumns", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.TableBlock", {hash:{
    'classNames': ("ember-table-right-table-block"),
    'contentBinding': ("controller.footerContent"),
    'columnsBinding': ("controller.tableColumns"),
    'scrollLeftBinding': ("controller._tableScrollLeft"),
    'widthBinding': ("controller._tableBlockWidth"),
    'heightBinding': ("controller.footerHeight")
  },hashTypes:{'classNames': "STRING",'contentBinding': "STRING",'columnsBinding': "STRING",'scrollLeftBinding': "STRING",'widthBinding': "STRING",'heightBinding': "STRING"},hashContexts:{'classNames': depth0,'contentBinding': depth0,'columnsBinding': depth0,'scrollLeftBinding': depth0,'widthBinding': depth0,'heightBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["header-cell"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

Ember.TEMPLATES["header-container"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.HeaderBlock", {hash:{
    'classNames': ("ember-table-left-table-block"),
    'columnsBinding': ("controller.fixedColumns"),
    'widthBinding': ("controller._fixedBlockWidth"),
    'heightBinding': ("controller.headerHeight")
  },hashTypes:{'classNames': "STRING",'columnsBinding': "STRING",'widthBinding': "STRING",'heightBinding': "STRING"},hashContexts:{'classNames': depth0,'columnsBinding': depth0,'widthBinding': depth0,'heightBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"ember-table-table-fixed-wrapper\">\n  ");
  stack1 = helpers['if'].call(depth0, "controller.numFixedColumns", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.HeaderBlock", {hash:{
    'classNames': ("ember-table-right-table-block"),
    'columnsBinding': ("controller.tableColumns"),
    'scrollLeftBinding': ("controller._tableScrollLeft"),
    'widthBinding': ("controller._tableBlockWidth"),
    'heightBinding': ("controller.headerHeight")
  },hashTypes:{'classNames': "STRING",'columnsBinding': "STRING",'scrollLeftBinding': "STRING",'widthBinding': "STRING",'heightBinding': "STRING"},hashContexts:{'classNames': depth0,'columnsBinding': depth0,'scrollLeftBinding': depth0,'widthBinding': depth0,'heightBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["header-row"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.MultiItemViewCollectionView", {hash:{
    'contentBinding': ("view.content"),
    'itemViewClassField': ("headerCellViewClass"),
    'widthBinding': ("controller._tableColumnsWidth")
  },hashTypes:{'contentBinding': "STRING",'itemViewClassField': "STRING",'widthBinding': "STRING"},hashContexts:{'contentBinding': depth0,'itemViewClassField': depth0,'widthBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["scroll-container"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"antiscroll-wrap\">\n  <div class=\"antiscroll-inner\">\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Table.ScrollPanel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["table-cell"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<span class=\"ember-table-content\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "view.cellContent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</span>");
  return buffer;
  
});

Ember.TEMPLATES["table-row"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.MultiItemViewCollectionView", {hash:{
    'rowBinding': ("view.row"),
    'contentBinding': ("view.columns"),
    'itemViewClassField': ("tableCellViewClass"),
    'widthBinding': ("controller._tableColumnsWidth")
  },hashTypes:{'rowBinding': "STRING",'contentBinding': "STRING",'itemViewClassField': "STRING",'widthBinding': "STRING"},hashContexts:{'rowBinding': depth0,'contentBinding': depth0,'itemViewClassField': depth0,'widthBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

})();
(function() {

Ember.Table = Ember.Namespace.create();

Ember.Table.VERSION = '0.4.0';

if ((_ref = Ember.libraries) != null) {
  _ref.register('Ember Table', Ember.Table.VERSION);
}


})();
(function() {

Ember.AddeparMixins = Ember.AddeparMixins || Ember.Namespace.create();

Ember.AddeparMixins.ResizeHandlerMixin = Ember.Mixin.create({
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
    if ((typeof event.target.id !== "undefined" && event.target.id !== null)
        && (event.target.id !== this.elementId)) {
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
    this._resizeHandler = jQuery.proxy(this.get('handleWindowResize'), this);
    return jQuery(window).on("resize." + this.elementId, this._resizeHandler);
  },
  _removeDocumentHandlers: function() {
    jQuery(window).off("resize." + this.elementId, this._resizeHandler);
    return this._resizeHandler = null;
  }
});


})();
(function() {

Ember.AddeparMixins = Ember.AddeparMixins || Ember.Namespace.create();

Ember.AddeparMixins.StyleBindingsMixin = Ember.Mixin.create({
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
  applyStyleBindings: function() {
    var lookup, properties, styleBindings, styleComputed, styles,
      _this = this;
    styleBindings = this.styleBindings;
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

/*
jQuery.browser shim that makes HT working with jQuery 1.8+
*/

if (!jQuery.browser) {
  (function() {
    var browser, matched, res;
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
    res = jQuery.browser = browser;
    return res;
  })();
}


})();
(function() {


Ember.LazyContainerView = Ember.ContainerView.extend(Ember.AddeparMixins.StyleBindingsMixin, {
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
    itemViewClass = this.get('itemViewClass');
    if (typeof itemViewClass === 'string') {
      if (/[A-Z]+/.exec(itemViewClass)) {
        itemViewClass = Ember.get(Ember.lookup, itemViewClass);
      } else {
        itemViewClass = this.container.lookupFactory("view:" + itemViewClass);
      }
    }
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
      startIndex = 0;
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

/**
 * Lazy Item View
 * @class
 * @alias Ember.LazyItemView
*/


Ember.LazyItemView = Ember.View.extend(Ember.AddeparMixins.StyleBindingsMixin, {
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


Ember.MultiItemViewCollectionView = Ember.CollectionView.extend(Ember.AddeparMixins.StyleBindingsMixin, {
  styleBindings: 'width',
  itemViewClassField: null,
  createChildView: function(view, attrs) {
    var itemViewClass, itemViewClassField;
    itemViewClassField = this.get('itemViewClassField');
    itemViewClass = attrs.content.get(itemViewClassField);
    if (typeof itemViewClass === 'string') {
      if (/[A-Z]+/.exec(itemViewClass)) {
        itemViewClass = Ember.get(Ember.lookup, itemViewClass);
      } else {
        itemViewClass = this.container.lookupFactory("view:" + itemViewClass);
      }
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
  scrollElementSelector: '',
  didInsertElement: function() {
    var _this = this;
    this._super();
    return this.$(this.get('scrollElementSelector')).bind('scroll', function(event) {
      return Ember.run(_this, _this.onScroll, event);
    });
  },
  willDestroyElement: function() {
    var _ref;
    if ((_ref = this.$(this.get('scrollElementSelector'))) != null) {
      _ref.unbind('scroll');
    }
    return this._super();
  }
});

Ember.TouchMoveHandlerMixin = Ember.Mixin.create({
  onTouchMove: Ember.K,
  didInsertElement: function() {
    var startX, startY,
      _this = this;
    this._super();
    startX = startY = 0;
    this.$().bind('touchstart', function(event) {
      startX = event.originalEvent.targetTouches[0].pageX;
      startY = event.originalEvent.targetTouches[0].pageY;
    });
    return this.$().bind('touchmove', function(event) {
      var deltaX, deltaY, newX, newY;
      newX = event.originalEvent.targetTouches[0].pageX;
      newY = event.originalEvent.targetTouches[0].pageY;
      deltaX = -(newX - startX);
      deltaY = -(newY - startY);
      Ember.run(_this, _this.onTouchMove, event, deltaX, deltaY);
      startX = newX;
      startY = newY;
    });
  },
  willDestroyElement: function() {
    this.$().unbind('touchstart');
    this.$().unbind('touchmove');
    return this._super();
  }
});

Ember.Table.RowArrayController = Ember.ArrayController.extend({
  itemController: null,
  content: null,
  rowContent: Ember.computed(function() {
    return [];
  }).property(),
  controllerAt: function(idx, object, controllerClass) {
    var container, subController, subControllers;
    container = this.get('container');
    subControllers = this.get('_subControllers');
    subController = subControllers[idx];
    if (subController) {
      return subController;
    }
    subController = this.get('itemController').create({
      target: this,
      parentController: this.get('parentController') || this,
      content: object
    });
    subControllers[idx] = subController;
    return subController;
  }
});

Ember.Table.ShowHorizontalScrollMixin = Ember.Mixin.create({
  mouseEnter: function(event) {
    var $horizontalScroll, $tablesContainer;
    $tablesContainer = $(event.target).parents('.ember-table-tables-container');
    $horizontalScroll = $tablesContainer.find('.antiscroll-scrollbar-horizontal');
    return $horizontalScroll.addClass('antiscroll-scrollbar-shown');
  },
  mouseLeave: function(event) {
    var $horizontalScroll, $tablesContainer;
    $tablesContainer = $(event.target).parents('.ember-table-tables-container');
    $horizontalScroll = $tablesContainer.find('.antiscroll-scrollbar-horizontal');
    return $horizontalScroll.removeClass('antiscroll-scrollbar-shown');
  }
});

Ember.Table.RegisterTableComponentMixin = Ember.Mixin.create({
  tableComponent: null,
  init: function() {
    if (!this.get('tableComponent')) {
      this.set('tableComponent', this.nearestWithProperty('isEmberTable'));
    }
    return this._super();
  }
});


})();
(function() {


Ember.Table.ColumnDefinition = Ember.Object.extend({
  headerCellName: void 0,
  contentPath: void 0,
  minWidth: 25,
  maxWidth: void 0,
  savedWidth: 150,
  isResizable: true,
  isSortable: true,
  textAlign: 'text-align-right',
  canAutoResize: false,
  headerCellView: 'Ember.Table.HeaderCell',
  headerCellViewClass: Ember.computed.alias('headerCellView'),
  tableCellView: 'Ember.Table.TableCell',
  tableCellViewClass: Ember.computed.alias('tableCellView'),
  getCellContent: function(row) {
    var path;
    path = this.get('contentPath');
    Ember.assert("You must either provide a contentPath or override " + "getCellContent in your column definition", path != null);
    return Ember.get(row, path);
  },
  setCellContent: Ember.K,
  width: Ember.computed.oneWay('savedWidth'),
  resize: function(width) {
    this.set('savedWidth', width);
    return this.set('width', width);
  },
  nextColumn: null,
  prevColumn: null,
  isAtMinWidth: Ember.computed(function() {
    return this.get('width') === this.get('minWidth');
  }).property('width', 'minWidth'),
  isAtMaxWidth: Ember.computed(function() {
    return this.get('width') === this.get('maxWidth');
  }).property('width', 'maxWidth')
});


})();
(function() {


Ember.Table.Row = Ember.ObjectProxy.extend({
  content: null,
  isSelected: Ember.computed(function(key, val) {
    if (arguments.length > 1) {
      this.get('parentController').setSelected(this, val);
    }
    return this.get('parentController').isSelected(this);
  }).property('parentController.selection.[]'),
  isShowing: true,
  isHovered: false
});


})();
(function() {


Ember.Table.TableContainer = Ember.View.extend(Ember.AddeparMixins.StyleBindingsMixin, {
  classNames: ['ember-table-table-container'],
  styleBindings: ['height', 'width']
});

Ember.Table.TableBlock = Ember.CollectionView.extend(Ember.AddeparMixins.StyleBindingsMixin, Ember.Table.RegisterTableComponentMixin, {
  classNames: ['ember-table-table-block'],
  styleBindings: ['width', 'height'],
  itemViewClass: Ember.computed.alias('tableComponent.tableRowViewClass'),
  columns: null,
  content: null,
  scrollLeft: null,
  onScrollLeftDidChange: Ember.observer(function() {
    return this.$().scrollLeft(this.get('scrollLeft'));
  }, 'scrollLeft'),
  height: Ember.computed(function() {
    return this.get('tableComponent._headerHeight');
  }).property('tableComponent._headerHeight')
});

Ember.Table.LazyTableBlock = Ember.LazyContainerView.extend(Ember.Table.RegisterTableComponentMixin, {
  classNames: ['ember-table-table-block'],
  styleBindings: ['width'],
  itemViewClass: Ember.computed.alias('tableComponent.tableRowViewClass'),
  rowHeight: Ember.computed.alias('tableComponent.rowHeight'),
  columns: null,
  content: null,
  scrollLeft: null,
  scrollTop: null,
  onScrollLeftDidChange: Ember.observer(function() {
    return this.$().scrollLeft(this.get('scrollLeft'));
  }, 'scrollLeft')
});

Ember.Table.TableRow = Ember.LazyItemView.extend(Ember.Table.RegisterTableComponentMixin, {
  templateName: 'table-row',
  classNames: 'ember-table-table-row',
  classNameBindings: ['row.isHovered:ember-table-hover', 'row.isSelected:ember-table-selected', 'row.rowStyle', 'isLastRow:ember-table-last-row'],
  styleBindings: ['width', 'height'],
  row: Ember.computed.alias('content'),
  columns: Ember.computed.alias('parentView.columns'),
  width: Ember.computed.alias('tableComponent._rowWidth'),
  height: Ember.computed.alias('tableComponent.rowHeight'),
  isLastRow: Ember.computed(function() {
    return this.get('row') === this.get('tableComponent.bodyContent.lastObject');
  }).property('tableComponent.bodyContent.lastObject', 'row'),
  mouseEnter: function(event) {
    var row;
    row = this.get('row');
    if (row) {
      return row.set('isHovered', true);
    }
  },
  mouseLeave: function(event) {
    var row;
    row = this.get('row');
    if (row) {
      return row.set('isHovered', false);
    }
  },
  teardownContent: function() {
    var row;
    row = this.get('row');
    if (row) {
      return row.set('isHovered', false);
    }
  }
});

Ember.Table.TableCell = Ember.View.extend(Ember.AddeparMixins.StyleBindingsMixin, {
  templateName: 'table-cell',
  classNames: ['ember-table-cell'],
  classNameBindings: 'column.textAlign',
  styleBindings: 'width',
  init: function() {
    this._super();
    this.contentPathDidChange();
    return this.contentDidChange();
  },
  row: Ember.computed.alias('parentView.row'),
  column: Ember.computed.alias('content'),
  width: Ember.computed.alias('column.width'),
  contentDidChange: function() {
    return this.notifyPropertyChange('cellContent');
  },
  contentPathWillChange: Ember.beforeObserver('column.contentPath', function() {
    var contentPath;
    contentPath = this.get('column.contentPath');
    if (contentPath) {
      return this.removeObserver("row." + contentPath, this, this.contentDidChange);
    }
  }),
  contentPathDidChange: Ember.beforeObserver('column.contentPath', function() {
    var contentPath;
    contentPath = this.get('column.contentPath');
    if (contentPath) {
      return this.addObserver("row." + contentPath, this, this.contentDidChange);
    }
  }),
  cellContent: Ember.computed(function(key, value) {
    var column, row;
    row = this.get('row');
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
  }).property('row.isLoaded', 'column')
});

Ember.Table.HeaderBlock = Ember.Table.TableBlock.extend({
  classNames: ['ember-table-header-block'],
  itemViewClass: 'Ember.Table.HeaderRow',
  content: Ember.computed(function() {
    return [this.get('columns')];
  }).property('columns')
});

Ember.Table.HeaderRow = Ember.View.extend(Ember.AddeparMixins.StyleBindingsMixin, Ember.Table.RegisterTableComponentMixin, {
  templateName: 'header-row',
  classNames: ['ember-table-table-row', 'ember-table-header-row'],
  styleBindings: ['width'],
  columns: Ember.computed.alias('content'),
  width: Ember.computed.alias('tableComponent._rowWidth'),
  scrollLeft: Ember.computed.alias('tableComponent._tableScrollLeft'),
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
      tolerance: 'intersect',
      update: jQuery.proxy(this.onColumnSortDone, this),
      stop: jQuery.proxy(this.onColumnSortStop, this),
      sort: jQuery.proxy(this.onColumnSortChange, this)
    };
  }),
  onScrollLeftDidChange: Ember.observer(function() {
    return this.$().scrollLeft(this.get('scrollLeft'));
  }, 'scrollLeft'),
  didInsertElement: function() {
    this._super();
    if (this.get('tableComponent.enableColumnReorder')) {
      return this.$('> div').sortable(this.get('sortableOption'));
    }
  },
  willDestroyElement: function() {
    var _ref;
    if (this.get('tableComponent.enableColumnReorder')) {
      if ((_ref = this.$('> div')) != null) {
        _ref.sortable('destroy');
      }
    }
    return this._super();
  },
  onScroll: function(event) {
    this.set('scrollLeft', event.target.scrollLeft);
    return event.preventDefault();
  },
  onColumnSortStop: function(event, ui) {
    return this.set('tableComponent._isShowingSortableIndicator', false);
  },
  onColumnSortChange: function(event, ui) {
    var left;
    left = this.$('.ui-state-highlight').offset().left - this.$().closest('.ember-table-tables-container').offset().left;
    this.set('tableComponent._isShowingSortableIndicator', true);
    return this.set('tableComponent._sortableIndicatorLeft', left);
  },
  onColumnSortDone: function(event, ui) {
    var column, newIndex, view;
    newIndex = ui.item.index();
    this.$('> div').sortable('cancel');
    view = Ember.View.views[ui.item.attr('id')];
    column = view.get('column');
    this.get('tableComponent').onColumnSort(column, newIndex);
    return this.set('tableComponent._isShowingSortableIndicator', false);
  }
});

Ember.Table.HeaderCell = Ember.View.extend(Ember.AddeparMixins.StyleBindingsMixin, Ember.Table.RegisterTableComponentMixin, {
  templateName: 'header-cell',
  classNames: ['ember-table-cell', 'ember-table-header-cell'],
  classNameBindings: ['column.isSortable:sortable', 'column.textAlign'],
  styleBindings: ['width', 'height'],
  column: Ember.computed.alias('content'),
  width: Ember.computed.alias('column.width'),
  minWidth: Ember.computed.alias('column.minWidth'),
  maxWidth: Ember.computed.alias('column.maxWidth'),
  nextResizableColumn: Ember.computed.alias('column.nextResizableColumn'),
  height: Ember.computed.alias('tableComponent._headerHeight'),
  effectiveMinWidth: Ember.computed(function() {
    var nextColumnMaxDiff;
    if (this.get('tableComponent.columnMode') === 'standard') {
      return this.get('minWidth');
    }
    nextColumnMaxDiff = this.get('nextResizableColumn.maxWidth') - this.get('nextResizableColumn.width');
    if (this.get('minWidth') && nextColumnMaxDiff) {
      return Math.min(this.get('minWidth'), this.get('width') - nextColumnMaxDiff);
    } else if (this.get('minWidth')) {
      return this.get('minWidth');
    } else {
      return this.get('width') - nextColumnMaxDiff;
    }
  }).property('width', 'minWidth', 'tableComponent.columnMode', 'nextResizableColumn.{width,maxWidth}'),
  effectiveMaxWidth: Ember.computed(function() {
    var nextColumnMaxDiff;
    if (this.get('tableComponent.columnMode') === 'standard') {
      return this.get('maxWidth');
    }
    nextColumnMaxDiff = this.get('nextResizableColumn.width') - this.get('nextResizableColumn.minWidth');
    if (this.get('maxWidth') && !Ember.isNone(nextColumnMaxDiff)) {
      return Math.min(this.get('maxWidth'), this.get('width') + nextColumnMaxDiff);
    } else if (this.get('maxWidth')) {
      return this.get('maxWidth');
    } else {
      return this.get('width') + nextColumnMaxDiff;
    }
  }).property('width', 'minWidth', 'tableComponent.columnMode', 'nextResizableColumn.{width,minWidth}'),
  resizableOption: Ember.computed(function() {
    return {
      handles: 'e',
      minWidth: Math.max(this.get('effectiveMinWidth') || 0, 10),
      maxWidth: this.get('effectiveMaxWidth'),
      grid: this.get('column.snapGrid'),
      resize: jQuery.proxy(this.onColumnResize, this),
      stop: jQuery.proxy(this.onColumnResize, this)
    };
  }).property('effectiveMinWidth', 'effectiveMaxWidth'),
  didInsertElement: function() {
    this.elementSizeDidChange();
    return this.recomputeResizableHandle();
  },
  willDestroyElement: function() {
    if (this.$().is('.ui-resizable')) {
      this.$().resizable('destroy');
    }
    return this._super();
  },
  _isResizable: Ember.computed(function() {
    if (this.get('tableComponent.columnMode') === 'standard') {
      return this.get('column.isResizable');
    } else {
      return this.get('column.isResizable') && this.get('nextResizableColumn');
    }
  }).property('column.isResizable', 'tableComponent.columnMode', 'nextResizableColumn'),
  onColumnResize: function(event, ui) {
    var diff;
    if (this.get('tableComponent.columnMode') === 'standard') {
      this.get('column').resize(ui.size.width);
      this.set('tableComponent.columnsFillTable', false);
    } else {
      diff = this.get('width') - ui.size.width;
      this.get('column').resize(ui.size.width);
      this.get('nextResizableColumn').resize(this.get('nextResizableColumn.width') + diff);
    }
    this.elementSizeDidChange();
    if (event.type === 'resizestop') {
      this.get('tableComponent').elementSizeDidChange();
    }
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
    return this.set('tableComponent._contentHeaderHeight', maxHeight);
  },
  resizableObserver: Ember.observer(function() {
    return this.recomputeResizableHandle();
  }, 'resizableOption', 'column.isResizable', 'tableComponent.columnMode', 'nextResizableColumn'),
  recomputeResizableHandle: function() {
    if (this.get('_isResizable')) {
      return this.$().resizable(this.get('resizableOption'));
    } else {
      if (this.$().is('.ui-resizable')) {
        return this.$().resizable('destroy');
      }
    }
  }
});

Ember.Table.ColumnSortableIndicator = Ember.View.extend(Ember.AddeparMixins.StyleBindingsMixin, Ember.Table.RegisterTableComponentMixin, {
  classNames: 'ember-table-column-sortable-indicator',
  classNameBindings: 'tableComponent._isShowingSortableIndicator:active',
  styleBindings: ['left', 'height'],
  left: Ember.computed.alias('tableComponent._sortableIndicatorLeft'),
  height: Ember.computed.alias('tableComponent._height')
});

Ember.Table.HeaderTableContainer = Ember.Table.TableContainer.extend(Ember.Table.ShowHorizontalScrollMixin, Ember.Table.RegisterTableComponentMixin, {
  templateName: 'header-container',
  classNames: ['ember-table-table-container', 'ember-table-fixed-table-container', 'ember-table-header-container'],
  height: Ember.computed.alias('tableComponent._headerHeight'),
  width: Ember.computed.alias('tableComponent._tableContainerWidth')
});

Ember.Table.BodyTableContainer = Ember.Table.TableContainer.extend(Ember.MouseWheelHandlerMixin, Ember.TouchMoveHandlerMixin, Ember.ScrollHandlerMixin, Ember.Table.ShowHorizontalScrollMixin, Ember.Table.RegisterTableComponentMixin, {
  templateName: 'body-container',
  classNames: ['ember-table-table-container', 'ember-table-body-container', 'antiscroll-wrap'],
  height: Ember.computed.alias('tableComponent._bodyHeight'),
  width: Ember.computed.alias('tableComponent._width'),
  scrollTop: Ember.computed.alias('tableComponent._tableScrollTop'),
  scrollLeft: Ember.computed.alias('tableComponent._tableScrollLeft'),
  scrollElementSelector: '.antiscroll-inner',
  onScroll: function(event) {
    this.set('scrollTop', event.target.scrollTop);
    return event.preventDefault();
  },
  onMouseWheel: function(event, delta, deltaX, deltaY) {
    var scrollLeft;
    if (!(Math.abs(deltaX) > Math.abs(deltaY))) {
      return;
    }
    scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() + deltaX;
    this.set('scrollLeft', scrollLeft);
    return event.preventDefault();
  },
  onTouchMove: function(event, deltaX, deltaY) {
    var scrollLeft;
    if (!(Math.abs(deltaX) > Math.abs(deltaY))) {
      return;
    }
    scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() + deltaX;
    this.set('scrollLeft', scrollLeft);
    return event.preventDefault();
  }
});

Ember.Table.FooterTableContainer = Ember.Table.TableContainer.extend(Ember.MouseWheelHandlerMixin, Ember.TouchMoveHandlerMixin, Ember.Table.ShowHorizontalScrollMixin, Ember.Table.RegisterTableComponentMixin, {
  templateName: 'footer-container',
  classNames: ['ember-table-table-container', 'ember-table-fixed-table-container', 'ember-table-footer-container'],
  styleBindings: 'top',
  height: Ember.computed.alias('tableComponent.footerHeight'),
  width: Ember.computed.alias('tableComponent._tableContainerWidth'),
  scrollLeft: Ember.computed.alias('tableComponent._tableScrollLeft'),
  top: Ember.computed(function() {
    var bodyHeight, contentHeight, headerHeight;
    headerHeight = this.get('tableComponent._headerHeight');
    contentHeight = this.get('tableComponent._tableContentHeight') + headerHeight;
    bodyHeight = this.get('tableComponent._bodyHeight') + headerHeight;
    if (contentHeight < bodyHeight) {
      return contentHeight;
    } else {
      return bodyHeight;
    }
  }).property('tableComponent._bodyHeight', 'tableComponent._headerHeight', 'tableComponent._tableContentHeight'),
  onMouseWheel: function(event, delta, deltaX, deltaY) {
    var scrollLeft;
    scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() + deltaX;
    this.set('scrollLeft', scrollLeft);
    return event.preventDefault();
  },
  onTouchMove: function(event, deltaX, deltaY) {
    var scrollLeft;
    scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() + deltaX;
    this.set('scrollLeft', scrollLeft);
    return event.preventDefault();
  }
});

Ember.Table.ScrollContainer = Ember.View.extend(Ember.AddeparMixins.StyleBindingsMixin, Ember.ScrollHandlerMixin, Ember.Table.RegisterTableComponentMixin, {
  templateName: 'scroll-container',
  classNames: ['ember-table-scroll-container'],
  styleBindings: ['left', 'width', 'height'],
  scrollElementSelector: '.antiscroll-inner',
  width: Ember.computed.alias('tableComponent._scrollContainerWidth'),
  height: 10,
  left: Ember.computed.alias('tableComponent._fixedColumnsWidth'),
  scrollTop: Ember.computed.alias('tableComponent._tableScrollTop'),
  scrollLeft: Ember.computed.alias('tableComponent._tableScrollLeft'),
  didInsertElement: function() {
    this._super();
    return this.onScrollLeftDidChange();
  },
  onScroll: function(event) {
    this.set('scrollLeft', event.target.scrollLeft);
    return event.preventDefault();
  },
  onScrollLeftDidChange: Ember.observer(function() {
    var selector;
    selector = this.get('scrollElementSelector');
    return this.$(selector).scrollLeft(this.get('scrollLeft'));
  }, 'scrollLeft', 'scrollElementSelector')
});

Ember.Table.ScrollPanel = Ember.View.extend(Ember.AddeparMixins.StyleBindingsMixin, Ember.Table.RegisterTableComponentMixin, {
  classNames: ['ember-table-scroll-panel'],
  styleBindings: ['width', 'height'],
  width: Ember.computed.alias('tableComponent._tableColumnsWidth'),
  height: Ember.computed.alias('tableComponent._tableContentHeight')
});


})();
(function() {


Ember.Table.EmberTableComponent = Ember.Component.extend(Ember.AddeparMixins.StyleBindingsMixin, Ember.AddeparMixins.ResizeHandlerMixin, {
  layoutName: 'components/ember-table',
  classNames: ['ember-table-tables-container'],
  classNameBindings: ['enableContentSelection:ember-table-content-selectable'],
  styleBindings: ['height'],
  content: null,
  columns: null,
  numFixedColumns: 0,
  numFooterRow: 0,
  rowHeight: 30,
  minHeaderHeight: 30,
  footerHeight: 30,
  hasHeader: true,
  hasFooter: true,
  enableColumnReorder: true,
  enableContentSelection: false,
  columnMode: 'standard',
  selectionMode: 'single',
  selection: Ember.computed(function(key, val) {
    var selection, selectionMode;
    selectionMode = this.get('selectionMode');
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
    selection = this.get('persistedSelection').copy().addObjects(this.get('rangeSelection'));
    switch (selectionMode) {
      case 'none':
        return null;
      case 'single':
        return selection[0] || null;
      case 'multiple':
        return selection;
    }
  }).property('persistedSelection.[]', 'rangeSelection.[]', 'selectionMode'),
  isEmberTable: true,
  columnsFillTable: true,
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
    return this.prepareTableColumns();
  },
  actions: {
    addColumn: Ember.K,
    sortByColumn: Ember.K
  },
  height: Ember.computed.alias('_tablesContainerHeight'),
  tableRowView: 'Ember.Table.TableRow',
  tableRowViewClass: Ember.computed.alias('tableRowView'),
  onColumnSort: function(column, newIndex) {
    var columns, numFixedColumns;
    numFixedColumns = this.get('fixedColumns.length');
    columns = this.get('columns');
    columns.removeObject(column);
    columns.insertAt(numFixedColumns + newIndex, column);
    return this.prepareTableColumns();
  },
  bodyContent: Ember.computed(function() {
    return Ember.Table.RowArrayController.create({
      target: this,
      parentController: this,
      container: this.get('container'),
      itemController: Ember.Table.Row,
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
    return columns.slice(0, numFixedColumns) || [];
  }).property('columns.@each', 'numFixedColumns'),
  tableColumns: Ember.computed(function() {
    var columns, numFixedColumns;
    columns = this.get('columns');
    if (!columns) {
      return Ember.A();
    }
    numFixedColumns = this.get('numFixedColumns') || 0;
    return columns.slice(numFixedColumns, columns.get('length')) || [];
  }).property('columns.@each', 'numFixedColumns'),
  prepareTableColumns: function() {
    var col, columns, i, _i, _len, _results;
    columns = this.get('columns') || Ember.A();
    columns.setEach('controller', this);
    _results = [];
    for (i = _i = 0, _len = columns.length; _i < _len; i = ++_i) {
      col = columns[i];
      _results.push(col.set('nextResizableColumn', this.getNextResizableColumn(columns, i)));
    }
    return _results;
  },
  getNextResizableColumn: function(columns, index) {
    var column;
    while (index < columns.length) {
      index += 1;
      column = columns.objectAt(index);
      if (column != null ? column.get('isResizable') : void 0) {
        return column;
      }
    }
    return null;
  },
  didInsertElement: function() {
    this._super();
    this.set('_tableScrollTop', 0);
    this.elementSizeDidChange();
    return this.doForceFillColumns();
  },
  onResizeEnd: function() {
    if (this.tableWidthNowTooSmall()) {
      this.set('columnsFillTable', true);
    }
    return Ember.run(this, this.elementSizeDidChange);
  },
  elementSizeDidChange: function() {
    if ((this.get('_state') || this.get('state')) !== 'inDOM') {
      return;
    }
    this.set('_width', this.$().parent().outerWidth());
    this.set('_height', this.$().parent().outerHeight());
    return Ember.run.next(this, this.updateLayout);
  },
  tableWidthNowTooSmall: function() {
    var newTableWidth, oldTableWidth, totalColumnWidth;
    if ((this.get('_state') || this.get('state')) !== 'inDOM') {
      return false;
    }
    oldTableWidth = this.get('_width');
    newTableWidth = this.$().parent().outerWidth();
    totalColumnWidth = this._getTotalWidth(this.get('tableColumns'));
    return (oldTableWidth > totalColumnWidth) && (newTableWidth < totalColumnWidth);
  },
  expandResizeableColumnsToFillTable: function() {
    var fixedColumnsWidth, tableColumns, totalResizableWidth, totalWidth, unresizableColumns, unresizableWidth;
    totalWidth = this.get('_width');
    fixedColumnsWidth = this.get('_fixedColumnsWidth');
    tableColumns = this.get('tableColumns');
    unresizableColumns = tableColumns.filterProperty('canAutoResize', false);
    unresizableWidth = this._getTotalWidth(unresizableColumns);
    return totalResizableWidth = totalWidth - unresizableWidth;
  },
  updateLayout: function() {
    if ((this.get('_state') || this.get('state')) !== 'inDOM') {
      return;
    }
    this.$('.antiscroll-wrap').antiscroll().data('antiscroll').rebuild();
    if (this.get('columnsFillTable')) {
      return this.doForceFillColumns();
    }
  },
  doForceFillColumns: function() {
    var allColumns, availableWidth, columnsToResize, doNextLoop, nextColumnsToResize, totalResizableWidth, unresizableColumns, _results,
      _this = this;
    allColumns = this.get('columns');
    columnsToResize = allColumns.filterProperty('canAutoResize');
    unresizableColumns = allColumns.filterProperty('canAutoResize', false);
    availableWidth = this.get('_width') - this._getTotalWidth(unresizableColumns);
    doNextLoop = true;
    _results = [];
    while (doNextLoop) {
      doNextLoop = false;
      nextColumnsToResize = [];
      totalResizableWidth = this._getTotalWidth(columnsToResize);
      columnsToResize.forEach(function(column) {
        var newWidth;
        newWidth = Math.floor((column.get('width') / totalResizableWidth) * availableWidth);
        if (newWidth < column.get('minWidth')) {
          doNextLoop = true;
          column.set('width', column.get('minWidth'));
          return availableWidth -= column.get('width');
        } else if (newWidth > column.get('maxWidth')) {
          doNextLoop = true;
          column.set('width', column.get('maxWidth'));
          return availableWidth -= column.get('width');
        } else {
          column.set('width', newWidth);
          return nextColumnsToResize.pushObject(column);
        }
      });
      _results.push(columnsToResize = nextColumnsToResize);
    }
    return _results;
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
  _fixedColumnsWidth: Ember.computed(function() {
    return this._getTotalWidth(this.get('fixedColumns'));
  }).property('fixedColumns.@each.width'),
  _tableColumnsWidth: Ember.computed(function() {
    var availableWidth, contentWidth;
    contentWidth = this._getTotalWidth(this.get('tableColumns')) + 3;
    availableWidth = this.get('_width') - this.get('_fixedColumnsWidth');
    if (contentWidth > availableWidth) {
      return contentWidth;
    } else {
      return availableWidth;
    }
  }).property('tableColumns.@each.width', '_width', '_fixedColumnsWidth'),
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
  _getTotalWidth: function(columns, columnWidthPath) {
    var widths;
    if (columnWidthPath == null) {
      columnWidthPath = 'width';
    }
    if (!columns) {
      return 0;
    }
    widths = columns.getEach(columnWidthPath) || [];
    return widths.reduce((function(total, w) {
      return total + w;
    }), 0);
  },
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
    var item;
    this.persistSelection();
    item = row.get('content');
    if (val) {
      return this.get('persistedSelection').addObject(item);
    } else {
      return this.get('persistedSelection').removeObject(item);
    }
  },
  persistedSelection: Ember.computed(function() {
    return Ember.A();
  }),
  rangeSelection: Ember.computed(function() {
    return Ember.A();
  }),
  click: function(event) {
    var curIndex, item, lastIndex, maxIndex, minIndex, row;
    row = this.getRowForEvent(event);
    item = row != null ? row.get('content') : void 0;
    if (!item) {
      return;
    }
    switch (this.get('selectionMode')) {
      case 'none':
        break;
      case 'single':
        this.get('persistedSelection').clear();
        return this.get('persistedSelection').addObject(item);
      case 'multiple':
        if (event.shiftKey) {
          this.get('rangeSelection').clear();
          lastIndex = this.rowIndex(this.get('lastSelected'));
          if (lastIndex === -1) {
            lastIndex = 0;
          }
          curIndex = this.rowIndex(this.getRowForEvent(event));
          minIndex = Math.min(lastIndex, curIndex);
          maxIndex = Math.max(lastIndex, curIndex);
          return this.get('rangeSelection').addObjects(this.get('bodyContent').slice(minIndex, maxIndex + 1).mapBy('content'));
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
          return this.set('lastSelected', row);
        }
    }
  },
  findRow: function(content) {
    var row, _i, _len, _ref;
    _ref = this.get('bodyContent');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      row = _ref[_i];
      if (row.get('content') === content) {
        return row;
      }
    }
  },
  rowIndex: function(row) {
    var _ref;
    return (_ref = this.get('bodyContent')) != null ? _ref.indexOf(row) : void 0;
  },
  persistSelection: function() {
    this.get('persistedSelection').addObjects(this.get('rangeSelection'));
    return this.get('rangeSelection').clear();
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


})();