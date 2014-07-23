var LabelPrimitive = (function(){

  var ellipsoid = Cesium.Ellipsoid.WGS84;

  var LabelPrimitiveClass = function LabelPrimitiveClass(options){
    options = utils.copyOptions(options, Default.defaultLabelOptions());

    utils.fillOptions(this, options);

    var labels = new Cesium.LabelCollection();
    var fontObj = options.font || {};
    var fontStr = (fontObj.height || 12) + 'px ' + (fontObj.name || 'Helvetica');

    var label = labels.add({
      position: options.position,
      text: options.text,
      font: fontStr,
      fillColor : Cesium.Color.fromCssColorString(options.fillColor),
      style : Cesium.LabelStyle.FILL,
      scale: options.scale
    });

    this.primitive = labels;
    this.label = label;
  };

  LabelPrimitiveClass.prototype.getPrimitive = function(){
    return this.primitive;
  };

  LabelPrimitiveClass.prototype.getExtent = function(){
    var pos = this.label.getPosition();
    
    var pos1 = {};
    pos1.x = pos.x + 100;
    pos1.y = pos.y + 100;
    pos1.z = pos.z;

    var pos2 = {};
    pos2.x = pos.x + 100;
    pos2.y = pos.y - 100;
    pos2.z = pos.z;

    var pos3 = {};
    pos3.x = pos.x - 100;
    pos3.y = pos.y + 100;
    pos3.z = pos.z;

    var pos4 = {};
    pos4.x = pos.x - 100;
    pos4.y = pos.y - 100;
    pos4.z = pos.z;


    return Cesium.Extent.fromCartographicArray(ellipsoid.cartesianArrayToCartographicArray([pos1, pos2, pos3, pos4]));
  };



  return LabelPrimitiveClass;
})();
