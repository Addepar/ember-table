/*jshint evil:true*/

if (typeof document !== "undefined") {
  (function() {
    minispade = {
      root: null,
      modules: {},
      loaded: {},

      globalEval: function(data) {
        if ( data ) {
          // We use execScript on Internet Explorer
          // We use an anonymous function so that context is window
          // rather than jQuery in Firefox
          ( window.execScript || function( data ) {
            window[ "eval" ].call( window, data );
          } )( data );
        }
      },

      require: function(name) {
        var loaded = minispade.loaded[name];
        var mod = minispade.modules[name];

        if (!loaded) {
          if (mod) {
            minispade.loaded[name] = true;

            if (typeof mod === "string") {
              this.globalEval(mod);
            } else {
              mod();
            }
          } else {
            if (minispade.root && name.substr(0,minispade.root.length) !== minispade.root) {
              return minispade.require(minispade.root+name);
            } else {
              throw "The module '" + name + "' could not be found";
            }
          }
        }

        return loaded;
      },

      requireAll: function(regex) {
        for (var module in this.modules) {
          if (!this.modules.hasOwnProperty(module)) { continue; }
          if (regex && !regex.test(module)) { continue; }
          minispade.require(module);
        }
      },

      register: function(name, callback) {
        minispade.modules[name] = callback;
      }
    };
  })();
}
