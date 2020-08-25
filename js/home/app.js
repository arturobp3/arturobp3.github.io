
const JOE_ASSISTANT = "#00c4f8";


/* Comprueba el tamaño de la pantalla y pone las particulas en consecuencia */
function checkParticles(path){
  var particles = ""

  //MOBILE
  if($(window).width() <= 600){
      //your code here
      particles = path.concat("mobile.json")
  } else {
      particles = path.concat("pc.json")
  }
  particlesJS.load('particles-js', particles, function() {
      console.log('particles.js loaded - callback');
  });

}


function loadingScreen(projectName, color){
    $(".loading-screen h1").text(projectName);
    $(".loading-screen").css("background-color", color);
    $(".loading-screen .loading-container > h1").css("transition", "opacity 0.3s");
    $(".loading-screen .loading-container > h1").css("opacity", "1");
}

function scrollProjectArea(context){
    if(screen.width > 900){
        if ($(context).scrollTop() > 0){
            var $projectInfo = $('.project-area .projectCover .project-info');
            var $franjaColor = $('.project-area .projectCover .franjaColor');
            var s = $(context).scrollTop(), d = $(document).height(), c = $(context).height();
            scrollPercent = (s / (d - c));

            var positionFranjaColor = (-scrollPercent * ($(document).width() - $franjaColor.width()));
            var positionProjectInfo = (-scrollPercent * ($(document).width() - $projectInfo.width()));

            $franjaColor.css("right", positionFranjaColor);
            $projectInfo.css("width", 55 + scrollPercent * 100 + "%");
        } 
    }
}
