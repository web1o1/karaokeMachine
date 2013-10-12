var bkg = chrome.extension.getBackgroundPage();

//bkg.console.log("loaded");

$(function () {
  //bkg.console.log("jquery works");
  // var songQ = $("input#find-song").val();
  // bkg.console.log("input", $("#find-song"));
  // bkg.console.log(songQ);

  $("#find-song button").click(function () {
    

    //  Grabs the song
    var songQ = "http://www.youtube.com/results?search_query=" + $("#find-song input").val();
    bkg.console.log("song query", songQ);

    chrome.tabs.create({'url': songQ}, function(tab) {
    // Tab opened.
    });


  });

});