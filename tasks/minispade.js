/******************************************************************************
 * Project:   Iverson
 * Copyright: ©2012 Addepar Inc. All rights reserved.
 ******************************************************************************/

/**
  minispade helper base on https://github.com/wycats/rake-pipeline-web-filters/
  blob/master/lib/rake-pipeline-web-filters/minispade_filter.rb
  @author: Peter Pong (peter@addepar.com)
*/

module.exports = function(grunt) {
  var _         = require('underscore');
  var globsync  = require('glob-whatev');
  var log       = grunt.log;


  var getInputModuleID = function(input, rootDir) {
    var rootRE = new RegExp('^' + rootDir + '/');
    return input.replace(rootRE, '').replace(/\.js$/,'').replace('/^\//','');
  };

  var parseInputs = function(inputs, rootDir) {
    var modules = {};
    var dependencies = {};
    var outputContent = "";

    _.each(inputs, function(input) {
      var code, contents, matches, module_id;
      //log.writeln('minispade reading - file: ' + input);

      code = grunt.file.read(input);
      matches = code.match(/\s*require\s*\(\s*["']([\w\/\.-]*)["']\s*\);/g);
      matches = _.map(matches || [], function(match) {
        var value = match.match(/^\s*require\s*\(\s*["']([\w\/.-]*)["']\s*\);/)[1];
        //log.writeln('minispade depending on - module_id: ' + value);
        return value;
      });

      module_id = getInputModuleID(input, rootDir);
      modules[module_id] = code.replace(/^\s*require\s*\(\s*/gm, 'minispade.require(');
      dependencies[module_id] = matches;
    });
    return {"modules": modules, "dependencies": dependencies};
  };

  var loadDependency = function(module_id, dependencies, loaded) {
    //log.writeln('minispade parsing - module_id: ' + module_id);
    loaded[module_id] = true;
    _.each(dependencies[module_id], function(dependency) {
      if(!loaded[dependency])
        loadDependency(dependency, dependencies, loaded);
        //log.writeln('minispade loading dependency - module_id: ' + dependency);
    });
    return loaded;
  };

  var writeOutput = function(output, modules, dependencies) {
    var outputContent = "";
    _.each(_.keys(dependencies), function(key) {
      var code = modules[key];
      // if module doesn't exist throw an exception
      if(!code) throw new Error("Cannot find module " + key);
      var contents = JSON.stringify("(function() {" + code + "})();\n//@ sourceURL=/" + key);
      outputContent += "minispade.register('" + key + "', " + contents + ");\n";
    });
    grunt.file.write(output, outputContent);
  };

  grunt.registerHelper('minispade_multi_to_one', function(dir, output, main) {
    var inputs = globsync.glob(dir + "/**/*.js");
    log.writeln('minispade - from: ' + dir + ' to: ' + output);
    var result =  parseInputs(inputs, dir);
    var dependencies = loadDependency(main, result.dependencies, {});
    writeOutput(output, result.modules, dependencies);
    return true;
  });

  grunt.registerMultiTask('minispade', 'run minispade', function() {
    var input = this.data.src;
    var output = this.data.dest;
    var main = this.data.main;
    return grunt.helper('minispade_multi_to_one', input, output, main);
  });
};
