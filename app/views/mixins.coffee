App.CodePrettyPrintMixin = Ember.Mixin.create
  didInsertElement: ->
    @_super()
    Ember.run.next this, -> prettyPrint()

App.LargeHeroAffixMixin = Ember.Mixin.create
  didInsertElement: ->
    @_super()
    $('.sub-navigation-sidebar').affix offset:
      top: 500
      bottom: 450
    # in case affix is already initialized and won't let us update options
    # we don't care, and just set it anyways
    $('.sub-navigation-sidebar').data('bs.affix').options.offset.top = 500

App.SmallHeroAffixMixin = Ember.Mixin.create
  didInsertElement: ->
    @_super()
    $('.sub-navigation-sidebar').affix offset:
      top: 150
      bottom: 450
    # in case affix is already initialized and won't let us update options
    # we don't care, and just set it anyways
    $('.sub-navigation-sidebar').data('bs.affix').options.offset.top = 150
