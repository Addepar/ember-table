/**
 * Column Definition
 * @class
 * @alias Ember.Table.ColumnDefinition
 */
Ember.Table.ColumnDefinition = Ember.Object.extend({
  headerCellName: void 0,
  contentPath: void 0,
  minWidth: void 0,
  maxWidth: void 0,
  defaultColumnWidth: 150,
  columnWidth: Ember.computed.oneWay('defaultColumnWidth'),
  isResizable: true,
  isSortable: true,
  textAlign: 'text-align-right',
  canAutoResize: true,
  headerCellViewClass: 'Ember.Table.HeaderCell',
  tableCellViewClass: 'Ember.Table.TableCell',
  resize: function(width) {
    this.set('columnWidth', width);
  },

  /**
  * Get Cell Content - This gives a formatted value e.g. $20,000,000
  * @memberof Ember.Table.ColumnDefinition
  * @instance
  * @argument row {Ember.Table.Row}
  * @todo More detailed doc needed!
   */
  getCellContent: function(row) {
    var path = this.get('contentPath');
    Ember.assert("You must either provide a contentPath or override " + "getCellContent in your column definition", path != null);
    return Ember.get(row, path);
  },

  /**
  * Set Cell Content
  * @memberof Ember.Table.ColumnDefinition
  * @instance
   */
  setCellContent: Ember.K
});


/**
 * Table Row
 * @class
 * @alias Ember.Table.Row
 */

Ember.Table.Row = Ember.ObjectProxy.extend({

  /**
  * Content of the row
  * @memberof Ember.Table.Row
  * @member content
  * @instance
   */
  content: null,

  /**
  * Is Selected?
  * @memberof Ember.Table.Row
  * @member {Boolean} isSelected
  * @instance
   */
  isSelected: function() {
    return this.get('parentController.selection') === this.get('content');
  }.property('parentController.selection', 'content'),

  /**
  * Is Showing?
  * @memberof Ember.Table.Row
  * @member {Boolean} isShowing
  * @instance
   */
  isShowing: true,

  /**
  * Is Active?
  * @memberof Ember.Table.Row
  * @member {Boolean} isHovered
  * @instance
   */
  isHovered: false
});
