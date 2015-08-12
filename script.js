(function () {
  'use strict';

	/*******************************
	 *** Define local properties ***
	 *******************************/
	var local= {
    "block" : 50
  };


  //0 <= x <= 1
  var reveal = function(x){
    var items = $('#img .mask');
    if(items.length < local.total*0.5) {
      x = 1;
    }
    for(var i =0 ; i<items.length;i++){
      if(Math.random()<x){
        $(items[i]).fadeOut(1250, function(){
          $(this).addClass('unmask').removeClass('mask');
        });
      }
    }
  };

  var cover = function(){
    // Populate mask
    var w = $('#img').width() / local.block;
    var h = $('#img').height() / local.block;
    var left = $('#img > img').position().left;
    var top = $('#img > img').position().top;
    local.total = w*h;
    var mask = [];
    var cur = 0;
    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        $('#img').append('<div class="mask"></div>');
        var m = $('.mask:last-child');
        m.css('left', left + x * local.block);
        m.css('top', top + y * local.block);
      }
    }
  };

  var recover = function(){
    $('#img .unmask').each(function(){
      $(this).show().removeClass('unmask').addClass('mask');
    });
  };

  var initialize = function(){
    cover();

    //load image
    $('img').attr('src','http://cdn.morguefile.com/imageData/public/files/l/lensfusion/preview/fldr_2004_10_07/file0001758746657.jpg');

    $('body').on('keyup', function(e){
      if(e.which===32 )reveal(0.15);
      else if (e.which === 13) {
        recover();
      }
    });
  };

  window.msf = {
		init : initialize
	};
})();

/******************************************
*** This happens when the page is ready ***
******************************************/
$(document).on('ready', function () {
	//Load the data then wire up the events on the page
	msf.init();
});
