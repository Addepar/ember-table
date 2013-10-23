App.BarTableCell = Ember.Table.TableCell.extend
  templateName:     'ember_table/bar_table/bar'
  classNameBindings:['column.color']
  barWidth: Ember.computed ->
    {column, row} = @getProperties 'column', 'row'
    return 0 unless column and row
    Math.round(+@get('cellContent'))
  .property 'column', 'row', 'cellContent'

  histogramStyle: Ember.computed ->
    "width: #{@get('barWidth')}%;"
  .property 'barWidth'