module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      css: ['public/css'],
      fonts: ['public/fonts'],
      js: ['public/js']
    },
    copy: {
      fonts: {
        files: [
          { expand: true, src: ['app/assets/bower_components/font-awesome/fonts/*'], dest: 'public/fonts', flatten: true, filter: 'isFile' }
        ]
      }
    },
    sass: {
      development: {
        files: {
          'public/css/app.css': 'app/assets/scss/app.scss'
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'app/assets/js/*.js']
    },
    uglify: {
      head: {
        files: {
          'public/js/head.js': [
            'app/assets/bower_components/modernizr/modernizr.js'
          ]
        }
      },
      app: {
        files: {
          'public/js/app.js': [
            'app/assets/bower_components/jquery/jquery.js',
            'app/assets/bower_components/underscore/js/underscore.js',
            'app/assets/bower_components/foundation/js/foundation.js',
            'app/assets/js/app.js',
          ]
        }
      }
    },
    watch: {
      scripts: {
        files: ['app/assets/js/**/*.js'],
        tasks: ['jshint', 'clean:js', 'uglify'],
        options: {
          livereload: true,
        },
      },
      css: {
        files: 'app/assets/scss/**/*.scss',
        tasks: ['clean:css', 'sass'],
        options: {
          livereload: true,
        },
      },
    },
  });

  // Load the plugins that provide the tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // register the tasks
  grunt.registerTask('default', ['jshint', 'clean', 'copy', 'sass:development', 'uglify']);

};
