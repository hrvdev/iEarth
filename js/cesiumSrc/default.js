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
    defaultPolylineOptions: function(){
      return defaultPolylineOptions;
    },
    defaultDrawingArrowOptions: defaultDrawingArrowOptions,
    defaultBillboard: defaultBillboard,
    dragBillboard: dragBillboard,
    dragHalfBillboard: dragHalfBillboard,
    defaultLabelOptions: function(){
      return defaultLabelOptions;
    },
    defaultArrowOptions: defaultArrowOptions,
    defaultMeasurePolylineOptions: defaultMeasurePolylineOptions,
    defaultRadiusPolylineOptions: defaultRadiusPolylineOptions,

    setDefaultPolyline: function(width, color){
      var outlineMaterial = Cesium.Material.fromType(Cesium.Material.ColorType);
      outlineMaterial.uniforms.color = new Cesium.Color(color.r / 255, color.g / 255, color.b / 255, 1.0);
      defaultPolylineOptions = utils.copyOptions(defaultShapeOptions, {
        width: width,
        geodesic: true,
        granularity: 10000,
        appearance: new Cesium.PolylineMaterialAppearance({
          aboveGround : false
        }),
        material : outlineMaterial
      });
    },
    createPolyline: function(width, color){
      var outlineMaterial = Cesium.Material.fromType(Cesium.Material.ColorType);
      outlineMaterial.uniforms.color = new Cesium.Color(color.red, color.green, color.blue, 1.0);
      var polylineOptions = utils.copyOptions(defaultShapeOptions, {
        width: width,
        geodesic: true,
        granularity: 10000,
        appearance: new Cesium.PolylineMaterialAppearance({
          aboveGround : false
        }),
        material : outlineMaterial
      });
      return polylineOptions;
    }
  };

})();

window.CesiumDefault = Default;
