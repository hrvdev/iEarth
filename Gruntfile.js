module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      uiSrc: {
        src: [
          'js/ui/intro.js',

          'js/ui/Tools.js',
          'js/ui/canvas.js',

          'js/ui/LocationShower.js',

          'js/ui/MiniMap.js',
          'js/ui/searchBar.js',

          'js/ui/main.js',

          'js/ui/outro.js'
        ],
        dest: 'js/iEarth.ui.src.js'
      },
      mapSrc: {
        src: [
          'js/src/intro.js',

          'js/src/localStorage.js',

          'js/src/utils.js',
          'js/src/saveAs.js',
          'js/src/EventEmitter.js',

          'js/src/userLoginRegister.js',
          'js/src/settings.js',

          'js/src/MapEditor.js',
          'js/src/LayerEditor.js',

          'js/src/LayerListDataController.js',
          'js/src/LayerListViewController.js',

          'js/src/LayerManager.js',

          'js/src/MapTools.js',

          'js/src/MapManager.js',

          'js/src/outro.js'
        ],
        dest: 'js/iEarth.src.js'
      },
      cesiumSrc: {
        src: [
          'js/cesiumSrc/intro.js',

          'js/cesiumSrc/utils.js',

          'js/cesiumSrc/default.js',

          'js/cesiumSrc/ChangeablePrimitive.js',
          'js/cesiumSrc/LabelPrimitive.js',
          'js/cesiumSrc/BillboardGroup.js',
          'js/cesiumSrc/PolylinePrimitive.js',
          'js/cesiumSrc/CesiumEditor.js',

          'js/cesiumSrc/outro.js'
        ],
        dest: 'js/iEarth.cesium.src.js'
      }
    },

    uglify: {
      options: {
        compress: {
          drop_console: true
        }
      },
      iEarth_src: {
        options: {
          sourceMap: true,
          sourceMapName: 'js/iEarth.map'
        },
        files: {
          'js/iEarth.min.js': 'js/iEarth.src.js'
        }
      },

      cesium_src: {
        options: {
          sourceMap: true,
          sourceMapName: 'js/iEarth.cesium.map'
        },
        files: {
          'js/iEarth.cesium.min.js': 'js/iEarth.cesium.src.js'
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
        files: ['js/src/*.js', 'js/cesiumSrc/*.js', 'js/ui/*.js', 'css/src/*.styl', 'Gruntfile.js'],
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
