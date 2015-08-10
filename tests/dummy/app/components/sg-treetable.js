// BEGIN-SNIPPET sg-treetable-component
import Ember from 'ember';
import TableComponent from 'ember-table/components/ember-table';
import TreeTableTreeRow from '../views/sg-treetable-tree-row';

import TreeColumnDefinition from '../models/tree-column-definition';

export default TableComponent.extend({
  // Overriding default properties
  layoutName: 'components/ember-table',
  numFixedColumns: 1,
  isCollapsed: false,
  isHeaderHeightResizable: true,
  rowHeight: 30,
  hasHeader: true,
  hasFooter: false,
  headerHeight: 70,

  data: null,
  dimentionDef: Ember.K,
  aggregateColumns: [],

  dimentionColumn: Ember.computed('dimentionDef.@each', function() {
    var dimentionDef = this.get('dimentionDef');
    var dimentionOrder = dimentionDef.dimentionOrder;
    if (Ember.isEmpty(dimentionOrder)) {
      return;
    }

    var name = _.map( dimentionOrder, function(key) {
      return dimentionDef[key]['displayName'];
    }).join(' ▸ ');

    return TreeColumnDefinition.create({
      headerCellName: name,
    });

  }),

  columns: Ember.computed('dimentionColumn', 'aggregateColumns.[]', function() {
    var cols = this.get('aggregateColumns');
    cols.unshiftObject( this.get('dimentionColumn') );
    return cols;
  }),

  _sgData: Ember.computed('data', 'dimentionDef.dimentionOrder', function() {
    if (!this.get('data')) {
      return Ember.K;
    }
    var groupedData = _.supergroup(this.get('data'), this.get('dimentionDef.dimentionOrder'));
    return Ember.Object.create({
      root: groupedData.asRootVal('Total'),
      firstLevel: groupedData,
      flattenTree: groupedData.flattenTree()
    });
  }),

  _rows: Ember.computed('_sgData.root', function() {
    var root = this.get('_sgData.root');
    if (!root) {
      return Ember.A();
    }
    return this._recursiveCreateRow(null, root, Ember.A()).rows;
  }),

  _recursiveCreateRow: function(parent, node, rows) {
    var self = this;
    var row = TreeTableTreeRow.create({ 
      parentController: this,
      content: node,
      parent: parent,
      isRoot: !parent,
      depth: node.depth,
      isCollapsed: (this.get('isCollapsed') && (node.depth > 0))
    });
    
    rows.pushObject(row);

    (node.children || []).map(function(child) {
      return self._recursiveCreateRow(row, child, rows).row;
    });

    row.set('isLeaf', Ember.isEmpty(node.children));

    return { row: row, rows: rows };
  },

  bodyContent: Ember.computed('_rows.@each.isShowing', function() {
    var rows = this.get('_rows');
    return (rows ? rows.filterProperty('isShowing') : Ember.A());
  }),

  actions: {
    toggleTableCollapse: function() {
      var isCollapsed = this.toggleProperty('isCollapsed');
      this.get('_rows').forEach(function(row) {
        if (row.get('depth') > 0) {
          row.set('isCollapsed', isCollapsed);
        }
      });
    },

    toggleCollapse: function(row) {
      row.toggleProperty('isCollapsed');
    }
  },

});
// END-SNIPPET
