# Gruntfile courtesy of trek (https://github.com/trek/)
# ember-todos-with-build-tools-tests-and-other-modern-conveniences
module.exports = (grunt) ->

  # env could be 'dev' or 'prod'
  env = grunt.option("env") or "dev"

  grunt.initConfig
    uglify:
      "lib/ember-table.min.js": "lib/ember-table.js"

    ###
       A simple ordered concatenation strategy.
       This will start at src/main.js and begin
       adding dependencies in the correct order
       writing their string contents into
       'build/ember-table.js'

       Additionally it will wrap them in evals
       with @ sourceURL statements so errors, log
       statements and debugging will reference
       the source files by line number.

       You would set this option to false for
       production.
    ###
    neuter:
      options:
        includeSourceURL: no
      "lib/ember-table.js": "build/src/main.js"

    # Compile coffee before neuter
    coffee:
      srcs:
        options:
          bare: true
        expand: true
        cwd: "src/"
        src: [ "**/*.coffee" ]
        dest: "build/src/"
        ext: ".js"
      examples:
        expand: true
        cwd: "examples/"
        src: [ "**/*.coffee" ]
        dest: "examples/"
        ext: ".js"

    ###
      Watch files for changes.

      Changes in dependencies/ember.js or src javascript
      will trigger the neuter task.

      Changes to any templates will trigger the emberTemplates
      task (which writes a new compiled file into dependencies/)
      and then neuter all the files again.
    ###
    watch:
      src_code:
        files: [ "src/**/*.coffee", "Gruntfile.coffee" ]
        tasks: [ "build_srcs" ]
      examples:
        files: [ "examples/**/*.coffee", "Gruntfile.coffee" ]
        tasks: [ "build_examples" ]
      less:
        files: [ "stylesheets/**/*.less" ]
        tasks: [ "less" ]
      handlebars_templates:
        files: [ "src/**/*.hbs" ]
        tasks: [ "emberTemplates", "neuter" ]

    ###
      Compile LESS files
    ###
    less:
      development:
        options:
          yuicompress: env isnt "dev"
        files:
          "stylesheets/ember-table.css": "stylesheets/ember-table.less"

    ###
      Runs all .html files found in the test/ directory through PhantomJS.
      Prints the report in your terminal.
    ###
    qunit:
      all: [ "test/**/*.html" ]

    ###
      Reads the projects .jshintrc file and applies coding
      standards. Doesn't lint the dependencies or test
      support files.
    ###
    jshint:
      all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js', '!dependencies/*.*', '!test/support/*.*']
      options:
        jshintrc: ".jshintrc"

    ###
      Finds Handlebars templates and precompiles them into functions.
      The provides two benefits:

      1. Templates render much faster
      2. We only need to include the handlebars-runtime microlib
         and not the entire Handlebars parser.

      Files will be written out to dependencies/compiled/templates.js
      which is required within the project files so will end up
      as part of our library.

      The compiled result will be stored in
      Ember.TEMPLATES keyed on their file path (with the 'src/templates' stripped)
    ###
    emberTemplates:
      options:
        templateName: (sourceFile) -> sourceFile.replace(/src\/templates\//, '')
      'build/templates/templates.js': ["src/templates/**/*.hbs"]

    ###
      Find all the <whatever>_test.js files in the test folder.
      These will get loaded via script tags when the task is run.
      This gets run as part of the larger 'test' task registered
      below.
    ###
    build_test_runner_file:
      all: [ "test/**/*_test.js" ]

  grunt.loadNpmTasks "grunt-contrib-uglify"
  grunt.loadNpmTasks "grunt-contrib-jshint"
  grunt.loadNpmTasks "grunt-contrib-qunit"
  grunt.loadNpmTasks "grunt-neuter"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-ember-templates"
  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-less"

  ###
    A task to build the test runner html file that get place in
    /test so it will be picked up by the qunit task. Will
    place a single <script> tag into the body for every file passed to
    its coniguration above in the grunt.initConfig above.
  ###
  grunt.registerMultiTask "build_test_runner_file", "Creates a test runner file.", ->
    tmpl = grunt.file.read("test/support/runner.html.tmpl")
    renderingContext = data:
      files: @filesSrc.map (fileSrc) -> fileSrc.replace "test/", ""
    grunt.file.write "test/runner.html", grunt.template.process(tmpl, renderingContext)

  grunt.registerTask "build_srcs", [ "coffee:srcs", "neuter" ]
  grunt.registerTask "build_examples", [ "coffee:examples" ]
  if env is "dev"
    grunt.registerTask "default", [ "emberTemplates", "less", "build_srcs", "build_examples", "uglify", "watch" ]
  else
    grunt.registerTask "default", [ "emberTemplates", "less", "build_srcs", "uglify" ]
