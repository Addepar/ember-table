window.App = Ember.Application.create()

App.TableEditableExample = Ember.Namespace.create()
App.TableEditableExample.EditableTableCell = Ember.Table.TableCell.extend
  classNames: 'editable-table-cell'
  templateName: 'editable-table-cell'
  isEditing:  no
  type:       'text'

  innerTextField: Ember.TextField.extend
    typeBinding:  'parentView.type'
    valueBinding: 'parentView.cellContent'
    didInsertElement: -> @$().focus()
    blur: (event) ->
      @set 'parentView.isEditing', no

  onRowContentDidChange: Ember.observer ->
    @set 'isEditing', no
  , 'rowContent'

  click: (event) ->
    @set 'isEditing', yes
    event.stopPropagation()

App.TableEditableExample.DatePickerTableCell =
App.TableEditableExample.EditableTableCell.extend
  type: 'date'

App.TableEditableExample.RatingTableCell = Ember.Table.TableCell.extend
  classNames: 'rating-table-cell'
  templateName: 'rating-table-cell'
  didInsertElement: ->
    @_super()
    @onRowContentDidChange()
  applyRating: (rating) ->
    @$('.rating span').removeClass('active')
    span   = @$('.rating span').get(rating)
    $(span).addClass('active')
  click: (event) ->
    rating = @$('.rating span').index(event.target)
    return if rating is -1
    @get('column').setCellContent(@get('rowContent'), rating)
    @applyRating(rating)
  onRowContentDidChange: Ember.observer ->
    @applyRating @get('cellContent')
  , 'cellContent'

App.ApplicationView = Ember.View.extend
  classNames: 'ember-app'
  templateName: 'application'

App.ApplicationController = Ember.Controller.extend
  numRows: 100
  columns: Ember.computed ->
    columnNames = ['open', 'close']
    dateColumn = Ember.Table.ColumnDefinition.create
      columnWidth: 100
      headerCellName: 'Date'
      tableCellViewClass: 'App.TableEditableExample.DatePickerTableCell'
      getCellContent: (row) -> row['date'].toString('yyyy-MM-dd')
      setCellContent: (row, value) -> row['date'] = value
    ratingColumn = Ember.Table.ColumnDefinition.create
      columnWidth: 150
      headerCellName: 'Analyst Rating'
      tableCellViewClass: 'App.TableEditableExample.RatingTableCell'
      contentPath: 'rating'
      setCellContent: (row, value) -> row['rating'] = value
    columns= columnNames.map (key, index) ->
      name = key.charAt(0).toUpperCase() + key.slice(1)
      Ember.Table.ColumnDefinition.create
        columnWidth: 100
        headerCellName: name
        tableCellViewClass: 'App.TableEditableExample.EditableTableCell'
        getCellContent: (row) -> row[key].toFixed(2)
        setCellContent: (row, value) -> row[key] = +value
    columns.unshift(ratingColumn)
    columns.unshift(dateColumn)
    columns
  .property()

  content: Ember.computed ->
    [0...@get('numRows')].map (num, idx) ->
      index: idx
      date:  Date.today().add(days: idx)
      open:  Math.random() * 100 - 50
      close: Math.random() * 100 - 50
      rating:Math.round(Math.random() * 4)
  .property 'numRows'
