$(document).ready(function () {
    $('.header_section_btn').click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var scrollTo = $(id).offset().top;
        
        $('html, body').animate({
            scrollTop: scrollTo
        }, 1000);
    });

    $('.portfolio_slider').slick({
        slidesToShow: 3,
        appendArrows: $('.portfolio_slider_arrows')
    });
});
