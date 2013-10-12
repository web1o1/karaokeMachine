var bkg = chrome.extension.getBackgroundPage();

//bkg.console.log("loaded");

$(function () {
  //bkg.console.log("jquery works");
  // var songQ = $("input#find-song").val();
  // bkg.console.log("input", $("#find-song"));
  // bkg.console.log(songQ);

  $("#find-song button").click(function () {
    

    //  Grabs the song
    var songInput = $("#find-song input").val();

    // Youtube song search
    // End query to make sure content script doesnt load on every Youtube page
    var songQ = "http://www.youtube.com/results?search_query=" + songInput + "&brenda=ok";
    bkg.console.log("song query", songQ);

    chrome.tabs.create({'url': songQ}, function(tab) {
      bkg.console.log("tab", tab);
    });


  });

});