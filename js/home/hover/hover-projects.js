var joeAssistant = "#projects .container .content .joeAssistant"
var joeAssistantCircles = "#projects .container .content .joeAssistant .projectContent .circles"
var joeAssistantTitle = "#projects .container .content .joeAssistant .projectContent .titleProject"
var joeAssistantDescription = "#projects .container .content .joeAssistant .projectContent .descripcion"
var joeAssistantReadMore = "#projects .container .content .projectContent .textoImg .titleTexto .readMore"
var joeAssistantImg = "#projects .container .content .joeAssistant .projectContent .textoImg .image > img"


var faceDetection = "#projects .container .content .faceDetection"
var faceDetectionCircles = "#projects .container .content .faceDetection .projectContent .circles"
var faceDetectionTitle = "#projects .container .content .faceDetection .projectContent .titleProject"
var faceDetectionDescription = "#projects .container .content .faceDetection .projectContent .descripcion"
var faceDetectionReadMore = "#projects .container .content .projectContent .textoImg .titleTexto .readMore"
var faceDetectionImg = "#projects .container .content .faceDetection .projectContent .textoImg .image > img"

$(document).ready(function(){

    /* JOE ASSISTANT */
    $(joeAssistant).hover(function(){
            $(joeAssistantCircles.concat(" .circle3")).css("clip-path", "circle(600px at 50% 50%)");
            $(joeAssistantTitle).css("color", "#f9f9f9");
            $(joeAssistantTitle).css("transition", "color 0.45s");
            $(joeAssistantTitle).css("transition", "0.3s");
            $(joeAssistantTitle).css("transform", "translateY(0rem)");
            $(joeAssistantDescription).css("display", "block");
            $(joeAssistantDescription).css("color", "#f9f9f9");
            $(joeAssistantDescription).css("visibility", "visible");
            $(joeAssistantReadMore).css("display", "block");
            $(joeAssistantReadMore).css("color", "#f9f9f9");
            $(joeAssistantReadMore).css("font-size", "25px");
            $(joeAssistantReadMore).text("Read more");
            $(joeAssistantReadMore).css("transition", "color 0.45s");
        }, function(){
            $(joeAssistantCircles.concat(" .circle3")).css("clip-path", "circle(300px at 110% 50%)");
            $(joeAssistantTitle).css("color", "#00c4f8");
            $(joeAssistantTitle).css("transition", "0.5s");
            $(joeAssistantDescription).css("visibility", "hidden");
            //$(joeAssistantDescription).css("display", "none");
            $(joeAssistantTitle).css("transform", "translateY(3rem)");
            $(joeAssistantReadMore).css("font-size", "35px");
            $(joeAssistantReadMore).css("color", "#ffc802");
            $(joeAssistantReadMore).text("Coming soon !");
        }
    );

        /* FACE DETECTION */
    $(faceDetection).hover(function(){
            $(faceDetectionCircles.concat(" .circle3")).css("clip-path", "circle(600px at 50% 50%)");
            $(faceDetectionTitle).css("color", "#f9f9f9");
            $(faceDetectionTitle).css("transition", "color 0.45s");
            $(faceDetectionTitle).css("transition", "0.3s");
            $(faceDetectionTitle).css("transform", "translateY(0rem)");
            $(faceDetectionDescription).css("display", "block");
            $(faceDetectionDescription).css("color", "#f9f9f9");
            $(faceDetectionDescription).css("visibility", "visible");
    }, function(){
            $(faceDetectionCircles.concat(" .circle3")).css("clip-path", "circle(150px at 81% 40%)");
            $(faceDetectionTitle).css("color", "#ed6f6f");
            $(faceDetectionTitle).css("transition", "0.5s");
            $(faceDetectionDescription).css("visibility", "hidden");
            //$(joeAssistantDescription).css("display", "none");
            $(faceDetectionTitle).css("transform", "translateY(3rem)");
        }
    );
});