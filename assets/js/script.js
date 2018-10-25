$(document).ready(function() {

  var winWidth = $(window).width();
  var winHeight = $(window).height();;

  $('div').draggable();

  $('div').each(function(){
    
    var rotation = Math.floor(Math.random() * 360);
    var xPos = Math.floor(Math.random() * winHeight);
    var yPos = Math.floor(Math.random() * winWidth);

    console.log(yPos);

    $(this).css({
      'transform' : 'rotate(' + rotation + 'deg)',
      'top' : yPos+'px',
      'left' : xPos+'px',
    });
  });

});