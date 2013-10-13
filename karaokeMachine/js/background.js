
var videoFinished = "is not finished";

var lyricsTab;
var songDone = false;

var songs = [];

//  THIS MESSAGE SENDING SHIT WORKS
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    
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

      //  Removes first song from list
      songs.shift();
      console.log("song list", songs);
	  var songInput = songs[0];

	  if (songs[0]){

	      var videoQ = "http://www.youtube.com/results?search_query=" + songInput + "&brenda=ok";
	      var lyricsQ = "http://rapgenius.com/search?hide_unexplained_songs=false&q=" + songInput + "&brenda=ok";

		  chrome.tabs.create({'url': videoQ}, function(tab) {
		    //bkg.console.log("tab", tab);
		  });
	      //  Lyrics tab to create
	      chrome.tabs.create({'url': lyricsQ}, function(tab) {
	        //bkg.console.log("tab", tab);
	      });
  		}
    }
});