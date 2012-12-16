window.App = Ember.Application.create
  customEvents:
    blur:   'blur'

App.EditableTableCell = Ember.Table.TableCell.extend
  classNames: 'editable-table-cell'
  templateName: 'editable-table-cell'
  isEditing:  no
  type:       'text'

  innerTextField: Ember.TextField.extend
    valueBinding: 'parentView.cellContent'
    didInsertElement: -> @$().focus()
    blur: -> @set 'parentView.isEditing', no

  onRowContentDidChange: Ember.observer ->
    @set 'isEditing', no
  , 'rowContent'

  editLabel: (event) ->
    @set 'isEditing', yes
    event.stopPropagation()

App.SimpleTableController = Ember.Table.TableController.extend
  hasHeader: yes
  hasFooter: yes
  numFixedColumns: 0
  numRows: 100000
  rowHeight: 30

  columns: Ember.computed ->
    [0...5].map (number) ->
      Ember.Table.ColumnDefinition.create
        headerCellName: 'Bar'
        tableCellViewClass: 'App.EditableTableCell'
        getCellContent: (row) -> row["value#{number}"].toFixed(2)
        setCellContent: (row, value) -> row["value#{number}"] = +value
  .property()

  content: Ember.computed ->
    [0...@get('numRows')].map (num, index) ->
      key: index
      value0: Math.random() * 80 + 10
      value1: Math.random() * 80 + 10
      value2: Math.random() * 80 + 10
      value3: Math.random() * 80 + 10
      value4: Math.random() * 80 + 10
  .property 'numRows'

App.ApplicationView = Ember.View.extend
  classNames: 'ember-app'
  templateName: 'application'

App.ApplicationController = Ember.Controller.extend
  tableController : Ember.computed ->
    App.SimpleTableController.create()
  .property()

App.Router = Ember.Router.extend
  root: Ember.Route.extend
    index: Ember.Route.extend
      route: '/'

App.initialize()