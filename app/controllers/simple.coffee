App.EmberTableSimpleController = Ember.Controller.extend
  numRows: 100

  columns: Ember.computed ->
    dateColumn = Ember.Table.ColumnDefinition.create
      columnWidth: 150
      textAlign: 'text-align-left'
      headerCellName: 'Date'
      getCellContent: (row) -> row['date'].toDateString();
    openColumn = Ember.Table.ColumnDefinition.create
      columnWidth: 100
      headerCellName: 'Open'
      getCellContent: (row) -> row['open'].toFixed(2)
    highColumn = Ember.Table.ColumnDefinition.create
      columnWidth: 100
      headerCellName: 'High'
      getCellContent: (row) -> row['high'].toFixed(2)
    lowColumn = Ember.Table.ColumnDefinition.create
      columnWidth: 100
      headerCellName: 'Low'
      getCellContent: (row) -> row['low'].toFixed(2)
    closeColumn = Ember.Table.ColumnDefinition.create
      columnWidth: 100
      headerCellName: 'Close'
      getCellContent: (row) -> row['close'].toFixed(2)
    [dateColumn, openColumn, highColumn, lowColumn, closeColumn]

  content: Ember.computed ->
    [0...@get('numRows')].map (index) ->
      date = new Date()
      date.setDate(date.getDate() + index)
      date:  date
      open:  Math.random() * 100 - 50
      high:  Math.random() * 100 - 50
      low:   Math.random() * 100 - 50
      close: Math.random() * 100 - 50
      volume: Math.random() * 1000000
  .property 'numRows'
