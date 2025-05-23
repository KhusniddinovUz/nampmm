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
      loop: true,
      autoplay: true,
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
  /*===============================
        Footer Slider JS
  =================================*/
  $('#c-useful').owlCarousel({
    loop: true, autoplay: true,
    autoplayTimeout: 3000,
    nav: false, // show next/prev arrows
    dots: false, // hide pagination dots
    responsiveClass: true, responsive: {
      0: {
        items: 1, // 0px up to 767px → 2 items
      }, 520: {
        items: 2, // 520px up to 767px → 2 items/
      },
      768: {
        items: 3, // 768px up to 991px → 3 items
      }, 992: {
        items: 4, // 992px and up → 4 items
      },
    },
  });

  /*====================
      Preloader JS
  ======================*/
  $(window).on('load', function () {
    $('.preloader').addClass('preloader-deactivate');
  });
})(jQuery);
