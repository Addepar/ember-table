App.EmberTableAjaxLazyDataSource = Ember.ArrayProxy.extend({
  createGithubEvent: function(row, event) {
    row.set('type', event.type);
    row.set('createdAt', event.created_at);
    row.set('login', event.actor.login);
    row.set('avatar', event.actor.avatar_url);
    return row.set('isLoaded', true);
  },
  requestGithubEvent: function(page) {
    var content, end, start, url, _i, _results;
    content = this.get('content');
    start = (page - 1) * 30;
    end = start + 30;
    url = "https://api.github.com/repos/emberjs/ember.js/events?page=" + page + "&per_page=30&callback=?";
    Ember.$.getJSON(url, (function(_this) {
      return function(json) {
        return json.data.forEach(function(event, index) {
          var row;
          row = content[start + index];
          return _this.createGithubEvent(row, event);
        });
      };
    })(this));
    return (function() {
      _results = [];
      for (var _i = start; start <= end ? _i < end : _i > end; start <= end ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this).forEach(function(index) {
      return content[index] = Ember.Object.create({
        eventId: index,
        isLoaded: false
      });
    });
  },
  objectAt: function(index) {
    var content, row;
    content = this.get('content');
    row = content[index];
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
    var avatar, columnNames, columns;
    avatar = Ember.Table.ColumnDefinition.create({
      columnWidth: 80,
      headerCellName: 'avatar',
      tableCellViewClass: 'App.EmberTableAjaxImageTableCell',
      contentPath: 'avatar'
    });
    columnNames = ['login', 'type', 'createdAt'];
    columns = columnNames.map(function(key, index) {
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
