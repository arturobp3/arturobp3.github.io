
const JOE_ASSISTANT = "#00c4f8";


/* CUANDO EL DOCUMENTO ESTÁ PREPARADO */
$( document ).ready(function() {
  checkParticles();
});



/* CUANDO SE CAMBIE EL TAMAÑO DE PANTALLA */
$( window ).resize(function() {
  checkParticles();
  closeToggleMenu();
});


/* Comprueba el tamaño de la pantalla y pone las particulas en consecuencia */
function checkParticles(){
  var particles = ""

  //MOBILE
  if($(window).width() <= 600){
      //your code here
      particles = "js/home/json-particles/mobile.json"
  } else {
      particles = "js/home/json-particles/pc.json"
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

/* CUANDO SE CAMBIE DE PAGINA O SE VAYA HACIA ATRAS HAY QUE QUITAR LA OPACIDAD DE NUEVO */