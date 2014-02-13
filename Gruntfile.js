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
    uglify: {
      app: {
        files: {
          'public/js/app.js': [
            'app/assets/bower_components/jquery/jquery.js',
            'app/assets/bower_components/underscore/js/underscore.js'
          ]
        }
      }
    },
    watch: {
      scripts: {
        files: ['app/assets/js/**/*.js'],
        tasks: ['jshint', 'clean:js', 'uglify'],
        options: {
          // livereload: true,
        },
      },
      css: {
        files: 'app/assets/less/**/*.less',
        tasks: ['less', 'clean:css'],
        options: {
          // livereload: true,
        },
      },
    },
  });

  // Load the plugins that provide the tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // register the tasks
  grunt.registerTask('default', ['jshint', 'clean', 'copy', 'less:development', 'uglify']);

};
