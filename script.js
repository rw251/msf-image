(function () {
  'use strict';

	/*******************************
	 *** Define local properties ***
	 *******************************/
	var local= {};

  var initialize = function(){

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
