
var videoFinished = "is not finished";

var lyricsTab;

//  THIS MESSAGE SENDING SHIT WORKS
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    
    console.log(request.greeting);
    
    if (request.greeting == "lyrics"){
    	lyricsTab = sender.tab.id;
    	sendResponse({farewell: "goodbye"});
    }

    if (request.greeting == "video"){
      sendResponse({farewell: "goodbye"});
      chrome.tabs.remove(sender.tab.id);
      chrome.tabs.remove(lyricsTab);
    }
  });