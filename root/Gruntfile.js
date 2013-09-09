module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      scripts: [
        'ui/scripts/**/*.js'
      ]
    },

    bower: {
      scripts: {
        dest: 'ui/_dist/bower.js',
        exclude: [
          'jquery'
        ],
        paths: {
        }
      }
    },

    ngmin: {
      scripts: {
        src: [
          'ui/scripts/app.js',
          'ui/modules/**/*.js',
          'ui/scripts/services/*.js',
          'ui/scripts/factories/*.js',
          'ui/scripts/directives/*.js'
        ],
        dest: 'ui/_dist/angular.js'
      }

    },

    concat: {
      scripts: {
        src: [
          'bower_components/jquery/jquery.min.js',
          'ui/_dist/bower.js',
          'ui/_dist/angular.js'
        ],
        dest: 'ui/_dist/build.js'
      }
    },

    uglify: {
      scripts: {
        files: {
          'ui/_dist/build.js': 'ui/_dist/build.js'
        }
      }
    },

    less: {
      styles: {
        files: {
          'ui/_dist/build.css': 'ui/styles/app.less'
        }
      }
    },

    clean: {
      scripts: [
        'ui/_dist/angular.js',
        'ui/_dist/bower.js'
      ]
    },

    watch: {
      grunt: {
        files: [
          'Gruntfile.js'
        ],
        tasks: ['default']
      },
      scripts: {
        files: [
          'ui/modules/**/*.js',
          'ui/scripts/**/*.js'
        ],
        tasks: ['scripts'],
        options: {
          livereload: true
        }
      },
      styles: {
        files: [
          'ui/modules/**/*.less',
          'ui/styles/*.less'
        ],
        tasks: ['styles'],
        options: {
          livereload: true
        }
      },
      views: {
        files: [
          'index.html'
        ],
        options: {
          livereload: true
        }
      }
    },

    connect: {
      server: {
        options: {
          hostname: '*'
        }
      }
    },

    bytesize: {
      ui: {
        src: [
          'ui/_dist/*'
        ]
      }
    }

  });
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('scripts', ['jshint', 'bower', 'ngmin', 'concat:scripts']);
  grunt.registerTask('scripts-prod', ['scripts', 'uglify']);
  grunt.registerTask('styles', ['less']);
  grunt.registerTask('default', ['styles', 'scripts', 'clean', 'bytesize']);
  grunt.registerTask('prod', ['styles', 'scripts-prod', 'clean', 'bytesize']);
  grunt.registerTask('dev', ['connect', 'watch']);
};
