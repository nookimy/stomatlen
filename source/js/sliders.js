$(document).ready(function () {
  $(".main-slider__list.owl-carousel").owlCarousel({
    dots: true,
    nav: false,
    margin: 20,
    autoplay: true,
    loop:true,
    autoplayTimeout: 10000,
    responsive: {
      0: {
        items: 1
      }
    }
  });

  $(".specialists__list.owl-carousel").owlCarousel({
    dots: true,
    nav: false,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        margin: 20,
        items: 3
      }
    }
  });

  $(".gallery__list.owl-carousel").owlCarousel({
    stagePadding: 50,
    dots: true,
    nav: false,
    loop:true,
    margin: 0,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 2
      },
      1400: {
        items: 4
      }
    }
  });

  $(".testimony .owl-carousel").owlCarousel({
    dots: true,
    nav: false,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      }
    }
  });

  $(".licenses .owl-carousel").owlCarousel({
    dots: true,
    nav: false,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      }
    }
  });

  $(".sanepid-conclusion .owl-carousel").owlCarousel({
    dots: true,
    nav: false,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      }
    }
  });

  $(".special-offers__list--slider").owlCarousel({
    dots: true,
    nav: false,
    margin: 20,
    autoplay: false,
    loop:true,
    items: 1,
  });
});
