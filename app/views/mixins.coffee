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

App.ResizableDemoMixin = Ember.Mixin.create
  didInsertElement: ->
    @_super()
    @$('.js-resizable-container').resizable
      handles: 'e'
      minWidth: 100
      alsoResize: 'ember-table-fixed-wrapper'
      resize: jQuery.proxy(@onTableContainerResize, this)
      stop:   jQuery.proxy(@onTableContainerResize, this)

  willDestroyElement: ->
    @_super()
    @$('.js-resizable-container').resizable('destroy')

  onTableContainerResize: (event, ui) ->
    @get('controller').updateDemoTableWidth(ui.size.width)
