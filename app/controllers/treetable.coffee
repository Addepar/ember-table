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

App.TreeTableExample = Ember.Namespace.create()


# Ember-Table: Data transformation

# Convert tree data into columns, bodyContent and footerContent for the table
App.TreeTableExample.TreeDataAdapter = Ember.Mixin.create
  data: null

  columns: Ember.computed ->
    data = @get 'data'
    return unless data
    names = @get('data.value_factors').getEach('display_name')
    columns = names.map (name, index) ->
      Ember.Table.ColumnDefinition.create
        index: index
        headerCellName: name
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
      headerCellViewClass:  'App.TreeTableExample.HeaderTreeCell'
      tableCellViewClass:   'App.TreeTableExample.TreeCell'
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
    value1 = sortColumn.getCellContent item1
    value2 = sortColumn.getCellContent item2
    result = Ember.compare value1, value2
    if sortAscending then result else -result

  createTree: (parent, node) ->
    row = App.TreeTableExample.TreeTableRow.create()
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


# Ember-Table: Controller

App.TreeTableExample.TableComponent =
Ember.Table.EmberTableComponent.extend App.TreeTableExample.TreeDataAdapter,
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

  sortByColumn: (column) ->
    column.toggleProperty 'sortAscending'
    @set 'sortColumn', column
    @set 'sortAscending', column.get('sortAscending')
