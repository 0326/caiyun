'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Watch for changes and trigger compass, jshint, uglify and livereload
    watch: {
      compass: {
        files: ['static/sass/*.{scss,sass}'],
        tasks: ['compass:dev']
      },
      js: {
        files: ['static/js/*.js'],
        tasks: ['jshint', 'uglify:dev']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          '*.html',
          'static/css/style.css',
          'static/js/*.js',
          'static/images/{,**/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // Connect
    connect: {
      server: {
        options: {
          port: 8000
        }
      }
    },

    // Compass and scss
    compass: {
      options: {
        //bundleExec: true,
        httpPath: './',
        cssDir: 'static/css',
        sassDir: 'static/sass',
        imagesDir: 'static/images',
        javascriptsDir: 'static/js',
        fontsDir: 'static/fonts',
        assetCacheBuster: 'none',
        // require: [
        //   'sass-globbing'
        // ]
      },
      dev: {
        options: {
          environment: 'development',
          outputStyle: 'expanded',
          relativeAssets: true,
          raw: 'line_numbers = :true\n'
        }
      },
      dist: {
        options: {
          environment: 'production',
          outputStyle: 'compact',
          force: true
        }
      }
    },
 
    // Javascript linting with jshint
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'static/js/src/*.js'
      ]
    },

    // Concat & minify
    uglify: {
      dev: {
        options: {
          mangle: false,
          compress: false,
          preserveComments: 'all',
          beautify: true
        },
        files: {
          'static/js/app.min.js': [
            'static/js/src/*.js'
          ]
        }
      },
      dist: {
        options: {
          mangle: true,
          compress: true
        },
        files: {
          'static/js/app.min.js': [
            'static/js/src/*.js'
          ]
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', [
    'jshint',
    'uglify:dist',
    'compass:dist'
  ]);

  grunt.registerTask('default', [
    'connect',
    'jshint',
    'uglify:dev',
    'compass:dev',
    'watch'
  ]);

};