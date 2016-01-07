
var typeTd = 'czarny' ;

$('.othelloSquare').click(function(){
    if(!$(this).hasClass('czarny') && !$(this).hasClass('bialy')) {
        if (typeTd == 'czarny') {
            $(this).html('<img src="image/zlotaMoneta.jpg" class="monetaGry">');
            typeTd = 'bialy';
            $(this).addClass('czarny');
            takeCoin($(this));
        }
        else {
            $(this).html('<img src="image/srebrnaMoneta.jpg" class="monetaGry">');
            typeTd = 'czarny';
            $(this).addClass('bialy');
            takeCoin($(this));
        }
    }

});
function takeCoin (ClickedTd) {
    idClickedTd =ClickedTd.attr('id');
    $('#raport').html(idClickedTd);
    checkHorizontal=idClickedTd.charAt(1);
    checkVertical=idClickedTd.charAt(0);
    if(){

    }
}
