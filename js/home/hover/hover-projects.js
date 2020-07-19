var joeAssistant = "#projects .container .content .joeAssistant"
var joeAssistantCircles = "#projects .container .content .joeAssistant .projectContent .circles"
var joeAssistantTitle = "#projects .container .content .joeAssistant .projectContent .titleProject"
var joeAssistantDescription = "#projects .container .content .joeAssistant .projectContent .descripcion"
var joeAssistantReadMore = "#projects .container .content .projectContent .textoImg .titleTexto .readMore"
var joeAssistantImg = "#projects .container .content .joeAssistant .projectContent .textoImg .image > img"

$(document).ready(function(){


    /* JOE ASSISTANT */
    $(joeAssistant).hover(function(){
        $(joeAssistantCircles.concat(" .circle3")).css("clip-path", "circle(600px at 50% 50%)");
        $(joeAssistantTitle).css("color", "#f9f9f9");
        $(joeAssistantTitle).css("transition", "color 0.45s");
        $(joeAssistantDescription).css("display", "block");
        $(joeAssistantDescription).css("color", "#f9f9f9");
        $(joeAssistantReadMore).css("display", "block");
        $(joeAssistantReadMore).css("color", "#f9f9f9");
    }, function(){
        $(joeAssistantCircles.concat(" .circle3")).css("clip-path", "circle(300px at 110% 50%)");
        $(joeAssistantTitle).css("color", "#00c4f8");
        $(joeAssistantDescription).css("display", "none");
        $(joeAssistantReadMore).css("display", "none");
    }
    );
});