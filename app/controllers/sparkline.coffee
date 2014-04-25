App.EmberTableSparklineController = Ember.Controller.extend
  numRows: 100
  columns: Ember.computed ->
    name = Ember.Table.ColumnDefinition.create
      savedWidth: 100
      headerCellName: 'Name'
      getCellContent: (row) -> 'Asset ' + row.get('name')
    open = Ember.Table.ColumnDefinition.create
      savedWidth: 100
      headerCellName: 'Open'
      getCellContent: (row) -> row.get('open').toFixed(2)
    spark = Ember.Table.ColumnDefinition.create
      savedWidth: 200
      headerCellName: 'Sparkline'
      tableCellViewClass: 'App.SparkLineTableCellView'
      contentPath: 'timeseries'
    close = Ember.Table.ColumnDefinition.create
      savedWidth: 100
      headerCellName: 'Close'
      getCellContent: (row) -> row.get('close').toFixed(2)
    low = Ember.Table.ColumnDefinition.create
      savedWidth: 100
      headerCellName: 'Low'
      getCellContent: (row) -> row.get('low').toFixed(2)
    high = Ember.Table.ColumnDefinition.create
      savedWidth: 100
      headerCellName: 'High'
      getCellContent: (row) -> row.get('high').toFixed(2)
    [name, open, spark, close, low, high]

  content: Ember.computed ->
    randomWalk = (numSteps) ->
      lastValue = 0
      [0...numSteps].map ->
        lastValue = lastValue + d3.random.normal()()

    [0...@get('numRows')].map (num, index) ->
      data = randomWalk(100)
      name: index
      timeseries: data
      open:  data[0]
      close: data[99]
      low:   Math.min.apply(null, data)
      high:  Math.max.apply(null, data)
   .property 'numRows'
