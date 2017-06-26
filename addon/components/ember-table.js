import Ember from 'ember';
import layout from '../templates/components/ember-table';

export default Ember.Component.extend({
  layout,

  hasFixedColumn: true,


  /**
   * Indicates if this table allows column resizing or not. It's false by default.
   */
  enableColumnResize: false,

  enableCellClick: false,

  didInsertElement() {
    this._super(...arguments);

    if (this.checkParentActionExists('onCellClicked')) {
      this.set('enableCellClick', true)
    }
  },

  checkParentActionExists(actionName) {
    const parent = this.get('targetObject')
    const actions = parent && (parent.actions || parent._actions);
    return actions && Em.get(actions, actionName)
  },

  actions: {
    onColumnBoundaryPanned(columnIndex, delta, isRightBoundary) {
      if (isRightBoundary) {
        const column = this.get('columns')[columnIndex];
        column.set('width', column.width + delta)
      } else {
        if (columnIndex > 1) {
          const column = this.get('columns')[columnIndex - 1];
          column.set('width', column.width + delta)
        }
      }
    },

    onHeaderClicked() {

    },

    onCellClicked(rowIndex, columnIndex) {
      this.sendAction('onCellClicked', rowIndex, columnIndex)
    }
  }
});
