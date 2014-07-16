;(function(doc, win){


var utils = (function(){
  var ellipsoid = Cesium.Ellipsoid.WGS84;

  function clone(from, to) {
    if (from == null || typeof from != "object") return from;
    if (from.constructor != Object && from.constructor != Array) return from;
    if (from.constructor == Date || from.constructor == RegExp || from.constructor == Function ||
      from.constructor == String || from.constructor == Number || from.constructor == Boolean)
      return new from.constructor(from);

    to = to || new from.constructor();

    for (var name in from) {
      to[name] = typeof to[name] == "undefined" ? clone(from[name], null) : to[name];
    }

    return to;
  }
    
  function fillOptions(options, defaultOptions) {
    options = options || {};
    var option;
    for(option in defaultOptions) {
      if(options[option] === undefined) {
        options[option] = clone(defaultOptions[option]);
      }
    }
  }

  function convertDDToDMS(dd){
    var deg = dd | 0; // truncate dd to get degrees
    var frac = Math.abs(dd - deg); // get fractional part
    var min = (frac * 60) | 0; // multiply fraction by 60 and truncate
    var sec = frac * 3600 - min * 60;
    return deg + " " + min.toFixed(3) + "' " + sec.toFixed(3) + "\"";
  }

  // shallow copy
  function copyOptions(options, defaultOptions) {
    var newOptions = clone(options), option;
    for(option in defaultOptions) {
      if(newOptions[option] === undefined) {
        newOptions[option] = clone(defaultOptions[option]);
      }
    }
    return newOptions;
  };

  function getGeodesicPath(cartesians, granularity) {
    var index, cartographicPath = ellipsoid.cartesianArrayToCartographicArray(cartesians), geodesic, increment, ellipsoidCartographicPath = [];
    for(index = 0; index < cartographicPath.length - 1; index++) {
      geodesic = new Cesium.EllipsoidGeodesic(cartographicPath[index], cartographicPath[index + 1]);
      // add a point every granularity
      var totalDistance = geodesic.getSurfaceDistance(),
      distance = 0;
      for(; distance < totalDistance; distance += granularity) {
        ellipsoidCartographicPath.push(geodesic.interpolateUsingSurfaceDistance(distance));
      }
    }
    ellipsoidCartographicPath.push(cartographicPath[cartographicPath.length - 1]);
    return ellipsoid.cartographicArrayToCartesianArray(ellipsoidCartographicPath);
  }

  function setListener(primitive, type, callback) {
    primitive[type] = callback;
  }

  function enhanceWithListeners(element) {

    element._listeners = {};

    element.addListener = function(name, callback) {
      this._listeners[name] = (this._listeners[name] || []);
      this._listeners[name].push(callback);
      return this._listeners[name].length;
    };

    element.executeListeners = function(event, defaultCallback) {
      if(this._listeners[event.name] && this._listeners[event.name].length > 0) {
        var index = 0;
        for(;index < this._listeners[event.name].length; index++) {
          this._listeners[event.name][index](event);
        }
      } else {
        if(defaultCallback) {
          defaultCallback(event);
          }
      }
    };
  }

  function cartesian2Coord(cartesian, fixedNumber){
    var cartographic = ellipsoid.cartesianToCartographic(cartesian);
    return {
      longitude: Cesium.Math.toDegrees(cartographic.longitude).toFixed(fixedNumber),
      latitude: Cesium.Math.toDegrees(cartographic.latitude).toFixed(fixedNumber)
    };
  };

  function readableNum(d){
    var dd = Math.floor(d);
    var dx = d - dd;
    var retAry = [];
    
    while(dd > 0){
      retAry.push(dd % 1000 + '');
      dd = (dd - dd % 1000) / 1000;
    }

    return retAry.reverse().join(',') + (dx.toFixed(2) + '').substring(1,4);
  }

  function calDistance(x1,y1,x2,y2,unit){
    var d = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2,2));
    if(unit == 'm'){
      return readableNum(d) + 'm';
    } else if(unit == 'km') {
      return readableNum(d / 1000) + 'km';
    } else {
      return d;
    }
  }

  function getTotalDistance(poses, unit){
    if(!poses.length || poses.length == 1){
      return 0;
    }
    var pos;;
    var thePos;
    var result = 0;
    for(var i = 1; i < poses.length; i ++){
      pos = poses[i - 1];
      thePos = poses[i];
      result += Math.sqrt(Math.pow(pos.x - thePos.x, 2) + Math.pow(pos.y - thePos.y,2));
    }

    if(unit == 'm'){
      return readableNum(result) + 'm';
    } else if(unit == 'km') {
      return readableNum(result / 1000) + 'km';
    } else {
      return result;
    }
  }


  var toString = Object.prototype.toString;

  function isNumber(obj){
    return toString.call(obj) === '[object Number]';;
  }

  function isString(obj){
    return toString.call(obj) === '[object String]';;
  }

  // rgb(0,0,0)
  var colorReg1 = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i;
  // rgb(0%,0%,0%)
  var colorReg2 = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i;
  // #f00000
  var colorReg3 = /^\#([0-9a-f]{6})$/i;
  // #f00
  var colorReg4 = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i;
  var ColorKeywords = { "aliceblue": 0xF0F8FF, "antiquewhite": 0xFAEBD7, "aqua": 0x00FFFF, "aquamarine": 0x7FFFD4, "azure": 0xF0FFFF,
"beige": 0xF5F5DC, "bisque": 0xFFE4C4, "black": 0x000000, "blanchedalmond": 0xFFEBCD, "blue": 0x0000FF, "blueviolet": 0x8A2BE2,
"brown": 0xA52A2A, "burlywood": 0xDEB887, "cadetblue": 0x5F9EA0, "chartreuse": 0x7FFF00, "chocolate": 0xD2691E, "coral": 0xFF7F50,
"cornflowerblue": 0x6495ED, "cornsilk": 0xFFF8DC, "crimson": 0xDC143C, "cyan": 0x00FFFF, "darkblue": 0x00008B, "darkcyan": 0x008B8B,
"darkgoldenrod": 0xB8860B, "darkgray": 0xA9A9A9, "darkgreen": 0x006400, "darkgrey": 0xA9A9A9, "darkkhaki": 0xBDB76B, "darkmagenta": 0x8B008B,
"darkolivegreen": 0x556B2F, "darkorange": 0xFF8C00, "darkorchid": 0x9932CC, "darkred": 0x8B0000, "darksalmon": 0xE9967A, "darkseagreen": 0x8FBC8F,
"darkslateblue": 0x483D8B, "darkslategray": 0x2F4F4F, "darkslategrey": 0x2F4F4F, "darkturquoise": 0x00CED1, "darkviolet": 0x9400D3,
"deeppink": 0xFF1493, "deepskyblue": 0x00BFFF, "dimgray": 0x696969, "dimgrey": 0x696969, "dodgerblue": 0x1E90FF, "firebrick": 0xB22222,
"floralwhite": 0xFFFAF0, "forestgreen": 0x228B22, "fuchsia": 0xFF00FF, "gainsboro": 0xDCDCDC, "ghostwhite": 0xF8F8FF, "gold": 0xFFD700,
"goldenrod": 0xDAA520, "gray": 0x808080, "green": 0x008000, "greenyellow": 0xADFF2F, "grey": 0x808080, "honeydew": 0xF0FFF0, "hotpink": 0xFF69B4,
"indianred": 0xCD5C5C, "indigo": 0x4B0082, "ivory": 0xFFFFF0, "khaki": 0xF0E68C, "lavender": 0xE6E6FA, "lavenderblush": 0xFFF0F5, "lawngreen": 0x7CFC00,
"lemonchiffon": 0xFFFACD, "lightblue": 0xADD8E6, "lightcoral": 0xF08080, "lightcyan": 0xE0FFFF, "lightgoldenrodyellow": 0xFAFAD2, "lightgray": 0xD3D3D3,
"lightgreen": 0x90EE90, "lightgrey": 0xD3D3D3, "lightpink": 0xFFB6C1, "lightsalmon": 0xFFA07A, "lightseagreen": 0x20B2AA, "lightskyblue": 0x87CEFA,
"lightslategray": 0x778899, "lightslategrey": 0x778899, "lightsteelblue": 0xB0C4DE, "lightyellow": 0xFFFFE0, "lime": 0x00FF00, "limegreen": 0x32CD32,
"linen": 0xFAF0E6, "magenta": 0xFF00FF, "maroon": 0x800000, "mediumaquamarine": 0x66CDAA, "mediumblue": 0x0000CD, "mediumorchid": 0xBA55D3,
"mediumpurple": 0x9370DB, "mediumseagreen": 0x3CB371, "mediumslateblue": 0x7B68EE, "mediumspringgreen": 0x00FA9A, "mediumturquoise": 0x48D1CC,
"mediumvioletred": 0xC71585, "midnightblue": 0x191970, "mintcream": 0xF5FFFA, "mistyrose": 0xFFE4E1, "moccasin": 0xFFE4B5, "navajowhite": 0xFFDEAD,
"navy": 0x000080, "oldlace": 0xFDF5E6, "olive": 0x808000, "olivedrab": 0x6B8E23, "orange": 0xFFA500, "orangered": 0xFF4500, "orchid": 0xDA70D6,
"palegoldenrod": 0xEEE8AA, "palegreen": 0x98FB98, "paleturquoise": 0xAFEEEE, "palevioletred": 0xDB7093, "papayawhip": 0xFFEFD5, "peachpuff": 0xFFDAB9,
"peru": 0xCD853F, "pink": 0xFFC0CB, "plum": 0xDDA0DD, "powderblue": 0xB0E0E6, "purple": 0x800080, "red": 0xFF0000, "rosybrown": 0xBC8F8F,
"royalblue": 0x4169E1, "saddlebrown": 0x8B4513, "salmon": 0xFA8072, "sandybrown": 0xF4A460, "seagreen": 0x2E8B57, "seashell": 0xFFF5EE,
"sienna": 0xA0522D, "silver": 0xC0C0C0, "skyblue": 0x87CEEB, "slateblue": 0x6A5ACD, "slategray": 0x708090, "slategrey": 0x708090, "snow": 0xFFFAFA,
"springgreen": 0x00FF7F, "steelblue": 0x4682B4, "tan": 0xD2B48C, "teal": 0x008080, "thistle": 0xD8BFD8, "tomato": 0xFF6347, "turquoise": 0x40E0D0,
"violet": 0xEE82EE, "wheat": 0xF5DEB3, "white": 0xFFFFFF, "whitesmoke": 0xF5F5F5, "yellow": 0xFFFF00, "yellowgreen": 0x9ACD32 };
  
  function isColor(obj){
    if(isString(obj)){
      if(ColorKeywords[obj]){
        return true;
      }
      return colorReg1.test(obj) || colorReg2.test(obj) || colorReg3.test(obj) || colorReg4.test(obj);
    }

    return false;
  }

  function getColor(colorStr){
    if(isString(colorStr)){

      var colorValue;

      if(colorReg1.test(colorStr)){
        var color = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(colorStr);
        return {
          r: Math.min( 255, parseInt( color[ 1 ], 10 ) ) / 255,
          g: Math.min( 255, parseInt( color[ 2 ], 10 ) ) / 255,
          b: Math.min( 255, parseInt( color[ 3 ], 10 ) ) / 255
        };
      } else if(colorReg2.test(colorStr)){
        var color = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec( colorStr );
        return {
          r: Math.min( 100, parseInt( color[ 1 ], 10 ) ) / 100,
          g: Math.min( 100, parseInt( color[ 2 ], 10 ) ) / 100,
          b: Math.min( 100, parseInt( color[ 3 ], 10 ) ) / 100
        };
      } else if(colorReg3.test(colorStr)){
        var color = /^\#([0-9a-f]{6})$/i.exec( colorStr );
        colorValue = parseInt( color[ 1 ], 16 );
      } else if(colorReg4.test(colorStr)){
        var color = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec( colorStr );
        colorValue = parseInt( color[ 1 ] + color[ 1 ] + color[ 2 ] + color[ 2 ] + color[ 3 ] + color[ 3 ], 16 );
      } else if(ColorKeywords[colorStr]){
        colorValue = ColorKeywords[colorStr];
      }
      
      if(colorValue){
        var hex = Math.floor( colorValue );
        return {
          r: ( hex >> 16 & 255 ) / 255,
          g: ( hex >> 8 & 255 ) / 255,
          b: ( hex & 255 ) / 255
        };
      }
    }
  }

  return {
    clone: clone,
    fillOptions: fillOptions,
    copyOptions: copyOptions,
    getGeodesicPath: getGeodesicPath,
    setListener: setListener,
    enhanceWithListeners: enhanceWithListeners,
    cartesian2Coord: cartesian2Coord,
    calDistance: calDistance,
    getTotalDistance: getTotalDistance,
    isNumber: isNumber,
    isString: isString,
    isColor: isColor,
    getColor: getColor,
    convertDDToDMS: convertDDToDMS
  };
})();

var Default = (function(){

  var material = Cesium.Material.fromType(Cesium.Material.ColorType);
  material.uniforms.color = new Cesium.Color(1.0, 1.0, 0.0, 0.5);

  var greenNoOpacityMaterial = Cesium.Material.fromType(Cesium.Material.ColorType);;
  greenNoOpacityMaterial.uniforms.color = new Cesium.Color(0.0, 1.0, 0.0, 1);

  var defaultShapeOptions = {
    ellipsoid: Cesium.Ellipsoid.WGS84,
    textureRotationAngle: 0.0,
    height: 0.0,
    asynchronous: true,
    show: true,
    debugShowBoundingVolume: false
  };

  var defaultSurfaceOptions = utils.copyOptions(defaultShapeOptions, {
    appearance: new Cesium.EllipsoidSurfaceAppearance({
      aboveGround : false
    }),
    material : material,
    granularity: Math.PI / 180.0
  });


  var redMaterial = Cesium.Material.fromType(Cesium.Material.ColorType);
  redMaterial.uniforms.color = new Cesium.Color(1.0, 0, 0, 0.9);
  var defaultPolygonOptions = utils.copyOptions(defaultShapeOptions, {
    material: redMaterial,
    extrudedHeight: 0,
    appearance: new Cesium.EllipsoidSurfaceAppearance({
      aboveGround : false
    }),
    granularity: Math.PI / 180.0
  });


  var defaultExtentOptions = utils.copyOptions(defaultShapeOptions, {});

  var circleMaterial = Cesium.Material.fromType(Cesium.Material.ColorType);
  circleMaterial.uniforms.color = new Cesium.Color(1.0, 1.0, 0.0, 0.9);
  var defaultCircleOptions = utils.copyOptions(defaultShapeOptions, {
    appearance: new Cesium.EllipsoidSurfaceAppearance({
      aboveGround : false
    }),
    material : circleMaterial,
    granularity: Math.PI / 180.0,
    extrudedHeight: 0
  });


  var defaultEllipseOptions = utils.copyOptions(defaultSurfaceOptions, {rotation: 0});

  var outlineMaterial = Cesium.Material.fromType(Cesium.Material.ColorType);
  outlineMaterial.uniforms.color = new Cesium.Color(0.0, 0.0, 0.0, 1.0);

  var defaultPolylineOptions = utils.copyOptions(defaultShapeOptions, {
    width: 2,
    geodesic: true,
    granularity: 10000,
    appearance: new Cesium.PolylineMaterialAppearance({
      aboveGround : false
    }),
    material : outlineMaterial
  });

  var arrowMaterial = Cesium.Material.fromType(Cesium.Material.PolylineArrowType);
  arrowMaterial.uniforms.color = new Cesium.Color(1.0, 1.0, 0.0, 0.7);

  var defaultDrawingArrowOptions = utils.copyOptions(defaultShapeOptions, {
    width: 10,
    geodesic: true,
    granularity: 10000,
    appearance: new Cesium.PolylineMaterialAppearance({
      aboveGround : false
    }),
    material : arrowMaterial
  });




  var greenMaterial = Cesium.Material.fromType(Cesium.Material.ColorType);;
  greenMaterial.uniforms.color = new Cesium.Color(0.0, 1.0, 0.0, 0.5);
  var defaultMeasurePolylineOptions = utils.copyOptions(defaultShapeOptions, {
    width: 2,
    geodesic: true,
    granularity: 10000,
    appearance: new Cesium.PolylineMaterialAppearance({
      aboveGround : false
    }),
    material: greenMaterial
  });

  var defaultRadiusPolylineOptions = utils.copyOptions(defaultShapeOptions, {
    width: 2,
    geodesic: true,
    granularity: 10000,
    appearance: new Cesium.PolylineMaterialAppearance({
      aboveGround : false
    }),
    material: greenNoOpacityMaterial
  });

  var defaultBillboard = {
    iconUrl: "./imgs/dragIcon.png",
    shiftX: 0,
    shiftY: 0
  };

  var dragBillboard = {
    iconUrl: "./imgs/dragIcon.png",
    shiftX: 0,
    shiftY: 0
  };

  var dragHalfBillboard = {
    iconUrl: "./imgs/dragIconLight.png",
    shiftX: 0,
    shiftY: 0
  };

  var defaultLabelOptions = {
    font: {
      height: 16,
      name: "微软雅黑"
    },
    fillColor: 'yellow',
    outlineColor: 'black',
    outlineWidth: 2.0,
    scale: 1.0
  };

  var defaultArrowOptions = {
    positions: [],
    color: 'blue',
    width: 5.0
  };

  return {
    material: material,
    defaultShapeOptions: defaultShapeOptions,
    defaultSurfaceOptions: defaultSurfaceOptions,
    defaultPolygonOptions: defaultPolygonOptions,
    defaultCircleOptions: defaultCircleOptions,
    defaultEllipseOptions: defaultEllipseOptions,
    defaultPolylineOptions: defaultPolylineOptions,
    defaultDrawingArrowOptions: defaultDrawingArrowOptions,
    defaultBillboard: defaultBillboard,
    dragBillboard: dragBillboard,
    dragHalfBillboard: dragHalfBillboard,
    defaultLabelOptions: defaultLabelOptions,
    defaultArrowOptions: defaultArrowOptions,
    defaultMeasurePolylineOptions: defaultMeasurePolylineOptions,
    defaultRadiusPolylineOptions: defaultRadiusPolylineOptions
  };

})();

var ChangeablePrimitive = (function() {
    function _() {
    }

    _.prototype.initialiseOptions = function(options) {

        utils.fillOptions(this, options);

        this._ellipsoid = undefined;
        this._granularity = undefined;
        this._height = undefined;
        this._textureRotationAngle = undefined;
        this._id = undefined;

        // set the flags to initiate a first drawing
        this._createPrimitive = true;
        this._primitive = undefined;
        this._outlinePolygon = undefined;

    }

    _.prototype.setAttribute = function(name, value) {
        this[name] = value;
        this._createPrimitive = true;
    };

    _.prototype.getAttribute = function(name) {
        return this[name];
    };

    /**
     * @private
     */
    _.prototype.update = function(context, frameState, commandList) {
        if (!Cesium.defined(this.ellipsoid)) {
            throw new Cesium.DeveloperError('this.ellipsoid must be defined.');
        }

        if (!Cesium.defined(this.appearance)) {
            throw new Cesium.DeveloperError('this.material must be defined.');
        }

        if (this.granularity < 0.0) {
            throw new Cesium.DeveloperError('this.granularity and scene2D/scene3D overrides must be greater than zero.');
        }

        if (!this.show) {
            return;
        }

        if (!this._createPrimitive && (!Cesium.defined(this._primitive))) {
            // No positions/hierarchy to draw
            return;
        }

        if (this._createPrimitive ||
            (this._ellipsoid !== this.ellipsoid) ||
            (this._granularity !== this.granularity) ||
            (this._height !== this.height) ||
            (this._textureRotationAngle !== this.textureRotationAngle) ||
            (this._id !== this.id)) {

            var geometry = this.getGeometry();
            if(!geometry) {
                return;
            }

            this._createPrimitive = false;
            this._ellipsoid = this.ellipsoid;
            this._granularity = this.granularity;
            this._height = this.height;
            this._textureRotationAngle = this.textureRotationAngle;
            this._id = this.id;

            this._primitive = this._primitive && this._primitive.destroy();

            this._primitive = new Cesium.Primitive({
                geometryInstances : new Cesium.GeometryInstance({
                    geometry : geometry,
                    id : this.id,
                    pickPrimitive : this
                }),
                appearance : this.appearance,
                asynchronous : this.asynchronous
            });

            this._outlinePolygon = this._outlinePolygon && this._outlinePolygon.destroy();
            if(this.strokeColor && this.getOutlineGeometry) {
                // create the highlighting frame
                this._outlinePolygon = new Cesium.Primitive({
                    geometryInstances : new Cesium.GeometryInstance({
                        geometry : this.getOutlineGeometry(),
                        attributes : {
                            color : Cesium.ColorGeometryInstanceAttribute.fromColor(this.strokeColor)
                        }
                    }),
                    appearance : new Cesium.PerInstanceColorAppearance({
                        flat : true,
                        renderState : {
                            depthTest : {
                                enabled : true
                            },
                            lineWidth : Math.min(this.strokeWidth || 4.0, context.getMaximumAliasedLineWidth())
                        }
                    })
                });
            }
        }

        var primitive = this._primitive;
        primitive.appearance.material = this.material;
        primitive.debugShowBoundingVolume = this.debugShowBoundingVolume;
        primitive.update(context, frameState, commandList);
        this._outlinePolygon && this._outlinePolygon.update(context, frameState, commandList);

    };

    _.prototype.isDestroyed = function() {
        return false;
    };

    _.prototype.destroy = function() {
        this._primitive = this._primitive && this._primitive.destroy();
        return Cesium.destroyObject(this);
    };

    _.prototype.setStrokeStyle = function(strokeColor, strokeWidth) {
        if(!this.strokeColor || !this.strokeColor.equals(strokeColor) || this.strokeWidth != strokeWidth) {
            this._createPrimitive = true;
            this.strokeColor = strokeColor;
            this.strokeWidth = strokeWidth;
        }
    }

    return _;
})();

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

var PolylinePrimitive = (function() {
      
    function _(options) {

        options = utils.copyOptions(options, Default.defaultSurfaceOptions);

        this.initialiseOptions(options);

    }

    _.prototype = new ChangeablePrimitive();

    _.prototype.setPositions = function(positions) {
        this.setAttribute('positions', positions);
    };

    _.prototype.setWidth = function(width) {
        this.setAttribute('width', width);
    };

    _.prototype.setGeodesic = function(geodesic) {
        this.setAttribute('geodesic', geodesic);
    };

    _.prototype.setOutlineProperty = function(material) {
        this.setAttribute('material', material);
    };

    _.prototype.getPositions = function() {
        return this.getAttribute('positions');
    };

    _.prototype.getWidth = function() {
        return this.getAttribute('width');
    };

    _.prototype.getGeodesic = function(geodesic) {
        return this.getAttribute('geodesic');
    };

    _.prototype.getGeometry = function() {
      
        if (!Cesium.defined(this.positions) || this.positions.length < 2) {
            return;
        }

        return new Cesium.PolylineGeometry({
                positions: this.geodesic ? utils.getGeodesicPath(this.positions, Math.max(this.granularity, 50000)) : this.positions,
                height : this.height,
                width: this.width < 1 ? 1 : this.width,
                vertexFormat : Cesium.PolylineMaterialAppearance.VERTEX_FORMAT,
                ellipsoid : this.ellipsoid
            });
    };

    _.prototype.getExtent = function(){
        return Cesium.Extent.fromCartographicArray(this.ellipsoid.cartesianArrayToCartographicArray(this.getPositions()));
    };
    
    return _;
})();

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
    return 'CesiumEditor_id_' + this.idGenerator ++;
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
    var options = utils.copyOptions({}, Default.defaultPolylineOptions);
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
      poly = new PolylinePrimitive(Default.defaultPolylineOptions);
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
              var polyline = new PolylinePrimitive(Default.defaultPolylineOptions);
              polyline.id = theId;
              polyline.positions = positions;
              primitives.add(polyline);

              polyline.setEditable();

              that.primitivesCache[theId] = polyline;
              that.trigger('polylineCreated', {id: theId, positions: positions});
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
              label.setText('共:' + utils.getTotalDistance(positions, options.unit));
            } else {
              label.setPosition(p2);
              label.setText(utils.calDistance(p1.x, p1.y, p2.x, p2.y, options.unit) + ' 共:' + utils.getTotalDistance(positions.slice(0, index + 1), options.unit));
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

            // var p = positions[positions.length - 2];

            // var theLabel = labels.add({
            //   fillColor: Cesium.Color.fromCssColorString('#fff'),
            //   show: true,
            //   font: '16px Helvetica'
            // });
            
            // theLabel.setText(utils.calDistance(cartesian.x, cartesian.y, p.x, p.y, options.unit) + ' 共:' + utils.getTotalDistance(positions, options.unit));
            // theLabel.setPosition(cartesian);

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

            // label.setText(dxdy.toFixed(2) + ' m');
            label.setText(utils.calDistance(cartesian.x, cartesian.y, p1.x, p1.y, options.unit));
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

  CesiumEditor.prototype.startDrawingLabel = function(options){
    var that = this;

    that.startDrawing(function(){
      mouseHandler.destroy();
      that.enableMouseEvent();
      if(input){
        if(input.value){
          var theId = that.nextID();
          var label = new LabelPrimitive({
            id: theId,
            text: input.value,
            position: thePosition
          });
          primitives.add(label.getPrimitive());

          that.primitivesCache[theId] = label;

          label.setEditable();

          that.trigger('labelCreated', {id: theId, text: input.value, position: thePosition});
        } else {
          that.trigger('labelCreateCancel');
        }
        scene.canvas.parentNode.removeChild(input);
      } else {
        that.trigger('labelCreateCancel');
      }
    });

    var scene = that._scene;
    var primitives = scene.primitives;

    var input, thePosition;

    var mouseHandler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    mouseHandler.setInputAction(function(data){
      if(data.position != null){
        // 从鼠标位置转换成笛卡尔坐标
        var cartesian = scene.camera.pickEllipsoid(data.position, ellipsoid);

        if(cartesian){
          if(input) return;
          that.disableMouseEvent();
          thePosition = cartesian;
          input = document.createElement('input');
          input.type = 'text';
          input.placeholder = '输入名称';
          input.style.position = 'absolute';
          input.style.height = '21px';
          input.style.width = '125px';
          input.style.top = data.position.y - 6 + 'px';
          input.style.left = data.position.x + 'px';
          input.style.opacity = 0.8;
          scene.canvas.parentNode.insertBefore(input);

          input.addEventListener('keyup', function(e){
            switch(e.keyCode){
              case 13:
              that.stopDrawing();
              break;
              case 27:
              that.stopDrawing();
              break;
            }
          });
          input.focus();
        }
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  };

  CesiumEditor.prototype.setObjectToEditMode = function(id){
    var obj = this.primitivesCache[id];
    
    if(!obj) return;

    if(obj.setEditMode){
      obj.setEditMode(true);
    } else if(obj instanceof LabelPrimitive){
      obj.label.setEditMode(true);
    } else if(obj instanceof ArrowPrimitive){
      obj.polyline.setEditMode(true);
    }
  };

  CesiumEditor.prototype.removeObj = function(id){
    var obj = this.primitivesCache[id];
    if(obj){
      this.disableAllEditMode();
      var scene = this._scene;
      var primitives = scene.primitives;
      if(obj instanceof LabelPrimitive || obj instanceof ArrowPrimitive){
        primitives.remove(obj.getPrimitive());
      } else {
        primitives.remove(obj);
      }
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

  CesiumEditor.prototype.setSceneMode = function(mode){

    var funKey = 'morphTo3D';

    switch(mode){
      case '3D':
      funKey = 'morphTo3D';
      break;
      case '2D':
      funKey = 'morphTo2D';
      break;
      case 'columbus':
      funKey = 'morphToColumbusView';
      break;
    }

    this.cesiumViewer.sceneTransitioner[funKey]();
  };

  CesiumEditor.prototype.updatePrimitive = function(id, obj){
    if(this.primitivesCache[id]){
      primitiveUpdater.update(this.primitivesCache[id], obj);
    }
  };


  return CesiumEditor;

})();


  win.cesiumDrawer = new CesiumEditor();
})(document, window);
