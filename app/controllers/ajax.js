App.EmberTableAjaxLazyDataSource = Ember.ArrayProxy.extend({
  createGithubEvent: function(row, event) {
    row.set('type', event.type);
    row.set('createdAt', event.created_at);
    row.set('login', event.actor.login);
    row.set('avatar', event.actor.avatar_url);
    row.set('isLoaded', true);
  },
  requestGithubEvent: function(page) {
    var _i, _results;
    var content = this.get('content');
    var start = (page - 1) * 30;
    var end = start + 30;
    var url = "https://api.github.com/repos/emberjs/ember.js/events?page=" + page + "&per_page=30&callback=?";
    var _this = this;
    Ember.$.getJSON(url, function(json) {
      return json.data.forEach(function(event, index) {
        var row = content[start + index];
        return _this.createGithubEvent(row, event);
      });
    });
    App.utils.range(start, end).forEach(function(index) {
      content[index] = Ember.Object.create({
        eventId: index,
        isLoaded: false
      });
    }, this);
  },
  objectAt: function(index) {
    var content = this.get('content');
    var row = content[index];
    if (row && !row.get('error')) {
      return row;
    }
    this.requestGithubEvent(Math.floor(index / 30 + 1));
    return content[index];
  }
});

App.EmberTableAjaxController = Ember.Controller.extend({
  numRows: 100,
  columns: Ember.computed(function() {
    var avatar = Ember.Table.ColumnDefinition.create({
      columnWidth: 80,
      headerCellName: 'avatar',
      tableCellViewClass: 'App.EmberTableAjaxImageTableCell',
      contentPath: 'avatar'
    });
    var columnNames = ['login', 'type', 'createdAt'];
    var columns = columnNames.map(function(key, index) {
      return Ember.Table.ColumnDefinition.create({
        columnWidth: 150,
        headerCellName: key.w(),
        contentPath: key
      });
    });
    columns.unshift(avatar);
    return columns;
  }),
  content: Ember.computed(function() {
    return App.EmberTableAjaxLazyDataSource.create({
      content: new Array(this.get('numRows'))
    });
  }).property('numRows')
});
