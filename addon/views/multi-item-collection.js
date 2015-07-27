import Ember from 'ember';
import StyleBindingsMixin from 'ember-table/mixins/style-bindings';

export default Ember.CollectionView.extend(
StyleBindingsMixin, {
  styleBindings: 'width',
  itemViewClassField: null,

  createChildView: function(view, attrs) {
    var itemViewClassField = this.get('itemViewClassField');
    var itemViewClass = attrs.content.get(itemViewClassField);
    if (typeof itemViewClass === 'string') {
      if (/[A-Z]+/.exec(itemViewClass)) {
        // Global var lookup - 'App.MessagePreviewView'
        itemViewClass = Ember.get(Ember.lookup, itemViewClass);
      } else {
        // Ember CLI Style lookup - 'message/preview'
        itemViewClass = this.container.lookupFactory("view:" + itemViewClass);
      }
    }
    return this._super(itemViewClass, attrs);
  }
});
