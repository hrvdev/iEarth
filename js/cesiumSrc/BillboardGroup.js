var BillboardGroup = (function(){


  var ellipsoid = Cesium.Ellipsoid.WGS84;

  var BillboardGroup = function(cesiumEditor, options){
    this._cesiumEditor = cesiumEditor;
    this._scene = cesiumEditor._scene;

    this._options = utils.copyOptions(options, Default.defaultBillboard);

    // create one common billboard collection for all billboards
    var b = new Cesium.BillboardCollection();
    var a = this._scene.context.createTextureAtlas();
    b.textureAtlas = a;
    this._scene.primitives.add(b);
    this._billboards = b;
    this._textureAtlas = a;
    // keep an ordered list of billboards
    this._orderedBillboards = [];

    // create the image for the billboards
    var image = new Image();
    var _self = this;
    image.onload = function() {
      a.addImage(image);
    };
    image.src = options.iconUrl;
  };

  BillboardGroup.prototype.createBillboard = function(position, callbacks){
    var billboard = this._billboards.add({
      show : true,
      position : position,
      pixelOffset : new Cesium.Cartesian2(this._options.shiftX, this._options.shiftY),
      eyeOffset : new Cesium.Cartesian3(0.0, 0.0, 0.0),
      horizontalOrigin : Cesium.HorizontalOrigin.CENTER,
      verticalOrigin : Cesium.VerticalOrigin.CENTER,
      scale : 1.0,
      imageIndex : 0,
      color : new Cesium.Color(1.0, 1.0, 1.0, 1.0)
    });

    if(callbacks){
      var that = this;
      var screenSpaceCameraController = this._scene.screenSpaceCameraController;
      function enableRotation(enable){
        screenSpaceCameraController.enableRotate = enable;
      }

      function getIndex(){
        for (var i = 0, I = that._orderedBillboards.length; i < I && that._orderedBillboards[i] != billboard; ++i);
        return i;
      }

      if(callbacks.dragHandlers){
        utils.setListener(billboard, 'leftDown', function(position){
          enableRotation(false);

          function onDrag(position){
            billboard.setPosition(position);
            callbacks.dragHandlers.onDrag && callbacks.dragHandlers.onDrag(getIndex(), position);
          }

          function onDragEnd(position){
            handler.destroy();
            enableRotation(true);
            callbacks.dragHandlers.onDragEnd && callbacks.dragHandlers.onDragEnd(getIndex(), position);
          }


          var handler = new Cesium.ScreenSpaceEventHandler(that._scene.canvas);

          handler.setInputAction(function(movement){
            var cartesian = that._scene.camera.pickEllipsoid(movement.endPosition, ellipsoid);
            if (cartesian) {
              onDrag(cartesian);
            } else {
              onDragEnd(cartesian);
            }
          }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

          handler.setInputAction(function(movement) {
            onDragEnd(that._scene.camera.pickEllipsoid(movement.position, ellipsoid));
          }, Cesium.ScreenSpaceEventType.LEFT_UP);

          callbacks.dragHandlers.onDragStart && callbacks.dragHandlers.onDragStart(getIndex(), that._scene.camera.pickEllipsoid(position, ellipsoid));
        });
      }
      if(callbacks.onOutHandlers){
        // console.log('abc');
        utils.setListener(billboard, 'mouseMove', function(position) {
          // console.log('mouseMove');
          callbacks.onOutHandlers.onMouseOn && callbacks.onOutHandlers.onMouseOn(getIndex(), position);
        });
        utils.setListener(billboard, 'mouseOut', function(position) {
          // console.log('mouseOut');
          callbacks.onOutHandlers.onMouseOut && callbacks.onOutHandlers.onMouseOut();
        });
      }
    }

    return billboard;
  };

  BillboardGroup.prototype.addBillboard = function(position, callbacks) {
    this._orderedBillboards.push(this.createBillboard(position, callbacks));
  };

  BillboardGroup.prototype.getBillboard = function(index) {
    return this._orderedBillboards[index];
  };

  BillboardGroup.prototype.addBillboards = function(positions, callbacks) {
    var index =  0;
    for(; index < positions.length; index++) {
      this.addBillboard(positions[index], callbacks);
    }
  };

  BillboardGroup.prototype.countBillboards = function(){
    return this._orderedBillboards.length;
  };

  BillboardGroup.prototype.insertBillboard = function(index, position, callbacks) {
    this._orderedBillboards.splice(index, 0, this.createBillboard(position, callbacks));
  };

  BillboardGroup.prototype.setOnTop = function() {
    this._scene.primitives.raiseToTop(this._billboards);
  };

  BillboardGroup.prototype.updateBillboardsPositions = function(positions){
    var index =  0;
    for(; index < positions.length; index++) {
      this.getBillboard(index).setPosition(positions[index]);
    }
  };


  BillboardGroup.prototype.remove = function() {
    this._billboards = this._billboards && this._billboards.removeAll() && this._billboards.destroy();
  };

  return BillboardGroup;

})();
