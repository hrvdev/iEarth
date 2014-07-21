(function($){

  $.fn.beautySelect = function(options){
    var select = this.find('select');


    var currentIndex = -1;

    var valueList, labelList;

    function createUL(){
      var html = ['<ul style="display:none;">'];
      valueList = [];
      labelList = [];
      var options = select.find('option');
      for(var i = 0, len = options.length; i < len; i ++){
        valueList.push(options[i].value);
        labelList.push(options[i].innerHTML);
        if(options[i].selected){
          currentIndex = i;
        }
        html.push('<li>' + options[i].innerHTML + '</li>')
      }
      html.push('</ul>');
      return html.join('');
    };

    function createTitle(){
      var html = ['<div class="select-selected">'];
      if(currentIndex >= 0){
        html.push(labelList[currentIndex]);
      } else {
        html.push(select.attr('placeholder'));
      }
      

      html.push('</div>');
      return html.join('');
    }

    function updateUL(values){
      var ulHTML = [];
      var selectHTML = [];

      valueList = [];
      labelList = [];

      for(var i = 0; i < values.length; i ++){
        ulHTML.push('<li>' + values[i].label + '</li>');
        selectHTML.push('<option value="' + values[i].value + '">' + values[i].label + '</option>');
        valueList.push(values[i].value);
        labelList.push(values[i].label);
      }

      currentIndex = -1;
      select.html(selectHTML.join(''));
      $ul.html(ulHTML.join(''));
    }


    var $ul = $(createUL());
    var $tit = $(createTitle());

    this.prepend($ul).prepend($tit);

    this.on('click', '.select-selected', function(e){
      $ul.toggle();
      e.stopPropagation();
    }).on('click', 'li', function(e){
      var index = $(this).index();
      if(index === currentIndex){
        return;
      }
      currentIndex = index;
      var label = labelList[index];
      var value = valueList[index];
      select.val(value);
      $tit.html(label);
      $ul.toggle();

      if (options.onChange){
        options.onChange(value, currentIndex);
      }
      e.stopPropagation();
    });

    var exports = {
      reset: function(){
        $tit.html(select.attr('placeholder'));
        currentIndex = -1;
      },
      getValue: function(){
        if(currentIndex == -1){
          return null;
        }
        return valueList[currentIndex];
      },
      select: function(index){
        if(index >= valueList.length){
          return false;
        }
        select.val(valueList[index]);
        currentIndex = index;
        $tit.html(labelList[index]);
        return true;
      },
      selectValue: function(value){
        var index = valueList.indexOf(value);
        return exports.select(index);
      },
      setValues: function(values){
        updateUL(values);
      }
    };

    $.extend(this, exports);

    $(document).on('click', function(){
      $ul.hide();
    });

    return this;
  };

})(jQuery);
