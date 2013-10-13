
var videoFinished = "is not finished";

var lyricsTab;
var songDone = false;

//  THIS MESSAGE SENDING SHIT WORKS
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    
    console.log(request.greeting);
    
    // Retrieves lyrics tab id
    if (request.greeting == "lyrics"){
    	lyricsTab = sender.tab.id;
    	sendResponse({farewell: "goodbye"});
    }

    //  Closes these windows
    if (request.greeting == "video"){
      sendResponse({farewell: "goodbye"});
      songDone = true;
      chrome.tabs.remove(sender.tab.id);
      chrome.tabs.remove(lyricsTab);

      var videoQ = "http://www.youtube.com/results?search_query=" + "britney spears toxic" + "&brenda=ok";
        chrome.tabs.create({'url': videoQ}, function(tab) {
	      //bkg.console.log("tab", tab);
	    });
    }
});