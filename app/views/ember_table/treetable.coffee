App.TreeTableExample.TreeTableRow = Ember.Table.Row.extend
  content:  null
  children: null
  parent:   null
  isRoot:   no
  isLeaf:   no
  isCollapsed: no
  isShowing: yes
  indentationSpacing: 20
  groupName: null

  # This may look ugly, but this is necessary. By doing the styles computation
  # imperatively we made the initial table load 10-100x faster (certain cases)
  computeStyles: (parent) ->
    groupingLevel = 0
    indentation   = 0
    isShowing     = yes
    if parent
      isShowing = parent.get('isShowing') and not parent.get('isCollapsed')
      pGroupingLevel = parent.get 'groupingLevel'
      groupingLevel  = pGroupingLevel
      groupingLevel  += 1 if parent.get('groupName') isnt @get('groupName')
      indentType = if groupingLevel is pGroupingLevel then 'half' else 'full'
      spacing    = @get 'indentationSpacing'
      if not parent.get('isRoot')
        indentation = parent.get('indentation')
        indentation += (if indentType is 'half' then spacing / 2 else spacing)
    @set 'groupingLevel', groupingLevel
    @set 'indentation', indentation
    @set 'isShowing', isShowing

  computeRowStyle: (maxLevels) ->
    level = @getFormattingLevel @get('groupingLevel'), maxLevels
    @set 'rowStyle', "row-style-#{level}"

  recursiveCollapse: (isCollapsed) ->
    @set 'isCollapsed', isCollapsed
    @get('children').forEach (child) ->
      child.recursiveCollapse isCollapsed

  getFormattingLevel: (level, maxLevels) ->
    switch maxLevels
      when 1 then return 5
      when 2
        return 2 if level is 1
        return 5
      when 3
        return 1 if level is 1
        return 3 if level is 2
        return 5
      when 4
        return 1 if level is 1
        return 2 if level is 2
        return 4 if level is 4
        return 5
      when 5
        return level
      else
        return 5 if level is maxLevels
        return Math.min(level, 4)

App.TreeTableExample.TreeCell = Ember.Table.TableCell.extend
  templateName: 'ember_table/tree_table/table_tree_cell'
  classNames:   'ember-table-table-tree-cell'
  styleBindings: ['indentation:padding-left']
  indentation:  Ember.computed.alias 'row.indentation'

App.TreeTableExample.HeaderTreeCell = Ember.Table.HeaderCell.extend
  templateName: 'ember_table/tree_table/table_header_tree_cell'
  classNames:   'ember-table-table-header-tree-cell'