var joeAssistant = "#projects .container .content .joeAssistant"
var joeAssistantCircles = "#projects .container .content .joeAssistant .projectContent .circles"
var joeAssistantTitle = "#projects .container .content .joeAssistant .projectContent .titleProject"
var joeAssistantDescription = "#projects .container .content .joeAssistant .projectContent .descripcion"
var joeAssistantReadMore = "#projects .container .content .joeAssistant .projectContent .textoImg .titleTexto #readMoreJoeAssistant"
var joeAssistantImg = "#projects .container .content .joeAssistant .projectContent .textoImg .image > img"


var faceDetection = "#projects .container .content .faceDetection"
var faceDetectionCircles = "#projects .container .content .faceDetection .projectContent .circles"
var faceDetectionTitle = "#projects .container .content .faceDetection .projectContent .titleProject"
var faceDetectionDescription = "#projects .container .content .faceDetection .projectContent .descripcion"
var faceDetectionReadMore = "#projects .container .content .faceDetection .projectContent .textoImg .titleTexto #readMoreProjects"
var faceDetectionImg = "#projects .container .content .faceDetection .projectContent .textoImg .image > img"

var matchItUp = "#projects .container .content .matchItUp"
var matchItUpCircles = "#projects .container .content .matchItUp .projectContent .circles"
var matchItUpTitle = "#projects .container .content .matchItUp .projectContent .titleProject"
var matchItUpDescription = "#projects .container .content .matchItUp .projectContent .descripcion"
var matchItUpReadMore = "#projects .container .content .matchItUp .projectContent .textoImg .titleTexto #readMoreProjects"
var matchItUpImg = "#projects .container .content .matchItUp .projectContent .textoImg .image > img"

var productCatalogue = "#projects .container .content .productCatalogue"
var productCatalogueCircles = "#projects .container .content .productCatalogue .projectContent .circles"
var productCatalogueTitle = "#projects .container .content .productCatalogue .projectContent .titleProject"
var productCatalogueDescription = "#projects .container .content .productCatalogue .projectContent .descripcion"
var productCatalogueReadMore = "#projects .container .content .productCatalogue .projectContent .textoImg .titleTexto #readMoreProjects"
var productCatalogueImg = "#projects .container .content .productCatalogue .projectContent .textoImg .image > img"

var trafficSim = "#projects .container .content .trafficSim"
var trafficSimCircles = "#projects .container .content .trafficSim .projectContent .circles"
var trafficSimTitle = "#projects .container .content .trafficSim .projectContent .titleProject"
var trafficSimDescription = "#projects .container .content .trafficSim .projectContent .descripcion"
var trafficSimReadMore = "#projects .container .content .trafficSim .projectContent .textoImg .titleTexto #readMoreProjects"
var trafficSimImg = "#projects .container .content .trafficSim .projectContent .textoImg .image > img"

var portfolio = "#projects .container .content .portfolio"
var portfolioCircles = "#projects .container .content .portfolio .projectContent .circles"
var portfolioTitle = "#projects .container .content .portfolio .projectContent .titleProject"
var portfolioDescription = "#projects .container .content .portfolio .projectContent .descripcion"
var portfolioReadMore = "#projects .container .content .portfolio .projectContent .textoImg .titleTexto #readMoreProjects"
var portfolioImg = "#projects .container .content .portfolio .projectContent .textoImg .image > img"

var todoList = "#projects .container .content .todoList"
var todoListCircles = "#projects .container .content .todoList .projectContent .circles"
var todoListTitle = "#projects .container .content .todoList .projectContent .titleProject"
var todoListDescription = "#projects .container .content .todoList .projectContent .descripcion"
var todoListReadMore = "#projects .container .content .todoList .projectContent .textoImg .titleTexto #readMoreProjects"
var todoListImg = "#projects .container .content .todoList .projectContent .textoImg .image > img"

var asteyo = "#projects .container .content .asteyo"
var asteyoCircles = "#projects .container .content .asteyo .projectContent .circles"
var asteyoTitle = "#projects .container .content .asteyo .projectContent .titleProject"
var asteyoDescription = "#projects .container .content .asteyo .projectContent .descripcion"
var asteyoReadMore = "#projects .container .content .asteyo .projectContent .textoImg .titleTexto #readMoreProjects"
var asteyoImg = "#projects .container .content .asteyo .projectContent .textoImg .image > img"

$(document).ready(function(){

    /* JOE ASSISTANT */
    $(joeAssistant).hover(function(){
        /* CUANDO SE ACTIVA EL HOVER */
            $(joeAssistantCircles.concat(" .circle3")).css("clip-path", "circle(800px at 50% 50%)");
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
            $(joeAssistantImg).css("transform", "scale(1.5)");
            $(joeAssistantImg).css("transition", "transform 0.3s");
        }, function(){
            $(joeAssistantCircles.concat(" .circle3")).css("clip-path", "circle(300px at 90% 1%)");
            $(joeAssistantTitle).css("color", "#00c4f8");
            $(joeAssistantTitle).css("transition", "0.5s");
            $(joeAssistantDescription).css("visibility", "hidden");
            //$(joeAssistantDescription).css("display", "none");
            $(joeAssistantTitle).css("transform", "translateY(3rem)");
            $(joeAssistantReadMore).css("font-size", "35px");
            $(joeAssistantReadMore).css("color", "#ffc802");
            $(joeAssistantReadMore).text("Coming soon !");
            $(joeAssistantImg).css("transform", "scale(1)");
            $(joeAssistantImg).css("transition", "transform 0.5s");
        }
    );

        /* FACE DETECTION */
    $(faceDetection).hover(function(){
        /* CUANDO SE ACTIVA EL HOVER */
            $(faceDetectionCircles.concat(" .circle3")).css("clip-path", "circle(600px at 50% 50%)");
            $(faceDetectionTitle).css("color", "#f9f9f9");
            $(faceDetectionTitle).css("transition", "color 0.45s");
            $(faceDetectionTitle).css("transition", "0.3s");
            $(faceDetectionTitle).css("transform", "translateY(0rem)");
            $(faceDetectionDescription).css("color", "#f9f9f9");
            $(faceDetectionDescription).css("visibility", "visible");
            $(faceDetectionReadMore).css("display", "block");
            $(faceDetectionReadMore).css("color", "#f9f9f9");
            $(faceDetectionReadMore).css("font-size", "25px");
            $(faceDetectionReadMore).css("transition", "color 0.45s");
            $(faceDetectionImg).css("transform", "scale(1.3)");
            $(faceDetectionImg).css("transition", "transform 0.3s");
    }, function(){
            $(faceDetectionCircles.concat(" .circle3")).css("clip-path", "circle(120px at 81% 40%)");
            $(faceDetectionTitle).css("color", "#ed6f6f");
            $(faceDetectionTitle).css("transition", "0.5s");
            $(faceDetectionTitle).css("transform", "translateY(3rem)");
            $(faceDetectionDescription).css("visibility", "hidden");
            $(faceDetectionReadMore).css("color", "#f9f9f9");
            $(faceDetectionReadMore).css("display", "none");
            $(faceDetectionImg).css("transform", "scale(1)");
            $(faceDetectionImg).css("transition", "transform 0.5s");
        }
    );

        /* MATCH IT UP */
    $(matchItUp).hover(function(){
            /* CUANDO SE ACTIVA EL HOVER */
            $(matchItUpCircles.concat(" .circle3")).css("clip-path", "circle(600px at 50% 50%)");
            $(matchItUpTitle).css("color", "#f9f9f9");
            $(matchItUpTitle).css("transition", "color 0.45s");
            $(matchItUpTitle).css("transition", "0.3s");
            $(matchItUpTitle).css("transform", "translateY(0rem)");
            $(matchItUpDescription).css("color", "#f9f9f9");
            $(matchItUpDescription).css("visibility", "visible");
            $(matchItUpReadMore).css("display", "block");
            $(matchItUpReadMore).css("color", "#f9f9f9");
            $(matchItUpReadMore).css("font-size", "25px");
            $(matchItUpReadMore).css("transition", "color 0.45s");
             $(matchItUpImg).css("transform", "scale(1.3)");
            $(matchItUpImg).css("transition", "transform 0.3s");
    }, function(){
            $(matchItUpCircles.concat(" .circle3")).css("clip-path", "circle(120px at 81% 40%)");
            $(matchItUpTitle).css("color", "#87c51e");
            $(matchItUpTitle).css("transition", "0.5s");
            $(matchItUpTitle).css("transform", "translateY(3rem)");
            $(matchItUpDescription).css("visibility", "hidden");
            $(matchItUpReadMore).css("color", "#f9f9f9");
            $(matchItUpReadMore).css("display", "none");
            $(matchItUpImg).css("transform", "scale(1)");
            $(matchItUpImg).css("transition", "transform 0.5s");
        }
    );

        /* PRODUCT CATALOG */
    $(productCatalogue).hover(function(){
            /* CUANDO SE ACTIVA EL HOVER */
            $(productCatalogueCircles.concat(" .circle3")).css("clip-path", "circle(600px at 50% 50%)");
            $(productCatalogueTitle).css("color", "#f9f9f9");
            $(productCatalogueTitle).css("transition", "color 0.45s");
            $(productCatalogueTitle).css("transition", "0.3s");
            $(productCatalogueTitle).css("transform", "translateY(0rem)");
            $(productCatalogueDescription).css("color", "#f9f9f9");
            $(productCatalogueDescription).css("visibility", "visible");
            $(productCatalogueReadMore).css("display", "block");
             $(productCatalogueReadMore).css("color", "#f9f9f9");
            $(productCatalogueReadMore).css("font-size", "25px");
            $(productCatalogueReadMore).css("transition", "color 0.45s");
            $(productCatalogueImg).css("transform", "scale(1.3)");
            $(productCatalogueImg).css("transition", "transform 0.3s");
    }, function(){
            $(productCatalogueCircles.concat(" .circle3")).css("clip-path", "circle(120px at 81% 40%)");
            $(productCatalogueTitle).css("color", "#ff9400");
            $(productCatalogueTitle).css("transition", "0.5s");
            $(productCatalogueTitle).css("transform", "translateY(3rem)");
            $(productCatalogueDescription).css("visibility", "hidden");
             $(productCatalogueReadMore).css("color", "#f9f9f9");
            $(productCatalogueReadMore).css("display", "none");
            $(productCatalogueImg).css("transform", "scale(1)");
            $(productCatalogueImg).css("transition", "transform 0.5s");
        }
    );

        /* TRAFFIC SIMULATOR */
    $(trafficSim).hover(function(){
            /* CUANDO SE ACTIVA EL HOVER */
            $(trafficSimCircles.concat(" .circle3")).css("clip-path", "circle(600px at 50% 50%)");
            $(trafficSimTitle).css("color", "#f9f9f9");
            $(trafficSimTitle).css("transition", "color 0.45s");
            $(trafficSimTitle).css("transition", "0.3s");
            $(trafficSimTitle).css("transform", "translateY(0rem)");
            $(trafficSimDescription).css("color", "#f9f9f9");
            $(trafficSimDescription).css("visibility", "visible");
            $(trafficSimReadMore).css("display", "block");
             $(trafficSimReadMore).css("color", "#f9f9f9");
            $(trafficSimReadMore).css("font-size", "25px");
            $(trafficSimReadMore).css("transition", "color 0.45s");
            $(trafficSimImg).css("transform", "scale(1.3)");
            $(trafficSimImg).css("transition", "transform 0.3s");
    }, function(){
            $(trafficSimCircles.concat(" .circle3")).css("clip-path", "circle(120px at 81% 40%)");
            $(trafficSimTitle).css("color", "#ffc802");
            $(trafficSimTitle).css("transition", "0.5s");
            $(trafficSimTitle).css("transform", "translateY(3rem)");
            $(trafficSimDescription).css("visibility", "hidden");
             $(trafficSimReadMore).css("color", "#f9f9f9");
            $(trafficSimReadMore).css("display", "none");
            $(trafficSimImg).css("transform", "scale(1)");
            $(trafficSimImg).css("transition", "transform 0.5s");
        }
    );

            /* PORTFOLIO */
    $(portfolio).hover(function(){
            /* CUANDO SE ACTIVA EL HOVER */
            $(portfolioCircles.concat(" .circle3")).css("clip-path", "circle(800px at 50% 50%)");
            $(portfolioTitle).css("color", "#f9f9f9");
            $(portfolioTitle).css("transition", "color 0.45s");
            $(portfolioTitle).css("transition", "0.3s");
            $(portfolioTitle).css("transform", "translateY(0rem)");
            $(portfolioDescription).css("color", "#f9f9f9");
            $(portfolioDescription).css("visibility", "visible");
            $(portfolioReadMore).css("display", "block");
            $(portfolioReadMore).css("color", "#f9f9f9");
            $(portfolioReadMore).css("font-size", "25px");
            $(portfolioReadMore).css("transition", "color 0.45s");
            $(portfolioImg).css("transform", "scale(1.3)");
            $(portfolioImg).css("transition", "transform 0.3s");
    }, function(){
            $(portfolioCircles.concat(" .circle3")).css("clip-path", "circle(300px at 90% 1%)");
            $(portfolioTitle).css("color", "#70ceb4");
            $(portfolioTitle).css("transition", "0.5s");
            $(portfolioTitle).css("transform", "translateY(3rem)");
            $(portfolioDescription).css("visibility", "hidden");
            $(portfolioReadMore).css("color", "#f9f9f9");
            $(portfolioReadMore).css("display", "none");
            $(portfolioImg).css("transform", "scale(1)");
            $(portfolioImg).css("transition", "transform 0.5s");
        }
    );

        /* TO-DO-LIST */
    $(todoList).hover(function(){
            /* CUANDO SE ACTIVA EL HOVER */
            $(todoListCircles.concat(" .circle3")).css("clip-path", "circle(600px at 50% 50%)");
            $(todoListTitle).css("color", "#f9f9f9");
            $(todoListTitle).css("transition", "color 0.45s");
            $(todoListTitle).css("transition", "0.3s");
            $(todoListTitle).css("transform", "translateY(0rem)");
            $(todoListDescription).css("color", "#f9f9f9");
            $(todoListDescription).css("visibility", "visible");
            $(todoListReadMore).css("display", "block");
            $(todoListReadMore).css("color", "#f9f9f9");
            $(todoListReadMore).css("font-size", "25px");
            $(todoListReadMore).css("transition", "color 0.45s");
            $(todoListImg).css("transform", "scale(1.3)");
            $(todoListImg).css("transition", "transform 0.3s");
    }, function(){
            $(todoListCircles.concat(" .circle3")).css("clip-path", "circle(120px at 81% 40%)");
            $(todoListTitle).css("color", "#3b5998");
            $(todoListTitle).css("transition", "0.5s");
            $(todoListTitle).css("transform", "translateY(3rem)");
            $(todoListDescription).css("visibility", "hidden");
            $(todoListReadMore).css("color", "#f9f9f9");
            $(todoListReadMore).css("display", "none");
            $(todoListImg).css("transform", "scale(1)");
            $(todoListImg).css("transition", "transform 0.5s");
        }
    );

            /* ASTEYO */
    $(asteyo).hover(function(){
            /* CUANDO SE ACTIVA EL HOVER */
            $(asteyoCircles.concat(" .circle3")).css("clip-path", "circle(600px at 50% 50%)");
            $(asteyoTitle).css("color", "#f9f9f9");
            $(asteyoTitle).css("transition", "color 0.45s");
            $(asteyoTitle).css("transition", "0.3s");
            $(asteyoTitle).css("transform", "translateY(0rem)");
            $(asteyoDescription).css("color", "#f9f9f9");
            $(asteyoDescription).css("visibility", "visible");
            $(asteyoReadMore).css("display", "block");
            $(asteyoReadMore).css("color", "#f9f9f9");
            $(asteyoReadMore).css("font-size", "25px");
            $(asteyoReadMore).css("transition", "color 0.45s");
            $(asteyoImg).css("transform", "scale(1.3)");
            $(asteyoImg).css("transition", "transform 0.3s");
    }, function(){
            $(asteyoCircles.concat(" .circle3")).css("clip-path", "circle(120px at 81% 40%)");
            $(asteyoTitle).css("color", "#a05ecc");
            $(asteyoTitle).css("transition", "0.5s");
            $(asteyoTitle).css("transform", "translateY(3rem)");
            $(asteyoDescription).css("visibility", "hidden");
            $(asteyoReadMore).css("color", "#f9f9f9");
            $(asteyoReadMore).css("display", "none");
            $(asteyoImg).css("transform", "scale(1)");
            $(asteyoImg).css("transition", "transform 0.5s");
        }
    );

});