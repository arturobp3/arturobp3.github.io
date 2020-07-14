/* Toggle between adding and removing the "responsive" class to topnav when the user 
clicks on the icon */
function openToggleMenu() {
    var x = document.getElementById("toggleMenu");
    if (x.className === "hamburger hamburger--emphatic") {
      x.className += " is-active";
      document.getElementById("sidebar").style.display = "flex";
    } else {
      x.className = "hamburger hamburger--emphatic";
      document.getElementById("sidebar").style.display = "none";
    }
  }

  function closeToggleMenu() {
    var x = document.getElementById("toggleMenu");
    if (x.className === "hamburger hamburger--emphatic") {
      x.className += " is-active";
      document.getElementById("sidebar").style.display = "flex";
    } else {
      x.className = "hamburger hamburger--emphatic";
      document.getElementById("sidebar").style.display = "none";
    }
  }