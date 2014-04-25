
App.EmberTableOverviewView = Ember.View.extend(App.LargeHeroAffixMixin)

App.EmberTableDocumentationView = Ember.View.extend(App.SmallHeroAffixMixin)

App.EmberTableAjaxView =
Ember.View.extend(App.CodePrettyPrintMixin, App.SmallHeroAffixMixin)

App.EmberTableBarsView =
Ember.View.extend(App.CodePrettyPrintMixin, App.SmallHeroAffixMixin)

App.EmberTableDynamicBarsView =
Ember.View.extend(App.CodePrettyPrintMixin, App.SmallHeroAffixMixin)

App.EmberTableEditableView =
Ember.View.extend(App.CodePrettyPrintMixin, App.SmallHeroAffixMixin)

App.EmberTableFinancialView =
Ember.View.extend(App.CodePrettyPrintMixin, App.SmallHeroAffixMixin)

App.EmberTableConfigurableColumnsView =
Ember.View.extend(App.CodePrettyPrintMixin, App.SmallHeroAffixMixin,
  App.ResizableDemoMixin)

App.EmberTableHorizonView =
Ember.View.extend(App.CodePrettyPrintMixin, App.SmallHeroAffixMixin)

App.EmberTableSimpleView =
Ember.View.extend(App.CodePrettyPrintMixin, App.SmallHeroAffixMixin)

App.EmberTableSparklineView =
Ember.View.extend(App.CodePrettyPrintMixin, App.SmallHeroAffixMixin)
