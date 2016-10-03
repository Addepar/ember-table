// TODO(azirbel): This needs to be an external dependency.
import Ember from 'ember';
import { addElementResizeListener, removeElementResizeListener } from './element-resize-listener';

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
    Ember.run.debounce(this, this.get('endResize'), event, this.get('resizeEndDelay'));
  },

  didInsertElement: function() {
    this._super();
    this._setupDocumentHandlers();
  },

  willDestroyElement: function() {
    this._removeDocumentHandlers();
    this._super();
  },

  _setupDocumentHandlers: function() {
    if (this._resizeHandler) {
      return;
    }
    this._resizeHandler = Ember.$.proxy(this.get('handleWindowResize'), this);
    Ember.$(window).on("resize." + this.elementId, this._resizeHandler);
    addElementResizeListener(this.$()[0], Ember.run.bind(this, this.elementSizeDidChange));
  },

  _removeDocumentHandlers: function() {
    Ember.$(window).off("resize." + this.elementId, this._resizeHandler);
    removeElementResizeListener(this.$()[0], Ember.run.bind(this, this.elementSizeDidChange));
    this._resizeHandler = null;
  }
});
