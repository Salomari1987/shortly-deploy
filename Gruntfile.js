module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        src:['public/client/*.js'],
        dest:'dist/built.js',
      },
      lib: {
        src: ['public/lib/*.js'],
        dest: 'dist/lib.js',
      },
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js'],
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    uglify: {
      dist: {
        files:{
          'dist/built.min.js':'dist/built.js',
          'dist/lib.min.js':'dist/lib.js',
        },
      },
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: ['Gruntfile.js', 'public/client/*.js'],
    },

    cssmin: {
      build: {
        files:{
          'dist/application.css': [ 'public/*.css' ],
        },
      },
    },

    watch: {
      scripts: {
        files: [
          'public/client/**/*.js',
          'public/lib/**/*.js'
        ],
        tasks: [
          'jshint',
          'concat',
          'uglify'
        ]
      },
      build: {
        files: ['Gruntfile'],
        tasks: ['jshint']
      },
      css: {
        files: 'public/*.css',
        tasks: ['cssmin'],
      },
    },

    shell: {
      prodServer: {
        command: 'git push heroku master',
        // command: 'grunt deploy --prod=true'
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('server-dev', function (target) {
    // Running nodejs in a different process and displaying output on the main console
    var nodemon = grunt.util.spawn({
      cmd: 'grunt',
      grunt: true,
      args: 'nodemon'
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

    grunt.task.run([ 'watch' ]);
  });


  grunt.registerTask('upload', function(n) {
    if (grunt.option('prod')) {
      // add your production server task here
    }
    grunt.task.run([ 'server-dev' ]);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', [
    'mochaTest'
  ]);

  grunt.registerTask('build', [
  ]);


  grunt.registerTask('deploy', [
    // add your deploy tasks here
  ]);
  grunt.registerTask('default', 
    ['cssmin', 'concat', 'uglify']);

};
