Ember.AddeparMixins = Ember.AddeparMixins || Ember.Namespace.create();

Ember.AddeparMixins.SelectionMixin = Ember.Mixin.create({
  selection: [],
  addSelected: function (row) {
    if (!this.get('selection').contains(row)) {
      this.get('selection').pushObject(row);
    }
  },
  selectAll: function () {
    this.get('selection').clear();
    this.get('selection').pushObjects(this.get('content.content'));
  },
  clearSelection: function () {
    this.get('selection').clear();
  },
  selectWithArrow: function (ev, direction) {
    if (this.get('selection.length') !== 1) { return; }
    var selectedIndex = this.get('content.arrangedContent').indexOf(this.get('selection.firstObject'));
    if (direction === 'up') {
      this.clearSelection();
      this.addSelected(this.get('content').objectAt(selectedIndex - 1));
    }
    if (direction === 'down') {
      this.clearSelection();
      this.addSelected(this.get('content').objectAt(selectedIndex + 1));
    }
  },
  handleSelection: function (ev, row) {
    if (row === void 0) { return; }
    // if none of the ctrl, meta, and shift keys
    // are pressed, clear the selection
    if (!ev.ctrlKey && !ev.metaKey && !ev.shiftKey) {
      this.clearSelection();
    }

    // if selection is performed with shift key
    // the selected items should be between the last
    // and currently clicked items
    if (ev.shiftKey) {
      var lastSelectedIndex = this.get('content').indexOf(this.get('selection.lastObject')),
        rowIndex = this.get('content').indexOf(row),
        minIndex = Math.min(lastSelectedIndex, rowIndex),
        maxIndex = Math.max(lastSelectedIndex, rowIndex);
      this.clearSelection();
      for (var i = minIndex; i <= maxIndex; i += 1) {
        this.addSelected(this.get('content').objectAt(i));
      }
    }
    this.addSelected(row);
  },
  click: function (ev) {
    var row = this.getRowForEvent(ev);
    if (row !== void 0) {
      return this.handleSelection(ev, row.get('content'));
    }
  },
  keyDown: function (ev) {
    // disable default scrolling strategy of the browser
    ev.preventDefault();
    switch (ev.keyCode) {
      // arrow up
      case 38:
        return this.selectWithArrow(ev, 'up');
      // arrow down
      case 40:
        return this.selectWithArrow(ev, 'down');
      // a
      case 65:
        if (ev.shiftKey) { return this.selectAll(); }
    }
  },
  /**
   * Content menu event (mouse right click) behavior:
   * 1. If click is on the row that is not selected, the clicked row becomes the selection
   * 2. If click is on the row that currently is in the list of selection, selection does not change
   * @param ev
   */
  contextMenu: function (ev) {
    var clickedRow = this.getRowForEvent(ev);
    if (!this.get('selection').contains(clickedRow.get('content'))) {
      this.clearSelection();
      this.addSelected(clickedRow.get('content'));
    }
    this.sendAction('contextMenuHandler', this.get('selection'));
  }
});
