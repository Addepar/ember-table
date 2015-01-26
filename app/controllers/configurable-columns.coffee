App.EmberTableConfigurableColumnsController = Ember.Controller.extend
  numRows: 100

  isFluid: no
  columnMode: Ember.computed ->
    if @get('isFluid') then 'fluid' else 'standard'
  .property 'isFluid'

  showTable: yes

  columns: Ember.computed ->
    dateColumn = App.ConfigurableColumnDefinition.create
      textAlign: 'text-align-left'
      headerCellName: 'Date'
      minWidth: 150
      getCellContent: (row) -> row.get('date').toDateString();
    openColumn = App.ConfigurableColumnDefinition.create
      headerCellName: 'Open'
      getCellContent: (row) -> row.get('open').toFixed(2)
    highColumn = App.ConfigurableColumnDefinition.create
      headerCellName: 'High'
      getCellContent: (row) -> row.get('high').toFixed(2)
    lowColumn = App.ConfigurableColumnDefinition.create
      headerCellName: 'Low'
      getCellContent: (row) -> row.get('low').toFixed(2)
    closeColumn = App.ConfigurableColumnDefinition.create
      headerCellName: 'Close'
      getCellContent: (row) -> row.get('close').toFixed(2)
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

  # We bind the container width to a `parentWidth` property on the
  # `ConfigurableTableComponent`. Then we extend the table to force it to
  # handle resizes whenever the `parentWidth` changes. This is a hack - the
  # table should take care of resizing to available width on its own, but for
  # now we need this to make the demo work.
  demoTableWidth: undefined
  updateDemoTableWidth: (newWidth) ->
    @set 'demoTableWidth', newWidth

  actions:
    # Pulls the table out and back into the DOM
    refreshTable: ->
      @set 'showTable', no
      Ember.run.next =>
        @set 'showTable', yes

# We extend Ember.Table.ColumnDefinition for two reasons: to use custom
# getters/setters for savedWidth/minWidth/maxWidth so that they can be set via
# the configuration container, and to add properties which can be used for
# formatting.
App.ConfigurableColumnDefinition = Ember.Table.ColumnDefinition.extend
  savedWidth: undefined
  savedWidthValue: Ember.computed (key, value) ->
    if arguments.length is 1
      return @get('savedWidth')
    else
      @set('savedWidth', parseInt(value))
      return @get('savedWidth')
  .property 'savedWidth'

  minWidthValue: Ember.computed (key, value) ->
    if arguments.length is 1
      return @get('minWidth')
    else
      @set('minWidth', parseInt(value))
      return @get('minWidth')
  .property 'minWidth'

  atMinWidth: Ember.computed ->
    @get('width') is @get('minWidth')
  .property 'width', 'minWidth'

  atMaxWidth: Ember.computed ->
    @get('width') is @get('maxWidth')
  .property 'width', 'maxWidth'

  maxWidth: undefined
  maxWidthValue: Ember.computed (key, value) ->
    if arguments.length is 1
      return @get('maxWidth')
    else
      @set('maxWidth', parseInt(value))
      return @get('maxWidth')
  .property 'maxWidth'

  # Generate documentation on how to create a column like this
  columnDefinitionDocumentation: Ember.computed ->
    docString = ''
    docString += '    ' + @get('headerCellName').toLowerCase() +
      'Column = Ember.Table.ColumnDefinition.create\n'
    unless @get('textAlign') is 'text-align-right'
      docString += "      textAlign: '" + @get('textAlign') + "'\n"
    docString += "      headerCellName: '" + @get('headerCellName') + "'\n"
    unless @get('minWidth') is 25
      docString += '      minWidth: ' + @get('minWidth') + '\n'
    if @get('maxWidth')
      docString += '      maxWidth: ' + @get('maxWidth') + '\n'
    unless @get('isSortable')
      docString += '      isSortable: no\n'
    unless @get('isResizable')
      docString += '      isResizable: no\n'
    if @get('canAutoResize')
      docString += '      canAutoResize: yes\n'
    if @get('headerCellName') is 'Date'
      docString +=
        "      getCellContent: (row) -> row.get('date').toDateString()"
    else
      docString += "      getCellContent: (row) -> row.get('" +
        @get('headerCellName').toLowerCase() + "').toFixed(2)"
    docString
  .property('headerCellName', 'textAlign', 'minWidth', 'maxWidth',
    'isSortable', 'isResizable', 'canAutoResize')

# TODO(azirbel): We extend this to create a very hacky way of calling
# `@onResizeEnd` in the table, triggered by resizing the table's container. We
# only need to do this because the table currently does a bad job detecting
# when its width has changed.
App.ConfigurableTableComponent = Ember.Table.EmberTableComponent.extend
  parentWidthObserver: Ember.observer( ->
    @onResizeEnd()
  , 'parentWidth')
