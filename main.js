// main.js: Main implementation for Monitor

// Connect to our native host
var monitor_port = chrome.runtime.connectNative('com.asesh.monitor');

// External message listener
chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
  switch(request.type) {
  case 'start':
    console.log("Message received from external message listener: " + request.message);
    break;

  }
});

// Invoked when we receive messages from monitor
monitor_port.onMessage.addListener(function(msg) {
  switch(msg.type) {
  case 'start':
    console.log(msg.message);
    break;
  }
});

// Monitor is disconnected
monitor_port.onDisconnect.addListener(function(msg) {
  console.log("Monitor is disconnected");
  if(chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError);
  }
});
