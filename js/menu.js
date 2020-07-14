/* Toggle between adding and removing the "responsive" class to topnav when the user 
clicks on the icon */
function openCloseToggleMenu() {
    var x = document.getElementById("toggleMenu");
    if (x.className === "hamburger hamburger--emphatic") {
      x.className += " is-active";
      document.getElementById("sidebar").style.display = "flex";
      document.getElementById("contentCover").style.filter = "blur(3px)";
      document.getElementById("particles-js").style.filter = "blur(3px)";
      document.body.style.overflowY = "hidden";
 
    } else {
      x.className = "hamburger hamburger--emphatic";
      document.getElementById("sidebar").style.display = "none";
      document.getElementById("contentCover").style.filter = "none";
      document.getElementById("particles-js").style.filter = "none";
      document.body.style.overflowY = "unset";
    }
  }
