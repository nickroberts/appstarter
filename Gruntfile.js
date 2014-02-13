module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        files: {
          'public/css/app.css': 'app/assets/less/app.less'
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'app/assets/js/*.js']
    },
    watch: {
      scripts: {
        files: ['app/assets/js/**/*.js'],
        tasks: ['jshint'],
        options: {
          // livereload: true,
        },
      },
      css: {
        files: 'app/assets/less/**/*.less',
        tasks: ['less'],
        options: {
          // livereload: true,
        },
      },
    },
  });

  // Load the plugins that provide the tasks.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // register the tasks
  grunt.registerTask('default', ['less:development', 'jshint']);

};
