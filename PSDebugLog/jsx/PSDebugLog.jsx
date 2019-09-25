#target photoshop;

function PSDebugLog(context) {
	this.context = context;
	if(context == undefined) this.context = "";
	var mylib = new ExternalObject( "lib:\PlugPlugExternalObject" );
}

PSDebugLog.prototype._execute = function(type,msg) {
	try {
		var eventObj = new CSXSEvent();
		eventObj.type = type;
		eventObj.data = "【" + this.context + "】" + msg;
		eventObj.dispatch();  
	} catch(err){ alert(err); }
}

PSDebugLog.prototype.log = function(msg) {
	this._execute("psdebuglog.log", msg);
}
PSDebugLog.prototype.info = function(msg) {
	this._execute("psdebuglog.info", msg);
}
PSDebugLog.prototype.warn = function(msg) {
	this._execute("psdebuglog.warning", msg);
}
PSDebugLog.prototype.error = function(msg) {
	this._execute("psdebuglog.error", msg);
}