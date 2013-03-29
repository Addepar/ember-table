Number.prototype.toCurrency = ->
  return '-' if isNaN(@) or not isFinite(@)
  value = Math.abs(@).toFixed(2)
  value = value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
  (if this < 0 then '-$' else '$') + value

Number.prototype.toPercent = ->
  return '-' if isNaN(@) or not isFinite(@)
  Math.abs(this * 100).toFixed(2) + "%"

App.TreeTableExample = Ember.Namespace.create()

################################################################################
# Data transformation
################################################################################

# Convert tree data into columns, bodyContent and footerContent for the table
App.TreeTableExample.TreeDataAdapter = Ember.Mixin.create
  data: null

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

  columns: Ember.computed ->
    data = @get 'data'
    return unless data
    names = @get('data.value_factors').getEach('display_name')
    columns = names.map (name, index) ->
      Ember.Table.ColumnDefinition.create
        index: index
        headerCellName: name
        getCellContent: (row) ->
          object = row.values[@get('index')]
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
      columnWidth: 400
      isTreeColumn: yes
      isSortable: no
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
    @flattenTree null, root, Ember.A()
  .property 'root'

  orderBy: (item1, item2) ->
    sortColumn = @get 'sortColumn'
    sortAscending = @get 'sortAscending'
    return 1 unless sortColumn
    value1 = sortColumn.getCellContent item1.get('content')
    value2 = sortColumn.getCellContent item2.get('content')
    result = Ember.compare value1, value2
    if sortAscending then result else -result

  createTree: (parent, node) ->
    row = App.TreeTableExample.TreeTableRow.create content: node
    children = (node.children || []).map (child) =>
      @createTree row, child
    children.sort jQuery.proxy(@orderBy, this)
    row.set 'parent', parent
    row.set 'children', children
    row

  flattenTree: (parent, node, rows) ->
    rows.pushObject node

    (node.children || []).forEach (child) =>
      @flattenTree node, child, rows
    rows

App.TreeTableExample.TreeTableRow = Ember.Table.Row.extend
  children: null
  parent:   null
  isCollapsed: no
  indentationSpacing: 15

  isLeaf: Ember.computed ->
    @get('children.length') is 0
  .property 'children'

  isShowing: Ember.computed ->
    parent = @get 'parent'
    return yes unless parent
    @get('parent.isShowing') and not @get('parent.isCollapsed')
  .property 'parent.isShowing', 'parent.isCollapsed'

  indentation: Ember.computed ->
    parent      = @get 'parent'
    spacing     = @get 'indentationSpacing'
    return 0 unless parent and spacing
    parent.get('indentation') + spacing
  .property 'indentationSpacing', 'parent.indentation'

  recursiveCollapse: (isCollapsed) ->
    @set 'isCollapsed', isCollapsed
    @get('children').forEach (child) ->
      child.recursiveCollapse isCollapsed

################################################################################
# Views
################################################################################
App.TreeTableExample.ToggleCell = Ember.Table.TableCell.extend
  templateName: 'table-toggle-cell'
  classNames: 'table-toggle-cell'

App.TreeTableExample.TreeCell = Ember.Table.TableCell.extend
  templateName: 'table-tree-cell'
  styleBindings: ['indentation:padding-left']

  indentation: Ember.computed ->
    indentation = @get 'row.indentation'
    if indentation then indentation - 15 else 0
  .property 'row.indentation'

App.TreeTableExample.HeaderTreeCell = Ember.Table.HeaderCell.extend
  templateName: 'table-header-tree-cell'

################################################################################
# Controller
################################################################################
App.TreeTableExample.TableController =
Ember.Table.TableController.extend App.TreeTableExample.TreeDataAdapter,
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
  selection: null

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

  onSelectionsDidChange: Ember.observer ->
    console.log 'selectionsDidChange'
  , 'selection.@each'
