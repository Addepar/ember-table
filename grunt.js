var DIST_FILE     = 'ember-table.js';
var DIST_FILE_MIN = 'ember-table.min.js';
var BUILD_TASKS   = 'coffee handlebars concat';
var JS_FILES      = [
  'build/utils/scrollbar_width_helper.js',
  'build/utils/resize_handler.js',
  'build/utils/style_bindings.js',
  'build/utils/lazy_container_view.js',
  'build/utils/utils.js',
  'build/templates/table_templates.js',
  'build/controllers.js',
  'build/key_event_mixin.js',
  'build/views.js',
];

module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      target: ['build', DIST_FILE, DIST_FILE_MIN]
    },
    coffee: {
      src: {
        dir: 'src/',
        dest: 'build/'
      },
      examples: {
        dir: 'examples'
      }
    },
    concat: {
      dist: {
        src: JS_FILES,
        dest: DIST_FILE,
        separator: ';'
      }
    },
    handlebars: {
      dist: {
        src:  'src/',
        dest: 'build/'
      }
    },
    minispade: {
      ember_chart: {
        src:  'build',
        dest: DIST_FILE,
        main: 'table'
      }
    },
    min: {
      dist: {
        src: [DIST_FILE],
        dest: DIST_FILE_MIN,
        separator: ';'
      }
    },
    watch: {
      files: ['src/**/*.coffee', 'src/**/*.handlebars', 'examples/**/*.coffee'],
      tasks: BUILD_TASKS
    }
  });
  grunt.loadTasks('tasks');
  grunt.registerTask('default', 'clean ' + BUILD_TASKS);
  grunt.registerTask('w', 'clean ' + BUILD_TASKS + ' watch');
};

