// プロジェクトのjsxにコピーするなどして使用してください
#target photoshop;
#include '../lib/PSDebugLog/jsx/PSDebugLog.jsx';

function myJSXScript() { 
	debug = new PSDebugLog("hostscript");
  debug.log( "So far so good" );  
  debug.info( "Still going" );  
  debug.warn( "Well all fine" );  
  debug.error( "Well all fine" );  
}
