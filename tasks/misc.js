/* grunt common utilities */

module.exports = function(grunt){

  // child_process.exec bridge
  var exec = require('child_process').exec;
  grunt.registerHelper('exec', function(opts, done) {
    var command = opts.cmd + ' ' + opts.args.join(' ');
    exec(command, opts.opts, function(code, stdout, stderr) {
      if(!done){
        return;
      }
      if(code === 0) {
        done(null, stdout, code);
      } else {
        done(code, stderr, code);
      }
    });
  });

  // Clean stuff
  var log = grunt.log;
  function handleCleanResult(target, err, stdout, code, done) {
    if(err){
      log.writeln('Failed to clean ' + target + '.');
      log.writeln(stdout);
      done(false);
    }else{
      log.writeln('Cleaned ' + target);
      done(true);
    }
  }
  grunt.registerHelper('clean', function(target, done) {
    var targetString = (target.join ? target : [target]).join(' ');
    var args = {
      cmd: 'rm',
      args: [ '-rf', targetString ]
    };
    grunt.helper('exec', args, function(err, stdout, code){
      handleCleanResult(target, err, stdout, code, done);
    });
    return true;
  });
  grunt.registerMultiTask('clean', 'Clean built files.', function(){
    var done = this.async();
    var target = this.data;
    grunt.helper('clean', target, done);
    return true;
  });
};
