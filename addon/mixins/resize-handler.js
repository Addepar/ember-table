// TODO(azirbel): This needs to be an external dependency.
import Ember from 'ember';

export default Ember.Mixin.create({
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
