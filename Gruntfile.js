module.exports = function(grunt) {
    // require('load-grunt-tasks')(grunt);


    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'control.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }
    });

    // grunt.initConfig({
    //     eslint: {
    //         target: ['control.js']
    //     }
    // });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

    //eslint
    // grunt.registerTask('default', ['eslint']);

};