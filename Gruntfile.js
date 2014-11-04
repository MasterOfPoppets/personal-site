(function () {
  'use strict';
  module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({ 
      pkg: grunt.file.readJSON('package.json'),
      uglify: { 
        options: {
          mangle: false
        }, 
        my_target: {
          files: { 
            'public/javascripts/gh.min.js': [
              'build/javascripts/lib/angular/angular.js',
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

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    // Load the plugin that provides the "watch" task.
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
  };
}());