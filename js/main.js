$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    $(".arro-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });
    //////////** main slider **//////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        speed: 500,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
    });
    ///////// **areaSlider** /////////
    var areaSlider = new Swiper('.areaSlider .swiper-container', {
        loop: true,
        pagination: {
            el: '.areaSlider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.areaSlider .swiper-button-next',
            prevEl: '.areaSlider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1200: {
                spaceBetween: 31,
                slidesPerView: 3,
            },
        },
    });
    ///////// **products Slider** ///////// 
    var productsSlider = new Swiper('.productsSlider .swiper-container', {
        loop: true,
        pagination: {
            el: '.productsSlider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.productsSlider .swiper-button-next',
            prevEl: '.productsSlider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 14,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 11,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 11,
            },
            1200: {
                spaceBetween: 11,
                slidesPerView: 5,
            },
        },
    });
    ///////// **menu** /////////
    if ($(window).width() <= 991) {
        $('.menu-icon').click(function () {
            $("nav").fadeIn(300);
            $(".nav-cont").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.nav-cont').click(function (e) {
            e.stopPropagation();
        });
        $('.close-menu').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
    }
    if ($(window).width() <= 1199) {
        $(".mega-ul").unwrap();
        $('.mega-btn .nav-a').removeAttr("href")
        $('.mega-btn .nav-a').click(function () {
            $(".mega-btn .nav-a").not(this).removeClass("active");
            $(this).toggleClass("active");
            if ($(this).siblings(".mega-ul").css('display') == 'none') {
                $(this).siblings(".mega-ul").slideDown(500);
            } else {
                $(this).siblings(".mega-ul").slideUp(500);
            }
            $(".mega-btn .nav-a").not(this).siblings(".mega-ul").slideUp(500);
        })
    }
    ///////// **search** /////////
    if ($(window).width() <= 767) {
        $(".search-icon").click(function () {
            $(".search-cont").fadeIn(400);
            $("body").addClass("overflow");
            $(".search-form").addClass("open");
        })
        $('.search-cont').click(function () {
            $("body").removeClass("overflow");
            $(".search-cont").fadeOut(500);
            $(".search-form").removeClass("open");
        });
        $('.search-form').click(function (e) {
            e.stopPropagation();
        });
    }
});