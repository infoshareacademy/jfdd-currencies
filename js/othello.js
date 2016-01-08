var typeTd = 'czarny';
arrayListWhite =[];
arrayListBlack = [];

$('.othelloSquare').click(function () {
    if (!$(this).hasClass('czarny') && !$(this).hasClass('bialy')) {
        if (typeTd == 'czarny') {
            imgWhite = '<img src="image/zlotaMoneta.png" class="monetaGry">';

            typeTd = 'bialy';
            pickCoin($(this), imgWhite, typeTd);
            arrayListWhite.push($(this).attr('id'));
           // for (i = 0; i < arrayListWhite.length; i++) {

          //  }

        }
        else {
            imgBlack = ' <img src="image/srebrnaMoneta.png" class="monetaGry">';
            typeTd = 'czarny';
            pickCoin($(this), imgBlack, typeTd);
            arrayListBlack.push($(this).attr('id'));
        }
    }

});
function pickCoin(ClickedTd, imgCoin, typeClass) {
    idClickedTd = ClickedTd.attr('id');
    for (i = -1; i <= 1; i++) {
        for (j = -1; j <= 1; j++) {
            cordYclick = parseInt(idClickedTd.charAt(0));
            cordXclick = parseInt(idClickedTd.charAt(1));
            cordX = cordXclick + (j);
            cordY = cordYclick + (i);
            cordsXY = '#' + cordX + cordY;
            // $('#raport').html(cordsXY);
            if ($(cordsXY).hasClass('bialy') || $(cordsXY).hasClass('czarny')) {


                $('#' + idClickedTd).html(imgCoin).addClass(typeClass);

                break;
            }
        }
    }


}
$('#startOthelloButton').click(function () {
    $('.othelloSquare').removeClass('czarny bialy').html('');


    $('#44').html('<img src="image/zlotaMoneta.png" class="monetaGry">').addClass('czarny');

    $('#54').html('<img src="image/zlotaMoneta.png" class="monetaGry">').addClass('czarny');

    $('#45').html('<img src="image/srebrnaMoneta.png" class="monetaGry">').addClass('bialy');

    $('#55').html('<img src="image/srebrnaMoneta.png" class="monetaGry">').addClass('bialy');

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