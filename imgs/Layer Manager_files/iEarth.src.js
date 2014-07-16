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

var LayerListDataController = (function(){

  var LayerListDataControllerClass = function(){

  };

  LayerListDataControllerClass.prototype = new EventEmitter();


  utils.extend(LayerListDataControllerClass.prototype, {
    addMap: function(name){
      
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

    }
  });



  return LayerListDataControllerClass;

})();

var LayerManager = (function(){

  var LayerManagerClass = function(){

  };


  LayerManagerClass.prototype.addLayer = function(){};


  return LayerManagerClass;

})();


})(window, document);
