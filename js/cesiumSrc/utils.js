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

  function uuid(prefix){
    return prefix + '_' + Date.now() + '_' + Math.random();
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
    uuid: uuid,
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
