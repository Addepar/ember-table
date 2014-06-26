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

    var val = $('.sub-navigation-sidebar').data('bs.affix').options.offset.top = 500;
    return val; // Potential unecessary return from coffee->js
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
    var val = $('.sub-navigation-sidebar').data('bs.affix').options.offset.top = 150;
    return val; // Potential unecessary return from coffee->js
  }
});
