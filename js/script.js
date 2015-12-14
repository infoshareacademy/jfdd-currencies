$(document).ready(function() {
    $(window).on("scroll", function () {
        if($(window).scrollTop() > 50) {
            $("header").addClass("active");
            $("#quick_contact").addClass("active");

        } else {
            $("header").removeClass("active");
            $("#quick_contact").removeClass("active");
        }
    });

    $(".menu-item").click(function(){
        $('.menu-item').removeClass('menu-item-selected');
        $(this).addClass("menu-item-selected");
    });

});

