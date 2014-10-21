/*jslint node: true, nomen: true*/

(function () {
    'use strict';
    module.exports = function (grunt) {
        // Project configuration.
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            uglify: {
                my_target: {
                    files: {
                        'public/javascripts/gh.min.js': [
                            'build/javascripts/angular-lib/angular.js',
                            'build/javascripts/angular-lib/angular-route.js',
                            'build/javascripts/app.controllers.js',
                            'build/javascripts/app.factories.js',
                            'build/javascripts/app.js'
                        ]
                    }
                }
            }
        });

        // Load the plugin that provides the "uglify" task.
        grunt.loadNpmTasks('grunt-contrib-uglify');

        // Default task(s).
        grunt.registerTask('default', ['uglify']);
    };
}());