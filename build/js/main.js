///////////// owl carousel ////////////////

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
  });
});

/////////////// nav  ///////////////
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", function () {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});


var options = {
  strings: ["UI Specialist", "Marvel Sann", "Web Designer"],
  typeSpeed: 80,
  fadeOut: true,
  loop: true,
  showCursor: false,
};

var typed = new Typed(".element", options);


var myElement = document.querySelector(".navbar");
// construct an instance of Headroom, passing the element
var headroom = new Headroom(myElement);

// initialise
headroom.init();





