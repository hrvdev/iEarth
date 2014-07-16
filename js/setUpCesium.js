var getTheMapLevel = 0;
  var websource = false;
  var options;
  if(websource){
      options = {
      fullscreenButton: true,
      geocoder: false,
      homeButton: false,
      inforBox: false,
      timeline: true,
      fullscreenElement: document.body,
      sceneMode: Cesium.SceneMode.SCENE3D
    }
  }else{
    options = {
      infoBox: false,
      sceneModePicker: false,
      animation: false,
      selectionIndicator: false,
      fullscreenButton: false,
      geocoder: false,
      homeButton: false,
      inforBox: false,
      timeline: false,
      fullscreenElement: document.body,
      baseLayerPicker: false,
      imageryProvider: new Cesium.OpenStreetMapImageryProvider({
        url: 'http://124.65.135.146:8100/map/google/',
        maximumLevel: '20',
        credit: ''
      }),
      sceneMode: Cesium.SceneMode.SCENE3D
    }
  }
  
  var cesiumViewer = new Cesium.Viewer('cesiumContainer',options);
