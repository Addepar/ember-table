App.CodePrettyPrintMixin = Ember.Mixin.create({
  didInsertElement: function() {
    this._super();
    return Ember.run.next(this, function() {
      return prettyPrint();
    });
  }
});

App.LargeHeroAffixMixin = Ember.Mixin.create({
  didInsertElement: function() {
    this._super();
    $('.sub-navigation-sidebar').affix({
      offset: {
        top: 500
      }
    });
    return $('.sub-navigation-sidebar').data('bs.affix').options.offset.top = 500;
  }
});

App.SmallHeroAffixMixin = Ember.Mixin.create({
  didInsertElement: function() {
    this._super();
    $('.sub-navigation-sidebar').affix({
      offset: {
        top: 150
      }
    });
    return $('.sub-navigation-sidebar').data('bs.affix').options.offset.top = 150;
  }
});
