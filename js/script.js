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

    $(".menuItem").click(function(){
        $('.menuItem').removeClass('menuItemSelected');
        $(this).addClass('menuItemSelected');
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
                scrollTop: $("#formToSend").offset().top},
            'slow');
    });

// 5. COOKIE (SET / GET)

    function setCookie(cname, cvalue, exdays)   {
        var d = new Date();
        d.setTime (d.getTime() +(exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires;
    }

    function getCookie(cname)   {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++)  {
            var c = ca[i];
            while (c.charAt(0)==" ") c = c.substring(1);
            if (c.indexOf(name) ==0) return c.substring(name.length, c.length);
        }
        return "";
    }


// 6. FUNCTION WHICH CHANGES PAGE LANGUAGE, REMEMBER LANGUAGE

    function changeIntoEnglish()    {
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
        setCookie('langCookie', 'english', 30);
        });

    $('#jQuerylangPlBtn').click(function () {
        changeIntoPolski();
        setCookie('langCookie', 'polski', 30);
    });

    var langCookieValue= (getCookie('langCookie'));

    if ( langCookieValue==='english' )      {
        changeIntoEnglish();
    }

    else    {
        changeIntoPolski();
    }



});

var date = new Date();
var actualYear = date.getFullYear();
document.getElementById("currentYear").innerHTML = actualYear;
