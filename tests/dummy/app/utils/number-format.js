// HACK: Used to help format table cells, should be refactored or use a library
// TODO(azirbel): Should be a handlebars helper
export default {
  toCurrency: function(num) {
    var value;
    if (isNaN(num) || !isFinite(num)) {
      return '-';
    }
    value = Math.abs(num).toFixed(2);
    value = value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    return (num < 0 ? '-$' : '$') + value;
  },

  toPercent: function(num) {
    if (isNaN(num) || !isFinite(num)) {
      return '-';
    }
    return Math.abs(num * 100).toFixed(2) + '%';
  }
};
