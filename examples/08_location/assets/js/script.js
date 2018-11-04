$(document).ready(function(){
    
    navigator.geolocation.getCurrentPosition(function success(position) {
        $('#coordinates').html('latitude: '+ position.coords.latitude + ', longitude: ' + position.coords.longitude);


        // check which hemisphere you're in 
        
        if(position.coords.latitude > 0){
            $('#hemisphere').append('N');
        } else if(position.coords.latitude < 0) {
            $('#hemisphere').append('S');
        }

        if(position.coords.longitude > 0){
            $('#hemisphere').append('E');
        } else if(position.coords.longitude < 0){
            $('#hemisphere').append('W');
        }


    });

});