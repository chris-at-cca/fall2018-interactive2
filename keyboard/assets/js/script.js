$(document).ready(function(){
    // store code for your letters in variables

    var a = '<div class="letter-a">a</div>';
    var b = '<div class="letter-b">b</div>';

    // append the variable to the page when certain keys are pressed
    // remove all classes, then add a new class to the body tag
    $(document).bind('keyup', 'a', function(){
        $('body').append(a);
        $('body').removeClass();
        $('body').addClass('a');
    });

    $(document).bind('keyup', 'b', function(){
        $('body').append(b);
        $('body').removeClass();
        $('body').addClass('b');
    });
});