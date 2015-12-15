
function sprawdz() {
    // dodac sprawdzanie minuty
    var czas = data.getTime() / 1000;
    var nowaData = new Date();
    var nowyCzas = nowaData.getTime() / 1000;
    var sprawdzenieCzasu = nowyCzas- czas ;
    if (sprawdzenieCzasu>0) {

        var error_mail = '';
        var error_numer = '';
        mail = document.getElementById('email').value;
// sprawdzenie poprawno�ci adresu email
        var znaki_mail = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        var spr_mail = znaki_mail.test(mail);
        if (mail == '') {
            var error_mail = 'Pole nie może być puste';
        }
        else {
            if (!spr_mail) {
                var error_mail = 'Niepoprawny adres email';
            }
        }
        var numer = document.getElementById('numer').value;
// sprawdzenie poprawno�ci numeru
        var znaki_numer = /^[5-8]{1}[0-9]{8}$/;
        var znaki_numer_domowy = /^[0+]{0,1}[1-9]{0,2}[1-9]{1}[0-9]{6}$/;
        var znaki_numer_platny = /^[7]{1}[0-1]{1}[0-9]{1}[0-9]{6}$/;
        var spr_numer = znaki_numer.test(numer);
        var spr_numer_domowy = znaki_numer_domowy.test(numer);
        var spr_numer_platny = znaki_numer_platny.test(numer);
        if (numer == '') {
            var error_numer = 'Pole nie może być puste';
        }
             if(spr_numer_platny){
                var error_numer = 'Nie podawaj płatnego numeru';
             }

             else if (!spr_numer && !spr_numer_domowy) {
                var error_numer = 'Musisz wpisać prawdziwy numer';

            }
        else {
            // jesli brak bledow wysylanie
        }
        if (!error_mail && !error_numer) {
            var komunikat_numer = document.getElementById('Kod_Komunikat_numer');
            komunikat_numer.innerHTML = '';
            var komunikat_mail = document.getElementById('Kod_Komunikat_mail');
            komunikat_mail.innerHTML = '';
            wysylka.submit();
        }
        // jak sa bledy to komunikaty
        if (error_numer) {
            var komunikat_numer = document.getElementById('Kod_Komunikat_numer');
            komunikat_numer.innerHTML = error_numer;
        }
        else {
            var komunikat_numer = document.getElementById('Kod_Komunikat_numer');
            komunikat_numer.innerHTML = '';
        }
        if (error_mail) {
            var komunikat_mail = document.getElementById('Kod_Komunikat_mail');
            komunikat_mail.innerHTML = error_mail;
        }
        else {
            var komunikat_mail = document.getElementById('Kod_Komunikat_mail');
            komunikat_mail.innerHTML = '';
        }
    }
    else{
        data = new Date();
    }
}
  
