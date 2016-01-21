// SPIS FUNKCJI
// 1. ADDING CLASS TO HEADER WHEN SCROLLBAR > 50
// 2. ADDING CLASS TO LINKS IN HEADER AFTER CLICKING
// 3. FUNCTION "changeHeroImage" WHICH CHANGES IMAGE IN HERO (TWO IMAGES)
// 4. LINKS IN HEADER - SCROLLING TO RIGHT PARAGRAPHS AFTER CLICKING
// 5. COOKIE (SET / GET)
//6. FUNCTION WHICH CHANGES PAGE LANGUAGE, REMEMBER LANGUAGE


$(document).ready(function () {

//1. ADDING CLASS TO HEADER WHEN SCROLLBAR > 50

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $("header").addClass("active");
            $("#quick_contact").addClass("active");

        } else {
            $("header").removeClass("active");
            $("#quick_contact").removeClass("active");
        }
    });

//2. ADDING CLASS TO LINKS IN HEADER AFTER CLICKING

    $(document).scroll(function () {
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

    var changeHeroImage = function (firstHero, secondHero) {

        firstHero.fadeIn(1500);
        secondHero.fadeOut(1500);

        setTimeout(function () {
            changeHeroImage(secondHero, firstHero)
        }, 6000);

    };

    changeHeroImage($('#firstHero'), $('#secondHero'));

// 4. LINKS IN HEADER - SCROLLING TO RIGHT PARAGRAPHS AFTER CLICKING

    $("#link-start").click(function () {
        $('html,body').animate({
                scrollTop: $("#start").offset().top
            },
            'slow');
    });

    $("#link-produkt").click(function () {
        $('html,body').animate({
                scrollTop: $("#functionsTitle").offset().top
            },
            'slow');
    });

    $("#link-zespol").click(function () {
        $('html,body').animate({
                scrollTop: $("#ourTeam").offset().top
            },
            'slow');
    });

    $("#link-kontakt").click(function () {
        $('html,body').animate({
                scrollTop: $("#formToSend").offset().top
            },
            'slow');
    });

// 5. COOKIE (SET / GET)

    function setCookie(cookieName, cookieValue, expireDays) {
        var d = new Date();
        d.setTime (d.getTime() + (expireDays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + ";" + expires;
    }

    function getCookie(cookieName) {
        var name = cookieName + "=";
        var cookieArray = document.cookie.split(';');
        for (var i = 0; i < cookieArray.length; i++) {
            var cookie = cookieArray[i];
            while (cookie.charAt(0) == " ") cookie = cookie.substring(1);
            if (cookie.indexOf(name) == 0) return cookie.substring(name.length, cookie.length);
        }
        return "";
    }

// 6. FUNCTION WHICH CHANGES PAGE LANGUAGE, REMEMBER LANGUAGE

    function changeIntoEnglish() {
        $('.pl').addClass('hidePolishTxt');
        $('.engBlock').addClass('engBlockElement');
        $('.engInlineBlock').addClass('engInlineBlockElement');
        $('.engInline').addClass('engInlineElement');
    }

    function changeIntoPolski() {
        $('.engBlock').removeClass('engBlockElement');
        $('.engInlineBlock').removeClass('engInlineBlockElement');
        $('.engInline').removeClass('engInlineElement');
        $('.pl').removeClass('hidePolishTxt');
    }

    $('#jQuerylangEngBtn').click(function () {
        changeIntoEnglish();
        $('.sendButton').val('send');

        setCookie('langCookie', 'english', 365);
    });

    $('#jQuerylangPlBtn').click(function () {
        $('.sendButton').val('wyślij');
        changeIntoPolski();

        setCookie('langCookie', 'polski', 365);
    });

    var langCookieValue = (getCookie('langCookie'));

    if (langCookieValue === 'english') {
        changeIntoEnglish();
    }

    else {
        changeIntoPolski();
    }


});

var date = new Date();
var actualYear = date.getFullYear();
document.getElementById("currentYear").innerHTML = actualYear;


