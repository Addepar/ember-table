App.TableBarExample = Ember.Namespace.create()

App.TableBarExample.BarCell = Ember.Table.TableCell.extend
  templateName:     'bar-cell'
  classNameBindings:['column.color']
  barWidth: Ember.computed ->
    {column, row} = @getProperties 'column', 'row'
    return 0 unless column and row
    Math.round(+column.getCellContent(row.get('content')))
  .property 'column', 'row'

  histogramStyle: Ember.computed ->
    "width: #{@get('barWidth')}%;"
  .property 'barWidth'

App.TableBarExample.TableController = Ember.Table.TableController.extend
  hasHeader:    yes
  hasFooter:    no
  numRows:      100
  rowHeight:    30

  columns: Ember.computed ->
    colors  = ['blue', 'teal', 'green', 'yellow', 'orange']
    column1 = @createColumn
      columnWidth:    50
      headerCellName: 'Name'
      getCellContent: (row) -> row['key']
    columns = [1..5].map (number, index) =>
      @createColumn
        color: colors[index]
        headerCellName: 'Bar'
        tableCellViewClass: 'App.TableBarExample.BarCell'
        getCellContent: (row) -> row["value#{number}"]
    columns.unshift(column1)
    columns
  .property()

  content: Ember.computed ->
    [0...@get('numRows')].map (num, index) ->
      key: index
      value1: Math.random() * 80 + 10
      value2: Math.random() * 80 + 10
      value3: Math.random() * 80 + 10
      value4: Math.random() * 80 + 10
      value5: Math.random() * 80 + 10
  .property 'numRows'
