Ember.AddeparMixins = Ember.AddeparMixins || Ember.Namespace.create();

Ember.AddeparMixins.SelectionMixin = Ember.Mixin.create({
  init: function () {
    this._super.apply(this, arguments);
    if (this.get('enableSelection')) {
      this.on('click', this.clickHandler);
      this.on('keyDown', this.keyDownHandler);
      this.on('contextMenu', this.contextMenuHandler);
    }
    this.set('selection', []);
  },
  attributeBindings: ['tabIndex'],
  tabIndex: -1,
  addSelected: function (row) {
    if (!this.get('selection').contains(row)) {
      this.get('selection').pushObject(row);
    }
  },
  removeSelected: function (row) {
    if (this.get('selection').contains(row)) {
      this.get('selection').removeObject(row);
    }
  },
  selectAll: function () {
    this.get('selection').clear();
    // needs to be checked because content might be either regular array or array proxy
    var content = (Array.isArray(this.get('content'))) ? this.get('content') : this.get('content.content');
    this.get('selection').pushObjects(content);
  },
  clearSelection: function () {
    this.get('selection').clear();
  },
  selectWithArrow: function (ev, direction, aggregate) {
    var selectedIndex = this.get('content').indexOf(this.get('selection.lastObject'));
    if (direction === 'up') {
      if (!aggregate) { this.clearSelection(); }
      this.addSelected(this.get('content').objectAt(selectedIndex - 1));
    }
    if (direction === 'down') {
      if (!aggregate) { this.clearSelection(); }
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

    // deselect the row if ctrl button is pressed
    // and the item is selected
    if ((ev.ctrlKey || ev.metaKey) && this.get('selection').contains(row)) {
      return this.removeSelected(row);
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
  clickHandler: function (ev) {
    var row = this.getRowForEvent(ev);
    if (row !== void 0) {
      return this.handleSelection(ev, row.get('content'));
    }
  },
  keyDownHandler: function (ev) {
    // disable default scrolling strategy of the browser

    switch (ev.keyCode) {
      // arrow up
      case 38:
        ev.preventDefault();
        return this.selectWithArrow(ev, 'up', ev.shiftKey);
      // arrow down
      case 40:
        ev.preventDefault();
        return this.selectWithArrow(ev, 'down', ev.shiftKey);
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
  contextMenuHandler: function (ev) {
    var clickedRow = this.getRowForEvent(ev);
    if (!this.get('selection').contains(clickedRow.get('content'))) {
      this.clearSelection();
      this.addSelected(clickedRow.get('content'));
    }
    this.sendAction('contextMenuHandler', this.get('selection'));
  }
});
