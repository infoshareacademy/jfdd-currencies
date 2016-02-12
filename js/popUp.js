$(document).ready(function () {

$('.closePopUp').click(function()   {
    $('#PopUp-wrapper').attr('style', 'display:none');
});

$('.logInButton').click(function()  {
    $('#PopUp-wrapper').removeAttr('style', 'display:none');
})

});


    //$('.socialMediaLogIn').click( function()    {
    //    localStorage.setItem("popupWasShown",1);
    //    //location.reload();
    //
    //        //setTimeout(function () {
    //        //    location.reload();
    //        //}, 2000);
    //});
    //
    //(function () {
    //if(localStorage.getItem("popupWasShown") != 1)  {
    //    $('#PopUp-wrapper').removeAttr('style', 'display:none');
    //}
    //
    //}());
    //
