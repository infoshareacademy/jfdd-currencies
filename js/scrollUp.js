/**
 * Created by lukaszk on 15.12.15.
 */
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('.moveToTop').fadeIn();
        } else {
            $('.moveToTop').fadeOut();
        }
    });

    $('.moveToTop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

});