// 'use strict';

$(document).ready(function () {

    //Слайдер на главной (первый экран)
    $('.first-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000
    });
    $('.first-btn_next').click(function() {
        $('.first-slider').slick('slickNext')
    });
    $('.first-btn_back').click(function() {
        $('.first-slider').slick('slickPrev')
    });

    //клик на label для input checkbox (форма на главной)

    $('.label-check').click(function() {

        $(this).parent().find('.label-text').addClass('active');
        $(this).parent().siblings().find('.label-text').removeClass('active');

    });

    //Видео
    $(".bgvideo").click(function() {
        var dataYoutube = $(this).parents('.video').attr('data-youtube');
        $(this).parents('.video').html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe>');
    });

    //Табы календаря
    $('.table-item').click(function(){
       $(this).addClass('active').siblings().removeClass('active');
    });

    //Элемнты курсов (главная)
    $('.fourth-list').masonry({
        // options
        itemSelector: '.fourth-item',
        percentPosition: true,
        gutter: 40,
        horizontalOrder: true
    });
    //Слайдеры для галереи (главный экран)
    $('.fourth-slider_first').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        asNavFor: '.fourth-slider_second'
    });
    $('.fourth-slider_second').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        asNavFor: '.fourth-slider_first'
    });
    $('.fourth-btn_next').click(function() {
        $('.fourth-slider_second').slick('slickNext')
    });
    $('.fourth-btn_back').click(function() {
        $('.fourth-slider_second').slick('slickPrev')
    });


});
//Анимации
if (TweenMax) {
    function gsapTop(el) {
        if (el) {
            var el = el;
        } else {
            var el = $(".gsapTop").not(".gsapScroll");
        }
        // Element state prior to animation
        var i;

        for (i = 0; i < $(el).length; i++) {
            var animationDelay = $(el).eq(i).data("delay");
            var animationDuration = $(el).eq(i).data("duration") || 1;

            TweenMax.staggerTo($(el).eq(i), animationDuration, {
                ease: Power4.easeOut,
                y: 0,
                // transform: "translateY(0%)",
                delay: animationDelay
            });
        }

    }
    function gsapWidth(el) {
        if (el) {
            var el = el;
        } else {
            var el = $(".gsapWidth").not(".gsapScroll");
        }
        // Element state prior to animation
        var i;

        for (i = 0; i < $(el).length; i++) {
            var animationDelay = $(el).eq(i).data("delay");
            var animationDuration = $(el).eq(i).data("duration") || 1;

            TweenMax.staggerTo($(el).eq(i), animationDuration, {
                ease: Power4.easeOut,
                width: "100%",
                // transform: "translateY(0%)",
                delay: animationDelay
            });
        }

    }
    function gsapHeight(el) {
        if (el) {
            var el = el;
        } else {
            var el = $(".gsapHeight").not(".gsapScroll");
        }
        // Element state prior to animation
        var i;

        for (i = 0; i < $(el).length; i++) {
            var animationDelay = $(el).eq(i).data("delay");
            var animationDuration = $(el).eq(i).data("duration") || 1;

            TweenMax.staggerTo($(el).eq(i), animationDuration, {
                ease: Power4.easeOut,
                height: "100%",
                // transform: "translateY(0%)",
                delay: animationDelay
            });
        }

    }
    function gsapFade(el) {
        if (el) {
            var el = el;
        } else {
            var el = $(".gsapFade").not(".gsapScroll");
        }
        // Element state prior to animation
        var i;

        for (i = 0; i < $(el).length; i++) {
            var animationDelay = $(el).eq(i).data("delay");
            var animationDuration = $(el).eq(i).data("duration") || 1;

            TweenMax.staggerTo($(el).eq(i), animationDuration, {
                ease: Power4.easeOut,
                opacity: 1,
                delay: animationDelay
            });
        }

    }
    function gsapFadeTop(el) {
        if (el) {
            var el = el;
        } else {
            var el = $(".gsapFadeTop").not(".gsapScroll");
        }
        // Element state prior to animation
        var i;

        for (i = 0; i < $(el).length; i++) {
            var animationDelay = $(el).eq(i).data("delay");
            var animationDuration = $(el).eq(i).data("duration") || 1;

            TweenMax.staggerTo($(el).eq(i), animationDuration, {
                ease: "Power4.easeOut",
                opacity: 1,
                y: 0,
                delay: animationDelay
            });
        }

    }
    function gsapSlideInLeft(el) {
        if (el) {
            var el = el;
        } else {
            var el = $(".gsapSlideInLeft").not(".gsapScroll");
        }
        // Element state prior to animation
        // Animation Settings
        for (i = 0; i < $(el).length; i++) {
            var animationDelay = $(el).eq(i).data("delay");
            var animationDuration = $(el).eq(i).data("duration") || 1;

            TweenMax.staggerTo($(el).eq(i), animationDuration, {
                ease: "Power4.easeOut",
                transform: "translateX(0)",
                delay: animationDelay
            });
        }
    }
    function gsapFadeInLeft(el) {
        if (el) {
            var el = el;
        } else {
            var el = $(".gsapFadeInLeft").not(".gsapScroll");
        }
        // Element state prior to animation
        // Animation Settings
        for (i = 0; i < $(el).length; i++) {
            var animationDelay = $(el).eq(i).data("delay");
            var animationDuration = $(el).eq(i).data("duration") || 1;

            TweenMax.staggerTo($(el).eq(i), animationDuration, {
                ease: "Power4.easeOut",
                transform: "translateX(0)",
                opacity: "1",
                delay: animationDelay
            });
        }
    }
    // Run animation on page load
    $(function() {
        gsapTop();
        gsapWidth();
        gsapHeight();
        gsapFade();
        gsapFadeTop();
        gsapSlideInLeft();
        gsapFadeInLeft();
    });
    function gsapScroll(el) {
        var className = "";
        $.each(el.attr("class").split(/\s+/), function(i, name) {
            if (name.indexOf("gsap") > -1) {
                className = name;
                window[name](el);

            }
        });
    }

    // TweenMax on Scroll
    $(function() {
        // Hide all gsapScroll elements
        // $(".gsapScroll").css({
        //     opacity: "0"
        // });
        /* Every time the window is scrolled ... */
        $(window).scroll(function() {
            /* Check the location of each desired element */
            $(".gsapScroll").each(function(q) {
                if ($(window).width() < 960) {
                    var bottom_of_object = $(this).offset().top + 200;
                } else {
                    var bottom_of_object = $(this).offset().top;
                }
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                /* If the object is completely visible in the window, run the GSAP Scroll function */
                if (bottom_of_window > bottom_of_object) {
                    var item = $(this);
                    // Remove gsapScroll class
                    $(item).removeClass("gsapScroll");
                    gsapScroll(item);
                }
            });
        });
    });
}