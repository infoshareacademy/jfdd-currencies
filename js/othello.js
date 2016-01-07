var typeTd = 'czarny';
arrayListWhite = new Array();
arrayListBlack = new Array();

$('.othelloSquare').click(function () {
    if (!$(this).hasClass('czarny') && !$(this).hasClass('bialy')) {
        if (typeTd == 'czarny') {

            $(this).html('<img src="image/zlotaMoneta.jpg" class="monetaGry">');
            typeTd = 'bialy';
            $(this).addClass('czarny');
            takeCoin($(this), 'bialy');
            arrayListWhite.push($(this).attr('id'));
            for (i = 0; i < arrayListWhite.length; i++) {

            }

        }
        else {
            $(this).html('<img src="image/srebrnaMoneta.jpg" class="monetaGry">');
            typeTd = 'czarny';
            $(this).addClass('bialy');
            takeCoin($(this), 'czarny');
            arrayListBlack.push($(this).attr('id'));
        }
    }

});
function takeCoin(ClickedTd) {
    idClickedTd = ClickedTd.attr('id');
    //for sprawdzajacy czy moge psotawic monete(wszystkie pola dookola)
    //sprawdzanie liniowo
    //sprawdzanie czy sa pomiedzy monety i ich zamiana

    for (i = -1; i <= 1; i++) {
        for (j = -1; j <= 1; j++) {
            //  var checkedTd=clickedTd;
        }
    }


}
$('#startOthelloButton').click(function () {
    $('.othelloSquare').removeClass('czarny');
    $('.othelloSquare').removeClass('bialy');
    $('.othelloSquare').html('');
    $('#44').html('<img src="image/zlotaMoneta.jpg" class="monetaGry">');
    $('#44').addClass('czarny');
    $('#54').html('<img src="image/zlotaMoneta.jpg" class="monetaGry">');
    $("#54").addClass('czarny');
    $('#45').html('<img src="image/srebrnaMoneta.jpg" class="monetaGry">');
    $('#45').addClass('bialy');
    $('#55').html('<img src="image/srebrnaMoneta.jpg" class="monetaGry">');
    $("#55").addClass('bialy');
});
/*
 rightSquare = checkFirstIdPart + checkSecondIdPart;
 rightSquare = parseFloat(rightSquare);

 for ( nextSquare = 1; nextSquare > 9; nextSquare++) {
 rightSquareId = rightSquareId + nextSquare;
 rightSquareClass = rightSquareId.attr('class');
 if (!rightSquareClass == classNextTd) {
 countCoin[nextSquare] = rightSquareId;
 }
 else {
 for (x = 1; countCoin[x].length; x++) {
 $(countCoin[x]).html('<img src="image/srebrnaMoneta.jpg" class="monetaGry">');
 }
 }
 cordY=$(this).attr('id').charAt(0);
 cordX=$(this).attr('id').charAt(1);
 }
 */