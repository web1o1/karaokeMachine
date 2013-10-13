
//console.log("youtube content", $("body"));

//  THE YOUTUBE VID
function loadVideo () {
	
	//console.log("url", window.location.href);
	// Checks if it is youtube, then parses the DOM
	if ( (window.location.href).indexOf("youtube") !== -1 ){
		var first_video = $("#results > ol > li:first-child .yt-lockup-title a")[0];

		var vid_link = first_video.href;

		console.log("video", first_video);
		console.log("vid link", vid_link);

		//  Loads in the video
		window.location = vid_link;
	}

}

//  THE LYRICS
function loadRapGenius () {

	console.log("url", window.location.href);
	// Checks if it is youtube, then parses the DOM
	if ( (window.location.href).indexOf("rapgenius") !== -1){
		var first_lyrics = $(".search_results > li:first-child > a")[0];

		var lyrics_link = first_lyrics.href;

		console.log("lyrics", first_lyrics);
		console.log("vid link", lyrics_link);

		//Loads in window
		window.location = lyrics_link;
	}

}

$(function () {
	
	console.log("background page variable", chrome.extension.getBackgroundPage().video_finished);


	loadVideo();

	loadRapGenius();

});