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
        },
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
        infinite: true
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
});