let toggle = document.querySelector(".main-nav__toggle");
let nav = document.querySelector(".main-nav__wrap");
let submenu = document.querySelector(".site-nav__submenu");
let visuallyImpairedBtn = document.querySelector(".visually-impaired__btn");

/*Основное меню*/
toggle.onclick = function () {
  toggle.classList.toggle("main-nav__toggle--close");
  nav.classList.toggle("main-nav__wrap--opened");
};

// Аккордеон в подменю Услуги должен работать только до десктопной версии
$(document).ready(function () {
  $('.services-menu__folder-heading').click(function () {
    $(this).toggleClass('services-menu__folder-heading--in').next().slideToggle();
    $('.services-menu__folder-heading').not(this).removeClass('services-menu__folder-heading--in').next().slideUp();
  });
});

/*Кнопка переключения версии для слабовидящих*/
visuallyImpairedBtn.onclick = function () {
  visuallyImpairedBtn.classList.toggle("visually-impaired__btn--eye-crossed");
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
