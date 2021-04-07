"use strict";



define("dummy/adapters/-addon-docs", ["exports", "ember-cli-addon-docs/adapters/-addon-docs"], function (_exports, _addonDocs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _addonDocs.default;
    }
  });
});
define("dummy/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
define("dummy/adapters/class", ["exports", "ember-cli-addon-docs/adapters/class"], function (_exports, _class) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _class.default;
    }
  });
});
define("dummy/adapters/component", ["exports", "ember-cli-addon-docs/adapters/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/adapters/module", ["exports", "ember-cli-addon-docs/adapters/module"], function (_exports, _module) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _module.default;
    }
  });
});
define("dummy/adapters/project", ["exports", "ember-cli-addon-docs/adapters/project"], function (_exports, _project) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _project.default;
    }
  });
});
define("dummy/app", ["exports", "dummy/resolver", "ember-load-initializers", "dummy/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // Including ember-cli-addon-docs breaks certain versions of Ember when testing
  // but they also break if we remove it. This defines a stub router which should
  // prevent breakage.
  if (!require.entries['ember-cli-addon-docs/router']) {
    define('ember-cli-addon-docs/router', () => {
      return Ember.Router;
    });
  }

  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
define("dummy/breakpoints", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 991px)',
    desktop: '(min-width: 992px) and (max-width: 1200px)',
    jumbo: '(min-width: 1201px)'
  };
  _exports.default = _default;
});
define("dummy/components/-ember-table-private/row-wrapper", ["exports", "ember-table/components/-private/row-wrapper"], function (_exports, _rowWrapper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowWrapper.default;
    }
  });
});
define("dummy/components/-ember-table-private/scroll-indicators", ["exports", "ember-table/components/-private/scroll-indicators/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/-ember-table-private/simple-checkbox", ["exports", "ember-table/components/-private/simple-checkbox"], function (_exports, _simpleCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _simpleCheckbox.default;
    }
  });
});
define("dummy/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (_exports, _lfGetOutletState) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lfGetOutletState.default;
    }
  });
});
define("dummy/components/api/x-class", ["exports", "ember-cli-addon-docs/components/api/x-class/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/api/x-component", ["exports", "ember-cli-addon-docs/components/api/x-component/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/api/x-import-path", ["exports", "ember-cli-addon-docs/components/api/x-import-path/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/api/x-meta-panel", ["exports", "ember-cli-addon-docs/components/api/x-meta-panel/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/api/x-meta-panel/header", ["exports", "ember-cli-addon-docs/components/api/x-meta-panel/header/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/api/x-module", ["exports", "ember-cli-addon-docs/components/api/x-module/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/api/x-section", ["exports", "ember-cli-addon-docs/components/api/x-section/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/api/x-sections", ["exports", "ember-cli-addon-docs/components/api/x-sections/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/api/x-toggles", ["exports", "ember-cli-addon-docs/components/api/x-toggles/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/copy-button", ["exports", "ember-cli-clipboard/components/copy-button"], function (_exports, _copyButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _copyButton.default;
    }
  });
});
define("dummy/components/docs-code-highlight", ["exports", "ember-cli-addon-docs/components/docs-code-highlight/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-demo", ["exports", "ember-cli-addon-docs/components/docs-demo/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-demo/x-example", ["exports", "ember-cli-addon-docs/components/docs-demo/x-example/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-demo/x-snippet", ["exports", "ember-cli-addon-docs/components/docs-demo/x-snippet/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-header", ["exports", "ember-cli-addon-docs/components/docs-header/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-header/link", ["exports", "ember-cli-addon-docs/components/docs-header/link/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-header/search-box", ["exports", "ember-cli-addon-docs/components/docs-header/search-box/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-header/search-result", ["exports", "ember-cli-addon-docs/components/docs-header/search-result/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-header/search-results", ["exports", "ember-cli-addon-docs/components/docs-header/search-results/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-header/version-selector", ["exports", "ember-cli-addon-docs/components/docs-header/version-selector/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-hero", ["exports", "ember-cli-addon-docs/components/docs-hero/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-keyboard-shortcuts", ["exports", "ember-cli-addon-docs/components/docs-keyboard-shortcuts/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-link", ["exports", "ember-cli-addon-docs/components/docs-link/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-logo", ["exports", "ember-cli-addon-docs/components/docs-logo/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-snippet", ["exports", "ember-cli-addon-docs/components/docs-snippet/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-svg-icon", ["exports", "ember-cli-addon-docs/components/docs-svg-icon/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-viewer", ["exports", "ember-cli-addon-docs/components/docs-viewer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-viewer/x-autogenerated-api-docs", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-autogenerated-api-docs/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-viewer/x-autogenerated-api-docs/module-nav", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-autogenerated-api-docs/module-nav/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-viewer/x-current-page-index", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-current-page-index/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-viewer/x-main", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-main/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-viewer/x-nav-item", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-nav-item/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-viewer/x-nav-list", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-nav-list/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-viewer/x-nav", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-nav/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/docs-viewer/x-section", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-section/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/ember-modal-dialog-positioned-container", ["exports", "ember-modal-dialog/components/positioned-container"], function (_exports, _positionedContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _positionedContainer.default;
    }
  });
});
define("dummy/components/ember-modal-dialog/-basic-dialog", ["exports", "ember-modal-dialog/components/basic-dialog"], function (_exports, _basicDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDialog.default;
    }
  });
});
define("dummy/components/ember-modal-dialog/-in-place-dialog", ["exports", "ember-modal-dialog/components/in-place-dialog"], function (_exports, _inPlaceDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inPlaceDialog.default;
    }
  });
});
define("dummy/components/ember-modal-dialog/-liquid-dialog", ["exports", "ember-modal-dialog/components/liquid-dialog"], function (_exports, _liquidDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidDialog.default;
    }
  });
});
define("dummy/components/ember-modal-dialog/-liquid-tether-dialog", ["exports", "ember-modal-dialog/components/liquid-tether-dialog"], function (_exports, _liquidTetherDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidTetherDialog.default;
    }
  });
});
define("dummy/components/ember-modal-dialog/-tether-dialog", ["exports", "ember-modal-dialog/components/tether-dialog"], function (_exports, _tetherDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tetherDialog.default;
    }
  });
});
define("dummy/components/ember-table", ["exports", "ember-table/components/ember-table/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/ember-tbody", ["exports", "ember-table/components/ember-tbody/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/ember-td", ["exports", "ember-table/components/ember-td/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/ember-tether", ["exports", "ember-tether/components/ember-tether"], function (_exports, _emberTether) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberTether.default;
    }
  });
});
define("dummy/components/ember-tfoot", ["exports", "ember-table/components/ember-tfoot/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/ember-th", ["exports", "ember-table/components/ember-th/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/ember-th/resize-handle", ["exports", "ember-table/components/ember-th/resize-handle/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/ember-th/sort-indicator", ["exports", "ember-table/components/ember-th/sort-indicator/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/ember-thead", ["exports", "ember-table/components/ember-thead/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/ember-tr", ["exports", "ember-table/components/ember-tr/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/ember-wormhole", ["exports", "ember-wormhole/components/ember-wormhole"], function (_exports, _emberWormhole) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define("dummy/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (_exports, _illiquidModel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _illiquidModel.default;
    }
  });
});
define("dummy/components/keyboard-press", ["exports", "ember-keyboard/deprecated/components/keyboard-press"], function (_exports, _keyboardPress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _keyboardPress.default;
    }
  });
});
define("dummy/components/labeled-radio-button", ["exports", "ember-radio-button/components/labeled-radio-button"], function (_exports, _labeledRadioButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _labeledRadioButton.default;
    }
  });
});
define("dummy/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (_exports, _liquidBind) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidBind.default;
    }
  });
});
define("dummy/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (_exports, _liquidChild) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidChild.default;
    }
  });
});
define("dummy/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (_exports, _liquidContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidContainer.default;
    }
  });
});
define("dummy/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (_exports, _liquidIf) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidIf.default;
    }
  });
});
define("dummy/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (_exports, _liquidMeasured) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.default;
    }
  });
  Object.defineProperty(_exports, "measure", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.measure;
    }
  });
});
define("dummy/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (_exports, _liquidOutlet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidOutlet.default;
    }
  });
});
define("dummy/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (_exports, _liquidSpacer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidSpacer.default;
    }
  });
});
define("dummy/components/liquid-sync", ["exports", "liquid-fire/components/liquid-sync"], function (_exports, _liquidSync) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidSync.default;
    }
  });
});
define("dummy/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (_exports, _liquidUnless) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidUnless.default;
    }
  });
});
define("dummy/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (_exports, _liquidVersions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidVersions.default;
    }
  });
});
define("dummy/components/modal-dialog", ["exports", "ember-cli-addon-docs/components/modal-dialog/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/radio-button-input", ["exports", "ember-radio-button/components/radio-button-input"], function (_exports, _radioButtonInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _radioButtonInput.default;
    }
  });
});
define("dummy/components/radio-button", ["exports", "ember-radio-button/components/radio-button"], function (_exports, _radioButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _radioButton.default;
    }
  });
});
define("dummy/components/vertical-collection", ["exports", "@html-next/vertical-collection/components/vertical-collection/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/controllers/docs/api/class", ["exports", "ember-cli-addon-docs/controllers/docs/api/class"], function (_exports, _class) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _class.default;
    }
  });
});
define("dummy/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
define("dummy/helpers/abs", ["exports", "ember-math-helpers/helpers/abs"], function (_exports, _abs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _abs.default;
    }
  });
  Object.defineProperty(_exports, "abs", {
    enumerable: true,
    get: function () {
      return _abs.abs;
    }
  });
});
define("dummy/helpers/acos", ["exports", "ember-math-helpers/helpers/acos"], function (_exports, _acos) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _acos.default;
    }
  });
  Object.defineProperty(_exports, "acos", {
    enumerable: true,
    get: function () {
      return _acos.acos;
    }
  });
});
define("dummy/helpers/acosh", ["exports", "ember-math-helpers/helpers/acosh"], function (_exports, _acosh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _acosh.default;
    }
  });
  Object.defineProperty(_exports, "acosh", {
    enumerable: true,
    get: function () {
      return _acosh.acosh;
    }
  });
});
define("dummy/helpers/add", ["exports", "ember-math-helpers/helpers/add"], function (_exports, _add) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _add.default;
    }
  });
  Object.defineProperty(_exports, "add", {
    enumerable: true,
    get: function () {
      return _add.add;
    }
  });
});
define("dummy/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define("dummy/helpers/append", ["exports", "ember-composable-helpers/helpers/append"], function (_exports, _append) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  Object.defineProperty(_exports, "append", {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
});
define("dummy/helpers/asin", ["exports", "ember-math-helpers/helpers/asin"], function (_exports, _asin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _asin.default;
    }
  });
  Object.defineProperty(_exports, "asin", {
    enumerable: true,
    get: function () {
      return _asin.asin;
    }
  });
});
define("dummy/helpers/asinh", ["exports", "ember-math-helpers/helpers/asinh"], function (_exports, _asinh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _asinh.default;
    }
  });
  Object.defineProperty(_exports, "asinh", {
    enumerable: true,
    get: function () {
      return _asinh.asinh;
    }
  });
});
define("dummy/helpers/atan", ["exports", "ember-math-helpers/helpers/atan"], function (_exports, _atan) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _atan.default;
    }
  });
  Object.defineProperty(_exports, "atan", {
    enumerable: true,
    get: function () {
      return _atan.atan;
    }
  });
});
define("dummy/helpers/atan2", ["exports", "ember-math-helpers/helpers/atan2"], function (_exports, _atan) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _atan.default;
    }
  });
  Object.defineProperty(_exports, "atan2", {
    enumerable: true,
    get: function () {
      return _atan.atan2;
    }
  });
});
define("dummy/helpers/atanh", ["exports", "ember-math-helpers/helpers/atanh"], function (_exports, _atanh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _atanh.default;
    }
  });
  Object.defineProperty(_exports, "atanh", {
    enumerable: true,
    get: function () {
      return _atanh.atanh;
    }
  });
});
define("dummy/helpers/break-on", ["exports", "ember-cli-addon-docs/helpers/break-on"], function (_exports, _breakOn) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _breakOn.default;
    }
  });
});
define("dummy/helpers/call", ["exports", "ember-composable-helpers/helpers/call"], function (_exports, _call) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _call.default;
    }
  });
  Object.defineProperty(_exports, "call", {
    enumerable: true,
    get: function () {
      return _call.call;
    }
  });
});
define("dummy/helpers/camelize", ["exports", "ember-cli-string-helpers/helpers/camelize"], function (_exports, _camelize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _camelize.default;
    }
  });
  Object.defineProperty(_exports, "camelize", {
    enumerable: true,
    get: function () {
      return _camelize.camelize;
    }
  });
});
define("dummy/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
define("dummy/helpers/capitalize", ["exports", "ember-cli-string-helpers/helpers/capitalize"], function (_exports, _capitalize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _capitalize.default;
    }
  });
  Object.defineProperty(_exports, "capitalize", {
    enumerable: true,
    get: function () {
      return _capitalize.capitalize;
    }
  });
});
define("dummy/helpers/cbrt", ["exports", "ember-math-helpers/helpers/cbrt"], function (_exports, _cbrt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cbrt.default;
    }
  });
  Object.defineProperty(_exports, "cbrt", {
    enumerable: true,
    get: function () {
      return _cbrt.cbrt;
    }
  });
});
define("dummy/helpers/ceil", ["exports", "ember-math-helpers/helpers/ceil"], function (_exports, _ceil) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ceil.default;
    }
  });
  Object.defineProperty(_exports, "ceil", {
    enumerable: true,
    get: function () {
      return _ceil.ceil;
    }
  });
});
define("dummy/helpers/chunk", ["exports", "ember-composable-helpers/helpers/chunk"], function (_exports, _chunk) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
  Object.defineProperty(_exports, "chunk", {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
});
define("dummy/helpers/classify", ["exports", "ember-cli-string-helpers/helpers/classify"], function (_exports, _classify) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _classify.default;
    }
  });
  Object.defineProperty(_exports, "classify", {
    enumerable: true,
    get: function () {
      return _classify.classify;
    }
  });
});
define("dummy/helpers/clz32", ["exports", "ember-math-helpers/helpers/clz32"], function (_exports, _clz) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _clz.default;
    }
  });
  Object.defineProperty(_exports, "clz32", {
    enumerable: true,
    get: function () {
      return _clz.clz32;
    }
  });
});
define("dummy/helpers/compact", ["exports", "ember-composable-helpers/helpers/compact"], function (_exports, _compact) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
});
define("dummy/helpers/compute", ["exports", "ember-composable-helpers/helpers/compute"], function (_exports, _compute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
  Object.defineProperty(_exports, "compute", {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
});
define("dummy/helpers/contains", ["exports", "ember-composable-helpers/helpers/contains"], function (_exports, _contains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
  Object.defineProperty(_exports, "contains", {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
});
define("dummy/helpers/cos", ["exports", "ember-math-helpers/helpers/cos"], function (_exports, _cos) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cos.default;
    }
  });
  Object.defineProperty(_exports, "cos", {
    enumerable: true,
    get: function () {
      return _cos.cos;
    }
  });
});
define("dummy/helpers/cosh", ["exports", "ember-math-helpers/helpers/cosh"], function (_exports, _cosh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cosh.default;
    }
  });
  Object.defineProperty(_exports, "cosh", {
    enumerable: true,
    get: function () {
      return _cosh.cosh;
    }
  });
});
define("dummy/helpers/dasherize", ["exports", "ember-cli-string-helpers/helpers/dasherize"], function (_exports, _dasherize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dasherize.default;
    }
  });
  Object.defineProperty(_exports, "dasherize", {
    enumerable: true,
    get: function () {
      return _dasherize.dasherize;
    }
  });
});
define("dummy/helpers/dec", ["exports", "ember-composable-helpers/helpers/dec"], function (_exports, _dec) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  Object.defineProperty(_exports, "dec", {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
});
define("dummy/helpers/div", ["exports", "ember-math-helpers/helpers/div"], function (_exports, _div) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _div.default;
    }
  });
  Object.defineProperty(_exports, "div", {
    enumerable: true,
    get: function () {
      return _div.div;
    }
  });
});
define("dummy/helpers/drop", ["exports", "ember-composable-helpers/helpers/drop"], function (_exports, _drop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
});
define("dummy/helpers/entries", ["exports", "ember-composable-helpers/helpers/entries"], function (_exports, _entries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _entries.default;
    }
  });
  Object.defineProperty(_exports, "entries", {
    enumerable: true,
    get: function () {
      return _entries.entries;
    }
  });
});
define("dummy/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define("dummy/helpers/exp", ["exports", "ember-math-helpers/helpers/exp"], function (_exports, _exp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _exp.default;
    }
  });
  Object.defineProperty(_exports, "exp", {
    enumerable: true,
    get: function () {
      return _exp.exp;
    }
  });
});
define("dummy/helpers/expm1", ["exports", "ember-math-helpers/helpers/expm1"], function (_exports, _expm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _expm.default;
    }
  });
  Object.defineProperty(_exports, "expm1", {
    enumerable: true,
    get: function () {
      return _expm.expm1;
    }
  });
});
define("dummy/helpers/filter-by", ["exports", "ember-composable-helpers/helpers/filter-by"], function (_exports, _filterBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
});
define("dummy/helpers/filter", ["exports", "ember-composable-helpers/helpers/filter"], function (_exports, _filter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
});
define("dummy/helpers/find-by", ["exports", "ember-composable-helpers/helpers/find-by"], function (_exports, _findBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
});
define("dummy/helpers/flatten", ["exports", "ember-composable-helpers/helpers/flatten"], function (_exports, _flatten) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(_exports, "flatten", {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
});
define("dummy/helpers/floor", ["exports", "ember-math-helpers/helpers/floor"], function (_exports, _floor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _floor.default;
    }
  });
  Object.defineProperty(_exports, "floor", {
    enumerable: true,
    get: function () {
      return _floor.floor;
    }
  });
});
define("dummy/helpers/from-entries", ["exports", "ember-composable-helpers/helpers/from-entries"], function (_exports, _fromEntries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fromEntries.default;
    }
  });
  Object.defineProperty(_exports, "fromEntries", {
    enumerable: true,
    get: function () {
      return _fromEntries.fromEntries;
    }
  });
});
define("dummy/helpers/fround", ["exports", "ember-math-helpers/helpers/fround"], function (_exports, _fround) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fround.default;
    }
  });
  Object.defineProperty(_exports, "fround", {
    enumerable: true,
    get: function () {
      return _fround.fround;
    }
  });
});
define("dummy/helpers/gcd", ["exports", "ember-math-helpers/helpers/gcd"], function (_exports, _gcd) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gcd.default;
    }
  });
  Object.defineProperty(_exports, "gcd", {
    enumerable: true,
    get: function () {
      return _gcd.gcd;
    }
  });
});
define("dummy/helpers/get-code-snippet", ["exports", "ember-code-snippet/helpers/get-code-snippet"], function (_exports, _getCodeSnippet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _getCodeSnippet.default;
    }
  });
});
define("dummy/helpers/group-by", ["exports", "ember-composable-helpers/helpers/group-by"], function (_exports, _groupBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
});
define("dummy/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define("dummy/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define("dummy/helpers/has-next", ["exports", "ember-composable-helpers/helpers/has-next"], function (_exports, _hasNext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(_exports, "hasNext", {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
});
define("dummy/helpers/has-previous", ["exports", "ember-composable-helpers/helpers/has-previous"], function (_exports, _hasPrevious) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(_exports, "hasPrevious", {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
});
define("dummy/helpers/href-to", ["exports", "ember-href-to/helpers/href-to"], function (_exports, _hrefTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hrefTo.default;
    }
  });
  Object.defineProperty(_exports, "hrefTo", {
    enumerable: true,
    get: function () {
      return _hrefTo.hrefTo;
    }
  });
});
define("dummy/helpers/html-safe", ["exports", "ember-cli-string-helpers/helpers/html-safe"], function (_exports, _htmlSafe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _htmlSafe.default;
    }
  });
  Object.defineProperty(_exports, "htmlSafe", {
    enumerable: true,
    get: function () {
      return _htmlSafe.htmlSafe;
    }
  });
});
define("dummy/helpers/humanize", ["exports", "ember-cli-string-helpers/helpers/humanize"], function (_exports, _humanize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _humanize.default;
    }
  });
  Object.defineProperty(_exports, "humanize", {
    enumerable: true,
    get: function () {
      return _humanize.humanize;
    }
  });
});
define("dummy/helpers/hypot", ["exports", "ember-math-helpers/helpers/hypot"], function (_exports, _hypot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hypot.default;
    }
  });
  Object.defineProperty(_exports, "hypot", {
    enumerable: true,
    get: function () {
      return _hypot.hypot;
    }
  });
});
define("dummy/helpers/if-key", ["exports", "ember-keyboard/helpers/if-key"], function (_exports, _ifKey) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ifKey.default;
    }
  });
  Object.defineProperty(_exports, "ifKey", {
    enumerable: true,
    get: function () {
      return _ifKey.ifKey;
    }
  });
});
define("dummy/helpers/ignore-children", ["exports", "ember-ignore-children-helper/helpers/ignore-children"], function (_exports, _ignoreChildren) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ignoreChildren.default;
    }
  });
  Object.defineProperty(_exports, "ignoreChildren", {
    enumerable: true,
    get: function () {
      return _ignoreChildren.ignoreChildren;
    }
  });
});
define("dummy/helpers/imul", ["exports", "ember-math-helpers/helpers/imul"], function (_exports, _imul) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _imul.default;
    }
  });
  Object.defineProperty(_exports, "imul", {
    enumerable: true,
    get: function () {
      return _imul.imul;
    }
  });
});
define("dummy/helpers/inc", ["exports", "ember-composable-helpers/helpers/inc"], function (_exports, _inc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(_exports, "inc", {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
});
define("dummy/helpers/includes", ["exports", "ember-composable-helpers/helpers/includes"], function (_exports, _includes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _includes.default;
    }
  });
  Object.defineProperty(_exports, "includes", {
    enumerable: true,
    get: function () {
      return _includes.includes;
    }
  });
});
define("dummy/helpers/intersect", ["exports", "ember-composable-helpers/helpers/intersect"], function (_exports, _intersect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
});
define("dummy/helpers/invoke", ["exports", "ember-composable-helpers/helpers/invoke"], function (_exports, _invoke) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(_exports, "invoke", {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
});
define("dummy/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define("dummy/helpers/is-clipboard-supported", ["exports", "ember-cli-clipboard/helpers/is-clipboard-supported"], function (_exports, _isClipboardSupported) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isClipboardSupported.default;
    }
  });
  Object.defineProperty(_exports, "isClipboardSupported", {
    enumerable: true,
    get: function () {
      return _isClipboardSupported.isClipboardSupported;
    }
  });
});
define("dummy/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
define("dummy/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define("dummy/helpers/join", ["exports", "ember-composable-helpers/helpers/join"], function (_exports, _join) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
});
define("dummy/helpers/keys", ["exports", "ember-composable-helpers/helpers/keys"], function (_exports, _keys) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _keys.default;
    }
  });
  Object.defineProperty(_exports, "keys", {
    enumerable: true,
    get: function () {
      return _keys.keys;
    }
  });
});
define("dummy/helpers/lcm", ["exports", "ember-math-helpers/helpers/lcm"], function (_exports, _lcm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lcm.default;
    }
  });
  Object.defineProperty(_exports, "lcm", {
    enumerable: true,
    get: function () {
      return _lcm.lcm;
    }
  });
});
define("dummy/helpers/lf-lock-model", ["exports", "liquid-fire/helpers/lf-lock-model"], function (_exports, _lfLockModel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lfLockModel.default;
    }
  });
  Object.defineProperty(_exports, "lfLockModel", {
    enumerable: true,
    get: function () {
      return _lfLockModel.lfLockModel;
    }
  });
});
define("dummy/helpers/lf-or", ["exports", "liquid-fire/helpers/lf-or"], function (_exports, _lfOr) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lfOr.default;
    }
  });
  Object.defineProperty(_exports, "lfOr", {
    enumerable: true,
    get: function () {
      return _lfOr.lfOr;
    }
  });
});
define("dummy/helpers/loc", ["exports", "@ember/string/helpers/loc"], function (_exports, _loc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _loc.default;
    }
  });
  Object.defineProperty(_exports, "loc", {
    enumerable: true,
    get: function () {
      return _loc.loc;
    }
  });
});
define("dummy/helpers/log-e", ["exports", "ember-math-helpers/helpers/log-e"], function (_exports, _logE) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _logE.default;
    }
  });
  Object.defineProperty(_exports, "logE", {
    enumerable: true,
    get: function () {
      return _logE.logE;
    }
  });
});
define("dummy/helpers/log10", ["exports", "ember-math-helpers/helpers/log10"], function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  Object.defineProperty(_exports, "log10", {
    enumerable: true,
    get: function () {
      return _log.log10;
    }
  });
});
define("dummy/helpers/log1p", ["exports", "ember-math-helpers/helpers/log1p"], function (_exports, _log1p) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _log1p.default;
    }
  });
  Object.defineProperty(_exports, "log1p", {
    enumerable: true,
    get: function () {
      return _log1p.log1p;
    }
  });
});
define("dummy/helpers/log2", ["exports", "ember-math-helpers/helpers/log2"], function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  Object.defineProperty(_exports, "log2", {
    enumerable: true,
    get: function () {
      return _log.log2;
    }
  });
});
define("dummy/helpers/lowercase", ["exports", "ember-cli-string-helpers/helpers/lowercase"], function (_exports, _lowercase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lowercase.default;
    }
  });
  Object.defineProperty(_exports, "lowercase", {
    enumerable: true,
    get: function () {
      return _lowercase.lowercase;
    }
  });
});
define("dummy/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define("dummy/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define("dummy/helpers/map-by", ["exports", "ember-composable-helpers/helpers/map-by"], function (_exports, _mapBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
});
define("dummy/helpers/map", ["exports", "ember-composable-helpers/helpers/map"], function (_exports, _map) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
});
define("dummy/helpers/max", ["exports", "ember-math-helpers/helpers/max"], function (_exports, _max) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _max.default;
    }
  });
  Object.defineProperty(_exports, "max", {
    enumerable: true,
    get: function () {
      return _max.max;
    }
  });
});
define("dummy/helpers/media", ["exports", "ember-responsive/helpers/media"], function (_exports, _media) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _media.default;
    }
  });
  Object.defineProperty(_exports, "media", {
    enumerable: true,
    get: function () {
      return _media.media;
    }
  });
});
define("dummy/helpers/min", ["exports", "ember-math-helpers/helpers/min"], function (_exports, _min) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _min.default;
    }
  });
  Object.defineProperty(_exports, "min", {
    enumerable: true,
    get: function () {
      return _min.min;
    }
  });
});
define("dummy/helpers/mod", ["exports", "ember-math-helpers/helpers/mod"], function (_exports, _mod) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mod.default;
    }
  });
  Object.defineProperty(_exports, "mod", {
    enumerable: true,
    get: function () {
      return _mod.mod;
    }
  });
});
define("dummy/helpers/mult", ["exports", "ember-math-helpers/helpers/mult"], function (_exports, _mult) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mult.default;
    }
  });
  Object.defineProperty(_exports, "mult", {
    enumerable: true,
    get: function () {
      return _mult.mult;
    }
  });
});
define("dummy/helpers/next", ["exports", "ember-composable-helpers/helpers/next"], function (_exports, _next) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(_exports, "next", {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
});
define("dummy/helpers/noop", ["exports", "ember-composable-helpers/helpers/noop"], function (_exports, _noop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _noop.default;
    }
  });
  Object.defineProperty(_exports, "noop", {
    enumerable: true,
    get: function () {
      return _noop.noop;
    }
  });
});
define("dummy/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function () {
      return _notEqual.notEqualHelper;
    }
  });
});
define("dummy/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define("dummy/helpers/object-at", ["exports", "ember-composable-helpers/helpers/object-at"], function (_exports, _objectAt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(_exports, "objectAt", {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
});
define("dummy/helpers/on-key", ["exports", "ember-keyboard/helpers/on-key"], function (_exports, _onKey) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onKey.default;
    }
  });
});
define("dummy/helpers/optional", ["exports", "ember-composable-helpers/helpers/optional"], function (_exports, _optional) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(_exports, "optional", {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
});
define("dummy/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define("dummy/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
define("dummy/helpers/pick", ["exports", "ember-composable-helpers/helpers/pick"], function (_exports, _pick) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pick.default;
    }
  });
  Object.defineProperty(_exports, "pick", {
    enumerable: true,
    get: function () {
      return _pick.pick;
    }
  });
});
define("dummy/helpers/pipe-action", ["exports", "ember-composable-helpers/helpers/pipe-action"], function (_exports, _pipeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
});
define("dummy/helpers/pipe", ["exports", "ember-composable-helpers/helpers/pipe"], function (_exports, _pipe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(_exports, "pipe", {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
});
define("dummy/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
define("dummy/helpers/pow", ["exports", "ember-math-helpers/helpers/pow"], function (_exports, _pow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pow.default;
    }
  });
  Object.defineProperty(_exports, "pow", {
    enumerable: true,
    get: function () {
      return _pow.pow;
    }
  });
});
define("dummy/helpers/prevent-default", ["exports", "ember-on-modifier/helpers/prevent-default"], function (_exports, _preventDefault) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _preventDefault.default;
    }
  });
  Object.defineProperty(_exports, "preventDefault", {
    enumerable: true,
    get: function () {
      return _preventDefault.preventDefault;
    }
  });
});
define("dummy/helpers/previous", ["exports", "ember-composable-helpers/helpers/previous"], function (_exports, _previous) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(_exports, "previous", {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
});
define("dummy/helpers/queue", ["exports", "ember-composable-helpers/helpers/queue"], function (_exports, _queue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(_exports, "queue", {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
});
define("dummy/helpers/random", ["exports", "ember-math-helpers/helpers/random"], function (_exports, _random) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _random.default;
    }
  });
  Object.defineProperty(_exports, "random", {
    enumerable: true,
    get: function () {
      return _random.random;
    }
  });
});
define("dummy/helpers/range", ["exports", "ember-composable-helpers/helpers/range"], function (_exports, _range) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(_exports, "range", {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
});
define("dummy/helpers/reduce", ["exports", "ember-composable-helpers/helpers/reduce"], function (_exports, _reduce) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
});
define("dummy/helpers/reject-by", ["exports", "ember-composable-helpers/helpers/reject-by"], function (_exports, _rejectBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
});
define("dummy/helpers/repeat", ["exports", "ember-composable-helpers/helpers/repeat"], function (_exports, _repeat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(_exports, "repeat", {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
});
define("dummy/helpers/reverse", ["exports", "ember-composable-helpers/helpers/reverse"], function (_exports, _reverse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
});
define("dummy/helpers/round", ["exports", "ember-math-helpers/helpers/round"], function (_exports, _round) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _round.default;
    }
  });
  Object.defineProperty(_exports, "round", {
    enumerable: true,
    get: function () {
      return _round.round;
    }
  });
});
define("dummy/helpers/route-idle", ["exports", "ember-app-scheduler/helpers/route-idle"], function (_exports, _routeIdle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routeIdle.default;
    }
  });
  Object.defineProperty(_exports, "routeIdle", {
    enumerable: true,
    get: function () {
      return _routeIdle.routeIdle;
    }
  });
});
define("dummy/helpers/shuffle", ["exports", "ember-composable-helpers/helpers/shuffle"], function (_exports, _shuffle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(_exports, "shuffle", {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
});
define("dummy/helpers/sign", ["exports", "ember-math-helpers/helpers/sign"], function (_exports, _sign) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sign.default;
    }
  });
  Object.defineProperty(_exports, "sign", {
    enumerable: true,
    get: function () {
      return _sign.sign;
    }
  });
});
define("dummy/helpers/sin", ["exports", "ember-math-helpers/helpers/sin"], function (_exports, _sin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sin.default;
    }
  });
  Object.defineProperty(_exports, "sin", {
    enumerable: true,
    get: function () {
      return _sin.sin;
    }
  });
});
define("dummy/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
define("dummy/helpers/slice", ["exports", "ember-composable-helpers/helpers/slice"], function (_exports, _slice) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
});
define("dummy/helpers/sort-by", ["exports", "ember-composable-helpers/helpers/sort-by"], function (_exports, _sortBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
});
define("dummy/helpers/sqrt", ["exports", "ember-math-helpers/helpers/sqrt"], function (_exports, _sqrt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sqrt.default;
    }
  });
  Object.defineProperty(_exports, "sqrt", {
    enumerable: true,
    get: function () {
      return _sqrt.sqrt;
    }
  });
});
define("dummy/helpers/sub", ["exports", "ember-math-helpers/helpers/sub"], function (_exports, _sub) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sub.default;
    }
  });
  Object.defineProperty(_exports, "sub", {
    enumerable: true,
    get: function () {
      return _sub.sub;
    }
  });
});
define("dummy/helpers/svg-jar", ["exports", "ember-svg-jar/utils/make-helper", "ember-svg-jar/utils/make-svg"], function (_exports, _makeHelper, _makeSvg) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.svgJar = svgJar;
  _exports.default = void 0;

  function getInlineAsset(assetId) {
    try {
      /* eslint-disable global-require */
      return require(`ember-svg-jar/inlined/${assetId}`).default;
    } catch (err) {
      return null;
    }
  }

  function svgJar(assetId, svgAttrs) {
    return (0, _makeSvg.default)(assetId, svgAttrs, getInlineAsset);
  }

  var _default = (0, _makeHelper.default)(svgJar);

  _exports.default = _default;
});
define("dummy/helpers/take", ["exports", "ember-composable-helpers/helpers/take"], function (_exports, _take) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
});
define("dummy/helpers/tan", ["exports", "ember-math-helpers/helpers/tan"], function (_exports, _tan) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tan.default;
    }
  });
  Object.defineProperty(_exports, "tan", {
    enumerable: true,
    get: function () {
      return _tan.tan;
    }
  });
});
define("dummy/helpers/tanh", ["exports", "ember-math-helpers/helpers/tanh"], function (_exports, _tanh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tanh.default;
    }
  });
  Object.defineProperty(_exports, "tanh", {
    enumerable: true,
    get: function () {
      return _tanh.tanh;
    }
  });
});
define("dummy/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
define("dummy/helpers/titleize", ["exports", "ember-cli-string-helpers/helpers/titleize"], function (_exports, _titleize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
  Object.defineProperty(_exports, "titleize", {
    enumerable: true,
    get: function () {
      return _titleize.titleize;
    }
  });
});
define("dummy/helpers/toggle-action", ["exports", "ember-composable-helpers/helpers/toggle-action"], function (_exports, _toggleAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
});
define("dummy/helpers/toggle", ["exports", "ember-composable-helpers/helpers/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(_exports, "toggle", {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
});
define("dummy/helpers/trim", ["exports", "ember-cli-string-helpers/helpers/trim"], function (_exports, _trim) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trim.default;
    }
  });
  Object.defineProperty(_exports, "trim", {
    enumerable: true,
    get: function () {
      return _trim.trim;
    }
  });
});
define("dummy/helpers/trunc", ["exports", "ember-math-helpers/helpers/trunc"], function (_exports, _trunc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trunc.default;
    }
  });
  Object.defineProperty(_exports, "trunc", {
    enumerable: true,
    get: function () {
      return _trunc.trunc;
    }
  });
});
define("dummy/helpers/truncate", ["exports", "ember-cli-string-helpers/helpers/truncate"], function (_exports, _truncate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _truncate.default;
    }
  });
  Object.defineProperty(_exports, "truncate", {
    enumerable: true,
    get: function () {
      return _truncate.truncate;
    }
  });
});
define("dummy/helpers/type-signature", ["exports", "ember-cli-addon-docs/helpers/type-signature"], function (_exports, _typeSignature) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _typeSignature.default;
    }
  });
});
define("dummy/helpers/underscore", ["exports", "ember-cli-string-helpers/helpers/underscore"], function (_exports, _underscore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(_exports, "underscore", {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
});
define("dummy/helpers/union", ["exports", "ember-composable-helpers/helpers/union"], function (_exports, _union) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
});
define("dummy/helpers/uppercase", ["exports", "ember-cli-string-helpers/helpers/uppercase"], function (_exports, _uppercase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uppercase.default;
    }
  });
  Object.defineProperty(_exports, "uppercase", {
    enumerable: true,
    get: function () {
      return _uppercase.uppercase;
    }
  });
});
define("dummy/helpers/values", ["exports", "ember-composable-helpers/helpers/values"], function (_exports, _values) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _values.default;
    }
  });
  Object.defineProperty(_exports, "values", {
    enumerable: true,
    get: function () {
      return _values.values;
    }
  });
});
define("dummy/helpers/w", ["exports", "ember-cli-string-helpers/helpers/w"], function (_exports, _w) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _w.default;
    }
  });
  Object.defineProperty(_exports, "w", {
    enumerable: true,
    get: function () {
      return _w.w;
    }
  });
});
define("dummy/helpers/without", ["exports", "ember-composable-helpers/helpers/without"], function (_exports, _without) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(_exports, "without", {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
});
define("dummy/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define("dummy/initializers/add-modals-container", ["exports", "ember-modal-dialog/initializers/add-modals-container"], function (_exports, _addModalsContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'add-modals-container',
    initialize: _addModalsContainer.default
  };
  _exports.default = _default;
});
define("dummy/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
define("dummy/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
define("dummy/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
define("dummy/initializers/ember-faker", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {}

  var _default = {
    name: 'ember-faker',
    initialize
  };
  _exports.default = _default;
});
define("dummy/initializers/ember-keyboard-first-responder-inputs", ["exports", "ember-keyboard/initializers/ember-keyboard-first-responder-inputs"], function (_exports, _emberKeyboardFirstResponderInputs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberKeyboardFirstResponderInputs.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _emberKeyboardFirstResponderInputs.initialize;
    }
  });
});
define("dummy/initializers/ember-responsive-breakpoints", ["exports", "ember-responsive/initializers/responsive"], function (_exports, _responsive) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _responsive.default;
  _exports.default = _default;
});
define("dummy/initializers/export-application-global", ["exports", "dummy/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
define("dummy/initializers/inject-media", ["exports", "ember-cli-addon-docs/initializers/inject-media"], function (_exports, _injectMedia) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _injectMedia.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _injectMedia.initialize;
    }
  });
});
define("dummy/initializers/liquid-fire", ["exports", "liquid-fire/velocity-ext"], function (_exports, _velocityExt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'liquid-fire',
    initialize: function () {}
  };
  _exports.default = _default;
});
define("dummy/initializers/route-anchor-jump", ["exports", "ember-cli-addon-docs/initializers/route-anchor-jump"], function (_exports, _routeAnchorJump) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routeAnchorJump.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _routeAnchorJump.initialize;
    }
  });
});
define("dummy/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
define("dummy/instance-initializers/ember-href-to", ["exports", "ember-href-to/href-to"], function (_exports, _hrefTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function closestLink(el) {
    if (el.closest) {
      return el.closest('a');
    } else {
      el = el.parentElement;

      while (el && el.tagName !== 'A') {
        el = el.parentElement;
      }

      return el;
    }
  }

  var _default = {
    name: 'ember-href-to',

    initialize(applicationInstance) {
      // we only want this to run in the browser, not in fastboot
      if (typeof FastBoot === "undefined") {
        let hrefToClickHandler = function _hrefToClickHandler(e) {
          let link = e.target.tagName === 'A' ? e.target : closestLink(e.target);

          if (link) {
            let hrefTo = new _hrefTo.default(applicationInstance, e, link);
            hrefTo.maybeHandle();
          }
        };

        document.body.addEventListener('click', hrefToClickHandler); // Teardown on app destruction: clean up the event listener to avoid
        // memory leaks.

        applicationInstance.reopen({
          willDestroy() {
            document.body.removeEventListener('click', hrefToClickHandler);
            return this._super(...arguments);
          }

        });
      }
    }

  };
  _exports.default = _default;
});
define("dummy/locations/router-scroll", ["exports", "ember-router-scroll/locations/router-scroll"], function (_exports, _routerScroll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routerScroll.default;
    }
  });
});
define("dummy/models/class", ["exports", "ember-cli-addon-docs/models/class"], function (_exports, _class) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _class.default;
    }
  });
});
define("dummy/models/component", ["exports", "ember-cli-addon-docs/models/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/models/module", ["exports", "ember-cli-addon-docs/models/module"], function (_exports, _module) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _module.default;
    }
  });
});
define("dummy/models/project", ["exports", "ember-cli-addon-docs/models/project"], function (_exports, _project) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _project.default;
    }
  });
});
define("dummy/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
define("dummy/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
define("dummy/modifiers/keyboard-shortcut", ["exports", "ember-keyboard/deprecated/modifiers/keyboard-shortcut"], function (_exports, _keyboardShortcut) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _keyboardShortcut.default;
    }
  });
});
define("dummy/modifiers/on-key", ["exports", "ember-keyboard/modifiers/on-key"], function (_exports, _onKey) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onKey.default;
    }
  });
});
define("dummy/modifiers/on-keyboard", ["exports", "ember-keyboard/deprecated/modifiers/on-keyboard"], function (_exports, _onKeyboard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onKeyboard.default;
    }
  });
});
define("dummy/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
define("dummy/pods/application/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    canShowAddonDocs: Ember.computed(function () {
      return true;
    })
  });

  _exports.default = _default;
});
define("dummy/pods/application/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "om1ZYEND",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"font-sans text-black leading-normal\"],[12],[2,\"\\n\"],[6,[37,3],[[35,2]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[34,1]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[1,[30,[36,5],[[30,[36,4],null,null]],null]],[2,\"\\n\\n\"],[6,[37,3],[[35,2]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[34,0]],[2,\"\\n\"]],\"parameters\":[]}]]],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"docs-keyboard-shortcuts\",\"docs-header\",\"canShowAddonDocs\",\"if\",\"-outlet\",\"component\"]}",
    "moduleName": "dummy/pods/application/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/components/custom-cell/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: '',
    color: null
  });

  _exports.default = _default;
});
define("dummy/pods/components/custom-cell/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "SbXY6+gR",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[10,\"div\"],[15,0,[31,[\"custom-header text-\",[34,0]]]],[12],[2,\"\\n  Cell \"],[18,1,null],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"color\"]}",
    "moduleName": "dummy/pods/components/custom-cell/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/components/custom-header/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: '',
    color: null
  });

  _exports.default = _default;
});
define("dummy/pods/components/custom-header/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "o5xfl+Hk",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[10,\"div\"],[15,0,[31,[\"custom-header bg-\",[34,0]]]],[12],[2,\"\\n  Column \"],[18,1,null],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"color\"]}",
    "moduleName": "dummy/pods/components/custom-header/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/components/custom-row/component", ["exports", "dummy/components/ember-tr"], function (_exports, _emberTr) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberTr.default.extend({
    classNames: ['custom-row']
  });

  _exports.default = _default;
});
define("dummy/pods/components/main/table-meta-data/cell-selection/component", ["exports", "dummy/utils/generators"], function (_exports, _generators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    rows: Ember.computed(function () {
      return (0, _generators.generateRows)(100);
    }),
    columns: Ember.computed(function () {
      return [{
        name: 'A',
        valuePath: 'A'
      }, {
        name: 'B',
        valuePath: 'B'
      }, {
        name: 'C',
        valuePath: 'C'
      }, {
        name: 'D',
        valuePath: 'D'
      }, {
        name: 'E',
        valuePath: 'E'
      }, {
        name: 'F',
        valuePath: 'F'
      }, {
        name: 'G',
        valuePath: 'G'
      }];
    }),
    // BEGIN-SNIPPET table-meta-data-cell-selection.js
    actions: {
      setSelected(cellMeta, columnMeta, rowMeta) {
        // If we have selected before, unselect the previous selection
        if (this._hasSelection) {
          this._lastSelectedCellMeta.set('selected', false);

          this._lastSelectedColumnMeta.set('selected', false);

          this._lastSelectedRowMeta.set('selected', false);
        } // Set selection on the meta objects


        cellMeta.set('selected', true);
        columnMeta.set('selected', true);
        rowMeta.set('selected', true); // Store the meta objects to unset in the future

        this._lastSelectedCellMeta = cellMeta;
        this._lastSelectedColumnMeta = columnMeta;
        this._lastSelectedRowMeta = rowMeta;
        this._hasSelection = true;
      }

    } // END-SNIPPET

  });

  _exports.default = _default;
});
define("dummy/pods/components/main/table-meta-data/cell-selection/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "W1qkb7v7",
    "block": "{\"symbols\":[\"demo\",\"t\",\"b\",\"r\",\"cell\",\"column\",\"row\",\"cellMeta\",\"columnMeta\",\"rowMeta\",\"h\",\"r\",\"column\"],\"statements\":[[2,\"\\n\"],[6,[37,6],null,null,[[\"default\"],[{\"statements\":[[6,[37,5],[[30,[36,4],[[32,1,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/components/main/table-meta-data/cell-selection/template.hbs' @ L3:C5) \"],null]],[[\"name\"],[\"cell-selection\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container small\"],[12],[2,\"\\n\"],[2,\"      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,2,[\"head\"]],[],[[\"@columns\"],[[34,0]]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[8,[32,11,[\"row\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[8,[32,12,[\"cell\"]],[[16,0,[31,[[30,[36,1],[[32,12,[\"columnMeta\",\"selected\"]],\"is-column-selected\"],null]]]]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n              \"],[1,[32,13,[\"name\"]]],[2,\"\\n            \"]],\"parameters\":[13]}]]],[2,\"\\n          \"]],\"parameters\":[12]}]]],[2,\"\\n        \"]],\"parameters\":[11]}]]],[2,\"\\n\\n        \"],[8,[32,2,[\"body\"]],[],[[\"@rows\"],[[34,2]]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[8,[32,3,[\"row\"]],[[16,0,[31,[[30,[36,1],[[32,3,[\"rowMeta\",\"selected\"]],\"is-row-selected\"],null]]]]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[8,[32,4,[\"cell\"]],[[16,0,[31,[[30,[36,1],[[32,4,[\"cellMeta\",\"selected\"]],\"is-cell-selected\"],null],\" \",[30,[36,1],[[32,4,[\"columnMeta\",\"selected\"]],\"is-column-selected\"],null]]]]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n              \"],[10,\"div\"],[15,\"onclick\",[30,[36,3],[[32,0],\"setSelected\",[32,8],[32,9],[32,10]],null]],[14,0,\"cell-content\"],[12],[2,\"\\n                \"],[1,[32,5]],[2,\"\\n              \"],[13],[2,\"\\n            \"]],\"parameters\":[5,6,7,8,9,10]}]]],[2,\"\\n          \"]],\"parameters\":[4]}]]],[2,\"\\n        \"]],\"parameters\":[3]}]]],[2,\"\\n      \"]],\"parameters\":[2]}]]],[2,\"\\n\"],[2,\"    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[1,[30,[36,5],[[30,[36,4],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/components/main/table-meta-data/cell-selection/template.hbs' @ L41:C4) \"],null]],[[\"name\"],[\"table-meta-data-cell-selection.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,5],[[30,[36,4],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/components/main/table-meta-data/cell-selection/template.hbs' @ L42:C4) \"],null]],[[\"name\",\"label\"],[\"table-meta-data-cell-selection.js\",\"component.js\"]]]],[2,\"\\n\"]],\"parameters\":[1]}]]]],\"hasEval\":false,\"upvars\":[\"columns\",\"if\",\"rows\",\"action\",\"-assert-implicit-component-helper-argument\",\"component\",\"docs-demo\"]}",
    "moduleName": "dummy/pods/components/main/table-meta-data/cell-selection/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/body/occlusion/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    // BEGIN-SNIPPET docs-example-occlusion.js
    columns: Ember.computed(function () {
      return [{
        name: 'A',
        valuePath: 'A',
        width: 180
      }, {
        name: 'B',
        valuePath: 'B',
        width: 180
      }, {
        name: 'C',
        valuePath: 'C',
        width: 180
      }, {
        name: 'D',
        valuePath: 'D',
        width: 180
      }];
    }),
    rows: Ember.computed(function () {
      return [{
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }];
    }) // END-SNIPPET

  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/body/occlusion/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "hdHnjEAv",
    "block": "{\"symbols\":[\"demo\",\"t\"],\"statements\":[[10,\"div\"],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"occlusion\"],[14,0,\"docs-md__h1\"],[12],[2,\"Occlusion\"],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Rendering lots and lots of HTML is really expensive for the browser, much more\\nexpensive than tracking those things in Javascript. Occlusion is a technique\\nwhere we only render the HTML that is visible to the user at a given time. This\\nallows us to load and present much more data than would otherwise be possible.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"Ember Table uses \"],[10,\"a\"],[14,6,\"https://github.com/html-next/vertical-collection\"],[14,0,\"docs-md__a\"],[12],[2,\"vertical-collection\"],[13],[2,\"\\nby default to occlude rows of the table. This allows the table to render tens of\\nthousands of rows without any performance hiccups.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"The occlusion also accounts for variable row heights automatically - no need to\\nhave static row heights, or to know the row heights in advance.\"],[13],[2,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"configuring-occlusion\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#configuring-occlusion\"],[14,0,\"heading-anchor\"],[12],[2,\"Configuring Occlusion\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"You can pass some parameters to the table body to fine tune the occlusion\\nsettings. The current options are:\"],[13],[2,\"\\n\\n        \"],[10,\"ul\"],[14,0,\"docs-list-disc\"],[12],[10,\"li\"],[12],[10,\"p\"],[12],[10,\"code\"],[12],[2,\"estimateRowHeight\"],[13],[2,\": Vertical-collection figures out what your row heights\\nare by measuring them after they have rendered. The first time each row is\\nrendered, it assumes the row's height will be whatever value is provided by\\nthe \"],[10,\"code\"],[12],[2,\"estimateRowHeight\"],[13],[2,\" in pixels (defaults to \"],[10,\"code\"],[12],[2,\"30\"],[13],[2,\"). A more accurate estimate\\nis always better, as it means vertical-collection will have less work to do\\nif the \\\"guess\\\" was incorrect.\"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[10,\"p\"],[12],[10,\"code\"],[12],[2,\"staticHeight\"],[13],[2,\": This field is a boolean flag that defaults to \"],[10,\"code\"],[12],[2,\"false\"],[13],[2,\". If you\\nenable this field, vertical-collection will assume that all of the rows'\\nheights are \"],[10,\"em\"],[12],[2,\"exactly\"],[13],[2,\" the value of \"],[10,\"code\"],[12],[2,\"estimateRowHeight\"],[13],[2,\". This will mean less\\nwork for vertical-collection and will be slightly more performant.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"Vertical-collection will \"],[10,\"strong\"],[12],[2,\"not\"],[13],[2,\" apply style changes to your rows if you\\npass \"],[10,\"code\"],[12],[2,\"staticHeight=true\"],[13],[2,\". You are responsible for ensuring that your rows are\\nstyled to always be the same as \"],[10,\"code\"],[12],[2,\"estimateRowHeight\"],[13],[2,\".\"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[10,\"p\"],[12],[10,\"code\"],[12],[2,\"key\"],[13],[2,\": This key is the property used by the vertical-collection to determine\\nwhether an array mutation is an append, prepend, or complete replacement. It\\ndefaults to the object identity \"],[10,\"code\"],[12],[2,\"\\\"@identity\\\"\"],[13],[2,\".\"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[13],[2,\"\\n      \"],[10,\"p\"],[12],[6,[37,4],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[32,1,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/body/occlusion/template.hbs' @ L37:C5) \"],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container\"],[12],[2,\"\\n      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,2,[\"head\"]],[],[[\"@columns\"],[[34,0]]],null],[2,\"     \"],[8,[32,2,[\"body\"]],[],[[\"@rows\",\"@staticHeight\",\"@estimateRowHeight\",\"@key\"],[[34,1],true,41,\"A\"]],null],[2,\"\\n  \"]],\"parameters\":[2]}]]],[2,\"\\n\"],[13],[2,\"\\n\"],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,3],[[30,[36,2],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/body/occlusion/template.hbs' @ L49:C43) \"],null]],[[\"name\"],[\"docs-example-occlusion.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,3],[[30,[36,2],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/body/occlusion/template.hbs' @ L50:C4) \"],null]],[[\"label\",\"name\"],[\"component.js\",\"docs-example-occlusion.js\"]]]],[2,\"\\n\"]],\"parameters\":[1]}]]],[13],[13]],\"hasEval\":false,\"upvars\":[\"columns\",\"rows\",\"-assert-implicit-component-helper-argument\",\"component\",\"docs-demo\"]}",
    "moduleName": "dummy/pods/docs/guides/body/occlusion/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/body/row-selection/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    // BEGIN-SNIPPET docs-example-row-selection.js
    columns: Ember.computed(function () {
      return [{
        name: 'A',
        valuePath: 'A',
        width: 180
      }, {
        name: 'B',
        valuePath: 'B',
        width: 180
      }, {
        name: 'C',
        valuePath: 'C',
        width: 180
      }, {
        name: 'D',
        valuePath: 'D',
        width: 180
      }];
    }),
    rows: Ember.computed(function () {
      return [{
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }];
    }),

    // END-SNIPPET
    // BEGIN-SNIPPET docs-example-selected-rows.js
    init() {
      this._super(...arguments);

      let [rowWithChildren] = this.get('rowWithChildren');
      this.preselection = [rowWithChildren];
    },

    rowWithChildren: Ember.computed(function () {
      return [{
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        children: [{
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }]
      }];
    }),
    // END-SNIPPET
    // BEGIN-SNIPPET docs-example-selection-modes.js
    rowSelectionMode: 'multiple',
    checkboxSelectionMode: 'multiple',
    selectingChildrenSelectsParent: true,
    rowsWithChildren: Ember.computed(function () {
      let makeRow = (id, {
        children
      } = {
        children: []
      }) => {
        return {
          A: `A${id}`,
          B: 'B',
          C: 'C',
          D: 'D',
          children
        };
      };

      return [makeRow(1, {
        children: [makeRow(2, {
          children: [makeRow(3), makeRow(4), makeRow(5)]
        }), makeRow(6), makeRow(7), makeRow(8, {
          children: [makeRow(9), makeRow(10), makeRow(11)]
        })]
      })];
    }),
    currentSelection: Ember.computed('demoSelection', function () {
      let selection = this.demoSelection;

      if (!selection || selection.length === 0) {
        return 'Nothing selected';
      } else {
        if (Array.isArray(selection)) {
          return `Array: [${selection.map(row => row.A).join(',')}]`;
        } else {
          let row = selection;
          return `Single: ${row.A}`;
        }
      }
    }) // END-SNIPPET

  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/body/row-selection/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "KSySAWv6",
    "block": "{\"symbols\":[\"demo\",\"t\",\"demo\",\"t\",\"demo\",\"t\"],\"statements\":[[10,\"div\"],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"row-selection\"],[14,0,\"docs-md__h1\"],[12],[2,\"Row Selection\"],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Tables provide row selection out of the box. Adding an \"],[10,\"code\"],[12],[2,\"onSelect\"],[13],[2,\" action to the\\ntable body will activate selection, and you can pass in the \"],[10,\"code\"],[12],[2,\"selection\"],[13],[2,\" property\\nto control the selection using DDAU:\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[6,[37,16],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,11],[[30,[36,10],[[32,5,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/body/row-selection/template.hbs' @ L6:C5) \"],null]],[[\"name\"],[\"docs-example-row-selection\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container small\"],[12],[2,\"\\n\"],[2,\"      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,6,[\"head\"]],[],[[\"@columns\"],[[34,0]]],null],[2,\"     \"],[8,[32,6,[\"body\"]],[],[[\"@rows\",\"@onSelect\",\"@selection\"],[[34,14],[30,[36,7],[[32,0],[30,[36,6],[[35,15]],null]],null],[34,15]]],null],[2,\"\\n  \"]],\"parameters\":[6]}]]],[2,\"\\n\"],[13],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,11],[[30,[36,10],[[32,5,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/body/row-selection/template.hbs' @ L17:C31) \"],null]],[[\"name\"],[\"docs-example-row-selection.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,11],[[30,[36,10],[[32,5,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/body/row-selection/template.hbs' @ L18:C4) \"],null]],[[\"label\",\"name\"],[\"component.js\",\"docs-example-row-selection.js\"]]]],[2,\"\\n\"]],\"parameters\":[5]}]]],[2,\" Selected Rows \"],[10,\"code\"],[12],[2,\"selection\"],[13],[2,\" can either be a single row, or a group of rows. Selecting a row also\\nmarks all of its children as selected. In order to keep the selection state as minimal as possible, when \"],[10,\"code\"],[12],[2,\"selection\"],[13],[2,\" is\\na group it will also deduplicate selections by removing all children when a\\nparent node is selected. Ember Table can infer that because the parent node is\\nselected, all of its children \"],[10,\"em\"],[12],[2,\"must\"],[13],[2,\" be selected: \"],[6,[37,16],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,11],[[30,[36,10],[[32,3,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/body/row-selection/template.hbs' @ L24:C5) \"],null]],[[\"name\"],[\"selected-rows\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container small\"],[12],[2,\"\\n\"],[2,\"      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,4,[\"head\"]],[],[[\"@columns\"],[[34,0]]],null],[2,\"     \"],[8,[32,4,[\"body\"]],[],[[\"@rows\",\"@onSelect\",\"@selection\"],[[34,12],[30,[36,7],[[32,0],[30,[36,6],[[35,13]],null]],null],[34,13]]],null],[2,\"\\n  \"]],\"parameters\":[4]}]]],[2,\"\\n\"],[13],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,11],[[30,[36,10],[[32,3,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/body/row-selection/template.hbs' @ L35:C31) \"],null]],[[\"label\",\"name\"],[\"component.js\",\"docs-example-selected-rows.js\"]]]],[2,\"\\n  \"],[1,[30,[36,11],[[30,[36,10],[[32,3,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/body/row-selection/template.hbs' @ L36:C4) \"],null]],[[\"name\"],[\"docs-example-selected-rows.hbs\"]]]],[2,\"\\n\"]],\"parameters\":[3]}]]],[2,\" This can make some tasks more difficult - performing an action on all rows that\\nare logically selected may mean that you have to traverse through the \"],[10,\"code\"],[12],[2,\"children\"],[13],[2,\"\\nin the \"],[10,\"code\"],[12],[2,\"selection\"],[13],[2,\" group. It makes other tasks much easier though, like finding\\nall of the groups that are selected, and selecting a group manually, external to\\nthe table. Selection Modes There are three different properties you can use to control the behavior of\\nrow selection: \"],[10,\"code\"],[12],[2,\"checkboxSelectionMode\"],[13],[2,\": This controls the behavior of the checkbox that appears in the first cell of a row. It can be either \"],[10,\"code\"],[12],[2,\"multiple\"],[13],[2,\", \"],[10,\"code\"],[12],[2,\"single\"],[13],[2,\", or \"],[10,\"code\"],[12],[2,\"none\"],[13],[2,\". Checkbox selection is always a group selection - it will always pass an array to \"],[10,\"code\"],[12],[2,\"onSelect\"],[13],[2,\". In \"],[10,\"code\"],[12],[2,\"multiple\"],[13],[2,\" mode it allows more than one checkbox to be checked at a time, and in the \"],[10,\"code\"],[12],[2,\"single\"],[13],[2,\" mode it only allows one checkbox to be checked. \"],[10,\"code\"],[12],[2,\"rowSelectionMode\"],[13],[2,\": This controls the behavior of clicking the row itself. It can be either \"],[10,\"code\"],[12],[2,\"multiple\"],[13],[2,\", \"],[10,\"code\"],[12],[2,\"single\"],[13],[2,\", or \"],[10,\"code\"],[12],[2,\"none\"],[13],[2,\". If it is either \"],[10,\"code\"],[12],[2,\"multiple\"],[13],[2,\" or \"],[10,\"code\"],[12],[2,\"single\"],[13],[2,\", then the \"],[10,\"code\"],[12],[2,\"is-selectable\"],[13],[2,\" class will be applied to the row. When using \"],[10,\"code\"],[12],[2,\"single\"],[13],[2,\" mode, clicking on a row will pass the row directly to \"],[10,\"code\"],[12],[2,\"onSelect\"],[13],[2,\". This marks the row as selected, but is not considered a group selection, so the checkbox will \"],[10,\"em\"],[12],[2,\"not\"],[13],[2,\" be checked. \"],[10,\"code\"],[12],[2,\"selectingChildrenSelectsParent\"],[13],[2,\": This is a boolean flag that determines whether selecting all of the children of a given row also selects the row itself. \"],[6,[37,16],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,11],[[30,[36,10],[[32,1,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/body/row-selection/template.hbs' @ L43:C5) \"],null]],[[\"name\"],[\"selection-modes\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container\"],[12],[2,\"\\n      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,2,[\"head\"]],[],[[\"@columns\"],[[34,0]]],null],[2,\"     \"],[8,[32,2,[\"body\"]],[],[[\"@rows\",\"@rowSelectionMode\",\"@checkboxSelectionMode\",\"@selectingChildrenSelectsParent\",\"@onSelect\",\"@selection\"],[[34,1],[34,2],[34,3],[34,4],[30,[36,7],[[32,0],[30,[36,6],[[35,5]],null]],null],[34,5]]],null],[2,\"\\n  \"]],\"parameters\":[2]}]]],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"demo-options-group\"],[12],[2,\"\\n  \"],[10,\"h4\"],[12],[2,\"Current selection\"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"demo-current-selection\"],[12],[1,[34,8]],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"demo-options-group\"],[12],[2,\"\\n  \"],[10,\"h4\"],[12],[2,\"rowSelectionMode\"],[13],[2,\"\\n  \"],[10,\"label\"],[12],[2,\" \"],[8,\"radio-button\",[],[[\"@name\",\"@value\",\"@groupValue\"],[\"row-selection-mode\",\"multiple\",[34,2]]],null],[2,\" multiple \"],[13],[2,\"\\n  \"],[10,\"label\"],[12],[2,\" \"],[8,\"radio-button\",[],[[\"@name\",\"@value\",\"@groupValue\"],[\"row-selection-mode\",\"single\",[34,2]]],null],[2,\" single \"],[13],[2,\"\\n  \"],[10,\"label\"],[12],[2,\" \"],[8,\"radio-button\",[],[[\"@name\",\"@value\",\"@groupValue\"],[\"row-selection-mode\",\"none\",[34,2]]],null],[2,\" none \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"demo-options-group\"],[12],[2,\"\\n  \"],[10,\"h4\"],[12],[2,\"checkboxSelectionMode\"],[13],[2,\"\\n  \"],[10,\"label\"],[12],[2,\" \"],[8,\"radio-button\",[],[[\"@name\",\"@value\",\"@groupValue\"],[\"checkbox-selection-mode\",\"multiple\",[34,3]]],null],[2,\" multiple \"],[13],[2,\"\\n  \"],[10,\"label\"],[12],[2,\" \"],[8,\"radio-button\",[],[[\"@name\",\"@value\",\"@groupValue\"],[\"checkbox-selection-mode\",\"single\",[34,3]]],null],[2,\" single \"],[13],[2,\"\\n  \"],[10,\"label\"],[12],[2,\" \"],[8,\"radio-button\",[],[[\"@name\",\"@value\",\"@groupValue\"],[\"checkbox-selection-mode\",\"none\",[34,3]]],null],[2,\" none \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"demo-options-group\"],[12],[2,\"\\n  \"],[10,\"h4\"],[12],[2,\"selectingChildrenSelectsParent\"],[13],[2,\"\\n  \"],[10,\"label\"],[12],[2,\" \"],[1,[30,[36,9],null,[[\"type\",\"checked\"],[\"checkbox\",[35,4]]]]],[2,\" \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,11],[[30,[36,10],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/body/row-selection/template.hbs' @ L80:C43) \"],null]],[[\"name\"],[\"docs-example-selection-modes.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,11],[[30,[36,10],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/body/row-selection/template.hbs' @ L81:C4) \"],null]],[[\"label\",\"name\"],[\"component.js\",\"docs-example-selection-modes.js\"]]]],[2,\"\\n\"]],\"parameters\":[1]}]]],[13],[13]],\"hasEval\":false,\"upvars\":[\"columns\",\"rowsWithChildren\",\"rowSelectionMode\",\"checkboxSelectionMode\",\"selectingChildrenSelectsParent\",\"demoSelection\",\"mut\",\"action\",\"currentSelection\",\"input\",\"-assert-implicit-component-helper-argument\",\"component\",\"rowWithChildren\",\"preselection\",\"rows\",\"selection\",\"docs-demo\"]}",
    "moduleName": "dummy/pods/docs/guides/body/row-selection/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/body/rows-and-trees/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    // BEGIN-SNIPPET docs-example-rows.js
    columns: Ember.computed(function () {
      return [{
        name: 'A',
        valuePath: 'A',
        width: 180
      }, {
        name: 'B',
        valuePath: 'B',
        width: 180
      }, {
        name: 'C',
        valuePath: 'C',
        width: 180
      }, {
        name: 'D',
        valuePath: 'D',
        width: 180
      }];
    }),
    rows: Ember.computed(function () {
      return [{
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }];
    }),
    // END-SNIPPET
    // BEGIN-SNIPPET docs-example-tree-rows.js
    treeEnabled: true,
    rowsWithChildren: Ember.computed(function () {
      return [{
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        children: [{
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }]
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        children: [{
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }]
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        children: [{
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }]
      }];
    }),
    // END-SNIPPET
    // BEGIN-SNIPPET docs-example-rows-with-collapse.js
    collapseEnabled: true,
    rowsWithCollapse: Ember.computed(function () {
      return [{
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        isCollapsed: true,
        children: [{
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }]
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        isCollapsed: true,
        children: [{
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }]
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        isCollapsed: true,
        children: [{
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }]
      }];
    }) // END-SNIPPET

  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/body/rows-and-trees/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "qVfuV0J7",
    "block": "{\"symbols\":[\"demo\",\"t\",\"demo\",\"t\",\"demo\",\"t\"],\"statements\":[[10,\"div\"],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"rows-and-trees\"],[14,0,\"docs-md__h1\"],[12],[2,\"Rows and Trees\"],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Table body components must receive an \"],[10,\"code\"],[12],[2,\"rows\"],[13],[2,\" array. The items in this array must\\nall be objects, but beyond that there are no specific requirements for the\\nobjects themselves - they can be anything.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[6,[37,9],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,5],[[30,[36,4],[[32,5,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/body/rows-and-trees/template.hbs' @ L6:C5) \"],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container small\"],[12],[2,\"\\n\"],[2,\"      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,6,[\"head\"]],[],[[\"@columns\"],[[34,2]]],null],[2,\"\\n        \"],[8,[32,6,[\"body\"]],[],[[\"@rows\"],[[34,8]]],null],[2,\"\\n      \"]],\"parameters\":[6]}]]],[2,\"\\n\"],[2,\"    \"],[13],[2,\"\\n  \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,5],[[30,[36,4],[[32,5,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/body/rows-and-trees/template.hbs' @ L15:C24) \"],null]],[[\"name\"],[\"docs-example-rows.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,5],[[30,[36,4],[[32,5,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/body/rows-and-trees/template.hbs' @ L16:C4) \"],null]],[[\"label\",\"name\"],[\"component.js\",\"docs-example-rows.js\"]]]],[2,\"\\n\"]],\"parameters\":[5]}]]],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"The value passed to each cell in the table is determined by the \"],[10,\"code\"],[12],[2,\"valuePath\"],[13],[2,\" of\\nthe \"],[10,\"code\"],[12],[2,\"column\"],[13],[2,\" object. A simplified version of this in handlebars would look like\\nthis:\"],[13],[2,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedhbs\"],[12],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{#\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[10,\"span\"],[14,0,\"hljs-builtin-name\"],[12],[2,\"each\"],[13],[13],[2,\" rows \"],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"as\"],[13],[2,\" |row|}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n  \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"tr\"],[13],[2,\">\"],[13],[2,\"\\n    \"],[13],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{#\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[10,\"span\"],[14,0,\"hljs-builtin-name\"],[12],[2,\"each\"],[13],[13],[2,\" columns \"],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"as\"],[13],[2,\" |column|}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n      \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"td\"],[13],[2,\">\"],[13],[2,\"\\n        \"],[13],[10,\"span\"],[14,0,\"hljs-template-variable\"],[12],[2,\"{{\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[10,\"span\"],[14,0,\"hljs-builtin-name\"],[12],[2,\"yield\"],[13],[13],[2,\" (\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[10,\"span\"],[14,0,\"hljs-builtin-name\"],[12],[2,\"get\"],[13],[13],[2,\" row column.valuePath)}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n      \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"td\"],[13],[2,\">\"],[13],[2,\"\\n    \"],[13],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{/\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[10,\"span\"],[14,0,\"hljs-builtin-name\"],[12],[2,\"each\"],[13],[13],[2,\"}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n  \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"tr\"],[13],[2,\">\"],[13],[2,\"\\n\"],[13],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{/\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[10,\"span\"],[14,0,\"hljs-builtin-name\"],[12],[2,\"each\"],[13],[13],[2,\"}}\"],[13],[13],[13],[2,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"trees-and-children\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#trees-and-children\"],[14,0,\"heading-anchor\"],[12],[2,\"Trees and Children\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"By default, Ember Table handles trees of rows. Each row can have a \"],[10,\"code\"],[12],[2,\"children\"],[13],[2,\"\\nproperty which is another array of rows. Children are treated the same way as\\nparents - cells will attempt to find a value by getting the value at the value\\npath on the child.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"If you want to disable the tree behavior, you can pass \"],[10,\"code\"],[12],[2,\"enableTree=false\"],[13],[2,\" to\\nthe table body.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[6,[37,9],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,5],[[30,[36,4],[[32,3,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/body/rows-and-trees/template.hbs' @ L39:C5) \"],null]],[[\"name\"],[\"trees\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-options\"],[12],[2,\"\\n      \"],[10,\"label\"],[12],[2,\"\\n        \"],[1,[30,[36,1],null,[[\"type\",\"checked\"],[\"checkbox\",[35,6]]]]],[2,\"\\n        Enable Tree\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"demo-container small\"],[12],[2,\"\\n      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,4,[\"head\"]],[],[[\"@columns\"],[[34,2]]],null],[2,\"     \"],[8,[32,4,[\"body\"]],[],[[\"@rows\",\"@enableTree\"],[[34,7],[34,6]]],null],[2,\"\\n  \"]],\"parameters\":[4]}]]],[2,\"\\n\"],[13],[2,\"\\n\"],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,5],[[30,[36,4],[[32,3,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/body/rows-and-trees/template.hbs' @ L55:C43) \"],null]],[[\"label\",\"name\"],[\"component.js\",\"docs-example-tree-rows.js\"]]]],[2,\"\\n  \"],[1,[30,[36,5],[[30,[36,4],[[32,3,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/body/rows-and-trees/template.hbs' @ L56:C4) \"],null]],[[\"name\"],[\"docs-example-tree-rows.hbs\"]]]],[2,\"\\n\"]],\"parameters\":[3]}]]],[2,\" Collapsing Rows Trees with children are collapsible by default. You can set the \"],[10,\"code\"],[12],[2,\"isCollapsed\"],[13],[2,\"\\nproperty directly on rows to control the collapse state of rows externally. If\\nyou set \"],[10,\"code\"],[12],[2,\"isCollapsed\"],[13],[2,\", the table will update it when the user collapses or\\nuncollapses a row. Otherwise, it will keep the state internally only. If you want to disable collapsing, you can pass \"],[10,\"code\"],[12],[2,\"enableCollapse=false\"],[13],[2,\" to the\\ntable body. If you want to disable collapsing at a row level, you can pass\\n\"],[10,\"code\"],[12],[2,\"disableCollapse=true\"],[13],[2,\" to the row. \"],[6,[37,9],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,5],[[30,[36,4],[[32,1,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/body/rows-and-trees/template.hbs' @ L63:C5) \"],null]],[[\"name\"],[\"collapse\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-options\"],[12],[2,\"\\n      \"],[10,\"label\"],[12],[2,\"\\n        \"],[1,[30,[36,1],null,[[\"type\",\"checked\"],[\"checkbox\",[35,0]]]]],[2,\"\\n        Enable Collapse\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"demo-container small\"],[12],[2,\"\\n      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,2,[\"head\"]],[],[[\"@columns\"],[[34,2]]],null],[2,\"     \"],[8,[32,2,[\"body\"]],[],[[\"@rows\",\"@enableCollapse\"],[[34,3],[34,0]]],null],[2,\"\\n  \"]],\"parameters\":[2]}]]],[2,\"\\n\"],[13],[2,\"\\n\"],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,5],[[30,[36,4],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/body/rows-and-trees/template.hbs' @ L79:C43) \"],null]],[[\"label\",\"name\"],[\"component.js\",\"docs-example-rows-with-collapse.js\"]]]],[2,\"\\n  \"],[1,[30,[36,5],[[30,[36,4],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/body/rows-and-trees/template.hbs' @ L80:C4) \"],null]],[[\"name\"],[\"docs-example-rows-with-collapse.hbs\"]]]],[2,\"\\n\"]],\"parameters\":[1]}]]],[13],[13]],\"hasEval\":false,\"upvars\":[\"collapseEnabled\",\"input\",\"columns\",\"rowsWithCollapse\",\"-assert-implicit-component-helper-argument\",\"component\",\"treeEnabled\",\"rowsWithChildren\",\"rows\",\"docs-demo\"]}",
    "moduleName": "dummy/pods/docs/guides/body/rows-and-trees/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/header/column-keys/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "I2gj/PPp",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"docs-md\"],[12],[10,\"h2\"],[14,1,\"column-keys\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#column-keys\"],[14,0,\"heading-anchor\"],[12],[2,\"Column Keys\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Ember Table will update the table layout as the \"],[10,\"code\"],[12],[2,\"columns\"],[13],[2,\" array changes. When\\nobjects are removed and re-added to the array, meta data about the state of\\nthe column is preserved and recovered. By default, Ember Table uses the objects\\nthemselves as keys to save and retrieve this data.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"If your application is written in a functional style, this can pose a problem.\\nFor example, if your columns are generated by a getter that depends on tracked\\nproperties, you may be frequently passing new columns to Ember Table that aren't\\nreally new at all.\"],[13],[2,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedjs\"],[12],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"get\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-title\"],[12],[2,\"columns\"],[13],[2,\"() {\\n  \"],[10,\"span\"],[14,0,\"hljs-comment\"],[12],[2,\"// `data` could be a tracked property that updates frequently\"],[13],[2,\"\\n  \"],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"return\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-built_in\"],[12],[2,\"this\"],[13],[2,\".data.headers.map(\"],[10,\"span\"],[14,0,\"hljs-function\"],[12],[2,\"(\"],[10,\"span\"],[14,0,\"hljs-params\"],[12],[2,\"header, index\"],[13],[2,\") =>\"],[13],[2,\" {\\n    \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"heading\"],[13],[2,\": header.name,\\n    \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"valuePath\"],[13],[2,\": \"],[10,\"span\"],[14,0,\"hljs-string\"],[12],[2,\"`\"],[10,\"span\"],[14,0,\"hljs-subst\"],[12],[2,\"${index}\"],[13],[2,\"`\"],[13],[2,\",\\n    \"],[10,\"span\"],[14,0,\"hljs-comment\"],[12],[2,\"// ...\"],[13],[2,\"\\n  });\\n}\"],[13],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"This can have unexpected consequences, as meta data about your columns\\nis being lost each time \"],[10,\"code\"],[12],[2,\"columns\"],[13],[2,\" is re-computed.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"To handle this scenario, you can specify a \"],[10,\"code\"],[12],[2,\"columnKeyPath\"],[13],[2,\" property that\\nidentifies a \\\"key\\\" property on each column object. This acts like a primary key\\nin a database, identifying when two objects represent the same underlying\\nentity. When \"],[10,\"code\"],[12],[2,\"columns\"],[13],[2,\" is updated, these keys are used to preserve the state\\nof your table, even if the replacement column objects are not identical to the\\noriginals.\"],[13],[2,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedjs\"],[12],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"get\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-title\"],[12],[2,\"columns\"],[13],[2,\"() {\\n  \"],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"return\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-built_in\"],[12],[2,\"this\"],[13],[2,\".data.headers.map(\"],[10,\"span\"],[14,0,\"hljs-function\"],[12],[2,\"(\"],[10,\"span\"],[14,0,\"hljs-params\"],[12],[2,\"header, index\"],[13],[2,\") =>\"],[13],[2,\" {\\n    \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"heading\"],[13],[2,\": header.name,\\n    \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"valuePath\"],[13],[2,\": \"],[10,\"span\"],[14,0,\"hljs-string\"],[12],[2,\"`\"],[10,\"span\"],[14,0,\"hljs-subst\"],[12],[2,\"${index}\"],[13],[2,\"`\"],[13],[2,\",\\n\\n    \"],[10,\"span\"],[14,0,\"hljs-comment\"],[12],[2,\"// assumes headers have distinct names\"],[13],[2,\"\\n    \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"key\"],[13],[2,\": header.name,\\n\\n    \"],[10,\"span\"],[14,0,\"hljs-comment\"],[12],[2,\"// ...\"],[13],[2,\"\\n  });\\n}\"],[13],[13],[2,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedhbs\"],[12],[10,\"span\"],[14,0,\"xml\"],[12],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"EmberTable\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"as\"],[13],[2,\" |\"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"t\"],[13],[2,\"|>\"],[13],[2,\"\\n  \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"t.head\"],[13],[2,\"\\n    @\"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"columns\"],[13],[2,\"=\"],[13],[13],[10,\"span\"],[14,0,\"hljs-template-variable\"],[12],[2,\"{{\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"columns\"],[13],[2,\"}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"\\n    @\"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"columnKeyPath\"],[13],[2,\"=\"],[10,\"span\"],[14,0,\"hljs-string\"],[12],[2,\"\\\"key\\\"\"],[13],[2,\"\\n  />\"],[13],[2,\"\\n\\n  \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"t.body\"],[13],[2,\" @\"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"rows\"],[13],[2,\"=\"],[13],[13],[10,\"span\"],[14,0,\"hljs-template-variable\"],[12],[2,\"{{\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"rows\"],[13],[2,\"}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\" />\"],[13],[2,\"\\n\"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"EmberTable\"],[13],[2,\">\"],[13],[13],[13],[13],[13]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "dummy/pods/docs/guides/header/column-keys/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/header/columns/controller", ["exports", "dummy/utils/generators"], function (_exports, _generators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    rows: Ember.computed(function () {
      return (0, _generators.generateRows)(100);
    }),
    // BEGIN-SNIPPET docs-example-columns.js
    columns: Ember.computed(function () {
      return [{
        name: 'A',
        valuePath: 'A'
      }, {
        name: 'B',
        valuePath: 'B'
      }, {
        name: 'C',
        valuePath: 'C'
      }, {
        name: 'D',
        valuePath: 'D'
      }, {
        name: 'E',
        valuePath: 'E'
      }, {
        name: 'F',
        valuePath: 'F'
      }, {
        name: 'G',
        valuePath: 'G'
      }];
    }),
    // END-SNIPPET
    // BEGIN-SNIPPET docs-example-columns-with-components.js
    columnsWithComponents: Ember.computed(function () {
      return [{
        heading: 'A',
        valuePath: 'A',
        component: 'custom-header',
        color: 'navy'
      }, {
        heading: 'B',
        valuePath: 'B',
        component: 'custom-header',
        color: 'blue'
      }, {
        heading: 'C',
        valuePath: 'C',
        component: 'custom-header',
        color: 'aqua'
      }, {
        heading: 'D',
        valuePath: 'D',
        component: 'custom-header',
        color: 'teal'
      }, {
        heading: 'E',
        valuePath: 'E',
        component: 'custom-header',
        color: 'orange'
      }, {
        heading: 'F',
        valuePath: 'F',
        component: 'custom-header',
        color: 'red'
      }, {
        heading: 'G',
        valuePath: 'G',
        component: 'custom-header',
        color: 'maroon'
      }];
    }),
    // END-SNIPPET
    // BEGIN-SNIPPET docs-example-columns-with-widths.js
    columnsWithWidths: Ember.computed(function () {
      return [{
        name: 'A',
        valuePath: 'A',
        width: 100
      }, {
        name: 'B',
        valuePath: 'B',
        width: 100
      }, {
        name: 'C',
        valuePath: 'C',
        width: 100
      }, {
        name: 'D',
        valuePath: 'D',
        width: 100
      }, {
        name: 'E',
        valuePath: 'E',
        width: 100
      }, {
        name: 'F',
        valuePath: 'F',
        width: 100
      }, {
        name: 'G',
        valuePath: 'G',
        width: 100
      }];
    }),
    // END-SNIPPET
    // BEGIN-SNIPPET docs-example-column-resize-reorder.js
    resizeEnabled: false,
    reorderEnabled: false,
    resizeModeFluid: false,
    // END-SNIPPET
    resizeCount: 0,
    reorderCount: 0,
    // BEGIN-SNIPPET docs-example-text-align.js
    columnsWithTextAlign: Ember.computed(function () {
      return [{
        name: 'No alignment',
        valuePath: 'A'
      }, {
        name: 'Left alignment',
        valuePath: 'B',
        textAlign: 'left'
      }, {
        name: 'Center alignment',
        valuePath: 'C',
        textAlign: 'center'
      }, {
        name: 'Right alignment',
        valuePath: 'D',
        textAlign: 'right'
      }];
    }) // END-SNIPPET

  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/header/columns/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Fjv6rSwQ",
    "block": "{\"symbols\":[\"demo\",\"t\",\"demo\",\"t\",\"demo\",\"t\",\"demo\",\"t\",\"t\",\"demo\",\"t\",\"h\",\"r\",\"column\",\"demo\",\"t\"],\"statements\":[[10,\"div\"],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"columns\"],[14,0,\"docs-md__h1\"],[12],[2,\"Columns\"],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Table headers must receive an array of columns objects. The objects can be\\nsimple POJOs, and there are no hard requirements about their shape. They \"],[10,\"em\"],[12],[2,\"may\"],[13],[2,\"\\nhave a \"],[10,\"code\"],[12],[2,\"valuePath\"],[13],[2,\", and if they do this path will be used to get the value from\\neach row for that column. If you only want to use the default template, you can\\nalso specify a \"],[10,\"code\"],[12],[2,\"name\"],[13],[2,\" on the column which will be rendered in the template.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[6,[37,17],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[32,15,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/header/columns/template.hbs' @ L8:C5) \"],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container small\"],[12],[2,\"\\n\"],[2,\"      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,16,[\"head\"]],[],[[\"@columns\"],[[34,6]]],null],[2,\"\\n        \"],[8,[32,16,[\"body\"]],[],[[\"@rows\"],[[34,1]]],null],[2,\"\\n      \"]],\"parameters\":[16]}]]],[2,\"\\n\"],[2,\"    \"],[13],[2,\"\\n  \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,3],[[30,[36,2],[[32,15,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/columns/template.hbs' @ L17:C24) \"],null]],[[\"name\"],[\"docs-example-columns.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,3],[[30,[36,2],[[32,15,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/columns/template.hbs' @ L18:C4) \"],null]],[[\"name\",\"label\"],[\"docs-example-columns.js\",\"component.js\"]]]],[2,\"\\n\"]],\"parameters\":[15]}]]],[13],[2,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"customizing-headers\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#customizing-headers\"],[14,0,\"heading-anchor\"],[12],[2,\"Customizing Headers\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"You can also customize the template for columns by using the block form of the\\nheader. The \"],[10,\"code\"],[12],[2,\"column\"],[13],[2,\" object you defined is yielded to you directly, meaning you\\ncan provide whatever information you want to the template. You can use custom\\nheader components by passing the name of the component through this way.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[6,[37,17],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[32,10,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/header/columns/template.hbs' @ L27:C5) \"],null]],[[\"name\"],[\"columns-with-components\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container small\"],[12],[2,\"\\n\"],[2,\"      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,11,[\"head\"]],[],[[\"@columns\"],[[34,16]]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[8,[32,12,[\"row\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[8,[32,13,[\"cell\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,3],[[32,14,[\"component\"]]],[[\"color\"],[[32,14,[\"color\"]]]],[[\"default\"],[{\"statements\":[[2,\"                \"],[1,[32,14,[\"heading\"]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"            \"]],\"parameters\":[14]}]]],[2,\"\\n          \"]],\"parameters\":[13]}]]],[2,\"\\n        \"]],\"parameters\":[12]}]]],[2,\"     \"],[8,[32,11,[\"body\"]],[],[[\"@rows\"],[[34,1]]],null],[2,\"\\n  \"]],\"parameters\":[11]}]]],[2,\"\\n\"],[13],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,3],[[30,[36,2],[[32,10,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/columns/template.hbs' @ L42:C31) \"],null]],[[\"name\"],[\"docs-example-columns-with-components.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,3],[[30,[36,2],[[32,10,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/columns/template.hbs' @ L43:C4) \"],null]],[[\"name\",\"label\"],[\"docs-example-columns-with-components.js\",\"component.js\"]]]],[2,\"\\n  \"],[1,[30,[36,3],[[30,[36,2],[[32,10,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/columns/template.hbs' @ L44:C4) \"],null]],[[\"name\",\"label\"],[\"custom-header.hbs\",\"custom-header.hbs\"]]]],[2,\"\\n\"]],\"parameters\":[10]}]]],[2,\" Column Width You can use the \"],[10,\"code\"],[12],[2,\"width\"],[13],[2,\", \"],[10,\"code\"],[12],[2,\"minWidth\"],[13],[2,\", and \"],[10,\"code\"],[12],[2,\"maxWidth\"],[13],[2,\" properties to set the widths\\nof each individual column and constraints for the widths. Widths are controlled\\nby the component, and if you don't provide one they'll use automatic defaults.\\nIf you don't want to provide widths, but want your table to grow or shrink to\\na suitable size in its container, you should take a look at\\n\"],[6,[37,18],null,[[\"route\"],[\"docs.guides.header.size-constraints\"]],[[\"default\"],[{\"statements\":[[2,\"width constraints\"]],\"parameters\":[]}]]],[2,\". If you do provide a width, changes to width via resizing will be reflected onto\\nyour column object. This allows you to share, save, and reuse the widths that\\nyour users set on their tables. Below are two tables which share the same column\\ndefinitions, so their widths are tied together. \"],[6,[37,17],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[6,[37,3],[[30,[36,2],[[32,7,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/header/columns/template.hbs' @ L54:C5) \"],null]],[[\"name\"],[\"column-with-widths\"]],[[\"default\"],[{\"statements\":[[2,\" \"],[2,\"\\n\"],[10,\"div\"],[14,0,\"demo-container small\"],[12],[2,\"\\n  \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,[32,9,[\"head\"]],[],[[\"@columns\"],[[34,15]]],null],[2,\"\\n\\n    \"],[8,[32,9,[\"body\"]],[],[[\"@rows\"],[[34,1]]],null],[2,\"\\n  \"]],\"parameters\":[9]}]]],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"div\"],[14,0,\"demo-container small mt-4\"],[12],[2,\"\\n  \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,[32,8,[\"head\"]],[],[[\"@columns\"],[[34,15]]],null],[2,\"\\n\\n    \"],[8,[32,8,[\"body\"]],[],[[\"@rows\"],[[34,1]]],null],[2,\"\\n  \"]],\"parameters\":[8]}]]],[2,\"\\n\"],[13],[2,\"\\n\"],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,3],[[30,[36,2],[[32,7,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/columns/template.hbs' @ L70:C43) \"],null]],[[\"name\"],[\"docs-example-columns-with-widths.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,3],[[30,[36,2],[[32,7,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/columns/template.hbs' @ L71:C4) \"],null]],[[\"name\",\"label\"],[\"docs-example-columns-with-widths.js\",\"component.js\"]]]],[2,\"\\n\"]],\"parameters\":[7]}]]],[2,\" Resize and Reorder Columns are resizeable and reorderable by default. You can disable these by\\nusing the \"],[10,\"code\"],[12],[2,\"enableResize\"],[13],[2,\" and \"],[10,\"code\"],[12],[2,\"enableReorder\"],[13],[2,\" flags. You can also change the\\n\"],[10,\"code\"],[12],[2,\"resizeMode\"],[13],[2,\" to \"],[10,\"code\"],[12],[2,\"'fluid'\"],[13],[2,\" to have columns subtract width from their neighbors. \"],[10,\"strong\"],[12],[2,\"Note\"],[13],[2,\": Ember 3.13 has changed the way property changes propagate. Due to these\\nchanges, column reordering with Ember 3.13 is very slow \"],[10,\"em\"],[12],[2,\"unless you turn on async observers\"],[13],[2,\".\\nFor more details, see the Ember Table \"],[10,\"a\"],[14,6,\"https://github.com/Addepar/ember-table/issues/775\"],[14,0,\"docs-md__a\"],[12],[2,\"issue #775\"],[13],[2,\"\\nor the related Ember.js issue \"],[10,\"a\"],[14,6,\"https://github.com/emberjs/ember.js/issues/18225\"],[14,0,\"docs-md__a\"],[12],[2,\"#18225\"],[13],[2,\". In addition, in Ember 3.13+ there's also an issue that columns do not reorder on drag-drop properly\\nwhen the column definitions are plain JavaScript arrays. The solution (for now) is to make sure your\\n\"],[10,\"code\"],[12],[2,\"columns\"],[13],[2,\" property is an Ember Array. See the Ember Table \"],[10,\"a\"],[14,6,\"https://github.com/Addepar/ember-table/issues/776\"],[14,0,\"docs-md__a\"],[12],[2,\"issue #776\"],[13],[2,\". \"],[6,[37,17],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[32,5,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/header/columns/template.hbs' @ L80:C5) \"],null]],[[\"name\"],[\"column-resize-reorder\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-options\"],[12],[2,\"\\n      \"],[10,\"label\"],[12],[2,\"\\n        \"],[1,[30,[36,11],null,[[\"type\",\"checked\"],[\"checkbox\",[35,10]]]]],[2,\"\\n        Enable Resizing\\n      \"],[13],[2,\"\\n      \"],[10,\"label\"],[12],[2,\"\\n        \"],[1,[30,[36,11],null,[[\"type\",\"checked\"],[\"checkbox\",[35,12]]]]],[2,\"\\n        Enable Reordering\\n      \"],[13],[2,\"\\n      \"],[10,\"label\"],[12],[2,\"\\n        \"],[1,[30,[36,11],null,[[\"type\",\"checked\"],[\"checkbox\",[35,13]]]]],[2,\"\\n        Resize Mode Fluid\\n      \"],[13],[2,\"\\n    \"],[13],[2,\" \"],[10,\"div\"],[14,0,\"demo-container small\"],[12],[2,\"\\n  \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,[32,6,[\"head\"]],[],[[\"@columns\",\"@enableResize\",\"@enableReorder\",\"@resizeMode\"],[[34,6],[34,10],[34,12],[30,[36,14],[[35,13],\"fluid\",\"standard\"],null]]],null],[2,\"\\n\\n    \"],[8,[32,6,[\"body\"]],[],[[\"@rows\"],[[34,1]]],null],[2,\"\\n  \"]],\"parameters\":[6]}]]],[2,\"\\n\"],[13],[2,\"\\n\"],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,3],[[30,[36,2],[[32,5,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/columns/template.hbs' @ L107:C43) \"],null]],[[\"name\"],[\"docs-example-column-resize-reorder.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,3],[[30,[36,2],[[32,5,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/columns/template.hbs' @ L108:C4) \"],null]],[[\"name\",\"label\"],[\"docs-example-column-resize-reorder.js\",\"component.js\"]]]],[2,\"\\n\"]],\"parameters\":[5]}]]],[2,\" Resizing and reordering can also be disabled on a per column basis by setting\\n\"],[10,\"code\"],[12],[2,\"isResizable\"],[13],[2,\" and \"],[10,\"code\"],[12],[2,\"isReorderable\"],[13],[2,\" to false. Note that only columns that are on\\nthe edge of a table can be marked as non-reorderable. This is because allowing\\ncolumns on either side of a unmovable column effectively makes the column\\nmovable, and that UX is generally not desired. let columns = [\\n  {\\n    valuePath: 'name',\\n    isResizable: false,\\n    isReorderable: false,\\n  }\\n]; Headers send the \"],[10,\"code\"],[12],[2,\"onResize\"],[13],[2,\" and \"],[10,\"code\"],[12],[2,\"onReorder\"],[13],[2,\" actions whenever a resize or a\\nreorder has occured. \"],[6,[37,17],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[32,3,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/header/columns/template.hbs' @ L121:C5) \"],null]],[[\"name\"],[\"resize-reorder-actions\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"p\"],[12],[2,\"Resized \"],[1,[34,4]],[2,\" times\"],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Reordered \"],[1,[34,5]],[2,\" times\"],[13],[2,\" \"],[10,\"div\"],[14,0,\"demo-container small\"],[12],[2,\"\\n  \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,[32,4,[\"head\"]],[],[[\"@columns\",\"@onResize\",\"@onReorder\"],[[34,6],[30,[36,9],[[32,0],[30,[36,8],[[35,4]],null],[30,[36,7],[[35,4],1],null]],null],[30,[36,9],[[32,0],[30,[36,8],[[35,5]],null],[30,[36,7],[[35,5],1],null]],null]]],null],[2,\"\\n\\n    \"],[8,[32,4,[\"body\"]],[],[[\"@rows\"],[[34,1]]],null],[2,\"\\n  \"]],\"parameters\":[4]}]]],[2,\"\\n\"],[13],[2,\"\\n\"],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,3],[[30,[36,2],[[32,3,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/columns/template.hbs' @ L135:C43) \"],null]],[[\"name\"],[\"docs-example-resize-reorder-actions.hbs\"]]]],[2,\"\\n\"]],\"parameters\":[3]}]]],[2,\" Text alignment A column can have its text aligned left, center or right by setting the \"],[10,\"code\"],[12],[2,\"textAlign\"],[13],[2,\" property on the column definition. When the property is set, the cell will have the matching class (\"],[10,\"code\"],[12],[2,\"ember-table__text-align-left\"],[13],[2,\", \"],[10,\"code\"],[12],[2,\"ember-table__text-align-center\"],[13],[2,\" or \"],[10,\"code\"],[12],[2,\"ember-table__text-align-center\"],[13],[2,\"). \"],[6,[37,17],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[32,1,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/header/columns/template.hbs' @ L137:C5) \"],null]],[[\"name\"],[\"text-align\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container small\"],[12],[2,\"\\n\"],[2,\"      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,2,[\"head\"]],[],[[\"@columns\"],[[34,0]]],null],[2,\"     \"],[8,[32,2,[\"body\"]],[],[[\"@rows\"],[[34,1]]],null],[2,\"\\n  \"]],\"parameters\":[2]}]]],[2,\"\\n\"],[13],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,3],[[30,[36,2],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/columns/template.hbs' @ L144:C31) \"],null]],[[\"name\",\"label\"],[\"docs-example-text-align.js\",\"component.js\"]]]],[2,\"\\n  \"],[1,[30,[36,3],[[30,[36,2],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/columns/template.hbs' @ L145:C4) \"],null]],[[\"name\"],[\"docs-example-text-align.hbs\"]]]],[2,\"\\n\"]],\"parameters\":[1]}]]],[13],[13]],\"hasEval\":false,\"upvars\":[\"columnsWithTextAlign\",\"rows\",\"-assert-implicit-component-helper-argument\",\"component\",\"resizeCount\",\"reorderCount\",\"columns\",\"add\",\"mut\",\"action\",\"resizeEnabled\",\"input\",\"reorderEnabled\",\"resizeModeFluid\",\"if\",\"columnsWithWidths\",\"columnsWithComponents\",\"docs-demo\",\"link-to\"]}",
    "moduleName": "dummy/pods/docs/guides/header/columns/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/header/fixed-columns/controller", ["exports", "dummy/utils/generators"], function (_exports, _generators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    rows: Ember.computed(function () {
      return (0, _generators.generateRows)(100);
    }),
    // BEGIN-SNIPPET docs-example-fixed-columns.js
    columns: Ember.computed(function () {
      return [{
        name: 'A',
        valuePath: 'A',
        isFixed: 'left'
      }, {
        name: 'B',
        valuePath: 'B'
      }, {
        name: 'C',
        valuePath: 'C'
      }, {
        name: 'D',
        valuePath: 'D'
      }, {
        name: 'E',
        valuePath: 'E'
      }, {
        name: 'F',
        valuePath: 'F'
      }, {
        name: 'G',
        valuePath: 'G'
      }, {
        name: 'H',
        valuePath: 'H'
      }, {
        name: 'I',
        valuePath: 'I'
      }, {
        name: 'J',
        valuePath: 'J'
      }, {
        name: 'K',
        valuePath: 'K',
        isFixed: 'right'
      }];
    }),
    // END-SNIPPET
    // BEGIN-SNIPPET docs-example-out-of-order-fixed-columns.js
    outOfOrderFixedColumns: Ember.computed(function () {
      return [{
        name: 'A',
        valuePath: 'A',
        isFixed: 'right'
      }, {
        name: 'B',
        valuePath: 'B'
      }, {
        name: 'C',
        valuePath: 'C'
      }, {
        name: 'D',
        valuePath: 'D',
        isFixed: 'left'
      }, {
        name: 'E',
        valuePath: 'E'
      }, {
        name: 'F',
        valuePath: 'F'
      }, {
        name: 'G',
        valuePath: 'G'
      }, {
        name: 'H',
        valuePath: 'H',
        isFixed: 'right'
      }, {
        name: 'I',
        valuePath: 'I'
      }, {
        name: 'J',
        valuePath: 'J'
      }, {
        name: 'K',
        valuePath: 'K',
        isFixed: 'left'
      }];
    }),
    // END-SNIPPET
    // BEGIN-SNIPPET docs-example-dynamic-fixed-columns.js
    dynamicFixedColumns: Ember.computed(function () {
      return Ember.A([{
        name: 'A',
        valuePath: 'A'
      }, {
        name: 'B',
        valuePath: 'B'
      }, {
        name: 'C',
        valuePath: 'C'
      }, {
        name: 'D',
        valuePath: 'D'
      }, {
        name: 'E',
        valuePath: 'E'
      }, {
        name: 'F',
        valuePath: 'F'
      }, {
        name: 'G',
        valuePath: 'G'
      }, {
        name: 'H',
        valuePath: 'H'
      }, {
        name: 'I',
        valuePath: 'I'
      }, {
        name: 'J',
        valuePath: 'J'
      }, {
        name: 'K',
        valuePath: 'K'
      }]);
    }),
    // END-SNIPPET
    actions: {
      toggleFixed(column) {
        if (Ember.get(column, 'isFixed')) {
          Ember.set(column, 'isFixed', false);
        } else {
          Ember.set(column, 'isFixed', 'left');
        }
      }

    }
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/header/fixed-columns/dynamic-example/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Mx+tzkhO",
    "block": "{\"symbols\":[\"t\",\"h\",\"r\",\"column\"],\"statements\":[[10,\"div\"],[14,0,\"demo-container small\"],[12],[2,\"\\n\"],[2,\"  \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,[32,1,[\"head\"]],[],[[\"@columns\"],[[34,5]]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,4],[[30,[36,3],[[32,2,[\"row\"]],\"expected `h.row` to be a contextual component but found a string. Did you mean `(component h.row)`? ('dummy/pods/docs/guides/header/fixed-columns/dynamic-example/template.hbs' @ L5:C9) \"],null]],null,[[\"default\"],[{\"statements\":[[6,[37,4],[[30,[36,3],[[32,3,[\"cell\"]],\"expected `r.cell` to be a contextual component but found a string. Did you mean `(component r.cell)`? ('dummy/pods/docs/guides/header/fixed-columns/dynamic-example/template.hbs' @ L6:C11) \"],null]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"input\"],[15,\"checked\",[30,[36,0],[[32,4,[\"isFixed\"]],\"left\"],null]],[15,\"onclick\",[30,[36,2],[[32,0],[35,1],[32,4]],null]],[14,4,\"checkbox\"],[12],[13],[2,\"\\n\\n          \"],[1,[32,4,[\"name\"]]],[2,\"\\n\"]],\"parameters\":[4]}]]]],\"parameters\":[3]}]]],[2,\"    \"]],\"parameters\":[2]}]]],[2,\"\\n\\n    \"],[8,[32,1,[\"body\"]],[],[[\"@rows\"],[[34,6]]],null],[2,\"\\n  \"]],\"parameters\":[1]}]]],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"eq\",\"toggleFixed\",\"action\",\"-assert-implicit-component-helper-argument\",\"component\",\"columns\",\"rows\"]}",
    "moduleName": "dummy/pods/docs/guides/header/fixed-columns/dynamic-example/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/header/fixed-columns/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "peobhNI9",
    "block": "{\"symbols\":[\"demo\",\"demo\",\"t\",\"demo\",\"t\"],\"statements\":[[10,\"div\"],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"fixed-columns\"],[14,0,\"docs-md__h1\"],[12],[2,\"Fixed Columns\"],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Columns can be fixed to the left or the right side of a table by setting the\\n\"],[10,\"code\"],[12],[2,\"isFixed\"],[13],[2,\" property on the column to \"],[10,\"code\"],[12],[2,\"'left'\"],[13],[2,\" or \"],[10,\"code\"],[12],[2,\"'right'\"],[13],[2,\". Only root columns\\nmay be fixed, subcolumns will ignore their own \"],[10,\"code\"],[12],[2,\"isFixed\"],[13],[2,\" property and use their\\nparent's value instead.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[6,[37,8],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,5],[[30,[36,4],[[32,4,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/header/fixed-columns/template.hbs' @ L7:C5) \"],null]],[[\"name\"],[\"fixed-columns\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container small\"],[12],[2,\"\\n\"],[2,\"        \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[8,[32,5,[\"head\"]],[],[[\"@columns\"],[[34,7]]],null],[2,\"       \"],[8,[32,5,[\"body\"]],[],[[\"@rows\"],[[34,2]]],null],[2,\"\\n    \"]],\"parameters\":[5]}]]],[2,\"\\n\"],[13],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,5],[[30,[36,4],[[32,4,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/fixed-columns/template.hbs' @ L14:C31) \"],null]],[[\"name\"],[\"docs-example-fixed-columns.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,5],[[30,[36,4],[[32,4,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/fixed-columns/template.hbs' @ L15:C4) \"],null]],[[\"name\",\"label\"],[\"docs-example-fixed-columns.js\",\"component.js\"]]]],[2,\"\\n\"]],\"parameters\":[4]}]]],[2,\" Multiple Fixed Columns and Ordering Multiple columns may be fixed to either side of the table. Fixed columns \"],[10,\"em\"],[12],[2,\"must\"],[13],[2,\"\\nbe placed contiguously at the start or end of the \"],[10,\"code\"],[12],[2,\"columns\"],[13],[2,\" array. If columns\\nare marked as fixed and are out of order, Ember Table will sort the columns\\narray directly to fix the ordering. \"],[6,[37,8],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,5],[[30,[36,4],[[32,2,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/header/fixed-columns/template.hbs' @ L20:C5) \"],null]],[[\"name\"],[\"out-of-order-fixed-columns\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container small\"],[12],[2,\"\\n\"],[2,\"        \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[8,[32,3,[\"head\"]],[],[[\"@columns\"],[[34,6]]],null],[2,\"       \"],[8,[32,3,[\"body\"]],[],[[\"@rows\"],[[34,2]]],null],[2,\"\\n    \"]],\"parameters\":[3]}]]],[2,\"\\n\"],[13],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,5],[[30,[36,4],[[32,2,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/fixed-columns/template.hbs' @ L27:C31) \"],null]],[[\"name\"],[\"docs-example-out-of-order-fixed-columns.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,5],[[30,[36,4],[[32,2,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/fixed-columns/template.hbs' @ L28:C4) \"],null]],[[\"name\",\"label\"],[\"docs-example-out-of-order-fixed-columns.js\",\"component.js\"]]]],[2,\"\\n\"]],\"parameters\":[2]}]]],[2,\" Dynamic Fixed Columns Fixed positioning can be changed at any time, the below example demonstrates how\\nyou can make fixed columns toggleable for your users. \"],[6,[37,8],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,5],[[30,[36,4],[[32,1,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/header/fixed-columns/template.hbs' @ L31:C5) \"],null]],[[\"name\"],[\"dynamic-fixed-columns\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,3],null,[[\"rows\",\"columns\",\"toggleFixed\"],[[35,2],[35,1],[30,[36,0],[[32,0],\"toggleFixed\"],null]]]]],[2,\"\\n  \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,5],[[30,[36,4],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/fixed-columns/template.hbs' @ L37:C24) \"],null]],[[\"name\"],[\"docs-example-dynamic-fixed-columns.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,5],[[30,[36,4],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/fixed-columns/template.hbs' @ L38:C4) \"],null]],[[\"name\",\"label\"],[\"docs-example-dynamic-fixed-columns.js\",\"component.js\"]]]],[2,\"\\n\"]],\"parameters\":[1]}]]],[13],[13]],\"hasEval\":false,\"upvars\":[\"action\",\"dynamicFixedColumns\",\"rows\",\"docs/guides/header/fixed-columns/dynamic-example\",\"-assert-implicit-component-helper-argument\",\"component\",\"outOfOrderFixedColumns\",\"columns\",\"docs-demo\"]}",
    "moduleName": "dummy/pods/docs/guides/header/fixed-columns/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/header/scroll-indicators/controller", ["exports", "dummy/utils/generators"], function (_exports, _generators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    // BEGIN-SNIPPET docs-example-scroll-indicators.js
    columns: Ember.computed(function () {
      return [{
        name: 'A',
        valuePath: 'A'
      }, {
        name: 'B',
        valuePath: 'B'
      }, {
        name: 'C',
        valuePath: 'C'
      }, {
        name: 'D',
        valuePath: 'D'
      }, {
        name: 'E',
        valuePath: 'E'
      }, {
        name: 'F',
        valuePath: 'F'
      }, {
        name: 'G',
        valuePath: 'G'
      }, {
        name: 'H',
        valuePath: 'H'
      }, {
        name: 'I',
        valuePath: 'I'
      }, {
        name: 'J',
        valuePath: 'J'
      }, {
        name: 'K',
        valuePath: 'K'
      }];
    }),
    // END-SNIPPET
    // BEGIN-SNIPPET docs-example-scroll-indicators-with-fixed.js
    columnsWithFixed: Ember.computed(function () {
      return [{
        name: 'A',
        valuePath: 'A',
        isFixed: 'left'
      }, {
        name: 'B',
        valuePath: 'B'
      }, {
        name: 'C',
        valuePath: 'C'
      }, {
        name: 'D',
        valuePath: 'D'
      }, {
        name: 'E',
        valuePath: 'E'
      }, {
        name: 'F',
        valuePath: 'F'
      }, {
        name: 'G',
        valuePath: 'G'
      }, {
        name: 'H',
        valuePath: 'H'
      }, {
        name: 'I',
        valuePath: 'I'
      }, {
        name: 'J',
        valuePath: 'J'
      }, {
        name: 'K',
        valuePath: 'K',
        isFixed: 'right'
      }];
    }),
    // END-SNIPPET
    // BEGIN-SNIPPET docs-example-scroll-indicators-with-footer.js
    columnsWithFooter: Ember.computed(function () {
      return [{
        name: 'A',
        valuePath: 'A'
      }, {
        name: 'B',
        valuePath: 'B'
      }, {
        name: 'C',
        valuePath: 'C'
      }, {
        name: 'D',
        valuePath: 'D'
      }, {
        name: 'E',
        valuePath: 'E'
      }, {
        name: 'F',
        valuePath: 'F'
      }, {
        name: 'G',
        valuePath: 'G'
      }, {
        name: 'H',
        valuePath: 'H'
      }, {
        name: 'I',
        valuePath: 'I'
      }, {
        name: 'J',
        valuePath: 'J'
      }, {
        name: 'K',
        valuePath: 'K'
      }];
    }),
    // END-SNIPPET
    rows: Ember.computed(function () {
      return (0, _generators.generateRows)(100);
    }),
    footerRows: Ember.computed(function () {
      return (0, _generators.generateRows)(100, 1, (row, key) => {
        return String.fromCharCode(key.charCodeAt(0) + 7);
      });
    })
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/header/scroll-indicators/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "sJiJhEPf",
    "block": "{\"symbols\":[\"demo\",\"t\",\"f\",\"demo\",\"t\",\"demo\",\"t\"],\"statements\":[[10,\"div\"],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"scroll-indicators\"],[14,0,\"docs-md__h1\"],[12],[2,\"Scroll Indicators\"],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Set the \"],[10,\"code\"],[12],[2,\"scrollIndicators\"],[13],[2,\" argument to \"],[10,\"code\"],[12],[2,\"all\"],[13],[2,\", \"],[10,\"code\"],[12],[2,\"horizontal\"],[13],[2,\", \"],[10,\"code\"],[12],[2,\"vertical\"],[13],[2,\", or \"],[10,\"code\"],[12],[2,\"none\"],[13],[2,\" to\\nshade the edges of the table where the user can scroll to see more data.\\nThese indicators will show/hide when there is content overflowing in their\\nrespective direction.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[6,[37,7],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,4],[[30,[36,3],[[32,6,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/header/scroll-indicators/template.hbs' @ L7:C5) \"],null]],[[\"name\"],[\"scroll-indicators\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container\"],[12],[2,\"\\n      \"],[2,\"     \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[8,[32,7,[\"head\"]],[],[[\"@columns\",\"@scrollIndicators\"],[[34,6],\"all\"]],null],[2,\"\\n      \"],[8,[32,7,[\"body\"]],[],[[\"@rows\"],[[34,1]]],null],[2,\"\\n    \"]],\"parameters\":[7]}]]],[2,\"\\n\"],[13],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,4],[[30,[36,3],[[32,6,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/scroll-indicators/template.hbs' @ L17:C31) \"],null]],[[\"name\"],[\"docs-example-scroll-indicators.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,4],[[30,[36,3],[[32,6,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/scroll-indicators/template.hbs' @ L18:C4) \"],null]],[[\"name\",\"label\"],[\"docs-example-scroll-indicators.js\",\"component.js\"]]]],[2,\"\\n\"]],\"parameters\":[6]}]]],[13],[2,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"horizontal-scroll-indicators-with-fixed-columns\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#horizontal-scroll-indicators-with-fixed-columns\"],[14,0,\"heading-anchor\"],[12],[2,\"Horizontal Scroll Indicators with Fixed Columns\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Horizontal indicators will respect fixed columns, appearing inside of\\nthem when they are present, or at the edges of the table when they are not.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[6,[37,7],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,4],[[30,[36,3],[[32,4,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/header/scroll-indicators/template.hbs' @ L25:C5) \"],null]],[[\"name\"],[\"scroll-indicators-with-fixed\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container\"],[12],[2,\"\\n      \"],[2,\"     \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[8,[32,5,[\"head\"]],[],[[\"@columns\",\"@scrollIndicators\"],[[34,5],\"horizontal\"]],null],[2,\"\\n      \"],[8,[32,5,[\"body\"]],[],[[\"@rows\"],[[34,1]]],null],[2,\"\\n    \"]],\"parameters\":[5]}]]],[2,\"\\n\"],[13],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,4],[[30,[36,3],[[32,4,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/scroll-indicators/template.hbs' @ L35:C31) \"],null]],[[\"name\"],[\"docs-example-scroll-indicators-with-fixed.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,4],[[30,[36,3],[[32,4,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/scroll-indicators/template.hbs' @ L36:C4) \"],null]],[[\"name\",\"label\"],[\"docs-example-scroll-indicators-with-fixed.js\",\"component.js\"]]]],[2,\"\\n\"]],\"parameters\":[4]}]]],[13],[2,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"vertical-scroll-indicators-with-a-header-footer\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#vertical-scroll-indicators-with-a-header-footer\"],[14,0,\"heading-anchor\"],[12],[2,\"Vertical Scroll Indicators with a Header & Footer\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Vertical scroll indicators respect both headers and footers, appearing just\\ninside any sticky rows at the top or bottom of the table.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[6,[37,7],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,4],[[30,[36,3],[[32,1,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/header/scroll-indicators/template.hbs' @ L43:C5) \"],null]],[[\"name\"],[\"scroll-indicators-with-footer\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container\"],[12],[2,\"\\n      \"],[2,\"     \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[8,[32,2,[\"head\"]],[],[[\"@columns\",\"@scrollIndicators\"],[[34,0],\"vertical\"]],null],[2,\"\\n      \"],[8,[32,2,[\"body\"]],[],[[\"@rows\"],[[34,1]]],null],[2,\"\\n      \"],[8,[32,2,[\"foot\"]],[],[[\"@rows\"],[[34,2]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,3,[\"row\"]],[],[[],[]],null],[2,\"\\n      \"]],\"parameters\":[3]}]]],[2,\"\\n    \"]],\"parameters\":[2]}]]],[2,\"\\n\"],[13],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,4],[[30,[36,3],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/scroll-indicators/template.hbs' @ L56:C31) \"],null]],[[\"name\"],[\"docs-example-scroll-indicators-with-footer.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,4],[[30,[36,3],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/scroll-indicators/template.hbs' @ L57:C4) \"],null]],[[\"name\",\"label\"],[\"docs-example-scroll-indicators-with-footer.js\",\"component.js\"]]]],[2,\"\\n\"]],\"parameters\":[1]}]]],[13],[13]],\"hasEval\":false,\"upvars\":[\"columnsWithFooter\",\"rows\",\"footerRows\",\"-assert-implicit-component-helper-argument\",\"component\",\"columnsWithFixed\",\"columns\",\"docs-demo\"]}",
    "moduleName": "dummy/pods/docs/guides/header/scroll-indicators/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/header/size-constraints/controller", ["exports", "dummy/utils/generators"], function (_exports, _generators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // eslint-disable-line no-restricted-imports
  const defaultResizeMode = {
    'eq-container': 'fluid',
    'eq-container-slack': 'standard',
    'gte-container': 'standard',
    'gte-container-slack': 'standard',
    'lte-container': 'standard'
  };

  var _default = Ember.Controller.extend({
    rows: Ember.computed(function () {
      return (0, _generators.generateRows)(100);
    }),
    widthConstraint: 'eq-container',
    fillMode: 'equal-column',
    resizeMode: 'fluid',

    init() {
      this._super(...arguments);

      Ember.addObserver(this, 'widthConstraint', this.setDefaultResizeMode);
    },

    setDefaultResizeMode() {
      let widthConstraint = this.get('widthConstraint');
      let resizeMode = defaultResizeMode[widthConstraint];

      if (resizeMode) {
        this.set('resizeMode', resizeMode);
      }
    },

    // BEGIN-SNIPPET docs-example-header-size-constraints.js
    columns: Ember.computed(function () {
      return [{
        name: 'A',
        valuePath: 'A'
      }, {
        name: 'B',
        valuePath: 'B'
      }, {
        name: 'C',
        valuePath: 'C'
      }, {
        name: 'D',
        valuePath: 'D'
      }];
    }) // END-SNIPPET

  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/header/size-constraints/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Y+bEkQHC",
    "block": "{\"symbols\":[\"demo\",\"t\",\"demo\",\"t\",\"demo\",\"t\"],\"statements\":[[10,\"div\"],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"size-constraints\"],[14,0,\"docs-md__h1\"],[12],[2,\"Size Constraints\"],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"You can set the \"],[10,\"code\"],[12],[2,\"widthConstraint\"],[13],[2,\" property on your table to ensure that it never\\ngrows too big or too small. There are six possible settings:\"],[13],[2,\"\\n\\n        \"],[10,\"ol\"],[14,0,\"docs-list-decimal\"],[12],[10,\"li\"],[12],[10,\"p\"],[12],[10,\"code\"],[12],[2,\"eq-container\"],[13],[2,\": Ensures that the table is always exactly the width the of its\\ncontainer.\"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[10,\"p\"],[12],[10,\"code\"],[12],[2,\"eq-container-slack\"],[13],[2,\": Similar to \"],[10,\"code\"],[12],[2,\"eq-container\"],[13],[2,\", but allocates excess whitespace to an empty \\\"slack\\\" column on the right side of the table.\"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[10,\"p\"],[12],[10,\"code\"],[12],[2,\"gte-container\"],[13],[2,\": Ensures that the table is always the same width or larger than its container.\"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[10,\"p\"],[12],[10,\"code\"],[12],[2,\"gte-container-slack\"],[13],[2,\": Similar to \"],[10,\"code\"],[12],[2,\"gte-container\"],[13],[2,\", but allocates excess whitespace to an empty \\\"slack\\\" column on the right side of the table.\"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[10,\"p\"],[12],[10,\"code\"],[12],[2,\"lte-container\"],[13],[2,\": Ensures that the table is never larger than its container.\"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[10,\"p\"],[12],[10,\"code\"],[12],[2,\"none\"],[13],[2,\": The default, does not enforce any size constraint.\"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[13],[2,\"\\n      \"],[10,\"p\"],[12],[2,\"The table will react to resizing its container automatically. Sizing will \"],[10,\"em\"],[12],[2,\"not\"],[13],[2,\"\\noverride the min/max widths provided by columns.\"],[13],[2,\"\\n\"],[10,\"aside\"],[12],[2,\"\\n  `eq-container` mode should generally be paired with `resizeMode='fluid'` to\\n  get a more natural resize effect. This is useful for tables that must fit\\n  a constrained space, like tables in a powerpoint.\\n  \"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[2,\"\\n  Most other modes should be paired with `resizeMode='standard'` to achieve an effect similar to most spreadsheet applications, where resizing one column does not typically change the size of the others.\\n  \"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[2,\"\\n  If you need to make a small adjustment to the container width (such as to\\n  account for a customized scrollbar that would cover some portion of the\\n  container width), set `containerWidthAdjustment` to a numerical value equal to\\n  the amount you need the measured container width to be adjusted.\\n\"],[13],[2,\"\\n\\n\"],[10,\"p\"],[12],[6,[37,8],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[32,5,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/header/size-constraints/template.hbs' @ L35:C5) \"],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"h6\"],[14,0,\"demo-options-heading\"],[12],[2,\"Width Constraint\"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"demo-options\"],[12],[2,\"\\n      \"],[10,\"label\"],[12],[2,\"\\n        eq-container\\n        \"],[1,[30,[36,5],null,[[\"name\",\"value\",\"groupValue\"],[\"width-constraint\",\"eq-container\",[35,6]]]]],[2,\"\\n      \"],[13],[2,\"   \"],[10,\"label\"],[12],[2,\"\\n    eq-container-slack\\n    \"],[1,[30,[36,5],null,[[\"name\",\"value\",\"groupValue\"],[\"width-constraint\",\"eq-container-slack\",[35,6]]]]],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"label\"],[12],[2,\"\\n    gte-container\\n    \"],[1,[30,[36,5],null,[[\"name\",\"value\",\"groupValue\"],[\"width-constraint\",\"gte-container\",[35,6]]]]],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"label\"],[12],[2,\"\\n    gte-container-slack\\n    \"],[1,[30,[36,5],null,[[\"name\",\"value\",\"groupValue\"],[\"width-constraint\",\"gte-container-slack\",[35,6]]]]],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"label\"],[12],[2,\"\\n    lte-container\\n    \"],[1,[30,[36,5],null,[[\"name\",\"value\",\"groupValue\"],[\"width-constraint\",\"lte-container\",[35,6]]]]],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"label\"],[12],[2,\"\\n    none\\n    \"],[1,[30,[36,5],null,[[\"name\",\"value\",\"groupValue\"],[\"width-constraint\",\"none\",[35,6]]]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"h6\"],[14,0,\"demo-options-heading\"],[12],[2,\"Resize Mode\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"demo-options\"],[12],[2,\"\\n  \"],[10,\"label\"],[12],[2,\"\\n    standard\\n    \"],[1,[30,[36,5],null,[[\"name\",\"value\",\"groupValue\"],[\"resize-mode\",\"standard\",[35,7]]]]],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"label\"],[12],[2,\"\\n    fluid\\n    \"],[1,[30,[36,5],null,[[\"name\",\"value\",\"groupValue\"],[\"resize-mode\",\"fluid\",[35,7]]]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"div\"],[14,0,\"resize-container\"],[12],[2,\"\\n  \"],[8,\"ember-table\",[[24,0,\"vertical-borders\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,[32,6,[\"head\"]],[],[[\"@columns\",\"@widthConstraint\",\"@resizeMode\",\"@scrollIndicators\"],[[34,0],[34,6],[34,7],\"horizontal\"]],null],[2,\"\\n\\n    \"],[8,[32,6,[\"body\"]],[],[[\"@rows\"],[[34,1]]],null],[2,\"\\n  \"]],\"parameters\":[6]}]]],[2,\"\\n\"],[13],[2,\"\\n\"],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,3],[[30,[36,2],[[32,5,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/size-constraints/template.hbs' @ L93:C43) \"],null]],[[\"name\"],[\"docs-example-header-size-constraint.hbs\"]]]],[2,\"\\n\"]],\"parameters\":[5]}]]],[13],[2,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"fill-mode\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#fill-mode\"],[14,0,\"heading-anchor\"],[12],[2,\"Fill Mode\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"You can also set the fill mode for when a table is resizing to fit the width\\nconstraint. The options are:\"],[13],[2,\"\\n\\n        \"],[10,\"ul\"],[14,0,\"docs-list-disc\"],[12],[10,\"li\"],[12],[10,\"p\"],[12],[10,\"code\"],[12],[2,\"equal-column\"],[13],[2,\": The default, spreads delta across all columns equally\"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[10,\"p\"],[12],[10,\"code\"],[12],[2,\"first-column\"],[13],[2,\": Puts the delta in the first column\"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[10,\"p\"],[12],[10,\"code\"],[12],[2,\"last-column\"],[13],[2,\": Puts the delta in the first column\"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[10,\"p\"],[12],[10,\"code\"],[12],[2,\"nth-column\"],[13],[2,\": Puts the delta in the nth column as defined by \"],[10,\"code\"],[12],[2,\"fillColumnIndex\"],[13],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[13],[2,\"\\n      \"],[10,\"p\"],[12],[6,[37,8],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[32,3,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/header/size-constraints/template.hbs' @ L110:C5) \"],null]],[[\"name\"],[\"docs-example-header-fill-mode\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-options\"],[12],[2,\"\\n      \"],[10,\"label\"],[12],[2,\"\\n        equal-column\\n        \"],[1,[30,[36,5],null,[[\"name\",\"value\",\"groupValue\"],[\"fill-mode\",\"equal-column\",[35,4]]]]],[2,\"\\n      \"],[13],[2,\"   \"],[10,\"label\"],[12],[2,\"\\n    first-column\\n    \"],[1,[30,[36,5],null,[[\"name\",\"value\",\"groupValue\"],[\"fill-mode\",\"first-column\",[35,4]]]]],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"label\"],[12],[2,\"\\n    last-column\\n    \"],[1,[30,[36,5],null,[[\"name\",\"value\",\"groupValue\"],[\"fill-mode\",\"last-column\",[35,4]]]]],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"label\"],[12],[2,\"\\n    nth-column\\n    \"],[1,[30,[36,5],null,[[\"name\",\"value\",\"groupValue\"],[\"fill-mode\",\"nth-column\",[35,4]]]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"div\"],[14,0,\"resize-container\"],[12],[2,\"\\n  \"],[8,\"ember-table\",[[24,0,\"vertical-borders\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,[32,4,[\"head\"]],[],[[\"@columns\",\"@widthConstraint\",\"@resizeMode\",\"@fillMode\",\"@fillColumnIndex\",\"@scrollIndicators\"],[[34,0],\"eq-container\",\"fluid\",[34,4],\"1\",\"horizontal\"]],null],[2,\"\\n\\n    \"],[8,[32,4,[\"body\"]],[],[[\"@rows\"],[[34,1]]],null],[2,\"\\n  \"]],\"parameters\":[4]}]]],[2,\"\\n\"],[13],[2,\"\\n\"],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,3],[[30,[36,2],[[32,3,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/size-constraints/template.hbs' @ L146:C43) \"],null]],[[\"name\"],[\"docs-example-header-fill-mode.hbs\"]]]],[2,\"\\n\"]],\"parameters\":[3]}]]],[13],[2,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"initial-fill-mode\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#initial-fill-mode\"],[14,0,\"heading-anchor\"],[12],[2,\"Initial Fill Mode\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"When the width constraint is set to \"],[10,\"code\"],[12],[2,\"eq-container-slack\"],[13],[2,\" or \"],[10,\"code\"],[12],[2,\"gte-container-slack\"],[13],[2,\", you may also set an \"],[10,\"em\"],[12],[2,\"initial\"],[13],[2,\" fill mode that is used to size the columns when the table is first rendered. This setting has no effect when combined with other width constraints.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"The \"],[10,\"code\"],[12],[2,\"initialFillMode\"],[13],[2,\" property can be set to any of the allowed values for \"],[10,\"code\"],[12],[2,\"fillMode\"],[13],[2,\", but it defaults to \"],[10,\"code\"],[12],[2,\"none\"],[13],[2,\".\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"This table summarizes which fill mode properties are used by each width constraint:\"],[13],[2,\"\\n\"],[10,\"table\"],[14,0,\"info-table\"],[12],[2,\"\\n  \"],[10,\"thead\"],[12],[2,\"\\n    \"],[10,\"th\"],[12],[2,\"widthContraint\"],[13],[2,\"\\n    \"],[10,\"th\"],[12],[2,\"fillMode\"],[13],[2,\"\\n    \"],[10,\"th\"],[12],[2,\"initialFillMode\"],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"tbody\"],[12],[2,\"\\n    \"],[10,\"tr\"],[12],[2,\"\\n      \"],[10,\"td\"],[12],[2,\"eq-container\"],[13],[2,\"\\n      \"],[10,\"td\"],[14,0,\"center highlight\"],[12],[2,\"Y\"],[13],[2,\"\\n      \"],[10,\"td\"],[14,0,\"center\"],[12],[2,\"N\"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"tr\"],[12],[2,\"\\n      \"],[10,\"td\"],[12],[2,\"eq-container-slack\"],[13],[2,\"\\n      \"],[10,\"td\"],[14,0,\"center highlight\"],[12],[2,\"Y\"],[13],[2,\"\\n      \"],[10,\"td\"],[14,0,\"center highlight\"],[12],[2,\"Y\"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"tr\"],[12],[2,\"\\n      \"],[10,\"td\"],[12],[2,\"gte-container\"],[13],[2,\"\\n      \"],[10,\"td\"],[14,0,\"center highlight\"],[12],[2,\"Y\"],[13],[2,\"\\n      \"],[10,\"td\"],[14,0,\"center\"],[12],[2,\"N\"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"tr\"],[12],[2,\"\\n      \"],[10,\"td\"],[12],[2,\"gte-container-slack\"],[13],[2,\"\\n      \"],[10,\"td\"],[14,0,\"center\"],[12],[2,\"N\"],[13],[2,\"\\n      \"],[10,\"td\"],[14,0,\"center highlight\"],[12],[2,\"Y\"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"tr\"],[12],[2,\"\\n      \"],[10,\"td\"],[12],[2,\"lte-container\"],[13],[2,\"\\n      \"],[10,\"td\"],[14,0,\"center highlight\"],[12],[2,\"Y\"],[13],[2,\"\\n      \"],[10,\"td\"],[14,0,\"center\"],[12],[2,\"N\"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"tr\"],[12],[2,\"\\n      \"],[10,\"td\"],[12],[2,\"none\"],[13],[2,\"\\n      \"],[10,\"td\"],[14,0,\"center\"],[12],[2,\"N\"],[13],[2,\"\\n      \"],[10,\"td\"],[14,0,\"center\"],[12],[2,\"N\"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"p\"],[12],[2,\"Note that \"],[10,\"code\"],[12],[2,\"eq-container-slack\"],[13],[2,\" uses both \"],[10,\"code\"],[12],[2,\"fillMode\"],[13],[2,\" \"],[10,\"em\"],[12],[2,\"and\"],[13],[2,\" \"],[10,\"code\"],[12],[2,\"initialFillMode\"],[13],[2,\". The former is used to enforce the width constraint when the columns are resized beyond the width of the container, while the latter is used only to size the columns at initial render.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"In this example, \"],[10,\"code\"],[12],[2,\"eq-container-slack\"],[13],[2,\" is combined with \"],[10,\"code\"],[12],[2,\"equal-column\"],[13],[2,\" fill mode and \"],[10,\"code\"],[12],[2,\"first-column\"],[13],[2,\" initial fill mode. At render, excess whitespace is allocated to the first column. When any column is resized such that the total width of the columns exceeds the container, each column is shrunk equally to satisfy the width constraint.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[6,[37,8],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[32,1,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/header/size-constraints/template.hbs' @ L196:C5) \"],null]],[[\"name\"],[\"docs-example-header-initial-fill-mode\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"resize-container w-100\"],[12],[2,\"\\n      \"],[8,\"ember-table\",[[24,0,\"vertical-borders\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,2,[\"head\"]],[],[[\"@columns\",\"@widthConstraint\",\"@fillMode\",\"@initialFillMode\"],[[34,0],\"eq-container-slack\",\"equal-column\",\"first-column\"]],null],[2,\"     \"],[8,[32,2,[\"body\"]],[],[[\"@rows\"],[[34,1]]],null],[2,\"\\n  \"]],\"parameters\":[2]}]]],[2,\"\\n\"],[13],[2,\"\\n\"],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,3],[[30,[36,2],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/size-constraints/template.hbs' @ L208:C43) \"],null]],[[\"name\"],[\"docs-example-header-initial-fill-mode.hbs\"]]]],[2,\"\\n\"]],\"parameters\":[1]}]]],[13],[13]],\"hasEval\":false,\"upvars\":[\"columns\",\"rows\",\"-assert-implicit-component-helper-argument\",\"component\",\"fillMode\",\"radio-button\",\"widthConstraint\",\"resizeMode\",\"docs-demo\"]}",
    "moduleName": "dummy/pods/docs/guides/header/size-constraints/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/header/sorting/controller", ["exports", "faker", "dummy/utils/generators"], function (_exports, _faker, _generators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    // BEGIN-SNIPPET docs-example-sortings.js
    columns: Ember.computed(function () {
      return [{
        name: 'Company ▸ Department ▸ Product',
        valuePath: 'name'
      }, {
        name: 'Price',
        valuePath: 'price'
      }, {
        name: 'Sold',
        valuePath: 'sold'
      }, {
        name: 'Unsold',
        valuePath: 'unsold'
      }, {
        name: 'Total Revenue',
        valuePath: 'totalRevenue'
      }];
    }),
    // END-SNIPPET
    rows: Ember.computed(function () {
      let rows = [];

      for (let i = 0; i < (0, _generators.getRandomInt)(5, 2); i++) {
        let companyRow = {
          name: _faker.default.company.companyName(),
          price: 'N/A',
          sold: 0,
          unsold: 0,
          totalRevenue: 0,
          children: []
        };

        for (let j = 0; j < (0, _generators.getRandomInt)(5, 2); j++) {
          let departmentRow = {
            name: _faker.default.commerce.department(),
            price: 'N/A',
            sold: 0,
            unsold: 0,
            totalRevenue: 0,
            children: []
          };

          for (let k = 0; k < (0, _generators.getRandomInt)(100, 10); k++) {
            let sold = (0, _generators.getRandomInt)(100, 10);
            let unsold = (0, _generators.getRandomInt)(100, 10);
            let price = (0, _generators.getRandomInt)(50, 10);
            let totalRevenue = price * sold;
            let product = {
              name: _faker.default.commerce.productName(),
              price: `$${price}`,
              sold,
              unsold,
              totalRevenue: `$${totalRevenue}`
            };
            departmentRow.sold += sold;
            departmentRow.unsold += unsold;
            departmentRow.totalRevenue += totalRevenue;
            departmentRow.children.push(product);
          }

          companyRow.sold += departmentRow.sold;
          companyRow.unsold += departmentRow.unsold;
          companyRow.totalRevenue += departmentRow.totalRevenue;
          departmentRow.totalRevenue = `$${departmentRow.totalRevenue}`;
          companyRow.children.push(departmentRow);
        }

        companyRow.totalRevenue = `$${companyRow.totalRevenue}`;
        rows.push(companyRow);
      }

      return rows;
    }),
    // BEGIN-SNIPPET docs-example-2-state-sortings.js
    actions: {
      twoStateSorting(sorts) {
        if (sorts.length > 1) {
          // multi-column sort, default behavior
          this.set('sorts', sorts);
          return;
        }

        let hasExistingSort = this.sorts && this.sorts.length;
        let isDefaultSort = !sorts.length;

        if (hasExistingSort && isDefaultSort) {
          // override empty sorts with reversed previous sort
          let newSorts = [{
            valuePath: this.sorts[0].valuePath,
            isAscending: !this.sorts[0].isAscending
          }];
          this.set('sorts', newSorts);
          return;
        }

        this.set('sorts', sorts);
      }

    } // END-SNIPPET

  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/header/sorting/empty-values/component", ["exports", "faker", "dummy/utils/generators"], function (_exports, _faker, _generators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    // BEGIN-SNIPPET docs-example-sorting-empty-values.js
    columns: Ember.computed(function () {
      return [{
        name: 'Product',
        valuePath: 'name'
      }, {
        name: 'Material',
        valuePath: 'material'
      }, {
        name: 'Price',
        valuePath: 'price'
      }, {
        name: 'Sold',
        valuePath: 'sold'
      }, {
        name: 'Unsold',
        valuePath: 'unsold'
      }, {
        name: 'Total Revenue',
        valuePath: 'totalRevenue'
      }];
    }),
    sortEmptyLast: true,
    // END-SNIPPET
    rows: Ember.computed(function () {
      let rows = [];

      for (let k = 0; k < 10; k++) {
        let sold = (0, _generators.getRandomInt)(100, 10);
        let unsold = (0, _generators.getRandomInt)(100, 10);
        let price = (0, _generators.getRandomInt)(50, 10);
        let totalRevenue = price * sold;
        let product = {
          name: _faker.default.commerce.productName(),
          material: _faker.default.commerce.productMaterial(),
          price: `$${price}`,
          sold,
          unsold,
          totalRevenue: `$${totalRevenue}`
        };
        rows.push(product);
      }

      for (let k = 0; k < 5; k++) {
        let sold = (0, _generators.getRandomInt)(100, 10);
        let unsold = (0, _generators.getRandomInt)(100, 10);
        let price = (0, _generators.getRandomInt)(50, 10);
        let totalRevenue = price * sold;
        let product = {
          name: _faker.default.commerce.productName(),
          material: '',
          price: `$${price}`,
          sold,
          unsold,
          totalRevenue: `$${totalRevenue}`
        };
        rows.push(product);
      }

      return rows;
    })
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/header/sorting/empty-values/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "lFmRZh2X",
    "block": "{\"symbols\":[\"demo\",\"t\"],\"statements\":[[6,[37,9],null,null,[[\"default\"],[{\"statements\":[[6,[37,8],[[30,[36,7],[[32,1,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/header/sorting/empty-values/template.hbs' @ L2:C5) \"],null]],[[\"name\"],[\"sorting-empty-values\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-options\"],[12],[2,\"\\n      \"],[10,\"label\"],[12],[2,\"\\n        \"],[1,[30,[36,1],null,[[\"type\",\"checked\"],[\"checkbox\",[35,0]]]]],[2,\"\\n        Sort Empty Last\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"demo-container\"],[12],[2,\"\\n      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,2,[\"head\"]],[],[[\"@columns\",\"@sorts\",\"@sortEmptyLast\",\"@onUpdateSorts\",\"@widthConstraint\",\"@fillMode\"],[[34,2],[34,3],[34,0],[30,[36,5],[[32,0],[30,[36,4],[[35,3]],null]],null],\"gte-container\",\"first-column\"]],null],[2,\"\\n\\n        \"],[8,[32,2,[\"body\"]],[],[[\"@rows\"],[[34,6]]],null],[2,\"\\n      \"]],\"parameters\":[2]}]]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[1,[30,[36,8],[[30,[36,7],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/sorting/empty-values/template.hbs' @ L29:C4) \"],null]],[[\"name\"],[\"docs-example-sorting-empty-values.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,8],[[30,[36,7],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/sorting/empty-values/template.hbs' @ L30:C4) \"],null]],[[\"label\",\"name\"],[\"component.js\",\"docs-example-sorting-empty-values.js\"]]]],[2,\"\\n\"]],\"parameters\":[1]}]]]],\"hasEval\":false,\"upvars\":[\"sortEmptyLast\",\"input\",\"columns\",\"sorts\",\"mut\",\"action\",\"rows\",\"-assert-implicit-component-helper-argument\",\"component\",\"docs-demo\"]}",
    "moduleName": "dummy/pods/docs/guides/header/sorting/empty-values/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/header/sorting/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "gfEfXY93",
    "block": "{\"symbols\":[\"demo\",\"t\",\"t\",\"demo\",\"t\"],\"statements\":[[10,\"div\"],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"sorting\"],[14,0,\"docs-md__h1\"],[12],[2,\"Sorting\"],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Ember Table ships with sorting built in to the table. Default sorting is a\\nstandard merge sort which does not affect the original ordering of the rows\\npassed into the table. Users can sort by a column and toggle sort direction by\\nclicking on its header, and can sort by multiple columns by clicking with \"],[10,\"code\"],[12],[2,\"cmd\"],[13],[2,\"\\nor \"],[10,\"code\"],[12],[2,\"ctrl\"],[13],[2,\".\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[6,[37,7],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,5],[[30,[36,4],[[32,4,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/header/sorting/template.hbs' @ L8:C5) \"],null]],[[\"name\"],[\"docs-example-sortings\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container\"],[12],[2,\"\\n      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,5,[\"head\"]],[],[[\"@columns\",\"@sorts\",\"@onUpdateSorts\",\"@widthConstraint\",\"@fillMode\"],[[34,0],[34,1],[30,[36,2],[[32,0],[30,[36,6],[[35,1]],null]],null],\"gte-container\",\"first-column\"]],null],[2,\"\\n\\n    \"],[8,[32,5,[\"body\"]],[],[[\"@rows\"],[[34,3]]],null],[2,\"\\n  \"]],\"parameters\":[5]}]]],[2,\"\\n\"],[13],[2,\"\\n\"],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,5],[[30,[36,4],[[32,4,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/sorting/template.hbs' @ L23:C43) \"],null]],[[\"name\"],[\"docs-example-sortings.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,5],[[30,[36,4],[[32,4,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/sorting/template.hbs' @ L24:C4) \"],null]],[[\"label\",\"name\"],[\"component.js\",\"docs-example-sortings.js\"]]]],[2,\"\\n\"]],\"parameters\":[4]}]]],[2,\" Activating Sorting Sorting in tables is a DDAU process - a new sort order is passed to\\n\"],[10,\"code\"],[12],[2,\"onUpdateSorts\"],[13],[2,\" and can then be passed back into the table, updating the sort\\norder. Because sorting cannot occur without the \"],[10,\"code\"],[12],[2,\"onUpdateSorts\"],[13],[2,\" action, it will\\neffectively be disabled unless the action is set - headers will not be\\nclickable, and nothing will change when users select them. The sort order is passed into the table via the \"],[10,\"code\"],[12],[2,\"sorts\"],[13],[2,\" argument. This should be\\nan array of sort objects should correspond to any of the \"],[10,\"code\"],[12],[2,\"valuePaths\"],[13],[2,\" in the\\ncolumns for the table. When multiple sort objects are passed, columns are sorted\\nby each sort in order: let sorts = [\\n  {\\n    valuePath: 'name',\\n    isAscending: false,\\n  },\\n  {\\n    valuePath: 'price',\\n    isAscending: true,\\n  },\\n] Note that you can control the sort order externally this way as well, for\\ninstance if you have a different UX than clicking on headers to control the sort\\norder. Table headers can be passed a \"],[10,\"code\"],[12],[2,\"sortFunction\"],[13],[2,\" and \"],[10,\"code\"],[12],[2,\"compareFunction\"],[13],[2,\" as well. If\\nyou want to sort the content of the table asynchronously, you can unset the\\n\"],[10,\"code\"],[12],[2,\"sortFunction\"],[13],[2,\" and handle the async request yourself. \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[8,[32,3,[\"head\"]],[[24,\"sortFunction\",\"null\"]],[[],[]],null],[2,\"\\n\"]],\"parameters\":[3]}]]],[2,\" Disabling Sorting As mentioned before, sorting is disabled by default unless the table is given an\\n\"],[10,\"code\"],[12],[2,\"onUpdateSorts\"],[13],[2,\" action. Sorting can also be disabled by setting the \"],[10,\"code\"],[12],[2,\"isSortable\"],[13],[2,\"\\noption on a particular column to \"],[10,\"code\"],[12],[2,\"false\"],[13],[2,\": let columns = [\\n  {\\n    valuePath: 'name',\\n    isSortable: false,\\n  }\\n]; Sorting States By default, when a user repeatedly clicks on a column header to change sorting, ember-table\\ncycles through these states: Unsorted (rows are in the same order as provided to the table) Sort Descending Sort Ascending You can use the \"],[10,\"code\"],[12],[2,\"onUpdateSorts\"],[13],[2,\" action to change this behavior. For example, to cycle through 2 states\\n(Ascending, Descending) rather than the default 3, you can modify the \"],[10,\"code\"],[12],[2,\"onUpdateSorts\"],[13],[2,\" action as follows: If it is passed an empty \"],[10,\"code\"],[12],[2,\"sorts\"],[13],[2,\" array, get the current sort array and toggle the \"],[10,\"code\"],[12],[2,\"isAscending\"],[13],[2,\" property If it is passed anything else, set \"],[10,\"code\"],[12],[2,\"this.sorts\"],[13],[2,\" to the passed-in \"],[10,\"code\"],[12],[2,\"sorts\"],[13],[2,\" array (default behavior). This demo shows that in action: \"],[6,[37,7],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,5],[[30,[36,4],[[32,1,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/header/sorting/template.hbs' @ L59:C5) \"],null]],[[\"name\"],[\"docs-example-2-state-sortings\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container\"],[12],[2,\"\\n      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,2,[\"head\"]],[],[[\"@columns\",\"@sorts\",\"@onUpdateSorts\",\"@widthConstraint\",\"@fillMode\"],[[34,0],[34,1],[30,[36,2],[[32,0],\"twoStateSorting\"],null],\"gte-container\",\"first-column\"]],null],[2,\"\\n\\n    \"],[8,[32,2,[\"body\"]],[],[[\"@rows\"],[[34,3]]],null],[2,\"\\n  \"]],\"parameters\":[2]}]]],[2,\"\\n\"],[13],[2,\"\\n\"],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,5],[[30,[36,4],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/sorting/template.hbs' @ L74:C43) \"],null]],[[\"name\"],[\"docs-example-2-state-sortings.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,5],[[30,[36,4],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/sorting/template.hbs' @ L75:C4) \"],null]],[[\"label\",\"name\"],[\"component.js\",\"docs-example-2-state-sortings.js\"]]]],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\" Sorting empty values Empty values can be treated differently depending on the needs by using the \"],[10,\"code\"],[12],[2,\"sortEmptyLast\"],[13],[2,\" option.\\nTo see its effect, try sorting the \\\"Material\\\" column in ascending order with and without \\\"sortEmptyLast\\\" checked. \"],[1,[34,8]],[13],[13]],\"hasEval\":false,\"upvars\":[\"columns\",\"sorts\",\"action\",\"rows\",\"-assert-implicit-component-helper-argument\",\"component\",\"mut\",\"docs-demo\",\"docs/guides/header/sorting/empty-values\"]}",
    "moduleName": "dummy/pods/docs/guides/header/sorting/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/header/subcolumns/controller", ["exports", "dummy/utils/generators"], function (_exports, _generators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const COLUMN_COUNT = 4;

  var _default = Ember.Controller.extend({
    rows: Ember.computed(function () {
      return (0, _generators.generateRows)(100);
    }),
    // BEGIN-SNIPPET docs-example-subcolumns.js
    simpleColumns: Ember.computed(function () {
      return [{
        name: 'A',
        subcolumns: [{
          name: 'A A',
          valuePath: 'A A'
        }, {
          name: 'A B',
          valuePath: 'A B'
        }, {
          name: 'A C',
          valuePath: 'A C'
        }]
      }, {
        name: 'B',
        subcolumns: [{
          name: 'B A',
          valuePath: 'B A'
        }, {
          name: 'B B',
          valuePath: 'B B'
        }, {
          name: 'B C',
          valuePath: 'B C'
        }]
      }, {
        name: 'C',
        subcolumns: [{
          name: 'C A',
          valuePath: 'C A'
        }, {
          name: 'C B',
          valuePath: 'C B'
        }, {
          name: 'C C',
          valuePath: 'C C'
        }]
      }];
    }),
    // END-SNIPPET
    complexColumns: Ember.computed(function () {
      let columns = Ember.A();

      for (let i = 0; i < COLUMN_COUNT; i++) {
        let column = (0, _generators.generateColumn)(i, {
          subcolumns: []
        });

        if (Math.random() > 0.5) {
          for (let j = 0; j < COLUMN_COUNT - 1; j++) {
            let subcolumn = (0, _generators.generateColumn)([i, j], {
              subcolumns: []
            });

            if (Math.random() > 0.5) {
              for (let k = 0; k < COLUMN_COUNT - 2; k++) {
                subcolumn.subcolumns.push((0, _generators.generateColumn)([i, j, k]));
              }
            }

            column.subcolumns.push(subcolumn);
          }
        }

        columns.pushObject(column);
      }

      return columns;
    })
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/header/subcolumns/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "0lK0lkR0",
    "block": "{\"symbols\":[\"t\",\"demo\",\"t\"],\"statements\":[[10,\"div\"],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"subcolumns\"],[14,0,\"docs-md__h1\"],[12],[2,\"Subcolumns\"],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Columns can have an array of \"],[10,\"code\"],[12],[2,\"subcolumns\"],[13],[2,\", which should be objects that are\\nexactly the same as any other column. Subcolumns can have their own subcolumns,\\nand when rendering the rows of the table, cells will be matched up with the\\nlowest level of subcolumns (the leaves of the column tree). This means that\\n\"],[10,\"code\"],[12],[2,\"valuePath\"],[13],[2,\" is optional for columns that have subcolumns.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[6,[37,4],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[32,2,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/header/subcolumns/template.hbs' @ L8:C5) \"],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container small\"],[12],[2,\"\\n\"],[2,\"        \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[8,[32,3,[\"head\"]],[],[[\"@columns\"],[[34,0]]],null],[2,\"       \"],[8,[32,3,[\"body\"]],[],[[\"@rows\"],[[34,1]]],null],[2,\"\\n    \"]],\"parameters\":[3]}]]],[2,\"\\n\"],[13],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,3],[[30,[36,2],[[32,2,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/subcolumns/template.hbs' @ L15:C31) \"],null]],[[\"name\"],[\"docs-example-subcolumns.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,3],[[30,[36,2],[[32,2,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/header/subcolumns/template.hbs' @ L16:C4) \"],null]],[[\"name\",\"label\"],[\"docs-example-subcolumns.js\",\"component.js\"]]]],[2,\"\\n\"]],\"parameters\":[2]}]]],[13],[2,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"resizing-and-reordering\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#resizing-and-reordering\"],[14,0,\"heading-anchor\"],[12],[2,\"Resizing and Reordering\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Subcolumns can be resized like any other column. When resizing a column with\\nsubcolumns, changes in width will be spread throughout the subcolumns.\\nSubcolumns can only be reordered within their group - it is not currently\\npossible to reorder move columns around arbitrarily.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"Columns do not need to have the same numbers of subcolumns, they can mix and\\nmatch as much as you would like. This table's columns have generated completely\\nrandomly, demonstrating the flexibility of subcolumns.\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"demo-container\"],[12],[2,\"\\n  \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,[32,1,[\"head\"]],[],[[\"@columns\"],[[34,5]]],null],[2,\"\\n\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[12],[2,\"<t.body @rows={{rows}} />\"],[13],[13],[2,\"  \"]],\"parameters\":[1]}]]],[2,\"\\n\\n \"],[13],[13]],\"hasEval\":false,\"upvars\":[\"simpleColumns\",\"rows\",\"-assert-implicit-component-helper-argument\",\"component\",\"docs-demo\",\"complexColumns\"]}",
    "moduleName": "dummy/pods/docs/guides/header/subcolumns/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/main/basic-table/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    // BEGIN-SNIPPET docs-example-basic-table.js
    columns: Ember.computed(function () {
      return [{
        name: 'A',
        valuePath: 'A',
        width: 180
      }, {
        name: 'B',
        valuePath: 'B',
        width: 180
      }, {
        name: 'C',
        valuePath: 'C',
        width: 180
      }, {
        name: 'D',
        valuePath: 'D',
        width: 180
      }];
    }),
    rows: Ember.computed(function () {
      return [{
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }];
    }) // END-SNIPPET

  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/main/basic-table/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "mjm+2fHz",
    "block": "{\"symbols\":[\"demo\",\"t\",\"b\",\"r\",\"value\",\"h\",\"r\",\"column\",\"demo\",\"t\"],\"statements\":[[10,\"div\"],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"a-basic-table\"],[14,0,\"docs-md__h1\"],[12],[2,\"A Basic Table\"],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Tables can get very complicated, and it's not easy to have a table API that is\\npowerful, flexible, and succinct. Ember Table makes this tradeoff by providing a\\nvery flexible API, but at the cost of being fairly verbose. Because this table\\nis meant for power users who need a lot of functionality and flexibility, this\\ntradeoff generally makes sense.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"The table has a set of sane defaults. If you don't need much customization,\\nsetting up a minimal instance of Ember Table will only require you to define a\\nheader and a body, with columns and rows passed to it.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[6,[37,4],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[32,9,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/main/basic-table/template.hbs' @ L11:C5) \"],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container\"],[12],[2,\"\\n\"],[2,\"      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,10,[\"head\"]],[],[[\"@columns\"],[[34,0]]],null],[2,\"     \"],[8,[32,10,[\"body\"]],[],[[\"@rows\"],[[34,1]]],null],[2,\"\\n  \"]],\"parameters\":[10]}]]],[2,\"\\n\"],[13],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,3],[[30,[36,2],[[32,9,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/main/basic-table/template.hbs' @ L18:C31) \"],null]],[[\"name\"],[\"docs-example-basic-table.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,3],[[30,[36,2],[[32,9,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/main/basic-table/template.hbs' @ L19:C4) \"],null]],[[\"label\",\"name\"],[\"component.js\",\"docs-example-basic-table.js\"]]]],[2,\"\\n\"]],\"parameters\":[9]}]]],[2,\" High Level Structure At a high level, the structure of Ember Table is meant to mimic the structure of\\nHTML tables directly. This allows you to customize each element in the table;\\nyou can add class names, setup actions, and handle events anywhere. This example demonstrates the same table as above, but with each level yielded. \"],[6,[37,4],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[32,1,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/main/basic-table/template.hbs' @ L23:C5) \"],null]],[[\"name\"],[\"expanded\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container\"],[12],[2,\"\\n\"],[2,\"      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,2,[\"head\"]],[],[[\"@columns\"],[[34,0]]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[8,[32,6,[\"row\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[8,[32,7,[\"cell\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n              \"],[1,[32,8,[\"name\"]]],[2,\"\\n            \"]],\"parameters\":[8]}]]],[2,\"\\n          \"]],\"parameters\":[7]}]]],[2,\"\\n        \"]],\"parameters\":[6]}]]],[2,\"     \"],[8,[32,2,[\"body\"]],[],[[\"@rows\"],[[34,1]]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[8,[32,3,[\"row\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,4,[\"cell\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,5]],[2,\"\\n        \"]],\"parameters\":[5]}]]],[2,\"\\n      \"]],\"parameters\":[4]}]]],[2,\"\\n    \"]],\"parameters\":[3]}]]],[2,\"\\n  \"]],\"parameters\":[2]}]]],[2,\"\\n\"],[13],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,3],[[30,[36,2],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/main/basic-table/template.hbs' @ L42:C31) \"],null]],[[\"name\"],[\"docs-example-basic-expanded-table.hbs\"]]]],[2,\"\\n\"]],\"parameters\":[1]}]]],[13],[13]],\"hasEval\":false,\"upvars\":[\"columns\",\"rows\",\"-assert-implicit-component-helper-argument\",\"component\",\"docs-demo\"]}",
    "moduleName": "dummy/pods/docs/guides/main/basic-table/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/main/legacy-usage/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    // BEGIN-SNIPPET docs-example-basic-table.js
    columns: Ember.computed(function () {
      return [{
        name: 'A',
        valuePath: 'A',
        width: 180
      }, {
        name: 'B',
        valuePath: 'B',
        width: 180
      }, {
        name: 'C',
        valuePath: 'C',
        width: 180
      }, {
        name: 'D',
        valuePath: 'D',
        width: 180
      }];
    }),
    rows: Ember.computed(function () {
      return [{
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }];
    }) // END-SNIPPET

  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/main/legacy-usage/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "vuKeryTZ",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"legacy-usage\"],[14,0,\"docs-md__h1\"],[12],[2,\"Legacy Usage\"],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Ember Table is compatible (and tested) with Ember 2.8 and up.\"],[13],[2,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"usage-with-ember-2-8-2-11\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#usage-with-ember-2-8-2-11\"],[14,0,\"heading-anchor\"],[12],[2,\"Usage with Ember 2.8-2.11\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"You may have noticed that all of the examples for Ember Table on this docs site\\nare using angle bracket syntax (.e.g. \"],[10,\"code\"],[12],[2,\"foo-bar\"],[13],[2,\"). This is an exciting new\\nfeature of Ember that has been polyfilled for all versions of Ember 2.12+, and\\nis definitely recommended if you can use it.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"If you are on a version of Ember that does not support angle bracket syntax, you\\ncan still invoke Ember Table with the curly style. Angle brackets are an\\nalternative syntax for curly style component invocations, and do not add any\\nextra features. To see the differences, check out the\\n\"],[10,\"a\"],[14,6,\"https://github.com/rwjblue/ember-angle-bracket-invocation-polyfill\"],[14,0,\"docs-md__a\"],[12],[2,\"angle bracket syntax polyfill\"],[13],[2,\"\\nor the original \"],[10,\"a\"],[14,6,\"https://github.com/emberjs/rfcs/blob/master/text/0311-angle-bracket-invocation.md\"],[14,0,\"docs-md__a\"],[12],[2,\"angle bracket invocation rfc\"],[13],[2,\".\"],[13],[2,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedhbs\"],[12],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{#\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"ember-table\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"data-test-ember-table\"],[13],[2,\"=\"],[10,\"span\"],[14,0,\"hljs-literal\"],[12],[2,\"true\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"as\"],[13],[2,\" |t|}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n  \"],[13],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{#\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"t.head\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"columns\"],[13],[2,\"=columns \"],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"as\"],[13],[2,\" |h|}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n    \"],[13],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{#\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"h.row\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"as\"],[13],[2,\" |r|}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n      \"],[13],[10,\"span\"],[14,0,\"hljs-template-variable\"],[12],[2,\"{{\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"r.cell\"],[13],[2,\"}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n    \"],[13],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{/\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"h.row\"],[13],[2,\"}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n  \"],[13],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{/\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"t.head\"],[13],[2,\"}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n\\n  \"],[13],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{#\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"t.body\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"rows\"],[13],[2,\"=rows \"],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"as\"],[13],[2,\" |b|}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n    \"],[13],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{#\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"b.row\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"as\"],[13],[2,\" |r|}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n      \"],[13],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{#\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"r.cell\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"as\"],[13],[2,\" |cellValue|}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n        \"],[13],[10,\"span\"],[14,0,\"hljs-template-variable\"],[12],[2,\"{{\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"cellValue\"],[13],[2,\"}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n      \"],[13],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{/\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"r.cell\"],[13],[2,\"}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n    \"],[13],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{/\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"b.row\"],[13],[2,\"}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n  \"],[13],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{/\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"t.body\"],[13],[2,\"}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n\\n  \"],[13],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{#\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"t.foot\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"rows\"],[13],[2,\"=footerRows \"],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"as\"],[13],[2,\" |f|}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n    \"],[13],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{#\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"f.row\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"as\"],[13],[2,\" |r|}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n      \"],[13],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{#\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"r.cell\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"as\"],[13],[2,\" |cellValue|}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n        \"],[13],[10,\"span\"],[14,0,\"hljs-template-variable\"],[12],[2,\"{{\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"cellValue\"],[13],[2,\"}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n      \"],[13],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{/\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"r.cell\"],[13],[2,\"}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n    \"],[13],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{/\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"f.row\"],[13],[2,\"}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n  \"],[13],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{/\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"t.foot\"],[13],[2,\"}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"\\n\"],[13],[10,\"span\"],[14,0,\"hljs-template-tag\"],[12],[2,\"{{/\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"ember-table\"],[13],[2,\"}}\"],[13],[13],[13],[13]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "dummy/pods/docs/guides/main/legacy-usage/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/main/styling-the-table/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SimpleController extends Ember.Controller {}

  _exports.default = SimpleController;
});
define("dummy/pods/docs/guides/main/styling-the-table/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "uTxNXWX/",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"styling-the-table-wip-\"],[14,0,\"docs-md__h1\"],[12],[2,\"Styling the Table [WIP]\"],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Ember Table by default only ships with the minimum CSS necessary for it to\\nfunction. This includes the \"],[10,\"code\"],[12],[2,\"sticky\"],[13],[2,\" positioning of the header, footer, and\\nfixed columns, along with a few other things.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"You can style the table by directly styling the \"],[10,\"code\"],[12],[2,\".ember-table\"],[13],[2,\" class, and the\\nHTML structure beneath it. The examples in this documentation app use Addepar's\\nown \"],[10,\"a\"],[14,6,\"https://github.com/Addepar/addepar-style-toolbox\"],[14,0,\"docs-md__a\"],[12],[2,\"CSS framework\"],[13],[2,\", which is\\ntailored to our specific needs. You can check out the \"],[10,\"a\"],[14,6,\"https://github.com/Addepar/addepar-style-toolbox/blob/master/styles/onyx/components/table/_core.scss\"],[14,0,\"docs-md__a\"],[12],[2,\"table styles\"],[13],[2,\"\\napplied there for inspiration.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"In the future, this page will contain a class list and outline of the base HTML\\nfor Ember Table.\"],[13],[2,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"reorder-indicators\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#reorder-indicators\"],[14,0,\"heading-anchor\"],[12],[2,\"Reorder indicators\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"When reordering the columns, two elements are created to be customized and allow the user to understand what he is doing.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"A first \"],[10,\"code\"],[12],[2,\".et-reorder-main-indicator\"],[13],[2,\" element is created, which basically is a ghost copy of the header cell currently grabbed. By default, it has no CSS property, giving a \"],[10,\"code\"],[12],[2,\"position: absolute;\"],[13],[2,\" so this element is positioned on the \"],[10,\"code\"],[12],[2,\"<thead>\"],[13],[2,\" is recommended.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"A second \"],[10,\"code\"],[12],[2,\".et-reorder-drop-indicator\"],[13],[2,\" element is created, which is the target header cell. It has two CSS classes \"],[10,\"code\"],[12],[2,\".et-reorder-direction-left\"],[13],[2,\" and \"],[10,\"code\"],[12],[2,\".et-reorder-direction-right\"],[13],[2,\" depending on the current drop position to show whether the drop will be directed on the left or on the right. Styling these will give the user a more intuitive experience of how they is reordering their table.\"],[13],[2,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"styling-examples\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#styling-examples\"],[14,0,\"heading-anchor\"],[12],[2,\"Styling Examples\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Here is an example of using CSS Flex properties to create a layout that has a fixed page header and footer and a content area that is split for a search input area on the left and a data table on the right: \"],[10,\"a\"],[14,6,\"https://ember-twiddle.com/4cb616452e3316ddcec242192fc4a96c?openFiles=templates.application.hbs%2C\"],[14,0,\"docs-md__a\"],[12],[2,\"CSS Flex\"],[13],[2,\". The same layout using Bootstrap classes: \"],[10,\"a\"],[14,6,\"https://ember-twiddle.com/d27c9f154050688518a7ca9a0b055a26?openFiles=templates.application.hbs%2C\"],[14,0,\"docs-md__a\"],[12],[2,\"Bootstrap Flex\"],[13],[2,\". This version is also somewhat responsive, so change your window sizes to see it respond.\"],[13],[13]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "dummy/pods/docs/guides/main/styling-the-table/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/main/table-customization/controller", ["exports", "dummy/utils/generators", "faker"], function (_exports, _generators, _faker) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    rows: Ember.computed(function () {
      return (0, _generators.generateRows)(100);
    }),
    // BEGIN-SNIPPET table-customization-rows-with-components.js
    rowsWithComponents: Ember.computed(function () {
      return [{
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'navy'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'blue'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'aqua'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'teal'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'orange'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'red'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'maroon'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'navy'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'blue'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'aqua'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'teal'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'orange'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'red'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'maroon'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'navy'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'blue'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'aqua'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'teal'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'orange'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'red'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'maroon'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'navy'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'blue'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'aqua'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'teal'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'orange'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'red'
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        cellComponent: 'custom-cell',
        color: 'maroon'
      }];
    }),
    columnsForRowsWithComponents: Ember.computed(function () {
      return [{
        name: 'Column A',
        valuePath: 'A'
      }, {
        name: 'Column B',
        valuePath: 'B'
      }, {
        name: 'Column C',
        valuePath: 'C'
      }, {
        name: 'Column D',
        valuePath: 'D'
      }];
    }),
    // END-SNIPPET
    // BEGIN-SNIPPET table-customization-example-sorting.js
    showSortIndicator: true,
    showResizeHandle: true,
    columnsForSorting: Ember.computed(function () {
      return [{
        name: 'Company ▸ Department ▸ Product',
        valuePath: 'name'
      }, {
        name: 'Price',
        valuePath: 'price'
      }, {
        name: 'Sold',
        valuePath: 'sold'
      }, {
        name: 'Unsold',
        valuePath: 'unsold'
      }, {
        name: 'Total Revenue',
        valuePath: 'totalRevenue'
      }];
    }),
    rowsForSorting: Ember.computed(function () {
      let rows = [];

      for (let i = 0; i < 5; i++) {
        let companyRow = {
          name: _faker.default.company.companyName(),
          price: 'N/A',
          sold: 0,
          unsold: 0,
          totalRevenue: 0,
          children: []
        };

        for (let j = 0; j < (0, _generators.getRandomInt)(5, 2); j++) {
          let departmentRow = {
            name: _faker.default.commerce.department(),
            price: 'N/A',
            sold: 0,
            unsold: 0,
            totalRevenue: 0,
            children: []
          };

          for (let k = 0; k < (0, _generators.getRandomInt)(100, 10); k++) {
            let sold = (0, _generators.getRandomInt)(100, 10);
            let unsold = (0, _generators.getRandomInt)(100, 10);
            let price = (0, _generators.getRandomInt)(50, 10);
            let totalRevenue = price * sold;
            let product = {
              name: _faker.default.commerce.productName(),
              price: `$${price}`,
              sold,
              unsold,
              totalRevenue: `$${totalRevenue}`
            };
            departmentRow.sold += sold;
            departmentRow.unsold += unsold;
            departmentRow.totalRevenue += totalRevenue;
            departmentRow.children.push(product);
          }

          companyRow.sold += departmentRow.sold;
          companyRow.unsold += departmentRow.unsold;
          companyRow.totalRevenue += departmentRow.totalRevenue;
          departmentRow.totalRevenue = `$${departmentRow.totalRevenue}`;
          companyRow.children.push(departmentRow);
        }

        companyRow.totalRevenue = `$${companyRow.totalRevenue}`;
        rows.push(companyRow);
      }

      return rows;
    }),
    // END-SNIPPET
    // BEGIN-SNIPPET table-customization-custom-table-components.js
    columnsWithSelection: Ember.computed(function () {
      return [{
        name: 'A',
        valuePath: 'A',
        width: 180
      }, {
        name: 'B',
        valuePath: 'B',
        width: 180,
        isSelected: true
      }, {
        name: 'C',
        valuePath: 'C',
        width: 180
      }, {
        name: 'D',
        valuePath: 'D',
        width: 180
      }];
    }),
    rowsWithChildren: Ember.computed(function () {
      return [{
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        children: [{
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }]
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        children: [{
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }]
      }, {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        children: [{
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }, {
          A: 'A',
          B: 'B',
          C: 'C',
          D: 'D'
        }]
      }];
    }),
    // END-SNIPPET
    // BEGIN-SNIPPET table-customization-custom-cell-template.js
    columns: Ember.computed(function () {
      return [{
        name: 'A',
        valuePath: 'A'
      }, {
        name: 'B',
        valuePath: 'B'
      }, {
        name: 'C',
        valuePath: 'C'
      }, {
        name: 'D',
        valuePath: 'D'
      }, {
        name: 'E',
        valuePath: 'E'
      }, {
        name: 'F',
        valuePath: 'F'
      }, {
        name: 'G',
        valuePath: 'G'
      }];
    }),
    // END-SNIPPET
    // BEGIN-SNIPPET table-customization-custom-cell-component.js
    columnsWithComponents: Ember.computed(function () {
      return [{
        heading: 'A',
        valuePath: 'A',
        headerComponent: 'custom-header',
        cellComponent: 'custom-cell',
        color: 'blue'
      }, {
        heading: 'B',
        valuePath: 'B'
      }, {
        heading: 'C',
        valuePath: 'C',
        headerComponent: 'custom-header',
        cellComponent: 'custom-cell',
        color: 'aqua'
      }, {
        heading: 'D',
        valuePath: 'D'
      }, {
        heading: 'E',
        valuePath: 'E',
        headerComponent: 'custom-header',
        cellComponent: 'custom-cell',
        color: 'orange'
      }, {
        heading: 'F',
        valuePath: 'F'
      }, {
        heading: 'G',
        valuePath: 'G',
        headerComponent: 'custom-header',
        cellComponent: 'custom-cell',
        color: 'maroon'
      }];
    }) // END-SNIPPET

  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/main/table-customization/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "6IZxUYD8",
    "block": "{\"symbols\":[\"demo\",\"t\",\"b\",\"r\",\"cell\",\"h\",\"r\",\"column\",\"demo\",\"t\",\"b\",\"r\",\"cell\",\"column\",\"row\",\"demo\",\"t\",\"b\",\"r\",\"cell\",\"column\",\"h\",\"r\",\"column\",\"demo\",\"t\",\"h\",\"r\",\"columnValue\",\"columnMeta\",\"demo\",\"t\",\"b\",\"r\",\"value\",\"h\",\"r\",\"column\"],\"statements\":[[10,\"div\"],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"table-customization\"],[14,0,\"docs-md__h1\"],[12],[2,\"Table Customization\"],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"There are two main ways to customize tables:\"],[13],[2,\"\\n\\n        \"],[10,\"ol\"],[14,0,\"docs-list-decimal\"],[12],[10,\"li\"],[12],[2,\"Customizing the cell templates\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[2,\"Customizing the table elements (\"],[10,\"code\"],[12],[2,\"thead\"],[13],[2,\", \"],[10,\"code\"],[12],[2,\"tbody\"],[13],[2,\", \"],[10,\"code\"],[12],[2,\"tr\"],[13],[2,\", \"],[10,\"code\"],[12],[2,\"td\"],[13],[2,\", etc)\"],[13],[2,\"\\n\"],[13],[2,\"\\n      \"],[10,\"p\"],[12],[2,\"Ember Table provides ways to customize both of these.\"],[13],[2,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"cell-templates\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#cell-templates\"],[14,0,\"heading-anchor\"],[12],[2,\"Cell Templates\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Tables yield down to the cell level, meaning you can customize the template of\\neach cell through yielding alone. No need to pass in components or specify\\nlookup paths:\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[6,[37,18],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,4],[[30,[36,3],[[32,31,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/main/table-customization/template.hbs' @ L14:C5) \"],null]],[[\"name\"],[\"expanded\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container\"],[12],[2,\"\\n\"],[2,\"      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,32,[\"head\"]],[],[[\"@columns\"],[[34,17]]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[8,[32,36,[\"row\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[8,[32,37,[\"cell\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n              Custom Header \"],[1,[32,38,[\"name\"]]],[2,\"\\n            \"]],\"parameters\":[38]}]]],[2,\"\\n          \"]],\"parameters\":[37]}]]],[2,\"\\n        \"]],\"parameters\":[36]}]]],[2,\"     \"],[8,[32,32,[\"body\"]],[],[[\"@rows\"],[[34,8]]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[8,[32,33,[\"row\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,34,[\"cell\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          Custom Cell \"],[1,[32,35]],[2,\"\\n        \"]],\"parameters\":[35]}]]],[2,\"\\n      \"]],\"parameters\":[34]}]]],[2,\"\\n    \"]],\"parameters\":[33]}]]],[2,\"\\n  \"]],\"parameters\":[32]}]]],[2,\"\\n\"],[13],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,4],[[30,[36,3],[[32,31,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/main/table-customization/template.hbs' @ L33:C31) \"],null]],[[\"name\"],[\"table-customization-custom-cell-template.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,4],[[30,[36,3],[[32,31,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/main/table-customization/template.hbs' @ L34:C4) \"],null]],[[\"name\",\"label\"],[\"table-customization-custom-cell-template.js\",\"component.js\"]]]],[2,\"\\n\"]],\"parameters\":[31]}]]],[2,\" If you want to customize a header cell but still want to include the elements to sort and\\nto resize a column, use the \"],[10,\"code\"],[12],[2,\"ember-th/sort-indicator\"],[13],[2,\" and \"],[10,\"code\"],[12],[2,\"ember-th/resize-handle\"],[13],[2,\"\\ncomponents: \"],[6,[37,18],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,4],[[30,[36,3],[[32,25,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/main/table-customization/template.hbs' @ L38:C5) \"],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-options\"],[12],[2,\"\\n      \"],[10,\"label\"],[12],[2,\"\\n        \"],[10,\"input\"],[15,\"checked\",[34,9]],[15,\"onclick\",[30,[36,12],[[32,0],[30,[36,11],[[35,9]],null],[30,[36,10],[[35,9]],null]],null]],[14,4,\"checkbox\"],[12],[13],[2,\"\\n        Show Sort Indicator\\n        \"],[10,\"span\"],[14,0,\"small\"],[12],[2,\"(Click header to sort)\"],[13],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"label\"],[12],[2,\"\\n        \"],[10,\"input\"],[15,\"checked\",[34,13]],[15,\"onclick\",[30,[36,12],[[32,0],[30,[36,11],[[35,13]],null],[30,[36,10],[[35,13]],null]],null]],[14,4,\"checkbox\"],[12],[13],[2,\"\\n        Show Resize Handle \"],[10,\"span\"],[14,0,\"small\"],[12],[2,\"(Only appears on hover)\"],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"demo-container\"],[12],[2,\"\\n      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,26,[\"head\"]],[],[[\"@columns\",\"@sorts\",\"@onUpdateSorts\",\"@widthConstraint\",\"@fillMode\"],[[34,14],[34,15],[30,[36,12],[[32,0],[30,[36,11],[[35,15]],null]],null],\"gte-container\",\"first-column\"]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[8,[32,27,[\"row\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,28,[\"cell\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,1],[[35,9]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[8,\"ember-th/sort-indicator\",[],[[\"@columnMeta\"],[[32,30]]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \"],[1,[32,29,[\"name\"]]],[2,\"\\n\"],[6,[37,1],[[35,13]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[8,\"ember-th/resize-handle\",[],[[\"@columnMeta\"],[[32,30]]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"]],\"parameters\":[29,30]}]]],[2,\"\\n      \"]],\"parameters\":[28]}]]],[2,\"\\n    \"]],\"parameters\":[27]}]]],[2,\"\\n\\n    \"],[8,[32,26,[\"body\"]],[],[[\"@rows\"],[[34,16]]],null],[2,\"\\n  \"]],\"parameters\":[26]}]]],[2,\"\\n\"],[13],[2,\"\\n\"],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,4],[[30,[36,3],[[32,25,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/main/table-customization/template.hbs' @ L77:C43) \"],null]],[[\"name\"],[\"table-customization-example-sorting.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,4],[[30,[36,3],[[32,25,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/main/table-customization/template.hbs' @ L78:C4) \"],null]],[[\"label\",\"name\"],[\"component.js\",\"table-customization-example-sorting.js\"]]]],[2,\"\\n\"]],\"parameters\":[25]}]]],[2,\" Oftentimes you'll want to provide custom components for use in table headers,\\ncells, and footers. It's also pretty common to want different types of\\ncomponents used in each column. Ember Table solves this by passing the\\nunadulterated column definition to each cell, which gives you a place to put\\ninformation about the cell, including the name of the component it should use. You can combine this with the \"],[10,\"code\"],[12],[2,\"component\"],[13],[2,\" helper to render a different component\\nper cell: \"],[6,[37,18],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,4],[[30,[36,3],[[32,16,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/main/table-customization/template.hbs' @ L85:C5) \"],null]],[[\"name\"],[\"custom-cell-component\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container small\"],[12],[2,\"\\n\"],[2,\"      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,17,[\"head\"]],[],[[\"@columns\"],[[34,7]]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[8,[32,22,[\"row\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[8,[32,23,[\"cell\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,1],[[32,24,[\"headerComponent\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,4],[[32,24,[\"headerComponent\"]]],[[\"color\"],[[32,24,[\"color\"]]]],[[\"default\"],[{\"statements\":[[2,\"                  \"],[1,[32,24,[\"heading\"]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]},{\"statements\":[[2,\"                \"],[1,[32,24,[\"heading\"]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"            \"]],\"parameters\":[24]}]]],[2,\"\\n          \"]],\"parameters\":[23]}]]],[2,\"\\n        \"]],\"parameters\":[22]}]]],[2,\"     \"],[8,[32,17,[\"body\"]],[],[[\"@rows\"],[[34,8]]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[8,[32,18,[\"row\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,19,[\"cell\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,1],[[32,21,[\"cellComponent\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,4],[[32,21,[\"cellComponent\"]]],[[\"color\"],[[32,21,[\"color\"]]]],[[\"default\"],[{\"statements\":[[2,\"              \"],[1,[32,20]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]},{\"statements\":[[2,\"            \"],[1,[32,20]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"]],\"parameters\":[20,21]}]]],[2,\"\\n      \"]],\"parameters\":[19]}]]],[2,\"\\n    \"]],\"parameters\":[18]}]]],[2,\"\\n  \"]],\"parameters\":[17]}]]],[2,\"\\n\"],[13],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,4],[[30,[36,3],[[32,16,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/main/table-customization/template.hbs' @ L116:C31) \"],null]],[[\"name\"],[\"table-customization-custom-cell-component.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,4],[[30,[36,3],[[32,16,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/main/table-customization/template.hbs' @ L117:C4) \"],null]],[[\"name\",\"label\"],[\"table-customization-custom-cell-component.js\",\"component.js\"]]]],[2,\"\\n  \"],[1,[30,[36,4],[[30,[36,3],[[32,16,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/main/table-customization/template.hbs' @ L118:C4) \"],null]],[[\"name\",\"label\"],[\"custom-header.hbs\",\"custom-header.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,4],[[30,[36,3],[[32,16,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/main/table-customization/template.hbs' @ L119:C4) \"],null]],[[\"name\",\"label\"],[\"custom-cell.hbs\",\"custom-cell.hbs\"]]]],[2,\"\\n\"]],\"parameters\":[16]}]]],[2,\" It is also possible to customize the cell templates based on details of the row\\nitself. The row is also passed to cells (but not headers, which don't have\\nrows), allowing us to customize the template in the same way as columns: \"],[6,[37,18],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,4],[[30,[36,3],[[32,9,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/main/table-customization/template.hbs' @ L123:C5) \"],null]],[[\"name\"],[\"rows-with-components\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container small\"],[12],[2,\"\\n\"],[2,\"      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,10,[\"head\"]],[],[[\"@columns\"],[[34,5]]],null],[2,\"     \"],[8,[32,10,[\"body\"]],[],[[\"@rows\"],[[34,6]]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[8,[32,11,[\"row\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,12,[\"cell\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,4],[[32,15,[\"cellComponent\"]]],[[\"color\"],[[32,15,[\"color\"]]]],[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[32,13]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"]],\"parameters\":[13,14,15]}]]],[2,\"\\n      \"]],\"parameters\":[12]}]]],[2,\"\\n    \"]],\"parameters\":[11]}]]],[2,\"\\n  \"]],\"parameters\":[10]}]]],[2,\"\\n\"],[13],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,4],[[30,[36,3],[[32,9,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/main/table-customization/template.hbs' @ L138:C31) \"],null]],[[\"name\"],[\"table-customization-rows-with-components.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,4],[[30,[36,3],[[32,9,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/main/table-customization/template.hbs' @ L139:C4) \"],null]],[[\"name\",\"label\"],[\"table-customization-rows-with-components.js\",\"component.js\"]]]],[2,\"\\n  \"],[1,[30,[36,4],[[30,[36,3],[[32,9,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/main/table-customization/template.hbs' @ L140:C4) \"],null]],[[\"name\",\"label\"],[\"custom-cell.hbs\",\"custom-cell.hbs\"]]]],[2,\"\\n\"]],\"parameters\":[9]}]]],[2,\" Table Components Usually customizing table cells is all the flexibility you need. Sometimes\\nhowever it makes more sense to customize the actual table elements themselves.\\nEach level of the table can access the API object passed to it to do this,\\nso for instance row components can be customized using the row value, and\\ncell components can be customized using the cell value, column value, or row\\nvalue: \"],[6,[37,18],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,4],[[30,[36,3],[[32,1,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/main/table-customization/template.hbs' @ L147:C5) \"],null]],[[\"name\"],[\"custom-table-components\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container small\"],[12],[2,\"\\n\"],[2,\"      \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,2,[\"head\"]],[],[[\"@columns\"],[[34,0]]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[8,[32,6,[\"row\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[8,[32,7,[\"cell\"]],[[16,0,[31,[[30,[36,1],[[32,7,[\"columnValue\",\"isSelected\"]],\"is-column-selected\"],null]]]]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,8,[\"name\"]]],[2,\"\\n        \"]],\"parameters\":[8]}]]],[2,\"\\n      \"]],\"parameters\":[7]}]]],[2,\"\\n    \"]],\"parameters\":[6]}]]],[2,\"\\n\\n    \"],[8,[32,2,[\"body\"]],[],[[\"@rows\"],[[34,2]]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[8,[32,3,[\"row\"]],[[16,0,[31,[[30,[36,1],[[32,3,[\"rowValue\",\"children\"]],\"has-children\"],null]]]]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,4,[\"cell\"]],[[16,0,[31,[[30,[36,1],[[32,4,[\"columnValue\",\"isSelected\"]],\"is-column-selected\"],null]]]]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[1,[32,5]],[2,\"\\n        \"]],\"parameters\":[5]}]]],[2,\"\\n      \"]],\"parameters\":[4]}]]],[2,\"\\n    \"]],\"parameters\":[3]}]]],[2,\"\\n  \"]],\"parameters\":[2]}]]],[2,\"\\n\"],[13],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,4],[[30,[36,3],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/main/table-customization/template.hbs' @ L178:C31) \"],null]],[[\"name\"],[\"table-customization-custom-table-components.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,4],[[30,[36,3],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/main/table-customization/template.hbs' @ L179:C4) \"],null]],[[\"name\",\"label\"],[\"table-customization-custom-table-components.js\",\"component.js\"]]]],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\" Table components also implement typical event handlers, such as \"],[10,\"code\"],[12],[2,\"onClick\"],[13],[2,\" and\\n\"],[10,\"code\"],[12],[2,\"onDoubleClick\"],[13],[2,\". In general, it's not recommended that you extend table\\ncomponents and is not considered public API to do so. If you would like extra\\nfunctionality added to table components, open an issue on Github!\"],[13],[13]],\"hasEval\":false,\"upvars\":[\"columnsWithSelection\",\"if\",\"rowsWithChildren\",\"-assert-implicit-component-helper-argument\",\"component\",\"columnsForRowsWithComponents\",\"rowsWithComponents\",\"columnsWithComponents\",\"rows\",\"showSortIndicator\",\"not\",\"mut\",\"action\",\"showResizeHandle\",\"columnsForSorting\",\"sorts\",\"rowsForSorting\",\"columns\",\"docs-demo\"]}",
    "moduleName": "dummy/pods/docs/guides/main/table-customization/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/main/table-meta-data/controller", ["exports", "dummy/utils/generators"], function (_exports, _generators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    rows: Ember.computed(function () {
      return (0, _generators.generateRows)(100);
    }),
    columns: Ember.computed(function () {
      return [{
        name: 'A',
        valuePath: 'A'
      }, {
        name: 'B',
        valuePath: 'B'
      }, {
        name: 'C',
        valuePath: 'C'
      }, {
        name: 'D',
        valuePath: 'D'
      }, {
        name: 'E',
        valuePath: 'E'
      }, {
        name: 'F',
        valuePath: 'F'
      }, {
        name: 'G',
        valuePath: 'G'
      }];
    })
  });

  _exports.default = _default;
});
define("dummy/pods/docs/guides/main/table-meta-data/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ThpEO+98",
    "block": "{\"symbols\":[\"demo\",\"t\",\"b\",\"r\",\"cell\",\"column\",\"row\",\"cellMeta\",\"columnMeta\",\"rowMeta\",\"rowsCount\"],\"statements\":[[10,\"div\"],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"table-meta-data\"],[14,0,\"docs-md__h1\"],[12],[2,\"Table Meta Data\"],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"So far you've seen how Ember Table revolves around three central concepts:\"],[13],[2,\"\\n\\n        \"],[10,\"ol\"],[14,0,\"docs-list-decimal\"],[12],[10,\"li\"],[12],[2,\"The \"],[10,\"code\"],[12],[2,\"rowValue\"],[13],[2,\", which is one of the rows that are provided to the body\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[2,\"The \"],[10,\"code\"],[12],[2,\"columnValue\"],[13],[2,\", which is one of the columns that are provided to the\\nheader\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[2,\"The \"],[10,\"code\"],[12],[2,\"cellValue\"],[13],[2,\", which is produced by using the \"],[10,\"code\"],[12],[2,\"columnValue\"],[13],[2,\" to lookup a\\nvalue on the \"],[10,\"code\"],[12],[2,\"rowValue\"],[13],[13],[2,\"\\n\"],[13],[2,\"\\n      \"],[10,\"p\"],[12],[2,\"These are the fundamental building blocks of any table, so it makes sense that\\nthey would be what is given to you when using the table API.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"You'll also find that Ember Table provides a meta object that is associated\\nwith each of these. These meta objects are yielded after the main\\ncell/column/row values at the cell level, and are generally accessible wherever\\ntheir corresponding values are:\"],[13],[2,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedhbs\"],[12],[10,\"span\"],[14,0,\"xml\"],[12],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"t.cell\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"as\"],[13],[2,\" |\"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"cell\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"column\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"row\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"cellMeta\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"columnMeta\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"rowMeta\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"rowsCount\"],[13],[2,\"|>\"],[13],[13],[13],[13],[2,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"what-are-meta-objects-\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#what-are-meta-objects-\"],[14,0,\"heading-anchor\"],[12],[2,\"What are meta objects?\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"The meta objects are unique POJOs that are associated with a corresponding\\nvalue. That is to say, for every \"],[10,\"code\"],[12],[2,\"cell\"],[13],[2,\", \"],[10,\"code\"],[12],[2,\"column\"],[13],[2,\", and \"],[10,\"code\"],[12],[2,\"row\"],[13],[2,\" in the table, there\\nare corresponding \"],[10,\"code\"],[12],[2,\"cellMeta\"],[13],[2,\", \"],[10,\"code\"],[12],[2,\"columnMeta\"],[13],[2,\", and \"],[10,\"code\"],[12],[2,\"rowMeta\"],[13],[2,\" objects.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[10,\"code\"],[12],[2,\"columnMeta\"],[13],[2,\" and \"],[10,\"code\"],[12],[2,\"rowMeta\"],[13],[2,\" objects are used by the table to accomplish some\\ninternal bookkeeping such as collapse and selection state, but you are free to\\nuse these objects to store whatever meta information you would like in the\\ntable.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[10,\"code\"],[12],[2,\"rowsCount\"],[13],[2,\" is also yielded by the cell component. This count is a reflection\\nof how many rows the user can currently see by scrolling through the table. It\\nis typically smaller than the total number of rows passed into, say, the\\n\"],[10,\"code\"],[12],[2,\"ember-tbody\"],[13],[2,\" component, because it excludes rows that have been hidden by\\ncollapsing a parent.\"],[13],[2,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"what-are-they-used-for-\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#what-are-they-used-for-\"],[14,0,\"heading-anchor\"],[12],[2,\"What are they used for?\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Complex data tables have lots of functionality that requires some amount of\\nstate to be tracked. This state is generally unique to the table, and oftentimes\\nrelated to a particular cell, column, or row. A good example of this is cell\\nselection, like in Excel.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"When you click a cell in Excel, the row, column, and cell are all marked as\\nactive to show the user where they are in the table. Ember Table does \"],[10,\"em\"],[12],[2,\"not\"],[13],[2,\" have\\nthis functionality out of the box - let's see how we would implement it with\\nmeta objects:\"],[13],[2,\"\\n\"],[3,\" this example breaks markdown parsing below it, so it can't be inline \"],[2,\"\\n\"],[10,\"p\"],[12],[1,[34,8]],[13],[2,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"accessing-row-indices-in-templates\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#accessing-row-indices-in-templates\"],[14,0,\"heading-anchor\"],[12],[2,\"Accessing row indices in templates\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Meta objects can be used in templates to render conditional markdown based on\\nthe index of the current row.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[6,[37,9],null,null,[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,7],[[30,[36,6],[[32,1,[\"example\"]],\"expected `demo.example` to be a contextual component but found a string. Did you mean `(component demo.example)`? ('dummy/pods/docs/guides/main/table-meta-data/template.hbs' @ L48:C5) \"],null]],[[\"name\"],[\"row-indices\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"demo-container small\"],[12],[2,\"\\n      \"],[10,\"style\"],[12],[2,\"\\n\"],[2,\"        .first-row-cell {\\n          font-weight: bold;\\n        }     .last-row-cell {\\n      font-style: italic;\\n    }\\n\"],[2,\"  \"],[13],[2,\"\\n\\n\"],[2,\"  \"],[8,\"ember-table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,[32,2,[\"head\"]],[],[[\"@columns\"],[[34,3]]],null],[2,\"\\n    \"],[8,[32,2,[\"body\"]],[],[[\"@rows\"],[[34,4]]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[8,[32,3,[\"row\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,4,[\"cell\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,2],[[30,[36,5],[[32,10,[\"index\"]],0],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"            \"],[10,\"span\"],[14,0,\"first-row-cell\"],[12],[1,[32,5]],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,2],[[30,[36,1],[[32,10,[\"index\"]],[30,[36,0],[[32,11]],null]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"            \"],[1,[32,5]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"            \"],[10,\"span\"],[14,0,\"last-row-cell\"],[12],[1,[32,5]],[13],[2,\"\\n          \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"        \"]],\"parameters\":[5,6,7,8,9,10,11]}]]],[2,\"\\n      \"]],\"parameters\":[4]}]]],[2,\"\\n    \"]],\"parameters\":[3]}]]],[2,\"\\n  \"]],\"parameters\":[2]}]]],[2,\"\\n\"],[13],[2,\"   \"]],\"parameters\":[]}]]],[2,\"   \"],[1,[30,[36,7],[[30,[36,6],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/main/table-meta-data/template.hbs' @ L79:C31) \"],null]],[[\"name\"],[\"table-meta-data-row-indices.hbs\"]]]],[2,\"\\n  \"],[1,[30,[36,7],[[30,[36,6],[[32,1,[\"snippet\"]],\"expected `demo.snippet` to be a contextual component but found a string. Did you mean `(component demo.snippet)`? ('dummy/pods/docs/guides/main/table-meta-data/template.hbs' @ L80:C4) \"],null]],[[\"name\"],[\"table-meta-data-row-indices.css\"]]]],[2,\"\\n\"]],\"parameters\":[1]}]]],[13],[13]],\"hasEval\":false,\"upvars\":[\"dec\",\"lt\",\"if\",\"columns\",\"rows\",\"eq\",\"-assert-implicit-component-helper-argument\",\"component\",\"main/table-meta-data/cell-selection\",\"docs-demo\"]}",
    "moduleName": "dummy/pods/docs/guides/main/table-meta-data/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "4KhMKNIa",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"docs-md\"],[12],[10,\"p\"],[12],[1,[30,[36,0],null,[[\"byline\"],[\"the power table for power users\"]]]],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"Ember Table is a power table made for users who need a full-fledged,\\nfully-customizable table component for their apps. It is built to be flexible,\\nscalable, and ergonomic for day-to-day use.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"Unlike other table components, Ember Table seeks to provide as many common table\\nfeatures as it can \"],[10,\"em\"],[12],[2,\"without\"],[13],[2,\" sacrificing flexibility or composeability. You can\\nstill use standard component idioms to customize, extend, and build on top of\\nEmber Table at every level, ensuring that it never gets in your way or prevents\\nyou from doing what you want.\"],[13],[2,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"features\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#features\"],[14,0,\"heading-anchor\"],[12],[2,\"Features\"],[13],[13],[2,\"\\n    \\n        \"],[10,\"ul\"],[14,0,\"docs-list-disc\"],[12],[10,\"li\"],[12],[2,\"Fixed headers and footers\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[2,\"Fixed columns\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[2,\"Row selection\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[2,\"Row sorting\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[2,\"Tree tables (with group collapsing)\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[2,\"Column resizing and reordering\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[2,\"Nested subcolumns (e.g. to create pivot tables)\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[2,\"Scalability - Can render thousands of rows performantly\"],[13],[2,\"\\n\"],[13],[13]],\"hasEval\":false,\"upvars\":[\"docs-hero\"]}",
    "moduleName": "dummy/pods/docs/index/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/quickstart/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "fiFlEJg7",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"quickstart-\"],[14,0,\"docs-md__h1\"],[12],[2,\"Quickstart.\"],[13],[2,\"\\n    \\n      \"],[10,\"h2\"],[14,1,\"installation\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#installation\"],[14,0,\"heading-anchor\"],[12],[2,\"Installation\"],[13],[13],[2,\"\\n    \"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedsh\"],[12],[2,\"ember install ember-table\"],[13],[13],[2,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"basic-usage\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#basic-usage\"],[14,0,\"heading-anchor\"],[12],[2,\"Basic Usage\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"To use \"],[10,\"code\"],[12],[2,\"Ember Table\"],[13],[2,\", you'll need to create column definitions, and you'll need\\nto pass in an array of rows. Here is a component definition with some basic\\ncolumn definitions and a rows array:\"],[13],[2,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedjavascript\"],[12],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"import\"],[13],[2,\" Component \"],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"from\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-string\"],[12],[2,\"'@ember/component'\"],[13],[2,\";\\n\\n\"],[10,\"span\"],[14,0,\"hljs-class\"],[12],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"class\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-title\"],[12],[2,\"DemoComponent\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"extends\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-title\"],[12],[2,\"Component\"],[13],[2,\" \"],[13],[2,\"{\\n  columns = [\\n    {\\n      \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"name\"],[13],[2,\": \"],[10,\"span\"],[14,0,\"hljs-string\"],[12],[2,\"`First Name`\"],[13],[2,\",\\n      \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"valuePath\"],[13],[2,\": \"],[10,\"span\"],[14,0,\"hljs-string\"],[12],[2,\"`firstName`\"],[13],[2,\"\\n    },\\n    {\\n      \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"name\"],[13],[2,\": \"],[10,\"span\"],[14,0,\"hljs-string\"],[12],[2,\"`Last Name`\"],[13],[2,\",\\n      \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"valuePath\"],[13],[2,\": \"],[10,\"span\"],[14,0,\"hljs-string\"],[12],[2,\"`lastName`\"],[13],[2,\"\\n    }\\n  ];\\n\\n  rows = [\\n    {\\n      \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"firstName\"],[13],[2,\": \"],[10,\"span\"],[14,0,\"hljs-string\"],[12],[2,\"'Tony'\"],[13],[2,\",\\n      \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"lastName\"],[13],[2,\": \"],[10,\"span\"],[14,0,\"hljs-string\"],[12],[2,\"'Stark'\"],[13],[2,\",\\n    },\\n    {\\n      \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"firstName\"],[13],[2,\": \"],[10,\"span\"],[14,0,\"hljs-string\"],[12],[2,\"'Tom'\"],[13],[2,\",\\n      \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"lastName\"],[13],[2,\": \"],[10,\"span\"],[14,0,\"hljs-string\"],[12],[2,\"'Dale'\"],[13],[2,\",\\n    }\\n  ];\\n}\"],[13],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"Note how each item in the rows array has \"],[10,\"code\"],[12],[2,\"firstName\"],[13],[2,\" and \"],[10,\"code\"],[12],[2,\"lastName\"],[13],[2,\" properties,\\nwhich matches up with the \"],[10,\"code\"],[12],[2,\"valuePath\"],[13],[2,\" properties from the column definitions.\\nThis is how the table will get the values for each column.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"Now let's setup the template for this component:\"],[13],[2,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedhbs\"],[12],[10,\"span\"],[14,0,\"xml\"],[12],[2,\"  \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"EmberTable\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"as\"],[13],[2,\" |\"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"t\"],[13],[2,\"|>\"],[13],[2,\"\\n    \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"t.head\"],[13],[2,\" @\"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"columns\"],[13],[2,\"=\"],[13],[13],[10,\"span\"],[14,0,\"hljs-template-variable\"],[12],[2,\"{{\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"columns\"],[13],[2,\"}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\" />\"],[13],[2,\"\\n    \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"t.body\"],[13],[2,\" @\"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"rows\"],[13],[2,\"=\"],[13],[13],[10,\"span\"],[14,0,\"hljs-template-variable\"],[12],[2,\"{{\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"rows\"],[13],[2,\"}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\" />\"],[13],[2,\"\\n  \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"EmberTable\"],[13],[2,\">\"],[13],[13],[13],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"And voila! You should have a basic table up and running!\"],[13],[13]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "dummy/pods/docs/quickstart/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "nyHTmPu5",
    "block": "{\"symbols\":[\"viewer\",\"nav\"],\"statements\":[[6,[37,3],null,null,[[\"default\"],[{\"statements\":[[6,[37,1],[[30,[36,2],[[32,1,[\"nav\"]],\"expected `viewer.nav` to be a contextual component but found a string. Did you mean `(component viewer.nav)`? ('dummy/pods/docs/template.hbs' @ L2:C5) \"],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"section\"]],\"expected `nav.section` to be a contextual component but found a string. Did you mean `(component nav.section)`? ('dummy/pods/docs/template.hbs' @ L3:C6) \"],null],\"Introduction\"],null]],[2,\"\\n\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/pods/docs/template.hbs' @ L5:C6) \"],null],\"Introduction\",\"docs.index\"],null]],[2,\" \"],[2,\"\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/pods/docs/template.hbs' @ L6:C6) \"],null],\"Quickstart\",\"docs.quickstart\"],null]],[2,\"\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/pods/docs/template.hbs' @ L7:C6) \"],null],\"Why Ember Table?\",\"docs.why-ember-table\"],null]],[2,\"\\n\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"section\"]],\"expected `nav.section` to be a contextual component but found a string. Did you mean `(component nav.section)`? ('dummy/pods/docs/template.hbs' @ L9:C6) \"],null],\"Guides\"],null]],[2,\"\\n\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/pods/docs/template.hbs' @ L11:C6) \"],null],\"A Basic Table\",\"docs.guides.main.basic-table\"],null]],[2,\"\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/pods/docs/template.hbs' @ L12:C6) \"],null],\"Table Customization\",\"docs.guides.main.table-customization\"],null]],[2,\"\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/pods/docs/template.hbs' @ L13:C6) \"],null],\"Table Meta Data\",\"docs.guides.main.table-meta-data\"],null]],[2,\"\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/pods/docs/template.hbs' @ L14:C6) \"],null],\"Styling the Table\",\"docs.guides.main.styling-the-table\"],null]],[2,\"\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/pods/docs/template.hbs' @ L15:C6) \"],null],\"Legacy Usage\",\"docs.guides.main.legacy-usage\"],null]],[2,\"\\n\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"section\"]],\"expected `nav.section` to be a contextual component but found a string. Did you mean `(component nav.section)`? ('dummy/pods/docs/template.hbs' @ L17:C6) \"],null],\"Header\"],null]],[2,\"\\n\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/pods/docs/template.hbs' @ L19:C6) \"],null],\"Columns\",\"docs.guides.header.columns\"],null]],[2,\"\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/pods/docs/template.hbs' @ L20:C6) \"],null],\"Subcolumns\",\"docs.guides.header.subcolumns\"],null]],[2,\"\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/pods/docs/template.hbs' @ L21:C6) \"],null],\"Fixed Columns\",\"docs.guides.header.fixed-columns\"],null]],[2,\"\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/pods/docs/template.hbs' @ L22:C6) \"],null],\"Size Constraints\",\"docs.guides.header.size-constraints\"],null]],[2,\"\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/pods/docs/template.hbs' @ L23:C6) \"],null],\"Sorting\",\"docs.guides.header.sorting\"],null]],[2,\"\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/pods/docs/template.hbs' @ L24:C6) \"],null],\"Scroll Indicators\",\"docs.guides.header.scroll-indicators\"],null]],[2,\"\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/pods/docs/template.hbs' @ L25:C6) \"],null],\"Column Keys\",\"docs.guides.header.column-keys\"],null]],[2,\"\\n\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"section\"]],\"expected `nav.section` to be a contextual component but found a string. Did you mean `(component nav.section)`? ('dummy/pods/docs/template.hbs' @ L27:C6) \"],null],\"Body\"],null]],[2,\"\\n\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/pods/docs/template.hbs' @ L29:C6) \"],null],\"Rows and Trees\",\"docs.guides.body.rows-and-trees\"],null]],[2,\"\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/pods/docs/template.hbs' @ L30:C6) \"],null],\"Row Selection\",\"docs.guides.body.row-selection\"],null]],[2,\"\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/pods/docs/template.hbs' @ L31:C6) \"],null],\"Occlusion\",\"docs.guides.body.occlusion\"],null]],[2,\"\\n\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"section\"]],\"expected `nav.section` to be a contextual component but found a string. Did you mean `(component nav.section)`? ('dummy/pods/docs/template.hbs' @ L33:C6) \"],null],\"Testing\"],null]],[2,\"\\n\\n    \"],[1,[30,[36,1],[[30,[36,2],[[32,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/pods/docs/template.hbs' @ L35:C6) \"],null],\"Table Test Page\",\"docs.testing.test-page\"],null]],[2,\"\\n\\n\"]],\"parameters\":[2]}]]],[2,\"\\n\"],[6,[37,1],[[30,[36,2],[[32,1,[\"main\"]],\"expected `viewer.main` to be a contextual component but found a string. Did you mean `(component viewer.main)`? ('dummy/pods/docs/template.hbs' @ L39:C5) \"],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[1]}]]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\",\"-assert-implicit-component-helper-argument\",\"docs-viewer\"]}",
    "moduleName": "dummy/pods/docs/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/testing/test-page/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "21dLYJaS",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"testing-ember-table\"],[14,0,\"docs-md__h1\"],[12],[2,\"Testing Ember Table\"],[13],[2,\"\\n    \\n      \"],[10,\"h2\"],[14,1,\"table-page-object\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#table-page-object\"],[14,0,\"heading-anchor\"],[12],[2,\"Table Page Object\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Ember Table includes a test helper that you can import in your app's acceptance tests and use to interact with a table on the page. The Page helper is based on \"],[10,\"a\"],[14,6,\"https://github.com/pzuraq/ember-classy-page-object\"],[14,0,\"docs-md__a\"],[12],[10,\"code\"],[12],[2,\"ember-classy-page-object\"],[13],[13],[2,\".\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"To import it:\"],[13],[2,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedjs\"],[12],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"import\"],[13],[2,\" { TablePage } \"],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"from\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-string\"],[12],[2,\"'ember-table/test-support'\"],[13],[2,\";\"],[13],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"Usage:\"],[13],[2,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedjs\"],[12],[10,\"span\"],[14,0,\"hljs-comment\"],[12],[2,\"// ... in an acceptance test:\"],[13],[2,\"\\n\"],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"const\"],[13],[2,\" table = \"],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"new\"],[13],[2,\" TablePage();\\n\\nassert.equal(table.body.rowCount, \"],[10,\"span\"],[14,0,\"hljs-number\"],[12],[2,\"5\"],[13],[2,\", \"],[10,\"span\"],[14,0,\"hljs-string\"],[12],[2,\"'the table has 5 body rows'\"],[13],[2,\");\\nassert.equal(table.header.rows.length, \"],[10,\"span\"],[14,0,\"hljs-number\"],[12],[2,\"1\"],[13],[2,\", \"],[10,\"span\"],[14,0,\"hljs-string\"],[12],[2,\"'the table has 1 row of headers'\"],[13],[2,\");\\nassert.equal(table.footer.rows.length, \"],[10,\"span\"],[14,0,\"hljs-number\"],[12],[2,\"1\"],[13],[2,\", \"],[10,\"span\"],[14,0,\"hljs-string\"],[12],[2,\"'the table has 1 row of footers'\"],[13],[2,\");\\n\\n\"],[10,\"span\"],[14,0,\"hljs-keyword\"],[12],[2,\"await\"],[13],[2,\" table.selectRow(\"],[10,\"span\"],[14,0,\"hljs-number\"],[12],[2,\"0\"],[13],[2,\"); \"],[10,\"span\"],[14,0,\"hljs-comment\"],[12],[2,\"// The first body row is selected\"],[13],[2,\"\\nassert.ok(table.body.rows.objectAt(\"],[10,\"span\"],[14,0,\"hljs-number\"],[12],[2,\"0\"],[13],[2,\").isSelected, \"],[10,\"span\"],[14,0,\"hljs-string\"],[12],[2,\"'first row is selected'\"],[13],[2,\");\\nassert.ok(!table.body.rows.objectAt(\"],[10,\"span\"],[14,0,\"hljs-number\"],[12],[2,\"1\"],[13],[2,\").isSelected, \"],[10,\"span\"],[14,0,\"hljs-string\"],[12],[2,\"'second row is not selected'\"],[13],[2,\");\"],[13],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"To learn more about the properties that are present on the table page object, refer to \"],[10,\"a\"],[14,6,\"https://github.com/Addepar/ember-table/blob/master/addon-test-support/pages/ember-table.js\"],[14,0,\"docs-md__a\"],[12],[2,\"its source\"],[13],[2,\" or\\nto \"],[10,\"a\"],[14,6,\"https://github.com/Addepar/ember-table/blob/master/tests/integration/components/basic-test.js\"],[14,0,\"docs-md__a\"],[12],[2,\"its usage in the ember-table tests\"],[13],[2,\".\"],[13],[13]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "dummy/pods/docs/testing/test-page/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/docs/why-ember-table/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Mmo1EXkZ",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"docs-md\"],[12],[10,\"h1\"],[14,1,\"why-ember-table-\"],[14,0,\"docs-md__h1\"],[12],[2,\"Why Ember Table?\"],[13],[2,\"\\n    \\n      \"],[10,\"h2\"],[14,1,\"tables-are-hard\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#tables-are-hard\"],[14,0,\"heading-anchor\"],[12],[2,\"Tables are Hard\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"They've been with us, for better or for worse, since the early\\ndays of computing, helping us sort through mounds of data and generate TPS\\nreports. Excel macros are practically Turing complete at this point, and just\\nabout every UX pattern imaginable has been explored and implemented in a table\\nin some application somewhere.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"Building that functionality into your Single Page App is a long, tiresome\\nprocess, and as the datasets scale it just gets harder. There are a lot of\\ndifferent off the shelf tables out there, but customizing them is difficult and\\ntime consuming, and if they don't implement the feature you need there's no easy\\nway to add it.\"],[13],[2,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"what-makes-ember-table-different-\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#what-makes-ember-table-different-\"],[14,0,\"heading-anchor\"],[12],[2,\"What makes Ember Table different?\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Most table components try to abstract the complexity of the table away from\\nusers. They provide a few top components that are meant to make declaring a\\ntable simple, avoiding the nested HTML structure of traditional tables. After\\nall, who wants to deal with figuring out the right ordering of \"],[10,\"code\"],[12],[2,\"tbody\"],[13],[2,\", \"],[10,\"code\"],[12],[2,\"th\"],[13],[2,\",\\nand \"],[10,\"code\"],[12],[2,\"td\"],[13],[2,\" tags to get everything working?\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"The truth, however, is that tables \"],[10,\"em\"],[12],[2,\"are\"],[13],[2,\" complicated, and most attempts to\\nreduce that complexity through abstraction actually make the problem worse. You\\nend up having to pass tens or hundreds of configuration options to your table\\ncomponent to get it to work the way you want.\"],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"Ember Table has decided to do the opposite. The structure of a table component\\nmirrors the structure of an actual HTML table, giving you the ability to\\ncustomize every level of your table using standard Ember templates, components,\\nand actions:\"],[13],[2,\"\\n\"],[10,\"pre\"],[14,0,\"docs-md__code\"],[12],[10,\"code\"],[14,0,\"undefinedhbs\"],[12],[10,\"span\"],[14,0,\"xml\"],[12],[10,\"span\"],[14,0,\"hljs-comment\"],[12],[2,\"<!-- An HTML Table -->\"],[13],[2,\"\\n\\n\"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"table\"],[13],[2,\">\"],[13],[2,\"\\n  \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"thead\"],[13],[2,\">\"],[13],[2,\"\\n    \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"tr\"],[13],[2,\">\"],[13],[2,\"\\n      \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"th\"],[13],[2,\">\"],[13],[2,\"\\n        Header\\n      \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"th\"],[13],[2,\">\"],[13],[2,\"\\n    \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"tr\"],[13],[2,\">\"],[13],[2,\"\\n  \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"thead\"],[13],[2,\">\"],[13],[2,\"\\n\\n  \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"tbody\"],[13],[2,\">\"],[13],[2,\"\\n    \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"tr\"],[13],[2,\">\"],[13],[2,\"\\n      \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"td\"],[13],[2,\">\"],[13],[2,\"\\n        Cell\\n      \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"td\"],[13],[2,\">\"],[13],[2,\"\\n    \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"tr\"],[13],[2,\">\"],[13],[2,\"\\n  \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"tbody\"],[13],[2,\">\"],[13],[2,\"\\n\\n  \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"tfoot\"],[13],[2,\">\"],[13],[2,\"\\n    \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"tr\"],[13],[2,\">\"],[13],[2,\"\\n      \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"td\"],[13],[2,\">\"],[13],[2,\"\\n        Footer\\n      \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"td\"],[13],[2,\">\"],[13],[2,\"\\n    \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"tr\"],[13],[2,\">\"],[13],[2,\"\\n  \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"tfoot\"],[13],[2,\">\"],[13],[2,\"\\n\"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"table\"],[13],[2,\">\"],[13],[2,\"\\n\\n\"],[10,\"span\"],[14,0,\"hljs-comment\"],[12],[2,\"<!-- Ember Table -->\"],[13],[2,\"\\n\\n\"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"EmberTable\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"as\"],[13],[2,\" |\"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"t\"],[13],[2,\"|>\"],[13],[2,\"\\n  \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"t.head\"],[13],[2,\" @\"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"columns\"],[13],[2,\"=\"],[13],[13],[10,\"span\"],[14,0,\"hljs-template-variable\"],[12],[2,\"{{\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"columns\"],[13],[2,\"}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\" \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"as\"],[13],[2,\" |\"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"h\"],[13],[2,\"|>\"],[13],[2,\"\\n    \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"h.row\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"as\"],[13],[2,\" |\"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"r\"],[13],[2,\"|>\"],[13],[2,\"\\n      \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"r.cell\"],[13],[2,\">\"],[13],[2,\"\\n        Header\\n      \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"r.cell\"],[13],[2,\">\"],[13],[2,\"\\n    \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"h.row\"],[13],[2,\">\"],[13],[2,\"\\n  \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"t.head\"],[13],[2,\">\"],[13],[2,\"\\n\\n  \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"t.body\"],[13],[2,\" @\"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"rows\"],[13],[2,\"=\"],[13],[13],[10,\"span\"],[14,0,\"hljs-template-variable\"],[12],[2,\"{{\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"rows\"],[13],[2,\"}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\" \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"as\"],[13],[2,\" |\"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"b\"],[13],[2,\"|>\"],[13],[2,\"\\n    \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"b.row\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"as\"],[13],[2,\" |\"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"r\"],[13],[2,\"|>\"],[13],[2,\"\\n      \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"r.cell\"],[13],[2,\">\"],[13],[2,\"\\n        Cell\\n      \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"r.cell\"],[13],[2,\">\"],[13],[2,\"\\n    \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"b.row\"],[13],[2,\">\"],[13],[2,\"\\n  \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"t.body\"],[13],[2,\">\"],[13],[2,\"\\n\\n  \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"t.foot\"],[13],[2,\" @\"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"rows\"],[13],[2,\"=\"],[13],[13],[10,\"span\"],[14,0,\"hljs-template-variable\"],[12],[2,\"{{\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"rows\"],[13],[2,\"}}\"],[13],[10,\"span\"],[14,0,\"xml\"],[12],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\" \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"as\"],[13],[2,\" |\"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"f\"],[13],[2,\"|>\"],[13],[2,\"\\n    \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"f.row\"],[13],[2,\" \"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"as\"],[13],[2,\" |\"],[10,\"span\"],[14,0,\"hljs-attr\"],[12],[2,\"r\"],[13],[2,\"|>\"],[13],[2,\"\\n      \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"<\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"r.cell\"],[13],[2,\">\"],[13],[2,\"\\n        Footer\\n      \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"r.cell\"],[13],[2,\">\"],[13],[2,\"\\n    \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"f.row\"],[13],[2,\">\"],[13],[2,\"\\n  \"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"t.foot\"],[13],[2,\">\"],[13],[2,\"\\n\"],[10,\"span\"],[14,0,\"hljs-tag\"],[12],[2,\"</\"],[10,\"span\"],[14,0,\"hljs-name\"],[12],[2,\"EmberTable\"],[13],[2,\">\"],[13],[13],[13],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"Our stance is that rather than attempting to hide this complexity from you, we\\nwould rather give you full flexibility. It's very likely that you will want to\\ncustomize the behavior of your table, and conversely, it's very \"],[10,\"em\"],[12],[2,\"unlikely\"],[13],[2,\" that\\nyou will have hundreds or thousands of data tables sprinkled throughout your\\napp. Data tables tend to be used in a few central locations, so having a\\nflexible API that allows you to easily flesh out those (relatively) few use\\ncases is very valuable.\"],[13],[2,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"feature-complete-ootb\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#feature-complete-ootb\"],[14,0,\"heading-anchor\"],[12],[2,\"Feature Complete OOTB\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Ember Table doesn't stop at giving you a solid API to build on, it also provides\\nmany features that you would expect a modern data table to have, including:\"],[13],[2,\"\\n\\n        \"],[10,\"ul\"],[14,0,\"docs-list-disc\"],[12],[10,\"li\"],[12],[2,\"Fixed headers and footers\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[2,\"Fixed columns\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[2,\"Row selection\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[2,\"Row sorting\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[2,\"Tree tables (with group collapsing)\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[2,\"Column resizing and reordering\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[2,\"Nested subcolumns (e.g. to create pivot tables)\"],[13],[2,\"\\n\"],[10,\"li\"],[12],[2,\"Scalability - Can render thousands of rows performantly\"],[13],[2,\"\\n\"],[13],[2,\"\\n      \"],[10,\"p\"],[12],[2,\"By default, Ember Table is a feature complete data table solution that you can\\ndrop in to your app. We aim to support most standard data table features, and\\nprovide escape hatches where possible.\"],[13],[2,\"\\n\\n      \"],[10,\"h2\"],[14,1,\"lightweight\"],[14,0,\"docs-md__h2\"],[12],[10,\"a\"],[14,6,\"#lightweight\"],[14,0,\"heading-anchor\"],[12],[2,\"Lightweight\"],[13],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Ember Table is also a relatively lightweight table solution, currently weighing\\nin at \"],[10,\"code\"],[12],[2,\"22kb\"],[13],[2,\" (minified and gzipped) with plenty of extra weight to shed. Compare\\nthat to standalone table solutions like ag-grid (\"],[10,\"code\"],[12],[2,\"152kb\"],[13],[2,\") or HandsOnTable\\n(\"],[10,\"code\"],[12],[2,\"196kb\"],[13],[2,\") and you can see how a table solution that integrates with the\\nframework directly can save quite a few bytes.\"],[13],[13]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "dummy/pods/docs/why-ember-table/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/index/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    redirect() {
      this.transitionTo('docs.index');
    }

  });

  _exports.default = _default;
});
define("dummy/pods/not-found/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "lAntLBgq",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"docs-container\"],[12],[2,\"\\n  \"],[10,\"h1\"],[12],[2,\"Not found\"],[13],[2,\"\\n  \"],[10,\"p\"],[12],[2,\"This page doesn't exist. \"],[6,[37,0],null,[[\"route\"],[\"index\"]],[[\"default\"],[{\"statements\":[[2,\"Head home?\"]],\"parameters\":[]}]]],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"link-to\"]}",
    "moduleName": "dummy/pods/not-found/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/scenarios/blank/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "yYiDoxnt",
    "block": "{\"symbols\":[],\"statements\":[[10,\"i\"],[12],[2,\"blank\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "dummy/pods/scenarios/blank/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/scenarios/performance/controller", ["exports", "dummy/utils/generators"], function (_exports, _generators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    rows: Ember.computed(function () {
      let rows = (0, _generators.generateRows)(10, 3, (row, key) => `${row.id}${key}`);
      rows[0].children[0].children[0].children = (0, _generators.generateRows)(10, 1, (row, key) => `${row.id}${key}`);
      return rows;
    }),
    columns: Ember.computed(function () {
      let columns = (0, _generators.generateColumns)(20);
      columns[0].width = 300;
      columns[0].isResizable = false;
      columns[0].isReorderable = false;
      columns[1].subcolumns = (0, _generators.generateColumns)(3);
      columns[1].subcolumns[0].isReorderable = false;
      columns[1].subcolumns[1].isResizable = false;
      columns[1].subcolumns[2].isSortable = false;
      return columns;
    }),
    actions: {
      onSelect(selection) {
        this.set('selection', selection);
      },

      onUpdateSorts(sorts) {
        this.set('sorts', sorts);
      }

    }
  });

  _exports.default = _default;
});
define("dummy/pods/scenarios/performance/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "PhcuyDmN",
    "block": "{\"symbols\":[\"t\",\"b\",\"r\",\"value\",\"column\",\"row\",\"cellMeta\",\"columnMeta\",\"h\",\"r\"],\"statements\":[[10,\"div\"],[14,0,\"demo-container fixed-width\"],[12],[2,\"\\n\"],[6,[37,12],null,null,[[\"default\"],[{\"statements\":[[6,[37,8],null,[[\"api\",\"columns\",\"sorts\",\"onUpdateSorts\"],[[32,1],[35,7],[35,6],[30,[36,5],[[32,0],\"onUpdateSorts\"],null]]],[[\"default\"],[{\"statements\":[[6,[37,3],null,[[\"api\"],[[32,9]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,4],null,[[\"api\"],[[32,10]]]]],[2,\"\\n\"]],\"parameters\":[10]}]]]],\"parameters\":[9]}]]],[2,\"\\n\"],[6,[37,11],null,[[\"api\",\"rows\",\"selection\",\"onSelect\"],[[32,1],[35,10],[35,9],[30,[36,5],[[32,0],\"onSelect\"],null]]],[[\"default\"],[{\"statements\":[[6,[37,3],null,[[\"api\"],[[32,2]]],[[\"default\"],[{\"statements\":[[6,[37,2],null,[[\"api\"],[[32,3]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[32,4]],[2,\"\\n\\n          \"],[6,[37,1],[[30,[36,0],[[32,8,[\"index\"]],0],null]],null,[[\"default\"],[{\"statements\":[[2,\"lorem ipsum dolor\"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[4,5,6,7,8]}]]]],\"parameters\":[3]}]]]],\"parameters\":[2]}]]]],\"parameters\":[1]}]]],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"eq\",\"if\",\"ember-td\",\"ember-tr\",\"ember-th\",\"action\",\"sorts\",\"columns\",\"ember-thead\",\"selection\",\"rows\",\"ember-tbody\",\"ember-table\"]}",
    "moduleName": "dummy/pods/scenarios/performance/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/scenarios/simple/controller", ["exports", "dummy/utils/generators"], function (_exports, _generators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    rows: Ember.computed(function () {
      return (0, _generators.generateRows)(100);
    }),
    columns: Ember.computed(function () {
      return (0, _generators.generateColumns)(7);
    })
  });

  _exports.default = _default;
});
define("dummy/pods/scenarios/simple/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "sCTmaVGL",
    "block": "{\"symbols\":[\"t\"],\"statements\":[[10,\"div\"],[14,0,\"demo-container fixed-width\"],[12],[2,\"\\n\"],[6,[37,5],null,null,[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,1],null,[[\"api\",\"columns\"],[[32,1],[35,0]]]]],[2,\"\\n\\n    \"],[1,[30,[36,4],null,[[\"api\",\"rows\",\"selection\"],[[32,1],[35,3],[35,2]]]]],[2,\"\\n\"]],\"parameters\":[1]}]]],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"columns\",\"ember-thead\",\"selection\",\"rows\",\"ember-tbody\",\"ember-table\"]}",
    "moduleName": "dummy/pods/scenarios/simple/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/pods/scenarios/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "GknlQpEH",
    "block": "{\"symbols\":[],\"statements\":[[10,\"ul\"],[12],[2,\"\\n  \"],[10,\"li\"],[12],[6,[37,0],null,[[\"route\"],[\"scenarios.simple\"]],[[\"default\"],[{\"statements\":[[2,\"Simple\"]],\"parameters\":[]}]]],[13],[2,\"\\n  \"],[10,\"li\"],[12],[6,[37,0],null,[[\"route\"],[\"scenarios.performance\"]],[[\"default\"],[{\"statements\":[[2,\"Performance\"]],\"parameters\":[]}]]],[13],[2,\"\\n  \"],[10,\"li\"],[12],[6,[37,0],null,[[\"route\"],[\"scenarios.blank\"]],[[\"default\"],[{\"statements\":[[2,\"Blank\"]],\"parameters\":[]}]]],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[1,[30,[36,2],[[30,[36,1],null,null]],null]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"link-to\",\"-outlet\",\"component\"]}",
    "moduleName": "dummy/pods/scenarios/template.hbs"
  });

  _exports.default = _default;
});
define("dummy/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
define("dummy/router", ["exports", "ember-cli-addon-docs/router", "dummy/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const Router = _router.default.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    (0, _router.docsRoute)(this, function () {
      this.route('quickstart');
      this.route('why-ember-table');
      this.route('guides', function () {
        this.route('main', function () {
          this.route('basic-table');
          this.route('table-customization');
          this.route('table-meta-data');
          this.route('styling-the-table');
          this.route('legacy-usage');
        });
        this.route('header', function () {
          this.route('columns');
          this.route('subcolumns');
          this.route('fixed-columns');
          this.route('size-constraints');
          this.route('sorting');
          this.route('scroll-indicators');
          this.route('column-keys');
        });
        this.route('body', function () {
          this.route('rows-and-trees');
          this.route('row-selection');
          this.route('occlusion');
        });
      });
      this.route('testing', function () {
        this.route('test-page');
      });
      this.route('api', function () {
        this.route('class', {
          path: '/:class_id'
        });
      });
    });
    this.route('scenarios', function () {
      this.route('simple');
      this.route('performance');
      this.route('blank');
    });
    this.route('not-found', {
      path: '/*path'
    });
  });
  var _default = Router;
  _exports.default = _default;
});
define("dummy/routes/docs", ["exports", "ember-cli-addon-docs/routes/docs"], function (_exports, _docs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _docs.default;
    }
  });
});
define("dummy/routes/docs/api/item", ["exports", "ember-cli-addon-docs/routes/docs/api/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define("dummy/serializers/-addon-docs", ["exports", "ember-cli-addon-docs/serializers/-addon-docs"], function (_exports, _addonDocs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _addonDocs.default;
    }
  });
});
define("dummy/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
define("dummy/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
define("dummy/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
define("dummy/serializers/class", ["exports", "ember-cli-addon-docs/serializers/class"], function (_exports, _class) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _class.default;
    }
  });
});
define("dummy/serializers/component", ["exports", "ember-cli-addon-docs/serializers/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/serializers/module", ["exports", "ember-cli-addon-docs/serializers/module"], function (_exports, _module) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _module.default;
    }
  });
});
define("dummy/serializers/project", ["exports", "ember-cli-addon-docs/serializers/project"], function (_exports, _project) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _project.default;
    }
  });
});
define("dummy/services/docs-routes", ["exports", "ember-cli-addon-docs/services/docs-routes"], function (_exports, _docsRoutes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _docsRoutes.default;
    }
  });
});
define("dummy/services/docs-search", ["exports", "ember-cli-addon-docs/services/docs-search"], function (_exports, _docsSearch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _docsSearch.default;
    }
  });
});
define("dummy/services/keyboard", ["exports", "ember-keyboard/services/keyboard"], function (_exports, _keyboard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _keyboard.default;
    }
  });
});
define("dummy/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (_exports, _transitionMap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _transitionMap.default;
  _exports.default = _default;
});
define("dummy/services/media", ["exports", "ember-responsive/services/media"], function (_exports, _media) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _media.default;
  _exports.default = _default;
});
define("dummy/services/modal-dialog", ["exports", "dummy/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function computedFromConfig(prop) {
    return Ember.computed(function () {
      return _environment.default['ember-modal-dialog'] && _environment.default['ember-modal-dialog'][prop];
    });
  }

  var _default = Ember.Service.extend({
    hasEmberTether: computedFromConfig('hasEmberTether'),
    hasLiquidWormhole: computedFromConfig('hasLiquidWormhole'),
    hasLiquidTether: computedFromConfig('hasLiquidTether'),
    destinationElementId: null // injected by initializer

  });

  _exports.default = _default;
});
define("dummy/services/project-version", ["exports", "ember-cli-addon-docs/services/project-version"], function (_exports, _projectVersion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _projectVersion.default;
    }
  });
});
define("dummy/services/router-scroll", ["exports", "ember-router-scroll/services/router-scroll"], function (_exports, _routerScroll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routerScroll.default;
    }
  });
});
define("dummy/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
define("dummy/templates/docs/api/item", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/nWtsFHc",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,3],[[35,0,[\"isComponent\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,4],null,[[\"component\"],[[35,0]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,3],[[35,0,[\"isClass\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,2],null,[[\"class\"],[[35,0]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[1,[30,[36,1],null,[[\"module\"],[[35,0]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"model\",\"api/x-module\",\"api/x-class\",\"if\",\"api/x-component\"]}",
    "moduleName": "dummy/templates/docs/api/item.hbs"
  });

  _exports.default = _default;
});
define("dummy/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
define("dummy/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
define("dummy/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
define("dummy/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
define("dummy/transitions", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default() {
    this.transition(this.hasClass('modal-fade-and-drop'), this.use('fadeAndDrop'));
    this.transition(this.hasClass('modal-fade'), this.use('fade', {
      duration: 150
    }));
  }
});
define("dummy/transitions/cross-fade", ["exports", "liquid-fire/transitions/cross-fade"], function (_exports, _crossFade) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _crossFade.default;
    }
  });
});
define("dummy/transitions/default", ["exports", "liquid-fire/transitions/default"], function (_exports, _default) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _default.default;
    }
  });
});
define("dummy/transitions/explode", ["exports", "liquid-fire/transitions/explode"], function (_exports, _explode) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _explode.default;
    }
  });
});
define("dummy/transitions/fade-and-drop", ["exports", "ember-cli-addon-docs/transitions/fade-and-drop"], function (_exports, _fadeAndDrop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fadeAndDrop.default;
    }
  });
});
define("dummy/transitions/fade", ["exports", "liquid-fire/transitions/fade"], function (_exports, _fade) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fade.default;
    }
  });
});
define("dummy/transitions/flex-grow", ["exports", "liquid-fire/transitions/flex-grow"], function (_exports, _flexGrow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flexGrow.default;
    }
  });
});
define("dummy/transitions/fly-to", ["exports", "liquid-fire/transitions/fly-to"], function (_exports, _flyTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flyTo.default;
    }
  });
});
define("dummy/transitions/move-over", ["exports", "liquid-fire/transitions/move-over"], function (_exports, _moveOver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _moveOver.default;
    }
  });
});
define("dummy/transitions/scale", ["exports", "liquid-fire/transitions/scale"], function (_exports, _scale) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _scale.default;
    }
  });
});
define("dummy/transitions/scroll-then", ["exports", "liquid-fire/transitions/scroll-then"], function (_exports, _scrollThen) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _scrollThen.default;
    }
  });
});
define("dummy/transitions/to-down", ["exports", "liquid-fire/transitions/to-down"], function (_exports, _toDown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toDown.default;
    }
  });
});
define("dummy/transitions/to-left", ["exports", "liquid-fire/transitions/to-left"], function (_exports, _toLeft) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toLeft.default;
    }
  });
});
define("dummy/transitions/to-right", ["exports", "liquid-fire/transitions/to-right"], function (_exports, _toRight) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toRight.default;
    }
  });
});
define("dummy/transitions/to-up", ["exports", "liquid-fire/transitions/to-up"], function (_exports, _toUp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toUp.default;
    }
  });
});
define("dummy/transitions/wait", ["exports", "liquid-fire/transitions/wait"], function (_exports, _wait) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _wait.default;
    }
  });
});
define("dummy/utils/base-26", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.toBase26 = toBase26;
  const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const BASE = 26;
  /**
   * Convert an integer to bijective hexavigesimal notation (alphabetic base-26).
   *
   * @param {number} int - A positive integer above zero
   */

  function toBase26(int) {
    (false && !(Number.isInteger(int)) && Ember.assert('base 26 conversion must receive an integer', Number.isInteger(int)));
    (false && !(int >= 0) && Ember.assert('base 26 conversion must receive a positive value', int >= 0));

    if (int < BASE) {
      return ALPHA[int];
    }

    let result = '';
    int += 1;

    while (int > 0) {
      let index = int % BASE || BASE;
      result = ALPHA[index - 1] + result;
      int = Math.floor((int - 1) / BASE);
    }

    return result;
  }
});
define("dummy/utils/generators", ["exports", "dummy/utils/base-26", "faker"], function (_exports, _base, _faker) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.configureTableGeneration = configureTableGeneration;
  _exports.resetTableGenerationConfig = resetTableGenerationConfig;
  _exports.getRandomInt = getRandomInt;
  _exports.generateRow = generateRow;
  _exports.generateRows = generateRows;
  _exports.generateColumn = generateColumn;
  _exports.generateColumns = generateColumns;
  _exports.DummyRow = void 0;

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  const DEFAULT_USE_EMBER_ARRAY = true;
  let useEmberArray = DEFAULT_USE_EMBER_ARRAY;

  function configureTableGeneration({
    useEmberArray: _useEmberArray
  }) {
    useEmberArray = _useEmberArray;
  }

  function resetTableGenerationConfig() {
    useEmberArray = DEFAULT_USE_EMBER_ARRAY;
  }

  function getRandomInt(max, min) {
    return _faker.default.random.number({
      min,
      max
    });
  }

  function identity(row, key) {
    return key;
  }

  class DummyRow {
    constructor(id, format = identity) {
      this.id = id;
      this.format = format; // Set these so that they are not picked up by `unknownProperty` below

      this.disableCollapse = null;
      this.children = null;
    }

    unknownProperty(key) {
      return this.format(this, key);
    }

  }

  _exports.DummyRow = DummyRow;

  function generateRow(id, format) {
    return new DummyRow(id, format);
  }

  function generateRows(rowCount, depth, format, idPrefix = '') {
    let arr = [];

    for (let i = 0; i < rowCount; i++) {
      let id = idPrefix + i;
      let row = generateRow(id, format);

      if (depth > 1) {
        row.children = generateRows(rowCount, depth - 1, format, id);
      }

      arr.push(row);
    }

    return useEmberArray ? Ember.A(arr) : arr;
  }

  function generateColumn(id, options) {
    let formattedId = Array.isArray(id) ? id.map(_base.toBase26).join(' ') : (0, _base.toBase26)(id);
    return _objectSpread({
      name: formattedId,
      valuePath: formattedId
    }, options);
  }

  function generateColumns(columnCount, _ref = {}) {
    let {
      id = [],
      subcolumnCount = 0,
      fixedLeftCount = 0,
      fixedRightCount = 0
    } = _ref,
        columnOptions = _objectWithoutProperties(_ref, ["id", "subcolumnCount", "fixedLeftCount", "fixedRightCount"]);

    let columns = [];

    for (let i = 0; i < columnCount; i++) {
      let columnId = id.slice();
      columnId.push(i);
      let columnDefinition = generateColumn(columnId, columnOptions);

      if (subcolumnCount) {
        columnDefinition.subcolumns = generateColumns(subcolumnCount, _objectSpread({
          id: columnId
        }, columnOptions));
      }

      columns.push(columnDefinition);
    }

    for (let i = 0; i < fixedLeftCount; i++) {
      columns[i].isFixed = 'left';
    }

    for (let i = 0; i < fixedRightCount; i++) {
      columns[columnCount - i - 1].isFixed = 'right';
    }

    return useEmberArray ? Ember.A(columns) : columns;
  }
});
define("dummy/utils/titleize", ["exports", "ember-cli-string-helpers/utils/titleize"], function (_exports, _titleize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
});


define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("dummy/app")["default"].create({});
}
