
//console.log("youtube content", $("body"));

// Keeps track of if the song is playing
var songPlaying = true;

//  THE YOUTUBE VID
function loadVideo () {
	
	//console.log("url", window.location.href);
	// Checks if it is youtube, then parses the DOM
	if ( (window.location.href).indexOf("www.youtube.com/results?search_query=") !== -1 && (window.location.href).indexOf("&brenda=ok") !== -1 ){
		var first_video = $("#results > ol > li:first-child .yt-lockup-title a")[0];
		console.log("first video", first_video);
		var vid_link = first_video.href + "&enablejsapi=1";

		console.log("video", first_video);
		console.log("vid link", vid_link);

		//  Loads in the video
		window.location.href = vid_link + "&brenda=ok";

	}

	// script for page that plays video
	if ( (window.location.href).indexOf("www.youtube.com/watch?v=") !== -1 && (window.location.href).indexOf("&brenda=ok") !== -1 ){

		// Check if video is done

		//	Checks for HTML5 support
		if ($("video")){
			var player = document.getElementsByClassName("video-stream html5-main-video")[0];
    		player.onended = getVidStateHTML5;
			
		} else {
			//	Flash support
			setInterval(getVidStateFlash, 5000);
		}

		chrome.runtime.sendMessage({greeting: "video-tab"}, function(response) {
		  console.log(response.farewell);
		});

		function getVidStateHTML5 (evt) {
			console.log("getVidState", evt);
			// var video_state = document.getElementById("movie_player").getPlayerState();
			// console.log("video state", video_state);
			// if (video_state === 0){

				console.log("playing has ended");

				songPlaying = false;
				
				//  THIS MESSAGE SENDING SHIT WORKS
				chrome.runtime.sendMessage({greeting: "video"}, function(response) {
				  console.log(response.farewell);
				});
			// }
		}
		function getVidStateFlash () {
			var video_state = document.getElementById("movie_player").getPlayerState();
			console.log("video state", video_state);
			if (video_state === 0){

				console.log("playing has ended");

				songPlaying = false;

				//  THIS MESSAGE SENDING SHIT WORKS
				chrome.runtime.sendMessage({greeting: "video"}, function(response) {
				  console.log(response.farewell);
				});
			}
		}
	}
}

//  THE LYRICS
function loadRapGenius () {

	console.log("url", window.location.href);

	var url = window.location.href;
	// Checks if it is rapgenius, then parses the DOM

	if ( (url).indexOf("http://rapgenius.com/search?hide_unexplained_songs=false&q=") !== -1 && (url).indexOf("&brenda=ok")){

		chrome.runtime.sendMessage({greeting: "lyrics"}, function(response) {
		  console.log(response.farewell);
		});

		//  If the song is found in rapgenius, crawl the search page
		if ($(".search_results").children().length > 0){
			var first_lyrics = $(".search_results > li:first-child > a")[0];

			var lyrics_link = first_lyrics.href;

			console.log("lyrics", first_lyrics);
			console.log("vid link", lyrics_link);

			//Loads in window
			window.location.href = lyrics_link;
		}
		//  Else, crawl the lyrics from google

		else {

			var song_name = url.substring(url.indexOf("&q=") + 3, url.indexOf("&brenda=ok"));

			var google_lyrics_query = "https://www.google.com/search?q=" + song_name + " lyrics&brenda=ok";

			window.location.href = google_lyrics_query;

		}

	}


}

function loadGoogleLyrics(){

	//  TODO: LOAD IN SONG LYRICS, SEND MESSAGE TO BACKGROUND PAGE

	url = window.location.href;
	//console.log("loadRapGenius called");
	if ( url.indexOf("https://www.google.com/search?q=") !== -1 &&  url.indexOf("&brenda=ok") !== -1){

		var first_lyrics = $("#search li:first-child .rc > .r a")[0];
		var lyrics_link = first_lyrics.href;

		console.log("first_lyrics", first_lyrics);

		chrome.runtime.sendMessage({greeting: "lyrics"}, function(response) {
		  console.log(response.farewell);
		});

		window.location.href = lyrics_link;

	}



}

$(function () {

	loadVideo();

	// loadRapGenius();

	loadGoogleLyrics();

});