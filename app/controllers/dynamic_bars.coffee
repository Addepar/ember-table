App.EmberTableDynamicBarsController = Ember.Controller.extend
  numRows: 100

  getNextValue: (current) ->
    current = current + (Math.random() * 10 - 5)
    current = Math.min(100, current)
    current = Math.max(0, current)
    current

  init: ->
    setInterval =>
      @get('content').forEach (item) =>
        item.set 'value1', @getNextValue(item.get('value1'))
        item.set 'value2', @getNextValue(item.get('value2'))
        item.set 'value3', @getNextValue(item.get('value3'))
        item.set 'value4', @getNextValue(item.get('value4'))
        item.set 'value5', @getNextValue(item.get('value5'))
    , 1500

  columns: Ember.computed ->
    colors = ['blue', 'teal', 'green', 'yellow', 'orange']
    column1 = Ember.Table.ColumnDefinition.create
      savedWidth: 50
      headerCellName: 'Name'
      contentPath: 'key'
    columns = colors.map (color, index) ->
      Ember.Table.ColumnDefinition.create
        color: color
        headerCellName: 'Bar'
        tableCellViewClass: 'App.BarTableCell'
        contentPath: "value#{index + 1}"
    columns.unshift(column1)
    columns

  content: Ember.computed ->
    [0...@get('numRows')].map (num, index) ->
      Ember.Object.create
        key: index
        value1: Math.random() * 80 + 10
        value2: Math.random() * 80 + 10
        value3: Math.random() * 80 + 10
        value4: Math.random() * 80 + 10
        value5: Math.random() * 80 + 10
  .property 'numRows'
