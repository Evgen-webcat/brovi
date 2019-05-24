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
        appendArrows: $('.portfolio_slider_arrows'),
        infinite: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.question').each(function () {
        var question = $(this);
        question.find('.question_header').click(function () {
            $(this).find('.arrow').toggleClass('open');
            question.find('.answer').slideToggle();
        });
    });

    $('.tariff_block_btn').click(function (event) {
        event.preventDefault();
        var tariff = $(this).parents('.tariff_block').find('.tariff_block_title').text();
        $('.modal_title').text(tariff);
        $('.tariff_input').val(tariff);
        $('.locker, .modal').fadeIn();
    });

    $('.close, .locker').click(function (event) {
        event.preventDefault();
        $('.locker, .modal').fadeOut();
        $('.thanks').delay(700).slideUp(0);
    });

    $('.phone_input').mask('+7 (999) 999-99-99');

    $('.phone_input').click(function () {
        if ($(this).val() == '+7 (___) ___-__-__') {
            $(this).setCursorPosition(4);
        }
    });

    $.fn.setCursorPosition = function (pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    $('#form').submit(function (event) {
        event.preventDefault();
        var data = $(this).serialize();

        $.ajax({
            url: 'php/send.php',
            method: 'POST',
            data: data,
            success: function (response) {
                $('.thanks').slideDown();
            }
        });
    });
});
