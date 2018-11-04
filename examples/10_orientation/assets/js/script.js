$(document).ready(function(){

	if(window.DeviceMotionEvent){
	  window.addEventListener("devicemotion", motion, false);
	}else{
	  console.log("DeviceMotionEvent is not supported");
	}

	function motion(event){
	  $('#accel').html("Accelerometer: "
	    + event.accelerationIncludingGravity.x + ", "
	    + event.accelerationIncludingGravity.y + ", "
	    + event.accelerationIncludingGravity.z
	  );
	}


	if(window.DeviceOrientationEvent){
	  window.addEventListener("deviceorientation", orientation, false);
	}else{
	  console.log("DeviceOrientationEvent is not supported");
	}

	var alpha;
	var beta;
	var gamma;

	function orientation(event){
	  $('#magnet').html("Magnetometer: "
	    + event.alpha + ", "
	    + event.beta + ", "
	    + event.gamma
	  );

	  alpha =  Math.floor(event.alpha);
	  beta =  Math.floor(event.beta);
	  gamma =  Math.floor(event.gamma);

	  $('body').css('background-color', 'rgb('+alpha+', '+beta+', '+gamma+')');

	}



});