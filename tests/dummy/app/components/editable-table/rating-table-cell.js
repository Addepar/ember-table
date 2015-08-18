// BEGIN-SNIPPET rating-table-cell
import Ember from 'ember';
import TableCell from 'ember-table/components/table-cell';

export default TableCell.extend({
  classNames: 'rating-table-cell',

  onRowContentDidChange: Ember.observer('cellContent', function() {
    this.applyRating(this.get('cellContent'));
  }),

  didRender: function() {
    this._super();
    this.onRowContentDidChange();
  },

  applyRating: function(rating) {
    this.$('.rating span').removeClass('active');
    var span = this.$('.rating span').get(rating);
    Ember.$(span).addClass('active');
  },

  click: function(event) {
    var rating = this.$('.rating span').index(event.target);
    if (rating === -1) {
      return;
    }
    this.get('column').setCellContent(this.get('row'), rating);
    this.applyRating(rating);
  }
});
// END-SNIPPET
