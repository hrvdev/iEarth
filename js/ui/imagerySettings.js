var ImagerySettings = (function(){
  var ImagerySettingsClass = function(){
    this.dom = $('#imageryAdjust');

    this.defalutValue = {
      ab: 100,
      ac: 100,
      at: 0,
      as: 100,
      ag: 100
    };

    this.init();
  };

  ImagerySettingsClass.prototype = {
    init: function(){
      var that = this;

      that.ab = $('#imageAdjustBrightness').slider({
        max: 10,
        min: 0,
        value: 1,
        change: function(){
          that.adjust();
        }
      });
      that.ac = $('#imageAdjustContrast').slider({
        max: 100,
        min: 0,
        value: 100,
        change: function(){
          that.adjust();
        }
      });
      that.at = $('#imageAdjustTinct').slider({
        max: 100,
        min: 0,
        value: 0,
        change: function(){
          that.adjust();
        }
      });
      that.as = $('#imageAdjustSaturation').slider({
        max: 100,
        min: 0,
        value: 100,
        change: function(){
          that.adjust();
        }
      });
      that.ag = $('#imageAdjustGamma').slider({
        max: 100,
        min: 0,
        value: 100,
        change: function(){
          that.adjust();
        }
      });
    },
    adjust: function(){
      var imageryLayers = cesiumViewer.centralBody.imageryLayers;
      if(imageryLayers.length > 0) {
        var layer = imageryLayers.get(0);
        layer.brightness = this.ab.slider('value');
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
