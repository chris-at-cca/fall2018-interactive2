$(document).ready(function(){

    // store the timer
    var clickTimer;

    // make a counter
    var n = 0;

    // clicking 
    var clicking = false;

    // x and y pos
    var xPos;
    var yPos;

    $('body').mouseup(function(){
      // clear interval
      clearTimeout(clickTimer);
 
      // reverse the animation
      
      /*
      clickTimer = window.setInterval(function() { 
        // subtract from n every 4 milliseconds
        n = n-1;
        $('#circle').css('transform', 'scale('+n/10+')');
        if(n == 10){
          clearTimeout(clickTimer);
        }
      },4);

      */

      // check that you're no longer clicking
      clicking = false;
      return false;

    }).mousedown(function(){
      // Set interval
      clickTimer = window.setInterval(function() { 
        // add to n every 4 milliseconds
        n++;
        clicking = true;
        // tranform circle's css every 4 milliseconds
        $('#circle').css('transform', 'scale('+n/10+')');
      },4);

      return false; 
    });  


    // move the item when you're mouse is down
    $('#circle').mousemove(function(e){
        // update mouse x and y position
        xPos = e.pageX;
        yPos = e.pageY;

        if(clicking == true){
          $('#circle').css({
            'top' : yPos+'px',
            'left' : xPos+'px',
          });
        }
      });

});