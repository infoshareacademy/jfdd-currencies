var typeTd = 'czarny';
var randomCoin;

$('.othelloSquare').click(function () {
    if (!$(this).hasClass('czarny') && !$(this).hasClass('bialy')) {
        if (typeTd == 'czarny') {

          //  var imgWhite = '<img src="image/srebrnaMoneta.png" class="monetaGry">';
            typeTd = 'bialy';
            if (checkClickedTd($(this))) {
                pickCoin($(this), imgWhite);
                changeCoin($(this), typeTd, 'czarny',imgWhite);
            }
        }
        else {
           // var imgBlack = ' <img src="image/zlotaMoneta.png" class="monetaGry">';
            typeTd = 'czarny';
            if (checkClickedTd($(this))) {
                pickCoin($(this), imgBlack);
                changeCoin($(this), typeTd, 'bialy',imgBlack);
            }
            arrayListBlack.push($(this).attr('id'));
        }
    }


});
function checkClickedTd(clickedTd) {
    idClickedTd = clickedTd.attr('id');
    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
            var cordYclick = parseInt(idClickedTd.charAt(0)),
                cordXclick = parseInt(idClickedTd.charAt(1)),
                cordX = cordXclick + (j),
                cordY = cordYclick + (i),
                cordsXY = '#' + cordY + cordX;

            if ($(cordsXY).hasClass('bialy') || $(cordsXY).hasClass('czarny')) {
                return true;
            }
        }
    }


}
function pickCoin(clickedId, imgCoin) {
    var idClickedTd = clickedId.attr('id');
    $('#' + idClickedTd).html(imgCoin).addClass(typeTd);

}
function changeCoin(clickedId, classTd, classChange, typeImg) {
    var coinToChange = [];
    for (var cordYnextTd = -1; cordYnextTd <= 1; cordYnextTd++) {
        for (var cordXnextTd = -1; cordXnextTd <= 1; cordXnextTd++) {
            idClickedTd = clickedId.attr('id');
            var cordYclick = parseInt(idClickedTd.charAt(0)),
                cordXclick = parseInt(idClickedTd.charAt(1));

            while (true) {
                //pomiń pole klikane
                if (cordYnextTd == 0 && cordXnextTd == 0) {
                    break;
                }
                cordXclick = cordXclick + (cordXnextTd);
                cordYclick = cordYclick + (cordYnextTd);
                var cordsXY = '#' + cordYclick + cordXclick;

                //jeśli pole nie jest puste
                if ($(cordsXY).hasClass('czarny') || $(cordsXY).hasClass('bialy')) {
                    //jeśli sprawdzane pole ma taką samą klasę jak pole klikane
                    if ($(cordsXY).hasClass(classTd)) {
                        //jeśli w tablicy znajdują się elementy
                        if (coinToChange.length > 0) {
                            //zamień wszystkie klasy na klasę pola klikanego
                            for (var arrayLength = 0; arrayLength < coinToChange.length; arrayLength++) {
                                $(coinToChange[arrayLength]).removeClass(classChange);
                                $(coinToChange[arrayLength]).addClass(classTd);
                                $(coinToChange[arrayLength]).html(typeImg);

                            }
                            //wyczyść pola do zamiany
                            coinToChange = [];
                        }
                        //jeśli badana moneta jest przeciwna dodaj pozycję do tablicy
                    } else if (($(cordsXY).hasClass('czarny') || $(cordsXY).hasClass('bialy')) && $(cordsXY).hasClass(classChange)) {
                        coinToChange.push(cordsXY);
                    }
                    //jeśli pole jest puste, zakończ cordYnextTd badaj następne
                } else {
                    coinToChange = [];
                    break
                }
            }
        }
    }


}
$('#startOthelloButton').click(function () {
    randomCurrencyGame();
    $('.othelloSquare').removeClass('czarny bialy').html('');


    $('#44').html(imgBlack).addClass('czarny');

    $('#54').html(imgBlack).addClass('czarny');

    $('#45').html(imgWhite).addClass('bialy');

    $('#55').html(imgWhite).addClass('bialy');

    $('#gameTextContener').removeClass('stopGameTexts');
    $('#gameTextContener p').addClass('startGameTexts');
    setTimeout(function(){
        $('#gameTextContener p').removeClass('startGameTexts');
        $('#gameTextContener').addClass('stopGameTexts');
    }, 3200);

});



function randomCurrencyGame (){
    var randomCurrencyPlayer= Math.floor( Math.random() * ( 0 + 5- 1 ) ) ;
    var randomCurrencyPlayer2= Math.floor( Math.random() * ( 0 + 5 - 1 ) ) ;
    while(randomCurrencyPlayer == randomCurrencyPlayer2){
        randomCurrencyPlayer2= Math.floor( Math.random() * ( 0 + 5 - 1 ) ) ;
    }
    var allCurrencyType = ['image/monetaZloty.jpg','image/monetaFunt.jpg','image/monetaEuro.jpg','image/monetaKopiejka.jpg','image/monetaKorona.jpg'];
    player1 =allCurrencyType[randomCurrencyPlayer];
    player2 =allCurrencyType[randomCurrencyPlayer2];
    imgWhite = '<img src='+player1+' class="gameCoin">';
    imgBlack = '<img src='+player2+' class="gameCoin">';

}


