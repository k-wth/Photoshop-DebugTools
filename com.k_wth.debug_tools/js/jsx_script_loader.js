var JsxScriptLoader = function(csInterface,script_root){
	this.csInterface = csInterface;
	this.SCRIPT_ROOT = "";
	if(script_root != undefined)
	{
		this.SCRIPT_ROOT += script_root;
	}
	this.load_cache_sctipt = [];
}

JsxScriptLoader.prototype._getScriptPath = function()
{
	return this.csInterface.getSystemPath(SystemPath.EXTENSION);
}

JsxScriptLoader.prototype.scriptLoader = function(name)
{
	var path = this._getScriptPath() + this.SCRIPT_ROOT + name + ".jsx";
	if(this.load_cache_sctipt.indexOf(path) != -1) return;
	try {
		this.csInterface.evalScript('$.evalFile( "'+path+'")'); 
		this.load_cache_sctipt.push(path);
	}
	catch(e) { throw alert(e); }

	console.log(path);
}

JsxScriptLoader.prototype.execute = function(script, history_name)
{
	if (history_name != undefined)
		this.csInterface.evalScript(`app.activeDocument.suspendHistory('${history_name}', '${script}')`);
	else this.csInterface.evalScript(script);
}
