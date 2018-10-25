$(document).ready(function(){

	var winWidth;
	var winHeight;

	// check when the window is resized
	$(window).on('resize', function() {

		// update the webpage with the window dimensions
		winWidth = $(window).width();	
		winHeight = $(window).height();
		

		$('div[class^="shape"]').css('transform', 'skewX('+(winHeight/winWidth)*30+'deg) skewY('+(winWidth/winHeight)*30+'deg) translateZ('+winWidth/2+'px)');
	});

	n = 1;

	$('body').click(function(){
		$(this).append('<div class="shape-'+n+'"></div>')
		$('.shape-'+n).css({
			'top': Math.floor(Math.random() * winHeight),
			'left': Math.floor(Math.random() * winWidth)
		});
		n++;
	});

});