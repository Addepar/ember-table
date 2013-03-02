App.TableBarExample = Ember.Namespace.create()

Ember.Table.DynamicTableCell = Ember.Table.TableCell.extend
  contentPropertyWillChange: (->
    contentProperty = @get 'column.contentProperty'
    if contentProperty
      @removeObserver("rowContent.#{contentProperty}", this, this.contentDidChange)
  ).observesBefore 'column.contentProperty'

  contentPropertyDidChange: (->
    contentProperty = this.get 'column.contentProperty'
    if contentProperty
      @addObserver("rowContent.#{contentProperty}", this, this.contentDidChange)
  ).observesBefore 'column.contentProperty'

  contentDidChange: ->
    @notifyPropertyChange 'cellContent'

  init: ->
    @_super.apply(this, arguments)
    @contentPropertyDidChange()

App.TableBarExample.BarCell = Ember.Table.DynamicTableCell.extend
  templateName:     'bar-cell'
  classNameBindings:['column.color']
  barWidth: Ember.computed ->
    {column, row} = @getProperties 'column', 'row'
    return 0 unless column and row
    Math.round(+@get('cellContent'))
  .property 'cellContent'

  histogramStyle: Ember.computed ->
    "width: #{@get('barWidth')}%;"
  .property 'barWidth'

App.TableBarExample.TablesContainer = Ember.Table.TablesContainer.extend(
  Ember.Table.RowMultiSelectionMixin,
)

App.TableBarExample.TableController = Ember.Table.TableController.extend
  hasHeader:    yes
  hasFooter:    no
  numRows:      100
  rowHeight:    30

  columns: Ember.computed ->
    colors  = ['blue', 'teal', 'green', 'yellow', 'orange']
    column1 = Ember.Table.ColumnDefinition.create
      columnWidth:    50
      headerCellName: 'Name'
      contentPath: 'key'
    columns = [1..5].map (number, index) ->
      Ember.Table.ColumnDefinition.create
        color: colors[index]
        headerCellName: 'Bar'
        tableCellViewClass: 'App.TableBarExample.BarCell'
        contentProperty: "value#{number}"
        contentPath: "value#{number}"
    columns.unshift(column1)
    columns
  .property()

  init: ->
    setInterval =>
      @get('content').forEach (item) ->
        item.set 'value1', Math.abs(item.get('value1') + (Math.random() * 10 - 5))
        item.set 'value2', Math.abs(item.get('value2') + (Math.random() * 10 - 5))
        item.set 'value3', Math.abs(item.get('value3') + (Math.random() * 10 - 5))
        item.set 'value4', Math.abs(item.get('value4') + (Math.random() * 10 - 5))
        item.set 'value5', Math.abs(item.get('value5') + (Math.random() * 10 - 5))
    , 1500

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

  onSelectionsDidChange: Ember.observer ->
    console.log 'selectionsDidChange'
  , 'selection.@each'
