App.TreeTableExample.TreeTableRow = Ember.Table.Row.extend({
  content: null,
  children: null,
  parent: null,
  isRoot: false,
  isLeaf: false,
  isCollapsed: false,
  isShowing: true,
  indentationSpacing: 20,
  groupName: null,
  computeStyles: function(parent) {
    var groupingLevel = 0;
    var indentation = 0;
    var isShowing = true;
    if (parent) {
      isShowing = parent.get('isShowing') && !parent.get('isCollapsed');
      var pGroupingLevel = parent.get('groupingLevel');
      groupingLevel = pGroupingLevel;
      if (parent.get('groupName') !== this.get('groupName')) {
        groupingLevel += 1;
      }
      var indentType = groupingLevel === pGroupingLevel ? 'half' : 'full';
      var spacing = this.get('indentationSpacing');
      if (!parent.get('isRoot')) {
        indentation = parent.get('indentation');
        indentation += (indentType === 'half' ? spacing / 2 : spacing);
      }
    }
    this.set('groupingLevel', groupingLevel);
    this.set('indentation', indentation);
    this.set('isShowing', isShowing);
  },
  computeRowStyle: function(maxLevels) {
    var level = this.getFormattingLevel(this.get('groupingLevel'), maxLevels);
    this.set('rowStyle', "row-style-" + level);
  },
  recursiveCollapse: function(isCollapsed) {
    this.set('isCollapsed', isCollapsed);
    this.get('children').forEach(function(child) {
      child.recursiveCollapse(isCollapsed);
    });
  },
  getFormattingLevel: function(level, maxLevels) {
    switch (maxLevels) {
      case 1:
        return 5;
      case 2:
        if (level === 1) {
          return 2;
        }
        return 5;
      case 3:
        if (level === 1) {
          return 1;
        }
        if (level === 2) {
          return 3;
        }
        return 5;
      case 4:
        if (level === 1) {
          return 1;
        }
        if (level === 2) {
          return 2;
        }
        if (level === 4) {
          return 4;
        }
        return 5;
      case 5:
        return level;
      default:
        if (level === maxLevels) {
          return 5;
        }
        return Math.min(level, 4);
    }
  }
});

App.TreeTableExample.TreeCell = Ember.Table.TableCell.extend({
  templateName: 'ember_table/tree_table/table_tree_cell',
  classNames: 'ember-table-table-tree-cell',
  styleBindings: ['indentation:padding-left'],
  indentation: Ember.computed.alias('row.indentation')
});

App.TreeTableExample.HeaderTreeCell = Ember.Table.HeaderCell.extend({
  templateName: 'ember_table/tree_table/table_header_tree_cell',
  classNames: 'ember-table-table-header-tree-cell'
});
