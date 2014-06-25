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
