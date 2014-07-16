chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('layerManager.html', {
    'bounds': {
      'width': 800,
      'height': 600
    }
  });
});
