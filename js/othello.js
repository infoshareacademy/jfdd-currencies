var typeTd = 'czarny';
arrayListWhite = [];
arrayListBlack = [];

$('.othelloSquare').click(function () {
    if (!$(this).hasClass('czarny') && !$(this).hasClass('bialy')) {
        if (typeTd == 'czarny') {
            imgWhite = '<img src="image/zlotaMoneta.png" class="monetaGry">';
            typeTd = 'bialy';
            pickCoin($(this), imgWhite, typeTd);
            arrayListWhite.push($(this).attr('id'));
            //zrobic ifa czy funkcja ok i wywolac funkcje wstawiajaca monete

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
    var idClickedTd = ClickedTd.attr('id');
    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
            var cordYclick = parseInt(idClickedTd.charAt(0)),
                cordXclick = parseInt(idClickedTd.charAt(1)),
                cordX = cordXclick + (j),
                cordY = cordYclick + (i),
                cordsXY = '#' + cordY + cordX;

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
    arrayListBlack.push(44);
    $('#54').html('<img src="image/zlotaMoneta.png" class="monetaGry">').addClass('czarny');
    arrayListBlack.push(54);
    $('#45').html('<img src="image/srebrnaMoneta.png" class="monetaGry">').addClass('bialy');
    arrayListWhite.push(45);
    $('#55').html('<img src="image/srebrnaMoneta.png" class="monetaGry">').addClass('bialy');
    arrayListWhite.push(55);
    arrayListWhite = [];
    arrayListBlack = [];

});
