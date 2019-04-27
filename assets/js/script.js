$(document).ready(function(){

    var red = 125;
    var green = 125;
    var blue = 125;
    var opacity = 1;
    changeColor();

    $(".colorPicker").click(function () {
        $(".colorPicker").animate({"width":"40%"});
        $(".color, .navColor").css({"display":"flex"});
        $(".saveButton").css({"display":"block"});
    });

    $(".saveButton").click(function () {
        localStorage.setItem('compressedFunc', changeColor());
    });

    $('.red').on('input', function () {
       red = $(this).val();
        changeColor();
    });
    $(".green").on('input',function () {
       green = $(this).val();
        changeColor();
    });
    $(".blue").on('input',function () {
        blue = $(this).val();
        changeColor();
    });
    $(".opacity").on('input',function () {
        opacity = $(this).val();
        changeColor();
    });
    function changeColor() {
        $('.nav').css({"background":"rgba("+red+","+green+","+blue+","+opacity+")"});
    }

});