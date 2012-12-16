var BUILD_TASKS   = 'coffee';

module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      javascripts: {
        dir: 'javascripts'
      }
    },
    watch: {
      files: ['javascripts/*.coffee'],
      tasks: BUILD_TASKS
    }
  });
  grunt.loadTasks('tasks');
  grunt.registerTask('default', BUILD_TASKS);
  grunt.registerTask('w', BUILD_TASKS + ' watch');
};
