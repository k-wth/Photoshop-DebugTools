#target photoshop;
#include './PSDebugLog.jsx';

// プロジェクトのjsxにコピーするなどして使用してください
function myJSXScript() { 
	debug = new PSDebugLog("hostscript");
  debug.log( "So far so good" );  
  debug.info( "Still going" );  
  debug.warn( "Well all fine" );  
  debug.error( "Well all fine" );  
}