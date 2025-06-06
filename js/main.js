(function ($) {
    'use strict';
    $(document).on('ready', function () {
        jQuery(window).on('scroll', function () {
            if ($(this).scrollTop() > 200) {
                $('#header .header-inner').addClass('sticky');
            } else {
                $('#header .header-inner').removeClass('sticky');
            }
        });

        /*====================================
        Sticky Header JS
    ======================================*/
        jQuery(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                $('.header').addClass('sticky');
            } else {
                $('.header').removeClass('sticky');
            }
        });

        $('.pro-features .get-pro').on('click', function () {
            $('.pro-features').toggleClass('active');
        });

        /*====================================
        Mobile Menu
    ======================================*/
        $('.menu').slicknav({
            prependTo: '.mobile-nav',
            duration: 300,
            closeOnClick: true,
        });

        /*===============================
        Hero Slider JS
    =================================*/
        $('.hero-slider').owlCarousel({
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
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: false, // show next/prev arrows
        dots: false, // hide pagination dots
        responsiveClass: true,
        responsive: {
            0: {
                items: 1, // 0px up to 767px → 2 items
            },
            520: {
                items: 2, // 520px up to 767px → 2 items/
            },
            768: {
                items: 3, // 768px up to 991px → 3 items
            },
            992: {
                items: 4, // 992px and up → 4 items
            },
        },
    });

    /*====================
      Faol Ustozlar JS
  ======================*/
    const initializeCarousel = (carouselID, prevBtnID, nextBtnID, dotWrapperID, options) => {
        const owl = $(`${carouselID}`);
        const prevBtn = $(`${prevBtnID}`);
        const nextBtn = $(`${nextBtnID}`);
        owl.owlCarousel(options);
        if (dotWrapperID) {
            $(`${dotWrapperID} i`).click(function () {
                owl.trigger('to.owl.carousel', [$(this).index(), 300]);
            });
        }
        prevBtn.click(() => {
            owl.trigger('prev.owl.carousel');
        });
        nextBtn.click(() => {
            owl.trigger('next.owl.carousel');
        });
        owl.on('changed.owl.carousel', (event) => {
            if (event.item.index === 0) {
                prevBtn.addClass('disabled');
            } else {
                prevBtn.removeClass('disabled');
            }
            if (event.item.index === event.item.count - 1) {
                nextBtn.addClass('disabled');
            } else {
                nextBtn.removeClass('disabled');
            }
        });
    };

    const CAnnouncement = {
        loop: true,
        margin: 20,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        items: 4,
        dotsContainer: '#teachers-dots',
        responsive: {
            1440: {
                margin: 20,
                items: 4,
            },
            992: {
                margin: 16,
                items: 3,
            },
            768: {
                margin: 16,
                items: 2,
            },
            320: {
                margin: 16,
                items: 1,
            },
        },
    };
    initializeCarousel('#teachers-slider', '#teacher-slider-left', '#teacher-slider-right', '#teachers-dots', CAnnouncement);

    /*====================
      Preloader JS
  ======================*/
    $(window).on('load', function () {
        $('.preloader').addClass('preloader-deactivate');
    });
})(jQuery);
