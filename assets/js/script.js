$(document).ready(function(){

    // stringify: https://www.w3schools.com/js/js_json_stringify.asp

    var red = 125;
    var green = 125;
    var blue = 125;
    var opacity = 1;
    var displayNone = null;
    changeColor();

    var newColor = localStorage.getItem("siteColors");

    newColor = JSON.parse(newColor);
    console.log(newColor);

    var rgba ={};

    if(newColor != null){
        for(myData in newColor)
        {
            $(".change_color[data-color="+myData+"]").css({"background":newColor[myData]});
        }
    }

    $(".colorPicker").css({"background":newColor[myData]});

    $(".colorIcon").click(function(){

        $(".colorPicker").css({"display":"flex"}).animate({"width":"40%"});
        $(".color").css({"display":"inline-block"});
        $(".saveButton").css({"display":"block"});

    });

    $(".saveButton").click(function (e) {

        displayNone = 1;

        rgba[ $(".change_color").attr('data-color') ] = "rgba("+red+","+green+","+blue+","+opacity+")";

        var object = JSON.stringify(rgba);

        localStorage.setItem("siteColors",object);

        if(displayNone != null)
        {
            $(".colorPicker").css({"display":"none"});
        }

        e.preventDefault();
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
        $('.nav, .colorPicker').css({"background":"rgba("+red+","+green+","+blue+","+opacity+")"});
    }

   var currentSection = "#home";

    $(".arrowRight").click(function(){
        console.log("TEST");
        if(currentSection == "#home"){
            currentSection = "#about";
        }
        else if(currentSection == "#about"){
            currentSection = "#projects";
        }
        else if(currentSection == "#projects"){
            currentSection = "#skills";
        }
        else if(currentSection == "#skills"){
            currentSection = "#contact";
        }

        $('html, body').animate({
            scrollLeft: $(currentSection).offset().left
        }, 2000).promise().done(function() {
            if(currentSection != "#home")
            {

                $(".arrowLeft").css({"display":"flex"});
            }
            else {
                $(".arrowLeft").hide();
            }
        });

    });

});