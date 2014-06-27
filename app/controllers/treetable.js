Ember.Controller.extend({
  data: Ember.computed(function() {
    return App.data.treedata;
  })
});

Number.prototype.toCurrency = function() {
  var value;
  if (isNaN(this) || !isFinite(this)) {
    return '-';
  }
  value = Math.abs(this).toFixed(2);
  value = value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  return (this < 0 ? '-$' : '$') + value;
};

Number.prototype.toPercent = function() {
  if (isNaN(this) || !isFinite(this)) {
    return '-';
  }
  return Math.abs(this * 100).toFixed(2) + '%';
};

App.TreeTableExample = Ember.Namespace.create();

// Ember-Table: Data transformation


// Convert tree data into columns, bodyContent and footerContent for the table

App.TreeTableExample.TreeDataAdapter = Ember.Mixin.create({
  data: null,
  columns: function() {
    var data = this.get('data');
    if (!data) {
      return;
    }
    var names = this.get('data.value_factors').getEach('display_name');
    var columns = names.map(function(name, index) {
      return Ember.Table.ColumnDefinition.create({
        index: index,
        headerCellName: name,
        getCellContent: function(row) {
          var object = row.get('values')[this.get('index')];
          if (object.type === 'money') {
            return object.value.toCurrency();
          }
          if (object.type === 'percent') {
            return object.value.toPercent();
          }
          return "-";
        }
      });
    });
    columns.unshiftObject(this.get('groupingColumn'));
    return columns;
  }.property('data.valueFactors.@each', 'groupingColumn'),
  groupingColumn: function() {
    var groupingFactors = this.get('data.grouping_factors');
    var name = groupingFactors.getEach('display_name').join(' ▸ ');
    return Ember.Table.ColumnDefinition.create({
      headerCellName: name,
      columnWidth: 400,
      isTreeColumn: true,
      isSortable: false,
      textAlign: 'text-align-left',
      headerCellViewClass: 'App.TreeTableExample.HeaderTreeCell',
      tableCellViewClass: 'App.TreeTableExample.TreeCell',
      contentPath: 'group_value'
    });
  }.property('data.grouping_factors.@each'),
  root: function() {
    var data = this.get('data');
    if (!data) {
      return;
    }
    return this.createTree(null, data.root);
  }.property('data', 'sortAscending', 'sortColumn'),
  rows: function() {
    var root = this.get('root');
    if (!root) {
      return [];
    }
    var rows = this.flattenTree(null, root, []);
    this.computeStyles(null, root);
    var maxGroupingLevel = Math.max.apply(rows.getEach('groupingLevel'));
    rows.forEach(function(row) {
      row.computeRowStyle(maxGroupingLevel);
    });
    return rows;
  }.property('root'),
  bodyContent: function() {
    var rows = this.get('rows');
    if (!rows) {
      return [];
    }
    rows = rows.slice(1, rows.get('length'));
    return rows.filterProperty('isShowing');
  }.property('rows'),
  footerContent: function() {
    var rows = this.get('rows');
    if (!rows) {
      return [];
    }
    return rows.slice(0, 1);
  }.property('rows'),
  orderBy: function(item1, item2) {
    var sortColumn = this.get('sortColumn');
    var sortAscending = this.get('sortAscending');
    if (!sortColumn) {
      return 1;
    }
    var value1 = sortColumn.getCellContent(item1);
    var value2 = sortColumn.getCellContent(item2);
    var result = Ember.compare(value1, value2);
    if (sortAscending) {
      return result;
    } else {
      return -result;
    }
  },
  createTree: function(parent, node) {
    var row = App.TreeTableExample.TreeTableRow.create();
    var children = (node.children || []).map(function(child) {
      return this.createTree(row, child);
    }, this);
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
  flattenTree: function(parent, node, rows) {
    rows.pushObject(node);
    (node.children || []).forEach(function(child) {
      this.flattenTree(node, child, rows);
    }, this);
    return rows;
  },
  computeStyles: function(parent, node) {
    node.computeStyles(parent);
    return node.get('children').forEach(function(child) {
      this.computeStyles(node, child);
    }, this);
  }
});


/*
Ember-Table: Controller
 */

App.TreeTableExample.TableComponent = Ember.Table.EmberTableComponent.extend(App.TreeTableExample.TreeDataAdapter, {
  numFixedColumns: 1,
  isCollapsed: false,
  isHeaderHeightResizable: true,
  rowHeight: 30,
  hasHeader: true,
  hasFooter: true,
  headerHeight: 70,
  sortAscending: false,
  sortColumn: null,
  selection: null,
  toggleTableCollapse: function(event) {
    this.toggleProperty('isCollapsed');
    var isCollapsed = this.get('isCollapsed');
    var children = this.get('root.children');
    if (!(children && children.get('length') > 0)) {
      return;
    }
    children.forEach(function(child) {
      child.recursiveCollapse(isCollapsed);
    });
    this.notifyPropertyChange('rows');
  },
  toggleCollapse: function(row) {
    row.toggleProperty('isCollapsed');
    Ember.run.next(this, function() {
      this.notifyPropertyChange('rows');
    });
  },
  sortByColumn: function(column) {
    column.toggleProperty('sortAscending');
    this.set('sortColumn', column);
    this.set('sortAscending', column.get('sortAscending'));
  },
  onSelectionsDidChange: function() {
    console.log('selectionsDidChange');
  }.observes('selection.@each')
});
