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
      //bkg.console.log("song query", videoQ);

      // Rap Genius song search
      // End query for same purpose
      var lyricsQ = "https://www.google.com/search?q=" + songInput + " lyrics rapgenius&brenda=ok";

      //  Video tab to create
      chrome.tabs.create({'url': videoQ}, function(tab) {
        //bkg.console.log("tab", tab);
      });

      //  Lyrics tab to create
      chrome.tabs.create({'url': lyricsQ}, function(tab) {
        //bkg.console.log("tab", tab);
      });

    }

    //bkg.console.log("song list", $("#songs"));
    // puts song in list
    bkg.songs.push(songInput);

  });
  window.onload = function (){
    var songs = bkg.songs;

    //bkg.console.log("checking background song status", bkg.songDone);

    for (var i = 0; i < songs.length; i++){

      // add a skip button
      bkg.console.log("song element", i);
      if(i === 0){
        $("#songs").append("<li class='clearfix'>" + songs[i] + "<button class='delete'>delete</button><button class='skip'>skip</button></li>");
      }
      else{
        $("#songs").append("<li class='clearfix'>" + songs[i] + "<button class='delete'>delete</button></li>");
      }
    }

    //bkg.console.log("songs list", songs);

    //  Deleting individual songs from the queue
    $(".delete").click(function () {
      //bkg.console.log("delete is clicked");
      var songs = bkg.songs;
      //bkg.console.log("delete icon", $(this).parent().index());

      //  Gets index of element to delete
      var songInd = $(this).parent().index();

      songs.splice(songInd);
      //bkg.console.log("new songs list", songs);
      location.reload();
    });

    // Skipping the song
    $(".skip").click(function () {

      bkg.console.log("skip is clicked");

      chrome.extension.sendMessage({greeting: "skip-song"}, 
          function(response) { tabURL = response.navURL });
    });

    //  Deleting all songs from the queue
    $("#clear-all").click(function () {
      bkg.songs = [];
      //bkg.console.log("clear all is being clicked on");
      //bkg.console.log("new songs list", bkg.songs);
      location.reload();

    });
    //bkg.console.log($("#songs"));
  }

});

function loadNewSong () {
  
}