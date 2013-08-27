window.App = Ember.Application.create()

App.TableAjaxExample = Ember.Namespace.create()

App.TableAjaxExample.ImageTableCell = Ember.Table.TableCell.extend
  templateName: 'img-table-cell'
  classNames:   'img-table-cell'

App.TableAjaxExample.LazyDataSource = Ember.ArrayProxy.extend
  createGithubEvent: (row, event) ->
    row.set 'type',       event.type
    row.set 'createdAt',  event.created_at
    row.set 'login',      event.actor.login
    row.set 'avatar',     event.actor.avatar_url
    row.set 'isLoaded',   yes

  requestGithubEvent: (page) ->
    content = @get 'content'
    start   = (page - 1) * 30
    end     = start + 30
    url = "https://api.github.com/repos/emberjs/ember.js/events?page=#{page}&per_page=30&callback=?"
    Ember.$.getJSON url, (json) =>
      json.data.forEach (event, index) =>
        row = content[start + index]
        @createGithubEvent row, event
    [start...end].forEach (index) ->
      content[index] = Ember.Object.create eventId: index, isLoaded: no

  objectAt: (index) ->
    content = @get 'content'
    #if index is content.get('length') - 1
    #  content.pushObjects(new Array(30))
    row = content[index]
    return row if row and not row.get('error')
    @requestGithubEvent Math.floor(index / 30 + 1)
    content[index]

# https://api.github.com/repos/emberjs/ember.js/events?page=1&per_page=100
App.ApplicationView = Ember.View.extend
  classNames: 'ember-app'
  templateName: 'application'

App.ApplicationController = Ember.Controller.extend
  numRows: 100
  tableController : Ember.computed ->
    Ember.get('App.TableAjaxExample.TableController').create()
  .property()

  columns: Ember.computed ->
    avatar = Ember.Table.ColumnDefinition.create
      columnWidth: 80
      headerCellName: 'avatar'
      tableCellViewClass:  'App.TableAjaxExample.ImageTableCell'
      contentPath: 'avatar'
    columnNames = ['login', 'type', 'createdAt']
    columns = columnNames.map (key, index) ->
      Ember.Table.ColumnDefinition.create
        columnWidth: 150
        headerCellName: key.w()
        contentPath: key
    columns.unshift avatar
    columns
  .property()

  content: Ember.computed ->
    App.TableAjaxExample.LazyDataSource.create
      content: new Array(@get('numRows'))
  .property 'numRows'
