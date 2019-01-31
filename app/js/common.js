// 'use strict';

$(document).ready(function () {

    //Слайдер на главной (первый экран)
    $('.first-left-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        appendDots: $('.intro__dots'),
        customPaging: function (slider, i) {
            return '<span class="intro__dots_dot"></span>';
        }
    });
    $('.first-left-btn').click(function () {
        $('.first-left-slider').slick('slickNext');
    });


    //Слайдер на главной (новости)
    $('.third-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.third-btn_next').click(function () {
        $('.third-slider').slick('slickNext');
    });
    $('.third-btn_back').click(function () {
        $('.third-slider').slick('slickPrev');
    });

    //видео в попапе на главной
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            // "zoom",
            //"share",
            // "slideShow",
            //"fullScreen",
            //"download",
            // "thumbs",
            "close"],
        infobar: false
    });
    //Слайдер на view-events
    $('.events-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        infinite: true
    });

    //Меню на мобильном
    $('.header-btn-menu').click(function(){
       $(this).toggleClass('active');
       $('.header-right').toggleClass('active');
       if($(this).hasClass('active')){
           bodyFreezeScroll()
       }
       else {
           bodyUnfreezeScroll();
       }
    });
    var $body = $('body');
    function bodyFreezeScroll() {
        let bodyWidth = $body.innerWidth();
        $body.css('overflow', 'hidden');
        $body.css('marginRight', ($body.css('marginRight') ? '+=' : '') + ($body.innerWidth() - bodyWidth))
    }

    function bodyUnfreezeScroll() {
        let bodyWidth = $body.innerWidth();
        $body.css('marginRight', '0')
        $body.css('overflow', 'auto');
    }

    //Анимации
    function gsapTop() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapTop').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            var position = $(this).height();
            console.log(animationDelay);
            var tween = TweenMax.fromTo(this, animationDuration,
                {y: -position},
                {y: 0, ease: Power4.easeOut, delay: animationDelay, force3D:true}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapWidth() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapWidth').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 1.5;
            console.log(animationDelay);
            var tween = TweenMax.fromTo(this, animationDuration,
                {width: 0},
                {width: "100%", ease: Power2.easeOut, delay: animationDelay}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: this})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapWidthBottom() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapWidthBottom').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 1.5;
            console.log(animationDelay);
            var tween = TweenMax.fromTo(this, animationDuration,
                {width: 0},
                {width: "100%", ease: Power2.easeOut, delay: animationDelay}
            );
            new ScrollMagic.Scene({triggerElement: ".third"})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapWidthMinTop() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapWidthMinTop').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 1.5;
            console.log(animationDelay);
            var tween = TweenMax.fromTo(this, animationDuration,
                {width: "100%"},
                {width: "0", ease: Power2.easeOut, delay: animationDelay}
            );

            new ScrollMagic.Scene({triggerElement: ".first"})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapWidthMinBottom() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapWidthMinBottom').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 1.5;
            console.log(animationDelay);
            var tween = TweenMax.fromTo(this, animationDuration,
                {width: "100%"},
                {width: "0", ease: Power2.easeOut, delay: animationDelay}
            );
            new ScrollMagic.Scene({triggerElement: ".third"})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapHeight() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapHeight').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            console.log(animationDelay);
            var tween = TweenMax.fromTo(this, animationDuration,
                {height: 0},
                {height: "100%", ease: Power4.easeOut, delay: animationDelay}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapFade() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapFade').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            console.log(animationDelay);
            var tween = TweenMax.fromTo(this, animationDuration,
                {opacity: 0},
                {opacity: 1, ease: Power4.easeOut, delay: animationDelay}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapFadeTop() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapFadeTop').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 1;
            var position = $(this).data("height") || $(this).height();
            console.log(animationDelay);
            var tween = TweenMax.fromTo(this, animationDuration,
                {opacity: 0, y: position},
                {opacity: 1, y: 0, ease: Power4.easeOut, delay: animationDelay, force3D:true}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapSlideInLeft() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapSlideInLeft').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            var position = $(this).width() + 10;

            var tween = TweenMax.fromTo(this, animationDuration,
                {x: -position},
                {x: 0, ease: Power4.easeOut, delay: animationDelay, force3D:true}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapFadeInLeft() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapFadeInLeft').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            var position = $(this).width();

            var tween = TweenMax.fromTo(this, animationDuration,
                {x: -position, opacity: 0},
                {x: 0, opacity: 1, ease: Power4.easeOut, delay: animationDelay}, '=-1'
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapUp() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onCenter"}});

        $('.gsapUp').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.2;
            var position = $(this).height() * 2;
            console.log(animationDelay);
            var tween = TweenMax.fromTo(this, animationDuration,
                {y: position},
                {y: 0, ease: Power4.ease, delay: animationDelay, force3D:true}
            );
            var trigg = this.parentNode;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapScale() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapScale').each(function() {
            var animationDelay = $(this).data("delay") || 0.1;
            var animationDuration = $(this).data("duration") || 1;
            var position = $(this).height() * 2;
            console.log(animationDelay);
            var tween = TweenMax.fromTo(this, animationDuration,
                {transform: "scale(0)"},
                {transform: "scale(1)", ease: Power4.ease, delay: animationDelay, force3D:true}
            );
            var trigg = this.parentNode;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapSvg() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapSvg').each(function() {
            var animationDelay = $(this).data("delay") || 0.1;
            var animationDuration = $(this).data("duration") || 1;
            var position = $(this).height() * 2;
            console.log(animationDelay);
            // CustomEase.create("custom", "M0,0 C0.126,0.382 0.226,1.082 0.384,1.23 0.576,1.41 0.606,0.678 1,1");
            var tween = TweenMax.fromTo(this, animationDuration,
                {transform: "translateY(-100px) rotateZ(25deg)", opacity: 0},
                {transform: "translateY(0) rotateZ(0)", opacity: 1, ease: Elastic.easeOut.config(1, 0.3), delay: animationDelay, force3D:true}
            );
            var trigg = this.parentNode;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    if($(window).width() > 1023) {
        gsapTop();
        gsapWidth();
        gsapHeight();
        gsapFade();
        gsapSlideInLeft();
        gsapFadeTop();
        gsapFadeInLeft();
        gsapUp();
        gsapWidthMinTop();
        gsapWidthMinBottom();
        gsapScale();
        gsapWidthBottom();
        gsapSvg();
    }


});


