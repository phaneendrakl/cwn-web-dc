(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      autoplay: true, // Add autoplay option
      autoplayTimeout: 5000,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
      },
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();
