var Tools = (function(){

  var ToolsClass = function(miniMap){
    
    this.miniMap = miniMap;
    this.adjustLayer = new ImagerySettings();

    this.dom = $('#tools');
    this.toggleLocationImagesBtn = $('#toggleLocationImagesBtn');
    this.locationImagesContainer = $('#locationImagesContainer');
    this.init();
  };

  ToolsClass.prototype = {
    init: function(){

      var that = this;


      that.dom.on('click', '.map-tool-location', function(){
        selfCesium.north();
      }).on('click', '.location-images-toggle', function(){
        if(that.toggleLocationImagesBtn.hasClass('open')){
          that.hideLocationImages();
          that.locationImagesContainer.hide();
          that.miniMap.goToSmall();
        } else {
          that.showLocationImages();
          that.miniMap.goToLarge();
        }
      }).on('click', '.map-tool-vector', function(){
        var dom = $(this);
        if(dom.hasClass('active')){
          dom.removeClass('active');
          selfCesium.setVector.remove();
        } else {
          dom.addClass('active');
          selfCesium.setVector.set("http://124.65.135.146:8100/map/google-vector/");
        }
      }).on('click', '.map-tool-terrian', function(){
        var dom = $(this);
        if(dom.hasClass('active')){
          dom.removeClass('active');
          selfCesium.setTerrian.remove();
        } else {
          dom.addClass('active');
          selfCesium.setTerrian.set(CONFIG.terrianSource);
        }
      }).on('click', '.map-tool-settings', function(){
        var dom = $(this);
        if(dom.hasClass('active')){
          dom.removeClass('active');
          that.adjustLayer.hide();
        } else {
          dom.addClass('active');
          that.adjustLayer.show();
        }
      });
    },
    showLocationImages: function(){
      this.dom.addClass('open');
      this.toggleLocationImagesBtn.addClass('open');


      var that = this;
      setTimeout(function(){
        that.renderLocationImages([{
          src: 'imgs/1.jpg',
          title: 'China',
          location: {
            lat: 120.2,
            lng: 30.3
          }
        }, {
          src: 'imgs/2.jpg',
          title: 'China',
          location: {
            lat: 110.5,
            lng: 29.3
          }
        }, {
          src: 'imgs/3.jpg',
          title: 'China',
          location: {
            lat: 115.6,
            lng: 21.1
          }
        }, {
          src: 'imgs/4.jpg',
          title: 'China',
          location: {
            lat: 101.6,
            lng: 29.5
          }
        }]);
      }, 200);
      
    },
    renderLocationImages: function(images){
      this.images = images;

      if(!this.toggleLocationImagesBtn.hasClass('open')){
        return;
      }

      var html = [];
      for(var i = 0; i < images.length; i ++){
        html.push('<div class="location-image" data-location="' + JSON.stringify(images[i].location) + '">')
        html.push('<img src="' + images[i].src + '" />');
        html.push('<div>' + images[i].title + '</div>');
        html.push('</div>');
      }
      var div = $('<div></div>').html(html.join('')).css('width', images.length * 203 - 3);
      var that = this;
      that.locationImagesContainer.html(div).fadeOut(0, function(){
        that.locationImagesContainer.fadeIn(100);
      });
    },
    hideLocationImages: function(){
      this.dom.removeClass('open');
      this.toggleLocationImagesBtn.removeClass('open');
    }
  };


  return ToolsClass;

})();
