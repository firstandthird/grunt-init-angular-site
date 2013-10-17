module.exports = function(grunt) {

  require('load-grunt-config')(grunt);

  grunt.registerTask('scripts', ['jshint', 'ngmin', 'concat:scripts']);
  grunt.registerTask('scripts-prod', ['scripts', 'uglify']);
  grunt.registerTask('styles', ['less']);
  grunt.registerTask('default', ['bower', 'styles', 'scripts', 'clean', 'bytesize']);
  grunt.registerTask('prod', ['bower', 'styles', 'scripts-prod', 'clean', 'bytesize']);
  grunt.registerTask('dev', ['bower', 'connect', 'watch']);
};
