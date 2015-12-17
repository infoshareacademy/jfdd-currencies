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



    var func = function(firstHero, secondHero) {

        firstHero.fadeIn(1500);
        secondHero.fadeOut(1500);

        setTimeout(function() {
            func(secondHero,firstHero)
        } , 6000);

    };

    func($('#firstHero'),$('#secondHero'));


    $("#link-start").click(function() {
        $('html,body').animate({
                scrollTop: $("#start").offset().top},
            'slow');
    });

    $("#link-produkt").click(function() {
        $('html,body').animate({
                scrollTop: $("#functions").offset().top},
            'slow');
    });

    $("#link-zespol").click(function() {
        $('html,body').animate({
                scrollTop: $("#ourTeam").offset().top},
            'slow');
    });

    $("#link-kontakt").click(function() {
        $('html,body').animate({
                scrollTop: $("#formularz").offset().top},
            'slow');
    });


});
