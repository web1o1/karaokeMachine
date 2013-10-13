var bkg = chrome.extension.getBackgroundPage();

//bkg.console.log("loaded");
$(function () {

  $("#find-song button").click(function () {
    

    //  Grabs the song
    var songInput = $("#find-song input").val();

    // Youtube song search
    // End query to make sure content script doesnt load on every Youtube page
    var videoQ = "http://www.youtube.com/results?search_query=" + songInput + "&brenda=ok";
    bkg.console.log("song query", videoQ);

    // Rap Genius song search
    // End query for same purpose
    var lyricsQ = "http://rapgenius.com/search?hide_unexplained_songs=false&q=" + songInput + "&brenda=ok";

    //  Video tab to create
    chrome.tabs.create({'url': videoQ}, function(tab) {
      //bkg.console.log("tab", tab);
    });

    //  Lyrics tab to create
    chrome.tabs.create({'url': lyricsQ}, function(tab) {
      //bkg.console.log("tab", tab);
    });

  });

});

function loadNewSong () {
  
}