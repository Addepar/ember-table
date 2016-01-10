// BEGIN-SNIPPET financial-table-tree-row
import Row from 'ember-table/models/row';

export default Row.extend({
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
    var groupingLevel, indentType, indentation, isShowing, pGroupingLevel, spacing;
    groupingLevel = 0;
    indentation = 0;
    isShowing = true;
    if (parent) {
      isShowing = parent.get('isShowing') && !parent.get('isCollapsed');
      pGroupingLevel = parent.get('groupingLevel');
      groupingLevel = pGroupingLevel;
      if (parent.get('groupName') !== this.get('groupName')) {
        groupingLevel += 1;
      }
      indentType = groupingLevel === pGroupingLevel ? 'half' : 'full';
      spacing = this.get('indentationSpacing');
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
    var level;
    level = this.getFormattingLevel(this.get('groupingLevel'), maxLevels);
    this.set('rowStyle', 'ember-table-row-style-' + level);
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
// END-SNIPPET
