let toggle = document.querySelector(".main-nav__toggle");
let nav = document.querySelector(".main-nav__wrap");

toggle.onclick = function () {
  toggle.classList.toggle("main-nav__toggle--close");
  nav.classList.toggle("main-nav__wrap--opened");
};


/* Карусели */
$(document).ready(function () {
  $(".main-slider .owl-carousel").owlCarousel({
    dots: true,
    nav: false,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1
      }
    }
  });
});
