App.TableFluidExample = Ember.Namespace.create()

App.TableFluidExample.LazyDataSource = Ember.ArrayProxy.extend
  objectAt: (idx) ->
    row  = @get('content')[idx]
    return row if row
    date = new Date();
    date.setDate(date.getDate() + idx)
    row =
      index: idx
      date:  date
      open:  Math.random() * 100 - 50
      high:  Math.random() * 100 - 50
      low:   Math.random() * 100 - 50
      close: Math.random() * 100 - 50
      volume: Math.random() * 1000000
    @get('content')[idx] = row
    row

App.TableFluidExample.TableController = Ember.Table.TableController.extend
  hasHeader: yes
  hasFooter: no
  numFixedColumns: 0
  numRows: 500000
  rowHeight: 30
  fluidTable: yes  

  columns: Ember.computed ->
    columnNames = ['open', 'high', 'low', 'close', 'volume']
    entryColumn = Ember.Table.ColumnDefinition.create
      columnWidth: "10%"
      headerCellName: 'Entry'
      getCellContent: (row) -> row['index'];
    dateColumn = Ember.Table.ColumnDefinition.create
      columnWidth: "30%"
      headerCellName: 'Date'
      getCellContent: (row) -> row['date'].toDateString();
    columns= columnNames.map (key, index) ->
      name = key.charAt(0).toUpperCase() + key.slice(1)
      Ember.Table.ColumnDefinition.create
        columnWidth: "12%"
        headerCellName: name
        getCellContent: (row) -> row[key].toFixed(2)
    columns.unshift(dateColumn)
    columns.unshift(entryColumn)
    columns
  .property()

  content: Ember.computed ->
    App.TableFluidExample.LazyDataSource.create
      content: new Array(@get('numRows'))
  .property 'numRows'
