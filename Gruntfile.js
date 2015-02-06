(function () {
  'use strict';
  module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({ 
      pkg: grunt.file.readJSON('package.json'),
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
            'bootstrap': ['dist/css/bootstrap.css', 'dist/js/bootstrap.min.js'],
            'famous': 'dist/famous-global.js',
            'marked': 'lib/marked.js'
          }
        }
      },
      uglify: { 
        options: {
          mangle: false
        }, 
        my_target: {
          files: { 
            'public/javascripts/gh.min.js': [
              'build/javascripts/**/*.js'
            ]
          }
        }
      },
      watch: {
        files: ['build/javascripts/**/*.js'],
        tasks: ['uglify']
      }
    });

    // Load the plugin that provides the "bower concat" task.
    grunt.loadNpmTasks('grunt-bower-concat');

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    // Load the plugin that provides the "watch" task.
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
  };
}());