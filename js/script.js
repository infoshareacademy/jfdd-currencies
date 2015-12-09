$(document).ready(function() {
    $(window).on("scroll", function () {
        if($(window).scrollTop() > 50) {
            $("header").addClass("active");
        } else {
            $("header").removeClass("active");
        }
    });
});

$(document).ready(function() {
    $(window).on("scroll", function () {
        if($(window).scrollTop() > 40) {
            $("a").addClass("active-a");
        } else {
            $("a").removeClass("active-a");
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function(){
        if($(window).scrollTop() > 70) {
            $("header").addClass('small');
        } else {
            $("header").removeClass('small');
        }
    });
});

