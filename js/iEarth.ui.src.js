;(function(win, doc){

var ImagerySettings = (function(){
  var ImagerySettingsClass = function(){
    this.dom = $('#imageryAdjust');

    this.init();
  };

  ImagerySettingsClass.prototype = {
    init: function(){
      var that = this;

      that.ab = $('#imageAdjustBrightness').slider({
        max: 300,
        min: 0,
        value: 100,
        change: function(){
          that.adjust();
        }
      });
      that.ac = $('#imageAdjustContrast').slider({
        max: 300,
        min: 0,
        value: 100,
        change: function(){
          that.adjust();
        }
      });
      that.at = $('#imageAdjustTinct').slider({
        max: 300,
        min: 0,
        value: 0,
        change: function(){
          that.adjust();
        }
      });
      that.as = $('#imageAdjustSaturation').slider({
        max: 300,
        min: 0,
        value: 100,
        change: function(){
          that.adjust();
        }
      });
      that.ag = $('#imageAdjustGamma').slider({
        max: 300,
        min: 0,
        value: 100,
        change: function(){
          that.adjust();
        }
      });

      that.dom.on('click', '.tit span', function(){
        that.ab.slider('value', 100);
        that.ac.slider('value', 100);
        that.at.slider('value', 0);
        that.as.slider('value', 100);
        that.ag.slider('value', 100);
        that.adjust();
      });
    },
    adjust: function(){
      var imageryLayers = cesiumViewer.centralBody.imageryLayers;
      if(imageryLayers.length > 0) {
        var layer = imageryLayers.get(0);
        layer.brightness = this.ab.slider('value') / 100;
        layer.contrast = this.ac.slider('value') / 100;
        layer.hue = this.at.slider('value') / 100;
        layer.saturation = this.as.slider('value') / 100;
        layer.gamma = this.ag.slider('value') / 100;
      }
    },
    show: function(){
      this.dom.addClass('show');
    },
    hide: function(){
      this.dom.removeClass('show');
    }
  };



  return ImagerySettingsClass;
})();

var Tools = (function(){

  var ToolsClass = function(miniMap){
    
    this.miniMap = miniMap;
    this.adjustLayer = new ImagerySettings();

    this.dom = $('#tools');
    this.toggleLocationImagesBtn = $('#toggleLocationImagesBtn');
    this.locationImagesContainer = $('#locationImagesContainer');
    this.init();
  };

  ToolsClass.prototype = {
    init: function(){

      var that = this;


      that.dom.on('click', '.map-tool-location', function(){
        selfCesium.north();
      }).on('click', '.location-images-toggle', function(){
        if(that.toggleLocationImagesBtn.hasClass('open')){
          that.hideLocationImages();
          that.locationImagesContainer.hide();
          that.miniMap.goToSmall();
        } else {
          that.showLocationImages();
          that.miniMap.goToLarge();
        }
      }).on('click', '.map-tool-vector', function(){
        var dom = $(this);
        if(dom.hasClass('active')){
          dom.removeClass('active');
          selfCesium.setVector.remove();
        } else {
          dom.addClass('active');
          selfCesium.setVector.set("http://124.65.135.146:8100/map/google-vector/");
        }
      }).on('click', '.map-tool-terrian', function(){
        var dom = $(this);
        if(dom.hasClass('active')){
          dom.removeClass('active');
          selfCesium.setTerrian.remove();
        } else {
          dom.addClass('active');
          selfCesium.setTerrian.set(CONFIG.terrianSource);
        }
      }).on('click', '.map-tool-settings', function(){
        var dom = $(this);
        if(dom.hasClass('active')){
          dom.removeClass('active');
          that.adjustLayer.hide();
        } else {
          dom.addClass('active');
          that.adjustLayer.show();
        }
      });
    },
    showLocationImages: function(){
      this.dom.addClass('open');
      this.toggleLocationImagesBtn.addClass('open');


      var that = this;
      setTimeout(function(){
        that.renderLocationImages([{
          src: 'imgs/1.jpg',
          title: 'China',
          location: {
            lat: 120.2,
            lng: 30.3
          }
        }, {
          src: 'imgs/2.jpg',
          title: 'China',
          location: {
            lat: 110.5,
            lng: 29.3
          }
        }, {
          src: 'imgs/3.jpg',
          title: 'China',
          location: {
            lat: 115.6,
            lng: 21.1
          }
        }, {
          src: 'imgs/4.jpg',
          title: 'China',
          location: {
            lat: 101.6,
            lng: 29.5
          }
        }]);
      }, 200);
      
    },
    renderLocationImages: function(images){
      this.images = images;

      if(!this.toggleLocationImagesBtn.hasClass('open')){
        return;
      }

      var html = [];
      for(var i = 0; i < images.length; i ++){
        html.push('<div class="location-image" data-location="' + JSON.stringify(images[i].location) + '">')
        html.push('<img src="' + images[i].src + '" />');
        html.push('<div>' + images[i].title + '</div>');
        html.push('</div>');
      }
      var div = $('<div></div>').html(html.join('')).css('width', images.length * 203 - 3);
      var that = this;
      that.locationImagesContainer.html(div).fadeOut(0, function(){
        that.locationImagesContainer.fadeIn(100);
      });
    },
    hideLocationImages: function(){
      this.dom.removeClass('open');
      this.toggleLocationImagesBtn.removeClass('open');
    }
  };


  return ToolsClass;

})();

var selfCanvas = (function(){
  var canvas = oCanvas.create({
    canvas: '#canvas',
    fps: 60
  });

  var circle = canvas.display.ellipse({
    x: 100,
    y: 100,
    radius_x: 0,
    radius_y: 0,
    fill: '#fff'
  });


  function showCircleAt(pos){
    circle.x = pos.x;
    circle.y = pos.y;
    circle.opacity = 1;
    circle.radius_x = 1;
    circle.radius_y = 1;
    
    canvas.addChild(circle);

    circle.stop().animate({
      radius_x: 15,
      radius_y: 15,
      opacity: 0,
      duration: 300
    }, {
      callback: function(){
        canvas.removeChild(circle);
      }
    });
  }


  return {
    showCircleAt: showCircleAt
  };

})();

var LocationShower = (function(){

  var LocationShowerClass = function(){
    this.dom = $('#locationShow');
    this.content = $('#locationShowC');
    this.init();
  };

  LocationShowerClass.prototype = {
    init: function(){
      var that = this;

      $('#locationShowClose').on('click', function(){
        that.hide();
      });
    },
    hide: function(){
      this.dom.removeClass('showing');
    },
    show: function(obj){
      var that = this;
      var html = [];
      html.push('<div><span>\u7EAC\u5EA6:</span><span>' + obj.lat + '</span><span>(' + obj.lat2 + ')</span></div>');
      html.push('<div><span>\u7ECF\u5EA6:</span><span>' + obj.lng + '</span><span>(' + obj.lng2 + ')</span></div>');
      that.content.html(html.join(''));
      that.hide();
      setTimeout(function(){
        that.dom.addClass('showing');
      },200);
    }
  };


  return LocationShowerClass;

})();

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

var SearchBar = (function(){

  var SearchBarClass = function(){
    this.input = $('#searchInput');

    this.searchResult = $('#searchResult');

    this.init();
  };

  SearchBarClass.prototype.init = function(){
    var that = this;

    that.input.on('change', function(){
      that.doSearch();
    });

    $('#searchButton').on('click', function(){
      that.doSearch();
    });
  };

  SearchBarClass.prototype.doSearch = function(){
    var that = this;
    $.get('/worldLocation', {name: that.input.val()}, function(res){
      
    });
  };

  SearchBarClass.prototype.renderSearchResult = function(){

  };


  return SearchBarClass;

})();

var MainUI = function(cesium){
  this.cesium = cesium;

  this.miniMap = new MiniMap();
  this.tools = new Tools(this.miniMap);
  this.locationShower = new LocationShower();

  this.enableLocationShower = true;

  this.searchBar = new SearchBar();

  // selfCesium.dbclickTofly();
};

MainUI.prototype = {
  run: function(){
    var that = this;
    
    that.initShowPosition();
  },
  initShowPosition: function(){
    var that = this;
    
    var ellipsoid = Cesium.Ellipsoid.WGS84;
    var scene = cesiumViewer.cesiumWidget.scene;
    var handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    handler.setInputAction(function(movement){
      if(that.enableLocationShower){
        if(movement.position != null) {
          var cartesian = scene.camera.pickEllipsoid(movement.position, ellipsoid);
          if(cartesian) {
            selfCanvas.showCircleAt(movement.position);
            var pos = selfCesium.getPosition(win.cesiumViewer, movement.position);

            that.locationShower.show({
              lat: pos.ddLat,
              lng: pos.ddLong,
              lat2: pos.dmsLat,
              lng2: pos.dmsLong
            });
          }
        }
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  }
};



var app = new MainUI();

app.run();

win.uiApp = app;

})(window, document);
