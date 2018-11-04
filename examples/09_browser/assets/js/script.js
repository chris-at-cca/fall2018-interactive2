$(document).ready(function(){

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        $('body').html("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude); 

    } else {
        $('body').html("Geolocation is not supported by this browser.");
    }


});