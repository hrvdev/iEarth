var CesiumEditor = (function(){


  var ellipsoid = Cesium.Ellipsoid.WGS84;

  var CesiumEditor = function(){
    var cesiumWidget = window.cesiumViewer.cesiumWidget;

    this.cesiumViewer = window.cesiumViewer;
    this._scene = cesiumWidget.scene;
    this._surfaces = [];

    this.primitivesCache = {};

    this.initialiseHandlers();
    this.enhancePrimitives();

    this.listeners = {};

    this.idGenerator = 0;
  };

  CesiumEditor.prototype.disableMouseEvent = function(){
    var scene = this._scene;
    scene.screenSpaceCameraController.enableRotate = false;
    scene.screenSpaceCameraController.enableTranslate = false;
    scene.screenSpaceCameraController.enableZoom = false;
    scene.screenSpaceCameraController.enableTilt = false;
    scene.screenSpaceCameraController.enableLook = false;
  };

  CesiumEditor.prototype.enableMouseEvent = function(){
    var scene = this._scene;
    scene.screenSpaceCameraController.enableRotate = true;
    scene.screenSpaceCameraController.enableTranslate = true;
    scene.screenSpaceCameraController.enableZoom = true;
    scene.screenSpaceCameraController.enableTilt = true;
    scene.screenSpaceCameraController.enableLook = true;
  };

  CesiumEditor.prototype.nextID = function(){
    return 'CesiumEditor_id_' + utils.uuid('ce');
  };

  CesiumEditor.prototype.addListener = function(type, callback, context){
    if(!this.listeners[type]){
      this.listeners[type] = [];
    }
    this.listeners[type].push({
      callback: callback,
      context: context
    });
  };

  CesiumEditor.prototype.trigger = function(type, data){
    var listeners = this.listeners[type];
    if(listeners){
      for(var i = 0, len = listeners.length; i < len; i ++){
        listeners[i].callback.call(listeners[i].context, data);
      }
    }
  };

  CesiumEditor.prototype.initialiseHandlers = function(){
    var scene = this._scene;
    var that = this;

    var handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    function callPrimitiveCallback(name, position){
      // 如果正在绘制过程中
      if(that._handlersMuted == true) return;
      var pickedObject = scene.pick(position);
      if(pickedObject && pickedObject.primitive && pickedObject.primitive[name]){
        pickedObject.primitive[name](position);
      } else if(pickedObject && pickedObject.collection && pickedObject.collection[name]){
        pickedObject.collection[name](position);
      }
    };



    handler.setInputAction(function(movement){
      callPrimitiveCallback('leftClick', movement.position);
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    var mouseOutObject;
    handler.setInputAction(function(movement){
      if(that._handlersMuted == true) return;

      var pickedObject = scene.pick(movement.endPosition);

      if(mouseOutObject && (!pickedObject || mouseOutObject != pickedObject.primitive)){
        !(mouseOutObject.isDestroyed && mouseOutObject.isDestroyed()) && mouseOutObject.mouseOut(movement.endPosition);
        mouseOutObject = null;
      }

      if(pickedObject && pickedObject.primitive){
        pickedObject = pickedObject.primitive;
        if(pickedObject.mouseOut){
          mouseOutObject = pickedObject;
        }
        if(pickedObject.mouseMove){
          pickedObject.mouseMove(movement.endPosition);
        }
      }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

    handler.setInputAction(function(movement) {
      callPrimitiveCallback('leftDoubleClick', movement.position);
    }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

    handler.setInputAction(function(movement) {
      callPrimitiveCallback('leftUp', movement.position);
    }, Cesium.ScreenSpaceEventType.LEFT_UP);
    
    handler.setInputAction(function(movement) {
      callPrimitiveCallback('leftDown', movement.position);
    }, Cesium.ScreenSpaceEventType.LEFT_DOWN);
  };

  CesiumEditor.prototype.disableAllHighlights = function() {
    this.setHighlighted(undefined);
  };

  CesiumEditor.prototype.setHighlighted = function(surface) {
    if(this._highlightedSurface && !this._highlightedSurface.isDestroyed() && this._highlightedSurface != surface) {
      this._highlightedSurface.setHighlighted(false);
    }
    this._highlightedSurface = surface;
  };

  CesiumEditor.prototype.disableAllEditMode = function() {
    this.setEdited(undefined);
  };

  CesiumEditor.prototype.setEdited = function(surface) {
    if(this._editedSurface && !this._editedSurface.isDestroyed()) {
      this._editedSurface.setEditMode(false);
    }
    this._editedSurface = surface;
  };

  CesiumEditor.prototype.registerEditableShape = function(surface){
    var _self = this;

    // handlers for interactions
    // highlight polygon when mouse is entering
    utils.setListener(surface, 'mouseMove', function(position) {
      surface.setHighlighted(true);
    });
    
    // hide the highlighting when mouse is leaving the polygon
    utils.setListener(surface, 'mouseOut', function(position) {
      // surface.setHighlighted(false);
      _self.disableAllHighlights();
    });
    
    utils.setListener(surface, 'leftClick', function(position) {
      surface.setEditMode(true);
      if(surface.id){
        _self.trigger('willEdit', surface.id);
      }
    });
  };


  CesiumEditor.prototype.enhancePrimitives = function(){
    var cesiumEditor = this;

    function setHighlighted(highlighted){
      var scene = cesiumEditor._scene;

      // if no change
      // if already highlighted, the outline polygon will be available
      if(this._highlighted && this._highlighted == highlighted) {
        return;
      }
      
      // disable if already in edit mode
      if(this._editMode === true) {
        return;
      }
      
      this._highlighted = highlighted;
      
      // highlight by creating an outline polygon matching the polygon points
      if(highlighted) {
        // make sure all other shapes are not highlighted
        cesiumEditor.setHighlighted(this);
        this._strokeColor = this.strokeColor;
        this.setStrokeStyle(Cesium.Color.fromCssColorString('white'), this.strokeWidth);
      } else {
        if(this._strokeColor) {
          this.setStrokeStyle(this._strokeColor, this.strokeWidth);
        } else {
          this.setStrokeStyle(undefined, undefined);
        }
      }
    }

    function setEditMode(editMode){
      if(this._editMode == editMode){
        return;
      }

      cesiumEditor.disableAllHighlights();

      if(editMode){
        cesiumEditor.setEdited(this);

        var scene = cesiumEditor._scene;
        var that = this;
        if(that._markers == null){
          var markers = new BillboardGroup(cesiumEditor, Default.dragBillboard);
          var editMarkers = new BillboardGroup(cesiumEditor, Default.dragHalfBillboard);
          var positions = that.getPositions();

          function onEdited(){
            that.executeListeners({name: 'onEdited', positions: that.getPositions()});
          }

          function updateHalfMarkers(index, positions) {
              // update the half markers before and after the index
              var editIndex = index - 1 < 0 ? positions.length - 1 : index - 1;
              if(editIndex < editMarkers.countBillboards()) {
                  editMarkers.getBillboard(editIndex).setPosition(calculateHalfMarkerPosition(editIndex));
              }
              editIndex = index;
              if(editIndex < editMarkers.countBillboards()) {
                  editMarkers.getBillboard(editIndex).setPosition(calculateHalfMarkerPosition(editIndex));
              }
          }

          var handleMarkerChanges = {
            dragHandlers: {
              onDrag: function(index, position){
                positions = that.getPositions();
                positions[index] = position;
                that.setPositions(positions);
                updateHalfMarkers(index, positions);
              },
              onDragEnd: function(index, position){
                onEdited();
              }
            }
          };

          markers.addBillboards(positions, handleMarkerChanges);

          that._markers = markers;

          var handleEditMarkerChanges = {
              dragHandlers: {
                  onDragStart: function(index, position) {
                      // add a new position to the polygon but not a new marker yet
                      positions = that.getPositions();
                      this.index = index + 1;
                      positions.splice(this.index, 0, position);
                      that.setPositions(positions);
                  },
                  onDrag: function(index, position) {
                      positions = that.getPositions();
                      positions[this.index] = position;
                      that.setPositions(positions);
                  },
                  onDragEnd: function(index, position) {
                      // create new sets of makers for editing
                      markers.insertBillboard(this.index, position, handleMarkerChanges);
                      editMarkers.getBillboard(this.index - 1).setPosition(calculateHalfMarkerPosition(this.index - 1));
                      editMarkers.insertBillboard(this.index, calculateHalfMarkerPosition(this.index), handleEditMarkerChanges);
                      onEdited();
                  }
              }
          };

          function calculateHalfMarkerPosition(index) {
              positions = that.getPositions();
              return ellipsoid.scaleToGeodeticSurface(Cesium.Cartesian3.lerp(positions[index], positions[index < positions.length - 1 ? index + 1 : 0], 0.5));
          }
          var halfPositions = [];
          var index = 0;
          var length = positions.length - 1;
          for(; index < length; index++) {
              halfPositions.push(calculateHalfMarkerPosition(index));
          }

          editMarkers.addBillboards(halfPositions, handleEditMarkerChanges);
          that._editMarkers = editMarkers;

          // add a handler for clicking in the globe
          this._globeClickhandler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
          this._globeClickhandler.setInputAction(function(movement){
            var pickedObject = scene.pick(movement.position);
            if(!(pickedObject && pickedObject.primitive)) {
              that.setEditMode(false);
            }
          }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

          markers.setOnTop();
        }
        this._editMode = true;
      } else {
        if(this._markers != null){
          this._markers.remove();
          this._markers = null;
          this._editMarkers.remove();
          this._editMarkers = null;
          this._globeClickhandler.destroy();
        }

        this._editMode = false;
      }
    };

    Cesium.Billboard.prototype.setEditable = function(){};

    PolylinePrimitive.prototype.setEditable = function(){
      if(this.setEditMode){
        return;
      }

      var polyline = this;
      polyline.isPolygon = false;
      polyline.asynchronous = false;

      cesiumEditor.registerEditableShape(polyline);

      polyline.setEditMode = setEditMode;

      polyline.setHighlighted = function(highlighted){

        if(this._highlighted && this._highlighted == highlighted) {
          return;
        }

        if(this._editMode === true){
          return;
        }

        this._highlighted = highlighted;

        if(highlighted){
          cesiumEditor.setHighlighted(this);
          this.setWidth(this.getWidth() * 2);
        } else {
          this.setWidth(this.getWidth() / 2);
        }
      };

      polyline.setEditMode(false);
      utils.enhanceWithListeners(polyline);
      polyline.addListener('onEdited', function(){
        cesiumEditor.trigger('edited', {
          id: polyline.id,
          positions: polyline.getPositions()
        });
      });
    };

  };


  CesiumEditor.prototype.muteHandlers = function(muted) {
    // 是否关闭
    this._handlersMuted = muted;
  };

  CesiumEditor.prototype.startDrawing = function(cleanUp){
    // undo current edit of shapes
    this.disableAllEditMode();

    if(this.editCleanUp){
      this.editCleanUp();
    }

    this.editCleanUp = cleanUp;
    this.muteHandlers(true);
  };

  CesiumEditor.prototype.stopDrawing = function(){
    if(this.editCleanUp){
      this.editCleanUp();
      this.editCleanUp = null;
    }

    this.muteHandlers(false);
  };

  CesiumEditor.prototype.startDrawingPolyline = function() {
    var options = utils.copyOptions({}, Default.defaultPolylineOptions());
    this.startDrawingPolyshape(false, options);
  };

  

  CesiumEditor.prototype.startDrawingPolyshape = function(isPolygon, options){
    this.startDrawing(function(){
      mouseHandler.destroy();
      markers.remove();
      primitives.remove(poly);
      if(isPolygon){
        that.trigger('polygonCreateCancel');
      } else {
        that.trigger('polylineCreateCancel');
      }
    });

    var that = this;
    var scene = that._scene;
    var primitives = scene.primitives;

    var minPoints = isPolygon ? 3 : 2;

    var poly;
    if(isPolygon){
      poly = new Cesium.Polygon(options);
    } else {
      poly = new PolylinePrimitive(Default.defaultPolylineOptions());
    }

    poly.asynchronous = false;
    primitives.add(poly);

    var positions = [];
    var markers = new BillboardGroup(this, Default.defaultBillboard);

    var mouseHandler = new Cesium.ScreenSpaceEventHandler(scene.canvas);

    // Now wait for start
    mouseHandler.setInputAction(function(movement) {
      if(movement.position != null) {
        var cartesian = scene.camera.pickEllipsoid(movement.position, ellipsoid);
        if (cartesian) {
          // first click
          if(positions.length == 0) {
            positions.push(cartesian.clone());
            markers.addBillboard(positions[0]);
          }
          if(positions.length >= minPoints) {
            poly.setPositions(positions);
          }

          positions.push(cartesian);
          // add marker at the new position
          markers.addBillboard(cartesian);
        }
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    mouseHandler.setInputAction(function(movement) {
      var position = movement.endPosition;
      if(position != null) {
        if(positions.length == 0) {
                    // tooltip.showAt(position, "<p>Click to add first point</p>");
        } else {
          var cartesian = scene.camera.pickEllipsoid(position, ellipsoid);
          if (cartesian) {
            positions.pop();
            // make sure it is slightly different
            cartesian.y += (1 + Math.random());
            positions.push(cartesian);
            if(positions.length >= minPoints) {
              poly.setPositions(positions);
            }
          }
        }
      }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

    mouseHandler.setInputAction(function(movement) {
      var position = movement.position;
      if(position != null) {
        if(positions.length < minPoints + 2) {
          return;
        } else {
          var cartesian = scene.camera.pickEllipsoid(position, ellipsoid);
          if (cartesian) {
            that.stopDrawing();
            that.trigger(positions.splice(positions.length - 2));

            var theId = that.nextID();

            if(isPolygon){
              var polygon = new PolygonPrimitive({
                  id: theId,
                  positions: positions
              });
              primitives.add(polygon);
              polygon.setEditable();

              that.primitivesCache[theId] = polygon;

              that.trigger('polygonCreated', {id: theId, positions: positions});
            } else {
              var options = Default.defaultPolylineOptions();
              var polyline = new PolylinePrimitive(options);
              polyline.id = theId;
              polyline.positions = positions;
              primitives.add(polyline);

              polyline.setEditable();

              that.primitivesCache[theId] = polyline;
              that.trigger('polylineCreated', {id: theId, info: {positions: positions, width: options.width, color: options.material.uniforms.color}});
            }
          }
        }
      }
    }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
  };

  CesiumEditor.prototype.startMeasureDistance = function(options){
    var that = this;

    that.startDrawing(function(){
      primitives.remove(labels);
      primitives.remove(poly);
      markers.remove();
    });

    that.muteHandlers(false);

    var scene = that._scene;
    var primitives = scene.primitives;

    var handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);

    var poly = new PolylinePrimitive(Default.defaultMeasurePolylineOptions);
    var markers = new BillboardGroup(this, Default.defaultBillboard);

    var labels = new Cesium.LabelCollection();
    var label = labels.add({
      fillColor: Cesium.Color.fromCssColorString('#fff'),
      show: true,
      font: '12px Helvetica'
    });

    poly.asynchronous = false;

    primitives.add(poly);
    primitives.add(labels);



    var positions = [];

    var handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);

    var handleMarkerChanges = {
      onOutHandlers: {
        onMouseOn: function(index, position){
          var p2 = positions[index];
          var p1 = positions[index - 1];

          if(index > 0){
            if(index >= positions.length - 1){
              label.setPosition(p2);
              label.setText('共:' + utils.getTotalDistance(positions, 'km'));
            } else {
              label.setPosition(p2);
              label.setText(utils.calDistance(p1.x, p1.y, p2.x, p2.y, 'km') + ' 共:' + utils.getTotalDistance(positions.slice(0, index + 1), 'km'));
            }
            
          }
        }
      }
    };

    handler.setInputAction(function(data){
      if(data.position != null){
        // 从鼠标位置转换成笛卡尔坐标
        var cartesian = scene.camera.pickEllipsoid(data.position, ellipsoid);
        if(cartesian){
          markers.addBillboard(cartesian, handleMarkerChanges);
          markers.setOnTop();

          positions.push(cartesian);

          if(positions.length >= 2){
            poly.setPositions(positions);

          } else {
            var theLabel = labels.add({
              fillColor: Cesium.Color.fromCssColorString('#fff'),
              show: true,
              font: '12px Helvetica'
            });
            theLabel.setText('起点');
            theLabel.setPosition(cartesian);
          }
        }
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    handler.setInputAction(function(data){
      var position = data.endPosition;
      if(position != null){
        var cartesian = scene.camera.pickEllipsoid(position, ellipsoid);
        if(cartesian){
          document.body.style.cursor = 'crosshair';
        } else {
          document.body.style.cursor = 'default';
        }
        if(positions.length > 0){
          if(cartesian){
            var p1 = positions[positions.length - 1];

            label.setText(utils.calDistance(cartesian.x, cartesian.y, p1.x, p1.y, 'km'));
            label.setPosition(cartesian);

            cartesian.y += (1 + Math.random());
            if(positions.length >= 1){
              poly.setPositions(positions.concat(cartesian));
            }
          }
        }
      }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

    handler.setInputAction(function(data){
      document.body.style.cursor = 'default';
      handler.destroy();
      positions.splice(positions.length - 1);
      that.trigger('measureDistanceFinished');
    }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

  };

  CesiumEditor.prototype.setObjectToEditMode = function(id){
    var obj = this.primitivesCache[id];
    
    if(!obj) return;

    if(obj.setEditMode){
      obj.setEditMode(true);
    } else if(obj instanceof LabelPrimitive){
      obj.label.setEditMode(true);
    }
  };

  CesiumEditor.prototype.removeObject = function(id){
    var obj = this.primitivesCache[id];
    if(obj){
      this.disableAllEditMode();
      var scene = this._scene;
      var primitives = scene.primitives;
      // if(obj instanceof LabelPrimitive){
      //   primitives.remove(obj.getPrimitive());
      // } else {
        primitives.remove(obj);
      // }
      delete this.primitivesCache[id];
    }
  };

  CesiumEditor.prototype.flyToObj = function(id){
    var obj = this.primitivesCache[id];
    if(obj && obj.getExtent){
      var extent = obj.getExtent();
      if(extent){
        this.flyToExtent(extent);
      }
    }
  };

  CesiumEditor.prototype.flyToExtent = function(extent){
    var flight = Cesium.CameraFlightPath.createAnimationExtent(this._scene, {
      destination: extent,
      duration: 1000
    });
    this._scene.animations.add(flight);
  };


  CesiumEditor.prototype.drawOrShowObject = function(info){
    var obj = this.primitivesCache[info.id];
    if(obj){
      obj.show = true;
    } else {

      var scene = this._scene;
      var primitives = scene.primitives;

      var polyline = new PolylinePrimitive(Default.createPolyline(info.cesiumInfos.width, info.cesiumInfos.color));
      polyline.id = info.id;
      polyline.positions = info.cesiumInfos.positions;
      primitives.add(polyline);

      polyline.setEditable();

      this.primitivesCache[info.id] = polyline;
    }
  };

  CesiumEditor.prototype.hideObject = function(id){
    var obj = this.primitivesCache[id];
    if(obj){
      obj.show = false;
    }
  };

  


  return CesiumEditor;

})();
