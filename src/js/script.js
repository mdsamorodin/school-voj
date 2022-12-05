$(document).ready(function () {
    $('.camps__wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/trio_camps.svg"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/trio_camps.svg"></button>'
    });
});