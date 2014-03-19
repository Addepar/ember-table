Ember.AddeparMixins = Ember.AddeparMixins || Ember.Namespace.create();

Ember.AddeparMixins.SelectionMixin = Ember.Mixin.create({
  init: function () {
    this._super.apply(this, arguments);
    if (this.get('enableSelection')) {
      this.on('mouseDown', this.clickEvent);
      this.on('keyDown', this.keyDownEvent);
      this.on('contextMenu', this.contextMenuEvent);
    }
    this.set('selection', []);
    this.set('baseSelectedIndex', null);
    this.set('lastSelectedIndex', null);
  },
  attributeBindings: ['tabIndex'],
  tabIndex: -1,
  isSelected: function (row) {
    return this.get('selection').contains(row);
  },
  addSelected: function (row) {
    if (!this.isSelected(row)) {
      this.get('selection').pushObject(row);
    }
  },
  removeSelected: function (row) {
    if (this.isSelected(row)) {
      this.get('selection').removeObject(row);
    }
  },
  selectAll: function () {
    this.clearSelection();
    this.set('baseSelectedIndex', null);
    this.set('lastSelectedIndex', this.get('content.length'));
    // needs to be checked because content might be either regular array or array proxy
    var content = (Array.isArray(this.get('content'))) ? this.get('content') : this.get('content.content');
    this.get('selection').pushObjects(content);
  },
  clearSelection: function () {
    this.get('selection').clear();
  },
  selectWithArrow: function (direction, aggregate) {
    var rowIndex, futureRowIndex, row;
    if (this.get('lastSelectedIndex') !== this.get('baseSelectedIndex')) {
      rowIndex = this.get('lastSelectedIndex');
    }
    else {
      rowIndex = this.get('baseSelectedIndex');
    }

    if (direction === 'up') {
      futureRowIndex = rowIndex - 1;
    }
    if (direction === 'down') {
      futureRowIndex = rowIndex + 1;
    }

    if (!aggregate) {
      this.clearSelection();
      this.set('baseSelectedIndex', futureRowIndex);
    }

    this.set('lastSelectedIndex', futureRowIndex);
    row = this.get('content').objectAt(futureRowIndex);
    if (this.isSelected(row)) {
      this.removeSelected(this.get('content').objectAt(rowIndex));
    }
    else {
      this.addSelected(row);
    }
  },
  handleSelection: function (ev, row) {
    if (row === void 0) { return; }
    var rowIndex = (this.get('content') !== void 0) ? this.get('content').indexOf(row) : -1;
    // if none of the ctrl, meta, and shift keys
    // are pressed, clear the selection
    if (!ev.ctrlKey && !ev.metaKey && !ev.shiftKey) {
      this.clearSelection();
    }

    // deselect the row if ctrl button is pressed
    // and the item is selected
    if ((ev.ctrlKey || ev.metaKey) && this.get('selection').contains(row)) {
      return this.removeSelected(row);
    }

    // if selection is performed with shift key
    // the selected items should be between the last
    // and currently clicked items
    if (ev.shiftKey) {
      var minIndex = Math.min(this.get('baseSelectedIndex'), rowIndex),
          maxIndex = Math.max(this.get('baseSelectedIndex'), rowIndex);
      this.clearSelection();
      for (var i = minIndex; i <= maxIndex; i += 1) {
        this.addSelected(this.get('content').objectAt(i));
      }
      this.set('lastSelectedIndex', rowIndex);
    }
    else {
      // set pivot
      this.set('baseSelectedIndex', rowIndex);
      this.set('lastSelectedIndex', rowIndex);
    }
    this.addSelected(row);
  },
  clickEvent: function (ev) {
    var row = this.getRowForEvent(ev);
    if (row !== void 0) {
      return this.handleSelection(ev, row.get('content'));
    }
  },
  keyDownEvent: function (ev) {
    // disable default scrolling strategy of the browser

    switch (ev.keyCode) {
      // arrow up
      case 38:
        ev.preventDefault();
        return this.selectWithArrow('up', ev.shiftKey);
      // arrow down
      case 40:
        ev.preventDefault();
        return this.selectWithArrow('down', ev.shiftKey);
      // a
      case 65:
        if (ev.ctrlKey || ev.metaKey) { return this.selectAll(); }
    }
  },
  /**
   * Content menu event (mouse right click) behavior:
   * 1. If click is on the row that is not selected, the clicked row becomes the selection
   * 2. If click is on the row that currently is in the list of selection, selection does not change
   * @param ev
   */
  contextMenuEvent: function (ev) {
    var clickedRow = this.getRowForEvent(ev);
    if (!this.isSelected(clickedRow.get('content'))) {
      this.clearSelection();
      this.addSelected(clickedRow.get('content'));
    }
    this.sendAction('contextMenuHandler', this.get('selection'));
  }
});
