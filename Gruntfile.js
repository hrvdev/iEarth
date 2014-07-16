module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      cesium: {
        src: [
          'js/src/intro.js',

          'js/src/utils.js',
          'js/src/EventEmitter.js',

          'js/src/MapEditor.js',

          'js/src/LayerListDataController.js',
          'js/src/LayerListViewController.js',

          'js/src/LayerManager.js',

          'js/src/outro.js'
        ],
        dest: 'js/iEarth.src.js'
      }
    },

    uglify: {
      options: {
        compress: {
          drop_console: true
        }
      },
      iEarth: {
        options: {
          sourceMap: true,
          sourceMapName: 'js/iEarth.map'
        },
        files: {
          'js/iEarth.min.js': 'js/iEarth.src.js'
        }
      }
    },

    stylus: {
      compile: {
        options: {
          compress: true
        },
        files: {
          'css/iEarth.min.css': 'css/src/iEarth.styl'
        }
      }
    },

    watch: {
      scripts: {
        files: ['js/src/*.js', 'css/src/*.styl', 'Gruntfile.js'],
        tasks: ['concat', 'uglify', 'stylus']
      }
    }

  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  grunt.registerTask('default', ['watch']);
};
