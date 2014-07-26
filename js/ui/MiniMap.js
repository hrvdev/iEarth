var MiniMap = (function(){

  var MiniMapClass = function(){
    this.dom = $('#miniMap');

    this.miniMapSource = $('#miniMapSource');

    this.dataSource = ['Bing', 'Google'];
    this.currentDataSource = 1;

    this.init();
  };

  MiniMapClass.prototype = {
    init: function(){
      var that = this;

      that.dom.on('click', function(){
        that.currentDataSource = (that.currentDataSource + 1) % 2;
        that.miniMapSource.removeClass('bing').removeClass('google').addClass(that.dataSource[that.currentDataSource].toLowerCase());
        selfCesium.setImagery({
          layers: [CONFIG.mapSource + that.dataSource[that.currentDataSource].toLowerCase() + '/']
        });

        if(that.miniMapSource.hasClass('bing')){
          map.removeLayer(google);
          map.removeLayer(googleVector);
          map.addLayer(bing);
          map.addLayer(bingVector);
        } else {
          map.removeLayer(bing);
          map.removeLayer(bingVector);
          map.addLayer(google);
          map.addLayer(googleVector);
        }
      });


      var bing = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: CONFIG.mapSource + 'bing/{z}/{x}/{y}.png'
         })
      });
      var bingVector = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: CONFIG.mapSource + 'google-vector/{z}/{x}/{y}.png'
         })
      });
      var google = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: CONFIG.mapSource + 'google/{z}/{x}/{y}.png'
         })
      });
      var googleVector = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: CONFIG.mapSource + 'google-vector/{z}/{x}/{y}.png'
         })
      });

      var map = new ol.Map({
        target: 'miniMapCanvas',
        layers: [google, googleVector],
        renderer:'canvas',
        view: new ol.View2D({
          center: ol.proj.transform([0, 0], 'EPSG:4326', 'EPSG:3857'),
          zoom: 2,
          maxZoom:20,
          minZoom:2
        }),
        ol3Logo:false
      });

      function miniMap_Center(){
        var scene = cesiumViewer.scene;
        var ellipsoid = Cesium.Ellipsoid.WGS84;
        var cameraPosition = scene.camera.position;
        cameraPosition = ellipsoid.cartesianToCartographic(cameraPosition);
        var longitude = Cesium.Math.toDegrees(cameraPosition.longitude);
        var latitude = Cesium.Math.toDegrees(cameraPosition.latitude);
        if(latitude==90){
          latitude = 89.9;
        }
        if(latitude==-90){
          latitude = -89.9;
        }
        var pos = ol.proj.transform([longitude,latitude], 'EPSG:4326', 'EPSG:3857');
        map.getView().setCenter(pos);     
      }

      var lastLevel = 0;
      var levelTick = 0;

      cesiumViewer.clock.onTick.addEventListener(function(clock) {
        miniMap_Center();
       if(lastLevel == getTheMapLevel){

               levelTick++;
               if(levelTick>25){
                  map.getView().setZoom(getTheMapLevel-1);
                  levelTick=0;
               }
            }
            else{
              lastLevel = getTheMapLevel;
              levelTick=0;
            }
      });

    },
    goToLarge: function(){
      this.dom.addClass('open');
    },
    goToSmall: function(){
      this.dom.removeClass('open');
    }
  };



  return MiniMapClass;

})();
