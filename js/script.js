// SPIS FUNKCJI TOMASZA
// 1. ADDING CLASS TO HEADER WHEN SCROLLBAR > 50
// 2. ADDING CLASS TO LINKS IN HEADER AFTER CLICKING
// 3. FUNCTION "changeHeroImage" WHICH CHANGES IMAGE IN HERO (TWO IMAGES)
// 4. LINKS IN HEADER - SCROLLING TO RIGHT PARAGRAPHS AFTER CLICKING
// 5. FUNCTION WHICH CHANGES PAGE LANGUAGE


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

    $(document).scroll(function(){
        var scroll = $(this).scrollTop();

        if (scroll >= $("#start").offset().top && scroll <= $("#functionsTitle").offset().top) {
            $('.menuItem').removeClass('menuItemSelected');
            $('#link-start').addClass('menuItemSelected');
        }

        if (scroll >= $("#functionsTitle").offset().top && scroll <= $("#ourTeam").offset().top) {
            $('.menuItem').removeClass('menuItemSelected');
            $('#link-produkt').addClass('menuItemSelected');
        }

        if (scroll >= $("#ourTeam").offset().top - 2 && scroll <= $("#formToSend").offset().top) {
            $('.menuItem').removeClass('menuItemSelected');
            $('#link-zespol').addClass('menuItemSelected');
        }

        if (scroll >= $("#formToSend").offset().top - 2) {
            $('.menuItem').removeClass('menuItemSelected');
            $('#link-kontakt').addClass('menuItemSelected');
        }

    });



// 3. FUNCTION WHICH CHANGES IMAGE IN HERO (TWO IMAGES)

    var changeHeroImage = function(firstHero, secondHero) {

        firstHero.fadeIn(1500);
        secondHero.fadeOut(1500);

        setTimeout(function() {
            changeHeroImage(secondHero,firstHero)
        } , 6000);

    };

    changeHeroImage($('#firstHero'),$('#secondHero'));

// 4. LINKS IN HEADER - SCROLLING TO RIGHT PARAGRAPHS AFTER CLICKING

    $("#link-start").click(function() {
        $('html,body').animate({
                scrollTop: $("#start").offset().top},
            'slow');
    });

    $("#link-produkt").click(function() {
        $('html,body').animate({
                scrollTop: $("#functionsTitle").offset().top},
            'slow');
    });

    $("#link-zespol").click(function() {
        $('html,body').animate({
                scrollTop: $("#ourTeam").offset().top},
            'slow');
    });

    $("#link-kontakt").click(function() {
        $('html,body').animate({
                scrollTop: $("#formToSend").offset().top},
            'slow');
    });

// 5. FUNCTION WHICH CHANGES PAGE LANGUAGE


    $('#jQuerylangEngBtn').click(function () {
            $('.pl').addClass('hidePolishTxt');
            $('.engBlock').addClass('engBlockElement');
            $('.engInlineBlock').addClass('engInlineBlockElement');
            $('.engInline').addClass('engInlineElement');
        });

    $('#jQuerylangPlBtn').click(function () {
        $('.engBlock').removeClass('engBlockElement');
        $('.engInlineBlock').removeClass('engInlineBlockElement');
        $('.engInline').removeClass('engInlineElement');
        $('.pl').removeClass('hidePolishTxt');
    });

});

var date = new Date();
var actualYear = date.getFullYear();
document.getElementById("currentYear").innerHTML = actualYear;
