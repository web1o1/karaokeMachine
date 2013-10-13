var bkg = chrome.extension.getBackgroundPage();

//bkg.console.log("loaded");
$(function () {

  $("#find-song button").click(function () {
    

    //  Grabs the song
    var songInput = $("#find-song input").val();

    if (!$("#songs").html().trim().length){
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

    }

    bkg.console.log("song list", $("#songs"));
    // puts song in list
    bkg.songs.push(songInput);

  });

  window.onload = function (){
    var songs = bkg.songs;

    bkg.console.log("checking background song status", bkg.songDone);

    for (var i in songs){
      $("#songs").append("<li>" + songs[i] + "</li>");
    }

    bkg.console.log("songs list", songs);

    bkg.console.log($("#songs"));
  }

});

function loadNewSong () {
  
}