/* jshint node: true */
var Filter = require('broccoli-filter');

function WrapFilter (inputTree) {
  if (!(this instanceof WrapFilter)) {
    return new WrapFilter(inputTree);
  }
  Filter.call(this, inputTree);
  this.extensions = ['js'];
}

module.exports = WrapFilter;
WrapFilter.prototype = Object.create(Filter.prototype);
WrapFilter.prototype.constructor = WrapFilter;

WrapFilter.prototype.processString = function (string) {
  return "(function(){;\n" + string + "})();";
};
