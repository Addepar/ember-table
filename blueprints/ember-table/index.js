module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    // We assume that handlebars, ember, and jquery already exist
    return this.addBowerPackagesToProject([
      {
        // Antiscroll seems to be abandoned by its original authors. We need
        // two things: (1) a version in package.json, and (2) the name of the
        // package must be "antiscroll" to satisfy ember-cli.
        'name': 'git://github.com/azirbel/antiscroll.git#90391fb371c7be769bc32e7287c5271981428356'
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
