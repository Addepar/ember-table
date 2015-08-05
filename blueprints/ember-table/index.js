module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    // We assume that handlebars, ember, and jquery already exist
    return this.addBowerPackagesToProject([
      {
        // Antiscroll seems to be abandoned by its original authors. We need
        // two things: (1) a version in package.json, and (2) the name of the
        // package must be "antiscroll" to satisfy ember-cli.
        'name': 'antiscroll',
        'source': 'git://github.com/Addepar/antiscroll#e0d1538cf4f3fd61c5bedd6168df86d651f125da',
        'version': 'e0d1538cf4f3fd61c5bedd6168df86d651f125da'
      },
      {
        'name': 'jquery-mousewheel',
        'target': '~3.1.4'
      },
      {
        'name': 'jquery-ui',
        'target': '~1.11.4'
      }
    ]);
  }
};
