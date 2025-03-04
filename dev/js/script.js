const toggle = document.querySelector(".main-nav__toggle");
const nav = document.querySelector(".main-nav__wrap");
const visuallyImpairedBtn = document.querySelector(".visually-impaired__btn");

// Основное меню
toggle.onclick = function () {
  toggle.classList.toggle("main-nav__toggle--close");
  nav.classList.toggle("main-nav__wrap--opened");
};

// Подменю
let submenuService = document.querySelector('.site-nav__submenu--service');
let menuLinkService = document.querySelector('.site-nav__menu-link--service');
let menuBackService = document.querySelector('.site-nav__submenu-back-link--service');
let submenuAbout = document.querySelector('.site-nav__submenu--about');
let menuLinkAbout = document.querySelector('.site-nav__menu-link--about');
let menuBackAbout = document.querySelector('.site-nav__submenu-back-link--about');

menuLinkService.onclick = function() {
  submenuService.classList.add('site-nav__submenu--opened');
};
menuBackService.onclick = function() {
  submenuService.classList.remove('site-nav__submenu--opened');
};
menuLinkAbout.onclick = function() {
  submenuAbout.classList.add('site-nav__submenu--opened');
};
menuBackAbout.onclick = function() {
  submenuAbout.classList.remove('site-nav__submenu--opened');
};


const servicesMenuElements = document.querySelectorAll(".services-menu__list"); // Списки в подменю Услуги, для которых должен работать аккордеон
const currentWidth = document.documentElement.clientWidth; // Текущая ширина окна браузера
const DESKTOP_WIDTH = 992; // Ширина, с которой начинается десктопная версия

// Аккордеон в подменю Услуги должен работать только до десктопной версии
if(currentWidth < DESKTOP_WIDTH) {
  servicesMenuElements.forEach((servicesMenuElement) => servicesMenuElement.style.display = "none");

  $(document).ready(function () {
    $('.services-menu__folder-heading').click(function () {
      $(this).toggleClass('services-menu__folder-heading--in').next().slideToggle();
      $('.services-menu__folder-heading').not(this).removeClass('services-menu__folder-heading--in').next().slideUp();
    });
  });
}

/*Кнопка переключения версии для слабовидящих*/
visuallyImpairedBtn.onclick = function () {
  visuallyImpairedBtn.classList.toggle("visually-impaired__btn--eye-crossed");
};

// faq
$(document).ready(function () {
  $('.faq__question').click(function () {
    $(this).toggleClass('faq__question--in').next().slideToggle();
    $('.faq__question').not(this).removeClass('faq__question--in').next().slideUp();
  });
});
