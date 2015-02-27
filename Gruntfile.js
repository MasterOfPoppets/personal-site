(function () {
  'use strict';
  module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
      bower_concat: {
        all: {
          dest: 'public/javascripts/_bower.js',
          cssDest: 'public/stylesheets/_bower.css',
          exclude: [
            'famous',
            'famous-angular',
            'famous-angular-bower'
          ],
          mainFiles: {
            'angular': 'angular.min.js',
            'angular-ui-router': 'release/angular-ui-router.min.js',
            'bootstrap': ['dist/css/bootstrap.css', 'dist/js/bootstrap.min.js'],
            'famous': 'dist/famous-global.js',
            'marked': 'lib/marked.js'
          }
        }
      },
      karma: {
        unit: {
          configFile: 'karma.conf.js',
          background: true
        }
      },
      simplemocha: {
        options: {
          reporter: 'spec',
          ui: 'bdd'
        },
        all: {
          src: ['test/**/*.js', '!test/**/*.spec.js']
        }
      },
      uglify: {
        options: {
          mangle: false
        },
        my_target: {
          files: {
            'public/javascripts/gh.min.js': ['build/javascripts/**/*.js']
          }
        }
      },
      watch: {
        bower: {
          files: ['bower_components/**'],
          tasks: ['bower_concat']
        },
        client_js: {
          files: ['build/javascripts/**/*.js'],
          tasks: ['uglify', 'karma:unit:run']
        },
        client_js_test: {
          files: ['test/**/*.spec.js'],
          tasks: ['karma:unit:run']
        },
        server_js_test: {
          files: ['routes/**/*.js', 'lib/**/*.js', 'test/**/*.js', '!test/**/*.spec.js'],
          tasks: ['simplemocha']
        }
      }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['karma:unit:start', 'watch']);
  };
}());
