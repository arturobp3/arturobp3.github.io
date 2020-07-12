
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


/* CUANDO EL DOCUMENTO ESTÁ PREPARADO */
$( document ).ready(function() {
  checkParticles();
});



/* CUANDO SE CAMBIE EL TAMAÑO DE PANTALLA */
$( window ).resize(function() {
  checkParticles();
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