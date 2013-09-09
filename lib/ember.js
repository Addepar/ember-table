// Version: v1.0.0-3-g912e5d3
// Last commit: 912e5d3 (2013-09-02 10:26:46 -0400)


(function() {
/*global __fail__*/

/**
Ember Debug

@module ember
@submodule ember-debug
*/

/**
@class Ember
*/

if ('undefined' === typeof Ember) {
  Ember = {};

  if ('undefined' !== typeof window) {
    window.Em = window.Ember = Em = Ember;
  }
}

Ember.ENV = 'undefined' === typeof ENV ? {} : ENV;

if (!('MANDATORY_SETTER' in Ember.ENV)) {
  Ember.ENV.MANDATORY_SETTER = true; // default to true for debug dist
}

/**
  Define an assertion that will throw an exception if the condition is not
  met. Ember build tools will remove any calls to `Ember.assert()` when
  doing a production build. Example:

  ```javascript
  // Test for truthiness
  Ember.assert('Must pass a valid object', obj);
  // Fail unconditionally
  Ember.assert('This code path should never be run')
  ```

  @method assert
  @param {String} desc A description of the assertion. This will become
    the text of the Error thrown if the assertion fails.
  @param {Boolean} test Must be truthy for the assertion to pass. If
    falsy, an exception will be thrown.
*/
Ember.assert = function(desc, test) {
  if (!test) {
    Ember.Logger.assert(test, desc);
  }

  if (Ember.testing && !test) {
    // when testing, ensure test failures when assertions fail
    throw new Error("Assertion Failed: " + desc);
  }
};


/**
  Display a warning with the provided message. Ember build tools will
  remove any calls to `Ember.warn()` when doing a production build.

  @method warn
  @param {String} message A warning to display.
  @param {Boolean} test An optional boolean. If falsy, the warning
    will be displayed.
*/
Ember.warn = function(message, test) {
  if (!test) {
    Ember.Logger.warn("WARNING: "+message);
    if ('trace' in Ember.Logger) Ember.Logger.trace();
  }
};

/**
  Display a debug notice. Ember build tools will remove any calls to
  `Ember.debug()` when doing a production build.

  ```javascript
  Ember.debug("I'm a debug notice!");
  ```

  @method debug
  @param {String} message A debug message to display.
*/
Ember.debug = function(message) {
  Ember.Logger.debug("DEBUG: "+message);
};

/**
  Display a deprecation warning with the provided message and a stack trace
  (Chrome and Firefox only). Ember build tools will remove any calls to
  `Ember.deprecate()` when doing a production build.

  @method deprecate
  @param {String} message A description of the deprecation.
  @param {Boolean} test An optional boolean. If falsy, the deprecation
    will be displayed.
*/
Ember.deprecate = function(message, test) {
  if (Ember.TESTING_DEPRECATION) { return; }

  if (arguments.length === 1) { test = false; }
  if (test) { return; }

  if (Ember.ENV.RAISE_ON_DEPRECATION) { throw new Error(message); }

  var error;

  // When using new Error, we can't do the arguments check for Chrome. Alternatives are welcome
  try { __fail__.fail(); } catch (e) { error = e; }

  if (Ember.LOG_STACKTRACE_ON_DEPRECATION && error.stack) {
    var stack, stackStr = '';
    if (error['arguments']) {
      // Chrome
      stack = error.stack.replace(/^\s+at\s+/gm, '').
                          replace(/^([^\(]+?)([\n$])/gm, '{anonymous}($1)$2').
                          replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm, '{anonymous}($1)').split('\n');
      stack.shift();
    } else {
      // Firefox
      stack = error.stack.replace(/(?:\n@:0)?\s+$/m, '').
                          replace(/^\(/gm, '{anonymous}(').split('\n');
    }

    stackStr = "\n    " + stack.slice(2).join("\n    ");
    message = message + stackStr;
  }

  Ember.Logger.warn("DEPRECATION: "+message);
};



/**
  Display a deprecation warning with the provided message and a stack trace
  (Chrome and Firefox only) when the wrapped method is called.

  Ember build tools will not remove calls to `Ember.deprecateFunc()`, though
  no warnings will be shown in production.

  @method deprecateFunc
  @param {String} message A description of the deprecation.
  @param {Function} func The function to be deprecated.
  @return {Function} a new function that wrapped the original function with a deprecation warning
*/
Ember.deprecateFunc = function(message, func) {
  return function() {
    Ember.deprecate(message);
    return func.apply(this, arguments);
  };
};


// Inform the developer about the Ember Inspector if not installed.
if (!Ember.testing) {
  if (typeof window !== 'undefined' && window.chrome && window.addEventListener) {
    window.addEventListener("load", function() {
      if (document.body && document.body.dataset && !document.body.dataset.emberExtension) {
        Ember.debug('For more advanced debugging, install the Ember Inspector from https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi');
      }
    }, false);
  }
}

})();

// Version: v1.0.0-3-g912e5d3
// Last commit: 912e5d3 (2013-09-02 10:26:46 -0400)


(function() {
var define, requireModule;

(function() {
  var registry = {}, seen = {};

  define = function(name, deps, callback) {
    registry[name] = { deps: deps, callback: callback };
  };

  requireModule = function(name) {
    if (seen[name]) { return seen[name]; }
    seen[name] = {};

    var mod, deps, callback, reified, exports;

    mod = registry[name];

    if (!mod) {
      throw new Error("Module '" + name + "' not found.");
    }

    deps = mod.deps;
    callback = mod.callback;
    reified = [];

    for (var i=0, l=deps.length; i<l; i++) {
      if (deps[i] === 'exports') {
        reified.push(exports = {});
      } else {
        reified.push(requireModule(deps[i]));
      }
    }

    var value = callback.apply(this, reified);
    return seen[name] = exports || value;
  };
})();
(function() {
/*globals Em:true ENV */

/**
@module ember
@submodule ember-metal
*/

/**
  All Ember methods and functions are defined inside of this namespace. You
  generally should not add new properties to this namespace as it may be
  overwritten by future versions of Ember.

  You can also use the shorthand `Em` instead of `Ember`.

  Ember-Runtime is a framework that provides core functions for Ember including
  cross-platform functions, support for property observing and objects. Its
  focus is on small size and performance. You can use this in place of or
  along-side other cross-platform libraries such as jQuery.

  The core Runtime framework is based on the jQuery API with a number of
  performance optimizations.

  @class Ember
  @static
  @version 1.0.0
*/

if ('undefined' === typeof Ember) {
  // Create core object. Make it act like an instance of Ember.Namespace so that
  // objects assigned to it are given a sane string representation.
  Ember = {};
}

// Default imports, exports and lookup to the global object;
var imports = Ember.imports = Ember.imports || this;
var exports = Ember.exports = Ember.exports || this;
var lookup  = Ember.lookup  = Ember.lookup  || this;

// aliases needed to keep minifiers from removing the global context
exports.Em = exports.Ember = Em = Ember;

// Make sure these are set whether Ember was already defined or not

Ember.isNamespace = true;

Ember.toString = function() { return "Ember"; };


/**
  @property VERSION
  @type String
  @default '1.0.0'
  @final
*/
Ember.VERSION = '1.0.0';

/**
  Standard environmental variables. You can define these in a global `ENV`
  variable before loading Ember to control various configuration
  settings.

  @property ENV
  @type Hash
*/

if ('undefined' === typeof ENV) {
  exports.ENV = {};
}

// We disable the RANGE API by default for performance reasons
if ('undefined' === typeof ENV.DISABLE_RANGE_API) {
  ENV.DISABLE_RANGE_API = true;
}


Ember.ENV = Ember.ENV || ENV;

Ember.config = Ember.config || {};

// ..........................................................
// BOOTSTRAP
//

/**
  Determines whether Ember should enhances some built-in object prototypes to
  provide a more friendly API. If enabled, a few methods will be added to
  `Function`, `String`, and `Array`. `Object.prototype` will not be enhanced,
  which is the one that causes most trouble for people.

  In general we recommend leaving this option set to true since it rarely
  conflicts with other code. If you need to turn it off however, you can
  define an `ENV.EXTEND_PROTOTYPES` config to disable it.

  @property EXTEND_PROTOTYPES
  @type Boolean
  @default true
*/
Ember.EXTEND_PROTOTYPES = Ember.ENV.EXTEND_PROTOTYPES;

if (typeof Ember.EXTEND_PROTOTYPES === 'undefined') {
  Ember.EXTEND_PROTOTYPES = true;
}

/**
  Determines whether Ember logs a full stack trace during deprecation warnings

  @property LOG_STACKTRACE_ON_DEPRECATION
  @type Boolean
  @default true
*/
Ember.LOG_STACKTRACE_ON_DEPRECATION = (Ember.ENV.LOG_STACKTRACE_ON_DEPRECATION !== false);

/**
  Determines whether Ember should add ECMAScript 5 shims to older browsers.

  @property SHIM_ES5
  @type Boolean
  @default Ember.EXTEND_PROTOTYPES
*/
Ember.SHIM_ES5 = (Ember.ENV.SHIM_ES5 === false) ? false : Ember.EXTEND_PROTOTYPES;

/**
  Determines whether Ember logs info about version of used libraries

  @property LOG_VERSION
  @type Boolean
  @default true
*/
Ember.LOG_VERSION = (Ember.ENV.LOG_VERSION === false) ? false : true;

/**
  Empty function. Useful for some operations. Always returns `this`.

  @method K
  @private
  @return {Object}
*/
Ember.K = function() { return this; };


// Stub out the methods defined by the ember-debug package in case it's not loaded

if ('undefined' === typeof Ember.assert) { Ember.assert = Ember.K; }
if ('undefined' === typeof Ember.warn) { Ember.warn = Ember.K; }
if ('undefined' === typeof Ember.debug) { Ember.debug = Ember.K; }
if ('undefined' === typeof Ember.deprecate) { Ember.deprecate = Ember.K; }
if ('undefined' === typeof Ember.deprecateFunc) {
  Ember.deprecateFunc = function(_, func) { return func; };
}

/**
  Previously we used `Ember.$.uuid`, however `$.uuid` has been removed from
  jQuery master. We'll just bootstrap our own uuid now.

  @property uuid
  @type Number
  @private
*/
Ember.uuid = 0;

// ..........................................................
// LOGGER
//

function consoleMethod(name) {
  var consoleObj;
  if (imports.console) {
    consoleObj = imports.console;
  } else if (typeof console !== 'undefined') {
    consoleObj = console;
  }

  var method = typeof consoleObj === 'object' ? consoleObj[name] : null;

  if (method) {
    // Older IE doesn't support apply, but Chrome needs it
    if (method.apply) {
      return function() {
        method.apply(consoleObj, arguments);
      };
    } else {
      return function() {
        var message = Array.prototype.join.call(arguments, ', ');
        method(message);
      };
    }
  }
}

function assertPolyfill(test, message) {
  if (!test) {
    try {
      // attempt to preserve the stack
      throw new Error("assertion failed: " + message);
    } catch(error) {
      setTimeout(function() {
        throw error;
      }, 0);
    }
  }
}

/**
  Inside Ember-Metal, simply uses the methods from `imports.console`.
  Override this to provide more robust logging functionality.

  @class Logger
  @namespace Ember
*/
Ember.Logger = {
  /**
   Logs the arguments to the console.
   You can pass as many arguments as you want and they will be joined together with a space.

    ```javascript
    var foo = 1;
    Ember.Logger.log('log value of foo:', foo); // "log value of foo: 1" will be printed to the console
    ```

   @method log
   @for Ember.Logger
   @param {*} arguments
  */
  log:   consoleMethod('log')   || Ember.K,
  /**
   Prints the arguments to the console with a warning icon.
   You can pass as many arguments as you want and they will be joined together with a space.

    ```javascript
    Ember.Logger.warn('Something happened!'); // "Something happened!" will be printed to the console with a warning icon.
    ```

   @method warn
   @for Ember.Logger
   @param {*} arguments
  */
  warn:  consoleMethod('warn')  || Ember.K,
  /**
   Prints the arguments to the console with an error icon, red text and a stack race.
   You can pass as many arguments as you want and they will be joined together with a space.

    ```javascript
    Ember.Logger.error('Danger! Danger!'); // "Danger! Danger!" will be printed to the console in red text.
    ```

   @method error
   @for Ember.Logger
   @param {*} arguments
  */
  error: consoleMethod('error') || Ember.K,
  /**
   Logs the arguments to the console.
   You can pass as many arguments as you want and they will be joined together with a space.

    ```javascript
    var foo = 1;
    Ember.Logger.info('log value of foo:', foo); // "log value of foo: 1" will be printed to the console
    ```

   @method info
   @for Ember.Logger
   @param {*} arguments
  */
  info:  consoleMethod('info')  || Ember.K,
  /**
   Logs the arguments to the console in blue text.
   You can pass as many arguments as you want and they will be joined together with a space.

    ```javascript
    var foo = 1;
    Ember.Logger.debug('log value of foo:', foo); // "log value of foo: 1" will be printed to the console
    ```

   @method debug
   @for Ember.Logger
   @param {*} arguments
  */
  debug: consoleMethod('debug') || consoleMethod('info') || Ember.K,
  /**

   If the value passed into Ember.Logger.assert is not truthy it will throw an error with a stack trace.

    ```javascript
    Ember.Logger.assert(true); // undefined
    Ember.Logger.assert(true === false); // Throws an Assertion failed error.
    ```

   @method assert
   @for Ember.Logger
   @param @param {Boolean} bool Value to test
  */
  assert: consoleMethod('assert') || assertPolyfill
};


// ..........................................................
// ERROR HANDLING
//

/**
  A function may be assigned to `Ember.onerror` to be called when Ember
  internals encounter an error. This is useful for specialized error handling
  and reporting code.

  ```javascript
  Ember.onerror = function(error) {
    Em.$.ajax('/report-error', 'POST', {
      stack: error.stack,
      otherInformation: 'whatever app state you want to provide'
    });
  };
  ```

  @event onerror
  @for Ember
  @param {Exception} error the error object
*/
Ember.onerror = null;

/**
  @private

  Wrap code block in a try/catch if `Ember.onerror` is set.

  @method handleErrors
  @for Ember
  @param {Function} func
  @param [context]
*/
Ember.handleErrors = function(func, context) {
  // Unfortunately in some browsers we lose the backtrace if we rethrow the existing error,
  // so in the event that we don't have an `onerror` handler we don't wrap in a try/catch
  if ('function' === typeof Ember.onerror) {
    try {
      return func.call(context || this);
    } catch (error) {
      Ember.onerror(error);
    }
  } else {
    return func.call(context || this);
  }
};

/**
  Merge the contents of two objects together into the first object.

  ```javascript
  Ember.merge({first: 'Tom'}, {last: 'Dale'}); // {first: 'Tom', last: 'Dale'}
  var a = {first: 'Yehuda'}, b = {last: 'Katz'};
  Ember.merge(a, b); // a == {first: 'Yehuda', last: 'Katz'}, b == {last: 'Katz'}
  ```

  @method merge
  @for Ember
  @param {Object} original The object to merge into
  @param {Object} updates The object to copy properties from
  @return {Object}
*/
Ember.merge = function(original, updates) {
  for (var prop in updates) {
    if (!updates.hasOwnProperty(prop)) { continue; }
    original[prop] = updates[prop];
  }
  return original;
};

/**
  Returns true if the passed value is null or undefined. This avoids errors
  from JSLint complaining about use of ==, which can be technically
  confusing.

  ```javascript
  Ember.isNone();              // true
  Ember.isNone(null);          // true
  Ember.isNone(undefined);     // true
  Ember.isNone('');            // false
  Ember.isNone([]);            // false
  Ember.isNone(function() {});  // false
  ```

  @method isNone
  @for Ember
  @param {Object} obj Value to test
  @return {Boolean}
*/
Ember.isNone = function(obj) {
  return obj === null || obj === undefined;
};
Ember.none = Ember.deprecateFunc("Ember.none is deprecated. Please use Ember.isNone instead.", Ember.isNone);

/**
  Verifies that a value is `null` or an empty string, empty array,
  or empty function.

  Constrains the rules on `Ember.isNone` by returning false for empty
  string and empty arrays.

  ```javascript
  Ember.isEmpty();                // true
  Ember.isEmpty(null);            // true
  Ember.isEmpty(undefined);       // true
  Ember.isEmpty('');              // true
  Ember.isEmpty([]);              // true
  Ember.isEmpty('Adam Hawkins');  // false
  Ember.isEmpty([0,1,2]);         // false
  ```

  @method isEmpty
  @for Ember
  @param {Object} obj Value to test
  @return {Boolean}
*/
Ember.isEmpty = function(obj) {
  return Ember.isNone(obj) || (obj.length === 0 && typeof obj !== 'function') || (typeof obj === 'object' && Ember.get(obj, 'length') === 0);
};
Ember.empty = Ember.deprecateFunc("Ember.empty is deprecated. Please use Ember.isEmpty instead.", Ember.isEmpty) ;


})();



(function() {
/*globals Node */
/**
@module ember-metal
*/

/**
  Platform specific methods and feature detectors needed by the framework.

  @class platform
  @namespace Ember
  @static
*/
var platform = Ember.platform = {};


/**
  Identical to `Object.create()`. Implements if not available natively.

  @method create
  @for Ember
*/
Ember.create = Object.create;

// IE8 has Object.create but it couldn't treat property descripters.
if (Ember.create) {
  if (Ember.create({a: 1}, {a: {value: 2}}).a !== 2) {
    Ember.create = null;
  }
}

// STUB_OBJECT_CREATE allows us to override other libraries that stub
// Object.create different than we would prefer
if (!Ember.create || Ember.ENV.STUB_OBJECT_CREATE) {
  var K = function() {};

  Ember.create = function(obj, props) {
    K.prototype = obj;
    obj = new K();
    if (props) {
      K.prototype = obj;
      for (var prop in props) {
        K.prototype[prop] = props[prop].value;
      }
      obj = new K();
    }
    K.prototype = null;

    return obj;
  };

  Ember.create.isSimulated = true;
}

var defineProperty = Object.defineProperty;
var canRedefineProperties, canDefinePropertyOnDOM;

// Catch IE8 where Object.defineProperty exists but only works on DOM elements
if (defineProperty) {
  try {
    defineProperty({}, 'a',{get:function() {}});
  } catch (e) {
    defineProperty = null;
  }
}

if (defineProperty) {
  // Detects a bug in Android <3.2 where you cannot redefine a property using
  // Object.defineProperty once accessors have already been set.
  canRedefineProperties = (function() {
    var obj = {};

    defineProperty(obj, 'a', {
      configurable: true,
      enumerable: true,
      get: function() { },
      set: function() { }
    });

    defineProperty(obj, 'a', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: true
    });

    return obj.a === true;
  })();

  // This is for Safari 5.0, which supports Object.defineProperty, but not
  // on DOM nodes.
  canDefinePropertyOnDOM = (function() {
    try {
      defineProperty(document.createElement('div'), 'definePropertyOnDOM', {});
      return true;
    } catch(e) { }

    return false;
  })();

  if (!canRedefineProperties) {
    defineProperty = null;
  } else if (!canDefinePropertyOnDOM) {
    defineProperty = function(obj, keyName, desc) {
      var isNode;

      if (typeof Node === "object") {
        isNode = obj instanceof Node;
      } else {
        isNode = typeof obj === "object" && typeof obj.nodeType === "number" && typeof obj.nodeName === "string";
      }

      if (isNode) {
        // TODO: Should we have a warning here?
        return (obj[keyName] = desc.value);
      } else {
        return Object.defineProperty(obj, keyName, desc);
      }
    };
  }
}

/**
@class platform
@namespace Ember
*/

/**
  Identical to `Object.defineProperty()`. Implements as much functionality
  as possible if not available natively.

  @method defineProperty
  @param {Object} obj The object to modify
  @param {String} keyName property name to modify
  @param {Object} desc descriptor hash
  @return {void}
*/
platform.defineProperty = defineProperty;

/**
  Set to true if the platform supports native getters and setters.

  @property hasPropertyAccessors
  @final
*/
platform.hasPropertyAccessors = true;

if (!platform.defineProperty) {
  platform.hasPropertyAccessors = false;

  platform.defineProperty = function(obj, keyName, desc) {
    if (!desc.get) { obj[keyName] = desc.value; }
  };

  platform.defineProperty.isSimulated = true;
}

if (Ember.ENV.MANDATORY_SETTER && !platform.hasPropertyAccessors) {
  Ember.ENV.MANDATORY_SETTER = false;
}

})();



(function() {
/*jshint newcap:false*/
/**
@module ember-metal
*/

// NOTE: There is a bug in jshint that doesn't recognize `Object()` without `new`
// as being ok unless both `newcap:false` and not `use strict`.
// https://github.com/jshint/jshint/issues/392

// Testing this is not ideal, but we want to use native functions
// if available, but not to use versions created by libraries like Prototype
var isNativeFunc = function(func) {
  // This should probably work in all browsers likely to have ES5 array methods
  return func && Function.prototype.toString.call(func).indexOf('[native code]') > -1;
};

// From: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/map
var arrayMap = isNativeFunc(Array.prototype.map) ? Array.prototype.map : function(fun /*, thisp */) {
  //"use strict";

  if (this === void 0 || this === null) {
    throw new TypeError();
  }

  var t = Object(this);
  var len = t.length >>> 0;
  if (typeof fun !== "function") {
    throw new TypeError();
  }

  var res = new Array(len);
  var thisp = arguments[1];
  for (var i = 0; i < len; i++) {
    if (i in t) {
      res[i] = fun.call(thisp, t[i], i, t);
    }
  }

  return res;
};

// From: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/foreach
var arrayForEach = isNativeFunc(Array.prototype.forEach) ? Array.prototype.forEach : function(fun /*, thisp */) {
  //"use strict";

  if (this === void 0 || this === null) {
    throw new TypeError();
  }

  var t = Object(this);
  var len = t.length >>> 0;
  if (typeof fun !== "function") {
    throw new TypeError();
  }

  var thisp = arguments[1];
  for (var i = 0; i < len; i++) {
    if (i in t) {
      fun.call(thisp, t[i], i, t);
    }
  }
};

var arrayIndexOf = isNativeFunc(Array.prototype.indexOf) ? Array.prototype.indexOf : function (obj, fromIndex) {
  if (fromIndex === null || fromIndex === undefined) { fromIndex = 0; }
  else if (fromIndex < 0) { fromIndex = Math.max(0, this.length + fromIndex); }
  for (var i = fromIndex, j = this.length; i < j; i++) {
    if (this[i] === obj) { return i; }
  }
  return -1;
};

/**
  Array polyfills to support ES5 features in older browsers.

  @namespace Ember
  @property ArrayPolyfills
*/
Ember.ArrayPolyfills = {
  map: arrayMap,
  forEach: arrayForEach,
  indexOf: arrayIndexOf
};

if (Ember.SHIM_ES5) {
  if (!Array.prototype.map) {
    Array.prototype.map = arrayMap;
  }

  if (!Array.prototype.forEach) {
    Array.prototype.forEach = arrayForEach;
  }

  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = arrayIndexOf;
  }
}

})();



(function() {
/**
@module ember-metal
*/


var o_defineProperty = Ember.platform.defineProperty,
    o_create = Ember.create,
    // Used for guid generation...
    GUID_KEY = '__ember'+ (+ new Date()),
    uuid         = 0,
    numberCache  = [],
    stringCache  = {};

var MANDATORY_SETTER = Ember.ENV.MANDATORY_SETTER;

/**
  @private

  A unique key used to assign guids and other private metadata to objects.
  If you inspect an object in your browser debugger you will often see these.
  They can be safely ignored.

  On browsers that support it, these properties are added with enumeration
  disabled so they won't show up when you iterate over your properties.

  @property GUID_KEY
  @for Ember
  @type String
  @final
*/
Ember.GUID_KEY = GUID_KEY;

var GUID_DESC = {
  writable:    false,
  configurable: false,
  enumerable:  false,
  value: null
};

/**
  @private

  Generates a new guid, optionally saving the guid to the object that you
  pass in. You will rarely need to use this method. Instead you should
  call `Ember.guidFor(obj)`, which return an existing guid if available.

  @method generateGuid
  @for Ember
  @param {Object} [obj] Object the guid will be used for. If passed in, the guid will
    be saved on the object and reused whenever you pass the same object
    again.

    If no object is passed, just generate a new guid.
  @param {String} [prefix] Prefix to place in front of the guid. Useful when you want to
    separate the guid into separate namespaces.
  @return {String} the guid
*/
Ember.generateGuid = function generateGuid(obj, prefix) {
  if (!prefix) prefix = 'ember';
  var ret = (prefix + (uuid++));
  if (obj) {
    GUID_DESC.value = ret;
    o_defineProperty(obj, GUID_KEY, GUID_DESC);
  }
  return ret ;
};

/**
  @private

  Returns a unique id for the object. If the object does not yet have a guid,
  one will be assigned to it. You can call this on any object,
  `Ember.Object`-based or not, but be aware that it will add a `_guid`
  property.

  You can also use this method on DOM Element objects.

  @method guidFor
  @for Ember
  @param {Object} obj any object, string, number, Element, or primitive
  @return {String} the unique guid for this instance.
*/
Ember.guidFor = function guidFor(obj) {

  // special cases where we don't want to add a key to object
  if (obj === undefined) return "(undefined)";
  if (obj === null) return "(null)";

  var ret;
  var type = typeof obj;

  // Don't allow prototype changes to String etc. to change the guidFor
  switch(type) {
    case 'number':
      ret = numberCache[obj];
      if (!ret) ret = numberCache[obj] = 'nu'+obj;
      return ret;

    case 'string':
      ret = stringCache[obj];
      if (!ret) ret = stringCache[obj] = 'st'+(uuid++);
      return ret;

    case 'boolean':
      return obj ? '(true)' : '(false)';

    default:
      if (obj[GUID_KEY]) return obj[GUID_KEY];
      if (obj === Object) return '(Object)';
      if (obj === Array)  return '(Array)';
      ret = 'ember'+(uuid++);
      GUID_DESC.value = ret;
      o_defineProperty(obj, GUID_KEY, GUID_DESC);
      return ret;
  }
};

// ..........................................................
// META
//

var META_DESC = {
  writable:    true,
  configurable: false,
  enumerable:  false,
  value: null
};

var META_KEY = Ember.GUID_KEY+'_meta';

/**
  The key used to store meta information on object for property observing.

  @property META_KEY
  @for Ember
  @private
  @final
  @type String
*/
Ember.META_KEY = META_KEY;

// Placeholder for non-writable metas.
var EMPTY_META = {
  descs: {},
  watching: {}
};

if (MANDATORY_SETTER) { EMPTY_META.values = {}; }

Ember.EMPTY_META = EMPTY_META;

if (Object.freeze) Object.freeze(EMPTY_META);

var isDefinePropertySimulated = Ember.platform.defineProperty.isSimulated;

function Meta(obj) {
  this.descs = {};
  this.watching = {};
  this.cache = {};
  this.source = obj;
}

if (isDefinePropertySimulated) {
  // on platforms that don't support enumerable false
  // make meta fail jQuery.isPlainObject() to hide from
  // jQuery.extend() by having a property that fails
  // hasOwnProperty check.
  Meta.prototype.__preventPlainObject__ = true;

  // Without non-enumerable properties, meta objects will be output in JSON
  // unless explicitly suppressed
  Meta.prototype.toJSON = function () { };
}

/**
  Retrieves the meta hash for an object. If `writable` is true ensures the
  hash is writable for this object as well.

  The meta object contains information about computed property descriptors as
  well as any watched properties and other information. You generally will
  not access this information directly but instead work with higher level
  methods that manipulate this hash indirectly.

  @method meta
  @for Ember
  @private

  @param {Object} obj The object to retrieve meta for
  @param {Boolean} [writable=true] Pass `false` if you do not intend to modify
    the meta hash, allowing the method to avoid making an unnecessary copy.
  @return {Object} the meta hash for an object
*/
Ember.meta = function meta(obj, writable) {

  var ret = obj[META_KEY];
  if (writable===false) return ret || EMPTY_META;

  if (!ret) {
    if (!isDefinePropertySimulated) o_defineProperty(obj, META_KEY, META_DESC);

    ret = new Meta(obj);

    if (MANDATORY_SETTER) { ret.values = {}; }

    obj[META_KEY] = ret;

    // make sure we don't accidentally try to create constructor like desc
    ret.descs.constructor = null;

  } else if (ret.source !== obj) {
    if (!isDefinePropertySimulated) o_defineProperty(obj, META_KEY, META_DESC);

    ret = o_create(ret);
    ret.descs    = o_create(ret.descs);
    ret.watching = o_create(ret.watching);
    ret.cache    = {};
    ret.source   = obj;

    if (MANDATORY_SETTER) { ret.values = o_create(ret.values); }

    obj[META_KEY] = ret;
  }
  return ret;
};

Ember.getMeta = function getMeta(obj, property) {
  var meta = Ember.meta(obj, false);
  return meta[property];
};

Ember.setMeta = function setMeta(obj, property, value) {
  var meta = Ember.meta(obj, true);
  meta[property] = value;
  return value;
};

/**
  @deprecated
  @private

  In order to store defaults for a class, a prototype may need to create
  a default meta object, which will be inherited by any objects instantiated
  from the class's constructor.

  However, the properties of that meta object are only shallow-cloned,
  so if a property is a hash (like the event system's `listeners` hash),
  it will by default be shared across all instances of that class.

  This method allows extensions to deeply clone a series of nested hashes or
  other complex objects. For instance, the event system might pass
  `['listeners', 'foo:change', 'ember157']` to `prepareMetaPath`, which will
  walk down the keys provided.

  For each key, if the key does not exist, it is created. If it already
  exists and it was inherited from its constructor, the constructor's
  key is cloned.

  You can also pass false for `writable`, which will simply return
  undefined if `prepareMetaPath` discovers any part of the path that
  shared or undefined.

  @method metaPath
  @for Ember
  @param {Object} obj The object whose meta we are examining
  @param {Array} path An array of keys to walk down
  @param {Boolean} writable whether or not to create a new meta
    (or meta property) if one does not already exist or if it's
    shared with its constructor
*/
Ember.metaPath = function metaPath(obj, path, writable) {
  Ember.deprecate("Ember.metaPath is deprecated and will be removed from future releases.");
  var meta = Ember.meta(obj, writable), keyName, value;

  for (var i=0, l=path.length; i<l; i++) {
    keyName = path[i];
    value = meta[keyName];

    if (!value) {
      if (!writable) { return undefined; }
      value = meta[keyName] = { __ember_source__: obj };
    } else if (value.__ember_source__ !== obj) {
      if (!writable) { return undefined; }
      value = meta[keyName] = o_create(value);
      value.__ember_source__ = obj;
    }

    meta = value;
  }

  return value;
};

/**
  @private

  Wraps the passed function so that `this._super` will point to the superFunc
  when the function is invoked. This is the primitive we use to implement
  calls to super.

  @method wrap
  @for Ember
  @param {Function} func The function to call
  @param {Function} superFunc The super function.
  @return {Function} wrapped function.
*/
Ember.wrap = function(func, superFunc) {
  function K() {}

  function superWrapper() {
    var ret, sup = this._super;
    this._super = superFunc || K;
    ret = func.apply(this, arguments);
    this._super = sup;
    return ret;
  }

  superWrapper.wrappedFunction = func;
  superWrapper.__ember_observes__ = func.__ember_observes__;
  superWrapper.__ember_observesBefore__ = func.__ember_observesBefore__;
  superWrapper.__ember_listens__ = func.__ember_listens__;

  return superWrapper;
};

/**
  Returns true if the passed object is an array or Array-like.

  Ember Array Protocol:

    - the object has an objectAt property
    - the object is a native Array
    - the object is an Object, and has a length property

  Unlike `Ember.typeOf` this method returns true even if the passed object is
  not formally array but appears to be array-like (i.e. implements `Ember.Array`)

  ```javascript
  Ember.isArray();                                            // false
  Ember.isArray([]);                                          // true
  Ember.isArray( Ember.ArrayProxy.create({ content: [] }) );  // true
  ```

  @method isArray
  @for Ember
  @param {Object} obj The object to test
  @return {Boolean} true if the passed object is an array or Array-like
*/
Ember.isArray = function(obj) {
  if (!obj || obj.setInterval) { return false; }
  if (Array.isArray && Array.isArray(obj)) { return true; }
  if (Ember.Array && Ember.Array.detect(obj)) { return true; }
  if ((obj.length !== undefined) && 'object'===typeof obj) { return true; }
  return false;
};

/**
  Forces the passed object to be part of an array. If the object is already
  an array or array-like, returns the object. Otherwise adds the object to
  an array. If obj is `null` or `undefined`, returns an empty array.

  ```javascript
  Ember.makeArray();                           // []
  Ember.makeArray(null);                       // []
  Ember.makeArray(undefined);                  // []
  Ember.makeArray('lindsay');                  // ['lindsay']
  Ember.makeArray([1,2,42]);                   // [1,2,42]

  var controller = Ember.ArrayProxy.create({ content: [] });
  Ember.makeArray(controller) === controller;  // true
  ```

  @method makeArray
  @for Ember
  @param {Object} obj the object
  @return {Array}
*/
Ember.makeArray = function(obj) {
  if (obj === null || obj === undefined) { return []; }
  return Ember.isArray(obj) ? obj : [obj];
};

function canInvoke(obj, methodName) {
  return !!(obj && typeof obj[methodName] === 'function');
}

/**
  Checks to see if the `methodName` exists on the `obj`.

  ```javascript
  var foo = {bar: Ember.K, baz: null};
  Ember.canInvoke(foo, 'bar'); // true
  Ember.canInvoke(foo, 'baz'); // false
  Ember.canInvoke(foo, 'bat'); // false
  ```

  @method canInvoke
  @for Ember
  @param {Object} obj The object to check for the method
  @param {String} methodName The method name to check for
  @return {Boolean}
*/
Ember.canInvoke = canInvoke;

/**
  Checks to see if the `methodName` exists on the `obj`,
  and if it does, invokes it with the arguments passed.

  ```javascript
  var d = new Date('03/15/2013');
  Ember.tryInvoke(d, 'getTime'); // 1363320000000
  Ember.tryInvoke(d, 'setFullYear', [2014]); // 1394856000000
  Ember.tryInvoke(d, 'noSuchMethod', [2014]); // undefined
  ```

  @method tryInvoke
  @for Ember
  @param {Object} obj The object to check for the method
  @param {String} methodName The method name to check for
  @param {Array} [args] The arguments to pass to the method
  @return {*} the return value of the invoked method or undefined if it cannot be invoked
*/
Ember.tryInvoke = function(obj, methodName, args) {
  if (canInvoke(obj, methodName)) {
    return obj[methodName].apply(obj, args || []);
  }
};

// https://github.com/emberjs/ember.js/pull/1617
var needsFinallyFix = (function() {
  var count = 0;
  try{
    try { }
    finally {
      count++;
      throw new Error('needsFinallyFixTest');
    }
  } catch (e) {}

  return count !== 1;
})();

/**
  Provides try { } finally { } functionality, while working
  around Safari's double finally bug.

  ```javascript
  var tryable = function() {
    someResource.lock();
    runCallback(); // May throw error.
  };
  var finalizer = function() {
    someResource.unlock();
  };
  Ember.tryFinally(tryable, finalizer);
  ```

  @method tryFinally
  @for Ember
  @param {Function} tryable The function to run the try callback
  @param {Function} finalizer The function to run the finally callback
  @param {Object} [binding] The optional calling object. Defaults to 'this'
  @return {*} The return value is the that of the finalizer,
  unless that value is undefined, in which case it is the return value
  of the tryable
*/

if (needsFinallyFix) {
  Ember.tryFinally = function(tryable, finalizer, binding) {
    var result, finalResult, finalError;

    binding = binding || this;

    try {
      result = tryable.call(binding);
    } finally {
      try {
        finalResult = finalizer.call(binding);
      } catch (e) {
        finalError = e;
      }
    }

    if (finalError) { throw finalError; }

    return (finalResult === undefined) ? result : finalResult;
  };
} else {
  Ember.tryFinally = function(tryable, finalizer, binding) {
    var result, finalResult;

    binding = binding || this;

    try {
      result = tryable.call(binding);
    } finally {
      finalResult = finalizer.call(binding);
    }

    return (finalResult === undefined) ? result : finalResult;
  };
}

/**
  Provides try { } catch finally { } functionality, while working
  around Safari's double finally bug.

  ```javascript
  var tryable = function() {
    for (i=0, l=listeners.length; i<l; i++) {
      listener = listeners[i];
      beforeValues[i] = listener.before(name, time(), payload);
    }

    return callback.call(binding);
  };

  var catchable = function(e) {
    payload = payload || {};
    payload.exception = e;
  };

  var finalizer = function() {
    for (i=0, l=listeners.length; i<l; i++) {
      listener = listeners[i];
      listener.after(name, time(), payload, beforeValues[i]);
    }
  };
  Ember.tryCatchFinally(tryable, catchable, finalizer);
  ```

  @method tryCatchFinally
  @for Ember
  @param {Function} tryable The function to run the try callback
  @param {Function} catchable The function to run the catchable callback
  @param {Function} finalizer The function to run the finally callback
  @param {Object} [binding] The optional calling object. Defaults to 'this'
  @return {*} The return value is the that of the finalizer,
  unless that value is undefined, in which case it is the return value
  of the tryable.
*/
if (needsFinallyFix) {
  Ember.tryCatchFinally = function(tryable, catchable, finalizer, binding) {
    var result, finalResult, finalError;

    binding = binding || this;

    try {
      result = tryable.call(binding);
    } catch(error) {
      result = catchable.call(binding, error);
    } finally {
      try {
        finalResult = finalizer.call(binding);
      } catch (e) {
        finalError = e;
      }
    }

    if (finalError) { throw finalError; }

    return (finalResult === undefined) ? result : finalResult;
  };
} else {
  Ember.tryCatchFinally = function(tryable, catchable, finalizer, binding) {
    var result, finalResult;

    binding = binding || this;

    try {
      result = tryable.call(binding);
    } catch(error) {
      result = catchable.call(binding, error);
    } finally {
      finalResult = finalizer.call(binding);
    }

    return (finalResult === undefined) ? result : finalResult;
  };
}

// ........................................
// TYPING & ARRAY MESSAGING
//

var TYPE_MAP = {};
var t = "Boolean Number String Function Array Date RegExp Object".split(" ");
Ember.ArrayPolyfills.forEach.call(t, function(name) {
  TYPE_MAP[ "[object " + name + "]" ] = name.toLowerCase();
});

var toString = Object.prototype.toString;

/**
  Returns a consistent type for the passed item.

  Use this instead of the built-in `typeof` to get the type of an item.
  It will return the same result across all browsers and includes a bit
  more detail. Here is what will be returned:

      | Return Value  | Meaning                                              |
      |---------------|------------------------------------------------------|
      | 'string'      | String primitive                                     |
      | 'number'      | Number primitive                                     |
      | 'boolean'     | Boolean primitive                                    |
      | 'null'        | Null value                                           |
      | 'undefined'   | Undefined value                                      |
      | 'function'    | A function                                           |
      | 'array'       | An instance of Array                                 |
      | 'class'       | An Ember class (created using Ember.Object.extend()) |
      | 'instance'    | An Ember object instance                             |
      | 'error'       | An instance of the Error object                      |
      | 'object'      | A JavaScript object not inheriting from Ember.Object |

  Examples:

  ```javascript
  Ember.typeOf();                       // 'undefined'
  Ember.typeOf(null);                   // 'null'
  Ember.typeOf(undefined);              // 'undefined'
  Ember.typeOf('michael');              // 'string'
  Ember.typeOf(101);                    // 'number'
  Ember.typeOf(true);                   // 'boolean'
  Ember.typeOf(Ember.makeArray);        // 'function'
  Ember.typeOf([1,2,90]);               // 'array'
  Ember.typeOf(Ember.Object.extend());  // 'class'
  Ember.typeOf(Ember.Object.create());  // 'instance'
  Ember.typeOf(new Error('teamocil'));  // 'error'

  // "normal" JavaScript object
  Ember.typeOf({a: 'b'});              // 'object'
  ```

  @method typeOf
  @for Ember
  @param {Object} item the item to check
  @return {String} the type
*/
Ember.typeOf = function(item) {
  var ret;

  ret = (item === null || item === undefined) ? String(item) : TYPE_MAP[toString.call(item)] || 'object';

  if (ret === 'function') {
    if (Ember.Object && Ember.Object.detect(item)) ret = 'class';
  } else if (ret === 'object') {
    if (item instanceof Error) ret = 'error';
    else if (Ember.Object && item instanceof Ember.Object) ret = 'instance';
    else ret = 'object';
  }

  return ret;
};

})();



(function() {
// Ember.tryCatchFinally

/**
  The purpose of the Ember Instrumentation module is
  to provide efficient, general-purpose instrumentation
  for Ember.

  Subscribe to a listener by using `Ember.subscribe`:

  ```javascript
  Ember.subscribe("render", {
    before: function(name, timestamp, payload) {

    },

    after: function(name, timestamp, payload) {

    }
  });
  ```

  If you return a value from the `before` callback, that same
  value will be passed as a fourth parameter to the `after`
  callback.

  Instrument a block of code by using `Ember.instrument`:

  ```javascript
  Ember.instrument("render.handlebars", payload, function() {
    // rendering logic
  }, binding);
  ```

  Event names passed to `Ember.instrument` are namespaced
  by periods, from more general to more specific. Subscribers
  can listen for events by whatever level of granularity they
  are interested in.

  In the above example, the event is `render.handlebars`,
  and the subscriber listened for all events beginning with
  `render`. It would receive callbacks for events named
  `render`, `render.handlebars`, `render.container`, or
  even `render.handlebars.layout`.

  @class Instrumentation
  @namespace Ember
  @static
*/
Ember.Instrumentation = {};

var subscribers = [], cache = {};

var populateListeners = function(name) {
  var listeners = [], subscriber;

  for (var i=0, l=subscribers.length; i<l; i++) {
    subscriber = subscribers[i];
    if (subscriber.regex.test(name)) {
      listeners.push(subscriber.object);
    }
  }

  cache[name] = listeners;
  return listeners;
};

var time = (function() {
  var perf = 'undefined' !== typeof window ? window.performance || {} : {};
  var fn = perf.now || perf.mozNow || perf.webkitNow || perf.msNow || perf.oNow;
  // fn.bind will be available in all the browsers that support the advanced window.performance... ;-)
  return fn ? fn.bind(perf) : function() { return +new Date(); };
})();

/**
  Notifies event's subscribers, calls `before` and `after` hooks.

  @method instrument
  @namespace Ember.Instrumentation

  @param {String} [name] Namespaced event name.
  @param {Object} payload
  @param {Function} callback Function that you're instrumenting.
  @param {Object} binding Context that instrument function is called with.
*/
Ember.Instrumentation.instrument = function(name, payload, callback, binding) {
  var listeners = cache[name], timeName, ret;

  if (Ember.STRUCTURED_PROFILE) {
    timeName = name + ": " + payload.object;
    console.time(timeName);
  }

  if (!listeners) {
    listeners = populateListeners(name);
  }

  if (listeners.length === 0) {
    ret = callback.call(binding);
    if (Ember.STRUCTURED_PROFILE) { console.timeEnd(timeName); }
    return ret;
  }

  var beforeValues = [], listener, i, l;

  function tryable() {
    for (i=0, l=listeners.length; i<l; i++) {
      listener = listeners[i];
      beforeValues[i] = listener.before(name, time(), payload);
    }

    return callback.call(binding);
  }

  function catchable(e) {
    payload = payload || {};
    payload.exception = e;
  }

  function finalizer() {
    for (i=0, l=listeners.length; i<l; i++) {
      listener = listeners[i];
      listener.after(name, time(), payload, beforeValues[i]);
    }

    if (Ember.STRUCTURED_PROFILE) {
      console.timeEnd(timeName);
    }
  }

  return Ember.tryCatchFinally(tryable, catchable, finalizer);
};

/**
  Subscribes to a particular event or instrumented block of code.

  @method subscribe
  @namespace Ember.Instrumentation

  @param {String} [pattern] Namespaced event name.
  @param {Object} [object] Before and After hooks.
*/
Ember.Instrumentation.subscribe = function(pattern, object) {
  var paths = pattern.split("."), path, regex = [];

  for (var i=0, l=paths.length; i<l; i++) {
    path = paths[i];
    if (path === "*") {
      regex.push("[^\\.]*");
    } else {
      regex.push(path);
    }
  }

  regex = regex.join("\\.");
  regex = regex + "(\\..*)?";

  var subscriber = {
    pattern: pattern,
    regex: new RegExp("^" + regex + "$"),
    object: object
  };

  subscribers.push(subscriber);
  cache = {};

  return subscriber;
};

/**
  Unsubscribes from a particular event or instrumented block of code.

  @method unsubscribe
  @namespace Ember.Instrumentation

  @param {Object} [subscriber]
*/
Ember.Instrumentation.unsubscribe = function(subscriber) {
  var index;

  for (var i=0, l=subscribers.length; i<l; i++) {
    if (subscribers[i] === subscriber) {
      index = i;
    }
  }

  subscribers.splice(index, 1);
  cache = {};
};

/**
  Resets `Ember.Instrumentation` by flushing list of subscribers.

  @method reset
  @namespace Ember.Instrumentation
*/
Ember.Instrumentation.reset = function() {
  subscribers = [];
  cache = {};
};

Ember.instrument = Ember.Instrumentation.instrument;
Ember.subscribe = Ember.Instrumentation.subscribe;
})();



(function() {
var map, forEach, indexOf, splice;
map     = Array.prototype.map     || Ember.ArrayPolyfills.map;
forEach = Array.prototype.forEach || Ember.ArrayPolyfills.forEach;
indexOf = Array.prototype.indexOf || Ember.ArrayPolyfills.indexOf;
splice = Array.prototype.splice;

var utils = Ember.EnumerableUtils = {
  map: function(obj, callback, thisArg) {
    return obj.map ? obj.map.call(obj, callback, thisArg) : map.call(obj, callback, thisArg);
  },

  forEach: function(obj, callback, thisArg) {
    return obj.forEach ? obj.forEach.call(obj, callback, thisArg) : forEach.call(obj, callback, thisArg);
  },

  indexOf: function(obj, element, index) {
    return obj.indexOf ? obj.indexOf.call(obj, element, index) : indexOf.call(obj, element, index);
  },

  indexesOf: function(obj, elements) {
    return elements === undefined ? [] : utils.map(elements, function(item) {
      return utils.indexOf(obj, item);
    });
  },

  addObject: function(array, item) {
    var index = utils.indexOf(array, item);
    if (index === -1) { array.push(item); }
  },

  removeObject: function(array, item) {
    var index = utils.indexOf(array, item);
    if (index !== -1) { array.splice(index, 1); }
  },

  _replace: function(array, idx, amt, objects) {
    var args = [].concat(objects), chunk, ret = [],
        // https://code.google.com/p/chromium/issues/detail?id=56588
        size = 60000, start = idx, ends = amt, count;

    while (args.length) {
      count = ends > size ? size : ends;
      if (count <= 0) { count = 0; }

      chunk = args.splice(0, size);
      chunk = [start, count].concat(chunk);

      start += size;
      ends -= count;

      ret = ret.concat(splice.apply(array, chunk));
    }
    return ret;
  },

  replace: function(array, idx, amt, objects) {
    if (array.replace) {
      return array.replace(idx, amt, objects);
    } else {
      return utils._replace(array, idx, amt, objects);
    }
  },

  intersection: function(array1, array2) {
    var intersection = [];

    utils.forEach(array1, function(element) {
      if (utils.indexOf(array2, element) >= 0) {
        intersection.push(element);
      }
    });

    return intersection;
  }
};

})();



(function() {
/**
@module ember-metal
*/

var META_KEY = Ember.META_KEY, get;

var MANDATORY_SETTER = Ember.ENV.MANDATORY_SETTER;

var IS_GLOBAL_PATH = /^([A-Z$]|([0-9][A-Z$])).*[\.\*]/;
var HAS_THIS  = /^this[\.\*]/;
var FIRST_KEY = /^([^\.\*]+)/;

// ..........................................................
// GET AND SET
//
// If we are on a platform that supports accessors we can use those.
// Otherwise simulate accessors by looking up the property directly on the
// object.

/**
  Gets the value of a property on an object. If the property is computed,
  the function will be invoked. If the property is not defined but the
  object implements the `unknownProperty` method then that will be invoked.

  If you plan to run on IE8 and older browsers then you should use this
  method anytime you want to retrieve a property on an object that you don't
  know for sure is private. (Properties beginning with an underscore '_'
  are considered private.)

  On all newer browsers, you only need to use this method to retrieve
  properties if the property might not be defined on the object and you want
  to respect the `unknownProperty` handler. Otherwise you can ignore this
  method.

  Note that if the object itself is `undefined`, this method will throw
  an error.

  @method get
  @for Ember
  @param {Object} obj The object to retrieve from.
  @param {String} keyName The property key to retrieve
  @return {Object} the property value or `null`.
*/
get = function get(obj, keyName) {
  // Helpers that operate with 'this' within an #each
  if (keyName === '') {
    return obj;
  }

  if (!keyName && 'string'===typeof obj) {
    keyName = obj;
    obj = null;
  }

  Ember.assert("Cannot call get with "+ keyName +" key.", !!keyName);
  Ember.assert("Cannot call get with '"+ keyName +"' on an undefined object.", obj !== undefined);

  if (obj === null || keyName.indexOf('.') !== -1) {
    return getPath(obj, keyName);
  }

  var meta = obj[META_KEY], desc = meta && meta.descs[keyName], ret;
  if (desc) {
    return desc.get(obj, keyName);
  } else {
    if (MANDATORY_SETTER && meta && meta.watching[keyName] > 0) {
      ret = meta.values[keyName];
    } else {
      ret = obj[keyName];
    }

    if (ret === undefined &&
        'object' === typeof obj && !(keyName in obj) && 'function' === typeof obj.unknownProperty) {
      return obj.unknownProperty(keyName);
    }

    return ret;
  }
};

// Currently used only by Ember Data tests
if (Ember.config.overrideAccessors) {
  Ember.get = get;
  Ember.config.overrideAccessors();
  get = Ember.get;
}

/**
  @private

  Normalizes a target/path pair to reflect that actual target/path that should
  be observed, etc. This takes into account passing in global property
  paths (i.e. a path beginning with a captial letter not defined on the
  target) and * separators.

  @method normalizeTuple
  @for Ember
  @param {Object} target The current target. May be `null`.
  @param {String} path A path on the target or a global property path.
  @return {Array} a temporary array with the normalized target/path pair.
*/
var normalizeTuple = Ember.normalizeTuple = function(target, path) {
  var hasThis  = HAS_THIS.test(path),
      isGlobal = !hasThis && IS_GLOBAL_PATH.test(path),
      key;

  if (!target || isGlobal) target = Ember.lookup;
  if (hasThis) path = path.slice(5);

  if (target === Ember.lookup) {
    key = path.match(FIRST_KEY)[0];
    target = get(target, key);
    path   = path.slice(key.length+1);
  }

  // must return some kind of path to be valid else other things will break.
  if (!path || path.length===0) throw new Error('Invalid Path');

  return [ target, path ];
};

var getPath = Ember._getPath = function(root, path) {
  var hasThis, parts, tuple, idx, len;

  // If there is no root and path is a key name, return that
  // property from the global object.
  // E.g. get('Ember') -> Ember
  if (root === null && path.indexOf('.') === -1) { return get(Ember.lookup, path); }

  // detect complicated paths and normalize them
  hasThis  = HAS_THIS.test(path);

  if (!root || hasThis) {
    tuple = normalizeTuple(root, path);
    root = tuple[0];
    path = tuple[1];
    tuple.length = 0;
  }

  parts = path.split(".");
  len = parts.length;
  for (idx = 0; root != null && idx < len; idx++) {
    root = get(root, parts[idx], true);
    if (root && root.isDestroyed) { return undefined; }
  }
  return root;
};

Ember.getWithDefault = function(root, key, defaultValue) {
  var value = get(root, key);

  if (value === undefined) { return defaultValue; }
  return value;
};


Ember.get = get;
Ember.getPath = Ember.deprecateFunc('getPath is deprecated since get now supports paths', Ember.get);

})();



(function() {
/**
@module ember-metal
*/

var o_create = Ember.create,
    metaFor = Ember.meta,
    META_KEY = Ember.META_KEY,
    a_slice = [].slice,
    /* listener flags */
    ONCE = 1, SUSPENDED = 2;

/*
  The event system uses a series of nested hashes to store listeners on an
  object. When a listener is registered, or when an event arrives, these
  hashes are consulted to determine which target and action pair to invoke.

  The hashes are stored in the object's meta hash, and look like this:

      // Object's meta hash
      {
        listeners: {       // variable name: `listenerSet`
          "foo:changed": [ // variable name: `actions`
            target, method, flags
          ]
        }
      }

*/

function indexOf(array, target, method) {
  var index = -1;
  for (var i = 0, l = array.length; i < l; i += 3) {
    if (target === array[i] && method === array[i+1]) { index = i; break; }
  }
  return index;
}

function actionsFor(obj, eventName) {
  var meta = metaFor(obj, true),
      actions;

  if (!meta.listeners) { meta.listeners = {}; }

  if (!meta.hasOwnProperty('listeners')) {
    // setup inherited copy of the listeners object
    meta.listeners = o_create(meta.listeners);
  }

  actions = meta.listeners[eventName];

  // if there are actions, but the eventName doesn't exist in our listeners, then copy them from the prototype
  if (actions && !meta.listeners.hasOwnProperty(eventName)) {
    actions = meta.listeners[eventName] = meta.listeners[eventName].slice();
  } else if (!actions) {
    actions = meta.listeners[eventName] = [];
  }

  return actions;
}

function actionsUnion(obj, eventName, otherActions) {
  var meta = obj[META_KEY],
      actions = meta && meta.listeners && meta.listeners[eventName];

  if (!actions) { return; }
  for (var i = actions.length - 3; i >= 0; i -= 3) {
    var target = actions[i],
        method = actions[i+1],
        flags = actions[i+2],
        actionIndex = indexOf(otherActions, target, method);

    if (actionIndex === -1) {
      otherActions.push(target, method, flags);
    }
  }
}

function actionsDiff(obj, eventName, otherActions) {
  var meta = obj[META_KEY],
      actions = meta && meta.listeners && meta.listeners[eventName],
      diffActions = [];

  if (!actions) { return; }
  for (var i = actions.length - 3; i >= 0; i -= 3) {
    var target = actions[i],
        method = actions[i+1],
        flags = actions[i+2],
        actionIndex = indexOf(otherActions, target, method);

    if (actionIndex !== -1) { continue; }

    otherActions.push(target, method, flags);
    diffActions.push(target, method, flags);
  }

  return diffActions;
}

/**
  Add an event listener

  @method addListener
  @for Ember
  @param obj
  @param {String} eventName
  @param {Object|Function} targetOrMethod A target object or a function
  @param {Function|String} method A function or the name of a function to be called on `target`
  @param {Boolean} once A flag whether a function should only be called once
*/
function addListener(obj, eventName, target, method, once) {
  Ember.assert("You must pass at least an object and event name to Ember.addListener", !!obj && !!eventName);

  if (!method && 'function' === typeof target) {
    method = target;
    target = null;
  }

  var actions = actionsFor(obj, eventName),
      actionIndex = indexOf(actions, target, method),
      flags = 0;

  if (once) flags |= ONCE;

  if (actionIndex !== -1) { return; }

  actions.push(target, method, flags);

  if ('function' === typeof obj.didAddListener) {
    obj.didAddListener(eventName, target, method);
  }
}

/**
  Remove an event listener

  Arguments should match those passed to `Ember.addListener`.

  @method removeListener
  @for Ember
  @param obj
  @param {String} eventName
  @param {Object|Function} targetOrMethod A target object or a function
  @param {Function|String} method A function or the name of a function to be called on `target`
*/
function removeListener(obj, eventName, target, method) {
  Ember.assert("You must pass at least an object and event name to Ember.removeListener", !!obj && !!eventName);

  if (!method && 'function' === typeof target) {
    method = target;
    target = null;
  }

  function _removeListener(target, method) {
    var actions = actionsFor(obj, eventName),
        actionIndex = indexOf(actions, target, method);

    // action doesn't exist, give up silently
    if (actionIndex === -1) { return; }

    actions.splice(actionIndex, 3);

    if ('function' === typeof obj.didRemoveListener) {
      obj.didRemoveListener(eventName, target, method);
    }
  }

  if (method) {
    _removeListener(target, method);
  } else {
    var meta = obj[META_KEY],
        actions = meta && meta.listeners && meta.listeners[eventName];

    if (!actions) { return; }
    for (var i = actions.length - 3; i >= 0; i -= 3) {
      _removeListener(actions[i], actions[i+1]);
    }
  }
}

/**
  @private

  Suspend listener during callback.

  This should only be used by the target of the event listener
  when it is taking an action that would cause the event, e.g.
  an object might suspend its property change listener while it is
  setting that property.

  @method suspendListener
  @for Ember
  @param obj
  @param {String} eventName
  @param {Object|Function} targetOrMethod A target object or a function
  @param {Function|String} method A function or the name of a function to be called on `target`
  @param {Function} callback
*/
function suspendListener(obj, eventName, target, method, callback) {
  if (!method && 'function' === typeof target) {
    method = target;
    target = null;
  }

  var actions = actionsFor(obj, eventName),
      actionIndex = indexOf(actions, target, method);

  if (actionIndex !== -1) {
    actions[actionIndex+2] |= SUSPENDED; // mark the action as suspended
  }

  function tryable()   { return callback.call(target); }
  function finalizer() { if (actionIndex !== -1) { actions[actionIndex+2] &= ~SUSPENDED; } }

  return Ember.tryFinally(tryable, finalizer);
}

/**
  @private

  Suspends multiple listeners during a callback.

  
  @method suspendListeners
  @for Ember
  @param obj
  @param {Array} eventName Array of event names
  @param {Object|Function} targetOrMethod A target object or a function
  @param {Function|String} method A function or the name of a function to be called on `target`
  @param {Function} callback
*/
function suspendListeners(obj, eventNames, target, method, callback) {
  if (!method && 'function' === typeof target) {
    method = target;
    target = null;
  }

  var suspendedActions = [],
      eventName, actions, i, l;

  for (i=0, l=eventNames.length; i<l; i++) {
    eventName = eventNames[i];
    actions = actionsFor(obj, eventName);
    var actionIndex = indexOf(actions, target, method);

    if (actionIndex !== -1) {
      actions[actionIndex+2] |= SUSPENDED;
      suspendedActions.push(actionIndex);
    }
  }

  function tryable() { return callback.call(target); }

  function finalizer() {
    for (var i = 0, l = suspendedActions.length; i < l; i++) {
      var actionIndex = suspendedActions[i];
      actions[actionIndex+2] &= ~SUSPENDED;
    }
  }

  return Ember.tryFinally(tryable, finalizer);
}

/**
  @private

  Return a list of currently watched events

  @method watchedEvents
  @for Ember
  @param obj
*/
function watchedEvents(obj) {
  var listeners = obj[META_KEY].listeners, ret = [];

  if (listeners) {
    for(var eventName in listeners) {
      if (listeners[eventName]) { ret.push(eventName); }
    }
  }
  return ret;
}

/**
  Send an event. The execution of suspended listeners
  is skipped, and once listeners are removed. A listener without
  a target is executed on the passed object. If an array of actions
  is not passed, the actions stored on the passed object are invoked.
  
  @method sendEvent
  @for Ember
  @param obj
  @param {String} eventName
  @param {Array} params Optional parameters for each listener.
  @param {Array} actions Optional array of actions (listeners).
  @return true
*/
function sendEvent(obj, eventName, params, actions) {
  // first give object a chance to handle it
  if (obj !== Ember && 'function' === typeof obj.sendEvent) {
    obj.sendEvent(eventName, params);
  }

  if (!actions) {
    var meta = obj[META_KEY];
    actions = meta && meta.listeners && meta.listeners[eventName];
  }

  if (!actions) { return; }

  for (var i = actions.length - 3; i >= 0; i -= 3) { // looping in reverse for once listeners
    var target = actions[i], method = actions[i+1], flags = actions[i+2];
    if (!method) { continue; }
    if (flags & SUSPENDED) { continue; }
    if (flags & ONCE) { removeListener(obj, eventName, target, method); }
    if (!target) { target = obj; }
    if ('string' === typeof method) { method = target[method]; }
    if (params) {
      method.apply(target, params);
    } else {
      method.call(target);
    }
  }
  return true;
}

/**
  @private
  @method hasListeners
  @for Ember
  @param obj
  @param {String} eventName
*/
function hasListeners(obj, eventName) {
  var meta = obj[META_KEY],
      actions = meta && meta.listeners && meta.listeners[eventName];

  return !!(actions && actions.length);
}

/**
  @private
  @method listenersFor
  @for Ember
  @param obj
  @param {String} eventName
*/
function listenersFor(obj, eventName) {
  var ret = [];
  var meta = obj[META_KEY],
      actions = meta && meta.listeners && meta.listeners[eventName];

  if (!actions) { return ret; }

  for (var i = 0, l = actions.length; i < l; i += 3) {
    var target = actions[i],
        method = actions[i+1];
    ret.push([target, method]);
  }

  return ret;
}

/**
  Define a property as a function that should be executed when
  a specified event or events are triggered.

      var Job = Ember.Object.extend({
        logCompleted: Ember.on('completed', function(){
          console.log('Job completed!');
        })
      });
      var job = Job.create();
      Ember.sendEvent(job, 'completed'); // Logs "Job completed!"

  @method on
  @for Ember
  @param {String} eventNames*
  @param {Function} func
  @return func
*/
Ember.on = function(){
  var func = a_slice.call(arguments, -1)[0],
      events = a_slice.call(arguments, 0, -1);
  func.__ember_listens__ = events;
  return func;
};

Ember.addListener = addListener;
Ember.removeListener = removeListener;
Ember._suspendListener = suspendListener;
Ember._suspendListeners = suspendListeners;
Ember.sendEvent = sendEvent;
Ember.hasListeners = hasListeners;
Ember.watchedEvents = watchedEvents;
Ember.listenersFor = listenersFor;
Ember.listenersDiff = actionsDiff;
Ember.listenersUnion = actionsUnion;

})();



(function() {
var guidFor = Ember.guidFor,
    sendEvent = Ember.sendEvent;

/*
  this.observerSet = {
    [senderGuid]: { // variable name: `keySet`
      [keyName]: listIndex
    }
  },
  this.observers = [
    {
      sender: obj,
      keyName: keyName,
      eventName: eventName,
      listeners: [
        [target, method, flags]
      ]
    },
    ...
  ]
*/
var ObserverSet = Ember._ObserverSet = function() {
  this.clear();
};

ObserverSet.prototype.add = function(sender, keyName, eventName) {
  var observerSet = this.observerSet,
      observers = this.observers,
      senderGuid = guidFor(sender),
      keySet = observerSet[senderGuid],
      index;

  if (!keySet) {
    observerSet[senderGuid] = keySet = {};
  }
  index = keySet[keyName];
  if (index === undefined) {
    index = observers.push({
      sender: sender,
      keyName: keyName,
      eventName: eventName,
      listeners: []
    }) - 1;
    keySet[keyName] = index;
  }
  return observers[index].listeners;
};

ObserverSet.prototype.flush = function() {
  var observers = this.observers, i, len, observer, sender;
  this.clear();
  for (i=0, len=observers.length; i < len; ++i) {
    observer = observers[i];
    sender = observer.sender;
    if (sender.isDestroying || sender.isDestroyed) { continue; }
    sendEvent(sender, observer.eventName, [sender, observer.keyName], observer.listeners);
  }
};

ObserverSet.prototype.clear = function() {
  this.observerSet = {};
  this.observers = [];
};
})();



(function() {
var metaFor = Ember.meta,
    guidFor = Ember.guidFor,
    tryFinally = Ember.tryFinally,
    sendEvent = Ember.sendEvent,
    listenersUnion = Ember.listenersUnion,
    listenersDiff = Ember.listenersDiff,
    ObserverSet = Ember._ObserverSet,
    beforeObserverSet = new ObserverSet(),
    observerSet = new ObserverSet(),
    deferred = 0;

// ..........................................................
// PROPERTY CHANGES
//

/**
  This function is called just before an object property is about to change.
  It will notify any before observers and prepare caches among other things.

  Normally you will not need to call this method directly but if for some
  reason you can't directly watch a property you can invoke this method
  manually along with `Ember.propertyDidChange()` which you should call just
  after the property value changes.

  @method propertyWillChange
  @for Ember
  @param {Object} obj The object with the property that will change
  @param {String} keyName The property key (or path) that will change.
  @return {void}
*/
function propertyWillChange(obj, keyName) {
  var m = metaFor(obj, false),
      watching = m.watching[keyName] > 0 || keyName === 'length',
      proto = m.proto,
      desc = m.descs[keyName];

  if (!watching) { return; }
  if (proto === obj) { return; }
  if (desc && desc.willChange) { desc.willChange(obj, keyName); }
  dependentKeysWillChange(obj, keyName, m);
  chainsWillChange(obj, keyName, m);
  notifyBeforeObservers(obj, keyName);
}
Ember.propertyWillChange = propertyWillChange;

/**
  This function is called just after an object property has changed.
  It will notify any observers and clear caches among other things.

  Normally you will not need to call this method directly but if for some
  reason you can't directly watch a property you can invoke this method
  manually along with `Ember.propertyWillChange()` which you should call just
  before the property value changes.

  @method propertyDidChange
  @for Ember
  @param {Object} obj The object with the property that will change
  @param {String} keyName The property key (or path) that will change.
  @return {void}
*/
function propertyDidChange(obj, keyName) {
  var m = metaFor(obj, false),
      watching = m.watching[keyName] > 0 || keyName === 'length',
      proto = m.proto,
      desc = m.descs[keyName];

  if (proto === obj) { return; }

  // shouldn't this mean that we're watching this key?
  if (desc && desc.didChange) { desc.didChange(obj, keyName); }
  if (!watching && keyName !== 'length') { return; }

  dependentKeysDidChange(obj, keyName, m);
  chainsDidChange(obj, keyName, m, false);
  notifyObservers(obj, keyName);
}
Ember.propertyDidChange = propertyDidChange;

var WILL_SEEN, DID_SEEN;

// called whenever a property is about to change to clear the cache of any dependent keys (and notify those properties of changes, etc...)
function dependentKeysWillChange(obj, depKey, meta) {
  if (obj.isDestroying) { return; }

  var seen = WILL_SEEN, top = !seen;
  if (top) { seen = WILL_SEEN = {}; }
  iterDeps(propertyWillChange, obj, depKey, seen, meta);
  if (top) { WILL_SEEN = null; }
}

// called whenever a property has just changed to update dependent keys
function dependentKeysDidChange(obj, depKey, meta) {
  if (obj.isDestroying) { return; }

  var seen = DID_SEEN, top = !seen;
  if (top) { seen = DID_SEEN = {}; }
  iterDeps(propertyDidChange, obj, depKey, seen, meta);
  if (top) { DID_SEEN = null; }
}

function iterDeps(method, obj, depKey, seen, meta) {
  var guid = guidFor(obj);
  if (!seen[guid]) seen[guid] = {};
  if (seen[guid][depKey]) return;
  seen[guid][depKey] = true;

  var deps = meta.deps;
  deps = deps && deps[depKey];
  if (deps) {
    for(var key in deps) {
      var desc = meta.descs[key];
      if (desc && desc._suspended === obj) continue;
      method(obj, key);
    }
  }
}

function chainsWillChange(obj, keyName, m) {
  if (!(m.hasOwnProperty('chainWatchers') &&
        m.chainWatchers[keyName])) {
    return;
  }

  var nodes = m.chainWatchers[keyName],
      events = [],
      i, l;

  for(i = 0, l = nodes.length; i < l; i++) {
    nodes[i].willChange(events);
  }

  for (i = 0, l = events.length; i < l; i += 2) {
    propertyWillChange(events[i], events[i+1]);
  }
}

function chainsDidChange(obj, keyName, m, suppressEvents) {
  if (!(m.hasOwnProperty('chainWatchers') &&
        m.chainWatchers[keyName])) {
    return;
  }

  var nodes = m.chainWatchers[keyName],
      events = suppressEvents ? null : [],
      i, l;

  for(i = 0, l = nodes.length; i < l; i++) {
    nodes[i].didChange(events);
  }

  if (suppressEvents) {
    return;
  }

  for (i = 0, l = events.length; i < l; i += 2) {
    propertyDidChange(events[i], events[i+1]);
  }
}

Ember.overrideChains = function(obj, keyName, m) {
  chainsDidChange(obj, keyName, m, true);
};

/**
  @method beginPropertyChanges
  @chainable
*/
function beginPropertyChanges() {
  deferred++;
}

Ember.beginPropertyChanges = beginPropertyChanges;

/**
  @method endPropertyChanges
*/
function endPropertyChanges() {
  deferred--;
  if (deferred<=0) {
    beforeObserverSet.clear();
    observerSet.flush();
  }
}

Ember.endPropertyChanges = endPropertyChanges;

/**
  Make a series of property changes together in an
  exception-safe way.

  ```javascript
  Ember.changeProperties(function() {
    obj1.set('foo', mayBlowUpWhenSet);
    obj2.set('bar', baz);
  });
  ```

  @method changeProperties
  @param {Function} callback
  @param [binding]
*/
Ember.changeProperties = function(cb, binding) {
  beginPropertyChanges();
  tryFinally(cb, endPropertyChanges, binding);
};

function notifyBeforeObservers(obj, keyName) {
  if (obj.isDestroying) { return; }

  var eventName = keyName + ':before', listeners, diff;
  if (deferred) {
    listeners = beforeObserverSet.add(obj, keyName, eventName);
    diff = listenersDiff(obj, eventName, listeners);
    sendEvent(obj, eventName, [obj, keyName], diff);
  } else {
    sendEvent(obj, eventName, [obj, keyName]);
  }
}

function notifyObservers(obj, keyName) {
  if (obj.isDestroying) { return; }

  var eventName = keyName + ':change', listeners;
  if (deferred) {
    listeners = observerSet.add(obj, keyName, eventName);
    listenersUnion(obj, eventName, listeners);
  } else {
    sendEvent(obj, eventName, [obj, keyName]);
  }
}

})();



(function() {
// META_KEY
// _getPath
// propertyWillChange, propertyDidChange

var META_KEY = Ember.META_KEY,
    MANDATORY_SETTER = Ember.ENV.MANDATORY_SETTER,
    IS_GLOBAL = /^([A-Z$]|([0-9][A-Z$]))/,
    getPath = Ember._getPath;

/**
  Sets the value of a property on an object, respecting computed properties
  and notifying observers and other listeners of the change. If the
  property is not defined but the object implements the `setUnknownProperty`
  method then that will be invoked as well.

  If you plan to run on IE8 and older browsers then you should use this
  method anytime you want to set a property on an object that you don't
  know for sure is private. (Properties beginning with an underscore '_'
  are considered private.)

  On all newer browsers, you only need to use this method to set
  properties if the property might not be defined on the object and you want
  to respect the `setUnknownProperty` handler. Otherwise you can ignore this
  method.

  @method set
  @for Ember
  @param {Object} obj The object to modify.
  @param {String} keyName The property key to set
  @param {Object} value The value to set
  @return {Object} the passed value.
*/
var set = function set(obj, keyName, value, tolerant) {
  if (typeof obj === 'string') {
    Ember.assert("Path '" + obj + "' must be global if no obj is given.", IS_GLOBAL.test(obj));
    value = keyName;
    keyName = obj;
    obj = null;
  }

  Ember.assert("Cannot call set with "+ keyName +" key.", !!keyName);

  if (!obj || keyName.indexOf('.') !== -1) {
    return setPath(obj, keyName, value, tolerant);
  }

  Ember.assert("You need to provide an object and key to `set`.", !!obj && keyName !== undefined);
  Ember.assert('calling set on destroyed object', !obj.isDestroyed);

  var meta = obj[META_KEY], desc = meta && meta.descs[keyName],
      isUnknown, currentValue;
  if (desc) {
    desc.set(obj, keyName, value);
  } else {
    isUnknown = 'object' === typeof obj && !(keyName in obj);

    // setUnknownProperty is called if `obj` is an object,
    // the property does not already exist, and the
    // `setUnknownProperty` method exists on the object
    if (isUnknown && 'function' === typeof obj.setUnknownProperty) {
      obj.setUnknownProperty(keyName, value);
    } else if (meta && meta.watching[keyName] > 0) {
      if (MANDATORY_SETTER) {
        currentValue = meta.values[keyName];
      } else {
        currentValue = obj[keyName];
      }
      // only trigger a change if the value has changed
      if (value !== currentValue) {
        Ember.propertyWillChange(obj, keyName);
        if (MANDATORY_SETTER) {
          if (currentValue === undefined && !(keyName in obj)) {
            Ember.defineProperty(obj, keyName, null, value); // setup mandatory setter
          } else {
            meta.values[keyName] = value;
          }
        } else {
          obj[keyName] = value;
        }
        Ember.propertyDidChange(obj, keyName);
      }
    } else {
      obj[keyName] = value;
    }
  }
  return value;
};

// Currently used only by Ember Data tests
if (Ember.config.overrideAccessors) {
  Ember.set = set;
  Ember.config.overrideAccessors();
  set = Ember.set;
}

function setPath(root, path, value, tolerant) {
  var keyName;

  // get the last part of the path
  keyName = path.slice(path.lastIndexOf('.') + 1);

  // get the first part of the part
  path    = path.slice(0, path.length-(keyName.length+1));

  // unless the path is this, look up the first part to
  // get the root
  if (path !== 'this') {
    root = getPath(root, path);
  }

  if (!keyName || keyName.length === 0) {
    throw new Error('You passed an empty path');
  }

  if (!root) {
    if (tolerant) { return; }
    else { throw new Error('Object in path '+path+' could not be found or was destroyed.'); }
  }

  return set(root, keyName, value);
}

Ember.set = set;
Ember.setPath = Ember.deprecateFunc('setPath is deprecated since set now supports paths', Ember.set);

/**
  Error-tolerant form of `Ember.set`. Will not blow up if any part of the
  chain is `undefined`, `null`, or destroyed.

  This is primarily used when syncing bindings, which may try to update after
  an object has been destroyed.

  @method trySet
  @for Ember
  @param {Object} obj The object to modify.
  @param {String} path The property path to set
  @param {Object} value The value to set
*/
Ember.trySet = function(root, path, value) {
  return set(root, path, value, true);
};
Ember.trySetPath = Ember.deprecateFunc('trySetPath has been renamed to trySet', Ember.trySet);

})();



(function() {
/**
@module ember-metal
*/

/*
  JavaScript (before ES6) does not have a Map implementation. Objects,
  which are often used as dictionaries, may only have Strings as keys.

  Because Ember has a way to get a unique identifier for every object
  via `Ember.guidFor`, we can implement a performant Map with arbitrary
  keys. Because it is commonly used in low-level bookkeeping, Map is
  implemented as a pure JavaScript object for performance.

  This implementation follows the current iteration of the ES6 proposal for
  maps (http://wiki.ecmascript.org/doku.php?id=harmony:simple_maps_and_sets),
  with two exceptions. First, because we need our implementation to be pleasant
  on older browsers, we do not use the `delete` name (using `remove` instead).
  Second, as we do not have the luxury of in-VM iteration, we implement a
  forEach method for iteration.

  Map is mocked out to look like an Ember object, so you can do
  `Ember.Map.create()` for symmetry with other Ember classes.
*/
var set = Ember.set,
    guidFor = Ember.guidFor,
    indexOf = Ember.ArrayPolyfills.indexOf;

var copy = function(obj) {
  var output = {};

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) { output[prop] = obj[prop]; }
  }

  return output;
};

var copyMap = function(original, newObject) {
  var keys = original.keys.copy(),
      values = copy(original.values);

  newObject.keys = keys;
  newObject.values = values;
  newObject.length = original.length;

  return newObject;
};

/**
  This class is used internally by Ember and Ember Data.
  Please do not use it at this time. We plan to clean it up
  and add many tests soon.

  @class OrderedSet
  @namespace Ember
  @constructor
  @private
*/
var OrderedSet = Ember.OrderedSet = function() {
  this.clear();
};

/**
  @method create
  @static
  @return {Ember.OrderedSet}
*/
OrderedSet.create = function() {
  return new OrderedSet();
};


OrderedSet.prototype = {
  /**
    @method clear
  */
  clear: function() {
    this.presenceSet = {};
    this.list = [];
  },

  /**
    @method add
    @param obj
  */
  add: function(obj) {
    var guid = guidFor(obj),
        presenceSet = this.presenceSet,
        list = this.list;

    if (guid in presenceSet) { return; }

    presenceSet[guid] = true;
    list.push(obj);
  },

  /**
    @method remove
    @param obj
  */
  remove: function(obj) {
    var guid = guidFor(obj),
        presenceSet = this.presenceSet,
        list = this.list;

    delete presenceSet[guid];

    var index = indexOf.call(list, obj);
    if (index > -1) {
      list.splice(index, 1);
    }
  },

  /**
    @method isEmpty
    @return {Boolean}
  */
  isEmpty: function() {
    return this.list.length === 0;
  },

  /**
    @method has
    @param obj
    @return {Boolean}
  */
  has: function(obj) {
    var guid = guidFor(obj),
        presenceSet = this.presenceSet;

    return guid in presenceSet;
  },

  /**
    @method forEach
    @param {Function} fn
    @param self
  */
  forEach: function(fn, self) {
    // allow mutation during iteration
    var list = this.toArray();

    for (var i = 0, j = list.length; i < j; i++) {
      fn.call(self, list[i]);
    }
  },

  /**
    @method toArray
    @return {Array}
  */
  toArray: function() {
    return this.list.slice();
  },

  /**
    @method copy
    @return {Ember.OrderedSet}
  */
  copy: function() {
    var set = new OrderedSet();

    set.presenceSet = copy(this.presenceSet);
    set.list = this.toArray();

    return set;
  }
};

/**
  A Map stores values indexed by keys. Unlike JavaScript's
  default Objects, the keys of a Map can be any JavaScript
  object.

  Internally, a Map has two data structures:

  1. `keys`: an OrderedSet of all of the existing keys
  2. `values`: a JavaScript Object indexed by the `Ember.guidFor(key)`

  When a key/value pair is added for the first time, we
  add the key to the `keys` OrderedSet, and create or
  replace an entry in `values`. When an entry is deleted,
  we delete its entry in `keys` and `values`.

  @class Map
  @namespace Ember
  @private
  @constructor
*/
var Map = Ember.Map = function() {
  this.keys = Ember.OrderedSet.create();
  this.values = {};
};

/**
  @method create
  @static
*/
Map.create = function() {
  return new Map();
};

Map.prototype = {
  /**
    This property will change as the number of objects in the map changes.
   
    @property length
    @type number
    @default 0
  */
  length: 0,
    
    
  /**
    Retrieve the value associated with a given key.

    @method get
    @param {*} key
    @return {*} the value associated with the key, or `undefined`
  */
  get: function(key) {
    var values = this.values,
        guid = guidFor(key);

    return values[guid];
  },

  /**
    Adds a value to the map. If a value for the given key has already been
    provided, the new value will replace the old value.

    @method set
    @param {*} key
    @param {*} value
  */
  set: function(key, value) {
    var keys = this.keys,
        values = this.values,
        guid = guidFor(key);

    keys.add(key);
    values[guid] = value;
    set(this, 'length', keys.list.length);
  },

  /**
    Removes a value from the map for an associated key.

    @method remove
    @param {*} key
    @return {Boolean} true if an item was removed, false otherwise
  */
  remove: function(key) {
    // don't use ES6 "delete" because it will be annoying
    // to use in browsers that are not ES6 friendly;
    var keys = this.keys,
        values = this.values,
        guid = guidFor(key);

    if (values.hasOwnProperty(guid)) {
      keys.remove(key);
      delete values[guid];
      set(this, 'length', keys.list.length);
      return true;
    } else {
      return false;
    }
  },

  /**
    Check whether a key is present.

    @method has
    @param {*} key
    @return {Boolean} true if the item was present, false otherwise
  */
  has: function(key) {
    var values = this.values,
        guid = guidFor(key);

    return values.hasOwnProperty(guid);
  },

  /**
    Iterate over all the keys and values. Calls the function once
    for each key, passing in the key and value, in that order.

    The keys are guaranteed to be iterated over in insertion order.

    @method forEach
    @param {Function} callback
    @param {*} self if passed, the `this` value inside the
      callback. By default, `this` is the map.
  */
  forEach: function(callback, self) {
    var keys = this.keys,
        values = this.values;

    keys.forEach(function(key) {
      var guid = guidFor(key);
      callback.call(self, key, values[guid]);
    });
  },

  /**
    @method copy
    @return {Ember.Map}
  */
  copy: function() {
    return copyMap(this, new Map());
  }
};

/**
  @class MapWithDefault
  @namespace Ember
  @extends Ember.Map
  @private
  @constructor
  @param [options]
    @param {*} [options.defaultValue]
*/
var MapWithDefault = Ember.MapWithDefault = function(options) {
  Map.call(this);
  this.defaultValue = options.defaultValue;
};

/**
  @method create
  @static
  @param [options]
    @param {*} [options.defaultValue]
  @return {Ember.MapWithDefault|Ember.Map} If options are passed, returns
    `Ember.MapWithDefault` otherwise returns `Ember.Map`
*/
MapWithDefault.create = function(options) {
  if (options) {
    return new MapWithDefault(options);
  } else {
    return new Map();
  }
};

MapWithDefault.prototype = Ember.create(Map.prototype);

/**
  Retrieve the value associated with a given key.

  @method get
  @param {*} key
  @return {*} the value associated with the key, or the default value
*/
MapWithDefault.prototype.get = function(key) {
  var hasValue = this.has(key);

  if (hasValue) {
    return Map.prototype.get.call(this, key);
  } else {
    var defaultValue = this.defaultValue(key);
    this.set(key, defaultValue);
    return defaultValue;
  }
};

/**
  @method copy
  @return {Ember.MapWithDefault}
*/
MapWithDefault.prototype.copy = function() {
  return copyMap(this, new MapWithDefault({
    defaultValue: this.defaultValue
  }));
};

})();



(function() {
/**
@module ember-metal
*/

var META_KEY = Ember.META_KEY,
    metaFor = Ember.meta,
    objectDefineProperty = Ember.platform.defineProperty;

var MANDATORY_SETTER = Ember.ENV.MANDATORY_SETTER;

// ..........................................................
// DESCRIPTOR
//

/**
  Objects of this type can implement an interface to respond to requests to
  get and set. The default implementation handles simple properties.

  You generally won't need to create or subclass this directly.

  @class Descriptor
  @namespace Ember
  @private
  @constructor
*/
Ember.Descriptor = function() {};

// ..........................................................
// DEFINING PROPERTIES API
//

var MANDATORY_SETTER_FUNCTION = Ember.MANDATORY_SETTER_FUNCTION = function(value) {
  Ember.assert("You must use Ember.set() to access this property (of " + this + ")", false);
};

var DEFAULT_GETTER_FUNCTION = Ember.DEFAULT_GETTER_FUNCTION = function(name) {
  return function() {
    var meta = this[META_KEY];
    return meta && meta.values[name];
  };
};

/**
  @private

  NOTE: This is a low-level method used by other parts of the API. You almost
  never want to call this method directly. Instead you should use
  `Ember.mixin()` to define new properties.

  Defines a property on an object. This method works much like the ES5
  `Object.defineProperty()` method except that it can also accept computed
  properties and other special descriptors.

  Normally this method takes only three parameters. However if you pass an
  instance of `Ember.Descriptor` as the third param then you can pass an
  optional value as the fourth parameter. This is often more efficient than
  creating new descriptor hashes for each property.

  ## Examples

  ```javascript
  // ES5 compatible mode
  Ember.defineProperty(contact, 'firstName', {
    writable: true,
    configurable: false,
    enumerable: true,
    value: 'Charles'
  });

  // define a simple property
  Ember.defineProperty(contact, 'lastName', undefined, 'Jolley');

  // define a computed property
  Ember.defineProperty(contact, 'fullName', Ember.computed(function() {
    return this.firstName+' '+this.lastName;
  }).property('firstName', 'lastName'));
  ```

  @method defineProperty
  @for Ember
  @param {Object} obj the object to define this property on. This may be a prototype.
  @param {String} keyName the name of the property
  @param {Ember.Descriptor} [desc] an instance of `Ember.Descriptor` (typically a
    computed property) or an ES5 descriptor.
    You must provide this or `data` but not both.
  @param {*} [data] something other than a descriptor, that will
    become the explicit value of this property.
*/
Ember.defineProperty = function(obj, keyName, desc, data, meta) {
  var descs, existingDesc, watching, value;

  if (!meta) meta = metaFor(obj);
  descs = meta.descs;
  existingDesc = meta.descs[keyName];
  watching = meta.watching[keyName] > 0;

  if (existingDesc instanceof Ember.Descriptor) {
    existingDesc.teardown(obj, keyName);
  }

  if (desc instanceof Ember.Descriptor) {
    value = desc;

    descs[keyName] = desc;
    if (MANDATORY_SETTER && watching) {
      objectDefineProperty(obj, keyName, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: undefined // make enumerable
      });
    } else {
      obj[keyName] = undefined; // make enumerable
    }
  } else {
    descs[keyName] = undefined; // shadow descriptor in proto
    if (desc == null) {
      value = data;

      if (MANDATORY_SETTER && watching) {
        meta.values[keyName] = data;
        objectDefineProperty(obj, keyName, {
          configurable: true,
          enumerable: true,
          set: MANDATORY_SETTER_FUNCTION,
          get: DEFAULT_GETTER_FUNCTION(keyName)
        });
      } else {
        obj[keyName] = data;
      }
    } else {
      value = desc;

      // compatibility with ES5
      objectDefineProperty(obj, keyName, desc);
    }
  }

  // if key is being watched, override chains that
  // were initialized with the prototype
  if (watching) { Ember.overrideChains(obj, keyName, meta); }

  // The `value` passed to the `didDefineProperty` hook is
  // either the descriptor or data, whichever was passed.
  if (obj.didDefineProperty) { obj.didDefineProperty(obj, keyName, value); }

  return this;
};


})();



(function() {
var get = Ember.get;

/**
  To get multiple properties at once, call `Ember.getProperties`
  with an object followed by a list of strings or an array:

  ```javascript
  Ember.getProperties(record, 'firstName', 'lastName', 'zipCode');  // { firstName: 'John', lastName: 'Doe', zipCode: '10011' }
  ```

  is equivalent to:

  ```javascript
  Ember.getProperties(record, ['firstName', 'lastName', 'zipCode']);  // { firstName: 'John', lastName: 'Doe', zipCode: '10011' }
  ```

  @method getProperties
  @param obj
  @param {String...|Array} list of keys to get
  @return {Hash}
*/
Ember.getProperties = function(obj) {
  var ret = {},
      propertyNames = arguments,
      i = 1;

  if (arguments.length === 2 && Ember.typeOf(arguments[1]) === 'array') {
    i = 0;
    propertyNames = arguments[1];
  }
  for(var len = propertyNames.length; i < len; i++) {
    ret[propertyNames[i]] = get(obj, propertyNames[i]);
  }
  return ret;
};

})();



(function() {
var changeProperties = Ember.changeProperties,
    set = Ember.set;

/**
  Set a list of properties on an object. These properties are set inside
  a single `beginPropertyChanges` and `endPropertyChanges` batch, so
  observers will be buffered.

  ```javascript
  anObject.setProperties({
    firstName: "Stanley",
    lastName: "Stuart",
    age: "21"
  })
  ```

  @method setProperties
  @param self
  @param {Object} hash
  @return self
*/
Ember.setProperties = function(self, hash) {
  changeProperties(function() {
    for(var prop in hash) {
      if (hash.hasOwnProperty(prop)) { set(self, prop, hash[prop]); }
    }
  });
  return self;
};

})();



(function() {
var metaFor = Ember.meta, // utils.js
    typeOf = Ember.typeOf, // utils.js
    MANDATORY_SETTER = Ember.ENV.MANDATORY_SETTER,
    o_defineProperty = Ember.platform.defineProperty;

Ember.watchKey = function(obj, keyName) {
  // can't watch length on Array - it is special...
  if (keyName === 'length' && typeOf(obj) === 'array') { return; }

  var m = metaFor(obj), watching = m.watching;

  // activate watching first time
  if (!watching[keyName]) {
    watching[keyName] = 1;

    if ('function' === typeof obj.willWatchProperty) {
      obj.willWatchProperty(keyName);
    }

    if (MANDATORY_SETTER && keyName in obj) {
      m.values[keyName] = obj[keyName];
      o_defineProperty(obj, keyName, {
        configurable: true,
        enumerable: true,
        set: Ember.MANDATORY_SETTER_FUNCTION,
        get: Ember.DEFAULT_GETTER_FUNCTION(keyName)
      });
    }
  } else {
    watching[keyName] = (watching[keyName] || 0) + 1;
  }
};


Ember.unwatchKey = function(obj, keyName) {
  var m = metaFor(obj), watching = m.watching;

  if (watching[keyName] === 1) {
    watching[keyName] = 0;

    if ('function' === typeof obj.didUnwatchProperty) {
      obj.didUnwatchProperty(keyName);
    }

    if (MANDATORY_SETTER && keyName in obj) {
      o_defineProperty(obj, keyName, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: m.values[keyName]
      });
      delete m.values[keyName];
    }
  } else if (watching[keyName] > 1) {
    watching[keyName]--;
  }
};

})();



(function() {
var metaFor = Ember.meta, // utils.js
    get = Ember.get, // property_get.js
    normalizeTuple = Ember.normalizeTuple, // property_get.js
    forEach = Ember.ArrayPolyfills.forEach, // array.js
    warn = Ember.warn,
    watchKey = Ember.watchKey,
    unwatchKey = Ember.unwatchKey,
    FIRST_KEY = /^([^\.\*]+)/;

function firstKey(path) {
  return path.match(FIRST_KEY)[0];
}

var pendingQueue = [];

// attempts to add the pendingQueue chains again. If some of them end up
// back in the queue and reschedule is true, schedules a timeout to try
// again.
Ember.flushPendingChains = function() {
  if (pendingQueue.length === 0) { return; } // nothing to do

  var queue = pendingQueue;
  pendingQueue = [];

  forEach.call(queue, function(q) { q[0].add(q[1]); });

  warn('Watching an undefined global, Ember expects watched globals to be setup by the time the run loop is flushed, check for typos', pendingQueue.length === 0);
};


function addChainWatcher(obj, keyName, node) {
  if (!obj || ('object' !== typeof obj)) { return; } // nothing to do

  var m = metaFor(obj), nodes = m.chainWatchers;

  if (!m.hasOwnProperty('chainWatchers')) {
    nodes = m.chainWatchers = {};
  }

  if (!nodes[keyName]) { nodes[keyName] = []; }
  nodes[keyName].push(node);
  watchKey(obj, keyName);
}

var removeChainWatcher = Ember.removeChainWatcher = function(obj, keyName, node) {
  if (!obj || 'object' !== typeof obj) { return; } // nothing to do

  var m = metaFor(obj, false);
  if (!m.hasOwnProperty('chainWatchers')) { return; } // nothing to do

  var nodes = m.chainWatchers;

  if (nodes[keyName]) {
    nodes = nodes[keyName];
    for (var i = 0, l = nodes.length; i < l; i++) {
      if (nodes[i] === node) { nodes.splice(i, 1); }
    }
  }
  unwatchKey(obj, keyName);
};

// A ChainNode watches a single key on an object. If you provide a starting
// value for the key then the node won't actually watch it. For a root node
// pass null for parent and key and object for value.
var ChainNode = Ember._ChainNode = function(parent, key, value) {
  this._parent = parent;
  this._key    = key;

  // _watching is true when calling get(this._parent, this._key) will
  // return the value of this node.
  //
  // It is false for the root of a chain (because we have no parent)
  // and for global paths (because the parent node is the object with
  // the observer on it)
  this._watching = value===undefined;

  this._value  = value;
  this._paths = {};
  if (this._watching) {
    this._object = parent.value();
    if (this._object) { addChainWatcher(this._object, this._key, this); }
  }

  // Special-case: the EachProxy relies on immediate evaluation to
  // establish its observers.
  //
  // TODO: Replace this with an efficient callback that the EachProxy
  // can implement.
  if (this._parent && this._parent._key === '@each') {
    this.value();
  }
};

var ChainNodePrototype = ChainNode.prototype;

function lazyGet(obj, key) {
  if (!obj) return undefined;

  var meta = metaFor(obj, false);
  // check if object meant only to be a prototype
  if (meta.proto === obj) return undefined;

  if (key === "@each") return get(obj, key);

  // if a CP only return cached value
  var desc = meta.descs[key];
  if (desc && desc._cacheable) {
    if (key in meta.cache) {
      return meta.cache[key];
    } else {
      return undefined;
    }
  }

  return get(obj, key);
}

ChainNodePrototype.value = function() {
  if (this._value === undefined && this._watching) {
    var obj = this._parent.value();
    this._value = lazyGet(obj, this._key);
  }
  return this._value;
};

ChainNodePrototype.destroy = function() {
  if (this._watching) {
    var obj = this._object;
    if (obj) { removeChainWatcher(obj, this._key, this); }
    this._watching = false; // so future calls do nothing
  }
};

// copies a top level object only
ChainNodePrototype.copy = function(obj) {
  var ret = new ChainNode(null, null, obj),
      paths = this._paths, path;
  for (path in paths) {
    if (paths[path] <= 0) { continue; } // this check will also catch non-number vals.
    ret.add(path);
  }
  return ret;
};

// called on the root node of a chain to setup watchers on the specified
// path.
ChainNodePrototype.add = function(path) {
  var obj, tuple, key, src, paths;

  paths = this._paths;
  paths[path] = (paths[path] || 0) + 1;

  obj = this.value();
  tuple = normalizeTuple(obj, path);

  // the path was a local path
  if (tuple[0] && tuple[0] === obj) {
    path = tuple[1];
    key  = firstKey(path);
    path = path.slice(key.length+1);

  // global path, but object does not exist yet.
  // put into a queue and try to connect later.
  } else if (!tuple[0]) {
    pendingQueue.push([this, path]);
    tuple.length = 0;
    return;

  // global path, and object already exists
  } else {
    src  = tuple[0];
    key  = path.slice(0, 0-(tuple[1].length+1));
    path = tuple[1];
  }

  tuple.length = 0;
  this.chain(key, path, src);
};

// called on the root node of a chain to teardown watcher on the specified
// path
ChainNodePrototype.remove = function(path) {
  var obj, tuple, key, src, paths;

  paths = this._paths;
  if (paths[path] > 0) { paths[path]--; }

  obj = this.value();
  tuple = normalizeTuple(obj, path);
  if (tuple[0] === obj) {
    path = tuple[1];
    key  = firstKey(path);
    path = path.slice(key.length+1);
  } else {
    src  = tuple[0];
    key  = path.slice(0, 0-(tuple[1].length+1));
    path = tuple[1];
  }

  tuple.length = 0;
  this.unchain(key, path);
};

ChainNodePrototype.count = 0;

ChainNodePrototype.chain = function(key, path, src) {
  var chains = this._chains, node;
  if (!chains) { chains = this._chains = {}; }

  node = chains[key];
  if (!node) { node = chains[key] = new ChainNode(this, key, src); }
  node.count++; // count chains...

  // chain rest of path if there is one
  if (path && path.length>0) {
    key = firstKey(path);
    path = path.slice(key.length+1);
    node.chain(key, path); // NOTE: no src means it will observe changes...
  }
};

ChainNodePrototype.unchain = function(key, path) {
  var chains = this._chains, node = chains[key];

  // unchain rest of path first...
  if (path && path.length>1) {
    key  = firstKey(path);
    path = path.slice(key.length+1);
    node.unchain(key, path);
  }

  // delete node if needed.
  node.count--;
  if (node.count<=0) {
    delete chains[node._key];
    node.destroy();
  }

};

ChainNodePrototype.willChange = function(events) {
  var chains = this._chains;
  if (chains) {
    for(var key in chains) {
      if (!chains.hasOwnProperty(key)) { continue; }
      chains[key].willChange(events);
    }
  }

  if (this._parent) { this._parent.chainWillChange(this, this._key, 1, events); }
};

ChainNodePrototype.chainWillChange = function(chain, path, depth, events) {
  if (this._key) { path = this._key + '.' + path; }

  if (this._parent) {
    this._parent.chainWillChange(this, path, depth+1, events);
  } else {
    if (depth > 1) {
      events.push(this.value(), path);
    }
    path = 'this.' + path;
    if (this._paths[path] > 0) {
      events.push(this.value(), path);
    }
  }
};

ChainNodePrototype.chainDidChange = function(chain, path, depth, events) {
  if (this._key) { path = this._key + '.' + path; }
  if (this._parent) {
    this._parent.chainDidChange(this, path, depth+1, events);
  } else {
    if (depth > 1) {
      events.push(this.value(), path);
    }
    path = 'this.' + path;
    if (this._paths[path] > 0) {
      events.push(this.value(), path);
    }
  }
};

ChainNodePrototype.didChange = function(events) {
  // invalidate my own value first.
  if (this._watching) {
    var obj = this._parent.value();
    if (obj !== this._object) {
      removeChainWatcher(this._object, this._key, this);
      this._object = obj;
      addChainWatcher(obj, this._key, this);
    }
    this._value  = undefined;

    // Special-case: the EachProxy relies on immediate evaluation to
    // establish its observers.
    if (this._parent && this._parent._key === '@each')
      this.value();
  }

  // then notify chains...
  var chains = this._chains;
  if (chains) {
    for(var key in chains) {
      if (!chains.hasOwnProperty(key)) { continue; }
      chains[key].didChange(events);
    }
  }

  // if no events are passed in then we only care about the above wiring update
  if (events === null) { return; }

  // and finally tell parent about my path changing...
  if (this._parent) { this._parent.chainDidChange(this, this._key, 1, events); }
};

Ember.finishChains = function(obj) {
  var m = metaFor(obj, false), chains = m.chains;
  if (chains) {
    if (chains.value() !== obj) {
      m.chains = chains = chains.copy(obj);
    }
    chains.didChange(null);
  }
};

})();



(function() {
var metaFor = Ember.meta, // utils.js
    typeOf = Ember.typeOf, // utils.js
    ChainNode = Ember._ChainNode; // chains.js

// get the chains for the current object. If the current object has
// chains inherited from the proto they will be cloned and reconfigured for
// the current object.
function chainsFor(obj) {
  var m = metaFor(obj), ret = m.chains;
  if (!ret) {
    ret = m.chains = new ChainNode(null, null, obj);
  } else if (ret.value() !== obj) {
    ret = m.chains = ret.copy(obj);
  }
  return ret;
}

Ember.watchPath = function(obj, keyPath) {
  // can't watch length on Array - it is special...
  if (keyPath === 'length' && typeOf(obj) === 'array') { return; }

  var m = metaFor(obj), watching = m.watching;

  if (!watching[keyPath]) { // activate watching first time
    watching[keyPath] = 1;
    chainsFor(obj).add(keyPath);
  } else {
    watching[keyPath] = (watching[keyPath] || 0) + 1;
  }
};

Ember.unwatchPath = function(obj, keyPath) {
  var m = metaFor(obj), watching = m.watching;

  if (watching[keyPath] === 1) {
    watching[keyPath] = 0;
    chainsFor(obj).remove(keyPath);
  } else if (watching[keyPath] > 1) {
    watching[keyPath]--;
  }
};
})();



(function() {
/**
@module ember-metal
*/

var metaFor = Ember.meta, // utils.js
    GUID_KEY = Ember.GUID_KEY, // utils.js
    META_KEY = Ember.META_KEY, // utils.js
    removeChainWatcher = Ember.removeChainWatcher,
    watchKey = Ember.watchKey, // watch_key.js
    unwatchKey = Ember.unwatchKey,
    watchPath = Ember.watchPath, // watch_path.js
    unwatchPath = Ember.unwatchPath,
    typeOf = Ember.typeOf, // utils.js
    generateGuid = Ember.generateGuid,
    IS_PATH = /[\.\*]/;

// returns true if the passed path is just a keyName
function isKeyName(path) {
  return path==='*' || !IS_PATH.test(path);
}

/**
  @private

  Starts watching a property on an object. Whenever the property changes,
  invokes `Ember.propertyWillChange` and `Ember.propertyDidChange`. This is the
  primitive used by observers and dependent keys; usually you will never call
  this method directly but instead use higher level methods like
  `Ember.addObserver()`

  @method watch
  @for Ember
  @param obj
  @param {String} keyName
*/
Ember.watch = function(obj, keyPath) {
  // can't watch length on Array - it is special...
  if (keyPath === 'length' && typeOf(obj) === 'array') { return; }

  if (isKeyName(keyPath)) {
    watchKey(obj, keyPath);
  } else {
    watchPath(obj, keyPath);
  }
};

Ember.isWatching = function isWatching(obj, key) {
  var meta = obj[META_KEY];
  return (meta && meta.watching[key]) > 0;
};

Ember.watch.flushPending = Ember.flushPendingChains;

Ember.unwatch = function(obj, keyPath) {
  // can't watch length on Array - it is special...
  if (keyPath === 'length' && typeOf(obj) === 'array') { return; }

  if (isKeyName(keyPath)) {
    unwatchKey(obj, keyPath);
  } else {
    unwatchPath(obj, keyPath);
  }
};

/**
  @private

  Call on an object when you first beget it from another object. This will
  setup any chained watchers on the object instance as needed. This method is
  safe to call multiple times.

  @method rewatch
  @for Ember
  @param obj
*/
Ember.rewatch = function(obj) {
  var m = metaFor(obj, false), chains = m.chains;

  // make sure the object has its own guid.
  if (GUID_KEY in obj && !obj.hasOwnProperty(GUID_KEY)) {
    generateGuid(obj, 'ember');
  }

  // make sure any chained watchers update.
  if (chains && chains.value() !== obj) {
    m.chains = chains.copy(obj);
  }
};

var NODE_STACK = [];

/**
  Tears down the meta on an object so that it can be garbage collected.
  Multiple calls will have no effect.

  @method destroy
  @for Ember
  @param {Object} obj  the object to destroy
  @return {void}
*/
Ember.destroy = function (obj) {
  var meta = obj[META_KEY], node, nodes, key, nodeObject;
  if (meta) {
    obj[META_KEY] = null;
    // remove chainWatchers to remove circular references that would prevent GC
    node = meta.chains;
    if (node) {
      NODE_STACK.push(node);
      // process tree
      while (NODE_STACK.length > 0) {
        node = NODE_STACK.pop();
        // push children
        nodes = node._chains;
        if (nodes) {
          for (key in nodes) {
            if (nodes.hasOwnProperty(key)) {
              NODE_STACK.push(nodes[key]);
            }
          }
        }
        // remove chainWatcher in node object
        if (node._watching) {
          nodeObject = node._object;
          if (nodeObject) {
            removeChainWatcher(nodeObject, node._key, node);
          }
        }
      }
    }
  }
};

})();



(function() {
/**
@module ember-metal
*/

Ember.warn("The CP_DEFAULT_CACHEABLE flag has been removed and computed properties are always cached by default. Use `volatile` if you don't want caching.", Ember.ENV.CP_DEFAULT_CACHEABLE !== false);


var get = Ember.get,
    set = Ember.set,
    metaFor = Ember.meta,
    a_slice = [].slice,
    o_create = Ember.create,
    META_KEY = Ember.META_KEY,
    watch = Ember.watch,
    unwatch = Ember.unwatch;

// ..........................................................
// DEPENDENT KEYS
//

// data structure:
//  meta.deps = {
//   'depKey': {
//     'keyName': count,
//   }
//  }

/*
  This function returns a map of unique dependencies for a
  given object and key.
*/
function keysForDep(depsMeta, depKey) {
  var keys = depsMeta[depKey];
  if (!keys) {
    // if there are no dependencies yet for a the given key
    // create a new empty list of dependencies for the key
    keys = depsMeta[depKey] = {};
  } else if (!depsMeta.hasOwnProperty(depKey)) {
    // otherwise if the dependency list is inherited from
    // a superclass, clone the hash
    keys = depsMeta[depKey] = o_create(keys);
  }
  return keys;
}

function metaForDeps(meta) {
  return keysForDep(meta, 'deps');
}

function addDependentKeys(desc, obj, keyName, meta) {
  // the descriptor has a list of dependent keys, so
  // add all of its dependent keys.
  var depKeys = desc._dependentKeys, depsMeta, idx, len, depKey, keys;
  if (!depKeys) return;

  depsMeta = metaForDeps(meta);

  for(idx = 0, len = depKeys.length; idx < len; idx++) {
    depKey = depKeys[idx];
    // Lookup keys meta for depKey
    keys = keysForDep(depsMeta, depKey);
    // Increment the number of times depKey depends on keyName.
    keys[keyName] = (keys[keyName] || 0) + 1;
    // Watch the depKey
    watch(obj, depKey);
  }
}

function removeDependentKeys(desc, obj, keyName, meta) {
  // the descriptor has a list of dependent keys, so
  // add all of its dependent keys.
  var depKeys = desc._dependentKeys, depsMeta, idx, len, depKey, keys;
  if (!depKeys) return;

  depsMeta = metaForDeps(meta);

  for(idx = 0, len = depKeys.length; idx < len; idx++) {
    depKey = depKeys[idx];
    // Lookup keys meta for depKey
    keys = keysForDep(depsMeta, depKey);
    // Increment the number of times depKey depends on keyName.
    keys[keyName] = (keys[keyName] || 0) - 1;
    // Watch the depKey
    unwatch(obj, depKey);
  }
}

// ..........................................................
// COMPUTED PROPERTY
//

/**
  A computed property transforms an objects function into a property.

  By default the function backing the computed property will only be called
  once and the result will be cached. You can specify various properties
  that your computed property is dependent on. This will force the cached
  result to be recomputed if the dependencies are modified.

  In the following example we declare a computed property (by calling
  `.property()` on the fullName function) and setup the properties
  dependencies (depending on firstName and lastName). The fullName function
  will be called once (regardless of how many times it is accessed) as long
  as it's dependencies have not been changed. Once firstName or lastName are updated
  any future calls (or anything bound) to fullName will incorporate the new
  values.

  ```javascript
  Person = Ember.Object.extend({
    // these will be supplied by `create`
    firstName: null,
    lastName: null,

    fullName: function() {
      var firstName = this.get('firstName');
      var lastName = this.get('lastName');

     return firstName + ' ' + lastName;
    }.property('firstName', 'lastName')
  });

  var tom = Person.create({
    firstName: "Tom",
    lastName: "Dale"
  });

  tom.get('fullName') // "Tom Dale"
  ```

  You can also define what Ember should do when setting a computed property.
  If you try to set a computed property, it will be invoked with the key and
  value you want to set it to. You can also accept the previous value as the
  third parameter.

  ```javascript

 Person = Ember.Object.extend({
    // these will be supplied by `create`
    firstName: null,
    lastName: null,

    fullName: function(key, value, oldValue) {
      // getter
      if (arguments.length === 1) {
        var firstName = this.get('firstName');
        var lastName = this.get('lastName');

        return firstName + ' ' + lastName;

      // setter
      } else {
        var name = value.split(" ");

        this.set('firstName', name[0]);
        this.set('lastName', name[1]);

        return value;
      }
    }.property('firstName', 'lastName')
  });

  var person = Person.create();
  person.set('fullName', "Peter Wagenet");
  person.get('firstName') // Peter
  person.get('lastName') // Wagenet
  ```

  @class ComputedProperty
  @namespace Ember
  @extends Ember.Descriptor
  @constructor
*/
function ComputedProperty(func, opts) {
  this.func = func;

  this._cacheable = (opts && opts.cacheable !== undefined) ? opts.cacheable : true;
  this._dependentKeys = opts && opts.dependentKeys;
  this._readOnly = opts && (opts.readOnly !== undefined || !!opts.readOnly);
}

Ember.ComputedProperty = ComputedProperty;
ComputedProperty.prototype = new Ember.Descriptor();

var ComputedPropertyPrototype = ComputedProperty.prototype;

/**
  Properties are cacheable by default. Computed property will automatically
  cache the return value of your function until one of the dependent keys changes.

  Call `volatile()` to set it into non-cached mode. When in this mode
  the computed property will not automatically cache the return value.

  However, if a property is properly observable, there is no reason to disable
  caching.

  @method cacheable
  @param {Boolean} aFlag optional set to `false` to disable caching
  @return {Ember.ComputedProperty} this
  @chainable
*/
ComputedPropertyPrototype.cacheable = function(aFlag) {
  this._cacheable = aFlag !== false;
  return this;
};

/**
  Call on a computed property to set it into non-cached mode. When in this
  mode the computed property will not automatically cache the return value.

  ```javascript
  MyApp.outsideService = Ember.Object.create({
    value: function() {
      return OutsideService.getValue();
    }.property().volatile()
  });
  ```

  @method volatile
  @return {Ember.ComputedProperty} this
  @chainable
*/
ComputedPropertyPrototype.volatile = function() {
  return this.cacheable(false);
};

/**
  Call on a computed property to set it into read-only mode. When in this
  mode the computed property will throw an error when set.

  ```javascript
  MyApp.person = Ember.Object.create({
    guid: function() {
      return 'guid-guid-guid';
    }.property().readOnly()
  });

  MyApp.person.set('guid', 'new-guid'); // will throw an exception
  ```

  @method readOnly
  @return {Ember.ComputedProperty} this
  @chainable
*/
ComputedPropertyPrototype.readOnly = function(readOnly) {
  this._readOnly = readOnly === undefined || !!readOnly;
  return this;
};

/**
  Sets the dependent keys on this computed property. Pass any number of
  arguments containing key paths that this computed property depends on.

  ```javascript
  MyApp.president = Ember.Object.create({
    fullName: Ember.computed(function() {
      return this.get('firstName') + ' ' + this.get('lastName');

      // Tell Ember that this computed property depends on firstName
      // and lastName
    }).property('firstName', 'lastName')
  });
  ```

  @method property
  @param {String} path* zero or more property paths
  @return {Ember.ComputedProperty} this
  @chainable
*/
ComputedPropertyPrototype.property = function() {
  var args = [];
  for (var i = 0, l = arguments.length; i < l; i++) {
    args.push(arguments[i]);
  }
  this._dependentKeys = args;
  return this;
};

/**
  In some cases, you may want to annotate computed properties with additional
  metadata about how they function or what values they operate on. For example,
  computed property functions may close over variables that are then no longer
  available for introspection.

  You can pass a hash of these values to a computed property like this:

  ```
  person: function() {
    var personId = this.get('personId');
    return App.Person.create({ id: personId });
  }.property().meta({ type: App.Person })
  ```

  The hash that you pass to the `meta()` function will be saved on the
  computed property descriptor under the `_meta` key. Ember runtime
  exposes a public API for retrieving these values from classes,
  via the `metaForProperty()` function.

  @method meta
  @param {Hash} meta
  @chainable
*/

ComputedPropertyPrototype.meta = function(meta) {
  if (arguments.length === 0) {
    return this._meta || {};
  } else {
    this._meta = meta;
    return this;
  }
};

/* impl descriptor API */
ComputedPropertyPrototype.didChange = function(obj, keyName) {
  // _suspended is set via a CP.set to ensure we don't clear
  // the cached value set by the setter
  if (this._cacheable && this._suspended !== obj) {
    var meta = metaFor(obj);
    if (keyName in meta.cache) {
      delete meta.cache[keyName];
      removeDependentKeys(this, obj, keyName, meta);
    }
  }
};

function finishChains(chainNodes)
{
  for (var i=0, l=chainNodes.length; i<l; i++) {
    chainNodes[i].didChange(null);
  }
}

/**
  Access the value of the function backing the computed property.
  If this property has already been cached, return the cached result.
  Otherwise, call the function passing the property name as an argument.

  ```javascript
  Person = Ember.Object.extend({
    fullName: function(keyName) {
      // the keyName parameter is 'fullName' in this case.

      return this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName', 'lastName')
  });


  var tom = Person.create({
    firstName: "Tom",
    lastName: "Dale"
  });

  tom.get('fullName') // "Tom Dale"
  ```

  @method get
  @param {String} keyName The key being accessed.
  @return {Object} The return value of the function backing the CP.
*/
ComputedPropertyPrototype.get = function(obj, keyName) {
  var ret, cache, meta, chainNodes;
  if (this._cacheable) {
    meta = metaFor(obj);
    cache = meta.cache;
    if (keyName in cache) { return cache[keyName]; }
    ret = cache[keyName] = this.func.call(obj, keyName);
    chainNodes = meta.chainWatchers && meta.chainWatchers[keyName];
    if (chainNodes) { finishChains(chainNodes); }
    addDependentKeys(this, obj, keyName, meta);
  } else {
    ret = this.func.call(obj, keyName);
  }
  return ret;
};

/**
  Set the value of a computed property. If the function that backs your
  computed property does not accept arguments then the default action for
  setting would be to define the property on the current object, and set
  the value of the property to the value being set.

  Generally speaking if you intend for your computed property to be set
  your backing function should accept either two or three arguments.

  @method set
  @param {String} keyName The key being accessed.
  @param {Object} newValue The new value being assigned.
  @param {String} oldValue The old value being replaced.
  @return {Object} The return value of the function backing the CP.
*/
ComputedPropertyPrototype.set = function(obj, keyName, value) {
  var cacheable = this._cacheable,
      func = this.func,
      meta = metaFor(obj, cacheable),
      watched = meta.watching[keyName],
      oldSuspended = this._suspended,
      hadCachedValue = false,
      cache = meta.cache,
      funcArgLength, cachedValue, ret;

  if (this._readOnly) {
    throw new Error('Cannot Set: ' + keyName + ' on: ' + obj.toString() );
  }

  this._suspended = obj;

  try {

    if (cacheable && cache.hasOwnProperty(keyName)) {
      cachedValue = cache[keyName];
      hadCachedValue = true;
    }

    // Check if the CP has been wrapped. If if has, use the
    // length from the wrapped function.
    funcArgLength = (func.wrappedFunction ? func.wrappedFunction.length : func.length);

    // For backwards-compatibility with computed properties
    // that check for arguments.length === 2 to determine if
    // they are being get or set, only pass the old cached
    // value if the computed property opts into a third
    // argument.
    if (funcArgLength === 3) {
      ret = func.call(obj, keyName, value, cachedValue);
    } else if (funcArgLength === 2) {
      ret = func.call(obj, keyName, value);
    } else {
      Ember.defineProperty(obj, keyName, null, cachedValue);
      Ember.set(obj, keyName, value);
      return;
    }

    if (hadCachedValue && cachedValue === ret) { return; }

    if (watched) { Ember.propertyWillChange(obj, keyName); }

    if (hadCachedValue) {
      delete cache[keyName];
    }

    if (cacheable) {
      if (!hadCachedValue) {
        addDependentKeys(this, obj, keyName, meta);
      }
      cache[keyName] = ret;
    }

    if (watched) { Ember.propertyDidChange(obj, keyName); }
  } finally {
    this._suspended = oldSuspended;
  }
  return ret;
};

/* called before property is overridden */
ComputedPropertyPrototype.teardown = function(obj, keyName) {
  var meta = metaFor(obj);

  if (keyName in meta.cache) {
    removeDependentKeys(this, obj, keyName, meta);
  }

  if (this._cacheable) { delete meta.cache[keyName]; }

  return null; // no value to restore
};


/**
  This helper returns a new property descriptor that wraps the passed
  computed property function. You can use this helper to define properties
  with mixins or via `Ember.defineProperty()`.

  The function you pass will be used to both get and set property values.
  The function should accept two parameters, key and value. If value is not
  undefined you should set the value first. In either case return the
  current value of the property.
  @method computed
  @for Ember
  @param {Function} func The computed property function.
  @return {Ember.ComputedProperty} property descriptor instance
*/
Ember.computed = function(func) {
  var args;

  if (arguments.length > 1) {
    args = a_slice.call(arguments, 0, -1);
    func = a_slice.call(arguments, -1)[0];
  }

  if (typeof func !== "function") {
    throw new Error("Computed Property declared without a property function");
  }

  var cp = new ComputedProperty(func);

  if (args) {
    cp.property.apply(cp, args);
  }

  return cp;
};

/**
  Returns the cached value for a property, if one exists.
  This can be useful for peeking at the value of a computed
  property that is generated lazily, without accidentally causing
  it to be created.

  @method cacheFor
  @for Ember
  @param {Object} obj the object whose property you want to check
  @param {String} key the name of the property whose cached value you want
    to return
  @return {*} the cached value
*/
Ember.cacheFor = function cacheFor(obj, key) {
  var cache = metaFor(obj, false).cache;

  if (cache && key in cache) {
    return cache[key];
  }
};

function getProperties(self, propertyNames) {
  var ret = {};
  for(var i = 0; i < propertyNames.length; i++) {
    ret[propertyNames[i]] = get(self, propertyNames[i]);
  }
  return ret;
}

function registerComputed(name, macro) {
  Ember.computed[name] = function(dependentKey) {
    var args = a_slice.call(arguments);
    return Ember.computed(dependentKey, function() {
      return macro.apply(this, args);
    });
  };
}

function registerComputedWithProperties(name, macro) {
  Ember.computed[name] = function() {
    var properties = a_slice.call(arguments);

    var computed = Ember.computed(function() {
      return macro.apply(this, [getProperties(this, properties)]);
    });

    return computed.property.apply(computed, properties);
  };
}

/**
  A computed property that returns true of the value of the dependent
  property is null, an empty string, empty array, or empty function.

  Note: When using `Ember.computed.empty` to watch an array make sure to
  use the `array.length` syntax so the computed can subscribe to transitions
  from empty to non-empty states.

  Example

  ```javascript
  var ToDoList = Ember.Object.extend({
    done: Ember.computed.empty('todos.length')
  });
  var todoList = ToDoList.create({todos: ['Unit Test', 'Documentation', 'Release']});
  todoList.get('done'); // false
  todoList.get('todos').clear(); // []
  todoList.get('done'); // true
  ```

  @method computed.empty
  @for Ember
  @param {String} dependentKey
  @return {Ember.ComputedProperty} computed property which negate
  the original value for property
*/
registerComputed('empty', function(dependentKey) {
  return Ember.isEmpty(get(this, dependentKey));
});

/**
  A computed property that returns true of the value of the dependent
  property is NOT null, an empty string, empty array, or empty function.

  Example

  ```javascript
  var Hampster = Ember.Object.extend({
    hasStuff: Ember.computed.notEmpty('backpack')
  });
  var hampster = Hampster.create({backpack: ['Food', 'Sleeping Bag', 'Tent']});
  hampster.get('hasStuff'); // true
  hampster.get('backpack').clear(); // []
  hampster.get('hasStuff'); // false
  ```

  @method computed.notEmpty
  @for Ember
  @param {String} dependentKey
  @return {Ember.ComputedProperty} computed property which returns true if
  original value for property is not empty.
*/
registerComputed('notEmpty', function(dependentKey) {
  return !Ember.isEmpty(get(this, dependentKey));
});

/**
  A computed property that returns true of the value of the dependent
  property is null or undefined. This avoids errors from JSLint complaining
  about use of ==, which can be technically confusing.

  Example

  ```javascript
  var Hampster = Ember.Object.extend({
    isHungry: Ember.computed.none('food')
  });
  var hampster = Hampster.create();
  hampster.get('isHungry'); // true
  hampster.set('food', 'Banana');
  hampster.get('isHungry'); // false
  hampster.set('food', null);
  hampster.get('isHungry'); // true
  ```

  @method computed.none
  @for Ember
  @param {String} dependentKey
  @return {Ember.ComputedProperty} computed property which
  returns true if original value for property is null or undefined.
*/
registerComputed('none', function(dependentKey) {
  return Ember.isNone(get(this, dependentKey));
});

/**
  A computed property that returns the inverse boolean value
  of the original value for the dependent property.

  Example

  ```javascript
  var User = Ember.Object.extend({
    isAnonymous: Ember.computed.not('loggedIn')
  });
  var user = User.create({loggedIn: false});
  user.get('isAnonymous'); // false
  user.set('loggedIn', true);
  user.get('isAnonymous'); // true
  ```

  @method computed.not
  @for Ember
  @param {String} dependentKey
  @return {Ember.ComputedProperty} computed property which returns
  inverse of the original value for property
*/
registerComputed('not', function(dependentKey) {
  return !get(this, dependentKey);
});

/**
  A computed property that converts the provided dependent property
  into a boolean value.

  ```javascript
  var Hampster = Ember.Object.extend({
    hasBananas: Ember.computed.bool('numBananas')
  });
  var hampster = Hampster.create();
  hampster.get('hasBananas'); // false
  hampster.set('numBananas', 0);
  hampster.get('hasBananas'); // false
  hampster.set('numBananas', 1);
  hampster.get('hasBananas'); // true
  hampster.set('numBananas', null);
  hampster.get('hasBananas'); // false
  ```

  @method computed.bool
  @for Ember
  @param {String} dependentKey
  @return {Ember.ComputedProperty} computed property which convert
  to boolean the original value for property
*/
registerComputed('bool', function(dependentKey) {
  return !!get(this, dependentKey);
});

/**
  A computed property which matches the original value for the
  dependent property against a given RegExp, returning `true`
  if they values matches the RegExp and `false` if it does not.

  Example

  ```javascript
  var User = Ember.Object.extend({
    hasValidEmail: Ember.computed.match('email', /^.+@.+\..+$/)
  });
  var user = User.create({loggedIn: false});
  user.get('hasValidEmail'); // false
  user.set('email', '');
  user.get('hasValidEmail'); // false
  user.set('email', 'ember_hampster@example.com');
  user.get('hasValidEmail'); // true
  ```

  @method computed.match
  @for Ember
  @param {String} dependentKey
  @param {RegExp} regexp
  @return {Ember.ComputedProperty} computed property which match
  the original value for property against a given RegExp
*/
registerComputed('match', function(dependentKey, regexp) {
  var value = get(this, dependentKey);
  return typeof value === 'string' ? !!value.match(regexp) : false;
});

/**
  A computed property that returns true if the provided dependent property
  is equal to the given value.

  Example

  ```javascript
  var Hampster = Ember.Object.extend({
    napTime: Ember.computed.equal('state', 'sleepy')
  });
  var hampster = Hampster.create();
  hampster.get('napTime'); // false
  hampster.set('state', 'sleepy');
  hampster.get('napTime'); // false
  hampster.set('state', 'hungry');
  hampster.get('napTime'); // false
  ```

  @method computed.equal
  @for Ember
  @param {String} dependentKey
  @param {String|Number|Object} value
  @return {Ember.ComputedProperty} computed property which returns true if
  the original value for property is equal to the given value.
*/
registerComputed('equal', function(dependentKey, value) {
  return get(this, dependentKey) === value;
});

/**
  A computed property that returns true if the provied dependent property
  is greater than the provided value.

  Example

  ```javascript
  var Hampster = Ember.Object.extend({
    hasTooManyBananas: Ember.computed.gt('numBananas', 10)
  });
  var hampster = Hampster.create();
  hampster.get('hasTooManyBananas'); // false
  hampster.set('numBananas', 3);
  hampster.get('hasTooManyBananas'); // false
  hampster.set('numBananas', 11);
  hampster.get('hasTooManyBananas'); // true
  ```

  @method computed.gt
  @for Ember
  @param {String} dependentKey
  @param {Number} value
  @return {Ember.ComputedProperty} computed property which returns true if
  the original value for property is greater then given value.
*/
registerComputed('gt', function(dependentKey, value) {
  return get(this, dependentKey) > value;
});

/**
  A computed property that returns true if the provided dependent property
  is greater than or equal to the provided value.

  Example

  ```javascript
  var Hampster = Ember.Object.extend({
    hasTooManyBananas: Ember.computed.gte('numBananas', 10)
  });
  var hampster = Hampster.create();
  hampster.get('hasTooManyBananas'); // false
  hampster.set('numBananas', 3);
  hampster.get('hasTooManyBananas'); // false
  hampster.set('numBananas', 10);
  hampster.get('hasTooManyBananas'); // true
  ```

  @method computed.gte
  @for Ember
  @param {String} dependentKey
  @param {Number} value
  @return {Ember.ComputedProperty} computed property which returns true if
  the original value for property is greater or equal then given value.
*/
registerComputed('gte', function(dependentKey, value) {
  return get(this, dependentKey) >= value;
});

/**
  A computed property that returns true if the provided dependent property
  is less than the provided value.

  Example

  ```javascript
  var Hampster = Ember.Object.extend({
    needsMoreBananas: Ember.computed.lt('numBananas', 3)
  });
  var hampster = Hampster.create();
  hampster.get('needsMoreBananas'); // true
  hampster.set('numBananas', 3);
  hampster.get('needsMoreBananas'); // false
  hampster.set('numBananas', 2);
  hampster.get('needsMoreBananas'); // true
  ```

  @method computed.lt
  @for Ember
  @param {String} dependentKey
  @param {Number} value
  @return {Ember.ComputedProperty} computed property which returns true if
  the original value for property is less then given value.
*/
registerComputed('lt', function(dependentKey, value) {
  return get(this, dependentKey) < value;
});

/**
  A computed property that returns true if the provided dependent property
  is less than or equal to the provided value.

  Example

  ```javascript
  var Hampster = Ember.Object.extend({
    needsMoreBananas: Ember.computed.lte('numBananas', 3)
  });
  var hampster = Hampster.create();
  hampster.get('needsMoreBananas'); // true
  hampster.set('numBananas', 5);
  hampster.get('needsMoreBananas'); // false
  hampster.set('numBananas', 3);
  hampster.get('needsMoreBananas'); // true
  ```

  @method computed.lte
  @for Ember
  @param {String} dependentKey
  @param {Number} value
  @return {Ember.ComputedProperty} computed property which returns true if
  the original value for property is less or equal then given value.
*/
registerComputed('lte', function(dependentKey, value) {
  return get(this, dependentKey) <= value;
});

/**
  A computed property that performs a logical `and` on the
  original values for the provided dependent properties.


  Example

  ```javascript
  var Hampster = Ember.Object.extend({
    readyForCamp: Ember.computed.and('hasTent', 'hasBackpack')
  });
  var hampster = Hampster.create();
  hampster.get('readyForCamp'); // false
  hampster.set('hasTent', true);
  hampster.get('readyForCamp'); // false
  hampster.set('hasBackpack', true);
  hampster.get('readyForCamp'); // true
  ```

  @method computed.and
  @for Ember
  @param {String} dependentKey, [dependentKey...]
  @return {Ember.ComputedProperty} computed property which performs
  a logical `and` on the values of all the original values for properties.
*/
registerComputedWithProperties('and', function(properties) {
  for (var key in properties) {
    if (properties.hasOwnProperty(key) && !properties[key]) {
      return false;
    }
  }
  return true;
});

/**
  A computed property that which performs a logical `or` on the
  original values for the provided dependent properties.

  Example

  ```javascript
  var Hampster = Ember.Object.extend({
    readyForRain: Ember.computed.or('hasJacket', 'hasUmbrella')
  });
  var hampster = Hampster.create();
  hampster.get('readyForRain'); // false
  hampster.set('hasJacket', true);
  hampster.get('readyForRain'); // true
  ```

  @method computed.or
  @for Ember
  @param {String} dependentKey, [dependentKey...]
  @return {Ember.ComputedProperty} computed property which performs
  a logical `or` on the values of all the original values for properties.
*/
registerComputedWithProperties('or', function(properties) {
  for (var key in properties) {
    if (properties.hasOwnProperty(key) && properties[key]) {
      return true;
    }
  }
  return false;
});

/**
  A computed property that returns the first truthy value
  from a list of dependent properties.

  Example

  ```javascript
  var Hampster = Ember.Object.extend({
    hasClothes: Ember.computed.any('hat', 'shirt')
  });
  var hampster = Hampster.create();
  hampster.get('hasClothes'); // null
  hampster.set('shirt', 'Hawaiian Shirt');
  hampster.get('hasClothes'); // 'Hawaiian Shirt'
  ```

  @method computed.any
  @for Ember
  @param {String} dependentKey, [dependentKey...]
  @return {Ember.ComputedProperty} computed property which returns
  the first truthy value of given list of properties.
*/
registerComputedWithProperties('any', function(properties) {
  for (var key in properties) {
    if (properties.hasOwnProperty(key) && properties[key]) {
      return properties[key];
    }
  }
  return null;
});

/**
  A computed property that returns the array of values
  for the provided dependent properties.

  Example

  ```javascript
  var Hampster = Ember.Object.extend({
    clothes: Ember.computed.map('hat', 'shirt')
  });
  var hampster = Hampster.create();
  hampster.get('clothes'); // [null, null]
  hampster.set('hat', 'Camp Hat');
  hampster.set('shirt', 'Camp Shirt');
  hampster.get('clothes'); // ['Camp Hat', 'Camp Shirt']
  ```

  @method computed.map
  @for Ember
  @param {String} dependentKey, [dependentKey...]
  @return {Ember.ComputedProperty} computed property which maps
  values of all passed properties in to an array.
*/
registerComputedWithProperties('collect', function(properties) {
  var res = [];
  for (var key in properties) {
    if (properties.hasOwnProperty(key)) {
      if (Ember.isNone(properties[key])) {
        res.push(null);
      } else {
        res.push(properties[key]);
      }
    }
  }
  return res;
});

/**
  Creates a new property that is an alias for another property
  on an object. Calls to `get` or `set` this property behave as
  though they were called on the original property.

  ```javascript
  Person = Ember.Object.extend({
    name: 'Alex Matchneer',
    nomen: Ember.computed.alias('name')
  });

  alex = Person.create();
  alex.get('nomen'); // 'Alex Matchneer'
  alex.get('name');  // 'Alex Matchneer'

  alex.set('nomen', '@machty');
  alex.get('name');  // '@machty'
  ```
  @method computed.alias
  @for Ember
  @param {String} dependentKey
  @return {Ember.ComputedProperty} computed property which creates an
  alias to the original value for property.
*/
Ember.computed.alias = function(dependentKey) {
  return Ember.computed(dependentKey, function(key, value) {
    if (arguments.length > 1) {
      set(this, dependentKey, value);
      return value;
    } else {
      return get(this, dependentKey);
    }
  });
};

/**
  Where `computed.alias` aliases `get` and `set`, and allows for bidirectional
  data flow, `computed.oneWay` only provides an aliased `get`. The `set` will
  not mutate the upstream property, rather causes the current property to
  become the value set. This causes the downstream property to permentantly
  diverge from the upstream property.

  Example

  ```javascript
  User = Ember.Object.extend({
    firstName: null,
    lastName: null,
    nickName: Ember.computed.oneWay('firstName')
  });

  user = User.create({
    firstName: 'Teddy',
    lastName:  'Zeenny'
  });

  user.get('nickName');
  # 'Teddy'

  user.set('nickName', 'TeddyBear');
  # 'TeddyBear'

  user.get('firstName');
  # 'Teddy'
  ```

  @method computed.oneWay
  @for Ember
  @param {String} dependentKey
  @return {Ember.ComputedProperty} computed property which creates an
  one way computed property to the original value for property.
*/
Ember.computed.oneWay = function(dependentKey) {
  return Ember.computed(dependentKey, function() {
    return get(this, dependentKey);
  });
};


/**
  A computed property that acts like a standard getter and setter,
  but retruns the value at the provided `defaultPath` if the
  property itself has not been set to a value

  Example

  ```javascript
  var Hampster = Ember.Object.extend({
    wishList: Ember.computed.defaultTo('favoriteFood')
  });
  var hampster = Hampster.create({favoriteFood: 'Banana'});
  hampster.get('wishList'); // 'Banana'
  hampster.set('wishList', 'More Unit Tests');
  hampster.get('wishList'); // 'More Unit Tests'
  hampster.get('favoriteFood'); // 'Banana'
  ```

  @method computed.defaultTo
  @for Ember
  @param {String} defaultPath
  @return {Ember.ComputedProperty} computed property which acts like
  a standard getter and setter, but defaults to the value from `defaultPath`.
*/
Ember.computed.defaultTo = function(defaultPath) {
  return Ember.computed(function(key, newValue, cachedValue) {
    if (arguments.length === 1) {
      return cachedValue != null ? cachedValue : get(this, defaultPath);
    }
    return newValue != null ? newValue : get(this, defaultPath);
  });
};



})();



(function() {
// Ember.tryFinally
/**
@module ember-metal
*/

var AFTER_OBSERVERS = ':change';
var BEFORE_OBSERVERS = ':before';

function changeEvent(keyName) {
  return keyName+AFTER_OBSERVERS;
}

function beforeEvent(keyName) {
  return keyName+BEFORE_OBSERVERS;
}

/**
  @method addObserver
  @param obj
  @param {String} path
  @param {Object|Function} targetOrMethod
  @param {Function|String} [method]
*/
Ember.addObserver = function(obj, path, target, method) {
  Ember.addListener(obj, changeEvent(path), target, method);
  Ember.watch(obj, path);
  return this;
};

Ember.observersFor = function(obj, path) {
  return Ember.listenersFor(obj, changeEvent(path));
};

/**
  @method removeObserver
  @param obj
  @param {String} path
  @param {Object|Function} targetOrMethod
  @param {Function|String} [method]
*/
Ember.removeObserver = function(obj, path, target, method) {
  Ember.unwatch(obj, path);
  Ember.removeListener(obj, changeEvent(path), target, method);
  return this;
};

/**
  @method addBeforeObserver
  @param obj
  @param {String} path
  @param {Object|Function} targetOrMethod
  @param {Function|String} [method]
*/
Ember.addBeforeObserver = function(obj, path, target, method) {
  Ember.addListener(obj, beforeEvent(path), target, method);
  Ember.watch(obj, path);
  return this;
};

// Suspend observer during callback.
//
// This should only be used by the target of the observer
// while it is setting the observed path.
Ember._suspendBeforeObserver = function(obj, path, target, method, callback) {
  return Ember._suspendListener(obj, beforeEvent(path), target, method, callback);
};

Ember._suspendObserver = function(obj, path, target, method, callback) {
  return Ember._suspendListener(obj, changeEvent(path), target, method, callback);
};

var map = Ember.ArrayPolyfills.map;

Ember._suspendBeforeObservers = function(obj, paths, target, method, callback) {
  var events = map.call(paths, beforeEvent);
  return Ember._suspendListeners(obj, events, target, method, callback);
};

Ember._suspendObservers = function(obj, paths, target, method, callback) {
  var events = map.call(paths, changeEvent);
  return Ember._suspendListeners(obj, events, target, method, callback);
};

Ember.beforeObserversFor = function(obj, path) {
  return Ember.listenersFor(obj, beforeEvent(path));
};

/**
  @method removeBeforeObserver
  @param obj
  @param {String} path
  @param {Object|Function} targetOrMethod
  @param {Function|String} [method]
*/
Ember.removeBeforeObserver = function(obj, path, target, method) {
  Ember.unwatch(obj, path);
  Ember.removeListener(obj, beforeEvent(path), target, method);
  return this;
};
})();



(function() {
define("backburner/queue",
  ["exports"],
  function(__exports__) {
    "use strict";
    function Queue(daq, name, options) {
      this.daq = daq;
      this.name = name;
      this.options = options;
      this._queue = [];
    }

    Queue.prototype = {
      daq: null,
      name: null,
      options: null,
      _queue: null,

      push: function(target, method, args, stack) {
        var queue = this._queue;
        queue.push(target, method, args, stack);
        return {queue: this, target: target, method: method};
      },

      pushUnique: function(target, method, args, stack) {
        var queue = this._queue, currentTarget, currentMethod, i, l;

        for (i = 0, l = queue.length; i < l; i += 4) {
          currentTarget = queue[i];
          currentMethod = queue[i+1];

          if (currentTarget === target && currentMethod === method) {
            queue[i+2] = args; // replace args
            queue[i+3] = stack; // replace stack
            return {queue: this, target: target, method: method}; // TODO: test this code path
          }
        }

        this._queue.push(target, method, args, stack);
        return {queue: this, target: target, method: method};
      },

      // TODO: remove me, only being used for Ember.run.sync
      flush: function() {
        var queue = this._queue,
            options = this.options,
            before = options && options.before,
            after = options && options.after,
            target, method, args, stack, i, l = queue.length;

        if (l && before) { before(); }
        for (i = 0; i < l; i += 4) {
          target = queue[i];
          method = queue[i+1];
          args   = queue[i+2];
          stack  = queue[i+3]; // Debugging assistance

          // TODO: error handling
          if (args && args.length > 0) {
            method.apply(target, args);
          } else {
            method.call(target);
          }
        }
        if (l && after) { after(); }

        // check if new items have been added
        if (queue.length > l) {
          this._queue = queue.slice(l);
          this.flush();
        } else {
          this._queue.length = 0;
        }
      },

      cancel: function(actionToCancel) {
        var queue = this._queue, currentTarget, currentMethod, i, l;

        for (i = 0, l = queue.length; i < l; i += 4) {
          currentTarget = queue[i];
          currentMethod = queue[i+1];

          if (currentTarget === actionToCancel.target && currentMethod === actionToCancel.method) {
            queue.splice(i, 4);
            return true;
          }
        }

        // if not found in current queue
        // could be in the queue that is being flushed
        queue = this._queueBeingFlushed;
        if (!queue) {
          return;
        }
        for (i = 0, l = queue.length; i < l; i += 4) {
          currentTarget = queue[i];
          currentMethod = queue[i+1];

          if (currentTarget === actionToCancel.target && currentMethod === actionToCancel.method) {
            // don't mess with array during flush
            // just nullify the method
            queue[i+1] = null;
            return true;
          }
        }
      }
    };


    __exports__.Queue = Queue;
  });

define("backburner/deferred_action_queues",
  ["backburner/queue","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Queue = __dependency1__.Queue;

    function DeferredActionQueues(queueNames, options) {
      var queues = this.queues = {};
      this.queueNames = queueNames = queueNames || [];

      var queueName;
      for (var i = 0, l = queueNames.length; i < l; i++) {
        queueName = queueNames[i];
        queues[queueName] = new Queue(this, queueName, options[queueName]);
      }
    }

    DeferredActionQueues.prototype = {
      queueNames: null,
      queues: null,

      schedule: function(queueName, target, method, args, onceFlag, stack) {
        var queues = this.queues,
            queue = queues[queueName];

        if (!queue) { throw new Error("You attempted to schedule an action in a queue (" + queueName + ") that doesn't exist"); }

        if (onceFlag) {
          return queue.pushUnique(target, method, args, stack);
        } else {
          return queue.push(target, method, args, stack);
        }
      },

      flush: function() {
        var queues = this.queues,
            queueNames = this.queueNames,
            queueName, queue, queueItems, priorQueueNameIndex,
            queueNameIndex = 0, numberOfQueues = queueNames.length;

        outerloop:
        while (queueNameIndex < numberOfQueues) {
          queueName = queueNames[queueNameIndex];
          queue = queues[queueName];
          queueItems = queue._queueBeingFlushed = queue._queue.slice();
          queue._queue = [];

          var options = queue.options,
              before = options && options.before,
              after = options && options.after,
              target, method, args, stack,
              queueIndex = 0, numberOfQueueItems = queueItems.length;

          if (numberOfQueueItems && before) { before(); }
          while (queueIndex < numberOfQueueItems) {
            target = queueItems[queueIndex];
            method = queueItems[queueIndex+1];
            args   = queueItems[queueIndex+2];
            stack  = queueItems[queueIndex+3]; // Debugging assistance

            if (typeof method === 'string') { method = target[method]; }

            // method could have been nullified / canceled during flush
            if (method) {
              // TODO: error handling
              if (args && args.length > 0) {
                method.apply(target, args);
              } else {
                method.call(target);
              }
            }

            queueIndex += 4;
          }
          queue._queueBeingFlushed = null;
          if (numberOfQueueItems && after) { after(); }

          if ((priorQueueNameIndex = indexOfPriorQueueWithActions(this, queueNameIndex)) !== -1) {
            queueNameIndex = priorQueueNameIndex;
            continue outerloop;
          }

          queueNameIndex++;
        }
      }
    };

    function indexOfPriorQueueWithActions(daq, currentQueueIndex) {
      var queueName, queue;

      for (var i = 0, l = currentQueueIndex; i <= l; i++) {
        queueName = daq.queueNames[i];
        queue = daq.queues[queueName];
        if (queue._queue.length) { return i; }
      }

      return -1;
    }


    __exports__.DeferredActionQueues = DeferredActionQueues;
  });

define("backburner",
  ["backburner/deferred_action_queues","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DeferredActionQueues = __dependency1__.DeferredActionQueues;

    var slice = [].slice,
        pop = [].pop,
        throttlers = [],
        debouncees = [],
        timers = [],
        autorun, laterTimer, laterTimerExpiresAt,
        global = this;

    function Backburner(queueNames, options) {
      this.queueNames = queueNames;
      this.options = options || {};
      if (!this.options.defaultQueue) {
        this.options.defaultQueue = queueNames[0];
      }
      this.instanceStack = [];
    }

    Backburner.prototype = {
      queueNames: null,
      options: null,
      currentInstance: null,
      instanceStack: null,

      begin: function() {
        var onBegin = this.options && this.options.onBegin,
            previousInstance = this.currentInstance;

        if (previousInstance) {
          this.instanceStack.push(previousInstance);
        }

        this.currentInstance = new DeferredActionQueues(this.queueNames, this.options);
        if (onBegin) {
          onBegin(this.currentInstance, previousInstance);
        }
      },

      end: function() {
        var onEnd = this.options && this.options.onEnd,
            currentInstance = this.currentInstance,
            nextInstance = null;

        try {
          currentInstance.flush();
        } finally {
          this.currentInstance = null;

          if (this.instanceStack.length) {
            nextInstance = this.instanceStack.pop();
            this.currentInstance = nextInstance;
          }

          if (onEnd) {
            onEnd(currentInstance, nextInstance);
          }
        }
      },

      run: function(target, method /*, args */) {
        var ret;
        this.begin();

        if (!method) {
          method = target;
          target = null;
        }

        if (typeof method === 'string') {
          method = target[method];
        }

        // Prevent Safari double-finally.
        var finallyAlreadyCalled = false;
        try {
          if (arguments.length > 2) {
            ret = method.apply(target, slice.call(arguments, 2));
          } else {
            ret = method.call(target);
          }
        } finally {
          if (!finallyAlreadyCalled) {
            finallyAlreadyCalled = true;
            this.end();
          }
        }
        return ret;
      },

      defer: function(queueName, target, method /* , args */) {
        if (!method) {
          method = target;
          target = null;
        }

        if (typeof method === 'string') {
          method = target[method];
        }

        var stack = this.DEBUG ? new Error().stack : undefined,
            args = arguments.length > 3 ? slice.call(arguments, 3) : undefined;
        if (!this.currentInstance) { createAutorun(this); }
        return this.currentInstance.schedule(queueName, target, method, args, false, stack);
      },

      deferOnce: function(queueName, target, method /* , args */) {
        if (!method) {
          method = target;
          target = null;
        }

        if (typeof method === 'string') {
          method = target[method];
        }

        var stack = this.DEBUG ? new Error().stack : undefined,
            args = arguments.length > 3 ? slice.call(arguments, 3) : undefined;
        if (!this.currentInstance) { createAutorun(this); }
        return this.currentInstance.schedule(queueName, target, method, args, true, stack);
      },

      setTimeout: function() {
        var self = this,
            wait = pop.call(arguments),
            target = arguments[0],
            method = arguments[1],
            executeAt = (+new Date()) + wait;

        if (!method) {
          method = target;
          target = null;
        }

        if (typeof method === 'string') {
          method = target[method];
        }

        var fn, args;
        if (arguments.length > 2) {
          args = slice.call(arguments, 2);

          fn = function() {
            method.apply(target, args);
          };
        } else {
          fn = function() {
            method.call(target);
          };
        }

        // find position to insert - TODO: binary search
        var i, l;
        for (i = 0, l = timers.length; i < l; i += 2) {
          if (executeAt < timers[i]) { break; }
        }

        timers.splice(i, 0, executeAt, fn);

        if (laterTimer && laterTimerExpiresAt < executeAt) { return fn; }

        if (laterTimer) {
          clearTimeout(laterTimer);
          laterTimer = null;
        }
        laterTimer = global.setTimeout(function() {
          executeTimers(self);
          laterTimer = null;
          laterTimerExpiresAt = null;
        }, wait);
        laterTimerExpiresAt = executeAt;

        return fn;
      },

      throttle: function(target, method /* , args, wait */) {
        var self = this,
            args = arguments,
            wait = pop.call(args),
            throttler;

        for (var i = 0, l = throttlers.length; i < l; i++) {
          throttler = throttlers[i];
          if (throttler[0] === target && throttler[1] === method) { return; } // do nothing
        }

        var timer = global.setTimeout(function() {
          self.run.apply(self, args);

          // remove throttler
          var index = -1;
          for (var i = 0, l = throttlers.length; i < l; i++) {
            throttler = throttlers[i];
            if (throttler[0] === target && throttler[1] === method) {
              index = i;
              break;
            }
          }

          if (index > -1) { throttlers.splice(index, 1); }
        }, wait);

        throttlers.push([target, method, timer]);
      },

      debounce: function(target, method /* , args, wait, [immediate] */) {
        var self = this,
            args = arguments,
            immediate = pop.call(args),
            wait,
            index,
            debouncee;

        if (typeof immediate === "number") {
          wait = immediate;
          immediate = false;
        } else {
          wait = pop.call(args);
        }

        // Remove debouncee
        index = findDebouncee(target, method);

        if (index !== -1) {
          debouncee = debouncees[index];
          debouncees.splice(index, 1);
          clearTimeout(debouncee[2]);
        }

        var timer = global.setTimeout(function() {
          if (!immediate) {
            self.run.apply(self, args);
          }
          index = findDebouncee(target, method);
          if (index) {
            debouncees.splice(index, 1);
          }
        }, wait);

        if (immediate && index === -1) {
          self.run.apply(self, args);
        }

        debouncees.push([target, method, timer]);
      },

      cancelTimers: function() {
        var i, len;

        for (i = 0, len = throttlers.length; i < len; i++) {
          clearTimeout(throttlers[i][2]);
        }
        throttlers = [];

        for (i = 0, len = debouncees.length; i < len; i++) {
          clearTimeout(debouncees[i][2]);
        }
        debouncees = [];

        if (laterTimer) {
          clearTimeout(laterTimer);
          laterTimer = null;
        }
        timers = [];

        if (autorun) {
          clearTimeout(autorun);
          autorun = null;
        }
      },

      hasTimers: function() {
        return !!timers.length || autorun;
      },

      cancel: function(timer) {
        if (timer && typeof timer === 'object' && timer.queue && timer.method) { // we're cancelling a deferOnce
          return timer.queue.cancel(timer);
        } else if (typeof timer === 'function') { // we're cancelling a setTimeout
          for (var i = 0, l = timers.length; i < l; i += 2) {
            if (timers[i + 1] === timer) {
              timers.splice(i, 2); // remove the two elements
              return true;
            }
          }
        } else {
          return; // timer was null or not a timer
        }
      }
    };

    Backburner.prototype.schedule = Backburner.prototype.defer;
    Backburner.prototype.scheduleOnce = Backburner.prototype.deferOnce;
    Backburner.prototype.later = Backburner.prototype.setTimeout;

    function createAutorun(backburner) {
      backburner.begin();
      autorun = global.setTimeout(function() {
        autorun = null;
        backburner.end();
      });
    }

    function executeTimers(self) {
      var now = +new Date(),
          time, fns, i, l;

      self.run(function() {
        // TODO: binary search
        for (i = 0, l = timers.length; i < l; i += 2) {
          time = timers[i];
          if (time > now) { break; }
        }

        fns = timers.splice(0, i);

        for (i = 1, l = fns.length; i < l; i += 2) {
          self.schedule(self.options.defaultQueue, null, fns[i]);
        }
      });

      if (timers.length) {
        laterTimer = global.setTimeout(function() {
          executeTimers(self);
          laterTimer = null;
          laterTimerExpiresAt = null;
        }, timers[0] - now);
        laterTimerExpiresAt = timers[0];
      }
    }

    function findDebouncee(target, method) {
      var debouncee,
          index = -1;

      for (var i = 0, l = debouncees.length; i < l; i++) {
        debouncee = debouncees[i];
        if (debouncee[0] === target && debouncee[1] === method) {
          index = i;
          break;
        }
      }

      return index;
    }


    __exports__.Backburner = Backburner;
  });
})();



(function() {
var onBegin = function(current) {
  Ember.run.currentRunLoop = current;
};

var onEnd = function(current, next) {
  Ember.run.currentRunLoop = next;
};

var Backburner = requireModule('backburner').Backburner,
    backburner = new Backburner(['sync', 'actions', 'destroy'], {
      sync: {
        before: Ember.beginPropertyChanges,
        after: Ember.endPropertyChanges
      },
      defaultQueue: 'actions',
      onBegin: onBegin,
      onEnd: onEnd
    }),
    slice = [].slice;

// ..........................................................
// Ember.run - this is ideally the only public API the dev sees
//

/**
  Runs the passed target and method inside of a RunLoop, ensuring any
  deferred actions including bindings and views updates are flushed at the
  end.

  Normally you should not need to invoke this method yourself. However if
  you are implementing raw event handlers when interfacing with other
  libraries or plugins, you should probably wrap all of your code inside this
  call.

  ```javascript
  Ember.run(function() {
    // code to be execute within a RunLoop
  });
  ```

  @class run
  @namespace Ember
  @static
  @constructor
  @param {Object} [target] target of method to call
  @param {Function|String} method Method to invoke.
    May be a function or a string. If you pass a string
    then it will be looked up on the passed target.
  @param {Object} [args*] Any additional arguments you wish to pass to the method.
  @return {Object} return value from invoking the passed function.
*/
Ember.run = function(target, method) {
  var ret;

  if (Ember.onerror) {
    try {
      ret = backburner.run.apply(backburner, arguments);
    } catch (e) {
      Ember.onerror(e);
    }
  } else {
    ret = backburner.run.apply(backburner, arguments);
  }

  return ret;
};

/**

  If no run-loop is present, it creates a new one. If a run loop is
  present it will queue itself to run on the existing run-loops action
  queue.

  Please note: This is not for normal usage, and should be used sparingly.

  If invoked when not within a run loop:

  ```javascript
  Ember.run.join(function() {
    // creates a new run-loop
  });
  ```

  Alternatively, if called within an existing run loop:

  ```javascript
  Ember.run(function() {
    // creates a new run-loop
    Ember.run.join(function() {
      // joins with the existing run-loop, and queues for invocation on
      // the existing run-loops action queue.
    });
  });
  ```

  @method join
  @namespace Ember
  @param {Object} [target] target of method to call
  @param {Function|String} method Method to invoke.
    May be a function or a string. If you pass a string
    then it will be looked up on the passed target.
  @param {Object} [args*] Any additional arguments you wish to pass to the method.
  @return {Object} return value from invoking the passed function. Please note,
  when called within an existing loop, no return value is possible.
*/
Ember.run.join = function(target, method) {
  if (!Ember.run.currentRunLoop) {
    return Ember.run.apply(Ember.run, arguments);
  }

  var args = slice.call(arguments);
  args.unshift('actions');
  Ember.run.schedule.apply(Ember.run, args);
};

Ember.run.backburner = backburner;

var run = Ember.run;

Ember.run.currentRunLoop = null;

Ember.run.queues = backburner.queueNames;

/**
  Begins a new RunLoop. Any deferred actions invoked after the begin will
  be buffered until you invoke a matching call to `Ember.run.end()`. This is
  a lower-level way to use a RunLoop instead of using `Ember.run()`.

  ```javascript
  Ember.run.begin();
  // code to be execute within a RunLoop
  Ember.run.end();
  ```

  @method begin
  @return {void}
*/
Ember.run.begin = function() {
  backburner.begin();
};

/**
  Ends a RunLoop. This must be called sometime after you call
  `Ember.run.begin()` to flush any deferred actions. This is a lower-level way
  to use a RunLoop instead of using `Ember.run()`.

  ```javascript
  Ember.run.begin();
  // code to be execute within a RunLoop
  Ember.run.end();
  ```

  @method end
  @return {void}
*/
Ember.run.end = function() {
  backburner.end();
};

/**
  Array of named queues. This array determines the order in which queues
  are flushed at the end of the RunLoop. You can define your own queues by
  simply adding the queue name to this array. Normally you should not need
  to inspect or modify this property.

  @property queues
  @type Array
  @default ['sync', 'actions', 'destroy']
*/

/**
  Adds the passed target/method and any optional arguments to the named
  queue to be executed at the end of the RunLoop. If you have not already
  started a RunLoop when calling this method one will be started for you
  automatically.

  At the end of a RunLoop, any methods scheduled in this way will be invoked.
  Methods will be invoked in an order matching the named queues defined in
  the `Ember.run.queues` property.

  ```javascript
  Ember.run.schedule('sync', this, function() {
    // this will be executed in the first RunLoop queue, when bindings are synced
    console.log("scheduled on sync queue");
  });

  Ember.run.schedule('actions', this, function() {
    // this will be executed in the 'actions' queue, after bindings have synced.
    console.log("scheduled on actions queue");
  });

  // Note the functions will be run in order based on the run queues order. Output would be:
  //   scheduled on sync queue
  //   scheduled on actions queue
  ```

  @method schedule
  @param {String} queue The name of the queue to schedule against.
    Default queues are 'sync' and 'actions'
  @param {Object} [target] target object to use as the context when invoking a method.
  @param {String|Function} method The method to invoke. If you pass a string it
    will be resolved on the target object at the time the scheduled item is
    invoked allowing you to change the target function.
  @param {Object} [arguments*] Optional arguments to be passed to the queued method.
  @return {void}
*/
Ember.run.schedule = function(queue, target, method) {
  checkAutoRun();
  backburner.schedule.apply(backburner, arguments);
};

// Used by global test teardown
Ember.run.hasScheduledTimers = function() {
  return backburner.hasTimers();
};

// Used by global test teardown
Ember.run.cancelTimers = function () {
  backburner.cancelTimers();
};

/**
  Immediately flushes any events scheduled in the 'sync' queue. Bindings
  use this queue so this method is a useful way to immediately force all
  bindings in the application to sync.

  You should call this method anytime you need any changed state to propagate
  throughout the app immediately without repainting the UI (which happens
  in the later 'render' queue added by the `ember-views` package).

  ```javascript
  Ember.run.sync();
  ```

  @method sync
  @return {void}
*/
Ember.run.sync = function() {
  if (backburner.currentInstance) {
    backburner.currentInstance.queues.sync.flush();
  }
};

/**
  Invokes the passed target/method and optional arguments after a specified
  period if time. The last parameter of this method must always be a number
  of milliseconds.

  You should use this method whenever you need to run some action after a
  period of time instead of using `setTimeout()`. This method will ensure that
  items that expire during the same script execution cycle all execute
  together, which is often more efficient than using a real setTimeout.

  ```javascript
  Ember.run.later(myContext, function() {
    // code here will execute within a RunLoop in about 500ms with this == myContext
  }, 500);
  ```

  @method later
  @param {Object} [target] target of method to invoke
  @param {Function|String} method The method to invoke.
    If you pass a string it will be resolved on the
    target at the time the method is invoked.
  @param {Object} [args*] Optional arguments to pass to the timeout.
  @param {Number} wait Number of milliseconds to wait.
  @return {String} a string you can use to cancel the timer in
    `Ember.run.cancel` later.
*/
Ember.run.later = function(target, method) {
  return backburner.later.apply(backburner, arguments);
};

/**
  Schedule a function to run one time during the current RunLoop. This is equivalent
  to calling `scheduleOnce` with the "actions" queue.

  @method once
  @param {Object} [target] The target of the method to invoke.
  @param {Function|String} method The method to invoke.
    If you pass a string it will be resolved on the
    target at the time the method is invoked.
  @param {Object} [args*] Optional arguments to pass to the timeout.
  @return {Object} timer
*/
Ember.run.once = function(target, method) {
  checkAutoRun();
  var args = slice.call(arguments);
  args.unshift('actions');
  return backburner.scheduleOnce.apply(backburner, args);
};

/**
  Schedules a function to run one time in a given queue of the current RunLoop.
  Calling this method with the same queue/target/method combination will have
  no effect (past the initial call).

  Note that although you can pass optional arguments these will not be
  considered when looking for duplicates. New arguments will replace previous
  calls.

  ```javascript
  Ember.run(function() {
    var sayHi = function() { console.log('hi'); }
    Ember.run.scheduleOnce('afterRender', myContext, sayHi);
    Ember.run.scheduleOnce('afterRender', myContext, sayHi);
    // sayHi will only be executed once, in the afterRender queue of the RunLoop
  });
  ```

  Also note that passing an anonymous function to `Ember.run.scheduleOnce` will
  not prevent additional calls with an identical anonymous function from
  scheduling the items multiple times, e.g.:

  ```javascript
  function scheduleIt() {
    Ember.run.scheduleOnce('actions', myContext, function() { console.log("Closure"); });
  }
  scheduleIt();
  scheduleIt();
  // "Closure" will print twice, even though we're using `Ember.run.scheduleOnce`,
  // because the function we pass to it is anonymous and won't match the
  // previously scheduled operation.
  ```

  Available queues, and their order, can be found at `Ember.run.queues`

  @method scheduleOnce
  @param {String} [queue] The name of the queue to schedule against. Default queues are 'sync' and 'actions'.
  @param {Object} [target] The target of the method to invoke.
  @param {Function|String} method The method to invoke.
    If you pass a string it will be resolved on the
    target at the time the method is invoked.
  @param {Object} [args*] Optional arguments to pass to the timeout.
  @return {Object} timer
*/
Ember.run.scheduleOnce = function(queue, target, method) {
  checkAutoRun();
  return backburner.scheduleOnce.apply(backburner, arguments);
};

/**
  Schedules an item to run from within a separate run loop, after
  control has been returned to the system. This is equivalent to calling
  `Ember.run.later` with a wait time of 1ms.

  ```javascript
  Ember.run.next(myContext, function() {
    // code to be executed in the next run loop, which will be scheduled after the current one
  });
  ```

  Multiple operations scheduled with `Ember.run.next` will coalesce
  into the same later run loop, along with any other operations
  scheduled by `Ember.run.later` that expire right around the same
  time that `Ember.run.next` operations will fire.

  Note that there are often alternatives to using `Ember.run.next`.
  For instance, if you'd like to schedule an operation to happen
  after all DOM element operations have completed within the current
  run loop, you can make use of the `afterRender` run loop queue (added
  by the `ember-views` package, along with the preceding `render` queue
  where all the DOM element operations happen). Example:

  ```javascript
  App.MyCollectionView = Ember.CollectionView.extend({
    didInsertElement: function() {
      Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
    },
    processChildElements: function() {
      // ... do something with collectionView's child view
      // elements after they've finished rendering, which
      // can't be done within the CollectionView's
      // `didInsertElement` hook because that gets run
      // before the child elements have been added to the DOM.
    }
  });
  ```

  One benefit of the above approach compared to using `Ember.run.next` is
  that you will be able to perform DOM/CSS operations before unprocessed
  elements are rendered to the screen, which may prevent flickering or
  other artifacts caused by delaying processing until after rendering.

  The other major benefit to the above approach is that `Ember.run.next`
  introduces an element of non-determinism, which can make things much
  harder to test, due to its reliance on `setTimeout`; it's much harder
  to guarantee the order of scheduled operations when they are scheduled
  outside of the current run loop, i.e. with `Ember.run.next`.

  @method next
  @param {Object} [target] target of method to invoke
  @param {Function|String} method The method to invoke.
    If you pass a string it will be resolved on the
    target at the time the method is invoked.
  @param {Object} [args*] Optional arguments to pass to the timeout.
  @return {Object} timer
*/
Ember.run.next = function() {
  var args = slice.call(arguments);
  args.push(1);
  return backburner.later.apply(backburner, args);
};

/**
  Cancels a scheduled item. Must be a value returned by `Ember.run.later()`,
  `Ember.run.once()`, or `Ember.run.next()`.

  ```javascript
  var runNext = Ember.run.next(myContext, function() {
    // will not be executed
  });
  Ember.run.cancel(runNext);

  var runLater = Ember.run.later(myContext, function() {
    // will not be executed
  }, 500);
  Ember.run.cancel(runLater);

  var runOnce = Ember.run.once(myContext, function() {
    // will not be executed
  });
  Ember.run.cancel(runOnce);
  ```

  @method cancel
  @param {Object} timer Timer object to cancel
  @return {void}
*/
Ember.run.cancel = function(timer) {
  return backburner.cancel(timer);
};

/**
  Delay calling the target method until the debounce period has elapsed
  with no additional debounce calls. If `debounce` is called again before
  the specified time has elapsed, the timer is reset and the entire period
  must pass again before the target method is called.

  This method should be used when an event may be called multiple times
  but the action should only be called once when the event is done firing.
  A common example is for scroll events where you only want updates to
  happen once scrolling has ceased.

  ```javascript
    var myFunc = function() { console.log(this.name + ' ran.'); };
    var myContext = {name: 'debounce'};

    Ember.run.debounce(myContext, myFunc, 150);

    // less than 150ms passes

    Ember.run.debounce(myContext, myFunc, 150);

    // 150ms passes
    // myFunc is invoked with context myContext
    // console logs 'debounce ran.' one time.
  ```

  @method debounce
  @param {Object} [target] target of method to invoke
  @param {Function|String} method The method to invoke.
    May be a function or a string. If you pass a string
    then it will be looked up on the passed target.
  @param {Object} [args*] Optional arguments to pass to the timeout.
  @param {Number} wait Number of milliseconds to wait.
  @param {Boolean} immediate Trigger the function on the leading instead of the trailing edge of the wait interval.
  @return {void}
*/
Ember.run.debounce = function() {
  return backburner.debounce.apply(backburner, arguments);
};

/**
  Ensure that the target method is never called more frequently than
  the specified spacing period.

  ```javascript
    var myFunc = function() { console.log(this.name + ' ran.'); };
    var myContext = {name: 'throttle'};

    Ember.run.throttle(myContext, myFunc, 150);

    // 50ms passes
    Ember.run.throttle(myContext, myFunc, 150);

    // 50ms passes
    Ember.run.throttle(myContext, myFunc, 150);

    // 50ms passes
    Ember.run.throttle(myContext, myFunc, 150);

    // 150ms passes
    // myFunc is invoked with context myContext
    // console logs 'throttle ran.' twice, 150ms apart.
  ```

  @method throttle
  @param {Object} [target] target of method to invoke
  @param {Function|String} method The method to invoke.
    May be a function or a string. If you pass a string
    then it will be looked up on the passed target.
  @param {Object} [args*] Optional arguments to pass to the timeout.
  @param {Number} spacing Number of milliseconds to space out requests.
  @return {void}
*/
Ember.run.throttle = function() {
  return backburner.throttle.apply(backburner, arguments);
};

// Make sure it's not an autorun during testing
function checkAutoRun() {
  if (!Ember.run.currentRunLoop) {
    Ember.assert("You have turned on testing mode, which disabled the run-loop's autorun. You will need to wrap any code with asynchronous side-effects in an Ember.run", !Ember.testing);
  }
}

})();



(function() {
// Ember.Logger
// get
// set
// guidFor, meta
// addObserver, removeObserver
// Ember.run.schedule
/**
@module ember-metal
*/

// ..........................................................
// CONSTANTS
//

/**
  Debug parameter you can turn on. This will log all bindings that fire to
  the console. This should be disabled in production code. Note that you
  can also enable this from the console or temporarily.

  @property LOG_BINDINGS
  @for Ember
  @type Boolean
  @default false
*/
Ember.LOG_BINDINGS = false || !!Ember.ENV.LOG_BINDINGS;

var get     = Ember.get,
    set     = Ember.set,
    guidFor = Ember.guidFor,
    IS_GLOBAL = /^([A-Z$]|([0-9][A-Z$]))/;

/**
  Returns true if the provided path is global (e.g., `MyApp.fooController.bar`)
  instead of local (`foo.bar.baz`).

  @method isGlobalPath
  @for Ember
  @private
  @param {String} path
  @return Boolean
*/
var isGlobalPath = Ember.isGlobalPath = function(path) {
  return IS_GLOBAL.test(path);
};

function getWithGlobals(obj, path) {
  return get(isGlobalPath(path) ? Ember.lookup : obj, path);
}

// ..........................................................
// BINDING
//

var Binding = function(toPath, fromPath) {
  this._direction = 'fwd';
  this._from = fromPath;
  this._to   = toPath;
  this._directionMap = Ember.Map.create();
};

/**
@class Binding
@namespace Ember
*/

Binding.prototype = {
  /**
    This copies the Binding so it can be connected to another object.

    @method copy
    @return {Ember.Binding} `this`
  */
  copy: function () {
    var copy = new Binding(this._to, this._from);
    if (this._oneWay) { copy._oneWay = true; }
    return copy;
  },

  // ..........................................................
  // CONFIG
  //

  /**
    This will set `from` property path to the specified value. It will not
    attempt to resolve this property path to an actual object until you
    connect the binding.

    The binding will search for the property path starting at the root object
    you pass when you `connect()` the binding. It follows the same rules as
    `get()` - see that method for more information.

    @method from
    @param {String} path the property path to connect to
    @return {Ember.Binding} `this`
  */
  from: function(path) {
    this._from = path;
    return this;
  },

  /**
    This will set the `to` property path to the specified value. It will not
    attempt to resolve this property path to an actual object until you
    connect the binding.

    The binding will search for the property path starting at the root object
    you pass when you `connect()` the binding. It follows the same rules as
    `get()` - see that method for more information.

    @method to
    @param {String|Tuple} path A property path or tuple
    @return {Ember.Binding} `this`
  */
  to: function(path) {
    this._to = path;
    return this;
  },

  /**
    Configures the binding as one way. A one-way binding will relay changes
    on the `from` side to the `to` side, but not the other way around. This
    means that if you change the `to` side directly, the `from` side may have
    a different value.

    @method oneWay
    @return {Ember.Binding} `this`
  */
  oneWay: function() {
    this._oneWay = true;
    return this;
  },

  /**
    @method toString
    @return {String} string representation of binding
  */
  toString: function() {
    var oneWay = this._oneWay ? '[oneWay]' : '';
    return "Ember.Binding<" + guidFor(this) + ">(" + this._from + " -> " + this._to + ")" + oneWay;
  },

  // ..........................................................
  // CONNECT AND SYNC
  //

  /**
    Attempts to connect this binding instance so that it can receive and relay
    changes. This method will raise an exception if you have not set the
    from/to properties yet.

    @method connect
    @param {Object} obj The root object for this binding.
    @return {Ember.Binding} `this`
  */
  connect: function(obj) {
    Ember.assert('Must pass a valid object to Ember.Binding.connect()', !!obj);

    var fromPath = this._from, toPath = this._to;
    Ember.trySet(obj, toPath, getWithGlobals(obj, fromPath));

    // add an observer on the object to be notified when the binding should be updated
    Ember.addObserver(obj, fromPath, this, this.fromDidChange);

    // if the binding is a two-way binding, also set up an observer on the target
    if (!this._oneWay) { Ember.addObserver(obj, toPath, this, this.toDidChange); }

    this._readyToSync = true;

    return this;
  },

  /**
    Disconnects the binding instance. Changes will no longer be relayed. You
    will not usually need to call this method.

    @method disconnect
    @param {Object} obj The root object you passed when connecting the binding.
    @return {Ember.Binding} `this`
  */
  disconnect: function(obj) {
    Ember.assert('Must pass a valid object to Ember.Binding.disconnect()', !!obj);

    var twoWay = !this._oneWay;

    // remove an observer on the object so we're no longer notified of
    // changes that should update bindings.
    Ember.removeObserver(obj, this._from, this, this.fromDidChange);

    // if the binding is two-way, remove the observer from the target as well
    if (twoWay) { Ember.removeObserver(obj, this._to, this, this.toDidChange); }

    this._readyToSync = false; // disable scheduled syncs...
    return this;
  },

  // ..........................................................
  // PRIVATE
  //

  /* called when the from side changes */
  fromDidChange: function(target) {
    this._scheduleSync(target, 'fwd');
  },

  /* called when the to side changes */
  toDidChange: function(target) {
    this._scheduleSync(target, 'back');
  },

  _scheduleSync: function(obj, dir) {
    var directionMap = this._directionMap;
    var existingDir = directionMap.get(obj);

    // if we haven't scheduled the binding yet, schedule it
    if (!existingDir) {
      Ember.run.schedule('sync', this, this._sync, obj);
      directionMap.set(obj, dir);
    }

    // If both a 'back' and 'fwd' sync have been scheduled on the same object,
    // default to a 'fwd' sync so that it remains deterministic.
    if (existingDir === 'back' && dir === 'fwd') {
      directionMap.set(obj, 'fwd');
    }
  },

  _sync: function(obj) {
    var log = Ember.LOG_BINDINGS;

    // don't synchronize destroyed objects or disconnected bindings
    if (obj.isDestroyed || !this._readyToSync) { return; }

    // get the direction of the binding for the object we are
    // synchronizing from
    var directionMap = this._directionMap;
    var direction = directionMap.get(obj);

    var fromPath = this._from, toPath = this._to;

    directionMap.remove(obj);

    // if we're synchronizing from the remote object...
    if (direction === 'fwd') {
      var fromValue = getWithGlobals(obj, this._from);
      if (log) {
        Ember.Logger.log(' ', this.toString(), '->', fromValue, obj);
      }
      if (this._oneWay) {
        Ember.trySet(obj, toPath, fromValue);
      } else {
        Ember._suspendObserver(obj, toPath, this, this.toDidChange, function () {
          Ember.trySet(obj, toPath, fromValue);
        });
      }
    // if we're synchronizing *to* the remote object
    } else if (direction === 'back') {
      var toValue = get(obj, this._to);
      if (log) {
        Ember.Logger.log(' ', this.toString(), '<-', toValue, obj);
      }
      Ember._suspendObserver(obj, fromPath, this, this.fromDidChange, function () {
        Ember.trySet(Ember.isGlobalPath(fromPath) ? Ember.lookup : obj, fromPath, toValue);
      });
    }
  }

};

function mixinProperties(to, from) {
  for (var key in from) {
    if (from.hasOwnProperty(key)) {
      to[key] = from[key];
    }
  }
}

mixinProperties(Binding, {

  /*
    See `Ember.Binding.from`.

    @method from
    @static
  */
  from: function() {
    var C = this, binding = new C();
    return binding.from.apply(binding, arguments);
  },

  /*
    See `Ember.Binding.to`.

    @method to
    @static
  */
  to: function() {
    var C = this, binding = new C();
    return binding.to.apply(binding, arguments);
  },

  /**
    Creates a new Binding instance and makes it apply in a single direction.
    A one-way binding will relay changes on the `from` side object (supplied
    as the `from` argument) the `to` side, but not the other way around.
    This means that if you change the "to" side directly, the "from" side may have
    a different value.

    See `Binding.oneWay`.

    @method oneWay
    @param {String} from from path.
    @param {Boolean} [flag] (Optional) passing nothing here will make the
      binding `oneWay`. You can instead pass `false` to disable `oneWay`, making the
      binding two way again.
    @return {Ember.Binding} `this`
  */
  oneWay: function(from, flag) {
    var C = this, binding = new C(null, from);
    return binding.oneWay(flag);
  }

});

/**
  An `Ember.Binding` connects the properties of two objects so that whenever
  the value of one property changes, the other property will be changed also.

  ## Automatic Creation of Bindings with `/^*Binding/`-named Properties

  You do not usually create Binding objects directly but instead describe
  bindings in your class or object definition using automatic binding
  detection.

  Properties ending in a `Binding` suffix will be converted to `Ember.Binding`
  instances. The value of this property should be a string representing a path
  to another object or a custom binding instanced created using Binding helpers
  (see "One Way Bindings"):

  ```
  valueBinding: "MyApp.someController.title"
  ```

  This will create a binding from `MyApp.someController.title` to the `value`
  property of your object instance automatically. Now the two values will be
  kept in sync.

  ## One Way Bindings

  One especially useful binding customization you can use is the `oneWay()`
  helper. This helper tells Ember that you are only interested in
  receiving changes on the object you are binding from. For example, if you
  are binding to a preference and you want to be notified if the preference
  has changed, but your object will not be changing the preference itself, you
  could do:

  ```
  bigTitlesBinding: Ember.Binding.oneWay("MyApp.preferencesController.bigTitles")
  ```

  This way if the value of `MyApp.preferencesController.bigTitles` changes the
  `bigTitles` property of your object will change also. However, if you
  change the value of your `bigTitles` property, it will not update the
  `preferencesController`.

  One way bindings are almost twice as fast to setup and twice as fast to
  execute because the binding only has to worry about changes to one side.

  You should consider using one way bindings anytime you have an object that
  may be created frequently and you do not intend to change a property; only
  to monitor it for changes (such as in the example above).

  ## Adding Bindings Manually

  All of the examples above show you how to configure a custom binding, but the
  result of these customizations will be a binding template, not a fully active
  Binding instance. The binding will actually become active only when you
  instantiate the object the binding belongs to. It is useful however, to
  understand what actually happens when the binding is activated.

  For a binding to function it must have at least a `from` property and a `to`
  property. The `from` property path points to the object/key that you want to
  bind from while the `to` path points to the object/key you want to bind to.

  When you define a custom binding, you are usually describing the property
  you want to bind from (such as `MyApp.someController.value` in the examples
  above). When your object is created, it will automatically assign the value
  you want to bind `to` based on the name of your binding key. In the
  examples above, during init, Ember objects will effectively call
  something like this on your binding:

  ```javascript
  binding = Ember.Binding.from(this.valueBinding).to("value");
  ```

  This creates a new binding instance based on the template you provide, and
  sets the to path to the `value` property of the new object. Now that the
  binding is fully configured with a `from` and a `to`, it simply needs to be
  connected to become active. This is done through the `connect()` method:

  ```javascript
  binding.connect(this);
  ```

  Note that when you connect a binding you pass the object you want it to be
  connected to. This object will be used as the root for both the from and
  to side of the binding when inspecting relative paths. This allows the
  binding to be automatically inherited by subclassed objects as well.

  Now that the binding is connected, it will observe both the from and to side
  and relay changes.

  If you ever needed to do so (you almost never will, but it is useful to
  understand this anyway), you could manually create an active binding by
  using the `Ember.bind()` helper method. (This is the same method used by
  to setup your bindings on objects):

  ```javascript
  Ember.bind(MyApp.anotherObject, "value", "MyApp.someController.value");
  ```

  Both of these code fragments have the same effect as doing the most friendly
  form of binding creation like so:

  ```javascript
  MyApp.anotherObject = Ember.Object.create({
    valueBinding: "MyApp.someController.value",

    // OTHER CODE FOR THIS OBJECT...
  });
  ```

  Ember's built in binding creation method makes it easy to automatically
  create bindings for you. You should always use the highest-level APIs
  available, even if you understand how it works underneath.

  @class Binding
  @namespace Ember
  @since Ember 0.9
*/
Ember.Binding = Binding;


/**
  Global helper method to create a new binding. Just pass the root object
  along with a `to` and `from` path to create and connect the binding.

  @method bind
  @for Ember
  @param {Object} obj The root object of the transform.
  @param {String} to The path to the 'to' side of the binding.
    Must be relative to obj.
  @param {String} from The path to the 'from' side of the binding.
    Must be relative to obj or a global path.
  @return {Ember.Binding} binding instance
*/
Ember.bind = function(obj, to, from) {
  return new Ember.Binding(to, from).connect(obj);
};

/**
  @method oneWay
  @for Ember
  @param {Object} obj The root object of the transform.
  @param {String} to The path to the 'to' side of the binding.
    Must be relative to obj.
  @param {String} from The path to the 'from' side of the binding.
    Must be relative to obj or a global path.
  @return {Ember.Binding} binding instance
*/
Ember.oneWay = function(obj, to, from) {
  return new Ember.Binding(to, from).oneWay().connect(obj);
};

})();



(function() {
/**
@module ember
@submodule ember-metal
*/

var Mixin, REQUIRED, Alias,
    a_map = Ember.ArrayPolyfills.map,
    a_indexOf = Ember.ArrayPolyfills.indexOf,
    a_forEach = Ember.ArrayPolyfills.forEach,
    a_slice = [].slice,
    o_create = Ember.create,
    defineProperty = Ember.defineProperty,
    guidFor = Ember.guidFor;

function mixinsMeta(obj) {
  var m = Ember.meta(obj, true), ret = m.mixins;
  if (!ret) {
    ret = m.mixins = {};
  } else if (!m.hasOwnProperty('mixins')) {
    ret = m.mixins = o_create(ret);
  }
  return ret;
}

function initMixin(mixin, args) {
  if (args && args.length > 0) {
    mixin.mixins = a_map.call(args, function(x) {
      if (x instanceof Mixin) { return x; }

      // Note: Manually setup a primitive mixin here. This is the only
      // way to actually get a primitive mixin. This way normal creation
      // of mixins will give you combined mixins...
      var mixin = new Mixin();
      mixin.properties = x;
      return mixin;
    });
  }
  return mixin;
}

function isMethod(obj) {
  return 'function' === typeof obj &&
         obj.isMethod !== false &&
         obj !== Boolean && obj !== Object && obj !== Number && obj !== Array && obj !== Date && obj !== String;
}

var CONTINUE = {};

function mixinProperties(mixinsMeta, mixin) {
  var guid;

  if (mixin instanceof Mixin) {
    guid = guidFor(mixin);
    if (mixinsMeta[guid]) { return CONTINUE; }
    mixinsMeta[guid] = mixin;
    return mixin.properties;
  } else {
    return mixin; // apply anonymous mixin properties
  }
}

function concatenatedMixinProperties(concatProp, props, values, base) {
  var concats;

  // reset before adding each new mixin to pickup concats from previous
  concats = values[concatProp] || base[concatProp];
  if (props[concatProp]) {
    concats = concats ? concats.concat(props[concatProp]) : props[concatProp];
  }

  return concats;
}

function giveDescriptorSuper(meta, key, property, values, descs) {
  var superProperty;

  // Computed properties override methods, and do not call super to them
  if (values[key] === undefined) {
    // Find the original descriptor in a parent mixin
    superProperty = descs[key];
  }

  // If we didn't find the original descriptor in a parent mixin, find
  // it on the original object.
  superProperty = superProperty || meta.descs[key];

  if (!superProperty || !(superProperty instanceof Ember.ComputedProperty)) {
    return property;
  }

  // Since multiple mixins may inherit from the same parent, we need
  // to clone the computed property so that other mixins do not receive
  // the wrapped version.
  property = o_create(property);
  property.func = Ember.wrap(property.func, superProperty.func);

  return property;
}

function giveMethodSuper(obj, key, method, values, descs) {
  var superMethod;

  // Methods overwrite computed properties, and do not call super to them.
  if (descs[key] === undefined) {
    // Find the original method in a parent mixin
    superMethod = values[key];
  }

  // If we didn't find the original value in a parent mixin, find it in
  // the original object
  superMethod = superMethod || obj[key];

  // Only wrap the new method if the original method was a function
  if ('function' !== typeof superMethod) {
    return method;
  }

  return Ember.wrap(method, superMethod);
}

function applyConcatenatedProperties(obj, key, value, values) {
  var baseValue = values[key] || obj[key];

  if (baseValue) {
    if ('function' === typeof baseValue.concat) {
      return baseValue.concat(value);
    } else {
      return Ember.makeArray(baseValue).concat(value);
    }
  } else {
    return Ember.makeArray(value);
  }
}

function applyMergedProperties(obj, key, value, values) {
  var baseValue = values[key] || obj[key];

  if (!baseValue) { return value; }

  var newBase = Ember.merge({}, baseValue);
  for (var prop in value) {
    if (!value.hasOwnProperty(prop)) { continue; }

    var propValue = value[prop];
    if (isMethod(propValue)) {
      // TODO: support for Computed Properties, etc?
      newBase[prop] = giveMethodSuper(obj, prop, propValue, baseValue, {});
    } else {
      newBase[prop] = propValue;
    }
  }

  return newBase;
}

function addNormalizedProperty(base, key, value, meta, descs, values, concats, mergings) {
  if (value instanceof Ember.Descriptor) {
    if (value === REQUIRED && descs[key]) { return CONTINUE; }

    // Wrap descriptor function to implement
    // _super() if needed
    if (value.func) {
      value = giveDescriptorSuper(meta, key, value, values, descs);
    }

    descs[key]  = value;
    values[key] = undefined;
  } else {
    // impl super if needed...
    if (isMethod(value)) {
      value = giveMethodSuper(base, key, value, values, descs);
    } else if ((concats && a_indexOf.call(concats, key) >= 0) ||
                key === 'concatenatedProperties' ||
                key === 'mergedProperties') {
      value = applyConcatenatedProperties(base, key, value, values);
    } else if ((mergings && a_indexOf.call(mergings, key) >= 0)) {
      value = applyMergedProperties(base, key, value, values);
    }

    descs[key] = undefined;
    values[key] = value;
  }
}

function mergeMixins(mixins, m, descs, values, base, keys) {
  var mixin, props, key, concats, mergings, meta;

  function removeKeys(keyName) {
    delete descs[keyName];
    delete values[keyName];
  }

  for(var i=0, l=mixins.length; i<l; i++) {
    mixin = mixins[i];
    Ember.assert('Expected hash or Mixin instance, got ' + Object.prototype.toString.call(mixin), typeof mixin === 'object' && mixin !== null && Object.prototype.toString.call(mixin) !== '[object Array]');

    props = mixinProperties(m, mixin);
    if (props === CONTINUE) { continue; }

    if (props) {
      meta = Ember.meta(base);
      if (base.willMergeMixin) { base.willMergeMixin(props); }
      concats = concatenatedMixinProperties('concatenatedProperties', props, values, base);
      mergings = concatenatedMixinProperties('mergedProperties', props, values, base);

      for (key in props) {
        if (!props.hasOwnProperty(key)) { continue; }
        keys.push(key);
        addNormalizedProperty(base, key, props[key], meta, descs, values, concats, mergings);
      }

      // manually copy toString() because some JS engines do not enumerate it
      if (props.hasOwnProperty('toString')) { base.toString = props.toString; }
    } else if (mixin.mixins) {
      mergeMixins(mixin.mixins, m, descs, values, base, keys);
      if (mixin._without) { a_forEach.call(mixin._without, removeKeys); }
    }
  }
}

var IS_BINDING = Ember.IS_BINDING = /^.+Binding$/;

function detectBinding(obj, key, value, m) {
  if (IS_BINDING.test(key)) {
    var bindings = m.bindings;
    if (!bindings) {
      bindings = m.bindings = {};
    } else if (!m.hasOwnProperty('bindings')) {
      bindings = m.bindings = o_create(m.bindings);
    }
    bindings[key] = value;
  }
}

function connectBindings(obj, m) {
  // TODO Mixin.apply(instance) should disconnect binding if exists
  var bindings = m.bindings, key, binding, to;
  if (bindings) {
    for (key in bindings) {
      binding = bindings[key];
      if (binding) {
        to = key.slice(0, -7); // strip Binding off end
        if (binding instanceof Ember.Binding) {
          binding = binding.copy(); // copy prototypes' instance
          binding.to(to);
        } else { // binding is string path
          binding = new Ember.Binding(to, binding);
        }
        binding.connect(obj);
        obj[key] = binding;
      }
    }
    // mark as applied
    m.bindings = {};
  }
}

function finishPartial(obj, m) {
  connectBindings(obj, m || Ember.meta(obj));
  return obj;
}

function followAlias(obj, desc, m, descs, values) {
  var altKey = desc.methodName, value;
  if (descs[altKey] || values[altKey]) {
    value = values[altKey];
    desc  = descs[altKey];
  } else if (m.descs[altKey]) {
    desc  = m.descs[altKey];
    value = undefined;
  } else {
    desc = undefined;
    value = obj[altKey];
  }

  return { desc: desc, value: value };
}

function updateObserversAndListeners(obj, key, observerOrListener, pathsKey, updateMethod) {
  var paths = observerOrListener[pathsKey];

  if (paths) {
    for (var i=0, l=paths.length; i<l; i++) {
      Ember[updateMethod](obj, paths[i], null, key);
    }
  }
}

function replaceObserversAndListeners(obj, key, observerOrListener) {
  var prev = obj[key];

  if ('function' === typeof prev) {
    updateObserversAndListeners(obj, key, prev, '__ember_observesBefore__', 'removeBeforeObserver');
    updateObserversAndListeners(obj, key, prev, '__ember_observes__', 'removeObserver');
    updateObserversAndListeners(obj, key, prev, '__ember_listens__', 'removeListener');
  }

  if ('function' === typeof observerOrListener) {
    updateObserversAndListeners(obj, key, observerOrListener, '__ember_observesBefore__', 'addBeforeObserver');
    updateObserversAndListeners(obj, key, observerOrListener, '__ember_observes__', 'addObserver');
    updateObserversAndListeners(obj, key, observerOrListener, '__ember_listens__', 'addListener');
  }
}

function applyMixin(obj, mixins, partial) {
  var descs = {}, values = {}, m = Ember.meta(obj),
      key, value, desc, keys = [];

  // Go through all mixins and hashes passed in, and:
  //
  // * Handle concatenated properties
  // * Handle merged properties
  // * Set up _super wrapping if necessary
  // * Set up computed property descriptors
  // * Copying `toString` in broken browsers
  mergeMixins(mixins, mixinsMeta(obj), descs, values, obj, keys);

  for(var i = 0, l = keys.length; i < l; i++) {
    key = keys[i];
    if (key === 'constructor' || !values.hasOwnProperty(key)) { continue; }

    desc = descs[key];
    value = values[key];

    if (desc === REQUIRED) { continue; }

    while (desc && desc instanceof Alias) {
      var followed = followAlias(obj, desc, m, descs, values);
      desc = followed.desc;
      value = followed.value;
    }

    if (desc === undefined && value === undefined) { continue; }

    replaceObserversAndListeners(obj, key, value);
    detectBinding(obj, key, value, m);
    defineProperty(obj, key, desc, value, m);
  }

  if (!partial) { // don't apply to prototype
    finishPartial(obj, m);
  }

  return obj;
}

/**
  @method mixin
  @for Ember
  @param obj
  @param mixins*
  @return obj
*/
Ember.mixin = function(obj) {
  var args = a_slice.call(arguments, 1);
  applyMixin(obj, args, false);
  return obj;
};

/**
  The `Ember.Mixin` class allows you to create mixins, whose properties can be
  added to other classes. For instance,

  ```javascript
  App.Editable = Ember.Mixin.create({
    edit: function() {
      console.log('starting to edit');
      this.set('isEditing', true);
    },
    isEditing: false
  });

  // Mix mixins into classes by passing them as the first arguments to
  // .extend.
  App.CommentView = Ember.View.extend(App.Editable, {
    template: Ember.Handlebars.compile('{{#if view.isEditing}}...{{else}}...{{/if}}')
  });

  commentView = App.CommentView.create();
  commentView.edit(); // outputs 'starting to edit'
  ```

  Note that Mixins are created with `Ember.Mixin.create`, not
  `Ember.Mixin.extend`.

  Note that mixins extend a constructor's prototype so arrays and object literals
  defined as properties will be shared amongst objects that implement the mixin.
  If you want to define an property in a mixin that is not shared, you can define
  it either as a computed property or have it be created on initialization of the object.

  ```javascript
  //filters array will be shared amongst any object implementing mixin
  App.Filterable = Ember.Mixin.create({
    filters: Ember.A()
  });

  //filters will be a separate  array for every object implementing the mixin
  App.Filterable = Ember.Mixin.create({
    filters: Ember.computed(function(){return Ember.A();})
  });

  //filters will be created as a separate array during the object's initialization
  App.Filterable = Ember.Mixin.create({
    init: function() {
      this._super();
      this.set("filters", Ember.A());
    }
  });
  ```

  @class Mixin
  @namespace Ember
*/
Ember.Mixin = function() { return initMixin(this, arguments); };

Mixin = Ember.Mixin;

Mixin.prototype = {
  properties: null,
  mixins: null,
  ownerConstructor: null
};

Mixin._apply = applyMixin;

Mixin.applyPartial = function(obj) {
  var args = a_slice.call(arguments, 1);
  return applyMixin(obj, args, true);
};

Mixin.finishPartial = finishPartial;

Ember.anyUnprocessedMixins = false;

/**
  @method create
  @static
  @param arguments*
*/
Mixin.create = function() {
  Ember.anyUnprocessedMixins = true;
  var M = this;
  return initMixin(new M(), arguments);
};

var MixinPrototype = Mixin.prototype;

/**
  @method reopen
  @param arguments*
*/
MixinPrototype.reopen = function() {
  var mixin, tmp;

  if (this.properties) {
    mixin = Mixin.create();
    mixin.properties = this.properties;
    delete this.properties;
    this.mixins = [mixin];
  } else if (!this.mixins) {
    this.mixins = [];
  }

  var len = arguments.length, mixins = this.mixins, idx;

  for(idx=0; idx < len; idx++) {
    mixin = arguments[idx];
    Ember.assert('Expected hash or Mixin instance, got ' + Object.prototype.toString.call(mixin), typeof mixin === 'object' && mixin !== null && Object.prototype.toString.call(mixin) !== '[object Array]');

    if (mixin instanceof Mixin) {
      mixins.push(mixin);
    } else {
      tmp = Mixin.create();
      tmp.properties = mixin;
      mixins.push(tmp);
    }
  }

  return this;
};

/**
  @method apply
  @param obj
  @return applied object
*/
MixinPrototype.apply = function(obj) {
  return applyMixin(obj, [this], false);
};

MixinPrototype.applyPartial = function(obj) {
  return applyMixin(obj, [this], true);
};

function _detect(curMixin, targetMixin, seen) {
  var guid = guidFor(curMixin);

  if (seen[guid]) { return false; }
  seen[guid] = true;

  if (curMixin === targetMixin) { return true; }
  var mixins = curMixin.mixins, loc = mixins ? mixins.length : 0;
  while (--loc >= 0) {
    if (_detect(mixins[loc], targetMixin, seen)) { return true; }
  }
  return false;
}

/**
  @method detect
  @param obj
  @return {Boolean}
*/
MixinPrototype.detect = function(obj) {
  if (!obj) { return false; }
  if (obj instanceof Mixin) { return _detect(obj, this, {}); }
  var mixins = Ember.meta(obj, false).mixins;
  if (mixins) {
    return !!mixins[guidFor(this)];
  }
  return false;
};

MixinPrototype.without = function() {
  var ret = new Mixin(this);
  ret._without = a_slice.call(arguments);
  return ret;
};

function _keys(ret, mixin, seen) {
  if (seen[guidFor(mixin)]) { return; }
  seen[guidFor(mixin)] = true;

  if (mixin.properties) {
    var props = mixin.properties;
    for (var key in props) {
      if (props.hasOwnProperty(key)) { ret[key] = true; }
    }
  } else if (mixin.mixins) {
    a_forEach.call(mixin.mixins, function(x) { _keys(ret, x, seen); });
  }
}

MixinPrototype.keys = function() {
  var keys = {}, seen = {}, ret = [];
  _keys(keys, this, seen);
  for(var key in keys) {
    if (keys.hasOwnProperty(key)) { ret.push(key); }
  }
  return ret;
};

// returns the mixins currently applied to the specified object
// TODO: Make Ember.mixin
Mixin.mixins = function(obj) {
  var mixins = Ember.meta(obj, false).mixins, ret = [];

  if (!mixins) { return ret; }

  for (var key in mixins) {
    var mixin = mixins[key];

    // skip primitive mixins since these are always anonymous
    if (!mixin.properties) { ret.push(mixin); }
  }

  return ret;
};

REQUIRED = new Ember.Descriptor();
REQUIRED.toString = function() { return '(Required Property)'; };

/**
  Denotes a required property for a mixin

  @method required
  @for Ember
*/
Ember.required = function() {
  return REQUIRED;
};

Alias = function(methodName) {
  this.methodName = methodName;
};
Alias.prototype = new Ember.Descriptor();

/**
  Makes a property or method available via an additional name.

  ```javascript
  App.PaintSample = Ember.Object.extend({
    color: 'red',
    colour: Ember.alias('color'),
    name: function() {
      return "Zed";
    },
    moniker: Ember.alias("name")
  });

  var paintSample = App.PaintSample.create()
  paintSample.get('colour');  // 'red'
  paintSample.moniker();      // 'Zed'
  ```

  @method alias
  @for Ember
  @param {String} methodName name of the method or property to alias
  @return {Ember.Descriptor}
  @deprecated Use `Ember.aliasMethod` or `Ember.computed.alias` instead
*/
Ember.alias = function(methodName) {
  return new Alias(methodName);
};

Ember.alias = Ember.deprecateFunc("Ember.alias is deprecated. Please use Ember.aliasMethod or Ember.computed.alias instead.", Ember.alias);

/**
  Makes a method available via an additional name.

  ```javascript
  App.Person = Ember.Object.extend({
    name: function() {
      return 'Tomhuda Katzdale';
    },
    moniker: Ember.aliasMethod('name')
  });

  var goodGuy = App.Person.create()
  ```

  @method aliasMethod
  @for Ember
  @param {String} methodName name of the method to alias
  @return {Ember.Descriptor}
*/
Ember.aliasMethod = function(methodName) {
  return new Alias(methodName);
};

// ..........................................................
// OBSERVER HELPER
//

/**
  Specify a method that observes property changes.

  ```javascript
  Ember.Object.extend({
    valueObserver: Ember.observer(function() {
      // Executes whenever the "value" property changes
    }, 'value')
  });
  ```

  In the future this method may become asynchronous. If you want to ensure
  synchronous behavior, use `immediateObserver`.

  Also available as `Function.prototype.observes` if prototype extensions are
  enabled.

  @method observer
  @for Ember
  @param {Function} func
  @param {String} propertyNames*
  @return func
*/
Ember.observer = function(func) {
  var paths = a_slice.call(arguments, 1);
  func.__ember_observes__ = paths;
  return func;
};

/**
  Specify a method that observes property changes.

  ```javascript
  Ember.Object.extend({
    valueObserver: Ember.immediateObserver(function() {
      // Executes whenever the "value" property changes
    }, 'value')
  });
  ```

  In the future, `Ember.observer` may become asynchronous. In this event,
  `Ember.immediateObserver` will maintain the synchronous behavior.

  Also available as `Function.prototype.observesImmediately` if prototype extensions are
  enabled.

  @method immediateObserver
  @for Ember
  @param {Function} func
  @param {String} propertyNames*
  @return func
*/
Ember.immediateObserver = function() {
  for (var i=0, l=arguments.length; i<l; i++) {
    var arg = arguments[i];
    Ember.assert("Immediate observers must observe internal properties only, not properties on other objects.", typeof arg !== "string" || arg.indexOf('.') === -1);
  }

  return Ember.observer.apply(this, arguments);
};

/**
  When observers fire, they are called with the arguments `obj`, `keyName`.

  Note, `@each.property` observer is called per each add or replace of an element
  and it's not called with a specific enumeration item.

  A `beforeObserver` fires before a property changes.

  A `beforeObserver` is an alternative form of `.observesBefore()`.

  ```javascript
  App.PersonView = Ember.View.extend({

    friends: [{ name: 'Tom' }, { name: 'Stefan' }, { name: 'Kris' }],

    valueWillChange: Ember.beforeObserver(function(obj, keyName) {
      this.changingFrom = obj.get(keyName);
    }, 'content.value'),

    valueDidChange: Ember.observer(function(obj, keyName) {
        // only run if updating a value already in the DOM
        if (this.get('state') === 'inDOM') {
          var color = obj.get(keyName) > this.changingFrom ? 'green' : 'red';
          // logic
        }
    }, 'content.value'),

    friendsDidChange: Ember.observer(function(obj, keyName) {
      // some logic
      // obj.get(keyName) returns friends array
    }, 'friends.@each.name')
  });
  ```

  Also available as `Function.prototype.observesBefore` if prototype extensions are
  enabled.

  @method beforeObserver
  @for Ember
  @param {Function} func
  @param {String} propertyNames*
  @return func
*/
Ember.beforeObserver = function(func) {
  var paths = a_slice.call(arguments, 1);
  func.__ember_observesBefore__ = paths;
  return func;
};

})();



(function() {
/**
Ember Metal

@module ember
@submodule ember-metal
*/

})();

(function() {
define("rsvp/all",
  ["rsvp/promise","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Promise = __dependency1__.Promise;
    /* global toString */


    function all(promises) {
      if (Object.prototype.toString.call(promises) !== "[object Array]") {
        throw new TypeError('You must pass an array to all.');
      }

      return new Promise(function(resolve, reject) {
        var results = [], remaining = promises.length,
        promise;

        if (remaining === 0) {
          resolve([]);
        }

        function resolver(index) {
          return function(value) {
            resolveAll(index, value);
          };
        }

        function resolveAll(index, value) {
          results[index] = value;
          if (--remaining === 0) {
            resolve(results);
          }
        }

        for (var i = 0; i < promises.length; i++) {
          promise = promises[i];

          if (promise && typeof promise.then === 'function') {
            promise.then(resolver(i), reject);
          } else {
            resolveAll(i, promise);
          }
        }
      });
    }


    __exports__.all = all;
  });
define("rsvp/async",
  ["exports"],
  function(__exports__) {
    "use strict";
    var browserGlobal = (typeof window !== 'undefined') ? window : {};
    var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
    var async;
    var local = (typeof global !== 'undefined') ? global : this;

    // old node
    function useNextTick() {
      return function(callback, arg) {
        process.nextTick(function() {
          callback(arg);
        });
      };
    }

    // node >= 0.10.x
    function useSetImmediate() {
      return function(callback, arg) {
        /* global  setImmediate */
        setImmediate(function(){
          callback(arg);
        });
      };
    }

    function useMutationObserver() {
      var queue = [];

      var observer = new BrowserMutationObserver(function() {
        var toProcess = queue.slice();
        queue = [];

        toProcess.forEach(function(tuple) {
          var callback = tuple[0], arg= tuple[1];
          callback(arg);
        });
      });

      var element = document.createElement('div');
      observer.observe(element, { attributes: true });

      // Chrome Memory Leak: https://bugs.webkit.org/show_bug.cgi?id=93661
      window.addEventListener('unload', function(){
        observer.disconnect();
        observer = null;
      }, false);

      return function(callback, arg) {
        queue.push([callback, arg]);
        element.setAttribute('drainQueue', 'drainQueue');
      };
    }

    function useSetTimeout() {
      return function(callback, arg) {
        local.setTimeout(function() {
          callback(arg);
        }, 1);
      };
    }

    if (typeof setImmediate === 'function') {
      async = useSetImmediate();
    } else if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
      async = useNextTick();
    } else if (BrowserMutationObserver) {
      async = useMutationObserver();
    } else {
      async = useSetTimeout();
    }


    __exports__.async = async;
  });
define("rsvp/config",
  ["rsvp/async","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var async = __dependency1__.async;

    var config = {};
    config.async = async;


    __exports__.config = config;
  });
define("rsvp/defer",
  ["rsvp/promise","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Promise = __dependency1__.Promise;

    function defer() {
      var deferred = {
        // pre-allocate shape
        resolve: undefined,
        reject:  undefined,
        promise: undefined
      };

      deferred.promise = new Promise(function(resolve, reject) {
        deferred.resolve = resolve;
        deferred.reject = reject;
      });

      return deferred;
    }


    __exports__.defer = defer;
  });
define("rsvp/events",
  ["exports"],
  function(__exports__) {
    "use strict";
    var Event = function(type, options) {
      this.type = type;

      for (var option in options) {
        if (!options.hasOwnProperty(option)) { continue; }

        this[option] = options[option];
      }
    };

    var indexOf = function(callbacks, callback) {
      for (var i=0, l=callbacks.length; i<l; i++) {
        if (callbacks[i][0] === callback) { return i; }
      }

      return -1;
    };

    var callbacksFor = function(object) {
      var callbacks = object._promiseCallbacks;

      if (!callbacks) {
        callbacks = object._promiseCallbacks = {};
      }

      return callbacks;
    };

    var EventTarget = {
      mixin: function(object) {
        object.on = this.on;
        object.off = this.off;
        object.trigger = this.trigger;
        return object;
      },

      on: function(eventNames, callback, binding) {
        var allCallbacks = callbacksFor(this), callbacks, eventName;
        eventNames = eventNames.split(/\s+/);
        binding = binding || this;

        while (eventName = eventNames.shift()) {
          callbacks = allCallbacks[eventName];

          if (!callbacks) {
            callbacks = allCallbacks[eventName] = [];
          }

          if (indexOf(callbacks, callback) === -1) {
            callbacks.push([callback, binding]);
          }
        }
      },

      off: function(eventNames, callback) {
        var allCallbacks = callbacksFor(this), callbacks, eventName, index;
        eventNames = eventNames.split(/\s+/);

        while (eventName = eventNames.shift()) {
          if (!callback) {
            allCallbacks[eventName] = [];
            continue;
          }

          callbacks = allCallbacks[eventName];

          index = indexOf(callbacks, callback);

          if (index !== -1) { callbacks.splice(index, 1); }
        }
      },

      trigger: function(eventName, options) {
        var allCallbacks = callbacksFor(this),
            callbacks, callbackTuple, callback, binding, event;

        if (callbacks = allCallbacks[eventName]) {
          // Don't cache the callbacks.length since it may grow
          for (var i=0; i<callbacks.length; i++) {
            callbackTuple = callbacks[i];
            callback = callbackTuple[0];
            binding = callbackTuple[1];

            if (typeof options !== 'object') {
              options = { detail: options };
            }

            event = new Event(eventName, options);
            callback.call(binding, event);
          }
        }
      }
    };


    __exports__.EventTarget = EventTarget;
  });
define("rsvp/hash",
  ["rsvp/defer","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var defer = __dependency1__.defer;

    function size(object) {
      var s = 0;

      for (var prop in object) {
        s++;
      }

      return s;
    }

    function hash(promises) {
      var results = {}, deferred = defer(), remaining = size(promises);

      if (remaining === 0) {
        deferred.resolve({});
      }

      var resolver = function(prop) {
        return function(value) {
          resolveAll(prop, value);
        };
      };

      var resolveAll = function(prop, value) {
        results[prop] = value;
        if (--remaining === 0) {
          deferred.resolve(results);
        }
      };

      var rejectAll = function(error) {
        deferred.reject(error);
      };

      for (var prop in promises) {
        if (promises[prop] && typeof promises[prop].then === 'function') {
          promises[prop].then(resolver(prop), rejectAll);
        } else {
          resolveAll(prop, promises[prop]);
        }
      }

      return deferred.promise;
    }


    __exports__.hash = hash;
  });
define("rsvp/node",
  ["rsvp/promise","rsvp/all","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Promise = __dependency1__.Promise;
    var all = __dependency2__.all;

    function makeNodeCallbackFor(resolve, reject) {
      return function (error, value) {
        if (error) {
          reject(error);
        } else if (arguments.length > 2) {
          resolve(Array.prototype.slice.call(arguments, 1));
        } else {
          resolve(value);
        }
      };
    }

    function denodeify(nodeFunc) {
      return function()  {
        var nodeArgs = Array.prototype.slice.call(arguments), resolve, reject;
        var thisArg = this;

        var promise = new Promise(function(nodeResolve, nodeReject) {
          resolve = nodeResolve;
          reject = nodeReject;
        });

        all(nodeArgs).then(function(nodeArgs) {
          nodeArgs.push(makeNodeCallbackFor(resolve, reject));

          try {
            nodeFunc.apply(thisArg, nodeArgs);
          } catch(e) {
            reject(e);
          }
        });

        return promise;
      };
    }


    __exports__.denodeify = denodeify;
  });
define("rsvp/promise",
  ["rsvp/config","rsvp/events","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var config = __dependency1__.config;
    var EventTarget = __dependency2__.EventTarget;

    function objectOrFunction(x) {
      return isFunction(x) || (typeof x === "object" && x !== null);
    }

    function isFunction(x){
      return typeof x === "function";
    }

    var Promise = function(resolver) {
      var promise = this,
      resolved = false;

      if (typeof resolver !== 'function') {
        throw new TypeError('You must pass a resolver function as the sole argument to the promise constructor');
      }

      if (!(promise instanceof Promise)) {
        return new Promise(resolver);
      }

      var resolvePromise = function(value) {
        if (resolved) { return; }
        resolved = true;
        resolve(promise, value);
      };

      var rejectPromise = function(value) {
        if (resolved) { return; }
        resolved = true;
        reject(promise, value);
      };

      this.on('promise:resolved', function(event) {
        this.trigger('success', { detail: event.detail });
      }, this);

      this.on('promise:failed', function(event) {
        this.trigger('error', { detail: event.detail });
      }, this);

      this.on('error', onerror);

      try {
        resolver(resolvePromise, rejectPromise);
      } catch(e) {
        rejectPromise(e);
      }
    };

    function onerror(event) {
      if (config.onerror) {
        config.onerror(event.detail);
      }
    }

    var invokeCallback = function(type, promise, callback, event) {
      var hasCallback = isFunction(callback),
          value, error, succeeded, failed;

      if (hasCallback) {
        try {
          value = callback(event.detail);
          succeeded = true;
        } catch(e) {
          failed = true;
          error = e;
        }
      } else {
        value = event.detail;
        succeeded = true;
      }

      if (handleThenable(promise, value)) {
        return;
      } else if (hasCallback && succeeded) {
        resolve(promise, value);
      } else if (failed) {
        reject(promise, error);
      } else if (type === 'resolve') {
        resolve(promise, value);
      } else if (type === 'reject') {
        reject(promise, value);
      }
    };

    Promise.prototype = {
      constructor: Promise,

      isRejected: undefined,
      isFulfilled: undefined,
      rejectedReason: undefined,
      fulfillmentValue: undefined,

      then: function(done, fail) {
        this.off('error', onerror);

        var thenPromise = new this.constructor(function() {});

        if (this.isFulfilled) {
          config.async(function(promise) {
            invokeCallback('resolve', thenPromise, done, { detail: promise.fulfillmentValue });
          }, this);
        }

        if (this.isRejected) {
          config.async(function(promise) {
            invokeCallback('reject', thenPromise, fail, { detail: promise.rejectedReason });
          }, this);
        }

        this.on('promise:resolved', function(event) {
          invokeCallback('resolve', thenPromise, done, event);
        });

        this.on('promise:failed', function(event) {
          invokeCallback('reject', thenPromise, fail, event);
        });

        return thenPromise;
      },

      fail: function(fail) {
        return this.then(null, fail);
      }
    };

    EventTarget.mixin(Promise.prototype);

    function resolve(promise, value) {
      if (promise === value) {
        fulfill(promise, value);
      } else if (!handleThenable(promise, value)) {
        fulfill(promise, value);
      }
    }

    function handleThenable(promise, value) {
      var then = null,
      resolved;

      try {
        if (promise === value) {
          throw new TypeError("A promises callback cannot return that same promise.");
        }

        if (objectOrFunction(value)) {
          then = value.then;

          if (isFunction(then)) {
            then.call(value, function(val) {
              if (resolved) { return true; }
              resolved = true;

              if (value !== val) {
                resolve(promise, val);
              } else {
                fulfill(promise, val);
              }
            }, function(val) {
              if (resolved) { return true; }
              resolved = true;

              reject(promise, val);
            });

            return true;
          }
        }
      } catch (error) {
        reject(promise, error);
        return true;
      }

      return false;
    }

    function fulfill(promise, value) {
      config.async(function() {
        promise.trigger('promise:resolved', { detail: value });
        promise.isFulfilled = true;
        promise.fulfillmentValue = value;
      });
    }

    function reject(promise, value) {
      config.async(function() {
        promise.trigger('promise:failed', { detail: value });
        promise.isRejected = true;
        promise.rejectedReason = value;
      });
    }


    __exports__.Promise = Promise;
  });
define("rsvp/reject",
  ["rsvp/promise","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Promise = __dependency1__.Promise;

    function reject(reason) {
      return new Promise(function (resolve, reject) {
        reject(reason);
      });
    }


    __exports__.reject = reject;
  });
define("rsvp/resolve",
  ["rsvp/promise","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Promise = __dependency1__.Promise;

    function resolve(thenable) {
      return new Promise(function(resolve, reject) {
        resolve(thenable);
      });
    }


    __exports__.resolve = resolve;
  });
define("rsvp/rethrow",
  ["exports"],
  function(__exports__) {
    "use strict";
    var local = (typeof global === "undefined") ? this : global;

    function rethrow(reason) {
      local.setTimeout(function() {
        throw reason;
      });
      throw reason;
    }


    __exports__.rethrow = rethrow;
  });
define("rsvp",
  ["rsvp/events","rsvp/promise","rsvp/node","rsvp/all","rsvp/hash","rsvp/rethrow","rsvp/defer","rsvp/config","rsvp/resolve","rsvp/reject","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __dependency8__, __dependency9__, __dependency10__, __exports__) {
    "use strict";
    var EventTarget = __dependency1__.EventTarget;
    var Promise = __dependency2__.Promise;
    var denodeify = __dependency3__.denodeify;
    var all = __dependency4__.all;
    var hash = __dependency5__.hash;
    var rethrow = __dependency6__.rethrow;
    var defer = __dependency7__.defer;
    var config = __dependency8__.config;
    var resolve = __dependency9__.resolve;
    var reject = __dependency10__.reject;

    function configure(name, value) {
      config[name] = value;
    }


    __exports__.Promise = Promise;
    __exports__.EventTarget = EventTarget;
    __exports__.all = all;
    __exports__.hash = hash;
    __exports__.rethrow = rethrow;
    __exports__.defer = defer;
    __exports__.denodeify = denodeify;
    __exports__.configure = configure;
    __exports__.resolve = resolve;
    __exports__.reject = reject;
  });
})();

(function() {
/**
 Flag to enable/disable model factory injections (disabled by default)
 If model factory injections are enabled, models should not be
 accessed globally (only through `container.lookupFactory('model:modelName'))`);
*/
Ember.MODEL_FACTORY_INJECTIONS = false || !!Ember.ENV.MODEL_FACTORY_INJECTIONS;

define("container",
  [],
  function() {

   /**
     A safe and simple inheriting object.

     @class InheritingDict
   */
    function InheritingDict(parent) {
      this.parent = parent;
      this.dict = {};
    }

    InheritingDict.prototype = {

      /**
        @property parent
        @type InheritingDict
        @default null
      */

      parent: null,

      /**
        Object used to store the current nodes data.

        @property dict
        @type Object
        @default Object
      */
      dict: null,

      /**
        Retrieve the value given a key, if the value is present at the current
        level use it, otherwise walk up the parent hierarchy and try again. If
        no matching key is found, return undefined.

        @method get
        @return {any}
      */
      get: function(key) {
        var dict = this.dict;

        if (dict.hasOwnProperty(key)) {
          return dict[key];
        }

        if (this.parent) {
          return this.parent.get(key);
        }
      },

      /**
        Set the given value for the given key, at the current level.

        @method set
        @param {String} key
        @param {Any} value
      */
      set: function(key, value) {
        this.dict[key] = value;
      },

      /**
        Delete the given key

        @method remove
        @param {String} key
      */
      remove: function(key) {
        delete this.dict[key];
      },

      /**
        Check for the existence of given a key, if the key is present at the current
        level return true, otherwise walk up the parent hierarchy and try again. If
        no matching key is found, return false.

        @method has
        @param {String} key
        @returns {Boolean}
      */
      has: function(key) {
        var dict = this.dict;

        if (dict.hasOwnProperty(key)) {
          return true;
        }

        if (this.parent) {
          return this.parent.has(key);
        }

        return false;
      },

      /**
        Iterate and invoke a callback for each local key-value pair.

        @method eachLocal
        @param {Function} callback
        @param {Object} binding
      */
      eachLocal: function(callback, binding) {
        var dict = this.dict;

        for (var prop in dict) {
          if (dict.hasOwnProperty(prop)) {
            callback.call(binding, prop, dict[prop]);
          }
        }
      }
    };

   /**
     A lightweight container that helps to assemble and decouple components.

     @class Container
   */
    function Container(parent) {
      this.parent = parent;
      this.children = [];

      this.resolver = parent && parent.resolver || function() {};

      this.registry = new InheritingDict(parent && parent.registry);
      this.cache = new InheritingDict(parent && parent.cache);
      this.factoryCache = new InheritingDict(parent && parent.cache);
      this.typeInjections = new InheritingDict(parent && parent.typeInjections);
      this.injections = {};

      this.factoryTypeInjections = new InheritingDict(parent && parent.factoryTypeInjections);
      this.factoryInjections = {};

      this._options = new InheritingDict(parent && parent._options);
      this._typeOptions = new InheritingDict(parent && parent._typeOptions);
    }

    Container.prototype = {

      /**
        @property parent
        @type Container
        @default null
      */
      parent: null,

      /**
        @property children
        @type Array
        @default []
      */
      children: null,

      /**
        @property resolver
        @type function
      */
      resolver: null,

      /**
        @property registry
        @type InheritingDict
      */
      registry: null,

      /**
        @property cache
        @type InheritingDict
      */
      cache: null,

      /**
        @property typeInjections
        @type InheritingDict
      */
      typeInjections: null,

      /**
        @property injections
        @type Object
        @default {}
      */
      injections: null,

      /**
        @private

        @property _options
        @type InheritingDict
        @default null
      */
      _options: null,

      /**
        @private

        @property _typeOptions
        @type InheritingDict
      */
      _typeOptions: null,

      /**
        Returns a new child of the current container. These children are configured
        to correctly inherit from the current container.

        @method child
        @returns {Container}
      */
      child: function() {
        var container = new Container(this);
        this.children.push(container);
        return container;
      },

      /**
        Sets a key-value pair on the current container. If a parent container,
        has the same key, once set on a child, the parent and child will diverge
        as expected.

        @method set
        @param {Object} object
        @param {String} key
        @param {any} value
      */
      set: function(object, key, value) {
        object[key] = value;
      },

      /**
        Registers a factory for later injection.

        Example:

        ```javascript
        var container = new Container();

        container.register('model:user', Person, {singleton: false });
        container.register('fruit:favorite', Orange);
        container.register('communication:main', Email, {singleton: false});
        ```

        @method register
        @param {String} type
        @param {String} name
        @param {Function} factory
        @param {Object} options
      */
      register: function(type, name, factory, options) {
        var fullName;

        if (type.indexOf(':') !== -1) {
          options = factory;
          factory = name;
          fullName = type;
        } else {
          Ember.deprecate('register("'+type +'", "'+ name+'") is now deprecated in-favour of register("'+type+':'+name+'");', false);
          fullName = type + ":" + name;
        }

        var normalizedName = this.normalize(fullName);

        this.registry.set(normalizedName, factory);
        this._options.set(normalizedName, options || {});
      },

      /**
        Unregister a fullName

        ```javascript
        var container = new Container();
        container.register('model:user', User);

        container.lookup('model:user') instanceof User //=> true

        container.unregister('model:user')
        container.lookup('model:user') === undefined //=> true
        ```

        @method unregister
        @param {String} fullName
       */
      unregister: function(fullName) {
        var normalizedName = this.normalize(fullName);

        this.registry.remove(normalizedName);
        this.cache.remove(normalizedName);
        this.factoryCache.remove(normalizedName);
        this._options.remove(normalizedName);
      },

      /**
        Given a fullName return the corresponding factory.

        By default `resolve` will retrieve the factory from
        its container's registry.

        ```javascript
        var container = new Container();
        container.register('api:twitter', Twitter);

        container.resolve('api:twitter') // => Twitter
        ```

        Optionally the container can be provided with a custom resolver.
        If provided, `resolve` will first provide the custom resolver
        the oppertunity to resolve the fullName, otherwise it will fallback
        to the registry.

        ```javascript
        var container = new Container();
        container.resolver = function(fullName) {
          // lookup via the module system of choice
        };

        // the twitter factory is added to the module system
        container.resolve('api:twitter') // => Twitter
        ```

        @method resolve
        @param {String} fullName
        @returns {Function} fullName's factory
      */
      resolve: function(fullName) {
        return this.resolver(fullName) || this.registry.get(fullName);
      },

      /**
        A hook that can be used to describe how the resolver will
        attempt to find the factory.

        For example, the default Ember `.describe` returns the full
        class name (including namespace) where Ember's resolver expects
        to find the `fullName`.

        @method describe
      */
      describe: function(fullName) {
        return fullName;
      },

      /**
        A hook to enable custom fullName normalization behaviour

        @method normalize
        @param {String} fullName
        @return {string} normalized fullName
      */
      normalize: function(fullName) {
        return fullName;
      },

      /**
        @method makeToString

        @param {any} factory
        @param {string} fullNae
        @return {function} toString function
      */
      makeToString: function(factory, fullName) {
        return factory.toString();
      },

      /**
        Given a fullName return a corresponding instance.

        The default behaviour is for lookup to return a singleton instance.
        The singleton is scoped to the container, allowing multiple containers
        to all have their own locally scoped singletons.

        ```javascript
        var container = new Container();
        container.register('api:twitter', Twitter);

        var twitter = container.lookup('api:twitter');

        twitter instanceof Twitter; // => true

        // by default the container will return singletons
        twitter2 = container.lookup('api:twitter');
        twitter instanceof Twitter; // => true

        twitter === twitter2; //=> true
        ```

        If singletons are not wanted an optional flag can be provided at lookup.

        ```javascript
        var container = new Container();
        container.register('api:twitter', Twitter);

        var twitter = container.lookup('api:twitter', { singleton: false });
        var twitter2 = container.lookup('api:twitter', { singleton: false });

        twitter === twitter2; //=> false
        ```

        @method lookup
        @param {String} fullName
        @param {Object} options
        @return {any}
      */
      lookup: function(fullName, options) {
        fullName = this.normalize(fullName);

        options = options || {};

        if (this.cache.has(fullName) && options.singleton !== false) {
          return this.cache.get(fullName);
        }

        var value = instantiate(this, fullName);

        if (!value) { return; }

        if (isSingleton(this, fullName) && options.singleton !== false) {
          this.cache.set(fullName, value);
        }

        return value;
      },

      /**
        Given a fullName return the corresponding factory.

        @method lookupFactory
        @param {String} fullName
        @return {any}
      */
      lookupFactory: function(fullName) {
        return factoryFor(this, fullName);
      },

      /**
        Given a fullName check if the container is aware of its factory
        or singleton instance.

        @method has
        @param {String} fullName
        @return {Boolean}
      */
      has: function(fullName) {
        if (this.cache.has(fullName)) {
          return true;
        }

        return !!factoryFor(this, fullName);
      },

      /**
        Allow registering options for all factories of a type.

        ```javascript
        var container = new Container();

        // if all of type `connection` must not be singletons
        container.optionsForType('connection', { singleton: false });

        container.register('connection:twitter', TwitterConnection);
        container.register('connection:facebook', FacebookConnection);

        var twitter = container.lookup('connection:twitter');
        var twitter2 = container.lookup('connection:twitter');

        twitter === twitter2; // => false

        var facebook = container.lookup('connection:facebook');
        var facebook2 = container.lookup('connection:facebook');

        facebook === facebook2; // => false
        ```

        @method optionsForType
        @param {String} type
        @param {Object} options
      */
      optionsForType: function(type, options) {
        if (this.parent) { illegalChildOperation('optionsForType'); }

        this._typeOptions.set(type, options);
      },

      /**
        @method options
        @param {String} type
        @param {Object} options
      */
      options: function(type, options) {
        this.optionsForType(type, options);
      },

      /*
        @private

        Used only via `injection`.

        Provides a specialized form of injection, specifically enabling
        all objects of one type to be injected with a reference to another
        object.

        For example, provided each object of type `controller` needed a `router`.
        one would do the following:

        ```javascript
        var container = new Container();

        container.register('router:main', Router);
        container.register('controller:user', UserController);
        container.register('controller:post', PostController);

        container.typeInjection('controller', 'router', 'router:main');

        var user = container.lookup('controller:user');
        var post = container.lookup('controller:post');

        user.router instanceof Router; //=> true
        post.router instanceof Router; //=> true

        // both controllers share the same router
        user.router === post.router; //=> true
        ```

        @method typeInjection
        @param {String} type
        @param {String} property
        @param {String} fullName
      */
      typeInjection: function(type, property, fullName) {
        if (this.parent) { illegalChildOperation('typeInjection'); }

        addTypeInjection(this.typeInjections, type, property, fullName);
      },

      /*
        Defines injection rules.

        These rules are used to inject dependencies onto objects when they
        are instantiated.

        Two forms of injections are possible:

        * Injecting one fullName on another fullName
        * Injecting one fullName on a type

        Example:

        ```javascript
        var container = new Container();

        container.register('source:main', Source);
        container.register('model:user', User);
        container.register('model:post', Post);

        // injecting one fullName on another fullName
        // eg. each user model gets a post model
        container.injection('model:user', 'post', 'model:post');

        // injecting one fullName on another type
        container.injection('model', 'source', 'source:main');

        var user = container.lookup('model:user');
        var post = container.lookup('model:post');

        user.source instanceof Source; //=> true
        post.source instanceof Source; //=> true

        user.post instanceof Post; //=> true

        // and both models share the same source
        user.source === post.source; //=> true
        ```

        @method injection
        @param {String} factoryName
        @param {String} property
        @param {String} injectionName
      */
      injection: function(factoryName, property, injectionName) {
        if (this.parent) { illegalChildOperation('injection'); }

        if (factoryName.indexOf(':') === -1) {
          return this.typeInjection(factoryName, property, injectionName);
        }

        addInjection(this.injections, factoryName, property, injectionName);
      },


      /*
        @private

        Used only via `factoryInjection`.

        Provides a specialized form of injection, specifically enabling
        all factory of one type to be injected with a reference to another
        object.

        For example, provided each factory of type `model` needed a `store`.
        one would do the following:

        ```javascript
        var container = new Container();

        container.registerFactory('model:user', User);
        container.register('store:main', SomeStore);

        container.factoryTypeInjection('model', 'store', 'store:main');

        var store = container.lookup('store:main');
        var UserFactory = container.lookupFactory('model:user');

        UserFactory.store instanceof SomeStore; //=> true
        ```

        @method factoryTypeInjection
        @param {String} type
        @param {String} property
        @param {String} fullName
      */
      factoryTypeInjection: function(type, property, fullName) {
        if (this.parent) { illegalChildOperation('factoryTypeInjection'); }

        addTypeInjection(this.factoryTypeInjections, type, property, fullName);
      },

      /*
        Defines factory injection rules.

        Similar to regular injection rules, but are run against factories, via
        `Container#lookupFactory`.

        These rules are used to inject objects onto factories when they
        are looked up.

        Two forms of injections are possible:

        * Injecting one fullName on another fullName
        * Injecting one fullName on a type

        Example:

        ```javascript
        var container = new Container();

        container.register('store:main', Store);
        container.register('store:secondary', OtherStore);
        container.register('model:user', User);
        container.register('model:post', Post);

        // injecting one fullName on another type
        container.factoryInjection('model', 'store', 'store:main');

        // injecting one fullName on another fullName
        container.factoryInjection('model:post', 'secondaryStore', 'store:secondary');

        var UserFactory = container.lookupFactory('model:user');
        var PostFactory = container.lookupFactory('model:post');
        var store = container.lookup('store:main');

        UserFactory.store instanceof Store; //=> true
        UserFactory.secondaryStore instanceof OtherStore; //=> false

        PostFactory.store instanceof Store; //=> true
        PostFactory.secondaryStore instanceof OtherStore; //=> true

        // and both models share the same source instance
        UserFactory.store === PostFactory.store; //=> true
        ```

        @method factoryInjection
        @param {String} factoryName
        @param {String} property
        @param {String} injectionName
      */
      factoryInjection: function(factoryName, property, injectionName) {
        if (this.parent) { illegalChildOperation('injection'); }

        if (factoryName.indexOf(':') === -1) {
          return this.factoryTypeInjection(factoryName, property, injectionName);
        }

        addInjection(this.factoryInjections, factoryName, property, injectionName);
      },

      /**
        A depth first traversal, destroying the container, its descendant containers and all
        their managed objects.

        @method destroy
      */
      destroy: function() {
        this.isDestroyed = true;

        for (var i=0, l=this.children.length; i<l; i++) {
          this.children[i].destroy();
        }

        this.children = [];

        eachDestroyable(this, function(item) {
          item.destroy();
        });

        this.parent = undefined;
        this.isDestroyed = true;
      },

      /**
        @method reset
      */
      reset: function() {
        for (var i=0, l=this.children.length; i<l; i++) {
          resetCache(this.children[i]);
        }
        resetCache(this);
      }
    };

    function illegalChildOperation(operation) {
      throw new Error(operation + " is not currently supported on child containers");
    }

    function isSingleton(container, fullName) {
      var singleton = option(container, fullName, 'singleton');

      return singleton !== false;
    }

    function buildInjections(container, injections) {
      var hash = {};

      if (!injections) { return hash; }

      var injection, lookup;

      for (var i=0, l=injections.length; i<l; i++) {
        injection = injections[i];
        lookup = container.lookup(injection.fullName);

        if (lookup) {
          hash[injection.property] = lookup;
        } else {
          throw new Error('Attempting to inject an unknown injection: `' + injection.fullName + '`');
        }
      }

      return hash;
    }

    function option(container, fullName, optionName) {
      var options = container._options.get(fullName);

      if (options && options[optionName] !== undefined) {
        return options[optionName];
      }

      var type = fullName.split(":")[0];
      options = container._typeOptions.get(type);

      if (options) {
        return options[optionName];
      }
    }

    function factoryFor(container, fullName) {
      var name = container.normalize(fullName);
      var factory = container.resolve(name);
      var injectedFactory;
      var cache = container.factoryCache;
      var type = fullName.split(":")[0];

      if (!factory) { return; }

      if (cache.has(fullName)) {
        return cache.get(fullName);
      }

      if (typeof factory.extend !== 'function' || (!Ember.MODEL_FACTORY_INJECTIONS && type === 'model')) {
        // TODO: think about a 'safe' merge style extension
        // for now just fallback to create time injection
        return factory;
      } else {

        var injections        = injectionsFor(container, fullName);
        var factoryInjections = factoryInjectionsFor(container, fullName);

        factoryInjections._toString = container.makeToString(factory, fullName);

        injectedFactory = factory.extend(injections);
        injectedFactory.reopenClass(factoryInjections);

        cache.set(fullName, injectedFactory);

        return injectedFactory;
      }
    }

    function injectionsFor(container ,fullName) {
      var splitName = fullName.split(":"),
        type = splitName[0],
        injections = [];

      injections = injections.concat(container.typeInjections.get(type) || []);
      injections = injections.concat(container.injections[fullName] || []);

      injections = buildInjections(container, injections);
      injections._debugContainerKey = fullName;
      injections.container = container;

      return injections;
    }

    function factoryInjectionsFor(container, fullName) {
      var splitName = fullName.split(":"),
        type = splitName[0],
        factoryInjections = [];

      factoryInjections = factoryInjections.concat(container.factoryTypeInjections.get(type) || []);
      factoryInjections = factoryInjections.concat(container.factoryInjections[fullName] || []);

      factoryInjections = buildInjections(container, factoryInjections);
      factoryInjections._debugContainerKey = fullName;

      return factoryInjections;
    }

    function instantiate(container, fullName) {
      var factory = factoryFor(container, fullName);

      if (option(container, fullName, 'instantiate') === false) {
        return factory;
      }

      if (factory) {
        if (typeof factory.extend === 'function') {
          // assume the factory was extendable and is already injected
          return factory.create();
        } else {
          // assume the factory was extendable
          // to create time injections
          // TODO: support new'ing for instantiation and merge injections for pure JS Functions
          return factory.create(injectionsFor(container, fullName));
        }
      }
    }

    function eachDestroyable(container, callback) {
      container.cache.eachLocal(function(key, value) {
        if (option(container, key, 'instantiate') === false) { return; }
        callback(value);
      });
    }

    function resetCache(container) {
      container.cache.eachLocal(function(key, value) {
        if (option(container, key, 'instantiate') === false) { return; }
        value.destroy();
      });
      container.cache.dict = {};
    }

    function addTypeInjection(rules, type, property, fullName) {
      var injections = rules.get(type);

      if (!injections) {
        injections = [];
        rules.set(type, injections);
      }

      injections.push({
        property: property,
        fullName: fullName
      });
    }

    function addInjection(rules, factoryName, property, injectionName) {
      var injections = rules[factoryName] = rules[factoryName] || [];
      injections.push({ property: property, fullName: injectionName });
    }

    return Container;
});

})();

(function() {
/*globals ENV */
/**
@module ember
@submodule ember-runtime
*/

var indexOf = Ember.EnumerableUtils.indexOf;

/**
 This will compare two javascript values of possibly different types.
 It will tell you which one is greater than the other by returning:

  - -1 if the first is smaller than the second,
  - 0 if both are equal,
  - 1 if the first is greater than the second.

 The order is calculated based on `Ember.ORDER_DEFINITION`, if types are different.
 In case they have the same type an appropriate comparison for this type is made.

  ```javascript
  Ember.compare('hello', 'hello');  // 0
  Ember.compare('abc', 'dfg');      // -1
  Ember.compare(2, 1);              // 1
  ```

 @method compare
 @for Ember
 @param {Object} v First value to compare
 @param {Object} w Second value to compare
 @return {Number} -1 if v < w, 0 if v = w and 1 if v > w.
*/
Ember.compare = function compare(v, w) {
  if (v === w) { return 0; }

  var type1 = Ember.typeOf(v);
  var type2 = Ember.typeOf(w);

  var Comparable = Ember.Comparable;
  if (Comparable) {
    if (type1==='instance' && Comparable.detect(v.constructor)) {
      return v.constructor.compare(v, w);
    }

    if (type2 === 'instance' && Comparable.detect(w.constructor)) {
      return 1-w.constructor.compare(w, v);
    }
  }

  // If we haven't yet generated a reverse-mapping of Ember.ORDER_DEFINITION,
  // do so now.
  var mapping = Ember.ORDER_DEFINITION_MAPPING;
  if (!mapping) {
    var order = Ember.ORDER_DEFINITION;
    mapping = Ember.ORDER_DEFINITION_MAPPING = {};
    var idx, len;
    for (idx = 0, len = order.length; idx < len;  ++idx) {
      mapping[order[idx]] = idx;
    }

    // We no longer need Ember.ORDER_DEFINITION.
    delete Ember.ORDER_DEFINITION;
  }

  var type1Index = mapping[type1];
  var type2Index = mapping[type2];

  if (type1Index < type2Index) { return -1; }
  if (type1Index > type2Index) { return 1; }

  // types are equal - so we have to check values now
  switch (type1) {
    case 'boolean':
    case 'number':
      if (v < w) { return -1; }
      if (v > w) { return 1; }
      return 0;

    case 'string':
      var comp = v.localeCompare(w);
      if (comp < 0) { return -1; }
      if (comp > 0) { return 1; }
      return 0;

    case 'array':
      var vLen = v.length;
      var wLen = w.length;
      var l = Math.min(vLen, wLen);
      var r = 0;
      var i = 0;
      while (r === 0 && i < l) {
        r = compare(v[i],w[i]);
        i++;
      }
      if (r !== 0) { return r; }

      // all elements are equal now
      // shorter array should be ordered first
      if (vLen < wLen) { return -1; }
      if (vLen > wLen) { return 1; }
      // arrays are equal now
      return 0;

    case 'instance':
      if (Ember.Comparable && Ember.Comparable.detect(v)) {
        return v.compare(v, w);
      }
      return 0;

    case 'date':
      var vNum = v.getTime();
      var wNum = w.getTime();
      if (vNum < wNum) { return -1; }
      if (vNum > wNum) { return 1; }
      return 0;

    default:
      return 0;
  }
};

function _copy(obj, deep, seen, copies) {
  var ret, loc, key;

  // primitive data types are immutable, just return them.
  if ('object' !== typeof obj || obj===null) return obj;

  // avoid cyclical loops
  if (deep && (loc=indexOf(seen, obj))>=0) return copies[loc];

  Ember.assert('Cannot clone an Ember.Object that does not implement Ember.Copyable', !(obj instanceof Ember.Object) || (Ember.Copyable && Ember.Copyable.detect(obj)));

  // IMPORTANT: this specific test will detect a native array only. Any other
  // object will need to implement Copyable.
  if (Ember.typeOf(obj) === 'array') {
    ret = obj.slice();
    if (deep) {
      loc = ret.length;
      while(--loc>=0) ret[loc] = _copy(ret[loc], deep, seen, copies);
    }
  } else if (Ember.Copyable && Ember.Copyable.detect(obj)) {
    ret = obj.copy(deep, seen, copies);
  } else {
    ret = {};
    for(key in obj) {
      if (!obj.hasOwnProperty(key)) continue;

      // Prevents browsers that don't respect non-enumerability from
      // copying internal Ember properties
      if (key.substring(0,2) === '__') continue;

      ret[key] = deep ? _copy(obj[key], deep, seen, copies) : obj[key];
    }
  }

  if (deep) {
    seen.push(obj);
    copies.push(ret);
  }

  return ret;
}

/**
  Creates a clone of the passed object. This function can take just about
  any type of object and create a clone of it, including primitive values
  (which are not actually cloned because they are immutable).

  If the passed object implements the `clone()` method, then this function
  will simply call that method and return the result.

  @method copy
  @for Ember
  @param {Object} obj The object to clone
  @param {Boolean} deep If true, a deep copy of the object is made
  @return {Object} The cloned object
*/
Ember.copy = function(obj, deep) {
  // fast paths
  if ('object' !== typeof obj || obj===null) return obj; // can't copy primitives
  if (Ember.Copyable && Ember.Copyable.detect(obj)) return obj.copy(deep);
  return _copy(obj, deep, deep ? [] : null, deep ? [] : null);
};

/**
  Convenience method to inspect an object. This method will attempt to
  convert the object into a useful string description.

  It is a pretty simple implementation. If you want something more robust,
  use something like JSDump: https://github.com/NV/jsDump

  @method inspect
  @for Ember
  @param {Object} obj The object you want to inspect.
  @return {String} A description of the object
*/
Ember.inspect = function(obj) {
  var type = Ember.typeOf(obj);
  if (type === 'array') {
    return '[' + obj + ']';
  }
  if (type !== 'object') {
    return obj + '';
  }

  var v, ret = [];
  for(var key in obj) {
    if (obj.hasOwnProperty(key)) {
      v = obj[key];
      if (v === 'toString') { continue; } // ignore useless items
      if (Ember.typeOf(v) === 'function') { v = "function() { ... }"; }
      ret.push(key + ": " + v);
    }
  }
  return "{" + ret.join(", ") + "}";
};

/**
  Compares two objects, returning true if they are logically equal. This is
  a deeper comparison than a simple triple equal. For sets it will compare the
  internal objects. For any other object that implements `isEqual()` it will
  respect that method.

  ```javascript
  Ember.isEqual('hello', 'hello');  // true
  Ember.isEqual(1, 2);              // false
  Ember.isEqual([4,2], [4,2]);      // false
  ```

  @method isEqual
  @for Ember
  @param {Object} a first object to compare
  @param {Object} b second object to compare
  @return {Boolean}
*/
Ember.isEqual = function(a, b) {
  if (a && 'function'===typeof a.isEqual) return a.isEqual(b);
  return a === b;
};

// Used by Ember.compare
Ember.ORDER_DEFINITION = Ember.ENV.ORDER_DEFINITION || [
  'undefined',
  'null',
  'boolean',
  'number',
  'string',
  'array',
  'object',
  'instance',
  'function',
  'class',
  'date'
];

/**
  Returns all of the keys defined on an object or hash. This is useful
  when inspecting objects for debugging. On browsers that support it, this
  uses the native `Object.keys` implementation.

  @method keys
  @for Ember
  @param {Object} obj
  @return {Array} Array containing keys of obj
*/
Ember.keys = Object.keys;

if (!Ember.keys || Ember.create.isSimulated) {
  Ember.keys = function(obj) {
    var ret = [];
    for(var key in obj) {
      // Prevents browsers that don't respect non-enumerability from
      // copying internal Ember properties
      if (key.substring(0,2) === '__') continue;
      if (key === '_super') continue;

      if (obj.hasOwnProperty(key)) { ret.push(key); }
    }
    return ret;
  };
}

// ..........................................................
// ERROR
//

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

/**
  A subclass of the JavaScript Error object for use in Ember.

  @class Error
  @namespace Ember
  @extends Error
  @constructor
*/
Ember.Error = function() {
  var tmp = Error.apply(this, arguments);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }
};

Ember.Error.prototype = Ember.create(Error.prototype);

})();



(function() {
/**
@module ember
@submodule ember-runtime
*/

// ..........................................................
// HELPERS
//

var get = Ember.get, set = Ember.set;
var a_slice = Array.prototype.slice;
var a_indexOf = Ember.EnumerableUtils.indexOf;

var contexts = [];

function popCtx() {
  return contexts.length===0 ? {} : contexts.pop();
}

function pushCtx(ctx) {
  contexts.push(ctx);
  return null;
}

function iter(key, value) {
  var valueProvided = arguments.length === 2;

  function i(item) {
    var cur = get(item, key);
    return valueProvided ? value===cur : !!cur;
  }
  return i ;
}

/**
  This mixin defines the common interface implemented by enumerable objects
  in Ember. Most of these methods follow the standard Array iteration
  API defined up to JavaScript 1.8 (excluding language-specific features that
  cannot be emulated in older versions of JavaScript).

  This mixin is applied automatically to the Array class on page load, so you
  can use any of these methods on simple arrays. If Array already implements
  one of these methods, the mixin will not override them.

  ## Writing Your Own Enumerable

  To make your own custom class enumerable, you need two items:

  1. You must have a length property. This property should change whenever
     the number of items in your enumerable object changes. If you using this
     with an `Ember.Object` subclass, you should be sure to change the length
     property using `set().`

  2. If you must implement `nextObject().` See documentation.

  Once you have these two methods implement, apply the `Ember.Enumerable` mixin
  to your class and you will be able to enumerate the contents of your object
  like any other collection.

  ## Using Ember Enumeration with Other Libraries

  Many other libraries provide some kind of iterator or enumeration like
  facility. This is often where the most common API conflicts occur.
  Ember's API is designed to be as friendly as possible with other
  libraries by implementing only methods that mostly correspond to the
  JavaScript 1.8 API.

  @class Enumerable
  @namespace Ember
  @since Ember 0.9
*/
Ember.Enumerable = Ember.Mixin.create({

  /**
    Implement this method to make your class enumerable.

    This method will be call repeatedly during enumeration. The index value
    will always begin with 0 and increment monotonically. You don't have to
    rely on the index value to determine what object to return, but you should
    always check the value and start from the beginning when you see the
    requested index is 0.

    The `previousObject` is the object that was returned from the last call
    to `nextObject` for the current iteration. This is a useful way to
    manage iteration if you are tracing a linked list, for example.

    Finally the context parameter will always contain a hash you can use as
    a "scratchpad" to maintain any other state you need in order to iterate
    properly. The context object is reused and is not reset between
    iterations so make sure you setup the context with a fresh state whenever
    the index parameter is 0.

    Generally iterators will continue to call `nextObject` until the index
    reaches the your current length-1. If you run out of data before this
    time for some reason, you should simply return undefined.

    The default implementation of this method simply looks up the index.
    This works great on any Array-like objects.

    @method nextObject
    @param {Number} index the current index of the iteration
    @param {Object} previousObject the value returned by the last call to
      `nextObject`.
    @param {Object} context a context object you can use to maintain state.
    @return {Object} the next object in the iteration or undefined
  */
  nextObject: Ember.required(Function),

  /**
    Helper method returns the first object from a collection. This is usually
    used by bindings and other parts of the framework to extract a single
    object if the enumerable contains only one item.

    If you override this method, you should implement it so that it will
    always return the same value each time it is called. If your enumerable
    contains only one object, this method should always return that object.
    If your enumerable is empty, this method should return `undefined`.

    ```javascript
    var arr = ["a", "b", "c"];
    arr.get('firstObject');  // "a"

    var arr = [];
    arr.get('firstObject');  // undefined
    ```

    @property firstObject
    @return {Object} the object or undefined
  */
  firstObject: Ember.computed(function() {
    if (get(this, 'length')===0) return undefined ;

    // handle generic enumerables
    var context = popCtx(), ret;
    ret = this.nextObject(0, null, context);
    pushCtx(context);
    return ret ;
  }).property('[]'),

  /**
    Helper method returns the last object from a collection. If your enumerable
    contains only one object, this method should always return that object.
    If your enumerable is empty, this method should return `undefined`.

    ```javascript
    var arr = ["a", "b", "c"];
    arr.get('lastObject');  // "c"

    var arr = [];
    arr.get('lastObject');  // undefined
    ```

    @property lastObject
    @return {Object} the last object or undefined
  */
  lastObject: Ember.computed(function() {
    var len = get(this, 'length');
    if (len===0) return undefined ;
    var context = popCtx(), idx=0, cur, last = null;
    do {
      last = cur;
      cur = this.nextObject(idx++, last, context);
    } while (cur !== undefined);
    pushCtx(context);
    return last;
  }).property('[]'),

  /**
    Returns `true` if the passed object can be found in the receiver. The
    default version will iterate through the enumerable until the object
    is found. You may want to override this with a more efficient version.

    ```javascript
    var arr = ["a", "b", "c"];
    arr.contains("a"); // true
    arr.contains("z"); // false
    ```

    @method contains
    @param {Object} obj The object to search for.
    @return {Boolean} `true` if object is found in enumerable.
  */
  contains: function(obj) {
    return this.find(function(item) { return item===obj; }) !== undefined;
  },

  /**
    Iterates through the enumerable, calling the passed function on each
    item. This method corresponds to the `forEach()` method defined in
    JavaScript 1.6.

    The callback method you provide should have the following signature (all
    parameters are optional):

    ```javascript
    function(item, index, enumerable);
    ```

    - `item` is the current item in the iteration.
    - `index` is the current index in the iteration.
    - `enumerable` is the enumerable object itself.

    Note that in addition to a callback, you can also pass an optional target
    object that will be set as `this` on the context. This is a good way
    to give your iterator function access to the current object.

    @method forEach
    @param {Function} callback The callback to execute
    @param {Object} [target] The target object to use
    @return {Object} receiver
  */
  forEach: function(callback, target) {
    if (typeof callback !== "function") throw new TypeError() ;
    var len = get(this, 'length'), last = null, context = popCtx();

    if (target === undefined) target = null;

    for(var idx=0;idx<len;idx++) {
      var next = this.nextObject(idx, last, context) ;
      callback.call(target, next, idx, this);
      last = next ;
    }
    last = null ;
    context = pushCtx(context);
    return this ;
  },

  /**
    Alias for `mapBy`

    @method getEach
    @param {String} key name of the property
    @return {Array} The mapped array.
  */
  getEach: function(key) {
    return this.mapBy(key);
  },

  /**
    Sets the value on the named property for each member. This is more
    efficient than using other methods defined on this helper. If the object
    implements Ember.Observable, the value will be changed to `set(),` otherwise
    it will be set directly. `null` objects are skipped.

    @method setEach
    @param {String} key The key to set
    @param {Object} value The object to set
    @return {Object} receiver
  */
  setEach: function(key, value) {
    return this.forEach(function(item) {
      set(item, key, value);
    });
  },

  /**
    Maps all of the items in the enumeration to another value, returning
    a new array. This method corresponds to `map()` defined in JavaScript 1.6.

    The callback method you provide should have the following signature (all
    parameters are optional):

    ```javascript
    function(item, index, enumerable);
    ```

    - `item` is the current item in the iteration.
    - `index` is the current index in the iteration.
    - `enumerable` is the enumerable object itself.

    It should return the mapped value.

    Note that in addition to a callback, you can also pass an optional target
    object that will be set as `this` on the context. This is a good way
    to give your iterator function access to the current object.

    @method map
    @param {Function} callback The callback to execute
    @param {Object} [target] The target object to use
    @return {Array} The mapped array.
  */
  map: function(callback, target) {
    var ret = Ember.A();
    this.forEach(function(x, idx, i) {
      ret[idx] = callback.call(target, x, idx,i);
    });
    return ret ;
  },

  /**
    Similar to map, this specialized function returns the value of the named
    property on all items in the enumeration.

    @method mapBy
    @param {String} key name of the property
    @return {Array} The mapped array.
  */
  mapBy: function(key) {
    return this.map(function(next) {
      return get(next, key);
    });
  },

  /**
    Similar to map, this specialized function returns the value of the named
    property on all items in the enumeration.

    @method mapProperty
    @param {String} key name of the property
    @return {Array} The mapped array.
    @deprecated Use `mapBy` instead
  */

  mapProperty: Ember.aliasMethod('mapBy'),

  /**
    Returns an array with all of the items in the enumeration that the passed
    function returns true for. This method corresponds to `filter()` defined in
    JavaScript 1.6.

    The callback method you provide should have the following signature (all
    parameters are optional):

    ```javascript
    function(item, index, enumerable);
    ```

    - `item` is the current item in the iteration.
    - `index` is the current index in the iteration.
    - `enumerable` is the enumerable object itself.

    It should return the `true` to include the item in the results, `false`
    otherwise.

    Note that in addition to a callback, you can also pass an optional target
    object that will be set as `this` on the context. This is a good way
    to give your iterator function access to the current object.

    @method filter
    @param {Function} callback The callback to execute
    @param {Object} [target] The target object to use
    @return {Array} A filtered array.
  */
  filter: function(callback, target) {
    var ret = Ember.A();
    this.forEach(function(x, idx, i) {
      if (callback.call(target, x, idx, i)) ret.push(x);
    });
    return ret ;
  },

  /**
    Returns an array with all of the items in the enumeration where the passed
    function returns false for. This method is the inverse of filter().

    The callback method you provide should have the following signature (all
    parameters are optional):

          function(item, index, enumerable);

    - *item* is the current item in the iteration.
    - *index* is the current index in the iteration
    - *enumerable* is the enumerable object itself.

    It should return the a falsey value to include the item in the results.

    Note that in addition to a callback, you can also pass an optional target
    object that will be set as "this" on the context. This is a good way
    to give your iterator function access to the current object.

    @method reject
    @param {Function} callback The callback to execute
    @param {Object} [target] The target object to use
    @return {Array} A rejected array.
   */
  reject: function(callback, target) {
    return this.filter(function() {
      return !(callback.apply(target, arguments));
    });
  },

  /**
    Returns an array with just the items with the matched property. You
    can pass an optional second argument with the target value. Otherwise
    this will match any property that evaluates to `true`.

    @method filterBy
    @param {String} key the property to test
    @param {String} [value] optional value to test against.
    @return {Array} filtered array
  */
  filterBy: function(key, value) {
    return this.filter(iter.apply(this, arguments));
  },

  /**
    Returns an array with just the items with the matched property. You
    can pass an optional second argument with the target value. Otherwise
    this will match any property that evaluates to `true`.

    @method filterProperty
    @param {String} key the property to test
    @param {String} [value] optional value to test against.
    @return {Array} filtered array
    @deprecated Use `filterBy` instead
  */
  filterProperty: Ember.aliasMethod('filterBy'),

  /**
    Returns an array with the items that do not have truthy values for
    key.  You can pass an optional second argument with the target value.  Otherwise
    this will match any property that evaluates to false.

    @method rejectBy
    @param {String} key the property to test
    @param {String} [value] optional value to test against.
    @return {Array} rejected array
  */
  rejectBy: function(key, value) {
    var exactValue = function(item) { return get(item, key) === value; },
        hasValue = function(item) { return !!get(item, key); },
        use = (arguments.length === 2 ? exactValue : hasValue);

    return this.reject(use);
  },

  /**
    Returns an array with the items that do not have truthy values for
    key.  You can pass an optional second argument with the target value.  Otherwise
    this will match any property that evaluates to false.

    @method rejectProperty
    @param {String} key the property to test
    @param {String} [value] optional value to test against.
    @return {Array} rejected array
    @deprecated Use `rejectBy` instead
  */
  rejectProperty: Ember.aliasMethod('rejectBy'),

  /**
    Returns the first item in the array for which the callback returns true.
    This method works similar to the `filter()` method defined in JavaScript 1.6
    except that it will stop working on the array once a match is found.

    The callback method you provide should have the following signature (all
    parameters are optional):

    ```javascript
    function(item, index, enumerable);
    ```

    - `item` is the current item in the iteration.
    - `index` is the current index in the iteration.
    - `enumerable` is the enumerable object itself.

    It should return the `true` to include the item in the results, `false`
    otherwise.

    Note that in addition to a callback, you can also pass an optional target
    object that will be set as `this` on the context. This is a good way
    to give your iterator function access to the current object.

    @method find
    @param {Function} callback The callback to execute
    @param {Object} [target] The target object to use
    @return {Object} Found item or `undefined`.
  */
  find: function(callback, target) {
    var len = get(this, 'length') ;
    if (target === undefined) target = null;

    var last = null, next, found = false, ret ;
    var context = popCtx();
    for(var idx=0;idx<len && !found;idx++) {
      next = this.nextObject(idx, last, context) ;
      if (found = callback.call(target, next, idx, this)) ret = next ;
      last = next ;
    }
    next = last = null ;
    context = pushCtx(context);
    return ret ;
  },

  /**
    Returns the first item with a property matching the passed value. You
    can pass an optional second argument with the target value. Otherwise
    this will match any property that evaluates to `true`.

    This method works much like the more generic `find()` method.

    @method findBy
    @param {String} key the property to test
    @param {String} [value] optional value to test against.
    @return {Object} found item or `undefined`
  */
  findBy: function(key, value) {
    return this.find(iter.apply(this, arguments));
  },

  /**
    Returns the first item with a property matching the passed value. You
    can pass an optional second argument with the target value. Otherwise
    this will match any property that evaluates to `true`.

    This method works much like the more generic `find()` method.

    @method findProperty
    @param {String} key the property to test
    @param {String} [value] optional value to test against.
    @return {Object} found item or `undefined`
    @deprecated Use `findBy` instead
  */
  findProperty: Ember.aliasMethod('findBy'),

  /**
    Returns `true` if the passed function returns true for every item in the
    enumeration. This corresponds with the `every()` method in JavaScript 1.6.

    The callback method you provide should have the following signature (all
    parameters are optional):

    ```javascript
    function(item, index, enumerable);
    ```

    - `item` is the current item in the iteration.
    - `index` is the current index in the iteration.
    - `enumerable` is the enumerable object itself.

    It should return the `true` or `false`.

    Note that in addition to a callback, you can also pass an optional target
    object that will be set as `this` on the context. This is a good way
    to give your iterator function access to the current object.

    Example Usage:

    ```javascript
    if (people.every(isEngineer)) { Paychecks.addBigBonus(); }
    ```

    @method every
    @param {Function} callback The callback to execute
    @param {Object} [target] The target object to use
    @return {Boolean}
  */
  every: function(callback, target) {
    return !this.find(function(x, idx, i) {
      return !callback.call(target, x, idx, i);
    });
  },

  /**
    Returns `true` if the passed property resolves to `true` for all items in
    the enumerable. This method is often simpler/faster than using a callback.

    @method everyBy
    @param {String} key the property to test
    @param {String} [value] optional value to test against.
    @return {Boolean}
  */
  everyBy: function(key, value) {
    return this.every(iter.apply(this, arguments));
  },

  /**
    Returns `true` if the passed property resolves to `true` for all items in
    the enumerable. This method is often simpler/faster than using a callback.

    @method everyProperty
    @param {String} key the property to test
    @param {String} [value] optional value to test against.
    @return {Boolean}
    @deprecated Use `everyBy` instead
  */
  everyProperty: Ember.aliasMethod('everyBy'),

  /**
    Returns `true` if the passed function returns true for any item in the
    enumeration. This corresponds with the `some()` method in JavaScript 1.6.

    The callback method you provide should have the following signature (all
    parameters are optional):

    ```javascript
    function(item, index, enumerable);
    ```

    - `item` is the current item in the iteration.
    - `index` is the current index in the iteration.
    - `enumerable` is the enumerable object itself.

    It should return the `true` to include the item in the results, `false`
    otherwise.

    Note that in addition to a callback, you can also pass an optional target
    object that will be set as `this` on the context. This is a good way
    to give your iterator function access to the current object.

    Usage Example:

    ```javascript
    if (people.any(isManager)) { Paychecks.addBiggerBonus(); }
    ```

    @method any
    @param {Function} callback The callback to execute
    @param {Object} [target] The target object to use
    @return {Boolean} `true` if the passed function returns `true` for any item
  */
  any: function(callback, target) {
    return !!this.find(function(x, idx, i) {
      return !!callback.call(target, x, idx, i);
    });
  },

  /**
    Returns `true` if the passed function returns true for any item in the
    enumeration. This corresponds with the `some()` method in JavaScript 1.6.

    The callback method you provide should have the following signature (all
    parameters are optional):

    ```javascript
    function(item, index, enumerable);
    ```

    - `item` is the current item in the iteration.
    - `index` is the current index in the iteration.
    - `enumerable` is the enumerable object itself.

    It should return the `true` to include the item in the results, `false`
    otherwise.

    Note that in addition to a callback, you can also pass an optional target
    object that will be set as `this` on the context. This is a good way
    to give your iterator function access to the current object.

    Usage Example:

    ```javascript
    if (people.some(isManager)) { Paychecks.addBiggerBonus(); }
    ```

    @method some
    @param {Function} callback The callback to execute
    @param {Object} [target] The target object to use
    @return {Boolean} `true` if the passed function returns `true` for any item
    @deprecated Use `any` instead
  */
  some: Ember.aliasMethod('any'),

  /**
    Returns `true` if the passed property resolves to `true` for any item in
    the enumerable. This method is often simpler/faster than using a callback.

    @method anyBy
    @param {String} key the property to test
    @param {String} [value] optional value to test against.
    @return {Boolean} `true` if the passed function returns `true` for any item
  */
  anyBy: function(key, value) {
    return this.any(iter.apply(this, arguments));
  },

  /**
    Returns `true` if the passed property resolves to `true` for any item in
    the enumerable. This method is often simpler/faster than using a callback.

    @method someProperty
    @param {String} key the property to test
    @param {String} [value] optional value to test against.
    @return {Boolean} `true` if the passed function returns `true` for any item
    @deprecated Use `anyBy` instead
  */
  someProperty: Ember.aliasMethod('anyBy'),

  /**
    This will combine the values of the enumerator into a single value. It
    is a useful way to collect a summary value from an enumeration. This
    corresponds to the `reduce()` method defined in JavaScript 1.8.

    The callback method you provide should have the following signature (all
    parameters are optional):

    ```javascript
    function(previousValue, item, index, enumerable);
    ```

    - `previousValue` is the value returned by the last call to the iterator.
    - `item` is the current item in the iteration.
    - `index` is the current index in the iteration.
    - `enumerable` is the enumerable object itself.

    Return the new cumulative value.

    In addition to the callback you can also pass an `initialValue`. An error
    will be raised if you do not pass an initial value and the enumerator is
    empty.

    Note that unlike the other methods, this method does not allow you to
    pass a target object to set as this for the callback. It's part of the
    spec. Sorry.

    @method reduce
    @param {Function} callback The callback to execute
    @param {Object} initialValue Initial value for the reduce
    @param {String} reducerProperty internal use only.
    @return {Object} The reduced value.
  */
  reduce: function(callback, initialValue, reducerProperty) {
    if (typeof callback !== "function") { throw new TypeError(); }

    var ret = initialValue;

    this.forEach(function(item, i) {
      ret = callback.call(null, ret, item, i, this, reducerProperty);
    }, this);

    return ret;
  },

  /**
    Invokes the named method on every object in the receiver that
    implements it. This method corresponds to the implementation in
    Prototype 1.6.

    @method invoke
    @param {String} methodName the name of the method
    @param {Object...} args optional arguments to pass as well.
    @return {Array} return values from calling invoke.
  */
  invoke: function(methodName) {
    var args, ret = Ember.A();
    if (arguments.length>1) args = a_slice.call(arguments, 1);

    this.forEach(function(x, idx) {
      var method = x && x[methodName];
      if ('function' === typeof method) {
        ret[idx] = args ? method.apply(x, args) : method.call(x);
      }
    }, this);

    return ret;
  },

  /**
    Simply converts the enumerable into a genuine array. The order is not
    guaranteed. Corresponds to the method implemented by Prototype.

    @method toArray
    @return {Array} the enumerable as an array.
  */
  toArray: function() {
    var ret = Ember.A();
    this.forEach(function(o, idx) { ret[idx] = o; });
    return ret ;
  },

  /**
    Returns a copy of the array with all null and undefined elements removed.

    ```javascript
    var arr = ["a", null, "c", undefined];
    arr.compact();  // ["a", "c"]
    ```

    @method compact
    @return {Array} the array without null and undefined elements.
  */
  compact: function() {
    return this.filter(function(value) { return value != null; });
  },

  /**
    Returns a new enumerable that excludes the passed value. The default
    implementation returns an array regardless of the receiver type unless
    the receiver does not contain the value.

    ```javascript
    var arr = ["a", "b", "a", "c"];
    arr.without("a");  // ["b", "c"]
    ```

    @method without
    @param {Object} value
    @return {Ember.Enumerable}
  */
  without: function(value) {
    if (!this.contains(value)) return this; // nothing to do
    var ret = Ember.A();
    this.forEach(function(k) {
      if (k !== value) ret[ret.length] = k;
    }) ;
    return ret ;
  },

  /**
    Returns a new enumerable that contains only unique values. The default
    implementation returns an array regardless of the receiver type.

    ```javascript
    var arr = ["a", "a", "b", "b"];
    arr.uniq();  // ["a", "b"]
    ```

    @method uniq
    @return {Ember.Enumerable}
  */
  uniq: function() {
    var ret = Ember.A();
    this.forEach(function(k) {
      if (a_indexOf(ret, k)<0) ret.push(k);
    });
    return ret;
  },

  /**
    This property will trigger anytime the enumerable's content changes.
    You can observe this property to be notified of changes to the enumerables
    content.

    For plain enumerables, this property is read only. `Ember.Array` overrides
    this method.

    @property []
    @type Ember.Array
    @return this
  */
  '[]': Ember.computed(function(key, value) {
    return this;
  }),

  // ..........................................................
  // ENUMERABLE OBSERVERS
  //

  /**
    Registers an enumerable observer. Must implement `Ember.EnumerableObserver`
    mixin.

    @method addEnumerableObserver
    @param {Object} target
    @param {Hash} [opts]
    @return this
  */
  addEnumerableObserver: function(target, opts) {
    var willChange = (opts && opts.willChange) || 'enumerableWillChange',
        didChange  = (opts && opts.didChange) || 'enumerableDidChange';

    var hasObservers = get(this, 'hasEnumerableObservers');
    if (!hasObservers) Ember.propertyWillChange(this, 'hasEnumerableObservers');
    Ember.addListener(this, '@enumerable:before', target, willChange);
    Ember.addListener(this, '@enumerable:change', target, didChange);
    if (!hasObservers) Ember.propertyDidChange(this, 'hasEnumerableObservers');
    return this;
  },

  /**
    Removes a registered enumerable observer.

    @method removeEnumerableObserver
    @param {Object} target
    @param {Hash} [opts]
    @return this
  */
  removeEnumerableObserver: function(target, opts) {
    var willChange = (opts && opts.willChange) || 'enumerableWillChange',
        didChange  = (opts && opts.didChange) || 'enumerableDidChange';

    var hasObservers = get(this, 'hasEnumerableObservers');
    if (hasObservers) Ember.propertyWillChange(this, 'hasEnumerableObservers');
    Ember.removeListener(this, '@enumerable:before', target, willChange);
    Ember.removeListener(this, '@enumerable:change', target, didChange);
    if (hasObservers) Ember.propertyDidChange(this, 'hasEnumerableObservers');
    return this;
  },

  /**
    Becomes true whenever the array currently has observers watching changes
    on the array.

    @property hasEnumerableObservers
    @type Boolean
  */
  hasEnumerableObservers: Ember.computed(function() {
    return Ember.hasListeners(this, '@enumerable:change') || Ember.hasListeners(this, '@enumerable:before');
  }),


  /**
    Invoke this method just before the contents of your enumerable will
    change. You can either omit the parameters completely or pass the objects
    to be removed or added if available or just a count.

    @method enumerableContentWillChange
    @param {Ember.Enumerable|Number} removing An enumerable of the objects to
      be removed or the number of items to be removed.
    @param {Ember.Enumerable|Number} adding An enumerable of the objects to be
      added or the number of items to be added.
    @chainable
  */
  enumerableContentWillChange: function(removing, adding) {

    var removeCnt, addCnt, hasDelta;

    if ('number' === typeof removing) removeCnt = removing;
    else if (removing) removeCnt = get(removing, 'length');
    else removeCnt = removing = -1;

    if ('number' === typeof adding) addCnt = adding;
    else if (adding) addCnt = get(adding,'length');
    else addCnt = adding = -1;

    hasDelta = addCnt<0 || removeCnt<0 || addCnt-removeCnt!==0;

    if (removing === -1) removing = null;
    if (adding   === -1) adding   = null;

    Ember.propertyWillChange(this, '[]');
    if (hasDelta) Ember.propertyWillChange(this, 'length');
    Ember.sendEvent(this, '@enumerable:before', [this, removing, adding]);

    return this;
  },

  /**
    Invoke this method when the contents of your enumerable has changed.
    This will notify any observers watching for content changes. If your are
    implementing an ordered enumerable (such as an array), also pass the
    start and end values where the content changed so that it can be used to
    notify range observers.

    @method enumerableContentDidChange
    @param {Number} [start] optional start offset for the content change.
      For unordered enumerables, you should always pass -1.
    @param {Ember.Enumerable|Number} removing An enumerable of the objects to
      be removed or the number of items to be removed.
    @param {Ember.Enumerable|Number} adding  An enumerable of the objects to
      be added or the number of items to be added.
    @chainable
  */
  enumerableContentDidChange: function(removing, adding) {
    var removeCnt, addCnt, hasDelta;

    if ('number' === typeof removing) removeCnt = removing;
    else if (removing) removeCnt = get(removing, 'length');
    else removeCnt = removing = -1;

    if ('number' === typeof adding) addCnt = adding;
    else if (adding) addCnt = get(adding, 'length');
    else addCnt = adding = -1;

    hasDelta = addCnt<0 || removeCnt<0 || addCnt-removeCnt!==0;

    if (removing === -1) removing = null;
    if (adding   === -1) adding   = null;

    Ember.sendEvent(this, '@enumerable:change', [this, removing, adding]);
    if (hasDelta) Ember.propertyDidChange(this, 'length');
    Ember.propertyDidChange(this, '[]');

    return this ;
  }

}) ;

})();



(function() {
/**
@module ember
@submodule ember-runtime
*/

// ..........................................................
// HELPERS
//

var get = Ember.get, set = Ember.set, isNone = Ember.isNone, map = Ember.EnumerableUtils.map, cacheFor = Ember.cacheFor;

// ..........................................................
// ARRAY
//
/**
  This module implements Observer-friendly Array-like behavior. This mixin is
  picked up by the Array class as well as other controllers, etc. that want to
  appear to be arrays.

  Unlike `Ember.Enumerable,` this mixin defines methods specifically for
  collections that provide index-ordered access to their contents. When you
  are designing code that needs to accept any kind of Array-like object, you
  should use these methods instead of Array primitives because these will
  properly notify observers of changes to the array.

  Although these methods are efficient, they do add a layer of indirection to
  your application so it is a good idea to use them only when you need the
  flexibility of using both true JavaScript arrays and "virtual" arrays such
  as controllers and collections.

  You can use the methods defined in this module to access and modify array
  contents in a KVO-friendly way. You can also be notified whenever the
  membership of an array changes by changing the syntax of the property to
  `.observes('*myProperty.[]')`.

  To support `Ember.Array` in your own class, you must override two
  primitives to use it: `replace()` and `objectAt()`.

  Note that the Ember.Array mixin also incorporates the `Ember.Enumerable`
  mixin. All `Ember.Array`-like objects are also enumerable.

  @class Array
  @namespace Ember
  @uses Ember.Enumerable
  @since Ember 0.9.0
*/
Ember.Array = Ember.Mixin.create(Ember.Enumerable, /** @scope Ember.Array.prototype */ {

  /**
    Your array must support the `length` property. Your replace methods should
    set this property whenever it changes.

    @property {Number} length
  */
  length: Ember.required(),

  /**
    Returns the object at the given `index`. If the given `index` is negative
    or is greater or equal than the array length, returns `undefined`.

    This is one of the primitives you must implement to support `Ember.Array`.
    If your object supports retrieving the value of an array item using `get()`
    (i.e. `myArray.get(0)`), then you do not need to implement this method
    yourself.

    ```javascript
    var arr = ['a', 'b', 'c', 'd'];
    arr.objectAt(0);   // "a"
    arr.objectAt(3);   // "d"
    arr.objectAt(-1);  // undefined
    arr.objectAt(4);   // undefined
    arr.objectAt(5);   // undefined
    ```

    @method objectAt
    @param {Number} idx The index of the item to return.
    @return {*} item at index or undefined
  */
  objectAt: function(idx) {
    if ((idx < 0) || (idx>=get(this, 'length'))) return undefined ;
    return get(this, idx);
  },

  /**
    This returns the objects at the specified indexes, using `objectAt`.

    ```javascript
    var arr =Â ['a', 'b', 'c', 'd'];
    arr.objectsAt([0, 1, 2]);  // ["a", "b", "c"]
    arr.objectsAt([2, 3, 4]);  // ["c", "d", undefined]
    ```

    @method objectsAt
    @param {Array} indexes An array of indexes of items to return.
    @return {Array}
   */
  objectsAt: function(indexes) {
    var self = this;
    return map(indexes, function(idx) { return self.objectAt(idx); });
  },

  // overrides Ember.Enumerable version
  nextObject: function(idx) {
    return this.objectAt(idx);
  },

  /**
    This is the handler for the special array content property. If you get
    this property, it will return this. If you set this property it a new
    array, it will replace the current content.

    This property overrides the default property defined in `Ember.Enumerable`.

    @property []
    @return this
  */
  '[]': Ember.computed(function(key, value) {
    if (value !== undefined) this.replace(0, get(this, 'length'), value) ;
    return this ;
  }),

  firstObject: Ember.computed(function() {
    return this.objectAt(0);
  }),

  lastObject: Ember.computed(function() {
    return this.objectAt(get(this, 'length')-1);
  }),

  // optimized version from Enumerable
  contains: function(obj) {
    return this.indexOf(obj) >= 0;
  },

  // Add any extra methods to Ember.Array that are native to the built-in Array.
  /**
    Returns a new array that is a slice of the receiver. This implementation
    uses the observable array methods to retrieve the objects for the new
    slice.

    ```javascript
    var arr = ['red', 'green', 'blue'];
    arr.slice(0);       // ['red', 'green', 'blue']
    arr.slice(0, 2);    // ['red', 'green']
    arr.slice(1, 100);  // ['green', 'blue']
    ```

    @method slice
    @param {Integer} beginIndex (Optional) index to begin slicing from.
    @param {Integer} endIndex (Optional) index to end the slice at.
    @return {Array} New array with specified slice
  */
  slice: function(beginIndex, endIndex) {
    var ret = Ember.A();
    var length = get(this, 'length') ;
    if (isNone(beginIndex)) beginIndex = 0 ;
    if (isNone(endIndex) || (endIndex > length)) endIndex = length ;

    if (beginIndex < 0) beginIndex = length + beginIndex;
    if (endIndex < 0) endIndex = length + endIndex;

    while(beginIndex < endIndex) {
      ret[ret.length] = this.objectAt(beginIndex++) ;
    }
    return ret ;
  },

  /**
    Returns the index of the given object's first occurrence.
    If no `startAt` argument is given, the starting location to
    search is 0. If it's negative, will count backward from
    the end of the array. Returns -1 if no match is found.

    ```javascript
    var arr = ["a", "b", "c", "d", "a"];
    arr.indexOf("a");       //  0
    arr.indexOf("z");       // -1
    arr.indexOf("a", 2);    //  4
    arr.indexOf("a", -1);   //  4
    arr.indexOf("b", 3);    // -1
    arr.indexOf("a", 100);  // -1
    ```

    @method indexOf
    @param {Object} object the item to search for
    @param {Number} startAt optional starting location to search, default 0
    @return {Number} index or -1 if not found
  */
  indexOf: function(object, startAt) {
    var idx, len = get(this, 'length');

    if (startAt === undefined) startAt = 0;
    if (startAt < 0) startAt += len;

    for(idx=startAt;idx<len;idx++) {
      if (this.objectAt(idx) === object) return idx ;
    }
    return -1;
  },

  /**
    Returns the index of the given object's last occurrence.
    If no `startAt` argument is given, the search starts from
    the last position. If it's negative, will count backward
    from the end of the array. Returns -1 if no match is found.

    ```javascript
    var arr = ["a", "b", "c", "d", "a"];
    arr.lastIndexOf("a");       //  4
    arr.lastIndexOf("z");       // -1
    arr.lastIndexOf("a", 2);    //  0
    arr.lastIndexOf("a", -1);   //  4
    arr.lastIndexOf("b", 3);    //  1
    arr.lastIndexOf("a", 100);  //  4
    ```

    @method lastIndexOf
    @param {Object} object the item to search for
    @param {Number} startAt optional starting location to search, default 0
    @return {Number} index or -1 if not found
  */
  lastIndexOf: function(object, startAt) {
    var idx, len = get(this, 'length');

    if (startAt === undefined || startAt >= len) startAt = len-1;
    if (startAt < 0) startAt += len;

    for(idx=startAt;idx>=0;idx--) {
      if (this.objectAt(idx) === object) return idx ;
    }
    return -1;
  },

  // ..........................................................
  // ARRAY OBSERVERS
  //

  /**
    Adds an array observer to the receiving array. The array observer object
    normally must implement two methods:

    * `arrayWillChange(observedObj, start, removeCount, addCount)` - This method will be
      called just before the array is modified.
    * `arrayDidChange(observedObj, start, removeCount, addCount)` - This method will be
      called just after the array is modified.

    Both callbacks will be passed the observed object, starting index of the
    change as well a a count of the items to be removed and added. You can use
    these callbacks to optionally inspect the array during the change, clear
    caches, or do any other bookkeeping necessary.

    In addition to passing a target, you can also include an options hash
    which you can use to override the method names that will be invoked on the
    target.

    @method addArrayObserver
    @param {Object} target The observer object.
    @param {Hash} opts Optional hash of configuration options including
      `willChange` and `didChange` option.
    @return {Ember.Array} receiver
  */
  addArrayObserver: function(target, opts) {
    var willChange = (opts && opts.willChange) || 'arrayWillChange',
        didChange  = (opts && opts.didChange) || 'arrayDidChange';

    var hasObservers = get(this, 'hasArrayObservers');
    if (!hasObservers) Ember.propertyWillChange(this, 'hasArrayObservers');
    Ember.addListener(this, '@array:before', target, willChange);
    Ember.addListener(this, '@array:change', target, didChange);
    if (!hasObservers) Ember.propertyDidChange(this, 'hasArrayObservers');
    return this;
  },

  /**
    Removes an array observer from the object if the observer is current
    registered. Calling this method multiple times with the same object will
    have no effect.

    @method removeArrayObserver
    @param {Object} target The object observing the array.
    @param {Hash} opts Optional hash of configuration options including
      `willChange` and `didChange` option.
    @return {Ember.Array} receiver
  */
  removeArrayObserver: function(target, opts) {
    var willChange = (opts && opts.willChange) || 'arrayWillChange',
        didChange  = (opts && opts.didChange) || 'arrayDidChange';

    var hasObservers = get(this, 'hasArrayObservers');
    if (hasObservers) Ember.propertyWillChange(this, 'hasArrayObservers');
    Ember.removeListener(this, '@array:before', target, willChange);
    Ember.removeListener(this, '@array:change', target, didChange);
    if (hasObservers) Ember.propertyDidChange(this, 'hasArrayObservers');
    return this;
  },

  /**
    Becomes true whenever the array currently has observers watching changes
    on the array.

    @property Boolean
  */
  hasArrayObservers: Ember.computed(function() {
    return Ember.hasListeners(this, '@array:change') || Ember.hasListeners(this, '@array:before');
  }),

  /**
    If you are implementing an object that supports `Ember.Array`, call this
    method just before the array content changes to notify any observers and
    invalidate any related properties. Pass the starting index of the change
    as well as a delta of the amounts to change.

    @method arrayContentWillChange
    @param {Number} startIdx The starting index in the array that will change.
    @param {Number} removeAmt The number of items that will be removed. If you
      pass `null` assumes 0
    @param {Number} addAmt The number of items that will be added. If you
      pass `null` assumes 0.
    @return {Ember.Array} receiver
  */
  arrayContentWillChange: function(startIdx, removeAmt, addAmt) {

    // if no args are passed assume everything changes
    if (startIdx===undefined) {
      startIdx = 0;
      removeAmt = addAmt = -1;
    } else {
      if (removeAmt === undefined) removeAmt=-1;
      if (addAmt    === undefined) addAmt=-1;
    }

    // Make sure the @each proxy is set up if anyone is observing @each
    if (Ember.isWatching(this, '@each')) { get(this, '@each'); }

    Ember.sendEvent(this, '@array:before', [this, startIdx, removeAmt, addAmt]);

    var removing, lim;
    if (startIdx>=0 && removeAmt>=0 && get(this, 'hasEnumerableObservers')) {
      removing = [];
      lim = startIdx+removeAmt;
      for(var idx=startIdx;idx<lim;idx++) removing.push(this.objectAt(idx));
    } else {
      removing = removeAmt;
    }

    this.enumerableContentWillChange(removing, addAmt);

    return this;
  },

  /**
    If you are implementing an object that supports `Ember.Array`, call this
    method just after the array content changes to notify any observers and
    invalidate any related properties. Pass the starting index of the change
    as well as a delta of the amounts to change.

    @method arrayContentDidChange
    @param {Number} startIdx The starting index in the array that did change.
    @param {Number} removeAmt The number of items that were removed. If you
      pass `null` assumes 0
    @param {Number} addAmt The number of items that were added. If you
      pass `null` assumes 0.
    @return {Ember.Array} receiver
  */
  arrayContentDidChange: function(startIdx, removeAmt, addAmt) {

    // if no args are passed assume everything changes
    if (startIdx===undefined) {
      startIdx = 0;
      removeAmt = addAmt = -1;
    } else {
      if (removeAmt === undefined) removeAmt=-1;
      if (addAmt    === undefined) addAmt=-1;
    }

    var adding, lim;
    if (startIdx>=0 && addAmt>=0 && get(this, 'hasEnumerableObservers')) {
      adding = [];
      lim = startIdx+addAmt;
      for(var idx=startIdx;idx<lim;idx++) adding.push(this.objectAt(idx));
    } else {
      adding = addAmt;
    }

    this.enumerableContentDidChange(removeAmt, adding);
    Ember.sendEvent(this, '@array:change', [this, startIdx, removeAmt, addAmt]);

    var length      = get(this, 'length'),
        cachedFirst = cacheFor(this, 'firstObject'),
        cachedLast  = cacheFor(this, 'lastObject');
    if (this.objectAt(0) !== cachedFirst) {
      Ember.propertyWillChange(this, 'firstObject');
      Ember.propertyDidChange(this, 'firstObject');
    }
    if (this.objectAt(length-1) !== cachedLast) {
      Ember.propertyWillChange(this, 'lastObject');
      Ember.propertyDidChange(this, 'lastObject');
    }

    return this;
  },

  // ..........................................................
  // ENUMERATED PROPERTIES
  //

  /**
    Returns a special object that can be used to observe individual properties
    on the array. Just get an equivalent property on this object and it will
    return an enumerable that maps automatically to the named key on the
    member objects.

    If you merely want to watch for any items being added or removed to the array,
    use the `[]` property instead of `@each`.

    @property @each
  */
  '@each': Ember.computed(function() {
    if (!this.__each) this.__each = new Ember.EachProxy(this);
    return this.__each;
  })

}) ;

})();



(function() {
var get = Ember.get,
    set = Ember.set,
    guidFor = Ember.guidFor,
    metaFor = Ember.meta,
    addBeforeObserver = Ember.addBeforeObserver,
    removeBeforeObserver = Ember.removeBeforeObserver,
    addObserver = Ember.addObserver,
    removeObserver = Ember.removeObserver,
    ComputedProperty = Ember.ComputedProperty,
    a_slice = [].slice,
    o_create = Ember.create,
    forEach = Ember.EnumerableUtils.forEach,
    // Here we explicitly don't allow `@each.foo`; it would require some special
    // testing, but there's no particular reason why it should be disallowed.
    eachPropertyPattern = /^(.*)\.@each\.(.*)/,
    doubleEachPropertyPattern = /(.*\.@each){2,}/;

/*
  Tracks changes to dependent arrays, as well as to properties of items in
  dependent arrays.

  @class DependentArraysObserver
*/
function DependentArraysObserver(callbacks, cp, instanceMeta, context, propertyName, sugarMeta) {
  // user specified callbacks for `addedItem` and `removedItem`
  this.callbacks = callbacks;

  // the computed property: remember these are shared across instances
  this.cp = cp;

  // the ReduceComputedPropertyInstanceMeta this DependentArraysObserver is
  // associated with
  this.instanceMeta = instanceMeta;

  // A map of array guids to dependentKeys, for the given context.  We track
  // this because we want to set up the computed property potentially before the
  // dependent array even exists, but when the array observer fires, we lack
  // enough context to know what to update: we can recover that context by
  // getting the dependentKey.
  this.dependentKeysByGuid = {};

  // a map of dependent array guids -> Ember.TrackedArray instances.  We use
  // this to lazily recompute indexes for item property observers.
  this.trackedArraysByGuid = {};

  // This is used to coalesce item changes from property observers.
  this.changedItems = {};
}

function ItemPropertyObserverContext (dependentArray, index, trackedArray) {
  Ember.assert("Internal error: trackedArray is null or undefined", trackedArray);

  this.dependentArray = dependentArray;
  this.index = index;
  this.item = dependentArray.objectAt(index);
  this.trackedArray = trackedArray;
  this.beforeObserver = null;
  this.observer = null;
}

DependentArraysObserver.prototype = {
  setValue: function (newValue) {
    this.instanceMeta.setValue(newValue);
  },
  getValue: function () {
    return this.instanceMeta.getValue();
  },

  setupObservers: function (dependentArray, dependentKey) {
    Ember.assert("dependent array must be an `Ember.Array`", Ember.Array.detect(dependentArray));

    this.dependentKeysByGuid[guidFor(dependentArray)] = dependentKey;

    dependentArray.addArrayObserver(this, {
      willChange: 'dependentArrayWillChange',
      didChange: 'dependentArrayDidChange'
    });

    if (this.cp._itemPropertyKeys[dependentKey]) {
      this.setupPropertyObservers(dependentKey, this.cp._itemPropertyKeys[dependentKey]);
    }
  },

  teardownObservers: function (dependentArray, dependentKey) {
    var itemPropertyKeys = this.cp._itemPropertyKeys[dependentKey] || [];

    delete this.dependentKeysByGuid[guidFor(dependentArray)];

    this.teardownPropertyObservers(dependentKey, itemPropertyKeys);

    dependentArray.removeArrayObserver(this, {
      willChange: 'dependentArrayWillChange',
      didChange: 'dependentArrayDidChange'
    });
  },

  setupPropertyObservers: function (dependentKey, itemPropertyKeys) {
    var dependentArray = get(this.instanceMeta.context, dependentKey),
        length = get(dependentArray, 'length'),
        observerContexts = new Array(length);

    this.resetTransformations(dependentKey, observerContexts);

    forEach(dependentArray, function (item, index) {
      var observerContext = this.createPropertyObserverContext(dependentArray, index, this.trackedArraysByGuid[dependentKey]);
      observerContexts[index] = observerContext;

      forEach(itemPropertyKeys, function (propertyKey) {
        addBeforeObserver(item, propertyKey, this, observerContext.beforeObserver);
        addObserver(item, propertyKey, this, observerContext.observer);
      }, this);
    }, this);
  },

  teardownPropertyObservers: function (dependentKey, itemPropertyKeys) {
    var dependentArrayObserver = this,
        trackedArray = this.trackedArraysByGuid[dependentKey],
        beforeObserver,
        observer,
        item;

    if (!trackedArray) { return; }

    trackedArray.apply(function (observerContexts, offset, operation) {
      if (operation === Ember.TrackedArray.DELETE) { return; }

      forEach(observerContexts, function (observerContext) {
        beforeObserver = observerContext.beforeObserver;
        observer = observerContext.observer;
        item = observerContext.item;

        forEach(itemPropertyKeys, function (propertyKey) {
          removeBeforeObserver(item, propertyKey, dependentArrayObserver, beforeObserver);
          removeObserver(item, propertyKey, dependentArrayObserver, observer);
        });
      });
    });
  },

  createPropertyObserverContext: function (dependentArray, index, trackedArray) {
    var observerContext = new ItemPropertyObserverContext(dependentArray, index, trackedArray);

    this.createPropertyObserver(observerContext);

    return observerContext;
  },

  createPropertyObserver: function (observerContext) {
    var dependentArrayObserver = this;

    observerContext.beforeObserver = function (obj, keyName) {
      dependentArrayObserver.updateIndexes(observerContext.trackedArray, observerContext.dependentArray);
      return dependentArrayObserver.itemPropertyWillChange(obj, keyName, observerContext.dependentArray, observerContext.index);
    };
    observerContext.observer = function (obj, keyName) {
      return dependentArrayObserver.itemPropertyDidChange(obj, keyName, observerContext.dependentArray, observerContext.index);
    };
  },

  resetTransformations: function (dependentKey, observerContexts) {
    this.trackedArraysByGuid[dependentKey] = new Ember.TrackedArray(observerContexts);
  },

  addTransformation: function (dependentKey, index, newItems) {
    var trackedArray = this.trackedArraysByGuid[dependentKey];
    if (trackedArray) {
      trackedArray.addItems(index, newItems);
    }
  },

  removeTransformation: function (dependentKey, index, removedCount) {
    var trackedArray = this.trackedArraysByGuid[dependentKey];

    if (trackedArray) {
      return trackedArray.removeItems(index, removedCount);
    }

    return [];
  },

  updateIndexes: function (trackedArray, array) {
    var length = get(array, 'length');
    // OPTIMIZE: we could stop updating once we hit the object whose observer
    // fired; ie partially apply the transformations
    trackedArray.apply(function (observerContexts, offset, operation) {
      // we don't even have observer contexts for removed items, even if we did,
      // they no longer have any index in the array
      if (operation === Ember.TrackedArray.DELETE) { return; }
      if (operation === Ember.TrackedArray.RETAIN && observerContexts.length === length && offset === 0) {
        // If we update many items we don't want to walk the array each time: we
        // only need to update the indexes at most once per run loop.
        return;
      }

      forEach(observerContexts, function (context, index) {
        context.index = index + offset;
      });
    });
  },

  dependentArrayWillChange: function (dependentArray, index, removedCount, addedCount) {
    var removedItem = this.callbacks.removedItem,
        changeMeta,
        guid = guidFor(dependentArray),
        dependentKey = this.dependentKeysByGuid[guid],
        itemPropertyKeys = this.cp._itemPropertyKeys[dependentKey] || [],
        item,
        itemIndex,
        sliceIndex,
        observerContexts;

    observerContexts = this.removeTransformation(dependentKey, index, removedCount);


    function removeObservers(propertyKey) {
      removeBeforeObserver(item, propertyKey, this, observerContexts[sliceIndex].beforeObserver);
      removeObserver(item, propertyKey, this, observerContexts[sliceIndex].observer);
    }

    for (sliceIndex = removedCount - 1; sliceIndex >= 0; --sliceIndex) {
      itemIndex = index + sliceIndex;
      item = dependentArray.objectAt(itemIndex);

      forEach(itemPropertyKeys, removeObservers, this);

      changeMeta = createChangeMeta(dependentArray, item, itemIndex, this.instanceMeta.propertyName, this.cp);
      this.setValue( removedItem.call(
        this.instanceMeta.context, this.getValue(), item, changeMeta, this.instanceMeta.sugarMeta));
    }
  },

  dependentArrayDidChange: function (dependentArray, index, removedCount, addedCount) {
    var addedItem = this.callbacks.addedItem,
        guid = guidFor(dependentArray),
        dependentKey = this.dependentKeysByGuid[guid],
        observerContexts = new Array(addedCount),
        itemPropertyKeys = this.cp._itemPropertyKeys[dependentKey],
        changeMeta,
        observerContext;

    forEach(dependentArray.slice(index, index + addedCount), function (item, sliceIndex) {
      if (itemPropertyKeys) {
        observerContext =
          observerContexts[sliceIndex] =
          this.createPropertyObserverContext(dependentArray, index + sliceIndex, this.trackedArraysByGuid[dependentKey]);
        forEach(itemPropertyKeys, function (propertyKey) {
          addBeforeObserver(item, propertyKey, this, observerContext.beforeObserver);
          addObserver(item, propertyKey, this, observerContext.observer);
        }, this);
      }

      changeMeta = createChangeMeta(dependentArray, item, index + sliceIndex, this.instanceMeta.propertyName, this.cp);
      this.setValue( addedItem.call(
        this.instanceMeta.context, this.getValue(), item, changeMeta, this.instanceMeta.sugarMeta));
    }, this);

    this.addTransformation(dependentKey, index, observerContexts);
  },

  itemPropertyWillChange: function (obj, keyName, array, index) {
    var guid = guidFor(obj);

    if (!this.changedItems[guid]) {
      this.changedItems[guid] = {
        array:          array,
        index:          index,
        obj:            obj,
        previousValues: {}
      };
    }

    this.changedItems[guid].previousValues[keyName] = get(obj, keyName);
  },

  itemPropertyDidChange: function(obj, keyName, array, index) {
    Ember.run.once(this, 'flushChanges');
  },

  flushChanges: function() {
    var changedItems = this.changedItems, key, c, changeMeta;
    for (key in changedItems) {
      c = changedItems[key];
      changeMeta = createChangeMeta(c.array, c.obj, c.index, this.instanceMeta.propertyName, this.cp, c.previousValues);
      this.setValue(
        this.callbacks.removedItem.call(this.instanceMeta.context, this.getValue(), c.obj, changeMeta, this.instanceMeta.sugarMeta));
      this.setValue(
        this.callbacks.addedItem.call(this.instanceMeta.context, this.getValue(), c.obj, changeMeta, this.instanceMeta.sugarMeta));
    }
    this.changedItems = {};
  }
};

function createChangeMeta(dependentArray, item, index, propertyName, property, previousValues) {
  var meta = {
    arrayChanged: dependentArray,
    index: index,
    item: item,
    propertyName: propertyName,
    property: property
  };

  if (previousValues) {
    // previous values only available for item property changes
    meta.previousValues = previousValues;
  }

  return meta;
}

function addItems (dependentArray, callbacks, cp, propertyName, meta) {
  forEach(dependentArray, function (item, index) {
    meta.setValue( callbacks.addedItem.call(
      this, meta.getValue(), item, createChangeMeta(dependentArray, item, index, propertyName, cp), meta.sugarMeta));
  }, this);
}

function reset(cp, propertyName) {
  var callbacks = cp._callbacks(),
      meta;

  if (cp._hasInstanceMeta(this, propertyName)) {
    meta = cp._instanceMeta(this, propertyName);
    meta.setValue(cp.resetValue(meta.getValue()));
  } else {
    meta = cp._instanceMeta(this, propertyName);
  }

  if (cp.options.initialize) {
    cp.options.initialize.call(this, meta.getValue(), { property: cp, propertyName: propertyName }, meta.sugarMeta);
  }
}

function ReduceComputedPropertyInstanceMeta(context, propertyName, initialValue) {
  this.context = context;
  this.propertyName = propertyName;
  this.cache = metaFor(context).cache;

  this.dependentArrays = {};
  this.sugarMeta = {};

  this.initialValue = initialValue;
}

ReduceComputedPropertyInstanceMeta.prototype = {
  getValue: function () {
    if (this.propertyName in this.cache) {
      return this.cache[this.propertyName];
    } else {
      return this.initialValue;
    }
  },

  setValue: function(newValue) {
    // This lets sugars force a recomputation, handy for very simple
    // implementations of eg max.
    if (newValue !== undefined) {
      this.cache[this.propertyName] = newValue;
    } else {
      delete this.cache[this.propertyName];
    }
  }
};

/**
  A computed property whose dependent keys are arrays and which is updated with
  "one at a time" semantics.

  @class ReduceComputedProperty
  @namespace Ember
  @extends Ember.ComputedProperty
  @constructor
*/
function ReduceComputedProperty(options) {
  var cp = this;

  this.options = options;
  this._instanceMetas = {};

  this._dependentKeys = null;
  // A map of dependentKey -> [itemProperty, ...] that tracks what properties of
  // items in the array we must track to update this property.
  this._itemPropertyKeys = {};
  this._previousItemPropertyKeys = {};

  this.readOnly();
  this.cacheable();

  this.recomputeOnce = function(propertyName) {
    // What we really want to do is coalesce by <cp, propertyName>.
    // We need a form of `scheduleOnce` that accepts an arbitrary token to
    // coalesce by, in addition to the target and method.
    Ember.run.once(this, recompute, propertyName);
  };
  var recompute = function(propertyName) {
    var dependentKeys = cp._dependentKeys,
        meta = cp._instanceMeta(this, propertyName),
        callbacks = cp._callbacks();

    reset.call(this, cp, propertyName);

    forEach(cp._dependentKeys, function (dependentKey) {
      var dependentArray = get(this, dependentKey),
          previousDependentArray = meta.dependentArrays[dependentKey];

      if (dependentArray === previousDependentArray) {
        // The array may be the same, but our item property keys may have
        // changed, so we set them up again.  We can't easily tell if they've
        // changed: the array may be the same object, but with different
        // contents.
        if (cp._previousItemPropertyKeys[dependentKey]) {
          delete cp._previousItemPropertyKeys[dependentKey];
          meta.dependentArraysObserver.setupPropertyObservers(dependentKey, cp._itemPropertyKeys[dependentKey]);
        }
      } else {
        meta.dependentArrays[dependentKey] = dependentArray;

        if (previousDependentArray) {
          meta.dependentArraysObserver.teardownObservers(previousDependentArray, dependentKey);
        }

        if (dependentArray) {
          meta.dependentArraysObserver.setupObservers(dependentArray, dependentKey);
        }
      }
    }, this);

    forEach(cp._dependentKeys, function(dependentKey) {
      var dependentArray = get(this, dependentKey);
      if (dependentArray) {
        addItems.call(this, dependentArray, callbacks, cp, propertyName, meta);
      }
    }, this);
  };

  this.func = function (propertyName) {
    Ember.assert("Computed reduce values require at least one dependent key", cp._dependentKeys);

    recompute.call(this, propertyName);

    return cp._instanceMeta(this, propertyName).getValue();
  };
}

Ember.ReduceComputedProperty = ReduceComputedProperty;
ReduceComputedProperty.prototype = o_create(ComputedProperty.prototype);

function defaultCallback(computedValue) {
  return computedValue;
}

ReduceComputedProperty.prototype._callbacks = function () {
  if (!this.callbacks) {
    var options = this.options;
    this.callbacks = {
      removedItem: options.removedItem || defaultCallback,
      addedItem: options.addedItem || defaultCallback
    };
  }
  return this.callbacks;
};

ReduceComputedProperty.prototype._hasInstanceMeta = function (context, propertyName) {
  var guid = guidFor(context),
      key = guid + ':' + propertyName;

  return !!this._instanceMetas[key];
};

ReduceComputedProperty.prototype._instanceMeta = function (context, propertyName) {
  var guid = guidFor(context),
      key = guid + ':' + propertyName,
      meta = this._instanceMetas[key];

  if (!meta) {
    meta = this._instanceMetas[key] = new ReduceComputedPropertyInstanceMeta(context, propertyName, this.initialValue());
    meta.dependentArraysObserver = new DependentArraysObserver(this._callbacks(), this, meta, context, propertyName, meta.sugarMeta);
  }

  return meta;
};

ReduceComputedProperty.prototype.initialValue = function () {
  switch (typeof this.options.initialValue) {
    case 'undefined':
      throw new Error("reduce computed properties require an initial value: did you forget to pass one to Ember.reduceComputed?");
    case  'function':
      return this.options.initialValue();
    default:
      return this.options.initialValue;
  }
};

ReduceComputedProperty.prototype.resetValue = function (value) {
  return this.initialValue();
};

ReduceComputedProperty.prototype.itemPropertyKey = function (dependentArrayKey, itemPropertyKey) {
  this._itemPropertyKeys[dependentArrayKey] = this._itemPropertyKeys[dependentArrayKey] || [];
  this._itemPropertyKeys[dependentArrayKey].push(itemPropertyKey);
};

ReduceComputedProperty.prototype.clearItemPropertyKeys = function (dependentArrayKey) {
  if (this._itemPropertyKeys[dependentArrayKey]) {
    this._previousItemPropertyKeys[dependentArrayKey] = this._itemPropertyKeys[dependentArrayKey];
    this._itemPropertyKeys[dependentArrayKey] = [];
  }
};

ReduceComputedProperty.prototype.property = function () {
  var cp = this,
      args = a_slice.call(arguments),
      propertyArgs = [],
      match,
      dependentArrayKey,
      itemPropertyKey;

  forEach(a_slice.call(arguments), function (dependentKey) {
    if (doubleEachPropertyPattern.test(dependentKey)) {
      throw new Error("Nested @each properties not supported: " + dependentKey);
    } else if (match = eachPropertyPattern.exec(dependentKey)) {
      dependentArrayKey = match[1];
      itemPropertyKey = match[2];
      cp.itemPropertyKey(dependentArrayKey, itemPropertyKey);
      propertyArgs.push(dependentArrayKey);
    } else {
      propertyArgs.push(dependentKey);
    }
  });

  return ComputedProperty.prototype.property.apply(this, propertyArgs);
};

/**
  Creates a computed property which operates on dependent arrays and
  is updated with "one at a time" semantics. When items are added or
  removed from the dependent array(s) a reduce computed only operates
  on the change instead of re-evaluating the entire array.

  If there are more than one arguments the first arguments are
  considered to be dependent property keys. The last argument is
  required to be an options object. The options object can have the
  following four properties.

  `initialValue` - A value or function that will be used as the initial
  value for the computed. If this property is a function the result of calling
  the function will be used as the initial value. This property is required.

  `initialize` - An optional initialize function. Typically this will be used
  to set up state on the instanceMeta object.

  `removedItem` - A function that is called each time an element is removed
  from the array.

  `addedItem` - A function that is called each time an element is added to
  the array.


  The `initialize` function has the following signature:

  ```javascript
   function (initialValue, changeMeta, instanceMeta)
  ```

  `initialValue` - The value of the `initialValue` property from the
  options object.

  `changeMeta` - An object which contains meta information about the
  computed. It contains the following properties:

     - `property` the computed property
     - `propertyName` the name of the property on the object

  `instanceMeta` - An object that can be used to store meta
  information needed for calculating your computed. For example a
  unique computed might use this to store the number of times a given
  element is found in the dependent array.


  The `removedItem` and `addedItem` functions both have the following signature:

  ```javascript
  function (accumulatedValue, item, changeMeta, instanceMeta)
  ```

  `accumulatedValue` - The value returned from the last time
  `removedItem` or `addedItem` was called or `initialValue`.

  `item` - the element added or removed from the array

  `changeMeta` - An object which contains meta information about the
  change. It contains the following properties:

    - `property` the computed property
    - `propertyName` the name of the property on the object
    - `index` the index of the added or removed item
    - `item` the added or removed item: this is exactly the same as
      the second arg
    - `arrayChanged` the array that triggered the change. Can be
      useful when depending on multiple arrays.

  For property changes triggered on an item property change (when
  depKey is something like `someArray.@each.someProperty`),
  `changeMeta` will also contain the following property:

    - `previousValues` an object whose keys are the properties that changed on
    the item, and whose values are the item's previous values.

  `previousValues` is important Ember coalesces item property changes via
  Ember.run.once. This means that by the time removedItem gets called, item has
  the new values, but you may need the previous value (eg for sorting &
  filtering).

  `instanceMeta` - An object that can be used to store meta
  information needed for calculating your computed. For example a
  unique computed might use this to store the number of times a given
  element is found in the dependent array.

  The `removedItem` and `addedItem` functions should return the accumulated
  value. It is acceptable to not return anything (ie return undefined)
  to invalidate the computation. This is generally not a good idea for
  arrayComputed but it's used in eg max and min.

  Example

  ```javascript
  Ember.computed.max = function (dependentKey) {
    return Ember.reduceComputed.call(null, dependentKey, {
      initialValue: -Infinity,

      addedItem: function (accumulatedValue, item, changeMeta, instanceMeta) {
        return Math.max(accumulatedValue, item);
      },

      removedItem: function (accumulatedValue, item, changeMeta, instanceMeta) {
        if (item < accumulatedValue) {
          return accumulatedValue;
        }
      }
    });
  };
  ```

  @method reduceComputed
  @for Ember
  @param {String} [dependentKeys*]
  @param {Object} options
  @returns {Ember.ComputedProperty}
*/
Ember.reduceComputed = function (options) {
  var args;

  if (arguments.length > 1) {
    args = a_slice.call(arguments, 0, -1);
    options = a_slice.call(arguments, -1)[0];
  }

  if (typeof options !== "object") {
    throw new Error("Reduce Computed Property declared without an options hash");
  }

  if (!options.initialValue) {
    throw new Error("Reduce Computed Property declared without an initial value");
  }

  var cp = new ReduceComputedProperty(options);

  if (args) {
    cp.property.apply(cp, args);
  }

  return cp;
};

})();



(function() {
var ReduceComputedProperty = Ember.ReduceComputedProperty,
    a_slice = [].slice,
    o_create = Ember.create,
    forEach = Ember.EnumerableUtils.forEach;

function ArrayComputedProperty() {
  var cp = this;

  ReduceComputedProperty.apply(this, arguments);

  this.func = (function(reduceFunc) {
    return function (propertyName) {
      if (!cp._hasInstanceMeta(this, propertyName)) {
        // When we recompute an array computed property, we need already
        // retrieved arrays to be updated; we can't simply empty the cache and
        // hope the array is re-retrieved.
        forEach(cp._dependentKeys, function(dependentKey) {
          Ember.addObserver(this, dependentKey, function() {
            cp.recomputeOnce.call(this, propertyName);
          });
        }, this);
      }

      return reduceFunc.apply(this, arguments);
    };
  })(this.func);

  return this;
}
Ember.ArrayComputedProperty = ArrayComputedProperty;
ArrayComputedProperty.prototype = o_create(ReduceComputedProperty.prototype);
ArrayComputedProperty.prototype.initialValue = function () {
  return Ember.A();
};
ArrayComputedProperty.prototype.resetValue = function (array) {
  array.clear();
  return array;
};

/**
  Creates a computed property which operates on dependent arrays and
  is updated with "one at a time" semantics. When items are added or
  removed from the dependent array(s) an array computed only operates
  on the change instead of re-evaluating the entire array. This should
  return an array, if you'd like to use "one at a time" semantics and
  compute some value other then an array look at
  `Ember.reduceComputed`.

  If there are more than one arguments the first arguments are
  considered to be dependent property keys. The last argument is
  required to be an options object. The options object can have the
  following three properties.

  `initialize` - An optional initialize function. Typically this will be used
  to set up state on the instanceMeta object.

  `removedItem` - A function that is called each time an element is
  removed from the array.

  `addedItem` - A function that is called each time an element is
  added to the array.


  The `initialize` function has the following signature:

  ```javascript
   function (array, changeMeta, instanceMeta)
  ```

  `array` - The initial value of the arrayComputed, an empty array.

  `changeMeta` - An object which contains meta information about the
  computed. It contains the following properties:

     - `property` the computed property
     - `propertyName` the name of the property on the object

  `instanceMeta` - An object that can be used to store meta
  information needed for calculating your computed. For example a
  unique computed might use this to store the number of times a given
  element is found in the dependent array.


  The `removedItem` and `addedItem` functions both have the following signature:

  ```javascript
  function (accumulatedValue, item, changeMeta, instanceMeta)
  ```

  `accumulatedValue` - The value returned from the last time
  `removedItem` or `addedItem` was called or an empty array.

  `item` - the element added or removed from the array

  `changeMeta` - An object which contains meta information about the
  change. It contains the following properties:

    - `property` the computed property
    - `propertyName` the name of the property on the object
    - `index` the index of the added or removed item
    - `item` the added or removed item: this is exactly the same as
      the second arg
    - `arrayChanged` the array that triggered the change. Can be
      useful when depending on multiple arrays.

  For property changes triggered on an item property change (when
  depKey is something like `someArray.@each.someProperty`),
  `changeMeta` will also contain the following property:

    - `previousValues` an object whose keys are the properties that changed on
    the item, and whose values are the item's previous values.

  `previousValues` is important Ember coalesces item property changes via
  Ember.run.once. This means that by the time removedItem gets called, item has
  the new values, but you may need the previous value (eg for sorting &
  filtering).

  `instanceMeta` - An object that can be used to store meta
  information needed for calculating your computed. For example a
  unique computed might use this to store the number of times a given
  element is found in the dependent array.

  The `removedItem` and `addedItem` functions should return the accumulated
  value. It is acceptable to not return anything (ie return undefined)
  to invalidate the computation. This is generally not a good idea for
  arrayComputed but it's used in eg max and min.

  Example

  ```javascript
  Ember.computed.map = function(dependentKey, callback) {
    var options = {
      addedItem: function(array, item, changeMeta, instanceMeta) {
        var mapped = callback(item);
        array.insertAt(changeMeta.index, mapped);
        return array;
      },
      removedItem: function(array, item, changeMeta, instanceMeta) {
        array.removeAt(changeMeta.index, 1);
        return array;
      }
    };

    return Ember.arrayComputed(dependentKey, options);
  };
  ```

  @method arrayComputed
  @for Ember
  @param {String} [dependentKeys*]
  @param {Object} options
  @returns {Ember.ComputedProperty}
*/
Ember.arrayComputed = function (options) {
  var args;

  if (arguments.length > 1) {
    args = a_slice.call(arguments, 0, -1);
    options = a_slice.call(arguments, -1)[0];
  }

  if (typeof options !== "object") {
    throw new Error("Array Computed Property declared without an options hash");
  }

  var cp = new ArrayComputedProperty(options);

  if (args) {
    cp.property.apply(cp, args);
  }

  return cp;
};

})();



(function() {
/**
@module ember
@submodule ember-runtime
*/

var get = Ember.get,
    set = Ember.set,
    guidFor = Ember.guidFor,
    merge = Ember.merge,
    a_slice = [].slice,
    forEach = Ember.EnumerableUtils.forEach,
    map = Ember.EnumerableUtils.map;

/**
  A computed property that calculates the maximum value in the
  dependent array. This will return `-Infinity` when the dependent
  array is empty.

  Example

  ```javascript
  App.Person = Ember.Object.extend({
    childAges: Ember.computed.mapBy('children', 'age'),
    maxChildAge: Ember.computed.max('childAges')
  });

  var lordByron = App.Person.create({children: []});
  lordByron.get('maxChildAge'); // -Infinity
  lordByron.get('children').pushObject({name: 'Augusta Ada Byron', age: 7});
  lordByron.get('maxChildAge'); // 7
  lordByron.get('children').pushObjects([{name: 'Allegra Byron', age: 5}, {name: 'Elizabeth Medora Leigh', age: 8}]);
  lordByron.get('maxChildAge'); // 8
  ```

  @method computed.max
  @for Ember
  @param {String} dependentKey
  @return {Ember.ComputedProperty} computes the largest value in the dependentKey's array
*/
Ember.computed.max = function (dependentKey) {
  return Ember.reduceComputed.call(null, dependentKey, {
    initialValue: -Infinity,

    addedItem: function (accumulatedValue, item, changeMeta, instanceMeta) {
      return Math.max(accumulatedValue, item);
    },

    removedItem: function (accumulatedValue, item, changeMeta, instanceMeta) {
      if (item < accumulatedValue) {
        return accumulatedValue;
      }
    }
  });
};

/**
  A computed property that calculates the minimum value in the
  dependent array. This will return `Infinity` when the dependent
  array is empty.

  Example

  ```javascript
  App.Person = Ember.Object.extend({
    childAges: Ember.computed.mapBy('children', 'age'),
    minChildAge: Ember.computed.min('childAges')
  });

  var lordByron = App.Person.create({children: []});
  lordByron.get('minChildAge'); // Infinity
  lordByron.get('children').pushObject({name: 'Augusta Ada Byron', age: 7});
  lordByron.get('minChildAge'); // 7
  lordByron.get('children').pushObjects([{name: 'Allegra Byron', age: 5}, {name: 'Elizabeth Medora Leigh', age: 8}]);
  lordByron.get('minChildAge'); // 5
  ```

  @method computed.min
  @for Ember
  @param {String} dependentKey
  @return {Ember.ComputedProperty} computes the smallest value in the dependentKey's array
*/
Ember.computed.min = function (dependentKey) {
  return Ember.reduceComputed.call(null, dependentKey, {
    initialValue: Infinity,

    addedItem: function (accumulatedValue, item, changeMeta, instanceMeta) {
      return Math.min(accumulatedValue, item);
    },

    removedItem: function (accumulatedValue, item, changeMeta, instanceMeta) {
      if (item > accumulatedValue) {
        return accumulatedValue;
      }
    }
  });
};

/**
  Returns an array mapped via the callback

  The callback method you provide should have the following signature:

  ```javascript
  function(item);
  ```

  - `item` is the current item in the iteration.

  Example

  ```javascript
  App.Hampster = Ember.Object.extend({
    excitingChores: Ember.computed.map('chores', function(chore) {
      return chore.toUpperCase() + '!';
    })
  });

  var hampster = App.Hampster.create({chores: ['cook', 'clean', 'write more unit tests']});
  hampster.get('excitingChores'); // ['COOK!', 'CLEAN!', 'WRITE MORE UNIT TESTS!']
  ```

  @method computed.map
  @for Ember
  @param {String} dependentKey
  @param {Function} callback
  @return {Ember.ComputedProperty} an array mapped via the callback
*/
Ember.computed.map = function(dependentKey, callback) {
  var options = {
    addedItem: function(array, item, changeMeta, instanceMeta) {
      var mapped = callback(item);
      array.insertAt(changeMeta.index, mapped);
      return array;
    },
    removedItem: function(array, item, changeMeta, instanceMeta) {
      array.removeAt(changeMeta.index, 1);
      return array;
    }
  };

  return Ember.arrayComputed(dependentKey, options);
};

/**
  Returns an array mapped to the specified key.

  Example

  ```javascript
  App.Person = Ember.Object.extend({
    childAges: Ember.computed.mapBy('children', 'age'),
    minChildAge: Ember.computed.min('childAges')
  });

  var lordByron = App.Person.create({children: []});
  lordByron.get('childAge'); // []
  lordByron.get('children').pushObject({name: 'Augusta Ada Byron', age: 7});
  lordByron.get('childAge'); // [7]
  lordByron.get('children').pushObjects([{name: 'Allegra Byron', age: 5}, {name: 'Elizabeth Medora Leigh', age: 8}]);
  lordByron.get('childAge'); // [7, 5, 8]
  ```

  @method computed.mapBy
  @for Ember
  @param {String} dependentKey
  @param {String} propertyKey
  @return {Ember.ComputedProperty} an array mapped to the specified key
*/
Ember.computed.mapBy = function(dependentKey, propertyKey) {
  var callback = function(item) { return get(item, propertyKey); };
  return Ember.computed.map(dependentKey + '.@each.' + propertyKey, callback);
};

/**
  @method computed.mapProperty
  @for Ember
  @deprecated Use `Ember.computed.mapBy` instead
  @param dependentKey
  @param propertyKey
*/
Ember.computed.mapProperty = Ember.computed.mapBy;

/**
  Filters the array by the callback.

  The callback method you provide should have the following signature:

  ```javascript
  function(item);
  ```

  - `item` is the current item in the iteration.

  Example

  ```javascript
  App.Hampster = Ember.Object.extend({
    remainingChores: Ember.computed.filter('chores', function(chore) {
      return !chore.done;
    })
  });

  var hampster = App.Hampster.create({chores: [
    {name: 'cook', done: true},
    {name: 'clean', done: true},
    {name: 'write more unit tests', done: false}
  ]});
  hampster.get('remainingChores'); // [{name: 'write more unit tests', done: false}]
  ```

  @method computed.filter
  @for Ember
  @param {String} dependentKey
  @param {Function} callback
  @return {Ember.ComputedProperty} the filtered array
*/
Ember.computed.filter = function(dependentKey, callback) {
  var options = {
    initialize: function (array, changeMeta, instanceMeta) {
      instanceMeta.filteredArrayIndexes = new Ember.SubArray();
    },

    addedItem: function(array, item, changeMeta, instanceMeta) {
      var match = !!callback(item),
          filterIndex = instanceMeta.filteredArrayIndexes.addItem(changeMeta.index, match);

      if (match) {
        array.insertAt(filterIndex, item);
      }

      return array;
    },

    removedItem: function(array, item, changeMeta, instanceMeta) {
      var filterIndex = instanceMeta.filteredArrayIndexes.removeItem(changeMeta.index);

      if (filterIndex > -1) {
        array.removeAt(filterIndex);
      }

      return array;
    }
  };

  return Ember.arrayComputed(dependentKey, options);
};

/**
  Filters the array by the property and value

  Example

  ```javascript
  App.Hampster = Ember.Object.extend({
    remainingChores: Ember.computed.filterBy('chores', 'done', false)
  });

  var hampster = App.Hampster.create({chores: [
    {name: 'cook', done: true},
    {name: 'clean', done: true},
    {name: 'write more unit tests', done: false}
  ]});
  hampster.get('remainingChores'); // [{name: 'write more unit tests', done: false}]
  ```

  @method computed.filterBy
  @for Ember
  @param {String} dependentKey
  @param {String} propertyKey
  @param {String} value
  @return {Ember.ComputedProperty} the filtered array
*/
Ember.computed.filterBy = function(dependentKey, propertyKey, value) {
  var callback;

  if (arguments.length === 2) {
    callback = function(item) {
      return get(item, propertyKey);
    };
  } else {
    callback = function(item) {
      return get(item, propertyKey) === value;
    };
  }

  return Ember.computed.filter(dependentKey + '.@each.' + propertyKey, callback);
};

/**
  @method computed.filterProperty
  @for Ember
  @param dependentKey
  @param propertyKey
  @param value
  @deprecated Use `Ember.computed.filterBy` instead
*/
Ember.computed.filterProperty = Ember.computed.filterBy;

/**
  A computed property which returns a new array with all the unique
  elements from one or more dependent arrays.

  Example

  ```javascript
  App.Hampster = Ember.Object.extend({
    uniqueFruits: Ember.computed.uniq('fruits')
  });

  var hampster = App.Hampster.create({fruits: [
    'banana',
    'grape',
    'kale',
    'banana'
  ]});
  hampster.get('uniqueFruits'); // ['banana', 'grape', 'kale']
  ```

  @method computed.uniq
  @for Ember
  @param {String} propertyKey*
  @return {Ember.ComputedProperty} computes a new array with all the
  unique elements from the dependent array
*/
Ember.computed.uniq = function() {
  var args = a_slice.call(arguments);
  args.push({
    initialize: function(array, changeMeta, instanceMeta) {
      instanceMeta.itemCounts = {};
    },

    addedItem: function(array, item, changeMeta, instanceMeta) {
      var guid = guidFor(item);

      if (!instanceMeta.itemCounts[guid]) {
        instanceMeta.itemCounts[guid] = 1;
      } else {
        ++instanceMeta.itemCounts[guid];
      }
      array.addObject(item);
      return array;
    },
    removedItem: function(array, item, _, instanceMeta) {
      var guid = guidFor(item),
          itemCounts = instanceMeta.itemCounts;

      if (--itemCounts[guid] === 0) {
        array.removeObject(item);
      }
      return array;
    }
  });
  return Ember.arrayComputed.apply(null, args);
};

/**
  Alias for [Ember.computed.uniq](/api/#method_computed_uniq).

  @method computed.union
  @for Ember
  @param {String} propertyKey*
  @return {Ember.ComputedProperty} computes a new array with all the
  unique elements from the dependent array
*/
Ember.computed.union = Ember.computed.uniq;

/**
  A computed property which returns a new array with all the duplicated
  elements from two or more dependeny arrays.

  Example

  ```javascript
  var obj = Ember.Object.createWithMixins({
    adaFriends: ['Charles Babbage', 'John Hobhouse', 'William King', 'Mary Somerville'],
    charlesFriends: ['William King', 'Mary Somerville', 'Ada Lovelace', 'George Peacock'],
    friendsInCommon: Ember.computed.intersect('adaFriends', 'charlesFriends')
  });

  obj.get('friendsInCommon'); // ['William King', 'Mary Somerville']
  ```

  @method computed.intersect
  @for Ember
  @param {String} propertyKey*
  @return {Ember.ComputedProperty} computes a new array with all the
  duplicated elements from the dependent arrays
*/
Ember.computed.intersect = function () {
  var getDependentKeyGuids = function (changeMeta) {
    return map(changeMeta.property._dependentKeys, function (dependentKey) {
      return guidFor(dependentKey);
    });
  };

  var args = a_slice.call(arguments);
  args.push({
    initialize: function (array, changeMeta, instanceMeta) {
      instanceMeta.itemCounts = {};
    },

    addedItem: function(array, item, changeMeta, instanceMeta) {
      var itemGuid = guidFor(item),
          dependentGuids = getDependentKeyGuids(changeMeta),
          dependentGuid = guidFor(changeMeta.arrayChanged),
          numberOfDependentArrays = changeMeta.property._dependentKeys.length,
          itemCounts = instanceMeta.itemCounts;

      if (!itemCounts[itemGuid]) { itemCounts[itemGuid] = {}; }
      if (itemCounts[itemGuid][dependentGuid] === undefined) { itemCounts[itemGuid][dependentGuid] = 0; }

      if (++itemCounts[itemGuid][dependentGuid] === 1 &&
          numberOfDependentArrays === Ember.keys(itemCounts[itemGuid]).length) {

        array.addObject(item);
      }
      return array;
    },
    removedItem: function(array, item, changeMeta, instanceMeta) {
      var itemGuid = guidFor(item),
          dependentGuids = getDependentKeyGuids(changeMeta),
          dependentGuid = guidFor(changeMeta.arrayChanged),
          numberOfDependentArrays = changeMeta.property._dependentKeys.length,
          numberOfArraysItemAppearsIn,
          itemCounts = instanceMeta.itemCounts;

      if (itemCounts[itemGuid][dependentGuid] === undefined) { itemCounts[itemGuid][dependentGuid] = 0; }
      if (--itemCounts[itemGuid][dependentGuid] === 0) {
        delete itemCounts[itemGuid][dependentGuid];
        numberOfArraysItemAppearsIn = Ember.keys(itemCounts[itemGuid]).length;

        if (numberOfArraysItemAppearsIn === 0) {
          delete itemCounts[itemGuid];
        }
        array.removeObject(item);
      }
      return array;
    }
  });
  return Ember.arrayComputed.apply(null, args);
};

/**
  A computed property which returns a new array with all the
  properties from the first dependent array that are not in the second
  dependent array.

  Example

  ```javascript
  App.Hampster = Ember.Object.extend({
    likes: ['banana', 'grape', 'kale'],
    wants: Ember.computed.setDiff('likes', 'fruits')
  });

  var hampster = App.Hampster.create({fruits: [
    'grape',
    'kale',
  ]});
  hampster.get('wants'); // ['banana']
  ```

  @method computed.setDiff
  @for Ember
  @param {String} setAProperty
  @param {String} setBProperty
  @return {Ember.ComputedProperty} computes a new array with all the
  items from the first dependent array that are not in the second
  dependent array
*/
Ember.computed.setDiff = function (setAProperty, setBProperty) {
  if (arguments.length !== 2) {
    throw new Error("setDiff requires exactly two dependent arrays.");
  }
  return Ember.arrayComputed.call(null, setAProperty, setBProperty, {
    addedItem: function (array, item, changeMeta, instanceMeta) {
      var setA = get(this, setAProperty),
          setB = get(this, setBProperty);

      if (changeMeta.arrayChanged === setA) {
        if (!setB.contains(item)) {
          array.addObject(item);
        }
      } else {
        array.removeObject(item);
      }
      return array;
    },

    removedItem: function (array, item, changeMeta, instanceMeta) {
      var setA = get(this, setAProperty),
          setB = get(this, setBProperty);

      if (changeMeta.arrayChanged === setB) {
        if (setA.contains(item)) {
          array.addObject(item);
        }
      } else {
        array.removeObject(item);
      }
      return array;
    }
  });
};

function binarySearch(array, item, low, high) {
  var mid, midItem, res, guidMid, guidItem;

  if (arguments.length < 4) { high = get(array, 'length'); }
  if (arguments.length < 3) { low = 0; }

  if (low === high) {
    return low;
  }

  mid = low + Math.floor((high - low) / 2);
  midItem = array.objectAt(mid);

  guidMid = _guidFor(midItem);
  guidItem = _guidFor(item);

  if (guidMid === guidItem) {
    return mid;
  }

  res = this.order(midItem, item);
  if (res === 0) {
    res = guidMid < guidItem ? -1 : 1;
  }


  if (res < 0) {
    return this.binarySearch(array, item, mid+1, high);
  } else if (res > 0) {
    return this.binarySearch(array, item, low, mid);
  }

  return mid;

  function _guidFor(item) {
    if (Ember.ObjectProxy.detectInstance(item)) {
      return guidFor(get(item, 'content'));
    }
    return guidFor(item);
  }
}

/**
  A computed property which returns a new array with all the
  properties from the first dependent array sorted based on a property
  or sort function.

  The callback method you provide should have the following signature:

  ```javascript
  function(itemA, itemB);
  ```

  - `itemA` the first item to compare.
  - `itemB` the second item to compare.

  This function should return `-1` when `itemA` should come before
  `itemB`. It should return `1` when `itemA` should come after
  `itemB`. If the `itemA` and `itemB` are equal this function should return `0`.

  Example

  ```javascript
  var ToDoList = Ember.Object.extend({
    todosSorting: ['name'],
    sortedTodos: Ember.computed.sort('todos', 'todosSorting'),
    priorityTodos: Ember.computed.sort('todos', function(a, b){
      if (a.priority > b.priority) {
        return 1;
      } else if (a.priority < b.priority) {
        return -1;
      }
      return 0;
    }),
  });
  var todoList = ToDoList.create({todos: [
    {name: 'Unit Test', priority: 2},
    {name: 'Documentation', priority: 3},
    {name: 'Release', priority: 1}
  ]});

  todoList.get('sortedTodos'); // [{name:'Documentation', priority:3}, {name:'Release', priority:1}, {name:'Unit Test', priority:2}]
  todoList.get('priroityTodos'); // [{name:'Release', priority:1}, {name:'Unit Test', priority:2}, {name:'Documentation', priority:3}]
  ```

  @method computed.sort
  @for Ember
  @param {String} dependentKey
  @param {String or Function} sortDefinition a dependent key to an
  array of sort properties or a function to use when sorting
  @return {Ember.ComputedProperty} computes a new sorted array based
  on the sort property array or callback function
*/
Ember.computed.sort = function (itemsKey, sortDefinition) {
  Ember.assert("Ember.computed.sort requires two arguments: an array key to sort and either a sort properties key or sort function", arguments.length === 2);

  var initFn, sortPropertiesKey;

  if (typeof sortDefinition === 'function') {
    initFn = function (array, changeMeta, instanceMeta) {
      instanceMeta.order = sortDefinition;
      instanceMeta.binarySearch = binarySearch;
    };
  } else {
    sortPropertiesKey = sortDefinition;
    initFn = function (array, changeMeta, instanceMeta) {
      function setupSortProperties() {
        var sortPropertyDefinitions = get(this, sortPropertiesKey),
            sortProperty,
            sortProperties = instanceMeta.sortProperties = [],
            sortPropertyAscending = instanceMeta.sortPropertyAscending = {},
            idx,
            asc;

        Ember.assert("Cannot sort: '" + sortPropertiesKey + "' is not an array.", Ember.isArray(sortPropertyDefinitions));

        changeMeta.property.clearItemPropertyKeys(itemsKey);

        forEach(sortPropertyDefinitions, function (sortPropertyDefinition) {
          if ((idx = sortPropertyDefinition.indexOf(':')) !== -1) {
            sortProperty = sortPropertyDefinition.substring(0, idx);
            asc = sortPropertyDefinition.substring(idx+1).toLowerCase() !== 'desc';
          } else {
            sortProperty = sortPropertyDefinition;
            asc = true;
          }

          sortProperties.push(sortProperty);
          sortPropertyAscending[sortProperty] = asc;
          changeMeta.property.itemPropertyKey(itemsKey, sortProperty);
        });

        sortPropertyDefinitions.addObserver('@each', this, updateSortPropertiesOnce);
      }

      function updateSortPropertiesOnce() {
        Ember.run.once(this, updateSortProperties, changeMeta.propertyName);
      }

      function updateSortProperties(propertyName) {
        setupSortProperties.call(this);
        changeMeta.property.recomputeOnce.call(this, propertyName);
      }

      Ember.addObserver(this, sortPropertiesKey, updateSortPropertiesOnce);

      setupSortProperties.call(this);


      instanceMeta.order = function (itemA, itemB) {
        var sortProperty, result, asc;
        for (var i = 0; i < this.sortProperties.length; ++i) {
          sortProperty = this.sortProperties[i];
          result = Ember.compare(get(itemA, sortProperty), get(itemB, sortProperty));

          if (result !== 0) {
            asc = this.sortPropertyAscending[sortProperty];
            return asc ? result : (-1 * result);
          }
        }

        return 0;
      };

      instanceMeta.binarySearch = binarySearch;
    };
  }

  return Ember.arrayComputed.call(null, itemsKey, {
    initialize: initFn,

    addedItem: function (array, item, changeMeta, instanceMeta) {
      var index = instanceMeta.binarySearch(array, item);
      array.insertAt(index, item);
      return array;
    },

    removedItem: function (array, item, changeMeta, instanceMeta) {
      var proxyProperties, index, searchItem;

      if (changeMeta.previousValues) {
        proxyProperties = merge({ content: item }, changeMeta.previousValues);

        searchItem = Ember.ObjectProxy.create(proxyProperties);
     } else {
       searchItem = item;
     }

      index = instanceMeta.binarySearch(array, searchItem);
      array.removeAt(index);
      return array;
    }
  });
};

})();



(function() {
/**
  Expose RSVP implementation
  
  Documentation can be found here: https://github.com/tildeio/rsvp.js/blob/master/README.md

  @class RSVP
  @namespace Ember
  @constructor
*/
Ember.RSVP = requireModule('rsvp');

})();



(function() {
/**
@module ember
@submodule ember-runtime
*/

var STRING_DASHERIZE_REGEXP = (/[ _]/g);
var STRING_DASHERIZE_CACHE = {};
var STRING_DECAMELIZE_REGEXP = (/([a-z])([A-Z])/g);
var STRING_CAMELIZE_REGEXP = (/(\-|_|\.|\s)+(.)?/g);
var STRING_UNDERSCORE_REGEXP_1 = (/([a-z\d])([A-Z]+)/g);
var STRING_UNDERSCORE_REGEXP_2 = (/\-|\s+/g);

/**
  Defines the hash of localized strings for the current language. Used by
  the `Ember.String.loc()` helper. To localize, add string values to this
  hash.

  @property STRINGS
  @for Ember
  @type Hash
*/
Ember.STRINGS = {};

/**
  Defines string helper methods including string formatting and localization.
  Unless `Ember.EXTEND_PROTOTYPES.String` is `false` these methods will also be
  added to the `String.prototype` as well.

  @class String
  @namespace Ember
  @static
*/
Ember.String = {

  /**
    Apply formatting options to the string. This will look for occurrences
    of "%@" in your string and substitute them with the arguments you pass into
    this method. If you want to control the specific order of replacement,
    you can add a number after the key as well to indicate which argument
    you want to insert.

    Ordered insertions are most useful when building loc strings where values
    you need to insert may appear in different orders.

    ```javascript
    "Hello %@ %@".fmt('John', 'Doe');     // "Hello John Doe"
    "Hello %@2, %@1".fmt('John', 'Doe');  // "Hello Doe, John"
    ```

    @method fmt
    @param {String} str The string to format
    @param {Array} formats An array of parameters to interpolate into string.
    @return {String} formatted string
  */
  fmt: function(str, formats) {
    // first, replace any ORDERED replacements.
    var idx  = 0; // the current index for non-numerical replacements
    return str.replace(/%@([0-9]+)?/g, function(s, argIndex) {
      argIndex = (argIndex) ? parseInt(argIndex, 10) - 1 : idx++;
      s = formats[argIndex];
      return (s === null) ? '(null)' : (s === undefined) ? '' : Ember.inspect(s);
    }) ;
  },

  /**
    Formats the passed string, but first looks up the string in the localized
    strings hash. This is a convenient way to localize text. See
    `Ember.String.fmt()` for more information on formatting.

    Note that it is traditional but not required to prefix localized string
    keys with an underscore or other character so you can easily identify
    localized strings.

    ```javascript
    Ember.STRINGS = {
      '_Hello World': 'Bonjour le monde',
      '_Hello %@ %@': 'Bonjour %@ %@'
    };

    Ember.String.loc("_Hello World");  // 'Bonjour le monde';
    Ember.String.loc("_Hello %@ %@", ["John", "Smith"]);  // "Bonjour John Smith";
    ```

    @method loc
    @param {String} str The string to format
    @param {Array} formats Optional array of parameters to interpolate into string.
    @return {String} formatted string
  */
  loc: function(str, formats) {
    str = Ember.STRINGS[str] || str;
    return Ember.String.fmt(str, formats) ;
  },

  /**
    Splits a string into separate units separated by spaces, eliminating any
    empty strings in the process. This is a convenience method for split that
    is mostly useful when applied to the `String.prototype`.

    ```javascript
    Ember.String.w("alpha beta gamma").forEach(function(key) {
      console.log(key);
    });

    // > alpha
    // > beta
    // > gamma
    ```

    @method w
    @param {String} str The string to split
    @return {String} split string
  */
  w: function(str) { return str.split(/\s+/); },

  /**
    Converts a camelized string into all lower case separated by underscores.

    ```javascript
    'innerHTML'.decamelize();           // 'inner_html'
    'action_name'.decamelize();        // 'action_name'
    'css-class-name'.decamelize();     // 'css-class-name'
    'my favorite items'.decamelize();  // 'my favorite items'
    ```

    @method decamelize
    @param {String} str The string to decamelize.
    @return {String} the decamelized string.
  */
  decamelize: function(str) {
    return str.replace(STRING_DECAMELIZE_REGEXP, '$1_$2').toLowerCase();
  },

  /**
    Replaces underscores, spaces, or camelCase with dashes.

    ```javascript
    'innerHTML'.dasherize();          // 'inner-html'
    'action_name'.dasherize();        // 'action-name'
    'css-class-name'.dasherize();     // 'css-class-name'
    'my favorite items'.dasherize();  // 'my-favorite-items'
    ```

    @method dasherize
    @param {String} str The string to dasherize.
    @return {String} the dasherized string.
  */
  dasherize: function(str) {
    var cache = STRING_DASHERIZE_CACHE,
        hit   = cache.hasOwnProperty(str),
        ret;

    if (hit) {
      return cache[str];
    } else {
      ret = Ember.String.decamelize(str).replace(STRING_DASHERIZE_REGEXP,'-');
      cache[str] = ret;
    }

    return ret;
  },

  /**
    Returns the lowerCamelCase form of a string.

    ```javascript
    'innerHTML'.camelize();          // 'innerHTML'
    'action_name'.camelize();        // 'actionName'
    'css-class-name'.camelize();     // 'cssClassName'
    'my favorite items'.camelize();  // 'myFavoriteItems'
    'My Favorite Items'.camelize();  // 'myFavoriteItems'
    ```

    @method camelize
    @param {String} str The string to camelize.
    @return {String} the camelized string.
  */
  camelize: function(str) {
    return str.replace(STRING_CAMELIZE_REGEXP, function(match, separator, chr) {
      return chr ? chr.toUpperCase() : '';
    }).replace(/^([A-Z])/, function(match, separator, chr) {
      return match.toLowerCase();
    });
  },

  /**
    Returns the UpperCamelCase form of a string.

    ```javascript
    'innerHTML'.classify();          // 'InnerHTML'
    'action_name'.classify();        // 'ActionName'
    'css-class-name'.classify();     // 'CssClassName'
    'my favorite items'.classify();  // 'MyFavoriteItems'
    ```

    @method classify
    @param {String} str the string to classify
    @return {String} the classified string
  */
  classify: function(str) {
    var parts = str.split("."),
        out = [];

    for (var i=0, l=parts.length; i<l; i++) {
      var camelized = Ember.String.camelize(parts[i]);
      out.push(camelized.charAt(0).toUpperCase() + camelized.substr(1));
    }

    return out.join(".");
  },

  /**
    More general than decamelize. Returns the lower\_case\_and\_underscored
    form of a string.

    ```javascript
    'innerHTML'.underscore();          // 'inner_html'
    'action_name'.underscore();        // 'action_name'
    'css-class-name'.underscore();     // 'css_class_name'
    'my favorite items'.underscore();  // 'my_favorite_items'
    ```

    @method underscore
    @param {String} str The string to underscore.
    @return {String} the underscored string.
  */
  underscore: function(str) {
    return str.replace(STRING_UNDERSCORE_REGEXP_1, '$1_$2').
      replace(STRING_UNDERSCORE_REGEXP_2, '_').toLowerCase();
  },

  /**
    Returns the Capitalized form of a string

    ```javascript
    'innerHTML'.capitalize()         // 'InnerHTML'
    'action_name'.capitalize()       // 'Action_name'
    'css-class-name'.capitalize()    // 'Css-class-name'
    'my favorite items'.capitalize() // 'My favorite items'
    ```

    @method capitalize
    @param {String} str The string to capitalize.
    @return {String} The capitalized string.
  */
  capitalize: function(str) {
    return str.charAt(0).toUpperCase() + str.substr(1);
  }

};

})();



(function() {
/**
@module ember
@submodule ember-runtime
*/



var fmt = Ember.String.fmt,
    w   = Ember.String.w,
    loc = Ember.String.loc,
    camelize = Ember.String.camelize,
    decamelize = Ember.String.decamelize,
    dasherize = Ember.String.dasherize,
    underscore = Ember.String.underscore,
    capitalize = Ember.String.capitalize,
    classify = Ember.String.classify;

if (Ember.EXTEND_PROTOTYPES === true || Ember.EXTEND_PROTOTYPES.String) {

  /**
    See [Ember.String.fmt](/api/classes/Ember.String.html#method_fmt).

    @method fmt
    @for String
  */
  String.prototype.fmt = function() {
    return fmt(this, arguments);
  };

  /**
    See [Ember.String.w](/api/classes/Ember.String.html#method_w).

    @method w
    @for String
  */
  String.prototype.w = function() {
    return w(this);
  };

  /**
    See [Ember.String.loc](/api/classes/Ember.String.html#method_loc).

    @method loc
    @for String
  */
  String.prototype.loc = function() {
    return loc(this, arguments);
  };

  /**
    See [Ember.String.camelize](/api/classes/Ember.String.html#method_camelize).

    @method camelize
    @for String
  */
  String.prototype.camelize = function() {
    return camelize(this);
  };

  /**
    See [Ember.String.decamelize](/api/classes/Ember.String.html#method_decamelize).

    @method decamelize
    @for String
  */
  String.prototype.decamelize = function() {
    return decamelize(this);
  };

  /**
    See [Ember.String.dasherize](/api/classes/Ember.String.html#method_dasherize).

    @method dasherize
    @for String
  */
  String.prototype.dasherize = function() {
    return dasherize(this);
  };

  /**
    See [Ember.String.underscore](/api/classes/Ember.String.html#method_underscore).

    @method underscore
    @for String
  */
  String.prototype.underscore = function() {
    return underscore(this);
  };

  /**
    See [Ember.String.classify](/api/classes/Ember.String.html#method_classify).

    @method classify
    @for String
  */
  String.prototype.classify = function() {
    return classify(this);
  };

  /**
    See [Ember.String.capitalize](/api/classes/Ember.String.html#method_capitalize).

    @method capitalize
    @for String
  */
  String.prototype.capitalize = function() {
    return capitalize(this);
  };

}


})();



(function() {
/**
@module ember
@submodule ember-runtime
*/

var a_slice = Array.prototype.slice;

if (Ember.EXTEND_PROTOTYPES === true || Ember.EXTEND_PROTOTYPES.Function) {

  /**
    The `property` extension of Javascript's Function prototype is available
    when `Ember.EXTEND_PROTOTYPES` or `Ember.EXTEND_PROTOTYPES.Function` is
    `true`, which is the default.

    Computed properties allow you to treat a function like a property:

    ```javascript
    MyApp.President = Ember.Object.extend({
      firstName: '',
      lastName:  '',

      fullName: function() {
        return this.get('firstName') + ' ' + this.get('lastName');

        // Call this flag to mark the function as a property
      }.property()
    });

    var president = MyApp.President.create({
      firstName: "Barack",
      lastName: "Obama"
    });

    president.get('fullName');    // "Barack Obama"
    ```

    Treating a function like a property is useful because they can work with
    bindings, just like any other property.

    Many computed properties have dependencies on other properties. For
    example, in the above example, the `fullName` property depends on
    `firstName` and `lastName` to determine its value. You can tell Ember
    about these dependencies like this:

    ```javascript
    MyApp.President = Ember.Object.extend({
      firstName: '',
      lastName:  '',

      fullName: function() {
        return this.get('firstName') + ' ' + this.get('lastName');

        // Tell Ember.js that this computed property depends on firstName
        // and lastName
      }.property('firstName', 'lastName')
    });
    ```

    Make sure you list these dependencies so Ember knows when to update
    bindings that connect to a computed property. Changing a dependency
    will not immediately trigger an update of the computed property, but
    will instead clear the cache so that it is updated when the next `get`
    is called on the property.

    See [Ember.ComputedProperty](/api/classes/Ember.ComputedProperty.html), [Ember.computed](/api/#method_computed).

    @method property
    @for Function
  */
  Function.prototype.property = function() {
    var ret = Ember.computed(this);
    return ret.property.apply(ret, arguments);
  };

  /**
    The `observes` extension of Javascript's Function prototype is available
    when `Ember.EXTEND_PROTOTYPES` or `Ember.EXTEND_PROTOTYPES.Function` is
    true, which is the default.

    You can observe property changes simply by adding the `observes`
    call to the end of your method declarations in classes that you write.
    For example:

    ```javascript
    Ember.Object.extend({
      valueObserver: function() {
        // Executes whenever the "value" property changes
      }.observes('value')
    });
    ```

    In the future this method may become asynchronous. If you want to ensure
    synchronous behavior, use `observesImmediately`.

    See `Ember.observer`.

    @method observes
    @for Function
  */
  Function.prototype.observes = function() {
    this.__ember_observes__ = a_slice.call(arguments);
    return this;
  };

  /**
    The `observesImmediately` extension of Javascript's Function prototype is
    available when `Ember.EXTEND_PROTOTYPES` or
    `Ember.EXTEND_PROTOTYPES.Function` is true, which is the default.

    You can observe property changes simply by adding the `observesImmediately`
    call to the end of your method declarations in classes that you write.
    For example:

    ```javascript
    Ember.Object.extend({
      valueObserver: function() {
        // Executes immediately after the "value" property changes
      }.observesImmediately('value')
    });
    ```

    In the future, `observes` may become asynchronous. In this event,
    `observesImmediately` will maintain the synchronous behavior.

    See `Ember.immediateObserver`.

    @method observesImmediately
    @for Function
  */
  Function.prototype.observesImmediately = function() {
    for (var i=0, l=arguments.length; i<l; i++) {
      var arg = arguments[i];
      Ember.assert("Immediate observers must observe internal properties only, not properties on other objects.", arg.indexOf('.') === -1);
    }

    return this.observes.apply(this, arguments);
  };

  /**
    The `observesBefore` extension of Javascript's Function prototype is
    available when `Ember.EXTEND_PROTOTYPES` or
    `Ember.EXTEND_PROTOTYPES.Function` is true, which is the default.

    You can get notified when a property change is about to happen by
    by adding the `observesBefore` call to the end of your method
    declarations in classes that you write. For example:

    ```javascript
    Ember.Object.extend({
      valueObserver: function() {
        // Executes whenever the "value" property is about to change
      }.observesBefore('value')
    });
    ```

    See `Ember.beforeObserver`.

    @method observesBefore
    @for Function
  */
  Function.prototype.observesBefore = function() {
    this.__ember_observesBefore__ = a_slice.call(arguments);
    return this;
  };

  /**
    The `on` extension of Javascript's Function prototype is available
    when `Ember.EXTEND_PROTOTYPES` or `Ember.EXTEND_PROTOTYPES.Function` is
    true, which is the default.

    You can listen for events simply by adding the `on` call to the end of
    your method declarations in classes or mixins that you write. For example:

    ```javascript
    Ember.Mixin.create({
      doSomethingWithElement: function() {
        // Executes whenever the "didInsertElement" event fires
      }.on('didInsertElement')
    });
    ```

    See `Ember.on`.

    @method on
    @for Function
  */
  Function.prototype.on = function() {
    var events = a_slice.call(arguments);
    this.__ember_listens__ = events;
    return this;
  };
}


})();



(function() {

})();



(function() {
/**
@module ember
@submodule ember-runtime
*/


/**
  Implements some standard methods for comparing objects. Add this mixin to
  any class you create that can compare its instances.

  You should implement the `compare()` method.

  @class Comparable
  @namespace Ember
  @since Ember 0.9
*/
Ember.Comparable = Ember.Mixin.create( /** @scope Ember.Comparable.prototype */{

  /**
    Override to return the result of the comparison of the two parameters. The
    compare method should return:

    - `-1` if `a < b`
    - `0` if `a == b`
    - `1` if `a > b`

    Default implementation raises an exception.

    @method compare
    @param a {Object} the first object to compare
    @param b {Object} the second object to compare
    @return {Integer} the result of the comparison
  */
  compare: Ember.required(Function)

});


})();



(function() {
/**
@module ember
@submodule ember-runtime
*/



var get = Ember.get, set = Ember.set;

/**
  Implements some standard methods for copying an object. Add this mixin to
  any object you create that can create a copy of itself. This mixin is
  added automatically to the built-in array.

  You should generally implement the `copy()` method to return a copy of the
  receiver.

  Note that `frozenCopy()` will only work if you also implement
  `Ember.Freezable`.

  @class Copyable
  @namespace Ember
  @since Ember 0.9
*/
Ember.Copyable = Ember.Mixin.create(/** @scope Ember.Copyable.prototype */ {

  /**
    Override to return a copy of the receiver. Default implementation raises
    an exception.

    @method copy
    @param {Boolean} deep if `true`, a deep copy of the object should be made
    @return {Object} copy of receiver
  */
  copy: Ember.required(Function),

  /**
    If the object implements `Ember.Freezable`, then this will return a new
    copy if the object is not frozen and the receiver if the object is frozen.

    Raises an exception if you try to call this method on a object that does
    not support freezing.

    You should use this method whenever you want a copy of a freezable object
    since a freezable object can simply return itself without actually
    consuming more memory.

    @method frozenCopy
    @return {Object} copy of receiver or receiver
  */
  frozenCopy: function() {
    if (Ember.Freezable && Ember.Freezable.detect(this)) {
      return get(this, 'isFrozen') ? this : this.copy().freeze();
    } else {
      throw new Error(Ember.String.fmt("%@ does not support freezing", [this]));
    }
  }
});

})();



(function() {
/**
@module ember
@submodule ember-runtime
*/


var get = Ember.get, set = Ember.set;

/**
  The `Ember.Freezable` mixin implements some basic methods for marking an
  object as frozen. Once an object is frozen it should be read only. No changes
  may be made the internal state of the object.

  ## Enforcement

  To fully support freezing in your subclass, you must include this mixin and
  override any method that might alter any property on the object to instead
  raise an exception. You can check the state of an object by checking the
  `isFrozen` property.

  Although future versions of JavaScript may support language-level freezing
  object objects, that is not the case today. Even if an object is freezable,
  it is still technically possible to modify the object, even though it could
  break other parts of your application that do not expect a frozen object to
  change. It is, therefore, very important that you always respect the
  `isFrozen` property on all freezable objects.

  ## Example Usage

  The example below shows a simple object that implement the `Ember.Freezable`
  protocol.

  ```javascript
  Contact = Ember.Object.extend(Ember.Freezable, {
    firstName: null,
    lastName: null,

    // swaps the names
    swapNames: function() {
      if (this.get('isFrozen')) throw Ember.FROZEN_ERROR;
      var tmp = this.get('firstName');
      this.set('firstName', this.get('lastName'));
      this.set('lastName', tmp);
      return this;
    }

  });

  c = Context.create({ firstName: "John", lastName: "Doe" });
  c.swapNames();  // returns c
  c.freeze();
  c.swapNames();  // EXCEPTION
  ```

  ## Copying

  Usually the `Ember.Freezable` protocol is implemented in cooperation with the
  `Ember.Copyable` protocol, which defines a `frozenCopy()` method that will
  return a frozen object, if the object implements this method as well.

  @class Freezable
  @namespace Ember
  @since Ember 0.9
*/
Ember.Freezable = Ember.Mixin.create(/** @scope Ember.Freezable.prototype */ {

  /**
    Set to `true` when the object is frozen. Use this property to detect
    whether your object is frozen or not.

    @property isFrozen
    @type Boolean
  */
  isFrozen: false,

  /**
    Freezes the object. Once this method has been called the object should
    no longer allow any properties to be edited.

    @method freeze
    @return {Object} receiver
  */
  freeze: function() {
    if (get(this, 'isFrozen')) return this;
    set(this, 'isFrozen', true);
    return this;
  }

});

Ember.FROZEN_ERROR = "Frozen object cannot be modified.";

})();



(function() {
/**
@module ember
@submodule ember-runtime
*/

var forEach = Ember.EnumerableUtils.forEach;

/**
  This mixin defines the API for modifying generic enumerables. These methods
  can be applied to an object regardless of whether it is ordered or
  unordered.

  Note that an Enumerable can change even if it does not implement this mixin.
  For example, a MappedEnumerable cannot be directly modified but if its
  underlying enumerable changes, it will change also.

  ## Adding Objects

  To add an object to an enumerable, use the `addObject()` method. This
  method will only add the object to the enumerable if the object is not
  already present and is of a type supported by the enumerable.

  ```javascript
  set.addObject(contact);
  ```

  ## Removing Objects

  To remove an object from an enumerable, use the `removeObject()` method. This
  will only remove the object if it is present in the enumerable, otherwise
  this method has no effect.

  ```javascript
  set.removeObject(contact);
  ```

  ## Implementing In Your Own Code

  If you are implementing an object and want to support this API, just include
  this mixin in your class and implement the required methods. In your unit
  tests, be sure to apply the Ember.MutableEnumerableTests to your object.

  @class MutableEnumerable
  @namespace Ember
  @uses Ember.Enumerable
*/
Ember.MutableEnumerable = Ember.Mixin.create(Ember.Enumerable, {

  /**
    __Required.__ You must implement this method to apply this mixin.

    Attempts to add the passed object to the receiver if the object is not
    already present in the collection. If the object is present, this method
    has no effect.

    If the passed object is of a type not supported by the receiver,
    then this method should raise an exception.

    @method addObject
    @param {Object} object The object to add to the enumerable.
    @return {Object} the passed object
  */
  addObject: Ember.required(Function),

  /**
    Adds each object in the passed enumerable to the receiver.

    @method addObjects
    @param {Ember.Enumerable} objects the objects to add.
    @return {Object} receiver
  */
  addObjects: function(objects) {
    Ember.beginPropertyChanges(this);
    forEach(objects, function(obj) { this.addObject(obj); }, this);
    Ember.endPropertyChanges(this);
    return this;
  },

  /**
    __Required.__ You must implement this method to apply this mixin.

    Attempts to remove the passed object from the receiver collection if the
    object is present in the collection. If the object is not present,
    this method has no effect.

    If the passed object is of a type not supported by the receiver,
    then this method should raise an exception.

    @method removeObject
    @param {Object} object The object to remove from the enumerable.
    @return {Object} the passed object
  */
  removeObject: Ember.required(Function),


  /**
    Removes each object in the passed enumerable from the receiver.

    @method removeObjects
    @param {Ember.Enumerable} objects the objects to remove
    @return {Object} receiver
  */
  removeObjects: function(objects) {
    Ember.beginPropertyChanges(this);
    forEach(objects, function(obj) { this.removeObject(obj); }, this);
    Ember.endPropertyChanges(this);
    return this;
  }

});

})();



(function() {
/**
@module ember
@submodule ember-runtime
*/
// ..........................................................
// CONSTANTS
//

var OUT_OF_RANGE_EXCEPTION = "Index out of range" ;
var EMPTY = [];

// ..........................................................
// HELPERS
//

var get = Ember.get, set = Ember.set;

/**
  This mixin defines the API for modifying array-like objects. These methods
  can be applied only to a collection that keeps its items in an ordered set.

  Note that an Array can change even if it does not implement this mixin.
  For example, one might implement a SparseArray that cannot be directly
  modified, but if its underlying enumerable changes, it will change also.

  @class MutableArray
  @namespace Ember
  @uses Ember.Array
  @uses Ember.MutableEnumerable
*/
Ember.MutableArray = Ember.Mixin.create(Ember.Array, Ember.MutableEnumerable,/** @scope Ember.MutableArray.prototype */ {

  /**
    __Required.__ You must implement this method to apply this mixin.

    This is one of the primitives you must implement to support `Ember.Array`.
    You should replace amt objects started at idx with the objects in the
    passed array. You should also call `this.enumerableContentDidChange()`

    @method replace
    @param {Number} idx Starting index in the array to replace. If
      idx >= length, then append to the end of the array.
    @param {Number} amt Number of elements that should be removed from
      the array, starting at *idx*.
    @param {Array} objects An array of zero or more objects that should be
      inserted into the array at *idx*
  */
  replace: Ember.required(),

  /**
    Remove all elements from self. This is useful if you
    want to reuse an existing array without having to recreate it.

    ```javascript
    var colors = ["red", "green", "blue"];
    color.length();   //  3
    colors.clear();   //  []
    colors.length();  //  0
    ```

    @method clear
    @return {Ember.Array} An empty Array.
  */
  clear: function () {
    var len = get(this, 'length');
    if (len === 0) return this;
    this.replace(0, len, EMPTY);
    return this;
  },

  /**
    This will use the primitive `replace()` method to insert an object at the
    specified index.

    ```javascript
    var colors = ["red", "green", "blue"];
    colors.insertAt(2, "yellow");  // ["red", "green", "yellow", "blue"]
    colors.insertAt(5, "orange");  // Error: Index out of range
    ```

    @method insertAt
    @param {Number} idx index of insert the object at.
    @param {Object} object object to insert
    @return this
  */
  insertAt: function(idx, object) {
    if (idx > get(this, 'length')) throw new Error(OUT_OF_RANGE_EXCEPTION) ;
    this.replace(idx, 0, [object]) ;
    return this ;
  },

  /**
    Remove an object at the specified index using the `replace()` primitive
    method. You can pass either a single index, or a start and a length.

    If you pass a start and length that is beyond the
    length this method will throw an `OUT_OF_RANGE_EXCEPTION`

    ```javascript
    var colors = ["red", "green", "blue", "yellow", "orange"];
    colors.removeAt(0);     // ["green", "blue", "yellow", "orange"]
    colors.removeAt(2, 2);  // ["green", "blue"]
    colors.removeAt(4, 2);  // Error: Index out of range
    ```

    @method removeAt
    @param {Number} start index, start of range
    @param {Number} len length of passing range
    @return {Object} receiver
  */
  removeAt: function(start, len) {
    if ('number' === typeof start) {

      if ((start < 0) || (start >= get(this, 'length'))) {
        throw new Error(OUT_OF_RANGE_EXCEPTION);
      }

      // fast case
      if (len === undefined) len = 1;
      this.replace(start, len, EMPTY);
    }

    return this ;
  },

  /**
    Push the object onto the end of the array. Works just like `push()` but it
    is KVO-compliant.

    ```javascript
    var colors = ["red", "green", "blue"];
    colors.pushObject("black");               // ["red", "green", "blue", "black"]
    colors.pushObject(["yellow", "orange"]);  // ["red", "green", "blue", "black", ["yellow", "orange"]]
    ```

    @method pushObject
    @param {*} obj object to push
    @return {*} the same obj passed as param
  */
  pushObject: function(obj) {
    this.insertAt(get(this, 'length'), obj) ;
    return obj ;
  },

  /**
    Add the objects in the passed numerable to the end of the array. Defers
    notifying observers of the change until all objects are added.

    ```javascript
    var colors = ["red", "green", "blue"];
    colors.pushObjects(["black"]);               // ["red", "green", "blue", "black"]
    colors.pushObjects(["yellow", "orange"]);  // ["red", "green", "blue", "black", "yellow", "orange"]
    ```

    @method pushObjects
    @param {Ember.Enumerable} objects the objects to add
    @return {Ember.Array} receiver
  */
  pushObjects: function(objects) {
    if (!(Ember.Enumerable.detect(objects) || Ember.isArray(objects))) {
      throw new TypeError("Must pass Ember.Enumerable to Ember.MutableArray#pushObjects");
    }
    this.replace(get(this, 'length'), 0, objects);
    return this;
  },

  /**
    Pop object from array or nil if none are left. Works just like `pop()` but
    it is KVO-compliant.

    ```javascript
    var colors = ["red", "green", "blue"];
    colors.popObject();   // "blue"
    console.log(colors);  // ["red", "green"]
    ```

    @method popObject
    @return object
  */
  popObject: function() {
    var len = get(this, 'length') ;
    if (len === 0) return null ;

    var ret = this.objectAt(len-1) ;
    this.removeAt(len-1, 1) ;
    return ret ;
  },

  /**
    Shift an object from start of array or nil if none are left. Works just
    like `shift()` but it is KVO-compliant.

    ```javascript
    var colors = ["red", "green", "blue"];
    colors.shiftObject();  // "red"
    console.log(colors);   // ["green", "blue"]
    ```

    @method shiftObject
    @return object
  */
  shiftObject: function() {
    if (get(this, 'length') === 0) return null ;
    var ret = this.objectAt(0) ;
    this.removeAt(0) ;
    return ret ;
  },

  /**
    Unshift an object to start of array. Works just like `unshift()` but it is
    KVO-compliant.

    ```javascript
    var colors = ["red", "green", "blue"];
    colors.unshiftObject("yellow");             // ["yellow", "red", "green", "blue"]
    colors.unshiftObject(["black", "white"]);   // [["black", "white"], "yellow", "red", "green", "blue"]
    ```

    @method unshiftObject
    @param {*} obj object to unshift
    @return {*} the same obj passed as param
  */
  unshiftObject: function(obj) {
    this.insertAt(0, obj) ;
    return obj ;
  },

  /**
    Adds the named objects to the beginning of the array. Defers notifying
    observers until all objects have been added.

    ```javascript
    var colors = ["red", "green", "blue"];
    colors.unshiftObjects(["black", "white"]);   // ["black", "white", "red", "green", "blue"]
    colors.unshiftObjects("yellow");             // Type Error: 'undefined' is not a function
    ```

    @method unshiftObjects
    @param {Ember.Enumerable} objects the objects to add
    @return {Ember.Array} receiver
  */
  unshiftObjects: function(objects) {
    this.replace(0, 0, objects);
    return this;
  },

  /**
    Reverse objects in the array. Works just like `reverse()` but it is
    KVO-compliant.

    @method reverseObjects
    @return {Ember.Array} receiver
   */
  reverseObjects: function() {
    var len = get(this, 'length');
    if (len === 0) return this;
    var objects = this.toArray().reverse();
    this.replace(0, len, objects);
    return this;
  },

  /**
    Replace all the the receiver's content with content of the argument.
    If argument is an empty array receiver will be cleared.

    ```javascript
    var colors = ["red", "green", "blue"];
    colors.setObjects(["black", "white"]);  // ["black", "white"]
    colors.setObjects([]);                  // []
    ```

    @method setObjects
    @param {Ember.Array} objects array whose content will be used for replacing
        the content of the receiver
    @return {Ember.Array} receiver with the new content
   */
  setObjects: function(objects) {
    if (objects.length === 0) return this.clear();

    var len = get(this, 'length');
    this.replace(0, len, objects);
    return this;
  },

  // ..........................................................
  // IMPLEMENT Ember.MutableEnumerable
  //

  removeObject: function(obj) {
    var loc = get(this, 'length') || 0;
    while(--loc >= 0) {
      var curObject = this.objectAt(loc) ;
      if (curObject === obj) this.removeAt(loc) ;
    }
    return this ;
  },

  addObject: function(obj) {
    if (!this.contains(obj)) this.pushObject(obj);
    return this ;
  }

});

})();



(function() {
/**
@module ember
@submodule ember-runtime
*/

var get = Ember.get,
    set = Ember.set,
    slice = Array.prototype.slice,
    getProperties = Ember.getProperties;

/**
  ## Overview

  This mixin provides properties and property observing functionality, core
  features of the Ember object model.

  Properties and observers allow one object to observe changes to a
  property on another object. This is one of the fundamental ways that
  models, controllers and views communicate with each other in an Ember
  application.

  Any object that has this mixin applied can be used in observer
  operations. That includes `Ember.Object` and most objects you will
  interact with as you write your Ember application.

  Note that you will not generally apply this mixin to classes yourself,
  but you will use the features provided by this module frequently, so it
  is important to understand how to use it.

  ## Using `get()` and `set()`

  Because of Ember's support for bindings and observers, you will always
  access properties using the get method, and set properties using the
  set method. This allows the observing objects to be notified and
  computed properties to be handled properly.

  More documentation about `get` and `set` are below.

  ## Observing Property Changes

  You typically observe property changes simply by adding the `observes`
  call to the end of your method declarations in classes that you write.
  For example:

  ```javascript
  Ember.Object.extend({
    valueObserver: function() {
      // Executes whenever the "value" property changes
    }.observes('value')
  });
  ```

  Although this is the most common way to add an observer, this capability
  is actually built into the `Ember.Object` class on top of two methods
  defined in this mixin: `addObserver` and `removeObserver`. You can use
  these two methods to add and remove observers yourself if you need to
  do so at runtime.

  To add an observer for a property, call:

  ```javascript
  object.addObserver('propertyKey', targetObject, targetAction)
  ```

  This will call the `targetAction` method on the `targetObject` whenever
  the value of the `propertyKey` changes.

  Note that if `propertyKey` is a computed property, the observer will be
  called when any of the property dependencies are changed, even if the
  resulting value of the computed property is unchanged. This is necessary
  because computed properties are not computed until `get` is called.

  @class Observable
  @namespace Ember
*/
Ember.Observable = Ember.Mixin.create({

  /**
    Retrieves the value of a property from the object.

    This method is usually similar to using `object[keyName]` or `object.keyName`,
    however it supports both computed properties and the unknownProperty
    handler.

    Because `get` unifies the syntax for accessing all these kinds
    of properties, it can make many refactorings easier, such as replacing a
    simple property with a computed property, or vice versa.

    ### Computed Properties

    Computed properties are methods defined with the `property` modifier
    declared at the end, such as:

    ```javascript
    fullName: function() {
      return this.getEach('firstName', 'lastName').compact().join(' ');
    }.property('firstName', 'lastName')
    ```

    When you call `get` on a computed property, the function will be
    called and the return value will be returned instead of the function
    itself.

    ### Unknown Properties

    Likewise, if you try to call `get` on a property whose value is
    `undefined`, the `unknownProperty()` method will be called on the object.
    If this method returns any value other than `undefined`, it will be returned
    instead. This allows you to implement "virtual" properties that are
    not defined upfront.

    @method get
    @param {String} keyName The property to retrieve
    @return {Object} The property value or undefined.
  */
  get: function(keyName) {
    return get(this, keyName);
  },

  /**
    To get multiple properties at once, call `getProperties`
    with a list of strings or an array:

    ```javascript
    record.getProperties('firstName', 'lastName', 'zipCode');  // { firstName: 'John', lastName: 'Doe', zipCode: '10011' }
    ```

    is equivalent to:

    ```javascript
    record.getProperties(['firstName', 'lastName', 'zipCode']);  // { firstName: 'John', lastName: 'Doe', zipCode: '10011' }
    ```

    @method getProperties
    @param {String...|Array} list of keys to get
    @return {Hash}
  */
  getProperties: function() {
    return getProperties.apply(null, [this].concat(slice.call(arguments)));
  },

  /**
    Sets the provided key or path to the value.

    This method is generally very similar to calling `object[key] = value` or
    `object.key = value`, except that it provides support for computed
    properties, the `setUnknownProperty()` method and property observers.

    ### Computed Properties

    If you try to set a value on a key that has a computed property handler
    defined (see the `get()` method for an example), then `set()` will call
    that method, passing both the value and key instead of simply changing
    the value itself. This is useful for those times when you need to
    implement a property that is composed of one or more member
    properties.

    ### Unknown Properties

    If you try to set a value on a key that is undefined in the target
    object, then the `setUnknownProperty()` handler will be called instead. This
    gives you an opportunity to implement complex "virtual" properties that
    are not predefined on the object. If `setUnknownProperty()` returns
    undefined, then `set()` will simply set the value on the object.

    ### Property Observers

    In addition to changing the property, `set()` will also register a property
    change with the object. Unless you have placed this call inside of a
    `beginPropertyChanges()` and `endPropertyChanges(),` any "local" observers
    (i.e. observer methods declared on the same object), will be called
    immediately. Any "remote" observers (i.e. observer methods declared on
    another object) will be placed in a queue and called at a later time in a
    coalesced manner.

    ### Chaining

    In addition to property changes, `set()` returns the value of the object
    itself so you can do chaining like this:

    ```javascript
    record.set('firstName', 'Charles').set('lastName', 'Jolley');
    ```

    @method set
    @param {String} keyName The property to set
    @param {Object} value The value to set or `null`.
    @return {Ember.Observable}
  */
  set: function(keyName, value) {
    set(this, keyName, value);
    return this;
  },

  /**
    To set multiple properties at once, call `setProperties`
    with a Hash:

    ```javascript
    record.setProperties({ firstName: 'Charles', lastName: 'Jolley' });
    ```

    @method setProperties
    @param {Hash} hash the hash of keys and values to set
    @return {Ember.Observable}
  */
  setProperties: function(hash) {
    return Ember.setProperties(this, hash);
  },

  /**
    Begins a grouping of property changes.

    You can use this method to group property changes so that notifications
    will not be sent until the changes are finished. If you plan to make a
    large number of changes to an object at one time, you should call this
    method at the beginning of the changes to begin deferring change
    notifications. When you are done making changes, call
    `endPropertyChanges()` to deliver the deferred change notifications and end
    deferring.

    @method beginPropertyChanges
    @return {Ember.Observable}
  */
  beginPropertyChanges: function() {
    Ember.beginPropertyChanges();
    return this;
  },

  /**
    Ends a grouping of property changes.

    You can use this method to group property changes so that notifications
    will not be sent until the changes are finished. If you plan to make a
    large number of changes to an object at one time, you should call
    `beginPropertyChanges()` at the beginning of the changes to defer change
    notifications. When you are done making changes, call this method to
    deliver the deferred change notifications and end deferring.

    @method endPropertyChanges
    @return {Ember.Observable}
  */
  endPropertyChanges: function() {
    Ember.endPropertyChanges();
    return this;
  },

  /**
    Notify the observer system that a property is about to change.

    Sometimes you need to change a value directly or indirectly without
    actually calling `get()` or `set()` on it. In this case, you can use this
    method and `propertyDidChange()` instead. Calling these two methods
    together will notify all observers that the property has potentially
    changed value.

    Note that you must always call `propertyWillChange` and `propertyDidChange`
    as a pair. If you do not, it may get the property change groups out of
    order and cause notifications to be delivered more often than you would
    like.

    @method propertyWillChange
    @param {String} keyName The property key that is about to change.
    @return {Ember.Observable}
  */
  propertyWillChange: function(keyName) {
    Ember.propertyWillChange(this, keyName);
    return this;
  },

  /**
    Notify the observer system that a property has just changed.

    Sometimes you need to change a value directly or indirectly without
    actually calling `get()` or `set()` on it. In this case, you can use this
    method and `propertyWillChange()` instead. Calling these two methods
    together will notify all observers that the property has potentially
    changed value.

    Note that you must always call `propertyWillChange` and `propertyDidChange`
    as a pair. If you do not, it may get the property change groups out of
    order and cause notifications to be delivered more often than you would
    like.

    @method propertyDidChange
    @param {String} keyName The property key that has just changed.
    @return {Ember.Observable}
  */
  propertyDidChange: function(keyName) {
    Ember.propertyDidChange(this, keyName);
    return this;
  },

  /**
    Convenience method to call `propertyWillChange` and `propertyDidChange` in
    succession.

    @method notifyPropertyChange
    @param {String} keyName The property key to be notified about.
    @return {Ember.Observable}
  */
  notifyPropertyChange: function(keyName) {
    this.propertyWillChange(keyName);
    this.propertyDidChange(keyName);
    return this;
  },

  addBeforeObserver: function(key, target, method) {
    Ember.addBeforeObserver(this, key, target, method);
  },

  /**
    Adds an observer on a property.

    This is the core method used to register an observer for a property.

    Once you call this method, any time the key's value is set, your observer
    will be notified. Note that the observers are triggered any time the
    value is set, regardless of whether it has actually changed. Your
    observer should be prepared to handle that.

    You can also pass an optional context parameter to this method. The
    context will be passed to your observer method whenever it is triggered.
    Note that if you add the same target/method pair on a key multiple times
    with different context parameters, your observer will only be called once
    with the last context you passed.

    ### Observer Methods

    Observer methods you pass should generally have the following signature if
    you do not pass a `context` parameter:

    ```javascript
    fooDidChange: function(sender, key, value, rev) { };
    ```

    The sender is the object that changed. The key is the property that
    changes. The value property is currently reserved and unused. The rev
    is the last property revision of the object when it changed, which you can
    use to detect if the key value has really changed or not.

    If you pass a `context` parameter, the context will be passed before the
    revision like so:

    ```javascript
    fooDidChange: function(sender, key, value, context, rev) { };
    ```

    Usually you will not need the value, context or revision parameters at
    the end. In this case, it is common to write observer methods that take
    only a sender and key value as parameters or, if you aren't interested in
    any of these values, to write an observer that has no parameters at all.

    @method addObserver
    @param {String} key The key to observer
    @param {Object} target The target object to invoke
    @param {String|Function} method The method to invoke.
    @return {Ember.Object} self
  */
  addObserver: function(key, target, method) {
    Ember.addObserver(this, key, target, method);
  },

  /**
    Remove an observer you have previously registered on this object. Pass
    the same key, target, and method you passed to `addObserver()` and your
    target will no longer receive notifications.

    @method removeObserver
    @param {String} key The key to observer
    @param {Object} target The target object to invoke
    @param {String|Function} method The method to invoke.
    @return {Ember.Observable} receiver
  */
  removeObserver: function(key, target, method) {
    Ember.removeObserver(this, key, target, method);
  },

  /**
    Returns `true` if the object currently has observers registered for a
    particular key. You can use this method to potentially defer performing
    an expensive action until someone begins observing a particular property
    on the object.

    @method hasObserverFor
    @param {String} key Key to check
    @return {Boolean}
  */
  hasObserverFor: function(key) {
    return Ember.hasListeners(this, key+':change');
  },

  /**
    @deprecated
    @method getPath
    @param {String} path The property path to retrieve
    @return {Object} The property value or undefined.
  */
  getPath: function(path) {
    Ember.deprecate("getPath is deprecated since get now supports paths");
    return this.get(path);
  },

  /**
    @deprecated
    @method setPath
    @param {String} path The path to the property that will be set
    @param {Object} value The value to set or `null`.
    @return {Ember.Observable}
  */
  setPath: function(path, value) {
    Ember.deprecate("setPath is deprecated since set now supports paths");
    return this.set(path, value);
  },

  /**
    Retrieves the value of a property, or a default value in the case that the
    property returns `undefined`.

    ```javascript
    person.getWithDefault('lastName', 'Doe');
    ```

    @method getWithDefault
    @param {String} keyName The name of the property to retrieve
    @param {Object} defaultValue The value to return if the property value is undefined
    @return {Object} The property value or the defaultValue.
  */
  getWithDefault: function(keyName, defaultValue) {
    return Ember.getWithDefault(this, keyName, defaultValue);
  },

  /**
    Set the value of a property to the current value plus some amount.

    ```javascript
    person.incrementProperty('age');
    team.incrementProperty('score', 2);
    ```

    @method incrementProperty
    @param {String} keyName The name of the property to increment
    @param {Number} increment The amount to increment by. Defaults to 1
    @return {Number} The new property value
  */
  incrementProperty: function(keyName, increment) {
    if (Ember.isNone(increment)) { increment = 1; }
    Ember.assert("Must pass a numeric value to incrementProperty", (!isNaN(parseFloat(increment)) && isFinite(increment)));
    set(this, keyName, (get(this, keyName) || 0) + increment);
    return get(this, keyName);
  },

  /**
    Set the value of a property to the current value minus some amount.

    ```javascript
    player.decrementProperty('lives');
    orc.decrementProperty('health', 5);
    ```

    @method decrementProperty
    @param {String} keyName The name of the property to decrement
    @param {Number} decrement The amount to decrement by. Defaults to 1
    @return {Number} The new property value
  */
  decrementProperty: function(keyName, decrement) {
    if (Ember.isNone(decrement)) { decrement = 1; }
    Ember.assert("Must pass a numeric value to decrementProperty", (!isNaN(parseFloat(decrement)) && isFinite(decrement)));
    set(this, keyName, (get(this, keyName) || 0) - decrement);
    return get(this, keyName);
  },

  /**
    Set the value of a boolean property to the opposite of it's
    current value.

    ```javascript
    starship.toggleProperty('warpDriveEngaged');
    ```

    @method toggleProperty
    @param {String} keyName The name of the property to toggle
    @return {Object} The new property value
  */
  toggleProperty: function(keyName) {
    set(this, keyName, !get(this, keyName));
    return get(this, keyName);
  },

  /**
    Returns the cached value of a computed property, if it exists.
    This allows you to inspect the value of a computed property
    without accidentally invoking it if it is intended to be
    generated lazily.

    @method cacheFor
    @param {String} keyName
    @return {Object} The cached value of the computed property, if any
  */
  cacheFor: function(keyName) {
    return Ember.cacheFor(this, keyName);
  },

  // intended for debugging purposes
  observersForKey: function(keyName) {
    return Ember.observersFor(this, keyName);
  }
});

})();



(function() {
/**
@module ember
@submodule ember-runtime
*/

var get = Ember.get, set = Ember.set;

/**
`Ember.TargetActionSupport` is a mixin that can be included in a class
to add a `triggerAction` method with semantics similar to the Handlebars
`{{action}}` helper. In normal Ember usage, the `{{action}}` helper is
usually the best choice. This mixin is most often useful when you are
doing more complex event handling in View objects.

See also `Ember.ViewTargetActionSupport`, which has
view-aware defaults for target and actionContext.

@class TargetActionSupport
@namespace Ember
@extends Ember.Mixin
*/
Ember.TargetActionSupport = Ember.Mixin.create({
  target: null,
  action: null,
  actionContext: null,

  targetObject: Ember.computed(function() {
    var target = get(this, 'target');

    if (Ember.typeOf(target) === "string") {
      var value = get(this, target);
      if (value === undefined) { value = get(Ember.lookup, target); }
      return value;
    } else {
      return target;
    }
  }).property('target'),

  actionContextObject: Ember.computed(function() {
    var actionContext = get(this, 'actionContext');

    if (Ember.typeOf(actionContext) === "string") {
      var value = get(this, actionContext);
      if (value === undefined) { value = get(Ember.lookup, actionContext); }
      return value;
    } else {
      return actionContext;
    }
  }).property('actionContext'),

  /**
  Send an "action" with an "actionContext" to a "target". The action, actionContext
  and target will be retrieved from properties of the object. For example:

  ```javascript
  App.SaveButtonView = Ember.View.extend(Ember.TargetActionSupport, {
    target: Ember.computed.alias('controller'),
    action: 'save',
    actionContext: Ember.computed.alias('context'),
    click: function() {
      this.triggerAction(); // Sends the `save` action, along with the current context
                            // to the current controller
    }
  });
  ```

  The `target`, `action`, and `actionContext` can be provided as properties of
  an optional object argument to `triggerAction` as well.

  ```javascript
  App.SaveButtonView = Ember.View.extend(Ember.TargetActionSupport, {
    click: function() {
      this.triggerAction({
        action: 'save',
        target: this.get('controller'),
        actionContext: this.get('context'),
      }); // Sends the `save` action, along with the current context
          // to the current controller
    }
  });
  ```

  The `actionContext` defaults to the object you mixing `TargetActionSupport` into.
  But `target` and `action` must be specified either as properties or with the argument
  to `triggerAction`, or a combination:

  ```javascript
  App.SaveButtonView = Ember.View.extend(Ember.TargetActionSupport, {
    target: Ember.computed.alias('controller'),
    click: function() {
      this.triggerAction({
        action: 'save'
      }); // Sends the `save` action, along with a reference to `this`,
          // to the current controller
    }
  });
  ```

  @method triggerAction
  @param opts {Hash} (optional, with the optional keys action, target and/or actionContext)
  @return {Boolean} true if the action was sent successfully and did not return false
  */
  triggerAction: function(opts) {
    opts = opts || {};
    var action = opts['action'] || get(this, 'action'),
        target = opts['target'] || get(this, 'targetObject'),
        actionContext = opts['actionContext'] || get(this, 'actionContextObject') || this;

    if (target && action) {
      var ret;

      if (target.send) {
        ret = target.send.apply(target, [action, actionContext]);
      } else {
        Ember.assert("The action '" + action + "' did not exist on " + target, typeof target[action] === 'function');
        ret = target[action].apply(target, [actionContext]);
      }

      if (ret !== false) ret = true;

      return ret;
    } else {
      return false;
    }
  }
});

})();



(function() {
/**
@module ember
@submodule ember-runtime
*/

/**
  This mixin allows for Ember objects to subscribe to and emit events.

  ```javascript
  App.Person = Ember.Object.extend(Ember.Evented, {
    greet: function() {
      // ...
      this.trigger('greet');
    }
  });

  var person = App.Person.create();

  person.on('greet', function() {
    console.log('Our person has greeted');
  });

  person.greet();

  // outputs: 'Our person has greeted'
  ```

  You can also chain multiple event subscriptions:

  ```javascript
  person.on('greet', function() {
    console.log('Our person has greeted');
  }).one('greet', function() {
    console.log('Offer one-time special');
  }).off('event', this, forgetThis);
  ```

  @class Evented
  @namespace Ember
 */
Ember.Evented = Ember.Mixin.create({

  /**
   Subscribes to a named event with given function.

   ```javascript
   person.on('didLoad', function() {
     // fired once the person has loaded
   });
   ```

   An optional target can be passed in as the 2nd argument that will
   be set as the "this" for the callback. This is a good way to give your
   function access to the object triggering the event. When the target
   parameter is used the callback becomes the third argument.

   @method on
   @param {String} name The name of the event
   @param {Object} [target] The "this" binding for the callback
   @param {Function} method The callback to execute
   @return this
  */
  on: function(name, target, method) {
    Ember.addListener(this, name, target, method);
    return this;
  },

  /**
    Subscribes a function to a named event and then cancels the subscription
    after the first time the event is triggered. It is good to use ``one`` when
    you only care about the first time an event has taken place.

    This function takes an optional 2nd argument that will become the "this"
    value for the callback. If this argument is passed then the 3rd argument
    becomes the function.

    @method one
    @param {String} name The name of the event
    @param {Object} [target] The "this" binding for the callback
    @param {Function} method The callback to execute
    @return this
  */
  one: function(name, target, method) {
    if (!method) {
      method = target;
      target = null;
    }

    Ember.addListener(this, name, target, method, true);
    return this;
  },

  /**
    Triggers a named event for the object. Any additional arguments
    will be passed as parameters to the functions that are subscribed to the
    event.

    ```javascript
    person.on('didEat', function(food) {
      console.log('person ate some ' + food);
    });

    person.trigger('didEat', 'broccoli');

    // outputs: person ate some broccoli
    ```
    @method trigger
    @param {String} name The name of the event
    @param {Object...} args Optional arguments to pass on
  */
  trigger: function(name) {
    var args = [], i, l;
    for (i = 1, l = arguments.length; i < l; i++) {
      args.push(arguments[i]);
    }
    Ember.sendEvent(this, name, args);
  },

  /**
    Cancels subscription for given name, target, and method.

    @method off
    @param {String} name The name of the event
    @param {Object} target The target of the subscription
    @param {Function} method The function of the subscription
    @return this
  */
  off: function(name, target, method) {
    Ember.removeListener(this, name, target, method);
    return this;
  },

  /**
    Checks to see if object has any subscriptions for named event.

    @method has
    @param {String} name The name of the event
    @return {Boolean} does the object have a subscription for event
   */
  has: function(name) {
    return Ember.hasListeners(this, name);
  }
});

})();



(function() {
var RSVP = requireModule("rsvp");

RSVP.configure('async', function(callback, promise) {
  Ember.run.schedule('actions', promise, callback, promise);
});

/**
@module ember
@submodule ember-runtime
*/

var get = Ember.get;

/**
  @class Deferred
  @namespace Ember
 */
Ember.DeferredMixin = Ember.Mixin.create({
  /**
    Add handlers to be called when the Deferred object is resolved or rejected.

    @method then
    @param {Function} resolve a callback function to be called when done
    @param {Function} reject  a callback function to be called when failed
  */
  then: function(resolve, reject) {
    var deferred, promise, entity;

    entity = this;
    deferred = get(this, '_deferred');
    promise = deferred.promise;

    function fulfillmentHandler(fulfillment) {
      if (fulfillment === promise) {
        return resolve(entity);
      } else {
        return resolve(fulfillment);
      }
    }

    return promise.then(resolve && fulfillmentHandler, reject);
  },

  /**
    Resolve a Deferred object and call any `doneCallbacks` with the given args.

    @method resolve
  */
  resolve: function(value) {
    var deferred, promise;

    deferred = get(this, '_deferred');
    promise = deferred.promise;

    if (value === this) {
      deferred.resolve(promise);
    } else {
      deferred.resolve(value);
    }
  },

  /**
    Reject a Deferred object and call any `failCallbacks` with the given args.

    @method reject
  */
  reject: function(value) {
    get(this, '_deferred').reject(value);
  },

  _deferred: Ember.computed(function() {
    return RSVP.defer();
  })
});


})();



(function() {
/**
@module ember
@submodule ember-runtime
*/

var get = Ember.get;

/**
  The `Ember.ActionHandler` mixin implements support for moving an `actions`
  property to an `_actions` property at extend time, and adding `_actions`
  to the object's mergedProperties list.

  `Ember.ActionHandler` is used internally by Ember in  `Ember.View`,
  `Ember.Controller`, and `Ember.Route`.

  @class ActionHandler
  @namespace Ember
*/
Ember.ActionHandler = Ember.Mixin.create({
  mergedProperties: ['_actions'],

  /**
    @private

    Moves `actions` to `_actions` at extend time. Note that this currently
    modifies the mixin themselves, which is technically dubious but
    is practically of little consequence. This may change in the future.

    @method willMergeMixin
  */
  willMergeMixin: function(props) {
    if (props.actions && !props._actions) {
      props._actions = Ember.merge(props._actions || {}, props.actions);
      delete props.actions;
    }
  },

  send: function(actionName) {
    var args = [].slice.call(arguments, 1), target;

    if (this._actions && this._actions[actionName]) {
      if (this._actions[actionName].apply(this, args) === true) {
        // handler returned true, so this action will bubble
      } else {
        return;
      }
    } else if (this.deprecatedSend && this.deprecatedSendHandles && this.deprecatedSendHandles(actionName)) {
      if (this.deprecatedSend.apply(this, [].slice.call(arguments)) === true) {
        // handler return true, so this action will bubble
      } else {
        return;
      }
    }

    if (target = get(this, 'target')) {
      Ember.assert("The `target` for " + this + " (" + target + ") does not have a `send` method", typeof target.send === 'function');
      target.send.apply(target, arguments);
    }
  }

});

})();



(function() {
var set = Ember.set, get = Ember.get,
    resolve = Ember.RSVP.resolve,
    rethrow = Ember.RSVP.rethrow,
    not = Ember.computed.not,
    or = Ember.computed.or;

/**
  @module ember
  @submodule ember-runtime
 */

function installPromise(proxy, promise) {
  promise.then(function(value) {
    set(proxy, 'isFulfilled', true);
    set(proxy, 'content', value);

    return value;
  }, function(reason) {
    set(proxy, 'isRejected', true);
    set(proxy, 'reason', reason);
  }).fail(rethrow);
}

/**
  A low level mixin making ObjectProxy, ObjectController or ArrayController's promise aware.

  ```javascript
  var ObjectPromiseController = Ember.ObjectController.extend(Ember.PromiseProxyMixin);

  var controller = ObjectPromiseController.create({
    promise: $.getJSON('/some/remote/data.json')
  });

  controller.then(function(json){
     // the json
  }, function(reason) {
     // the reason why you have no json
  });
  ```

  the controller has bindable attributes which
  track the promises life cycle

  ```javascript
  controller.get('isPending')   //=> true
  controller.get('isSettled')  //=> false
  controller.get('isRejected')  //=> false
  controller.get('isFulfilled') //=> false
  ```

  When the the $.getJSON completes, and the promise is fulfilled
  with json, the life cycle attributes will update accordingly.

  ```javascript
  controller.get('isPending')   //=> false
  controller.get('isSettled')   //=> true
  controller.get('isRejected')  //=> false
  controller.get('isFulfilled') //=> true
  ```

  As the controller is an ObjectController, and the json now its content,
  all the json properties will be available directly from the controller.

  ```javascript
  // Assuming the following json:
  {
    firstName: 'Stefan',
    lastName: 'Penner'
  }

  // both properties will accessible on the controller
  controller.get('firstName') //=> 'Stefan'
  controller.get('lastName')  //=> 'Penner'
  ```

  If the controller is backing a template, the attributes are 
  bindable from within that template
  ```handlebars
  {{#if isPending}}
    loading...
  {{else}}
    firstName: {{firstName}}
    lastName: {{lastName}}
  {{/if}}
  ```
  @class Ember.PromiseProxyMixin
*/
Ember.PromiseProxyMixin = Ember.Mixin.create({
  reason:    null,
  isPending:  not('isSettled').readOnly(),
  isSettled:  or('isRejected', 'isFulfilled').readOnly(),
  isRejected:  false,
  isFulfilled: false,

  promise: Ember.computed(function(key, promise) {
    if (arguments.length === 2) {
      promise = resolve(promise);
      installPromise(this, promise);
      return promise;
    } else {
      throw new Error("PromiseProxy's promise must be set");
    }
  }),

  then: function(fulfill, reject) {
    return get(this, 'promise').then(fulfill, reject);
  }
});


})();



(function() {

})();



(function() {
var get = Ember.get,
    forEach = Ember.EnumerableUtils.forEach,
    RETAIN = 'r',
    INSERT = 'i',
    DELETE = 'd';

/**
  An `Ember.TrackedArray` tracks array operations.  It's useful when you want to
  lazily compute the indexes of items in an array after they've been shifted by
  subsequent operations.

  @class TrackedArray
  @namespace Ember
  @param {array} [items=[]] The array to be tracked.  This is used just to get
  the initial items for the starting state of retain:n.
*/
Ember.TrackedArray = function (items) {
  if (arguments.length < 1) { items = []; }

  var length = get(items, 'length');

  if (length) {
    this._content = [new ArrayOperation(RETAIN, length, items)];
  } else {
    this._content = [];
  }
};

Ember.TrackedArray.RETAIN = RETAIN;
Ember.TrackedArray.INSERT = INSERT;
Ember.TrackedArray.DELETE = DELETE;

Ember.TrackedArray.prototype = {

  /**
    Track that `newItems` were added to the tracked array at `index`.

    @method addItems
    @param index
    @param newItems
  */
  addItems: function (index, newItems) {
    var count = get(newItems, 'length'),
        match = this._findArrayOperation(index),
        arrayOperation = match.operation,
        arrayOperationIndex = match.index,
        arrayOperationRangeStart = match.rangeStart,
        composeIndex,
        splitIndex,
        splitItems,
        splitArrayOperation,
        newArrayOperation;

    newArrayOperation = new ArrayOperation(INSERT, count, newItems);

    if (arrayOperation) {
      if (!match.split) {
        // insert left of arrayOperation
        this._content.splice(arrayOperationIndex, 0, newArrayOperation);
        composeIndex = arrayOperationIndex;
      } else {
        this._split(arrayOperationIndex, index - arrayOperationRangeStart, newArrayOperation);
        composeIndex = arrayOperationIndex + 1;
      }
    } else {
      // insert at end
      this._content.push(newArrayOperation);
      composeIndex = arrayOperationIndex;
    }

    this._composeInsert(composeIndex);
  },

  /**
    Track that `count` items were removed at `index`.

    @method removeItems
    @param index
    @param count
  */
  removeItems: function (index, count) {
    var match = this._findArrayOperation(index),
        arrayOperation = match.operation,
        arrayOperationIndex = match.index,
        arrayOperationRangeStart = match.rangeStart,
        newArrayOperation,
        composeIndex;

    newArrayOperation = new ArrayOperation(DELETE, count);
    if (!match.split) {
      // insert left of arrayOperation
      this._content.splice(arrayOperationIndex, 0, newArrayOperation);
      composeIndex = arrayOperationIndex;
    } else {
      this._split(arrayOperationIndex, index - arrayOperationRangeStart, newArrayOperation);
      composeIndex = arrayOperationIndex + 1;
    }

    return this._composeDelete(composeIndex);
  },

  /**
    Apply all operations, reducing them to retain:n, for `n`, the number of
    items in the array.

    `callback` will be called for each operation and will be passed the following arguments:
    - {array} items The items for the given operation
    - {number} offset The computed offset of the items, ie the index in the
    array of the first item for this operation.
    - {string} operation The type of the operation.  One of
    `Ember.TrackedArray.{RETAIN, DELETE, INSERT}`

    @method apply

    @param {function} callback
  */
  apply: function (callback) {
    var items = [],
        offset = 0;

    forEach(this._content, function (arrayOperation) {
      callback(arrayOperation.items, offset, arrayOperation.operation);

      if (arrayOperation.operation !== DELETE) {
        offset += arrayOperation.count;
        items = items.concat(arrayOperation.items);
      }
    });

    this._content = [new ArrayOperation(RETAIN, items.length, items)];
  },

  /**
    Return an ArrayOperationMatch for the operation that contains the item at `index`.

    @method _findArrayOperation

    @param {number} index the index of the item whose operation information
    should be returned.
    @private
  */
  _findArrayOperation: function (index) {
    var arrayOperationIndex,
        len,
        split = false,
        arrayOperation,
        arrayOperationRangeStart,
        arrayOperationRangeEnd;

    // OPTIMIZE: we could search these faster if we kept a balanced tree.
    // find leftmost arrayOperation to the right of `index`
    for (arrayOperationIndex = arrayOperationRangeStart = 0, len = this._content.length; arrayOperationIndex < len; ++arrayOperationIndex) {
      arrayOperation = this._content[arrayOperationIndex];

      if (arrayOperation.operation === DELETE) { continue; }

      arrayOperationRangeEnd = arrayOperationRangeStart + arrayOperation.count - 1;

      if (index === arrayOperationRangeStart) {
        break;
      } else if (index > arrayOperationRangeStart && index <= arrayOperationRangeEnd) {
        split = true;
        break;
      } else {
        arrayOperationRangeStart = arrayOperationRangeEnd + 1;
      }
    }

    return new ArrayOperationMatch(arrayOperation, arrayOperationIndex, split, arrayOperationRangeStart);
  },

  _split: function (arrayOperationIndex, splitIndex, newArrayOperation) {
    var arrayOperation = this._content[arrayOperationIndex],
        splitItems = arrayOperation.items.slice(splitIndex),
        splitArrayOperation = new ArrayOperation(arrayOperation.operation, splitItems.length, splitItems);

    // truncate LHS
    arrayOperation.count = splitIndex;
    arrayOperation.items = arrayOperation.items.slice(0, splitIndex);

    this._content.splice(arrayOperationIndex + 1, 0, newArrayOperation, splitArrayOperation);
  },

  // TODO: unify _composeInsert, _composeDelete
  // see SubArray for a better implementation.
  _composeInsert: function (index) {
    var newArrayOperation = this._content[index],
        leftArrayOperation = this._content[index-1], // may be undefined
        rightArrayOperation = this._content[index+1], // may be undefined
        leftOp = leftArrayOperation && leftArrayOperation.operation,
        rightOp = rightArrayOperation && rightArrayOperation.operation;

    if (leftOp === INSERT) {
        // merge left
        leftArrayOperation.count += newArrayOperation.count;
        leftArrayOperation.items = leftArrayOperation.items.concat(newArrayOperation.items);

      if (rightOp === INSERT) {
        // also merge right
        leftArrayOperation.count += rightArrayOperation.count;
        leftArrayOperation.items = leftArrayOperation.items.concat(rightArrayOperation.items);
        this._content.splice(index, 2);
      } else {
        // only merge left
        this._content.splice(index, 1);
      }
    } else if (rightOp === INSERT) {
      // merge right
      newArrayOperation.count += rightArrayOperation.count;
      newArrayOperation.items = newArrayOperation.items.concat(rightArrayOperation.items);
      this._content.splice(index + 1, 1);
    }
  },

  _composeDelete: function (index) {
    var arrayOperation = this._content[index],
        deletesToGo = arrayOperation.count,
        leftArrayOperation = this._content[index-1], // may be undefined
        leftOp = leftArrayOperation && leftArrayOperation.operation,
        nextArrayOperation,
        nextOp,
        nextCount,
        removedItems = [];

    if (leftOp === DELETE) {
      arrayOperation = leftArrayOperation;
      index -= 1;
    }

    for (var i = index + 1; deletesToGo > 0; ++i) {
      nextArrayOperation = this._content[i];
      nextOp = nextArrayOperation.operation;
      nextCount = nextArrayOperation.count;

      if (nextOp === DELETE) {
        arrayOperation.count += nextCount;
        continue;
      }

      if (nextCount > deletesToGo) {
        removedItems = removedItems.concat(nextArrayOperation.items.splice(0, deletesToGo));
        nextArrayOperation.count -= deletesToGo;

        // In the case where we truncate the last arrayOperation, we don't need to
        // remove it; also the deletesToGo reduction is not the entirety of
        // nextCount
        i -= 1;
        nextCount = deletesToGo;

        deletesToGo = 0;
      } else {
        removedItems = removedItems.concat(nextArrayOperation.items);
        deletesToGo -= nextCount;
      }

      if (nextOp === INSERT) {
        arrayOperation.count -= nextCount;
      }
    }

    if (arrayOperation.count > 0) {
      this._content.splice(index+1, i-1-index);
    } else {
      // The delete operation can go away; it has merely reduced some other
      // operation, as in D:3 I:4
      this._content.splice(index, 1);
    }

    return removedItems;
  }
};

function ArrayOperation (operation, count, items) {
  this.operation = operation; // RETAIN | INSERT | DELETE
  this.count = count;
  this.items = items;
}

/**
  Internal data structure used to include information when looking up operations
  by item index.

  @method ArrayOperationMatch
  @private
  @property {ArrayOperation} operation
  @property {number} index The index of `operation` in the array of operations.
  @property {boolean} split Whether or not the item index searched for would
  require a split for a new operation type.
  @property {number} rangeStart The index of the first item in the operation,
  with respect to the tracked array.  The index of the last item can be computed
  from `rangeStart` and `operation.count`.
*/
function ArrayOperationMatch(operation, index, split, rangeStart) {
  this.operation = operation;
  this.index = index;
  this.split = split;
  this.rangeStart = rangeStart;
}

})();



(function() {
var get = Ember.get,
    forEach = Ember.EnumerableUtils.forEach,
    RETAIN = 'r',
    FILTER = 'f';

function Operation (type, count) {
  this.type = type;
  this.count = count;
}

/**
  An `Ember.SubArray` tracks an array in a way similar to, but more specialized
  than, `Ember.TrackedArray`.  It is useful for keeping track of the indexes of
  items within a filtered array.

  @class SubArray
  @namespace Ember
*/
Ember.SubArray = function (length) {
  if (arguments.length < 1) { length = 0; }

  if (length > 0) {
    this._operations = [new Operation(RETAIN, length)];
  } else {
    this._operations = [];
  }
};

Ember.SubArray.prototype = {
  /**
    Track that an item was added to the tracked array.

    @method addItem

    @param {number} index The index of the item in the tracked array.
    @param {boolean} match `true` iff the item is included in the subarray.

    @returns {number} The index of the item in the subarray.
  */
  addItem: function(index, match) {
    var returnValue = -1,
        itemType = match ? RETAIN : FILTER,
        self = this;

    this._findOperation(index, function(operation, operationIndex, rangeStart, rangeEnd, seenInSubArray) {
      var newOperation, splitOperation;

      if (itemType === operation.type) {
        ++operation.count;
      } else if (index === rangeStart) {
        // insert to the left of `operation`
        self._operations.splice(operationIndex, 0, new Operation(itemType, 1));
      } else {
        newOperation = new Operation(itemType, 1);
        splitOperation = new Operation(operation.type, rangeEnd - index + 1);
        operation.count = index - rangeStart;

        self._operations.splice(operationIndex + 1, 0, newOperation, splitOperation);
      }

      if (match) {
        if (operation.type === RETAIN) {
          returnValue = seenInSubArray + (index - rangeStart);
        } else {
          returnValue = seenInSubArray;
        }
      }

      self._composeAt(operationIndex);
    }, function(seenInSubArray) {
      self._operations.push(new Operation(itemType, 1));

      if (match) {
        returnValue = seenInSubArray;
      }

      self._composeAt(self._operations.length-1);
    });

    return returnValue;
  },

  /**
    Track that an item was removed from the tracked array.

    @method removeItem

    @param {number} index The index of the item in the tracked array.

    @returns {number} The index of the item in the subarray, or `-1` if the item
    was not in the subarray.
  */
  removeItem: function(index) {
    var returnValue = -1,
        self = this;

    this._findOperation(index, function (operation, operationIndex, rangeStart, rangeEnd, seenInSubArray) {
      if (operation.type === RETAIN) {
        returnValue = seenInSubArray + (index - rangeStart);
      }

      if (operation.count > 1) {
        --operation.count;
      } else {
        self._operations.splice(operationIndex, 1);
        self._composeAt(operationIndex);
      }
    });

    return returnValue;
  },


  _findOperation: function (index, foundCallback, notFoundCallback) {
    var operationIndex,
        len,
        operation,
        rangeStart,
        rangeEnd,
        seenInSubArray = 0;

    // OPTIMIZE: change to balanced tree
    // find leftmost operation to the right of `index`
    for (operationIndex = rangeStart = 0, len = this._operations.length; operationIndex < len; rangeStart = rangeEnd + 1, ++operationIndex) {
      operation = this._operations[operationIndex];
      rangeEnd = rangeStart + operation.count - 1;

      if (index >= rangeStart && index <= rangeEnd) {
        foundCallback(operation, operationIndex, rangeStart, rangeEnd, seenInSubArray);
        return;
      } else if (operation.type === RETAIN) {
        seenInSubArray += operation.count;
      }
    }

    notFoundCallback(seenInSubArray);
  },

  _composeAt: function(index) {
    var op = this._operations[index],
        otherOp;

    if (!op) {
      // Composing out of bounds is a no-op, as when removing the last operation
      // in the list.
      return;
    }

    if (index > 0) {
      otherOp = this._operations[index-1];
      if (otherOp.type === op.type) {
        op.count += otherOp.count;
        this._operations.splice(index-1, 1);
      }
    }

    if (index < this._operations.length-1) {
      otherOp = this._operations[index+1];
      if (otherOp.type === op.type) {
        op.count += otherOp.count;
        this._operations.splice(index+1, 1);
      }
    }
  }
};

})();



(function() {
Ember.Container = requireModule('container');
Ember.Container.set = Ember.set;

})();



(function() {
/**
@module ember
@submodule ember-runtime
*/


// NOTE: this object should never be included directly. Instead use `Ember.Object`.
// We only define this separately so that `Ember.Set` can depend on it.


var set = Ember.set, get = Ember.get,
    o_create = Ember.create,
    o_defineProperty = Ember.platform.defineProperty,
    GUID_KEY = Ember.GUID_KEY,
    guidFor = Ember.guidFor,
    generateGuid = Ember.generateGuid,
    meta = Ember.meta,
    rewatch = Ember.rewatch,
    finishChains = Ember.finishChains,
    sendEvent = Ember.sendEvent,
    destroy = Ember.destroy,
    schedule = Ember.run.schedule,
    Mixin = Ember.Mixin,
    applyMixin = Mixin._apply,
    finishPartial = Mixin.finishPartial,
    reopen = Mixin.prototype.reopen,
    MANDATORY_SETTER = Ember.ENV.MANDATORY_SETTER,
    indexOf = Ember.EnumerableUtils.indexOf;

var undefinedDescriptor = {
  configurable: true,
  writable: true,
  enumerable: false,
  value: undefined
};

function makeCtor() {

  // Note: avoid accessing any properties on the object since it makes the
  // method a lot faster. This is glue code so we want it to be as fast as
  // possible.

  var wasApplied = false, initMixins, initProperties;

  var Class = function() {
    if (!wasApplied) {
      Class.proto(); // prepare prototype...
    }
    o_defineProperty(this, GUID_KEY, undefinedDescriptor);
    o_defineProperty(this, '_super', undefinedDescriptor);
    var m = meta(this), proto = m.proto;
    m.proto = this;
    if (initMixins) {
      // capture locally so we can clear the closed over variable
      var mixins = initMixins;
      initMixins = null;
      this.reopen.apply(this, mixins);
    }
    if (initProperties) {
      // capture locally so we can clear the closed over variable
      var props = initProperties;
      initProperties = null;

      var concatenatedProperties = this.concatenatedProperties;

      for (var i = 0, l = props.length; i < l; i++) {
        var properties = props[i];

        Ember.assert("Ember.Object.create no longer supports mixing in other definitions, use createWithMixins instead.", !(properties instanceof Ember.Mixin));

        for (var keyName in properties) {
          if (!properties.hasOwnProperty(keyName)) { continue; }

          var value = properties[keyName],
              IS_BINDING = Ember.IS_BINDING;

          if (IS_BINDING.test(keyName)) {
            var bindings = m.bindings;
            if (!bindings) {
              bindings = m.bindings = {};
            } else if (!m.hasOwnProperty('bindings')) {
              bindings = m.bindings = o_create(m.bindings);
            }
            bindings[keyName] = value;
          }

          var desc = m.descs[keyName];

          Ember.assert("Ember.Object.create no longer supports defining computed properties.", !(value instanceof Ember.ComputedProperty));
          Ember.assert("Ember.Object.create no longer supports defining methods that call _super.", !(typeof value === 'function' && value.toString().indexOf('._super') !== -1));
          Ember.assert("`actions` must be provided at extend time, not at create time, when Ember.ActionHandler is used (i.e. views, controllers & routes).", !((keyName === 'actions') && Ember.ActionHandler.detect(this)));

          if (concatenatedProperties && indexOf(concatenatedProperties, keyName) >= 0) {
            var baseValue = this[keyName];

            if (baseValue) {
              if ('function' === typeof baseValue.concat) {
                value = baseValue.concat(value);
              } else {
                value = Ember.makeArray(baseValue).concat(value);
              }
            } else {
              value = Ember.makeArray(value);
            }
          }

          if (desc) {
            desc.set(this, keyName, value);
          } else {
            if (typeof this.setUnknownProperty === 'function' && !(keyName in this)) {
              this.setUnknownProperty(keyName, value);
            } else if (MANDATORY_SETTER) {
              Ember.defineProperty(this, keyName, null, value); // setup mandatory setter
            } else {
              this[keyName] = value;
            }
          }
        }
      }
    }
    finishPartial(this, m);
    this.init.apply(this, arguments);
    m.proto = proto;
    finishChains(this);
    sendEvent(this, "init");
  };

  Class.toString = Mixin.prototype.toString;
  Class.willReopen = function() {
    if (wasApplied) {
      Class.PrototypeMixin = Mixin.create(Class.PrototypeMixin);
    }

    wasApplied = false;
  };
  Class._initMixins = function(args) { initMixins = args; };
  Class._initProperties = function(args) { initProperties = args; };

  Class.proto = function() {
    var superclass = Class.superclass;
    if (superclass) { superclass.proto(); }

    if (!wasApplied) {
      wasApplied = true;
      Class.PrototypeMixin.applyPartial(Class.prototype);
      rewatch(Class.prototype);
    }

    return this.prototype;
  };

  return Class;

}

/**
  @class CoreObject
  @namespace Ember
*/
var CoreObject = makeCtor();
CoreObject.toString = function() { return "Ember.CoreObject"; };

CoreObject.PrototypeMixin = Mixin.create({
  reopen: function() {
    applyMixin(this, arguments, true);
    return this;
  },

  /**
    An overridable method called when objects are instantiated. By default,
    does nothing unless it is overridden during class definition.

    Example:

    ```javascript
    App.Person = Ember.Object.extend({
      init: function() {
        this._super();
        alert('Name is ' + this.get('name'));
      }
    });

    var steve = App.Person.create({
      name: "Steve"
    });

    // alerts 'Name is Steve'.
    ```

    NOTE: If you do override `init` for a framework class like `Ember.View` or
    `Ember.ArrayController`, be sure to call `this._super()` in your
    `init` declaration! If you don't, Ember may not have an opportunity to
    do important setup work, and you'll see strange behavior in your
    application.

    @method init
  */
  init: function() {},

  /**
    Defines the properties that will be concatenated from the superclass
    (instead of overridden).

    By default, when you extend an Ember class a property defined in
    the subclass overrides a property with the same name that is defined
    in the superclass. However, there are some cases where it is preferable
    to build up a property's value by combining the superclass' property
    value with the subclass' value. An example of this in use within Ember
    is the `classNames` property of `Ember.View`.

    Here is some sample code showing the difference between a concatenated
    property and a normal one:

    ```javascript
    App.BarView = Ember.View.extend({
      someNonConcatenatedProperty: ['bar'],
      classNames: ['bar']
    });

    App.FooBarView = App.BarView.extend({
      someNonConcatenatedProperty: ['foo'],
      classNames: ['foo'],
    });

    var fooBarView = App.FooBarView.create();
    fooBarView.get('someNonConcatenatedProperty'); // ['foo']
    fooBarView.get('classNames'); // ['ember-view', 'bar', 'foo']
    ```

    This behavior extends to object creation as well. Continuing the
    above example:

    ```javascript
    var view = App.FooBarView.create({
      someNonConcatenatedProperty: ['baz'],
      classNames: ['baz']
    })
    view.get('someNonConcatenatedProperty'); // ['baz']
    view.get('classNames'); // ['ember-view', 'bar', 'foo', 'baz']
    ```
    Adding a single property that is not an array will just add it in the array:

    ```javascript
    var view = App.FooBarView.create({
      classNames: 'baz'
    })
    view.get('classNames'); // ['ember-view', 'bar', 'foo', 'baz']
    ```

    Using the `concatenatedProperties` property, we can tell to Ember that mix
    the content of the properties.

    In `Ember.View` the `classNameBindings` and `attributeBindings` properties
    are also concatenated, in addition to `classNames`.

    This feature is available for you to use throughout the Ember object model,
    although typical app developers are likely to use it infrequently.

    @property concatenatedProperties
    @type Array
    @default null
  */
  concatenatedProperties: null,

  /**
    Destroyed object property flag.

    if this property is `true` the observers and bindings were already
    removed by the effect of calling the `destroy()` method.

    @property isDestroyed
    @default false
  */
  isDestroyed: false,

  /**
    Destruction scheduled flag. The `destroy()` method has been called.

    The object stays intact until the end of the run loop at which point
    the `isDestroyed` flag is set.

    @property isDestroying
    @default false
  */
  isDestroying: false,

  /**
    Destroys an object by setting the `isDestroyed` flag and removing its
    metadata, which effectively destroys observers and bindings.

    If you try to set a property on a destroyed object, an exception will be
    raised.

    Note that destruction is scheduled for the end of the run loop and does not
    happen immediately.  It will set an isDestroying flag immediately.

    @method destroy
    @return {Ember.Object} receiver
  */
  destroy: function() {
    if (this.isDestroying) { return; }
    this.isDestroying = true;

    schedule('actions', this, this.willDestroy);
    schedule('destroy', this, this._scheduledDestroy);
    return this;
  },

  /**
    Override to implement teardown.

    @method willDestroy
   */
  willDestroy: Ember.K,

  /**
    @private

    Invoked by the run loop to actually destroy the object. This is
    scheduled for execution by the `destroy` method.

    @method _scheduledDestroy
  */
  _scheduledDestroy: function() {
    if (this.isDestroyed) { return; }
    destroy(this);
    this.isDestroyed = true;
  },

  bind: function(to, from) {
    if (!(from instanceof Ember.Binding)) { from = Ember.Binding.from(from); }
    from.to(to).connect(this);
    return from;
  },

  /**
    Returns a string representation which attempts to provide more information
    than Javascript's `toString` typically does, in a generic way for all Ember
    objects.

        App.Person = Em.Object.extend()
        person = App.Person.create()
        person.toString() //=> "<App.Person:ember1024>"

    If the object's class is not defined on an Ember namespace, it will
    indicate it is a subclass of the registered superclass:

        Student = App.Person.extend()
        student = Student.create()
        student.toString() //=> "<(subclass of App.Person):ember1025>"

    If the method `toStringExtension` is defined, its return value will be
    included in the output.

        App.Teacher = App.Person.extend({
          toStringExtension: function() {
            return this.get('fullName');
          }
        });
        teacher = App.Teacher.create()
        teacher.toString(); //=> "<App.Teacher:ember1026:Tom Dale>"

    @method toString
    @return {String} string representation
  */
  toString: function toString() {
    var hasToStringExtension = typeof this.toStringExtension === 'function',
        extension = hasToStringExtension ? ":" + this.toStringExtension() : '';
    var ret = '<'+this.constructor.toString()+':'+guidFor(this)+extension+'>';
    this.toString = makeToString(ret);
    return ret;
  }
});

CoreObject.PrototypeMixin.ownerConstructor = CoreObject;

function makeToString(ret) {
  return function() { return ret; };
}

if (Ember.config.overridePrototypeMixin) {
  Ember.config.overridePrototypeMixin(CoreObject.PrototypeMixin);
}

CoreObject.__super__ = null;

var ClassMixin = Mixin.create({

  ClassMixin: Ember.required(),

  PrototypeMixin: Ember.required(),

  isClass: true,

  isMethod: false,

  extend: function() {
    var Class = makeCtor(), proto;
    Class.ClassMixin = Mixin.create(this.ClassMixin);
    Class.PrototypeMixin = Mixin.create(this.PrototypeMixin);

    Class.ClassMixin.ownerConstructor = Class;
    Class.PrototypeMixin.ownerConstructor = Class;

    reopen.apply(Class.PrototypeMixin, arguments);

    Class.superclass = this;
    Class.__super__  = this.prototype;

    proto = Class.prototype = o_create(this.prototype);
    proto.constructor = Class;
    generateGuid(proto, 'ember');
    meta(proto).proto = proto; // this will disable observers on prototype

    Class.ClassMixin.apply(Class);
    return Class;
  },

  /**
    Equivalent to doing `extend(arguments).create()`.
    If possible use the normal `create` method instead.

    @method createWithMixins
    @static
    @param [arguments]*
  */
  createWithMixins: function() {
    var C = this;
    if (arguments.length>0) { this._initMixins(arguments); }
    return new C();
  },

  /**
    Creates an instance of a class. Accepts either no arguments, or an object
    containing values to initialize the newly instantiated object with.

    ```javascript
    App.Person = Ember.Object.extend({
      helloWorld: function() {
        alert("Hi, my name is " + this.get('name'));
      }
    });

    var tom = App.Person.create({
      name: 'Tom Dale'
    });

    tom.helloWorld(); // alerts "Hi, my name is Tom Dale".
    ```

    `create` will call the `init` function if defined during
    `Ember.AnyObject.extend`

    If no arguments are passed to `create`, it will not set values to the new
    instance during initialization:

    ```javascript
    var noName = App.Person.create();
    noName.helloWorld(); // alerts undefined
    ```

    NOTE: For performance reasons, you cannot declare methods or computed
    properties during `create`. You should instead declare methods and computed
    properties when using `extend` or use the `createWithMixins` shorthand.

    @method create
    @static
    @param [arguments]*
  */
  create: function() {
    var C = this;
    if (arguments.length>0) { this._initProperties(arguments); }
    return new C();
  },

  /**
    
    Augments a constructor's prototype with additional
    properties and functions:
    
    ```javascript
    MyObject = Ember.Object.extend({
      name: 'an object'
    });

    o = MyObject.create();
    o.get('name'); // 'an object'

    MyObject.reopen({
      say: function(msg){
        console.log(msg);
      }
    })

    o2 = MyObject.create();
    o2.say("hello"); // logs "hello"

    o.say("goodbye"); // logs "goodbye"
    ```
    
    To add functions and properties to the constructor itself,
    see `reopenClass`

    @method reopen
  */
  reopen: function() {
    this.willReopen();
    reopen.apply(this.PrototypeMixin, arguments);
    return this;
  },

  /**
    Augments a constructor's own properties and functions:
    
    ```javascript
    MyObject = Ember.Object.extend({
      name: 'an object'
    });


    MyObject.reopenClass({
      canBuild: false
    });
    
    MyObject.canBuild; // false
    o = MyObject.create();
    ```
    
    To add functions and properties to instances of
    a constructor by extending the constructor's prototype
    see `reopen`
    
    @method reopenClass
  */  
  reopenClass: function() {
    reopen.apply(this.ClassMixin, arguments);
    applyMixin(this, arguments, false);
    return this;
  },

  detect: function(obj) {
    if ('function' !== typeof obj) { return false; }
    while(obj) {
      if (obj===this) { return true; }
      obj = obj.superclass;
    }
    return false;
  },

  detectInstance: function(obj) {
    return obj instanceof this;
  },

  /**
    In some cases, you may want to annotate computed properties with additional
    metadata about how they function or what values they operate on. For
    example, computed property functions may close over variables that are then
    no longer available for introspection.

    You can pass a hash of these values to a computed property like this:

    ```javascript
    person: function() {
      var personId = this.get('personId');
      return App.Person.create({ id: personId });
    }.property().meta({ type: App.Person })
    ```

    Once you've done this, you can retrieve the values saved to the computed
    property from your class like this:

    ```javascript
    MyClass.metaForProperty('person');
    ```

    This will return the original hash that was passed to `meta()`.

    @method metaForProperty
    @param key {String} property name
  */
  metaForProperty: function(key) {
    var desc = meta(this.proto(), false).descs[key];

    Ember.assert("metaForProperty() could not find a computed property with key '"+key+"'.", !!desc && desc instanceof Ember.ComputedProperty);
    return desc._meta || {};
  },

  /**
    Iterate over each computed property for the class, passing its name
    and any associated metadata (see `metaForProperty`) to the callback.

    @method eachComputedProperty
    @param {Function} callback
    @param {Object} binding
  */
  eachComputedProperty: function(callback, binding) {
    var proto = this.proto(),
        descs = meta(proto).descs,
        empty = {},
        property;

    for (var name in descs) {
      property = descs[name];

      if (property instanceof Ember.ComputedProperty) {
        callback.call(binding || this, name, property._meta || empty);
      }
    }
  }

});

ClassMixin.ownerConstructor = CoreObject;

if (Ember.config.overrideClassMixin) {
  Ember.config.overrideClassMixin(ClassMixin);
}

CoreObject.ClassMixin = ClassMixin;
ClassMixin.apply(CoreObject);

Ember.CoreObject = CoreObject;

})();



(function() {
/**
@module ember
@submodule ember-runtime
*/

/**
  `Ember.Object` is the main base class for all Ember objects. It is a subclass
  of `Ember.CoreObject` with the `Ember.Observable` mixin applied. For details,
  see the documentation for each of these.

  @class Object
  @namespace Ember
  @extends Ember.CoreObject
  @uses Ember.Observable
*/
Ember.Object = Ember.CoreObject.extend(Ember.Observable);
Ember.Object.toString = function() { return "Ember.Object"; };

})();



(function() {
/**
@module ember
@submodule ember-runtime
*/

var get = Ember.get, indexOf = Ember.ArrayPolyfills.indexOf;

/**
  A Namespace is an object usually used to contain other objects or methods
  such as an application or framework. Create a namespace anytime you want
  to define one of these new containers.

  # Example Usage

  ```javascript
  MyFramework = Ember.Namespace.create({
    VERSION: '1.0.0'
  });
  ```

  @class Namespace
  @namespace Ember
  @extends Ember.Object
*/
var Namespace = Ember.Namespace = Ember.Object.extend({
  isNamespace: true,

  init: function() {
    Ember.Namespace.NAMESPACES.push(this);
    Ember.Namespace.PROCESSED = false;
  },

  toString: function() {
    var name = get(this, 'name');
    if (name) { return name; }

    findNamespaces();
    return this[Ember.GUID_KEY+'_name'];
  },

  nameClasses: function() {
    processNamespace([this.toString()], this, {});
  },

  destroy: function() {
    var namespaces = Ember.Namespace.NAMESPACES;
    Ember.lookup[this.toString()] = undefined;
    namespaces.splice(indexOf.call(namespaces, this), 1);
    this._super();
  }
});

Namespace.reopenClass({
  NAMESPACES: [Ember],
  NAMESPACES_BY_ID: {},
  PROCESSED: false,
  processAll: processAllNamespaces,
  byName: function(name) {
    if (!Ember.BOOTED) {
      processAllNamespaces();
    }

    return NAMESPACES_BY_ID[name];
  }
});

var NAMESPACES_BY_ID = Namespace.NAMESPACES_BY_ID;

var hasOwnProp = ({}).hasOwnProperty,
    guidFor = Ember.guidFor;

function processNamespace(paths, root, seen) {
  var idx = paths.length;

  NAMESPACES_BY_ID[paths.join('.')] = root;

  // Loop over all of the keys in the namespace, looking for classes
  for(var key in root) {
    if (!hasOwnProp.call(root, key)) { continue; }
    var obj = root[key];

    // If we are processing the `Ember` namespace, for example, the
    // `paths` will start with `["Ember"]`. Every iteration through
    // the loop will update the **second** element of this list with
    // the key, so processing `Ember.View` will make the Array
    // `['Ember', 'View']`.
    paths[idx] = key;

    // If we have found an unprocessed class
    if (obj && obj.toString === classToString) {
      // Replace the class' `toString` with the dot-separated path
      // and set its `NAME_KEY`
      obj.toString = makeToString(paths.join('.'));
      obj[NAME_KEY] = paths.join('.');

    // Support nested namespaces
    } else if (obj && obj.isNamespace) {
      // Skip aliased namespaces
      if (seen[guidFor(obj)]) { continue; }
      seen[guidFor(obj)] = true;

      // Process the child namespace
      processNamespace(paths, obj, seen);
    }
  }

  paths.length = idx; // cut out last item
}

function findNamespaces() {
  var Namespace = Ember.Namespace, lookup = Ember.lookup, obj, isNamespace;

  if (Namespace.PROCESSED) { return; }

  for (var prop in lookup) {
    // These don't raise exceptions but can cause warnings
    if (prop === "parent" || prop === "top" || prop === "frameElement" || prop === "webkitStorageInfo") { continue; }

    //  get(window.globalStorage, 'isNamespace') would try to read the storage for domain isNamespace and cause exception in Firefox.
    // globalStorage is a storage obsoleted by the WhatWG storage specification. See https://developer.mozilla.org/en/DOM/Storage#globalStorage
    if (prop === "globalStorage" && lookup.StorageList && lookup.globalStorage instanceof lookup.StorageList) { continue; }
    // Unfortunately, some versions of IE don't support window.hasOwnProperty
    if (lookup.hasOwnProperty && !lookup.hasOwnProperty(prop)) { continue; }

    // At times we are not allowed to access certain properties for security reasons.
    // There are also times where even if we can access them, we are not allowed to access their properties.
    try {
      obj = Ember.lookup[prop];
      isNamespace = obj && obj.isNamespace;
    } catch (e) {
      continue;
    }

    if (isNamespace) {
      Ember.deprecate("Namespaces should not begin with lowercase.", /^[A-Z]/.test(prop));
      obj[NAME_KEY] = prop;
    }
  }
}

var NAME_KEY = Ember.NAME_KEY = Ember.GUID_KEY + '_name';

function superClassString(mixin) {
  var superclass = mixin.superclass;
  if (superclass) {
    if (superclass[NAME_KEY]) { return superclass[NAME_KEY]; }
    else { return superClassString(superclass); }
  } else {
    return;
  }
}

function classToString() {
  if (!Ember.BOOTED && !this[NAME_KEY]) {
    processAllNamespaces();
  }

  var ret;

  if (this[NAME_KEY]) {
    ret = this[NAME_KEY];
  } else if (this._toString) {
    ret = this._toString; 
  } else {
    var str = superClassString(this);
    if (str) {
      ret = "(subclass of " + str + ")";
    } else {
      ret = "(unknown mixin)";
    }
    this.toString = makeToString(ret);
  }

  return ret;
}

function processAllNamespaces() {
  var unprocessedNamespaces = !Namespace.PROCESSED,
      unprocessedMixins = Ember.anyUnprocessedMixins;

  if (unprocessedNamespaces) {
    findNamespaces();
    Namespace.PROCESSED = true;
  }

  if (unprocessedNamespaces || unprocessedMixins) {
    var namespaces = Namespace.NAMESPACES, namespace;
    for (var i=0, l=namespaces.length; i<l; i++) {
      namespace = namespaces[i];
      processNamespace([namespace.toString()], namespace, {});
    }

    Ember.anyUnprocessedMixins = false;
  }
}

function makeToString(ret) {
  return function() { return ret; };
}

Ember.Mixin.prototype.toString = classToString;

})();



(function() {
Ember.Application = Ember.Namespace.extend();

})();



(function() {
/**
@module ember
@submodule ember-runtime
*/

var OUT_OF_RANGE_EXCEPTION = "Index out of range";
var EMPTY = [];

var get = Ember.get, set = Ember.set;

/**
  An ArrayProxy wraps any other object that implements `Ember.Array` and/or
  `Ember.MutableArray,` forwarding all requests. This makes it very useful for
  a number of binding use cases or other cases where being able to swap
  out the underlying array is useful.

  A simple example of usage:

  ```javascript
  var pets = ['dog', 'cat', 'fish'];
  var ap = Ember.ArrayProxy.create({ content: Ember.A(pets) });

  ap.get('firstObject');                        // 'dog'
  ap.set('content', ['amoeba', 'paramecium']);
  ap.get('firstObject');                        // 'amoeba'
  ```

  This class can also be useful as a layer to transform the contents of
  an array, as they are accessed. This can be done by overriding
  `objectAtContent`:

  ```javascript
  var pets = ['dog', 'cat', 'fish'];
  var ap = Ember.ArrayProxy.create({
      content: Ember.A(pets),
      objectAtContent: function(idx) {
          return this.get('content').objectAt(idx).toUpperCase();
      }
  });

  ap.get('firstObject'); // . 'DOG'
  ```

  @class ArrayProxy
  @namespace Ember
  @extends Ember.Object
  @uses Ember.MutableArray
*/
Ember.ArrayProxy = Ember.Object.extend(Ember.MutableArray,/** @scope Ember.ArrayProxy.prototype */ {

  /**
    The content array. Must be an object that implements `Ember.Array` and/or
    `Ember.MutableArray.`

    @property content
    @type Ember.Array
  */
  content: null,

  /**
   The array that the proxy pretends to be. In the default `ArrayProxy`
   implementation, this and `content` are the same. Subclasses of `ArrayProxy`
   can override this property to provide things like sorting and filtering.

   @property arrangedContent
  */
  arrangedContent: Ember.computed.alias('content'),

  /**
    Should actually retrieve the object at the specified index from the
    content. You can override this method in subclasses to transform the
    content item to something new.

    This method will only be called if content is non-`null`.

    @method objectAtContent
    @param {Number} idx The index to retrieve.
    @return {Object} the value or undefined if none found
  */
  objectAtContent: function(idx) {
    return get(this, 'arrangedContent').objectAt(idx);
  },

  /**
    Should actually replace the specified objects on the content array.
    You can override this method in subclasses to transform the content item
    into something new.

    This method will only be called if content is non-`null`.

    @method replaceContent
    @param {Number} idx The starting index
    @param {Number} amt The number of items to remove from the content.
    @param {Array} objects Optional array of objects to insert or null if no
      objects.
    @return {void}
  */
  replaceContent: function(idx, amt, objects) {
    get(this, 'content').replace(idx, amt, objects);
  },

  /**
    @private

    Invoked when the content property is about to change. Notifies observers that the
    entire array content will change.

    @method _contentWillChange
  */
  _contentWillChange: Ember.beforeObserver(function() {
    this._teardownContent();
  }, 'content'),

  _teardownContent: function() {
    var content = get(this, 'content');

    if (content) {
      content.removeArrayObserver(this, {
        willChange: 'contentArrayWillChange',
        didChange: 'contentArrayDidChange'
      });
    }
  },

  contentArrayWillChange: Ember.K,
  contentArrayDidChange: Ember.K,

  /**
    @private

    Invoked when the content property changes. Notifies observers that the
    entire array content has changed.

    @method _contentDidChange
  */
  _contentDidChange: Ember.observer(function() {
    var content = get(this, 'content');

    Ember.assert("Can't set ArrayProxy's content to itself", content !== this);

    this._setupContent();
  }, 'content'),

  _setupContent: function() {
    var content = get(this, 'content');

    if (content) {
      content.addArrayObserver(this, {
        willChange: 'contentArrayWillChange',
        didChange: 'contentArrayDidChange'
      });
    }
  },

  _arrangedContentWillChange: Ember.beforeObserver(function() {
    var arrangedContent = get(this, 'arrangedContent'),
        len = arrangedContent ? get(arrangedContent, 'length') : 0;

    this.arrangedContentArrayWillChange(this, 0, len, undefined);
    this.arrangedContentWillChange(this);

    this._teardownArrangedContent(arrangedContent);
  }, 'arrangedContent'),

  _arrangedContentDidChange: Ember.observer(function() {
    var arrangedContent = get(this, 'arrangedContent'),
        len = arrangedContent ? get(arrangedContent, 'length') : 0;

    Ember.assert("Can't set ArrayProxy's content to itself", arrangedContent !== this);

    this._setupArrangedContent();

    this.arrangedContentDidChange(this);
    this.arrangedContentArrayDidChange(this, 0, undefined, len);
  }, 'arrangedContent'),

  _setupArrangedContent: function() {
    var arrangedContent = get(this, 'arrangedContent');

    if (arrangedContent) {
      arrangedContent.addArrayObserver(this, {
        willChange: 'arrangedContentArrayWillChange',
        didChange: 'arrangedContentArrayDidChange'
      });
    }
  },

  _teardownArrangedContent: function() {
    var arrangedContent = get(this, 'arrangedContent');

    if (arrangedContent) {
      arrangedContent.removeArrayObserver(this, {
        willChange: 'arrangedContentArrayWillChange',
        didChange: 'arrangedContentArrayDidChange'
      });
    }
  },

  arrangedContentWillChange: Ember.K,
  arrangedContentDidChange: Ember.K,

  objectAt: function(idx) {
    return get(this, 'content') && this.objectAtContent(idx);
  },

  length: Ember.computed(function() {
    var arrangedContent = get(this, 'arrangedContent');
    return arrangedContent ? get(arrangedContent, 'length') : 0;
    // No dependencies since Enumerable notifies length of change
  }),

  _replace: function(idx, amt, objects) {
    var content = get(this, 'content');
    Ember.assert('The content property of '+ this.constructor + ' should be set before modifying it', content);
    if (content) this.replaceContent(idx, amt, objects);
    return this;
  },

  replace: function() {
    if (get(this, 'arrangedContent') === get(this, 'content')) {
      this._replace.apply(this, arguments);
    } else {
      throw new Ember.Error("Using replace on an arranged ArrayProxy is not allowed.");
    }
  },

  _insertAt: function(idx, object) {
    if (idx > get(this, 'content.length')) throw new Error(OUT_OF_RANGE_EXCEPTION);
    this._replace(idx, 0, [object]);
    return this;
  },

  insertAt: function(idx, object) {
    if (get(this, 'arrangedContent') === get(this, 'content')) {
      return this._insertAt(idx, object);
    } else {
      throw new Ember.Error("Using insertAt on an arranged ArrayProxy is not allowed.");
    }
  },

  removeAt: function(start, len) {
    if ('number' === typeof start) {
      var content = get(this, 'content'),
          arrangedContent = get(this, 'arrangedContent'),
          indices = [], i;

      if ((start < 0) || (start >= get(this, 'length'))) {
        throw new Error(OUT_OF_RANGE_EXCEPTION);
      }

      if (len === undefined) len = 1;

      // Get a list of indices in original content to remove
      for (i=start; i<start+len; i++) {
        // Use arrangedContent here so we avoid confusion with objects transformed by objectAtContent
        indices.push(content.indexOf(arrangedContent.objectAt(i)));
      }

      // Replace in reverse order since indices will change
      indices.sort(function(a,b) { return b - a; });

      Ember.beginPropertyChanges();
      for (i=0; i<indices.length; i++) {
        this._replace(indices[i], 1, EMPTY);
      }
      Ember.endPropertyChanges();
    }

    return this ;
  },

  pushObject: function(obj) {
    this._insertAt(get(this, 'content.length'), obj) ;
    return obj ;
  },

  pushObjects: function(objects) {
    if (!(Ember.Enumerable.detect(objects) || Ember.isArray(objects))) {
      throw new TypeError("Must pass Ember.Enumerable to Ember.MutableArray#pushObjects");
    }
    this._replace(get(this, 'length'), 0, objects);
    return this;
  },

  setObjects: function(objects) {
    if (objects.length === 0) return this.clear();

    var len = get(this, 'length');
    this._replace(0, len, objects);
    return this;
  },

  unshiftObject: function(obj) {
    this._insertAt(0, obj) ;
    return obj ;
  },

  unshiftObjects: function(objects) {
    this._replace(0, 0, objects);
    return this;
  },

  slice: function() {
    var arr = this.toArray();
    return arr.slice.apply(arr, arguments);
  },

  arrangedContentArrayWillChange: function(item, idx, removedCnt, addedCnt) {
    this.arrayContentWillChange(idx, removedCnt, addedCnt);
  },

  arrangedContentArrayDidChange: function(item, idx, removedCnt, addedCnt) {
    this.arrayContentDidChange(idx, removedCnt, addedCnt);
  },

  init: function() {
    this._super();
    this._setupContent();
    this._setupArrangedContent();
  },

  willDestroy: function() {
    this._teardownArrangedContent();
    this._teardownContent();
  }
});

})();



(function() {
/**
@module ember
@submodule ember-runtime
*/

var get = Ember.get,
    set = Ember.set,
    fmt = Ember.String.fmt,
    addBeforeObserver = Ember.addBeforeObserver,
    addObserver = Ember.addObserver,
    removeBeforeObserver = Ember.removeBeforeObserver,
    removeObserver = Ember.removeObserver,
    propertyWillChange = Ember.propertyWillChange,
    propertyDidChange = Ember.propertyDidChange,
    meta = Ember.meta,
    defineProperty = Ember.defineProperty;

function contentPropertyWillChange(content, contentKey) {
  var key = contentKey.slice(8); // remove "content."
  if (key in this) { return; }  // if shadowed in proxy
  propertyWillChange(this, key);
}

function contentPropertyDidChange(content, contentKey) {
  var key = contentKey.slice(8); // remove "content."
  if (key in this) { return; } // if shadowed in proxy
  propertyDidChange(this, key);
}

/**
  `Ember.ObjectProxy` forwards all properties not defined by the proxy itself
  to a proxied `content` object.

  ```javascript
  object = Ember.Object.create({
    name: 'Foo'
  });

  proxy = Ember.ObjectProxy.create({
    content: object
  });

  // Access and change existing properties
  proxy.get('name')          // 'Foo'
  proxy.set('name', 'Bar');
  object.get('name')         // 'Bar'

  // Create new 'description' property on `object`
  proxy.set('description', 'Foo is a whizboo baz');
  object.get('description')  // 'Foo is a whizboo baz'
  ```

  While `content` is unset, setting a property to be delegated will throw an
  Error.

  ```javascript
  proxy = Ember.ObjectProxy.create({
    content: null,
    flag: null
  });
  proxy.set('flag', true);
  proxy.get('flag');         // true
  proxy.get('foo');          // undefined
  proxy.set('foo', 'data');  // throws Error
  ```

  Delegated properties can be bound to and will change when content is updated.

  Computed properties on the proxy itself can depend on delegated properties.

  ```javascript
  ProxyWithComputedProperty = Ember.ObjectProxy.extend({
    fullName: function () {
      var firstName = this.get('firstName'),
          lastName = this.get('lastName');
      if (firstName && lastName) {
        return firstName + ' ' + lastName;
      }
      return firstName || lastName;
    }.property('firstName', 'lastName')
  });

  proxy = ProxyWithComputedProperty.create();

  proxy.get('fullName');  // undefined
  proxy.set('content', {
    firstName: 'Tom', lastName: 'Dale'
  }); // triggers property change for fullName on proxy

  proxy.get('fullName');  // 'Tom Dale'
  ```

  @class ObjectProxy
  @namespace Ember
  @extends Ember.Object
*/
Ember.ObjectProxy = Ember.Object.extend(/** @scope Ember.ObjectProxy.prototype */ {
  /**
    The object whose properties will be forwarded.

    @property content
    @type Ember.Object
    @default null
  */
  content: null,
  _contentDidChange: Ember.observer(function() {
    Ember.assert("Can't set ObjectProxy's content to itself", this.get('content') !== this);
  }, 'content'),

  isTruthy: Ember.computed.bool('content'),

  _debugContainerKey: null,

  willWatchProperty: function (key) {
    var contentKey = 'content.' + key;
    addBeforeObserver(this, contentKey, null, contentPropertyWillChange);
    addObserver(this, contentKey, null, contentPropertyDidChange);
  },

  didUnwatchProperty: function (key) {
    var contentKey = 'content.' + key;
    removeBeforeObserver(this, contentKey, null, contentPropertyWillChange);
    removeObserver(this, contentKey, null, contentPropertyDidChange);
  },

  unknownProperty: function (key) {
    var content = get(this, 'content');
    if (content) {
      return get(content, key);
    }
  },

  setUnknownProperty: function (key, value) {
    var m = meta(this);
    if (m.proto === this) {
      // if marked as prototype then just defineProperty
      // rather than delegate
      defineProperty(this, key, null, value);
      return value;
    }

    var content = get(this, 'content');
    Ember.assert(fmt("Cannot delegate set('%@', %@) to the 'content' property of object proxy %@: its 'content' is undefined.", [key, value, this]), content);
    return set(content, key, value);
  }

});

})();



(function() {
/**
@module ember
@submodule ember-runtime
*/


var set = Ember.set, get = Ember.get, guidFor = Ember.guidFor;
var forEach = Ember.EnumerableUtils.forEach,
    indexOf = Ember.ArrayPolyfills.indexOf;

var EachArray = Ember.Object.extend(Ember.Array, {

  init: function(content, keyName, owner) {
    this._super();
    this._keyName = keyName;
    this._owner   = owner;
    this._content = content;
  },

  objectAt: function(idx) {
    var item = this._content.objectAt(idx);
    return item && get(item, this._keyName);
  },

  length: Ember.computed(function() {
    var content = this._content;
    return content ? get(content, 'length') : 0;
  })

});

var IS_OBSERVER = /^.+:(before|change)$/;

function addObserverForContentKey(content, keyName, proxy, idx, loc) {
  var objects = proxy._objects, guid;
  if (!objects) objects = proxy._objects = {};

  while(--loc>=idx) {
    var item = content.objectAt(loc);
    if (item) {
      Ember.assert('When using @each to observe the array ' + content + ', the array must return an object', Ember.typeOf(item) === 'instance' || Ember.typeOf(item) === 'object');
      Ember.addBeforeObserver(item, keyName, proxy, 'contentKeyWillChange');
      Ember.addObserver(item, keyName, proxy, 'contentKeyDidChange');

      // keep track of the index each item was found at so we can map
      // it back when the obj changes.
      guid = guidFor(item);
      if (!objects[guid]) objects[guid] = [];
      objects[guid].push(loc);
    }
  }
}

function removeObserverForContentKey(content, keyName, proxy, idx, loc) {
  var objects = proxy._objects;
  if (!objects) objects = proxy._objects = {};
  var indicies, guid;

  while(--loc>=idx) {
    var item = content.objectAt(loc);
    if (item) {
      Ember.removeBeforeObserver(item, keyName, proxy, 'contentKeyWillChange');
      Ember.removeObserver(item, keyName, proxy, 'contentKeyDidChange');

      guid = guidFor(item);
      indicies = objects[guid];
      indicies[indexOf.call(indicies, loc)] = null;
    }
  }
}

/**
  This is the object instance returned when you get the `@each` property on an
  array. It uses the unknownProperty handler to automatically create
  EachArray instances for property names.

  @private
  @class EachProxy
  @namespace Ember
  @extends Ember.Object
*/
Ember.EachProxy = Ember.Object.extend({

  init: function(content) {
    this._super();
    this._content = content;
    content.addArrayObserver(this);

    // in case someone is already observing some keys make sure they are
    // added
    forEach(Ember.watchedEvents(this), function(eventName) {
      this.didAddListener(eventName);
    }, this);
  },

  /**
    You can directly access mapped properties by simply requesting them.
    The `unknownProperty` handler will generate an EachArray of each item.

    @method unknownProperty
    @param keyName {String}
    @param value {*}
  */
  unknownProperty: function(keyName, value) {
    var ret;
    ret = new EachArray(this._content, keyName, this);
    Ember.defineProperty(this, keyName, null, ret);
    this.beginObservingContentKey(keyName);
    return ret;
  },

  // ..........................................................
  // ARRAY CHANGES
  // Invokes whenever the content array itself changes.

  arrayWillChange: function(content, idx, removedCnt, addedCnt) {
    var keys = this._keys, key, lim;

    lim = removedCnt>0 ? idx+removedCnt : -1;
    Ember.beginPropertyChanges(this);

    for(key in keys) {
      if (!keys.hasOwnProperty(key)) { continue; }

      if (lim>0) { removeObserverForContentKey(content, key, this, idx, lim); }

      Ember.propertyWillChange(this, key);
    }

    Ember.propertyWillChange(this._content, '@each');
    Ember.endPropertyChanges(this);
  },

  arrayDidChange: function(content, idx, removedCnt, addedCnt) {
    var keys = this._keys, lim;

    lim = addedCnt>0 ? idx+addedCnt : -1;
    Ember.changeProperties(function() {
      for(var key in keys) {
        if (!keys.hasOwnProperty(key)) { continue; }

        if (lim>0) { addObserverForContentKey(content, key, this, idx, lim); }

        Ember.propertyDidChange(this, key);
      }

      Ember.propertyDidChange(this._content, '@each');
    }, this);
  },

  // ..........................................................
  // LISTEN FOR NEW OBSERVERS AND OTHER EVENT LISTENERS
  // Start monitoring keys based on who is listening...

  didAddListener: function(eventName) {
    if (IS_OBSERVER.test(eventName)) {
      this.beginObservingContentKey(eventName.slice(0, -7));
    }
  },

  didRemoveListener: function(eventName) {
    if (IS_OBSERVER.test(eventName)) {
      this.stopObservingContentKey(eventName.slice(0, -7));
    }
  },

  // ..........................................................
  // CONTENT KEY OBSERVING
  // Actual watch keys on the source content.

  beginObservingContentKey: function(keyName) {
    var keys = this._keys;
    if (!keys) keys = this._keys = {};
    if (!keys[keyName]) {
      keys[keyName] = 1;
      var content = this._content,
          len = get(content, 'length');
      addObserverForContentKey(content, keyName, this, 0, len);
    } else {
      keys[keyName]++;
    }
  },

  stopObservingContentKey: function(keyName) {
    var keys = this._keys;
    if (keys && (keys[keyName]>0) && (--keys[keyName]<=0)) {
      var content = this._content,
          len     = get(content, 'length');
      removeObserverForContentKey(content, keyName, this, 0, len);
    }
  },

  contentKeyWillChange: function(obj, keyName) {
    Ember.propertyWillChange(this, keyName);
  },

  contentKeyDidChange: function(obj, keyName) {
    Ember.propertyDidChange(this, keyName);
  }

});



})();



(function() {
/**
@module ember
@submodule ember-runtime
*/


var get = Ember.get, set = Ember.set, replace = Ember.EnumerableUtils._replace;

// Add Ember.Array to Array.prototype. Remove methods with native
// implementations and supply some more optimized versions of generic methods
// because they are so common.
var NativeArray = Ember.Mixin.create(Ember.MutableArray, Ember.Observable, Ember.Copyable, {

  // because length is a built-in property we need to know to just get the
  // original property.
  get: function(key) {
    if (key==='length') return this.length;
    else if ('number' === typeof key) return this[key];
    else return this._super(key);
  },

  objectAt: function(idx) {
    return this[idx];
  },

  // primitive for array support.
  replace: function(idx, amt, objects) {

    if (this.isFrozen) throw Ember.FROZEN_ERROR;

    // if we replaced exactly the same number of items, then pass only the
    // replaced range. Otherwise, pass the full remaining array length
    // since everything has shifted
    var len = objects ? get(objects, 'length') : 0;
    this.arrayContentWillChange(idx, amt, len);

    if (!objects || objects.length === 0) {
      this.splice(idx, amt);
    } else {
      replace(this, idx, amt, objects);
    }

    this.arrayContentDidChange(idx, amt, len);
    return this;
  },

  // If you ask for an unknown property, then try to collect the value
  // from member items.
  unknownProperty: function(key, value) {
    var ret;// = this.reducedProperty(key, value) ;
    if ((value !== undefined) && ret === undefined) {
      ret = this[key] = value;
    }
    return ret ;
  },

  // If browser did not implement indexOf natively, then override with
  // specialized version
  indexOf: function(object, startAt) {
    var idx, len = this.length;

    if (startAt === undefined) startAt = 0;
    else startAt = (startAt < 0) ? Math.ceil(startAt) : Math.floor(startAt);
    if (startAt < 0) startAt += len;

    for(idx=startAt;idx<len;i