/*jslint node: true, nomen: true*/

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
                            'public/javascripts/app.controllers.js',
                            'public/javascripts/app.factories.js',
                            'public/javascripts/app.js'
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