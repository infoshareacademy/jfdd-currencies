
function sprawdz() {
    // dodac sprawdzanie minuty
    var czas = data.getTime() / 1000;
    var nowaData = new Date();
    var nowyCzas = nowaData.getTime() / 1000;
    var sprawdzenieCzasu = nowyCzas- czas ;
    if (sprawdzenieCzasu>2) {
        sprawdzaniePoprawnosciMail ();
        sprawdzeniePoprawnosciNumeru();
        generowanieBledow();

    }
    else{
        data = new Date();
    }
}
function sprawdzaniePoprawnosciMail (){

    var mail = document.getElementById('email').value;
// sprawdzenie poprawnosci adresu email
    var znaki_mail = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
    var spr_mail = znaki_mail.test(mail);
    if (mail == '') {
        error_mail = 'Pole nie może być puste';
    }
    else {
        if (!spr_mail) {
            error_mail = 'Niepoprawny adres email';
        }
    }
}
function sprawdzeniePoprawnosciNumeru(){

    var numer = document.getElementById('numer').value;
    numer = numer.replace(new RegExp(" ","g"),"");
    numer = numer.replace(new RegExp("-","g"),"");
// sprawdzenie poprawnosci numeru
    var znaki_numer = /^[5-8]{1}[0-9]{8}$/;
    var znaki_numer_domowy = /^[0+]{0,1}[1-9]{0,2}[1-9]{0,2}[1-9]{1}[0-9]{6}$/;
    var znaki_numer_platny = /^[7]{1}[0-1]{1}[0-9]{1}[0-9]{6}$/;
    var spr_numer = znaki_numer.test(numer);
    var spr_numer_domowy = znaki_numer_domowy.test(numer);
    var spr_numer_platny = znaki_numer_platny.test(numer);
    if (numer == '') {
        error_numer = 'Pole nie może być puste';
    }
    else {
        if (spr_numer_platny) {
            error_numer = 'Nie podawaj płatnego numeru';
        }

        else if (!spr_numer && !spr_numer_domowy) {
            error_numer = 'Musisz wpisać prawdziwy numer';

        }
    }

}
function generowanieBledow(){
    if (!error_mail && !error_numer) {
        komunikat_numer = document.getElementById('Kod_Komunikat_numer');
        komunikat_numer.innerHTML = '';
        komunikat_mail = document.getElementById('Kod_Komunikat_mail');
        komunikat_mail.innerHTML = '';
        wysylka.submit();
    }
    // jak sa bledy to komunikaty
    if (error_numer) {
        komunikat_numer = document.getElementById('Kod_Komunikat_numer');
        komunikat_numer.innerHTML = error_numer;
    }
    else {
        komunikat_numer = document.getElementById('Kod_Komunikat_numer');
        komunikat_numer.innerHTML = '';
    }
    if (error_mail) {
        komunikat_mail = document.getElementById('Kod_Komunikat_mail');
        komunikat_mail.innerHTML = error_mail;
    }
    else {
        komunikat_mail = document.getElementById('Kod_Komunikat_mail');
        komunikat_mail.innerHTML = '';
    }

}