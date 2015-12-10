$(document).ready(function() {
    $(window).on("scroll", function () {
        if($(window).scrollTop() > 50) {
            $("header").addClass("active");
            $("a").addClass("active-a");
            $("header").addClass('small');
        } else {
            $("header").removeClass("active");
            $("a").removeClass("active-a");
            $("header").removeClass('small');
        }
    });
});

