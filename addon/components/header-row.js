import Ember from 'ember';
import StyleBindingsMixin from 'ember-table/mixins/style-bindings';

// We hacked this. There is an inconsistency at the level in which we are
// handling scroll event...
export default Ember.Component.extend(
StyleBindingsMixin, {

  classNames: ['ember-table-table-row', 'ember-table-header-row'],
  styleBindings: ['width'],
  columns: Ember.computed.alias('content'),
  width: Ember.computed.alias('rowWidth'),

  rowWidth: null,
  enableColumnReorder: null,
  isShowingSortableIndicator: null,
  sortableIndicatorLeft: null,

  rowWidthSafeString: Ember.computed('rowWidth', function() {
    return new Ember.Handlebars.SafeString('width:' + this.get('rowWidth') + 'px;');
  }),

  // Options for jQuery UI sortable
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
      tolerance: 'pointer',
      start: Ember.$.proxy(this.onColumnSortStart, this),
      update: Ember.$.proxy(this.onColumnSortDone, this),
      stop: Ember.$.proxy(this.onColumnSortStop, this),
      sort: Ember.$.proxy(this.onColumnSortChange, this)
    };
  }),

  didRender: function() {
    this._super();
    if (this.get('enableColumnReorder')) {
      this.$('> div').sortable(this.get('sortableOption'));
    }
  },

  willDestroyElement: function() {
    if (this.get('enableColumnReorder')) {
      // TODO(azirbel): Get rid of this check, as in onColumnSortDone?
      var $divs = this.$('> div');
      if ($divs) {
        $divs.sortable('destroy');
      }
    }
    this._super();
  },

  //saving start position in ui.item object
  onColumnSortStart: function(event, ui) {
    ui.item.startPosition = ui.item.index();
  },

  onColumnSortStop: function() {
    this.set('isShowingSortableIndicator', false);
  },

  onColumnSortChange: function() {
    var left = this.$('.ui-state-highlight').offset().left -
        this.$().closest('.ember-table-tables-container').offset().left;
    this.set('isShowingSortableIndicator', true);
    this.set('sortableIndicatorLeft', left);
  },

  onColumnSortDone: function(event, ui) {
    var toIndex = ui.item.index();
    var fromIndex = ui.item.startPosition;
    this.$('> div').sortable('cancel');
    this.sendAction('columnDidSort', fromIndex, toIndex);
  },

  actions: {
    toggleTableCollapse: function() {
      this.sendAction('toggleTableCollapse');
    },

    sortByColumn: function(column) {
      this.sendAction('sortByColumn', column);
  },
  }
});
