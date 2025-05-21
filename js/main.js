(function ($) {
  "use strict";
  $(document).on('ready', function () {

    jQuery(window).on('scroll', function () {
      if ($(this).scrollTop() > 200) {
        $('#header .header-inner').addClass("sticky");
      } else {
        $('#header .header-inner').removeClass("sticky");
      }
    });

    /*====================================
        Sticky Header JS
    ======================================*/
    jQuery(window).on('scroll', function () {
      if ($(this).scrollTop() > 100) {
        $('.header').addClass("sticky");
      } else {
        $('.header').removeClass("sticky");
      }
    });

    $('.pro-features .get-pro').on("click", function () {
      $('.pro-features').toggleClass('active');
    });


    /*====================================
        Mobile Menu
    ======================================*/
    $('.menu').slicknav({
      prependTo: ".mobile-nav", duration: 300, closeOnClick: true,
    });

    /*===============================
        Hero Slider JS
    =================================*/
    $(".hero-slider").owlCarousel({
      loop: false,
      autoplay: false,
      smartSpeed: 500,
      autoplayTimeout: 3500,
      singleItem: true,
      autoplayHoverPause: true,
      items: 1,
      nav: true,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      dots: false,
    });
  });

  /*====================
      Preloader JS
  ======================*/
  $(window).on('load', function () {
    $('.preloader').addClass('preloader-deactivate');
  });
})(jQuery);
