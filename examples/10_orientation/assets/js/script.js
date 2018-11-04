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

function orientation(event){
  $('#magnet').html("Magnetometer: "
    + event.alpha + ", "
    + event.beta + ", "
    + event.gamma
  );
}


});