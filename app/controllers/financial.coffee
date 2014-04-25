App.EmberTableFinancialController = Ember.Controller.extend
  data: Ember.computed -> App.data.treedata

Number.prototype.toCurrency = ->
  return '-' if isNaN(@) or not isFinite(@)
  value = Math.abs(@).toFixed(2)
  value = value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
  (if this < 0 then '-$' else '$') + value

Number.prototype.toPercent = ->
  return '-' if isNaN(@) or not isFinite(@)
  Math.abs(this * 100).toFixed(2) + '%'

App.FinancialTableTreeTableRow = Ember.Table.Row.extend
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
    @set 'rowStyle', "ember-table-row-style-#{level}"

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

App.FinancialTableComponent = Ember.Table.EmberTableComponent.extend
  # overridding default properties
  numFixedColumns: 1
  isCollapsed: no
  isHeaderHeightResizable: yes
  rowHeight: 30
  hasHeader: yes
  hasFooter: yes
  headerHeight: 70

  # custom properties
  sortAscending: no
  sortColumn: null

  actions:
    toggleTableCollapse: (event) ->
      @toggleProperty 'isCollapsed'
      isCollapsed = @get 'isCollapsed'
      children = @get('root.children')
      return unless children and children.get('length') > 0
      children.forEach (child) -> child.recursiveCollapse isCollapsed
      @notifyPropertyChange 'rows'

    toggleCollapse: (row) ->
      row.toggleProperty 'isCollapsed'
      Ember.run.next this, -> @notifyPropertyChange 'rows'

  ##############################################################################
  # Data Conversions
  ##############################################################################
  data: null

  columns: Ember.computed ->
    data = @get 'data'
    return unless data
    names = @get('data.value_factors').getEach('display_name')
    columns = names.map (name, index) ->
      Ember.Table.ColumnDefinition.create
        index: index
        headerCellName: name
        headerCellViewClass:  'App.FinancialTableHeaderCell'
        tableCellViewClass:   'App.FinancialTableCell'
        getCellContent: (row) ->
          object = row.get('values')[@get('index')]
          return object.value.toCurrency() if object.type is 'money'
          return object.value.toPercent()  if object.type is 'percent'
          "-"
    columns.unshiftObject @get('groupingColumn')
    columns
  .property 'data.valueFactors.@each', 'groupingColumn'

  groupingColumn: Ember.computed ->
    groupingFactors = @get 'data.grouping_factors'
    name = groupingFactors.getEach('display_name').join ' ▸ '
    Ember.Table.ColumnDefinition.create
      headerCellName: name
      savedWidth: 400
      isTreeColumn: yes
      isSortable: no
      textAlign: 'text-align-left'
      headerCellViewClass:  'App.FinancialTableHeaderTreeCell'
      tableCellViewClass:   'App.FinancialTableTreeCell'
      contentPath: 'group_value'
  .property 'data.grouping_factors.@each'

  root: Ember.computed ->
    data = @get 'data'
    return unless data
    @createTree(null, data.root)
  .property 'data', 'sortAscending', 'sortColumn'

  rows: Ember.computed ->
    root = @get 'root'
    return Ember.A() unless root
    rows = @flattenTree null, root, Ember.A()
    @computeStyles null, root
    maxGroupingLevel = Math.max.apply rows.getEach('groupingLevel')
    rows.forEach (row) -> row.computeRowStyle(maxGroupingLevel)
    rows
  .property 'root'

  # OPTIMIZATION HACK
  bodyContent: Ember.computed ->
    rows = @get('rows')
    return Ember.A() unless rows
    rows = rows.slice(1, rows.get('length'))
    rows.filterProperty('isShowing')
  .property 'rows'

  footerContent: Ember.computed ->
    rows = @get('rows')
    return Ember.A() unless rows
    rows.slice(0, 1)
  .property 'rows'

  orderBy: (item1, item2) ->
    sortColumn = @get 'sortColumn'
    sortAscending = @get 'sortAscending'
    return 1 unless sortColumn
    value1 = sortColumn.getCellContent item1.get('content')
    value2 = sortColumn.getCellContent item2.get('content')
    result = Ember.compare value1, value2
    if sortAscending then result else -result

  createTree: (parent, node) ->
    row = App.FinancialTableTreeTableRow.create
      parentController: this
    children = (node.children || []).map (child) =>
      @createTree row, child
    # TODO(Peter): Hack... only collapse table if it should collapseByDefault
    # and it is not the root. Currently the total row is the root, and if it
    # is collapse, it causes nothing to show in the table and there is no way
    # to get expand it.
    row.setProperties
      isRoot:     not parent
      isLeaf:     Ember.isEmpty(children)
      content:    node
      parent:     parent
      children:   children
      groupName:  node.group_name
      isCollapsed:no
    row

  flattenTree: (parent, node, rows) ->
    rows.pushObject node
    (node.children || []).forEach (child) =>
      @flattenTree node, child, rows
    rows

  computeStyles: (parent, node) ->
    node.computeStyles parent
    node.get('children').forEach (child) =>
      @computeStyles node, child
