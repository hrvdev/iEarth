var ImagerySettings = (function(){
  var ImagerySettingsClass = function(){
    this.dom = $('#imageryAdjust');

    this.init();
  };

  ImagerySettingsClass.prototype = {
    init: function(){
      var that = this;

      that.ab = $('#imageAdjustBrightness').slider({
        max: 300,
        min: 0,
        value: 100,
        change: function(){
          that.adjust();
        }
      });
      that.ac = $('#imageAdjustContrast').slider({
        max: 300,
        min: 0,
        value: 100,
        change: function(){
          that.adjust();
        }
      });
      that.at = $('#imageAdjustTinct').slider({
        max: 300,
        min: 0,
        value: 0,
        change: function(){
          that.adjust();
        }
      });
      that.as = $('#imageAdjustSaturation').slider({
        max: 300,
        min: 0,
        value: 100,
        change: function(){
          that.adjust();
        }
      });
      that.ag = $('#imageAdjustGamma').slider({
        max: 300,
        min: 0,
        value: 100,
        change: function(){
          that.adjust();
        }
      });

      that.dom.on('click', '.tit span', function(){
        that.ab.slider('value', 100);
        that.ac.slider('value', 100);
        that.at.slider('value', 0);
        that.as.slider('value', 100);
        that.ag.slider('value', 100);
        that.adjust();
      });
    },
    adjust: function(){
      var imageryLayers = cesiumViewer.centralBody.imageryLayers;
      if(imageryLayers.length > 0) {
        var layer = imageryLayers.get(0);
        layer.brightness = this.ab.slider('value') / 100;
        layer.contrast = this.ac.slider('value') / 100;
        layer.hue = this.at.slider('value') / 100;
        layer.saturation = this.as.slider('value') / 100;
        layer.gamma = this.ag.slider('value') / 100;
      }
    },
    show: function(){
      this.dom.addClass('show');
    },
    hide: function(){
      this.dom.removeClass('show');
    }
  };



  return ImagerySettingsClass;
})();
