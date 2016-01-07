var typeTd = 'czarny';

$('.othelloSquare').click(function () {
    if (!$(this).hasClass('czarny') && !$(this).hasClass('bialy')) {
        if (typeTd == 'czarny') {
            $(this).html('<img src="image/zlotaMoneta.jpg" class="monetaGry">');
            typeTd = 'bialy';
            $(this).addClass('czarny');
            takeCoin($(this), 'bialy');
        }
        else {
            $(this).html('<img src="image/srebrnaMoneta.jpg" class="monetaGry">');
            typeTd = 'czarny';
            $(this).addClass('bialy');
            takeCoin($(this), 'czarny');
        }
    }

});
function takeCoin(ClickedTd) {
    idClickedTd = ClickedTd.attr('id');
    //for sprawdzajacy czy moge psotawic monete(wszystkie pola dookola)
    //sprawdzanie liniowo
    //sprawdzanie czy sa pomiedzy monety i ich zamiana

    for(i=-1;i<=1;i++){
        for(j=-1;j<=1;j++){
         //  var checkedTd=clickedTd;
        }
    }


    $('#raport').html(idClickedTd);


}
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

}
    */