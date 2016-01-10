import Ember from 'ember';
import ColumnDefinition from 'ember-table/models/column-definition';

// We extend Ember.Table.ColumnDefinition for two reasons: to use custom
// getters/setters for savedWidth/minWidth/maxWidth so that they can be set via
// the configuration container, and to add properties which can be used for
// formatting.
export default ColumnDefinition.extend({
  savedWidth: void 0,

  savedWidthValue: Ember.computed('savedWidth', {
    get: function() {
      return this.get('savedWidth');
    },
    set: function(key, value) {
      this.set('savedWidth', parseInt(value));
      return this.get('savedWidth');
    }
  }),

  minWidthValue: Ember.computed('minWidth', {
    get: function() {
      return this.get('minWidth');
    },
    set: function(key, value) {
      this.set('minWidth', parseInt(value));
      return this.get('minWidth');
    }
  }),

  atMinWidth: Ember.computed(function() {
    return this.get('width') === this.get('minWidth');
  }).property('width', 'minWidth'),

  atMaxWidth: Ember.computed(function() {
    return this.get('width') === this.get('maxWidth');
  }).property('width', 'maxWidth'),

  maxWidth: undefined,

  maxWidthValue: Ember.computed('maxWidth', {
    get: function() {
      return this.get('maxWidth');
    },
    set: function(key, value) {
      this.set('maxWidth', parseInt(value));
      return this.get('maxWidth');
    }
  }),

  columnDefinitionDocumentation: Ember.computed(function() {
    var docString = '';
    docString += '    var ' + this.get('headerCellName').toLowerCase() +
      'Column = ColumnDefinition.create({\n';
    if (this.get('textAlign') !== 'text-align-right') {
      docString += "      textAlign: '" + this.get('textAlign') + "',\n";
    }
    docString += "      headerCellName: '" + this.get('headerCellName') + "',\n";
    if (this.get('minWidth') !== 25) {
      docString += '      minWidth: ' + this.get('minWidth') + ',\n';
    }
    if (this.get('maxWidth')) {
      docString += '      maxWidth: ' + this.get('maxWidth') + ',\n';
    }
    if (!this.get('isSortable')) {
      docString += '      isSortable: false,\n';
    }
    if (!this.get('isResizable')) {
      docString += '      isResizable: false,\n';
    }
    if (this.get('canAutoResize')) {
      docString += '      canAutoResize: true,\n';
    }
    if (this.get('headerCellName') === 'Date') {
      docString += "      getCellContent: function(row) {\n" +
        "        return row.get('date').toDateString();\n" +
        "      }\n";
    } else {
      docString += "      getCellContent: function(row) {\n" +
        "        return row.get('" + this.get('headerCellName').toLowerCase() +
        "').toFixed(2);\n" +
        "      }\n";
    }
    docString += "    });";
    return docString;
  }).property('headerCellName', 'textAlign', 'minWidth', 'maxWidth',
      'isSortable', 'isResizable', 'canAutoResize')
});
