$(document).ready(function(){

    var clickTimer;

    // make a counter
    var n = 0;

    $('body').mouseup(function(){
      clearTimeout(clickTimer);
      // Clear interval
      return false;

    }).mousedown(function(){

      // Set interval
      clickTimer = window.setInterval(function() { 

        // add to n every 4 milliseconds
        n++;

        // tranform circle's css every 4 milliseconds
        $('#circle').css('transform', 'scale('+n/10+')');

      },4000);
      return false; 
    });  

});