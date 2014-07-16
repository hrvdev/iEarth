;(function(win, doc){

var utils = (function(){

  function extend(dest, source){
    for(var key in source){
      dest[key] = source[key];
    }
  }

  return {
    extend: extend
  };

})();

var EventEmitter = (function(){

  var EventEmitterClass = function(){
    this.listener = {};
  };

  EventEmitterClass.prototype.addListener = function(eventName, callback){
    if(!this.listener[eventName]){
      this.listener[eventName] = [];
    }
    
    this.listener[eventName].push(callback);
  };

  EventEmitterClass.prototype.fire = function(eventName){
    var callbacks = this.listener[eventName];
    if(callbacks && callbacks.length){
      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i]();
      };
    }
  };


  return EventEmitterClass;

})();

var MapEditor = function(){
  this.dom = $('#mapEditor');

  this.mapEditorTitle = $('#mapEditorTitle');
  this.mapEditorInput = $('#mapEditorInput');

  this._bindEvent();
};

utils.extend(MapEditor.prototype, {
  _bindEvent: function(){
    var that = this;

    that.dom.on('click', '.layer-manager-close', function(){
      that._hide();
    }).on('click', '.layer-manager-btn.cancel', function(){
      that._hide();
    }).on('click', '.layer-manager-btn.ok', function(){
      if(that.callback){
        var mapName = that.mapEditorInput.val().trim() || '未命名的地图';
        that.callback(mapName);
      }
      that._hide();
    });
  },
  _reset: function(mapName){
    this.mapEditorInput.val(mapName);
  },
  _show: function(){
    var w = win.innerWidth;
    var h = win.innerHeight;

    this.dom.css('left', (w - 402) / 2).css('top', (h - 172) / 2);

    this.dom.fadeIn(100);
  },
  _hide: function(){
    this.dom.fadeOut(100);
  },
  createMap: function(callback){
    this._reset('');
    this.mapEditorTitle.html('创建地图');

    this.callback = callback;

    this._show();
  },
  editMap: function(mapName, callback){
    this._reset(mapName);
    this.mapEditorTitle.html('修改地图标题');

    this.callback = callback;

    this._show();
  }
});

var LayerListDataController = (function(){

  var LayerListDataControllerClass = function(){
    this.maps = [];
  };

  // LayerListDataControllerClass.prototype = new EventEmitter();


  utils.extend(LayerListDataControllerClass.prototype, {
    addMap: function(name){
      var map = {
        name: name,
        ctime: Date.now(),
        layerList: []
      };

      this.maps.push(map);
    },
    addLayerToMap: function(layerName, mapId){

    },
    addObjectToLayer: function(object, layerId){

    },
    removeMap: function(mapId){

    },
    removeLayer: function(layerId){

    },
    removeObject: function(objectId){

    },
    getAllMaps: function(){

    }
  });



  return LayerListDataControllerClass;

})();

var LayerListViewController = (function(){
  var LayerListViewController = function(){
    this.dom = $('#layerManager');
  };

  utils.extend(LayerListViewController.prototype, {
    _show: function(){
      var w = win.innerWidth;
      var h = win.innerHeight;

      this.dom.css('left', (w - 702) / 2).css('top', (h - 502) / 2);

      this.dom.fadeIn(100);
    },
    _hide: function(){
      this.dom.fadeOut(100);
    },
    openMap: function(callback){
      this.callback = callback;

      this._show();
    }
  });

  return LayerListViewController;
})();

var LayerManager = (function(){

  var LayerManagerClass = function(){
    this.dom = $('#mapManager');
    this.mapTitle = $('#mapTitle');
    this.mapOperations = $('#mapOperations');
    this.mapLayerList = $('#mapLayerList');


    this.mapEditor = new MapEditor();

    this.layerListViewController = new LayerListViewController();


    this.mapLayerListRender = _.template($('#mapLayerListTemplate').html());

    this._bindEvent();
  };


  utils.extend(LayerManagerClass.prototype, {
    _bindEvent: function(){
      var that = this;

      that.mapLayerList.on('click', '.layer-list-manager-layer-t', function(){
        $(that.mapLayerList.find('.layer-list-manager-layer')[that.currentLayerIndex]).removeClass('selected');

        that.currentLayerIndex = $(this).attr('data-index');

        $(that.mapLayerList.find('.layer-list-manager-layer')[that.currentLayerIndex]).addClass('selected');

        if($(this).parent().hasClass('hide-content')){
          $(this).parent().removeClass('hide-content')
        } else {
          console.log('edit layer');
        }
      }).on('click', '.checkbox', function(e){
        $(this).parent().parent().toggleClass('hide-content');

        if(!$(this).parent().parent().hasClass('hide-content')){
          $(that.mapLayerList.find('.layer-list-manager-layer')[that.currentLayerIndex]).removeClass('selected');

          that.currentLayerIndex = $(this).attr('data-index');

          $(that.mapLayerList.find('.layer-list-manager-layer')[that.currentLayerIndex]).addClass('selected');
        }

        e.stopPropagation();
      });

      $('.layer-list-manager-bar').on('click', '.operations', function(){
        that.mapOperations.toggle();
      }).on('click', '.add-layer', function(){
        $(that.mapLayerList.find('.layer-list-manager-layer')[that.currentLayerIndex]).removeClass('selected');

        that.currentLayerIndex = that.layers.length;

        var newLayer = {
          name: '未命名的图层',
          objectList: []
        };

        
        that.mapLayerList.append(that.mapLayerListRender({layers: [newLayer], fromIndex: that.layers.length}));

        that.layers.push(newLayer);

        $(that.mapLayerList.find('.layer-list-manager-layer')[that.currentLayerIndex]).addClass('selected').removeClass('hide-content');
      });

      that.mapOperations.on('click', '.create', function(){
        that.mapOperations.hide();
        that.mapEditor.createMap(function(mapName){
          console.log(mapName);
        });
      }).on('click', '.open', function(){
        that.mapOperations.hide();
        that.layerListViewController.openMap();
      });

      that.mapTitle.on('click', function(){
        that.mapEditor.editMap(that.mapObject.name, function(mapName){
          that.mapObject.name = mapName;
          that.mapTitle.text(mapName);
        });
      });
    },
    _fillHTML: function(){
      this.mapTitle.html(this.mapObject.name);
      this.mapLayerList.html(this.mapLayerListRender({layers: this.layers, fromIndex: 0}));
    },

    showMap: function(mapObject, layers){

      this.currentLayerIndex = 0;

      this.mapObject = mapObject;
      this.layers = layers;

      this._fillHTML();

      this.dom.fadeIn(100);
    }

    
  });


  return LayerManagerClass;

})();



var layerManager = new LayerManager();
layerManager.showMap({name: '北京市地图'}, [{name: '回龙观地区', objectList: [{name: '标记1', type: 1, data: ''}, {name: '标记1', type: 1, data: ''}]}, {name: '回龙观地区', objectList: [{name: '标记1', type: 1, data: ''}, {name: '标记1', type: 1, data: ''}, {name: '折线', type: 2, data: ''}]}]);

})(window, document);
