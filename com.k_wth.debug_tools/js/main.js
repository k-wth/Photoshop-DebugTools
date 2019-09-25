/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/
(function () {
	'use strict';
	var csInterface = new CSInterface();

	var logger = function(type,msg){
    $("#psdebug-log-interface").append(`<span class="${type}"> > ${msg}</span>`);
    $("#psdebug-log-interface")
    .animate(
      {
        scrollTop: $('#psdebug-log-interface')[0].scrollHeight
      },
      'fast');
	}

	csInterface.addEventListener("psdebuglog.log", function (event) {
    logger("log",event.data);
  });
  csInterface.addEventListener("psdebuglog.info", function (event) {
    logger("info",event.data);
  });
  csInterface.addEventListener("psdebuglog.warning", function (event) {
    logger("warn",event.data);
  });
  csInterface.addEventListener("psdebuglog.error", function (event) {
    logger("error",event.data);
  });
	
	$(".console-clear").on("click", function(){
		$("#psdebug-log-interface span").remove();
  })
  
  $("#psddebug-script-terster .script-tester").on("keypress",function(e){
    if ( e.which == 13 ) {
      var script = $(this).val();
      csInterface.evalScript(script); 
    }
  });
}());