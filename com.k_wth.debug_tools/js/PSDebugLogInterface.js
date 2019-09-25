var PSDebugLog = {
  Type : {
    LOG   : "log",
    INFO  : "info",
    WARN  : "warn",
    ERROR : "error"
  }
}

var PSDebugLogInterface = {}

/**
 * CSInterfaceにロガーイベント検知用のイベントを設定するためのメソッド
 * @param {CSInterface} csInterface
 */
PSDebugLogInterface.initInterface = function(csInterface){
  var _this = this;
  // Log検出のためのイベントリスナーを設置する.
  csInterface.addEventListener("psdebuglog.log", function (event) {
    _this.logger(PSDebugLog.Type.LOG,'log: ' + event.data)
  });
  csInterface.addEventListener("psdebuglog.info", function (event) {
    _this.logger(PSDebugLog.Type.INFO,'info: ' + event.data)
  });
  csInterface.addEventListener("psdebuglog.warning", function (event) {
    _this.logger(PSDebugLog.Type.WARN,'warning: ' + event.data)
  });
  csInterface.addEventListener("psdebuglog.error", function (event) {
    _this.logger(PSDebugLog.Type.ERROR,'error: ' + event.data)
  });
};

/**
* ログ発行用の関数
* @param {PSDebugLog.Type} type 
* @param {string} msg 
*/
PSDebugLogInterface.logger = function(type,msg){ eval(`console.${type}("${msg}");`); };

(function () { 
  var csInterface = new CSInterface();
  PSDebugLogInterface.initInterface(csInterface);
}());