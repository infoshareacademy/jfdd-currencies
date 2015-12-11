
        function sprawdz()
        {
            var error_mail = '';
            var error_numer = '';
            mail = document.getElementById('email').value;
// sprawdzenie poprawno�ci adresu email
            var znaki_mail = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
            var spr_mail = znaki_mail.test(mail);
            if(mail == ''){
                var error_mail = 'Pole nie może być puste';
            }
            else{
                if (!spr_mail) {
                    var error_mail = 'Niepoprawny adres email';
                }
            }
            var numer = document.getElementById('numer').value;
// sprawdzenie poprawno�ci numeru
            var znaki_numer = /^[0-9]{9}$/;
            var spr_numer = znaki_numer.test(numer);
            if(numer == ''){
                var error_numer = 'Pole nie może być puste';
            }
            else{
                if (!spr_numer) {
                    var error_numer = 'Musisz wpisać prawdziwy numer';
                }
		// jesli brak bledow wysylanie
            }
            if(!error_mail && !error_numer){
                var komunikat_numer = document.getElementById('Kod_Komunikat_numer');
                komunikat_numer.innerHTML = '';
                var komunikat_mail = document.getElementById('Kod_Komunikat_mail');
                komunikat_mail.innerHTML = '';
                wysylka.submit();
            }
			// jak sa bledy to komunikaty
            if(error_numer){
                var komunikat_numer = document.getElementById('Kod_Komunikat_numer');
                komunikat_numer.innerHTML = error_numer;
            }
            else{
                var komunikat_numer = document.getElementById('Kod_Komunikat_numer');
                komunikat_numer.innerHTML = '';
            }
            if(error_mail){
                var komunikat_mail = document.getElementById('Kod_Komunikat_mail');
                komunikat_mail.innerHTML = error_mail;
            }
            else{
                var komunikat_mail = document.getElementById('Kod_Komunikat_mail');
                komunikat_mail.innerHTML = '';
            }
        }
  
