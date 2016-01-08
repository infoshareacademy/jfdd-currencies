$(function(){

function setCookie(cname, cvalue, exdays)   {
    var d = new Date();
    d.setTime (d.getTime() +(exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
}
$('#jQuerylangEngBtn').click(function() {
    setCookie('langCookie', 'english', 30);
});

$('#jQuerylangPlBtn').click(function () {
    setCookie('langCookie', 'polski', 30);
});

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
getCookie('langCookie');

console.log(getCookie('langCookie'));


var cookieValue= (getCookie('langCookie'));

if ( cookieValue=='english' )      {
    $('.pl').addClass('hidePolishTxt');
    $('.engBlock').addClass('engBlockElement');
    $('.engInlineBlock').addClass('engInlineBlockElement');
    $('.engInline').addClass('engInlineElement');
}

else    {
    $('.engBlock').removeClass('engBlockElement');
    $('.engInlineBlock').removeClass('engInlineBlockElement');
    $('.engInline').removeClass('engInlineElement');
    $('.pl').removeClass('hidePolishTxt');
}


});