$(document).ready(function() {
    $(window).on("scroll", function () {
        if($(window).scrollTop() > 50) {
            $("header").addClass("active");
            $("#quick_contact").addClass("active");
            $("header").addClass('small');
        } else {
            $("header").removeClass("active");
            $("#quick_contact").removeClass("active");
            $("header").removeClass('small');
        }
    });
});

