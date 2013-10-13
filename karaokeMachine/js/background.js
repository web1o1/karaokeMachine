
var videoFinished = "is not finished";

//  THIS MESSAGE SENDING SHIT WORKS
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    console.log(request.greeting);
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });