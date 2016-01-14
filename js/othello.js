var typeTd = 'czarny';
var pointStart1 = 20;
var pointStart2 = 20;
var actualRate = 1.2;
var buyRate = actualRate *1.2;
var sellRate  = actualRate* 0.8;
var pointOvertaking = 10 * buyRate;



$('.othelloSquare').click(function () {

    if (!$(this).hasClass('czarny') && !$(this).hasClass('bialy')) {


        if (typeTd == 'czarny') {

            typeTd = 'bialy';
            if (checkClickedTd($(this))) {
                pickCoin($(this), imgWhite);
                changeCoin($(this), typeTd, 'czarny',imgWhite);
                points1($(this));
                $('.pointsOfPlayerTwo').addClass('animateAreaScore');
                $('.pointsOfPlayerOne').removeClass('animateAreaScore');
            }
        }
        else {
            typeTd = 'czarny';
            if (checkClickedTd($(this))) {
                pickCoin($(this), imgBlack);
                changeCoin($(this), typeTd, 'bialy',imgBlack);
                points2($(this));
                $('.pointsOfPlayerOne').addClass('animateAreaScore');
                $('.pointsOfPlayerTwo').removeClass('animateAreaScore');
            }
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

                                if($(cordsXY).hasClass('bialy')){
                                    pointStart1 =  pointStart1 + 10 + Math.random();
                                    $('.areaPoints1').html(pointStart1.toFixed(2));
                                }

                                if($(cordsXY).hasClass('czarny')){
                                    pointStart2 = pointStart2 + 10 + Math.random();
                                    $('.areaPoints2').html(pointStart2.toFixed(2));
                                }

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
    pointStart1 = 20;
    pointStart2 = 20;
    $('.areaPoints1').html(pointStart1);
    $('.areaPoints2').html(pointStart2);
    $('.pointsOfPlayerOne').addClass('animateAreaScore');
    var namePlayer1 = prompt("Please enter your name", "Gracz 1");
    var namePlayer2 = prompt("Please enter your name", "Gracz 2");

    $('#player1').html(namePlayer1);
    $('#player2').html(namePlayer2);
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

function points1() {
    pointStart1 = pointStart1 + 10;
    $('.areaPoints1').html(pointStart1.toFixed(2));
};

function points2() {
    pointStart2 = pointStart2 + 10;
    $('.areaPoints2').html(pointStart2.toFixed(2));
};



function randomCurrencyGame (){
    var randomCurrencyPlayer= Math.floor( Math.random() * ( 0 + 5- 1 ) ) ;
    var randomCurrencyPlayer2= Math.floor( Math.random() * ( 0 + 5 - 1 ) ) ;
    while(randomCurrencyPlayer == randomCurrencyPlayer2){
        randomCurrencyPlayer2= Math.floor( Math.random() * ( 0 + 5 - 1 ) ) ;
    }
    var allCurrencyType = ['image/monetaZloty.png','image/monetaFunt.png','image/monetaEuro.png','image/monetaKopiejka.png','image/monetaKorona.png'];
    player1 =allCurrencyType[randomCurrencyPlayer];
    player2 =allCurrencyType[randomCurrencyPlayer2];
    imgWhite = '<img src='+player1+' class="gameCoin">';
    imgBlack = '<img src='+player2+' class="gameCoin">';

}

$('.actualBuyRate').html(buyRate);
$('.actualSellRate').html(sellRate);


