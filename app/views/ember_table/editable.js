App.EditableTableCell = Ember.Table.TableCell.extend({
  className: 'editable-table-cell',
  templateName: 'ember_table/editable_table/editable_table_cell',
  isEditing: false,
  type: 'text',
  innerTextField: Ember.TextField.extend({
    typeBinding: 'parentView.type',
    valueBinding: 'parentView.cellContent',
    didInsertElement: function() {
      return this.$().focus();
    },
    focusOut: function(event) {
      return this.set('parentView.isEditing', false);
    }
  }),
  onRowContentDidChange: Ember.observer(function() {
    return this.set('isEditing', false);
  }, 'rowContent'),
  click: function(event) {
    this.set('isEditing', true);
    return event.stopPropagation();
  }
});

App.DatePickerTableCell = App.EditableTableCell.extend({
  type: 'date'
});

App.RatingTableCell = Ember.Table.TableCell.extend({
  classNames: 'rating-table-cell',
  templateName: 'ember_table/editable_table/rating_table_cell',
  onRowContentDidChange: Ember.observer(function() {
    return this.applyRating(this.get('cellContent'));
  }, 'cellContent'),
  didInsertElement: function() {
    this._super();
    return this.onRowContentDidChange();
  },
  applyRating: function(rating) {
    var span;
    this.$('.rating span').removeClass('active');
    span = this.$('.rating span').get(rating);
    return $(span).addClass('active');
  },
  click: function(event) {
    var rating;
    rating = this.$('.rating span').index(event.target);
    if (rating === -1) {
      return;
    }
    this.get('column').setCellContent(this.get('row'), rating);
    return this.applyRating(rating);
  }
});
