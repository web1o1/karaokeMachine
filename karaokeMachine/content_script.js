
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
	
}

$(function () {
	


	loadVideo();

	loadRapGenius();

});