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
        if($(window).scrollTop() > 50) {
            $("a").addClass("active-a");
        } else {
            $("a").removeClass("active-a");
        }
    });
});

$(document).ready(function() {
    $(window).on("scroll", function () {
        if($(window).scrollTop() > 50) {
            $("#hero_picture").addClass("hero-brightness");
        } else {
            $("#hero_picture").removeClass("hero-brightness");
        }
    });
});

