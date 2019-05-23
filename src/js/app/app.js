$(document).ready(function () {
    $('.header_section_btn').click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var scrollTo = $(id).offset().top;
        
        $('html, body').animate({
            scrollTop: scrollTo + 50
        }, 1000);
    });

    $('.portfolio_slider').slick({
        slidesToShow: 3,
        appendArrows: $('.portfolio_slider_arrows')
    });

    $('.question').each(function () {
        var question = $(this);
        question.find('.question_header').click(function () {
            $(this).find('.arrow').toggleClass('open');
            question.find('.answer').slideToggle();
        });
    });
});
