App.EmberTableAjaxLazyDataSource = Ember.ArrayProxy.extend
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

App.EmberTableAjaxController = Ember.Controller.extend
  numRows: 100

  columns: Ember.computed ->
    avatar = Ember.Table.ColumnDefinition.create
      savedWidth: 80
      headerCellName: 'avatar'
      tableCellViewClass:  'App.EmberTableAjaxImageTableCell'
      contentPath: 'avatar'
    columnNames = ['login', 'type', 'createdAt']
    columns = columnNames.map (key, index) ->
      Ember.Table.ColumnDefinition.create
        savedWidth: 150
        headerCellName: key.w()
        contentPath: key
    columns.unshift avatar
    columns

  content: Ember.computed ->
    App.EmberTableAjaxLazyDataSource.create
      content: new Array(@get('numRows'))
  .property 'numRows'
