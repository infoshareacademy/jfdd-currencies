/**
 * Created by lukaszk on 15.12.15.
 */
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('.move_to_top').fadeIn();
        } else {
            $('.move_to_top').fadeOut();
        }
    });

    $('.move_to_top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

});