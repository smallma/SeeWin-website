module.exports = function(grunt, type) {
  grunt.initConfig({
    sass: {
        dist: {
            files: {
                './resources/css/index.css': './resources/sass/index.sass'
            }
        }
    },
    // exec: {
    //   build: {
    //     cmd: 'sencha app build ' + "<%= grunt.config('MSG.build.type') %>"
    //   },
    //   sass: {
    //     cmd: 'sencha ant sass'
    //   }
    // },
    watch: {
      configFiles: {
        files: ['Gruntfile.js'],
        options: {
          reload: true
        }
      },
      css: {
        files: ['resources/css/**/*'],
        options: {
          // event: ['all'],
          livereload: true
        },
      },
      sass: {
        files: ['resources/sass/**/*'],
        tasks: ['notify:sassChanged', 'sass', 'notify:sass'],
        options: {
          // event: ['all']
        }
      }
    },
    notify: {
      // options: {
      //   enabled: true,
      //   max_jshint_notifications: 5, // maximum number of notifications from jshint output
      //   success: false, // whether successful grunt executions should be notified automatically
      //   duration: 3 // the duration of notification in seconds, for `notify-send only
      // },
      sassChanged: {
        options: {
          image: './node_modules/grunt-notify/images/grunt-logo.png',
          title: 'SASS Changed',
          message:  "SASS changed."
        }
      },
      sass: {
        options: {
          image: './node_modules/grunt-notify/images/grunt-logo.png',
          title: 'SASS build Success',
          message:  "<%= grunt.config('MSG.release') %>" + " " + "<%= grunt.config('MSG.build.type') %>" + " SASS build success"
        }
      },
      build: {
        options: {
          image: './node_modules/grunt-notify/images/grunt-logo.png',
          title: 'Build Success',
          message:  "<%= grunt.config('MSG.release') %>" + " " + "<%= grunt.config('MSG.build.type') %>" + " build success"
        }
      }
    }
  });

  // grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['sass']);
};