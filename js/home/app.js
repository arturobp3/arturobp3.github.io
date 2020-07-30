
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
