Ember.Table.utils = {};

Ember.Table.utils.range = function(start, end) {
  var _results = [];
  for (var _i = start; start <= end ? _i < end : _i > end; start <= end ? _i++ : _i--){ _results.push(_i); }
  return _results;
};

/**
 * Multi Item View Collection View
 * @class
 * @alias Ember.Table.MultiItemViewCollectionView
 */
Ember.MultiItemViewCollectionView = Ember.CollectionView.extend(Ember.AddeparMixins.StyleBindingsMixin, {
  styleBindings: 'width',
  itemViewClassField: null,
  createChildView: function(view, attrs) {
    var itemViewClassField = this.get('itemViewClassField');
    var itemViewClass = attrs.content.get(itemViewClassField);
    if (typeof itemViewClass === 'string') {
      itemViewClass = Ember.get(Ember.lookup, itemViewClass);
    }
    return this._super(itemViewClass, attrs);
  }
});

Ember.MouseWheelHandlerMixin = Ember.Mixin.create({
  onMouseWheel: Ember.K,
  bindMousewheel: function() {
    this.$().bind('mousewheel', Ember.run.bind(this, this.onMouseWheel));
  }.on('didInsertElement'),
  unbindMousewheel: function() {
    if (this.$() != null) {
      this.$().unbind('mousewheel');
    }
  }.on('willDestroyElement')
});

Ember.ScrollHandlerMixin = Ember.Mixin.create({
  onScroll: Ember.K,
  scrollElementSelector: '',
  bindScroll: function() {
    var $scroll = this.$(this.get('scrollElementSelector'));
    $scroll.bind('scroll', Ember.run.bind(this, this.onScroll));
  }.on('didInsertElement'),
  unbindScroll: function() {
    var $scroll = this.$(this.get('scrollElementSelector'));
    if ($scroll != null) {
      $scroll.unbind('scroll');
    }
  }.on('willDestroyElement')
});

Ember.TouchMoveHandlerMixin = Ember.Mixin.create({
  onTouchMove: Ember.K,
  bindTouchmove: function() {
    var startX = 0;
    var startY = 0;
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
  }.on('didInsertElement'),
  unbindTouchmove: function() {
    if (this.$() != null) {
      this.$().unbind('touchmove');
      this.$().unbind('touchstart');
    }
  }.on('willDestroyElement')
});


/**
* Table Row Array Proxy
* @class
* @alias Ember.Table.RowArrayProxy
 */

Ember.Table.RowArrayController = Ember.ArrayController.extend({
  itemController: null,
  content: null,
  rowContent: function() {
    return [];
  }.property(),
  controllerAt: function(idx, object, controllerClass) {
    var container = this.get('container');
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
    return subController;
  }
});


// HACK: We want the horizontal scroll to show on mouse enter and leave.

Ember.Table.ShowHorizontalScrollMixin = Ember.Mixin.create({
  mouseEnter: function(event) {
    var $tablesContainer = $(event.target).parents('.ember-table-tables-container');
    var $horizontalScroll = $tablesContainer.find('.antiscroll-scrollbar-horizontal');
    $horizontalScroll.addClass('antiscroll-scrollbar-shown');
  },
  mouseLeave: function(event) {
    var $tablesContainer = $(event.target).parents('.ember-table-tables-container');
    var $horizontalScroll = $tablesContainer.find('.antiscroll-scrollbar-horizontal');
    $horizontalScroll.removeClass('antiscroll-scrollbar-shown');
  }
});
