import Ember from 'ember';
import StyleBindingsMixin from 'ember-table/mixins/style-bindings';

export default Ember.Component.extend( StyleBindingsMixin, {
  // ---------------------------------------------------------------------------
  // API - Inputs
  // ---------------------------------------------------------------------------

  // TODO: Doc

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

  row: null,
  column: Ember.computed.alias('content'),
  width: Ember.computed.alias('column.width'),

  contentDidChange: function() {
    this.notifyPropertyChange('cellContent');
  },

  contentPathDidChange: Ember.observer('column.contentPath', function() {
    var newContentPath = this.get('column.contentPath');
    var oldContentPath = this._oldContentPath;

    if (newContentPath !== oldContentPath) {
      if (oldContentPath) {
         this.removeObserver("row." + oldContentPath, this, this.contentDidChange);
      }
      this._oldContentPath = newContentPath;
      if (newContentPath) {
        this.addObserver("row." + newContentPath, this, this.contentDidChange);
      }
    }
  }),

  cellContent: Ember.computed('row.isLoaded', 'column', {
    set: function(key, value) {
      var row = this.get('row');
      var column = this.get('column');
      if (!row || !column) {
        return;
      }
      column.setCellContent(row, value);
      return value;
    },
    get: function() {
      var row = this.get('row');
      var column = this.get('column');
      if (!row || !column) {
        return;
      }
      var value = column.getCellContent(row);
      return value;
    }
  }),

  actions: {
    toggleRowCollapse: function(row) {
      this.sendAction('toggleRowCollapse', row);
    }
  }
});
