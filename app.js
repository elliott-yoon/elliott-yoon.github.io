var prevScrollpos = window.pageYOffset;
var h = window.innerHeight;

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos && (currentScrollPos > h + 70 || currentScrollPos < h - 70)) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
  sidebar();
}

/* When the user scrolls down past the hero image, show the side navigation. When the user scrolls up, hide it. */
var sidebar = function() {
  var currentScrollpos = window.pageYOffset;
  if (currentScrollpos < h - 142) {
    document.getElementById("floating-menu").style.top = "-700px";
  }
  else {
    document.getElementById("floating-menu").style.top = "70px";
  }
}
