$(document).ready(function(){

	var winWidth;
	var winHeight;

	// check when the window is resized
	$(window).resize(function() {

		// update the webpage with the window dimensions
		winWidth = $(window).width();	
		winHeight = $(window).height();
		

		$('.shape').css('transform', 'skewX('+(winHeight/winWidth)*30+'deg) skewY('+(winWidth/winHeight)*30+'deg) translateZ('+winWidth/2+'px)');
	});

});