$(document).ready(function() {
    $(window).on("scroll", function () {
        if($(window).scrollTop() > 50) {
            $("header").addClass("active");
            $("header").addClass('small');
        } else {
            $("header").removeClass("active");
            $("header").removeClass('small');
        }
    });
});

