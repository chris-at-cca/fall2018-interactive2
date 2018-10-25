$(document).ready(function(){

  var scrollPos;

  // check when the user scrolls
  $(window).scroll(function () {
    
    // update the scroll position variable
    scrollPos = $(document).scrollTop();
      
    $('body').append('<div class="circle"></div>');

    $('.circle').css('transform', 'scale('+1*scrollPos/10+')');

  });

});