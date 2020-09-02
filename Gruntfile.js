module.exports = function (grunt) {
    grunt.initConfig({
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'compressed'             //Minify css
                },
                files: {                         // Dictionary of files
                    'wwwroot/styles/main.min.css': 'wwwroot/styles/main.scss',       // 'destination': 'source'
                }
            }
        },
        watch: {
            scripts: {
                files: ['wwwroot/styles/**/*.scss'],
                tasks: ['sass'],
                options: {
                    // spawn: false,
                },
            },
        }
    });
    
    //Enable Grunt sass compiler
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.loadNpmTasks('grunt-contrib-watch');

    //Run sass compiler by default
    grunt.registerTask('default', ['watch']);
}