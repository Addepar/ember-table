Ember.LazyContainerView = Ember.ContainerView.extend(Ember.AddeparMixins.StyleBindingsMixin, {
  classNames: 'lazy-list-container',
  styleBindings: ['height'],
  content: null,
  itemViewClass: null,
  rowHeight: null,
  scrollTop: null,
  startIndex: null,
  height: function() {
    return this.get('content.length') * this.get('rowHeight');
  }.property('content.length', 'rowHeight'),
  numChildViews: function() {
    return this.get('numItemsShowing') + 2;
  }.property('numItemsShowing'),
  onNumChildViewsDidChange: function() {
    var view = this;
    var itemViewClass = Ember.get(this.get('itemViewClass'));
    var newNumViews = this.get('numChildViews');
    if (!(itemViewClass && newNumViews)) {
      return;
    }
    var oldNumViews = this.get('length');
    var numViewsToInsert = newNumViews - oldNumViews;
    if (numViewsToInsert < 0) {
      var viewsToRemove = this.slice(newNumViews, oldNumViews);
      return this.removeObjects(viewsToRemove);
    } else if (numViewsToInsert > 0) {
      var viewsToAdd = Ember.Table.utils.range(0, numViewsToInsert).map(function() {
        return view.createChildView(itemViewClass);
      });
      return this.pushObjects(viewsToAdd);
    }
  }.observes('numChildViews', 'itemViewClass').on('init'),
  viewportDidChange: function() {
    var content = this.get('content') || [];
    var clength = content.get('length');
    var numShownViews = Math.min(this.get('length'), clength);
    var startIndex = this.get('startIndex');
    if (startIndex + numShownViews >= clength) {
      startIndex = clength - numShownViews;
    }
    if (startIndex < 0) {
      startIndex = 0;
    }
    this.forEach(function(childView, i) {
      if (i >= numShownViews) {
        childView = this.objectAt(i);
        childView.set('content', null);
        return;
      }
      var itemIndex = startIndex + i;
      childView = this.objectAt(itemIndex % numShownViews);
      var item = content.objectAt(itemIndex);
      if (item !== childView.get('content')) {
        childView.teardownContent();
        childView.set('itemIndex', itemIndex);
        childView.set('content', item);
        return childView.prepareContent();
      }
    }, this);
  }.observes('content.length', 'length', 'startIndex')
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
  top: function() {
    return this.get('itemIndex') * this.get('rowHeight');
  }.property('itemIndex', 'rowHeight'),
  display: function() {
    if (!this.get('content')) {
      return 'none';
    }
  }.property('content')
});
