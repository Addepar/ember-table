window.App = Ember.Application.create()

App.TableSimpleExample = Ember.Namespace.create()

App.TableSimpleExample.LazyDataSource = Ember.ArrayProxy.extend
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

App.ApplicationView = Ember.View.extend
  classNames: 'ember-app'
  templateName: 'application'

App.ApplicationController = Ember.Controller.extend
  numRows: 500000

  columns: Ember.computed ->
    columnNames = ['open', 'high', 'low', 'close', 'volume']
    entryColumn = Ember.Table.ColumnDefinition.create
      columnWidth: 100
      headerCellName: 'Entry'
      contentPath: 'index'
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

  content: Ember.computed ->
    App.TableSimpleExample.LazyDataSource.create
      content: new Array(@get('numRows'))
  .property 'numRows'
