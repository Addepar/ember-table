// BEGIN-SNIPPET ajax-table-lazy-data-source
import Ember from 'ember';

export default Ember.ArrayProxy.extend({
  createGithubEvent: function(row, event) {
    row.set('type', event.type);
    row.set('createdAt', event.created_at);
    row.set('login', event.actor.login);
    row.set('avatar', event.actor.avatar_url);
    row.set('isLoaded', true);
    return row;
  },

  requestGithubEvent: function(page) {
    var _this = this;
    var content = this.get('content');
    var start = (page - 1) * 30;
    var end = start + 30;
    var url = 'https://api.github.com/repos/emberjs/ember.js/events?page=' +
      page + '&per_page=30&callback=?';
    Ember.$.getJSON(url, function(json) {
      return json.data.forEach(function(event, index) {
        var row = content[start + index];
        return _this.createGithubEvent(row, event);
      });
    });
    for (var index = start; index < end; index++) {
      content[index] = Ember.Object.create({
        eventId: index,
        isLoaded: false
      });
    }
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
// END-SNIPPET
