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

  var ellipsoid = Cesium.Ellipsoid.WGS84;

  function cartesian2Coord(cartesian, fixedNumber){
    var cartographic = ellipsoid.cartesianToCartographic(cartesian);
    return {
      longitude: Cesium.Math.toDegrees(cartographic.longitude).toFixed(fixedNumber),
      latitude: Cesium.Math.toDegrees(cartographic.latitude).toFixed(fixedNumber)
    };
  }

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
    readableDate: readableDate,
    cartesian2Coord: cartesian2Coord
  };

})();

var saveAs = (function(){

var saveAs = saveAs
  // IE 10+ (native saveAs)
  || (typeof navigator !== "undefined" &&
      navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator))
  // Everyone else
  || (function(view) {
  "use strict";
  // IE <10 is explicitly unsupported
  if (typeof navigator !== "undefined" &&
      /MSIE [1-9]\./.test(navigator.userAgent)) {
    return;
  }
  var
      doc = view.document
      // only get URL when necessary in case BlobBuilder.js hasn't overridden it yet
    , get_URL = function() {
      return view.URL || view.webkitURL || view;
    }
    , URL = view.URL || view.webkitURL || view
    , save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
    , can_use_save_link = !view.externalHost && "download" in save_link
    , click = function(node) {
      var event = doc.createEvent("MouseEvents");
      event.initMouseEvent(
        "click", true, false, view, 0, 0, 0, 0, 0
        , false, false, false, false, 0, null
      );
      node.dispatchEvent(event);
    }
    , webkit_req_fs = view.webkitRequestFileSystem
    , req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem
    , throw_outside = function(ex) {
      (view.setImmediate || view.setTimeout)(function() {
        throw ex;
      }, 0);
    }
    , force_saveable_type = "application/octet-stream"
    , fs_min_size = 0
    , deletion_queue = []
    , process_deletion_queue = function() {
      var i = deletion_queue.length;
      while (i--) {
        var file = deletion_queue[i];
        if (typeof file === "string") { // file is an object URL
          URL.revokeObjectURL(file);
        } else { // file is a File
          file.remove();
        }
      }
      deletion_queue.length = 0; // clear queue
    }
    , dispatch = function(filesaver, event_types, event) {
      event_types = [].concat(event_types);
      var i = event_types.length;
      while (i--) {
        var listener = filesaver["on" + event_types[i]];
        if (typeof listener === "function") {
          try {
            listener.call(filesaver, event || filesaver);
          } catch (ex) {
            throw_outside(ex);
          }
        }
      }
    }
    , FileSaver = function(blob, name) {
      // First try a.download, then web filesystem, then object URLs
      var
          filesaver = this
        , type = blob.type
        , blob_changed = false
        , object_url
        , target_view
        , get_object_url = function() {
          var object_url = get_URL().createObjectURL(blob);
          deletion_queue.push(object_url);
          return object_url;
        }
        , dispatch_all = function() {
          dispatch(filesaver, "writestart progress write writeend".split(" "));
        }
        // on any filesys errors revert to saving with object URLs
        , fs_error = function() {
          // don't create more object URLs than needed
          if (blob_changed || !object_url) {
            object_url = get_object_url(blob);
          }
          if (target_view) {
            target_view.location.href = object_url;
          } else {
            window.open(object_url, "_blank");
          }
          filesaver.readyState = filesaver.DONE;
          dispatch_all();
        }
        , abortable = function(func) {
          return function() {
            if (filesaver.readyState !== filesaver.DONE) {
              return func.apply(this, arguments);
            }
          };
        }
        , create_if_not_found = {create: true, exclusive: false}
        , slice
      ;
      filesaver.readyState = filesaver.INIT;
      if (!name) {
        name = "download";
      }
      if (can_use_save_link) {
        object_url = get_object_url(blob);
        // FF for Android has a nasty garbage collection mechanism
        // that turns all objects that are not pure javascript into 'deadObject'
        // this means `doc` and `save_link` are unusable and need to be recreated
        // `view` is usable though:
        doc = view.document;
        save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a");
        save_link.href = object_url;
        save_link.download = name;
        var event = doc.createEvent("MouseEvents");
        event.initMouseEvent(
          "click", true, false, view, 0, 0, 0, 0, 0
          , false, false, false, false, 0, null
        );
        save_link.dispatchEvent(event);
        filesaver.readyState = filesaver.DONE;
        dispatch_all();
        return;
      }
      // Object and web filesystem URLs have a problem saving in Google Chrome when
      // viewed in a tab, so I force save with application/octet-stream
      // http://code.google.com/p/chromium/issues/detail?id=91158
      if (view.chrome && type && type !== force_saveable_type) {
        slice = blob.slice || blob.webkitSlice;
        blob = slice.call(blob, 0, blob.size, force_saveable_type);
        blob_changed = true;
      }
      // Since I can't be sure that the guessed media type will trigger a download
      // in WebKit, I append .download to the filename.
      // https://bugs.webkit.org/show_bug.cgi?id=65440
      if (webkit_req_fs && name !== "download") {
        name += ".download";
      }
      if (type === force_saveable_type || webkit_req_fs) {
        target_view = view;
      }
      if (!req_fs) {
        fs_error();
        return;
      }
      fs_min_size += blob.size;
      req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {
        fs.root.getDirectory("saved", create_if_not_found, abortable(function(dir) {
          var save = function() {
            dir.getFile(name, create_if_not_found, abortable(function(file) {
              file.createWriter(abortable(function(writer) {
                writer.onwriteend = function(event) {
                  target_view.location.href = file.toURL();
                  deletion_queue.push(file);
                  filesaver.readyState = filesaver.DONE;
                  dispatch(filesaver, "writeend", event);
                };
                writer.onerror = function() {
                  var error = writer.error;
                  if (error.code !== error.ABORT_ERR) {
                    fs_error();
                  }
                };
                "writestart progress write abort".split(" ").forEach(function(event) {
                  writer["on" + event] = filesaver["on" + event];
                });
                writer.write(blob);
                filesaver.abort = function() {
                  writer.abort();
                  filesaver.readyState = filesaver.DONE;
                };
                filesaver.readyState = filesaver.WRITING;
              }), fs_error);
            }), fs_error);
          };
          dir.getFile(name, {create: false}, abortable(function(file) {
            // delete file if it already exists
            file.remove();
            save();
          }), abortable(function(ex) {
            if (ex.code === ex.NOT_FOUND_ERR) {
              save();
            } else {
              fs_error();
            }
          }));
        }), fs_error);
      }), fs_error);
    }
    , FS_proto = FileSaver.prototype
    , saveAs = function(blob, name) {
      return new FileSaver(blob, name);
    }
  ;
  FS_proto.abort = function() {
    var filesaver = this;
    filesaver.readyState = filesaver.DONE;
    dispatch(filesaver, "abort");
  };
  FS_proto.readyState = FS_proto.INIT = 0;
  FS_proto.WRITING = 1;
  FS_proto.DONE = 2;

  FS_proto.error =
  FS_proto.onwritestart =
  FS_proto.onprogress =
  FS_proto.onwrite =
  FS_proto.onabort =
  FS_proto.onerror =
  FS_proto.onwriteend =
    null;

  view.addEventListener("unload", process_deletion_queue, false);
  saveAs.unload = function() {
    process_deletion_queue();
    view.removeEventListener("unload", process_deletion_queue, false);
  };
  return saveAs;
}(
     typeof self !== "undefined" && self
  || typeof window !== "undefined" && window
  || this.content
));


return saveAs;



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

var UserLoginRegister = (function(){

  var USER_LIST_KEY = 'USER_LIST';
  var CURRENT_USER_KEY = 'CURRENT_USER';


  var UserLoginRegisterClass = function(){
    this.dom = $('#userLoginRegister');

    this.currentUser = null;

    this.userLoginRegisterError = $('#userLoginRegisterError');
    this.userLoginRegisterUsername = $('#userLoginRegisterUsername');
    this.userLoginRegisterPassword = $('#userLoginRegisterPassword');

    this._bindEvent();
  };


  utils.extend(UserLoginRegisterClass.prototype, {
    _bindEvent: function(){
      var that = this;

      that.dom.on('click', '.layer-manager-close', function(){
        that._hide();
      }).on('click', '.submit', function(){

        that._doLogin();

      }).on('click', '.register', function(){

        that._doRegister();

      });

      that.userLoginRegisterUsername.on('focus', function(){
        that.userLoginRegisterError.hide();
      });

      that.userLoginRegisterPassword.on('focus', function(){
        that.userLoginRegisterError.hide();
      });
    },
    _reset: function(){
      this.userLoginRegisterUsername.val('');
      this.userLoginRegisterPassword.val('');
    },
    _show: function(){
      var h = win.innerHeight;

      this.dom.css('top', (h - 350) / 2);

      this.dom.fadeIn(100);
    },
    _doLogin: function(){
      if(this._validate()){
        var username = this.userLoginRegisterUsername.val().trim('');
        var password = this.userLoginRegisterPassword.val().trim('');

        if(this._isValid(username, password)){
          if(this.callback){
            this.callback(this.currentUser);
            this._hide();
          }
        } else {
          this.userLoginRegisterError.html('用户名或密码错误').show();
        }
      } else {
        this.userLoginRegisterError.html('用户名、密码不能为空').show();
      }
    },
    _doRegister: function(){
      if(this._validate()){
        var username = this.userLoginRegisterUsername.val().trim('');
        var password = this.userLoginRegisterPassword.val().trim('');

        if(this._isExists(username)){
          this.userLoginRegisterError.html('用户名已存在').show();
        } else {
          var userid = this._saveUser(username, password);
          storage.setItem(CURRENT_USER_KEY, userid);
          if(this.callback){
            this.callback({
              userid: userid,
              username: username,
              password: password
            });
            this._hide();
          }
        }
      } else {
        this.userLoginRegisterError.html('用户名、密码不能为空').show();
      }
    },
    _isValid: function(username, password){
      var userList = storage.getItem(USER_LIST_KEY);
      if(userList){
        userList = JSON.parse(userList);
        for(var i = 0; i < userList.length; i ++){
          if(userList[i].username === username && userList[i].password === password){
            this.currentUser = userList[i];
            storage.setItem(CURRENT_USER_KEY, userList[i].userid);
            return true;
          }
        }
        return false;
      } else {
        return false;
      }
    },
    _isExists: function(username){
      var userList = storage.getItem(USER_LIST_KEY);
      if(userList){
        userList = JSON.parse(userList);
        for(var i = 0; i < userList.length; i ++){
          if(userList[i].username === username){
            return true;
          }
        }
        return false;
      } else {
        return false;
      }
    },
    _saveUser: function(username, password){
      var userList = storage.getItem(USER_LIST_KEY);
      if(userList){
        userList = JSON.parse(userList);
      } else {
        userList = [];
      }
      var userid = utils.uuid('USER_');
      userList.push({
        userid: userid,
        username: username,
        password: password
      });
      storage.setItem(USER_LIST_KEY, JSON.stringify(userList));
      return userid;
    },
    _validate: function(){
      var username = this.userLoginRegisterUsername.val().trim('');
      var password = this.userLoginRegisterPassword.val().trim('');
      if(username && password){
        return true;
      } else {
        return false;
      }
    },
    _hide: function(){
      this.dom.fadeOut(100);
    },
    autoLogin: function(){
      var currentUserID = storage.getItem(CURRENT_USER_KEY);
      var userList = storage.getItem(USER_LIST_KEY);
      if(userList && currentUserID){
        userList = JSON.parse(userList);
        for(var i = 0; i < userList.length; i ++){
          if(userList[i].userid === currentUserID){
            return userList[i];
          }
        }
        return null;
      } else {
        return null;
      }
    },
    login: function(callback){
      this.callback = callback;

      this._reset();
      this._show();
    },
    logout: function(){
      storage.removeItem(CURRENT_USER_KEY);
    }
  });


  return UserLoginRegisterClass;
})();

var Settings = (function(){

  var label = {
    color: '#FFFFFF',
    fontSize: 16
  };

  var polyline = {
    color: '#000000',
    width: 2
  };

  var SettingsClass = function(){
    this.dom = $('#cesiumSettings');

    this.settingsLabelColorInput = $('#settingsLabelColorInput');
    this.settingsLabelColorPicker = $('#settingsLabelColorPicker');
    this.settingsLabelFontSizeInput = $('#settingsLabelFontSizeInput');

    this.settingsPolylineColorInput = $('#settingsPolylineColorInput');
    this.settingsPolylineColorPicker = $('#settingsPolylineColorPicker');
    this.settingsPolylineWidthInput = $('#settingsPolylineWidthInput');

    this._bindEvent();
  };

  SettingsClass.label = label;
  SettingsClass.polyline = polyline;


  utils.extend(SettingsClass.prototype, {
    _fillDefalut: function(){
      this.settingsLabelColorInput.val(label.color);
      this.settingsLabelColorPicker.css('background-color', label.color);
      this.settingsLabelFontSizeInput.val(label.fontSize);

      this.settingsPolylineColorInput.val(polyline.color);
      this.settingsPolylineColorPicker.css('background-color', polyline.color);
      this.settingsPolylineWidthInput.val(polyline.width);
    },
    _bindEvent: function(){
      var that = this;

      that.dom.on('click', '.layer-manager-close', function(){
        that._hide();
      }).on('click', '.layer-manager-btn.cancel', function(){
        that._hide();
      }).on('click', '.layer-manager-btn.ok', function(){
        label.color = that.settingsLabelColorInput.val();
        label.fontSize = that.settingsLabelFontSizeInput.val();
        polyline.color = that.settingsPolylineColorInput.val();
        polyline.width = that.settingsPolylineWidthInput.val();

        win.CesiumDefault.setDefaultPolyline(polyline.width, $.colpick.hexToRgb(polyline.color));
        win.CesiumDefault.setDefaultLabel(label.fontSize, label.color);

        that._hide();
      });

      that.settingsLabelColorPicker.colpick({
        color: that.settingsLabelColorInput.val(),
        submit: false,
        onChange: function(value){
          that.settingsLabelColorInput.val('#' + $.colpick.hsbToHex(value));
          that.settingsLabelColorPicker.css('background-color', '#' + $.colpick.hsbToHex(value));
        }
      });
      that.settingsLabelColorInput.on('blur', function(){
        that.settingsLabelColorPicker.css('background-color', $(this).val());
      });


      that.settingsPolylineColorPicker.colpick({
        color: that.settingsPolylineColorInput.val(),
        submit: false,
        onChange: function(value){
          that.settingsPolylineColorInput.val('#' + $.colpick.hsbToHex(value));
          that.settingsPolylineColorPicker.css('background-color', '#' + $.colpick.hsbToHex(value));
        }
      });
      that.settingsPolylineColorInput.on('blur', function(){
        that.settingsPolylineColorPicker.css('background-color', $(this).val());
      });
    },
    _show: function(){
      var h = win.innerHeight;

      this._fillDefalut();

      this.dom.css('top', (h - 350) / 2);

      this.dom.fadeIn(100);
    },
    _hide: function(){
      this.dom.fadeOut(100);
    },
    modifySettings: function(){
      this._show();
    }
  });


  return new SettingsClass;
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

var LayerEditor = function(){
  this.dom = $('#layerEditor');
  this.layerEditorTitle = $('#layerEditorTitle');
  this.layerEditorInput = $('#layerEditorInput');

  this._bindEvent();
};

utils.extend(LayerEditor.prototype, {
  _bindEvent: function(){
    var that = this;

    that.dom.on('click', '.layer-manager-close', function(){
      that._hide();
    }).on('click', '.layer-manager-btn.cancel', function(){
      that._hide();
    }).on('click', '.layer-manager-btn.ok', function(){
      if(that.callback){
        var layerName = that.layerEditorInput.val().trim() || '未命名的地图';
        that.callback(layerName);
      }
      that._hide();
    });
  },
  _reset: function(layerName, editTitle){
    this.layerEditorInput.val(layerName);
    this.layerEditorTitle.text(editTitle);
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
  editLayer: function(layerName, callback, editTitle){
    this._reset(layerName, editTitle);

    this.callback = callback;

    this._show();
  }
});

var LayerListDataController = (function(){

  var ALL_MAP_KEY = 'ALL_MAP_';

  var MAP_LAYER_KEY = 'MAP_';

  var LAST_MAP_KEY = 'LAST_MAP_';

  var MAP_ID_PREFIX = 'MAP_ID';

  var LayerListDataControllerClass = function(){
    this.userid = null;


    this.allMaps = [];

    
  };


  utils.extend(LayerListDataControllerClass.prototype, {
    setUserid: function(userid){
      this.userid = userid;

      var allMapsStr = storage.getItem(ALL_MAP_KEY + userid);
      if(allMapsStr){
        this.allMaps = JSON.parse(allMapsStr);
      }
    },
    getLastEditMap: function(){
      var lastMap = storage.getItem(LAST_MAP_KEY + this.userid);
      if(lastMap){
        this.currentEditMap = this.getMap(lastMap);
      } else {
        this.currentEditMap = this.createDefaultMap();
      }

      return this.currentEditMap;
    },
    setDefaultMap: function(mapId){
      storage.setItem(LAST_MAP_KEY + this.userid, mapId);
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
      var id = utils.uuid(MAP_ID_PREFIX);
      var map = {
        id: id,
        name: name,
        ctime: Date.now(),
        treeData: [{
          id: id,
          name: name,
          isParent: true
        }]
      };

      this.allMaps.splice(0, 0, map.id);

      storage.setItem(ALL_MAP_KEY + this.userid, JSON.stringify(this.allMaps));

      storage.setItem(MAP_LAYER_KEY + map.id, JSON.stringify(map));

      return map;
    },
    addMapObject: function(mapObject){
      var id = utils.uuid(MAP_ID_PREFIX);
      var map = {
        id: id,
        name: mapObject.name,
        ctime: Date.now(),
        treeData: mapObject.treeData
      };

      this.allMaps.splice(0, 0, map.id);

      storage.setItem(ALL_MAP_KEY + this.userid, JSON.stringify(this.allMaps));

      storage.setItem(MAP_LAYER_KEY + map.id, JSON.stringify(map));

      return map;
    },
    updateMap: function(map){
      storage.setItem(MAP_LAYER_KEY + map.id, JSON.stringify(map));
    },
    removeMap: function(mapId){
      storage.removeItem(MAP_LAYER_KEY + mapId);
      var index = this.allMaps.indexOf(mapId);
      if(index >= 0){
        this.allMaps.splice(index, 1);
        storage.removeItem(LAST_MAP_KEY + this.userid);
        storage.setItem(ALL_MAP_KEY + this.userid, JSON.stringify(this.allMaps));
      }
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


    this.mapEditor = new MapEditor();

    this.layerListDataController = new LayerListDataController();
    this.layerListViewController = new LayerListViewController(this.layerListDataController);

    this.userLoginRegister = new UserLoginRegister();


    this._initZTree();

    this._autoLogin();

    this._bindEvent();
  };


  utils.extend(LayerManagerClass.prototype, {
    _initZTree: function(){
      var that = this;
      var setting = {
        data: {
          keep: {
            parent: true
          }
        },
        edit: {
          drag: {
            inner: false
          },
          enable: true
        },
        
        view: {
          expandSpeed: ''
        },
        selectedMulti: false,
        callback: {
          beforeRemove: function(treeId, treeNode){
            if(treeNode.getParentNode()){
              return true;
            } else {
              return false;
            }
          },
          onClick: function(event, treeId, treeNode){
            if(!treeNode.isParent){
              win.cesiumDrawer.flyToObj(treeNode.id);
            }
          },
          onRename: function(event, treeId, treeNode){
            if(!treeNode.getParentNode()){
              that.mapTitle.text(treeNode.name);
              that.mapObject.name = treeNode.name;
            }
            that.saveTree();
          },
          onRemove: function(event, treeId, treeNode){
            if(treeNode.isParent){
              var nodes = that.zTree.transformToArray(treeNode.children);
              for(var i = 0; i < nodes.length; i ++){
                win.cesiumDrawer.removeObject(nodes[i].id);
              }
            } else {
              win.cesiumDrawer.removeObject(treeNode.id);
            }
            that.saveTree();
          }
        }
      };

      this.zTree = $.fn.zTree.init($("#mapTree"), setting);
    },
    _bindEvent: function(){
      var that = this;


      var mapOperationsTimeout = null;

      $('.layer-list-manager-bar .operations').on('mouseout', function(){
        win.clearTimeout(mapOperationsTimeout);
        mapOperationsTimeout = win.setTimeout(function(){
          that.mapOperations.hide();
        }, 2000);
      });

      that.mapOperations.on('mouseover', function(){
        win.clearTimeout(mapOperationsTimeout);
      }).on('mouseout', function(){
        win.clearTimeout(mapOperationsTimeout);
        mapOperationsTimeout = win.setTimeout(function(){
          that.mapOperations.hide();
        }, 200);
      });


      $('.layer-list-manager-bar').on('click', '.operations', function(){
        // that.mapOperations.toggle();
        that.mapOperations.show();
      }).on('click', '.add-layer', function(){
        that.addParentNode();
      });

      that.mapOperations.on('click', '.create', function(){
        that.mapOperations.hide();
        that.mapEditor.createMap(function(mapName){
          that.showMap(that.layerListDataController.addMap(mapName));
        });
      }).on('click', '.open', function(){
        that.mapOperations.hide();
        that.layerListViewController.openMap(function(map){
          that.showMap(map);
        });
      }).on('click', '.delete', function(){
        that.mapOperations.hide();
        that.layerListDataController.removeMap(that.mapObject.id);
        var lastEditMap = that.layerListDataController.getLastEditMap();
        that.showMap(lastEditMap);
      }).on('click', '.export', function(){
        that.convertMapObject();
        var blob = new Blob([JSON.stringify(that.mapObject)], {type: "text/plain;charset=utf-8"});
        saveAs(blob, that.mapObject.name + '.json');
        that.mapOperations.hide();
      }).on('click', '.import', function(){
        that.mapOperations.hide();
        $('#selectFileInput').click();
      });


      $('#selectFileInput').on('change', function(e){
        var files = e.target.files || e.dataTransfer.files;
        if(files.length){
          var file = files[0];
          if(file.type.indexOf('json')){
            var reader = new FileReader();

            reader.onload = function(e){
              var fileContent = e.target.result;
              if(fileContent){
                try{
                  var fileJSON = JSON.parse(fileContent);
                  
                  var map = that.layerListDataController.addMapObject(fileJSON);
                  that.showMap(map);
                  that.layerListDataController.setDefaultMap(map.id);

                }catch(e){

                }
              }
            };
            reader.readAsText(file);
          } else {

          }
        }
      });

      that.mapTitle.on('click', function(){
        that.mapEditor.editMap(that.mapObject.name, function(mapName){
          that.mapObject.name = mapName;
          that.mapTitle.text(mapName);
          if(that.zTree.getNodes().length){
            var node = that.zTree.getNodes()[0];
            node.name = mapName;
            that.zTree.updateNode(node);
          }
          that.saveTree();
        });
      });

      $('#loginTrigger').on('click', function(){
        that._login();
      });

      $('#logoutTrigger').on('click', function(){
        that._logout();
      });


      win.cesiumDrawer.addListener('polylineCreated', function(data){
        that._addObject(data.id, '未命名的折线', data.info, 'polyline');
      });

      win.cesiumDrawer.addListener('edited', function(data){
        if(data.positions){
          that._updateObject(data.id, data.positions, 'positions');
        } else {
          that._updateObject(data.id, data.position, 'position');
        }
        
      });

      win.cesiumDrawer.addListener('labelCreated', function(data){
        that._addObject(data.id, data.text, {text: data.text, position: data.position, fillColor: data.fillColor}, 'label');
      });
    },

    _addObject: function(id, name, infos, type){

      this.zTree.addNodes(this._getSelectedParentNode(), {
        id: id,
        name: name,
        data: {
          type: type,
          cesiumInfos: infos
        },
        isParent: false
      });

      this.saveTree();
    },

    _updateObject: function(id, value, key){

      var node = this.zTree.getNodesByParam('id', id, null);
      if(node.length){
        node = node[0];
        node.data.cesiumInfos[key] = value;

        this.saveTree();
      }
    },

    _autoLogin: function(){
      var userObj = this.userLoginRegister.autoLogin();
      if(userObj){
        this._onUserLogin(userObj);
      }
    },

    showMap: function(mapObject){
      if(this.zTree.getNodes().length){
        this.removeObjects();
        this.zTree.removeNode(this.zTree.getNodes()[0]);
      }

      this.mapObject = mapObject;

      this.layerListDataController.setDefaultMap(mapObject.id);

      this.mapTitle.html(this.mapObject.name);

      this.dom.fadeIn(100);

      this.zTree.addNodes(null, mapObject.treeData[0]);

      var cesiumNodes = [];
      var simpleNodes = this.zTree.transformToArray(mapObject.treeData);

      for(var i = 0; i < simpleNodes.length; i ++){
        if(!simpleNodes[i].isParent){
          cesiumNodes.push({
            id: simpleNodes[i].id,
            type: simpleNodes[i].data.type,
            cesiumInfos: simpleNodes[i].data.cesiumInfos
          });
        }
      }
      this.showObjects(cesiumNodes);
    },

    _getSelectedParentNode: function(){
      var nodes = this.zTree.getSelectedNodes();
      if(nodes.length){
        var node = nodes[0];
        if(node.isParent){
          return node;
        } else {
          node.getParentNode();
        }
      } else {
        return this.zTree.getNodes()[0];
      }
    },

    addParentNode: function(){
      var pNode = this._getSelectedParentNode();
      this.zTree.addNodes(pNode, {name: '新建文件夹', isParent: true});
      this.saveTree();
    },

    saveTree: function(){
      this.mapObject.treeData = this.zTree.getNodes();
      this.layerListDataController.updateMap(this.mapObject);
    },

    removeObjects: function(){
      var cesiumNodes = [];
      var simpleNodes = this.zTree.transformToArray(this.mapObject.treeData);

      for(var i = 0; i < simpleNodes.length; i ++){
        if(!simpleNodes[i].isParent){
          cesiumNodes.push({
            id: simpleNodes[i].id,
            type: simpleNodes[i].data.type,
            cesiumInfos: simpleNodes[i].data.cesiumInfos
          });
        }
      }

      for(var i = 0; i < cesiumNodes.length; i ++){
        win.cesiumDrawer.removeObject(cesiumNodes[i].id);
      }
    },

    showObjects: function(objectList){
      for(var i = 0; i < objectList.length; i ++){
        win.cesiumDrawer.drawOrShowObject(objectList[i]);
      }
    },

    _onUserLogin: function(userObj){
      $('#usernameSpan').text(userObj.username);
      $('#loginTrigger').hide();
      $('#userPanel').show();


      this.layerListDataController.setUserid(userObj.userid);

      var lastEditMap = this.layerListDataController.getLastEditMap();
      this.showMap(lastEditMap);

      $('.search-bar').css('left', 330);
      $('#layerTools').show();
    },
    _logout: function(){
      this.userLoginRegister.logout();
      $('#loginTrigger').show();
      $('#userPanel').hide();

      $('.search-bar').css('left', 30);
      $('#layerTools').hide();
      this.dom.fadeOut(100);

      this.removeObjects();
    },
    _login: function(){
      var that = this;
      that.userLoginRegister.login(function(user){
        that._onUserLogin(user);
      });
    },

    start: function(){
    },
    convertMapObject: function(){
      var nodes = this.zTree.transformToArray(this.zTree.getNodes());
      for(var i = 0; i < nodes.length; i ++ ){
        if(nodes[i].data){
          if(nodes[i].data.type == 'label'){
            nodes[i].data.cesiumInfos.lookAt = utils.cartesian2Coord(new Cesium.Cartesian3(nodes[i].data.cesiumInfos.position.x, nodes[i].data.cesiumInfos.position.y, nodes[i].data.cesiumInfos.position.z), 10);
            console.log(nodes[i]);
          }
        }
      }
      this.mapObject.treeNode = this.zTree.getNodes();
    }
  });


  return LayerManagerClass;

})();

var MapTools = (function(){
  var MapToolsClass = function(){

    this.dom = $('#layerTools');

    this.allTools = this.dom.find('.layer-tool');

    this.layerToolsDistance = $('#layerToolsDistance');

    this.layerToolsPolyline = $('#layerToolsPolyline');

    this.layerToolsLabel = $('#layerToolsLabel');

    this.layerToolsHand = $('#layerToolsHand');



    this.init();
  };


  utils.extend(MapToolsClass.prototype, {
    init: function(){
      this.layerToolsHand.addClass('selected');

      var that = this;

      that.layerToolsHand.on('click', function(){
        win.uiApp.enableLocationShower = true;
        that.allTools.removeClass('selected');
        $(this).addClass('selected');
      });

      that.layerToolsLabel.on('click', function(){
        
        if($(this).hasClass('selected')){
          win.uiApp.enableLocationShower = true;
          that.allTools.removeClass('selected');
          that.layerToolsHand.addClass('selected');
          win.cesiumDrawer.stopDrawing();
        } else {
          win.uiApp.enableLocationShower = false;
          that.allTools.removeClass('selected');
          $(this).addClass('selected');
          win.cesiumDrawer.startDrawingLabel();
        }
      });

      win.cesiumDrawer.addListener('labelCreated', function(){
        // win.cesiumDrawer.startDrawingLabel();
        setTimeout(function(){
          win.cesiumDrawer.startDrawingLabel();
        }, 100);
      });

      win.cesiumDrawer.addListener('labelCreateCancel', function(){
        win.uiApp.enableLocationShower = true;
        that.allTools.removeClass('selected');
        that.layerToolsHand.addClass('selected');
      });

      that.layerToolsPolyline.on('click', function(){
        win.uiApp.enableLocationShower = false;
        that.allTools.removeClass('selected');
        $(this).addClass('selected');
        win.cesiumDrawer.startDrawingPolyline();
      });

      win.cesiumDrawer.addListener('polylineCreated', function(){
        win.uiApp.enableLocationShower = true;
        that.allTools.removeClass('selected');
        that.layerToolsHand.addClass('selected');
      });


      that.layerToolsDistance.on('click', function(){
        win.uiApp.enableLocationShower = false;
        that.allTools.removeClass('selected');
        $(this).addClass('selected');
        win.cesiumDrawer.startMeasureDistance();
      });

      win.cesiumDrawer.addListener('measureDistanceFinished', function(){
        win.uiApp.enableLocationShower = true;
        that.allTools.removeClass('selected');
        that.layerToolsHand.addClass('selected');
      });

      $('#layerToolsSettings').on('click', function(){
        Settings.modifySettings();
      });
    }
  });



  return MapToolsClass;
})();


var layerManager = new LayerManager();
layerManager.start();

var mapTools = new MapTools();




// layerManager.showMap({name: '北京市地图'}, [{name: '回龙观地区', objectList: [{name: '标记1', type: 1, data: ''}, {name: '标记1', type: 1, data: ''}]}, {name: '回龙观地区', objectList: [{name: '标记1', type: 1, data: ''}, {name: '标记1', type: 1, data: ''}, {name: '折线', type: 2, data: ''}]}]);

})(window, document);
