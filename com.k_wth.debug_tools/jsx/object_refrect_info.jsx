#target photoshop;
// #include 'PSDebugLog.jsx';

function getObjectReflectionInfo(str)
{
  // var debug = new PSDebugLog("psdebug-tools");
  // debug.log("console test");
  var obj = eval(str);
  alert(obj);
  // debug.log(obj);
}