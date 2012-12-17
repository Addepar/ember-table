App.TableSplitExample = Ember.Namespace.create()

App.TableSplitExample.SplitTableArrayProxy = Ember.ArrayProxy.extend
  content:    null
  pageIndex:      null
  numRowsPerPage: null
  firstPageOffset:null

  startIndex: Ember.computed ->
    pageIndex       = @get 'pageIndex'
    firstPageOffset = @get 'firstPageOffset'
    numRowsPerPage  = @get 'numRowsPerPage'
    return 0 if pageIndex is 0
    firstPageOffset + (pageIndex - 1) * numRowsPerPage
  .property 'firstPageOffset', 'numRowsPerPage', 'pageIndex'

  endIndex:   Ember.computed ->
    @get('startIndex') + @get('numRowsPerPage')
  .property 'startIndex', 'numRowsPerPage'

  length: Ember.computed ->
    @get('endIndex') - @get('startIndex')
  .property 'startIndex', 'endIndex'

  objectAt: (idx) ->
    index = @get('startIndex') + idx
    @get('content')[index]

App.TableSplitExample.TableController = Ember.Table.TableController.extend
  hasHeader: yes
  hasFooter: no
  rowHeight: 30
  numFixedColumns: 0

App.TableSplitExample.SplitTableController = Ember.ArrayController.extend
  firstPageOffset: 20
  numRowsPerPage:  20
  numPages: Ember.computed ->
    Math.ceil @get('bodyContent.length') / @get('numRowsPerPage')
  .property 'bodyContent.length', 'numRowsPerPage'

  content: Ember.computed ->
    [0...@get('numPages')].map (index) =>
      App.TableSplitExample.SplitTableArrayProxy.create
        parent: this
        pageIndex: index
        contentBinding: 'parent.bodyContent'
        numRowsPerPageBinding: 'parent.numRowsPerPage'
        firstPageOffsetBinding:'parent.firstPageOffset'
  .property 'numPages'

  columns: Ember.computed ->
    columnNames = ['open', 'high', 'low', 'close', 'volume']
    entryColumn = Ember.Table.ColumnDefinition.create
      columnWidth: 100
      headerCellName: 'Entry'
      getCellContent: (row) -> row['index'];
    dateColumn = Ember.Table.ColumnDefinition.create
      columnWidth: 150
      headerCellName: 'Date'
      getCellContent: (row) -> row['date'].toDateString();
    columns= columnNames.map (key, index) ->
      name = key.charAt(0).toUpperCase() + key.slice(1)
      Ember.Table.ColumnDefinition.create
        columnWidth: 100
        headerCellName: name
        getCellContent: (row) -> row[key].toFixed(2)
    columns.unshift(dateColumn)
    columns.unshift(entryColumn)
    columns
  .property()

  objectAtContent: (idx) ->
    App.TableSplitExample.TableController.create
      parentController: this
      content: @get('content').objectAt(idx)
      columns: @get('columns')

App.TableSplitExample.TablesContainer = Ember.Table.TablesContainer.extend
  controllerBinding: 'content'
