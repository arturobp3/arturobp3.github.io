/* Cierra o abre el menu según su estado */
function openCloseToggleMenu() {
    var x = document.getElementById("toggleMenu");
    if (x.className === "hamburger hamburger--emphatic") {
      x.className += " is-active";
      document.getElementById("sidebar").style.visibility ="visible";
      document.getElementById("sidebar").style.transform = "translateX(0rem)";
      document.getElementById("contentCover").style.filter = "blur(3px)";
      document.getElementById("particles-js").style.filter = "blur(3px)";
      document.body.style.overflowY = "hidden";
 
    } else {
      x.className = "hamburger hamburger--emphatic";
      document.getElementById("sidebar").style.visibility ="hidden";
      document.getElementById("sidebar").style.transform = "translateX(30rem)";
      document.getElementById("contentCover").style.filter = "none";
      document.getElementById("particles-js").style.filter = "none";
      document.body.style.overflowY = "unset";
    }
  }

  /* Cierra el menu hamburguer */
  function closeToggleMenu(){
    var x = document.getElementById("toggleMenu");
    x.className = "hamburger hamburger--emphatic";
    document.getElementById("sidebar").style.visibility ="hidden";
    document.getElementById("sidebar").style.transform = "translateX(30rem)";
    document.getElementById("contentCover").style.filter = "none";
    document.getElementById("particles-js").style.filter = "none";
    document.body.style.overflowY = "unset";
  }
