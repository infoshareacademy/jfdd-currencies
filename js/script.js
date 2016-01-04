// SPIS FUNKCJI TOMASZA
// 1. ADDING CLASS TO HEADER WHEN SCROLLBAR > 50
// 2. ADDING CLASS TO LINKS IN HEADER AFTER CLICKING
// 3. FUNCTION "changeHeroImage" WHICH CHANGES IMAGE IN HERO (TWO IMAGES)
//      3.1 CALLING THIS FUNCTION
// 4. LINKS IN HEADER - SCROLLING TO RIGHT PARAGRAPHS AFTER CLICKING

$(document).ready(function() {

//1. ADDING CLASS TO HEADER WHEN SCROLLBAR > 50

    $(window).on("scroll", function () {
        if($(window).scrollTop() > 50) {
            $("header").addClass("active");
            $("#quick_contact").addClass("active");

        } else {
            $("header").removeClass("active");
            $("#quick_contact").removeClass("active");
        }
    });

//2. ADDING CLASS TO LINKS IN HEADER AFTER CLICKING

    $(".menuItem").click(function(){
        $('.menuItem').removeClass('menuItemSelected');
        $(this).addClass('menuItemSelected');
    });

// 3. FUNCTION WHICH CHANGES IMAGE IN HERO (TWO IMAGES)

    var changeHeroImage = function(firstHero, secondHero) {

        firstHero.fadeIn(1500);
        secondHero.fadeOut(1500);

        setTimeout(function() {
            func(secondHero,firstHero)
        } , 6000);

    };

// 3.1 CALLING FUNCTION "changeHeroImage"

    changeHeroImage($('#firstHero'),$('#secondHero'));

// 4. LINKS IN HEADER - SCROLLING TO RIGHT PARAGRAPHS AFTER CLICKING

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
