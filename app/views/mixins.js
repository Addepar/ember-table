App.CodePrettyPrintMixin = Ember.Mixin.create({
  prettyPrint: function() {
    Ember.run.next(this, function() {
      prettyPrint();
    });
  }.on('didInsertElement')
});

App.LargeHeroAffixMixin = Ember.Mixin.create({
  affix: function() {
    $('.sub-navigation-sidebar').affix({
      offset: {
        top: 500
      }
    });

    $('.sub-navigation-sidebar').data('bs.affix').options.offset.top = 500;
  }.on('didInsertElement')
});

App.SmallHeroAffixMixin = Ember.Mixin.create({
  affix: function() {
    $('.sub-navigation-sidebar').affix({
      offset: {
        top: 150
      }
    });
    $('.sub-navigation-sidebar').data('bs.affix').options.offset.top = 150;
  }.on('didInsertElement')
});
