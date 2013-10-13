
//console.log("youtube content", $("body"));

//  THE YOUTUBE VID
function loadVideo () {
	
	//console.log("url", window.location.href);
	// Checks if it is youtube, then parses the DOM
	if ( (window.location.href).indexOf("www.youtube.com/results?search_query=") !== -1 ){
		var first_video = $("#results > ol > li:first-child .yt-lockup-title a")[0];

		var vid_link = first_video.href + "&enablejsapi=1&brenda=ok";

		console.log("video", first_video);
		console.log("vid link", vid_link);

		//  Loads in the video
		window.location.href = vid_link;

	}

	// script for page that plays video
	if ( (window.location.href).indexOf("http://www.youtube.com/watch?v=") !== -1 ){



		// Check if video is done
		//console.log("movie_player", $("#movie_player")[0]);
		setInterval(getVidState, 5000);

		//  THIS MESSAGE SENDING SHIT WORKS
		chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
		  console.log(response.farewell);
		});

		function getVidState () {
			var video_state = document.getElementById("movie_player").getPlayerState();
			console.log("video state", video_state);
			if (video_state === 0){

				console.log("playing has ended");
				
			}
		}
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
		window.location.href = lyrics_link;

		//  THIS MESSAGE SENDING SHIT WORKS
		chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
		  console.log(response.farewell);
		});
	}

}

$(function () {

	loadVideo();

	loadRapGenius();

});