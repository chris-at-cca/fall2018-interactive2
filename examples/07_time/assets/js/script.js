$(document).ready(function(){

// add a zero to times below 10
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// set up time getting function
function getTime(){
	var d = new Date();
    
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    $('body').html(h + ":" + m + ":" + s);

    console.log(m);
    if(m == 00){
    	$('body').addClass('noon');
    } else {
    	$('body').removeClass('noon');
    }
}


// call getTime every 1 second
setInterval(function() {
  getTime();
}, 1000);


});