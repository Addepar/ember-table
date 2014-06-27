App.EditableTableCell = Ember.Table.TableCell.extend({
  className: 'editable-table-cell',
  templateName: 'ember_table/editable_table/editable_table_cell',
  isEditing: false,
  type: 'text',
  innerTextField: Ember.TextField.extend({
    typeBinding: 'parentView.type',
    valueBinding: 'parentView.cellContent',
    focus: function() {
      this.$().focus();
    }.on('didInsertElement'),
    focusOut: function(event) {
      this.set('parentView.isEditing', false);
    }
  }),
  onRowContentDidChange: function() {
    this.set('isEditing', false);
  }.observes('rowContent'),
  click: function(event) {
    this.set('isEditing', true);
    event.stopPropagation();
  }
});

App.DatePickerTableCell = App.EditableTableCell.extend({
  type: 'date'
});

App.RatingTableCell = Ember.Table.TableCell.extend({
  classNames: 'rating-table-cell',
  templateName: 'ember_table/editable_table/rating_table_cell',
  onRowContentDidChange: function() {
    this.applyRating(this.get('cellContent'));
  }.observes('cellContent').on('didInsertElement'),
  applyRating: function(rating) {
    this.$('.rating span').removeClass('active');
    var span = this.$('.rating span').get(rating);
    $(span).addClass('active');
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
