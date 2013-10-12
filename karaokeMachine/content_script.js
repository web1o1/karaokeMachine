
//console.log("youtube content", $("body"));

function loadVideo () {
	
	var first_video = $("#results > ol > li:first-child .yt-lockup-title a")[0];

	var vid_link = first_video.href;

	console.log("video", first_video);
	console.log("vid link", vid_link);

	window.location = vid_link;

}

$(function () {
	
	loadVideo();

});