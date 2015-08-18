// BEGIN-SNIPPET financial-table-component
import Ember from 'ember';
import TableComponent from 'ember-table/components/ember-table';
import ColumnDefinition from 'ember-table/models/column-definition';
import FinancialTableTreeRow from './financial-table/table-tree-row';
import NumberFormatHelpers from '../utils/number-format';

export default TableComponent.extend({
  // Overriding default properties
  layoutName: 'components/ember-table',
  numFixedColumns: 1,
  isCollapsed: false,
  isHeaderHeightResizable: true,
  rowHeight: 30,
  hasHeader: true,
  hasFooter: true,
  headerHeight: 70,

  // Custom properties
  sortAscending: false,
  sortColumn: null,

  /////////////////////////////////////////////////////////////////////////////
  // Data conversions
  /////////////////////////////////////////////////////////////////////////////

  data: null,

  columns: Ember.computed(function() {
    var data = this.get('data');
    if (!data) {
      return;
    }
    var names = this.get('data.value_factors').getEach('display_name');
    var columns = names.map(function(name, index) {
      return ColumnDefinition.create({
        index: index,
        headerCellName: name,
        headerCellView: 'financial-table/header-cell',
        tableCellView: 'financial-table/table-cell',
        getCellContent: function(row) {
          var object = row.get('values')[this.get('index')];
          if (object.type === 'money') {
            return NumberFormatHelpers.toCurrency(object.value);
          }
          if (object.type === 'percent') {
            return NumberFormatHelpers.toPercent(object.value);
          }
          return '-';
        }
      });
    });
    columns.unshiftObject(this.get('groupingColumn'));
    return columns;
  }).property('data.valueFactors.[]', 'groupingColumn'),

  groupingColumn: Ember.computed(function() {
    var groupingFactors = this.get('data.grouping_factors');
    var name = groupingFactors.getEach('display_name').join(' ▸ ');
    return ColumnDefinition.create({
      headerCellName: name,
      savedWidth: 400,
      isTreeColumn: true,
      isSortable: false,
      textAlign: 'text-align-left',
      headerCellView: 'financial-table/header-tree-cell',
      tableCellView: 'financial-table/table-tree-cell',
      contentPath: 'group_value'
    });
  }).property('data.grouping_factors.[]'),

  root: Ember.computed(function() {
    var data = this.get('data');
    if (!data) {
      return;
    }
    return this.createTree(null, data.root);
  }).property('data', 'sortAscending', 'sortColumn'),

  rows: Ember.computed(function() {
    var root = this.get('root');
    if (!root) {
      return Ember.A();
    }
    var rows = this.flattenTree(null, root, Ember.A());
    this.computeStyles(null, root);
    var maxGroupingLevel = Math.max.apply(rows.getEach('groupingLevel'));
    rows.forEach(function(row) {
      return row.computeRowStyle(maxGroupingLevel);
    });
    return rows;
  }).property('root'),

  // OPTIMIZATION HACK
  bodyContent: Ember.computed(function() {
    var rows = this.get('rows');
    if (!rows) {
      return Ember.A();
    }
    rows = rows.slice(1, rows.get('length')).filterBy('isShowing');
    rows.forEach(function(row, index) {
      return row.set('itemIndex', index);
    });
    return rows;
  }).property('rows'),

  footerContent: Ember.computed(function() {
    var rows = this.get('rows');
    if (!rows) {
      return Ember.A();
    }
    return rows.slice(0, 1);
  }).property('rows'),

  orderBy: function(item1, item2) {
    var sortColumn = this.get('sortColumn');
    var sortAscending = this.get('sortAscending');
    if (!sortColumn) {
      return 1;
    }
    var value1 = sortColumn.getCellContent(item1.get('content'));
    var value2 = sortColumn.getCellContent(item2.get('content'));
    var result = Ember.compare(value1, value2);
    if (sortAscending) {
      return result;
    } else {
      return -result;
    }
  },

  createTree: function(parent, node) {
    var row = FinancialTableTreeRow.create({ tableComponent: this });
    // TODO(azirbel): better map function and _this use
    var children = (node.children || []).map((function(_this) {
      return function(child) {
        return _this.createTree(row, child);
      };
    })(this));
    // TODO(Peter): Hack... only collapse table if it should collapseByDefault
    // and it is not the root. Currently the total row is the root, and if it
    // is collapse, it causes nothing to show in the table and there is no way
    // to get expand it.
    row.setProperties({
      isRoot: !parent,
      isLeaf: Ember.isEmpty(children),
      content: node,
      parent: parent,
      children: children,
      groupName: node.group_name,
      isCollapsed: false
    });
    return row;
  },

  // TODO(azirbel): Don't use the word 'parent'
  flattenTree: function(parent, node, rows) {
    rows.pushObject(node);
    (node.children || []).forEach((function(_this) {
      return function(child) {
        return _this.flattenTree(node, child, rows);
      };
    })(this));
    return rows;
  },

  computeStyles: function(parent, node) {
    node.computeStyles(parent);
    node.get('children').forEach((function(_this) {
      return function(child) {
        _this.computeStyles(node, child);
      };
    })(this));
  },

  actions: {
    toggleTableCollapse: function() {
      var isCollapsed = this.toggleProperty('isCollapsed');
      var children = this.get('root.children');
      if (!(children && children.get('length') > 0)) {
        return;
      }
      children.forEach(function(child) {
        return child.recursiveCollapse(isCollapsed);
      });
      return this.notifyPropertyChange('rows');
    },

    toggleRowCollapse: function(row) {
      row.toggleProperty('isCollapsed');
      Ember.run.next(this, function() {
        this.notifyPropertyChange('rows');
      });
    }
  },
});
// END-SNIPPET
