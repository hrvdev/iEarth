;(function(win, doc){

var storage = (function(){
  var localStorage = win.localStorage;

  return {
    getItem: function(key){
      return localStorage.getItem(key);
    },
    setItem: function(key, value){
      localStorage.removeItem(key);
      localStorage.setItem(key, value);
    },
    removeItem: function(key){
      localStorage.removeItem(key);
    }
  };
})();

var utils = (function(){

  function extend(dest, source){
    for(var key in source){
      dest[key] = source[key];
    }
  }

  function uuid(prefix){
    return prefix + '_' + Date.now() + '_' + Math.random();
  }

  function readableDate(time){
    var oDate = new Date(time * 1000), cDate = new Date(), interval = cDate - oDate,
      hour, minute, hourStr, minuteStr, result;
    
    //一小时内
    if(interval < 3600000){
      if(Math.ceil(interval/216000) == 0){
        result = '\u521A\u521A';
      } else {
        result = (Math.ceil(interval/216000)).toString() + '\u5206\u949F\u524D';
      }
    } else {
      //今年之内
      hour = oDate.getHours();
      minute = oDate.getMinutes();
      hourStr = hour < 10 ? '0' + hour.toString() : hour.toString();
      minuteStr = minute < 10 ? '0' + minute.toString() : minute.toString();      
      if(cDate.getFullYear() === oDate.getFullYear()){
        //今日之内
        if(cDate.getDate() === oDate.getDate()){
          result = '\u4ECA\u5929' + hourStr + ':' + minuteStr;
        } else {
          //今日以前
          result = (oDate.getMonth() + 1).toString() + '\u6708' + oDate.getDate().toString() + '\u65E5 ' + hourStr + ':' + minuteStr;
        }
      } else {
        //今年以前
        result = oDate.getFullYear().toString() + '\u5E74 ' + (oDate.getMonth() + 1).toString() + '\u6708' + oDate.getDate().toString() + '\u65E5 ' + hourStr + ':' + minuteStr;
      }
    }
    return result;
  }

  return {
    extend: extend,
    uuid: uuid,
    readableDate: readableDate
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

  var ALL_MAP_KEY = 'ALL_MAP';

  var MAP_LAYER_KEY = 'MAP_';

  var LAST_MAP_KEY = 'LAST_MAP';

  var MAP_ID_PREFIX = 'MAP_ID';

  var LayerListDataControllerClass = function(){
    this.allMaps = [];

    var allMapsStr = storage.getItem(ALL_MAP_KEY);
    if(allMapsStr){
      this.allMaps = JSON.parse(allMapsStr);
    }
  };


  utils.extend(LayerListDataControllerClass.prototype, {
    getLastEditMap: function(){
      var lastMap = storage.getItem(LAST_MAP_KEY);
      if(lastMap){
        this.currentEditMap = this.getMap(lastMap);
      } else {
        this.currentEditMap = this.createDefaultMap();
      }

      return this.currentEditMap;
    },
    setDefaultMap: function(mapId){
      storage.setItem(LAST_MAP_KEY, mapId);
    },
    createDefaultMap: function(){
      
      var map = this.addMap('未命名的地图');

      this.setDefaultMap(map.id);

      return map;
    },
    getMap: function(mapId){
      return JSON.parse(storage.getItem(MAP_LAYER_KEY + mapId));
    },
    addMap: function(name){
      var map = {
        id: utils.uuid(MAP_ID_PREFIX),
        name: name,
        ctime: Date.now(),
        layerList: []
      };

      this.allMaps.splice(0, 0, map.id);

      storage.setItem(ALL_MAP_KEY, JSON.stringify(this.allMaps));

      storage.setItem(MAP_LAYER_KEY + map.id, JSON.stringify(map));

      return map;
    },
    updateMap: function(map){
      storage.setItem(MAP_LAYER_KEY + map.id, JSON.stringify(map));
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
      var maps = [];
      for(var i = 0; i < this.allMaps.length; i ++){
        maps.push(this.getMap(this.allMaps[i]));
      }
      return maps;
    }
  });



  return LayerListDataControllerClass;

})();

var LayerListViewController = (function(){
  var LayerListViewController = function(dataController){
    this.dataController = dataController;
    this.htmlGenerator = _.template($('#mapListTemplate').html());
    this.dom = $('#layerManager');
    this.mapListC = $('#mapListC');

    this.dom.find('.layer-manager-btn.ok').addClass('disable');

    this._bindEvent();
  };

  utils.extend(LayerListViewController.prototype, {
    _bindEvent: function(){
      var that = this;

      that.dom.on('click', '.layer-manager-close', function(){
        that._hide();
      }).on('click', '.layer-manager-btn.cancel', function(){
        that._hide();
      }).on('click', '.layer-manager-row', function(){
        that.mapListC.find('.layer-manager-row').removeClass('selected');
        $(this).addClass('selected');
        that.selectedIndex = $(this).index();
        that.dom.find('.layer-manager-btn.ok').removeClass('disable');
      }).on('click', '.layer-manager-btn.ok', function(){
        if(!$(this).hasClass('disable')){
          that.callback(that.maps[that.selectedIndex]);
          that._hide();
        }
      });

    },
    _show: function(){
      var w = win.innerWidth;
      var h = win.innerHeight;

      this.dom.css('left', (w - 702) / 2).css('top', (h - 502) / 2);

      this.dom.fadeIn(100);
    },
    _hide: function(){
      this.dom.fadeOut(100);
    },
    _fillHTML: function(){
      for(var i = 0; i < this.maps.length; i ++){
        this.maps[i].timeStr = utils.readableDate(this.maps[i].ctime / 1000);
      }
      this.mapListC.html(this.htmlGenerator({maps: this.maps}));
    },
    openMap: function(callback){
      this.callback = callback;

      this.maps = this.dataController.getAllMaps();
      this._fillHTML();

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

    this.layerListDataController = new LayerListDataController();
    this.layerListViewController = new LayerListViewController(this.layerListDataController);



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
        that.mapObject.layerList = that.layers;

        $(that.mapLayerList.find('.layer-list-manager-layer')[that.currentLayerIndex]).addClass('selected').removeClass('hide-content');

        that.layerListDataController.updateMap(that.mapObject);
      });

      that.mapOperations.on('click', '.create', function(){
        that.mapOperations.hide();
        that.mapEditor.createMap(function(mapName){
          that.showMap(that.layerListDataController.addMap(mapName));
        });
      }).on('click', '.open', function(){
        that.mapOperations.hide();
        that.layerListViewController.openMap(function(map){
          that.layerListDataController.setDefaultMap(map.id);
          that.showMap(map);
        });
      }).on('click', '.delete', function(){
        that.mapOperations.hide();
        that.layerListDataController.removeMap($(this).attr('data-mapId'));
      });

      that.mapTitle.on('click', function(){
        that.mapEditor.editMap(that.mapObject.name, function(mapName){
          that.mapObject.name = mapName;
          that.mapTitle.text(mapName);
          that.layerListDataController.updateMap(that.mapObject);
        });
      });
    },
    _fillHTML: function(){
      this.mapTitle.html(this.mapObject.name);
      this.mapLayerList.html(this.mapLayerListRender({layers: this.layers, fromIndex: 0}));
    },

    showMap: function(mapObject){

      this.currentLayerIndex = 0;

      this.mapObject = mapObject;
      this.layers = mapObject.layerList;

      this._fillHTML();

      this.dom.fadeIn(100);
    },

    start: function(){
      var lastEditMap = this.layerListDataController.getLastEditMap();
      this.showMap(lastEditMap);
    }

    
  });


  return LayerManagerClass;

})();


var layerManager = new LayerManager();
layerManager.start();






// layerManager.showMap({name: '北京市地图'}, [{name: '回龙观地区', objectList: [{name: '标记1', type: 1, data: ''}, {name: '标记1', type: 1, data: ''}]}, {name: '回龙观地区', objectList: [{name: '标记1', type: 1, data: ''}, {name: '标记1', type: 1, data: ''}, {name: '折线', type: 2, data: ''}]}]);

})(window, document);
