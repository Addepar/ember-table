// ==========================================================================
// Project:   Iverson
// Copyright: ©2012 Addepar Inc. All rights reserved.
// ==========================================================================

/**
  TODO(Peter): this is not working yet
  minispade helper base on https://github.com/wycats/rake-pipeline-web-filters/
  blob/master/lib/rake-pipeline-web-filters/handlebars_filter.rb
  @author: Peter Pong (peter@addepar.com)
*/
module.exports = function(grunt) {
  var _         = require('underscore');
  var path      = require('path');
  var globsync  = require('glob-whatev');
  var log       = grunt.log;

  var generateSingleOutput = function(source, dir) {
    if(source.length === 0){ return '';}
    var name = source.match(/data-template-name=\"([^"\s]*)\"/)[1];
    source = source.replace(/<\s*\/?script[^>]*>/gm, '');
    source = JSON.stringify(source);
    return 'Ember.TEMPLATES["' + name + '"]=Ember.Handlebars.compile(' + source + ');\n';
  };

  var generateOutput = function(inputs, outputDir, inputDir) {
    _.each(inputs, function(input) {
      var outputContent = "";
      var content, sources, output;

      // Get original content
      content = grunt.file.read(input);

      // Get output filename
      output = input.replace(inputDir,outputDir).replace('.handlebars', '.js');

      // Store each template in hash by id
      sources = content.split(/<\/script>/);
      _.each(sources, function(source) {
        outputContent += generateSingleOutput(source.trim(), outputDir);
      });

      // Write output
      grunt.file.write(output, outputContent);
    });
    return true;
  };

  grunt.registerHelper('handlebars_multi_to_multi', function(dir, output) {
    log.writeln('handlebars - from: ' + dir + ' to: ' + output);
    var inputs = globsync.glob(dir + "/**/*.handlebars");
    return generateOutput(inputs, output, dir);
  });

  grunt.registerMultiTask('handlebars', 'run handlebars', function() {
    var input = this.data.src;
    var output = this.data.dest;
    return grunt.helper('handlebars_multi_to_multi', input, output);
  });
};
